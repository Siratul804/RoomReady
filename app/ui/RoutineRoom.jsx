"use client";
import { addRoutine } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function RoutineRoom({ user }) {
  console.log(user);
  function Submit() {
    const { pending } = useFormStatus();
    return (
      <Button className="w-full" type="submit" disabled={pending}>
        {pending ? "Adding..." : " Add Routine"}
      </Button>
    );
  }

  const router = useRouter();

  const [createPostState, createPostAction] = useFormState(addRoutine, {
    error: null,
    success: false,
  });

  console.log(createPostState);

  const formRef = useRef();
  useEffect(() => {
    if (createPostState.success) {
      formRef.current.reset();
      router.push("/dashboard/profile");
      toast.success("Routine created successfully", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    }

    if (createPostState.error) {
      toast.error("Failed to create routine", {
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    }
  }, [createPostState]);

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Add New Entry
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-2" action={createPostAction} ref={formRef}>
            <div className="space-y-2">
              <Input
                id="number"
                type="number"
                name="uap_id"
                value={user.uap_id}
                className="hidden"
                placeholder="Enter Your UAP ID"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="batch"
                type="number"
                placeholder="Enter Your Batch Number"
                className="hidden"
                name="Batch"
                value={user.batch}
              />
            </div>
            <div className="space-y-2">
              <Input
                id="section"
                type="text"
                placeholder="Enter Your section "
                className="hidden"
                name="Section"
                value={user.section}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="room_num">Select Day </Label>
              <Select name="Day" id="Day">
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
            <div className="space-y-2">
              <Label htmlFor="room_num">Room Number</Label>
              <Input
                id="room_num"
                type="text"
                placeholder="Enter Your Room Number"
                name="RoomNumber"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="start_time">Started Time</Label>
              <Input
                id="started_time"
                type="text"
                placeholder="Enter Your Started Time"
                name="StartedTime"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="room_num">Ended Time</Label>
              <Input
                id="end_time"
                type="text"
                placeholder="Enter Your End Time"
                name="EndTime"
                required
              />
            </div>

            <Submit />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default RoutineRoom;
