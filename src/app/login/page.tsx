import { Metadata } from 'next';
import AuthLayout from '@/components/auth/AuthLayout';
import AuthIllustration from '@/components/auth/AuthIllustration';
import AuthCard from '@/components/auth/AuthCard';
import LoginForm from '@/components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Login - Faculty Online',
  description: 'Sign in to your Faculty Online account.',
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthIllustration />
      <AuthCard
        title="Welcome Back"
        description="Enter your credentials to access your account."
      >
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
}
