import { NAVIGATION_PATHS } from '../../Navigation';
import { ProjectInterface, WorkProps } from '../../services/load-data';
import styles from '../../styles/Work.module.css';
import Archive from './Archive';
import Card from './Card';

export default function ShowcaseSection({ workProps }: { workProps: WorkProps }) {
  const showcaseList: ProjectInterface[] = workProps.projects.filter((project) => project.showcase);

  return (
    <section className={styles.container} id={NAVIGATION_PATHS.Showcase}>
      <h1>All projects</h1>
      <div className={styles.workCards}>
        {showcaseList.map((project, index) => (
          <Card key={index} project={project} techTypes={workProps.techTypes} />
        ))}
      </div>
      <Archive projects={workProps.projects.filter((project) => !project.showcase)} />
    </section>
  );
}
