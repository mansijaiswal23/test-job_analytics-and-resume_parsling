import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Search, Filter } from 'lucide-react';
import { toast } from 'sonner';

const initialJobs = [
  { id: 1, title: 'Frontend Developer', location: 'New York', company: 'Tech Solutions Inc.', type: 'Full-Time', salary: '$90,000 - $120,000' },
  { id: 2, title: 'Backend Engineer', location: 'Remote', company: 'Global Systems', type: 'Contract', salary: '$80 - $100 per hour' },
  { id: 3, title: 'UX Designer', location: 'San Francisco', company: 'Creative Minds', type: 'Full-Time', salary: '$95,000 - $130,000' },
  { id: 4, title: 'Product Manager', location: 'Chicago', company: 'Innovative Products', type: 'Full-Time', salary: '$110,000 - $150,000' },
  { id: 5, title: 'DevOps Engineer', location: 'Boston', company: 'Cloud Services', type: 'Full-Time', salary: '$100,000 - $140,000' },
  { id: 6, title: 'Data Scientist', location: 'Seattle', company: 'Data Insights', type: 'Part-Time', salary: '$65 - $85 per hour' },
  { id: 7, title: 'Mobile Developer', location: 'Austin', company: 'App Makers', type: 'Full-Time', salary: '$85,000 - $115,000' },
  { id: 8, title: 'QA Engineer', location: 'Denver', company: 'Quality Tech', type: 'Contract', salary: '$70 - $90 per hour' },
];

const JobAnalytics = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    let filteredJobs = [...initialJobs];
    if (search) {
      filteredJobs = filteredJobs.filter(job =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (location) {
      filteredJobs = filteredJobs.filter(job =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    if (sortBy === 'title') filteredJobs.sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === 'location') filteredJobs.sort((a, b) => a.location.localeCompare(b.location));
    if (sortBy === 'company') filteredJobs.sort((a, b) => a.company.localeCompare(b.company));
    setJobs(filteredJobs);
  }, [search, location, sortBy]);

  const handleDownloadCV = (jobId) => {
    toast.success(`CV for job #${jobId} downloading...`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 p-6 space-y-6 font-sans"
    >
      <h1 className="text-5xl font-extrabold text-center text-rose-600 tracking-tight animate-bounce font-[Indie_Flower]">
        Job Analytics
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex gap-2 flex-1">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search jobs or companies"
              className="pl-10 py-2 rounded-full border-2 border-rose-200 focus:border-rose-400 shadow-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="relative flex-1">
            <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Filter by location"
              className="pl-10 py-2 rounded-full border-2 border-rose-200 focus:border-rose-400 shadow-md"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[200px] rounded-full border-2 border-rose-200 focus:border-rose-400 shadow-md">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-rose-200 rounded-xl shadow-lg">
            <SelectItem value="title">Job Title</SelectItem>
            <SelectItem value="location">Location</SelectItem>
            <SelectItem value="company">Company</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
            >
              <Card className="rounded-3xl bg-white border border-rose-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-rose-600 mb-1 font-[Indie_Flower]">{job.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs bg-rose-100 text-rose-700 px-3 py-1 rounded-full shadow-sm">{job.location}</span>
                        <span className="text-xs bg-rose-100 text-rose-700 px-3 py-1 rounded-full shadow-sm">{job.type}</span>
                      </div>
                      <p className="text-gray-700 font-semibold">{job.salary}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDownloadCV(job.id)}
                      className="hover:bg-rose-100 transition-colors"
                    >
                      <Download className="h-5 w-5 text-rose-500" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="col-span-2 text-center py-10 text-gray-400 text-lg"
          >
            No jobs match your criteria
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default JobAnalytics;
