"use client";

import { useEffect, useState } from "react";
import Preloader from "./preloader"; // Adjust the path as needed

export default function ClientPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return loading ? <Preloader /> : null;
}
