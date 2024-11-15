"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, DoorOpen, CalendarFold } from "lucide-react";
import { updateRoutineByUapIdOnlyStatus } from "@/app/lib/actions";
import toast from "react-hot-toast";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";

export default function HomePage({ Routine, userData }) {
  console.log(Routine);

  function Submit() {
    const { pending } = useFormStatus();
    return (
      <Button
        className="w-full"
        variant="outline"
        type="submit"
        disabled={pending}
      >
        {pending ? "Occupying..." : "Occupy the room"}
      </Button>
    );
  }

  const [updatePostState, updatePostAction] = useFormState(
    updateRoutineByUapIdOnlyStatus,
    {
      error: null,
      success: false,
    }
  );

  console.log(updatePostState);

  useEffect(() => {
    if (updatePostState.success) {
      toast.success("Marked as occupied", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    }

    if (updatePostState.error) {
      toast.error("Failed to occupied", {
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    }
  }, [updatePostState]);

  return (
    <div className="container mx-auto py-10 px-4  ">
      <h1 className="text-4xl font-bold mb-8 text-center">Available Classes</h1>
      {Routine.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 ">
            {Routine.map((val) => (
              <>
                <Card
                  key={val.id}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span> Batch : {val.Batch}</span>
                      <Badge variant="outline">
                        {val.Status === "Available" ? "Available" : "Occupied"}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <DoorOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span> Room : {val.RoomNumber}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarFold className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span> Day : {val.Day}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Section : {val.Section}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>
                          {val.StartedTime} - {val.EndTime}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <form className="w-full" action={updatePostAction}>
                      <input
                        id="id"
                        name="id"
                        value={val._id}
                        className="hidden"
                      />
                      <input
                        id="id"
                        name="BusyBy"
                        value={userData.uap_id}
                        className="hidden"
                      />
                      <input
                        id="id"
                        name="Status"
                        value="Busy"
                        className="hidden"
                      />
                      <Submit />
                    </form>
                  </CardFooter>
                </Card>
              </>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="h-[38vh] flex justify-center items-center ">
            <b className="text-center ">No available classes </b>
          </div>
        </>
      )}
    </div>
  );
}
