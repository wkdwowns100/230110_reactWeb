import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import GlobalStyle from "./assets/style/Global";
import MainSlide from "./MainSlide";
import Notice from "./Notice";
import InnerSub1 from "./InnerSub1";
import MidBanner from "./MidBanner";
import Product from "./Product";
import IntroduceBox from "./IntroduceBox";
import Footer from "./Footer";
import NotFoundPage from "./component/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
      <Nav />
      <MainSlide />
      <Notice />
      <InnerSub1 />
      <MidBanner />
      <Product />
      <IntroduceBox />
      <Footer />
    </>
  );
}

export default App;
