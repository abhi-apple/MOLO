const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "TRENDING",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated:{
      title: "TOP RATED",
      url: `/movies/top-rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies:{
    title: "ACTION MOVIES",
    url:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies:{
    title: "Comedy Movies",
    url:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies:{
    title: "Horror Movies",
    url:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchRomanceMovies:{
    title: "Romance Movies",
    url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery:{
    title: "Mystery Movies",
    url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSiFi:{
    title: "SiFi Movies",
    url:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern:{
    title: "Western Movies",
    url:`/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation :{
    title: "Animation Movies",
    url:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTv:{
    title: "Tv Movies",
    url:`/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
