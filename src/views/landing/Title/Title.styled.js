import styled, {keyframes} from "styled-components";

export const typeScale = {
    bigDisplay: "5.61rem",
    display: "4.209rem",
    headline: "3.157rem",
    title: "2.369rem",
    subtitle: "1.777rem",
    text: "1.333rem",
    paragraph: "1rem",
    helperText: "0.75rem",
    copyrightText: "0.563rem",
};

export const textRotate1 = keyframes`
0%{
  transform: translate3d(0, 0%, 0) rotateX(0deg)
}
40%{
  transform: translate3d(0, 0%, 0) rotateX(0deg)
}
60%{
  transform: translate3d(0, -100%, 0) rotateX(-90deg);
}
100%{
  transform: translate3d(0, -100%, 0) rotateX(-90deg);
}
`;

export const textRotate2 = keyframes`
0%{
  transform: translate3d(0, 100%, 0) rotateX(-90deg);
}
40%{
  transform: translate3d(0, 100%, 0) rotateX(-90deg);
}
60%{
  transform: translate3d(0, 0%, 0) rotateX(0deg);
}
100%{
  transform: translate3d(0, 0%, 0) rotateX(0deg);
}
`;

export const blue = {
    "00": "#071019",
    10: "#14314C",
    20: "#1A4165",
    30: "#286198",
    40: "#3582CA",
    50: "#3B92E4",
    60: "#42A2FD",
    70: "#55ABFD",
    80: "#68B5FD",
    90: "#8EC7FE",
    100: "#B3DAFE",
    110: "#ECF6FF",
};

const pink = {
    "00": "#190C12",
    10: "#4B2536",
    20: "#643248",
    30: "#974A6B",
    40: "#C9638F",
    50: "#E270A1",
    60: "#FB7CB3",
    70: "#FB89BB",
    80: "#FC96C2",
    90: "#FDB0D1",
    100: "#FDCBE1",
    110: "#FFF2F7",
};

export const PageHeaderStyled = styled.h2`
  grid-column: 2 / 13;
  font-size: ${typeScale.subtitle};
  font-weight: bold;
  color: ${blue["110"]};
  padding-block: 1.25rem;
  background: white;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, #ddd 100%);
  line-height: 1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;

  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
    padding-left: 1rem;
  }
`;

export const Position = styled(PageHeaderStyled)`
  background: unset;
  line-height: unset;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
  margin-block: 0;
  margin-inline: 0;
  margin: 0;
  padding: 0;
  position: relative;
  color: ${blue["50"]};
  cursor: default;
  .text {
    span {
      display: inline-block;
      will-change: transform;
      transform-style: preserve-3d;
      transform-origin: bottom;
      animation: ${textRotate1} 2.4s infinite alternate;
    }
    &.second {
      color: ${pink["50"]};
      position: absolute;
      top: 2%;
      left: 0;
      span {
        transform-origin: bottom;
        transform: translate3d(0, 100%, 0) rotateX(-90deg);
        animation: ${textRotate2} 2.4s infinite alternate;
      }
    }
  }
  @media screen and (max-width: 1204px) {
    font-size: ${typeScale.subtitle};
  }
  @media screen and (max-width: 480px) {
    font-size: ${typeScale.subtitle};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .text.second {
      left: auto;
    }
  }
`;

export const AnimatedSpan = styled.span`
  transition: 0.5s;
  animation-delay: ${(props) => props.index * 0.05}s !important;
  padding: ${(props) => (props.letter === " " ? "0.325rem" : null)};
`;
