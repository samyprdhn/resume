import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Professional Summary</h2>
            <div className="w-12 h-1 bg-primary mb-6"></div>
          </div>
          
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-invert prose-lg max-w-none text-muted-foreground"
            >
              <p className="text-xl leading-relaxed text-foreground/90 font-light mb-6">
                Seasoned Software Engineer with 10+ years of experience designing and building enterprise fintech platforms and cloud-native systems across payments, lending, recoveries, rewards and large-scale data systems.
              </p>
              
              <p className="mb-6">
                Proven track record architecting high throughput transaction processing systems, real-time ledger integrations and distributed services operating under 99.99% SLA requirements. Deep expertise in AWS platform engineering, CI/CD modernization and scalable event-driven architectures supporting high volume financial workloads.
              </p>
              
              <p>
                Passionate about financial technology, digital assets, blockchain systems and emerging AI driven platforms. I build robust, scalable tools that solve complex business problems with precision and reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
