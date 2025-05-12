
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { UploadedFile } from '@/types/resume';
import { Download, Save, Upload } from 'lucide-react';
import { toast } from 'sonner';

const ResumeParsing = () => {
  const [file, setFile] = useState<UploadedFile | null>(null);
  const [parsedData, setParsedData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    education: '',
    skills: '',
  });
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Create a file URL for display purposes
      const fileUrl = URL.createObjectURL(selectedFile);
      setFile({
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
        url: fileUrl
      });
      
      // Mock parsing data - in a real app this would be an API call
      setTimeout(() => {
        // Simulate parsing the resume
        const mockParsedData = {
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '(555) 123-4567',
          experience: '5 years of experience in software development',
          education: 'BS in Computer Science, University of Technology',
          skills: 'JavaScript, React, Node.js, Python, SQL, AWS',
        };
        setParsedData(mockParsedData);
        toast.success('Resume successfully parsed!');
      }, 1500);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setParsedData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSave = () => {
    // In a real app, this would save to a database
    toast.success('Resume data saved successfully!');
  };
  
  const handleDownload = () => {
    // In a real app, this would generate a PDF or other document
    toast.success('Resume downloading...');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-navy-700">Resume Parsing</h1>
      
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="resume">Upload Resume</Label>
              <div className="flex items-center space-x-4">
                <div className="flex-grow">
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:bg-gray-50 transition">
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="resume" className="cursor-pointer flex flex-col items-center">
                      <Upload className="h-8 w-8 text-navy-500 mb-2" />
                      <span className="text-sm font-medium">
                        {file ? file.name : 'Click to upload or drag and drop'}
                      </span>
                      <span className="text-xs text-muted-foreground mt-1">
                        PDF, DOC, DOCX up to 10MB
                      </span>
                    </label>
                  </div>
                </div>
                
                {file && (
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={handleDownload}
                    >
                      <Download className="h-5 w-5" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            {file && (
              <>
                <h3 className="text-lg font-semibold">Parsed Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={parsedData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={parsedData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={parsedData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <Label htmlFor="experience">Experience</Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      rows={3}
                      value={parsedData.experience}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <Label htmlFor="education">Education</Label>
                    <Textarea
                      id="education"
                      name="education"
                      rows={2}
                      value={parsedData.education}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <Label htmlFor="skills">Skills</Label>
                    <Textarea
                      id="skills"
                      name="skills"
                      rows={2}
                      value={parsedData.skills}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button onClick={handleSave} className="bg-navy-600 hover:bg-navy-700">
                    <Save className="h-4 w-4 mr-2" />
                    Save Resume
                  </Button>
                  <Button onClick={handleDownload} variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeParsing;
