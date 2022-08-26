import Head from 'next/head';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
    About,
    Contact,
    Experience,
    LandingPage,
    Work,
} from '../components/index';
import { Toast } from '../components/util';
import config from '../config.json';
import {
    loadLocalData,
    mergeGitProjectData,
    ProjectInterface,
    ProjectJsonInterface,
    WorkProps,
} from '../lib/load-data';
import { changeToastValue, setCurrentPage } from '../state/appSlice';
import { RootState, useAppDispatch, useAppSelector } from '../state/store';

export default function Home({
    projects,
    techTypes,
}: {
    projects: ProjectInterface[];
    techTypes: Iterable<readonly [string, string]>;
}) {
    const workProps: WorkProps = {
        projects,
        techTypes: new Map<string, string>(techTypes),
    };

    const isToastShown: boolean = useAppSelector(
        (state: RootState) => state.counter.isToastShown
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isToastShown) {
            setTimeout(() => {
                dispatch(changeToastValue());
            }, 3000);
        }
    }, [isToastShown]);

    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const landingRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    dispatch(setCurrentPage(entry.target.id));
                }
            });
        };

        const intersectionOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.8,
        };

        const observer = new IntersectionObserver(
            intersectionCallback,
            intersectionOptions
        );

        if (landingRef.current) observer.observe(landingRef.current);
        if (aboutRef.current) observer.observe(aboutRef.current);
        if (experienceRef.current) observer.observe(experienceRef.current);
        if (projectRef.current) observer.observe(projectRef.current);
        if (contactRef.current) observer.observe(contactRef.current);

        return () => {
            // ToDo fix potential error, where ref is already changed by the time this function runs
            if (landingRef.current) observer.unobserve(landingRef.current);
            if (aboutRef.current) observer.unobserve(aboutRef.current);
            if (experienceRef.current)
                observer.unobserve(experienceRef.current);
            if (projectRef.current) observer.unobserve(projectRef.current);
            if (contactRef.current) observer.unobserve(contactRef.current);
        };
    }, [aboutRef, experienceRef, projectRef, landingRef, contactRef, dispatch]);

    return (
        <IndexStyle>
            <Head>
                <title>Aurora </title>
                <meta
                    name="description"
                    content="Generated by create next app, made by FO"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={'main'}>
                {isToastShown && <Toast message="Added to clipboard" />}
                <LandingPage ref={landingRef} />
                <About ref={aboutRef} />
                <Experience ref={experienceRef} />
                <Work workProps={workProps} ref={projectRef} />
                <Contact ref={contactRef} />
            </main>
        </IndexStyle>
    );
}

export async function getStaticProps() {
    const localJsonData: { projects: ProjectJsonInterface[] } =
        await loadLocalData();
    const projects = await mergeGitProjectData(
        localJsonData.projects,
        process.env.GITHUB_TOKEN
    );

    const techTypeList: string[][] = config.TECH_TYPES;

    return {
        props: {
            projects: projects,
            techTypes: techTypeList,
        },
        revalidate: process.env.REVALIDATE_VALUE,
    };
}

const IndexStyle = styled.div`
    padding: 0 2rem;

    .main {
        min-height: 50vh;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
