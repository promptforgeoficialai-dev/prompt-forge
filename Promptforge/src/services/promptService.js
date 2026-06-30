import { db } from "../firebase/config";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";

export const promptService = {
  // Esta función va a Firestore y trae los prompts que hayas creado
  async getPrompts(category = "All") {
    try {
      const promptCol = collection(db, "prompts");
      let q = query(promptCol, orderBy("createdAt", "desc"));
      
      if (category !== "All") {
        q = query(promptCol, where("category", "==", category));
      }
      
      const snapshot = await getDocs(q);
      
      // Si la base de datos está vacía, devuelve un array vacío
      if (snapshot.empty) return [];

      return snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      }));
    } catch (error) {
      console.error("Error cargando prompts desde Firestore:", error);
      return [];
    }
  }
};