import { db } from "../firebase/config"
import { ref } from "vue"

import { collection, getDocs } from "firebase/firestore"

const getCollection = () => {
  const error = ref(null)
  const isLoading = ref(null)

  const getDocument = async (col) => {
    error.value = null
    isLoading.value = true
    const colRef = collection(db, col)

    try {
      const results = await getDocs(colRef)
      isLoading.value = false
      return results
    } catch (err) {
      console.log(err)
      error.value = err
      isLoading.value = false
    }
  }

  return { error, isLoading, getDocument }
}

export default getCollection
