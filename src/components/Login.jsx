import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const isMobile = useIsMobile();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, this would make an API call
      toast.success('Login successful!');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-12rem)] px-4 py-6 md:py-12 bg-gradient-to-b from-indigo-600 to-purple-600 animate-gradient">
      <Card className="w-full max-w-md border-none rounded-xl shadow-2xl overflow-hidden bg-white">
        <div className="absolute h-2 w-full bg-gradient-to-r from-indigo-500 to-purple-500 top-0 left-0 rounded-t-xl"></div>
        <CardHeader className="space-y-2 pb-6 pt-8">
          <CardTitle className="text-2xl md:text-4xl font-bold text-center text-gray-800">Welcome Back</CardTitle>
          <CardDescription className="text-center text-gray-600">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base text-gray-700 font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-base border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 transition-all duration-300 rounded-md shadow-md"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-base text-gray-700 font-medium">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-base border-gray-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 transition-all duration-300 rounded-md shadow-md"
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors">Forgot password?</a>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 pb-8">
          <Button 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-12 text-base transition-all duration-300 rounded-md shadow-md"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <p className="text-sm text-center mt-2 text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors font-medium">
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
