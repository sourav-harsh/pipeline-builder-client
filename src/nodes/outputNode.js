// outputNode.js

import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const fields = [
    {
      name: 'outputName',
      label: 'Name',
      type: 'text',
      defaultValue: data?.outputName || id.replace('customOutput-', 'output_')
    },
    {
      name: 'outputType',
      label: 'Type',
      type: 'select',
      defaultValue: data?.outputType || 'Text',
      options: [
        { value: 'Text', label: 'Text' },
        { value: 'Image', label: 'Image' }
      ]
    }
  ];

  const handles = [
    {
      type: 'target',
      position: 'left',
      id: `${id}-value`
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="Output"
      fields={fields}
      handles={handles}
    />
  );
}
