import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        I am <HighlightSpan>Skandar</HighlightSpan>, a recent graduate engineer from the Higher School of Computer Science in Algeria (ESI),<br /> and I am currently a second-year master's student in Data Engineering at Paris Saclay University (UVSQ).
      </p>
      <br />
      <p>
        While still a student, I gained invaluable industry experience as a <HighlightAlt>software engineer at ICTficial Oy</HighlightAlt>,<br /> a Finnish company, in a full-time remote position. I worked on a project involving the development <br /> of a multi-Kubernetes orchestration system, which also served as my final year graduation project at ESI.
      </p>
      <br />
      <p>
        After completing <HighlightSpan>8 months</HighlightSpan> with this company, which provided me with a solid foundation in Kubernetes,<br /> I decided to join <HighlightAlt>InfraXcode as a Junior Infrastructure Automation Engineer</HighlightAlt>. Unfortunately, I left<br /> this position after only <HighlightSpan>2 months</HighlightSpan> to pursue a master's degree in Data Engineering at Paris Saclay University. <br /> Despite my short period at <HighlightSpan> InfraXcode</HighlightSpan>, I was involved in several interesting tasks that provided me with<br /> invaluable hands-on experience with various tools, particularly Ansible and AWS.
      </p>
      <br />
      <p>
        I am actively seeking an <HighlightAlt>internship in Data Engineering</HighlightAlt> or any field that allows me to leverage<br /> my skills in <HighlightAlt>automation, engineering, critical thinking, and problem-solving.</HighlightAlt>
      </p>
    </AboutWrapper>
  );
};

export default About;
