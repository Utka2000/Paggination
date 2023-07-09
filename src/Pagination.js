import React from "react";
import { useState, useEffect } from "react";
const Pagination = () => {
  const [userData, setUserData] = useState([]);
  const [currentPages, setCurrentPages] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const APIURL = "https://jsonplaceholder.typicode.com/comments";

  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setTotalPages(Math.ceil(data.length / 10));
      });
  }, []);

  return (
    <>
      <p>My app</p>
      {userData.map((item, index) => {
        return (
          <h3 key={item.id}>
            {index + 1}
            {item.name}
          </h3>
        );
      })}
    </>
  );
};

export default Pagination;
