// submit.js

import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${import.meta.env.REACT_APP_BACKEND_URL}/pipelines/parse`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nodes: nodes,
          edges: edges
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Display alert with backend response
      alert(`Pipeline Analysis:\n\nNodes: ${result.num_nodes}\nEdges: ${result.num_edges}\nIs DAG: ${result.is_dag ? 'Yes' : 'No'}`);

    } catch (error) {
      console.error('Error submitting pipeline:', error);
      alert('Error submitting pipeline. Please check the console for details.');
    }
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
      <button
        type="button"
        onClick={handleSubmit}
        className="btn-primary"
      >
        Submit Pipeline
      </button>
    </div>
  );
}
