import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground dark selection:bg-primary/30 selection:text-primary-foreground">
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Contact />
      <Toaster />
    </div>
  );
}

export default App;
