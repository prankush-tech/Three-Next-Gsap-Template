"use client"
import { Link as TransitionLink } from "next-transition-router";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="flex flex-col w-full justify-center items-center h-full ">
        <h1 className="mb-[10rem] flex flex-col h-screen justify-center text-7xl items-center w-screen text-black uppercase font-bold">
          Tarnish eldenZ
          <br/>
          <TransitionLink
            href="/about"
            data-transition-ignore
            className="underline underline-offset-4"
            >
           

          <button
            type="button"
            className="text-gray-900 fixed bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm  left-[40vw] right-[40vw] py-2.5 text-center  mb-2"
          >
            R3F ABOUT
          </button>
            </TransitionLink>
        </h1>

        <h1 className="mt-[10rem] mb-[20rem] flex h-screen justify-center text-7xl items-center w-screen text-black uppercase font-bold scrollingTest">
          Tarnish eldenZ
        </h1>
        <h1 className="mt-[20rem] flex h-screen justify-center text-7xl items-center w-screen text-black uppercase font-bold scrollingTest2">
          Tarnish lord 3
        </h1>
      </div>
    </main>
  );
}
