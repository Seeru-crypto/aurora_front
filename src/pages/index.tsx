import { useEffect, useRef, useState } from 'react';
import Contact from '../components/Contact/Contact';
import Experience from '../components/Experience/Experience';
import LandingPage from '../components/landing/LandingPage';
import Toast from '../components/util/Toast';
import { formatDate } from '../components/work/Card';
import Showcase, { ShowcaseProps } from '../components/work/Showcase';
import config from '../config.json';
import { loadLocalData, mergeGitProjectData, ProjectInterface, TimelineCard } from '../lib/load-data';
import { changeToastValue, setAuroraLastUpdated, setNumberOfProjects } from '../state/appSlice';
import { RootState, useAppDispatch, useAppSelector } from '../state/store';
import useIntersectionObserver, { IntersectionOption } from '../useIntersectionObserver';

type HomeProps = {
  projects: ProjectInterface[];
  timeLineCards: TimelineCard[];
  techTypes: Iterable<readonly [string, string]>;
};

export default function Home({ projects, techTypes }: HomeProps): JSX.Element {
  const isToastShown: boolean = useAppSelector((state: RootState) => state.app.isToastShown);
  const dispatch = useAppDispatch();
  const [sections, setSections] = useState<(HTMLDivElement | null)[]>([]);
  const showcaseProps: ShowcaseProps = {
    projects,
    techTypes: new Map<string, string>(techTypes),
  };

  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSections([contactRef.current, experienceRef.current, landingRef.current, showcaseRef.current]);
  }, []);

  const intersectionOptions: IntersectionOption = {
    root: null,
    rootMargin: '0px',
    threshold: [0.25, 0.5, 0.75, 1],
  };

  useIntersectionObserver(intersectionOptions, sections);

  useEffect(() => {
    if (isToastShown) {
      setTimeout(() => {
        dispatch(changeToastValue());
      }, 3000);
    }
  }, [isToastShown, dispatch]);

  useEffect(() => {
    dispatch(setNumberOfProjects(projects.length));

    // TODO: can this loop be transformed into a server side function?
    projects.forEach((project: ProjectInterface) => {
      if (project.project_name === 'Aurora' && project.updatedAt)
        dispatch(setAuroraLastUpdated(formatDate(project.updatedAt, false)));
    });
  }, [projects, dispatch]);

  return (
    <>
      {isToastShown && <Toast message="Added to clipboard" />}
      <LandingPage ref={landingRef} />
      <Experience ref={experienceRef} />
      <Showcase showcaseProps={showcaseProps} ref={showcaseRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export async function getStaticProps(): Promise<{ props: HomeProps; revalidate: string | undefined }> {
  const localJsonData = await loadLocalData();
  const projects = await mergeGitProjectData(
    localJsonData.projects,
    process.env.GIT_REPO_DATA_URL,
    process.env.GITHUB_TOKEN
  );
  const techTypeList: string[][] = config.TECH_TYPES;
  const timeLineCards: TimelineCard[] = localJsonData.experience;

  // TODO: Fix the actual type for 'techTypes' (see Iterator<Map> vs string[][])
  return {
    props: {
      projects: projects,
      techTypes: techTypeList as any,
      timeLineCards: timeLineCards,
    },
    revalidate: process.env.REVALIDATE_VALUE,
  };
}
