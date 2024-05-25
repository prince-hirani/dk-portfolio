import { Stack } from "@mui/system";
import { Root } from "./styles";
import Header from "./header";
import Footer from "./Footer";
import Pages from "../../pages";

function Layout() {
  return (
    <Root>
      <Header />
      <Stack flex={1}>
        <Pages />
      </Stack>
      <Footer />
    </Root>
  );
}

export default Layout;
