const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    uap_id: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const RoutineSchema = new mongoose.Schema({
  uap_id: Number,
  Batch: Number,
  RoomNumber: String,
  Section: String,
  StartedTime: String,
  EndTime: String,
  Status: String,
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);

export const Routine =
  mongoose.models.Routine || mongoose.model("Routine", RoutineSchema);
