
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, Download, Save } from 'lucide-react';
import { toast } from 'sonner';

/**
 * @typedef {import('../types/resume').UploadedFile} UploadedFile
 */

const ResumeParsing = () => {
  /** @type {[UploadedFile | null, React.Dispatch<React.SetStateAction<UploadedFile | null>>]} */
  const [uploadedFile, setUploadedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: ''
  });

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} e 
   */
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // In a real app, this would upload to a server and get a URL back
      const mockUpload = {
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file)
      };
      
      setUploadedFile(mockUpload);
      
      // Mock auto-fill feature - in real app would call API
      setTimeout(() => {
        setFormData({
          name: 'Aman Raj',
          email: 'amanraj@example.com',
          phone: '(+91) 87123-47567',
          education: 'Bachelor of Science in Computer Science',
          experience: '3 years as Frontend Developer',
          skills: 'JavaScript, React, Node.js'
        });
        toast.success('Resume parsed successfully!');
      }, 1000);
    }
  };

  /**
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e 
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // In real app, this would save to database
    toast.success('Resume data saved successfully!');
  };

  const handleDownload = () => {
    // In real app, this would generate PDF
    toast.success('Resume downloading as PDF...');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Upload Resume</h2>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Input 
                type="file" 
                id="resumeUpload"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx"
              />
              <label 
                htmlFor="resumeUpload" 
                className="flex flex-col items-center cursor-pointer"
              >
                <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="text-muted-foreground">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PDF, DOC, DOCX (Max 5MB)
                </p>
              </label>
              
              {uploadedFile && (
                <div className="mt-4 text-sm">
                  <p className="font-medium">{uploadedFile.name}</p>
                  <p className="text-muted-foreground">
                    {Math.round(uploadedFile.size / 1024)} KB
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card className="flex-1">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Resume Data</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <Input 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="education" className="text-sm font-medium">
                  Education
                </label>
                <Input 
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="experience" className="text-sm font-medium">
                  Experience
                </label>
                <Input 
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="skills" className="text-sm font-medium">
                  Skills
                </label>
                <Input 
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-2 mt-6">
              <Button 
                variant="outline" 
                onClick={handleDownload}
                className="flex items-center gap-1"
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
              
              <Button 
                onClick={handleSave}
                className="flex items-center gap-1"
              >
                <Save className="h-4 w-4" />
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResumeParsing;
