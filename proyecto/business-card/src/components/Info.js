import React from "react";
import foto from "../profile-pick.jpg";
import {MdEmail} from "react-icons/md"
import {BsLinkedin} from "react-icons/bs"

const fontStyles = {marginRight: '5px'}

export default function Info() {
  return (
    <div className="info-container">
      <img src={foto} alt="profile-pic" className="info-img" />
      <h2>Ignacio Oteiza</h2>
      <h3>Frontend Developer</h3>
      <h4>oteizanacho.website</h4>
      <section>
        <button className="email-button"><MdEmail style={fontStyles}/>Email</button>
        <button className="linkedin-button"><BsLinkedin style={fontStyles}/>LinkedIn</button>
      </section>
    </div>
  );
}
