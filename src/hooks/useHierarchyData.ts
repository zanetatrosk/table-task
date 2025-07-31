import { useState, useEffect } from 'react';
import type { HierarchyData } from '../types/hierarchyTypes';
import { flattenHierarchy } from '../utils/flattenHierarchy';

interface UseHierarchyDataReturn {
  data: HierarchyData;
  isLoading: boolean;
}

export const useHierarchyData = (): UseHierarchyDataReturn => {
  const [data, setData] = useState<HierarchyData>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Using fetch to load the JSON file
        const response = await fetch('/data/example-data.json');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        
        const jsonData = await response.json();
        const clenedAndParsedData: HierarchyData = flattenHierarchy(jsonData);
        console.log('Flattened Hierarchy Data:', clenedAndParsedData);
        setData(clenedAndParsedData);
      } catch (err) {
        console.error('Error loading hierarchy data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading };
};
