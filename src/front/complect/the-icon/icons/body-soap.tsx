import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.5 13C4.5 10.2386 6.73858 8 9.5 8C12.2614 8 14.5 10.2386 14.5 13V18C14.5 19.8856 14.5 20.8284 13.9142 21.4142C13.3284 22 12.3856 22 10.5 22H8.5C6.61438 22 5.67157 22 5.08579 21.4142C4.5 20.8284 4.5 19.8856 4.5 18V13Z',
  d2: 'M14.5 13.1122C10.8607 9.83944 8.89093 14.9405 4.5 13.8418',
  d3: 'M7.5 8V7C7.5 6.05719 7.5 5.58579 7.79289 5.29289C8.08579 5 8.55719 5 9.5 5C10.4428 5 10.9142 5 11.2071 5.29289C11.5 5.58579 11.5 6.05719 11.5 7V8',
  d4: 'M9.5 5V2M9.5 2H7.5M9.5 2H12.9229C13.9117 2 14.7493 2.39009 15.5 3',
  d5: 'M19.4414 8.97336C19.671 9.84608 19.2059 10.7313 18.4026 10.9505C17.5994 11.1697 16.7621 10.64 16.5325 9.76726C16.303 8.89454 17.3634 7 17.3634 7C17.3634 7 19.2118 8.10063 19.4414 8.97336Z',
  d6: 'M7.5 7V8H11.5V7C11.5 6.05719 11.5 5.58579 11.2071 5.29289C10.9142 5 10.4428 5 9.5 5C8.55719 5 8.08579 5 7.79289 5.29289C7.5 5.58579 7.5 6.05719 7.5 7Z',
  d7: 'M14.5 17.9964V12.9964C14.5 12.8277 14.4916 12.6609 14.4753 12.4964C12.4556 11.6964 10.9835 12.1631 10.5 12.4964C7.3 14.4964 5.16667 14.3297 4.5 13.9964V17.9964C4.5 19.882 4.5 20.8248 5.08579 21.4106C5.67157 21.9964 6.61438 21.9964 8.5 21.9964H10.5C12.3856 21.9964 13.3284 21.9964 13.9142 21.4106C14.5 20.8248 14.5 19.882 14.5 17.9964Z',
  d8: 'M9.5 7.25C6.32437 7.25 3.75 9.82436 3.75 13L3.75 18.052C3.74997 18.9505 3.74995 19.6997 3.82991 20.2945C3.91432 20.9223 4.09999 21.4891 4.55546 21.9445C5.01093 22.4 5.57773 22.5857 6.20552 22.6701C6.8003 22.7501 7.54951 22.75 8.44798 22.75H8.44801H10.552H10.552C11.4505 22.75 12.1997 22.7501 12.7945 22.6701C13.4223 22.5857 13.9891 22.4 14.4445 21.9445C14.9 21.4891 15.0857 20.9223 15.1701 20.2945C15.2501 19.6997 15.25 18.9505 15.25 18.052V18.052L15.25 13C15.25 9.82436 12.6756 7.25 9.5 7.25ZM5.25 13C5.25 10.6528 7.15279 8.75 9.5 8.75C11.5433 8.75 13.2498 10.192 13.6575 12.1138C13.6931 12.2816 13.7109 12.3656 13.6617 12.404C13.6125 12.4425 13.5291 12.4019 13.3622 12.3207C11.884 11.6011 10.6477 12.2233 9.29329 12.905C8.15891 13.476 6.94171 14.0886 5.43019 13.9894C5.34608 13.9838 5.30402 13.9811 5.27701 13.9522C5.25 13.9234 5.25 13.8801 5.25 13.7936V13Z',
  d9: 'M9.45526 4.25C9.02244 4.24995 8.62561 4.24991 8.3028 4.29331C7.94732 4.3411 7.57159 4.45355 7.26257 4.76257C6.95355 5.07159 6.8411 5.44732 6.79331 5.8028C6.74991 6.12561 6.74995 6.52244 6.75 6.95526L6.75001 8.00001C6.75001 8.41422 7.08579 8.75001 7.50001 8.75001H11.5C11.9142 8.75001 12.25 8.41422 12.25 8.00001L12.25 6.95526C12.2501 6.52245 12.2501 6.12561 12.2067 5.8028C12.1589 5.44732 12.0465 5.07159 11.7374 4.76257C11.4284 4.45355 11.0527 4.3411 10.6972 4.29331C10.3744 4.24991 9.97757 4.24995 9.54476 4.25H9.45526Z',
  d10: 'M6.75 2C6.75 1.58579 7.08579 1.25 7.5 1.25H12.9229C14.1291 1.25 15.1284 1.73173 15.9729 2.41792C16.2944 2.67912 16.3433 3.15147 16.0821 3.47295C15.8209 3.79442 15.3485 3.84329 15.0271 3.58208C14.3703 3.04846 13.6943 2.75 12.9229 2.75H10.25V5C10.25 5.41421 9.91421 5.75 9.5 5.75C9.08579 5.75 8.75 5.41421 8.75 5V2.75H7.5C7.08579 2.75 6.75 2.41421 6.75 2Z',
  d11: 'M18.6044 11.6725C19.8553 11.3305 20.4872 9.9964 20.168 8.781C19.9088 7.79383 18.8701 7.08475 18.0745 6.55824C17.8004 6.37686 17.5236 6.18079 17.1764 6.27398C16.8279 6.3675 16.6868 6.67656 16.539 6.97211C16.1103 7.82934 15.5568 8.96645 15.8168 9.95651C16.1369 11.1756 17.3469 12.0164 18.6044 11.6725Z',
  d12: 'M3.75 13C3.75 9.82436 6.32437 7.25 9.5 7.25C12.6756 7.25 15.25 9.82436 15.25 13L15.25 18.052C15.25 18.9505 15.2501 19.6997 15.1701 20.2945C15.0857 20.9223 14.9 21.4891 14.4445 21.9445C13.9891 22.4 13.4223 22.5857 12.7945 22.6701C12.1997 22.7501 11.4505 22.75 10.552 22.75H8.44801C7.54953 22.75 6.8003 22.7501 6.20552 22.6701C5.57773 22.5857 5.01093 22.4 4.55546 21.9445C4.09999 21.4891 3.91432 20.9223 3.82991 20.2945C3.74995 19.6997 3.74997 18.9505 3.75 18.052L3.75 13ZM9.5 8.75C7.15279 8.75 5.25 10.6528 5.25 13V18C5.25 18.964 5.2516 19.6116 5.31654 20.0946C5.37858 20.5561 5.4858 20.7536 5.61612 20.8839C5.74644 21.0142 5.94393 21.1214 6.40539 21.1835C6.88843 21.2484 7.53599 21.25 8.5 21.25H10.5C11.464 21.25 12.1116 21.2484 12.5946 21.1835C13.0561 21.1214 13.2536 21.0142 13.3839 20.8839C13.5142 20.7536 13.6214 20.5561 13.6835 20.0946C13.7484 19.6116 13.75 18.964 13.75 18V13C13.75 10.6528 11.8472 8.75 9.5 8.75Z',
  d13: 'M14.5 18V13.1122C10.8607 9.83944 8.89093 14.9405 4.5 13.8418V18C4.5 19.8856 4.5 20.8284 5.08579 21.4142C5.67157 22 6.61438 22 8.5 22H10.5C12.3856 22 13.3284 22 13.9142 21.4142C14.5 20.8284 14.5 19.8856 14.5 18Z',
  d14: 'M14.5 22V13C14.5 10.2386 12.2614 8 9.5 8C6.73858 8 4.5 10.2386 4.5 13V22H14.5Z',
  d15: 'M4.5 15H14.5',
  d16: 'M7.5 8V5H11.5V8',
  d17: 'M9.5 5V2M9.5 2H6.5M9.5 2H14L15.5 3.5',
  d18: 'M18.4026 10.9505C19.2059 10.7313 19.671 9.84608 19.4414 8.97336C19.2118 8.10063 17.3634 7 17.3634 7C17.3634 7 16.303 8.89454 16.5325 9.76726C16.7621 10.64 17.5994 11.1697 18.4026 10.9505Z',
  d19: 'M15.251 13C15.251 10.8205 14.0384 8.9242 12.251 7.94901V4.25H6.75098V7.94901C4.9636 8.9242 3.75098 10.8205 3.75098 13V22C3.75098 22.4142 4.08676 22.75 4.50098 22.75H14.501C14.9152 22.75 15.251 22.4142 15.251 22V13ZM5.25098 13C5.25098 10.6528 7.15377 8.75 9.50098 8.75C11.8482 8.75 13.751 10.6528 13.751 13V14.25H5.25098V13Z',
  d20: 'M8.75098 2.75H6.50098V1.25H14.001C14.1999 1.25 14.3907 1.32902 14.5313 1.46967L16.0313 2.96967L14.9706 4.03033L13.6903 2.75H10.251V5H8.75098V2.75Z',
  d21: 'M19.5755 7.79204C19.8067 8.04619 20.0637 8.38756 20.1676 8.78252C20.4873 9.99792 19.8543 11.332 18.601 11.674C17.3411 12.0179 16.1288 11.1771 15.8081 9.95803C15.7045 9.56398 15.7593 9.13932 15.8345 8.80306C15.9141 8.44703 16.0413 8.08617 16.1678 7.77437C16.2956 7.4595 16.4299 7.17674 16.5317 6.97364C16.5828 6.87159 17.0862 5.96143 17.0862 5.96143C17.0862 5.96143 17.9755 6.49732 18.0701 6.55976C18.2582 6.68403 18.5138 6.86079 18.7796 7.06884C19.0427 7.27483 19.3309 7.52325 19.5755 7.79204Z',
} as const;

export const IconBodySoapStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-soap-stroke-rounded IconBodySoapStrokeRounded"
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

export const IconBodySoapDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-soap-duotone-rounded IconBodySoapDuotoneRounded"
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

export const IconBodySoapTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-soap-twotone-rounded IconBodySoapTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBodySoapSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-soap-solid-rounded IconBodySoapSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBodySoapBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-soap-bulk-rounded IconBodySoapBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBodySoapStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-soap-stroke-sharp IconBodySoapStrokeSharp"
    >
      <path 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBodySoapSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="body-soap-solid-sharp IconBodySoapSolidSharp"
    >
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
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBodySoap: TheIconSelfPack = {
  name: 'BodySoap',
  StrokeRounded: IconBodySoapStrokeRounded,
  DuotoneRounded: IconBodySoapDuotoneRounded,
  TwotoneRounded: IconBodySoapTwotoneRounded,
  SolidRounded: IconBodySoapSolidRounded,
  BulkRounded: IconBodySoapBulkRounded,
  StrokeSharp: IconBodySoapStrokeSharp,
  SolidSharp: IconBodySoapSolidSharp,
};