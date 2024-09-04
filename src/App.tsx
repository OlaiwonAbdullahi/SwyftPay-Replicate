import Four from "./components/404.tsx";
import FirstCard from "./components/FirstCard.tsx";
import Hero from "./components/Hero.tsx";
import NavBar from "./components/NavBar.tsx";
import SecondCard from "./components/SecondCard.tsx";
import Testimonials from "./components/Testimonials.tsx";
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <FirstCard />
      <SecondCard />
      <Testimonials />
      <Four />
    </>
  );
}

export default App;
