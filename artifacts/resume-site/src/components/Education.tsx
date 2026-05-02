import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2>
          <div className="w-12 h-1 bg-primary"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-lg bg-background border border-border/50 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Bachelor of Science in International Business</h3>
              <div className="text-lg text-muted-foreground mb-2">Minnesota State University Moorhead</div>
              <div className="text-primary font-mono text-sm mb-4">2010 — 2014</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
