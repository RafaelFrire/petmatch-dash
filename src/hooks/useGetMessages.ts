import { apiRequest } from "./useApi";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { Conversation } from "@/interfaces/conversation";

let successMessageShown = false;

interface GetMessagesResponse extends Conversation {
    senderId: string;
    receiverId: string;
    body: string;
}


async function getMessages(chatId: string): Promise<GetMessagesResponse[] | null> {
    try {
        if (!chatId) {
          return null;
        }
        const res = await apiRequest(`/messages/${chatId}`, {
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
export const mapChatResponse = (response: any): GetMessagesResponse[] => {
    return response?.map((item: GetMessagesResponse) =>{
        return item as GetMessagesResponse;
    });
};

export function useGetMessagesByChatId(chatId: string) {
    return useQuery({
        queryKey: ["fetchChats", chatId],
        queryFn: () => getMessages(chatId),
        enabled: !!chatId,
        refetchOnWindowFocus: false,
    });
}
