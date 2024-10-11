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
            {projects.map(({ title, desc }) => (
                <ProjectContainer key={title}>
                    <ProjectTitle>{`${title}`}</ProjectTitle>
                    <ProjectDesc>{desc}</ProjectDesc>
                </ProjectContainer>
            ))}
        </div>
    );
};



const projects = [
    {
        title: "🖥️ Oct 2023 – June 2024: Software Engineer, ICTFICIAL Oy, Finland (Remote Position)",
        desc: "In this project, we defined and implemented custom resource definitions to allow a single application to be distributed across multiple Kubernetes clusters."
    },
    {
        title: "🖥️ Oct 2023 – June 2024: Software Engineer, ICTFICIAL Oy, Finland (Remote Position)",
        desc: "In this project, we defined and implemented custom resource definitions to allow a single application to be distributed across multiple Kubernetes clusters."
    },
    {
        title: "🖥️ Oct 2023 – June 2024: Software Engineer, ICTFICIAL Oy, Finland (Remote Position)",
        desc: "In this project, we defined and implemented custom resource definitions to allow a single application to be distributed across multiple Kubernetes clusters."
    }
];

export default Experience;