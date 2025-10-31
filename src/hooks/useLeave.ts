import {
  actionByRole,
  createLeave,
  fetchApprovals,
  fetchLeave,
  fetchLeaves,
} from "@/api/leave-api";
import type { Leave, LeaveListResponse } from "@/types/leave";
import { useState, useCallback } from "react";

export const useLeavesHook = () => {
  const [list, setList] = useState<Leave[]>([]);
  const [meta, setMeta] = useState({
    totalPages: 0,
    currentPage: 1,
    totalCount: 0,
  });

  const loadLeaves = useCallback(async (page = 1, pageSize = 10) => {
    const res = await fetchLeaves(page, pageSize);
    const d = res.data as LeaveListResponse;

    console.log("API Response:", JSON.stringify(d, null, 2));

    setList(d.data);
    setMeta({
      totalPages: d.totalPages,
      currentPage: d.currentPage,
      totalCount: d.totalCount,
    });
  }, []);

  const loadApprovals = useCallback(
    async (role: "Head" | "GM", page = 1, pageSize = 10) => {
      const res = await fetchApprovals(role, page, pageSize);
      const d = res.data as LeaveListResponse;
      setList(d.data);
      setMeta({
        totalPages: d.totalPages,
        currentPage: d.currentPage,
        totalCount: d.totalCount,
      });
    },
    []
  );

  const getLeave = useCallback((id: number) => fetchLeave(id), []);
  const submit = useCallback(
    (payload: Partial<Leave>) => createLeave(payload),
    []
  );
  const action = useCallback(
    (
      role: "Head" | "GM",
      id: number,
      payload: { action: string; comment?: string }
    ) => actionByRole(role, id, payload),
    []
  );

  return { list, meta, loadLeaves, loadApprovals, getLeave, submit, action };
};
