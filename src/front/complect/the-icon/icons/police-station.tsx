import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15.6181 6.99988C16.2653 7.12389 16.7429 7.34168 17.1213 7.72419C18 8.61248 18 10.0422 18 12.9015V21.9999H6V12.9015C6 10.0422 6 8.61248 6.87868 7.72419C7.25705 7.34168 7.73473 7.12389 8.38188 6.99988',
  d2: 'M18 21.9999H21C21.4714 21.9999 21.7071 21.9999 21.8536 21.8534C22 21.707 22 21.4713 22 20.9999V15.9999C22 14.1143 22 13.1715 21.4142 12.5857C20.8284 11.9999 19.8856 11.9999 18 11.9999',
  d3: 'M6 21.9999H3C2.5286 21.9999 2.29289 21.9999 2.14645 21.8534C2 21.707 2 21.4713 2 20.9999V15.9999C2 14.1143 2 13.1715 2.58579 12.5857C3.17157 11.9999 4.11438 11.9999 6 11.9999',
  d4: 'M12 22L12 19',
  d5: 'M9 15H10.2M15 15H13.8',
  d6: 'M8.04217 4C10.9662 4 12.0004 2 12.0004 2C12.0004 2 13.0338 4 15.9578 4C16.1752 5.6875 15.6528 9.65 12.0004 11C8.34791 9.65 7.82476 5.6875 8.04217 4Z',
  d7: 'M12.0004 11C9.89614 10.2222 8.83055 8.57739 8.34683 7C7.69968 7.12401 7.25705 7.34168 6.87868 7.72419C6 8.61248 6 10.0422 6 12.9015V21.9999H18V12.9015C18 10.0422 18 8.61248 17.1213 7.72419C16.7429 7.34168 16.3006 7.12401 15.6534 7C15.1699 8.57739 14.1046 10.2222 12.0004 11Z',
  d8: 'M15.6181 7C16.2653 7.12401 16.7429 7.3418 17.1213 7.72431C18 8.6126 18 10.0423 18 12.9016V22H6V12.9016C6 10.0423 6 8.6126 6.87868 7.72431C7.25705 7.3418 7.73473 7.12401 8.38188 7',
  d9: 'M18 22H21C21.4714 22 21.7071 22 21.8536 21.8536C22 21.7071 22 21.4714 22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12',
  d10: 'M6 22H3C2.5286 22 2.29289 22 2.14645 21.8536C2 21.7071 2 21.4714 2 21V16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12',
  d11: 'M18 22H21C21.4714 22 21.7071 22 21.8536 21.8535C22 21.7071 22 21.4714 22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12',
  d12: 'M6 22H3C2.5286 22 2.29289 22 2.14645 21.8535C2 21.7071 2 21.4714 2 21V16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12',
  d13: 'M12 22V19',
  d14: 'M15.6181 6.99976C16.2653 7.12377 16.7429 7.34156 17.1213 7.72407C18 8.61236 18 10.0421 18 12.9014V21.9998H6V12.9014C6 10.0421 6 8.61236 6.87868 7.72407C7.25705 7.34156 7.73473 7.12377 8.38188 6.99976',
  d15: 'M19.8113 12.8143C19.3488 12.7521 18.7211 12.75 17.75 12.75C17.1977 12.75 16.75 12.3023 16.75 11.75C16.75 11.1977 17.1977 10.75 17.75 10.75L17.8158 10.75C18.7023 10.75 19.4661 10.7499 20.0778 10.8321C20.7333 10.9203 21.3617 11.119 21.8713 11.6287C22.381 12.1383 22.5797 12.7667 22.6679 13.4222C22.7501 14.0339 22.7501 14.7977 22.75 15.6842V15.6842L22.75 20.7894C22.7501 20.9893 22.7503 21.2272 22.7228 21.4319C22.6896 21.6789 22.6007 22.0207 22.3107 22.3107C22.0207 22.6007 21.6789 22.6896 21.4319 22.7228C21.2272 22.7503 20.9893 22.7501 20.7894 22.75H20.7894L17.75 22.75C17.1977 22.75 16.75 22.3023 16.75 21.75C16.75 21.1977 17.1977 20.75 17.75 20.75H20.75V15.75C20.75 14.7789 20.7479 14.1512 20.6857 13.6887C20.6274 13.255 20.5332 13.119 20.4571 13.0429C20.381 12.9668 20.245 12.8726 19.8113 12.8143Z',
  d16: 'M4.1887 12.8143C4.65121 12.7521 5.27892 12.75 6.25 12.75C6.80228 12.75 7.25 12.3023 7.25 11.75C7.25 11.1977 6.80228 10.75 6.25 10.75L6.18417 10.75C5.29768 10.75 4.53387 10.7499 3.92221 10.8321C3.26669 10.9203 2.63834 11.119 2.12868 11.6287C1.61902 12.1383 1.42027 12.7667 1.33214 13.4222C1.24991 14.0339 1.24995 14.7977 1.25 15.6842V15.6842L1.24998 20.7894C1.24986 20.9893 1.24971 21.2272 1.27722 21.4319C1.31044 21.6789 1.39935 22.0207 1.68934 22.3107C1.97933 22.6007 2.32107 22.6896 2.56812 22.7228C2.77276 22.7503 3.01071 22.7501 3.21057 22.75H3.21062L6.25 22.75C6.80228 22.75 7.25 22.3023 7.25 21.75C7.25 21.1977 6.80228 20.75 6.25 20.75H3.25V15.75C3.25 14.7789 3.25212 14.1512 3.31431 13.6887C3.37262 13.255 3.46677 13.119 3.54289 13.0429C3.61902 12.9668 3.75496 12.8726 4.1887 12.8143Z',
  d17: 'M12 18.25C12.5523 18.25 13 18.6977 13 19.25V22.55C13 22.6605 12.9105 22.75 12.8 22.75H11.2C11.0895 22.75 11 22.6605 11 22.55L11 19.25C11 18.6977 11.4477 18.25 12 18.25Z',
  d18: 'M12.0004 1.25C12.2347 1.25004 12.4496 1.3821 12.5589 1.59277C12.5589 1.59277 12.6305 1.70874 12.6775 1.77161C12.7717 1.89769 12.9223 2.07219 13.1382 2.24837C13.5627 2.59466 14.2591 2.96429 15.3329 2.96429C15.6505 2.96429 15.9187 3.20437 15.9593 3.525C16.0636 4.34895 15.9897 5.67274 15.4733 6.95881C14.95 8.26223 13.9575 9.55617 12.2193 10.2101C12.078 10.2633 11.9226 10.2633 11.7813 10.2101C10.0431 9.55618 9.05046 8.26227 8.52699 6.95888C8.01049 5.67284 7.93635 4.34902 8.04065 3.525C8.08124 3.20437 8.34944 2.96429 8.66706 2.96429C9.7409 2.96429 10.4375 2.59465 10.8621 2.24831C11.0782 2.07211 11.2288 1.89758 11.3231 1.77148C11.3701 1.70861 11.4418 1.59259 11.4418 1.59259C11.5511 1.38196 11.7661 1.24996 12.0004 1.25Z',
  d19: 'M12 17.0017C10.7574 17.0017 9.75 18.0091 9.75 19.2517V22.1517C9.75 22.4346 9.75 22.576 9.66213 22.6638C9.57427 22.7517 9.43284 22.7517 9.15 22.7517H6C5.58579 22.7517 5.25 22.4159 5.25 22.0017L5.25 12.8489V12.8489C5.24998 11.4655 5.24997 10.352 5.36638 9.47665C5.48708 8.56909 5.74501 7.80561 6.34548 7.19858C6.39411 7.14942 6.44378 7.1025 6.4945 7.05773C6.71952 6.85904 6.83204 6.75969 6.98416 6.7967C7.13629 6.83371 7.20159 7.002 7.3322 7.33858C7.3436 7.36796 7.35519 7.39733 7.36698 7.42669C7.98903 8.97553 9.20222 10.5773 11.3411 11.382C11.7662 11.5419 12.2343 11.5419 12.6594 11.382C14.7984 10.5773 16.0114 8.9754 16.6333 7.42648C16.645 7.39724 16.6566 7.36799 16.6679 7.33873C16.7985 7.0021 16.8638 6.83379 17.0159 6.79677C17.1681 6.75976 17.2806 6.85912 17.5056 7.05785C17.5563 7.10259 17.6059 7.14946 17.6545 7.19858C18.255 7.80561 18.5129 8.56909 18.6336 9.47665C18.75 10.352 18.75 11.4655 18.75 12.8489V22.0017C18.75 22.4159 18.4142 22.7517 18 22.7517H14.85C14.5672 22.7517 14.4257 22.7517 14.3379 22.6638C14.25 22.576 14.25 22.4346 14.25 22.1517V19.2517C14.25 18.0091 13.2426 17.0017 12 17.0017ZM9 13.25C8.58579 13.25 8.25 13.5858 8.25 14C8.25 14.4142 8.58579 14.75 9 14.75H10.2C10.6142 14.75 10.95 14.4142 10.95 14C10.95 13.5858 10.6142 13.25 10.2 13.25H9ZM13.8 13.25C13.3858 13.25 13.05 13.5858 13.05 14C13.05 14.4142 13.3858 14.75 13.8 14.75H15C15.4142 14.75 15.75 14.4142 15.75 14C15.75 13.5858 15.4142 13.25 15 13.25H13.8Z',
  d20: 'M9.75 19.2517C9.75 18.0091 10.7574 17.0017 12 17.0017C13.2426 17.0017 14.25 18.0091 14.25 19.2517V22.1517C14.25 22.4345 14.25 22.576 14.3379 22.6638C14.4257 22.7517 14.5672 22.7517 14.85 22.7517H18C18.4142 22.7517 18.75 22.4159 18.75 22.0017V12.8489C18.75 11.4655 18.75 10.352 18.6336 9.47664C18.5129 8.56908 18.255 7.8056 17.6545 7.19857C17.6059 7.14945 17.5563 7.10258 17.5056 7.05784C17.2806 6.85911 17.1681 6.75975 17.0159 6.79676C16.8638 6.83378 16.7985 7.00209 16.6679 7.33872C16.6566 7.36798 16.645 7.39723 16.6333 7.42647C16.0114 8.97539 14.7984 10.5773 12.6594 11.382C12.2343 11.5419 11.7662 11.5419 11.3411 11.382C9.20222 10.5773 7.98903 8.97552 7.36698 7.42668C7.35519 7.39732 7.3436 7.36795 7.3322 7.33857C7.20159 7.00199 7.13628 6.8337 6.98416 6.79669C6.83204 6.75968 6.71952 6.85903 6.49449 7.05772C6.44378 7.10249 6.39411 7.14941 6.34548 7.19857C5.74501 7.8056 5.48708 8.56908 5.36638 9.47664C5.24997 10.352 5.24998 11.4655 5.25 12.8489V22.0017C5.25 22.4159 5.58579 22.7517 6 22.7517H9.15C9.43284 22.7517 9.57427 22.7517 9.66213 22.6638C9.75 22.576 9.75 22.4345 9.75 22.1517V19.2517Z',
  d21: 'M18.75 12.7551C19.1907 12.7616 19.5313 12.7772 19.8113 12.8149C20.245 12.8732 20.381 12.9674 20.4571 13.0435C20.5332 13.1196 20.6274 13.2555 20.6857 13.6893C20.7479 14.1518 20.75 14.7795 20.75 15.7506V20.7506H18.75V22.0003C18.75 22.4145 18.4142 22.7503 18 22.7503H17.7254C17.7336 22.7505 17.7418 22.7506 17.75 22.7506L20.7894 22.7506C20.9893 22.7507 21.2272 22.7509 21.4319 22.7234C21.6789 22.6901 22.0207 22.6012 22.3107 22.3112C22.6007 22.0213 22.6896 21.6795 22.7228 21.4325C22.7503 21.2278 22.7501 20.9898 22.75 20.79L22.75 15.6847C22.7501 14.7983 22.7501 14.0344 22.6679 13.4228C22.5797 12.7673 22.381 12.1389 21.8713 11.6293C21.3617 11.1196 20.7333 10.9209 20.0778 10.8327C19.6876 10.7803 19.2354 10.7613 18.729 10.7544C18.7492 11.3454 18.75 12.0106 18.75 12.7551Z',
  d22: 'M5.25 12.7546C5.25002 12.01 5.25082 11.3448 5.27102 10.7539C4.76461 10.7608 4.31246 10.7797 3.92224 10.8322C3.26673 10.9203 2.63838 11.1191 2.12871 11.6287C1.61905 12.1384 1.42031 12.7667 1.33217 13.4223C1.24994 14.0339 1.24998 14.7977 1.25003 15.6842L1.25002 20.7894C1.24989 20.9893 1.24974 21.2273 1.27726 21.4319C1.31047 21.679 1.39938 22.0207 1.68937 22.3107C1.97937 22.6007 2.32111 22.6896 2.56815 22.7228C2.77279 22.7503 3.01074 22.7502 3.21061 22.7501L5.98131 22.7501C5.57574 22.7401 5.25 22.4083 5.25 22.0003V20.7501H3.25003V15.7501C3.25003 14.779 3.25216 14.1513 3.31434 13.6888C3.37265 13.255 3.4668 13.1191 3.54293 13.0429C3.61905 12.9668 3.755 12.8727 4.18874 12.8144C4.46876 12.7767 4.80933 12.7611 5.25 12.7546Z',
  d23: 'M8.25 14C8.25 13.5858 8.58579 13.25 9 13.25H10.2C10.6142 13.25 10.95 13.5858 10.95 14C10.95 14.4142 10.6142 14.75 10.2 14.75H9C8.58579 14.75 8.25 14.4142 8.25 14ZM13.05 14C13.05 13.5858 13.3858 13.25 13.8 13.25H15C15.4142 13.25 15.75 13.5858 15.75 14C15.75 14.4142 15.4142 14.75 15 14.75H13.8C13.3858 14.75 13.05 14.4142 13.05 14Z',
  d24: 'M16.0069 7.01855H18.0079V22.0741H6.00195V7.01855H8.00295',
  d25: 'M12.0049 22.0745V18.0596',
  d26: 'M9.00391 15.0479H11.0049M15.0069 15.0479H13.0059',
  d27: 'M15.9578 4.01469C14.5242 4.08839 12.7696 3.29176 12.1175 2.13449C12.0744 2.05806 11.9548 2.05804 11.9116 2.13439C11.2575 3.29038 9.4844 4.07577 8.03532 4.01469C7.6494 7.07575 9.59646 10.3283 12.0079 11.0396C14.4194 10.3283 16.3438 7.07575 15.9578 4.01469Z',
  d28: 'M17.8691 12.0088H22.0028V22.0468H17.9737',
  d29: 'M6.14054 12.0088H2.00684V22.0468H6.03593',
  d30: 'M6.13631 11.25L2.22722 11.2502C1.68751 11.2502 1.25 11.6793 1.25 12.2085V22.75H6.13635V20.8333H3.20454V13.1668L6.1364 13.1667L6.13631 11.25Z',
  d31: 'M17.8636 13.1667L20.7955 13.1668V20.8333H17.8636V22.75H22.75V12.2085C22.75 11.6793 22.3125 11.2502 21.7728 11.2502L17.8637 11.25L17.8636 13.1667Z',
  d32: 'M9.46967 17.4697C9.61032 17.329 9.80109 17.25 10 17.25H14C14.4142 17.25 14.75 17.5858 14.75 18V22.7497H18C18.4142 22.7497 18.75 22.4139 18.75 21.9997V7C18.75 6.58579 18.4142 6.25 18 6.25H16.9523C16.8575 6.61364 16.7372 6.98274 16.5873 7.34942C15.9249 8.9703 14.6565 10.6009 12.4337 11.4225L12.0003 11.5827L11.5669 11.4225C9.34417 10.6009 8.07552 8.97039 7.41294 7.34955C7.26303 6.98283 7.14265 6.61369 7.0478 6.25H6C5.58579 6.25 5.25 6.58579 5.25 7V21.9997C5.25 22.4139 5.58579 22.7497 6 22.7497H9.25V18C9.25 17.8011 9.32902 17.6103 9.46967 17.4697ZM9 13.25V14.75H11V13.25H9ZM15 14.75V13.25H13V14.75H15Z',
  d33: 'M10.75 22.7497H13.25V18.75H10.75V22.7497Z',
  d34: 'M8.04217 3.25C10.9662 3.25 12.0004 1.25 12.0004 1.25C12.0004 1.25 13.0338 3.25 15.9578 3.25C16.1752 4.9375 15.6528 8.9 12.0004 10.25C8.34791 8.9 7.82476 4.9375 8.04217 3.25Z',
};

export const IconPoliceStationStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="police-station-stroke-rounded IconPoliceStationStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPoliceStationDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="police-station-duotone-rounded IconPoliceStationDuotoneRounded"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPoliceStationTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="police-station-twotone-rounded IconPoliceStationTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPoliceStationSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="police-station-solid-rounded IconPoliceStationSolidRounded"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPoliceStationBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="police-station-bulk-rounded IconPoliceStationBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPoliceStationStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="police-station-stroke-sharp IconPoliceStationStrokeSharp"
    >
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPoliceStationSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="police-station-solid-sharp IconPoliceStationSolidSharp"
    >
      <path 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d34} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPoliceStation: TheIconSelfPack = {
  name: 'PoliceStation',
  StrokeRounded: IconPoliceStationStrokeRounded,
  DuotoneRounded: IconPoliceStationDuotoneRounded,
  TwotoneRounded: IconPoliceStationTwotoneRounded,
  SolidRounded: IconPoliceStationSolidRounded,
  BulkRounded: IconPoliceStationBulkRounded,
  StrokeSharp: IconPoliceStationStrokeSharp,
  SolidSharp: IconPoliceStationSolidSharp,
};