import { Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function StatusModal() {
  return (
    <>
      <div className="pl-2">
        <Dialog>
          <DialogTrigger asChild>
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
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 items-center gap-2">
                <Label htmlFor="room_num">Room Number :</Label>
                <Input
                  id="room_num"
                  type="text"
                  placeholder="Enter Your Room Number"
                  name="RoomNumber"
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
                  required
                />
              </div>
              <div className="grid grid-cols-2 items-center gap-2">
                <Label htmlFor="room_num">Change Status : </Label>
                <TableCell>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Change status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Available">Available</SelectItem>
                        <SelectItem value="Busy">Busy</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </TableCell>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default StatusModal;
