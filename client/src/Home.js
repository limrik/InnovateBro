import React from "react";
import { useNavigate } from "react-router-dom";

function Home({ response }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h screen bg-bg1 bg-no-repeat bg-cover h-[1200px]">
        {" "}
        <br></br>
        <div>
          <h1 class="text-center font-bold">Welcome back bro!</h1>
          <div class="text-center">
            Hey {response.name} Ready to work like a dog?
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Home;
