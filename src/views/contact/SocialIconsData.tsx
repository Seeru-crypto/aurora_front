import { ISocialIcon } from './SocialIcon';
import { GITHUB_URL, GOODREADS_URL, LINKEDIN_URL } from '../../config';
import { SiGoodreads } from 'react-icons/si';
import { RiLinkedinFill } from 'react-icons/ri';
import { VscGithubAlt } from 'react-icons/vsc';
import React from 'react';

export const icons: ISocialIcon[] = [
  {
    href: GOODREADS_URL,
    id: 'goodReads',
    icon: <SiGoodreads />,
  },
  {
    href: LINKEDIN_URL,
    id: 'linkedIn',
    icon: <RiLinkedinFill />,
  },
  {
    href: GITHUB_URL,
    id: 'gitHub',
    icon: <VscGithubAlt />,
  },
];