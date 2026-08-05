// textNode.js

import {useMemo, useState} from 'react';
import {BaseNode} from './BaseNode';

export const TextNode = ({id, data}) => {
    const [currText, setCurrText] = useState(data?.text || '{{input}}');

    // Extract variables from {{variable}} syntax
    const variables = useMemo(() => {
        const regex = /\{\{([^}]+)\}\}/g;
        const matches = [];
        let match;
        while ((match = regex.exec(currText)) !== null) {
            matches.push(match[1]);
        }
        return [...new Set(matches)]; // Remove duplicates
    }, [currText]);

    // Dynamic sizing based on text content
    const nodeStyle = useMemo(() => {
        const baseWidth = 200;
        const baseHeight = 150;
        const textLength = currText.length;

        // Calculate width based on text length (rough approximation)
        const width = Math.max(baseWidth, Math.min(400, baseWidth + textLength * 3));

        // Calculate height based on number of lines
        const lines = currText.split('\n').length;
        const height = Math.max(baseHeight, baseHeight + (lines - 1) * 20);

        return {width, height};
    }, [currText]);

    const handles = useMemo(() => {
        const baseHandles = [
            {
                type: 'source',
                position: 'right',
                id: `${id}-output`
            }
        ];

        // Add input handles for each variable
        variables.forEach((variable, index) => {
            baseHandles.push({
                type: 'target',
                position: 'left',
                id: `${id}-${variable}`,
                style: {top: `${30 + (index * 25)}%`}
            });
        });

        return baseHandles;
    }, [variables, id]);

    const customContent = ({fieldValues, handleFieldChange}) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <div>
                <label style={{fontSize: '12px', fontWeight: '500'}}>
                    Text:
                </label>
                <textarea
                    value={currText}
                    onChange={(e) => setCurrText(e.target.value)}
                    placeholder="Enter text with {{variables}}"
                    style={{
                        width: '95%',
                        padding: '4px',
                        minHeight: '60px',
                        height: '100%',
                        'border-radius': '6px',
                        resize: 'vertical'
                    }}
                />
            </div>
            {variables.length > 0 && (
                <div style={{fontSize: '10px', color: '#666'}}>
                    Variables: {variables.join(', ')}
                </div>
            )}
        </div>
    );

    return (
        <BaseNode
            id={id}
            data={data}
            type="Text"
            handles={handles}
            customContent={customContent}
            style={nodeStyle}
        />
    );
}
