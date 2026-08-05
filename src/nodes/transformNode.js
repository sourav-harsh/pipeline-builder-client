// transformNode.js

import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const fields = [
    {
      name: 'transformType',
      label: 'Transform Type',
      type: 'select',
      defaultValue: 'map',
      options: [
        { value: 'map', label: 'Map' },
        { value: 'filter', label: 'Filter' },
        { value: 'reduce', label: 'Reduce' },
        { value: 'sort', label: 'Sort' },
        { value: 'join', label: 'Join' }
      ]
    },
    {
      name: 'expression',
      label: 'Expression',
      type: 'textarea',
      defaultValue: 'item => item.value * 2',
      placeholder: 'Enter JavaScript expression'
    }
  ];

  const handles = [
    {
      type: 'target',
      position: 'left',
      id: `${id}-input`
    },
    {
      type: 'source',
      position: 'right',
      id: `${id}-output`
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="Transform"
      fields={fields}
      handles={handles}
      style={{ backgroundColor: '#fce4ec' }}
    />
  );
}
