import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 10C3.51076 9.96288 3.16925 9.87932 2.88886 9.69117C2.67048 9.54463 2.48298 9.35634 2.33706 9.13703C2 8.63045 2 7.92524 2 6.51483C2 5.10442 2 4.39921 2.33706 3.89263C2.48298 3.67332 2.67048 3.48502 2.88886 3.33849C3.39331 3 4.09554 3 5.5 3H18.5C19.9045 3 20.6067 3 21.1111 3.33849C21.3295 3.48502 21.517 3.67332 21.6629 3.89263C22 4.39921 22 5.10442 22 6.51483C22 7.80256 22 8.50243 21.7435 9',
  d2: 'M18.2 18.2L21 21M19.6 13.3C19.6 9.82057 16.7794 7 13.3 7C9.82057 7 7 9.82057 7 13.3C7 16.7794 9.82057 19.6 13.3 19.6C16.7794 19.6 19.6 16.7794 19.6 13.3Z',
  d3: 'M19.6 13.3C19.6 9.82061 16.7794 7 13.3 7C9.82061 7 7 9.82061 7 13.3C7 16.7794 9.82061 19.6 13.3 19.6C16.7794 19.6 19.6 16.7794 19.6 13.3Z',
  d4: 'M6 13.3C6 9.26832 9.26832 6 13.3 6C17.3317 6 20.6 9.26832 20.6 13.3C20.6 14.9493 20.053 16.4709 19.1306 17.6932L21.7103 20.2961C22.099 20.6883 22.0962 21.3215 21.7039 21.7103C21.3117 22.099 20.6785 22.0962 20.2897 21.7039L17.7195 19.1107C16.4927 20.0451 14.9612 20.6 13.3 20.6C9.26832 20.6 6 17.3317 6 13.3ZM13.3 8C10.3729 8 8 10.3729 8 13.3C8 16.2271 10.3729 18.6 13.3 18.6C16.2271 18.6 18.6 16.2271 18.6 13.3C18.6 10.3729 16.2271 8 13.3 8Z',
  d5: 'M5.45128 2C5.46747 2 5.48371 2 5.5 2L18.5487 2C19.2093 1.99997 19.7793 1.99995 20.2447 2.04749C20.7384 2.09793 21.2242 2.21008 21.6683 2.50811C21.9959 2.72794 22.277 3.01023 22.4955 3.33868C22.7914 3.78343 22.9027 4.26949 22.9528 4.76401C23.0001 5.23073 23 5.80259 23 6.46643V6.55228C23 7.1646 23 7.69547 22.9647 8.13401C22.9282 8.58695 22.8487 9.03852 22.6323 9.45826C22.3792 9.94914 21.7761 10.1419 21.2852 9.88882C20.7943 9.63574 20.6016 9.03263 20.8546 8.54175C20.8948 8.46392 20.9435 8.31677 20.9712 7.97345C20.9993 7.62464 21 7.17441 21 6.51483C21 5.7889 20.9988 5.31941 20.963 4.96558C20.9288 4.62825 20.8715 4.50841 20.8304 4.44657C20.7571 4.33642 20.6631 4.24212 20.5539 4.16887C20.4937 4.12842 20.3761 4.07132 20.0414 4.03714C19.6899 4.00122 19.2231 4 18.5 4H5.5C4.77687 4 4.31011 4.00122 3.95856 4.03714C3.62393 4.07132 3.50635 4.12842 3.44606 4.16887C3.3369 4.24212 3.24291 4.33642 3.16962 4.44657C3.12847 4.50841 3.07121 4.62825 3.03704 4.96558C3.0012 5.31941 3 5.7889 3 6.51483C3 7.24076 3.0012 7.71026 3.03704 8.06409C3.07121 8.40141 3.12847 8.52125 3.16962 8.58309C3.24291 8.69325 3.3369 8.78755 3.44606 8.86079C3.51398 8.90637 3.6505 8.97061 4.07565 9.00287C4.62635 9.04465 5.03892 9.52495 4.99714 10.0757C4.95536 10.6264 4.47506 11.0389 3.92436 10.9971C3.37102 10.9552 2.82453 10.8523 2.33167 10.5216C2.00406 10.3017 1.72305 10.0194 1.50451 9.69098C1.20859 9.24623 1.09732 8.76018 1.04723 8.26565C0.99995 7.79894 0.999974 7.2271 1 6.56327C1 6.54718 1 6.53103 1 6.51483C1 6.49863 1 6.48249 1 6.46639C0.999974 5.80257 0.99995 5.23072 1.04723 4.76401C1.09732 4.26949 1.20859 3.78343 1.50451 3.33868C1.72305 3.01023 2.00406 2.72794 2.33167 2.50811C2.77583 2.21008 3.26158 2.09793 3.7553 2.04749C4.22068 1.99995 4.79068 1.99997 5.45128 2Z',
  d6: 'M17.7692 17.7403L21 21M19.6 13.3C19.6 9.82061 16.7794 7 13.3 7C9.82061 7 7 9.82061 7 13.3C7 16.7794 9.82061 19.6 13.3 19.6C16.7794 19.6 19.6 16.7794 19.6 13.3Z',
  d7: 'M22 10V3H2V10H5',
  d8: 'M6 13.2964C6 9.26671 9.26542 6 13.2935 6C17.3216 6 20.5871 9.26671 20.5871 13.2964C20.5871 14.9449 20.0406 16.4658 19.1189 17.6875L22 20.5928L20.5807 22L17.7091 19.1042C16.4834 20.0382 14.9532 20.5928 13.2935 20.5928C9.26542 20.5928 6 17.3261 6 13.2964ZM13.2935 7.99901C10.369 7.99901 7.99823 10.3707 7.99823 13.2964C7.99823 16.2221 10.369 18.5938 13.2935 18.5938C16.218 18.5938 18.5888 16.2221 18.5888 13.2964C18.5888 10.3707 16.218 7.99901 13.2935 7.99901Z',
  d9: 'M1 3C1 2.44772 1.44772 2 2 2H22C22.5523 2 23 2.44772 23 3V10H21V4H3V9H5V11H2C1.44772 11 1 10.5523 1 10V3Z',
} as const;

export const IconSearchingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="searching-stroke-rounded IconSearchingStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSearchingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="searching-duotone-rounded IconSearchingDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSearchingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="searching-twotone-rounded IconSearchingTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSearchingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="searching-solid-rounded IconSearchingSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconSearchingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="searching-bulk-rounded IconSearchingBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSearchingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="searching-stroke-sharp IconSearchingStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSearchingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="searching-solid-sharp IconSearchingSolidSharp"
    >
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

export const iconPackOfSearching: TheIconSelfPack = {
  name: 'Searching',
  StrokeRounded: IconSearchingStrokeRounded,
  DuotoneRounded: IconSearchingDuotoneRounded,
  TwotoneRounded: IconSearchingTwotoneRounded,
  SolidRounded: IconSearchingSolidRounded,
  BulkRounded: IconSearchingBulkRounded,
  StrokeSharp: IconSearchingStrokeSharp,
  SolidSharp: IconSearchingSolidSharp,
};