import { URL } from "../constants/api";
import { getBearerToken } from "./getBearerToken";

export async function addCards(cards) {
    await fetch(`${URL}/cards`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getBearerToken()}`
        },
        body: JSON.stringify(
            cards
        )
    });
}