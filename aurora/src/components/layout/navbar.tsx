import Link from "next/link";
import config from "../../config.json";
import Button, { ButtonVersion } from "../Button/Button";

const Navbar = () => {
  return (
    <nav>
      {config.NAVIGATION_PATHS.map((object) => (
        <Link href={object.key} key={object.value}>
          {object.value}
        </Link>
      ))}
      <button onClick={() => console.log("download resume")} className="resume">
        resume
      </button>
      <Button label={"Example"} version={ButtonVersion.HEADER} />
    </nav>
  );
};
export default Navbar;
