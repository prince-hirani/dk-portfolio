import { Stack, Typography } from "@mui/material";
import { themes } from "../../../theme";

import ContactWithMeSideImg from "../../../assets/images/contact-with-me-side-img.png";
import { Field, Root } from "./styles";

function ConactWithMe() {
  return (
    <Root gap={7}>
      <img src={ContactWithMeSideImg} />
      <Stack gap={5}>
        <Stack gap={1}>
          <Typography variant="title3">Contact With Me</Typography>
          <Typography variant="body3">
            Have a question or a project in mind? Feel free to reach out! I'm
            here to help turn your ideas into reality.
          </Typography>
        </Stack>
        <Stack gap={5}>
          <Stack direction="row" gap={3}>
            <Stack gap={1} width="50%">
              <Typography variant="body3" color={themes.palette.grey[700]}>
                First Name
              </Typography>
              <Field
                variant="filled"
                inputProps={{ style: { color: "white" } }}
                autoComplete="off"
              />
            </Stack>
            <Stack gap={1} width="50%">
              <Typography variant="body3" color={themes.palette.grey[700]}>
                Email
              </Typography>
              <Field
                variant="filled"
                inputProps={{ style: { color: "white" } }}
                autoComplete="off"
                type="email"
              />
            </Stack>
          </Stack>
          <Stack gap={1}>
            <Typography variant="body3" color={themes.palette.grey[700]}>
              Message
            </Typography>
            <Field
              size="sm"
              variant="filled"
              inputProps={{ style: { color: "white" } }}
              autoComplete="off"
            />
          </Stack>
        </Stack>
      </Stack>
    </Root>
  );
}

export default ConactWithMe;
