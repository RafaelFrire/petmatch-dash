// import { toast } from "react-toastify";
import { apiRequest } from "./useApi";

export default function useDeleteData (url: string) {
    const deleteData = async (id: string) => {
        try {
        const response = await apiRequest(`/${url}/${id}/id`, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            },
        });
    
        if (!response.ok) {
            throw new Error("Failed to delete data");
        }
        // const {data} = await response.json()
        // toast.success(data.message)
        return await response.json();
        } catch (error) {
        console.error("Error deleting data:", error);
        throw error;
        }
    };
    
    return { deleteData };
}
