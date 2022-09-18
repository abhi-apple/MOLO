import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
import Noout from "./Noout";
function Results({ results }) {
  // console.log(results);
  const abhi = () => {
    return (
      <>
        {results?.results?.map((result) => (
          <Thumbnail key={result.id} result={result} />
        ))}
      </>
    );
  };
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center ">
      {results?.total_results === 0 ? <Noout /> : abhi()}
    </div>
  );
}

// http://api.themoviedb.org/3/movie/157336?api_key=###&append_to_response=videos

export default Results;
