// src/components/LoginButton.jsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
    console.log("LoginButton is rendered"); 
  const navigate = useNavigate();

  return (
    <Button
      className="bg-orange-600 hover:bg-orange-700 text-red px-4 py-2 rounded-lg transition"
      onClick={() => navigate('/login')}
    >
      Login
    </Button>
  );
};

export default LoginButton;
