import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, Clock, Users } from 'lucide-react';
import { toast } from 'sonner';

const demoSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  teamSize: z.string().min(1, 'Please select team size'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
});

type DemoFormData = z.infer<typeof demoSchema>;

const DemoPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema),
  });

  const onSubmit = async (data: DemoFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Demo scheduled! Check your email for confirmation.');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  // Generate available dates (next 14 days)
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date.toISOString().split('T')[0];
  });

  // Generate available times
  const times = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Book a Demo
            </h1>
            <p className="text-xl text-primary-200">
              See how Brandify can transform your brand management
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

                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="date" className="form-label">Preferred Date</label>
                    <select
                      id="date"
                      {...register('date')}
                      className="input-field"
                    >
                      <option value="">Select date</option>
                      {dates.map(date => (
                        <option key={date} value={date}>
                          {new Date(date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </option>
                      ))}
                    </select>
                    {errors.date && (
                      <p className="form-error">{errors.date.message}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="time" className="form-label">Preferred Time</label>
                    <select
                      id="time"
                      {...register('time')}
                      className="input-field"
                    >
                      <option value="">Select time</option>
                      {times.map(time => (
                        <option key={time} value={time}>
                          {time} EST
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="form-error">{errors.time.message}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? 'Scheduling...' : 'Schedule Demo'}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="feature-card">
                <Calendar className="feature-icon mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">30-Minute Demo</h3>
                <p className="text-primary-200">Personalized walkthrough of Brandify</p>
              </div>

              <div className="feature-card">
                <Clock className="feature-icon mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Flexible Timing</h3>
                <p className="text-primary-200">Choose a time that works for you</p>
              </div>

              <div className="feature-card">
                <Users className="feature-icon mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Bring Your Team</h3>
                <p className="text-primary-200">Invite colleagues to join the demo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;