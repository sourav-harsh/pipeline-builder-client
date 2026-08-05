// BaseNode.js - Abstract base component for all node types

import { useState } from 'react';
import { Handle } from 'reactflow';

export const BaseNode = ({
  id,
  data,
  type,
  fields = [],
  handles = [],
  customContent = null,
  style = {}
}) => {
  const [fieldValues, setFieldValues] = useState(() => {
    const initialValues = {};
    fields.forEach(field => {
      initialValues[field.name] = data?.[field.name] || field.defaultValue || '';
    });
    return initialValues;
  });

  const handleFieldChange = (fieldName, value) => {
    setFieldValues(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const defaultStyle = {
    width: 200,
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.2s ease',
    ...style
  };

  const renderField = (field) => {
    const value = fieldValues[field.name];

    switch (field.type) {
      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            className="node-select"
          >
            {field.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            className="node-textarea"
          />
        );
      default:
        return (
          <input
            type={field.type || 'text'}
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            className="node-input"
          />
        );
    }
  };

  const renderHandles = () => {
    return handles.map(handle => (
      <Handle
        key={handle.id}
        type={handle.type}
        position={handle.position}
        id={handle.id || `${id}-${handle.type}`}
        style={handle.style}
      />
    ));
  };

  return (
    <div style={defaultStyle} className="node-container">
      {renderHandles()}

      <div className="node-header">
        {type}
      </div>

      {customContent ? (
        customContent({ fieldValues, handleFieldChange })
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {fields.map(field => (
            <div key={field.name} className="node-field">
              <label className="node-label">
                {field.label}:
              </label>
              {renderField(field)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
