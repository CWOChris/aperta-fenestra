import { useState } from "react";
import axios from "axios";

export const useEventSubmit = () => {
  const [conflict, setConflict] = useState(null);

  const submitEvent = async (eventData) => {
    try {
      const { data } = await axios.post("/api/events", eventData);
      return data;
    } catch (error) {
      if (error.response?.status === 409) {
        setConflict(error.response.data.conflict);
      }
    }
  };

  return { submitEvent, conflict };
};
