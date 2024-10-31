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

export default function HomePage({ Routine }) {
  console.log(Routine);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Available Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Routine.map((val) => (
          <>
            <Card
              key={val.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span> Batch : {val.Batch}</span>
                  <Badge variant="outline">{val.Status}</Badge>
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
                <Button variant="outline" className="w-full">
                  Mark as Busy
                </Button>
              </CardFooter>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
}
