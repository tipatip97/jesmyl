import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 22V13.6944C6 12.1287 6 11.3459 6.21454 10.6077C6.42908 9.86948 6.84589 9.21812 7.6795 7.91542L10.3359 3.76419C11.0885 2.58806 11.4648 2 12 2C12.5352 2 12.9115 2.58806 13.6641 3.76419L16.3205 7.91542C17.1541 9.21812 17.5709 9.86948 17.7855 10.6077C18 11.3459 18 12.1287 18 13.6944V22',
  d2: 'M7 11C7.63152 11.3231 8.4887 11.9732 9.28009 11.9991C10.2988 12.0324 10.9868 11.1372 12 11.1372C13.0132 11.1372 13.7012 12.0324 14.7199 11.9991C15.5113 11.9732 16.3685 11.3231 17 11',
  d3: 'M12 12L12 22',
  d4: 'M10 5H14',
  d5: 'M17.7858 10.6077C17.5712 9.86948 17.1544 9.21812 16.3208 7.91542L14.4552 5H9.5454L7.6798 7.91542C6.84619 9.21812 6.42938 9.86948 6.21484 10.6077C6.97666 11.4051 9.2003 12.7 12.0003 11.5C13.1906 12.2385 16.0141 13.0938 17.7858 10.6077Z',
  d6: 'M6.9914 10.6402C7.18358 10.0924 7.53813 9.52783 8.31125 8.31966L9.80809 5.9805C9.9 5.83688 10.0587 5.75 10.2292 5.75H13.7708C13.9413 5.75 14.1 5.83688 14.1919 5.9805L15.6888 8.31966C16.4619 9.52782 16.8164 10.0924 17.0086 10.6402L16.9611 10.6635C16.752 10.7657 16.5466 10.8645 16.3403 10.9527C15.9178 11.1335 15.5525 11.2425 15.2434 11.251C14.8186 11.2626 14.4493 11.1182 13.9255 10.8932L13.8658 10.8675L13.8657 10.8674L13.8656 10.8674L13.8655 10.8674C13.7416 10.814 13.6079 10.7564 13.4648 10.7003C13.1629 10.5819 13.0119 10.5227 12.881 10.612C12.75 10.7013 12.75 10.876 12.75 11.2253L12.75 22.1516C12.75 22.4344 12.75 22.5759 12.8379 22.6637C12.9257 22.7516 13.0672 22.7516 13.35 22.7516H18C18.4121 22.7516 18.7465 22.4193 18.75 22.0081C18.75 22.0054 18.75 22.0027 18.75 22L18.75 13.576C18.7501 12.6791 18.7502 11.9992 18.6927 11.4122C18.6759 11.2401 18.6543 11.0769 18.6264 10.9196C18.6257 10.916 18.625 10.9123 18.6243 10.9087C18.5932 10.7342 18.5542 10.5655 18.5057 10.3984C18.2607 9.55532 17.7889 8.81825 17.0154 7.6099L14.2658 3.31296L14.2658 3.31292C13.9153 2.76518 13.6083 2.28538 13.3171 1.9496C13.0109 1.59664 12.5936 1.25 12 1.25C11.4064 1.25 10.9891 1.59664 10.683 1.9496C10.3917 2.28538 10.0847 2.7652 9.73425 3.31295L6.9846 7.60989C6.21115 8.81825 5.73937 9.55532 5.49436 10.3984C5.44595 10.5649 5.40712 10.7331 5.37599 10.907C5.37517 10.9112 5.37439 10.9154 5.37364 10.9196C5.34387 11.0873 5.32126 11.2616 5.3041 11.4462C5.25138 12.0089 5.24994 12.6579 5.25 13.5006C5.25 13.5395 5.25 13.5788 5.25 13.6185L5.25 22.0016C5.25 22.4158 5.58579 22.7516 6 22.7516H10.65C10.9328 22.7516 11.0743 22.7516 11.1621 22.6637C11.25 22.5759 11.25 22.4344 11.25 22.1516L11.25 11.2253C11.25 10.876 11.25 10.7013 11.119 10.612C10.9881 10.5227 10.8371 10.5819 10.5352 10.7003C10.392 10.7564 10.2582 10.814 10.1342 10.8675L10.0745 10.8932C9.55075 11.1182 9.18139 11.2626 8.75657 11.251C8.44747 11.2425 8.08217 11.1335 7.65971 10.9527C7.45346 10.8645 7.24797 10.7657 7.03889 10.6635L6.9914 10.6402Z',
  d7: 'M8.31125 8.31966C7.45507 9.65764 7.11223 10.2063 6.93476 10.817C6.75688 11.429 6.75002 12.0865 6.75002 13.6944V22C6.75002 22.4142 6.41423 22.75 6.00002 22.75C5.5858 22.75 5.25002 22.4142 5.25002 22L5.25001 13.576C5.24984 12.1234 5.24973 11.2401 5.49436 10.3984C5.73937 9.55532 6.21115 8.81825 6.9846 7.60989L9.73425 3.31295C10.0847 2.7652 10.3917 2.28538 10.683 1.9496C10.9891 1.59664 11.4064 1.25 12 1.25C12.5936 1.25 13.0109 1.59664 13.3171 1.9496C13.6084 2.28539 13.9153 2.7652 14.2658 3.31296L17.0154 7.6099C17.7889 8.81825 18.2607 9.55532 18.5057 10.3984C18.7503 11.2401 18.7502 12.1234 18.75 13.576L18.75 22C18.75 22.4142 18.4142 22.75 18 22.75C17.5858 22.75 17.25 22.4142 17.25 22V13.6944C17.25 12.0865 17.2432 11.429 17.0653 10.817C16.8878 10.2063 16.545 9.65764 15.6888 8.31966L14.1919 5.9805C14.1 5.83688 13.9413 5.75 13.7708 5.75H10.2292C10.0587 5.75 9.9 5.83688 9.80809 5.9805L8.31125 8.31966Z',
  d8: 'M11.25 11.2253C11.25 10.876 11.25 10.7013 11.119 10.612C10.9881 10.5227 10.8371 10.5819 10.5352 10.7003C10.392 10.7564 10.2582 10.814 10.1342 10.8675L10.0745 10.8932C9.55075 11.1182 9.18139 11.2626 8.75657 11.251C8.44747 11.2425 8.08217 11.1335 7.65971 10.9527C7.45346 10.8645 7.24797 10.7657 7.03889 10.6635L6.94433 10.6172C6.76995 10.5317 6.58941 10.4432 6.41991 10.3669C6.20904 10.272 5.96619 10.2796 5.76173 10.3876C5.55728 10.4957 5.41408 10.692 5.37364 10.9196C5.24991 11.6163 5.24995 12.4283 5.25 13.6185L5.25 22.0016C5.25 22.4158 5.58579 22.7516 6 22.7516H10.65C10.9328 22.7516 11.0743 22.7516 11.1621 22.6637C11.25 22.5759 11.25 22.4344 11.25 22.1516L11.25 11.2253Z',
  d9: 'M12.75 22.1516C12.75 22.4344 12.75 22.5759 12.8379 22.6637C12.9257 22.7516 13.0672 22.7516 13.35 22.7516H18C18.4142 22.7516 18.75 22.4158 18.75 22.0016L18.75 13.6184C18.7501 12.4282 18.7501 11.6163 18.6264 10.9196C18.5859 10.692 18.4427 10.4957 18.2383 10.3876C18.0338 10.2796 17.791 10.272 17.5801 10.3669C17.4106 10.4432 17.2301 10.5317 17.0557 10.6172L16.9611 10.6635C16.752 10.7657 16.5466 10.8645 16.3403 10.9527C15.9178 11.1335 15.5525 11.2425 15.2434 11.251C14.8186 11.2626 14.4493 11.1182 13.9255 10.8932L13.8658 10.8675C13.7418 10.814 13.608 10.7564 13.4648 10.7003C13.1629 10.5819 13.0119 10.5227 12.881 10.612C12.75 10.7013 12.75 10.876 12.75 11.2253L12.75 22.1516Z',
  d10: 'M17.9557 11.0205H6',
  d11: 'M11.9766 11.0205V22.0458',
  d12: 'M9.48633 6.00879H14.4679',
  d13: 'M6.0625 22.0385V10.9339L11.9624 2.0484C11.9664 2.04249 11.975 2.04245 11.979 2.04832L17.9978 10.9339V22.0385',
  d14: 'M12 1.25C12.2508 1.25 12.4849 1.37533 12.624 1.58397L18.75 10.7729V22C18.75 22.4142 18.4142 22.75 18 22.75H12.75L12.75 10.25H16.5996L14.2662 6.75H9.73568L7.40234 10.25H11.25L11.25 22.75H6C5.58579 22.75 5.25 22.4142 5.25 22V10.7729L11.376 1.58397C11.5151 1.37533 11.7492 1.25 12 1.25Z',
} as const;

export const IconPencilStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-stroke-rounded IconPencilStrokeRounded"
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

export const IconPencilDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-duotone-rounded IconPencilDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconPencilTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-twotone-rounded IconPencilTwotoneRounded"
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

export const IconPencilSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-solid-rounded IconPencilSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPencilBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-bulk-rounded IconPencilBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPencilStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-stroke-sharp IconPencilStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPencilSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pencil-solid-sharp IconPencilSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPencil: TheIconSelfPack = {
  name: 'Pencil',
  StrokeRounded: IconPencilStrokeRounded,
  DuotoneRounded: IconPencilDuotoneRounded,
  TwotoneRounded: IconPencilTwotoneRounded,
  SolidRounded: IconPencilSolidRounded,
  BulkRounded: IconPencilBulkRounded,
  StrokeSharp: IconPencilStrokeSharp,
  SolidSharp: IconPencilSolidSharp,
};