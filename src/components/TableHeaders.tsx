import { TableRow, TableCell } from "@mui/material";
import type { HierarchyRecord } from "../types/hierarchyTypes";
import type { FC } from "react";


export const TableHeaders: FC<{ record: HierarchyRecord }> = ({ record }) => {
    const headers = Object.keys(record.data);
    return (
      <TableRow>
        <TableCell padding="checkbox" />
        {headers.map((header) => (
          <TableCell key={header} sx={{ fontWeight: "bold" }}>
            {header}
          </TableCell>
        ))}
        <TableCell sx={{ fontWeight: "bold" }}>Delete</TableCell>
      </TableRow>
    );
  };