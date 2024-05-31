import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M18.4924 14H18.5014M18.4922 17.5H18.5012',
  d3: 'M7 14.5C7 14.5 8.5 12.5 10 14M7 14.5V18M7 14.5V13',
  d4: 'M12 15.5V14.75C12 13.7835 12.7835 13 13.75 13C14.7165 13 15.5 13.7835 15.5 14.75V15.5H12ZM12 15.5V16.25C12 17.2165 12.7835 18 13.75 18C14.2397 18 14.6824 17.7989 15 17.4747',
  d5: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM18.4924 13C17.9401 13 17.4924 13.4477 17.4924 14C17.4924 14.5523 17.9401 15 18.4924 15H18.5014C19.0536 15 19.5014 14.5523 19.5014 14C19.5014 13.4477 19.0536 13 18.5014 13H18.4924ZM18.4922 16.5C17.9399 16.5 17.4922 16.9477 17.4922 17.5C17.4922 18.0523 17.9399 18.5 18.4922 18.5H18.5012C19.0535 18.5 19.5012 18.0523 19.5012 17.5C19.5012 16.9477 19.0535 16.5 18.5012 16.5H18.4922ZM7.74779 12.9421C7.71821 12.5549 7.39471 12.25 7 12.25C6.58579 12.25 6.25 12.5858 6.25 13V18C6.25 18.4142 6.58579 18.75 7 18.75C7.41421 18.75 7.75 18.4142 7.75 18V14.7801C7.76208 14.7676 7.77481 14.7546 7.78814 14.7413C7.92267 14.6067 8.10175 14.4542 8.30173 14.3431C8.50191 14.2319 8.68517 14.1828 8.84855 14.1937C8.99534 14.2034 9.20543 14.2661 9.46967 14.5303C9.76256 14.8232 10.2374 14.8232 10.5303 14.5303C10.8232 14.2374 10.8232 13.7626 10.5303 13.4697C10.0446 12.9839 9.50466 12.7341 8.94833 12.697C8.49144 12.6665 8.08238 12.7834 7.74779 12.9421ZM12.75 14.75C12.75 14.1977 13.1977 13.75 13.75 13.75C14.3023 13.75 14.75 14.1977 14.75 14.75H12.75ZM15.5 16.25H12.75C12.75 16.8023 13.1977 17.25 13.75 17.25C14.03 17.25 14.2819 17.1359 14.4643 16.9498C14.7542 16.654 15.2291 16.6492 15.5249 16.9391C15.8208 17.229 15.8256 17.7038 15.5357 17.9997C15.0828 18.4618 14.4494 18.75 13.75 18.75C12.3693 18.75 11.25 17.6307 11.25 16.25V14.75C11.25 13.3693 12.3693 12.25 13.75 12.25C15.1307 12.25 16.25 13.3693 16.25 14.75V15.5C16.25 15.9142 15.9142 16.25 15.5 16.25Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M17.4924 14C17.4924 13.4477 17.9401 13 18.4924 13H18.5014C19.0536 13 19.5014 13.4477 19.5014 14C19.5014 14.5523 19.0536 15 18.5014 15H18.4924C17.9401 15 17.4924 14.5523 17.4924 14ZM17.4922 17.5C17.4922 16.9477 17.9399 16.5 18.4922 16.5H18.5012C19.0535 16.5 19.5012 16.9477 19.5012 17.5C19.5012 18.0523 19.0535 18.5 18.5012 18.5H18.4922C17.9399 18.5 17.4922 18.0523 17.4922 17.5Z',
  d8: 'M7.74779 12.9421C7.71821 12.5549 7.39471 12.25 7 12.25C6.58579 12.25 6.25 12.5858 6.25 13V18C6.25 18.4142 6.58579 18.75 7 18.75C7.41421 18.75 7.75 18.4142 7.75 18V14.7801C7.76208 14.7676 7.77481 14.7546 7.78814 14.7413C7.92267 14.6067 8.10175 14.4542 8.30173 14.3431C8.50191 14.2319 8.68517 14.1828 8.84855 14.1937C8.99534 14.2034 9.20543 14.2661 9.46967 14.5303C9.76256 14.8232 10.2374 14.8232 10.5303 14.5303C10.8232 14.2374 10.8232 13.7626 10.5303 13.4697C10.0446 12.9839 9.50466 12.7341 8.94833 12.697C8.49144 12.6665 8.08238 12.7834 7.74779 12.9421Z',
  d9: 'M13.75 13.75C13.1977 13.75 12.75 14.1977 12.75 14.75H14.75C14.75 14.1977 14.3023 13.75 13.75 13.75ZM12.75 16.25H15.5C15.9142 16.25 16.25 15.9142 16.25 15.5V14.75C16.25 13.3693 15.1307 12.25 13.75 12.25C12.3693 12.25 11.25 13.3693 11.25 14.75V16.25C11.25 17.6307 12.3693 18.75 13.75 18.75C14.4494 18.75 15.0828 18.4618 15.5357 17.9997C15.8256 17.7038 15.8208 17.229 15.5249 16.9391C15.2291 16.6492 14.7542 16.654 14.4643 16.9498C14.2819 17.1359 14.03 17.25 13.75 17.25C13.1977 17.25 12.75 16.8023 12.75 16.25Z',
  d10: 'M3 3V21H21V3H3Z',
  d11: 'M18.0002 14H18.0092M18 17.5H18.009',
  d12: 'M7.5 18.5V13H10.5',
  d13: 'M11.9961 15.4833H15.502C15.502 14.8807 15.6509 13.7635 14.5762 13.2203C13.683 12.7689 12.9969 13.1603 12.7387 13.3166C12.1148 13.8129 11.9646 14.2513 11.9961 15.4833ZM11.9961 15.4833C11.996 16.082 11.8993 17.0988 12.7802 17.6881C13.6755 18.2871 14.631 17.8276 14.9816 17.469',
  d14: 'M12.75 14.75C12.75 14.1977 13.1977 13.75 13.75 13.75C14.3023 13.75 14.75 14.1977 14.75 14.75H12.75Z',
  d15: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.1989 21.75 21.3897 21.671 21.5303 21.5303C21.671 21.3897 21.75 21.1989 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM18.7592 13.25H17.2502V14.75H18.7592V13.25ZM18.759 16.75H17.25V18.25H18.759V16.75ZM6.75 12.25H10.5V13.75H8.25V18.5H6.75V12.25ZM16.25 16.25H12.75C12.75 16.8023 13.1977 17.25 13.75 17.25C14.03 17.25 14.2819 17.1359 14.4643 16.9498L15.5357 17.9997C15.0828 18.4618 14.4494 18.75 13.75 18.75C12.3693 18.75 11.25 17.6307 11.25 16.25V14.75C11.25 13.3693 12.3693 12.25 13.75 12.25C15.1307 12.25 16.25 13.3693 16.25 14.75V16.25Z',
} as const;

export const IconReStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="re-stroke-rounded IconReStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconReDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="re-duotone-rounded IconReDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconReTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="re-twotone-rounded IconReTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconReSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="re-solid-rounded IconReSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconReBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="re-bulk-rounded IconReBulkRounded"
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

export const IconReStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="re-stroke-sharp IconReStrokeSharp"
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconReSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="re-solid-sharp IconReSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRe: TheIconSelfPack = {
  name: 'Re',
  StrokeRounded: IconReStrokeRounded,
  DuotoneRounded: IconReDuotoneRounded,
  TwotoneRounded: IconReTwotoneRounded,
  SolidRounded: IconReSolidRounded,
  BulkRounded: IconReBulkRounded,
  StrokeSharp: IconReStrokeSharp,
  SolidSharp: IconReSolidSharp,
};