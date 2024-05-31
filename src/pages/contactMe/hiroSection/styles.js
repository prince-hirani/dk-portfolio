import { Divider, IconButton, styled } from "@mui/material";

export const IconBtn = styled(IconButton)(({ theme }) => ({
  borderRadius: "50px",
  border: `1px solid ${theme.palette.grey[700]}`,
  minHeight: "3rem",
  minWidth: "3rem",
  "&:hover": {
    backgroundColor: theme.palette.grey[800],
  },
}));

export const DividerLine = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.grey[700],
}));
