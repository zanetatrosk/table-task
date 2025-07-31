
import { HierarchyTable } from './components/HierarchyTable';
import { useHierarchyData } from './hooks/useHierarchyData';

function App() {
  const { data, isLoading } = useHierarchyData();

  return (
    <>
      <div>
        <h1>Welcome to the JSON Hierarchy Viewer</h1>
        <p>Use this tool to visualize and explore your JSON data.</p>
        
        {isLoading && <p>Loading data...</p>}
        {!isLoading && data.length > 0 && <HierarchyTable data={data} />}
      </div>
    </>
  )
}

export default App
