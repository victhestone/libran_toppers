import { URL } from "../constants/api";
import { getBearerToken } from "./getBearerToken";

export const verifyToken = async () => {
    const response = await fetch(`${URL}/verify`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${getBearerToken()}`
        },
    });
    
    const receivedUser = await response.json();

    if (receivedUser) {
        localStorage.setItem('libraToppersData', receivedUser.user.cardCollection);
        localStorage.setItem('libraToppersUser', JSON.stringify(receivedUser));
    }

    return receivedUser;
}