import axios from "axios";

const getMovieBySearch = async (query) => {
  const response = await axios.get(
    `http://localhost:5000/api/movies/search?query=${query}`
  );

  // console.log(response.data.data);
  return response.data.data;
};


// const getAllMovies = async () => {
//   try {
//     const response = await axios.get("http://localhost:5000/api/movies/all");
//     console.log(response.data.data);
//     return response.data.data;
//   } catch (error) {
//     console.error("Error:", error);
//     // Handle any errors here
//     throw error;
//   }
// };

export { getMovieBySearch};
