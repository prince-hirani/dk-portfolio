import { AccordionDetails, Stack, Typography } from "@mui/material";
import { AccordionSummarys, Accordions } from "./styles";

import { ReactComponent as ChevronDown } from "../../../assets/icons/chevron-down.svg";

const data = [
  {
    questions: "Which teams & businesses can use it?",
    answer: "Which teams & businesses can use it?",
  },
  {
    questions: "Is my personal info safe with Tendrs?",
    answer: "Is my personal info safe with Tendrs?",
  },
  {
    questions: "Can startups & investors also be part of this Tendr platform?",
    answer: "Can startups & investors also be part of this Tendr platform?",
  },
  {
    questions:
      "We are using LinkedIn Sales Navigator to find our clients, how is Tendrs different than that?",
    answer:
      "We are using LinkedIn Sales Navigator to find our clients, how is Tendrs different than that?",
  },
  {
    questions: "Can startups & investors also be part of this Tendr platform?",
    answer: "Can startups & investors also be part of this Tendr platform?",
  },
];

function AskedQuestions(questions, answer) {
  return (
    <Stack gap={5}>
      <Typography variant="title3">Most Asked Questions</Typography>
      <Stack direction="row" gap={8}>
        <Stack gap={2}>
          {data.map(({ questions, answer }) => (
            <Accordions>
              <AccordionSummarys
                expandIcon={<ChevronDown />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="body3">{questions} </Typography>
              </AccordionSummarys>

              <AccordionDetails>
                <Typography variant="body3">{answer} </Typography>
              </AccordionDetails>
            </Accordions>
          ))}
        </Stack>
        <Stack gap={2}>
          {data.map(({ questions, answer }) => (
            <Accordions>
              <AccordionSummarys
                expandIcon={<ChevronDown />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="body3">{questions} </Typography>
              </AccordionSummarys>

              <AccordionDetails>
                <Typography variant="body3">{answer} </Typography>
              </AccordionDetails>
            </Accordions>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default AskedQuestions;
