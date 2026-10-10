import React from "react";

function Pre() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[999] grid place-items-center bg-paper"
    >
      <span className="h-10 w-10 animate-pulse rounded-full bg-signal" />
    </div>
  );
}

export default Pre;
