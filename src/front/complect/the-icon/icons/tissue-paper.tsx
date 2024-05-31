import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10 9.5C10 12.5376 8.20914 15 6 15C3.79086 15 2 12.5376 2 9.5C2 6.46243 3.79086 4 6 4C8.20914 4 10 6.46243 10 9.5Z',
  d2: 'M21.8127 10.6943C21.9339 10.1652 22 9.59475 22 9C22 6.23858 20.5755 4 18.8182 4L6 4C9.15512 4 10.5704 7.955 10.0225 10.5666C9.45596 13.2674 7.17947 16.369 7.38872 19.1311C7.42593 19.6223 7.79914 20 8.24715 20H18.3605C18.8516 20 19.2378 19.5383 19.197 19C18.9931 16.3084 21.2125 13.3133 21.8127 10.6943Z',
  d3: 'M6.00801 9.5L5.99902 9.5',
  d4: 'M4.08129 6.32604C3.52393 7.10173 3.15 8.22078 3.15 9.5C3.15 10.7792 3.52393 11.8983 4.08129 12.674C4.63934 13.4506 5.32948 13.8269 6 13.8269C6.67052 13.8269 7.36066 13.4506 7.91871 12.674C8.47607 11.8983 8.85 10.7792 8.85 9.5C8.85 8.22078 8.47607 7.10173 7.91871 6.32604C7.36066 5.54941 6.67052 5.17308 6 5.17308C5.32948 5.17308 4.63934 5.54941 4.08129 6.32604ZM2.5447 5.19494C3.36198 4.05753 4.57184 3.25 6 3.25C7.42816 3.25 8.63802 4.05753 9.45531 5.19494C10.2733 6.3333 10.75 7.85848 10.75 9.5C10.75 11.1415 10.2733 12.6667 9.45531 13.8051C8.63802 14.9425 7.42816 15.75 6 15.75C4.57184 15.75 3.36198 14.9425 2.5447 13.8051C1.72673 12.6667 1.25 11.1415 1.25 9.5C1.25 7.85848 1.72673 6.3333 2.5447 5.19494Z',
  d5: 'M6 3.25L18.8182 3.25C20.0422 3.25 21.0431 4.02822 21.7008 5.06181C22.3642 6.1043 22.75 7.49868 22.75 9C22.75 9.6499 22.6778 10.2766 22.5437 10.8619C22.2928 11.9569 21.774 13.123 21.2845 14.2234L21.2845 14.2234L21.2845 14.2235C21.1496 14.5266 21.017 14.8247 20.8928 15.115C20.2877 16.5292 19.8581 17.7987 19.9448 18.9433C20.0128 19.8404 19.3613 20.75 18.3605 20.75H8.24715C7.34855 20.75 6.70308 20.009 6.64087 19.1878C6.5211 17.6069 7.11145 15.9889 7.72342 14.5349C7.86073 14.2087 7.99887 13.8909 8.13378 13.5805C8.62925 12.4405 9.08121 11.4007 9.28849 10.4126C9.52565 9.28207 9.33706 7.81595 8.73359 6.64829C8.13667 5.49329 7.20934 4.75 6 4.75V3.25Z',
  d6: 'M7 9.5C7 10.0523 6.55429 10.5 6.00447 10.5L5.99553 10.5C5.44571 10.5 5 10.0523 5 9.5C5 8.94771 5.44571 8.5 5.99553 8.5L6.00447 8.5C6.55429 8.5 7 8.94772 7 9.5Z',
  d7: 'M18.8182 3.25H6C7.42816 3.25 8.63802 4.05753 9.45531 5.19494C10.2733 6.3333 10.75 7.85848 10.75 9.5C10.75 11.1415 10.2733 12.6667 9.45531 13.8051C8.90735 14.5676 8.18294 15.1819 7.33458 15.504C6.8884 16.6904 6.54713 17.9505 6.64087 19.1878C6.70308 20.009 7.34855 20.75 8.24715 20.75H18.3605C19.3613 20.75 20.0128 19.8404 19.9448 18.9433C19.8581 17.7987 20.2877 16.5292 20.8928 15.115C21.017 14.8247 21.1496 14.5267 21.2844 14.2236C21.774 13.1231 22.2928 11.9569 22.5437 10.8619C22.6778 10.2766 22.75 9.6499 22.75 9C22.75 7.49868 22.3642 6.1043 21.7008 5.06181C21.0431 4.02822 20.0422 3.25 18.8182 3.25Z',
  d8: 'M21.8127 10.6943C21.9339 10.1652 22 9.59475 22 9C22 6.23858 20.5755 4 18.8182 4H6C9.15512 4 10.5704 7.955 10.0225 10.5666C9.45596 13.2674 7.5 17 7.5 20H19.5C19.5 17 21.2125 13.3133 21.8127 10.6943Z',
  d9: 'M18.8192 3.25H5.99902C4.57086 3.25 3.361 4.05753 2.54372 5.19494C1.72576 6.3333 1.24902 7.85848 1.24902 9.5C1.24902 11.1415 1.72576 12.6667 2.54372 13.8051C3.361 14.9425 4.57086 15.75 5.99902 15.75C6.61103 15.75 7.18295 15.6017 7.70107 15.3427C7.19584 16.8709 6.75098 18.4993 6.75098 20V20.75H20.251V20C20.251 18.622 20.6475 17.0437 21.1486 15.4262C21.3013 14.9334 21.4657 14.4318 21.6289 13.9338C21.984 12.8498 22.3336 11.7831 22.5447 10.8619C22.6788 10.2766 22.751 9.6499 22.751 9C22.751 7.49868 22.3652 6.1043 21.7018 5.06181C21.0441 4.02822 20.0432 3.25 18.8192 3.25ZM3.14902 9.5C3.14902 8.22078 3.52295 7.10173 4.08032 6.32604C4.63836 5.54941 5.32851 5.17308 5.99902 5.17308C6.66954 5.17308 7.35969 5.54941 7.91773 6.32604C8.4751 7.10173 8.84902 8.22078 8.84902 9.5C8.84902 10.7792 8.4751 11.8983 7.91773 12.674C7.35969 13.4506 6.66954 13.8269 5.99902 13.8269C5.32851 13.8269 4.63836 13.4506 4.08032 12.674C3.52295 11.8983 3.14902 10.7792 3.14902 9.5Z',
  d10: 'M7.00879 9.5C7.00879 10.0523 6.56308 10.5 6.01326 10.5H6.00432C5.4545 10.5 5.00879 10.0523 5.00879 9.5C5.00879 8.94772 5.4545 8.5 6.00432 8.5L6.01326 8.5C6.56308 8.5 7.00879 8.94772 7.00879 9.5Z',
} as const;

export const IconTissuePaperStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tissue-paper-stroke-rounded IconTissuePaperStrokeRounded"
    >
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTissuePaperDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tissue-paper-duotone-rounded IconTissuePaperDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTissuePaperTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tissue-paper-twotone-rounded IconTissuePaperTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTissuePaperSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tissue-paper-solid-rounded IconTissuePaperSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTissuePaperBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tissue-paper-bulk-rounded IconTissuePaperBulkRounded"
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
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTissuePaperStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tissue-paper-stroke-sharp IconTissuePaperStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconTissuePaperSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tissue-paper-solid-sharp IconTissuePaperSolidSharp"
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

export const iconPackOfTissuePaper: TheIconSelfPack = {
  name: 'TissuePaper',
  StrokeRounded: IconTissuePaperStrokeRounded,
  DuotoneRounded: IconTissuePaperDuotoneRounded,
  TwotoneRounded: IconTissuePaperTwotoneRounded,
  SolidRounded: IconTissuePaperSolidRounded,
  BulkRounded: IconTissuePaperBulkRounded,
  StrokeSharp: IconTissuePaperStrokeSharp,
  SolidSharp: IconTissuePaperSolidSharp,
};