import styled from 'styled-components';
import { FaCode, FaServer } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';
import { MdSettings } from 'react-icons/md';
import { motion, Variants } from 'framer-motion';

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
        return ( <FaCode className="icon" />);
      case 'FaServer':
        return (<FaServer className="icon" />);
      case 'FiMonitor':
        return (<FiMonitor className="icon" />);
      case 'MdSettings':
        return (<MdSettings className="icon" />);
    }
  }

  const springConfig: Variants = {
    offscreen: {
      y: -300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1.8,
        delay: 0.4
      }
    }
  };

  return (
    <SkillCardStyle>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1 }}
        className="icon-container"
        variants={springConfig}>
        {getIcon(props.icon)}
        </motion.div>
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
  border-radius: 1rem;
  padding: 20px;
  margin: 1rem;
  
  :hover {
    box-shadow: 0 4px 8px 0 ${(props) => props.theme.primaryColor.$800};
    border-color: ${(props) => props.theme.primaryColor.$800};
    
    .icon-container {
      border-color: ${(props) => props.theme.primaryColor.$800};
    }
  }

  .item-content {
    max-width: 80%;
  }

  .icon-container {
    border: 1px solid;
    border-color: ${(props) => props.theme.textColor};
    border-radius: 2rem;
    width: 2.5em;
    height: 2.5em;
    justify-content: center;
    align-items: center;
    display: flex;
    font-weight: 900;
    font-size: x-large;

    .icon {
      color: ${(props) => props.theme.primaryColor.$600};
    }
  }

  h3 {
    font-size: ${(props) => props.theme.size.$400};
  }

  @media (min-width: ${(props) => props.theme.viewSizesMin.$screenMd}) {
    border: 1px solid yellow;
  }

  @media (min-width: ${(props) => props.theme.viewSizesMin.$screenLg}) {
    border: 1px solid green;
    p {
      font-size: 1.25rem;
      //font-size: 1rem;
    }
       //p {
       //  font-size: 1rem;
       //}
  }

  @media (min-width: ${(props) => props.theme.viewSizesMin.$screenXl}) {
    border: 1px solid blue;
       p {
         font-size: 1.25rem;
       }
  }
`;

export default SkillCard;