import React, { useEffect, useState } from "react";
import "./SearchList.css";
import SearchItem from "./SearchItem";
// import { HiArrowRight } from "react-icons/hi2";
// import { GiMonsteraLeaf } from "react-icons/gi";

export default function SearchList({ searchURL, onArticle }) {
  // console.log(searchURL);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const [NoResults, setNoResults] = useState(false);

  // if (searchURL === "") return;

  useEffect(() => {
    fetchURL(searchURL);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchURL]);

  const fetchURL = async (curURL) => {
    try {
      // Fetch the Data
      const response = await fetch(curURL);
      const jsonData = await response.json();

      //Filter the Result - Only Items with Id <= 3000
      const idLimitFilter = jsonData.data.filter((item) => item.id <= 3000);
      //Filter the Result - Only Items with Images Are Allowed
      const hasImageFilter = idLimitFilter.filter(
        (item) => item.default_image !== null
      );

      setFetchedData(hasImageFilter);

      // Allow Conditonal Rendering
      setIsLoading(false);
      setNoResults(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      // Allow Conditonal Rendering
      setNoResults(true);
    }
  };

  return (
    <div className="section-list" id="how">
      <div className="list" id="list">
        <div className="list-header">
          <span className="list-subhead">
            {fetchedData.length} results for your search.
          </span>
        </div>
        {NoResults ? <NoResults /> : <></>}
        <div className="cards-div">
          {!isLoading ? (
            <div className="cards-list">
              {fetchedData.map((item) => (
                <SearchItem
                  key={item.id}
                  content={item}
                  onArticle={onArticle}
                />
              ))}
            </div>
          ) : (
            <Loading />
          )}
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
// function NoResults() {
//   return (
//     <div className="loading-card">
//       <div></div>
//       <div>
//         <h2>
//           I'm sorry, there are no results for your search - image of a sad
//           plant!
//         </h2>
//         <img
//           className="loading-card-img"
//           src="img/loading.png"
//           alt="Loading"
//         ></img>
//       </div>
//       <div></div>
//     </div>
//   );
// }
