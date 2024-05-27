import { Button, Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const Root = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2.5, 1, 0),
}));

export const ImgLogo = styled("img")(({ theme }) => ({
  cursor: "pointer",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.grey[900],
  textDecoration: "none",
  cursor: "pointer",
  padding: theme.spacing(1, 2.25),

  "&.active": {
    color: theme.palette.grey[500],
  },
}));

export const LinksBody = styled(Stack)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[700]}`,
  borderRadius: "50px",
  padding: theme.spacing(0.5),
}));
export const StlyedButton = styled(Button)(({ theme }) => ({
  cursor: "pointer",
  backgroundColor: theme.palette.grey[700],
  borderRadius: "8px",
  padding: theme.spacing(2, 3.75),
}));
