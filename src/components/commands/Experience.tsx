import {
    ProjectContainer,
    ProjectDesc,
    ProjectsIntro,
    ProjectTitle,
} from "../styles/Projects.styled";

const Experience: React.FC = () => {
    return (
        <div data-testid="projects">
            <ProjectsIntro>
                Here is the experience I’ve acquired so far.
            </ProjectsIntro>
            {projects.map(({ title, desc, skills }) => (
                <ProjectContainer key={title}>
                    <ProjectTitle>{`${title}`}</ProjectTitle>
                    <ProjectDesc>{desc}<br /> {skills}</ProjectDesc>

                </ProjectContainer>
            ))}
        </div>
    );
};



const projects = [
    {
        title: "🖥️ Jul 2024 – Aug 2024: Infrastructure Automation Engineer, InfraXcode, French (Remote Position)",
        desc: "Engaged in various tasks, including developing an ETL pipeline to centralize network configuration devices in NetBox. Additionally, installed and configured AWX in a Kubernetes cluster and resolved issues within various AWX workflows.",
        skills: "🚀 ansible, awx, kubernetes, netbox, aws, etl pipeline with python."
    },
    {
        title: "🖥️ Oct 2023 – May 2024: Software Engineer, ICTFICIAL Oy, Finland (Remote Position)",
        desc: "Contributed to the 'Multi-Domain Intelligent Resource Orchestration' project. This project also served as the final-year graduation project for my engineering degree at ESI.",
        skills: "🚀 kubernetes, docker, python, gitlab, prometheus, grafana."
    },
    {
        title: "🖥️ Aug 2022 – Sep 2022: Intern, CERIST, Algeria (Hybrid Position)",
        desc: "Worked as an intern to develop a real-time mask detection desktop application.",
        skills: "🚀 python, numpy, pandas, computer vision."
    },
    {
        title: "🖥️ Oct 2021: Freelancer, Mbsoft, Algeria (Remote Position)",
        desc: "Worked as a freelancer at Mbsoft, where I was responsible for designing their static website.",
        skills: "🚀 html, css, javascript."
    },
];

export default Experience;