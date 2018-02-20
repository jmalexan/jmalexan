import { Injectable } from '@angular/core';

@Injectable()
export class TermService {
  displayText: string[] = [];

  constructor() {
    this.displayText.push("Welcome!");
    this.displayText.push("");
    this.displayText.push("This website is navigated by commands, type one in to get the info!")
    this.displayText.push("");
    this.displayText.push("For links to my resume and LinkedIn, as well as a quick bio, run 'about'!")
    this.displayText.push("For info about my personal projects, run 'projects'!");
    this.displayText.push("");
    this.displayText.push("jonathan");
    this.displayText.push("");
    this.displayText.push("");
  }

  execute(cmd: string) {
    if (cmd.toUpperCase() == "HOME") {
      this.displayText.push("Welcome!");
      this.displayText.push("");
      this.displayText.push("This website is navigated by commands, type one in to get the info!")
      this.displayText.push("");
      this.displayText.push("For links to my resume and LinkedIn, as well as a quick bio, run 'about'!")
      this.displayText.push("For info about my personal projects, run 'projects'!");
      this.displayText.push("");
      this.displayText.push("jonathan");
    } else if (cmd.toUpperCase() == "PROJECTS") {
      this.displayText.push("Personal Projects");
      this.displayText.push("");
      this.displayText.push("Junction Manager (https://github.com/notdisliked/JunctionManager) is an application I created to solve a problem I had with managing what content was on what drive of my multiple drive PC. It lets you move folders back and forth between the drives with ease using Windows' Junctions, as well as helping you keep track and manage all the junctions created using the app.")
      this.displayText.push("");
      this.displayText.push("Hobby Games");
      this.displayText.push("");
      this.displayText.push("Contrast is a game created during the 2015-2016 session of the Oregon Game Project Challenge. Made using Unity and C#, it revolves around creating portals which alter objects' collision box to avoid obstacles and solve puzzles.");
      this.displayText.push("Vision was created during the 2016-2017 session of the Oregon Game Project Challenge. It is a game developed specifically for the HTC Vive, and utilizes the Vive's headtracking to use what the player can or cannot see to solve puzzles");
      this.displayText.push("");
      this.displayText.push("I also made this cool logo animation for a name I plan on using at some point in the future.");
    } else if (cmd.toUpperCase() == "ABOUT") {
      this.displayText.push("Hey there!");
      this.displayText.push("My name's Jonathan, I'm currently attending Oregon State University for a degree in Computer Science. My passion is programming, it's what I want to go into and what I do as a hobby. My interests within programming pertain to interface design and front end programming, but I don't restrict myself to that, I explore as much as I can! I can't put my name on anything big yet, but I have my own personal or collaborative projects which you can see on my Projects page. I've had a few internships and jobs here or there, I'll list all those below. Thanks for reading!")
      this.displayText.push("");
      this.displayText.push("Important Links");
      this.displayText.push("Resume (https://drive.google.com/file/d/0B6sJJGWL3mJ2UHlPVUJoQWZNVUU/view?usp=sharing)");
      this.displayText.push("LinkedIn (https://www.linkedin.com/in/jonathan-a-62b610a1)");
      this.displayText.push("");
      this.displayText.push("Employment");
      this.displayText.push("2017: Enli - Summer Intern");
      this.displayText.push("2014-2017: Saturday Academy - Computer Science");
      this.displayText.push("2016: Saturday Academy - Summer IT Intern");
      this.displayText.push("2015: Enli - Summer Intern");
    }
    this.displayText.push("");
    this.displayText.push("");
  }

}
