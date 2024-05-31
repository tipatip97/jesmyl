import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13V18C17 19.8856 17 20.8284 16.4142 21.4142C15.8284 22 14.8856 22 13 22H11C9.11438 22 8.17157 22 7.58579 21.4142C7 20.8284 7 19.8856 7 18V13Z',
  d2: 'M10 8V7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5C12.9428 5 13.4142 5 13.7071 5.29289C14 5.58579 14 6.05719 14 7V8',
  d3: 'M12 5V2M12 2H10M12 2H14.745C15.5022 2 16.2315 2.28636 16.7864 2.80162L17 3',
  d4: 'M7 13H17',
  d5: 'M17 18V13H7V18C7 19.8856 7 20.8284 7.58579 21.4142C8.17157 22 9.11438 22 11 22H13C14.8856 22 15.8284 22 16.4142 21.4142C17 20.8284 17 19.8856 17 18Z',
  d6: 'M10 7V8H14V7C14 6.05719 14 5.58579 13.7071 5.29289C13.4142 5 12.9428 5 12 5C11.0572 5 10.5858 5 10.2929 5.29289C10 5.58579 10 6.05719 10 7Z',
  d7: 'M11.9553 4.25L12 4.25001L12.0448 4.25C12.4776 4.24995 12.8744 4.24991 13.1972 4.29331C13.5527 4.3411 13.9284 4.45355 14.2374 4.76257C14.5465 5.07159 14.6589 5.44732 14.7067 5.8028C14.7501 6.12561 14.7501 6.52244 14.75 6.95525V6.95526L14.75 7.00001V8.00001C14.75 8.41422 14.4142 8.75001 14 8.75001H10C9.58579 8.75001 9.25001 8.41422 9.25001 8.00001V7.00001L9.25 6.95526C9.24995 6.52244 9.24991 6.12561 9.29331 5.8028C9.3411 5.44732 9.45355 5.07159 9.76257 4.76257C10.0716 4.45355 10.4473 4.3411 10.8028 4.29331C11.1256 4.24991 11.5224 4.24995 11.9553 4.25Z',
  d8: 'M9 2.25C9 1.69772 9.44772 1.25 10 1.25H13.745C14.7547 1.25 15.7269 1.63181 16.4668 2.31883L16.6805 2.51721C17.0852 2.89301 17.1086 3.52574 16.7328 3.93045C16.357 4.33516 15.7243 4.3586 15.3195 3.98279L15.1059 3.78441C14.736 3.44091 14.2498 3.25 13.745 3.25H13V4.61233C13 5.16462 12.5523 5.61233 12 5.61233C11.4477 5.61233 11 5.16462 11 4.61233V3.25H10C9.44772 3.25 9 2.80228 9 2.25Z',
  d9: 'M12 7.25C8.82437 7.25 6.25 9.82436 6.25 13L6.25 18.052L6.25 18.052V18.0521C6.25 18.0801 6.25 18.108 6.25 18.1358C6.25 18.1918 6.25002 18.2473 6.25006 18.3021C6.25042 18.764 6.25291 19.1837 6.26948 19.5605C6.28119 19.8267 6.29993 20.0714 6.32991 20.2945C6.41432 20.9223 6.59999 21.4891 7.05546 21.9445C7.51093 22.4 8.07773 22.5857 8.70552 22.6701C9.3003 22.7501 10.0495 22.75 10.948 22.75H10.948H13.052H13.052C13.9505 22.75 14.6997 22.7501 15.2945 22.6701C15.9223 22.5857 16.4891 22.4 16.9445 21.9445C17.4 21.4891 17.5857 20.9223 17.6701 20.2945C17.7501 19.6997 17.75 18.9505 17.75 18.052V18.052L17.75 13C17.75 9.82436 15.1756 7.25 12 7.25ZM16.184 12.25C15.8298 10.2605 14.0913 8.75 12 8.75C9.90871 8.75 8.1702 10.2605 7.81597 12.25H16.184Z',
  d10: 'M6.25 13C6.25 12.5858 6.58579 12.25 7 12.25H17C17.4142 12.25 17.75 12.5858 17.75 13L17.75 18.052V18.052C17.75 18.9505 17.7501 19.6997 17.6701 20.2945C17.5857 20.9223 17.4 21.4891 16.9445 21.9445C16.4891 22.4 15.9223 22.5857 15.2945 22.6701C14.6997 22.7501 13.9505 22.75 13.052 22.75H13.052H10.948H10.948C10.0495 22.75 9.3003 22.7501 8.70552 22.6701C8.07773 22.5857 7.51093 22.4 7.05546 21.9445C6.59999 21.4891 6.41432 20.9223 6.32991 20.2945C6.24995 19.6997 6.24997 18.9505 6.25 18.052V18.052L6.25 13Z',
  d11: 'M6.25 13C6.25 9.82436 8.82437 7.25 12 7.25C15.1756 7.25 17.75 9.82436 17.75 13L17.75 18.052C17.75 18.9505 17.7501 19.6997 17.6701 20.2945C17.5857 20.9223 17.4 21.4891 16.9445 21.9445C16.4891 22.4 15.9223 22.5857 15.2945 22.6701C14.6997 22.7501 13.9505 22.75 13.052 22.75H10.948C10.0495 22.75 9.3003 22.7501 8.70552 22.6701C8.07773 22.5857 7.51093 22.4 7.05546 21.9445C6.59999 21.4891 6.41432 20.9223 6.32991 20.2945C6.24995 19.6997 6.24997 18.9505 6.25 18.052L6.25 13ZM12 8.75C9.65279 8.75 7.75 10.6528 7.75 13V18C7.75 18.964 7.7516 19.6116 7.81654 20.0946C7.87858 20.5561 7.9858 20.7536 8.11612 20.8839C8.24644 21.0142 8.44393 21.1214 8.90539 21.1835C9.38843 21.2484 10.036 21.25 11 21.25H13C13.964 21.25 14.6116 21.2484 15.0946 21.1835C15.5561 21.1214 15.7536 21.0142 15.8839 20.8839C16.0142 20.7536 16.1214 20.5561 16.1835 20.0946C16.2484 19.6116 16.25 18.964 16.25 18V13C16.25 10.6528 14.3472 8.75 12 8.75Z',
  d12: 'M17 22V13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13V22H17Z',
  d13: 'M10 8V5H14V8',
  d14: 'M12 5V2M12 2H9M12 2L16 2L17.5 3.5',
  d15: 'M9 4.25H14.5V8H13V5.75H10.5V8H9V4.25Z',
  d16: 'M12.5 2.75V5H11V2.75H8.75V1.25H15.9697C16.1686 1.25 16.3593 1.32902 16.5 1.46967L18 2.96967L16.9393 4.03033L15.659 2.75L12.5 2.75Z',
  d17: 'M6 13C6 9.82436 8.57436 7.25 11.75 7.25C14.9256 7.25 17.5 9.82436 17.5 13V22.75H6V13ZM11.7504 8.75C13.8417 8.75 15.5802 10.2605 15.9345 12.25H7.56641C7.92064 10.2605 9.65914 8.75 11.7504 8.75Z',
} as const;

export const IconShampooStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shampoo-stroke-rounded IconShampooStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconShampooDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shampoo-duotone-rounded IconShampooDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconShampooTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shampoo-twotone-rounded IconShampooTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShampooSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shampoo-solid-rounded IconShampooSolidRounded"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShampooBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shampoo-bulk-rounded IconShampooBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
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

export const IconShampooStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shampoo-stroke-sharp IconShampooStrokeSharp"
    >
      <path 
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
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShampooSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shampoo-solid-sharp IconShampooSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShampoo: TheIconSelfPack = {
  name: 'Shampoo',
  StrokeRounded: IconShampooStrokeRounded,
  DuotoneRounded: IconShampooDuotoneRounded,
  TwotoneRounded: IconShampooTwotoneRounded,
  SolidRounded: IconShampooSolidRounded,
  BulkRounded: IconShampooBulkRounded,
  StrokeSharp: IconShampooStrokeSharp,
  SolidSharp: IconShampooSolidSharp,
};