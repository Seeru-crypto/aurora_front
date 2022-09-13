import { useEffect, useRef } from 'react';
import Contact from '../components/Contact/Contact';
import Experience from '../components/Experience/Experience';
import LandingPage from '../components/landing/LandingPage';
import { Toast } from '../components/util';
import { formatDate } from '../components/work/Card';
import Showcase, { ShowcaseProps } from '../components/work/Showcase';
import config from '../config.json';
import { loadLocalData, mergeGitProjectData, ProjectInterface, TimelineCard } from '../lib/load-data';
import { changeToastValue, setAuroraLastUpdated, setCurrentPage, setNumberOfProjects } from '../state/appSlice';
import { RootState, useAppDispatch, useAppSelector } from '../state/store';

type HomeProps = {
  projects: ProjectInterface[];
  timeLineCards: TimelineCard[];
  techTypes: Iterable<readonly [string, string]>;
};

export default function Home({ projects, techTypes, timeLineCards }: HomeProps): JSX.Element {
  const isToastShown: boolean = useAppSelector((state: RootState) => state.app.isToastShown);
  const dispatch = useAppDispatch();

  const showcaseProps: ShowcaseProps = {
    projects,
    techTypes: new Map<string, string>(techTypes),
  };

  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
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
    const observer = new IntersectionObserver(intersectionCallback, intersectionOptions);
    const sections = [experienceRef.current, contactRef.current, landingRef.current, projectRef.current];

    sections.map((section: HTMLDivElement | null) => {
      return section && observer.observe(section);
    });

    return () => {
      sections.map((section: HTMLDivElement | null) => {
        return section && observer.unobserve(section);
      });
    };
  }, [experienceRef, projectRef, landingRef, contactRef, dispatch]);

  return (
    <>
      {isToastShown && <Toast message="Added to clipboard" />}
      <LandingPage ref={landingRef} />
      <Experience timeLineCards={timeLineCards} ref={experienceRef} />
      <Showcase showcaseProps={showcaseProps} ref={projectRef} />
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
