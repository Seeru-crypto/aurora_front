import { log } from 'console';
import Head from 'next/head';
import {
    About,
    Contact,
    Experience,
    LandingPage,
    Work,
} from '../components/index';
import config from '../config.json';
import {
    getThirdPartyData,
    loadLocalData,
    ProjectGitRepoInterface,
    ProjectInterface,
    ProjectJsonInterface,
} from '../lib/load-data';
import styles from '../styles/Home.module.css';

export interface Props {}

export default function Home({ projects }: { projects: ProjectInterface[] }) {
    console.log('projects is ', projects);

    return (
        <div className={styles.container}>
            <Head>
                <title>Aurora </title>
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
    );
}

async function mergeGitData(
    projects: ProjectJsonInterface[],
    token: string | undefined
): Promise<ProjectInterface[]> {
    return Promise.all(
        projects.map(async (project) => {
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

export async function getStaticProps() {
    const jsonProjects: { projects: ProjectJsonInterface[] } =
        await loadLocalData();
    console.log(jsonProjects);

    const projects = await mergeGitData(
        jsonProjects.projects,
        process.env.GITHUB_TOKEN
    );

    return {
        props: {
            projects: projects,
        },
        revalidate: process.env.REVALIDATE_VALUE,
    };
}
