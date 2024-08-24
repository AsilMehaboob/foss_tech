import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SpeakerFAQ {
  question: string;
  answer: string;
}

const speakerFAQs: SpeakerFAQ[] = [
  {
    question: "What is the FOSS Summit?",
    answer: "The FOSS Summit is an event that brings together experts and enthusiasts in Free and Open Source Software to discuss the latest trends, projects, and opportunities in the FOSS community.",
  },
  {
    question: "Who are the speakers at the summit?",
    answer: "The summit features a range of speakers from leading organizations and projects in the FOSS ecosystem. Each speaker will present on their area of expertise and provide insights into their work.",
  },
  {
    question: "What topics will be covered?",
    answer: "Topics will include software development practices, emerging technologies in open source, case studies of successful FOSS projects, and more.",
  },
  {
    question: "Is the event open to everyone?",
    answer: "Yes, the event is open to students, professionals, and anyone interested in Free and Open Source Software. We encourage participation from diverse backgrounds.",
  },
  {
    question: "How can I register for the event?",
    answer: "Registration details can be found on our official event page. Be sure to register early to secure your spot and receive event updates.",
  },
];

const FOSSAccordion: React.FC = () => {
  return (
    <Accordion type="single" collapsible>
      {speakerFAQs.map((faq, index) => (
        <AccordionItem key={index}  value={`item-${index}`}>
          <AccordionTrigger className="text-white">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-white max-h-32 overflow-hidden transition-all duration-300 ease-in-out">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FOSSAccordion;
