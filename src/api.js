import axios from "axios";

const searchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Ok5fekXoV7Ny0nMgbLdx8bG3yWjerEu7YINYTa9zmwg"
    },
    params: {
      query: term
    }
  });
  console.log(response);
  return response.data.results;
};
export default searchImage;
