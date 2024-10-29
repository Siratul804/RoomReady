import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteRoutineByUapId } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function DeleteModal({ uap_id }) {
  function Submit() {
    const { pending } = useFormStatus();
    return (
      <Button variant="destructive" className="w-26 h-8">
        {" "}
        {pending ? "Deleting..." : "Delete"}{" "}
      </Button>
    );
  }

  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(deleteRoutineByUapId, initialState);

  const formRef = useRef();

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
              <div className="flex justify-evenly items-center ">
                <p>Are you sure ?</p>
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
