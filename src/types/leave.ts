export interface History {
  id: number;
  leaveId: number;
  actorId: number;
  employeeName?: string;
  role: string;
  action: string;
  comment?: string;
  createdAt: string;
}

export interface Leave {
  id: number;
  employeeId: number;
  employeeName: string;
  startDate: string;
  endDate: string;
  reason: string;
  attachment?: string | null;
  status: string;
  createdAt?: string;
  updatedAt?: string;
  history?: History[];
}

export type LeaveListResponse = {
  totalCount: number;
  totalPages: number;
  currentPage: number;
  data: Leave[];
};

export type LeaveActionPayload = {
  action: "approved" | "rejected" | "revision";
  comment?: string;
  role: "Head" | "GM";
};
