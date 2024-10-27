"use client";

import { authenticate } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import Link from "next/link";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function Submit() {
    const { pending } = useFormStatus();

    return (
      <Button className="w-full" type="submit">
        {pending ? "Logining..." : "Sign In"}
      </Button>
    );
  }

  const [state, formAction] = useFormState(authenticate, undefined);

  useEffect(() => {
    if (state === "Wrong Credentials") {
      toast("Please Provide Valid Information", {
        style: {
          borderRadius: "10px",
          background: "red",
          color: "white",
        },
      });
    }
  }, [state]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md py-5">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Sign In With Room Ready
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action={formAction}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  name="password"
                  required
                />
                <Link className="pt-4 flex float-start text-xs" href="/forgot">
                  <p>Forgot Password ?</p>
                </Link>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
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
            </div>
            <Submit />

            {state === "Wrong Credentials" ? (
              <>
                <p className="text-red-500 text-right text-sm">
                  Wrong Credentials
                </p>
              </>
            ) : (
              <></>
            )}

            <p className="text-center text-sm">
              Copyright © 2023 Room Ready. All rights reserved
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
