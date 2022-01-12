import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Databricks Essentials for Spark Developers (Azure and AWS)",
    years: "2021 - 2022",
    content:
      "Estudios para desarrollar análisis de datos backend con spark en databricks.",
  },
  {
    id: 2,
    title: "Spark and Python for Big Data with PySpark",
    years: "2021 - 2022",
    content:
      "Estudios iniciales para desarrollar análisis de datos backend con spark en databricks.",
  },
  {
    id: 3,
    title: "Curso de Flutter",
    years: "2021 - Presente",
    content:
      "Estudios para desarrollar aplicaciones móviles utilizando el entorno de desarrollo de flutter esaborado por google.",
  },
  {
    id: 4,
    title: "Neural Networks for Performance",
    years: "2020 - Presente",
    content:
      "Estudios para desarrollar redes neuronales que sirvan para la mejora de procesos dentro de múltiples ámbitos, integrándolo dentro de aplicaciones web.      ",
  },
  {
    id: 5,
    title: "Platzi - Webpack / ReactJS / Redux",
    years: "2020 - Presente",
    content:
      "Estudios para el uso de Webpack en proyectos de React integrados con Redux para el manejo de datos.",
  },
  {
    id: 6,
    title: "Platzi - Inteligencia Artificial con Python utilizando PyTorch",
    years: "2020 - Presente",
    content:
      "Curso en el que se enseñan las bases para el desarrollo de inteligencia artificial usando pytorch como base para realizar los calculos de matrices en imágenes.",
  },
  {
    id: 7,
    title: "Platzi - Desarrollo Profesional en Javascript",
    years: "2020",
    content:
      "Estudios para lograr desarrollar aplicaciones completas en javascript utilizando buenas prácticas de desarrollo e integraciones con Apis web.      ",
  },
  {
    id: 8,
    title: "Platzi - Prácticas de Desarrollo & Ecmascript",
    years: "2020",
    content:
      "Curso en línea donde se presentan todas las implementaciones de ecmascript para mejorar la calidad del desarrollo de software.",
  },
  {
    id: 9,
    title: "Curso de Front-End Developer & User Experience UX",
    years: "2019",
    content:
      "Curso práctico para la mejora de la experiencia de usuario dentro del desarrollo de aplicaciones web utilizando CSS/SASS de manera óptima, haciendo diseños adaptivos.",
  },
  {
    id: 10,
    title: "Cannes Lions Edit",
    years: "2019",
    content:
      "Participación en Lions Edit, conferencia donde se explica, junto a grandes empresas como uber, los principios fundamentales para mejorar la experiencia del usuario.",
  },
  {
    id: 11,
    title: "Capacitación para el manejo de redes",
    years: "2019",
    content:
      "Taller donde se explicaron las múltiples formas de organizar los datos de una publicidad en redes para obtener información del posible consumidor y estudiar el mercado (Minería de datos).",
  },
  {
    id: 12,
    title: "Cursos Cisco CCNA",
    years: "2018",
    content:
      "Conceptos básicos de redes, tecnologías de conmutación y enrutamiento, IPv4 e IPv6.",
  },
  {
    id: 13,
    title: "Curso de Linux terminal y Comandos",
    years: "2018",
    content:
      "Curso práctico de la terminal de Linux junto con sus comandos y plugins para la intalacion de servidores o el movimiento dentro del sistema operativo.      ",
  },
  {
    id: 14,
    title: "Gigantes de alto impacto",
    years: "2018",
    content:
      "Una serie de eventos tanto teóricos como prácticos que permiten generar empatia y a su vez un mejor manejo de las emociones dentro de un ambiente laboral con un alto nivel de presión, contando con 50 horas en modalidad presencial.      ",
  },
  {
    id: 15,
    title: "Essentials in Programming C++ | Cisco",
    years: "2018",
    content:
      "Curso de programación orientada a objetos en C++ dado por la Cisco Network Academy con una duración de 70 Horas.",
  },
  {
    id: 16,
    title: "Programa de Formación digital y Emprendimiento",
    years: "2018",
    content:
      "Taller de 50 horas 30 presenciales y 20 con modalidad online con docentes españoles acerca de desarrollo movil.      ",
  },
  {
    id: 17,
    title: "Estudios de Ciencias de la Computación",
    years: "2017 - 2020",
    content:
      "Estudios de la carrera de ciencias de la computación dentro de la Universidad Espíritu Santo.",
  },
  {
    id: 18,
    title: "Cursos de programación front-end y Back-end",
    years: "2017 - Presente",
    content:
      "Estudios de manera independiente en múltiples cursos por medio de la web que explican diferentes tecnologías para la programación dentro del front y del back de una aplicación, generando proyectos funcionales al final de cada curso.",
  },
  {
    id: 19,
    title: "Curso de robótica básica",
    years: "2015",
    content: "Curso de programación de robots para múltiples propositos.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Nodel",
    years: "2021 - Presente",
    content: `Trabajo como desarrollador fullstack aportando soluciones a múltiples proyectos relacionados con el análisis de datos y generación de dashboards de resultados.`,
  },
  {
    id: 2,
    title: "HEIMDAL",
    years: "2021 - Presente",
    content: `Empresa propia encargada de desarrollar soluciones digitales para cualquier tipo de necesidad, generación de proyectos, marketing digital y diseño de líneas gráficas para startups o empresas.`,
  },
  {
    id: 3,
    title: "Cisneros Interactive - Dots",
    years: "2018 - 2020 - Presente",
    content: `Trabajo en conjunto con Cisneros interactive y Dots para UEES, agencias encargadas del manejo de Apis tanto de facebook como de otro tipo de redes sociales, 
    así como la revisión del correcto funcionamiento de las campañas publicitarias en las diferentes redes. Adicional a Ello, se trabaja con múltiples agentes externos que facilitan el manejo de los clientes potenciales, 
    como Wolkvox Colombia, Zappier y ActiveCampaign USA`,
  },
  {
    id: 4,
    title: "Grupo - REDEI",
    years: "2020 - Presente",
    content: `Trabajo con la red de colegios REDEI para la correcta administración de su información; 
    esto constituye la conexión con las diferentes apis en redes sociales para el manejo de sus leads.
    REDEI cuenta con una serie de colegios como son: Eomundo Matutino, Ecomundo Vespertino, Thomas More, Crear, Delfos, Ecomundo Babahoyo`,
  },
  {
    id: 5,
    title: "La costa Samborondón",
    years: "2020",
    content: `Trabajo con la urbanización La costa Samborondón en el desarrollo de su aplicación para el manejo de cotizaciónes.
    Se desarrollo un formato de impresión para cada una de las fachadas tomando en cuenta el valor de sus casas y sus diferentes variantes, 
    gracias a ello se puede calcular a exactitud el valor de una casa con o sin extras, terrenos, manzanas, y tipos de fachadas.`,
  },
  {
    id: 6,
    title: "Universidad Espíritu Santo",
    years: "2018 - Presente",
    content: `Trabajo de tiempo completo, realizando automatizaciónes para el control de 
      información utilizando un CRM y realizando análisis de los datos que proporciona 
      el mismo para formar estratégias que generen impacto.
      Tareas que se realizan: 
      Creación y administración de páginas web, 
      Creación de formularios para la captación de datos, 
      Conexiones de datos entre las redes sociales y la plataforma por medio de Peticiones asíncronas, 
      Analítica de datos, 
      Desarrollo de emails compatibles con cada uno de los navegadores, 
      Seguimiento de usuarios por medio de pixeles (Información para el área comercial), 
      Utilización de Scripts en Python para la generación de emails automáticos, 
      Administración de las múltiples APIS de redes sociales y dadas por Google para la inter-conexión de aplicaciones, 
      Manejo de equipos de trabajo para el cálculo de presupuestos, 
      Organización de reuniones constantes para ver el avance de los proyectos, `,
  },
  {
    id: 7,
    title: "Universidad Espíritu Santo",
    years: "2018 (Mitad de año)",
    content:
      "Prácticas Pre-Profesionales dentro del Área de Marketing desarrollando la página web de la universidad, agregando funcionalidades y modificando aspectos de importancia.",
  },
  {
    id: 8,
    title: "ATM - Analytics",
    years: "2018",
    content:
      "Manejo de una base de datos para un proyecto de estadística de la ATM en el cual por medio de herramientas de análisis de datos se buscaba obtener la medida promedio de personas, horas de transporte, y posibles causas del trafico en el transporte urbano, esto incluyendo Taxis, Buses y Automóviles propios.",
  },
  {
    id: 9,
    title: "Freelance",
    years: "2017 - Presente",
    content: `Trabajo como freelance haciendo proyectos independientes en el tiempo libre, esto incluyendo:

      , Páginas web, 
      Scripts en Python, 
      Conexiones de CRM para pequeñas empresas, 
      Asesorías para un buen manejo de difusión, 
      Sistemas contables para pequeñas tiendas o empresas usando tecnologías web, 
      Aplicaciónes para todo tipo de necesidad`,
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experiencia" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
