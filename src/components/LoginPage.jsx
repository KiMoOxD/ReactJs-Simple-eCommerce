import {useState, useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGeneralContext } from "../context/generalContext";

export default function LoginPage() {
  let 
  email = useRef(),
  password = useRef(),
  [valState, setValState] = useState(null),
  { login, currentUser } = useGeneralContext(),
  navigate = useNavigate()

  async function handleClick(e) {
    e.preventDefault()
    console.log(email.current.value)
    if (email.current.value === "" || password.current.value === "") {
      setValState('Please fill in all fields.')
      setTimeout( () => {
        setValState(null)
      }, 2000)
      return;
    }

    let response = await login(email.current.value, password.current.value)
    console.log(response)
    console.log(currentUser)

    if (!response.user && !response.ok) {
      setValState('email or password is incorrect!')
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
                {valState && <p className="text-center bg-red-300 p-2 rounded text-red-600 mt-2">{valState}</p>}
                <form onSubmit={handleClick} className="mt-8 grid grid-cols-6 gap-6">
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

                  <div className="col-span-6 mb-2">
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

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button type="submit" className="inline-block shrink-0 rounded-md border border-black bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-black">
                      Log in
                    </button>

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Doesn't have an account?{' '}
                      <Link to={`/register`} className="text-gray-700 underline">
                        Create one
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
