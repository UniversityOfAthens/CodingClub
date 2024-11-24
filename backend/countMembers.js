export default async function countMembers() {
  const API_URL =
    "https://discord.com/api/v9/invites/n7BZ9c8tyP?with_counts=true&with_expiration=true";
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.approximate_member_count;
  } catch (error) {
    return -1;
  }
}
