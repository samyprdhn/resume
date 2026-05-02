import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function Contact() {
  return (
    <footer id="contact" className="bg-background border-t border-border pt-20 pb-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-8">
              Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/-samir-pradhan-/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <FaLinkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:samyprdhn@gmail.com" className="w-12 h-12 rounded-lg bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-6 text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <a href="mailto:samyprdhn@gmail.com" className="hover:text-primary transition-colors text-lg">samyprdhn@gmail.com</a>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <a href="tel:8047739798" className="hover:text-primary transition-colors text-lg">(804) 773-9798</a>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg">Richmond, VA 23221</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-mono">
          <p>© {new Date().getFullYear()} Samir Pradhan. All rights reserved.</p>
          <p>Engineered with precision.</p>
        </div>
      </div>
    </footer>
  );
}
