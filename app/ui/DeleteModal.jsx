import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteRoutineByUapId } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
function DeleteModal({ uap_id, room }) {
  function Submit() {
    const { pending } = useFormStatus();
    return (
      <Button variant="destructive" className="w-26 h-8">
        {" "}
        {pending ? "Deleting..." : "Delete"}{" "}
      </Button>
    );
  }

  // const router = useRouter();

  const [state, formAction] = useFormState(deleteRoutineByUapId, {
    error: null,
    success: false,
  });

  console.log(state);
  const formRef = useRef();

  useEffect(() => {
    if (state.success) {
      formRef.current.reset();
      // router.push("/dashboard/profile");
      Dialog.Close();
      toast.success("Routine deleted successfully", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    }

    if (state.error) {
      toast.error("Failed to delete routine", {
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    }
  }, [state]);

  return (
    <>
      <div className="pl-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form action={formAction} ref={formRef}>
              <input type="hidden" name="id" value={uap_id} />
              <div className="flex flex-col justify-evenly items-center ">
                <p className="py-4">Are you want to delete room {room} ? </p>
                <Submit />
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default DeleteModal;
