"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function AutoRefreshComponent({ children }) {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      router.reload();
    }, 1000);

    return () => clearInterval(interval);
  }, [router]);

  return <>{children}</>;
}
