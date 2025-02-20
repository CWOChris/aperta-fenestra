export const openDB = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("EventDB", 1);
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore("events", { keyPath: "id", autoIncrement: true });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject("Failed to open IndexedDB");
    });
  };
  
  export const saveEventOffline = async (event) => {
    const db = await openDB();
    const tx = db.transaction("events", "readwrite");
    tx.objectStore("events").add(event);
  };
  