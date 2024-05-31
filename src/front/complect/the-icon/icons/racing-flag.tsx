import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.67181 13.9095C10 15.9322 14 7.84169 21 11.8869L18 2.78502C13.4239 -0.299918 8.56286 6.85641 3 4.62523L8.00007 22',
  d2: 'M19 7C13.5 3.00003 9 11.9999 4.5 8.99991',
  d3: 'M8 4.90476L10.8235 13M13.1765 3L16 10.619',
  d4: 'M18 2.78501L21 11.8869C19.1428 10.8136 17.4967 10.5946 15.9997 10.8144L12.9999 2.49413C14.2678 2.22624 17.0428 1.90937 18 2.78501Z',
  d5: 'M8 4.57385L10.9997 12.8634C9.12961 13.8862 7.42772 14.7301 5.67181 13.9095L3 4.62522C4.04561 4.96201 6.50947 5.42325 8 4.57385Z',
  d6: 'M19 7.00073C13.5 3.00076 9 12.0007 4.5 9.00064',
  d7: 'M19 7.00001C13.5 3.00004 9 11.9999 4.5 8.99992M8 4.90476L10.8235 13M13.1765 3L16 10.619',
  d8: 'M13.2465 2.762L13.1438 2.44531C12.3472 2.71715 11.539 3.08361 10.7171 3.45622C9.83479 3.85627 8.9368 4.26341 8.02083 4.56818L8.05035 4.66186C8.00758 4.65303 7.96193 4.6553 7.91769 4.67073C7.78732 4.7162 7.7185 4.85875 7.76397 4.98912L9.04033 8.6485C8.62773 8.85243 8.2204 9.02682 7.81553 9.15438C6.72657 9.49747 5.68476 9.49154 4.6387 8.79417C4.52382 8.71758 4.3686 8.74862 4.29201 8.8635C4.23043 8.95587 4.23844 9.07432 4.30365 9.157L5.67189 13.9115C7.29834 14.6716 8.87845 14.0035 10.5888 13.088C10.6357 13.216 10.7768 13.2831 10.9059 13.2381C11.0363 13.1926 11.1051 13.0501 11.0596 12.9197L9.65575 8.89472C10.1253 8.6463 10.5948 8.37192 11.0627 8.09849C11.2087 8.01318 11.3547 7.9279 11.5003 7.8436C12.4025 7.32129 13.302 6.83008 14.2154 6.52487L15.7656 10.7079C15.8136 10.8374 15.9574 10.9035 16.0869 10.8555C16.1247 10.8415 16.157 10.8194 16.1827 10.7918C17.6307 10.6158 19.2182 10.8591 21.0001 11.8889L19.356 6.90093C19.2006 6.79582 19.0415 6.70062 18.8795 6.61479C17.5416 5.73444 16.2481 5.57245 15.0014 5.80332C14.8405 5.83312 14.6804 5.86945 14.5213 5.91153L13.4109 2.91515C13.3823 2.83805 13.3198 2.78344 13.2465 2.762Z',
  d9: 'M10.5177 2.44639C12.8783 1.37687 15.7624 0.0701351 18.559 1.95544C18.7429 2.0794 18.8804 2.26097 18.9498 2.47158L21.9498 11.5735C22.0796 11.9675 21.9527 12.4008 21.6308 12.6625C21.3089 12.9242 20.8589 12.9599 20.4997 12.7523C18.9275 11.8438 17.578 11.6406 16.3706 11.7743C15.133 11.9114 13.9755 12.4091 12.7976 13.0254C12.4918 13.1854 12.1752 13.3593 11.8527 13.5365C11.0011 14.0043 10.108 14.495 9.2603 14.8136C8.57414 15.0715 7.84815 15.2477 7.09525 15.2394L8.9611 21.723C9.11383 22.2538 8.8074 22.8079 8.27665 22.9606C7.74591 23.1133 7.19184 22.8069 7.0391 22.2762L4.71222 14.1904C4.71121 14.187 4.71022 14.1836 4.70925 14.1801L2.03903 4.90138C1.93338 4.53424 2.04614 4.13898 2.32961 3.88285C2.61308 3.62672 3.01771 3.55448 3.37229 3.6967C5.68963 4.62615 7.88041 3.641 10.4575 2.47366C10.4775 2.46459 10.4976 2.4555 10.5177 2.44639ZM6.49438 13.1514C7.11849 13.3244 7.77259 13.2362 8.55661 12.9415C9.26255 12.6761 9.95719 12.2943 10.7516 11.8577C11.1019 11.6652 11.4717 11.4619 11.8704 11.2533C13.1085 10.6055 14.5341 9.96546 16.1505 9.78648C17.1666 9.67396 18.2318 9.74606 19.3515 10.0796L17.164 3.4427C15.4933 2.50404 13.7402 3.18231 11.2827 4.29547C11.1965 4.33451 11.1095 4.37407 11.0217 4.41399C9.13588 5.27128 6.87877 6.29737 4.44056 6.01458L6.49438 13.1514Z',
  d10: 'M19.5 7.49991C14 3.49969 9 12.5005 4.5 9.50026',
  d11: 'M15.856 11.8537L14.1907 7.84234C13.4155 8.11381 12.6319 8.45066 11.8337 8.80921C11.6472 8.89303 11.4594 8.97819 11.2706 9.0638C10.984 9.19378 10.6952 9.32478 10.4048 9.45365L11.9807 13.4052C12.1862 13.293 12.3899 13.1829 12.5909 13.0776C13.6536 12.5212 14.7208 12.0489 15.856 11.8537Z',
  d12: 'M17.4486 11.778C18.3932 11.8543 19.4168 12.157 20.5443 12.8091L22.25 13.7955L20.302 7.88086C18.733 7.1019 17.1958 7.06985 15.6393 7.41974L17.4486 11.778Z',
  d13: 'M19.6927 6.03109L18.549 2.55842L18.336 2.4147C16.6585 1.28304 14.9482 1.34883 13.3158 1.82274L15.0564 6.01555C16.5385 5.65031 18.0936 5.55229 19.6927 6.03109Z',
  d14: 'M11.9006 2.32588C11.4175 2.52363 10.9447 2.73793 10.4856 2.94608L10.4403 2.96659C9.67401 3.31397 8.93089 3.65084 8.20022 3.92549L9.84857 8.05881C10.1099 7.94247 10.3751 7.8224 10.6445 7.70041C10.8337 7.61472 11.0254 7.52795 11.2191 7.44093C11.9859 7.09646 12.7861 6.74726 13.614 6.45334L11.9006 2.32588Z',
  d15: 'M6.76409 4.37371C5.5698 4.65571 4.39025 4.67161 3.17621 4.18431L1.75 3.61186L3.27053 8.8995C4.39834 9.47484 5.57304 9.48324 6.86945 9.16279C7.39355 9.03325 7.92381 8.85389 8.46644 8.64242L6.76409 4.37371Z',
  d16: 'M10.6535 14.1266L9.02194 10.0354C8.42356 10.2685 7.82391 10.472 7.22939 10.619C6.09876 10.8984 4.94052 10.9868 3.78544 10.6901L7.18154 22.5L8.62492 22.0843L6.65969 15.2503C7.49456 15.3264 8.3042 15.1476 9.07699 14.857C9.59263 14.663 10.1229 14.4054 10.6535 14.1266Z',
} as const;

export const IconRacingFlagStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="racing-flag-stroke-rounded IconRacingFlagStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRacingFlagDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="racing-flag-duotone-rounded IconRacingFlagDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconRacingFlagTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="racing-flag-twotone-rounded IconRacingFlagTwotoneRounded"
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRacingFlagSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="racing-flag-solid-rounded IconRacingFlagSolidRounded"
    >
      <path 
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

export const IconRacingFlagBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="racing-flag-bulk-rounded IconRacingFlagBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconRacingFlagStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="racing-flag-stroke-sharp IconRacingFlagStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
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
    </TheIconWrapper>
  );
};

export const IconRacingFlagSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="racing-flag-solid-sharp IconRacingFlagSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRacingFlag: TheIconSelfPack = {
  name: 'RacingFlag',
  StrokeRounded: IconRacingFlagStrokeRounded,
  DuotoneRounded: IconRacingFlagDuotoneRounded,
  TwotoneRounded: IconRacingFlagTwotoneRounded,
  SolidRounded: IconRacingFlagSolidRounded,
  BulkRounded: IconRacingFlagBulkRounded,
  StrokeSharp: IconRacingFlagStrokeSharp,
  SolidSharp: IconRacingFlagSolidSharp,
};