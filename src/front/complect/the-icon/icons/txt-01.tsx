import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.5 13V12.1963C3.5 9.22892 3.5 7.74523 3.96894 6.56024C4.72281 4.65521 6.31714 3.15255 8.33836 2.44201C9.59563 2.00003 11.1698 2.00003 14.3182 2.00003C16.1173 2.00003 17.0168 2.00003 17.7352 2.25259C18.8902 2.65861 19.8012 3.51728 20.232 4.60587C20.5 5.283 20.5 6.13082 20.5 7.82646V12.0142V13',
  d2: 'M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2',
  d3: 'M10.1172 16L11.9995 19M11.9995 19L13.8819 22M11.9995 19L13.8819 16M11.9995 19L10.1172 22M16.7353 16H18.6176M18.6176 16H20.5M18.6176 16V22M3.5 16H5.38235M5.38235 16H7.26471M5.38235 16V22',
  d4: 'M9.49879 8.49792C5.89879 8.49792 3.5 9.5 3.5 12.1963V13H20.5V7.82643C20.5 6.13079 20.5 5.28297 20.232 4.60583C19.8012 3.51725 18.8902 2.65858 17.7352 2.25256C17.0168 2 16.1172 2 14.3182 2C13.9881 2 13.6753 2 13.3783 2.00051C9.49879 2.00051 10.5332 5.05948 10.5499 6.55167C10.5909 8.19467 9.8002 8.49792 9.49879 8.49792Z',
  d5: 'M10.1211 16L12.0034 19M12.0034 19L13.8858 22M12.0034 19L13.8858 16M12.0034 19L10.1211 22M16.7392 16H18.6216M18.6216 16H20.5039M18.6216 16V22M3.50391 16H5.38626M5.38626 16H7.26861M5.38626 16V22',
  d6: 'M3.72368 13.75C4.26144 13.75 4.69737 13.3195 4.69737 12.7885L4.69738 11.7652C4.69737 11.4982 4.69754 10.8596 4.97816 10.3875C5.15109 10.0965 5.37251 9.85337 5.59996 9.72955C5.96647 9.53003 6.38666 9.41667 6.83333 9.41667C6.98046 9.41667 7.13864 9.42314 7.31624 9.43138L7.38206 9.43446C7.53697 9.44174 7.70556 9.44966 7.8737 9.45315C8.25379 9.46105 8.69733 9.44904 9.12548 9.33432C9.95945 9.11086 10.6109 8.45945 10.8343 7.62548C10.949 7.19733 10.961 6.75379 10.9532 6.3737C10.9497 6.20562 10.9417 6.03692 10.9345 5.88206L10.9314 5.81624C10.9231 5.63864 10.9167 5.48046 10.9167 5.33333C10.9167 4.86564 11.0409 4.42698 11.2583 4.04857C11.385 3.82798 11.6057 3.62609 11.9105 3.44878C12.3726 3.17987 12.926 3.17738 13.2642 3.17585C13.6023 3.17433 13.9591 3.17316 14.2572 3.17316C16.0914 3.17316 16.7582 3.18692 17.2614 3.36158C18.1337 3.66441 18.7997 4.29659 19.11 5.07103C19.1878 5.26511 19.2427 5.52002 19.2721 5.96153C19.3021 6.41159 19.3026 6.98607 19.3026 7.81394V12.7885C19.3026 13.3195 19.7386 13.75 20.2763 13.75C20.8141 13.75 21.25 13.3195 21.25 12.7885V7.78121C21.25 6.99374 21.25 6.35586 21.2153 5.83514C21.1795 5.29867 21.1039 4.82043 20.9208 4.36341C20.3922 3.04443 19.2841 2.02533 17.9072 1.54735C17.0482 1.24915 16.0155 1.24951 14.4607 1.25005L13.5134 1.25012L13.5 1.25L13.4649 1.25015C10.9565 1.25185 9.40174 1.28168 8.1118 1.72949C5.8915 2.50027 4.11806 4.13859 3.27491 6.24261C2.99393 6.94378 2.86942 7.69695 2.80918 8.60017C2.74999 9.48756 2.75 10.5838 2.75 11.9814V12.7885C2.75 13.3195 3.18593 13.75 3.72368 13.75Z',
  d7: 'M2.75 16C2.75 15.5858 3.08579 15.25 3.5 15.25H7.26471C7.67892 15.25 8.01471 15.5858 8.01471 16C8.01471 16.4142 7.67892 16.75 7.26471 16.75H6.13235V22C6.13235 22.4142 5.79657 22.75 5.38235 22.75C4.96814 22.75 4.63235 22.4142 4.63235 22V16.75H3.5C3.08579 16.75 2.75 16.4142 2.75 16Z',
  d8: 'M9.71867 15.3648C10.0695 15.1447 10.5324 15.2506 10.7526 15.6015L11.9996 17.589L13.2467 15.6015C13.4668 15.2506 13.9297 15.1447 14.2806 15.3648C14.6315 15.585 14.7374 16.0479 14.5173 16.3987L12.8851 19.0001L14.5173 21.6015C14.7374 21.9523 14.6315 22.4152 14.2806 22.6354C13.9297 22.8555 13.4668 22.7496 13.2467 22.3987L11.9996 20.4112L10.7526 22.3987C10.5324 22.7496 10.0695 22.8555 9.71867 22.6354C9.3678 22.4152 9.26184 21.9523 9.48199 21.6015L11.1142 19.0001L9.48199 16.3987C9.26184 16.0479 9.3678 15.585 9.71867 15.3648Z',
  d9: 'M15.9883 16C15.9883 15.5858 16.3241 15.25 16.7383 15.25H20.503C20.9172 15.25 21.253 15.5858 21.253 16C21.253 16.4142 20.9172 16.75 20.503 16.75H19.3706V22C19.3706 22.4142 19.0348 22.75 18.6206 22.75C18.2064 22.75 17.8706 22.4142 17.8706 22V16.75H16.7383C16.3241 16.75 15.9883 16.4142 15.9883 16Z',
  d10: 'M10.11 16L11.9902 19M11.9902 19L13.8706 22M11.9902 19L13.8706 16M11.9902 19L10.11 22M16.7209 16H18.6011M18.6011 16H20.4815M18.6011 16V22M3.5 16H5.3803M5.3803 16H7.26061M5.3803 16V22',
  d11: 'M20.4395 12.9975V2.09993C20.4395 2.04474 20.3949 2 20.3399 2H10.5066L3.47919 8.9826L3.47852 13.0197M10.5066 2.57756V8.9826H4.06009',
  d12: 'M20.2763 1.25C20.8141 1.25 21.25 1.68754 21.25 2.22727V13.0682H19.3026V3.20455L11.5132 3.20455L11.5132 10.0455H4.69737L4.69737 13.0682H2.75V8.66338L10.1362 1.25H20.2763Z',
  d13: 'M10.3539 15.25L11.9995 17.5889L13.6452 15.25L14.9158 16.0472L12.885 19L14.9158 21.9528L13.6452 22.75L11.9995 20.4111L10.3539 22.75L9.08327 21.9528L11.1141 19L9.08327 16.0472L10.3539 15.25ZM2.75 15.25H8.01471V16.75H6.13235V22.75H4.63235V16.75H2.75V15.25ZM15.9853 15.25H21.25V16.75H19.3676V22.75H17.8676V16.75H15.9853V15.25Z',
} as const;

export const IconTxt01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="txt-01-stroke-rounded IconTxt01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconTxt01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="txt-01-duotone-rounded IconTxt01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTxt01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="txt-01-twotone-rounded IconTxt01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTxt01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="txt-01-solid-rounded IconTxt01SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTxt01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="txt-01-bulk-rounded IconTxt01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTxt01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="txt-01-stroke-sharp IconTxt01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTxt01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="txt-01-solid-sharp IconTxt01SolidSharp"
    >
      <path 
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

export const iconPackOfTxt01: TheIconSelfPack = {
  name: 'Txt01',
  StrokeRounded: IconTxt01StrokeRounded,
  DuotoneRounded: IconTxt01DuotoneRounded,
  TwotoneRounded: IconTxt01TwotoneRounded,
  SolidRounded: IconTxt01SolidRounded,
  BulkRounded: IconTxt01BulkRounded,
  StrokeSharp: IconTxt01StrokeSharp,
  SolidSharp: IconTxt01SolidSharp,
};