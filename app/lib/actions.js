"use server";
import { revalidatePath } from "next/cache";
import { Routine } from "./models";
import { connectToDB } from "./db";
import { redirect } from "next/navigation";
import { signIn } from "../auth";
import bcrypt from "bcrypt";
import { User } from "../lib/models";
import { signOut } from "@/app/auth";

export const addUser = async (formData) => {
  const { uap_id, email, password, isAdmin } = Object.fromEntries(formData);
  // console.log(uap_id, email, password, isAdmin);
  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      uap_id,
      email,
      password: hashedPassword,
      isAdmin,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/");
  redirect("/");
};

export const authenticate = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);
  console.log(email, password);

  try {
    await signIn("credentials", { email, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};

export const logout_user = async () => {
  await signOut();
};

export const addRoutine = async (formData) => {
  const { Batch, Section, RoomNumber, StartedTime, EndTime, uap_id } =
    Object.fromEntries(formData);
  console.log(Batch, Section, RoomNumber, StartedTime, EndTime, uap_id);
  const Status = "Busy";
  const Statuss = "available";

  try {
    connectToDB();

    const newRoutine = new Routine({
      uap_id,
      Batch,
      Section,
      RoomNumber,
      StartedTime,
      EndTime,
      Status,
    });

    await newRoutine.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create routine!");
  }

  revalidatePath("/");
  redirect("/");
};
