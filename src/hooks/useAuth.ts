import { RegisterUser, User } from "@/interfaces/user";
import api from "@/utils/api";
import { AxiosError } from "axios"; // Corrigindo importação
import { toast } from "react-toastify";

type apiResponse = {
  user: User;
  token: string;
  message: string;
};

export const login = async (
  email: string,
  password: string
): Promise<{ user: User; token: string } | null> => {
  try {
    const response = await api.post<apiResponse>(
      "/auth/signin",
      { email, password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
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
      throw new Error(
        `Erro na autenticação: ${err.response?.status || "Desconhecido"}`
      );
    }

    console.error("Erro inesperado:", err);
    return null;
  }
};
export const signup = async (data: RegisterUser) => {
  try {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, (data as never)[key]);
    });

    const response = await api.post<apiResponse>("/auth/signup", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (response.status === 201) {
      toast.success("Usuário criado com sucesso!");
    } else if (response.status === 409) {
      toast.error("Email já em uso.");
      throw new Error("Email já em uso.");
    } else {
      toast.error(`Erro inesperado: ${response.status}`);
      throw new Error(`Erro inesperado: ${response.status}`);
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error("Erro na requisição:", err.response?.data || err.message);
      toast.error("Erro na requisição:" + err.message);
      throw new Error(
        `Erro na autenticação: ${err.response?.status || "Desconhecido"}`
      );
    }

    console.error("Erro inesperado:", err);
    return null;
  }
};


export const ongSignup = async (data: RegisterUser) => {
  try {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, (data as never)[key]);
    });

    const response = await api.post<apiResponse>("/auth/signup_ong", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (response.status === 201) {
      toast.success("Usuário criado com sucesso!");
    } else if (response.status === 409) {
      toast.error("Email já em uso.");
      throw new Error("Email já em uso.");
    } else {
      toast.error(`Erro inesperado: ${response.status}`);
      throw new Error(`Erro inesperado: ${response.status}`);
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error("Erro na requisição:", err.response?.data || err.message);
      toast.error("Erro na requisição:" + err.message);
      throw new Error(
        `Erro na autenticação: ${err.response?.status || "Desconhecido"}`
      );
    }

    console.error("Erro inesperado:", err);
    return null;
  }
};