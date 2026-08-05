// apiNode.js

import { BaseNode } from './BaseNode';

export const ApiNode = ({ id, data }) => {
  const fields = [
    {
      name: 'method',
      label: 'HTTP Method',
      type: 'select',
      defaultValue: 'GET',
      options: [
        { value: 'GET', label: 'GET' },
        { value: 'POST', label: 'POST' },
        { value: 'PUT', label: 'PUT' },
        { value: 'DELETE', label: 'DELETE' },
        { value: 'PATCH', label: 'PATCH' }
      ]
    },
    {
      name: 'url',
      label: 'API URL',
      type: 'text',
      defaultValue: 'https://api.example.com/data'
    },
    {
      name: 'headers',
      label: 'Headers (JSON)',
      type: 'textarea',
      defaultValue: '{\n  "Content-Type": "application/json"\n}'
    }
  ];

  const handles = [
    {
      type: 'target',
      position: 'left',
      id: `${id}-request`
    },
    {
      type: 'source',
      position: 'right',
      id: `${id}-response`
    },
    {
      type: 'source',
      position: 'right',
      id: `${id}-error`,
      style: { top: '70%' }
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="API"
      fields={fields}
      handles={handles}
      style={{ backgroundColor: '#e8f5e8' }}
    />
  );
}
