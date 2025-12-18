import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import {
  Building2,
  Sparkles,
  Truck,
  Building,
  Hammer,
  Home,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Residential Cleaning',
    description: 'Keep your home fresh and welcoming with our regular cleaning services. Perfect for busy professionals and families who want a consistently clean living space.',
    features: [
      'Weekly, bi-weekly, or monthly schedules',
      'All rooms and common areas',
      'Kitchen and bathroom deep cleaning',
      'Vacuuming and mopping all floors',
      'Dusting and surface cleaning',
      'Trash removal and organization',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'A thorough top-to-bottom clean for properties that need extra attention. Ideal for seasonal cleaning, pre-event preparation, or neglected spaces.',
    features: [
      'Inside cabinets and appliances',
      'Behind and under furniture',
      'Grout and tile scrubbing',
      'Window and blind cleaning',
      'Light fixtures and ceiling fans',
      'Baseboards and door frames',
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  },
  {
    icon: Truck,
    title: 'Move-In / Move-Out Cleaning',
    description: 'Complete cleaning for smooth property transitions. Whether you\'re moving in or out, we ensure the space is spotless for the next chapter.',
    features: [
      'Empty property deep clean',
      'Inside all closets and storage',
      'Appliance interior cleaning',
      'Window track and sill cleaning',
      'Wall spot cleaning',
      'Garage or storage area sweep',
    ],
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
  },
  {
    icon: Building,
    title: 'Office & Commercial Cleaning',
    description: 'Professional cleaning services for workspaces and commercial properties. Create a healthy, productive environment for your team and clients.',
    features: [
      'Daily or weekly schedules',
      'Reception and common areas',
      'Restroom sanitization',
      'Break room and kitchen cleaning',
      'Desk and workspace dusting',
      'Trash collection and recycling',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  },
  {
    icon: Hammer,
    title: 'Post-Renovation Cleaning',
    description: 'Detailed cleanup after construction or renovation work. We remove the dust and debris so you can enjoy your newly renovated space.',
    features: [
      'Construction dust removal',
      'Paint splatter cleaning',
      'Window and glass cleaning',
      'Floor scrubbing and polishing',
      'Air vent and filter cleaning',
      'Debris removal and disposal',
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
  },
];

export default function OtherServices() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Home className="w-4 h-4" />
              Additional Services
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              Cleaning Services for Every Need
            </h1>

            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Beyond Airbnb cleaning, we offer a full range of professional cleaning 
              services for homes, offices, and commercial properties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-teal-600" />
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>

                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={createPageUrl('Contact')}>
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg">
                      Request a Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Contact us and we'll help you find the perfect cleaning solution for your property.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="mt-8 bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-xl">
                Talk to Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}