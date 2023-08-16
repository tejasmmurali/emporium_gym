import './App.css';
import Footer from './Components/Footer/footer';
import Join from './Components/Join/join';
import MainCharacter from './Components/MainCharacter/MainCharacter';
import Plan from './Components/Plan/plan';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/Testimonials/testimonials';
function App() {
  return (
    <div className="App">
          <MainCharacter/>
          <Programs/>
          <Reasons/>
          <Plan/>
          <Testimonials/>
          <Join/>
          <Footer/>
          
    </div>
  );
}

export default App;
