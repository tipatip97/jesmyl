import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 14.8135V9.18646C14 6.04126 14 4.46866 13.0747 4.0773C12.1494 3.68593 11.0603 4.79793 8.88232 7.02192C7.75439 8.17365 7.11085 8.42869 5.50604 8.42869C4.10257 8.42869 3.40084 8.42869 2.89675 8.77262C1.85035 9.48655 2.00852 10.882 2.00852 12C2.00852 13.118 1.85035 14.5134 2.89675 15.2274C3.40084 15.5713 4.10257 15.5713 5.50604 15.5713C7.11085 15.5713 7.75439 15.8264 8.88232 16.9781C11.0603 19.2021 12.1494 20.3141 13.0747 19.9227C14 19.5313 14 17.9587 14 14.8135Z',
  d2: 'M17 12H22M19.5 14.5L19.5 9.5',
  d3: 'M14 14.8135V9.18646C14 6.04126 14 4.46866 13.0747 4.0773C12.1494 3.68593 11.0603 4.79793 8.88232 7.02192C7.75439 8.17365 7.11085 8.42869 5.50604 8.42869C4.10257 8.42869 3.40084 8.42869 2.89675 8.77262C1.85035 9.48655 2.00852 10.882 2.00852 12C2.00852 13.118 1.85035 14.5134 2.89675 15.2274C3.40084 15.5713 4.10257 15.5713 5.50604 15.5713C7.11085 15.5713 7.75439 15.8264 8.88232 16.9781C11.0604 19.2021 12.1494 20.3141 13.0747 19.9227C14 19.5313 14 17.9587 14 14.8135Z',
  d4: 'M10.9916 3.9756C11.6784 3.44801 12.4957 3.01957 13.367 3.38808C14.2302 3.75318 14.5076 4.63267 14.6274 5.49785C14.7502 6.38459 14.7502 7.60557 14.7502 9.12365V14.8794C14.7502 16.3975 14.7502 17.6185 14.6274 18.5052C14.5076 19.3704 14.2302 20.2499 13.367 20.615C12.4957 20.9835 11.6784 20.5551 10.9916 20.0275C10.2892 19.488 9.3966 18.5765 8.34667 17.5044L8.34663 17.5044C7.80717 16.9535 7.44921 16.6873 7.08663 16.5374C6.72221 16.3868 6.27914 16.3229 5.50619 16.3229C4.83768 16.3229 4.23963 16.3229 3.78679 16.2758C3.31184 16.2265 2.87088 16.1191 2.47421 15.8485C1.7184 15.3328 1.42917 14.5777 1.31957 13.8838C1.23785 13.3663 1.24723 12.7981 1.25479 12.3405V11.6626C1.24723 11.205 1.23785 10.6368 1.31957 10.1193C1.42917 9.42536 1.7184 8.67029 2.47421 8.15462C2.87088 7.88398 3.31184 7.77657 3.78679 7.72723C4.23963 7.68019 4.83768 7.68021 5.50619 7.68023C6.27914 7.68023 6.72221 7.61628 7.08663 7.46563C7.44922 7.31574 7.80717 7.04954 8.34663 6.49869L8.34664 6.49869C9.39659 5.42655 10.2892 4.51511 10.9916 3.9756Z',
  d5: 'M19.5 8.5C20.0523 8.5 20.5 8.94772 20.5 9.5V11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H20.5V14.5C20.5 15.0523 20.0523 15.5 19.5 15.5C18.9477 15.5 18.5 15.0523 18.5 14.5V13H17C16.4477 13 16 12.5523 16 12C16 11.4477 16.4477 11 17 11H18.5L18.5 9.5C18.5 8.94772 18.9477 8.5 19.5 8.5Z',
  d6: 'M17 12H22M19.5 14.5V9.5',
  d7: 'M2.07215 15.5133L7.00159 15.4856L13.9512 19.9898C14.0176 20.0336 13.994 19.9419 13.994 19.8623V12.0055V4.13688C13.994 4.0573 14.0176 3.96563 13.9512 4.00936L7.00159 8.51358L2.07215 8.48592C2.01701 8.48592 2.00195 8.52874 2.00195 8.58397V12.0025V15.4152C2.00195 15.4704 2.01701 15.5133 2.07215 15.5133Z',
  d8: 'M14.3587 3.34171C14.5995 3.47317 14.7493 3.72564 14.7493 4V20C14.7493 20.2744 14.5995 20.5268 14.3587 20.6583C14.1179 20.7898 13.8245 20.7792 13.5937 20.6309L6.77971 16.25H2C1.58579 16.25 1.25 15.9142 1.25 15.5V8.5C1.25 8.08579 1.58579 7.75 2 7.75H6.77971L13.5937 3.36914C13.8245 3.22076 14.1179 3.21024 14.3587 3.34171Z',
  d9: 'M20.75 15H18.75L18.75 13H16.75V11H18.75L18.75 9H20.75V11H22.75V13H20.75V15Z',
} as const;

export const IconVolumeUpStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-up-stroke-rounded IconVolumeUpStrokeRounded"
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

export const IconVolumeUpDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-up-duotone-rounded IconVolumeUpDuotoneRounded"
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

export const IconVolumeUpTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-up-twotone-rounded IconVolumeUpTwotoneRounded"
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

export const IconVolumeUpSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-up-solid-rounded IconVolumeUpSolidRounded"
    >
      <path 
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

export const IconVolumeUpBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-up-bulk-rounded IconVolumeUpBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconVolumeUpStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-up-stroke-sharp IconVolumeUpStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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

export const IconVolumeUpSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-up-solid-sharp IconVolumeUpSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfVolumeUp: TheIconSelfPack = {
  name: 'VolumeUp',
  StrokeRounded: IconVolumeUpStrokeRounded,
  DuotoneRounded: IconVolumeUpDuotoneRounded,
  TwotoneRounded: IconVolumeUpTwotoneRounded,
  SolidRounded: IconVolumeUpSolidRounded,
  BulkRounded: IconVolumeUpBulkRounded,
  StrokeSharp: IconVolumeUpStrokeSharp,
  SolidSharp: IconVolumeUpSolidSharp,
};