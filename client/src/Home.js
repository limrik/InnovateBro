import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
import NewForm from "./NewForm";

function Home({ response }) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/fetchall", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "postData");
        setPosts(data.data);
      });
  }, []);

  return (
    <>
      <div className="h-full screen bg-[#EBEDEF] bg-no-repeat bg-cover h-[1200px]">
        {" "}
        <br></br>
        <div>
          <h1 class="text-center font-bold">
            Hey {response.name ? response.name : "bro"}, ready to innovate?
          </h1>{" "}
          <div>
            <NewForm />
            {posts.map((i) => {
              return (
                <div>
                  <Card props={i} />
                </div>
              );
            })}
          </div>
        </div>
        <br></br>
      </div>
    </>
  );
}

export default Home;
