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
          <Stack>
            <Typography variant="title6">{projectName}</Typography>
          </Stack>
          <Stack direction="row" gap={3}>
            <Stack>
              <Typography variant="body5" color={themes.palette.grey[700]}>
                {language}
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="body5" color={themes.palette.grey[700]}>
                {platform}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <StyledButton variant="outlined" type="button" align>
          <Typography variant="body6" color={themes.palette.common.white}>
            2024
          </Typography>
        </StyledButton>
      </Stack>
    </Stack>
  );
}

export default SelectedWorkCard;
