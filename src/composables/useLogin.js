import { ref } from "vue";
import { ref } from "vue";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

const error = ref(null);
const isPending = ref(false);

const login = async (email, password) => {
  isPending.value = true;
  error.value = null;

  try {
    const res = signInWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Incorrect login credentials");
    }
    isPending.value = false;
    error.value = null;
  } catch (err) {
    console.log(err.message);
    err.value = err.message;
    isPending.value = false;
  }
};

const useLogin = () => {
  return { error, isPending, login };
};

export default useLogin;
