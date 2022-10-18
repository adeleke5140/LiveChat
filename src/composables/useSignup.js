import { ref } from "vue";

import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

const signUp = async (email, password, username) => {
  error.value = null;
  isPending.value = true;

  //don't forget error handling
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      username
    );
    if (!res) {
      throw new Error("Could not complete signup!");
    }
    error.value = null;
    isPending.value = false;
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
