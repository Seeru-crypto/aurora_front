import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import { SkillData } from './skillData';
import SkillCard from './SkillCard';
import Wave from "./Wave.svg"

const Skills = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  return (
    <SkillsStyle ref={ref} id='skills' className='wrapper style3 fade-up'>
      <div className='svg-container'>
        <div className='custom-shape-divider-top-1727522936'>
          <Wave className='shape-fill' />
        </div>
      </div>
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
});

const SkillsStyle = styled.section`
  background-color: ${(props) => props.theme.backgroundAlternative};
  min-height: 75vh;

  .inner {
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
  }

  .custom-shape-divider-top-1727522936 svg {
    position: relative;
    display: block;
    width: calc(206% + 1.3px);
    height: 84px;
  }

  .custom-shape-divider-top-1727522936 .shape-fill {
    fill: ${(props) => props.theme.background};
  }

  @media (max-width: 1200px) {
    .features {
      gap: 2rem;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
    }
  }
`;

Skills.displayName = 'Skills main component';

export default Skills;