type Props = {
  currentPage: number;
  totalPages: number;
  onChange: (p: number) => void;
};
export default function Pagination({
  currentPage,
  totalPages,
  onChange,
}: Props) {
  const pages = Array.from({ length: totalPages }).map((_, i) => i + 1);
  return (
    <div className="flex items-center gap-2 mt-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
        className="px-3 py-1 border rounded cursor-pointer"
      >
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`px-3 py-1 border rounded ${
            p === currentPage ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          {p}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onChange(currentPage + 1)}
        className="px-3 py-1 border rounded cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}
