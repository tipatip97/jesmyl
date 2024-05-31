import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 15V7C2 5.11438 2 4.17157 2.58579 3.58579C3.17157 3 4.11438 3 6 3H18C19.8856 3 20.8284 3 21.4142 3.58579C22 4.17157 22 5.11438 22 7V15C22 16.8856 22 17.8284 21.4142 18.4142C20.8284 19 19.8856 19 18 19H6C4.11438 19 3.17157 19 2.58579 18.4142C2 17.8284 2 16.8856 2 15Z',
  d2: 'M19 6.00895V6M19 9.00447V8.99553M19 12V11.9911',
  d3: 'M5 14V8C5 7.05719 5 6.58579 5.29289 6.29289C5.58579 6 6.05719 6 7 6H14C14.9428 6 15.4142 6 15.7071 6.29289C16 6.58579 16 7.05719 16 8V14C16 14.9428 16 15.4142 15.7071 15.7071C15.4142 16 14.9428 16 14 16H7C6.05719 16 5.58579 16 5.29289 15.7071C5 15.4142 5 14.9428 5 14Z',
  d4: 'M5 19V21M19 19V21',
  d5: 'M2 7V15C2 16.8856 2 17.8284 2.58579 18.4142C3.17157 19 4.11438 19 6 19H18C19.8856 19 20.8284 19 21.4142 18.4142C22 17.8284 22 16.8856 22 15V7C22 5.11438 22 4.17157 21.4142 3.58579C20.8284 3 19.8856 3 18 3H6C4.11438 3 3.17157 3 2.58579 3.58579C2 4.17157 2 5.11438 2 7ZM5 8V14C5 14.9428 5 15.4142 5.29289 15.7071C5.58579 16 6.05719 16 7 16H14C14.9428 16 15.4142 16 15.7071 15.7071C16 15.4142 16 14.9428 16 14V8C16 7.05719 16 6.58579 15.7071 6.29289C15.4142 6 14.9428 6 14 6H7C6.05719 6 5.58579 6 5.29289 6.29289C5 6.58579 5 7.05719 5 8Z',
  d6: 'M18.052 2.25C18.9505 2.24997 19.6997 2.24995 20.2945 2.32991C20.9223 2.41432 21.4891 2.59999 21.9445 3.05546C22.4 3.51093 22.5857 4.07773 22.6701 4.70552C22.7501 5.30031 22.75 6.04953 22.75 6.94801V15.052C22.75 15.9505 22.7501 16.6997 22.6701 17.2945C22.5857 17.9223 22.4 18.4891 21.9445 18.9445C21.4891 19.4 20.9223 19.5857 20.2945 19.6701C19.6997 19.7501 18.9505 19.75 18.052 19.75H5.94801C5.04953 19.75 4.30031 19.7501 3.70552 19.6701C3.07773 19.5857 2.51093 19.4 2.05546 18.9445C1.59999 18.4891 1.41432 17.9223 1.32991 17.2945C1.24995 16.6997 1.24997 15.9505 1.25 15.052V15.052V6.948V6.94797C1.24997 6.04951 1.24995 5.3003 1.32991 4.70552C1.41432 4.07773 1.59999 3.51093 2.05546 3.05546C2.51093 2.59999 3.07773 2.41432 3.70552 2.32991C4.3003 2.24995 5.04951 2.24997 5.94797 2.25H5.948H18.052H18.052ZM19 6C19.5523 6 20 6.44772 20 7V7.00895C20 7.56123 19.5523 8.00895 19 8.00895C18.4477 8.00895 18 7.56123 18 7.00895V7C18 6.44772 18.4477 6 19 6ZM19 8.99553C19.5523 8.99553 20 9.44324 20 9.99553V10.0045C20 10.5568 19.5523 11.0045 19 11.0045C18.4477 11.0045 18 10.5568 18 10.0045V9.99553C18 9.44324 18.4477 8.99553 19 8.99553ZM19 11.9911C19.5523 11.9911 20 12.4388 20 12.9911V13C20 13.5523 19.5523 14 19 14C18.4477 14 18 13.5523 18 13V12.9911C18 12.4388 18.4477 11.9911 19 11.9911ZM4 8V14C4 14.9428 4 15.4142 4.29289 15.7071C4.58579 16 5.05719 16 6 16H13C13.9428 16 14.4142 16 14.7071 15.7071C15 15.4142 15 14.9428 15 14V8C15 7.05719 15 6.58579 14.7071 6.29289C14.4142 6 13.9428 6 13 6H6C5.05719 6 4.58579 6 4.29289 6.29289C4 6.58579 4 7.05719 4 8Z',
  d7: 'M5 17.75C5.55228 17.75 6 18.1977 6 18.75V20.75C6 21.3023 5.55228 21.75 5 21.75C4.44772 21.75 4 21.3023 4 20.75V18.75C4 18.1977 4.44772 17.75 5 17.75ZM19 17.75C19.5523 17.75 20 18.1977 20 18.75V20.75C20 21.3023 19.5523 21.75 19 21.75C18.4477 21.75 18 21.3023 18 20.75V18.75C18 18.1977 18.4477 17.75 19 17.75Z',
  d8: 'M4 20.7507V19.7031C4.54159 19.7508 5.19195 19.7507 5.94801 19.7507H6H18H18.052C18.8081 19.7507 19.4584 19.7508 20 19.7031V20.7507C20 21.303 19.5523 21.7507 19 21.7507C18.4477 21.7507 18 21.303 18 20.7507V19.7507H6V20.7507C6 21.303 5.55228 21.7507 5 21.7507C4.44772 21.7507 4 21.303 4 20.7507Z',
  d9: 'M18.052 2.25C18.9505 2.24997 19.6997 2.24995 20.2945 2.32991C20.9223 2.41432 21.4891 2.59999 21.9445 3.05546C22.4 3.51093 22.5857 4.07773 22.6701 4.70552C22.7501 5.30031 22.75 6.04953 22.75 6.94801V15.052C22.75 15.9505 22.7501 16.6997 22.6701 17.2945C22.5857 17.9223 22.4 18.4891 21.9445 18.9445C21.4891 19.4 20.9223 19.5857 20.2945 19.6701C19.6997 19.7501 18.9505 19.75 18.052 19.75H5.94801C5.04953 19.75 4.30031 19.7501 3.70552 19.6701C3.07773 19.5857 2.51093 19.4 2.05546 18.9445C1.59999 18.4891 1.41432 17.9223 1.32991 17.2945C1.24995 16.6997 1.24997 15.9505 1.25 15.052V15.052V6.948V6.94797C1.24997 6.04951 1.24995 5.3003 1.32991 4.70552C1.41432 4.07773 1.59999 3.51093 2.05546 3.05546C2.51093 2.59999 3.07773 2.41432 3.70552 2.32991C4.3003 2.24995 5.04951 2.24997 5.94797 2.25H5.948H18.052H18.052Z',
  d10: 'M19 6C19.5523 6 20 6.44772 20 7V7.00895C20 7.56123 19.5523 8.00895 19 8.00895C18.4477 8.00895 18 7.56123 18 7.00895V7C18 6.44772 18.4477 6 19 6ZM19 8.99553C19.5523 8.99553 20 9.44324 20 9.99553V10.0045C20 10.5568 19.5523 11.0045 19 11.0045C18.4477 11.0045 18 10.5568 18 10.0045V9.99553C18 9.44324 18.4477 8.99553 19 8.99553ZM19 11.9911C19.5523 11.9911 20 12.4388 20 12.9911V13C20 13.5523 19.5523 14 19 14C18.4477 14 18 13.5523 18 13V12.9911C18 12.4388 18.4477 11.9911 19 11.9911Z',
  d11: 'M4 14V8C4 7.05719 4 6.58579 4.29289 6.29289C4.58579 6 5.05719 6 6 6H13C13.9428 6 14.4142 6 14.7071 6.29289C15 6.58579 15 7.05719 15 8V14C15 14.9428 15 15.4142 14.7071 15.7071C14.4142 16 13.9428 16 13 16H6C5.05719 16 4.58579 16 4.29289 15.7071C4 15.4142 4 14.9428 4 14Z',
  d12: 'M22 3H2V18H22V3Z',
  d13: 'M16 6H5V15H16V6Z',
  d14: 'M5 18V21M19 18V21',
  d15: 'M1.25 3.375C1.25 2.96079 1.58579 2.625 2 2.625H22C22.4142 2.625 22.75 2.96079 22.75 3.375V18.375C22.75 18.7892 22.4142 19.125 22 19.125H2C1.58579 19.125 1.25 18.7892 1.25 18.375V3.375ZM16 6.375H5V15.375H16V6.375ZM20 8.38395V6.375H18V8.38395H20ZM20 11.3795V9.37053H18V11.3795H20ZM20 14.375V12.3661H18V14.375H20Z',
  d16: 'M4 21.375V18.375H6V21.375H4ZM18 21.375V18.375H20V21.375H18Z',
} as const;

export const IconMicrowaveStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="microwave-stroke-rounded IconMicrowaveStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMicrowaveDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="microwave-duotone-rounded IconMicrowaveDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconMicrowaveTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="microwave-twotone-rounded IconMicrowaveTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMicrowaveSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="microwave-solid-rounded IconMicrowaveSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMicrowaveBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="microwave-bulk-rounded IconMicrowaveBulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMicrowaveStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="microwave-stroke-sharp IconMicrowaveStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMicrowaveSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="microwave-solid-sharp IconMicrowaveSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMicrowave: TheIconSelfPack = {
  name: 'Microwave',
  StrokeRounded: IconMicrowaveStrokeRounded,
  DuotoneRounded: IconMicrowaveDuotoneRounded,
  TwotoneRounded: IconMicrowaveTwotoneRounded,
  SolidRounded: IconMicrowaveSolidRounded,
  BulkRounded: IconMicrowaveBulkRounded,
  StrokeSharp: IconMicrowaveStrokeSharp,
  SolidSharp: IconMicrowaveSolidSharp,
};