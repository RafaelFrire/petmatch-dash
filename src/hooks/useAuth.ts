import api from "@/utils/api";
import { AxiosError } from "axios"; // Corrigindo importação

type User = {
  name:string
  lastname:string
  email: string;
  password: string;
  token: string;
};

type apiResponse = {
  user: User;
  token: string;
  message: string;
}; 

export const login = async (email: string, password: string): Promise<{user: User, token: string} | null> => {
  try {
    const response = await api.post<apiResponse>("/auth/signin", { email, password }, {
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      const { user, token } = response.data;
      return { user, token };
    } else if (response.status === 401) {
      throw new Error("Senha incorreta. Por favor, tente novamente.");
    } else {
      throw new Error(`Erro inesperado: ${response.status}`);
    }

  } catch (err) {
    if (err instanceof AxiosError) {
      console.error("Erro na requisição:", err.response?.data || err.message);
      throw new Error(`Erro na autenticação: ${err.response?.status || "Desconhecido"}`);
    }

    console.error("Erro inesperado:", err);
    return null;
  }
};

