// databaseNode.js

import { BaseNode } from './BaseNode';

export const DatabaseNode = ({ id, data }) => {
  const fields = [
    {
      name: 'queryType',
      label: 'Query Type',
      type: 'select',
      defaultValue: 'select',
      options: [
        { value: 'select', label: 'SELECT' },
        { value: 'insert', label: 'INSERT' },
        { value: 'update', label: 'UPDATE' },
        { value: 'delete', label: 'DELETE' }
      ]
    },
    {
      name: 'tableName',
      label: 'Table Name',
      type: 'text',
      defaultValue: 'users'
    },
    {
      name: 'query',
      label: 'SQL Query',
      type: 'textarea',
      defaultValue: 'SELECT * FROM users WHERE id = ?'
    }
  ];

  const handles = [
    {
      type: 'target',
      position: 'left',
      id: `${id}-params`
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
      type="Database"
      fields={fields}
      handles={handles}
      style={{ backgroundColor: '#f3e5f5' }}
    />
  );
}
