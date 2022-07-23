import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ProjectList } from '../components/index';
import { Project, PrismaClient } from '@prisma/client';

export interface Props {
    projects: Project[];
}

export default function Home({ projects }: Props) {
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
                <h3>Index</h3>

                <section>
                    <ProjectList projects={projects} />
                </section>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    console.log('here');

    const prisma = new PrismaClient();

    await prisma.$connect();

    const createdProject = await prisma.project.create({
        data: {
            title: 'test1',
            stack: ['mongoDB', 'prisma'],
        },
    });

    console.log('created project', createdProject);

    const req = await fetch(
        `https://e469abe1-ffd5-4df1-89d9-d80090a1779b.mock.pstmn.io/projects`
    );
    const data = await req.json();
    return {
        props: { projects: data.projects },
        revalidate: process.env.REVALIDATE_VALUE,
    };
}
