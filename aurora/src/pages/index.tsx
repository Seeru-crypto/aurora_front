import Head from "next/head";
import { GlobalStyle } from "../components/GlobalStyle";
import {
  About,
  Contact,
  Experience,
  LandingPage,
  Work,
} from "../components/index";
import config from "../config.json";
import {
  getThirdPartyData,
  ProjectGitRepoInterface,
  ProjectInterface,
  ProjectJsonInterface,
} from "../lib/load-data";
import styles from "../styles/Home.module.css";

export default function Home({ projects }: { projects: ProjectInterface[] }) {
  return (
    <>
      <GlobalStyle />
      <div className={styles.container}>
        <Head>
          <title>Aurora</title>
          <meta
            name="description"
            content="Generated by create next app, made by FO"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <LandingPage />
          <About />
          <Experience />
          <Work projects={projects} />
          <Contact />
        </main>
      </div>
    </>
  );
}

async function mergeGitData(
  projects: ProjectJsonInterface[],
  token: string | undefined
): Promise<ProjectInterface[]> {
  return Promise.all(
    projects.map(async (project) => {
      if (project.repo_name === "") return { ...project };

      const gitData: ProjectGitRepoInterface = await getThirdPartyData(
        config.GIT_REPO_DATA_URL + project.repo_name,
        token
      );

      return {
        ...project,
        description: gitData.description,
        created_at: gitData.created_at,
        updated_at: gitData.updated_at,
        homepage: gitData.homepage,
        topics: gitData.topics,
      };
    })
  );
}

// TODO: Fix async queries
export async function getStaticProps() {
  // const jsonProjects: { projects: ProjectJsonInterface[] } = await loadLocalData();
  //   const req = await fetch(
  //     `https://e469abe1-ffd5-4df1-89d9-d80090a1779b.mock.pstmn.io/projects`
  //   );
  //   const data = await req.json();

  const data: {
    projects: ProjectJsonInterface[];
  } = require("../data.json");
  console.log(data.projects);

  return {
    props: { projects: data.projects },
    revalidate: process.env.REVALIDATE_VALUE,
  };
}
