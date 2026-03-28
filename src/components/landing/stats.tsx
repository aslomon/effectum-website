const STATS = [
  { value: 42, label: "Workflow commands", suffix: "" },
  { value: 7, label: "Modular stacks", suffix: "" },
  { value: 25, label: "Specialized agents", suffix: "" },
  { value: 43, label: "Skills", suffix: "+" },
  { value: 446, label: "Tests passing", suffix: "" },
];

export function Stats() {
  return (
    <div
      className="gradient-divider mx-auto max-w-5xl"
      aria-hidden="true"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold tabular-nums text-accent sm:text-5xl">
                {stat.value}{stat.suffix}
              </div>
              <p className="mt-1.5 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
