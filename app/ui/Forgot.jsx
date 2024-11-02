"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const ForgotForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4j1pn1s", "template_r9fu0ci", form.current, {
        publicKey: "_34ecajQHI8ss7qca",
      })
      .then(
        () => {
          form.current.reset();
          console.log("SUCCESS!");
          toast.success(
            "Password will be update and sending to you mail address",
            {
              style: {
                background: "#008000",
                color: "#fff",
              },
            }
          );
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card className="w-full max-w-md py-5 ">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Forgot Password ?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <Input
              id="email"
              type="email"
              name="message"
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
