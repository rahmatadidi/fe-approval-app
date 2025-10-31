import { fetchLeave } from "@/api/leave-api";
import type { Leave } from "@/types/leave";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LeaveDetail() {
  const { id } = useParams();
  const [leave, setLeave] = useState<Leave | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchLeave(parseInt(id, 10))
      .then((res) => setLeave(res.data))
      .catch(() => {});
  }, [id]);

  if (!leave) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto bg-white rounded shadow">
      <h3 className="text-xl mb-2">Detail Pengajuan</h3>
      <div className="mb-2">
        <strong>Nama:</strong> {leave.employeeName}
      </div>
      <div className="mb-2">
        <strong>Periode:</strong> {leave.startDate} - {leave.endDate}
      </div>
      <div className="mb-2">
        <strong>Alasan:</strong> {leave.reason}
      </div>
      <div className="mt-4">
        <h4 className="font-semibold">History</h4>
        <div className="mt-2 space-y-2">
          {leave.history?.map((h) => (
            <div
              key={h.id}
              className="p-2 border rounded"
            >
              <div className="text-sm text-gray-600">
                {h.role} - {h.action} - {new Date(h.createdAt).toLocaleString()}
              </div>
              <div>{h.comment}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
