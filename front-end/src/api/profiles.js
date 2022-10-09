import axios from "axios";

export async function getProfiles() {
  try {
    const response = await axios.get("http://0.0.0.0:8000/profiles");
    return response.data.items;
  } catch (e) {
    console.log(e);
  }
}

export async function getProfile(id) {
  try {
    const response = await axios.get(`http://0.0.0.0:8000/profiles/${id}`);
    return response.data[0]
  } catch (e) {
    console.log(e);
  }
}
