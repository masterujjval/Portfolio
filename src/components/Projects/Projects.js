import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import postgres from "../../Assets/Projects/postgres.png";
import postfix from "../../Assets/Projects/postfix.png";
import teleBot from "../../Assets/Projects/tele.png";
import imgEncryption from "../../Assets/Projects/image-encrypt.png";
import notion from "../../Assets/Projects/notion.png";
import hangman from "../../Assets/Projects/hangman.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgEncryption}
              isBlog={false}
              title="Project Stegano"
              description="This tool is built with Python that allows peers to hide secret texts within the image and also with the unique private key, without the key the text cannot be decrypted. The project demonstrates how steganography works and how crucial it is in today's world."
              ghLink="https://github.com/masterujjval/Project-Stegano?tab=readme-ov-file"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={postgres}
              isBlog={false}
              title="Authorization Page"
              description="This Authorization is created using PostgreSQL, NodeJS, ExpressJS. The project implements real-life authorization, updation, and new peer signup. In this, the information is stored in the local PostgreSQL database."
              ghLink="https://github.com/masterujjval/Postgres_Authentication?tab=readme-ov-file"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={postfix}
              isBlog={false}
              title="Postfix Conversion Tool"
              description="The conversion tool is the most useful for converting infix expression to postfix expression which is used in computers and ARM devices. The tool helps a peer to understand the logic behind the postfix expression."
              ghLink="https://github.com/masterujjval/Infix-Postfix-Web?tab=readme-ov-file"
              demoLink="https://masterujjval.github.io/Infix-Postfix-Web/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teleBot}
              isBlog={false}
              title="Notes Taking Bot"
              description="The telegram bot is built using Python programming language. The telegram bot helps a college student to download notes of their respective subjects."
              ghLink="https://github.com/masterujjval/Tele-Notes-Bot"
              demoLink="https://t.me/notesrgpv_bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hangman}
              isBlog={false}
              title="Hangman Game"
              description="The game is created using Python's Pygame library. The game allows one to guess the correct word to prevent a man from being hanged. A small interactive and enjoyable game to save an innocent NPC life."
              ghLink="https://github.com/masterujjval/Hangman-game?tab=readme-ov-file"
                          />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notion}
              isBlog={false}
              title="Notion On Command Line"
              description="The tool is created using Bash language, which allows an individual to take notes, delete notes, and edit notes without any application interface thus reducing RAM consumption and hardware usage while on the other hand increasing productivity."
              ghLink="https://github.com/masterujjval/Notion_but_CLI"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
