import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
import Noout from "./Noout";
function Collectres({ results}) {

    // console.log(results);
    const abhi = () => {
      return (
        <>
          {results?.map((result) => (
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

export default Collectres