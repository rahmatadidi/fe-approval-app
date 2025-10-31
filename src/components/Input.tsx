import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & { label?: string };
export default function Input({ label, ...rest }: Props) {
  return (
    <label className="block mb-2">
      {label && <div className="text-sm text-gray-600 mb-1">{label}</div>}
      <input
        {...rest}
        className="w-full border rounded p-2 bg-white"
      />
    </label>
  );
}
