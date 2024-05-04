import { URL } from "../constants/api";
import { getBearerToken } from "./getBearerToken";

export async function addCard(card) {
    await fetch(`${URL}/card`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getBearerToken()}`
        },
        body: JSON.stringify(
            card
        )
    });
}