import { Button, Stack, styled } from "@mui/material";

export const Root = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0, 2),
}));
export const GridContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: theme.spacing(3),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.grey[700],
  borderRadius: "50px",
  "&:hover": {
    borderColor: theme.palette.grey[700],
    backgroundColor: theme.palette.grey[700],
  },
}));
