"use client";
import { useAuth } from "@/store/authStore";
import { Link } from "react-router-dom";

export default function Header() {
  const user = useAuth((s) => s.user);

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl p-4 mx-auto flex justify-between">
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          {user?.role === "Employee" && <Link to="/leave/new">Ajukan</Link>}
          {user?.role === "Employee" && <Link to="/leave">Daftar</Link>}
          {user?.role === "Head" && (
            <Link to="/approval/head">Pending Head</Link>
          )}
          {user?.role === "GM" && <Link to="/approval/gm">Pending GM</Link>}
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-2">
              <span>({user.role})</span>
              <button
                onClick={() => {
                  useAuth.getState().logout();
                  window.location.href = "/login";
                }}
                className="text-red-500"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
}
