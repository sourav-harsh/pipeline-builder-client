import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width:'100%',overflow:'hidden' }}>
      <header style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        padding: '16px 0'
      }}>
        <h1 style={{
          margin: '0 16px',
          color: 'white',
          fontSize: '24px',
          fontWeight: '600',
          textAlign: 'center'
        }}>
           Pipeline Builder
        </h1>
      </header>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column',width:'100%' }}>
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton />
      </main>
    </div>
  );
}

export default App;
