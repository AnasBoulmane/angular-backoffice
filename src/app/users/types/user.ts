import { Organization } from "./organization";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  organization: Organization;
  createdAt: Date;
  updatedAt: Date;
}
