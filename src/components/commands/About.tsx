import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        I am <HighlightSpan>Skandar</HighlightSpan>, a recent graduate computer science engineer from the Higher School of Computer Science in Algeria (ESI), and I am currently a second-year master's student in Data Engineering at Paris Saclay University (UVSQ).
      </p>

      <p>
        While still a student, I gained invaluable industry experience as a <HighlightAlt>software engineer at ICTficial Oy</HighlightAlt>, a Finnish company, in a full-time remote position. I worked on a project involving the development  of a multi-Kubernetes orchestration system, which also served as my final year graduation project at ESI.
      </p>

      <p>
        After completing <HighlightSpan>8 months</HighlightSpan> with this company, which provided me with a solid foundation in Kubernetes, I decided to join <HighlightAlt>InfraXcode as a Junior Infrastructure Automation Engineer</HighlightAlt>. Unfortunately, I left this position after only <HighlightSpan>2 months</HighlightSpan> to pursue a master's degree in Data Engineering at Paris Saclay University.  Despite my short period at <HighlightSpan> InfraXcode</HighlightSpan>, I was involved in several interesting tasks that provided me with invaluable hands-on experience with various tools, particularly Ansible and AWS.
      </p>
    </AboutWrapper>
  );
};

export default About;
