"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Stats() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const participantCountRef = useRef(null);
  const speakerCountRef = useRef(null);
  const eventDayCountRef = useRef(null);

  const [participantCount, setParticipantCount] = useState(0);
  const [speakerCount, setSpeakerCount] = useState(0);
  const [eventDayCount, setEventDayCount] = useState(0);

  useEffect(() => {
    const revealCounts = () => {
      const revealInterval = setInterval(() => {
        if (isIntersecting) {
          if (participantCount < 100) {
            setParticipantCount((prevCount) => Math.min(prevCount + 10, 100));
          }
          if (speakerCount < 6) {
            setSpeakerCount((prevCount) => Math.min(prevCount + 1, 6));
          }
          if (eventDayCount < 2) {
            setEventDayCount((prevCount) => Math.min(prevCount + 1, 2));
          }
        } else {
          clearInterval(revealInterval); // Clear interval if not intersecting
        }

        if (
          participantCount >= 100 &&
          speakerCount >= 6 &&
          eventDayCount >= 2
        ) {
          clearInterval(revealInterval);
        }
      }, 50);
    };

    revealCounts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      });
    }, options);

    if (participantCountRef.current) {
      observer.observe(participantCountRef.current);
    }
    if (speakerCountRef.current) {
      observer.observe(speakerCountRef.current);
    }
    if (eventDayCountRef.current) {
      observer.observe(eventDayCountRef.current);
    }

    return () => {
      if (participantCountRef.current) {
        observer.unobserve(participantCountRef.current);
      }
      if (speakerCountRef.current) {
        observer.unobserve(speakerCountRef.current);
      }
      if (eventDayCountRef.current) {
        observer.unobserve(eventDayCountRef.current);
      }
    };
  }, []);

  return (
    <section className="flex items-center justify-evenly h-[50vh] w-[100vw] bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] text-white">
      <AnimatePresence>
        <motion.div
          ref={participantCountRef}
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-5xl font-bold text-[#697565]">
            {participantCount}+
          </p>
          <p>Participants</p>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          ref={speakerCountRef}
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-5xl font-bold text-[#697565]">{speakerCount}+</p>
          <p>Speakers</p>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          ref={eventDayCountRef}
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-5xl font-bold text-[#697565]">
            {eventDayCount}
          </p>
          <p>Days</p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
