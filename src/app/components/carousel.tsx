"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../ui/carousel";
import image1 from '../../../public/1.jpg';
import image2 from '../../../public/2.jpg';
import image3 from '../../../public/3.jpg';
import image4 from '../../../public/4.jpg';
import image5 from '../../../public/5.jpg'; // Replaced speaker
import image6 from '../../../public/6.jpg'; // Replaced speaker

export function FOSSpeakerCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-center text-xl md:text-5xl font-bold text-neutral-50 dark:text-neutral-50 font-sans">
        Meet the FOSS Speakers
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const SpeakerContent = ({ description, imageUrl }: { description: { title: string; details: string[]; alt: string }; imageUrl: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {description.title}
        </span>
        {description.details.join(' ')}
      </p>
      <Image
        src={imageUrl}
        alt={description.alt}
        height={500}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full pt-8 w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    id: 1,
    category: "Artificial Intelligence and Machine Learning",
    title: "Andrew Ng",
    src: image1.src, // Use image URL string
    content: (
      <SpeakerContent
        description={{
          title: "Andrew Ng: Pioneering Machine Learning",
          details: [
            "Discussing the future of machine learning, focusing on linear regression and classification techniques, and exploring their application across industries."
          ],
          alt: "Andrew Ng speaking on Artificial Intelligence and Machine Learning",
        }}
        imageUrl={image1.src} // Use image URL string
      />
    ),
  },
  {
    id: 2,
    category: "Software Development and Python",
    title: "Guido van Rossum",
    src: image2.src, // Use image URL string
    content: (
      <SpeakerContent
        description={{
          title: "Guido van Rossum: The Creator of Python",
          details: [
            "Highlighting the importance of collaborative development in software engineering, Python's role in modern development workflows, and strategies to foster project collaboration."
          ],
          alt: "Guido van Rossum discussing Software Development and Python",
        }}
        imageUrl={image2.src} // Use image URL string
      />
    ),
  },
  {
    id: 3,
    category: "Software Freedom and Ethics",
    title: "Richard Stallman",
    src: image3.src, // Use image URL string
    content: (
      <SpeakerContent
        description={{
          title: "Richard Stallman: Champion of Software Freedom",
          details: [
            "Delving into the philosophy of software freedom, the ethical implications of software development, and the critical need to protect user freedoms."
          ],
          alt: "Richard Stallman on Software Freedom and Ethics",
        }}
        imageUrl={image3.src} // Use image URL string
      />
    ),
  },
  {
    id: 4,
    category: "Open Source Ecosystem",
    title: "Mitchell Baker",
    src: image4.src, // Use image URL string
    content: (
      <SpeakerContent
        description={{
          title: "Mitchell Baker: Leading Mozilla",
          details: [
            "Addressing the challenges and opportunities within the open-source ecosystem and sharing strategies for maintaining vibrant open-source projects."
          ],
          alt: "Mitchell Baker speaking on the Open Source Ecosystem",
        }}
        imageUrl={image4.src} // Use image URL string
      />
    ),
  },
  {
    id: 5,
    category: "Cybersecurity",
    title: "Kevin Mitnick", // Replaced speaker
    src: image5.src, // Use image URL string
    content: (
      <SpeakerContent
        description={{
          title: "Kevin Mitnick: The Art of Cybersecurity",
          details: [
            "Offering insights into the world of cybersecurity, discussing the significance of ethical hacking, and presenting real-world examples of cybersecurity breaches and defenses."
          ],
          alt: "Kevin Mitnick discussing Cybersecurity",
        }}
        imageUrl={image5.src} // Use image URL string
      />
    ),
  },
  {
    id: 6,
    category: "Technology and Innovation",
    title: "Elon Musk", // Replaced speaker
    src: image6.src, // Use image URL string
    content: (
      <SpeakerContent
        description={{
          title: "Elon Musk: Innovating the Future",
          details: [
            "Exploring a vision for the future of technology and space exploration, sustainable energy solutions, and innovative approaches to global challenges."
          ],
          alt: "Elon Musk on Technology and Innovation",
        }}
        imageUrl={image6.src} // Use image URL string
      />
    ),
  },
];
