"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";

const STATS = [
  { value: 28, label: "Workflow commands", suffix: "" },
  { value: 7, label: "Modular stacks", suffix: "" },
  { value: 19, label: "Specialized agents", suffix: "" },
  { value: 22, label: "Skills", suffix: "+" },
  { value: 389, label: "Tests passing", suffix: "" },
];

function Counter({ value, isInView }: { value: number; isInView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 1.2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return <motion.span>{rounded}</motion.span>;
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="gradient-divider mx-auto max-w-5xl"
      aria-hidden="true"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold tabular-nums text-accent sm:text-5xl">
                <Counter value={stat.value} isInView={isInView} />
                {stat.suffix}
              </div>
              <p className="mt-1.5 text-sm text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
