import { useEffect, useRef, useState } from 'react';
import LandingPage from '../views/landing/LandingPage';
import Toast from '../components/util/Toast';
import { changeToastValue } from '../state/appSlice';
import { RootState, useAppDispatch, useAppSelector } from '../state/store';
import useIntersectionObserver, { IntersectionOption } from '../useIntersectionObserver';
import Experience from '../views/experience/Experience';
import Contact from '../views/contact/Contact';
import Skills from '../views/skills/Skills';
import Projects from '../views/projects/Projects';

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
    setSections([contactRef.current, experienceRef.current, landingRef.current, skillsRef.current, projectsRef.current]);
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

  return (
    <>
      {isToastShown && <Toast message="Added to clipboard" />}
      <LandingPage ref={landingRef} />
      <Skills ref={skillsRef} />
      <Experience ref={experienceRef} />
      {/*<Showcase showcaseProps={showcaseProps} ref={showcaseRef} />*/}
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </>
  );
}
