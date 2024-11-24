export default async function countMembers() {
  const API_URL = import.meta.env.VITE_REACT_APP_DISCORD_API_URL;
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.approximate_member_count;
  } catch (error) {
    return -1;
  }
}
