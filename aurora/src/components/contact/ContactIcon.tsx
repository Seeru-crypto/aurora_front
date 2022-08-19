import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { ContactIconInterface } from './Contact';

export default function ({ icon }: { icon: ContactIconInterface }) {
    // const [windowObjectReference, setWindowObjectReference] =
    //     useState<any>(null);
    // const [previousUrl, setPreviousUrl] = useState<string>('');

    // function redirectToSocial(selectedIcon: ContactIconInterface) {
    //     if (windowObjectReference === null || windowObjectReference.closed) {
    //         setWindowObjectReference(
    //             window.open(selectedIcon.href, selectedIcon.name)
    //         );
    //     } else if (previousUrl !== selectedIcon.href) {
    //         setWindowObjectReference(
    //             window.open(selectedIcon.href, selectedIcon.name)
    //         );
    //         windowObjectReference.focus();
    //     } else {
    //         windowObjectReference.focus();
    //     }
    //     setPreviousUrl(selectedIcon.href);
    // }
    return (
        <ImageStyle href={icon.href} target="_blank">
            <Image
                height={25}
                width={25}
                alt={icon.name}
                src={`/resources/${icon.icon}`}
            />
        </ImageStyle>

        // <ImageStyle>
        //     <Image
        //         onClick={() => {
        //             redirectToSocial(icon);
        //         }}
        //         src={`/resources/${icon.icon}`}
        //         alt={icon.name}
        //         width={25}
        //         height={25}
        //     />
        // </ImageStyle>
    );
}

const ImageStyle = styled.a`
    height: 25px;
    width: 25px;
    filter: grayscale();
    cursor: pointer;

    &&:hover {
        filter: none;
    }
`;

// const ImageStyle = styled.div`
//     height: 25px;
//     width: 25px;
//     filter: grayscale();
//     cursor: pointer;

//     &&:hover {
//         filter: none;
//     }
// `;
