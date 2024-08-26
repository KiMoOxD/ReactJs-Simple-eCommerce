import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGeneralContext } from "../context/generalContext";

export default function RegisterPage() {
  let fname = useRef(),
    lname = useRef(),
    email = useRef(),
    password = useRef(),
    confirmPassword = useRef(),
    [valState, setValState] = useState(null),
    { signup } = useGeneralContext(),
    navigate = useNavigate()

  async function handleClick(e) {
    e.preventDefault()
    console.log(email.current.value)
    if (
      fname.current.value === "" ||
      lname.current.value === "" ||
      email.current.value === "" ||
      password.current.value === "" ||
      confirmPassword.current.value === ""
    ) {
      setValState('Please fill in all fields.')
      setTimeout( () => {
        setValState(null)
      }, 2000)
      return;
    }
    if (password.current.value !== confirmPassword.current.value) {
      setValState("Password doesn't match.")
      setTimeout( () => {
        setValState(null)
      }, 2000)
      return;
    }

    let response = await signup(email.current.value, password.current.value, fname.current.value)
    console.log(response)

    if (response && !response.ok) {
      setValState('Email already in use!')
      return
    }

    navigate('/')
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <main className="flex items-center justify-center lg:my-10 lg:shadow-lg px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-8 xl:col-span-6">
        <div className="max-w-lg">
          <h1 className="font-['Edu_AU_VIC_WA_NT_Hand'] mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to Shoopy!
          </h1>

          <p className="mt-4 leading-relaxed text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nam dolorum aliquam, quibusdam aperiam voluptatum.
          </p>
          {valState && <p className="text-center bg-red-300 p-2 rounded text-red-600 mt-2">{valState}</p>}
          <form onSubmit={handleClick} className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="FirstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>

              <input
                type="text"
                id="FirstName"
                name="first_name"
                ref={fname}
                className="mt-1 p-2 outline-none w-full rounded-md border-gray-200 bg-stone-50 text-sm text-gray-700 shadow-sm border"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="LastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>

              <input
                type="text"
                id="LastName"
                name="last_name"
                ref={lname}
                className="mt-1 p-2 outline-none w-full rounded-md border-gray-200 bg-stone-50 text-sm text-gray-700 shadow-sm border"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Email{" "}
              </label>

              <input
                type="email"
                id="Email"
                name="email"
                ref={email}
                className="mt-1 p-2 outline-none w-full rounded-md border-gray-200 bg-stone-50 text-sm text-gray-700 shadow-sm border"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Password{" "}
              </label>

              <input
                type="password"
                id="Password"
                name="password"
                ref={password}
                className="mt-1 p-2 outline-none w-full rounded-md border-gray-200 bg-stone-50 text-sm text-gray-700 shadow-sm border"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="PasswordConfirmation"
                className="block text-sm font-medium text-gray-700"
              >
                Password Confirmation
              </label>

              <input
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                ref={confirmPassword}
                className="mt-1 p-2 outline-none w-full rounded-md border-gray-200 bg-stone-50 text-sm text-gray-700 shadow-sm border"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="MarketingAccept" className="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                />

                <span className="text-sm text-gray-700">
                  I want to receive emails about events, product updates and
                  company announcements.
                </span>
              </label>
            </div>

            <div className="col-span-6">
              <p className="text-sm text-gray-500">
                By creating an account, you agree to our{" "}
                <span className="text-gray-700 underline">
                  terms and conditions
                </span>{" "}
                and{" "}
                <span className="text-gray-700 underline">privacy policy</span>.
              </p>
            </div>

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                type="submit"
                className="inline-block shrink-0 rounded-md border border-black bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-black"
              >
                Create an account
              </button>

              <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?{" "}
                <Link to={`/login`} className="text-gray-700 underline">
                  Log in
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
