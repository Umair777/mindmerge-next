 "use client";
 import { useState } from "react";

export default function CleanToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center gap-3">
      
      <span className="text-sm font-medium text-gray-700">
         {enabled ? "AI Version" : "Original"}
      </span>

      <div
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-300 ${
          enabled ? "bg-blue-500" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </div>

    </div>
  );
}
