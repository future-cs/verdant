import React, { useEffect, useState } from "react";
import "./List.css";
import Item from "./Item";
import ItemFullviewCard from "./ItemFullviewCard";
import { HiArrowRight } from "react-icons/hi2";
import { GiMonsteraLeaf } from "react-icons/gi";

export default function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const [seeMore, setSeeMore] = useState(1);
  const [fullviewCard, setFullviewCard] = useState("");

  useEffect(() => {
    const initURL = `https://perenual.com/api/article-faq-list?key=sk-Sw6j64b3059ecc0811570&q&page=${seeMore}`;

    fetchURL(initURL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seeMore]);

  const fetchURL = async (curURL) => {
    try {
      // Fetch the Data
      const response = await fetch(curURL);
      const jsonData = await response.json();

      //Filter the Result - Only Items with Images Are Allowed
      const imageRequired = jsonData.data.filter(
        (item) => item.default_image !== null
      );

      setFetchedData(fetchedData.concat(imageRequired));

      //Choose a Random Question to Display as the Fullview Card
      const randomIndex = Math.floor(Math.random() * imageRequired.length);
      const randomID = imageRequired[randomIndex];
      setFullviewCard(randomID);

      // Allow Conditonal Rendering
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  function handleSeeMore() {
    setSeeMore(seeMore + 1);
  }

  function handleFullviewCard(id) {
    const selected = fetchedData.filter((item) => item.id === id);
    setFullviewCard(selected[0]);

    //Scroll to the Fullview Card
    const section = document.getElementById("list");
    const offset = 80;
    const topPosition =
      section.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  }

  return (
    <div className="section-list">
      <div className="list" id="list">
        <div className="list-header">
          <span className="list-subhead">Our Collection</span>
          <h2>Most Searched This Week</h2>
        </div>

        {!isLoading ? (
          <ItemFullviewCard content={fullviewCard} key={102030} />
        ) : (
          <Loading />
        )}
        <div className="cards-div">
          {!isLoading ? (
            <div className="cards-list">
              {fetchedData.map((item) => (
                <Item
                  key={item.id}
                  content={item}
                  onFullviewCard={handleFullviewCard}
                />
              ))}
            </div>
          ) : (
            <Loading />
          )}
          <div>
            <button className="cards-div-btn" onClick={handleSeeMore}>
              <GiMonsteraLeaf /> See more <HiArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="loading-card">
      <div></div>
      <div>
        <h2>Loading...</h2>
        <img
          className="loading-card-img"
          src="img/loading.png"
          alt="Loading"
        ></img>
      </div>
      <div></div>
    </div>
  );
}
