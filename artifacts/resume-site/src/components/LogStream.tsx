import { useEffect, useState, useRef } from "react";

type LogLevel = "INFO" | "OK" | "WARN" | "DEPLOY" | "CHAIN" | "EVENT" | "AUDIT";

interface LogEntry {
  level: LogLevel;
  system: string;
  message: string;
}

const LOG_ENTRIES: LogEntry[] = [
  { level: "DEPLOY", system: "k8s/payments-api",      message: "Rolling update complete — 99.99% SLA maintained across all pods" },
  { level: "EVENT",  system: "kafka/txn-ingestion",   message: "Transaction event received — routing to rewards eligibility engine" },
  { level: "OK",     system: "ledger/sync",           message: "Reward ledger synchronized — open-to-buy credit updated in real time" },
  { level: "CHAIN",  system: "dlc/node-0x4a2f",      message: "Block #8819204 validated — smart contract state committed to ledger" },
  { level: "INFO",   system: "aws/lambda",            message: "OCR payload extracted — billing data transformed to structured XML" },
  { level: "OK",     system: "loyalty/policies-api",  message: "Earning rate resolved — Discover card cross-network eligibility confirmed" },
  { level: "DEPLOY", system: "terraform/aws",         message: "IAM roles provisioned — SSM Parameter Store & Secrets Manager updated" },
  { level: "EVENT",  system: "kafka/recoveries",      message: "Collections event ingested — document indexed across 3 systems of record" },
  { level: "CHAIN",  system: "dlc/mempool",           message: "Digital asset transfer queued — awaiting 2-of-3 multisig confirmation" },
  { level: "INFO",   system: "ci-cd/github-actions",  message: "Build artifact published to Nexus — semantic version tag v2.14.1 released" },
  { level: "OK",     system: "payments/processor",    message: "Payment initiated — real-time credit availability restored instantly" },
  { level: "EVENT",  system: "braze/engagement",      message: "Reward trigger fired — multi-channel customer notification dispatched" },
  { level: "AUDIT",  system: "splunk/monitor",        message: "Incident resolved — root cause documented, resiliency runbook updated" },
  { level: "CHAIN",  system: "dlc/consensus",         message: "Distributed ledger consensus reached — finality confirmed across 7 nodes" },
  { level: "DEPLOY", system: "spotify-portal/svc",   message: "Service template registered — feature flag and config management active" },
  { level: "INFO",   system: "snowflake/pipeline",    message: "PowerSchool reporting dashboard refreshed — 1.2M rows processed in 4.1s" },
  { level: "OK",     system: "shopping/integration",  message: "Capital One Shopping linked to loyalty platform — eligibility pipeline live" },
  { level: "EVENT",  system: "kafka/open-to-buy",    message: "Settlement bypass applied — spending power restored before clearing cycle" },
  { level: "CHAIN",  system: "dlc/rag-pipeline",     message: "Vector embedding stored — RAG query resolved via AWS Bedrock in 38ms" },
  { level: "AUDIT",  system: "newrelic/apm",         message: "Anomaly detected and suppressed — payment API P99 latency within SLA bounds" },
  { level: "INFO",   system: "aws/sqs",              message: "Message batch queued — downstream recoveries workflow triggered via Lambda" },
  { level: "OK",     system: "k8s/mission-lane",     message: "Microservice deployed — Twilio & Customer.io integrations verified healthy" },
];

const LEVEL_COLORS: Record<LogLevel, string> = {
  INFO:   "text-sky-400",
  OK:     "text-emerald-400",
  WARN:   "text-amber-400",
  DEPLOY: "text-violet-400",
  CHAIN:  "text-cyan-300",
  EVENT:  "text-primary",
  AUDIT:  "text-rose-400",
};

function timestamp() {
  const now = new Date();
  return now.toISOString().replace("T", " ").slice(0, 19);
}

export function LogStream() {
  const [visible, setVisible] = useState<Array<LogEntry & { ts: string; key: number }>>([]);
  const counterRef = useRef(0);
  const indexRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const entry = LOG_ENTRIES[indexRef.current % LOG_ENTRIES.length];
      indexRef.current += 1;
      counterRef.current += 1;

      setVisible((prev) => {
        const next = [...prev, { ...entry, ts: timestamp(), key: counterRef.current }];
        return next.length > 8 ? next.slice(next.length - 8) : next;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visible]);

  return (
    <div className="mt-8 w-full max-w-2xl">
      <div className="rounded-xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden shadow-lg shadow-primary/5">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-primary/10 bg-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          <span className="ml-2 text-xs font-mono text-muted-foreground/50 tracking-widest">system.log</span>
        </div>

        <div
          ref={containerRef}
          className="h-44 overflow-hidden px-4 py-3 space-y-1.5 font-mono text-xs"
        >
          {visible.map((entry) => (
            <div
              key={entry.key}
              className="flex gap-2 items-start animate-[slideInLeft_0.35s_ease-out]"
              style={{ animationFillMode: "both" }}
            >
              <span className="text-muted-foreground/40 shrink-0 tabular-nums">{entry.ts}</span>
              <span className={`shrink-0 font-bold w-12 ${LEVEL_COLORS[entry.level]}`}>{entry.level}</span>
              <span className="text-primary/60 shrink-0 hidden sm:inline">{entry.system}</span>
              <span className="text-muted-foreground/80 leading-relaxed">{entry.message}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
