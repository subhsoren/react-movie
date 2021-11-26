const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "f215e09c913ff3b58bd781a8c0eae11b",
  originalImage: (imgPath) =>`https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) =>`https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig