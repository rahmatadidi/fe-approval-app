import { actionByRole, fetchLeave } from "@/api/leave-api";
import type { Leave } from "@/types/leave";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function GMDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [leave, setLeave] = useState<Leave | null>(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (id) fetchLeave(parseInt(id, 10)).then((r) => setLeave(r.data));
  }, [id]);

  if (!leave) return <div className="p-4">Loading...</div>;

  const handle = async (action: string) => {
    try {
      await actionByRole("GM", leave.id, { action, comment });
      alert("Done");
      navigate("/approval/gm");
    } catch (err: any) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto bg-white rounded shadow">
      <h3 className="text-xl mb-2">Detail Approval (GM)</h3>
      <div>
        <strong>Nama:</strong> {leave.employeeName}
      </div>
      <div>
        <strong>Periode:</strong> {leave.startDate} - {leave.endDate}
      </div>
      <div className="mt-3">
        <textarea
          className="w-full border p-2"
          placeholder="komentar (opsional)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => handle("approved")}
            className="px-3 py-2 bg-green-600 text-white rounded"
          >
            Approve
          </button>
          <button
            onClick={() => handle("revision")}
            className="px-3 py-2 bg-yellow-500 text-white rounded"
          >
            Request Revision
          </button>
        </div>
      </div>
    </div>
  );
}
