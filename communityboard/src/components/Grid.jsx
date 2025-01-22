import React from "react";
import ResourceCard from "./ResourceCard.jsx";
{/*
  Cannot use arrow notation without function expression but you can use function expression without arrow notation. 
*/}

const Grid = function() {
  return (
    <div className = "Grid">
      <ResourceCard card = "Fintech NeoBank" description = "A new way of banking... click to see more" thumbnail = "/neo-bank.jpeg"/>
      <ResourceCard card = "Innovation Hub" description = "Tech keys to the future... cick to see more"  thumbnail = "/innovation-hub.jpeg"/>
      <ResourceCard card = "Business/Cooperative Incubator" description = "Growth and development... click to see more" thumbnail = "/business-incubator.jpeg"/>
      <ResourceCard card = "Workforce Development" description = "A chicken in every pot; a car in every garage... click to see more" thumbnail = "/workforce-development.jpeg" />
      <ResourceCard card = "K-12 Education" description = "The future belongs to those that prepare today... click to see more" thumbnail = "/k-12.jpeg"/>
      <ResourceCard card = "Infrastructure" description = "Where the rubber meets the road... click to see more" thumbnail = "/infrastructure.jpeg"/>
      <ResourceCard card = "Housing and Community Development" description = "Home is where the heart is... click to see more" thumbnail = "/community-development.jpeg"/>
      <ResourceCard card = "Economic Development Headquarters" description = "The heart of it all... click to see more" thumbnail = "/economic-development.png"/>
      <ResourceCard card = "Safety and Community Policing" description = "A community is only as strong as it's weakest links... click to see more" thumbnail = "/community-policing.jpeg"/>
      <ResourceCard card = "Tourism/Hospitality" description = "If you want to get somewhere faster go it alone, if you want to go far go together" thumbnail = "/cultural-powerhouse.jpeg" />
    </div>
  );
};

export default Grid;
