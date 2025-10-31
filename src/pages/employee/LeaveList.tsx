import { useEffect } from "react";

import Pagination from "@/components/Pagination";
import { Link } from "react-router-dom";
import { useLeavesHook } from "@/hooks/useLeave";

export default function LeaveList() {
  const { list, meta, loadLeaves } = useLeavesHook();

  useEffect(() => {
    loadLeaves(1);
  }, [loadLeaves]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 text-center">
        DATA PENGAJUAN CUTI
      </h1>
      <div className="grid gap-3">
        {list.map((l) => (
          <Link
            to={`/leave/${l.id}`}
            key={l.id}
            className="p-3 bg-white rounded shadow"
          >
            <div className="flex justify-between">
              <div>
                <div className="font-semibold">{l.employeeName}</div>
                <div className="text-sm text-gray-600">{l.reason}</div>
              </div>
              <div className="text-sm">{l.status}</div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={meta.currentPage}
        totalPages={meta.totalPages}
        onChange={(p) => loadLeaves(p)}
      />
    </div>
  );
}
