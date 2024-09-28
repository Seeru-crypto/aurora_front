import { useEffect, useRef, useState } from 'react';
import Toast from '../components/util/Toast';
import { changeToastValue } from '../state/appSlice';
import { RootState, useAppDispatch, useAppSelector } from '../state/store';
import useIntersectionObserver, { IntersectionOption } from '../useIntersectionObserver';
import Loading from './loading';
import dynamic from 'next/dynamic';

export default function Home(): JSX.Element {
  const isToastShown: boolean = useAppSelector((state: RootState) => state.app.isToastShown);
  const dispatch = useAppDispatch();
  const [sections, setSections] = useState<(HTMLDivElement | null)[]>([]);

  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(landingRef);
    setSections([contactRef.current, experienceRef.current, landingRef.current, skillsRef.current, projectsRef.current]);
  }, []);

  const intersectionOptions: IntersectionOption = {
    root: null,
    rootMargin: '0px',
    threshold: [0.25, 0.5, 0.75, 1],
  };

  // useIntersectionObserver(intersectionOptions, sections);

  useEffect(() => {

    if (isToastShown) {
      setTimeout(() => {
        dispatch(changeToastValue());
      }, 3000);
    }
  }, [isToastShown, dispatch]);
  //
  const LandingPage = dynamic(() => import('../views/landing/LandingPage'), {
    ssr: false,
    loading: () => <Loading />,
  });

  const Skills = dynamic(() => import('../views/skills/Skills'), {
    ssr: false
  });
  const Experience = dynamic(() => import('../views/experience/Experience'), {
    ssr: false
  });
  const Projects = dynamic(() => import('../views/projects/Projects'), {
    ssr: false
  });
  const Contact = dynamic(() => import('../views/contact/Contact'), {
    ssr: false
  });

  // useEffect(() => {
  //   // Example of updating state within startTransition
  //   startTransition(() => {
  //     // Defer state update to avoid triggering updates during hydration
  //     setSections([contactRef.current, experienceRef.current, landingRef.current, skillsRef.current, projectsRef.current]);
  //   });
  // }, []);

  // useEffect(() => {
  //   setSections([contactRef.current, experienceRef.current, landingRef.current, skillsRef.current, projectsRef.current]);
  // }, []);

  return (
    <>
      {isToastShown && <Toast message='Added to clipboard' />}

      {/*<Suspense fallback={<Loading />}>*/}
      {/*  <LandingPage />*/}
      {/*</Suspense>*/}

      <LandingPage ref={landingRef}/>
      <Skills ref={skillsRef} />


      <Experience ref={experienceRef} />


      <Projects ref={projectsRef} />


      <Contact ref={contactRef} />

    </>
  );
}
