import React from "react";
import ResourceCard from "./ResourceCard.jsx";
{/*
  Cannot use arrow notation without function expression but you can use function expression without arrow notation. 
*/}

const Grid = function() {
  return (
    <div className = "Grid">
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
    </div>
  );
};

export default Grid;
