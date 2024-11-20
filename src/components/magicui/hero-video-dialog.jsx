"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import PulsatingButton from "@/components/magicui/pulsating-button";

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

export default function HeroVideoDialog({
                                          animationStyle = "from-center",
                                          videoSrc,
                                          thumbnailSrc,
                                          thumbnailAlt = "Video thumbnail",
                                          pulseColor = "#0096ff",
                                          duration = "1.5s",
                                          isVideoOpen,
                                          setIsVideoOpen,
                                          className
                                        }) {
  const selectedAnimation = animationVariants[animationStyle];

  return (
      <div className={cn("relative", className)}>
        <AnimatePresence>
          {isVideoOpen && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => setIsVideoOpen(false)} // This closes the modal on click outside
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 top-16 z-10 flex items-center justify-center bg-black/50 backdrop-blur-md"
              >
                <motion.div
                    {...selectedAnimation}
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    className="relative w-full max-w-4xl aspect-video mx-4 md:mx-0 z-50"
                    onClick={(e) => e.stopPropagation()} // Prevents closing the modal when clicking inside the video area
                >
                  <motion.button
                      onClick={() => setIsVideoOpen(false)} // Close modal on button click
                      className="absolute -top-12 right-0 text-white text-xl bg-neutral-900/50 ring-1 backdrop-blur-md rounded-full p-2 dark:bg-neutral-100/50 dark:text-black"
                  >
                    <XIcon className="size-5" />
                  </motion.button>
                  <div className="size-full border-2 border-white rounded-2xl overflow-hidden isolate z-[100] relative">
                    <iframe
                        src={videoSrc}
                        className="size-full rounded-2xl z-[101]"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        onClick={(e) => e.stopPropagation()} // Prevents closing the modal when interacting with the iframe
                    ></iframe>
                  </div>
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
}

