import { motion } from "framer-motion";
import { Mail, MapPin, Phone, User } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";

const HEADSHOT_WEBM = "/headshot.webm";
const HEADSHOT_MP4 = "/headshot.mp4";
const HEADSHOT_IMG = "/headshot.jpg";

function HeadshotMedia() {
  return (
    <div className="rounded-2xl overflow-hidden border-2 border-primary/30 bg-secondary/30 max-w-xs md:max-w-sm">
      <video
        className="w-full h-auto block"
        autoPlay
        loop
        muted
        playsInline
        poster={HEADSHOT_IMG}
      >
        <source src={HEADSHOT_WEBM} type="video/webm" />
        <source src={HEADSHOT_MP4} type="video/mp4" />
      </video>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 min-w-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-primary/20 text-primary font-mono text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
              Samir <span className="text-primary">Pradhan</span>
            </h1>
            
            <h2 className="text-xl md:text-3xl font-light text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Lead / Senior Software Engineer <br className="hidden md:block" />
              <span className="text-foreground/80 font-medium">AI/ML, Fintech & Cloud Platforms</span>
            </h2>
            
            <div className="flex flex-wrap gap-6 mb-10 text-sm md:text-base font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Richmond, VA 23221
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:samyprdhn@gmail.com" className="hover:text-primary transition-colors">samyprdhn@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:8047739798" className="hover:text-primary transition-colors">(804) 773-9798</a>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono" asChild>
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
              <Button size="lg" variant="outline" className="font-mono border-primary/30 hover:bg-primary/10" asChild>
                <a href="https://www.linkedin.com/in/-samir-pradhan-/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <HeadshotMedia />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
