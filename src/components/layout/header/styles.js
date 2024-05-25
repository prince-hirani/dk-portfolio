import { Stack, styled } from "@mui/material";

export const Root = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0, 39),
}));

export const ImgLogo = styled("img")(({ theme }) => ({
  cursor: "pointer",
}));
