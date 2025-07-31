import { TableRow, TableCell, IconButton, Collapse, Box, TableContainer, Paper, Table, TableHead, TableBody } from "@mui/material";
import React, { useState, type FC } from "react";
import type { HierarchyRecord } from "../types/hierarchyTypes";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteIcon from "@mui/icons-material/Delete";
import { TableHeaders } from "./TableHeaders";

interface CollapsibleRowProps {
  record: HierarchyRecord;
  deleteRow: (childId: string) => void;
}

export const CollapsibleRow: FC<CollapsibleRowProps> = ({ record, deleteRow }) => {
    const [open, setOpen] = useState<boolean>(false);
    const [children, setChildren] = useState<HierarchyRecord[]>(record.children);
    const haveChildren: boolean = children && children.length > 0;

    const handleDeleteChild = (childId: string): void => {
      const updatedChildren = children.filter(
        (child) => child.id !== childId
      );
      setChildren(updatedChildren);
    };


    return (
      <React.Fragment>
        <TableRow>
          {haveChildren && (
            <TableCell padding="checkbox">
              <IconButton
                size="small"
                onClick={() => setOpen(!open)}
                aria-label={open ? "collapse row" : "expand row"}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
          )}
          {(!haveChildren) && <TableCell padding="checkbox" />}
          {Object.values(record.data).map((value, index) => (
            <TableCell key={index}>{value}</TableCell>
          ))}
          <TableCell padding="checkbox">
            <IconButton
              aria-label="delete"
              size="small"
              onClick={() => deleteRow(record.id)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </TableCell>
        </TableRow>

        {haveChildren && (
          <TableRow>
            <TableCell
              style={{ paddingBottom: 0, paddingTop: 0 }}
              colSpan={Object.keys(record.data).length + 1}
            >
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1, ml: 4, my: 2 }}>
                  <TableContainer component={Paper} elevation={0}>
                    <Table size="small">
                      <TableHead>
                        <TableHeaders record={children[0]} />
                      </TableHead>
                      <TableBody>
                        {children.map((childRecord) => (
                          <CollapsibleRow
                            key={childRecord.id}
                            record={childRecord}
                            deleteRow={handleDeleteChild}
                          />
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        )}
      </React.Fragment>
    );
  };