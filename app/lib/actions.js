"use server";
import { revalidatePath } from "next/cache";
import { Routine } from "./models";
import { connectToDB } from "./db";
import { redirect } from "next/navigation";
import { signIn } from "../auth";
import bcrypt from "bcrypt";
import { User } from "../lib/models";
import { signOut } from "@/app/auth";

export const addUser = async (prevState, formData) => {
  const { uap_id, email, password, isAdmin, batch, section } =
    Object.fromEntries(formData);
  console.log(uap_id, email, password, isAdmin, batch, section);
  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      uap_id,
      email,
      password: hashedPassword,
      batch,
      section,
      isAdmin,
    });

    await newUser.save();
    console.log(newUser);
  } catch (err) {
    console.log(err);

    return {
      message: "Already Exits",
    };
  }

  revalidatePath("/");
  return {
    message: "User Added",
  };
};

export const authenticate = async (prevState, formData) => {
  try {
    const { email, password } = Object.fromEntries(formData);

    await signIn("credentials", {
      email,
      password,
    });
  } catch (error) {
    if (error.type === "CredentialsSignin") {
      console.log("Wrong Credentials");
      return {
        message: "Wrong Credentials",
      };
    }
    redirect("/dashboard");
    throw error;
  }
};

export const logout_user = async () => {
  await signOut();
};

function formatTimeTo12Hour(time) {
  let [hours, minutes] = time.split(":");
  hours = parseInt(hours);

  const suffix = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert hour from 24-hour to 12-hour format

  return `${hours}:${minutes} ${suffix}`;
}

export const addRoutine = async (prevState, formData) => {
  const { Batch, Section, RoomNumber, Day, StartedTime, EndTime, uap_id } =
    Object.fromEntries(formData);

  // Format StartedTime and EndTime to 12-hour format
  const formattedStartedTime = formatTimeTo12Hour(StartedTime);
  const formattedEndTime = formatTimeTo12Hour(EndTime);

  console.log(
    Batch,
    Section,
    RoomNumber,
    Day,
    formattedStartedTime,
    formattedEndTime,
    uap_id
  );
  const Status = "Busy";

  try {
    // Connect to the database
    await connectToDB();

    // Fetch existing routines
    const routineData = await Routine.find();

    // Check if a routine with the same Day, StartedTime, and EndTime already exists
    const duplicateRoutine = routineData.find(
      (routine) =>
        routine.Day === Day &&
        routine.StartedTime === formattedStartedTime &&
        routine.EndTime === formattedEndTime
    );

    if (duplicateRoutine) {
      return {
        error:
          "Routine already exists with the same Day, StartedTime, and EndTime!",
        success: false,
      };
    }

    // If no duplicates, create a new routine
    const newRoutine = new Routine({
      uap_id,
      Batch,
      Section,
      Day,
      RoomNumber,
      StartedTime: formattedStartedTime,
      EndTime: formattedEndTime,
      Status,
    });

    await newRoutine.save();

    // Revalidate and redirect on success
    revalidatePath("/dashboard/profile");
    return { error: null, success: true };
  } catch (err) {
    console.error(err);
    // Return an error message
    return { error: "Routine addition failed!", success: false };
  }
};

export const deleteRoutineByUapId = async (prevState, formData) => {
  const { room } = Object.fromEntries(formData);
  console.log(room);
  try {
    connectToDB();

    const deleteUser = await Routine.deleteOne({ RoomNumber: room });

    if (deleteUser) {
      revalidatePath("/");
      return { error: null, success: true };
    }
  } catch (err) {
    console.log(err);
    return { error: "Routine deleted failed!", success: false };
  }
};

// export const updateRoutineByUapId = async (prevState, formData) => {
//   const { id, Status, Day } = Object.fromEntries(formData);
//   console.log(id, Status, Day);
// };

export const updateRoutineByUapId = async (prevState, formData) => {
  const { RoomNumber, Day, StartedTime, EndTime, Status, id } =
    Object.fromEntries(formData);
  console.log(RoomNumber, Day, StartedTime, EndTime, Status, id);
  try {
    connectToDB();

    const updateFields = {
      RoomNumber,
      Day,
      StartedTime,
      EndTime,
      Status,
    };

    const UpdateRoutine = await Routine.findByIdAndUpdate(id, updateFields);
    if (UpdateRoutine) {
      revalidatePath("/dashboard/profile");
      return { error: null, success: true };
    }
  } catch (err) {
    console.log(err);
    return { error: "Routine update failed!", success: false };
  }
};

export const updateRoutineByUapIdOnlyStatus = async (prevState, formData) => {
  const { Status, id, BusyBy } = Object.fromEntries(formData);
  console.log(Status, id, BusyBy);
  try {
    connectToDB();

    const UpdateRoutine = await Routine.findByIdAndUpdate(
      id,
      { Status: Status, BusyBy: BusyBy },
      {
        new: true,
      }
    );
    if (UpdateRoutine) {
      revalidatePath("/dashboard/profile");
      return { error: null, success: true };
    }
  } catch (err) {
    console.log(err);
    return { error: "Routine update failed!", success: false };
  }
};
