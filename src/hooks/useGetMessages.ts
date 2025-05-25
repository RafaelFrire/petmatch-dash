import { apiRequest } from "./useApi";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

let successMessageShown = false;

export interface Chat {
    id: string;
    users: string[];
    messages?: string[];
    updatedAt?: string;
    // Add other fields as needed
}

async function getMessages(userId: string): Promise<Chat[] | null> {
    try {
        if (!userId) {
            return null;
        }
        const res = await apiRequest(`/chats/user/${userId}`, {
            method: "GET",
        });

        if (!res.ok) {
            toast.error("Falha ao carregar chats.");
            return null;
        }

        const data = await res.json();

        if (!successMessageShown) {
            toast.success("Chats encontrados!");
            successMessageShown = true;
        }
        return data;
    } catch (err) {
        toast.error("Houve um problema na requisição.");
        console.error(err);
        return null;
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapChatResponse = (response: any): Partial<Chat> => {
    return {
        id: response?.id,
        users: response?.users,
        messages: response?.messages,
        updatedAt: response?.updatedAt,
        // Add other fields as needed
    };
};

export function useGetMessagesByChatId(userId: string) {
    return useQuery({
        queryKey: ["fetchChats", userId],
        queryFn: () => getMessages(userId),
    });
}
