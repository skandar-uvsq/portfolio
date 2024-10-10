import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkRedirect,
  generateTabs,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Socials: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "links")) {
      links.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="links" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>Here are some useful links</ProjectsIntro>
      {links.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="links" marginY />
    </HelpWrapper>
  );
};

const links = [
  {
    id: 1,
    title: "gitHub",
    url: "https://github.com/skandarchahbouni",
    tab: 10,
  },
  {
    id: 2,
    title: "linkedin",
    url: "https://www.linkedin.com/in/skandar-ramzi-chahbouni-0a4b5222b/",
    tab: 8,
  },
  {
    id: 3,
    title: "leetcode",
    url: "https://leetcode.com/u/skandarchahbouni/",
    tab: 8,
  },
  {
    id: 4,
    title: "cloudskillsboost",
    url: "https://www.cloudskillsboost.google/public_profiles/f6b52e17-c9e2-4fcb-bdc7-3329e8aeeb4f",
    tab: 0,
  },
];

export default Socials;
