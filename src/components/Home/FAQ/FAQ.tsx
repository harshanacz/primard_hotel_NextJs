"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Do you offer special packages for couples?",
    answer: "Yes, we offer romantic getaway packages that include spa treatments, dinner, and a special room setup.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in is at 2:00 PM, and check-out is at 11:00 AM. Late check-out is available upon request based on availability.",
  },
  {
    question: "Is there a shuttle service available?",
    answer: "Yes, we provide a complimentary shuttle service to and from the local train station. Please inform us in advance if you need this service.",
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Absolutely. Our restaurant offers vegetarian, vegan, and gluten-free options. Please inform us of any specific dietary needs when booking.",
  },
  {
    question: "Is there free Wi-Fi available?",
    answer: "Yes, we provide free high-speed Wi-Fi in all guest rooms and public areas of the hotel.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-yellow-50 to-white text-yellow-800 mx-4 sm:mx-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-black">Frequently Asked Questions</h2>
        <p className="text-lg md:text-xl text-gray-600">Find answers to the most common questions here.</p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div data-aos="zoom-in" key={index} className="mb-6">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 bg-yellow-100 rounded-lg focus:outline-none"
            >
              <h3 className="text-xl font-bold text-black">{faq.question}</h3>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0.8 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0.8 }}
                  transition={{ duration: 0.25, ease: [0.42, 0, 0.58, 1] }}
                  className="overflow-hidden bg-white p-4 border-l-4 border-yellow-500 rounded-lg"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
