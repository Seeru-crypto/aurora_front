import { ForwardedRef } from 'react';
import styled from 'styled-components';
import { SkillData } from './skillData';
import SkillCard from './SkillCard';

interface ISkills {
  ref: ForwardedRef<HTMLElement>;
}

const Skills = (props: ISkills) => {
  return (
    <SkillsStyle ref={props.ref} id='skills' className='wrapper style3 fade-up'>
      <div className='inner'>
        <h2>How can I help you?</h2>
        <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat
          malesuada
          quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est
          velit
          quis lorem.</p>
        <div className='features'>
          {SkillData.map(card => <SkillCard
            key={card.title}
            desc={card.desc}
            icon={card.icon}
            title={card.title} />)}
        </div>
      </div>
    </SkillsStyle>
  );
};

const SkillsStyle = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  .inner {
    max-width: 95%;
    //width: 75em;
    background-color: #f1f5f9;
    padding: 2rem 4rem;
    border-radius: 1rem;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Creates 2 equal columns */
    grid-template-rows: repeat(2, 1fr); /* Creates 2 equal rows */
    gap: 10px; /* Optional: Adds spacing between the grid items */
  }
`;

export default Skills;