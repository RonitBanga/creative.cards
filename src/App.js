import React from "react";
import Card from "./components/card";
import data from "./data";

function app() {
  const card = data.map((item) => {
    return <Card image={item.img} name={item.name} des={item.des} />;
  });
  return (
    <>
        <h1 className="heading">Web Development</h1>
        <div className="header_underline"></div>
      <div className="wrapper">{card}</div>
    </>
  );
}

export default app;
