import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

const images = [
  {
    src: "/image1.jpg",
    alt: "Special moments",
    caption: "Angel",
  },
  {
    src: "/image2.jpg",
    alt: "Beautiful memories",
    caption: "Sweetiee",
  },
  {
    src: "/image3.jpg",
    alt: "Precious times",
    caption: "Baby",
  },
  {
    src: "/image4.jpg",
    alt: "Happy moments",
    caption: "Killer",
  },
  {
    src: "/image5.jpg",
    alt: "Beautiful views",
    caption: "Cutiee",
  },
  {
    src: "/image6.jpg",
    alt: "Beautiful views",
    caption: "Gorgeous",
  }
];

const GallerySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="content-section py-24 md:py-32 bg-gradient-to-b from-peach-light to-peach"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-3 bg-white/70 backdrop-blur-sm rounded-full mb-4">
            <ImageIcon className="text-peach-darker w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-peach-darker mb-4">
            Beautiful Memories
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-peach-darker/80">
            A collection of special moments capturing the joy and beauty of life's journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white w-full">
                  <p className="font-medium text-lg">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;