import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21.105 2.89501C19.3895 1.17949 15.6577 2.12988 13.7277 4.05984C12.6875 5.10001 12.3831 6.21243 12.592 7.28565C12.8022 8.36561 12.7813 9.58474 11.9794 10.338L2.50346 19.2396C1.84652 19.8568 1.8303 20.895 2.46765 21.5324C3.105 22.1697 4.14323 22.1535 4.76036 21.4965L13.662 12.0206C14.4153 11.2187 15.6344 11.1978 16.7143 11.408C17.7876 11.6169 18.9 11.3125 19.9402 10.2723C21.8701 8.34233 22.8205 4.61053 21.105 2.89501Z',
  d2: 'M21 2.89501C19.2924 1.17949 15.578 2.12988 13.657 4.05984C12.6216 5.10001 12.3186 6.21243 12.5265 7.28565C12.7357 8.36561 12.7149 9.58474 11.9167 10.338L2.48484 19.2396C1.83095 19.8568 1.84676 20.8627 2.48115 21.5',
  d3: 'M17.3565 1.37299C18.8614 1.08645 20.5266 1.25537 21.6353 2.36406C22.744 3.47275 22.9129 5.13803 22.6264 6.6429C22.3361 8.16752 21.55 9.72247 20.4705 10.802C19.2736 11.9989 17.9151 12.4052 16.571 12.1436C15.5324 11.9414 14.6763 12.0357 14.2086 12.5335L5.307 22.0094C4.39998 22.975 2.87405 22.9988 1.93732 22.0621C1.00059 21.1253 1.02442 19.5994 1.98996 18.6924L11.4658 9.79079C11.9637 9.32313 12.058 8.467 11.8558 7.42833C11.5942 6.08427 12.0005 4.72579 13.1974 3.52889C14.2769 2.44936 15.8319 1.66328 17.3565 1.37299Z',
  d4: 'M17.3555 1.37299C18.8603 1.08645 20.5256 1.25537 21.6343 2.36406C22.743 3.47275 22.9119 5.13803 22.6254 6.6429C22.3351 8.16752 21.549 9.72247 20.4695 10.802C19.2726 11.9989 17.9141 12.4052 16.57 12.1436C15.5314 11.9414 14.6753 12.0357 14.2076 12.5335L11.4648 9.79079C11.9627 9.32313 12.057 8.467 11.8548 7.42833C11.5931 6.08427 11.9995 4.72579 13.1964 3.52889C14.2759 2.44936 15.8309 1.66328 17.3555 1.37299Z',
  d5: 'M21.105 2.89504C19.3895 1.17952 15.6577 2.12993 13.7277 4.05987C11.9794 5.8082 11.9794 10.3381 11.9794 10.3381L2.50346 19.2397C1.84652 19.8568 1.8303 20.895 2.46765 21.5324C3.105 22.1697 4.14323 22.1535 4.76036 21.4966L13.662 12.0207C13.662 12.0207 18.1918 12.0207 19.9402 10.2723C21.8701 8.34236 22.8205 4.61056 21.105 2.89504Z',
  d6: 'M14.4423 12.742C14.2665 12.7526 14.1148 12.7593 13.9932 12.7635L5.307 22.01C4.39998 22.9756 2.87405 22.9994 1.93732 22.0627C1.00059 21.1259 1.02442 19.6 1.98996 18.693L11.2365 10.0068C11.2407 9.88518 11.2474 9.73345 11.258 9.55767C11.2864 9.08817 11.3432 8.44139 11.4575 7.73479C11.5714 7.03067 11.7451 6.25036 12.0128 5.52018C12.2779 4.79722 12.653 4.07391 13.1974 3.5295C14.2769 2.44997 15.8319 1.6639 17.3565 1.3736C18.8614 1.08707 20.5266 1.25597 21.6353 2.36467C22.744 3.47336 22.9129 5.13864 22.6264 6.64351C22.3361 8.16812 21.55 9.72307 20.4705 10.8026C19.9261 11.347 19.2028 11.7221 18.4798 11.9872C17.7496 12.2549 16.9693 12.4286 16.2652 12.5425C15.5586 12.6568 14.9118 12.7136 14.4423 12.742Z',
} as const;

export const IconSpoonStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spoon-stroke-rounded IconSpoonStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpoonDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spoon-duotone-rounded IconSpoonDuotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpoonTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spoon-twotone-rounded IconSpoonTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSpoonSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spoon-solid-rounded IconSpoonSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpoonBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spoon-bulk-rounded IconSpoonBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpoonStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spoon-stroke-sharp IconSpoonStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpoonSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spoon-solid-sharp IconSpoonSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSpoon: TheIconSelfPack = {
  name: 'Spoon',
  StrokeRounded: IconSpoonStrokeRounded,
  DuotoneRounded: IconSpoonDuotoneRounded,
  TwotoneRounded: IconSpoonTwotoneRounded,
  SolidRounded: IconSpoonSolidRounded,
  BulkRounded: IconSpoonBulkRounded,
  StrokeSharp: IconSpoonStrokeSharp,
  SolidSharp: IconSpoonSolidSharp,
};