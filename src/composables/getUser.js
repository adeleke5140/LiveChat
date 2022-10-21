import { ref } from "vue";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const user = ref(null);
const loading = ref(true);

onAuthStateChanged(auth, (_user) => {
  if (_user) {
    user.value = _user;
  }
  console.log(_user);
  loading.value = false;
});

const getUser = () => {
  return { user, loading };
};

export default getUser;
