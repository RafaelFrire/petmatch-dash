/* eslint-disable @typescript-eslint/no-explicit-any */
import { Account } from "./../interfaces/account";
import { apiRequest } from "./useApi";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

type UserResponse = {
  user: Account;
};

async function getAccountById(id: string): Promise<UserResponse | null> {
  try {
    if (!id) {
      console.log("ID não fornecido.");
      return null;
    }

    const res = await apiRequest(`/account/${id}`, {
      method: "GET",
    });

    if (!res.ok) {
      toast.error("Houve um erro.");
      return null;
    }

    const data = await res.json();
    console.log("data", data);
    toast.success("usuário encontrado!");
    return data;
  } catch (err) {
    toast.error("Houve um problema na requisição.");
    console.error(err);
    return null;
  }
}
export const mapUserResponse = (response: any): UserResponse => {
  return {
    user: {
      id: response?.id,
      email: response?.email,
      name: response?.name,
      lastname: response?.lastname,
      role: response?.role,
      password: response?.password,
      createdAt: response?.createdAt,
      updatedAt: response?.updatedAt,
      documentPath: response?.documentPath || null,
      password_reset_token: response?.password_reset_token || null,
      password_reset_experies: response?.password_reset_experies || null,
      status: response?.status,
      ong: response?.ong,
      adopter: response?.adopter,
    },
  };
};

export function useGetAccountById(id: string) {
  return useQuery({
    queryKey: ["formAdopter", id],
    queryFn: () => getAccountById(id),
  });
}
