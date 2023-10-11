import React from "react";
import LandingPage from "../Components/LandingPage/LandingPage";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TopHeading from "../Components/TopHeading/TopHeading";
import Navbar from "../Components/Navbar/Navbar";
import Login from "../Components/Login/Login";
// import BodyPage from "../Components/BodyPage/BodyPage";
import Body_1 from "../Components/BodyPage/BodyPage";
import Footer from "../Components/Footer/Footer";
const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const Home = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  // useEffect(() => {
  //   if (query === "") {
  //     setSuggestions([]);
  //   } else {
  //     let newListofSuggestions = searchServices
  //       .filter((item) =>
  //         item.service.toLowerCase().indexOf(query) !== -1 ? true : false
  //       )
  //       .map((item) => item.service);
  //     setSuggestions(newListofSuggestions);
  //   }
  //   setTimeout(() => setLoading(false), 1000);
  // }, [query]);
  return (
    <div>
      <Navbar />
      <Body_1 images={images} />
      <Box w={"100%"} border="2px solid red" margin={"auto"} bg="black">
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
