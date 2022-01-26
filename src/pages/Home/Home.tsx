import React, { useCallback, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";

import api from "../../api/api";
import { HomeTableRow } from "./HomeTableRow";
import { IStarships } from "../../types";
import { StyledTableRow, StyledTableCell } from "./styles";

const Home: React.FC = () => {
  const [rows, setRows] = useState<IStarships[]>([]);
  const [inputSearch, setInputSearch] = useState<number>(0);
  const [qtdMGLTToTravel, setQtdMGLTToTravel] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = () => {
    getStarships();
    setQtdMGLTToTravel(inputSearch);
  };

  const getStarships = useCallback(() => {
    setLoading(true);
    setRows([]);
    api.get("starships").then((res) => {
      setRows((res?.data?.results as IStarships[]) || []);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    getStarships();
  }, [getStarships]);

  return (
    <Box sx={{ flexGrow: 1 }} px={1}>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Digite sua busca em mega lights (MGLT)
          </Typography>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <OutlinedInput
                id="outlined-search"
                type="search"
                value={inputSearch}
                onChange={(e) => setInputSearch(Number(e.target.value))}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Search Icon Button"
                      onClick={handleSearch}
                      edge="end"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>

            <Grid item>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell style={{ width: "10%" }} />
                      <StyledTableCell>Name</StyledTableCell>
                      <StyledTableCell>Total de Paradas</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    {loading && (
                      <StyledTableCell colSpan={3}>
                        <Box
                          p={3}
                          display={"flex"}
                          justifyContent={"center"}
                          alignSelf={"center"}
                        >
                          <CircularProgress />
                        </Box>
                      </StyledTableCell>
                    )}
                    {!loading &&
                      rows.map((row: IStarships) => (
                        <HomeTableRow
                          key={row.name}
                          row={row}
                          qtdMGLTToTravel={qtdMGLTToTravel}
                        />
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;
