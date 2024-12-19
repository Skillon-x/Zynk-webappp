import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      if ( !formData.email || !formData.password) {
        setError('Please fill in all fields');
        setLoading(false);
        return;
      }

      const response = await axios.post('http://localhost:5000/users/login',{
        email: formData.email,
        password: formData.password

      },{
        headers:{
          'Content-Type': 'application/json',

        }
      })

      console.log(response)
      setSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        password: ''
      });
      if(response.data.success){
        navigate('/',{
          state: { 
            showNotification: true,
            message: `Welcome back, ${response.data.user.fullName || 'User'}!`,
            type: 'success'
          } 
        })
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
      console.error('Signup error:', err);
    } finally{
      setLoading(false);
    }
    // Add your login logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-800 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white/10 p-3 rounded-xl">
              <div className="text-white text-2xl font-bold">Zynk</div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-purple-200">Enter your credentials to access your account</p>
        </div>
        {error && (
              <div className="bg-red-500/20 text-red-300 p-3 rounded-lg mb-4 text-center">
                {error}
              </div>
        )}
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-purple-300" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full pl-10 pr-3 py-3 bg-white/10 border border-purple-400/20 rounded-lg 
                       text-white placeholder-purple-300 focus:outline-none focus:ring-2 
                       focus:ring-purple-400 focus:border-transparent"
              placeholder="Email address"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-purple-300" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full pl-10 pr-12 py-3 bg-white/10 border border-purple-400/20 
                       rounded-lg text-white placeholder-purple-300 focus:outline-none 
                       focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-purple-300" />
              ) : (
                <Eye className="h-5 w-5 text-purple-300" />
              )}
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-purple-200">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-purple-400/20 bg-white/10 text-purple-600 
                         focus:ring-purple-500 focus:ring-offset-0"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="/forgot-password" className="text-purple-200 hover:text-white">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 
                     text-white py-3 px-4 rounded-lg font-medium transition-colors"
          >
            <span>Sign In</span>
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-purple-200">
            Don't have an account?{' '}
            <a href="/signup" className="text-white hover:underline font-medium">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;