export interface User {
  id: number;
  username: string;
  role: "Employee" | "Head" | "GM";
  token?: string;
}
