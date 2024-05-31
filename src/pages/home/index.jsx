import { Stack, Typography } from "@mui/material";
import {
  Card,
  GridContainer,
  HiroSection,
  IndustriesWorksSection,
  MyWorkSection,
  Root,
  StyleBtn,
  StyleButton,
  WhatIDoSection,
  WorkProcessSection,
} from "./styles";
import { themes } from "../../theme";
import SelectedWorkCard from "../../components/selectedWorkCard";
import WorkProcess from "../../components/WorkProcess";
import { StyledButton } from "../myWork/styles";

import { ReactComponent as DownloadIcon } from "../../assets/icons/download.svg";
import { ReactComponent as ShowMoreBtn } from "../../assets/icons/show-more.svg";
import { ReactComponent as GreenDot } from "../../assets/icons/green-dot.svg";
import HiroImg from "../../assets/images/hiro.png";
import WorkImg1 from "../../assets/images/workimg1.png";
import WorkImg2 from "../../assets/images/workimg2.png";
import WorkImg3 from "../../assets/images/workimg3.png";
import WorkImg4 from "../../assets/images/workimg4.png";
import Colity from "../../assets/images/colity.png";
import Valora from "../../assets/images/valora.png";
import Alite from "../../assets/images/alite.png";
import Conex from "../../assets/images/conex.png";
import Luminous from "../../assets/logos/luminous.png";
import Hourglass from "../../assets/logos/hourglass.png";
import Capsule from "../../assets/logos/capsule.png";
import Webflow from "../../assets/logos/webflow.png";
import Lightbox from "../../assets/logos/lightbox.png";
import Spherule from "../../assets/logos/spherule.png";
import CommandR from "../../assets/logos/command+R.png";
import Segment from "../../assets/logos/segment.png";
import DevonLane from "../../assets/images/devon-lane.png";

