import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Users, Clock, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

const staffBenefits = [
  'Professional, trained cleaning staff',
  'Available for homes and offices',
  'Flexible scheduling options',
  'Consistent quality standards',
  'Background-checked personnel',
  'Fully insured and supervised',
  'All supplies and equipment included',
];

const pricingFactors = [
  {
    icon: Clock,
    title: 'Hours Per Day',
    description: 'Choose from 4, 6, or 8 hour shifts',
  },
  {
    icon: Calendar,
    title: 'Days Per Week',
    description: 'From 3 days to full 7-day coverage',
  },
  {
    icon: Users,
    title: 'Team Size',
    description: 'Single cleaner or multi-person teams',
  },
];

export default function FullTimeStaff() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-100 rounded-full px-4 py-2 mb-4">
            <Users className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-700 text-sm font-medium">Full-Time Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Dedicated Full-Time Cleaning Staff
          </h2>
          <p className="text-lg text-slate-600">
            We supply professional full-time cleaning staff for residential homes, offices, 
            and commercial properties. Tailored to your schedule and requirements.
          </p>
        </motion.div>

        {/* Pricing Factors */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                <factor.icon className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {factor.title}
              </h3>
              <p className="text-slate-600">{factor.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-cyan-50 to-slate-50 rounded-3xl p-8 lg:p-12 mb-12"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            What's Included
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {staffBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-slate-600 mb-6">
            Custom rates based on your specific requirements
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
              Get a Custom Quote
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}