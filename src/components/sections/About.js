import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

//Constante para la informacción inicial
const aboutContent = {
  name: "Anthony Villegas",
  avatarImage: "/profile.jpg",
  content: `Soy un Profesional en Ingeniería en Software, con amplias habilidades matemáticas, diseño de interfases basadas en la experiencia del usuario, 
  redes y conocimientos en el área de programación web como: Entorno Javascript (JQuery, Frameworks como Next.JS basado en React, Node.js, Firebase, Apis), 
  CSS (Bootstrap), Java, PHP, flutter y Python (Incluyendo inteligencia artificial); Además de tener un conocimiento adicional que complementa la gestión de 
  cargos específicos (CRM, Facebook Ads Manager y su api para el control de leads, 
    Email marketing HTML & Pixeles, flujo de ventas, análisis de datos, control de equipos 
    de trabajo y tareas predefinidas para el equipo comerial).`,
};

//Constante para las barras de progreso
const progressData = [
  {
    id: 1,
    title: "Trabajo en equipo",
    percantage: 95,
    progressColor: "#e56c78",
  },
  {
    id: 2,
    title: "Desarrollo de interfases UX/UI",
    percantage: 95,
    progressColor: "#F40543",
  },
  {
    id: 3,
    title: "Javascript & Node.JS",
    percantage: 95,
    progressColor: "#e5b96c",
  },
  {
    id: 4,
    title: "Web marketing tools",
    percantage: 85,
    progressColor: "#6cd3e5",
  },
  {
    id: 5,
    title: "Desarrollo Back-end",
    percantage: 70,
    progressColor: "#6ce5b7",
  },
  {
    id: 6,
    title: "Fotografía y Programas de edición",
    percantage: 88,
    progressColor: "#986ce5",
  },
  {
    id: 7,
    title: "Flutter para apps moviles",
    percantage: 50,
    progressColor: "#e5866c",
  },
];

//Constante para el contador
const counterData = [
  {
    id: 1,
    title: "Proyectos Completados",
    count: 30,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Tazas de Cafe",
    count: 4130,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Clientes Satisfechos",
    count: 200,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Participación en Hackatones",
    count: 4,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="Acerca de mi" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img
                src={aboutContent.avatarImage}
                alt={aboutContent.name}
                style={{ borderRadius: "30px" }}
              />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p style={{ textAlign: "justify" }}>{aboutContent.content}</p>
                  <div className="mt-4">
                    <a
                      href="https://drive.google.com/file/d/1DMNYOoTdqPC2WbPLLn_ys8zMZOz4Fg6R/view?usp=sharing"
                      className="btn btn-default"
                    >
                      Descargar CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
