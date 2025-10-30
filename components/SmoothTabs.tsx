"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface SmoothTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export default function SmoothTabs({ tabs, defaultTab, className = "" }: SmoothTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

  return (
    <div className={className}>
      {/* Tab Headers */}
      <div className="flex space-x-1 bg-navy-50 rounded-lg p-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative px-4 py-2 text-sm font-medium rounded-md transition-colors"
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white rounded-md shadow-sm"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className={`relative z-10 ${activeTab === tab.id ? "text-navy-900" : "text-slate"}`}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </motion.div>
    </div>
  );
}
