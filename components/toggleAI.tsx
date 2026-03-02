"use client";

export default function ToggleAI({
  enabled,
  setEnabled,
}: {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex items-center gap-2">
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