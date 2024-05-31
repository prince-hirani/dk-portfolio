import { Stack, Typography } from "@mui/material";
import { themes } from "../../../theme";

import { ReactComponent as Twitter } from "../../../assets/icons/twitter-icon.svg";
import { ReactComponent as Facebook } from "../../../assets/icons/facebook-icon.svg";
import { ReactComponent as Youtube } from "../../../assets/icons/youtube-icon.svg";
import { ReactComponent as Instagram } from "../../../assets/icons/instagram-icon.svg";
import ContactMeHeroImg from "../../../assets/images/contact-heroimg.png";
import { DividerLine, IconBtn } from "./styles";

function HiroSection() {
  return (
    <Stack direction="row" p={(0, 2)}>
      <Stack gap={7} width="50%">
        <Stack>
          <Stack direction="row" justifyContent="space-between" pb={1.25}>
            <Typography variant="title2">Contact Me</Typography>
            <Stack direction="row" alignItems="flex-end" gap={1.25}>
              <IconBtn>
                <Twitter />
              </IconBtn>
              <IconBtn>
                <Facebook />
              </IconBtn>
              <IconBtn>
                <Youtube />
              </IconBtn>
              <IconBtn>
                <Instagram />
              </IconBtn>
            </Stack>
          </Stack>
          <DividerLine />
        </Stack>
        <Stack gap={5}>
          <Stack gap={1}>
            <Typography variant="body4">Address:</Typography>
            <Typography variant="body3" color={themes.palette.grey[700]}>
              Level 1, 12 Sample St, Sydney NSW 2000
            </Typography>
          </Stack>
          <Stack gap={1}>
            <Typography variant="body4">Email:</Typography>
            <Typography variant="body3" color={themes.palette.grey[700]}>
              info@example.io
            </Typography>
          </Stack>
          <Stack gap={1}>
            <Typography variant="body4">Phone number:</Typography>
            <Typography variant="body3" color={themes.palette.grey[700]}>
              1800 123 4567
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <img src={ContactMeHeroImg} />
    </Stack>
  );
}

export default HiroSection;
