import { Stack, styled } from "@mui/material";
export const Root = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0, 2),
}));
export const Card = styled(Stack)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[400]}`,
  padding: theme.spacing(0, 3),
  borderRadius: "8px",
}));
