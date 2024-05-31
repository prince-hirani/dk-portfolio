import { Button, Table, TableContainer, styled } from "@mui/material";

export const StyleBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  borderColor: theme.palette.grey[800],
  borderRadius: "50px",
  "&:hover": {
    borderColor: theme.palette.grey[800],
    backgroundColor: theme.palette.grey[800],
  },
}));

export const TableContainers = styled(TableContainer)(({ theme }) => ({
  backgroundColor: "transparent",
}));
