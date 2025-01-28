"use client"
import {getCookie, setCookie} from "cookies-next"
import { signOut } from "next-auth/react";
import 'dotenv/config'


export const useApi = async (
  input: string | URL | Request,
  init?: RequestInit | undefined
): Promise<Response> => {
    const jwt = await getCookie("jwt");

    const baseUrl = process.env.BASE_URL || "";
    const url = typeof input === "string" ? `${baseUrl}${input}` : input;

    const response = await fetch(url, {
      ...init,
      headers: {
        ...init?.headers,
        ...(jwt && { Authorization: `Bearer ${jwt}`, "x-access-token": jwt }),
      },
    });

    if(response.status === 401){
        setCookie("jwt", '')
        await signOut();
    }

    return response;

};