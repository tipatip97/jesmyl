import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.1002 3C7.45057 3.00657 5.53942 3.09617 4.31806 4.31754C3 5.63559 3 7.75698 3 11.9997C3 16.2425 3 18.3639 4.31806 19.6819C5.63611 21 7.7575 21 12.0003 21C16.243 21 18.3644 21 19.6825 19.6819C20.9038 18.4606 20.9934 16.5494 21 12.8998',
  d2: 'M20.9995 6.02505L20 6.02252C16.2634 6.01307 14.3951 6.00834 13.0817 6.95241C12.6452 7.26614 12.2622 7.6482 11.9474 8.08388C11 9.39491 11 11.2632 11 14.9998M20.9995 6.02505C21.0062 5.86242 20.9481 5.69881 20.8251 5.55309C20.0599 4.64662 18.0711 2.99976 18.0711 2.99976M20.9995 6.02505C20.9934 6.17087 20.9352 6.31591 20.8249 6.44657C20.0596 7.35286 18.0711 8.99976 18.0711 8.99976',
  d3: 'M3 11.9999C3 7.75724 3 5.63592 4.31802 4.3179C5.63604 2.99988 7.75736 2.99988 12 2.99988C16.2426 2.99988 18.364 2.99988 19.682 4.3179C21 5.63592 21 7.75724 21 11.9999C21 16.2425 21 18.3638 19.682 19.6819C18.364 20.9999 16.2426 20.9999 12 20.9999C7.75736 20.9999 5.63604 20.9999 4.31802 19.6819C3 18.3638 3 16.2425 3 11.9999Z',
  d4: 'M19.6086 3.0356C20.2436 3.57591 21.1101 4.34216 21.5892 4.90981C21.854 5.22341 22.0169 5.62635 21.9986 6.06819C21.9823 6.4611 21.8252 6.81367 21.589 7.09349C21.1099 7.66081 20.2437 8.42695 19.6089 8.96737C19.4315 9.1183 19.2103 9.31028 19.0068 9.43653C18.8064 9.56081 18.3178 9.81455 17.7548 9.55444C17.1886 9.29288 17.0672 8.75128 17.0328 8.52111C16.9996 8.29937 16.9998 8.02807 17 7.80097C17.0002 7.54937 17 7.29778 17 7.04618C16.5303 7.0616 16.1133 7.08652 15.7369 7.12615C14.7232 7.23289 14.1232 7.43709 13.6654 7.76617C13.3162 8.01715 13.0098 8.3228 12.7579 8.67134C12.4277 9.12833 12.222 9.72778 12.1127 10.7412C12.0014 11.7732 12 13.1111 12 15.0015C12 15.5538 11.5523 16.0015 11 16.0015C10.4477 16.0015 10 15.5538 10 15.0015L10 14.9428C9.99999 13.1243 9.99997 11.6785 10.1242 10.5268C10.2517 9.34416 10.5197 8.35396 11.1369 7.49992C11.5147 6.97711 11.9743 6.51864 12.4981 6.14216C13.3537 5.52717 14.3445 5.2617 15.5275 5.13714C15.9729 5.09025 16.4622 5.06203 17 5.04532C17 4.76427 17.0002 4.48322 17 4.20217C16.9998 3.97514 16.9996 3.70389 17.0328 3.48217C17.0672 3.25197 17.1887 2.71049 17.7547 2.44894C18.3176 2.18882 18.8062 2.44238 19.0066 2.56664C19.2101 2.69285 19.4313 2.88476 19.6086 3.0356Z',
  d5: 'M12.1002 2.9982C12.1012 3.55048 11.6543 3.999 11.102 4C9.26069 4.00331 7.95244 4.02946 6.95832 4.19037C5.99343 4.34655 5.43598 4.61383 5.02517 5.02464C4.58291 5.4669 4.30569 6.08056 4.15584 7.19512C4.00213 8.33845 4 9.85009 4 11.9997C4 14.1494 4.00212 15.661 4.15584 16.8044C4.30569 17.9189 4.5829 18.5326 5.02516 18.9748C5.46742 19.4171 6.08108 19.6943 7.19564 19.8442C8.33897 19.9979 9.85061 20 12.0003 20C14.1499 20 15.6616 19.9979 16.8049 19.8442C17.9194 19.6943 18.5331 19.4171 18.9754 18.9748C19.3862 18.564 19.6534 18.0066 19.8096 17.0417C19.9705 16.0476 19.9967 14.7393 20 12.898C20.001 12.3457 20.4495 11.8988 21.0018 11.8998C21.5541 11.9008 22.001 12.3493 22 12.9016C21.9967 14.7099 21.9748 16.182 21.7839 17.3613C21.5883 18.5697 21.2001 19.5785 20.3896 20.3891C19.5138 21.2648 18.4077 21.6467 17.0714 21.8263C15.7793 22 14.1328 22 12.0744 22H11.9262C9.86771 22 8.22126 22 6.92915 21.8263C5.59281 21.6467 4.48675 21.2648 3.61095 20.389C2.73515 19.5133 2.35334 18.4072 2.17367 17.0709C1.99996 15.7787 1.99998 14.1323 2 12.0738L2 11.9257C1.99998 9.86718 1.99996 8.22073 2.17368 6.92862C2.35334 5.59229 2.73516 4.48623 3.61095 3.61043C4.4215 2.79988 5.43031 2.41167 6.63875 2.21607C7.81796 2.0252 9.29011 2.00326 11.0984 2C11.6507 1.99901 12.0992 2.44592 12.1002 2.9982Z',
  d6: 'M11 3H3V21H21V13',
  d7: 'M17.9977 3.99036L20.9979 7.00008L18.0076 10.0083M11.0039 15.0001V7.03741C11.0039 7.03191 11.0083 7.02744 11.0139 7.02741L15.9538 7.00008H20.3946',
  d8: 'M2 3C2 2.44772 2.44772 2 3 2H11V4H4V20H20V13H22V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3Z',
  d9: 'M18.293 3.29297L22.0002 7.00008L18.293 10.7072L16.8788 9.29297L18.1662 8.00559L11.5859 8.02057V15.0001H9.58594V7.02284C9.58594 6.47144 10.0323 6.0241 10.5837 6.02284L18.1772 6.00556L16.8788 4.70718L18.293 3.29297Z',
} as const;

export const IconShare03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-03-stroke-rounded IconShare03StrokeRounded"
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

export const IconShare03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-03-duotone-rounded IconShare03DuotoneRounded"
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

export const IconShare03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-03-twotone-rounded IconShare03TwotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShare03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-03-solid-rounded IconShare03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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

export const IconShare03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-03-bulk-rounded IconShare03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShare03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-03-stroke-sharp IconShare03StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShare03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="share-03-solid-sharp IconShare03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShare03: TheIconSelfPack = {
  name: 'Share03',
  StrokeRounded: IconShare03StrokeRounded,
  DuotoneRounded: IconShare03DuotoneRounded,
  TwotoneRounded: IconShare03TwotoneRounded,
  SolidRounded: IconShare03SolidRounded,
  BulkRounded: IconShare03BulkRounded,
  StrokeSharp: IconShare03StrokeSharp,
  SolidSharp: IconShare03SolidSharp,
};