import { Button, Stack, styled } from "@mui/material";
export const Root = styled(Stack)(({ theme }) => ({}));

export const HiroSection = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(16, 2, 8.75),
  backgroundColor: theme.palette.grey[900],
}));
export const StyleButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  color: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[700]}`,
  borderRadius: "50px",
  "&:hover": {
    border: `1px solid ${theme.palette.grey[700]}`,
    backgroundColor: theme.palette.grey[700],
  },
}));

export const StyleBtn = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 4.75),
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  borderRadius: "50px",
  "&:hover": {
    backgroundColor: theme.palette.grey[300],
  },
}));

export const GridContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr ",
  gap: theme.spacing(3),
}));
