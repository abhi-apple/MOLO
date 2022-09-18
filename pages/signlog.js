import hulu from "../public/hululo.png";
import Image from "next/image";
import FacebookPlayer from "react-player/facebook";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  FaFacebookF,
  FaGithub,
  FaRegEnvelope,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";
import { MdLock } from "react-icons/md";
import Link from "next/link";
export default function Signlog() {
  const { data: session } = useSession();
  // console.log(session);

  return (
    <div className="flex flex-col items-center bg-[url('https://i.imgur.com/PnQSoRt.png')] justify-center min-h-screen bg-gray-100 py-2">
      <Head>
        <title>Login/Signup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex text-black flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex  max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-400">M</span>OL
              <span className="text-red-400">O</span>
            </div>
            {session ? (
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                  <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                    <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                      Login Successful.
                    </h1>
                    <Link href={`/`}>
                      <button className="flex-shrink-0 mr-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
                        Home Page
                      </button>
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
                    >
                      signOut
                    </button>
                  </div>
                </div>
              </section>
            ) : (
              <div className="py-10">
                <h2 className="text-3xl font-bold text-green-500">Sign In</h2>
                <div className="border-2 w-10 border-green-400 inline-block mb-2"></div>
                <div className="flex space-x-5 justify-center my-2">
                  <a
                    onClick={() => signIn()}
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1     transition delay-150 duration-300 ease-in-out inline-block hover:shadow-2xl hover:shadow-neutral-700 font-semibold hover:text-white hover:bg-[#6cc644] hover:scale-125 "
                  >
                    <FaGithub className="" />
                  </a>

                  <a
                    onClick={() => signIn()}
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1 transition delay-150 duration-300 ease-in-out inline-block hover:shadow-2xl hover:shadow-neutral-700 font-semibold hover:text-white hover:bg-[#b24242] hover:scale-125"
                  >
                    <FaGoogle  />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1  transition delay-150 duration-300 ease-in-out inline-block hover:shadow-2xl hover:shadow-neutral-700 font-semibold hover:text-white hover:bg-[#0077b5] hover:scale-125"
                  >
                    <FaLinkedin className="" />
                  </a>
                </div>
                <p className="text-gray-400 my-3"> or Use Email Account</p>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                    <FaRegEnvelope className="text-gray-400  m-2" />
                    <input
                      type="email"
                      name="email"
                      className="bg-gray-100 flex-1 text-sm  outline-none"
                      placeholder="Email"
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                    <MdLock className="text-gray-400  m-2" />
                    <input
                      type="password"
                      name="password"
                      className="bg-gray-100 flex-1 text-sm  outline-none"
                      placeholder="Password"
                    />
                  </div>
                  <div className="items-center justify-between flex w-64 mb-5">
                    <label className="flex items-center text-xs">
                      <input
                        type="checkbox"
                        className="mr-1"
                        name="remainder"
                      />
                      Remember me
                    </label>
                    <a href="#" className="text-xs hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                  <a
                    href="#"
                    className="border-2 transition delay-150 duration-300 ease-in-out inline-block hover:shadow-2xl hover:shadow-neutral-700 font-semibold hover:text-white hover:bg-green-500 hover:scale-125 border-green-400 rounded-full px-12 py-2"
                  >
                    Sign In
                  </a>
                </div>
              </div>
            )}
          </div>
          {session ? (
            <></>
          ) : (
            <div className="w-2/5 text-white rounded-tr-2xl py-36 px-12 rounded-br-2xl bg-[#ff0000]">
              <h2 className="text-3xl font-bold mb-2">Signup</h2>
              <div className="border-2 w-10 inline-block border-white mb-2"></div>
              <p className="mb-10">Sign up Now To Enter The World of MOLO</p>
              <a
                href={"/logsign"}
                className="border-2 transition delay-150 duration-300 ease-in-out inline-block hover:shadow-2xl hover:shadow-neutral-700 font-semibold hover:text-[#ff0000] hover:bg-white hover:scale-125 border-white rounded-full px-12 py-2"
              >
                Signup
              </a>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
