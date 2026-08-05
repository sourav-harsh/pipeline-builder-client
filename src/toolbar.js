// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="toolbar-container">
            <h3 style={{ margin: '0 0 16px 0', color: '#2d3748', fontSize: '18px', fontWeight: '600' }}>
                Pipeline Components
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='condition' label='Condition' />
                <DraggableNode type='database' label='Database' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='transform' label='Transform' />
            </div>
        </div>
    );
};
