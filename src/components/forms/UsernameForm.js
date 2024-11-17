"use client";
import grabUsername from "@/actions/grabUsername";
import RightIcon from "../icons/RightIcon";
import SubmitButton from "../buttons/SubmitButton";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function UsernameForm({ desiredUsername }) {
  const [taken, setTaken] = useState(false);
  async function handleSubmit(formData) {
    const result = await grabUsername(formData);
    if (result.success) {
      redirect("/account?created=" + formData.get("username"));
    } else {
      setTaken(true);
    }
  }

  return (
    <form action={handleSubmit}>
      <h1 className="text-4xl font-bold text-center mb-2">
        Grab your username
      </h1>
      <p className="text-center mb-6 text-gray-500">Choose your username</p>
      <div className="max-w-xs mx-auto">
        <input
          name="username"
          className="block p-2 mx-auto border w-full mb-2"
          defaultValue={desiredUsername}
          type="text"
          placeholder="Username"
        />
        {taken && (
          <div className="bg-red-200 border border-red-500 p-2 mb-2 text-center">
            The username is taken
          </div>
        )}

        <SubmitButton>
          <span>Claim Username</span>
          <RightIcon />
        </SubmitButton>
      </div>
    </form>
  );
}
