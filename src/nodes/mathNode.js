// mathNode.js

import { BaseNode } from './BaseNode';

export const MathNode = ({ id, data }) => {
  const fields = [
    {
      name: 'operation',
      label: 'Operation',
      type: 'select',
      defaultValue: 'add',
      options: [
        { value: 'add', label: 'Addition (+)' },
        { value: 'subtract', label: 'Subtraction (-)' },
        { value: 'multiply', label: 'Multiplication (*)' },
        { value: 'divide', label: 'Division (/)' },
        { value: 'power', label: 'Power (^)' }
      ]
    },
    {
      name: 'value',
      label: 'Value',
      type: 'number',
      defaultValue: 0
    }
  ];

  const handles = [
    {
      type: 'target',
      position: 'left',
      id: `${id}-input1`
    },
    {
      type: 'target',
      position: 'left',
      id: `${id}-input2`,
      style: { top: '70%' }
    },
    {
      type: 'source',
      position: 'right',
      id: `${id}-result`
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="Math"
      fields={fields}
      handles={handles}
      style={{ backgroundColor: '#e3f2fd' }}
    />
  );
}
