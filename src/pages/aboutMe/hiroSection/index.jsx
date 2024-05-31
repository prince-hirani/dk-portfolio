import { Stack, Typography } from "@mui/material";

import { ReactComponent as CrossArrow } from "../../../assets/icons/up-cross-arrow.svg";
import HiroImg from "../../../assets/images/about-hiro-img.png";
import { theme } from "../../../theme/theme";

function HiroSection() {
  return (
    <Stack gap={8.25}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="title2">About me</Typography>
        <Stack width="50%" gap={4}>
          <Typography variant="body3" color={theme.palette.gray[700]}>
            My journey in the world of technology is fueled by a relentless
            curiosity and a commitment to pushing the boundaries of what's
            possible. I see each project as a narrative waiting to be told.
          </Typography>
          {/* <Button
            variant="text"
            color={theme.palette.gray[700]}
            endIcon={<CrossArrow />}
          >
            Let’s Collaborate
          </Button> */}
        </Stack>
      </Stack>
      <img src={HiroImg} />
    </Stack>
  );
}

export default HiroSection;
