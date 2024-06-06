import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z',
  d2: 'M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999',
  d3: 'M16.0549 8.25C17.4225 8.24998 18.5248 8.24996 19.3918 8.36652C20.2919 8.48754 21.0497 8.74643 21.6517 9.34835C22.2536 9.95027 22.5125 10.7081 22.6335 11.6083C22.75 12.4752 22.75 13.5775 22.75 14.9451V14.9451V16.0549V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6517C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.75 17.4225 22.75 16.0549 22.75H16.0549H14.9451H14.9451C13.5775 22.75 12.4752 22.75 11.6082 22.6335C10.7081 22.5125 9.95027 22.2536 9.34835 21.6516C8.74643 21.0497 8.48754 20.2919 8.36652 19.3918C8.24996 18.5248 8.24998 17.4225 8.25 16.0549V16.0549V14.9451V14.9451C8.24998 13.5775 8.24996 12.4752 8.36652 11.6082C8.48754 10.7081 8.74643 9.95027 9.34835 9.34835C9.95027 8.74643 10.7081 8.48754 11.6083 8.36652C12.4752 8.24996 13.5775 8.24998 14.9451 8.25H14.9451H16.0549H16.0549Z',
  d4: 'M6.75 14.8569C6.74991 13.5627 6.74983 12.3758 6.8799 11.4084C7.0232 10.3425 7.36034 9.21504 8.28769 8.28769C9.21504 7.36034 10.3425 7.0232 11.4084 6.8799C12.3758 6.74983 13.5627 6.74991 14.8569 6.75L17.0931 6.75C17.3891 6.75 17.5371 6.75 17.6261 6.65419C17.7151 6.55838 17.7045 6.4142 17.6833 6.12584C17.6648 5.87546 17.6412 5.63892 17.6111 5.41544C17.4818 4.45589 17.2232 3.6585 16.6718 2.98663C16.4744 2.74612 16.2539 2.52558 16.0134 2.3282C15.3044 1.74638 14.4557 1.49055 13.4248 1.36868C12.4205 1.24998 11.1512 1.24999 9.54893 1.25H9.45109C7.84883 1.24999 6.57947 1.24998 5.57525 1.36868C4.54428 1.49054 3.69558 1.74638 2.98663 2.3282C2.74612 2.52558 2.52558 2.74612 2.3282 2.98663C1.74638 3.69558 1.49055 4.54428 1.36868 5.57525C1.24998 6.57947 1.24999 7.84882 1.25 9.45108V9.54891C1.24999 11.1512 1.24998 12.4205 1.36868 13.4247C1.49054 14.4557 1.74638 15.3044 2.3282 16.0134C2.52558 16.2539 2.74612 16.4744 2.98663 16.6718C3.6585 17.2232 4.45589 17.4818 5.41544 17.6111C5.63892 17.6412 5.87546 17.6648 6.12584 17.6833C6.4142 17.7045 6.55838 17.7151 6.65419 17.6261C6.75 17.5371 6.75 17.3891 6.75 17.0931V14.8569Z',
  d5: 'M9 22L9 9L22 9.00846L22 22H9Z',
  d6: 'M17 9V2.00977L2 2L2 17H9',
  d7: 'M8.46984 8.4695C8.6106 8.32883 8.80149 8.24987 9.00049 8.25L22.0005 8.25846C22.4145 8.25873 22.75 8.59444 22.75 9.00846L22.75 22C22.75 22.4142 22.4142 22.75 22 22.75H9C8.80109 22.75 8.61032 22.671 8.46967 22.5303C8.32902 22.3897 8.25 22.1989 8.25 22V9C8.25 8.801 8.32909 8.61016 8.46984 8.4695Z',
  d8: 'M1.46984 1.4695C1.6106 1.32883 1.80149 1.24987 2.00049 1.25L17.0005 1.25977C17.4145 1.26004 17.75 1.59574 17.75 2.00977V6.75277L8.99854 6.75846C7.75647 6.75927 6.75 7.7664 6.75 9.00846V17.75H2C1.80109 17.75 1.61032 17.671 1.46967 17.5303C1.32902 17.3897 1.25 17.1989 1.25 17V2C1.25 1.801 1.32909 1.61016 1.46984 1.4695Z',
};

export const IconCopy01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="copy-01-stroke-rounded IconCopy01StrokeRounded"
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

export const IconCopy01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="copy-01-duotone-rounded IconCopy01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconCopy01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="copy-01-twotone-rounded IconCopy01TwotoneRounded"
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

export const IconCopy01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="copy-01-solid-rounded IconCopy01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCopy01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="copy-01-bulk-rounded IconCopy01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCopy01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="copy-01-stroke-sharp IconCopy01StrokeSharp"
    >
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

export const IconCopy01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="copy-01-solid-sharp IconCopy01SolidSharp"
    >
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

export const iconPackOfCopy01: TheIconSelfPack = {
  name: 'Copy01',
  StrokeRounded: IconCopy01StrokeRounded,
  DuotoneRounded: IconCopy01DuotoneRounded,
  TwotoneRounded: IconCopy01TwotoneRounded,
  SolidRounded: IconCopy01SolidRounded,
  BulkRounded: IconCopy01BulkRounded,
  StrokeSharp: IconCopy01StrokeSharp,
  SolidSharp: IconCopy01SolidSharp,
};