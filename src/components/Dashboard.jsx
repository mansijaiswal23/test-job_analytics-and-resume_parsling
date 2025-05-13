import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import JobAnalytics from './JobAnalytics';
import ResumeParsing from './ResumeParsing';
import { motion } from 'framer-motion';
import LoginButton from './LoginButton';  // Correct import path

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('job-analytics');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
       
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 sm:px-8 py-10 bg-gradient-to-br from-[#fef9f4] to-[#f8f1ea] text-red-800 dark:from-[#1a1a1a] dark:to-[#2c2c2c] dark:text-red-100"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-orange-700 dark:text-orange-300 tracking-tight">
          🧵 Dashboard
        </h1>

        {/* Add the LoginButton here */}
        <div className="flex justify-center mb-6">
          <LoginButton />  
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 gap-2 bg-orange-100 dark:bg-orange-950 p-2 rounded-xl shadow-inner">
            <TabsTrigger
              value="job-analytics"
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white transition rounded-lg py-2 font-medium"
            >
              📊 Job Analytics
            </TabsTrigger>
            <TabsTrigger
              value="resume-parsing"
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white transition rounded-lg py-2 font-medium"
            >
              📄 Resume Parsing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="job-analytics" className="mt-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl shadow-lg p-6 sm:p-8"
            >
              <JobAnalytics />
            </motion.div>
          </TabsContent>

          <TabsContent value="resume-parsing" className="mt-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl shadow-lg p-6 sm:p-8"
            >
              <ResumeParsing />
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Dashboard;
