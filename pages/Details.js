import React from "react";
import DetailsComponent from "../components/DetailComponent";
import Similar from "../components/Similar";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import Crew from "../components/Crew";
import Youtube from "../components/Youtube";
import Genre from "../components/Genre";

function Details({ mydata, mydata1, mydata2, mydata3, id }) {
  // console.log(mydata3);
  const [sim, setsim] = useState([]);
  const [crew, setcrew] = useState([]);
  const [youte, setyoute] = useState([]);
  useEffect(() => {
    setcrew(mydata2.cast);
    setsim(mydata1.results);
    setyoute(mydata.videos.results);

  }, [mydata1, mydata2, mydata3, id, mydata.videos.results]);
  return (
    <>
      <Header />
      <DetailsComponent data={mydata} mydata3={mydata3} id={id}  />


      <section className="text-green-300   body-font bg-[#0b0a0a]">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-5xl  text-2xl tracking-wider  font-extrabold title-font mb-2 text-white">
            More Videos
          </h1>
          <div className="flex flex-wrap -m-4">
            {/* <div className="my-10 sm:grid md:grid-cols-2  xl:grid-cols-6  flex  "> */}
            {youte?.map((you) => {
              return (
                <Youtube
                  name={you.name}
                  type={you.type}
                  link={you.key}
                  key={you.id}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="  body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-5xl text-2xl tracking-wider  font-extrabold title-font mb-2 text-white">
            Cast & Crew
          </h1>
          <div className="h-1 w-20 bg-indigo-500 " />
          {/* <div className="flex mt-4 flex-wrap -m-4"> */}
          {/* <div className=" flex   whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide  "> */}
          <div className="  my-10 sm:grid md:grid-cols-2  xl:grid-cols-6  flex  ">
            {crew?.map((cr) => {
              return (
                <Crew
                  key={cr.id}
                  character={cr.character}
                  original_name={cr.original_name}
                  profile_path={cr.profile_path}
                  popularity={cr.popularity}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="  body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-5xl text-2xl tracking-wider  font-extrabold title-font mb-2 text-white">
            Similar Movies
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded" />
          <div className=" flex px-10 mt-10 sm:px-20 text-2xl sm:space-x-20 space-x-10 whitespace-nowrap   overflow-x-scroll scrollbar-hide">
            {sim?.map((si) => {
              return (
                <Similar
                  key={si.id}
                  id={si.id}
                  image={si.poster_path}
                  title={si.original_title}
                  overview={si.overview}
                  release_date={si.release_date}
                  vote_count={si.vote_count}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

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
  let req3 = await fetch("http://localhost:9000/posts");
  let mydata = await req?.json();
  let mydata1 = await req1?.json();
  let mydata2 = await req2?.json();
  let mydata3 = await req3?.json();
  return {
    props: { mydata, mydata1, mydata2, mydata3, id }, // will be passed to the page component as props
  };
}
export default Details;
