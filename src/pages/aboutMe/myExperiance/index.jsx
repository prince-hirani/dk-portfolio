import {
  Paper,
  Stack,
  Table,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { StyleBtn, TableContainers, Tables } from "./styles";
import { themes } from "../../../theme";

function createData(year, plateform, language) {
  return { year, plateform, language };
}

const rows = [
  createData(`2021 - Present`, "Data Analysis", "Oracle"),
  createData(`2016 - 2021`, "User Researcher", "Microsoft"),
  createData(`2023 - 2016`, "UI/UX Design", "SAP AG"),
  createData(`2021 - 2013`, "Product Designer", "Alibaba Group"),
];

function MyExperiance() {
  return (
    <Stack gap={5}>
      <Stack>My Experience</Stack>
      <Stack direction="row" gap={16.75}>
        <Stack justifyContent="space-between" width="50%">
          <Typography>
            I have gained valuable insights and expertise in Product Developer.
            I have had the opportunity to work on a wide range of projects
          </Typography>
          <Stack gap={1}>
            <Stack direction="row" alignItems="flex-start" gap={1}>
              <StyleBtn variant="outlined">
                <Typography variant="body6">Figma</Typography>
              </StyleBtn>
              <StyleBtn variant="outlined">
                <Typography variant="body6">Framer</Typography>
              </StyleBtn>
              <StyleBtn variant="outlined">
                <Typography variant="body6">InVision</Typography>
              </StyleBtn>
            </Stack>
            <Stack direction="row" alignItems="flex-start" gap={1}>
              <StyleBtn variant="outlined">
                <Typography variant="body6">Photoshop</Typography>
              </StyleBtn>
              <StyleBtn variant="outlined">
                <Typography variant="body6">Illustrator</Typography>
              </StyleBtn>
              <StyleBtn variant="outlined">
                <Typography variant="body6">Webflow</Typography>
              </StyleBtn>
            </Stack>
          </Stack>
        </Stack>
        <Stack width="50%">
          <TableContainers component={Paper}>
            <Table>
              <TableCell>
                {rows.map((row) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <Typography
                        lineHeight={2}
                        variant="body2"
                        color={themes.palette.common.white}
                      >
                        {row.year}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        lineHeight={2}
                        variant="body2"
                        color={themes.palette.common.white}
                      >
                        {row.plateform}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        lineHeight={2}
                        variant="body2"
                        color={themes.palette.grey[700]}
                        pl={10}
                      >
                        {row.language}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableCell>
            </Table>
          </TableContainers>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MyExperiance;
