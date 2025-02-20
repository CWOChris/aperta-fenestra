import { useEffect } from "react";
import { openDB } from "../utils/indexedDB";
import axios from "axios";

export const useOfflineEvents = () => {
  useEffect(() => {
    const syncOfflineEvents = async () => {
      const db = await openDB();
      const tx = db.transaction("events", "readonly");
      const store = tx.objectStore("events");
      const allEvents = await store.getAll();

      for (const event of allEvents) {
        await axios.post("/api/events", event);
      }
      
      const clearTx = db.transaction("events", "readwrite");
      clearTx.objectStore("events").clear();
    };

    if (navigator.onLine) syncOfflineEvents();
    window.addEventListener("online", syncOfflineEvents);
    return () => window.removeEventListener("online", syncOfflineEvents);
  }, []);
};
