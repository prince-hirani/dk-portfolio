import { Stack, TextField, styled } from "@mui/material";

export const Field = styled(TextField)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[700]}`,
  backgroundColor: "transparent",
}));
export const Root = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(11, 2),
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: theme.palette.grey[900],
}));
