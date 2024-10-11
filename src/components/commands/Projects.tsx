import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";
import InvalidArg from "../InvalidArg";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        if (url) {
          id === parseInt(arg[1]) && window.open(url, "_blank");
        }
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5", "6", "7", "8", "9"]) ? (
      <InvalidArg max_valid_arg={9} />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};



const projects = [
  {
    id: 1,
    title: "Multi-Cluster Application Distribution with Custom Resource Definitions",
    desc: "In this project, we defined and implemented custom resource definitions to allow a single application to be distributed across multiple Kubernetes clusters.",
    url: "https://github.com/skandarchahbouni/miro_llo_kinD",
  },
  {
    id: 2,
    title: "Kubernetes Proactive autoscaling POC",
    desc: "The goal of this project is to simulate an autoscaler that scales a Kubernetes deployment based on predicted resource demand, rather than relying on historical metrics.",
    url: "https://github.com/skandarchahbouni/k8s_proactive_autoscaling_poc",
  },
  {
    id: 3,
    title: "ETL Pipeline for Network Device Configuration Data: From Data Centers to NetBox",
    desc: "This project involved developing an ETL process that extracts configuration data from networking devices available in all the data centers, performs some transformations, and then loads the data into NetBox, which serves as a single source of truth for networking configurations and enables networking automation using Ansible. ⚠️ This is not an open source project.",
    url: "",
  },
  {
    id: 4,
    title: "Vehicle Tracking Application",
    desc: "This mobile application, developed using Flutter and Firebase, enables real-time tracking of vehicles or obtaining their position via SMS when no internet connection is available. The app operates in two modes: User Mode and Vehicle Mode. In Vehicle Mode, the app can be placed in the vehicle to be tracked, continuously sending its location to the user upon request, functioning as an IoT device that transmits GPS data to the Firebase server.",
    url: "https://github.com/skandarchahbouni/vehicle_anti_theft_mobile_app_flutter_firebase",
  },
  {
    id: 5,
    title: "Grocery Shop Application",
    desc: "A comprehensive backend service for a grocery shop application, built using express js and mysql. Implemented features such as JWT authentication, SEO-friendly structure, filtering, pagination, and a cart and wishlist functionality, liking a product, making an order...",
    url: "https://github.com/skandarchahbouni/vehicle_anti_theft_mobile_app_flutter_firebase",
  },
  {
    id: 6,
    title: "Ansible Nginx Role Executor",
    desc: "This project provides a simple script for generating an Ansible inventory file and running an Ansible nginix role. It uses the ansible_runner library to automate the deployment process on specified hosts.",
    url: "https://github.com/skandarchahbouni/ansible_runner",
  },
  {
    id: 7,
    title: "Stock Prices Visualization Using D3.js",
    desc: "This project utilizes D3.js to visualize average stock prices from the GAAN dataset.",
    url: "https://github.com/skandarchahbouni/line_graph_data_visualisation_using_D3.js",
  },
  {
    id: 8,
    title: "Llama 2 Simple Question Answering System",
    desc: "This project implements a simple question-answering system using the Llama 2 model, allowing users to query information from PDF documents. The system leverages natural language processing to provide answers based on the content of the uploaded PDFs.",
    url: "https://github.com/skandarchahbouni/llama_2_simple_question_answering_system",
  },
  {
    id: 9,
    title: "Face Mask Detection Application",
    desc: "This repository contains a face mask detection application built with PyQt5 and OpenCV. The application captures live video from a webcam, detects faces, and indicates whether each person is wearing a mask.",
    url: "https://github.com/skandarchahbouni/mask_detection_python_desktop_app",
  }
];

export default Projects;
