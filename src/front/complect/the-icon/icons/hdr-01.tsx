import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.5 22V19M3.5 19V16M3.5 19H6.79576M6.79576 16V19M6.79576 19V22M16.5449 22V19.6M16.5449 19.6V17.2C16.5449 16.321 16.6209 16 17.5337 16H19.0168C19.836 16 20.5 16.8059 20.5 17.8C20.5 18.7941 19.836 19.6 19.0168 19.6M16.5449 19.6H19.0168M19.0168 19.6L20.0416 22M13.6997 19C13.6997 20.6569 12.4352 22 10.8754 22C10.5235 22 10.3475 22 10.2164 21.9196C9.90259 21.7272 9.93398 21.3376 9.93398 21V17C9.93398 16.6624 9.90259 16.2728 10.2164 16.0804C10.3475 16 10.5235 16 10.8754 16C12.4352 16 13.6997 17.3431 13.6997 19Z',
  d2: 'M3.5 13V12.1963C3.5 9.22892 3.5 7.74523 3.96894 6.56024C4.72281 4.65521 6.31714 3.15255 8.33836 2.44201C9.59563 2.00003 11.1698 2.00003 14.3182 2.00003C16.1173 2.00003 17.0168 2.00003 17.7352 2.25259C18.8902 2.65861 19.8012 3.51728 20.232 4.60587C20.5 5.283 20.5 6.13082 20.5 7.82646V12.0142V13',
  d3: 'M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2',
  d4: 'M9.49879 8.49792C5.89879 8.49792 3.5 9.5 3.5 12.1963V13H20.5V7.82643C20.5 6.13079 20.5 5.28297 20.232 4.60583C19.8012 3.51725 18.8902 2.65858 17.7352 2.25256C17.0168 2 16.1172 2 14.3182 2C13.9881 2 13.6753 2 13.3783 2.00051C9.49879 2.00051 10.5332 5.05948 10.5499 6.55167C10.5909 8.19467 9.8002 8.49792 9.49879 8.49792Z',
  d5: 'M3.72368 13.75C4.26144 13.75 4.69737 13.3195 4.69737 12.7885L4.69738 11.7652C4.69737 11.4982 4.69754 10.8596 4.97816 10.3875C5.15109 10.0965 5.37251 9.85337 5.59996 9.72955C5.96647 9.53003 6.38666 9.41667 6.83333 9.41667C6.98046 9.41667 7.13864 9.42314 7.31624 9.43138L7.38206 9.43446C7.53697 9.44174 7.70556 9.44966 7.8737 9.45315C8.25379 9.46105 8.69733 9.44904 9.12548 9.33432C9.95945 9.11086 10.6109 8.45945 10.8343 7.62548C10.949 7.19733 10.961 6.75379 10.9532 6.3737C10.9497 6.20562 10.9417 6.03692 10.9345 5.88206L10.9314 5.81624C10.9231 5.63864 10.9167 5.48046 10.9167 5.33333C10.9167 4.86564 11.0409 4.42698 11.2583 4.04857C11.385 3.82798 11.6057 3.62609 11.9105 3.44878C12.3726 3.17987 12.926 3.17738 13.2642 3.17585C13.6023 3.17433 13.9591 3.17316 14.2572 3.17316C16.0914 3.17316 16.7582 3.18692 17.2614 3.36158C18.1337 3.66441 18.7997 4.29659 19.11 5.07103C19.1878 5.26511 19.2427 5.52002 19.2721 5.96153C19.3021 6.41159 19.3026 6.98607 19.3026 7.81394V12.7885C19.3026 13.3195 19.7386 13.75 20.2763 13.75C20.8141 13.75 21.25 13.3195 21.25 12.7885V7.78121C21.25 6.99374 21.25 6.35586 21.2153 5.83514C21.1795 5.29867 21.1039 4.82043 20.9208 4.36341C20.3922 3.04443 19.2841 2.02533 17.9072 1.54735C17.0482 1.24915 16.0155 1.24951 14.4607 1.25005L13.5134 1.25012L13.5 1.25L13.4649 1.25015C10.9565 1.25185 9.40174 1.28168 8.1118 1.72949C5.8915 2.50027 4.11806 4.13859 3.27491 6.24261C2.99393 6.94378 2.86942 7.69695 2.80918 8.60017C2.74999 9.48756 2.75 10.5838 2.75 11.9814V12.7885C2.75 13.3195 3.18593 13.75 3.72368 13.75Z',
  d6: 'M10.8754 15.25C12.8914 15.25 14.4497 16.9722 14.4497 19C14.4497 21.0278 12.8914 22.75 10.8754 22.75C10.7211 22.75 10.5323 22.7501 10.3912 22.7365C10.2304 22.721 10.0263 22.6829 9.82432 22.559C9.43078 22.3176 9.27742 21.9501 9.22093 21.6555C9.179 21.4368 9.18186 21.1955 9.18349 21.0583V16.9418C9.18186 16.8046 9.179 16.5632 9.22093 16.3446C9.27742 16.05 9.43078 15.6824 9.82432 15.441C10.0263 15.3172 10.2304 15.279 10.3912 15.2635C10.5323 15.2499 10.7211 15.25 10.8754 15.25ZM10.684 16.7507L10.684 21.2493C10.684 21.2493 10.799 21.25 10.8754 21.25C11.979 21.25 12.9497 20.2859 12.9497 19C12.9497 17.7141 11.979 16.75 10.8754 16.75L10.684 16.7507ZM3.5 15.25C3.91421 15.25 4.25 15.5858 4.25 16V18.25H6.04576V16C6.04576 15.5858 6.38155 15.25 6.79576 15.25C7.20998 15.25 7.54576 15.5858 7.54576 16V22C7.54576 22.4142 7.20998 22.75 6.79576 22.75C6.38155 22.75 6.04576 22.4142 6.04576 22V19.75H4.25V22C4.25 22.4142 3.91421 22.75 3.5 22.75C3.08579 22.75 2.75 22.4142 2.75 22V16C2.75 15.5858 3.08579 15.25 3.5 15.25ZM17.3118 16.761L17.2949 18.85H19.0168C19.2924 18.85 19.75 18.5223 19.75 17.8C19.75 17.0777 19.2924 16.75 19.0168 16.75L17.3118 16.761ZM17.2949 20.35V22C17.2949 22.4142 16.9591 22.75 16.5449 22.75C16.1307 22.75 15.7949 22.4142 15.7949 22V17.2C15.7949 16.9788 15.799 16.7482 15.8282 16.5383C15.8574 16.3281 15.9197 16.0729 16.0826 15.8403C16.4463 15.3207 17.0503 15.25 17.5337 15.25H19.0168C20.3795 15.25 21.25 16.5341 21.25 17.8C21.25 18.712 20.7982 19.6334 20.0361 20.0773L20.7313 21.7055C20.894 22.0864 20.717 22.5271 20.3361 22.6898C19.9551 22.8524 19.5145 22.6755 19.3518 22.2945L18.5216 20.35H17.2949Z',
  d7: 'M20.501 12.9785V2.0832C20.501 2.02808 20.4562 1.9834 20.401 1.9834H10.504L3.50684 8.97463V12.959M10.504 2.51187V8.96293L4.03169 8.97375',
  d8: 'M3.50195 14.9805V18.4678M3.50195 18.4678L3.52147 21.9532M3.50195 18.4678H7.0007M7.0007 18.4678V14.9805M7.0007 18.4678V21.9551M16.4996 19.0639V15.4873L18.8525 15.4663C19.1703 15.4634 19.4937 15.523 19.7505 15.7099C20.1962 16.0343 20.4064 16.4388 20.4956 17.0682C20.4956 17.9826 20.2846 18.5061 19.6216 18.9114C19.4419 19.0213 19.2305 19.0639 19.0198 19.0639M16.4996 19.0639V21.9532M16.4996 19.0639H19.0198M19.0198 19.0639L20.0505 21.9844M10.0059 15.4388V21.4775C11.8294 21.5531 12.8127 21.0804 13.4174 20.0134C13.9505 19.0728 13.9582 17.8749 13.4214 16.9364C12.6757 15.6327 11.4896 15.3881 10.0059 15.4388Z',
  d9: 'M4.25 15.25V18.25H6.25V15.25H7.75V22.75H6.25V19.75H4.25V22.75H2.75V15.25H4.25ZM9.25 15.25H11C13.016 15.25 14.5743 16.9722 14.5743 19C14.5743 21.0278 13.016 22.75 11 22.75H9.25V15.25ZM10.75 16.75V21.25H11C12.1036 21.25 13.0743 20.2859 13.0743 19C13.0743 17.7141 12.1036 16.75 11 16.75H10.75ZM15.75 15.25H19.0168C20.3795 15.25 21.25 16.5341 21.25 17.8C21.25 18.712 20.7982 19.6334 20.0361 20.0773L21.0258 22.161L19.6463 22.75L18.5216 20.35H17.25V22.75H15.75V15.25ZM17.25 18.85H19.0168C19.2924 18.85 19.75 18.5223 19.75 17.8C19.75 17.0777 19.2924 16.75 19.0168 16.75H17.25V18.85Z',
  d10: 'M20.2763 1.25C20.8141 1.25 21.25 1.68754 21.25 2.22727V13.0682H19.3026V3.20455L11.5132 3.20455L11.5132 10.0455H4.69737L4.69737 13.0682H2.75V8.66338L10.1362 1.25H20.2763Z',
};

export const IconHdr01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hdr-01-stroke-rounded IconHdr01StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHdr01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hdr-01-duotone-rounded IconHdr01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        d={d.d1} 
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

export const IconHdr01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hdr-01-twotone-rounded IconHdr01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHdr01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hdr-01-solid-rounded IconHdr01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHdr01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hdr-01-bulk-rounded IconHdr01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHdr01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hdr-01-stroke-sharp IconHdr01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHdr01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hdr-01-solid-sharp IconHdr01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHdr01: TheIconSelfPack = {
  name: 'Hdr01',
  StrokeRounded: IconHdr01StrokeRounded,
  DuotoneRounded: IconHdr01DuotoneRounded,
  TwotoneRounded: IconHdr01TwotoneRounded,
  SolidRounded: IconHdr01SolidRounded,
  BulkRounded: IconHdr01BulkRounded,
  StrokeSharp: IconHdr01StrokeSharp,
  SolidSharp: IconHdr01SolidSharp,
};