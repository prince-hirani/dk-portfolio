import { Stack, Typography, IconButton } from "@mui/material";
import { Root, ImgLogo, StyledLink, Divider } from "./styles";
import { themes } from "../../../theme";
import Logo from "../../../assets/icons/logo.svg";
import { ReactComponent as Facebook } from "../../../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../../assets/icons/instagram.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/twitter.svg";
import { ReactComponent as Linkedin } from "../../../assets/icons/linkedin.svg";
import { ReactComponent as StarIconBtn } from "../../../assets/icons/star-icon.svg";
import { Link } from "react-router-dom";
import AboutMe from "../../../pages/aboutMe";
import MyWork from "../../../pages/myWork";
import ContactMe from "../../../pages/contactMe";

function Footer() {
  return (
    <Root>
      <Stack gap={6}>
        <Stack gap={5}>
          <Stack>
            <Link to="/">
              <ImgLogo src={Logo} />
            </Link>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Stack gap={5}>
              <Stack gap={1}>
                <Stack>
                  <Typography variant="body4">Address: </Typography>
                </Stack>
                <Stack>
                  <Typography variant="body3" color={themes.palette.grey[700]}>
                    Level 1, 12 Sample St, Sydney NSW 2000
                  </Typography>
                </Stack>
              </Stack>

              <Stack gap={1}>
                <Stack>
                  <Typography variant="body4">Contact:</Typography>
                </Stack>
                <Stack>
                  <Typography variant="body3" color={themes.palette.grey[700]}>
                    1800 123 4567
                  </Typography>
                  <Typography variant="body3" color={themes.palette.grey[700]}>
                    info@example.io
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack gap={5}>
              <Stack gap={7} direction="row">
                <Stack gap={2}>
                  <StyledLink to={AboutMe}>About Me</StyledLink>
                  <StyledLink to={MyWork}>My Work</StyledLink>
                  <StyledLink to="/">Reviews</StyledLink>
                </Stack>
                <Stack gap={2}>
                  <StyledLink to="/">Blogs</StyledLink>
                  <StyledLink to="/">Experience</StyledLink>
                  <StyledLink to={ContactMe}>Contact</StyledLink>
                </Stack>
              </Stack>
              <Stack gap={1.5} direction="row">
                <IconButton>
                  <Facebook />
                </IconButton>
                <IconButton>
                  <Instagram />
                </IconButton>
                <IconButton>
                  <Twitter />
                </IconButton>
                <IconButton>
                  <Linkedin />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Divider direction="row" justifyContent="space-between">
          <Stack>
            <Typography variant="body7" color={themes.palette.grey[700]}>
              © 2023 LOGOIPSUM. All rights reserved.
            </Typography>
          </Stack>
          <Stack direction="row" gap={2}>
            <StyledLink>
              <Stack direction="row" gap={1}>
                <StarIconBtn />
                <Typography variant="body7" color={themes.palette.grey[700]}>
                  Privacy Policy
                </Typography>
              </Stack>
            </StyledLink>
            <StyledLink>
              <Stack direction="row" gap={1}>
                <StarIconBtn />
                <Typography variant="body7" color={themes.palette.grey[700]}>
                  Terms of Service
                </Typography>
              </Stack>
            </StyledLink>
            <StyledLink>
              <Stack direction="row" gap={1}>
                <StarIconBtn />
                <Typography variant="body7" color={themes.palette.grey[700]}>
                  Cookies Settings
                </Typography>
              </Stack>
            </StyledLink>
          </Stack>
        </Divider>
      </Stack>
    </Root>
  );
}
export default Footer;
