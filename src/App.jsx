import { SectionProvider } from "./context/SectionContext";
import Sidebar from "./components/Navbar/Sidebar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import CursorSpotlight from "./components/CursorSpotlight";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <SectionProvider>
      <div className="relative flex">
        <CursorSpotlight/>
        <Sidebar />
        <main className="w-full px-6 lg:px-10 lg:pt-0 ml-auto max-w-4xl">
          <MobileNavbar />
          <About />
          <Experience />
          <Skills />
          <Projects />
        </main>
      </div>
    </SectionProvider>
  );
}