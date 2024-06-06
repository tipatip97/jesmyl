import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.32988 10.8464C6.49701 11.1966 5.56172 11.2999 4.66667 11.112C3.0702 10.7768 2 9.71696 2 8.05582V6.12853C2 4.12164 3.52567 2.97998 5.55556 3.00027C7.81057 3.0228 10.5 4.76372 10.5 7.50659V19.4167C10.5 19.961 10.5 20.2332 10.3969 20.4423C10.1069 21.0304 9.48561 21 8.91667 21C8.34772 21 7.72646 21.0304 7.43646 20.4423C7.33333 20.2332 7.33333 19.961 7.33333 19.4167V11.1048C7.33333 11.0161 7.33224 10.93 7.32988 10.8464ZM7.32988 10.8464L7.33333 10.845M7.32988 10.8464C7.29694 9.68177 7 8.50004 6 8.50004',
  d2: 'M16.6701 10.8464C17.503 11.1965 18.4383 11.2999 19.3333 11.112C20.9298 10.7768 22 9.71694 22 8.0558V6.12851C22 4.12356 20.3874 2.98083 18.4444 3.00024C16.1894 3.02278 13.5 4.7637 13.5 7.50656V19.4167C13.5 19.961 13.5 20.2332 13.6031 20.4423C13.8931 21.0304 14.5144 21 15.0833 21C15.6523 21 16.2735 21.0304 16.5635 20.4423C16.6667 20.2332 16.6667 19.961 16.6667 19.4167V11.1048C16.6667 11.0161 16.6678 10.93 16.6701 10.8464ZM16.6701 10.8464L16.6667 10.845M16.6701 10.8464C16.7031 9.68175 17 8.50002 18 8.50002',
  d3: 'M10.5 19.4167V7.50659C10.5 4.76372 7.81057 3.0228 5.55556 3.00027C3.52567 2.97998 2 4.12164 2 6.12853V8.05582C2 9.71696 3.0702 10.7768 4.66667 11.112C5.56172 11.2999 6.49701 11.1966 7.32988 10.8464C7.33224 10.93 7.33333 11.0161 7.33333 11.1048V19.4167C7.33333 19.961 7.33333 20.2332 7.43646 20.4423C7.72646 21.0304 8.34772 21 8.91667 21C9.48561 21 10.1069 21.0304 10.3969 20.4423C10.5 20.2332 10.5 19.961 10.5 19.4167Z',
  d4: 'M13.5 19.4167V7.50656C13.5 4.7637 16.1894 3.02278 18.4444 3.00024C20.3874 2.98083 22 4.12356 22 6.12851V8.0558C22 9.71694 20.9298 10.7768 19.3333 11.112C18.4383 11.2999 17.503 11.1965 16.6701 10.8464C16.6678 10.93 16.6667 11.0161 16.6667 11.1048V19.4167C16.6667 19.961 16.6667 20.2332 16.5635 20.4423C16.2735 21.0304 15.6523 21 15.0833 21C14.5144 21 13.8931 21.0304 13.6031 20.4423C13.5 20.2332 13.5 19.961 13.5 19.4167Z',
  d5: 'M4.56392 11.6013C5.1484 11.7241 5.74641 11.7353 6.32674 11.6458C6.5714 11.6081 6.69374 11.5892 6.76353 11.6491C6.83333 11.7089 6.83333 11.8255 6.83333 12.0585V19.4354C6.83332 19.8409 6.80342 20.2891 6.98802 20.6635C7.21103 21.1157 7.57667 21.3329 7.95026 21.4267C8.25346 21.5028 8.58548 21.5013 8.83549 21.5003H8.99785C9.24785 21.5013 9.57988 21.5028 9.88308 21.4267C10.2567 21.3329 10.6223 21.1157 10.8453 20.6635C11.0299 20.2891 11 19.8409 11 19.4354V7.50659C11 5.95726 10.2368 4.70299 9.19007 3.84636C8.15021 2.99537 6.80482 2.51272 5.56055 2.50029C4.45467 2.48924 3.44111 2.79435 2.6949 3.42142C1.93909 4.05655 1.5 4.98763 1.5 6.12853V8.05582C1.5 9.0006 1.8073 9.80354 2.36447 10.4172C2.91679 11.0256 3.68584 11.417 4.56392 11.6013Z',
  d6: 'M22.4998 6.12851C22.4998 4.97931 22.032 4.05019 21.2692 3.41982C20.5161 2.79745 19.506 2.48961 18.4393 2.50027C17.195 2.5127 15.8496 2.99535 14.8098 3.84633C13.763 4.70297 12.9998 5.95724 12.9998 7.50656V19.4354C12.9998 19.8409 12.9699 20.2891 13.1545 20.6635C13.3775 21.1157 13.7432 21.3329 14.1168 21.4267C14.42 21.5027 14.752 21.5013 15.002 21.5003H15.1644C15.4144 21.5013 15.7464 21.5027 16.0496 21.4267C16.4232 21.3329 16.7888 21.1157 17.0118 20.6635C17.1964 20.2891 17.1665 19.8409 17.1665 19.4354L17.1665 12.0585C17.1665 11.8254 17.1665 11.7089 17.2363 11.649C17.3061 11.5892 17.4284 11.608 17.6731 11.6458C18.2534 11.7352 18.8514 11.724 19.4359 11.6013C20.314 11.4169 21.0831 11.0256 21.6354 10.4172C22.1925 9.80351 22.4998 9.00058 22.4998 8.0558V6.12851Z',
  d7: 'M16.6667 8.58874V21H13.5V7.50656C13.5 4.7637 16.1894 3.02278 18.4444 3.00024C20.3874 2.98083 22 4.12356 22 6.12851V8.0558C22 9.71694 20.9298 10.7768 19.3333 11.112C18.4383 11.2999 17.4995 11.1931 16.6667 10.843',
  d8: 'M7.33333 8.58874V21H10.5V7.50656C10.5 4.7637 7.81057 3.02278 5.55556 3.00024C3.61257 2.98083 2 4.12356 2 6.12851V8.0558C2 9.71694 3.0702 10.7768 4.66667 11.112C5.56172 11.2999 6.50046 11.1931 7.33333 10.843',
  d9: 'M21.4286 3.22711C22.2498 3.90572 22.75 4.90594 22.75 6.12851V8.0558C22.75 9.05769 22.4228 9.92196 21.8206 10.5853C21.2257 11.2406 20.4055 11.6532 19.4874 11.846C18.7989 11.9905 18.0928 11.9863 17.4167 11.8524V21.75H12.75V7.50656C12.75 5.8683 13.5586 4.54736 14.6516 3.65286C15.7343 2.76684 17.1343 2.2633 18.437 2.25028C19.5512 2.23915 20.622 2.56049 21.4286 3.22711Z',
  d10: 'M2.57139 3.22711C1.75023 3.90572 1.25 4.90594 1.25 6.12851V8.0558C1.25 9.05769 1.57718 9.92196 2.17937 10.5853C2.7743 11.2406 3.59454 11.6532 4.51255 11.846C5.2011 11.9905 5.90716 11.9863 6.58333 11.8524V21.75H11.25V7.50656C11.25 5.8683 10.4414 4.54736 9.3484 3.65286C8.26572 2.76684 6.86569 2.2633 5.56305 2.25028C4.44876 2.23915 3.37803 2.56049 2.57139 3.22711Z',
};

export const IconAirpod03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-03-stroke-rounded IconAirpod03StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconAirpod03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-03-duotone-rounded IconAirpod03DuotoneRounded"
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

export const IconAirpod03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-03-twotone-rounded IconAirpod03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconAirpod03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-03-solid-rounded IconAirpod03SolidRounded"
    >
      <path 
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

export const IconAirpod03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-03-bulk-rounded IconAirpod03BulkRounded"
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

export const IconAirpod03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-03-stroke-sharp IconAirpod03StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirpod03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-03-solid-sharp IconAirpod03SolidSharp"
    >
      <path 
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

export const iconPackOfAirpod03: TheIconSelfPack = {
  name: 'Airpod03',
  StrokeRounded: IconAirpod03StrokeRounded,
  DuotoneRounded: IconAirpod03DuotoneRounded,
  TwotoneRounded: IconAirpod03TwotoneRounded,
  SolidRounded: IconAirpod03SolidRounded,
  BulkRounded: IconAirpod03BulkRounded,
  StrokeSharp: IconAirpod03StrokeSharp,
  SolidSharp: IconAirpod03SolidSharp,
};