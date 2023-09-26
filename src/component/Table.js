import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../App.css";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateStatus } from "./productSlice";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const dispatch = useDispatch();
  const productStatuses = useSelector(
    (state) => state.products.productStatuses
  );
  const [urgentDialogOpen, setUrgentDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleApproveClick = (index) => {
    dispatch(updateStatus({ index, newStatus: "Approved" }));
  };

  const handlePendingClick = (index) => {
    setSelectedIndex(index);
    setUrgentDialogOpen(true);
  };

  const handleDialogClose = () => {
    setUrgentDialogOpen(false);
  };

  const handleUrgentSelection = (isUrgent) => {
    if (selectedIndex !== -1) {
      const newStatus = isUrgent ? "Missing" : "Missing-Urgent";
      dispatch(updateStatus({ index: selectedIndex, newStatus }));
    }
    handleDialogClose();
  };

  return (
    <Card variant="outlined" style={{ padding: "20px" }}>
      <CardContent style={{ padding: "40px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Product name</TableCell>
                <TableCell align="left">Brand</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  className={{ style: "Text-center" }}
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <img className="image" alt="img" src="Avocado Hass.jpg" />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell
                    align="right"
                    style={{
                      color:
                        productStatuses[index] === "Approved" ? "green" : "red",
                    }}
                  >
                    {productStatuses[index] ? productStatuses[index] : ""}
                  </TableCell>
                  <TableCell align="right">
                    <button onClick={() => handlePendingClick(index)}>X</button>
                  </TableCell>
                  <TableCell align="right">
                    <button onClick={() => handleApproveClick(index)}>✓</button>
                  </TableCell>
                  <TableCell align="right">Edit</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <Dialog
        open={urgentDialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Is the product urgent?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Missing Product
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={() => handleUrgentSelection(false)}>Yes</button>
          <button onClick={() => handleUrgentSelection(true)}>No</button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
