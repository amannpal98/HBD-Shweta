import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Heart, Stars, Sparkles } from "lucide-react";

const MessageSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    <section
      id="message"
      ref={sectionRef}
      className="content-section py-24 md:py-32 bg-gradient-to-b from-peach-lightest to-peach-light"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-peach-medium/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl"></div>

          <div className="flex justify-center mb-8">
            <div className="relative">
              <Heart className="text-peach-dark w-12 h-12" />
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Heart className="text-peach-darker w-12 h-12 opacity-50" />
              </motion.div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 text-peach-darker">
            A Special Message For You
          </h2>

          <div className="space-y-6 text-lg text-peach-darker/90 relative z-10">
            <p>
              Happy Birthday 🎂❤️🎉 to the most favorite person of my life 😩❤️
              I don’t know where to start, but I have a lot to say to you 🥺
              Today is your birthday, and it’s the best day for you to relax and
              enjoy the best things in your life 🥰🤭 This day, I wanna thank
              you for being in my life ❤️🙏 Thanks for your love ❤️ and support
              🧍‍♂️ I’ve always waited for this day because I wanted to make you
              feel special 😉 and try to make you more happiest 😊 You're the
              best I’ve in my life 🥳 More good life to my best friend — the one
              I can tell my soul to 🧍‍♂️ Who can relate to me like no one other 🥰
              Who I can laugh with with no extent — promise to always stick by
              your side through good and bad... I'm Alwyas With You ♾️❤️ All the
              times fighting with you and feeling nothing without you 🥺 And I
              am glad I have this person with whom I can speak my mind without
              the fear of being judged 🥰 You are one of the reasons for
              everything that’s happened in my life — mostly 😩 From my tantrums
              to my madness 😂 To all my happiness 🥰 and sadness — you have
              always stood there as a rock!! 🥰🪨 You are someone I can blindly
              count on — always till my last breath 🥹💗 I wish nothing but
              happiness, peace, prosperity, and love over your life ❤️🙏
            </p>

          </div>

          <div className="mt-10 flex justify-center">
            <motion.div
              className="inline-block bg-gradient-to-r from-peach-dark to-gold px-6 py-3 rounded-full text-white font-medium shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <Sparkles size={18} />
                <span> <p className="font-serif text-xl italic">
                " Happy Birthday to You !! 🎈"
              </p></span>
                <Sparkles size={18} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;
