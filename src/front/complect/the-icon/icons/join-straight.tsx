import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V17C22 15.1144 22 14.1716 21.4142 13.5858C20.8284 13 19.8856 13 18 13L15 13C13.1144 13 12.1716 13 11.5858 12.4142C11 11.8284 11 10.8856 11 9V6C11 4.11438 11 3.17157 10.4142 2.58579C9.82843 2 8.88562 2 7 2L6 2C4.11438 2 3.17157 2 2.58579 2.58579C2 3.17157 2 4.11438 2 6L2 16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22Z',
  d2: 'M22 18V17C22 15.1144 22 14.1716 21.4142 13.5858C20.8284 13 19.8856 13 18 13L15 13C13.1144 13 12.1716 13 11.5858 12.4142C11 11.8284 11 10.8856 11 9V6C11 4.11438 11 3.17157 10.4142 2.58579C9.82843 2 8.88562 2 7 2L6 2',
  d3: 'M9.29448 1.32991C9.92228 1.41432 10.4891 1.59999 10.9445 2.05546C11.4 2.51093 11.5857 3.07773 11.6701 3.70552C11.7501 4.3003 11.75 5.04951 11.75 5.94798V5.94801L11.75 9C11.75 9.96401 11.7516 10.6116 11.8165 11.0946C11.8786 11.5561 11.9858 11.7536 12.1161 11.8839C12.2464 12.0142 12.4439 12.1214 12.9054 12.1835C13.3884 12.2484 14.036 12.25 15 12.25L18.052 12.25H18.052C18.9505 12.25 19.6997 12.2499 20.2945 12.3299C20.9223 12.4143 21.4891 12.6 21.9445 13.0555C22.4 13.5109 22.5857 14.0777 22.6701 14.7055C22.7501 15.3003 22.75 16.0495 22.75 16.948V18.052C22.75 18.9505 22.7501 19.6997 22.6701 20.2945C22.5857 20.9223 22.4 21.4891 21.9445 21.9445C21.4891 22.4 20.9223 22.5857 20.2945 22.6701C19.6997 22.7501 18.9505 22.75 18.052 22.75H7.94513C6.57754 22.75 5.47522 22.75 4.60825 22.6335C3.70814 22.5125 2.95027 22.2536 2.34835 21.6517C1.74644 21.0497 1.48754 20.2919 1.36653 19.3918C1.24996 18.5248 1.24998 17.4225 1.25 16.0549L1.25 5.948V5.94797C1.24997 5.04951 1.24995 4.3003 1.32991 3.70552C1.41432 3.07773 1.59999 2.51093 2.05546 2.05546C2.51093 1.59999 3.07773 1.41432 3.70552 1.32991C4.3003 1.24995 5.0495 1.24997 5.94797 1.25H5.948H7.052H7.05203C7.9505 1.24997 8.69971 1.24995 9.29448 1.32991Z',
  d4: 'M9.29448 1.33016C9.92228 1.41456 10.4891 1.60023 10.9445 2.0557C11.4 2.51117 11.5857 3.07797 11.6701 3.70577C11.7501 4.30054 11.75 5.04975 11.75 5.94822V5.94825L11.75 9.00025C11.75 9.96426 11.7516 10.6118 11.8165 11.0949C11.8786 11.5563 11.9858 11.7538 12.1161 11.8841C12.2464 12.0144 12.4439 12.1217 12.9054 12.1837C13.3884 12.2487 14.036 12.2502 15 12.2502L18.052 12.2502H18.052C18.9505 12.2502 19.6997 12.2502 20.2945 12.3302C20.9223 12.4146 21.4891 12.6002 21.9445 13.0557C22.4 13.5112 22.5857 14.078 22.6701 14.7058C22.7501 15.3005 22.75 16.0498 22.75 16.9483V18.0522C22.75 18.9507 22.7501 19.6999 22.6701 20.2947C22.5857 20.9225 22.4 21.4893 21.9445 21.9448C21.4891 22.4003 20.9223 22.5859 20.2945 22.6703C19.6997 22.7503 18.9505 22.7503 18.052 22.7502H7.94513C6.57754 22.7503 5.47522 22.7503 4.60825 22.6337C3.70814 22.5127 2.95027 22.2538 2.34835 21.6519C1.74644 21.05 1.48754 20.2921 1.36653 19.392C1.24996 18.525 1.24998 17.4227 1.25 16.0551L1.25 5.94825V5.94822C1.24997 5.04975 1.24995 4.30054 1.32991 3.70577C1.41432 3.07797 1.59999 2.51117 2.05546 2.0557C2.51093 1.60023 3.07773 1.41456 3.70552 1.33016C4.3003 1.25019 5.0495 1.25022 5.94797 1.25024H5.948H7.052H7.05203C7.9505 1.25022 8.69971 1.25019 9.29448 1.33016Z',
  d5: 'M10.9751 1.9707H2.02171C2.01619 1.9707 2.01172 1.97517 2.01172 1.98069V21.9597C2.01172 21.9653 2.01619 21.9697 2.02171 21.9697H22.0066C22.0121 21.9697 22.0166 21.9653 22.0166 21.9597V12.9761C22.0166 12.9706 22.0121 12.9661 22.0066 12.9661H10.9851V1.98069C10.9851 1.97517 10.9806 1.9707 10.9751 1.9707Z',
  d6: 'M1.25 1.25024H11.75V12.2502H22.75V22.75H1.25V1.25024Z',
} as const;

export const IconJoinStraightStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="join-straight-stroke-rounded IconJoinStraightStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJoinStraightDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="join-straight-duotone-rounded IconJoinStraightDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconJoinStraightTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="join-straight-twotone-rounded IconJoinStraightTwotoneRounded"
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

export const IconJoinStraightSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="join-straight-solid-rounded IconJoinStraightSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJoinStraightBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="join-straight-bulk-rounded IconJoinStraightBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJoinStraightStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="join-straight-stroke-sharp IconJoinStraightStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconJoinStraightSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="join-straight-solid-sharp IconJoinStraightSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfJoinStraight: TheIconSelfPack = {
  name: 'JoinStraight',
  StrokeRounded: IconJoinStraightStrokeRounded,
  DuotoneRounded: IconJoinStraightDuotoneRounded,
  TwotoneRounded: IconJoinStraightTwotoneRounded,
  SolidRounded: IconJoinStraightSolidRounded,
  BulkRounded: IconJoinStraightBulkRounded,
  StrokeSharp: IconJoinStraightStrokeSharp,
  SolidSharp: IconJoinStraightSolidSharp,
};