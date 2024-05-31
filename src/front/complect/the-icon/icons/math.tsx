import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M5.5 12.5L5.97454 12.1836C6.44849 11.8677 6.68546 11.7097 6.91293 11.7803C7.1404 11.851 7.24617 12.1154 7.45772 12.6443L9 16.5L11.0883 10.2351C11.5283 8.91505 11.7483 8.25503 12.2721 7.87752C12.7959 7.5 13.4916 7.5 14.883 7.5H18.5',
  d3: 'M17 12L15.5 13.5M15.5 13.5L14 15M15.5 13.5L17 15M15.5 13.5L14 12',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572ZM18.5001 6.5C19.0524 6.5 19.5001 6.94772 19.5001 7.5C19.5001 8.05229 19.0524 8.5 18.5001 8.5H14.8831C14.1644 8.5 13.7093 8.50151 13.3657 8.54074C13.0477 8.57705 12.9295 8.63645 12.8569 8.68876C12.7843 8.74107 12.6906 8.83444 12.5556 9.12466C12.4097 9.43819 12.2644 9.86945 12.0371 10.5513L9.94879 16.8162C9.81609 17.2143 9.44894 17.4872 9.02948 17.4996C8.61002 17.5119 8.22748 17.261 8.07163 16.8714L6.52935 13.0157L6.05481 13.3321C5.59528 13.6384 4.97441 13.5142 4.66806 13.0547C4.3617 12.5952 4.48588 11.9743 4.94541 11.668L5.41995 11.3516L5.45811 11.3261C5.66051 11.191 5.89203 11.0365 6.10535 10.9346C6.3567 10.8146 6.75113 10.6829 7.20965 10.8254C7.66817 10.9678 7.9186 11.2997 8.05773 11.541C8.1758 11.7458 8.27903 12.0043 8.36928 12.2303L8.3863 12.2729L8.91471 13.5939L10.1563 9.86913L10.1563 9.86909C10.3621 9.25162 10.5425 8.71043 10.7422 8.28106C10.9581 7.81688 11.2363 7.39149 11.6875 7.06628C12.1387 6.74107 12.6302 6.61172 13.1389 6.55365C13.6094 6.49993 14.1799 6.49996 14.8307 6.5L18.5001 6.5ZM14.7071 11.2929C14.3166 10.9024 13.6834 10.9024 13.2929 11.2929C12.9024 11.6834 12.9024 12.3166 13.2929 12.7071L14.0858 13.5L13.2929 14.2929C12.9024 14.6834 12.9024 15.3166 13.2929 15.7071C13.6834 16.0976 14.3166 16.0976 14.7071 15.7071L15.5 14.9142L16.2929 15.7071C16.6834 16.0976 17.3166 16.0976 17.7071 15.7071C18.0976 15.3166 18.0976 14.6834 17.7071 14.2929L16.9142 13.5L17.7071 12.7071C18.0976 12.3166 18.0976 11.6834 17.7071 11.2929C17.3166 10.9024 16.6834 10.9024 16.2929 11.2929L15.5 12.0858L14.7071 11.2929Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d6: 'M18.5001 6.5C19.0524 6.5 19.5001 6.94772 19.5001 7.5C19.5001 8.05229 19.0524 8.5 18.5001 8.5H14.8831C14.1644 8.5 13.7093 8.50151 13.3657 8.54074C13.0477 8.57705 12.9295 8.63645 12.8569 8.68876C12.7843 8.74107 12.6906 8.83444 12.5556 9.12466C12.4097 9.43819 12.2644 9.86945 12.0371 10.5513L9.94879 16.8162C9.81609 17.2143 9.44894 17.4872 9.02948 17.4996C8.61002 17.5119 8.22748 17.261 8.07163 16.8714L6.52935 13.0157L6.05481 13.3321C5.59528 13.6384 4.97441 13.5142 4.66806 13.0547C4.3617 12.5952 4.48588 11.9743 4.94541 11.668L5.41995 11.3516L5.45811 11.3261C5.66051 11.191 5.89203 11.0365 6.10535 10.9346C6.3567 10.8146 6.75113 10.6829 7.20965 10.8254C7.66817 10.9678 7.9186 11.2997 8.05773 11.541C8.1758 11.7458 8.27903 12.0043 8.36928 12.2303L8.3863 12.2729L8.91471 13.5939L10.1563 9.86913C10.3621 9.25165 10.5425 8.71044 10.7422 8.28106C10.9581 7.81688 11.2363 7.39149 11.6875 7.06628C12.1387 6.74107 12.6302 6.61172 13.1389 6.55365C13.6094 6.49993 14.1799 6.49996 14.8307 6.5L18.5001 6.5Z',
  d7: 'M13.2929 11.2929C13.6834 10.9024 14.3166 10.9024 14.7071 11.2929L15.5 12.0858L16.2929 11.2929C16.6834 10.9024 17.3166 10.9024 17.7071 11.2929C18.0976 11.6834 18.0976 12.3166 17.7071 12.7071L16.9142 13.5L17.7071 14.2929C18.0976 14.6834 18.0976 15.3166 17.7071 15.7071C17.3166 16.0976 16.6834 16.0976 16.2929 15.7071L15.5 14.9142L14.7071 15.7071C14.3166 16.0976 13.6834 16.0976 13.2929 15.7071C12.9024 15.3166 12.9024 14.6834 13.2929 14.2929L14.0858 13.5L13.2929 12.7071C12.9024 12.3166 12.9024 11.6834 13.2929 11.2929Z',
  d8: 'M3 21H21V3H3V21Z',
  d9: 'M5.5 12.5L7 11.5L9 16.5L12 7.5L18.5 7.5',
  d10: 'M17.5 11.5L15.5 13.5M15.5 13.5L13.5 15.5M15.5 13.5L17.5 15.5M15.5 13.5L13.5 11.5',
  d11: 'M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V21C21.75 21.4142 21.4142 21.75 21 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V3ZM12.5386 8.25L18.4981 8.25V6.75L11.9981 6.75C11.6752 6.75 11.3886 6.95657 11.2865 7.26283L8.93401 14.3204L7.69441 11.2215C7.61047 11.0116 7.43637 10.8508 7.22052 10.7838C7.00467 10.7167 6.77009 10.7506 6.58203 10.876L5.08203 11.876L5.91408 13.124L6.64499 12.6368L8.3017 16.7785C8.41859 17.0708 8.70549 17.2589 9.02009 17.2497C9.33468 17.2404 9.61004 17.0358 9.70957 16.7372L12.5386 8.25ZM16.9688 16.0304L15.4991 14.5607L14.0294 16.0304L12.9688 14.9697L14.4384 13.5001L12.9688 12.0304L14.0294 10.9697L15.4991 12.4394L16.9688 10.9697L18.0294 12.0304L16.5597 13.5001L18.0294 14.9697L16.9688 16.0304Z',
} as const;

export const IconMathStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="math-stroke-rounded IconMathStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMathDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="math-duotone-rounded IconMathDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconMathTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="math-twotone-rounded IconMathTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconMathSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="math-solid-rounded IconMathSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMathBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="math-bulk-rounded IconMathBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconMathStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="math-stroke-sharp IconMathStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMathSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="math-solid-sharp IconMathSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMath: TheIconSelfPack = {
  name: 'Math',
  StrokeRounded: IconMathStrokeRounded,
  DuotoneRounded: IconMathDuotoneRounded,
  TwotoneRounded: IconMathTwotoneRounded,
  SolidRounded: IconMathSolidRounded,
  BulkRounded: IconMathBulkRounded,
  StrokeSharp: IconMathStrokeSharp,
  SolidSharp: IconMathSolidSharp,
};