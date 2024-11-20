"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  isYear = false
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    isInView &&
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() =>
    springValue.on("change", (latest,year) => {
      if (ref.current) {
        ref.current.textContent = isYear ? Number(latest.toFixed(0)).toString() : Intl.NumberFormat("en-US").format(Number(latest.toFixed(0)));
        // Intl.NumberFormat("en-US").format(Number(latest.toFixed(0)));
      }
    }), [springValue,isYear]);

  return (
    (<span
      className={cn(
        "inline-block tabular-nums text-black dark:text-white tracking-wider",
        className
      )}
      ref={ref} />)
  );
}
