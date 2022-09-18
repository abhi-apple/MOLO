import Head from "next/head";
import Image from "next/image";
import Details from "./Details";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import requests from "../utils/requests";
import Homeheader from "../components/Homeheader";
import React from "react";
import DetailsComponent from "../components/DetailComponent";
import Similar from "../components/Similar";
import { useState } from "react";
import { useEffect } from "react";
import hulu from "../public/hululo.png";
import { useRouter } from "next/router";
import Sub from "./Sub";
import { useSession } from "next-auth/react";

export default function Home({ mydata }) {
  // console.log(mydata.videos.results);
  const [youte, setyoute] = useState([]);

  // const { data: session } = useSession();
  // console.log(session);

  useEffect(() => {
    setyoute(mydata);
  }, [mydata]);
  const router = useRouter();
  // console.log(mydata);
  return (
    <div className="bg-black ">
      {/* <section className=" bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/9c08772c-0ce8-4813-b503-93859177a146/IN-en-20220822-popsignuptwoweeks-perspective_alpha_website_small.jpg')] bg-opacity:0 text-white body-font"> */}
      {/* <section className=" bg-[url('https://media-assets-05.thedrum.com/cache/images/thedrum-SUPERd/s3-news-tmp-10557-netflixa--default--1280.jpg')] bg-opacity:0 text-white body-font"> */}
      <div className="absolute   bg-gradient-to-t from-[#211818] m-11  w-full" />
      <section
        className={`bg-[url('https://i.imgur.com/omUo152.png')] bg-opacity:0 text-white body-font`}
      >
        <Homeheader />
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          {/* <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          /> */}
          <div className="text-center lg:w-2/3 mb-72 w-full">
            <h1 className="title-font sm:text-7xl text-3xl tracking-wider mb-4 font-semibold text-white">
              Universal Entertainment
              <br /> At One Place
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#00ff00]">
              World in Your Hands
            </h1>
            <p className="mb-8 text-4xl leading-relaxed">
              Want To Watch Movie Right Now ? Go For It ......
            </p>
            <div className="flex text-5xl sm:flex-row flex-col flex-grow font-light justify-evenly ">
              <button onClick={() => router.push(`movies`)} className="inline-flex  tracking-wider transition duration-200 ease-in-out transform sm:hover:scale-105 text-white border-[#ff0000] hover:bg-[#ff0000]  border-4 py-4 px-6  focus:outline-none hover:opacity-100 rounded-sm">
                Its Show Time 🍿
              </button>
              <button onClick={() => router.push(`signlog`)} className="inline-flex tracking-wider transition duration-200 ease-in-out transform sm:hover:scale-105 text-white border-[#0000FF] border-4 py-4 px-6 hover:bg-[#0000FF]  focus:outline-none hover:opacity-100 rounded-sm">
                Login/Signup
              </button>
            </div>
          </div>
        </div>
      </section>
      <Sub/>
      <section className="  bg-black   body-font">
        {/* <Homeheader /> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-1/2 md:w-full w-full mb-10 md:mb-0">
            <Image
              width={1800}
              height={1900}
              className="object-fill  "
              alt="hero"
              src="https://i.imgur.com/4prr8ds.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-BASIC md:text-left  text-center">
            <h1 className="title-font sm:text-6xl text-3xl tracking-wide mb-2 font-medium text-white">
              {" "}
              Decide what your child
              <br /> can see .
            </h1>
            <br />
            <h1 className="title-font sm:text-4xl text-2xl tracking-wide mb-4 font-light text-white">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h1>
          </div>
        </div>
      </section>
      <section className=" bg-[url('https://i.imgur.com/cSmWaK7.png')] body-font">
        {/* <Homeheader /> */}
        <br />
        <br />
        <div className="container mx-auto flex px-5 py-64 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-24 md:mb-0">
            <Image
              className="object-contain"
              alt="image"
              src={hulu}
              width={500}
              height={300}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-BASIC md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Ready to watch? Enter your email to Create Account
            </h1>
            <div className="flex flex-row w-full md:justify-BASIC justify-center items-end">
              <div className="relative mr-4 transition duration-200 ease-in-out transform sm:hover:scale-105 lg:w-full xl:w-1/2 w-2/4">

                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full bg-gray-100 bg-opacity-50  rounded border border-gray-300 hover:border-[#00BF00] focus:ring-2 focus:ring-indigo-200 focus:bg-white focus:border-[#0000FF] text-xl outline-none text-gray-700 py-4 px-9 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex transition duration-200 ease-in-out transform sm:hover:scale-105 text-white bg-[#ff0000f7]   py-4 px-9 focus:outline-none hover:bg-[#ff1d1d]  text-2xl">
                GET STARTED ➪
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// http://api.themoviedb.org/3/movie/157336?api_key=###&append_to_response=videos

// https://www.hulu.com/static/hitch/s3/attachments/ckdz36xqi7zz019ym0b2seyqk-dplus-logo-0-1-2-0.full.png

export async function getServerSideProps(context) {
  const id = context.query.id;
  let req = await fetch(
    `http://api.themoviedb.org/3/movie/${id}?api_key=49104ed84bd4fa58190e3ad74f40d7d4&append_to_response=videos`
  );
  let req1 = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=49104ed84bd4fa58190e3ad74f40d7d4&language=en-US&page=1`
  );
  let req2 = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=49104ed84bd4fa58190e3ad74f40d7d4&language=en-US&page=1`
  );
  let mydata = await req?.json();
  let mydata1 = await req1?.json();
  let mydata2 = await req2?.json();
  return {
    props: { mydata, mydata1, mydata2 }, // will be passed to the page component as SUPERps
  };
}
