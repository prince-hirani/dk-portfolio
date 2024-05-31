import { Stack, Typography } from "@mui/material";

import HireMeImg from "../../../assets/images/hireme-side-img.png";

function HireMe() {
  return (
    <Stack gap={7}>
      <Typography variant="title7">Hire me for</Typography>
      <Stack direction="row" justifyContent="space-between">
        <Stack gap={4}>
          <Typography variant="title4">Web Development</Typography>
          <Typography variant="title4">UI/UX Design</Typography>
          <Typography variant="title4">Wireframing & Prototyping</Typography>
          <Typography variant="title4">Information Architecture</Typography>
          <Typography variant="title4">Accessibility Design</Typography>
          <Typography variant="title4">User Research</Typography>
        </Stack>
        <Stack pb={5}>
          <img src={HireMeImg} />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default HireMe;
