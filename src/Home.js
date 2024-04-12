import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="container d-flex flex-column w-50"
      style={{ marginTop: "200px" }}
    >
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Quiz App</h1>
      <div className="mt-3 d-flex flex-column  align-items-center">
        <Link to={"/quiz/web"} className="btn btn-secondary mb-2 w-50">
          Web Development
        </Link>
        <Link to={"/quiz/networks"} className="btn btn-secondary mb-2 w-50">
          Computer Networks
        </Link>
        <Link to={"/quiz/database"} className="btn btn-secondary mb-2 w-50">
          Database Systems
        </Link>
        <Link to={"/quiz/python"} className="btn btn-secondary mb-2 w-50">
          Python programming
        </Link>
        <Link to={"/quiz/ml"} className="btn btn-secondary mb-2 w-50">
          Machine Learning
        </Link>
      </div>
    </div>
  );
}

export default Home;
