export function flattenHierarchy(data: any[]): any[] {
  return data.map((item, index) => flattenNode(item, `${index}`, 0));
}

function flattenNode(node: any, idPath: string = '0', depth: number = 0): any {
  if (!node || typeof node !== 'object') return node;

  const result: any = {
    data: node.data || {},
    children: [],
    id: `id-${idPath}-${depth}`
  };

  if (node.children && typeof node.children === 'object') {
    const flattenedChildren: any[] = [];

    Object.keys(node.children).forEach(key => {
      const childCategory = node.children[key];

      // Handle the 'records' array if it exists
      if (childCategory.records && Array.isArray(childCategory.records)) {
        // Flatten each record and add it to the children array
        childCategory.records.forEach((record: any, recordIndex: number) => {
          const flattenedRecord = flattenNode(record, `${idPath}-${key}-${recordIndex}`, depth + 1);
          if (flattenedRecord) {
            flattenedChildren.push(flattenedRecord);
          }
        });
      } else {
        const flattenedChild = flattenNode(childCategory, `${idPath}-${key}`, depth + 1);
        if (flattenedChild) {
          flattenedChildren.push(flattenedChild);
        }
      }
    });
    
    result.children = flattenedChildren;
  }

  return result;
}
