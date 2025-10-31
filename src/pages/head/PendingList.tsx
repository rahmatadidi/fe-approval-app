import { useLeavesHook } from "@/hooks/useLeave";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PendingList() {
  const { list, loadApprovals } = useLeavesHook();
  useEffect(() => {
    loadApprovals("Head", 1);
  }, [loadApprovals]);

  return (
    <div className="p-4">
      <h3 className="text-lg mb-4 text-center">DATA PENGAJUAN CUTI</h3>
      <div className="grid gap-3">
        {list.map((l) => (
          <Link
            to={`/approval/head/${l.id}`}
            key={l.id}
            className="p-3 bg-white rounded shadow flex justify-between"
          >
            <div>
              <div className="font-semibold">{l.employeeName}</div>
              <div className="text-sm text-gray-600">{l.reason}</div>
            </div>
            <div>{l.status}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
