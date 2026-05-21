import { Metadata } from 'next';
import AuthLayout from '@/components/auth/AuthLayout';
import AuthIllustration from '@/components/auth/AuthIllustration';
import AuthCard from '@/components/auth/AuthCard';
import SignupForm from '@/components/auth/SignupForm';

export const metadata: Metadata = {
  title: 'Register - Faculty Online',
  description: 'Create a new Faculty Online account.',
};

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthIllustration />
      <AuthCard
        title="Create Your Account"
        description="Fill in your details below to get started."
      >
        <SignupForm />
      </AuthCard>
    </AuthLayout>
  );
}
