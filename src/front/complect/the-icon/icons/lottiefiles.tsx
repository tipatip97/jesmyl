import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M17.5 7.5H16.8536C15.4009 7.5 14.0625 8.28757 13.357 9.55743L10.643 14.4426C9.93754 15.7124 8.59906 16.5 7.14639 16.5H6.5',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75C9.86647 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428C1.74999 14.1335 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.86646 22.25 12.0572 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.1335 22.25 11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM16.8536 6.5C15.0378 6.5 13.3647 7.48446 12.4828 9.07179L9.76886 13.9569C9.23975 14.9093 8.23589 15.5 7.14639 15.5H6.5C5.94772 15.5 5.5 15.9477 5.5 16.5C5.5 17.0523 5.94772 17.5 6.5 17.5H7.14639C8.96222 17.5 10.6353 16.5155 11.5172 14.9282L14.2311 10.0431C14.7603 9.09068 15.7641 8.5 16.8536 8.5H17.5C18.0523 8.5 18.5 8.05228 18.5 7.5C18.5 6.94772 18.0523 6.5 17.5 6.5H16.8536Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428C22.25 14.1335 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572C9.86646 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.1335 1.75 11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.86647 1.74999 12.0572 1.75Z',
  d5: 'M12.4828 9.07179C13.3647 7.48446 15.0378 6.5 16.8536 6.5H17.5C18.0523 6.5 18.5 6.94772 18.5 7.5C18.5 8.05228 18.0523 8.5 17.5 8.5H16.8536C15.7641 8.5 14.7603 9.09068 14.2311 10.0431L11.5172 14.9282C10.6353 16.5155 8.96222 17.5 7.14639 17.5H6.5C5.94772 17.5 5.5 17.0523 5.5 16.5C5.5 15.9477 5.94772 15.5 6.5 15.5H7.14639C8.23589 15.5 9.23975 14.9093 9.76886 13.9569L12.4828 9.07179Z',
  d6: 'M21 3H3V21H21V3Z',
  d7: 'M18 7.5H16.8536C15.4009 7.5 14.0625 8.28757 13.357 9.55743L10.643 14.4426C9.93754 15.7124 8.59906 16.5 7.14639 16.5H6',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM16.8536 6.5C15.0378 6.5 13.3647 7.48446 12.4828 9.07179L9.76886 13.9569C9.23975 14.9093 8.23589 15.5 7.14639 15.5H6V17.5H7.14639C8.96222 17.5 10.6353 16.5155 11.5172 14.9282L14.2311 10.0431C14.7603 9.09068 15.7641 8.5 16.8536 8.5H18V6.5H16.8536Z',
} as const;

export const IconLottiefilesStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lottiefiles-stroke-rounded IconLottiefilesStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLottiefilesDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lottiefiles-duotone-rounded IconLottiefilesDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconLottiefilesTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lottiefiles-twotone-rounded IconLottiefilesTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconLottiefilesSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lottiefiles-solid-rounded IconLottiefilesSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLottiefilesBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lottiefiles-bulk-rounded IconLottiefilesBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLottiefilesStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lottiefiles-stroke-sharp IconLottiefilesStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLottiefilesSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="lottiefiles-solid-sharp IconLottiefilesSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLottiefiles: TheIconSelfPack = {
  name: 'Lottiefiles',
  StrokeRounded: IconLottiefilesStrokeRounded,
  DuotoneRounded: IconLottiefilesDuotoneRounded,
  TwotoneRounded: IconLottiefilesTwotoneRounded,
  SolidRounded: IconLottiefilesSolidRounded,
  BulkRounded: IconLottiefilesBulkRounded,
  StrokeSharp: IconLottiefilesStrokeSharp,
  SolidSharp: IconLottiefilesSolidSharp,
};