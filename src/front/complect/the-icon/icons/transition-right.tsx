import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6V18C10 19.4001 10 20.1002 9.72752 20.635C9.48783 21.1054 9.10538 21.4878 8.63498 21.7275C8.1002 22 7.40013 22 6 22C4.59987 22 3.8998 22 3.36502 21.7275C2.89462 21.4878 2.51217 21.1054 2.27248 20.635C2 20.1002 2 19.4001 2 18V6Z',
  d2: 'M16 22C18.3389 22 19.5083 22 20.3621 21.4635C20.8073 21.1838 21.1838 20.8073 21.4635 20.3621C22 19.5083 22 18.3389 22 16V8C22 5.66111 22 4.49167 21.4635 3.63789C21.1838 3.19267 20.8073 2.81621 20.3621 2.53647C19.5083 2 18.3389 2 16 2',
  d3: 'M18 12H10M18 12C18 11.2998 16.0057 9.99153 15.5 9.5M18 12C18 12.7002 16.0057 14.0085 15.5 14.5',
  d4: 'M6.03143 1.25C6.7048 1.24999 7.25551 1.24998 7.70307 1.28655C8.16633 1.3244 8.58473 1.40514 8.97547 1.60423C9.587 1.91582 10.0842 2.413 10.3958 3.02453C10.5949 3.41527 10.6756 3.83367 10.7134 4.29693C10.75 4.74448 10.75 5.29518 10.75 5.96853V5.96856V18.0314V18.0315C10.75 18.7048 10.75 19.2555 10.7134 19.7031C10.6756 20.1663 10.5949 20.5847 10.3958 20.9755C10.0842 21.587 9.587 22.0842 8.97547 22.3958C8.58473 22.5949 8.16633 22.6756 7.70307 22.7134C7.25551 22.75 6.70481 22.75 6.03144 22.75H5.96856C5.29519 22.75 4.74449 22.75 4.29693 22.7134C3.83367 22.6756 3.41527 22.5949 3.02453 22.3958C2.413 22.0842 1.91582 21.587 1.60423 20.9755C1.40514 20.5847 1.3244 20.1663 1.28655 19.7031C1.24998 19.2555 1.24999 18.7048 1.25 18.0314V5.96858V5.96857C1.24999 5.2952 1.24998 4.74449 1.28655 4.29693C1.3244 3.83367 1.40514 3.41527 1.60423 3.02453C1.91582 2.413 2.413 1.91582 3.02453 1.60423C3.41527 1.40514 3.83367 1.3244 4.29693 1.28655C4.74449 1.24998 5.2952 1.24999 5.96857 1.25H5.96858H6.03142H6.03143Z',
  d5: 'M18.3914 3.31239C17.7595 3.2511 16.9392 3.25 15.75 3.25C15.1977 3.25 14.75 2.80229 14.75 2.25C14.75 1.69772 15.1977 1.25 15.75 1.25H15.8005H15.8005C16.927 1.24999 17.8446 1.24997 18.5845 1.32173C19.3508 1.39605 20.0313 1.55466 20.6441 1.93974C21.2166 2.29942 21.7006 2.78344 22.0603 3.35586C22.4453 3.96871 22.604 4.64919 22.6783 5.4155C22.75 6.1554 22.75 7.07296 22.75 8.19952V15.8005C22.75 16.927 22.75 17.8446 22.6783 18.5845C22.604 19.3508 22.4453 20.0313 22.0603 20.6441C21.7006 21.2166 21.2166 21.7006 20.6441 22.0603C20.0313 22.4453 19.3508 22.604 18.5845 22.6783C17.8446 22.75 16.9271 22.75 15.8005 22.75H15.8005H15.75C15.1977 22.75 14.75 22.3023 14.75 21.75C14.75 21.1977 15.1977 20.75 15.75 20.75C16.9392 20.75 17.7595 20.7489 18.3914 20.6876C19.008 20.6278 19.3392 20.5182 19.5801 20.3668C19.8981 20.167 20.167 19.8981 20.3668 19.5801C20.5182 19.3392 20.6278 19.008 20.6876 18.3914C20.7489 17.7595 20.75 16.9392 20.75 15.75V8.25C20.75 7.06078 20.7489 6.24053 20.6876 5.60856C20.6278 4.99198 20.5182 4.66085 20.3668 4.41992C20.167 4.10191 19.8981 3.83301 19.5801 3.63319C19.3392 3.48181 19.008 3.37219 18.3914 3.31239Z',
  d6: 'M9 12C9 11.4477 9.44772 11 10 11H15.0001V10.1962L15 10.1775C14.9999 10.1073 14.9996 9.98207 15.0137 9.87285L15.0141 9.86923C15.0241 9.79033 15.0837 9.32077 15.5543 9.0943C16.0271 8.86682 16.4328 9.1172 16.4982 9.15759L16.502 9.1599C16.5956 9.21722 16.6931 9.29574 16.7491 9.34079L16.7491 9.3408L16.764 9.35276C16.8345 9.40925 16.9168 9.47389 17.0067 9.54457C17.3045 9.77851 17.6868 10.0789 18.0086 10.3713C18.2206 10.5639 18.4411 10.7833 18.6149 11.0116C18.7621 11.2049 19 11.56 19 12C19 12.44 18.7621 12.7951 18.6149 12.9884C18.4411 13.2166 18.2206 13.4361 18.0086 13.6287C17.6868 13.9211 17.3045 14.2215 17.0067 14.4554C16.9168 14.5261 16.8345 14.5907 16.764 14.6472L16.7491 14.6592C16.6932 14.7043 16.5956 14.7828 16.502 14.8401L16.4982 14.8424C16.4328 14.8828 16.0271 15.1332 15.5543 14.9057C15.0837 14.6792 15.0241 14.2097 15.0141 14.1308L15.0137 14.1271C14.9996 14.0179 14.9999 13.8927 15 13.8225L15.0001 13.8038V13H10C9.44772 13 9 12.5523 9 12Z',
  d7: 'M10 22V2H2V22H10Z',
  d8: 'M14 22H22V2H14',
  d9: 'M10 12H17.6907M15.5 9.5L18 12L15.5 14.5',
  d10: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H10C10.4142 1.25 10.75 1.58579 10.75 2V22C10.75 22.4142 10.4142 22.75 10 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V2Z',
  d11: 'M20.8611 3.20455H14.25V1.25H21.8056C22.3272 1.25 22.75 1.68754 22.75 2.22727V21.7727C22.75 22.3125 22.3272 22.75 21.8056 22.75H14.25V20.7955H20.8611V3.20455Z',
  d12: 'M16.2071 8.79297L19.4142 12.0001L16.2071 15.2072L14.7929 13.793L15.5858 13.0001H10V11.0001H15.5858L14.7929 10.2072L16.2071 8.79297Z',
} as const;

export const IconTransitionRightStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-right-stroke-rounded IconTransitionRightStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTransitionRightDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-right-duotone-rounded IconTransitionRightDuotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTransitionRightTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-right-twotone-rounded IconTransitionRightTwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTransitionRightSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-right-solid-rounded IconTransitionRightSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconTransitionRightBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-right-bulk-rounded IconTransitionRightBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconTransitionRightStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-right-stroke-sharp IconTransitionRightStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTransitionRightSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-right-solid-sharp IconTransitionRightSolidSharp"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const iconPackOfTransitionRight: TheIconSelfPack = {
  name: 'TransitionRight',
  StrokeRounded: IconTransitionRightStrokeRounded,
  DuotoneRounded: IconTransitionRightDuotoneRounded,
  TwotoneRounded: IconTransitionRightTwotoneRounded,
  SolidRounded: IconTransitionRightSolidRounded,
  BulkRounded: IconTransitionRightBulkRounded,
  StrokeSharp: IconTransitionRightStrokeSharp,
  SolidSharp: IconTransitionRightSolidSharp,
};