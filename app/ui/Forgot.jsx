"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
const ForgotForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card className="w-full max-w-md py-5 ">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Forgot Password ?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />

            <Button className="w-full" type="submit">
              Submit
            </Button>
            <p className="text-center text-sm ">
              Copyright © 2023 Room Ready. All rights reserved
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotForm;
