import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { UploadedFile } from '@/types/resume';
import { Download, Save, Upload } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    }
  })
};

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
      const fileUrl = URL.createObjectURL(selectedFile);
      setFile({
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
        url: fileUrl
      });
      setTimeout(() => {
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
    toast.success('Resume data saved successfully!');
  };

  const handleDownload = () => {
    toast.success('Resume downloading...');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 py-10 h-full min-h-screen flex flex-col justify-start bg-gradient-to-r from-indigo-600 to-purple-800"
    >
      <motion.h1
        className="text-4xl font-extrabold text-center text-white mb-8 tracking-tight"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        🚀 Smart Resume Parser
      </motion.h1>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        <Card className="rounded-3xl shadow-2xl border border-gray-200 bg-gradient-to-r from-teal-200 to-teal-500">
          <CardContent className="p-8 sm:p-10 space-y-8">
            <div className="space-y-2">
              <Label htmlFor="resume" className="text-lg font-medium text-gray-800">
                Upload Resume
              </Label>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <motion.label
                  htmlFor="resume"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="block border-2 border-dashed border-blue-400 hover:bg-blue-100/30 bg-blue-50/20 rounded-xl p-6 text-center cursor-pointer transition shadow-sm w-full sm:w-auto"
                >
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <div className="flex flex-col items-center">
                    <Upload className="h-8 w-8 text-blue-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-700">
                      {file ? file.name : 'Click to upload or drag and drop'}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      PDF, DOC, DOCX up to 10MB
                    </span>
                  </div>
                </motion.label>

                {file && (
                  <motion.div whileHover={{ scale: 1.1 }} className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={handleDownload}>
                      <Download className="h-5 w-5" />
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>

            {file && (
              <>
                <motion.h3
                  className="text-xl font-semibold text-navy-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  📄 Parsed Information
                </motion.h3>

                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {['name', 'email', 'phone'].map((field, i) => (
                    <motion.div key={field} custom={i} variants={fadeIn} className="space-y-1.5">
                      <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                      <Input
                        id={field}
                        name={field}
                        value={parsedData[field as keyof  typeof parsedData]}

                        onChange={handleInputChange}
                        className="bg-gray-50 text-gray-700 border border-gray-300 rounded-lg p-3 shadow-sm"
                      />
                    </motion.div>
                  ))}
                  {['experience', 'education', 'skills'].map((field, i) => (
                    <motion.div
                      key={field}
                      className="space-y-1.5 sm:col-span-2"
                      custom={i + 3}
                      variants={fadeIn}
                    >
                      <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                      <Textarea
                        id={field}
                        name={field}
                        rows={field === 'skills' ? 2 : 3}
                        value={parsedData[field as keyof typeof parsedData]}
                        onChange={handleInputChange}
                        className="bg-gray-50 text-gray-700 border border-gray-300 rounded-lg p-3 shadow-sm"
                      />
                      {field === 'skills' && (
                        <motion.div
                          className="flex flex-wrap gap-2 mt-2"
                          initial="hidden"
                          animate="visible"
                          variants={{
                            visible: {
                              transition: {
                                staggerChildren: 0.05
                              }
                            }
                          }}
                        >
                          {parsedData.skills.split(',').map((skill, i) => (
                            <motion.span
                              key={i}
                              className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full shadow-sm"
                              variants={fadeIn}
                            >
                              {skill.trim()}
                            </motion.span>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex justify-end gap-3 pt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button
                      onClick={handleSave}
                      className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md hover:shadow-lg transition"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Resume
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button onClick={handleDownload} variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </motion.div>
                </motion.div>
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ResumeParsing;
