import { useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import { clearToken, saveToken } from "@/utils/token";
import { loginApi } from "@/api/leave-api";
import { useAuth } from "@/store/authStore";

export const useAuthHook = () => {
  const setUser = useAuth((s) => s.setUser);

  const login = useCallback(
    async (username: string, password: string) => {
      const res = await loginApi(username, password);
      const data = res.data;

      if (!data?.token) throw new Error("Token not found in response");

      const decoded: any = jwtDecode(data.token);

      saveToken(data.token);

      setUser({
        id: decoded.id,
        username: decoded.username,
        role: decoded.role || data.role,
        token: data.token,
      });
    },
    [setUser]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    clearToken();

    setUser(undefined);

    window.location.href = "/login";
  }, [setUser]);

  return { login, logout };
};
