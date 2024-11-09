import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FileSearch, Shield, Users } from 'lucide-react';
import { toast } from 'sonner';

const trialSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  teamSize: z.string().min(1, 'Please select team size'),
});

type TrialFormData = z.infer<typeof trialSchema>;

const TrialPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<TrialFormData>({
    resolver: zodResolver(trialSchema),
  });

  const onSubmit = async (data: TrialFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Trial account created! Check your email for next steps.');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Start Your Free Trial
            </h1>
            <p className="text-xl text-primary-200">
              14 days free, no credit card required
            </p>
          </div>

          <div className="grid md:grid-cols-[2fr,1fr] gap-12">
            <div className="bg-primary-900/50 backdrop-blur-sm p-8 rounded-xl border border-primary-700">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className="input-field"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="form-error">{errors.name.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="input-field"
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="form-error">{errors.email.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    {...register('company')}
                    className="input-field"
                    placeholder="Acme Inc."
                  />
                  {errors.company && (
                    <p className="form-error">{errors.company.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="teamSize" className="form-label">Team Size</label>
                  <select
                    id="teamSize"
                    {...register('teamSize')}
                    className="input-field"
                  >
                    <option value="">Select team size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501+">501+ employees</option>
                  </select>
                  {errors.teamSize && (
                    <p className="form-error">{errors.teamSize.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? 'Creating your account...' : 'Start Free Trial'}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="feature-card">
                <FileSearch className="feature-icon mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Full Access</h3>
                <p className="text-primary-200">Try all features with no limitations during your trial</p>
              </div>

              <div className="feature-card">
                <Shield className="feature-icon mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Secure</h3>
                <p className="text-primary-200">Enterprise-grade security from day one</p>
              </div>

              <div className="feature-card">
                <Users className="feature-icon mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Team Ready</h3>
                <p className="text-primary-200">Invite your entire team during the trial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialPage;