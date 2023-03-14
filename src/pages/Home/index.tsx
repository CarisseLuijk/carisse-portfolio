import { lazy } from "react";
import Section1 from "../../content/Section1.json";
import Section2 from "../../content/Section2.json";
import Section3 from "../../content/Section3.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={Section1.title}
        content={Section1.text}
        button={Section1.button}
        icon="background-image.jpg"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={Section2.title}
        content={Section2.text}
        section={Section2.section}
        icon="section-2.jpg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={Section3.title}
        content={Section3.text}
        icon="section-3.jpg"
        id="mission"
      />
      {/* <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
    </Container>
  );
};

export default Home;
