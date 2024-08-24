import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'; // Import from heroicons

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="relative mb-3">
      <h6 className="mb-0">
        <button
          className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-gray-700 text-white rounded-t-1 group"
          onClick={onToggle}
        >
          <span>{title}</span>
          <ChevronDownIcon
            className={`absolute right-0 w-5 h-5 pt-1 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'} text-white`}
            style={{ transition: 'transform 0.3s ease-in-out' }}
          />
        </button>
      </h6>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'h-auto' : 'h-0'}`}
      >
        <div className="p-4 text-sm leading-normal text-white">
          {content}
        </div>
      </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      title: 'What is the FOSS Summit?',
      content: "The FOSS Summit is an event organized by our college to promote Free and Open Source Software (FOSS) culture. It includes workshops, talks, and networking opportunities for students and professionals interested in open-source technology.",
    },
    {
      title: 'How can I participate?',
      content: "You can participate by registering on our event website. We also encourage volunteers to help with the event logistics and promotion. Check our website for more details on registration and volunteering opportunities.",
    },
    {
      title: 'What should I expect at the summit?',
      content: "Expect a variety of sessions including keynote speeches from industry experts, hands-on workshops on open-source tools and technologies, and panel discussions on the future of FOSS. There will also be opportunities for networking with professionals and other enthusiasts.",
    },
    {
      title: 'Will there be any keynote speakers?',
      content: "Yes, the summit will feature keynote speeches from leading figures in the open-source community. These speakers will share their insights and experiences, providing valuable knowledge on the latest trends and advancements in FOSS.",
    },
    {
      title: 'How can I stay updated about the event?',
      content: "You can stay updated by following our official social media channels and subscribing to our newsletter. We will provide regular updates, including schedule changes, speaker announcements, and other important information about the summit.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black p-6">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
