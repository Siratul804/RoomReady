"use client";
import { addRoutine } from "@/app/lib/actions";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function RoutineRoom({ user }) {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-lg font-bold text-center">
            Add New Entry
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-2" action={addRoutine}>
            <div className="space-y-2">
              <Input
                id="number"
                type="number"
                name="uap_id"
                value={user.uap_id}
                className="hidden"
                placeholder="Enter Your UAP ID"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Batch Number</Label>
              <Input
                id="number"
                type="number"
                placeholder="Enter Your Batch Number"
                name="Batch"
                required
              />
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
            <div className="space-y-2">
              <Label htmlFor="role">Select Section</Label>
              <Select name="Section" id="section">
                <SelectTrigger>
                  <SelectValue placeholder="Select your section" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">A</SelectItem>
                  <SelectItem value="B">B</SelectItem>
                  <SelectItem value="C">C</SelectItem>
                  <SelectItem value="D">D</SelectItem>
                  <SelectItem value="E">E</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full" type="submit">
              Add Routine
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default RoutineRoom;
