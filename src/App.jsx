import Nav from './components/Nav/Nav'
import './App.css';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';
import ChallengeSection from './components/ChallengeSection/ChallengeSection';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <ChallengeSection />
      <Footer />
    </div>
  );
}

export default App;