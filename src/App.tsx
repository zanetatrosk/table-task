
import { HierarchyTable } from './components/HierarchyTable';
import { useHierarchyData } from './hooks/useHierarchyData';

function App() {
  const { data, isLoading, error } = useHierarchyData();

  return (
    <>
      <div>
        <h1>Welcome to the JSON Hierarchy Viewer</h1>
        <p>Use this tool to visualize and explore your JSON data.</p>
        
        {isLoading && <p>Loading data...</p>}
        {error && <p className="error">Error: {error.message}</p>}
        {!isLoading && !error && data.length > 0 && <HierarchyTable data={data} />}
      </div>
    </>
  )
}

export default App
