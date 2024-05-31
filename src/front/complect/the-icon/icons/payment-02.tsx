import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 3.75C1.58579 3.75 1.25 4.08579 1.25 4.5C1.25 4.91421 1.58579 5.25 2 5.25V3.75ZM10.8787 5.37868L10.3483 5.90901L10.3483 5.90901L10.8787 5.37868ZM13.4697 9.03033C13.7626 9.32322 14.2374 9.32322 14.5303 9.03033C14.8232 8.73744 14.8232 8.26256 14.5303 7.96967L13.4697 9.03033ZM2 5.25H8.75736V3.75H2V5.25ZM10.3483 5.90901L13.4697 9.03033L14.5303 7.96967L11.409 4.84835L10.3483 5.90901ZM8.75736 5.25C9.3541 5.25 9.92639 5.48705 10.3483 5.90901L11.409 4.84835C10.7057 4.14509 9.75192 3.75 8.75736 3.75V5.25Z',
  d2: 'M5 13.5H2',
  d3: 'M9.03033 6.96967C8.73744 6.67678 8.26256 6.67678 7.96967 6.96967C7.67678 7.26256 7.67678 7.73744 7.96967 8.03033L9.03033 6.96967ZM10.5 9.5L11.0303 8.96967V8.96967L10.5 9.5ZM7 10L7.53033 9.46967C7.23744 9.17678 6.76256 9.17678 6.46967 9.46967L7 10ZM3.95 9.4C3.61863 9.15147 3.14853 9.21863 2.9 9.55C2.65147 9.88137 2.71863 10.3515 3.05 10.6L3.95 9.4ZM10.5 11.5L9.96967 10.9697L9.96967 10.9697L10.5 11.5ZM7.96967 8.03033L9.96967 10.0303L11.0303 8.96967L9.03033 6.96967L7.96967 8.03033ZM9.03033 10.9697L7.53033 9.46967L6.46967 10.5303L7.96967 12.0303L9.03033 10.9697ZM4.25294 9.62721L3.95 9.4L3.05 10.6L3.35294 10.8272L4.25294 9.62721ZM6.46967 9.46967C5.8729 10.0664 4.92812 10.1336 4.25294 9.62721L3.35294 10.8272C4.6253 11.7815 6.40572 11.6549 7.53033 10.5303L6.46967 9.46967ZM9.96967 10.9697C9.71028 11.2291 9.28972 11.2291 9.03033 10.9697L7.96967 12.0303C8.81485 12.8755 10.1852 12.8755 11.0303 12.0303L9.96967 10.9697ZM9.96967 10.0303C10.2291 10.2897 10.2291 10.7103 9.96967 10.9697L11.0303 12.0303C11.8755 11.1852 11.8755 9.81485 11.0303 8.96967L9.96967 10.0303Z',
  d4: 'M5 11V15.5C5 17.3856 5 18.3284 5.58579 18.9142C6.17157 19.5 7.11438 19.5 9 19.5H18C19.8856 19.5 20.8284 19.5 21.4142 18.9142C22 18.3284 22 17.3856 22 15.5V12.5C22 10.6144 22 9.67157 21.4142 9.08579C20.8284 8.5 19.8856 8.5 18 8.5H9.5',
  d5: 'M15.25 14C15.25 14.9665 14.4665 15.75 13.5 15.75C12.5335 15.75 11.75 14.9665 11.75 14C11.75 13.0335 12.5335 12.25 13.5 12.25C14.4665 12.25 15.25 13.0335 15.25 14Z',
  d6: 'M8.5 11.5L7 10C6.45817 10.5418 5.71742 10.7809 5 10.7015V15.5C5 17.3856 5 18.3284 5.58579 18.9142C6.17157 19.5 7.11438 19.5 9 19.5H18C19.8856 19.5 20.8284 19.5 21.4142 18.9142C22 18.3284 22 17.3856 22 15.5V12.5C22 10.6144 22 9.67157 21.4142 9.08579C20.8284 8.5 19.8856 8.5 18 8.5H9.5L10.5 9.5C11.0523 10.0523 11.0523 10.9477 10.5 11.5C9.94772 12.0523 9.05229 12.0523 8.5 11.5ZM13.5 15.75C14.4665 15.75 15.25 14.9665 15.25 14C15.25 13.0335 14.4665 12.25 13.5 12.25C12.5335 12.25 11.75 13.0335 11.75 14C11.75 14.9665 12.5335 15.75 13.5 15.75Z',
  d7: 'M1.25 4.5C1.25 4.08579 1.58579 3.75 2 3.75H8.75736C9.75192 3.75 10.7057 4.14509 11.409 4.84835L14.5303 7.96967C14.8232 8.26256 14.8232 8.73744 14.5303 9.03033C14.2374 9.32322 13.7626 9.32322 13.4697 9.03033L10.3483 5.90901C9.92639 5.48705 9.3541 5.25 8.75736 5.25H2C1.58579 5.25 1.25 4.91421 1.25 4.5Z',
  d8: 'M1.25 13.5C1.25 13.0858 1.58579 12.75 2 12.75H5C5.41421 12.75 5.75 13.0858 5.75 13.5C5.75 13.9142 5.41421 14.25 5 14.25H2C1.58579 14.25 1.25 13.9142 1.25 13.5Z',
  d9: 'M7.96971 6.96967C8.26261 6.67678 8.73748 6.67678 9.03037 6.96967L11.0304 8.96967C11.8756 9.81485 11.8756 11.1852 11.0304 12.0303C10.1852 12.8755 8.81489 12.8755 7.96972 12.0303L6.93726 10.9979C5.84236 11.6676 4.41926 11.6269 3.35299 10.8272L3.05004 10.6C2.71867 10.3515 2.65152 9.88137 2.90004 9.55C3.14857 9.21863 3.61867 9.15147 3.95004 9.4L4.25299 9.62721C4.92816 10.1336 5.87294 10.0664 6.46971 9.46967C6.76261 9.17678 7.23748 9.17678 7.53037 9.46967L9.03038 10.9697C9.28977 11.2291 9.71032 11.2291 9.96972 10.9697C10.2291 10.7103 10.2291 10.2897 9.96971 10.0303L7.96971 8.03033C7.67682 7.73744 7.67682 7.26256 7.96971 6.96967Z',
  d10: 'M21.9445 8.55546C21.4891 8.09999 20.9223 7.91432 20.2945 7.82992C19.6997 7.74995 18.9505 7.74997 18.0521 7.75H18.052H18.052L9.5 7.75C9.19666 7.75 8.92318 7.93274 8.80709 8.21299C8.69101 8.49325 8.75518 8.81584 8.96967 9.03033L9.96967 10.0303C10.2291 10.2897 10.2291 10.7103 9.96968 10.9697C9.71028 11.2291 9.28973 11.2291 9.03034 10.9697L7.53033 9.46967C7.23744 9.17678 6.76257 9.17678 6.46967 9.46967C6.0943 9.84505 5.58133 10.0113 5.08251 9.95609C4.87053 9.93263 4.65858 10.0005 4.4997 10.1428C4.34081 10.2851 4.25 10.4883 4.25 10.7015L4.25 15.552V15.552V15.5521C4.24997 16.4505 4.24995 17.1997 4.32992 17.7945C4.41432 18.4223 4.59999 18.9891 5.05546 19.4445C5.51093 19.9 6.07773 20.0857 6.70552 20.1701C7.3003 20.2501 8.04951 20.25 8.94798 20.25H8.94801L18.052 20.25H18.052C18.9505 20.25 19.6997 20.2501 20.2945 20.1701C20.9223 20.0857 21.4891 19.9 21.9445 19.4445C22.4 18.9891 22.5857 18.4223 22.6701 17.7945C22.7501 17.1997 22.75 16.4505 22.75 15.552L22.75 12.448C22.75 11.5495 22.7501 10.8003 22.6701 10.2055C22.5857 9.57773 22.4 9.01093 21.9445 8.55546ZM13.5 16C14.6046 16 15.5 15.1045 15.5 14C15.5 12.8954 14.6046 12 13.5 12C12.3954 12 11.5 12.8954 11.5 14C11.5 15.1045 12.3954 16 13.5 16Z',
  d11: 'M20.2945 7.82991C20.9223 7.91432 21.4891 8.09999 21.9445 8.55546C22.4 9.01093 22.5857 9.57773 22.6701 10.2055C22.7501 10.8003 22.75 11.5495 22.75 12.448V15.552C22.75 16.4505 22.7501 17.1997 22.6701 17.7945C22.5857 18.4223 22.4 18.9891 21.9445 19.4445C21.4891 19.9 20.9223 20.0857 20.2945 20.1701C19.6997 20.2501 18.9505 20.25 18.052 20.25H18.052H8.94801H8.94798C8.04951 20.25 7.3003 20.2501 6.70552 20.1701C6.07773 20.0857 5.51093 19.9 5.05546 19.4445C4.59999 18.9891 4.41432 18.4223 4.32991 17.7945C4.24995 17.1997 4.24997 16.4505 4.25 15.552V15.552L4.25 10.7015C4.25 10.4883 4.3408 10.2851 4.49969 10.1428C4.65858 10.0005 4.87053 9.93263 5.08251 9.95609C5.58133 10.0113 6.09429 9.84505 6.46967 9.46967C6.76257 9.17678 7.23744 9.17678 7.53033 9.46967L9.03033 10.9697C9.28972 11.2291 9.71028 11.2291 9.96967 10.9697C10.2291 10.7103 10.2291 10.2897 9.96967 10.0303L8.96967 9.03033C8.75517 8.81583 8.69101 8.49325 8.80709 8.21299C8.92318 7.93273 9.19666 7.75 9.5 7.75L18.052 7.75H18.052C18.9505 7.74997 19.6997 7.74995 20.2945 7.82991Z',
  d12: 'M1.25 4.5C1.25 4.08579 1.58579 3.75 2 3.75H8.75736C9.75192 3.75 10.7057 4.14509 11.409 4.84835L14.3107 7.75H9.81066L11.0303 8.96967C11.8755 9.81485 11.8755 11.1852 11.0303 12.0303C10.1852 12.8755 8.81485 12.8755 7.96967 12.0303L6.93722 10.9979C6.12851 11.4925 5.14077 11.5996 4.25 11.2996V14.25H2C1.58579 14.25 1.25 13.9142 1.25 13.5V4.5Z',
  d13: 'M15.5 14C15.5 15.1045 14.6046 16 13.5 16C12.3954 16 11.5 15.1045 11.5 14C11.5 12.8954 12.3954 12 13.5 12C14.6046 12 15.5 12.8954 15.5 14Z',
  d14: 'M2 3.75H1.25V5.25H2V3.75ZM10 4.5L10.4939 3.93557L10.2818 3.75H10V4.5ZM13.5061 8.56443L14.0706 9.05831L15.0583 7.92945L14.4939 7.43557L13.5061 8.56443ZM2 5.25H10V3.75H2V5.25ZM9.50612 5.06443L13.5061 8.56443L14.4939 7.43557L10.4939 3.93557L9.50612 5.06443Z',
  d15: 'M9.03033 6.96967L8.5 6.43934L7.43934 7.5L7.96967 8.03033L9.03033 6.96967ZM10.5 9.5L11.0303 8.96967V8.96967L10.5 9.5ZM7 10L7.53033 9.46967L7 8.93934L6.46967 9.46967L7 10ZM3.95 9.4L3.35 8.95L2.45 10.15L3.05 10.6L3.95 9.4ZM10.5 11.5L9.96967 10.9697L9.96967 10.9697L10.5 11.5ZM7.96967 8.03033L9.96967 10.0303L11.0303 8.96967L9.03033 6.96967L7.96967 8.03033ZM9.03033 10.9697L7.53033 9.46967L6.46967 10.5303L7.96967 12.0303L9.03033 10.9697ZM4.25294 9.62721L3.95 9.4L3.05 10.6L3.35294 10.8272L4.25294 9.62721ZM6.46967 9.46967C5.8729 10.0664 4.92812 10.1336 4.25294 9.62721L3.35294 10.8272C4.6253 11.7815 6.40572 11.6549 7.53033 10.5303L6.46967 9.46967ZM9.96967 10.9697C9.71028 11.2291 9.28972 11.2291 9.03033 10.9697L7.96967 12.0303C8.81485 12.8755 10.1852 12.8755 11.0303 12.0303L9.96967 10.9697ZM9.96967 10.0303C10.2291 10.2897 10.2291 10.7103 9.96967 10.9697L11.0303 12.0303C11.8755 11.1852 11.8755 9.81485 11.0303 8.96967L9.96967 10.0303Z',
  d16: 'M5 11V19.5H22V8.5H10',
  d17: 'M1.25 3.75H10.2818L15.0583 7.92945L14.0706 9.05831L9.7182 5.25H1.25V3.75Z',
  d18: 'M1.25 12.75H5.75V14.25H1.25V12.75Z',
  d19: 'M8.49995 6.43945L11.0303 8.96978C11.8755 9.81496 11.8755 11.1853 11.0303 12.0304C10.1851 12.8756 8.8148 12.8756 7.96962 12.0304L6.93717 10.998C5.84226 11.6677 4.41917 11.627 3.3529 10.8273L2.44995 10.1501L3.34995 8.95011L4.2529 9.62732C4.92807 10.1337 5.87285 10.0666 6.46962 9.46978L6.99995 8.93945L9.03028 10.9698C9.28967 11.2292 9.71023 11.2292 9.96962 10.9698C10.229 10.7104 10.229 10.2898 9.96962 10.0304L7.43929 7.50011L8.49995 6.43945Z',
  d20: 'M5.08251 9.95609L4.25 9.86394V20.25H22.75V7.75H7.68934L9.96967 10.0303C10.2291 10.2897 10.2291 10.7103 9.96967 10.9697C9.71028 11.2291 9.28972 11.2291 9.03033 10.9697L7 8.93934L6.46967 9.46967C6.09429 9.84505 5.58133 10.0113 5.08251 9.95609ZM13.5 16C14.6046 16 15.5 15.1045 15.5 14C15.5 12.8954 14.6046 12 13.5 12C12.3954 12 11.5 12.8954 11.5 14C11.5 15.1045 12.3954 16 13.5 16Z',
} as const;

export const IconPayment02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="payment-02-stroke-rounded IconPayment02StrokeRounded"
    >
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
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
        fill="var(--icon-fill)" 
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

export const IconPayment02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="payment-02-duotone-rounded IconPayment02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
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
        fill="var(--icon-fill)" 
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

export const IconPayment02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="payment-02-twotone-rounded IconPayment02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
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
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPayment02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="payment-02-solid-rounded IconPayment02SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconPayment02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="payment-02-bulk-rounded IconPayment02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPayment02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="payment-02-stroke-sharp IconPayment02StrokeSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconPayment02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="payment-02-solid-sharp IconPayment02SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfPayment02: TheIconSelfPack = {
  name: 'Payment02',
  StrokeRounded: IconPayment02StrokeRounded,
  DuotoneRounded: IconPayment02DuotoneRounded,
  TwotoneRounded: IconPayment02TwotoneRounded,
  SolidRounded: IconPayment02SolidRounded,
  BulkRounded: IconPayment02BulkRounded,
  StrokeSharp: IconPayment02StrokeSharp,
  SolidSharp: IconPayment02SolidSharp,
};