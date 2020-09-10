import React, { Component } from "react";
import Logo from "./Logo";
import Title from "./Title";
import Description from "./Description";
import Links from "./Links";
import Subscribe from "./Subscribe";
import logo from "../images/CS_logo-type-positive-large.png";
import xmark from "../images/x-mark.svg";
import check from "../images/check-mark.svg";
import IconInsta from "../icons/instaSVG";
import "../styles/ComingSoon.css";
// import { text } from "express";

class ComingSoon extends Component {
  state = {

    logo: {
      alt: "Conscious Sweater",
      src: logo,

    },
    title: {
      text: "Worldwide map of sustainable fashion shops. Launch fall 2020. Be the first to know.",

    },
    description: {
      text:
        ""
    },
    subscribe: {
      placeholder: "Email",
      buttonText: "Send"
    },


    links: [

      {
        url: "https://www.instagram.com",
        logo: IconInsta,
        // text: "Follow"
      }

    ],
    notification: {
      src: "",
      alt: "",
      message: "",
      visible: false,
      level: ""
    }
  };

  configureNotification = obj => {
    const notification = { ...this.state.notification };
    notification.message = obj.body.msg;
    if (obj.status === 200) {
      notification.src = check
      notification.alt = "Check Mark"
      notification.level = "success"
    } else {
      notification.src = xmark
      notification.alt = "X Mark"
      notification.level = "error"
    }
    this.setState({ notification });
  };

  showNotification = () => {
    const notification = { ...this.state.notification };
    notification.visible = true;
    this.setState({ notification }, () => {
      setTimeout(() => {
        notification.visible = false;
        this.setState({ notification });
      }, 3000);
    });
  };


  render() {
    const {
      title,
      description,
      logo,
      subscribe,
      links,
      notification
    } = this.state;

    return (
      <div className="background">
        <Logo alt={logo.alt} src={logo.src} />
        <Title text={title.text}
          smalltext={title.smalltext}
          addtext={title.addtext} />
        <Description
          text={description.text}
          src={notification.src}
          alt={notification.alt}
          message={notification.message}
          visible={notification.visible}
          level={notification.level}
        />
        <Subscribe
          placeholder={subscribe.placeholder}
          buttonText={subscribe.buttonText}
          configureNotification={this.configureNotification}
          showNotification={this.showNotification}
        />
        <Links links={links} />
      </div>
    );
  }
}

export default ComingSoon;
