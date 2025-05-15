import axios from "axios";

export const getData = async () => {
  const response = await axios.get(
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
  );
  return response;
};
