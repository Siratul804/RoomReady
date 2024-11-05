"use client";

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

import { PlusCircle, Clock, Users, DoorOpen } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, User, Key, Shield } from "lucide-react";
import StatusModal from "./StatusModal";
import DeleteModal from "./DeleteModal";

export default function ProfilePage({ userData, routineData }) {
  return (
    <>
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
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
                    variant={userData.isAdmin ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {userData.isAdmin ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground flex justify-center ">
                  {userData.isAdmin
                    ? "You have full administrative access to the system."
                    : "You have standard user access to the system."}
                </p>
                {userData.isAdmin ? (
                  <>
                    <Link
                      href="/dashboard/SignUp"
                      className="flex justify-center pt-2 "
                    >
                      <Badge variant="default" className="text-xs">
                        {userData.isAdmin ? "Add User" : "Disabled"}
                      </Badge>
                    </Link>
                  </>
                ) : (
                  <>
                    <Badge variant="default" className="text-xs">
                      {userData.isAdmin ? "Add User" : "Disabled"}
                    </Badge>
                  </>
                )}
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
                    <TableHead className="">Batch</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Section</TableHead>
                    <TableHead>Day</TableHead>
                    <TableHead className="text-right">Start Time</TableHead>
                    <TableHead className="text-right">End Time</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-center">Occupied by</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {routineData.length > 0 ? (
                    <>
                      {routineData.map((entry) => (
                        <>
                          <TableRow key={entry.id}>
                            <TableCell className="font-medium">
                              {entry.Batch}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <DoorOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                                {entry.RoomNumber}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                                {entry.Section}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                {entry.Day}
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end">
                                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                {entry.StartedTime}
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end">
                                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                {entry.EndTime}
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <Badge
                                variant={
                                  entry.Status === "Busy"
                                    ? "destructive"
                                    : "success"
                                }
                              >
                                {entry.Status === "Available"
                                  ? "Available"
                                  : "Occupied"}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-center">
                              {entry.BusyBy || entry.uap_id}
                            </TableCell>
                            <TableCell className="text-left flex  ">
                              <DeleteModal
                                uap_id={entry.uap_id}
                                room={entry.RoomNumber}
                              />
                              <StatusModal routineData={entry} />
                            </TableCell>
                          </TableRow>
                        </>
                      ))}
                    </>
                  ) : (
                    <>
                      <b className="text-xs">No data available</b>
                    </>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
