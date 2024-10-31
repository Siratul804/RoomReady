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

export const addRoutine = async (prevState, formData) => {
  const { Batch, Section, RoomNumber, Day, StartedTime, EndTime, uap_id } =
    Object.fromEntries(formData);
  console.log(Batch, Section, RoomNumber, Day, StartedTime, EndTime, uap_id);
  const Status = "Busy";

  try {
    await connectToDB();

    const newRoutine = new Routine({
      uap_id,
      Batch,
      Section,
      Day,
      RoomNumber,
      StartedTime,
      EndTime,
      Status,
    });

    await newRoutine.save();

    // Return a success message
    revalidatePath("/dashboard/profile");

    if (newRoutine) {
      return { error: null, success: true };
    }
    redirect("/dashboard/profile");
  } catch (err) {
    console.error(err);
    // Return an error message
    return { error: "Routine added failed!", success: false };
  }
};

export const deleteRoutineByUapId = async (prevState, formData) => {
  const { id } = Object.fromEntries(formData);
  console.log(id);
  try {
    connectToDB();

    const deleteUser = await Routine.deleteOne({ uap_id: id });
    if (deleteUser) {
      revalidatePath("/");
    }
    if (deleteUser) {
      return { error: null, success: true };
    }
  } catch (err) {
    console.log(err);
    return { error: "Routine deleted failed!", success: false };
  }
};

export const updateRoutineByUapId = async (formData) => {
  const { id, status } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Routine.findByIdAndUpdate(id, status);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
