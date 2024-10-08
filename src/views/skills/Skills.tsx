import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import { SkillData } from './skillData';
import SkillCard from './SkillCard';

const Skills = React.forwardRef((_props, ref: ForwardedRef<HTMLElement>): JSX.Element => {
  return (
    <SkillsStyle ref={ref} id='skills' className='wrapper style3 fade-up'>
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
    padding: 0 2rem;
  }
  
  @media screen and (min-width: ${(props) => props.theme.viewSizesMin.$screenXs}) and (max-width: ${(props) => props.theme.viewSizesMin.$screenSm}) {
      .features {
        padding: 0 .1rem;
        gap: .5rem;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(1, 1fr);

      }
    }
`;

Skills.displayName = 'Skills main component';

export default Skills;