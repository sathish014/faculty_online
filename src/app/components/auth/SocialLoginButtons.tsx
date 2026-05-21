import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FaMicrosoft, FaGoogle } from 'react-icons/fa';

export default function SocialLoginButtons() {
  const [isLoading, setIsLoading] = useState<'google' | 'microsoft' | null>(null);

  const handleSocialLogin = (provider: 'google' | 'microsoft') => {
    setIsLoading(provider);
    // Simulate network delay
    setTimeout(() => {
      setIsLoading(null);
    }, 1500);
  };

  return (
    <div className="flex flex-col space-y-3">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-200 dark:border-slate-800" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-slate-900 px-2 text-slate-500 font-medium tracking-wide">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          type="button"
          disabled={isLoading !== null}
          onClick={() => handleSocialLogin('google')}
          className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 transition-all shadow-sm font-medium"
        >
          {isLoading === 'google' ? (
            <svg className="mr-2 h-4 w-4 animate-spin text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <FaGoogle className="mr-2 h-4 w-4 text-slate-700 dark:text-slate-300" />
          )}
          Google
        </Button>
        <Button
          variant="outline"
          type="button"
          disabled={isLoading !== null}
          onClick={() => handleSocialLogin('microsoft')}
          className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 transition-all shadow-sm font-medium"
        >
          {isLoading === 'microsoft' ? (
            <svg className="mr-2 h-4 w-4 animate-spin text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <FaMicrosoft className="mr-2 h-4 w-4 text-slate-700 dark:text-slate-300" />
          )}
          Microsoft
        </Button>
      </div>
    </div>
  );
}
