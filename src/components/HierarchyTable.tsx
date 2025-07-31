import { useState } from "react";
import type { HierarchyData, HierarchyRecord } from "../types/hierarchyTypes";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { CollapsibleRow } from "./CollapsibleRow";
import { TableHeaders } from "./TableHeaders";


export const HierarchyTable: React.FC<{ data: HierarchyData }> = ({ data }) => {
  const [dataState, setData] = useState<HierarchyData>(data);

  const handleDeleteRootParent = (parentId: string): void => {
    const updatedData = dataState.filter((record) => record.id !== parentId);
    setData(updatedData);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Hierarchy Table
      </Typography>
      <TableContainer component={Paper} elevation={3}>
        {dataState && dataState.length > 0 ? (
          <Table size="medium">
            <TableHead>
              <TableHeaders record={dataState[0]} />
            </TableHead>
            <TableBody>
              {dataState.map((record: HierarchyRecord) => (
                <CollapsibleRow key={record.id} record={record} handleDeleteChildByParent={() => handleDeleteRootParent(record.id)} />
              ))}
            </TableBody>
          </Table>
        ) : (
          <Typography variant="body1" sx={{ p: 2 }}>
            No data available
          </Typography>
        )}
      </TableContainer>
    </Box>
  );
};
