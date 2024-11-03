import { Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { updateRoutineByUapId } from "@/app/lib/actions";
import toast from "react-hot-toast";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function StatusModal({ routineData }) {
  console.log(routineData.Day);
  function Submit() {
    const { pending } = useFormStatus();
    return (
      <Button className="w-full" type="submit" disabled={pending}>
        {pending ? "Updating..." : " Update Routine"}
      </Button>
    );
  }

  const [updatePostState, updatePostAction] = useFormState(
    updateRoutineByUapId,
    {
      error: null,
      success: false,
    }
  );

  console.log(updatePostState);

  const formRef = useRef();

  useEffect(() => {
    if (updatePostState.success) {
      formRef.current?.click();
      toast.success("Routine update successfully", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    }

    if (updatePostState.error) {
      toast.error("Failed to update routine", {
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    }
  }, [updatePostState]);

  return (
    <>
      <div className="pl-2">
        <Dialog>
          <DialogTrigger asChild ref={formRef}>
            <Button variant="outline" size="icon">
              <Settings2 className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Routine</DialogTitle>
              <DialogDescription>
                Make changes to your routine. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <form className="grid gap-4 py-4" action={updatePostAction}>
              <input
                id="id"
                name="id"
                value={routineData._id}
                className="hidden"
              />

              <div className="grid grid-cols-2 items-center gap-2">
                <Label htmlFor="room_num">Select Day </Label>
                <Select name="Day" id="Day" defaultValue={routineData.Day}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Day" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sunday">Sunday</SelectItem>
                    <SelectItem value="Monday">Monday</SelectItem>
                    <SelectItem value="Tuesday">Tuesday</SelectItem>
                    <SelectItem value="Wednesday">Wednesday</SelectItem>
                    <SelectItem value="Thursday">Thursday</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 items-center gap-2">
                <Label htmlFor="room_num">Room Number :</Label>
                <Input
                  id="room_num"
                  type="text"
                  placeholder="Enter Your Room Number"
                  name="RoomNumber"
                  defaultValue={routineData.RoomNumber}
                  required
                />
              </div>
              <div className="grid grid-cols-2 items-center gap-2">
                <Label htmlFor="start_time">Started Time :</Label>
                <Input
                  id="started_time"
                  type="text"
                  placeholder="Enter Your Started Time"
                  name="StartedTime"
                  defaultValue={routineData.StartedTime}
                  required
                />
              </div>
              <div className="grid grid-cols-2 items-center gap-2">
                <Label htmlFor="room_num">Ended Time : </Label>
                <Input
                  id="end_time"
                  type="text"
                  placeholder="Enter Your End Time"
                  name="EndTime"
                  defaultValue={routineData.EndTime}
                  required
                />
              </div>
              <div className="grid grid-cols-2 items-center gap-2">
                <Label htmlFor="room_num">Select Day </Label>
                <Select
                  name="Status"
                  id="Status"
                  defaultValue={routineData.Status}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Busy">Occupied</SelectItem>
                    <SelectItem value="Available">Available</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter>
                <Submit />
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default StatusModal;
