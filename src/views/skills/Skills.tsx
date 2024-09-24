import {FaCode, FaServer} from 'react-icons/fa';
import {FiMonitor} from "react-icons/fi";
import {MdSettings} from "react-icons/md";
import {ForwardedRef} from "react";
import styled from "styled-components";

interface ISkills {
    ref: ForwardedRef<HTMLElement>
}

const Skills = (props: ISkills) => {
    return (
        <SkillsStyle ref={props.ref} id="skills" className="wrapper style3 fade-up">
            <div className="inner">
                <h2>How can I help you?</h2>
                <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat
                    malesuada
                    quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est
                    velit
                    quis lorem.</p>
                <div className="features">
                    <section className="feature-item-2">
                        <span className="icon solid major fa-lock"><FaCode/></span>

                        <div className={"item-content"}>
                            <h3>back-end</h3>

                            <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris,
                                sed
                                ultricies
                                erat dapibus.</p>
                        </div>


                    </section>
                    <section className="feature-item-2">
                        <span className="icon solid major fa-cog"><FaServer/></span>

                        <div className={"item-content"}>
                            <h3>Hosting</h3>
                            <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris,
                                sed
                                ultricies
                                erat dapibus.</p>
                        </div>


                    </section>
                    <section className="feature-item-2">
                        <span className="icon solid major fa-desktop"><FiMonitor/></span>
                        <div className={"item-content"}>
                            <h3>Front-end</h3>
                            <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris,
                                sed
                                ultricies
                                erat dapibus.</p
                            ></div>

                    </section>
                    <section className="feature-item-2">
                        <span className="icon solid major fa-link"><MdSettings/></span>
                        <div className={"item-content"}>
                            <h3>other</h3>
                            <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris,
                                sed
                                ultricies
                                erat dapibus.</p>

                        </div>
                    </section>
                </div>
            </div>
        </SkillsStyle>
    )
}

const SkillsStyle = styled.section`
  border: 1px solid #b74e91;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  .inner {
    max-width: 95%;
    //width: 75em;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Creates 2 equal columns */
    grid-template-rows: repeat(2, 1fr); /* Creates 2 equal rows */
    gap: 10px; /* Optional: Adds spacing between the grid items */
  }

  .feature-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid #ccc;
    padding: 20px;
    //text-align: center;
  }

  .feature-item-2 {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: flex-start;
    border: 1px solid #ccc;
    padding: 20px;
    //text-align: center;
  }

  .feature-item-2 > .item-content {
    max-width: 80%;
    //background-color: yellow;
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    border: 1px solid red;
    border-radius: 2rem;
    width: 2.5em;
    height: 2.5em;
    justify-content: center;
    align-items: center;
    display: flex;
    font-weight: 900;
    font-size: x-large;
  }


`;

export default Skills;