import React from "react";


// function ncc() {
//   return (<Home name="Liza" city="New York" color="firebrick" />)
// }

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;
