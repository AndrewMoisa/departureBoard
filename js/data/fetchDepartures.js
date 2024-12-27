import { apiUrl } from "../constants/api.js";
import { graphqlQuery } from "../constants/graphqlQuery.js";

export async function fetchDepartures() {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ET-Client-Name": "departureBoard_Skarerasen-project",
      },
      body: JSON.stringify({ query: graphqlQuery }),
    });
    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
