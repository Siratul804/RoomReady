"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle, Clock, Users, DoorOpen } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, User, Key, Shield } from "lucide-react";

export default function ProfilePage({ userData }) {
  const [routineData, setRoutineData] = useState([
    {
      id: 1,
      batchNumber: "B001",
      roomNumber: "R101",
      section: "A",
      startTime: "09:00 AM",
      endTime: "10:30 AM",
      status: "busy",
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

  const handleStatusChange = (id, newStatus) => {
    setRoutineData(
      routineData.map((entry) =>
        entry.id === id ? { ...entry, status: newStatus } : entry
      )
    );
  };

  // Sample user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    username: "johndoe",
    idNumber: "ID123456",
    isAdmin: true,
    avatarUrl: "https://github.com/shadcn.png", // Replace with actual avatar URL
  };

  return (
    <>
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
              <Avatar className="w-24 h-24 border-4 border-white">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <CardTitle className="text-3xl font-bold">
                  {user.name}
                </CardTitle>
                <p className="text-lg opacity-80">{user.username}</p>
              </div>
            </CardHeader>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{userData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Key className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{userData.uap_id}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Account Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Admin Privileges</span>
                  <Badge
                    variant={user.isAdmin ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {user.isAdmin ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground">
                  {user.isAdmin
                    ? "You have full administrative access to the system."
                    : "You have standard user access to the system."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 pb-7">
            <CardTitle className="text-lg font-bold">
              {userData.uap_id}'s Class Routine
            </CardTitle>
            <Link href="/dashboard/routine">
              <Button className="w-full sm:w-auto">
                <PlusCircle className="mr-2 h-5 w-5" /> Add New Entry
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Batch</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Section</TableHead>
                    <TableHead className="text-right">Start Time</TableHead>
                    <TableHead className="text-right">End Time</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {routineData.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell className="font-medium">
                        {entry.batchNumber}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <DoorOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                          {entry.roomNumber}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                          {entry.section}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end">
                          <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                          {entry.startTime}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end">
                          <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                          {entry.endTime}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant={
                            entry.status === "busy" ? "destructive" : "success"
                          }
                        >
                          {entry.status.charAt(0).toUpperCase() +
                            entry.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Select
                          onValueChange={(value) =>
                            handleStatusChange(entry.id, value)
                          }
                          defaultValue={entry.status}
                        >
                          <SelectTrigger className="w-[110px]">
                            <SelectValue placeholder="Change status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="busy">Busy</SelectItem>
                            <SelectItem value="available">Available</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
