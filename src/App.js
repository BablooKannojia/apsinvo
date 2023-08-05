import './App.css';
import Header from './components/Header';
import Training from './components/Training';
import "./assets/css/user.css";
import "./assets/css/app.css";
import "./assets/css/plugin.css";
import "./assets/css/slick.css";
import Whychoose from './components/Whychoose';
import Venue from './components/Venue';
import Offer from './components/Offer';
import Onlinesession from './components/Onlinesession';
import Customer from './components/Customer';
import Counter from './components/Counter';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



function App() {
  return (
    <>
      <Helmet>
        <script src="./assets/js/scripts.js" type="text/javascript" />
        <script src="./assets/js/bootstrap.bundlemin..js" type="text/javascript" />
        <script src="./assets/js/slick.min.js" type="text/javascript" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
      </Helmet>

      <div className="Toastify"></div>
      <Header />
      <Training />
      <Venue />
      <Offer />
      <Whychoose />
      <Onlinesession />
      <Customer />
      <Counter />
      <Footer />
    </>

  );
}

export default App;
