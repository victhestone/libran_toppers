import { URL } from "../constants/api";
import { getBearerToken } from "./getBearerToken";

export async function saveData(userId) {
    const user = localStorage.getItem('libraToppersUser');
    const parsedUser = JSON.parse(user);

    await fetch(`${URL}/users/${userId}`, {
        method: "PATCH",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getBearerToken()}`
        },
        body: JSON.stringify(
            {
                boosterPacks: parsedUser.user.boosterPacks,
                cardCollection: localStorage.getItem('libraToppersData')
            }
        )
    });
}