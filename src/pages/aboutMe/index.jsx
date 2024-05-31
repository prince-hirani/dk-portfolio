import HireMe from "./hireMe";
import HiroSection from "./hiroSection";
import WorkProcess from "../../components/WorkProcess";
import { Root } from "./styles";
import MoreInfo from "./moreInfo";
import MyExperiance from "./myExperiance";
import AskedQuestions from "./askedQuestions";

function AboutMe() {
  return (
    <Root gap={17.5}>
      <HiroSection />
      <HireMe />
      <WorkProcess />
      <MoreInfo />
      <MyExperiance />
      <AskedQuestions />
    </Root>
  );
}

export default AboutMe;
