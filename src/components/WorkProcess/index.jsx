import { Stack, Typography } from "@mui/material";
import { Card, Root } from "./styles";
import { themes } from "../../theme";

import { ReactComponent as Research } from "../../assets/icons/research.svg";
import { ReactComponent as Define } from "../../assets/icons/define.svg";
import { ReactComponent as Ideate } from "../../assets/icons/ideate.svg";
import { ReactComponent as Prototype } from "../../assets/icons/prototype.svg";

function WorkProcess() {
  return (
    <Root gap={4}>
      <Stack>
        <Typography variant="title3">Work Process</Typography>
      </Stack>
      <Stack direction="row" gap={3}>
        <Card>
          <Stack pt={5} pb={6.5}>
            <Research />
          </Stack>
          <Stack pb={2}>
            <Typography variant="title6">Research</Typography>
          </Stack>
          <Stack pb={5}>
            <Typography variant="body3" color={themes.palette.grey[700]}>
              Utilizing a combination of these tags can make your portfolio more
              navigable and allow viewers to filter projects that are of
              particular interest or relevance to them.{" "}
            </Typography>
          </Stack>
        </Card>
        <Card>
          <Stack pt={5} pb={6.5}>
            <Define />
          </Stack>
          <Stack pb={2}>
            <Typography variant="title6">Define</Typography>
          </Stack>
          <Stack pb={5}>
            <Typography variant="body3" color={themes.palette.grey[700]}>
              Utilizing a combination of these tags can make your portfolio more
              navigable and allow viewers to filter projects that are of
              particular interest or relevance to them.{" "}
            </Typography>
          </Stack>
        </Card>
        <Card>
          <Stack pt={5} pb={6.5}>
            <Ideate />
          </Stack>
          <Stack pb={2}>
            <Typography variant="title6">Ideate</Typography>
          </Stack>
          <Stack pb={5}>
            <Typography variant="body3" color={themes.palette.grey[700]}>
              Utilizing a combination of these tags can make your portfolio more
              navigable and allow viewers to filter projects that are of
              particular interest or relevance to them.{" "}
            </Typography>
          </Stack>
        </Card>
        <Card>
          <Stack pt={5} pb={6.5}>
            <Prototype />
          </Stack>
          <Stack pb={2}>
            <Typography variant="title6">Prototype</Typography>
          </Stack>
          <Stack pb={5}>
            <Typography variant="body3" color={themes.palette.grey[700]}>
              Utilizing a combination of these tags can make your portfolio more
              navigable and allow viewers to filter projects that are of
              particular interest or relevance to them.{" "}
            </Typography>
          </Stack>
        </Card>
      </Stack>
    </Root>
  );
}

export default WorkProcess;
