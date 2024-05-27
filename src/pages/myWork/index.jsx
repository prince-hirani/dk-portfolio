import SelectedWorkCard from "../../components/selectedWorkCard";
import Colity from "../../assets/images/colity.png";
import Valora from "../../assets/images/valora.png";
import Alite from "../../assets/images/alite.png";
import Conex from "../../assets/images/conex.png";
import { ReactComponent as ShowMoreBtn } from "../../assets/icons/show-more.svg";
import { Stack, Typography } from "@mui/material";
import { GridContainer, Root, StyledButton } from "./styles";
import { themes } from "../../theme";

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

function MyWork() {
  return (
    <Root gap={8} pb={17.5}>
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
        <StyledButton variant="outlined">
          <Stack direction="row" gap={1} alignItems="center">
            <ShowMoreBtn />
            <Typography variant="body6" color={themes.palette.common.white}>
              Show more
            </Typography>
          </Stack>
        </StyledButton>
      </Stack>
    </Root>
  );
}

export default MyWork;
