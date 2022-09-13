export interface AboutInterface {
  main_text: string[];
  main_stack: string[];
  location: string;
  resume_url: string;
  linkedIn__url: string;
  contact_email: string;
}

export default function AboutSection(): JSX.Element {
  return (
    <section>
      <h1>About</h1>
    </section>
  );
}
