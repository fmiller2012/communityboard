import React from "react";
import ResourceCard from "./ResourceCard.jsx";
import "./Grid.css";
{/*
  Cannot use arrow notation without function expression but you can use function expression without arrow notation. 
*/}

const Grid = function() {
  return (
    <div className = "Grid">
      <div className = "container">
        <ResourceCard card = "Fintech NeoBank" description = "A new way of banking... click to see more" thumbnail = {`${import.meta.env.BASE_URL}neo-bank.jpeg`} link = "https://neo-bank.com"/>
        <ResourceCard card = "Innovation Hub" description = "Tech keys to the future... cick to see more"  thumbnail = {`${import.meta.env.BASE_URL}innovation-hub.jpeg`} link = "https://www.thehubmia.com"/>
        <ResourceCard card = "Business/Cooperative Incubator" description = "Growth and development... click to see more" thumbnail = {`${import.meta.env.BASE_URL}business-incubator.jpeg`} link = "https://startup.fiu.edu"/>
        <ResourceCard card = "Workforce Development" description = "A chicken in every pot; a car in every garage... click to see more" thumbnail = {`${import.meta.env.BASE_URL}workforce-development.jpeg`} link = "https://www.miamidade.gov/global/service.page?Mduid_service=ser1556639906576885"/>
      </div>
      <div className = "container">
        <ResourceCard card = "K-12 Education" description = "The future belongs to those that prepare today... click to see more" thumbnail = {`${import.meta.env.BASE_URL}k-12.jpeg`} link = "https://nmshpioneers.org"/>
        <ResourceCard card = "Infrastructure" description = "Where the rubber meets the road... click to see more" thumbnail = {`${import.meta.env.BASE_URL}infrastructure.jpeg`} link = "https://www.nadaaa.com/portfolio/miami-public-infrastructure/"/>
        <ResourceCard card = "Housing and Community Development" description = "Home is where the heart is... click to see more" thumbnail = {`${import.meta.env.BASE_URL}community-development.jpeg`} link = "https://www.p-scdg.org"/>
        <ResourceCard card = "Economic Development Headquarters" description = "The heart of it all... click to see more" thumbnail = {`${import.meta.env.BASE_URL}economic-development.png`} link = "https://www.eda.gov"/>
      </div>
      <div className = "container">
        <ResourceCard card = "Safety and Community Policing" description = "A community is only as strong as it's weakest links... click to see more" thumbnail = {`${import.meta.env.BASE_URL}community-policing.jpeg`} link = "https://www.northmiamifl.gov/453/Community-Policing-Section-COPS#:~:text=The%20Community%20Policing%20Section%20(COPS,building%20partnerships%20and%20solving%20problems."/>
        <ResourceCard card = "Tourism/Hospitality" description = "If you want to get somewhere faster go it alone, if you want to go far go together... click to see more" thumbnail = {`${import.meta.env.BASE_URL}cultural-powerhouse.jpeg`} link = "https://www.royalcaribbean.com/?ecid=ps_mdt_lfbrnd_goo_12397&gclsrc=aw.ds&gad_source=1&gbraid=0AAAAADhYZLQ1DJpaIdxkq1IBfS2ni-Zs8&gclid=Cj0KCQiAy8K8BhCZARIsAKJ8sfROb3L0VU8R4xXyCSxPQhO0mn8xprkib4BDOmIj-SX9lPfQUBylGAUaAkZREALw_wcB" />
      </div>
    </div>
  );
};

export default Grid;
