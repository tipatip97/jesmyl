import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 17C10.3264 17 8.86971 18.265 8.11766 20.1312C7.75846 21.0225 8.27389 22 8.95877 22H15.0412C15.7261 22 16.2415 21.0225 15.8823 20.1312C15.1303 18.265 13.6736 17 12 17Z',
  d2: 'M18.5 5H19.7022C20.9031 5 21.5035 5 21.8168 5.37736C22.13 5.75472 21.9998 6.32113 21.7393 7.45395L21.3485 9.15307C20.7609 11.7086 18.6109 13.6088 16 14',
  d3: 'M5.5 5H4.29779C3.09692 5 2.49649 5 2.18324 5.37736C1.86999 5.75472 2.00024 6.32113 2.26075 7.45395L2.65148 9.15307C3.23914 11.7086 5.38912 13.6088 8 14',
  d4: 'M12 17C15.0208 17 17.565 12.3379 18.3297 5.99089C18.5412 4.23558 18.647 3.35793 18.0868 2.67896C17.5267 2 16.6223 2 14.8134 2H9.18658C7.37775 2 6.47333 2 5.91317 2.67896C5.35301 3.35793 5.45875 4.23558 5.67025 5.99089C6.435 12.3379 8.97923 17 12 17Z',
  d5: 'M7.42204 19.8509C8.24266 17.8145 9.914 16.25 12 16.25C14.086 16.25 15.7574 17.8145 16.578 19.8509C16.8395 20.4997 16.7863 21.1855 16.5304 21.7225C16.2833 22.2409 15.768 22.75 15.0412 22.75H8.95879C8.23206 22.75 7.71672 22.2409 7.46966 21.7225C7.21373 21.1855 7.16057 20.4997 7.42204 19.8509Z',
  d6: 'M20.9964 6.05401C20.742 6.01866 20.333 6.00001 19.7023 6.00001H18.5001C17.9479 6.00001 17.5001 5.5523 17.5001 5.00001C17.5001 4.44773 17.9479 4.00001 18.5001 4.00001L19.7642 4.00001C20.3111 3.99993 20.8211 3.99985 21.2301 4.0567C21.6764 4.11874 22.1986 4.27154 22.5863 4.73866C22.9803 5.21324 23.0258 5.75825 22.9902 6.21074C22.9584 6.61617 22.8318 7.16595 22.714 7.67808L22.3232 9.37719C21.6384 12.3551 19.143 14.5403 16.1483 14.989C15.6021 15.0708 15.093 14.6944 15.0112 14.1482C14.9293 13.602 15.3058 13.0929 15.852 13.0111C18.079 12.6774 19.8836 11.0621 20.3741 8.92897L20.7648 7.22985C20.9023 6.63193 20.9776 6.29288 20.9964 6.05401Z',
  d7: 'M3.00362 6.05401C3.25795 6.01866 3.66703 6.00001 4.29765 6.00001H5.49986C6.05215 6.00001 6.49986 5.5523 6.49986 5.00001C6.49986 4.44773 6.05215 4.00001 5.49986 4.00001L4.23581 4.00001C3.68892 3.99993 3.17889 3.99985 2.76985 4.0567C2.32356 4.11874 1.80142 4.27154 1.41366 4.73866C1.01971 5.21324 0.974207 5.75825 1.00978 6.21074C1.04164 6.61617 1.15381 7.1035 1.27168 7.61563L1.67678 9.37719C2.36158 12.3551 4.85697 14.5403 7.85169 14.989C8.39788 15.0708 8.90699 14.6944 8.98883 14.1482C9.07066 13.602 8.69423 13.0929 8.14804 13.0111C5.921 12.6774 4.11644 11.0621 3.6259 8.92897L3.23517 7.22985C3.09768 6.63193 3.0224 6.29288 3.00362 6.05401Z',
  d8: 'M9.12656 1.25L9.18652 1.25L14.8733 1.25C15.7264 1.24995 16.456 1.24991 17.0386 1.34459C17.6731 1.4477 18.2324 1.67692 18.6653 2.20167C19.0832 2.70817 19.2266 3.2765 19.2472 3.90676C19.2662 4.48832 19.1811 5.19486 19.081 6.02493C18.6907 9.26423 17.8355 12.1753 16.6635 14.2451C15.5126 16.2775 13.9255 17.75 11.9999 17.75C10.0744 17.75 8.48728 16.2775 7.33643 14.2451C6.16438 12.1753 5.30917 9.26424 4.91887 6.02493C4.81881 5.19486 4.73364 4.48832 4.75268 3.90676C4.77332 3.2765 4.91671 2.70817 5.33459 2.20167C5.76752 1.67692 6.32676 1.4477 6.96126 1.34459C7.54385 1.24991 8.27344 1.24995 9.12656 1.25Z',
  d9: 'M4.75052 4.00001L4.23583 4.00001C3.68894 3.99993 3.17891 3.99985 2.76988 4.0567C2.32358 4.11874 1.80144 4.27154 1.41369 4.73866C1.01974 5.21324 0.974229 5.75825 1.0098 6.21074C1.04167 6.61617 1.15383 7.1035 1.2717 7.61563L1.6768 9.37719C2.35675 12.334 4.82177 14.5093 7.78821 14.9792C7.63093 14.7444 7.48027 14.4992 7.33643 14.2451C7.0364 13.7153 6.75713 13.1303 6.50111 12.4988C5.06586 11.7957 3.98798 10.5034 3.62593 8.92897L3.2352 7.22985C3.0977 6.63193 3.02242 6.29288 3.00365 6.05401C3.25798 6.01866 3.66705 6.00001 4.29767 6.00001H4.91586C4.82238 5.22445 4.74277 4.55738 4.75052 4.00001ZM16.2117 14.9792C19.1781 14.5092 21.643 12.334 22.323 9.37719L22.7137 7.67808C22.8316 7.16595 22.9581 6.61617 22.99 6.21074C23.0255 5.75825 22.98 5.21324 22.5861 4.73866C22.1983 4.27154 21.6762 4.11874 21.2299 4.0567C20.8209 3.99985 20.3108 3.99993 19.7639 4.00001L19.2494 4.00001C19.2571 4.55738 19.1775 5.22445 19.084 6.00001H19.7021C20.3327 6.00001 20.7418 6.01866 20.9961 6.05401C20.9773 6.29288 20.9021 6.63193 20.7646 7.22985L20.3738 8.92897C20.0118 10.5033 18.934 11.7956 17.4988 12.4988C17.2428 13.1303 16.9635 13.7153 16.6635 14.2451C16.5196 14.4992 16.369 14.7444 16.2117 14.9792Z',
  d10: 'M9.66159 16.9712C8.68028 17.6203 7.90427 18.654 7.42204 19.8506C7.16057 20.4994 7.21373 21.1853 7.46966 21.7223C7.71672 22.2407 8.23206 22.7498 8.95879 22.7498H15.0412C15.768 22.7498 16.2833 22.2407 16.5304 21.7223C16.7863 21.1853 16.8395 20.4994 16.578 19.8506C16.0957 18.654 15.3197 17.6202 14.3384 16.9712C13.6301 17.4643 12.8478 17.7498 11.9999 17.7498C11.1521 17.7498 10.3698 17.4643 9.66159 16.9712Z',
  d11: 'M12 17C9.79086 17 8 19.2386 8 22H16C16 19.2386 14.2091 17 12 17Z',
  d12: 'M18.5 5H22L21.7616 6.66896C21.4984 8.51101 21.3669 9.43204 21.001 10.2267C20.6067 11.0831 20.0161 11.8345 19.2772 12.4201C18.5915 12.9634 17.7277 13.3089 16 14',
  d13: 'M5.5 5H2L2.23842 6.66896C2.50157 8.51101 2.63315 9.43204 2.99902 10.2267C3.39331 11.0831 3.98387 11.8345 4.72282 12.4201C5.4085 12.9634 6.27233 13.3089 8 14',
  d14: 'M12 17C8.41015 17 5.5 10.2843 5.5 2H18.5C18.5 10.2843 15.5899 17 12 17Z',
  d15: 'M17.7502 5C17.7502 4.58579 18.086 4.25 18.5002 4.25H22.0002C22.2176 4.25 22.4243 4.34435 22.5668 4.5086C22.7092 4.67285 22.7734 4.89083 22.7427 5.10607L22.5042 6.77503C22.4979 6.81938 22.4916 6.86327 22.4854 6.90673C22.2404 8.62295 22.0945 9.64543 21.6824 10.5404C21.2389 11.5038 20.5745 12.3492 19.7432 13.0079C18.971 13.6198 18.012 14.0033 16.4023 14.647C16.3615 14.6633 16.3203 14.6797 16.2787 14.6964C15.8942 14.8502 15.4577 14.6631 15.3038 14.2785C15.15 13.894 15.3371 13.4575 15.7217 13.3036C17.4925 12.5953 18.232 12.2915 18.8116 11.8322C19.4582 11.3199 19.9749 10.6624 20.3199 9.91305C20.6292 9.2413 20.7496 8.45093 21.0193 6.5629L21.1354 5.75H18.5002C18.086 5.75 17.7502 5.41421 17.7502 5Z',
  d16: 'M1.43341 4.5086C1.57587 4.34435 1.78259 4.25 2 4.25H5.5C5.91422 4.25 6.25 4.58579 6.25 5C6.25 5.41421 5.91422 5.75 5.5 5.75H2.86476L2.98089 6.5629C3.25061 8.45093 3.37101 9.2413 3.68029 9.91305C4.02529 10.6624 4.54203 11.3199 5.18861 11.8322C5.76823 12.2915 6.50775 12.5953 8.27855 13.3036C8.66314 13.4575 8.8502 13.894 8.69636 14.2785C8.54253 14.6631 8.10605 14.8502 7.72146 14.6964C7.67986 14.6797 7.63869 14.6633 7.59793 14.647C5.98824 14.0033 5.02923 13.6198 4.25704 13.0079C3.42572 12.3492 2.76134 11.5038 2.31776 10.5404C1.90573 9.64543 1.75977 8.62295 1.51477 6.90673C1.50857 6.86328 1.5023 6.81938 1.49597 6.77503L1.25754 5.10607C1.2268 4.89083 1.29096 4.67285 1.43341 4.5086Z',
  d17: 'M7.25 22C7.25 22.4142 7.58579 22.75 8 22.75H16C16.4142 22.75 16.75 22.4142 16.75 22C16.75 18.9892 14.7709 16.25 12 16.25C9.22912 16.25 7.25 18.9892 7.25 22Z',
  d18: 'M19.25 1.25V2C19.25 6.21972 18.5103 10.0757 17.2844 12.9048C16.6719 14.3181 15.9233 15.5094 15.054 16.3579C14.1812 17.2099 13.1481 17.75 12 17.75C10.8519 17.75 9.81884 17.2099 8.94604 16.3579C8.07667 15.5094 7.32808 14.3181 6.71564 12.9048C5.4897 10.0757 4.75 6.21972 4.75 2V1.25H19.25Z',
};

export const IconChampionStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="champion-stroke-rounded IconChampionStrokeRounded"
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
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconChampionDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="champion-duotone-rounded IconChampionDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
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
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconChampionTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="champion-twotone-rounded IconChampionTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconChampionSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="champion-solid-rounded IconChampionSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChampionBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="champion-bulk-rounded IconChampionBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChampionStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="champion-stroke-sharp IconChampionStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
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
      />
    </TheIconWrapper>
  );
};

export const IconChampionSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="champion-solid-sharp IconChampionSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const iconPackOfChampion: TheIconSelfPack = {
  name: 'Champion',
  StrokeRounded: IconChampionStrokeRounded,
  DuotoneRounded: IconChampionDuotoneRounded,
  TwotoneRounded: IconChampionTwotoneRounded,
  SolidRounded: IconChampionSolidRounded,
  BulkRounded: IconChampionBulkRounded,
  StrokeSharp: IconChampionStrokeSharp,
  SolidSharp: IconChampionSolidSharp,
};