'use client'
import React, { useState } from 'react';

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginPage: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-md">
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-gray-600">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="mt-1 p-2 w-full border rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 p-2 w-full border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Login
      </button>
    </form>
  );
};

export default LoginPage;