const data = [
  {
    image: Colity,
    projectName: "Colity",
    language: "CMS",
    platform: "App",
  },
  {
    image: Valora,
    projectName: "Valora",
    language: "Branding",
    platform: "Website",
  },
  {
    image: Alite,
    projectName: "Alite",
    language: "Saas",
    platform: "Website",
  },
  {
    image: Conex,
    projectName: "Conex",
    language: "CMS",
    platform: "App",
  },
];
function Home() {
  return (
    <Root gap={17.5} pb={17.5} px={2}>
      <HiroSection direction="row" alignItems="center">
        <Stack gap={3}>
          <Stack direction="row" gap={1}>
            <StyleButton variant="outlined">
              <Typography variant="body7">Interaction Design</Typography>
            </StyleButton>
            <StyleButton variant="outlined">
              <Typography variant="body7">Branding & Identity</Typography>
            </StyleButton>
            <StyleButton variant="outlined">
              <Typography variant="body7">User Research</Typography>
            </StyleButton>
          </Stack>
          <Stack>
            <Typography variant="title1">
              Creating Delightful & Engaging Experiences
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="body3" color={themes.palette.grey[700]}>
              With over 10 years of experience in UI/UX design, I specialize in
              creating intuitive, user-friendly digital experiences for a wide
              range of clients and industries.✌
            </Typography>
          </Stack>
          <Stack alignItems="flex-start">
            <StyleBtn variant="contained">
              <Typography variant="body6">Work with me</Typography>
            </StyleBtn>
          </Stack>
        </Stack>

        <img src={HiroImg} />
      </HiroSection>
      <WorkProcess />
      <Stack>
        <Stack gap={5.5}>
          <Stack direction="row" gap={2.5}>
            <img src={WorkImg1} />
            <img src={WorkImg2} />
            <img src={WorkImg3} />
            <img src={WorkImg4} />
          </Stack>
          <Stack gap={1.75}>
            <Typography variant="title5">
              A Chronicle of Passion, Persistence, and Artistry
            </Typography>
            <Stack direction="row" gap={11}>
              <Stack width="50%">
                <Typography variant="body3" color={themes.palette.grey[700]}>
                  seasoned technology enthusiast with a passion for crafting
                  seamless digital experiences. As a versatile web developer and
                  software engineer, I specialize in bringing ideas to life
                  through code and creativity.
                </Typography>
              </Stack>
              <Stack alignItems="center">
                <StyleButton variant="outlined">
                  <DownloadIcon />
                  <Typography variant="body6" pl="0.75rem">
                    Download Resume
                  </Typography>
                </StyleButton>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack>
        <Typography variant="title2">My Creations</Typography>
        <GridContainer>
          {data.map(({ image, projectName, language, platform }) => (
            <SelectedWorkCard
              image={image}
              projectName={projectName}
              language={language}
              platform={platform}
            />
          ))}
        </GridContainer>
        <Stack alignItems="flex-end">
          <StyledButton
            variant="outlined"
            size="large"
            startIcon={<ShowMoreBtn />}
          >
            <Typography variant="body6" color={themes.palette.common.white}>
              Show more
            </Typography>
          </StyledButton>
        </Stack>
      </Stack>

      <Stack>
        <Stack>
          <Stack>
            <Typography variant="TITLE3">WHAT I DO</Typography>
          </Stack>
          <Stack>
            <Typography>
              I specialize in crafting custom solutions that seamlessly blend
              innovation with functionality.
            </Typography>
            <Stack alignItems="flex-start">
              <StyleBtn variant="contained">
                <Typography variant="body6">Work with me</Typography>
              </StyleBtn>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          {/* fskbnkgjgk
         gjdgndngldgn
         glkdngldng */}
        </Stack>
      </Stack>

      <Stack gap={5}>
        <Stack direction="row" gap={1} alignItems="center">
          <GreenDot />
          <Typography>Companies and industries I’ve worked with</Typography>
        </Stack>
        <Stack gap={6}>
          <Stack direction="row" gap={17.5}>
            <img src={Luminous} />
            <img src={Hourglass} />
            <img src={Capsule} />
            <img src={Webflow} />
          </Stack>
          <Stack direction="row" gap={17.5}>
            <img src={Lightbox} />
            <img src={Spherule} />
            <img src={CommandR} />
            <img src={Segment} />
          </Stack>
        </Stack>
      </Stack>

      <Stack gap={5}>
        <Typography variant="title3">What My Clients Say!!</Typography>
        <Stack direction="row" gap={3}>
          <Stack gap={3}>
            <Stack alignItems="flex-start">
              <img src={Luminous} />
            </Stack>
            <Typography variant="body3">
              "Transformed our mobile app with incredible UI/UX design, making
              it user-friendly and loved by customers. Exceptional collaboration
              and timely delivery."
            </Typography>
            <Stack direction="row" gap={1.5}>
              <img src={DevonLane} />
              <Stack gap={1}>
                <Typography>Devon Lane</Typography>
                <Typography>Delivery Head</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack gap={3}>
            <Stack alignItems="flex-start">
              <img src={Segment} />
            </Stack>
            <Typography variant="body3">
              "Transformed our mobile app with incredible UI/UX design, making
              it user-friendly and loved by customers. Exceptional collaboration
              and timely delivery."
            </Typography>
            <Stack direction="row" gap={1.5}>
              <img src={DevonLane} />
              <Stack gap={1}>
                <Typography>Devon Lane</Typography>
                <Typography>Delivery Head</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack gap={3}>
            <Stack alignItems="flex-start">
              <img src={CommandR} />
            </Stack>
            <Typography variant="body3">
              "Transformed our mobile app with incredible UI/UX design, making
              it user-friendly and loved by customers. Exceptional collaboration
              and timely delivery."
            </Typography>
            <Stack direction="row" gap={1.5}>
              <img src={DevonLane} />
              <Stack gap={1}>
                <Typography>Devon Lane</Typography>
                <Typography>Delivery Head</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack gap={3} width="50%">
        <Typography variant="body3">
          Whether it's a stunning website, a custom software solution, or a
          seamless mobile app, I'm here to help.
        </Typography>
        <Typography variant="title3">Ready? Let’s Get Started</Typography>
      </Stack>
    </Root>
  );
}

export default Home;
