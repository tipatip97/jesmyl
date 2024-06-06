import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.29 2.5H8.01734C6.87343 2.5 6.30148 2.5 5.8759 2.79342C5.45032 3.08683 5.28212 3.59713 4.94571 4.61774L2.6384 11.6177C2.05288 13.3941 1.76012 14.2823 2.24184 14.8912C2.72356 15.5 3.71905 15.5 5.71004 15.5H13.9827C15.1266 15.5 15.6985 15.5 16.1241 15.2066C16.5497 14.9132 16.7179 14.4029 17.0543 13.3823L19.3616 6.38226C19.9471 4.60588 20.2399 3.71769 19.7582 3.10885C19.2764 2.5 18.2809 2.5 16.29 2.5Z',
  d2: 'M22 6L18.9577 15.2128C18.5142 16.556 18.2924 17.2277 17.7313 17.6138C17.1701 18 16.416 18 14.9077 18H4',
  d3: 'M4.5 7H19M17.5 11H3',
  d4: 'M11 18.5V21.5M11 21.5H13M11 21.5H9',
  d5: 'M15.5 2.5H10.5L6.5 15.5H11.5L15.5 2.5Z',
  d6: 'M14.1152 7L15.4998 2.5H10.4998L9 7H14.1152ZM14.1152 7L12.8844 11M14.1152 7H19.1578L17.8393 11H12.8844M12.8844 11L11.4998 15.5H6.49978L7.88439 11M12.8844 11H7.88439M7.88439 11L8.5 7H4.16026L2.8418 11H7.88439Z',
  d7: 'M5.71004 15.5C3.71905 15.5 2.72356 15.5 2.24184 14.8912C1.76012 14.2823 2.05288 13.3941 2.6384 11.6177L2.84202 11H7.88462L9.11538 7H4.16048L4.94571 4.61774C5.28212 3.59713 5.45032 3.08683 5.8759 2.79342C6.30148 2.5 6.87343 2.5 8.01734 2.5H10.5L9.11538 7H14.1154L15.5 2.5H16.29C18.2809 2.5 19.2764 2.5 19.7582 3.10885C20.2399 3.71769 19.9471 4.60588 19.3616 6.38226L19.158 7H14.1154L12.8846 11H17.8395L17.0543 13.3823C16.7179 14.4029 16.5497 14.9132 16.1241 15.2066C15.6985 15.5 15.1266 15.5 13.9827 15.5H11.5L12.8846 11H7.88462L6.5 15.5H5.71004Z',
  d8: 'M4.5 7H19M17.5 11H3M10.5 2.5H15.5L11.5 15.5H6.5L10.5 2.5Z',
  d9: 'M22.2352 5.28778C22.6285 5.41767 22.8421 5.84181 22.7122 6.23513L19.6562 15.4896C19.4461 16.1257 19.2677 16.6662 19.067 17.0919C18.8521 17.5479 18.5831 17.938 18.1564 18.2316C17.7342 18.5222 17.2682 18.642 16.7551 18.6974C16.2675 18.75 15.6678 18.75 14.9481 18.75H4C3.58579 18.75 3.25 18.4142 3.25 18C3.25 17.5857 3.58579 17.25 4 17.25H14.9077C15.6782 17.25 16.1965 17.2489 16.5942 17.206C16.9755 17.1649 17.1672 17.0916 17.3061 16.996C17.4406 16.9034 17.563 16.7647 17.7102 16.4524C17.8672 16.1192 18.018 15.6666 18.2456 14.9776L21.2878 5.76478C21.4177 5.37146 21.8419 5.1579 22.2352 5.28778Z',
  d10: 'M11 17.75C11.4142 17.75 11.75 18.0858 11.75 18.5V20.75H13C13.4142 20.75 13.75 21.0858 13.75 21.5C13.75 21.9142 13.4142 22.25 13 22.25H9C8.58579 22.25 8.25 21.9142 8.25 21.5C8.25 21.0858 8.58579 20.75 9 20.75H10.25V18.5C10.25 18.0858 10.5858 17.75 11 17.75Z',
  d11: 'M9.97992 1.74976H7.97856H7.97852H7.97849C7.43947 1.74974 6.97613 1.74972 6.59637 1.79078C6.19119 1.8346 5.80444 1.9313 5.44994 2.17571C5.09111 2.4231 4.86952 2.74981 4.69848 3.11335C4.54156 3.44689 4.4032 3.86674 4.24613 4.34338L4.24613 4.34338L3.7825 5.74996H8.72986L9.97992 1.74976ZM3.28807 7.24996L2.13442 10.75H7.16736L8.26111 7.24996H3.28807ZM1.64364 12.25C1.48702 12.7469 1.36301 13.1875 1.29974 13.5695C1.19791 14.1843 1.22364 14.8131 1.65343 15.3563C2.07274 15.8862 2.6774 16.0807 3.30836 16.1668C3.87261 16.2437 4.59156 16.2494 5.44868 16.2497L6.69861 12.25H1.64364ZM7.0202 16.2498H10.4487L11.6986 12.25H8.27014L7.0202 16.2498ZM12.0202 16.2498H14.021H14.021H14.021C14.56 16.2498 15.0234 16.2498 15.4031 16.2087C15.8083 16.1649 16.1951 16.0682 16.5496 15.8238C16.9084 15.5764 17.13 15.2497 17.301 14.8862C17.458 14.5526 17.5963 14.1328 17.7534 13.6561L18.2169 12.25H13.2701L12.0202 16.2498ZM18.7113 10.75L19.865 7.24996H14.8326L13.7389 10.75H18.7113ZM20.3557 5.74996C20.5124 5.25287 20.6365 4.81213 20.6998 4.43005C20.8016 3.81525 20.7759 3.18645 20.3461 2.64325C19.9268 2.11328 19.3221 1.91881 18.6912 1.83275C18.127 1.7558 17.4083 1.75017 16.5514 1.74978L15.3014 5.74996H20.3557ZM14.9799 1.74976H11.5515L10.3014 5.74996H13.7299L14.9799 1.74976ZM8.73889 10.75L9.83264 7.24996H13.2611L12.1674 10.75H8.73889Z',
  d12: 'M22.7122 6.23489C22.8421 5.84157 22.6285 5.41742 22.2352 5.28754C21.8419 5.15766 21.4177 5.37122 21.2878 5.76454L18.2456 14.9773C18.018 15.6664 17.8672 16.119 17.7102 16.4522C17.563 16.7644 17.4406 16.9032 17.3061 16.9957C17.1672 17.0913 16.9755 17.1646 16.5942 17.2058C16.1965 17.2487 15.6782 17.2497 14.9077 17.2497H4C3.58579 17.2497 3.25 17.5855 3.25 17.9997C3.25 18.4139 3.58579 18.7497 4 18.7497H10.25V20.7495H9C8.58579 20.7495 8.25 21.0853 8.25 21.4995C8.25 21.9137 8.58579 22.2495 9 22.2495H13C13.4142 22.2495 13.75 21.9137 13.75 21.4995C13.75 21.0853 13.4142 20.7495 13 20.7495H11.75V18.7497H14.9481C15.6678 18.7497 16.2675 18.7498 16.7551 18.6971C17.2682 18.6417 17.7342 18.5219 18.1564 18.2314C18.5831 17.9378 18.8521 17.5476 19.067 17.0917C19.2677 16.666 19.4461 16.1255 19.6562 15.4894L22.7122 6.23489Z',
  d13: 'M18.6912 1.83275C19.3221 1.91881 19.9268 2.11328 20.3461 2.64325C20.7759 3.18645 20.8016 3.81525 20.6998 4.43005C20.604 5.00802 20.3692 5.72022 20.0928 6.55865L17.7534 13.6561C17.5963 14.1328 17.458 14.5526 17.301 14.8862C17.13 15.2497 16.9084 15.5764 16.5496 15.8238C16.1951 16.0682 15.8083 16.1649 15.4031 16.2087C15.0234 16.2498 14.56 16.2498 14.021 16.2498H14.021H5.6544H5.65439C4.70612 16.2498 3.91719 16.2498 3.30836 16.1668C2.6774 16.0807 2.07274 15.8862 1.65343 15.3563C1.22364 14.8131 1.19791 14.1843 1.29974 13.5695C1.39548 12.9915 1.63026 12.2793 1.90667 11.4409L4.24613 4.34338L4.24613 4.34337C4.4032 3.86673 4.54156 3.44689 4.69848 3.11335C4.86952 2.74981 5.09111 2.4231 5.44994 2.17571C5.80444 1.9313 6.19119 1.8346 6.59637 1.79078C6.97614 1.74972 7.43949 1.74973 7.97852 1.74976H7.97856H16.3451H16.3451C17.2934 1.74973 18.0823 1.7497 18.6912 1.83275Z',
  d14: 'M3.78241 5.74971H8.72977L9.97983 1.74951H11.5514L10.3013 5.74971H13.7298L14.9798 1.74951H16.345C16.4146 1.74951 16.4835 1.74951 16.5514 1.74954L15.3013 5.74971H20.3557C20.2753 6.00457 20.1864 6.27424 20.0927 6.55841L19.8649 7.24971H14.8326L13.7388 10.7497H18.7112L18.2168 12.2497H13.2701L12.0201 16.2495H10.4486L11.6985 12.2497H8.27005L7.02011 16.2495H5.65431C5.58489 16.2495 5.51629 16.2495 5.44859 16.2495L6.69852 12.2497H1.64355C1.72391 11.9948 1.81285 11.725 1.90658 11.4407L2.13433 10.7497H7.16727L8.26102 7.24971H3.28798L3.78241 5.74971ZM8.7388 10.7497L9.83255 7.24971H13.261L12.1673 10.7497H8.7388Z',
  d15: 'M20.0003 2.5H6L2 15.5H16.0003L20.0003 2.5Z',
  d16: 'M22 6L18 18L4 18',
  d17: 'M11 18V21.5M11 21.5H13M11 21.5H9',
  d18: 'M22.7504 5.52634L18.3423 18.7507L3.05176 18.7507L3.05176 17.2507L17.2612 17.2507L21.3274 5.052L22.7504 5.52634Z',
  d19: 'M11.75 17.2502V20.7502H13.75V22.2502H8.25V20.7502H10.25V17.2502H11.75Z',
  d20: 'M9.85064 1.74976H6.00001C5.67075 1.74976 5.38 1.9645 5.28317 2.27919L4.0614 6.24995H8.52706L9.85064 1.74976Z',
  d21: 'M3.59986 7.74995L2.83063 10.25H7.35059L8.08588 7.74995H3.59986Z',
  d22: 'M2.36909 11.75L1.28317 15.2792C1.21318 15.5067 1.25531 15.7539 1.39671 15.9453C1.53812 16.1368 1.762 16.2498 2.00001 16.2498H5.58594L6.90941 11.75H2.36909Z',
  d23: 'M7.14947 16.2498H10.5859L11.9094 11.75H8.47294L7.14947 16.2498Z',
  d24: 'M12.1495 16.2498H16.0003C16.3295 16.2498 16.6203 16.035 16.7171 15.7203L17.9388 11.75H13.4729L12.1495 16.2498Z',
  d25: 'M18.4003 10.25L19.1695 7.74995H14.6494L13.9141 10.25H18.4003Z',
  d26: 'M19.6311 6.24995L20.7171 2.72032C20.7871 2.49284 20.745 2.24563 20.6036 2.05418C20.4622 1.86273 20.2383 1.74976 20.0003 1.74976H16.4142L15.0906 6.24995H19.6311Z',
  d27: 'M14.8506 1.74976H11.4142L10.0906 6.24995H13.5271L14.8506 1.74976Z',
  d28: 'M8.91412 10.25L9.64941 7.74995H13.0859L12.3506 10.25H8.91412Z',
};

export const IconSolarPanel02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-02-stroke-rounded IconSolarPanel02StrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-02-duotone-rounded IconSolarPanel02DuotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-02-twotone-rounded IconSolarPanel02TwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-02-solid-rounded IconSolarPanel02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-02-bulk-rounded IconSolarPanel02BulkRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="0.3" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-02-stroke-sharp IconSolarPanel02StrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-02-solid-sharp IconSolarPanel02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSolarPanel02: TheIconSelfPack = {
  name: 'SolarPanel02',
  StrokeRounded: IconSolarPanel02StrokeRounded,
  DuotoneRounded: IconSolarPanel02DuotoneRounded,
  TwotoneRounded: IconSolarPanel02TwotoneRounded,
  SolidRounded: IconSolarPanel02SolidRounded,
  BulkRounded: IconSolarPanel02BulkRounded,
  StrokeSharp: IconSolarPanel02StrokeSharp,
  SolidSharp: IconSolarPanel02SolidSharp,
};