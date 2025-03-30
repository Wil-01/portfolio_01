import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Python Developer",
    companyName: "Helice",
    icon: "", 
    iconBg: "#333333",
    date: "Aout 2023 – Janvier 2025",
    points: [
      "Développement d'applications web, logiciels, et backend avec Python,Django et PostgreSQL",
      "Automatisation de tâches de scraping de données via BeautifulSoup et Scrapy pour l’analyse de marché",
      "Implémentation de pipelines CI/CD avec Docker et GitLab pour une intégration continue",
      "Surveillance de la sécurité et optimisation des performances des applications déployées"
    ]
  },
  {
    title: "Python Developer",
    companyName: "CED Consult",
    icon: "", 
    iconBg: "#333333",
    date: "Avril 2024 – Sep 2024",
    points: [
      "Automatisation de processus internes via des scripts Python utilisant Pandas et NumPy",
      "Optimisation du code existant pour réduire les temps d’exécution de 30%",
      "Documentation technique détaillée sur Notion pour assurer la pérennité des projets",
      "Résolution de bugs techniques avec PyCharm et Git en support aux équipes clients"
    ]
  },
  {
    title: "Full Stack Developer",
    companyName: "English for busy people (EBP)",
    icon: "", 
    iconBg: "#e68a00",
    date: "Mai 2023 – Aout 2023",
    points: [
      "Développement front-end en JavaScript et back-end en Django pour le site web",
      "Optimisation des performances du site et réduction des temps de chargement pour une meilleure UX",
      "Implémentation de pipelines CI/CD avec Docker et GitLab pour une intégration continue",
    ]
  },
];

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex h-full w-full items-center justify-center">
        {experience.icon && (
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        )}
      </div>
    }
  >
    <div>
      <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
      <p className="text-[16px] font-semibold text-[#aaa]" style={{ margin: 0 }}>
        {experience.companyName}
      </p>
    </div>
    <ul className="ml-5 mt-5 list-disc space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 pl-1 text-[14px] tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="max-w-7xl mx-auto relative z-0 px-6 py-16"
    >
      <h2 className="text-[40px] font-black text-white mb-16 text-center">
        Mon <span className="text-[#915eff]">Expérience</span>
      </h2>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
};

export default Experience;