"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, DoorOpen } from "lucide-react";

export default function HomePage() {
  const [classes, setClasses] = useState([
    {
      id: 1,
      batchNumber: "B001",
      roomNumber: "R101",
      section: "A",
      startTime: "09:00 AM",
      endTime: "10:30 AM",
      status: "available",
    },
    {
      id: 2,
      batchNumber: "B002",
      roomNumber: "R102",
      section: "B",
      startTime: "10:45 AM",
      endTime: "12:15 PM",
      status: "available",
    },
    {
      id: 3,
      batchNumber: "B003",
      roomNumber: "R103",
      section: "C",
      startTime: "01:00 PM",
      endTime: "02:30 PM",
      status: "busy",
    },
    {
      id: 4,
      batchNumber: "B004",
      roomNumber: "R104",
      section: "D",
      startTime: "02:45 PM",
      endTime: "04:15 PM",
      status: "available",
    },
  ]);

  const handleStatusChange = (id) => {
    setClasses(
      classes.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "busy" ? "available" : "busy" }
          : c
      )
    );
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Available Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes
          .filter((c) => c.status === "available")
          .map((classInfo) => (
            <Card
              key={classInfo.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{classInfo.batchNumber}</span>
                  <Badge variant="outline">{classInfo.status}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <DoorOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{classInfo.roomNumber}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Section {classInfo.section}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>
                      {classInfo.startTime} - {classInfo.endTime}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleStatusChange(classInfo.id)}
                  variant="outline"
                  className="w-full"
                >
                  Mark as Busy
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
}
