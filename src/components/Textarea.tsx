import type { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string };
export default function Textarea({ label, ...rest }: Props) {
  return (
    <label className="block mb-2">
      {label && <div className="text-sm text-gray-600 mb-1">{label}</div>}
      <textarea
        {...rest}
        className="w-full border rounded p-2 bg-white"
      />
    </label>
  );
}
