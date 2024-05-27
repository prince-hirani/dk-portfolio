import { Button, Stack, styled } from "@mui/material";

export const Root = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0, 2),
}));

export const Img = styled("img")(({ theme }) => ({
  width: "100%",
  borderRadius: "8px",
  aspectRatio: 1.4,
}));
export const StyledButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.grey[700],
  borderRadius: "50px",
  padding: theme.spacing(2, 4.25),
  "&:hover": {
    borderColor: theme.palette.grey[700],
    backgroundColor: theme.palette.grey[700],
  },
}));
