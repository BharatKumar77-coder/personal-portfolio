import usePortfolioData from "./hooks/usePortfolioData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Simple Loading Spinner Component
const LoadingScreen = () => (
  <div className="flex items-center justify-center min-h-screen bg-primary">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
  </div>
);

function App() {
  const { data, loading } = usePortfolioData();

  if (loading) return <LoadingScreen />;

  // If API fails, you might want to show an error or fallback
  if (!data) return <div className="text-white text-center pt-20">Failed to load data. Ensure backend is running.</div>;

  return (
    <div className="bg-primary min-h-screen text-textMain">
      <Navbar />
      <main>
        {/* We pass the specific slice of data to each component */}
        <Hero content={data.general.hero} />
        <About content={data.general.about} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Contact contactInfo={data.general.contact} />
      </main>
      <Footer />
    </div>
  );
}

export default App;