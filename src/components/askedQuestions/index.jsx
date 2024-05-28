import { AccordionDetails } from "@mui/material";
import { AccordionSummarys, Accordions, Root } from "./styles";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";

function AskedQuestions({ questions, answer }) {
  return (
    <Root>
      <Accordions>
        <AccordionSummarys
          expandIcon={<ChevronDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {questions}
        </AccordionSummarys>
        <AccordionDetails>{answer}</AccordionDetails>
      </Accordions>
    </Root>
  );
}

export default AskedQuestions;
