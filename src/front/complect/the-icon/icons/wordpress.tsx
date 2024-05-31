import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 6H3M3 6L7.457 17.4921C8.10731 19.1689 8.43246 20.0073 8.9816 20C9.53074 19.9926 9.83482 19.1459 10.443 17.4524L10.5 17.2935M3 6H6.5M6.5 6H7.457M6.5 6L10.5 17.2935M10.5 17.2935L12.816 11',
  d2: 'M10 6H11M11 6L15.457 17.4921C16.1073 19.1689 16.4325 20.0073 16.9816 20C17.5307 19.9926 17.8348 19.1459 18.443 17.4524L18.5 17.2935M11 6H14.5M14.5 6H15.457M14.5 6L18.5 17.2935M18.5 17.2935L20.5288 11.644M20.5288 11.644L21.5377 9.23491C21.9415 8.12432 22.0835 6.93739 21.9529 5.76443C21.7963 4.35795 21.1576 3 19.5012 3C17.9632 3 17.2101 4.72272 18.1898 5.89363C19.7701 7.78249 21.1719 9.87537 20.5288 11.644Z',
  d3: 'M7.457 17.4921L3 6H6.5L10.5 17.2935L10.443 17.4524C9.83482 19.1459 9.53074 19.9926 8.9816 20C8.43246 20.0073 8.10731 19.1689 7.457 17.4921Z',
  d4: 'M15.457 17.4921L11 6H14.5L18.5 17.2935L18.443 17.4524C17.8348 19.1459 17.5307 19.9926 16.9816 20C16.4325 20.0073 16.1073 19.1689 15.457 17.4921Z',
  d5: 'M17.6146 6.87489C16.2516 5.24581 17.2877 2.75 19.5012 2.75C20.5704 2.75 21.3646 3.20461 21.8896 3.90491C22.3879 4.56961 22.6124 5.40988 22.6983 6.18143C22.8417 7.46926 22.6858 8.77229 22.2425 9.99122C22.2384 10.0025 22.2341 10.0136 22.2295 10.0246L21.2281 12.4158L19.1289 18.2614C18.8418 19.0608 18.5998 19.7349 18.3555 20.2046C18.129 20.6401 17.7315 21.24 16.9916 21.2499C16.2511 21.2597 15.8383 20.6699 15.6009 20.2404C15.3449 19.7773 15.086 19.1098 14.7791 18.3184L12.8944 13.4587L11.1289 18.2614L11.1289 18.2614C10.8418 19.0608 10.5998 19.7349 10.3555 20.2046C10.129 20.6401 9.73155 21.24 8.99158 21.2499C8.25109 21.2597 7.83828 20.6699 7.60085 20.2404C7.34485 19.7773 7.08602 19.1098 6.7791 18.3183L2.48644 7.25H2C1.58579 7.25 1.25 6.91421 1.25 6.5C1.25 6.08579 1.58579 5.75 2 5.75H7.457C7.87122 5.75 8.207 6.08579 8.207 6.5C8.207 6.87967 7.9249 7.19344 7.55886 7.24314L10.5135 15.5852L12.0742 11.344L10.4864 7.25H10C9.58579 7.25 9.25 6.91421 9.25 6.5C9.25 6.08579 9.58579 5.75 10 5.75H15.457C15.8712 5.75 16.207 6.08579 16.207 6.5C16.207 6.87967 15.9249 7.19344 15.5589 7.24314L18.5049 15.5609L19.8229 11.8905L19.8239 11.8877C20.0472 11.2737 19.9433 10.5324 19.5161 9.63677C19.0906 8.7446 18.3953 7.80804 17.6146 6.87489Z',
  d6: 'M11.1289 18.2614C10.8418 19.0608 10.5998 19.7349 10.3555 20.2046C10.129 20.6401 9.73155 21.24 8.99158 21.2499C8.25109 21.2597 7.83828 20.6699 7.60085 20.2404C7.34485 19.7773 7.08602 19.1098 6.7791 18.3183L2.48644 7.25H2C1.58579 7.25 1.25 6.91421 1.25 6.5C1.25 6.08579 1.58579 5.75 2 5.75H7.457C7.87122 5.75 8.207 6.08579 8.207 6.5C8.207 6.87967 7.9249 7.19344 7.55886 7.24314L10.5135 15.5852L12.0742 11.344L12.8944 13.4587L11.1289 18.2614Z',
  d7: 'M17.6146 6.87489C16.2516 5.24581 17.2877 2.75 19.5012 2.75C20.5704 2.75 21.3646 3.20461 21.8896 3.90491C22.3879 4.56961 22.6124 5.40988 22.6983 6.18143C22.8417 7.46926 22.6858 8.77229 22.2425 9.99122C22.2384 10.0025 22.2341 10.0136 22.2295 10.0246L21.2281 12.4158L19.1289 18.2614C18.8418 19.0608 18.5998 19.7349 18.3555 20.2046C18.129 20.6401 17.7315 21.24 16.9916 21.2499C16.2511 21.2597 15.8383 20.6699 15.6009 20.2404C15.3449 19.7773 15.086 19.1098 14.7791 18.3184L10.4864 7.25H10C9.58579 7.25 9.25 6.91421 9.25 6.5C9.25 6.08579 9.58579 5.75 10 5.75H15.457C15.8712 5.75 16.207 6.08579 16.207 6.5C16.207 6.87967 15.9249 7.19344 15.5589 7.24314L18.5049 15.5609L19.8229 11.8905L19.8239 11.8877C20.0472 11.2737 19.9433 10.5324 19.5161 9.63677C19.0906 8.7446 18.3953 7.80804 17.6146 6.87489Z',
  d8: 'M2 6.5H3M3 6.5L8 20.5L10 16.5M3 6.5H6.5M6.5 6.5H8M6.5 6.5L10 16.5M10 16.5L12.816 11.5',
  d9: 'M10 6.5H11M11 6.5L16 20.5L18 17M11 6.5H14.5M14.5 6.5H16M14.5 6.5L18 17M18 17L20.5288 12.144M20.5288 12.144L21.5377 9.73491C21.9415 8.62432 22.0835 7.43739 21.9529 6.26443C21.7963 4.85795 21.1576 3.5 19.5012 3.5C17.9632 3.5 17.2101 5.22272 18.1898 6.39363C19.7701 8.28249 21.1719 10.3754 20.5288 12.144Z',
  d10: 'M19.212 2.75C16.9719 2.75 15.9233 5.24581 17.3027 6.87489C18.0928 7.80804 18.7965 8.7446 19.2272 9.63677C19.6495 10.5118 19.7596 11.2395 19.5537 11.8451L17.8466 15.0843L15.2037 7.25H15.6687V5.75H9.59638V7.25H10.0735L11.5963 11.463L9.75847 14.6873L7.12406 7.25H7.57229V5.75H1.5V7.25H1.97714L6.85747 20.7523C6.95974 21.0352 7.22302 21.2305 7.52653 21.2486C7.83005 21.2667 8.11521 21.1041 8.25119 20.8354L10.2669 16.852L12.2724 13.3335L14.9539 20.7523C15.0536 21.0281 15.3066 21.2213 15.6019 21.2471C15.8972 21.2729 16.1806 21.1264 16.3277 20.8721L18.3518 17.3721C18.3567 17.3636 18.3614 17.3551 18.366 17.3464L20.9252 12.4904C20.935 12.4719 20.944 12.453 20.9521 12.4337L21.9732 10.0246C21.9778 10.0136 21.9823 10.0025 21.9864 9.99121C22.435 8.77229 22.5928 7.46926 22.4477 6.18143C22.3607 5.40988 22.1335 4.56961 21.6292 3.90491C21.0979 3.20461 20.2941 2.75 19.212 2.75Z',
} as const;

export const IconWordpressStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wordpress-stroke-rounded IconWordpressStrokeRounded"
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

export const IconWordpressDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wordpress-duotone-rounded IconWordpressDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconWordpressTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wordpress-twotone-rounded IconWordpressTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconWordpressSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wordpress-solid-rounded IconWordpressSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWordpressBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wordpress-bulk-rounded IconWordpressBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWordpressStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wordpress-stroke-sharp IconWordpressStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWordpressSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wordpress-solid-sharp IconWordpressSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWordpress: TheIconSelfPack = {
  name: 'Wordpress',
  StrokeRounded: IconWordpressStrokeRounded,
  DuotoneRounded: IconWordpressDuotoneRounded,
  TwotoneRounded: IconWordpressTwotoneRounded,
  SolidRounded: IconWordpressSolidRounded,
  BulkRounded: IconWordpressBulkRounded,
  StrokeSharp: IconWordpressStrokeSharp,
  SolidSharp: IconWordpressSolidSharp,
};