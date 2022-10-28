import React from "react";
import { MdLocationPin } from "react-icons/md";

export default function Card(props) {
  console.log(props);

  return (
    <section className="card">
      <img
        src={`/images/${props.img}`}
        alt="landscape-image"
        className="card--image"
      />
      <div className="info--wrapper">
        <div className="info--top">
          <p>
            <MdLocationPin color="red"/>
            {props.location}
          </p>
          <p className="gray">{props.link}</p>
        </div>
        <h1 className="card--title">{props.title}</h1>
        <span className="bold">{props.startDate} - </span>
        <span className="bold">{props.endDate}</span>
        <p className="card--desc">{props.description}</p>
      </div>
    </section>
  );
}
