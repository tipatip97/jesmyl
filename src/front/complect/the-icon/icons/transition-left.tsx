import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 6C22 4.59987 22 3.8998 21.7275 3.36502C21.4878 2.89462 21.1054 2.51217 20.635 2.27248C20.1002 2 19.4001 2 18 2C16.5999 2 15.8998 2 15.365 2.27248C14.8946 2.51217 14.5122 2.89462 14.2725 3.36502C14 3.8998 14 4.59987 14 6V18C14 19.4001 14 20.1002 14.2725 20.635C14.5122 21.1054 14.8946 21.4878 15.365 21.7275C15.8998 22 16.5999 22 18 22C19.4001 22 20.1002 22 20.635 21.7275C21.1054 21.4878 21.4878 21.1054 21.7275 20.635C22 20.1002 22 19.4001 22 18V6Z',
  d2: 'M6 12H14M6 12C6 11.2998 7.9943 9.99153 8.5 9.5M6 12C6 12.7002 7.9943 14.0085 8.5 14.5',
  d3: 'M8 22C5.66111 22 4.49167 22 3.63789 21.4635C3.19267 21.1838 2.81621 20.8073 2.53647 20.3621C2 19.5083 2 18.3389 2 16V8C2 5.66111 2 4.49167 2.53647 3.63789C2.81621 3.19267 3.19267 2.81621 3.63789 2.53647C4.49167 2 5.66111 2 8 2',
  d4: 'M17.9686 1.25C17.2952 1.24999 16.7445 1.24998 16.2969 1.28655C15.8337 1.3244 15.4153 1.40514 15.0245 1.60423C14.413 1.91582 13.9158 2.413 13.6042 3.02453C13.4051 3.41527 13.3244 3.83367 13.2866 4.29693C13.25 4.74448 13.25 5.29518 13.25 5.96853V5.96856V18.0314V18.0315C13.25 18.7048 13.25 19.2555 13.2866 19.7031C13.3244 20.1663 13.4051 20.5847 13.6042 20.9755C13.9158 21.587 14.413 22.0842 15.0245 22.3958C15.4153 22.5949 15.8337 22.6756 16.2969 22.7134C16.7445 22.75 17.2952 22.75 17.9686 22.75H18.0314C18.7048 22.75 19.2555 22.75 19.7031 22.7134C20.1663 22.6756 20.5847 22.5949 20.9755 22.3958C21.587 22.0842 22.0842 21.587 22.3958 20.9755C22.5949 20.5847 22.6756 20.1663 22.7134 19.7031C22.75 19.2555 22.75 18.7048 22.75 18.0314V5.96858V5.96857C22.75 5.2952 22.75 4.74449 22.7134 4.29693C22.6756 3.83367 22.5949 3.41527 22.3958 3.02453C22.0842 2.413 21.587 1.91582 20.9755 1.60423C20.5847 1.40514 20.1663 1.3244 19.7031 1.28655C19.2555 1.24998 18.7048 1.24999 18.0314 1.25H18.0314H17.9686H17.9686Z',
  d5: 'M5.60856 3.31239C6.24053 3.2511 7.06078 3.25 8.25 3.25C8.80228 3.25 9.25 2.80229 9.25 2.25C9.25 1.69772 8.80228 1.25 8.25 1.25H8.19953H8.19951C7.07296 1.24999 6.15539 1.24997 5.4155 1.32173C4.64919 1.39605 3.96871 1.55466 3.35586 1.93974C2.78344 2.29942 2.29942 2.78344 1.93974 3.35586C1.55466 3.96871 1.39605 4.64919 1.32173 5.4155C1.24997 6.1554 1.24998 7.07296 1.25 8.19952V15.8005C1.24998 16.927 1.24997 17.8446 1.32173 18.5845C1.39605 19.3508 1.55466 20.0313 1.93974 20.6441C2.29942 21.2166 2.78344 21.7006 3.35586 22.0603C3.96871 22.4453 4.64919 22.604 5.4155 22.6783C6.15538 22.75 7.07294 22.75 8.19948 22.75H8.19953H8.25C8.80228 22.75 9.25 22.3023 9.25 21.75C9.25 21.1977 8.80228 20.75 8.25 20.75C7.06078 20.75 6.24053 20.7489 5.60856 20.6876C4.99197 20.6278 4.66085 20.5182 4.41992 20.3668C4.10191 20.167 3.83301 19.8981 3.63319 19.5801C3.4818 19.3392 3.37219 19.008 3.31239 18.3914C3.2511 17.7595 3.25 16.9392 3.25 15.75V8.25C3.25 7.06078 3.2511 6.24053 3.31239 5.60856C3.37219 4.99198 3.4818 4.66085 3.63319 4.41992C3.83301 4.10191 4.10191 3.83301 4.41992 3.63319C4.66085 3.48181 4.99197 3.37219 5.60856 3.31239Z',
  d6: 'M15 12C15 11.4477 14.5523 11 14 11H8.99993V10.1962L8.99996 10.1775C9.00012 10.1073 9.0004 9.98207 8.98635 9.87285L8.98589 9.86923C8.97588 9.79033 8.91634 9.32077 8.44567 9.0943C7.97289 8.86682 7.56722 9.1172 7.50177 9.15759L7.49803 9.1599C7.40444 9.21722 7.30685 9.29574 7.25087 9.34079L7.25086 9.3408L7.23598 9.35276C7.16547 9.40925 7.0832 9.47389 6.99326 9.54457C6.69554 9.77851 6.31325 10.0789 5.99144 10.3713C5.7794 10.5639 5.5589 10.7833 5.38506 11.0116C5.23785 11.2049 5 11.56 5 12C5 12.44 5.23785 12.7951 5.38506 12.9884C5.5589 13.2166 5.7794 13.4361 5.99144 13.6287C6.31325 13.9211 6.69553 14.2215 6.99326 14.4554C7.08322 14.5261 7.16546 14.5907 7.23598 14.6472L7.25086 14.6592C7.30685 14.7043 7.40444 14.7828 7.49803 14.8401L7.50177 14.8424C7.56722 14.8828 7.9729 15.1332 8.44567 14.9057C8.91634 14.6792 8.97588 14.2097 8.98589 14.1308L8.98635 14.1271C9.0004 14.0179 9.00012 13.8927 8.99996 13.8225L8.99993 13.8038V13H14C14.5523 13 15 12.5523 15 12Z',
  d7: 'M14 22V2H22V22H14Z',
  d8: 'M10 22H2V2H10',
  d9: 'M14 12H6.40668M8.5 9.5L6 12L8.5 14.5',
  d10: 'M22.75 2C22.75 1.58579 22.4142 1.25 22 1.25H14C13.5858 1.25 13.25 1.58579 13.25 2V22C13.25 22.4142 13.5858 22.75 14 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22V2Z',
  d11: 'M3.13889 3.20455H9.75V1.25H2.19444C1.67284 1.25 1.25 1.68754 1.25 2.22727V21.7727C1.25 22.3125 1.67284 22.75 2.19444 22.75H9.75V20.7955H3.13889V3.20455Z',
  d12: 'M7.79304 8.79297L4.58594 12.0001L7.79304 15.2072L9.20726 13.793L8.41436 13.0001H14.0002V11.0001H8.41436L9.20726 10.2072L7.79304 8.79297Z',
} as const;

export const IconTransitionLeftStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-left-stroke-rounded IconTransitionLeftStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconTransitionLeftDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-left-duotone-rounded IconTransitionLeftDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconTransitionLeftTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-left-twotone-rounded IconTransitionLeftTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTransitionLeftSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-left-solid-rounded IconTransitionLeftSolidRounded"
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

export const IconTransitionLeftBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-left-bulk-rounded IconTransitionLeftBulkRounded"
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

export const IconTransitionLeftStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-left-stroke-sharp IconTransitionLeftStrokeSharp"
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

export const IconTransitionLeftSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="transition-left-solid-sharp IconTransitionLeftSolidSharp"
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

export const iconPackOfTransitionLeft: TheIconSelfPack = {
  name: 'TransitionLeft',
  StrokeRounded: IconTransitionLeftStrokeRounded,
  DuotoneRounded: IconTransitionLeftDuotoneRounded,
  TwotoneRounded: IconTransitionLeftTwotoneRounded,
  SolidRounded: IconTransitionLeftSolidRounded,
  BulkRounded: IconTransitionLeftBulkRounded,
  StrokeSharp: IconTransitionLeftStrokeSharp,
  SolidSharp: IconTransitionLeftSolidSharp,
};