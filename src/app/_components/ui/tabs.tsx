"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { motion, AnimatePresence, type MotionProps } from "motion/react";

import { prepareClassName as cn } from "@/app/_lib/utils/classname-utils";

type TabsContextValue = {
  currentValue: string;
  setValue: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

export function TabsRoot({
  defaultValue,
  children,
  className,
}: {
  defaultValue: string;
  children: ReactNode;
  className?: string;
}) {
  const [currentValue, setCurrentValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ currentValue, setValue: setCurrentValue }}>
      <div className={cn("tabs__root flex flex-col gap-1", className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div role="tablist" className={cn("tabs__list mb-2 flex gap-4", className)}>
      {children}
    </div>
  );
}

export function TabsTrigger({
  value,
  children,
  className,
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsTrigger must be used inside TabsRoot");

  const isActive = ctx.currentValue === value;

  return (
    <span
      role="tab"
      aria-selected={isActive}
      tabIndex={0}
      onClick={() => ctx.setValue(value)}
      onKeyDown={(e) => e.key === "Enter" && ctx.setValue(value)}
      className={cn(
        "tabs__trigger cursor-pointer transition-colors hover:font-medium",
        isActive
          ? "font-medium text-(--fg_color-g)"
          : "text-neutral-600 dark:text-gray-300",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TabsBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("tabs__body", className)}>{children}</div>;
}

export function TabsContent({
  value,
  children,
  motionProps,
  className,
}: {
  value: string;
  children: ReactNode;
  motionProps?: MotionProps;
  className?: string;
}) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsContent must be used inside TabsRoot");

  const isActive = ctx.currentValue === value;

  return (
    <AnimatePresence mode="popLayout">
      {isActive ? (
        <motion.div
          key={value}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          {...motionProps}
          className={cn(className)}
        >
          {children}
        </motion.div>
      ): null}
    </AnimatePresence>
  );
}
