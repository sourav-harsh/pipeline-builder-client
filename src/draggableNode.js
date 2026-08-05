// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };

    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{
          cursor: 'grab',
          minWidth: '80px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
          fontWeight: '500',
          fontSize: '14px',
          boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
          transition: 'all 0.2s ease',
          border: 'none',
          padding: '8px 12px'
        }}
        draggable
      >
          <span>{label}</span>
      </div>
    );
  };
