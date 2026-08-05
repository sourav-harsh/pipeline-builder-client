// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  const handles = [
    {
      type: 'target',
      position: 'left',
      id: `${id}-system`,
      style: { top: `${100/3}%` }
    },
    {
      type: 'target',
      position: 'left',
      id: `${id}-prompt`,
      style: { top: `${200/3}%` }
    },
    {
      type: 'source',
      position: 'right',
      id: `${id}-response`
    }
  ];

  const customContent = () => (
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <span>This is a LLM.</span>
    </div>
  );

  return (
    <BaseNode
      id={id}
      data={data}
      type="LLM"
      handles={handles}
      customContent={customContent}
    />
  );
}
