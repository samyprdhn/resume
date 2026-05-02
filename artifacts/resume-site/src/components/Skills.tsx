import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "Kotlin", "Go", "TypeScript"]
  },
  {
    title: "Cloud Platforms",
    skills: ["AWS (Certified)", "GCP", "Azure"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["OpenAI API", "AWS Bedrock", "Claude API", "Vector Databases", "RAG pipelines"]
  },
  {
    title: "Infrastructure & Containers",
    skills: ["Terraform", "CloudFormation", "Kubernetes", "Docker", "Artifactory", "Nexus"]
  },
  {
    title: "Databases & Storage",
    skills: ["Snowflake", "PostgreSQL", "Cassandra", "Oracle", "MongoDB", "DynamoDB", "Elasticsearch"]
  },
  {
    title: "CI/CD & Automation",
    skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"]
  },
  {
    title: "Monitoring & Observability",
    skills: ["New Relic", "CloudWatch", "Splunk", "Datadog"]
  },
  {
    title: "Blockchain & Web3",
    skills: ["Distributed ledgers", "Digital asset platforms", "Smart contracts"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Technical Arsenal</h2>
          <div className="w-12 h-1 bg-primary"></div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={item} className="space-y-4">
              <h3 className="text-lg font-medium text-foreground/90 font-mono tracking-tight">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-3 py-1.5 text-xs font-mono bg-background border border-border/50 text-muted-foreground rounded-md hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
