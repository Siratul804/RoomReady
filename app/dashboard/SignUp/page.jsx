"use client";

import { addUser } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Dashboard() {
  function Submit() {
    const { pending } = useFormStatus();
    return (
      <Button className="w-full" type="submit" disabled={pending}>
        {pending ? "Signing..." : "Sign Up"}
      </Button>
    );
  }

  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(addUser, initialState);

  const formRef = useRef();

  useEffect(() => {
    if (state?.message === "User Added") {
      formRef.current.reset();
      toast.success("User Added Successfully !", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    } else if (state?.message === "Already Exits") {
      toast.error("User Already Exits !", {
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    }
  }, [state]);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const checkPasswordsMatch = () => {
    setPasswordsMatch(password === confirmPassword);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-lg font-bold text-left">
            Add RoomReady User || Sign Up
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={formAction} ref={formRef}>
            <div className="space-y-2">
              <Label htmlFor="uap_id">UAP ID</Label>
              <Input
                id="uap_id"
                type="number"
                name="uap_id"
                placeholder="Enter Your UAP ID"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="pt-1">
                <Label htmlFor="email">Email</Label>
              </div>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="">
              <div className="flex">
                <div className="pt-1">
                  <Label htmlFor="password">Password</Label>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="hover:bg-transparent "
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                onBlur={checkPasswordsMatch}
              />
            </div>
            <div className="space-y-2">
              <div className="pt-1">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
              </div>
              <Input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Your Password"
                name="confirmPassword"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={checkPasswordsMatch}
              />
            </div>
            {!passwordsMatch && (
              <p style={{ color: "red", fontSize: "14px" }}>
                Passwords do not match
              </p>
            )}
            <div className="space-y-2">
              <div className="pt-1">
                <Label htmlFor="isAdmin">Is Admin</Label>
              </div>
              <Select name="isAdmin" id="isAdmin">
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="false">No</SelectItem>
                  <SelectItem value="true">Yes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="pt-4">
              <Submit />
            </div>

            <div className="flex justify-end pt-1 ">
              {state?.message === "Already Exits" ? (
                <>
                  <p className="text-red-500 text-sm"> User Already Exits ! </p>
                </>
              ) : (
                <></>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
