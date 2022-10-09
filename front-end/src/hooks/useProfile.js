import { useState, useEffect } from "react";
import { getProfile } from "../api/profiles";

export const useProfile = (id) => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    doSearchProfile(id);
  }, [id]);

  const doSearchProfile = async (id) => {
    const fetchedProfile = await getProfile(id);
    setProfile(fetchedProfile);
  };

  return [profile, doSearchProfile];
};
