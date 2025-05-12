
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import JobAnalytics from './JobAnalytics';
import ResumeParsing from './ResumeParsing';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('job-analytics');

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <Tabs 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="job-analytics">
            Job Analytics
          </TabsTrigger>
          <TabsTrigger value="resume-parsing">
            Resume Parsing
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="job-analytics" className="mt-0">
          <JobAnalytics />
        </TabsContent>
        
        <TabsContent value="resume-parsing" className="mt-0">
          <ResumeParsing />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
