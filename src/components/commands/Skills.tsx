import {
    ProjectContainer,
    ProjectDesc,
    ProjectsIntro,
    ProjectTitle,
} from "../styles/Projects.styled";

const Skills: React.FC = () => {
    return (
        <div data-testid="projects">
            <ProjectsIntro>
                Here is an overview of my technical and interpersonal skills
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
        title: "🛠️ DevOps Tools",
        desc: "Kubernetes, Docker, Ansible, Terraform, Gitlab, Prometheus.",
    },
    {
        title: "💻 Programming Languages",
        desc: "Python, Javascript.",
    },
    {
        title: "📊 Data",
        desc: "SQL, Oracle, Pandas, Tensorflow, D3.js, Matplotlib, Talend DI, Hadoop.",
    },
    {
        title: "☁️ Cloud Providers:",
        desc: "AWS, GCP.",
    },
    {
        title: "🧠 Soft Skills",
        desc: "Problem-solving, Time Management, Teamwork, Public Speaking.",
    },
];

export default Skills;