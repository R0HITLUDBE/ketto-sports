import ActiveFundraiser from "./component/ActiveFundraiser/ActiveFundraiser";
import Faq from "./component/Faq/Faq";
import Footer from "./component/Footer/Footer";
import Hear from "./component/Hear/Hear";
import Hero from "./component/Hero/Hero";
import KettoOffer from "./component/KettoOffers/KettoOffer";
import Raisefund from "./component/Raisefund/Raisefund";
import Sports from "./component/Sports/Sports";
import WhyChoose from "./component/WhyChoose/WhyChoose";

function App() {
  return (
    <div className="App">
      <Hero />
      <Sports />
      <Raisefund />
      <WhyChoose />
      <KettoOffer />
      <Hear />
      <ActiveFundraiser />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
