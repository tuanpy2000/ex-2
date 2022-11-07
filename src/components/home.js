import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

export default function Home() {
  const [elements, setElements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchElements = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:8000/get");
      setElements(response?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchElements();
  }, []);

  useEffect(() => {
    const arrayOfTwentyFourWords = _.sampleSize(elements, 24);
    console.log(
      "🚀 ~ file: home.js ~ line 27 ~ useEffect ~ arrayOfTwentyFourWords",
      arrayOfTwentyFourWords
    );
    const listOfTwentyFourWords = arrayOfTwentyFourWords.map((name, index) => ({
      name,
      index: index,
    }));
    const listOfEighteenWords = _.sampleSize(listOfTwentyFourWords, 18);
    console.log(
      "🚀 ~ file: home.js ~ line 33 ~ useEffect ~ listOfEighteenWords",
      listOfEighteenWords
    );

    const listOfSixElements = _.chunk(listOfEighteenWords, 3).map((item) => ({
      list: item.map((name) => {
        return name.name;
      }),
      primary: Math.floor(
        Math.random() *
          item.map((id) => {
            return id.index;
          }).length
      ),
    }));
    console.log(
      "🚀 ~ file: home.js ~ line 52 ~ listOfSixElements ~ listOfSixElements",
      listOfSixElements
    );
  }, [elements]);

  return <div>ex-2</div>;
}
