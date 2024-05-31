import { Button, Stack, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Root = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2.5, 2),
}));

export const ImgLogo = styled("img")(({ theme }) => ({
  cursor: "pointer",
}));

export const StyledLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.grey[500],
  textDecoration: "none",
  cursor: "pointer",
  padding: theme.spacing(1, 2.25),
  borderRadius: "50px",

  "&.active": {
    backgroundColor: theme.palette.grey[900],
  },
}));

export const LinksBody = styled(Stack)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[700]}`,
  borderRadius: "50px",
  padding: theme.spacing(0.5),
}));
export const StlyedButton = styled(Button)(({ theme }) => ({
  cursor: "pointer",
  backgroundColor: theme.palette.grey[900],
  borderRadius: "8px",
  padding: theme.spacing(2, 3.75),
  "&:hover": {
    backgroundColor: theme.palette.grey[700],
  },
}));

export const ButtonStyledLink = styled(NavLink)(({ theme }) => ({
  background: "none",
  textDecoration: "none",
  border: "none",
  color: theme.palette.grey[500],
}));
