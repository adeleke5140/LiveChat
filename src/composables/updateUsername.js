import { ref } from "vue";

import { auth } from "../firebase/config";
import { updateProfile } from "@firebase/auth";

const isLoading = ref(false);
const error = ref(null);

const updateUsername = async (data) => {
  isLoading.value = true;

  try {
    const res = await updateProfile(auth.currentUser, data);
    isLoading.value = false;
    return res;
  } catch (err) {
    console.error(err);
    error.value = err;

    isLoading.value = false;
    setTimeout(() => (error.value = null), 5000);
  }
};

const getNewUserName = () => {
  return { isLoading, error, updateUsername };
};

export default getNewUserName;
