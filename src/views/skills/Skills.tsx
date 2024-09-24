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
  padding: 0 4rem;

  .inner {
    border-radius: 1rem;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(2, 1fr); 
    gap: 10px;
  }
`;

export default Skills;