import { Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const Root = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0, 2),
}));

export const ImgLogo = styled("img")(({ theme }) => ({
  cursor: "pointer",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  cursor: "pointer",
  textDecoration: "none",
  color: theme.palette.grey[400],
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "24px",
}));

export const Divider = styled(Stack)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey[500]}`,
  padding: theme.spacing(2),
}));
