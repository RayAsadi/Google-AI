
// Added React import to resolve the 'React' namespace error when using React.ReactNode
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Message {
  role: 'user' | 'assistant';
  text: string;
}
