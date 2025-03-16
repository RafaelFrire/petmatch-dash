import dotenv from 'dotenv';
dotenv.config();

export default function getImageUrl(imageUrl: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_IMG || "http://localhost:3333/api/search/"; // URL base

  if (!baseUrl) {
    throw new Error("BASE_URL is not defined in .env");
  }

  return `${baseUrl}${imageUrl}`;
}
