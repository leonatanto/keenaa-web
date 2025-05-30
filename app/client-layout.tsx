"use client";

import LoadingOverlay from "@/components/LoadingOverlay";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingOverlay />}
      </AnimatePresence>
      {!isLoading && children}
    </>
  );
} 