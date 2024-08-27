import Header from './Components/Header/header';
import Banner from "./Components/Banner/banner";
import BoxSection from"./Components/BoxSection/boxsection";
import CommercialSection from "./Components/Commerce/commerce";
import ProductGallery from "./Components/ProductGallery/productgallery"
import Articles from "./Components/Articles/articles";
import Footer from "./Components/Footer/footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <BoxSection />
      <CommercialSection />
      <ProductGallery />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
