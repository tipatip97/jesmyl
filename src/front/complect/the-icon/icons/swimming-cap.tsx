import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.2057 13.5C6.61724 10.9057 6.10634 7.50433 4 5.5',
  d2: 'M18.7943 13.5C17.3828 10.9057 17.8937 7.50433 20 5.5',
  d3: 'M3.84563 13.5H20.1544C21.6152 13.5 22.1108 13.1856 21.9799 11.6907C21.5401 6.67031 17.2341 2.5 12 2.5C6.76593 2.5 2.45986 6.67031 2.02015 11.6907C1.88922 13.1856 2.38484 13.5 3.84563 13.5Z',
  d4: 'M4 19C4 17.4634 6.1186 17.1143 7.23329 16.6688C8.80778 16.0396 10.5 17.2472 10.5 19C10.5 20.7528 8.80778 21.9604 7.23329 21.3312C6.1186 20.8857 4 20.5366 4 19ZM4 19L2 19M20 19C20 17.4634 17.8814 17.1143 16.7667 16.6688C15.1922 16.0396 13.5 17.2472 13.5 19C13.5 20.7528 15.1922 21.9604 16.7667 21.3312C17.8814 20.8857 20 20.5366 20 19ZM20 19L22 19M10.5 18.5C10.7994 17.9022 11.359 17.5 12 17.5C12.641 17.5 13.2006 17.9022 13.5 18.5',
  d5: 'M18.7943 13.5C17.4924 11.1073 17.8258 8.02819 19.5379 5.99163C17.7008 3.87293 15.0031 2.5 12 2.5C8.9968 2.5 6.29914 3.87293 4.46204 5.99163C6.17412 8.02819 6.5075 11.1073 5.20567 13.5H18.7943Z',
  d6: 'M4 5.5C4.16371 5.65578 4.31778 5.82 4.46207 5.99163M20 5.5C19.8363 5.65578 19.6822 5.82 19.5379 5.99163M4.46207 5.99163C6.17415 8.02819 6.50753 11.1073 5.2057 13.5H5.30488H3.84563C2.38484 13.5 1.88922 13.1856 2.02015 11.6907C2.20757 9.55089 3.09738 7.5655 4.46207 5.99163ZM19.5379 5.99163C17.8259 8.02819 17.4925 11.1073 18.7943 13.5H18.6928H20.1544C21.6152 13.5 22.1108 13.1856 21.9799 11.6907C21.7924 9.55089 20.9026 7.5655 19.5379 5.99163Z',
  d7: 'M7.23329 21.3312C6.1186 20.8857 4 20.5366 4 19C4 17.4634 6.1186 17.1143 7.23329 16.6688C8.80778 16.0396 10.5 17.2472 10.5 19C10.5 20.7528 8.80778 21.9604 7.23329 21.3312Z',
  d8: 'M16.7667 21.3312C17.8814 20.8857 20 20.5366 20 19C20 17.4634 17.8814 17.1143 16.7667 16.6688C15.1922 16.0396 13.5 17.2472 13.5 19C13.5 20.7528 15.1922 21.9604 16.7667 21.3312Z',
  d9: 'M11.9998 1.75C6.36011 1.75 1.74573 6.15877 1.2734 11.4649C1.20671 12.214 1.24347 13.0797 1.89592 13.6671C2.20927 13.9492 2.5823 14.0872 2.92973 14.1595C3.27248 14.2308 3.64951 14.25 4.03089 14.25H19.9687C20.3501 14.25 20.7272 14.2308 21.0699 14.1595C21.4173 14.0872 21.7904 13.9492 22.1037 13.6671C22.7562 13.0797 22.7929 12.214 22.7262 11.4649C22.2539 6.15877 17.6395 1.75 11.9998 1.75ZM3.41258 12.2893C3.33673 12.2729 3.2988 12.2646 3.25483 12.212C3.21087 12.1595 3.20934 12.1173 3.20627 12.0331C3.20264 11.9332 3.20575 11.8024 3.22084 11.6328C3.35701 10.1031 3.91576 8.66459 4.78276 7.44248C4.93574 7.22684 5.01223 7.11902 5.12779 7.13042C5.24335 7.14181 5.29673 7.26119 5.40347 7.49994C6.03223 8.90629 6.17485 10.5343 5.78081 12.0434C5.74596 12.1769 5.72853 12.2436 5.67452 12.2853C5.62051 12.327 5.54867 12.327 5.405 12.327H4.03127C3.79081 12.327 3.58596 12.327 3.41258 12.2893ZM20.7923 12.0716C20.7886 12.1354 20.7867 12.1673 20.7444 12.2179C20.702 12.2686 20.6775 12.2746 20.6283 12.2864C20.4601 12.327 20.2156 12.327 19.9691 12.327H18.5957C18.4521 12.327 18.3802 12.327 18.3262 12.2853C18.2722 12.2436 18.2548 12.1769 18.2199 12.0434C17.8259 10.5344 17.9685 8.90653 18.5971 7.50025C18.7039 7.26147 18.7572 7.14208 18.8728 7.13069C18.9884 7.11929 19.0649 7.22712 19.2178 7.44278C20.0847 8.66483 20.6434 10.1032 20.7795 11.6328C20.7967 11.8251 20.7984 11.9675 20.7923 12.0716Z',
  d10: 'M10.5477 16.9571C9.73356 15.9232 8.32723 15.423 6.95496 15.9714C6.77256 16.0443 6.26431 16.2123 6.01899 16.293C5.65758 16.4144 5.2467 16.5614 4.86279 16.7537C4.3534 17.0088 3.79102 17.3981 3.48327 18L2 18C1.44772 18 1 18.4477 1 19C1 19.5523 1.44772 20 2 20H3.48422C3.79218 20.6008 4.35392 20.9896 4.86279 21.2444C5.2467 21.4367 5.65758 21.5837 6.01899 21.7051C6.26431 21.7858 6.77256 21.9538 6.95497 22.0267C9.00944 22.8477 11.1403 21.3186 11.2459 19.1664C11.3035 19.1019 11.3535 19.0288 11.3941 18.9478C11.5564 18.6239 11.8048 18.5 12 18.5C12.1952 18.5 12.4436 18.6239 12.6059 18.9478C12.6465 19.0288 12.6965 19.1019 12.7541 19.1664C12.8597 21.3186 14.9906 22.8477 17.045 22.0267C17.2274 21.9538 17.7357 21.7858 17.981 21.7051C18.3424 21.5837 18.7533 21.4367 19.1372 21.2444C19.6461 20.9896 20.2078 20.6008 20.5158 20H22C22.5523 20 23 19.5523 23 19C23 18.4477 22.5523 18 22 18L20.5167 18C20.209 17.3981 19.6466 17.0088 19.1372 16.7537C18.7533 16.5614 18.3424 16.4144 17.981 16.293C17.7357 16.2123 17.2274 16.0443 17.045 15.9714C15.6728 15.423 14.2664 15.9232 13.4523 16.9571C13.0419 16.6733 12.5484 16.5 12 16.5C11.4516 16.5 10.9581 16.6733 10.5477 16.9571Z',
  d11: 'M12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 12.8375 2.01672 13.1711 2.04938 13.5H21.9506C21.9833 13.1711 22 12.8375 22 12.5C22 6.97715 17.5228 2.5 12 2.5Z',
  d12: 'M12 1.74854C6.06294 1.74854 1.25 6.56147 1.25 12.4985C1.25 12.8608 1.26795 13.2191 1.30304 13.5726L1.37015 14.2485H22.6298L22.697 13.5726C22.7321 13.2191 22.75 12.8608 22.75 12.4985C22.75 6.56147 17.9371 1.74854 12 1.74854ZM2.75331 12.7485C2.75111 12.6655 2.75 12.5822 2.75 12.4985C2.75 10.2442 3.55647 8.17814 4.89666 6.57324C6.07304 8.35854 6.33661 10.7197 5.55262 12.7485H2.75331ZM21.25 12.4985C21.25 12.5822 21.2489 12.6655 21.2467 12.7485H18.4474C17.6634 10.7197 17.927 8.35854 19.1033 6.57324C20.4435 8.17814 21.25 10.2442 21.25 12.4985Z',
  d13: 'M13.3057 17.1582C14.0891 15.9898 15.5863 15.388 17.045 15.971C17.2274 16.0438 17.4346 16.112 17.6799 16.1927C17.7744 16.2238 17.8745 16.2568 17.981 16.2925C18.3424 16.414 18.7533 16.561 19.1372 16.7532C19.7137 17.0419 20.358 17.5025 20.6244 18.2486L22 18.2486V19.7486H20.6244C20.358 20.4946 19.7137 20.9552 19.1372 21.2439C18.7533 21.4362 18.3424 21.5832 17.981 21.7046C17.8745 21.7404 17.7745 21.7733 17.68 21.8044L17.6799 21.8044L17.6799 21.8044C17.4346 21.8851 17.2274 21.9533 17.045 22.0262C14.9377 22.8684 12.75 21.2378 12.75 18.9986C12.75 18.9029 12.754 18.8083 12.7618 18.7149C12.5631 18.4027 12.2738 18.2486 12 18.2486C11.7262 18.2486 11.4369 18.4027 11.2382 18.7149C11.246 18.8083 11.25 18.9029 11.25 18.9986C11.25 21.2378 9.06231 22.8684 6.95497 22.0262C6.77256 21.9533 6.56539 21.8851 6.32006 21.8044C6.22561 21.7733 6.12551 21.7404 6.01899 21.7046C5.65758 21.5832 5.2467 21.4362 4.86279 21.2439C4.2863 20.9552 3.64196 20.4946 3.37561 19.7486H2V18.2486L3.37561 18.2486C3.64196 17.5025 4.2863 17.0419 4.86279 16.7532C5.2467 16.561 5.65758 16.414 6.01899 16.2925C6.1255 16.2568 6.2256 16.2238 6.32004 16.1927L6.32006 16.1927C6.56539 16.112 6.77256 16.0438 6.95497 15.971C8.41367 15.388 9.91086 15.9898 10.6943 17.1582C11.0659 16.9028 11.51 16.7486 12 16.7486C12.49 16.7486 12.9341 16.9028 13.3057 17.1582Z',
};

export const IconSwimmingCapStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swimming-cap-stroke-rounded IconSwimmingCapStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSwimmingCapDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swimming-cap-duotone-rounded IconSwimmingCapDuotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSwimmingCapTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swimming-cap-twotone-rounded IconSwimmingCapTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSwimmingCapSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swimming-cap-solid-rounded IconSwimmingCapSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwimmingCapBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swimming-cap-bulk-rounded IconSwimmingCapBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwimmingCapStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swimming-cap-stroke-sharp IconSwimmingCapStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwimmingCapSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swimming-cap-solid-sharp IconSwimmingCapSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSwimmingCap: TheIconSelfPack = {
  name: 'SwimmingCap',
  StrokeRounded: IconSwimmingCapStrokeRounded,
  DuotoneRounded: IconSwimmingCapDuotoneRounded,
  TwotoneRounded: IconSwimmingCapTwotoneRounded,
  SolidRounded: IconSwimmingCapSolidRounded,
  BulkRounded: IconSwimmingCapBulkRounded,
  StrokeSharp: IconSwimmingCapStrokeSharp,
  SolidSharp: IconSwimmingCapSolidSharp,
};