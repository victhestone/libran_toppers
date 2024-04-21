import { URL } from "../constants/api";
import { getBearerToken } from "./getBearerToken";

export async function saveData(userId) {
    await fetch(`${URL}/users/${userId}`, {
        method: "PATCH",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getBearerToken()}`
        },
        body: JSON.stringify(
            {
                cardCollection: localStorage.getItem('libraToppersData')
            }
        )
    });
}