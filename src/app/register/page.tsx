import { Metadata } from 'next';
import AuthLayout from '@/components/auth/AuthLayout';
import AuthIllustration from '@/components/auth/AuthIllustration';
import AuthCard from '@/components/auth/AuthCard';
import SignupForm from '@/components/auth/SignupForm';

export const metadata: Metadata = {
  title: 'Create Account - FacultyOnline',
  description: 'Sign up as a Tutor or Student and join FacultyOnline today.',
};

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthIllustration />
      <AuthCard
        title="Create Your Account"
        description="Choose your role and fill in your details to get started."
      >
        <SignupForm />
      </AuthCard>
    </AuthLayout>
  );
}
