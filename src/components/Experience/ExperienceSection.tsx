import { NAVIGATION_PATHS } from '../../Navigation';
export interface ExperienceInterface {
  date_started: Date;
  date_ended: Date;
  employer: string;
  job_title: string;
  job_description: string;
  job_type: JobTypes;
}

export type JobTypes = ['course', 'freelance', 'main'];

export default function ExperienceSection(): JSX.Element {
  return (
    <section id={NAVIGATION_PATHS.Experience}>
      <h2>Experience</h2>
      <p>Option B</p>
    </section>
  );
}
