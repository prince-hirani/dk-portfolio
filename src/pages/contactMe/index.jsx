import ConactWithMe from "./conactWithMe";
import HiroSection from "./hiroSection";
import { Root } from "./styles";
function ContactMe() {
  return (
    <Root gap={17.5}>
      <HiroSection />
      <ConactWithMe />
    </Root>
  );
}

export default ContactMe;
