import './App.css';
import Hero from './component/Hero';
import Join from './component/Join/Join';
import Programs from './component/Programs/Programs';
import Reasons from './component/Reasons/Reasons';
import Testimonials from './component/Testimonials/Testimonials';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
         <Hero/>
         <Programs/>
         <Reasons/>
         <Testimonials/>
         <Join/>
         <Footer/>
    </div>
  );
}

export default App;
