import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import KeyFeature from "./components/KeyFeature";
import News from "./components/News";
import QuickAction from "./components/QuickAction";
import Team from "./components/Team";

// The main App component that renders the entire application
const App = () => {
  return (
    // Container for the entire application with full screen width and height, black background, and hidden horizontal overflow
    <div className="w-screen h-screen bg-black overflow-x-hidden">
      {/* Renders the Header component */}
      <Header />
      {/* Renders the Hero section component */}
      <Hero />
      {/* Renders the Features section component */}
      <Features />
      {/* Renders the News section component */}
      <News />
      {/* Renders the Blog section component */}
      <Blog />
      {/* Renders the Quick Action section component */}
      <QuickAction />
      {/* Renders the Key Feature section component */}
      <KeyFeature />
      {/* Renders the Team section component */}
      <Team />
      {/* Renders the Contact section component */}
      <Contact />
    </div>
  );
};

export default App;
