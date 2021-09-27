import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Stack from "./components/Stack";

function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-100">
      <Navbar />
      <About />
      <Stack />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
