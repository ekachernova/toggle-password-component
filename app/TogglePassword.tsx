"use client";

import { useState } from "react";

import Link from "next/link";

export default function TogglePassword() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    console.log(`Toggle visibility: ${isVisible}`);

    setIsVisible(!isVisible);
  };

  return (
    <form id="manage-password-section" className="flex flex-col gap-2">
      <div className="max-w-sm">
        <div className="flex-1">
          <label className="text-sm text-gray-800" htmlFor="newPassword">
            Password:
          </label>
          <div className="relative flex justify-between items-center gap-2">
            <input
              type={isVisible ? "text" : "password"}
              name="newPassword"
              id="newPassword"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Enter new password"
              minLength={7}
              required
            />
            {isVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
                onClick={toggleVisibility}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
                onClick={toggleVisibility}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-2 max-w-sm mt-6">
        <button type="button" className="max-w-sm w-fullx">
          <Link href="#">Cancel</Link>
        </button>
        <button type="submit" className="max-w-sm w-full">
          Save password
        </button>
      </div>
    </form>
  );
}
