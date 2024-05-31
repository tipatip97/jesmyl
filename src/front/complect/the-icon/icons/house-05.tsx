import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 11H20V22H4V11Z',
  d2: 'M14.5 22V19C14.5 18.0572 14.5 17.5858 14.2071 17.2929C13.9142 17 13.4428 17 12.5 17H11.5C10.5572 17 10.0858 17 9.79289 17.2929C9.5 17.5858 9.5 18.0572 9.5 19V22',
  d3: 'M2 9.72272C2 9.14519 2.26952 8.68219 2.81725 8.49915L10.9302 5.78791C11.7893 5.50081 12 5.02569 12 4.18627C12 3.42909 11.8761 1.91748 13.0641 2.00246C13.3438 2.02247 13.6832 2.28711 14.3619 2.81637L21.439 8.33482C21.8381 8.64599 22 9.01733 22 9.53507C22 10.4783 21.6036 11.0002 20.6848 11.0002H3.14677C2.40983 11.0002 2 10.4556 2 9.72272Z',
  d4: 'M3 22H21',
  d5: 'M7 15H8',
  d6: 'M17 15L16 15',
  d7: 'M5 7.5L5 3',
  d8: 'M20 11H4V22H9.5V19C9.5 18.0572 9.5 17.5858 9.79289 17.2929C10.0858 17 10.5572 17 11.5 17H12.5C13.4428 17 13.9142 17 14.2071 17.2929C14.5 17.5858 14.5 18.0572 14.5 19V22H20V11Z',
  d9: 'M2 9.7237C2 9.14617 2.26952 8.68317 2.81725 8.50013L10.9302 5.78889C11.7893 5.50178 12 5.02666 12 4.18724C12 3.43007 11.8761 1.91846 13.0641 2.00344C13.3438 2.02345 13.6832 2.28808 14.3619 2.81735L21.439 8.3358C21.8381 8.64697 22 9.0183 22 9.53605C22 10.4793 21.6036 11.0011 20.6848 11.0011H3.14677C2.40983 11.0011 2 10.4565 2 9.7237Z',
  d10: 'M11.8916 1.64781C12.2215 1.34733 12.6484 1.22173 13.1176 1.25529C13.4601 1.27979 13.7512 1.44497 13.976 1.59305L21.9002 7.74429C22.1786 7.96138 22.4023 8.22283 22.5505 8.54497C22.6971 8.86362 22.75 9.19874 22.75 9.53599C22.75 10.0941 22.6355 10.6702 22.2552 11.1117C21.8558 11.5754 21.2867 11.7511 20.6848 11.7511H3.14677C2.57842 11.7511 2.07605 11.5332 1.72679 11.1243C1.38993 10.73 1.25 10.2236 1.25 9.72364C1.25 8.88951 1.66756 8.09351 2.57953 7.78874L10.6925 5.0775C11.0226 4.9672 11.1124 4.86067 11.1489 4.80151C11.1984 4.72112 11.2482 4.40287 11.2482 4.02705V4.02704C11.2429 3.675 11.2339 3.08908 11.3597 2.59455C11.4372 2.29008 11.585 1.92708 11.8916 1.64781Z',
  d11: 'M2 21.75C2 21.1977 2.44772 20.75 3 20.75H21C21.5523 20.75 22 21.1977 22 21.75C22 22.3023 21.5523 22.75 21 22.75H3C2.44772 22.75 2 22.3023 2 21.75Z',
  d12: 'M20 22.7499C20.4142 22.7499 20.75 22.4141 20.75 21.9999V13.6C20.75 13.3172 20.75 13.1757 20.6621 13.0879C20.5743 13 20.4328 13 20.15 13L3.85 13C3.56716 13 3.42574 13 3.33787 13.0879C3.25 13.1757 3.25 13.3172 3.25 13.6L3.25 21.9999C3.25 22.4141 3.58579 22.7499 4 22.7499L20 22.7499ZM12.4477 16.25H11.5523C11.217 16.2499 10.8788 16.2498 10.5979 16.297C10.2619 16.3535 9.91588 16.4904 9.64867 16.8244C9.40076 17.1343 9.31902 17.4932 9.28359 17.8225C9.24995 18.1353 9.24997 18.5232 9.25 18.9619V18.9619V18.9619V18.9619L9.25 21.6C9.25 21.7886 9.25 21.8829 9.30858 21.9414C9.36716 22 9.46144 22 9.65 22H10.35C10.5386 22 10.6328 22 10.6914 21.9414C10.75 21.8829 10.75 21.7886 10.75 21.6V19C10.75 18.5116 10.751 18.2057 10.775 17.983C10.7908 17.8356 10.8745 17.7708 11.0145 17.7623C11.156 17.7537 11.3463 17.75 11.6 17.75H12.4C12.6538 17.75 12.8442 17.7537 12.9857 17.7623C13.1246 17.7707 13.2092 17.8356 13.225 17.983C13.249 18.2057 13.25 18.5116 13.25 19V21.6C13.25 21.7886 13.25 21.8829 13.3086 21.9414C13.3672 22 13.4614 22 13.65 22H14.35C14.5386 22 14.6328 22 14.6914 21.9414C14.75 21.8829 14.75 21.7886 14.75 21.6L14.75 18.9619V18.9618V18.9618V18.9618C14.75 18.5232 14.7501 18.1353 14.7164 17.8225C14.681 17.4932 14.5992 17.1343 14.3513 16.8244C14.0841 16.4904 13.7381 16.3535 13.4021 16.297C13.1212 16.2498 12.783 16.2499 12.4477 16.25ZM5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H7C7.41421 15.25 7.75 15.5858 7.75 16C7.75 16.4142 7.41421 16.75 7 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16ZM18 16.75C18.4142 16.75 18.75 16.4142 18.75 16C18.75 15.5858 18.4142 15.25 18 15.25H17C16.5858 15.25 16.25 15.5858 16.25 16C16.25 16.4142 16.5858 16.75 17 16.75H18Z',
  d13: 'M5 2C5.55228 2 6 2.44772 6 3V7.5C6 8.05228 5.55228 8.5 5 8.5C4.44772 8.5 4 8.05228 4 7.5V3C4 2.44772 4.44772 2 5 2Z',
  d14: 'M20.75 21.9999C20.75 22.4141 20.4142 22.7499 20 22.7499H4C3.58579 22.7499 3.25 22.4141 3.25 21.9999V13.6C3.25 13.3172 3.25 13.1757 3.33787 13.0879C3.42574 13 3.56716 13 3.85 13H20.15C20.4328 13 20.5743 13 20.6621 13.0879C20.75 13.1757 20.75 13.3172 20.75 13.6V21.9999Z',
  d15: 'M11.5523 16.25H12.4477C12.783 16.2499 13.1212 16.2498 13.4021 16.297C13.7381 16.3535 14.0841 16.4904 14.3513 16.8244C14.5993 17.1343 14.681 17.4932 14.7164 17.8225C14.7501 18.1353 14.75 18.5232 14.75 18.9619L14.75 21.6C14.75 21.7886 14.75 21.8829 14.6914 21.9414C14.6328 22 14.5386 22 14.35 22H13.65C13.4614 22 13.3672 22 13.3086 21.9414C13.25 21.8829 13.25 21.7886 13.25 21.6V19C13.25 18.5116 13.249 18.2057 13.225 17.983C13.2092 17.8356 13.1246 17.7707 12.9857 17.7623C12.8442 17.7537 12.6538 17.75 12.4 17.75H11.6C11.3463 17.75 11.156 17.7537 11.0145 17.7623C10.8745 17.7708 10.7908 17.8356 10.775 17.983C10.751 18.2057 10.75 18.5116 10.75 19V21.6C10.75 21.7886 10.75 21.8829 10.6914 21.9414C10.6328 22 10.5386 22 10.35 22H9.65C9.46144 22 9.36716 22 9.30858 21.9414C9.25 21.8829 9.25 21.7886 9.25 21.6L9.25 18.9619C9.24998 18.5232 9.24995 18.1353 9.28359 17.8225C9.31902 17.4932 9.40076 17.1343 9.64867 16.8244C9.91589 16.4904 10.2619 16.3535 10.5979 16.297C10.8788 16.2498 11.217 16.2499 11.5523 16.25Z',
  d16: 'M5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H7C7.41421 15.25 7.75 15.5858 7.75 16C7.75 16.4142 7.41421 16.75 7 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16Z',
  d17: 'M18.75 16C18.75 16.4142 18.4142 16.75 18 16.75L17 16.75C16.5858 16.75 16.25 16.4142 16.25 16C16.25 15.5858 16.5858 15.25 17 15.25L18 15.25C18.4142 15.25 18.75 15.5858 18.75 16Z',
  d18: 'M14.5 22V17H9.5V22',
  d19: 'M12 2L12.4087 1.37117C12.1782 1.2213 11.8841 1.20963 11.6423 1.34077C11.4006 1.47191 11.2501 1.72482 11.25 1.99982L12 2ZM11.999 6L12.1809 6.7276L12.7489 6.58561L12.749 6.00018L11.999 6ZM1.99902 11L1.24902 10.9997L1.24877 11.75H1.99902V11ZM22 11V11.75H22.75V11H22ZM22 8.49998H22.75C22.75 8.24612 22.6216 8.0095 22.4087 7.87115L22 8.49998ZM1.99987 8.49998L1.81796 7.77238C1.48418 7.85583 1.24999 8.15567 1.24987 8.49972L1.99987 8.49998ZM22 10.25H1.99902V11.75H22V10.25ZM2.18179 9.22758L12.1809 6.7276L11.8171 5.2724L1.81796 7.77238L2.18179 9.22758ZM11.5913 2.62883L21.5913 9.12881L22.4087 7.87115L12.4087 1.37117L11.5913 2.62883ZM1.24987 8.49972L1.24902 10.9997L2.74902 11.0002L2.74987 8.50024L1.24987 8.49972ZM21.25 8.49998V11H22.75V8.49998H21.25ZM12.749 6.00018L12.75 2.00018L11.25 1.99982L11.249 5.99982L12.749 6.00018Z',
  d20: 'M2 22H22',
  d21: 'M6.5 15H8.5',
  d22: 'M17.5 15L15.5 15',
  d23: 'M21.9999 22.75H1.99988V21.25H21.9999V22.75Z',
  d24: 'M20.7513 22V13.25L3.25134 13.25L3.25134 22C3.25134 22.4142 3.58713 22.75 4.00134 22.75L20.0013 22.75C20.4156 22.75 20.7513 22.4142 20.7513 22ZM9.49939 16.25C9.08518 16.25 8.74939 16.5858 8.74939 17V22H10.2494V17.75H13.7494V22H15.2494V17C15.2494 16.5858 14.9136 16.25 14.4994 16.25H9.49939ZM7.49939 16.75H5.49939V15.25H7.49939V16.75ZM18.4994 15.25H16.4994V16.75H18.4994V15.25Z',
  d25: 'M12.4094 1.37117C12.1788 1.2213 11.8847 1.20963 11.643 1.34077C11.4012 1.47191 11.2507 1.72482 11.2506 1.99982L11.2498 5.41439L5.75134 6.78911V3H4.25134V7.16414L1.81858 7.77238C1.4848 7.85583 1.25061 8.15568 1.25049 8.49973L1.24939 11.75H22.7506V8.49998C22.7506 8.24612 22.6222 8.0095 22.4094 7.87115L12.4094 1.37117Z',
} as const;

export const IconHouse05StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-05-stroke-rounded IconHouse05StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse05DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-05-duotone-rounded IconHouse05DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
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
        d={d.d4} 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse05TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-05-twotone-rounded IconHouse05TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse05SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-05-solid-rounded IconHouse05SolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse05BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-05-bulk-rounded IconHouse05BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
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
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHouse05StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-05-stroke-sharp IconHouse05StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
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

export const IconHouse05SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-05-solid-sharp IconHouse05SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHouse05: TheIconSelfPack = {
  name: 'House05',
  StrokeRounded: IconHouse05StrokeRounded,
  DuotoneRounded: IconHouse05DuotoneRounded,
  TwotoneRounded: IconHouse05TwotoneRounded,
  SolidRounded: IconHouse05SolidRounded,
  BulkRounded: IconHouse05BulkRounded,
  StrokeSharp: IconHouse05StrokeSharp,
  SolidSharp: IconHouse05SolidSharp,
};