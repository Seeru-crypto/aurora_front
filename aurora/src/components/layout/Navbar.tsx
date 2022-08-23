import Link from 'next/link';
import { useEffect } from 'react';
import config from '../../config.json';
import { RootState, useAppSelector } from '../../state/store';

const Navbar = () => {
  const currentSection: string = useAppSelector((state: RootState) => state.app.currentSection);

  useEffect(() => {
    console.log('Current section' + currentSection);
  }, [currentSection]);

  function isInView(sectionName: string) {
    return sectionName === 'About' ? 'inView' : '';
  }

  return (
    <nav>
      {config.NAVIGATION_PATHS.map((object) => (
        <Link href={object.key} key={object.value}>
          {/* TODO: href needs a11y value */}
          <a className={isInView(object.value)} href="#todo">
            {object.value}
          </a>
        </Link>
      ))}
      <Link className="resume" href={config.CV_DOWNLOAD_LINK}>
        <button className="resume">résumé</button>
      </Link>
    </nav>
  );
};
export default Navbar;
