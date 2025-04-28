export interface Event {
  id: string;
  title: string;
  slug: string;
  categorie: string;
  time: string;
  location: string;
  address: string;
  city: string;
  state: string;
  description: string;
  additionalInfo: string;
  imageUrl: string;
  status: boolean;
  organizer?: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  ongId: string;
}