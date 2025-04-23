import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Clock, Star } from 'lucide-react';

const timelineEvents = [
  {
    year: "24/04/2004",
    title: "Your First Day",
    description: "The beginning of a pure heart person life."
  },
  {
    year: "18/10/2023",
    title: "Our First Meet",
    description: "After 20 years, 5 months, and 24 days, we met by coincidence.",

  },
  {
    year: "09/11/2023",
    title: "Memorable Trip",
    description: "If you remember, we went out for the first time and spent 10 hours together."
  },
  {
    year: "25/11/2023",
    title: "Special Day",
    description: "When we were at Lohia Park, you hugged me and didn’t want to let go. That moment was so special to me."
  },
  {
    year: "16/01/2025",
    title: "New Beginnings",
    description: "I made many mistakes, but you forgave me and gave us a new beginning. Thank you for that."
  }
];

const TimelineSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="content-section py-24 md:py-32 bg-gradient-to-b from-peach to-peach-medium"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-3 bg-white/70 backdrop-blur-sm rounded-full mb-4">
            <Clock className="text-peach-darker w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Journey Through Time
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80">
            Celebrating the beautiful moments that have shaped your wonderful journey.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-white/50"></div>
          
          {/* Timeline events */}
          <div className="space-y-12 md:space-y-24 relative">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center justify-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8">
                  <div className={`max-w-md bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="mb-2 flex items-center gap-2 justify-center md:justify-start">
                      <Star className="text-gold w-5 h-5" fill="currentColor" />
                      <span className="font-serif font-bold text-lg text-gold">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-peach-darker mb-2">
                      {event.title}
                    </h3>
                    <p className="text-peach-darker/80">
                      {event.description}
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-center md:w-4">
                  <div className="h-4 w-4 rounded-full bg-white"></div>
                  <div className="absolute h-6 w-6 rounded-full bg-white/50 animate-ping"></div>
                </div>
                
                <div className="hidden md:block md:w-1/2 md:pl-8"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;