import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z',
  d2: 'M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C12.9401 6 13.8296 6.21619 14.6217 6.60156C15.3346 6.94843 15.6911 7.12186 15.7764 7.63009C15.8617 8.13832 15.5173 8.48274 14.8284 9.17157L12 12',
  d3: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d4: 'M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75ZM12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C12.7852 7 13.5254 7.18028 14.1842 7.50077C14.4738 7.64169 14.5371 8.02666 14.3166 8.26136C14.2437 8.3389 14.1749 8.41084 14.1213 8.46447L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L15.5826 9.83167C15.8856 9.5289 16.2025 9.21232 16.4176 8.89839C16.6846 8.50884 16.8587 8.03744 16.7626 7.46457C16.676 6.94881 16.4242 6.56485 16.0569 6.27269C15.7793 6.05193 15.3648 5.85068 15.0592 5.70234C14.1338 5.2521 13.0949 5 12 5Z',
  d5: 'M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12Z',
  d6: 'M5 12C5 8.13401 8.13401 5 12 5C13.0949 5 14.1338 5.2521 15.0592 5.70234C15.3648 5.85068 15.7793 6.05193 16.0569 6.27269C16.4242 6.56485 16.676 6.94881 16.7626 7.46457C16.8587 8.03744 16.6846 8.50884 16.4176 8.89839C16.2025 9.21232 15.8856 9.5289 15.5826 9.83167L12.7071 12.7071C12.3166 13.0976 11.6834 13.0976 11.2929 12.7071C10.9024 12.3166 10.9024 11.6834 11.2929 11.2929L14.1213 8.46447C14.1749 8.41084 14.2437 8.3389 14.3166 8.26136C14.5371 8.02666 14.4738 7.64169 14.1842 7.50077C13.5254 7.18028 12.7852 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12Z',
  d7: 'M12 12L16.2426 7.75736C15.1569 6.67157 13.6569 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 11.6593 17.9716 11.3252 17.917 11',
  d8: 'M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75ZM7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 11.715 16.9762 11.4362 16.9308 11.1655L18.9033 10.8345C18.967 11.2142 19 11.6036 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C13.9327 5 15.6841 5.7846 16.9497 7.05025L17.6569 7.75736L12.7071 12.7071L11.2929 11.2929L14.7575 7.82829C13.9669 7.30442 13.0195 7 12 7C9.23858 7 7 9.23858 7 12Z',
} as const;

export const IconRadar02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radar-02-stroke-rounded IconRadar02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRadar02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radar-02-duotone-rounded IconRadar02DuotoneRounded"
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

export const IconRadar02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radar-02-twotone-rounded IconRadar02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconRadar02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radar-02-solid-rounded IconRadar02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRadar02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radar-02-bulk-rounded IconRadar02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconRadar02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radar-02-stroke-sharp IconRadar02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRadar02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="radar-02-solid-sharp IconRadar02SolidSharp"
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

export const iconPackOfRadar02: TheIconSelfPack = {
  name: 'Radar02',
  StrokeRounded: IconRadar02StrokeRounded,
  DuotoneRounded: IconRadar02DuotoneRounded,
  TwotoneRounded: IconRadar02TwotoneRounded,
  SolidRounded: IconRadar02SolidRounded,
  BulkRounded: IconRadar02BulkRounded,
  StrokeSharp: IconRadar02StrokeSharp,
  SolidSharp: IconRadar02SolidSharp,
};