import fsPromises from 'fs/promises';
import path from 'path';
import { ProjectTypes } from '../components/work/Work';

interface JsonProject {
    repo_name: string;
    project_name: string;
    picture_url: string;
    project_type: ProjectTypes;
    showcase: boolean;
}

interface ProjectReturn {
    projects: JsonProject[];
}

export async function loadProjects(): Promise<ProjectReturn> {
    const filePath = path.join(process.cwd(), 'data.json');
    const jsonData = await fsPromises.readFile(filePath);
    return JSON.parse(jsonData.toString());
}

export async function getThirdPartyData(url: string): Promise<any> {
    let response;
    await fetch(url)
        .then((requestPromise) => {
            if (!requestPromise.ok)
                throw new Error(`HTTP Error: ${requestPromise.status}`);
            return requestPromise.json();
        })
        .then((data) => {
            response = data.projects;
        })
        .catch((error) => {
            console.log(`request error: ${error}`);
        });

    return response;
}
