import { Divider, Stack, Typography } from "@mui/material";
import theme, { themes } from "../../../theme";

import MoreInfoImg from "../../../assets/images/moreinfo-side-img.png";
import { Line } from "./styles";

function MoreInfo() {
  return (
    <Stack direction="row" gap={8} alignItems="center">
      <Stack>
        <img src={MoreInfoImg} />
      </Stack>

      <Stack gap={7}>
        <Typography variant="body3" color={themes.palette.grey[700]}>
          From the early days of tinkering with code to becoming a seasoned web
          developer. Every step has a testament to the power of persistence and
          learning. The digital world has evolved into a lifelong passion.
        </Typography>
        <Stack gap={3}>
          <Stack gap={2}>
            <Typography variant="title6">
              Fusion of Design & Functionality
            </Typography>
            <Typography variant="body3" color={themes.palette.grey[700]}>
              Highlighting the synergy between aesthetics and usability in your
              work.
            </Typography>
            <Line />
          </Stack>
          <Stack gap={2}>
            <Typography variant="title6">
              Specialization or Area of Interest{" "}
            </Typography>
            <Typography variant="body3" color={themes.palette.grey[700]}>
              Mentioning a specific aspect of technology that fascinates you.
            </Typography>
            <Line />
          </Stack>
          <Stack gap={2}>
            <Typography variant="title6">
              Passion for Web Development{" "}
            </Typography>
            <Typography variant="body3" color={themes.palette.grey[700]}>
              Discussing your enthusiasm for creating digital experiences.
            </Typography>
            <Line />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MoreInfo;
