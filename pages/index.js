import moment from "moment/moment";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [isloading, setIsLoading] = useState(false);
  const [actorId, setActorId] = useState([]);
  const [regexArray, setRegexArray] = useState([]);

  const date = moment();
  const currentDate = date.format("D");
  const currentMonth = date.format("MM");
  console.log({ currentDate, currentMonth });

  let exampleStr = "/name/nm0001367/";
  let Regex = /nm.([0-9][1-9])* |nm.([1-9][0-9])*/g;
  let result = Regex.test(exampleStr);
  console.log(result);
  const newRegex = regexArray;
  newRegex.push(
    "nm0396558",
    "nm0115161",
    "nm0001367",
    "nm0908919",
    "nm2655177",
    "nm1970465",
    "nm1358539",
    "nm1658935",
    "nm0000995",
    "nm0264579",
    "nm0359969",
    "nm0942482",
    "nm0243233",
    "nm0032375",
    "nm0001823",
    "nm0004809",
    "nm0001679",
    "nm0751085",
    "nm0055733",
    "nm0374194",
    "nm0461095",
    "nm6471347",
    "nm1082823",
    "nm4970834",
    "nm2158772",
    "nm0005077",
    "nm0317519",
    "nm0426855",
    "nm4047115",
    "nm0198899",
    "nm0396558",
    "nm0115161",
    "nm0001367",
    "nm0908919",
    "nm2655177",
    "nm1970465",
    "nm1358539",
    "nm1658935",
    "nm0000995",
    "nm0264579",
    "nm0359969",
    "nm0942482",
    "nm0243233",
    "nm0032375",
    "nm0001823",
    "nm0004809",
    "nm0001679",
    "nm0751085",
    "nm0055733",
    "nm0374194",
    "nm0461095",
    "nm6471347",
    "nm1082823",
    "nm4970834",
    "nm2158772",
    "nm0005077",
    "nm0317519",
    "nm0426855",
    "nm4047115",
    "nm0198899"
  );
  console.log(newRegex, "REGEX ARRAY");

  // arr = ["nm2482088","nm2482088","nm248208"]

  useEffect(() => {
    console.log(actorId);
  }, []);

  const fetchData = () => {
    try {
      setIsLoading(true);
      axios
        .get("https://imdb8.p.rapidapi.com/actors/list-born-today", {
          params: { month: currentMonth, day: currentDate },
          headers: {
            "X-RapidAPI-Key":
              "a4ee3ed4c9msh242ccb05130d2e6p1d5d08jsnb8bb6573fb7f",
            "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
          },
        })
        .then((res) => setActorId(res.data, "response"))
        .catch((err) => console.log(err, "error"));
      console.log("its running");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <h1>hello</h1>
      <button onClick={fetchData}>Fetch the data</button>
      <div>{actorId}</div>
      {isloading
        ? "Loading..."
        : actorId
            // .filter((i) => i.y >= 2022)
            .map((item) => <div key={item}>{item}</div>)}
    </div>
  );
}
