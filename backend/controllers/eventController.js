import { emitNotification } from "../server.js";
import { Event } from "../models/Event.js";

export const approveEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await Event.findByIdAndUpdate(eventId, { status: "approved" }, { new: true });
    emitNotification("eventUpdated", { message: `Event approved`, event });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const resolveConflict = async (req, res) => {
    const { eventId, resolution } = req.body;
    const event = await Event.findById(eventId);
  
    if (resolution === "keep") {
      event.status = "pending"; 
    } else {
      event.status = "approved"; 
    }
  
    await event.save();
    res.json({ message: "Conflict resolved", event });
  };
  