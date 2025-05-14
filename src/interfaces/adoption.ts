import { Pet } from "./pet";

export interface Adoption {
  id: string;
  petId: string;
  adopterId: string;
  status: AdoptionStatus;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  maritalStatus: MaritalStatus;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  residenceType: ResidenceType;
  hasOtherPets: boolean;
  reasonForAdoption: string;
  proofOfResidence: string;
  createdAt: string;
  pet: Pet;
}

export type AdoptionStatus = "PENDING" | "APPROVED" | "REJECTED";

export type MaritalStatus = "SINGLE" | "MARRIED" | "DIVORCED" | "WIDOWED";
export type ResidenceType = "HOUSE" | "APARTMENT" | "OTHER";
