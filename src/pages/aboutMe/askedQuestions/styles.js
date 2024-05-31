import { Accordion, AccordionSummary, styled } from "@mui/material";

export const Accordions = styled(Accordion)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.common.white,
}));

export const AccordionSummarys = styled(AccordionSummary)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[500]}`,
}));
