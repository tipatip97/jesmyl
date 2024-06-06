import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591',
  d2: 'M11 20H17',
  d3: 'M6.98023 14.2163L15.2141 5.98242L18.0176 8.78594L9.78375 17.0198C8.73844 18.0651 8.21579 18.5878 7.57889 18.9437C6.94199 19.2996 5.43809 19.6576 4 20C4.3424 18.5619 4.70047 17.058 5.05637 16.4211C5.41226 15.7842 5.93493 15.2616 6.98023 14.2163Z',
  d4: 'M10 19.75C10 19.1977 10.4477 18.75 11 18.75H17C17.5523 18.75 18 19.1977 18 19.75C18 20.3023 17.5523 20.75 17 20.75H11C10.4477 20.75 10 20.3023 10 19.75Z',
  d5: 'M14.1538 5.98203L6.36945 13.7664C5.40084 14.7347 4.80884 15.3266 4.40167 16.0553C4.17455 16.4617 3.97615 17.0782 3.8006 17.709C3.62 18.358 3.44221 19.1047 3.27249 19.8175L3.27041 19.8263C3.21009 20.0796 3.28552 20.3462 3.46969 20.5303C3.65385 20.7145 3.92037 20.7899 4.17373 20.7296L4.18242 20.7275L4.18262 20.7275L4.18294 20.7274C4.8956 20.5577 5.64214 20.38 6.29098 20.1994C6.92183 20.0239 7.53832 19.8255 7.94476 19.5983C8.67342 19.1912 9.26526 18.5992 10.2337 17.6306L18.018 9.84622L14.1538 5.98203ZM19.0786 8.78556L19.9497 7.91448C21.0168 6.84742 21.0168 5.11736 19.9497 4.0503C18.8827 2.98323 17.1526 2.98323 16.0855 4.0503L15.2145 4.92137L19.0786 8.78556Z',
  d6: 'M14.1537 5.98242L6.36945 13.7666C5.40084 14.735 4.80884 15.3269 4.40167 16.0555C4.17455 16.462 3.97615 17.0785 3.8006 17.7093C3.62 18.3583 3.44221 19.105 3.27249 19.8178L3.27041 19.8266C3.21009 20.0799 3.28552 20.3464 3.46969 20.5306C3.65385 20.7148 3.92037 20.7902 4.17373 20.7299L4.18242 20.7278C4.89509 20.5581 5.64214 20.3802 6.29098 20.1997C6.92183 20.0241 7.53832 19.8257 7.94476 19.5986C8.67342 19.1914 9.26526 18.5994 10.2337 17.6308L18.0179 9.84661L14.1537 5.98242Z',
  d7: 'M19.0781 8.78568L19.9492 7.91448C21.0163 6.84742 21.0163 5.11736 19.9492 4.0503C18.8822 2.98323 17.1521 2.98323 16.0851 4.0503L15.2139 4.9215L19.0781 8.78568Z',
  d8: 'M14 7L5 16L4 20L8 19L17 10M14 7L17 4L20 7L17 10M14 7L17 10',
  d9: 'M11 20H18',
  d10: 'M17.5303 3.46967C17.2375 3.17678 16.7626 3.17678 16.4697 3.46967L14.0005 5.93886L18.0612 9.99952L20.5303 7.53033C20.8232 7.23744 20.8232 6.76256 20.5303 6.46967L17.5303 3.46967ZM17.0005 11.0602L12.9398 6.99952L4.46969 15.4697C4.37357 15.5658 4.30538 15.6862 4.27241 15.8181L3.27241 19.8181C3.20851 20.0737 3.2834 20.344 3.46969 20.5303C3.65597 20.7166 3.92634 20.7915 4.18192 20.7276L8.18192 19.7276C8.31379 19.6946 8.43423 19.6264 8.53035 19.5303L17.0005 11.0602Z',
  d11: 'M18 20.75H11V18.75H18V20.75Z',
};

export const IconPencilEdit01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-edit-01-stroke-rounded IconPencilEdit01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPencilEdit01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-edit-01-duotone-rounded IconPencilEdit01DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPencilEdit01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-edit-01-twotone-rounded IconPencilEdit01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPencilEdit01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-edit-01-solid-rounded IconPencilEdit01SolidRounded"
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

export const IconPencilEdit01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-edit-01-bulk-rounded IconPencilEdit01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconPencilEdit01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-edit-01-stroke-sharp IconPencilEdit01StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconPencilEdit01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-edit-01-solid-sharp IconPencilEdit01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPencilEdit01: TheIconSelfPack = {
  name: 'PencilEdit01',
  StrokeRounded: IconPencilEdit01StrokeRounded,
  DuotoneRounded: IconPencilEdit01DuotoneRounded,
  TwotoneRounded: IconPencilEdit01TwotoneRounded,
  SolidRounded: IconPencilEdit01SolidRounded,
  BulkRounded: IconPencilEdit01BulkRounded,
  StrokeSharp: IconPencilEdit01StrokeSharp,
  SolidSharp: IconPencilEdit01SolidSharp,
};