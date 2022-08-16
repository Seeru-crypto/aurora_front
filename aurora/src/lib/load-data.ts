// import fsPromises from "fs/promises";
import path from "path";

export interface ProjectJsonInterface {
  repo_name: string;
  project_name: string;
  picture_url: string;
  project_type: ProjectTypes;
  showcase: boolean;
}

export type ProjectTypes = ["personal", "freelance", "main"];

export interface ProjectInterface extends ProjectJsonInterface {
  description?: string;
  created_at?: EpochTimeStamp;
  updated_at?: EpochTimeStamp;
  homepage?: string;
  topics?: string[];
}

export interface ProjectGitRepoInterface {
  description: string;
  created_at: EpochTimeStamp;
  updated_at: EpochTimeStamp;
  homepage: string;
  topics: string[];
}

export async function loadLocalData() {
  // TODO: Fix 'fs' error
  const filePath = path.join(process.cwd(), "./data.json");
  let jsonData = {};

  try {
    // jsonData = await fsPromises.readFile(filePath);
  } catch (error) {
    console.error("Could not load local file:\n", error);
  }

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
      console.log(`request error: ${error}`);
    });

  return response;
}
