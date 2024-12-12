import SignInForm from "@/components/signin-form";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (session?.user) redirect("/app");
  return (
    <div className="flex items-center justify-center h-screen ">
      <SignInForm />
    </div>
  );
};

export default page;
