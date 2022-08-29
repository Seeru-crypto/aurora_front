import fsPromises from "fs/promises";
import path from "path";
import config from "../config.json";

export interface ProjectJsonInterface {
  repo_name: string;
  project_name: string;
  picture_url: string;
  project_type: ProjectTypes;
  showcase: boolean;
  topics?: string[];
  description?: string;
}

export interface WorkProps {
  projects: ProjectInterface[];
  techTypes: TechTypes;
}

export type TechTypes = Map<string, string>;

export type ProjectTypes = ["personal", "freelance", "main"];

export interface ProjectInterface extends ProjectJsonInterface {
  description?: string;
  created_at?: string;
  updated_at?: string;
  homepage?: string;
  topics?: string[];
}

export interface ProjectGitRepoInterface {
  description: string;
  created_at: string;
  updated_at: string;
  homepage: string;
  topics: string[];
}

// TODO: Check, if MacOS is different from Windows here with process.cwd()
export async function loadLocalData() {
  const filePath = path.join(process.cwd(), "src/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  return JSON.parse(jsonData.toString());
}

export async function getThirdPartyData(
  url: string,
  token?: string
): Promise<any> {
  let response;
  await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((requestPromise) => {
      if (!requestPromise.ok)
        throw new Error(`HTTP Error: ${requestPromise.status}`);
      return requestPromise.json();
    })
    .then((data) => {
      response = data;
    })
    .catch((error) => {
      console.error(`${error}, for ${url}`)
    });
  return response;

}

export async function mergeGitProjectData(
  projects: ProjectJsonInterface[],
  token: string | undefined
): Promise<ProjectInterface[]> {
  return Promise.all(
    projects.map(async (project) => {
      if (project.repo_name === "") return { ...project };

      const gitData: ProjectGitRepoInterface = await getThirdPartyData(
        config.GIT_REPO_DATA_URL + project.repo_name,
        token
      )
      if (!gitData) return { ...project };

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
