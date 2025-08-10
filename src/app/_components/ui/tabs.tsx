"use client";

import { ReactNode, useMemo, useState } from "react";
import { motion, AnimatePresence, type MotionProps } from "motion/react";
import type { ClassNameValue } from "tailwind-merge";

import { prepareClassName as cn } from "@/app/_lib/utils/classname-utils";

type TabsPropType = {
  tabs: { label: ReactNode; element: ReactNode }[];
  classNames?: Partial<Record<ClassNameKeys, ClassNameValue>>;
  motionProps?: MotionProps;
  currentTab: number;
  onSwitch: (newIndex: number) => void;
};

type ClassNameKeys = "root" | "labels" | "label" | "element";

export default function Tabs({
  tabs,
  classNames,
  motionProps,
  currentTab = 0,
  onSwitch,
}: TabsPropType) {
  return (
    <div
      className={cn("tabs__root flex w-fit flex-col gap-1", classNames?.root)}
    >
      <div
        role="tablist"
        className={cn("tabs__labels flex gap-4 px-2", classNames?.labels)}
      >
        {tabs.map(({ label }, ind) => (
          <span
            role="tab"
            aria-selected={ind === currentTab}
            tabIndex={0}
            key={ind}
            onClick={() => onSwitch(ind)}
            onKeyDown={(e) => {
              e.key === "Enter" && onSwitch(ind);
            }}
            className={cn(
              "tabs__label p cursor-pointer transition-colors hover:font-medium",
              ind === currentTab
                ? "font-medium text-(--fg_color-g)"
                : "text-neutral-600 dark:text-gray-300",
              classNames?.label,
            )}
          >
            {label}
          </span>
        ))}
      </div>

      <div className={cn("tabs__element p-2", classNames?.element)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            {...{
              initial: { opacity: 0, y: 6 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -6 },
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            {...motionProps}
          >
            {tabs[currentTab].element}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function DocsPreviewTabs({ tabs }: Pick<TabsPropType, "tabs">) {
  const [currentTab, setCurrentTab] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleSwitch = (ind: number) => {
    setDirection(ind > currentTab ? 1 : -1);
    setCurrentTab(ind);
  };

  const memoizedMotionProps = useMemo<MotionProps>(
    () => ({
      custom: direction,
      variants: {
        enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        // exit: (dir: number) => ({}),
      },
      initial: "enter",
      animate: "center",
      exit: "exit",
      transition: { duration: 0.25, ease: "easeOut" },
    }),
    [direction],
  );

  return (
    <Tabs
      currentTab={currentTab}
      onSwitch={handleSwitch}
      motionProps={memoizedMotionProps}
      classNames={{ root: "overflow-x-hidden" }}
      tabs={tabs}
    />
  );
}
