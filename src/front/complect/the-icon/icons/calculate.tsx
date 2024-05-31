import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21.5 12.95V11.05C21.5 7.01949 21.5 5.00424 20.1088 3.75212C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.75212C2.5 5.00424 2.5 7.01949 2.5 11.05V12.95C2.5 16.9805 2.5 18.9958 3.89124 20.2479C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.2479C21.5 18.9958 21.5 16.9805 21.5 12.95Z',
  d2: 'M18 8H14M16 6L16 10',
  d3: 'M18 17.5H14',
  d4: 'M18 14.5H14',
  d5: 'M10 17.5L8.25 15.75M8.25 15.75L6.5 14M8.25 15.75L10 14M8.25 15.75L6.5 17.5',
  d6: 'M10 8H6',
  d7: 'M12.052 1.75H12.052H11.948H11.948C9.75287 1.74999 8.03639 1.74998 6.69787 1.91195C5.33461 2.0769 4.24953 2.42064 3.38952 3.19465C2.5182 3.97883 2.12077 4.98563 1.93214 6.24835C1.74997 7.46783 1.74998 9.02533 1.75 10.9878V10.9878V10.9878V13.0122V13.0122V13.0122C1.74998 14.9747 1.74997 16.5322 1.93214 17.7516C2.12077 19.0144 2.5182 20.0212 3.38952 20.8054C4.24953 21.5794 5.33461 21.9231 6.69787 22.0881C8.03639 22.25 9.75287 22.25 11.948 22.25H12.052C14.2471 22.25 15.9636 22.25 17.3021 22.0881C18.6654 21.9231 19.7505 21.5794 20.6105 20.8054C21.4818 20.0212 21.8792 19.0144 22.0679 17.7516C22.25 16.5322 22.25 14.9747 22.25 13.0123V10.9877C22.25 9.02532 22.25 7.46783 22.0679 6.24835C21.8792 4.98563 21.4818 3.97883 20.6105 3.19465C19.7505 2.42064 18.6654 2.0769 17.3021 1.91195C15.9636 1.74998 14.2471 1.74999 12.052 1.75ZM16.75 6C16.75 5.58579 16.4142 5.25 16 5.25C15.5858 5.25 15.25 5.58579 15.25 6V7.25H14C13.5858 7.25 13.25 7.58579 13.25 8C13.25 8.41421 13.5858 8.75 14 8.75H15.25V10C15.25 10.4142 15.5858 10.75 16 10.75C16.4142 10.75 16.75 10.4142 16.75 10V8.75H18C18.4142 8.75 18.75 8.41421 18.75 8C18.75 7.58579 18.4142 7.25 18 7.25H16.75V6ZM13.25 17.5C13.25 17.0858 13.5858 16.75 14 16.75H18C18.4142 16.75 18.75 17.0858 18.75 17.5C18.75 17.9142 18.4142 18.25 18 18.25H14C13.5858 18.25 13.25 17.9142 13.25 17.5ZM14 13.75C13.5858 13.75 13.25 14.0858 13.25 14.5C13.25 14.9142 13.5858 15.25 14 15.25H18C18.4142 15.25 18.75 14.9142 18.75 14.5C18.75 14.0858 18.4142 13.75 18 13.75H14ZM10.5303 13.4697C10.8232 13.7626 10.8232 14.2374 10.5303 14.5303L9.31066 15.75L10.5303 16.9697C10.8232 17.2626 10.8232 17.7374 10.5303 18.0303C10.2374 18.3232 9.76256 18.3232 9.46967 18.0303L8.25 16.8107L7.03033 18.0303C6.73744 18.3232 6.26256 18.3232 5.96967 18.0303C5.67678 17.7374 5.67678 17.2626 5.96967 16.9697L7.18934 15.75L5.96967 14.5303C5.67678 14.2374 5.67678 13.7626 5.96967 13.4697C6.26256 13.1768 6.73744 13.1768 7.03033 13.4697L8.25 14.6893L9.46967 13.4697C9.76256 13.1768 10.2374 13.1768 10.5303 13.4697ZM6 7.25C5.58579 7.25 5.25 7.58579 5.25 8C5.25 8.41421 5.58579 8.75 6 8.75H10C10.4142 8.75 10.75 8.41421 10.75 8C10.75 7.58579 10.4142 7.25 10 7.25H6Z',
  d8: 'M12.052 1.75C14.2471 1.74999 15.9636 1.74998 17.3021 1.91195C18.6654 2.0769 19.7505 2.42064 20.6105 3.19465C21.4818 3.97883 21.8792 4.98563 22.0679 6.24835C22.25 7.46783 22.25 9.02532 22.25 10.9877V13.0123C22.25 14.9747 22.25 16.5322 22.0679 17.7516C21.8792 19.0144 21.4818 20.0212 20.6105 20.8054C19.7505 21.5794 18.6654 21.9231 17.3021 22.0881C15.9636 22.25 14.2471 22.25 12.052 22.25H11.948C9.75287 22.25 8.03639 22.25 6.69787 22.0881C5.33461 21.9231 4.24953 21.5794 3.38952 20.8054C2.5182 20.0212 2.12077 19.0144 1.93214 17.7516C1.74997 16.5322 1.74998 14.9747 1.75 13.0122V13.0122V10.9878V10.9878C1.74998 9.02533 1.74997 7.46784 1.93214 6.24835C2.12077 4.98563 2.5182 3.97883 3.38952 3.19465C4.24953 2.42064 5.33461 2.0769 6.69787 1.91195C8.03639 1.74998 9.75288 1.74999 11.948 1.75H12.052Z',
  d9: 'M16 5.25C16.4142 5.25 16.75 5.58579 16.75 6V7.25H18C18.4142 7.25 18.75 7.58579 18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H16.75V10C16.75 10.4142 16.4142 10.75 16 10.75C15.5858 10.75 15.25 10.4142 15.25 10V8.75H14C13.5858 8.75 13.25 8.41421 13.25 8C13.25 7.58579 13.5858 7.25 14 7.25H15.25V6C15.25 5.58579 15.5858 5.25 16 5.25Z',
  d10: 'M13.25 17.5C13.25 17.0858 13.5858 16.75 14 16.75H18C18.4142 16.75 18.75 17.0858 18.75 17.5C18.75 17.9142 18.4142 18.25 18 18.25H14C13.5858 18.25 13.25 17.9142 13.25 17.5Z',
  d11: 'M13.25 14.5C13.25 14.0858 13.5858 13.75 14 13.75H18C18.4142 13.75 18.75 14.0858 18.75 14.5C18.75 14.9142 18.4142 15.25 18 15.25H14C13.5858 15.25 13.25 14.9142 13.25 14.5Z',
  d12: 'M10.5303 13.4697C10.8232 13.7626 10.8232 14.2374 10.5303 14.5303L9.31066 15.75L10.5303 16.9697C10.8232 17.2626 10.8232 17.7374 10.5303 18.0303C10.2374 18.3232 9.76256 18.3232 9.46967 18.0303L8.25 16.8107L7.03033 18.0303C6.73744 18.3232 6.26256 18.3232 5.96967 18.0303C5.67678 17.7374 5.67678 17.2626 5.96967 16.9697L7.18934 15.75L5.96967 14.5303C5.67678 14.2374 5.67678 13.7626 5.96967 13.4697C6.26256 13.1768 6.73744 13.1768 7.03033 13.4697L8.25 14.6893L9.46967 13.4697C9.76256 13.1768 10.2374 13.1768 10.5303 13.4697Z',
  d13: 'M5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H10C10.4142 7.25 10.75 7.58579 10.75 8C10.75 8.41421 10.4142 8.75 10 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8Z',
  d14: 'M21.5 2.5H2.5V21.5H21.5V2.5Z',
  d15: 'M18.5 8H13.5M16 5.5V10.5',
  d16: 'M10.0356 17.5357L6.50006 14.0002M10.0356 14.0002L6.50006 17.5357',
  d17: 'M2.5 1.75C2.08579 1.75 1.75 2.08579 1.75 2.5V21.5C1.75 21.9142 2.08579 22.25 2.5 22.25H21.5C21.9142 22.25 22.25 21.9142 22.25 21.5V2.5C22.25 2.08579 21.9142 1.75 21.5 1.75H2.5ZM15.25 5.5V7.25H13.5V8.75H15.25V10.5H16.75V8.75H18.5V7.25H16.75V5.5H15.25ZM8.26758 14.7073L9.50501 13.4699L10.5657 14.5305L9.32824 15.768L10.5657 17.0054L9.50501 18.0661L8.26758 16.8286L7.03014 18.0661L5.96948 17.0054L7.20692 15.768L5.96948 14.5305L7.03014 13.4699L8.26758 14.7073ZM18 16.75H14V18.25H18V16.75ZM14 13.75H18V15.25H14V13.75ZM10 7.25H6V8.75H10V7.25Z',
} as const;

export const IconCalculateStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calculate-stroke-rounded IconCalculateStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCalculateDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calculate-duotone-rounded IconCalculateDuotoneRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCalculateTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calculate-twotone-rounded IconCalculateTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCalculateSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calculate-solid-rounded IconCalculateSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCalculateBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calculate-bulk-rounded IconCalculateBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCalculateStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calculate-stroke-sharp IconCalculateStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCalculateSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calculate-solid-sharp IconCalculateSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCalculate: TheIconSelfPack = {
  name: 'Calculate',
  StrokeRounded: IconCalculateStrokeRounded,
  DuotoneRounded: IconCalculateDuotoneRounded,
  TwotoneRounded: IconCalculateTwotoneRounded,
  SolidRounded: IconCalculateSolidRounded,
  BulkRounded: IconCalculateBulkRounded,
  StrokeSharp: IconCalculateStrokeSharp,
  SolidSharp: IconCalculateSolidSharp,
};