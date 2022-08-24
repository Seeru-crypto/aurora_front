import styled from 'styled-components';

export interface ButtonInterface {
    classes?: string;
    label: string;
    onClickFunction: () => void;
    bordered?: boolean;
}

export default function Button(props: {
    buttonData: ButtonInterface;
}): JSX.Element {
    const {
        bordered = false,
        classes,
        label,
        onClickFunction,
    } = props.buttonData;

    return (
        <ButtonStyle
            className={classes}
            onClick={() => onClickFunction()}
            bordered={bordered}
        >
            {label}
        </ButtonStyle>
    );
}

const ButtonStyle = styled.button<{ bordered: boolean }>`
    border-radius: 0.5rem;
    border: transparent;
    padding: 0.5rem 1rem;
    background-color: var(--primary-color);
    color: var(--button-text);
    cursor: ${(props) => (props.bordered ? 'pointer' : 'cursor')};
`;