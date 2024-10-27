import { Routine } from "./models";
import { connectToDB } from "./db";

export const fetchRoutine = async () => {
  try {
    connectToDB();
    const routine = await Routine.find();
    console.log(routine);
    return routine;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch routine!");
  }
};
