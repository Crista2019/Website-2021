import React, { Component } from "react";
import "../../App.css";
import "./Projects.css";
import IndProject from "../modules/IndProject.js";

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const projects = [
      {
        id: 7,
        title: "Intervals",
        date: "1/31/2021",
        image: "",
        description: "Intervals was my final submission project for Web.Lab 2021, a web-design course and competion held over MIT's month-long Independent Activities Period. Intervals is a web-app designed to make microscheduling your life's routines simple and repeatable to keep you on track, whether you're working out, practicing piano, or studying for a test. Created using ReactTS, Node, Electron, and MongoDB.",
        link: "https://createintervals.herokuapp.com/",
      },
      {
        id: 6,
        title: "Electronic Music",
        date: "Fall 2020",
        image: "",
        description: "A series of electronic music compositions and sound experiments created using the Reaper DAW, Max, and various other sound technology software.",
        link: "https://drive.google.com/drive/folders/1BrYTP0Pfkmv7H_MAbEyRHcHzOJqNY4vj?usp=sharing",
      },
      {
        id: 5,
        title: "Four Part Harmony and Counterpoint",
        date: "May 2020",
        image: "",
        description: "A four-part string ensemble piece I composed, inspired by the bittersweet feelings of returning home but feeling homesick for somewhere else.",
        link: "https://drive.google.com/drive/folders/1rIaSRAJEFVDwV7UQENDBGiREtvkYaL8R?usp=sharingf",
      },
      {
        id: 4,
        title: "Digital Humanities Lab",
        date: "Fall 2019",
        image: "https://assets-global.website-files.com/5a690960b80baa0001e05b0f/5ca4b074e9c52631fc36f901_Schedule-Time.png",
        description: "'Tobacco Analytics' used D3, React, and Django to visualize malicious communication networks among major players in the Big Tobacco (lawyers, researchers, company representatives) to expose the industry's long history biased studies and dubious advertising.",
        link: "https://tobacconetworks.dhmit.xyz/",
      },
      {
        id: 3,
        title: "Digital Humanities Lab",
        date: "Fall 2019",
        image: "",
        description: "'Reading Redux' was a study which emerged from round-table conversations, group readings, and data collected from student volunteers to explore what insights we glean from rereading texts. Specifically we used React and Django to implement a platform which tracks how a user’s perception of the main protagonists' races shifts throughout one's reading of the Toni Morrison experiment 'Recitatif.'",
        link: "https://rereading.dhmit.xyz/",
      },
      {
        id: 2,
        title: "Protein Synthesis Simulator",
        date: "9/3/2019",
        image: "",
        description: "Simulating the stages of protein synthesis (top down overview of the stages of mRNA transcription and DNA translation) to map out the central dogma of biology.",
        link: "https://github.com/Crista2019/ProteinSynthesisSimulator",
      },
      {
        id: 2,
        title: "StickyNotes",
        date: "8/13/2018",
        image: "",
        description: "A concise Python application in the vein of Notepad for writing and saving text notes to your Desktop.",
        link: "https://github.com/Crista2019/StickyNotes",
      },
      {
        id: 0,
        title: "Gibberish Encryptor",
        date: "5/23/2018",
        image: "",
        description: "A short project for my CS principles class which translates a message into different 'gibberish' languages using Tkinter (the Python binding to the Tk GUI toolkit).",
        link: "https://github.com/Crista2019/GibberishEncryptor",
      },
    ];

    return (
      <>
        <IndProject projects={projects}></IndProject>
      </>
    );
  }
}

export default Projects;
