// conditionNode.js

import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  const fields = [
    {
      name: 'condition',
      label: 'Condition',
      type: 'select',
      defaultValue: 'equals',
      options: [
        { value: 'equals', label: 'Equals (==)' },
        { value: 'not_equals', label: 'Not Equals (!=)' },
        { value: 'greater', label: 'Greater Than (>)' },
        { value: 'less', label: 'Less Than (<)' },
        { value: 'greater_equal', label: 'Greater or Equal (>=)' },
        { value: 'less_equal', label: 'Less or Equal (<=)' }
      ]
    },
    {
      name: 'compareValue',
      label: 'Compare Value',
      type: 'text',
        placeholder:'Enter Compare Value',
      defaultValue: ''
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
      id: `${id}-true`,
      style: { top: '30%' }
    },
    {
      type: 'source',
      position: 'right',
      id: `${id}-false`,
      style: { top: '70%' }
    }
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      type="Condition"
      fields={fields}
      handles={handles}
      style={{ backgroundColor: '#fff3e0' }}
    />
  );
}
