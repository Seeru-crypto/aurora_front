import styled from 'styled-components';
import { FaCode, FaServer } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { MdSettings } from 'react-icons/md';

type IconTypes = 'FaCode' | 'FaServer' | 'FiMonitor' | 'MdSettings'

export interface ISkillCard {
  title: string;
  desc: string;
  icon: IconTypes;
}

const SkillCard = (props: ISkillCard) => {

  function getIcon(iconName: IconTypes) {
    switch (iconName) {
      case 'FaCode':
        return (<FaCode />);
      case 'FaServer':
        return (<FaServer />);
      case 'FiMonitor':
        return (<FiMonitor />);
      case 'MdSettings':
        return (<MdSettings />);
    }
  }

  return (
    <SkillCardStyle>
      <span className='icon'>{getIcon(props.icon)}</span>
      <div className={'item-content'}>
        <h3>{props.title}</h3>
        <p dangerouslySetInnerHTML={{__html:props.desc}} />
      </div>
    </SkillCardStyle>
  );
};

const SkillCardStyle = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: flex-start;
  border: 1px solid #ccc;
  padding: 20px;

  .item-content {
    max-width: 80%;
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

  h3 {
    font-size: ${(props) => props.theme.size.$400};
  }
  
  p {
    font-size: ${(props) => props.theme.size.$400};
  }
`;

export default SkillCard;