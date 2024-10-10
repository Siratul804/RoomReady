"use client";
import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        action={formAction}
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          RoomReady
        </h1>

        <div className="mb-4">
          <Input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full text-black "
          />
        </div>

        <div className="mb-6">
          <Input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full text-black "
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white hover:text-white p-1 rounded-md text-[15px] py-2 px-4  text-center hover:bg-slate-900 "
        >
          Sign In
        </button>

        {state && (
          <div className="mt-4 text-center text-red-500">
            {state.error && state.error.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
