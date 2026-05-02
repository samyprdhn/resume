import { motion } from "framer-motion";

const experiences = [
  {
    company: "Ippon Technologies USA",
    location: "Richmond, VA",
    role: "Senior Software Engineer",
    period: "Jun 2021 — Apr 2026",
    projects: [
      {
        role: "Senior DevOps Consultant",
        client: "Stride",
        period: "Aug 2025 — Apr 2026",
        description: "Develop cloud native platform infrastructure supporting PowerSchool reporting and enterprise data workflows. Drive AWS infrastructure automation and CI/CD modernization using Terraform and GitHub Actions. Contribute to platform engineering via Spotify Portal.",
        bullets: [
          "Designed and delivered custom PowerSchool reporting dashboards",
          "Automated AWS infrastructure provisioning using Terraform (IAM, SSM, Secrets Manager, S3, SQS)",
          "Integrated Spotify Portal for service templating, configuration management, feature flagging",
          "Standardized Python packaging and CI/CD with Nexus artifact publishing and semantic versioning"
        ]
      },
      {
        role: "Lead Engineering Consultant",
        client: "Capital One",
        period: "Jul 2023 — Jul 2025",
        description: "Led backend platform integrations for Capital One's Shopping and Credit Card Loyalty platforms. Designed distributed system integrations for real-time transaction ingestion, rewards eligibility, and customer engagement.",
        bullets: [
          "Designed event-driven transaction ingestion pipelines integrating Capital One Shopping with enterprise credit card rewards platform",
          "Enabled reliable synchronization of transaction events with rewards ledger",
          "Led end-to-end integration between Capital One Shopping and loyalty services",
          "Managed and enhanced the Loyalty Policies API (earning rates, reward eligibility across credit card programs)",
          "Delivered platform enhancements supporting Discover account onboarding and cross-network rewards"
        ]
      },
      {
        role: "Cloud Engineering Consultant",
        client: "U.S. Government Entity",
        period: "May 2023 — Jul 2023",
        description: "Developed serverless data processing on AWS supporting AI-powered document ingestion and OCR extraction.",
        bullets: [
          "Built AWS Lambda functions (Python + SQLAlchemy) to transform OCR-extracted billing data into structured XML payloads"
        ]
      },
      {
        role: "Software Engineering Consultant",
        client: "Mission Lane",
        period: "Jun 2022 — Feb 2023",
        description: "Engineered backend microservices for customer communications and third-party service integrations.",
        bullets: [
          "Built Kotlin-based Spring Boot microservices for customer communication services",
          "Provisioned AWS and GCP infrastructure via Terraform",
          "Integrated Braze, Customer.io, and Twilio for multi-channel customer engagement"
        ]
      },
      {
        role: "DevOps Consultant",
        client: "Koalafi",
        period: "Jul 2021 — May 2022",
        description: "Designed DevOps solutions for containerized app development and Kubernetes deployments using Azure DevOps CI/CD.",
        bullets: [
          "Built standardized containerized Python environments (Conda/Anaconda) integrated with Azure DevOps and Kubernetes",
          "Implemented CI/CD quality controls: automated testing, security scanning, logging, monitoring",
          "Optimized container images and build processes"
        ]
      }
    ]
  },
  {
    company: "Capital One",
    location: "Richmond, VA",
    role: "Software Engineer",
    period: "Nov 2015 — May 2021",
    description: "Designed and built distributed backend systems and data pipelines for enterprise financial platforms.",
    bullets: [
      "Engineered cloud-native distributed backend services for enterprise payment and recoveries platforms",
      "Built backend services for enterprise document imaging systems (Elasticsearch, S3 across three systems of record)",
      "Built event-driven data pipelines using Kafka and Spring Boot",
      "Developed RESTful APIs backed by MongoDB, Cassandra, and PostgreSQL",
      "Engineered payment processing services enabling real-time 'open to buy' credit availability",
      "Owned resiliency strategy for enterprise payment APIs under ~99.99% SLA",
      "Led production incident response, root cause analysis, and disaster recovery exercises"
    ],
    projects: []
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Professional Experience</h2>
          <div className="w-12 h-1 bg-primary"></div>
        </div>

        <div className="space-y-24">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Company Header */}
              <div className="mb-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">{exp.company}</h3>
                  <div className="text-primary font-mono text-sm">{exp.period}</div>
                </div>
                <div className="text-lg text-muted-foreground font-medium mb-4">{exp.role} <span className="mx-2 opacity-50">|</span> {exp.location}</div>
                {exp.description && (
                  <p className="text-muted-foreground leading-relaxed max-w-4xl">{exp.description}</p>
                )}
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside max-w-4xl marker:text-primary/50">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Projects / Sub-roles */}
              {exp.projects && exp.projects.length > 0 && (
                <div className="space-y-12 pl-4 md:pl-8 border-l border-border/50">
                  {exp.projects.map((project, pIdx) => (
                    <div key={pIdx} className="relative">
                      <div className="absolute -left-[21px] md:-left-[37px] top-2 w-2 h-2 rounded-full bg-primary/50 border border-background"></div>
                      
                      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                        <h4 className="text-xl font-semibold text-foreground/90">
                          {project.role} <span className="text-muted-foreground font-normal mx-2">—</span> <span className="text-primary/90">{project.client}</span>
                        </h4>
                        <div className="text-muted-foreground font-mono text-xs">{project.period}</div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                      
                      <ul className="space-y-2 text-muted-foreground/80 list-none">
                        {project.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="relative pl-5 leading-relaxed text-sm">
                            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-secondary border border-primary/30 rotate-45"></span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
