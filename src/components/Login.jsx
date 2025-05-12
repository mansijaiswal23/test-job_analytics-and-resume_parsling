
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
    <div className="flex justify-center items-center min-h-[calc(100vh-12rem)] px-4 py-6 md:py-12 bg-gradient-to-b from-white to-slate-100">
      <Card className="w-full max-w-md border-navy-200 shadow-lg overflow-hidden">
        <div className="absolute h-2 w-full bg-gradient-to-r from-navy-400 to-navy-600 top-0 left-0"></div>
        <CardHeader className="space-y-2 pb-6 pt-8">
          <CardTitle className="text-xl md:text-3xl font-bold text-center text-navy-700">Welcome Back</CardTitle>
          <CardDescription className="text-center text-navy-500">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm md:text-base text-navy-600 font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-9 md:h-12 text-sm md:text-base border-navy-200 focus:border-navy-400 transition-all duration-200"
              />
              {errors.email && <p className="text-xs md:text-sm text-red-500">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm md:text-base text-navy-600 font-medium">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-9 md:h-12 text-sm md:text-base border-navy-200 focus:border-navy-400 transition-all duration-200"
              />
              {errors.password && <p className="text-xs md:text-sm text-red-500">{errors.password}</p>}
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-xs md:text-sm text-navy-600 hover:text-navy-800 transition-colors">
                Forgot password?
              </a>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 pb-8">
          <Button 
            className="w-full bg-navy-600 hover:bg-navy-700 h-9 md:h-12 text-sm md:text-base transition-all duration-200" 
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <p className="text-xs md:text-sm text-center mt-2 text-navy-500">
            Don't have an account?{" "}
            <a href="#" className="text-navy-600 hover:text-navy-800 hover:underline transition-colors font-medium">
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
