import { ref } from "vue";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

const logout = async () => {
  isPending.value = true;
  error.value = null;

  try {
    const res = await signOut(auth);
    isPending.value = false;
    return res;
  } catch (err) {
    console.log(err.message);
    isPending.value = false;
    error.value = err.message;
  }
};

const useLogout = () => {
  return { logout, isPending, error };
};

export default useLogout;
