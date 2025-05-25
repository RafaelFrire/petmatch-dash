import { apiRequest } from "./useApi";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { Conversation } from "@/interfaces/conversation";

let successMessageShown = false;



async function getConversationsByUserId(userId: string): Promise<Conversation[] | null> {
    try {
        if (!userId) {
            return null;
        }
        const res = await apiRequest(`/messages/chats/user/${userId}`, {
            method: "GET",
        });

        if (!res.ok) {
            toast.error("Falha ao carregar conversas.");
            return null;
        }

        const data = await res.json();

        if (!successMessageShown) {
            toast.success("Conversas encontradas!");
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
export const mapConversationResponse = (response: any): Conversation[] => {
    return response?.map((item: Conversation) => {
        return item as Conversation;
    }) ?? [];
};

export function useGetConversationsByUserId(userId: string) {
    return useQuery({
        queryKey: ["fetchConversations", userId],
        queryFn: () => getConversationsByUserId(userId),
    });
}
