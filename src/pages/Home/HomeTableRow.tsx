import React, { useState } from "react";

import NumberFormat from "react-number-format";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { IStarships } from "../../types";
import { StyledTableRow, StyledTableCell } from "./styles";

export type THomeTableRow = {
  row: IStarships;
  qtdMGLTToTravel: number;
};

export const HomeTableRow: React.FC<THomeTableRow> = ({
  row,
  qtdMGLTToTravel,
}) => {
  const [open, setOpen] = useState(false);

  const { name, ...rowDetails } = row;

  const { consumables, MGLT } = rowDetails;
  let days = 0;

  if (consumables.includes("month")) days = 30;
  if (consumables.includes("week")) days = 7;
  if (consumables.includes("day")) days = 1;
  if (consumables.includes("year")) days = 365;

  const howMany = Number(consumables.replace(/\D/g, ""));
  const MGLTPerDay = Number(MGLT) * 24;
  const totalDays = days * howMany;
  const totalWithoutStop = MGLTPerDay * totalDays;
  const qtdStops = Math.trunc(qtdMGLTToTravel / totalWithoutStop);

  return (
    <>
      <StyledTableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {name}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {qtdStops}
        </StyledTableCell>
      </StyledTableRow>

      <StyledTableRow>
        <StyledTableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detalhes
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell align="center">MGLT</StyledTableCell>
                    <StyledTableCell align="center">Capacidade</StyledTableCell>
                    <StyledTableCell align="center">Suprimento</StyledTableCell>
                    <StyledTableCell align="center">Valor</StyledTableCell>
                    <StyledTableCell align="center">Tripulação</StyledTableCell>
                    <StyledTableCell align="center">
                      Vel. Atmosfera
                    </StyledTableCell>
                    <StyledTableCell align="center">Hyperdrive</StyledTableCell>
                    <StyledTableCell align="center">Fabricante</StyledTableCell>
                    <StyledTableCell align="center">Classe</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row" align="center">
                      {rowDetails.MGLT}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <NumberFormat
                        value={rowDetails.cargo_capacity}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {rowDetails.consumables}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <NumberFormat
                        value={rowDetails.cost_in_credits}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$$"}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {rowDetails.crew}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      {rowDetails.max_atmosphering_speed}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {rowDetails.hyperdrive_rating}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      {rowDetails.manufacturer}
                    </StyledTableCell>

                    <StyledTableCell
                      align="center"
                      style={{ textTransform: "capitalize" }}
                    >
                      {rowDetails.starship_class}
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};
