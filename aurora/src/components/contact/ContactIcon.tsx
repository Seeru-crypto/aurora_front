import Image from 'next/image';
import styled from 'styled-components';
import { ContactIconInterface } from './Contact';

export default function ContactIcon ({ icon }: { icon: ContactIconInterface }) {
    return (
        <ImageStyle href={icon.href} target="_blank">
            <Image
                height={25}
                width={25}
                alt={icon.name}
                src={`/resources/${icon.icon}`}
            />
        </ImageStyle>
    );
}

const ImageStyle = styled.a`
    height: 25px;
    width: 25px;
    filter: grayscale();
    cursor: pointer;

    :hover {
        filter: none;
    }
`;
