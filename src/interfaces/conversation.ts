
export interface Conversation {
  id: string;
  adopterId: string | null;
  ongId: string | null;
  adopterName: string | null;
  ongName: string | null;
  lastMessage: {
    subject: string;
    body: string;
    senderId: string;
  };
  createdAt: Date;
  updatedAt: Date;
}