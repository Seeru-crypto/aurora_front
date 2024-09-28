import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import { SkillData } from './skillData';
import SkillCard from './SkillCard';

const Skills = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  return (
    <SkillsStyle ref={ref} id='skills' className='wrapper style3 fade-up'>
      <div className='custom-shape-divider-top-1727522936'>
        <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='shape-fill'></path>
        </svg>
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

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 4rem;
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