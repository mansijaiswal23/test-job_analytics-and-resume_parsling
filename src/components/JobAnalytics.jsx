import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Search, Filter } from 'lucide-react';
import { toast } from 'sonner';

// Sample job data
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

  // Apply filtering
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
    
    // Apply sorting
    if (sortBy === 'title') {
      filteredJobs.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'location') {
      filteredJobs.sort((a, b) => a.location.localeCompare(b.location));
    } else if (sortBy === 'company') {
      filteredJobs.sort((a, b) => a.company.localeCompare(b.company));
    }
    
    setJobs(filteredJobs);
  }, [search, location, sortBy]);

  const handleDownloadCV = (jobId) => {
    // In a real app, this would trigger an API call to download CV
    toast.success(`CV for job #${jobId} downloading...`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-navy-700">Job Analytics</h1>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex gap-2 flex-1">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search job titles or companies"
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="relative flex-1">
            <Filter className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Filter by location"
              className="pl-10"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="title">Job Title</SelectItem>
            <SelectItem value="location">Location</SelectItem>
            <SelectItem value="company">Company</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <Card key={job.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className="text-sm bg-navy-100 text-navy-700 px-2 py-1 rounded-full">
                        {job.location}
                      </span>
                      <span className="text-sm bg-navy-100 text-navy-700 px-2 py-1 rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <p className="mt-2 text-muted-foreground">{job.salary}</p>
                  </div>
                  <Button 
                    variant="outline"
                    size="icon"
                    onClick={() => handleDownloadCV(job.id)}
                  >
                    <Download className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-2 text-center py-10">
            <p className="text-muted-foreground">No jobs match your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobAnalytics;
