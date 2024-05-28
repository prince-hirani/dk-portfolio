import { Stack, styled, Accordion, AccordionSummary } from "@mui/material";

export const Root = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0, 2),
}));

export const Accordions = styled(Accordion)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.common.white,
}));

export const AccordionSummarys = styled(AccordionSummary)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[500]}`,
}));
