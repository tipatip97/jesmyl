import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.9975 2C12.2807 2 11.4115 2.00014 11.1417 2.18897C10.8719 2.3778 10.7586 2.70794 10.5319 3.36821C10.2741 4.11444 10.0907 4.88896 9.37365 5.33402L9.02591 5.52847C8.14318 5.968 7.24422 5.59437 6.36398 5.35409C5.90591 5.22812 5.46423 5.19037 5.19349 5.17992C5.02518 5.17342 4.87158 5.26434 4.78471 5.40865L3.14013 8.1405C3.05375 8.284 3.04481 8.46119 3.12854 8.60625C3.25445 8.82437 3.47078 9.16123 3.76219 9.4753C4.4564 10.2274 5.27129 10.8941 5.27129 12.0038C5.27129 13.1136 4.45653 13.7802 3.76219 14.5325C3.47079 14.8466 3.25446 15.1835 3.12855 15.4016C3.04481 15.5467 3.05375 15.7239 3.14014 15.8674L4.7847 18.5992C4.87158 18.7435 5.0252 18.8344 5.19352 18.8279C5.46426 18.8174 5.90594 18.7797 6.364 18.6537C7.24433 18.4134 8.14332 18.0398 9.02609 18.4794L9.3738 18.6739C10.0908 19.1191 10.2742 19.8934 10.5319 20.6397C10.7586 21.3 10.8719 21.6301 11.1417 21.8189C11.4115 22.0078 12.2807 22 12.9975 22',
  d2: 'M12.998 15.5C11.065 15.5 9.49805 13.933 9.49805 12C9.49805 10.067 11.065 8.5 12.998 8.5',
  d3: 'M20.248 4.75L17.998 7H15.998M19.498 4.75C19.498 5.16421 19.8338 5.5 20.248 5.5C20.6622 5.5 20.998 5.16421 20.998 4.75C20.998 4.33579 20.6622 4 20.248 4C19.8338 4 19.498 4.33579 19.498 4.75Z',
  d4: 'M20.248 19.25L17.998 17H15.998M19.498 19.25C19.498 18.8358 19.8338 18.5 20.248 18.5C20.6622 18.5 20.998 18.8358 20.998 19.25C20.998 19.6642 20.6622 20 20.248 20C19.8338 20 19.498 19.6642 19.498 19.25Z',
  d5: 'M20.248 12H15.998M19.498 12C19.498 12.4142 19.8338 12.75 20.248 12.75C20.6622 12.75 20.998 12.4142 20.998 12C20.998 11.5858 20.6622 11.25 20.248 11.25C19.8338 11.25 19.498 11.5858 19.498 12Z',
  d6: 'M13 2C12.2832 2 11.414 2.00014 11.1442 2.18897C10.8744 2.3778 10.7611 2.70794 10.5344 3.36821L10.1897 4.36598C10.0319 4.76472 9.74679 5.10395 9.37612 5.33402L9.02837 5.52847C8.59612 5.7437 8.09945 5.80372 7.62605 5.69792L6.36645 5.35409C5.62494 5.15017 5.25419 5.04821 4.92637 5.17743C4.59855 5.30664 4.40588 5.63068 4.02055 6.27876L3.51103 7.13568C3.14984 7.74316 2.96924 8.0469 3.00429 8.37025C3.03934 8.69359 3.28111 8.95416 3.76466 9.4753L4.82896 10.6284C5.08908 10.9476 5.27376 11.5038 5.27376 12.0038C5.27376 12.5041 5.08914 13.0602 4.82898 13.3794L3.76466 14.5325C3.28112 15.0537 3.03935 15.3142 3.00429 15.6376C2.96924 15.9609 3.14984 16.2647 3.51104 16.8721L4.02053 17.729C4.40586 18.3771 4.59855 18.7012 4.92637 18.8304C5.2542 18.9596 5.62495 18.8576 6.36647 18.6537L7.626 18.3099C8.09949 18.204 8.59625 18.2641 9.02856 18.4794L9.37626 18.6739C9.74685 18.904 10.0319 19.2431 10.1897 19.6418L10.5344 20.6397C10.7611 21.3 10.8744 21.6301 11.1442 21.8189C11.414 22.0078 12.2832 22 13 22',
  d7: 'M4.02055 6.27876L3.51103 7.13568C3.14984 7.74316 2.96924 8.0469 3.00429 8.37025C3.03934 8.69359 3.28111 8.95416 3.76466 9.4753L4.82896 10.6284C5.08908 10.9476 5.27376 11.5038 5.27376 12.0038C5.27376 12.5041 5.08914 13.0602 4.82898 13.3794L3.76466 14.5325C3.28112 15.0537 3.03935 15.3142 3.00429 15.6376C2.96924 15.9609 3.14984 16.2647 3.51104 16.8721L4.02053 17.729C4.40585 18.3771 4.59855 18.7012 4.92637 18.8304C5.2542 18.9596 5.62495 18.8576 6.36647 18.6537L7.626 18.3099C8.09949 18.204 8.59625 18.2641 9.02856 18.4794L9.37626 18.6739C9.74685 18.904 10.0319 19.2431 10.1897 19.6418L10.5344 20.6397C10.7611 21.3 10.8744 21.6301 11.1442 21.8189C11.4038 22.0006 12.2181 22.0003 12.9177 22C12.9453 22 12.9728 22 13 22V15.5C11.067 15.5 9.5 13.933 9.5 12C9.5 10.067 11.067 8.5 13 8.5V2C12.2832 2 11.414 2.00014 11.1442 2.18897C10.8744 2.3778 10.7611 2.70794 10.5344 3.36821L10.1897 4.36598C10.0319 4.76472 9.74679 5.10395 9.37612 5.33402L9.02837 5.52847C8.59612 5.7437 8.09945 5.80372 7.62605 5.69792L6.36645 5.35409C5.62494 5.15017 5.25419 5.04821 4.92637 5.17743C4.59855 5.30664 4.40588 5.63068 4.02055 6.27876Z',
  d8: 'M13 15.5C11.067 15.5 9.5 13.933 9.5 12C9.5 10.067 11.067 8.5 13 8.5',
  d9: 'M20.25 4.75L18 7H16M19.5 4.75C19.5 5.16421 19.8358 5.5 20.25 5.5C20.6642 5.5 21 5.16421 21 4.75C21 4.33579 20.6642 4 20.25 4C19.8358 4 19.5 4.33579 19.5 4.75Z',
  d10: 'M20.25 19.25L18 17H16M19.5 19.25C19.5 18.8358 19.8358 18.5 20.25 18.5C20.6642 18.5 21 18.8358 21 19.25C21 19.6642 20.6642 20 20.25 20C19.8358 20 19.5 19.6642 19.5 19.25Z',
  d11: 'M20.25 12H16M19.5 12C19.5 12.4142 19.8358 12.75 20.25 12.75C20.6642 12.75 21 12.4142 21 12C21 11.5858 20.6642 11.25 20.25 11.25C19.8358 11.25 19.5 11.5858 19.5 12Z',
  d12: 'M10.4997 22.4469C10.7741 22.6444 11.0681 22.7181 11.3477 22.75H12C12.4714 22.75 12.7071 22.75 12.8535 22.6036C13 22.4571 13 22.2214 13 21.75V16.25C10.6528 16.25 8.75 14.3472 8.75 12C8.75 9.6528 10.6528 7.75001 13 7.75V2.25C13 1.7786 13 1.54289 12.8535 1.39645C12.7071 1.25 12.4714 1.25 12 1.25H11.3477C11.0681 1.28188 10.7741 1.3556 10.4997 1.55308C10.2255 1.75047 10.0627 2.00543 9.94422 2.25981C9.83779 2.48829 9.30155 4.08872 9.30155 4.08872C9.20626 4.32813 9.03955 4.53218 8.82436 4.67329C8.22725 5.06487 7.69792 4.95035 7.69792 4.95035C7.36794 4.85698 5.81639 4.42064 5.55067 4.3786C5.25516 4.33183 4.93187 4.32586 4.59758 4.46138C4.2634 4.59685 4.036 4.82595 3.85697 5.06487C3.85697 5.06487 2.51955 7.31456 2.41842 7.54733C2.30581 7.80652 2.22274 8.09914 2.25831 8.4366C2.29388 8.7741 2.43617 9.04311 2.60041 9.2733C2.74789 9.47998 4.20584 11.1019 4.20584 11.1019C4.20584 11.1019 4.46589 11.4151 4.46589 11.9998C4.46589 12.4993 4.20586 12.898 4.20586 12.898C3.99082 13.1363 2.74789 14.5199 2.60042 14.7266C2.43617 14.9568 2.29388 15.2258 2.25831 15.5633C2.22274 15.9008 2.30581 16.1934 2.41842 16.4526L3.85696 18.935C4.03599 19.1739 4.26339 19.4031 4.59759 19.5385C4.93189 19.674 5.25518 19.6681 5.5507 19.6213C5.81642 19.5792 7.69787 19.0495 7.69787 19.0495C7.97561 18.9894 8.40192 19.0495 8.82441 19.3266C9.03956 19.4678 9.30151 19.9112 9.30151 19.9112C9.30151 19.9112 9.83779 21.5117 9.94422 21.7402C10.0627 21.9946 10.2255 22.2495 10.4997 22.4469Z',
  d13: 'M18.75 4.75C18.75 3.92157 19.4216 3.25 20.25 3.25C21.0784 3.25 21.75 3.92157 21.75 4.75C21.75 5.57843 21.0784 6.25 20.25 6.25C20.1156 6.25 19.9854 6.23233 19.8615 6.19919L18.5303 7.53033C18.3897 7.67098 18.1989 7.75 18 7.75H15C14.5858 7.75 14.25 7.41421 14.25 7C14.25 6.58579 14.5858 6.25 15 6.25H17.6893L18.8008 5.13853C18.7677 5.01461 18.75 4.88437 18.75 4.75Z',
  d14: 'M14.25 17C14.25 16.5858 14.5858 16.25 15 16.25H18C18.1989 16.25 18.3897 16.329 18.5303 16.4697L19.8615 17.8008C19.9854 17.7677 20.1156 17.75 20.25 17.75C21.0784 17.75 21.75 18.4216 21.75 19.25C21.75 20.0784 21.0784 20.75 20.25 20.75C19.4216 20.75 18.75 20.0784 18.75 19.25C18.75 19.1156 18.7677 18.9854 18.8008 18.8615L17.6893 17.75H15C14.5858 17.75 14.25 17.4142 14.25 17Z',
  d15: 'M18.9507 11.25C19.21 10.8016 19.6948 10.5 20.25 10.5C21.0784 10.5 21.75 11.1716 21.75 12C21.75 12.8284 21.0784 13.5 20.25 13.5C19.6948 13.5 19.21 13.1984 18.9507 12.75H15C14.5858 12.75 14.25 12.4142 14.25 12C14.25 11.5858 14.5858 11.25 15 11.25H18.9507Z',
  d16: 'M11.3477 22.75C11.0681 22.7181 10.7741 22.6444 10.4997 22.4469C10.2255 22.2495 10.0627 21.9946 9.94424 21.7402C9.8378 21.5117 9.30153 19.9112 9.30153 19.9112C9.30153 19.9112 9.03958 19.4678 8.82443 19.3266C8.40193 19.0495 7.97563 18.9894 7.69789 19.0495C7.69789 19.0495 5.81643 19.5792 5.55071 19.6213C5.25519 19.6681 4.93191 19.674 4.59761 19.5385C4.26341 19.4031 4.03601 19.1739 3.85697 18.935L2.41844 16.4526C2.30583 16.1934 2.22276 15.9008 2.25833 15.5633C2.2939 15.2258 2.43619 14.9568 2.60044 14.7266C2.74791 14.5199 3.99083 13.1363 4.20588 12.898C4.20588 12.898 4.46591 12.4993 4.46591 11.9998C4.46591 11.4151 4.20586 11.1019 4.20586 11.1019C4.20586 11.1019 2.74791 9.47998 2.60043 9.2733C2.43619 9.04311 2.2939 8.7741 2.25833 8.4366C2.22276 8.09914 2.30583 7.80652 2.41843 7.54733C2.51957 7.31456 3.85699 5.06487 3.85699 5.06487C4.03602 4.82595 4.26342 4.59685 4.5976 4.46138C4.93189 4.32586 5.25518 4.33183 5.55069 4.3786C5.81641 4.42064 7.36796 4.85698 7.69794 4.95035C7.69794 4.95035 8.22727 5.06487 8.82438 4.67329C9.03956 4.53218 9.20628 4.32813 9.30157 4.08872C9.30157 4.08872 9.8378 2.48829 9.94424 2.25981C10.0627 2.00543 10.2255 1.75047 10.4997 1.55308C10.7741 1.3556 11.0681 1.28188 11.3477 1.25H12C12.4714 1.25 12.7071 1.25 12.8536 1.39645C13 1.54289 13 1.7786 13 2.25V21.75C13 22.2214 13 22.4571 12.8536 22.6036C12.7071 22.75 12.4714 22.75 12 22.75H11.3477Z',
  d17: 'M13 16.25C10.6528 16.25 8.75 14.3472 8.75 12C8.75 9.65279 10.6528 7.75 13 7.75V16.25Z',
  d18: 'M13 2H10.0474V4.58152L8.15473 5.69367L5.95267 4.40192L3 9.59808L5.20152 10.8895L5.20153 13.1106L3.0001 14.4019L5.95277 19.5981L8.15477 18.3064L10.0474 19.4185V22H13',
  d19: 'M20.25 4.75L18 7H15M19.5 4.75C19.5 5.16421 19.8358 5.5 20.25 5.5C20.6642 5.5 21 5.16421 21 4.75C21 4.33579 20.6642 4 20.25 4C19.8358 4 19.5 4.33579 19.5 4.75Z',
  d20: 'M20.25 19.25L18 17H15M19.5 19.25C19.5 18.8358 19.8358 18.5 20.25 18.5C20.6642 18.5 21 18.8358 21 19.25C21 19.6642 20.6642 20 20.25 20C19.8358 20 19.5 19.6642 19.5 19.25Z',
  d21: 'M20.25 12H15M19.5 12C19.5 12.4142 19.8358 12.75 20.25 12.75C20.6642 12.75 21 12.4142 21 12C21 11.5858 20.6642 11.25 20.25 11.25C19.8358 11.25 19.5 11.5858 19.5 12Z',
  d22: 'M10.0475 1.25C9.63329 1.25 9.2975 1.58579 9.2975 2V4.15233L8.15452 4.82396L6.33227 3.75501C6.15915 3.65346 5.95256 3.62553 5.75869 3.67747C5.56483 3.72941 5.39987 3.85689 5.30071 4.03139L2.34804 9.22754C2.14539 9.58417 2.26683 10.0374 2.62064 10.245L4.45164 11.3191L4.45164 12.681L2.62074 13.755C2.26693 13.9626 2.14549 14.4158 2.34814 14.7725L5.30081 19.9686C5.39997 20.1431 5.56493 20.2706 5.75879 20.3225C5.95266 20.3745 6.15925 20.3465 6.33237 20.245L8.15457 19.1761L9.2975 19.8477V22C9.2975 22.4142 9.63329 22.75 10.0475 22.75H13.0002C13.4144 22.75 13.7502 22.4142 13.7502 22V2C13.7502 1.58579 13.4144 1.25 13.0002 1.25H10.0475ZM13 7.75C10.6528 7.75 8.75 9.65279 8.75 12C8.75 14.3472 10.6528 16.25 13 16.25H13.75V7.75H13Z',
  d23: 'M18.75 4.75C18.75 3.92157 19.4216 3.25 20.25 3.25C21.0784 3.25 21.75 3.92157 21.75 4.75C21.75 5.57843 21.0784 6.25 20.25 6.25C20.1156 6.25 19.9854 6.23233 19.8615 6.19919L18.5303 7.53033C18.3897 7.67098 18.1989 7.75 18 7.75H15V6.25H17.6893L18.8008 5.13853C18.7677 5.01461 18.75 4.88437 18.75 4.75Z',
  d24: 'M15 16.25H18C18.1989 16.25 18.3897 16.329 18.5303 16.4697L19.8615 17.8008C19.9854 17.7677 20.1156 17.75 20.25 17.75C21.0784 17.75 21.75 18.4216 21.75 19.25C21.75 20.0784 21.0784 20.75 20.25 20.75C19.4216 20.75 18.75 20.0784 18.75 19.25C18.75 19.1156 18.7677 18.9854 18.8008 18.8615L17.6893 17.75H15V16.25Z',
  d25: 'M18.9507 11.25C19.21 10.8016 19.6948 10.5 20.25 10.5C21.0784 10.5 21.75 11.1716 21.75 12C21.75 12.8284 21.0784 13.5 20.25 13.5C19.6948 13.5 19.21 13.1984 18.9507 12.75H15V11.25H18.9507Z',
};

export const IconArtificialIntelligence07StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-07-stroke-rounded IconArtificialIntelligence07StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence07DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-07-duotone-rounded IconArtificialIntelligence07DuotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence07TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-07-twotone-rounded IconArtificialIntelligence07TwotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence07SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-07-solid-rounded IconArtificialIntelligence07SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence07BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-07-bulk-rounded IconArtificialIntelligence07BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence07StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-07-stroke-sharp IconArtificialIntelligence07StrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence07SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-07-solid-sharp IconArtificialIntelligence07SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArtificialIntelligence07: TheIconSelfPack = {
  name: 'ArtificialIntelligence07',
  StrokeRounded: IconArtificialIntelligence07StrokeRounded,
  DuotoneRounded: IconArtificialIntelligence07DuotoneRounded,
  TwotoneRounded: IconArtificialIntelligence07TwotoneRounded,
  SolidRounded: IconArtificialIntelligence07SolidRounded,
  BulkRounded: IconArtificialIntelligence07BulkRounded,
  StrokeSharp: IconArtificialIntelligence07StrokeSharp,
  SolidSharp: IconArtificialIntelligence07SolidSharp,
};