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
  const { Batch, Section, RoomNumber, StartedTime, EndTime, uap_id } =
    Object.fromEntries(formData);
  console.log(Batch, Section, RoomNumber, StartedTime, EndTime, uap_id);
  const Status = "Busy";

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
    return {
      message: "Failed to create routine",
    };
  }

  revalidatePath("/");
  return {
    message: "Routine Created",
  };
};
