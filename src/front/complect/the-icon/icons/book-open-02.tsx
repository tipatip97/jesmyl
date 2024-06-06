import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.6127 16.0846C13.9796 17.5677 12.4773 20.6409 12 21.5V8C12.4145 7.25396 13.602 5.11646 15.6317 3.66368C16.4868 3.05167 16.9143 2.74566 17.4572 3.02468C18 3.30371 18 3.91963 18 5.15146V13.9914C18 14.6568 18 14.9895 17.8634 15.2233C17.7267 15.4571 17.3554 15.6663 16.6127 16.0846L16.6127 16.0846Z',
  d2: 'M12 7.80556C11.3131 7.08403 9.32175 5.3704 5.98056 4.76958C4.2879 4.4652 3.44157 4.31301 2.72078 4.89633C2 5.47965 2 6.42688 2 8.32133V15.1297C2 16.8619 2 17.728 2.4626 18.2687C2.9252 18.8095 3.94365 18.9926 5.98056 19.3589C7.79633 19.6854 9.21344 20.2057 10.2392 20.7285C11.2484 21.2428 11.753 21.5 12 21.5C12.247 21.5 12.7516 21.2428 13.7608 20.7285C14.7866 20.2057 16.2037 19.6854 18.0194 19.3589C20.0564 18.9926 21.0748 18.8095 21.5374 18.2687C22 17.728 22 16.8619 22 15.1297V8.32133C22 6.42688 22 5.47965 21.2792 4.89633C20.5584 4.31301 19 4.76958 18 5.5',
  d3: 'M5.98056 4.76958C9.32175 5.3704 11.3131 7.08403 12 7.80556V21.5C12.8 19.1 16.3333 16.1667 18 15V5.5C19 4.76958 20.5584 4.31301 21.2792 4.89633C22 5.47965 22 6.42688 22 8.32133V15.1297C22 16.8619 22 17.728 21.5374 18.2687C21.0748 18.8095 20.0564 18.9926 18.0194 19.3589C16.2037 19.6854 14.7866 20.2057 13.7608 20.7285C12.7516 21.2428 12.247 21.5 12 21.5C11.753 21.5 11.2484 21.2428 10.2392 20.7285C9.21344 20.2057 7.79633 19.6854 5.98056 19.3589C3.94365 18.9926 2.9252 18.8095 2.4626 18.2687C2 17.728 2 16.8619 2 15.1297V8.32133C2 6.42688 2 5.47965 2.72078 4.89633C3.44157 4.31301 4.2879 4.4652 5.98056 4.76958Z',
  d4: 'M12 7.80556C11.3131 7.08403 9.32175 5.3704 5.98056 4.76958C4.2879 4.4652 3.44157 4.31301 2.72078 4.89633C2 5.47965 2 6.42688 2 8.32133V15.1297C2 16.8619 2 17.728 2.4626 18.2687C2.9252 18.8095 3.94365 18.9926 5.98056 19.3589C7.79633 19.6854 9.21344 20.2057 10.2392 20.7285C11.2484 21.2428 11.753 21.5 12 21.5C12.247 21.5 12.7516 21.2428 13.7608 20.7285C14.7866 20.2057 16.2037 19.6854 18.0194 19.3589C20.0564 18.9926 21.0748 18.8095 21.5374 18.2687C22 17.728 22 16.8619 22 15.1297V8.32133C22 6.42688 22 5.47965 21.2792 4.89633C20.7721 4.4859 19.8502 4.59028 19 4.94264C18.6418 5.09107 18.2964 5.28351 18 5.5',
  d5: 'M16.9516 3.49188C16.7664 3.56957 16.5252 3.73672 16.0682 4.06377C14.3161 5.31781 13.2249 7.14093 12.75 7.98538V18.5743C13.5729 17.3975 14.7329 16.0728 16.2446 15.2214C16.626 15.0066 16.8768 14.8648 17.0522 14.749C17.151 14.6838 17.1978 14.6442 17.2165 14.6274C17.2214 14.6075 17.2294 14.567 17.2358 14.4942C17.2493 14.3389 17.25 14.1278 17.25 13.7816V4.94167C17.25 4.29323 17.2465 3.91985 17.1964 3.6666C17.1621 3.49307 17.1298 3.48571 17.1176 3.48294C17.1162 3.48262 17.1151 3.48237 17.1143 3.48194C17.0892 3.46906 17.0741 3.46431 17.0675 3.46257C17.0616 3.46101 17.059 3.46095 17.0574 3.46094C17.0552 3.46092 17.026 3.46066 16.9516 3.49188ZM17.2117 14.6433C17.2117 14.6433 17.2118 14.643 17.2121 14.6424L17.2117 14.6433ZM17.0689 1.96098C17.3313 1.96298 17.5745 2.03196 17.8 2.14785C18.3346 2.42264 18.5704 2.88285 18.6679 3.37536C18.7503 3.79158 18.7501 4.31718 18.75 4.87621C18.75 4.89798 18.75 4.9198 18.75 4.94167L18.75 13.8109C18.75 14.1185 18.75 14.3961 18.7301 14.6247C18.7089 14.8672 18.6603 15.1364 18.5109 15.392C18.3501 15.6671 18.0968 15.8569 17.8784 16.001C17.6534 16.1495 17.3556 16.3172 17.0047 16.5148L16.9807 16.5283C14.7588 17.7798 13.3923 20.2984 12.7916 21.4055C12.7408 21.4991 12.6955 21.5826 12.6556 21.6544C12.4896 21.9532 12.1427 22.102 11.8119 22.0162C11.481 21.9305 11.25 21.632 11.25 21.2902V7.79021C11.25 7.66275 11.2825 7.5374 11.3444 7.42598L11.3513 7.41348C11.7741 6.6525 13.028 4.39518 15.1952 2.84402C15.213 2.83126 15.2308 2.81849 15.2487 2.80571C15.6291 2.53319 16.0103 2.26009 16.3714 2.10863C16.578 2.02197 16.8112 1.95902 17.0689 1.96098Z',
  d6: 'M6.05352 3.80973L6.1133 3.82048C9.65131 4.45669 11.7782 6.27394 12.5432 7.07749C12.676 7.21693 12.75 7.40209 12.75 7.59462V18.5731C13.5729 17.3964 14.7329 16.0717 16.2446 15.2202C16.626 15.0054 16.8768 14.8636 17.0522 14.7479C17.151 14.6827 17.1978 14.643 17.2165 14.6262C17.2214 14.6064 17.2294 14.5659 17.2358 14.493C17.2493 14.3377 17.25 14.1267 17.25 13.7805V5.28906C17.25 5.04965 17.3643 4.82463 17.5576 4.68342C18.1367 4.26043 18.8714 3.91808 19.5838 3.76196C20.2556 3.61471 21.1187 3.59068 21.751 4.10239C22.2993 4.54611 22.5409 5.12306 22.6499 5.78422C22.7501 6.39193 22.7501 7.1543 22.75 8.04917L22.75 14.964C22.75 15.7916 22.75 16.4773 22.6872 17.0211C22.6219 17.5865 22.4788 18.1111 22.1073 18.5454C21.7259 18.9912 21.1732 19.2215 20.5715 19.3904C19.9696 19.5593 19.1767 19.7019 18.1923 19.8789L18.1923 19.8789L18.1522 19.8861C16.4055 20.2002 15.0588 20.6978 14.1014 21.1857L14.0831 21.195L14.083 21.1951C13.5939 21.4444 13.2033 21.6434 12.9047 21.7791C12.7526 21.8481 12.6067 21.9089 12.4716 21.9533C12.3444 21.9951 12.1786 22.0391 12 22.0391C11.8214 22.0391 11.6556 21.9951 11.5284 21.9533C11.3933 21.9089 11.2474 21.8481 11.0953 21.7791C10.7967 21.6434 10.4061 21.4444 9.91701 21.1951L9.9169 21.195L9.89862 21.1857C8.94122 20.6978 7.59451 20.2002 5.84783 19.8861L5.80773 19.8789L5.80768 19.8789C4.82329 19.7019 4.03038 19.5593 3.42854 19.3904C2.82678 19.2215 2.27407 18.9912 1.89269 18.5454C1.52123 18.1111 1.37808 17.5865 1.31278 17.0211C1.24997 16.4773 1.24998 15.7916 1.25 14.964L1.25 8.11039L1.25 8.04917C1.24995 7.1543 1.24991 6.39193 1.35009 5.78422C1.45909 5.12306 1.70069 4.54611 2.24897 4.10239C2.77662 3.67538 3.35126 3.53518 3.99087 3.53914C4.56937 3.54273 5.2584 3.66668 6.05352 3.80973Z',
  d7: 'M11.9956 6.9173L2.01297 4.1009C2.00653 4.09901 2 4.10353 2 4.10986V18.1922L12.0495 21.0146L22 18.1757V4.16127C22 4.15498 22.0064 4.08352 22 4.08533L18.0175 5.20974M11.9956 6.9173L18.0019 3.16469C18.0086 3.16051 18.0175 3.16498 18.0175 3.1725V16.3101L12.6268 20.5596M11.9956 6.9173L12.0477 20.5596',
  d8: 'M18.3539 1.83867C18.5978 1.96908 18.75 2.22302 18.75 2.49939V3.679L21.7834 2.76478C22.0106 2.69631 22.2568 2.73929 22.4472 2.88067C22.6377 3.02205 22.75 3.24515 22.75 3.48224V19.0276L12.3571 22.143C12.2661 22.1922 12.1666 22.2217 12.0651 22.2305L12 22.25L11.935 22.2305C11.8488 22.223 11.7631 22.2006 11.6819 22.1626C11.6687 22.1564 11.6557 22.1499 11.643 22.143L1.25 19.0276V3.48224C1.25 3.24515 1.36228 3.02205 1.55275 2.88067C1.74322 2.73929 1.98942 2.69631 2.21658 2.76478L11.8782 5.67663L17.584 1.87586C17.8141 1.72256 18.11 1.70826 18.3539 1.83867ZM12.75 6.89717V19.8839L17.25 16.137V3.89962L12.75 6.89717Z',
};

export const IconBookOpen02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-open-02-stroke-rounded IconBookOpen02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookOpen02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-open-02-duotone-rounded IconBookOpen02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookOpen02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-open-02-twotone-rounded IconBookOpen02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookOpen02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-open-02-solid-rounded IconBookOpen02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookOpen02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-open-02-bulk-rounded IconBookOpen02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookOpen02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-open-02-stroke-sharp IconBookOpen02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookOpen02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="book-open-02-solid-sharp IconBookOpen02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBookOpen02: TheIconSelfPack = {
  name: 'BookOpen02',
  StrokeRounded: IconBookOpen02StrokeRounded,
  DuotoneRounded: IconBookOpen02DuotoneRounded,
  TwotoneRounded: IconBookOpen02TwotoneRounded,
  SolidRounded: IconBookOpen02SolidRounded,
  BulkRounded: IconBookOpen02BulkRounded,
  StrokeSharp: IconBookOpen02StrokeSharp,
  SolidSharp: IconBookOpen02SolidSharp,
};