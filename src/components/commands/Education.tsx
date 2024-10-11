import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Master 2 student, option: Data Management in Large-Scale Distributed Systems.",
    desc: "Paris-Saclay University (UVSQ) | 2024 ~ Present",
  },
  {
    title: "Engineering degree in Computer Science, option: Intelligent Systems and Data.",
    desc: "Higher School of Computer Science in Algeria (ESI) | 2019 ~ 2024",
  }
];

export default Education;
