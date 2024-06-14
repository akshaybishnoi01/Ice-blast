import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hreosection from './components/Hreosection';
import Thefuture from './components/Thefuture';
import Understanding from './components/Understanding';
import Dryice from './components/Dryice';
import Behindscenes from './components/Behindscenes';
import Lettalk from './components/Lettalk';
import Latestwork from './components/Latestwork';
import Theteam from './components/Theteam';
import Stillunsure from './components/Stillunsure';
import Theprime from './components/Theprime';
import Latestnews from './components/Latestnews';
import Footer from './components/Footer';

function App() {
  return (
  <>
  <Hreosection/>
  <Thefuture/>
  <Understanding/>
  <Dryice/>
  <Behindscenes/>
  <Lettalk/>
  <Latestwork/>
  <Theteam/>
  <Stillunsure/>
  <Theprime/>
  <Latestnews/>
  <Footer/>
  </>
  );
}

export default App;
