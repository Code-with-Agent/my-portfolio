"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const standardEasing = [0.22, 1, 0.36, 1] as const;

export interface BaseAnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/* 1. FadeUp */
export function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  className,
}: BaseAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : duration,
        delay,
        ease: standardEasing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* 2. FadeIn */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
}: BaseAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : duration,
        delay,
        ease: standardEasing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* 3. ScaleIn */
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.45,
  className,
}: BaseAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : duration,
        delay,
        ease: standardEasing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* 4. StaggerContainer */
export interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* 5. StaggerItem */
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: shouldReduceMotion ? 0.01 : 0.4,
            ease: standardEasing,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* 6. HoverLift */
export function HoverLift({
  children,
  className,
  liftAmount = -3,
}: {
  children: React.ReactNode;
  className?: string;
  liftAmount?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: liftAmount, transition: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* 7. RevealOnScroll */
export function RevealOnScroll({
  children,
  className,
  threshold = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.55,
        ease: standardEasing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
