import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15',
  d2: 'M15 8C15 8 14 9 14 10C14.75 9 16.25 9 17 10',
  d3: 'M9 8C9 8 10 9 10 10C9.25 9 7.75 9 7 10',
  d4: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.59974 14.5496C8.35099 14.2184 7.88084 14.1515 7.54964 14.4003C7.21843 14.649 7.1516 15.1192 7.40035 15.4504C8.44802 16.8453 10.1185 17.75 12 17.75C13.8816 17.75 15.5521 16.8453 16.5997 15.4504C16.8485 15.1192 16.7817 14.649 16.4505 14.4003C16.1192 14.1515 15.6491 14.2184 15.4003 14.5496C14.6238 15.5835 13.3898 16.25 12 16.25C10.6103 16.25 9.37631 15.5835 8.59974 14.5496ZM15.5303 7.46967C15.8135 7.75286 15.8229 8.20618 15.5585 8.50064C16.3263 8.51754 17.088 8.86732 17.6 9.55C17.8485 9.88137 17.7814 10.3515 17.45 10.6C17.1186 10.8485 16.6485 10.7814 16.4 10.45C15.95 9.85 15.05 9.85 14.6 10.45C14.4063 10.7083 14.0691 10.8136 13.7628 10.7115C13.4566 10.6094 13.25 10.3228 13.25 10C13.25 9.27456 13.6011 8.62133 13.876 8.20897C14.0215 7.9906 14.166 7.8101 14.2743 7.68378C14.3256 7.62395 14.4236 7.51905 14.463 7.47679L14.4697 7.46967C14.7626 7.17678 15.2374 7.17678 15.5303 7.46967ZM8.44153 8.50064C8.1771 8.20618 8.18648 7.75286 8.46967 7.46967C8.76256 7.17678 9.23744 7.17678 9.53033 7.46967L9.53698 7.47679C9.57645 7.51905 9.6744 7.62395 9.72569 7.68378C9.83397 7.8101 9.97845 7.9906 10.124 8.20897C10.3989 8.62133 10.75 9.27456 10.75 10C10.75 10.3228 10.5434 10.6094 10.2372 10.7115C9.93091 10.8136 9.59369 10.7083 9.4 10.45C8.95 9.85 8.05 9.85 7.6 10.45C7.35147 10.7814 6.88137 10.8485 6.55 10.6C6.21863 10.3515 6.15147 9.88137 6.4 9.55C6.91201 8.86732 7.67368 8.51754 8.44153 8.50064Z',
  d5: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d6: 'M7.54964 14.4003C7.88084 14.1516 8.35099 14.2184 8.59974 14.5496C9.37631 15.5836 10.6103 16.25 12 16.25C13.3898 16.25 14.6238 15.5836 15.4003 14.5496C15.6491 14.2184 16.1192 14.1516 16.4505 14.4003C16.7817 14.6491 16.8485 15.1192 16.5997 15.4505C15.5521 16.8454 13.8816 17.75 12 17.75C10.1185 17.75 8.44802 16.8454 7.40035 15.4505C7.1516 15.1192 7.21843 14.6491 7.54964 14.4003Z',
  d7: 'M15.5303 7.46967C15.8135 7.75286 15.8229 8.20618 15.5585 8.50064C16.3263 8.51754 17.088 8.86732 17.6 9.55C17.8485 9.88137 17.7814 10.3515 17.45 10.6C17.1186 10.8485 16.6485 10.7814 16.4 10.45C15.95 9.85 15.05 9.85 14.6 10.45C14.4063 10.7083 14.0691 10.8136 13.7628 10.7115C13.4566 10.6094 13.25 10.3228 13.25 10C13.25 9.27456 13.6011 8.62133 13.876 8.20897C14.0215 7.9906 14.166 7.8101 14.2743 7.68378C14.3288 7.62023 14.4359 7.50585 14.4697 7.46967C14.7626 7.17678 15.2374 7.17678 15.5303 7.46967Z',
  d8: 'M8.46967 7.46967C8.18648 7.75286 8.1771 8.20618 8.44153 8.50064C7.67368 8.51754 6.91201 8.86732 6.4 9.55C6.15147 9.88137 6.21863 10.3515 6.55 10.6C6.88137 10.8485 7.35147 10.7814 7.6 10.45C8.05 9.85 8.95 9.85 9.4 10.45C9.59369 10.7083 9.93091 10.8136 10.2372 10.7115C10.5434 10.6094 10.75 10.3228 10.75 10C10.75 9.27456 10.3989 8.62133 10.124 8.20897C9.97845 7.9906 9.83397 7.8101 9.72569 7.68378C9.67122 7.62023 9.5641 7.50585 9.53033 7.46967C9.23744 7.17678 8.76256 7.17678 8.46967 7.46967Z',
  d9: 'M15 7.5C15 7.5 14 9 14 10C14.75 9 16.25 9 17 10',
  d10: 'M9 7.5C9 7.5 10 9 10 10C9.25 9 7.75 9 7 10',
  d11: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12.0001 16.2502C13.3899 16.2502 14.6238 15.5838 15.4004 14.5498L16.5998 15.4506C15.5521 16.8455 13.8816 17.7502 12.0001 17.7502C10.1185 17.7502 8.44806 16.8455 7.40039 15.4506L8.59978 14.5498C9.37635 15.5838 10.6103 16.2502 12.0001 16.2502ZM9.00039 7.49981C8.37635 7.91583 8.37629 7.91574 8.37624 7.91566L8.37718 7.91709L8.38341 7.9266C8.38929 7.93561 8.39852 7.94986 8.41061 7.96887C8.43483 8.00693 8.4704 8.06381 8.51352 8.13568C8.57373 8.23603 8.64768 8.36395 8.72554 8.50936C7.86553 8.43621 6.97547 8.78303 6.40039 9.54981L7.60039 10.4498C8.05039 9.84981 8.95039 9.84981 9.40039 10.4498C9.59408 10.7081 9.9313 10.8134 10.2376 10.7113C10.5438 10.6092 10.7504 10.3226 10.7504 9.99981C10.7504 9.30869 10.4242 8.54528 10.1712 8.0394C10.0355 7.76799 9.90061 7.53201 9.79976 7.36394C9.74913 7.27956 9.70658 7.21144 9.67611 7.16356C9.66086 7.1396 9.6486 7.12064 9.63983 7.1072L9.62934 7.0912L9.62616 7.08639L9.62457 7.08399C9.62449 7.08388 9.62443 7.08378 9.00039 7.49981ZM15.0004 7.49981C14.3764 7.08378 14.3763 7.08388 14.3762 7.08399L14.3746 7.08639L14.3714 7.0912L14.361 7.1072C14.3522 7.12064 14.3399 7.1396 14.3247 7.16356C14.2942 7.21144 14.2516 7.27956 14.201 7.36394C14.1002 7.53201 13.9653 7.76799 13.8296 8.0394C13.5766 8.54528 13.2504 9.30869 13.2504 9.99981C13.2504 10.3226 13.457 10.6092 13.7632 10.7113C14.0695 10.8134 14.4067 10.7081 14.6004 10.4498C15.0504 9.84981 15.9504 9.84981 16.4004 10.4498L17.6004 9.54981C17.0253 8.78303 16.1352 8.43622 15.2752 8.50937C15.3531 8.36395 15.427 8.23603 15.4873 8.13568C15.5304 8.06381 15.566 8.00693 15.5902 7.96887C15.6023 7.94986 15.6115 7.93561 15.6174 7.9266L15.6236 7.91709L15.6245 7.91566C15.6245 7.91574 15.6244 7.91583 15.0004 7.49981Z',
} as const;

export const IconHappyStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="happy-stroke-rounded IconHappyStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHappyDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="happy-duotone-rounded IconHappyDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHappyTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="happy-twotone-rounded IconHappyTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconHappySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="happy-solid-rounded IconHappySolidRounded"
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

export const IconHappyBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="happy-bulk-rounded IconHappyBulkRounded"
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHappyStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="happy-stroke-sharp IconHappyStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconHappySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="happy-solid-sharp IconHappySolidSharp"
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

export const iconPackOfHappy: TheIconSelfPack = {
  name: 'Happy',
  StrokeRounded: IconHappyStrokeRounded,
  DuotoneRounded: IconHappyDuotoneRounded,
  TwotoneRounded: IconHappyTwotoneRounded,
  SolidRounded: IconHappySolidRounded,
  BulkRounded: IconHappyBulkRounded,
  StrokeSharp: IconHappyStrokeSharp,
  SolidSharp: IconHappySolidSharp,
};