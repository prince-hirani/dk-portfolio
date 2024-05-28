import { Stack, Typography } from "@mui/material";
import { Img, StyledButton } from "./styels";
import { themes } from "../../theme";

function SelectedWorkCard({ image, projectName, language, platform }) {
  return (
    <Stack width="100%" gap={3}>
      <Img src={image} />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Stack gap={2}>
          <Typography variant="title6">{projectName}</Typography>
          <Stack direction="row" gap={3}>
            <Typography variant="body5" color={themes.palette.grey[700]}>
              {language}
            </Typography>
            <Typography variant="body5" color={themes.palette.grey[700]}>
              {platform}
            </Typography>
          </Stack>
        </Stack>
        <StyledButton variant="outlined">
          <Typography variant="body6" color={themes.palette.common.white}>
            2024
          </Typography>
        </StyledButton>
      </Stack>
    </Stack>
  );
}

export default SelectedWorkCard;
