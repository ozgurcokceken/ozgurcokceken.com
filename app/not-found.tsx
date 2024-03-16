"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  const [count, setCount] = React.useState(5);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    if (count === 0) {
      router.push("/");
    }

    return () => clearInterval(interval);
  }, [router, count]);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl mb-5">Not found</h1>
      <p className="mb-5">
        Not found This link might be broken, deleted, or moved. Nevertheless,
        there’s nothing to see here...
      </p>

      <p className="mb-5">
        You will be redirected to the home page in {count} seconds.
      </p>
    </div>
  );
};

export default NotFound;
