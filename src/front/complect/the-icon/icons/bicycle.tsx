import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 19.9984C8.20914 19.9984 10 18.2109 10 16.006C10 13.8011 8.20914 12.0137 6 12.0137C3.79086 12.0137 2 13.8011 2 16.006C2 18.2109 3.79086 19.9984 6 19.9984Z',
  d2: 'M18 19.9984C20.2091 19.9984 22 18.2109 22 16.006C22 13.8011 20.2091 12.0137 18 12.0137C15.7909 12.0137 14 13.8011 14 16.006C14 18.2109 15.7909 19.9984 18 19.9984Z',
  d3: 'M6 16.0059H10.3706C10.7302 16.0059 11.0622 15.8132 11.2399 15.5011L15.5 8.02124',
  d4: 'M12 13.0117L7 7.02319M7 7.02319H5M7 7.02319H9',
  d5: 'M18.0531 15.9707L14.8057 4.03072C16.2565 3.96012 19.3585 3.8306 19.9908 6.20978',
  d6: 'M6.00098 20C8.21012 20 10.001 18.2091 10.001 16C10.001 13.7909 8.21012 12 6.00098 12C3.79184 12 2.00098 13.7909 2.00098 16C2.00098 18.2091 3.79184 20 6.00098 20Z',
  d7: 'M18.001 20C20.2101 20 22.001 18.2091 22.001 16C22.001 13.7909 20.2101 12 18.001 12C15.7918 12 14.001 13.7909 14.001 16C14.001 18.2091 15.7918 20 18.001 20Z',
  d8: 'M6.00098 16H10.3716C10.7312 16 11.0632 15.8069 11.2409 15.4942L15.501 8',
  d9: 'M12.001 13L7.00098 7M7.00098 7H5.00098M7.00098 7H9.00098',
  d10: 'M18.054 15.9709L14.8066 4.03097C16.2574 3.96037 19.3594 3.83085 19.9917 6.21003',
  d11: 'M6 19.999C8.20914 19.999 10 18.2082 10 15.999C10 13.7899 8.20914 11.999 6 11.999C3.79086 11.999 2 13.7899 2 15.999C2 18.2082 3.79086 19.999 6 19.999Z',
  d12: 'M18 19.999C20.2091 19.999 22 18.2082 22 15.999C22 13.7899 20.2091 11.999 18 11.999C15.7909 11.999 14 13.7899 14 15.999C14 18.2082 15.7909 19.999 18 19.999Z',
  d13: 'M6 15.999H10.3706C10.7302 15.999 11.0622 15.8059 11.2399 15.4932L15.5 7.99902',
  d14: 'M12 12.999L7 6.99902M7 6.99902H5M7 6.99902H9',
  d15: 'M5 6.99902H7H9',
  d16: 'M18.0736 15.9699L14.8262 4.02999C16.277 3.95939 19.379 3.82987 20.0113 6.20904',
  d17: 'M5.5 13C3.84315 13 2.5 14.3431 2.5 16C2.5 17.6569 3.84315 19 5.5 19C7.15685 19 8.5 17.6569 8.5 16C8.5 14.3431 7.15685 13 5.5 13ZM0.5 16C0.5 13.2386 2.73858 11 5.5 11C8.26142 11 10.5 13.2386 10.5 16C10.5 18.7614 8.26142 21 5.5 21C2.73858 21 0.5 18.7614 0.5 16Z',
  d18: 'M18.5 13C16.8431 13 15.5 14.3431 15.5 16C15.5 17.6569 16.8431 19 18.5 19C20.1569 19 21.5 17.6569 21.5 16C21.5 14.3431 20.1569 13 18.5 13ZM13.5 16C13.5 13.2386 15.7386 11 18.5 11C21.2614 11 23.5 13.2386 23.5 16C23.5 18.7614 21.2614 21 18.5 21C15.7386 21 13.5 18.7614 13.5 16Z',
  d19: 'M15.8126 6.60023C16.2923 6.87381 16.4595 7.48452 16.1859 7.96428L11.6093 15.9901C11.6092 15.9902 11.6094 15.9899 11.6093 15.9901C11.2537 16.6151 10.5897 17.0017 9.87056 17.0017H5.5C4.94772 17.0017 4.5 16.554 4.5 16.0017C4.5 15.4494 4.94772 15.0017 5.5 15.0017L9.87056 15.0017L14.4485 6.97356C14.7221 6.4938 15.3328 6.32665 15.8126 6.60023Z',
  d20: 'M3.5 7C3.5 6.44772 3.94772 6 4.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7C9.5 7.50883 9.11997 7.9289 8.62825 7.99185L12.2682 12.3598C12.6218 12.7841 12.5645 13.4147 12.1402 13.7682C11.7159 14.1218 11.0853 14.0645 10.7318 13.6402L6.03163 8H4.5C3.94772 8 3.5 7.55228 3.5 7Z',
  d21: 'M13.8828 3.52466C14.3161 3.05074 14.9321 3 15.2941 3C16.1844 3 17.2619 3.05235 18.215 3.43536C19.2327 3.84431 20.0875 4.62352 20.4618 5.95145C20.6117 6.48301 20.3023 7.03541 19.7707 7.18526C19.2391 7.33511 18.6867 7.02567 18.5369 6.4941C18.3488 5.82698 17.9761 5.49481 17.4693 5.29113C16.9777 5.09361 16.3585 5.02048 15.6477 5.0039L19.4666 15.6627C19.6529 16.1826 19.3824 16.7551 18.8625 16.9414C18.3426 17.1277 17.7701 16.8572 17.5838 16.3373L13.609 5.24352C13.5992 5.21618 13.5906 5.18843 13.5833 5.16034C13.4667 4.71664 13.4027 4.04977 13.8828 3.52466Z',
  d22: 'M16.1859 7.96428C16.4595 7.48452 16.2923 6.87381 15.8126 6.60023C15.3328 6.32665 14.7221 6.4938 14.4485 6.97356L11.7389 11.7254L8.63467 8.00034H6.03125L10.6811 13.5802L9.87056 15.0017L5.5 15.0017C4.94772 15.0017 4.5 15.4494 4.5 16.0017C4.5 16.554 4.94772 17.0017 5.5 17.0017H9.87056C10.5897 17.0017 11.2537 16.6151 11.6093 15.9901L16.1859 7.96428Z',
  d23: 'M3.5 7C3.5 6.44772 3.94772 6 4.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7C9.5 7.50883 9.11997 7.9289 8.62825 7.99185L6.03163 8H4.5C3.94772 8 3.5 7.55228 3.5 7Z',
  d24: 'M6 20.0078C8.20914 20.0078 10 18.2161 10 16.0059C10 13.7956 8.20914 12.0039 6 12.0039C3.79086 12.0039 2 13.7956 2 16.0059C2 18.2161 3.79086 20.0078 6 20.0078Z',
  d25: 'M18 20.0078C20.2091 20.0078 22 18.2161 22 16.0059C22 13.7956 20.2091 12.0039 18 12.0039C15.7909 12.0039 14 13.7956 14 16.0059C14 18.2161 15.7909 20.0078 18 20.0078Z',
  d26: 'M6 16.0059H11L16 8.00195',
  d27: 'M12.5 13.5046L7 7.00146M7 7.00146H5M7 7.00146H10',
  d28: 'M18.0425 16.0122L14.999 4.0123C16.4289 4.0126 19.3744 3.84238 20.0184 6.23955',
  d29: 'M15.0002 3H13.7168L14.9325 7.8215L12.4143 11.8506L9.15611 8H10V6H5V8H6.5362L11.3012 13.6314L10.7668 14.4865C10.1255 12.4649 8.23385 11 6 11C3.23858 11 1 13.2386 1 16C1 18.7614 3.23858 21 6 21C8.41888 21 10.4366 19.2823 10.8999 17.0002H11.5542L13.387 14.0677C13.1377 14.6622 13 15.315 13 16C13 18.7614 15.2386 21 18 21C20.7614 21 23 18.7614 23 16C23 13.2386 20.7614 11 18 11C17.9322 11 17.8646 11.0014 17.7975 11.004L16.292 5.03322C16.9351 5.07327 17.4655 5.15492 17.8936 5.30614C18.4962 5.51903 18.8559 5.84997 19.0374 6.4941L20.9624 5.95145C20.5816 4.60053 19.6914 3.82009 18.5598 3.42035C17.5123 3.05033 16.2437 3 15.0002 3ZM16.3609 13.487L17.0562 16.2445L18.9955 15.7555L18.3046 13.0153C19.8184 13.1679 21 14.446 21 16C21 17.6569 19.6569 19 18 19C16.3431 19 15 17.6569 15 16C15 14.948 15.5415 14.0225 16.3609 13.487ZM15.8554 11.482L15.6104 10.5104L14.2377 12.7068C14.6852 12.1959 15.2351 11.777 15.8554 11.482ZM8.82937 15.0002H6V17.0002H8.82922C8.41732 18.1653 7.30614 19 6 19C4.34315 19 3 17.6569 3 16C3 14.3431 4.34315 13 6 13C7.3063 13 8.41759 13.8349 8.82937 15.0002Z',
};

export const IconBicycleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bicycle-stroke-rounded IconBicycleStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBicycleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bicycle-duotone-rounded IconBicycleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBicycleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bicycle-twotone-rounded IconBicycleTwotoneRounded"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBicycleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bicycle-solid-rounded IconBicycleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBicycleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bicycle-bulk-rounded IconBicycleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBicycleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bicycle-stroke-sharp IconBicycleStrokeSharp"
    >
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBicycleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bicycle-solid-sharp IconBicycleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBicycle: TheIconSelfPack = {
  name: 'Bicycle',
  StrokeRounded: IconBicycleStrokeRounded,
  DuotoneRounded: IconBicycleDuotoneRounded,
  TwotoneRounded: IconBicycleTwotoneRounded,
  SolidRounded: IconBicycleSolidRounded,
  BulkRounded: IconBicycleBulkRounded,
  StrokeSharp: IconBicycleStrokeSharp,
  SolidSharp: IconBicycleSolidSharp,
};