import styled from "styled-components";

export const ProjectContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.875rem;
`;

export const ProjectsIntro = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  line-height: 1.5rem;
`;

export const ProjectCategory = styled.div`
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const ProjectTitle = styled.div`
  font-weight: 800;
  margin-bottom: 0.25rem;
  // margin-left: 1.5rem;
`;

export const ProjectDesc = styled.div`
  color: ${({ theme }) => theme.colors?.text[200]};
  text-align: justify;
  line-height: 1.5rem;
  // margin-left: 1.5rem;
  max-width: 800px;
`;
