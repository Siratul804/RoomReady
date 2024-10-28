import { Routine } from "./models";
import { connectToDB } from "./db";

export const fetchRoutine = async () => {
  try {
    connectToDB();
    const routine = await Routine.find();
    // console.log(routine);
    return routine;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch routine!");
  }
};

export const fetchRoutineByUapId = async (uap_id) => {
  try {
    connectToDB();
    // Use the `uap_id` parameter to filter the results
    const routine = await Routine.find({ uap_id: uap_id });
    console.log(routine);
    return routine;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch routine by uap_id!");
  }
};
