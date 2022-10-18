import { ref } from "vue";

import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);
// const user = ref("");

const signUp = async (email, password) => {
  error.value = null;
  isPending.value = true;

  //don't forget error handling
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not complete signup!");
    }
    error.value = null;
    isPending.value = false;
    return res;
  } catch (err) {
    isPending.value = false;
    error.value = err.message;
    console.error(err.message);
  }
};

const useSignup = () => {
  return { error, isPending, signUp };
};

export default useSignup;
