import Button from "@/components/Button";
import { useAuth } from "@/store/authStore";
import { useState } from "react";
import Input from "../../components/Input";
import { useLeavesHook } from "@/hooks/useLeave";

export default function LeaveForm() {
  const { submit } = useLeavesHook();
  const user = useAuth((s) => s.user);

  const [form, setForm] = useState({
    employeeName: "",
    startDate: "",
    endDate: "",
    reason: "",
    attachment: "",
  });

  const calculateDays = () => {
    if (form.startDate && form.endDate) {
      const start = new Date(form.startDate);
      const end = new Date(form.endDate);
      const days =
        Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) +
        1;
      return Math.max(1, days);
    }
    return 0;
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!user) return alert("Login dulu");
    try {
      await submit({ ...form, employeeId: user.id });
      alert("Submitted");
    } catch (err: any) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 m-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Employee Name</label>
          <Input
            type="text"
            onChange={(e) => setForm({ ...form, employeeName: e.target.value })}
            value={form.employeeName}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Days</label>
          <div className="px-3 py-2 border border-input rounded-md bg-muted text-muted-foreground">
            {calculateDays()} day(s)
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Start Date</label>
          <Input
            type="date"
            value={form.startDate}
            onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">End Date</label>
          <Input
            type="date"
            value={form.endDate}
            onChange={(e) => setForm({ ...form, endDate: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Reason</label>
        <textarea
          value={form.reason}
          onChange={(e) => setForm({ ...form, reason: e.target.value })}
          placeholder="Provide reason for your leave request"
          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground min-h-24"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-accent hover:bg-accent/90"
      >
        Submit Request
      </Button>
    </form>
  );
}
