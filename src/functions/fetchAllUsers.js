import { URL } from "../constants/api";
import { getBearerToken } from "./getBearerToken";

export const fetchAllUsers = async () => {
    try {
      const response = await fetch(`${URL}/users`, {
        headers: {
            Authorization: `Bearer ${getBearerToken()}`,
        }
      });
      const users = await response.json();
      return users;
    } catch (error) {
      console.log('error', error);
    }
  }