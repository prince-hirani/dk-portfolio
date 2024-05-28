import { Stack, styled } from "@mui/material";
export const Root = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0, 2),
}));
export const Card = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(5, 3),
  gap: theme.spacing(6.5),
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: "8px",
}));
