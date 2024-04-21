import { URL } from "../constants/api";
import { getBearerToken } from "./getBearerToken";

export const fetchData = async () => {
    try {
      const response = await fetch(`${URL}/cards`, {
        headers: {Authorization: `Bearer ${getBearerToken()}`}
      });
      const cards = await response.json();

      for await (const card of cards) {
        const img = await import(`../assets/${card.type}/${card.id.toLowerCase()}.png`);
        card.img = img.default;
      }
      return cards;
    } catch (error) {
      console.log('error', error);
    }
  }