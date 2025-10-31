import type { Leave, LeaveListResponse } from "../types/leave";
import api from "./axios";

export const loginApi = (username: string, password: string) =>
  api.post("/auth/login", { username, password });

export const fetchLeaves = (page = 1, pageSize = 10) =>
  api.get<LeaveListResponse>(`/leaves?page=${page}&pageSize=${pageSize}`);

export const fetchApprovals = (
  role: "Head" | "GM",
  page = 1,
  pageSize = 10
) => {
  const endpoint = role === "Head" ? "/approval/head" : "/approval/gm";
  return api.get<LeaveListResponse>(
    `${endpoint}?page=${page}&pageSize=${pageSize}`
  );
};

export const fetchLeave = (id: number) => api.get<Leave>(`/leaves/${id}`);

export const createLeave = (payload: Partial<Leave>) =>
  api.post("/leaves", payload);

// leave-api.ts
export const actionByRole = (
  role: "Head" | "GM",
  id: number,
  payload: { action: string; comment?: string }
) => api.post(`/approval/${role.toLowerCase()}/${id}`, payload);
