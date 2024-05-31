import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 4.5V6M12 6V7.5M12 6H13.5M12 6H10.5',
  d2: 'M8.58579 2.58579C8 3.17157 8 4.11438 8 6C8 7.88562 8 8.82843 8.58579 9.41421C9.17157 10 10.1144 10 12 10C13.8856 10 14.8284 10 15.4142 9.41421C16 8.82843 16 7.88562 16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579Z',
  d3: 'M4 22V11.9707C4 8.66123 4 7.00649 5.02513 5.97836C5.67665 5.32493 6.58055 5.08679 8 5M20 22V11.9707C20 8.66123 20 7.00649 18.9749 5.97836C18.3233 5.32493 17.4194 5.08679 16 5',
  d4: 'M3 22H21',
  d5: 'M9.5 22V19.5C9.5 18.5654 9.5 18.0981 9.70096 17.75C9.83261 17.522 10.022 17.3326 10.25 17.201C10.5981 17 11.0654 17 12 17C12.9346 17 13.4019 17 13.75 17.201C13.978 17.3326 14.1674 17.522 14.299 17.75C14.5 18.0981 14.5 18.5654 14.5 19.5V22',
  d6: 'M8.00896 13H8M12 13H11.991M16.0011 13H15.9922',
  d7: 'M8 6C8 5.63226 8 5.30037 8.00435 5H8C6.58055 5.08679 5.67665 5.32493 5.02513 5.97836C4 7.00649 4 8.66123 4 11.9707V22H9.5V19.5C9.5 18.5654 9.5 18.0981 9.70096 17.75C9.83261 17.522 10.022 17.3326 10.25 17.201C10.5981 17 11.0654 17 12 17C12.9346 17 13.4019 17 13.75 17.201C13.978 17.3326 14.1674 17.522 14.299 17.75C14.5 18.0981 14.5 18.5654 14.5 19.5V22H20V11.9707C20 8.66123 20 7.00649 18.9749 5.97836C18.3233 5.32493 17.4194 5.08679 16 5H15.9957C16 5.30037 16 5.63226 16 6C16 7.88562 16 8.82843 15.4142 9.41421C14.8284 10 13.8856 10 12 10C10.1144 10 9.17157 10 8.58579 9.41421C8 8.82843 8 7.88562 8 6Z',
  d8: 'M8 5C6.58055 5.08679 5.67665 5.32493 5.02513 5.97836C4 7.00649 4 8.66123 4 11.9707V22H20V11.9707C20 8.66123 20 7.00649 18.9749 5.97836C18.3233 5.32493 17.4194 5.08679 16 5',
  d9: 'M9.5 19.5V22H14.5V19.5C14.5 18.5654 14.5 18.0981 14.299 17.75C14.1674 17.522 13.978 17.3326 13.75 17.201C13.4019 17 12.9346 17 12 17C11.0654 17 10.5981 17 10.25 17.201C10.022 17.3326 9.83261 17.522 9.70096 17.75C9.5 18.0981 9.5 18.5654 9.5 19.5Z',
  d10: 'M2 21.75C2 21.1977 2.44772 20.75 3 20.75H21C21.5523 20.75 22 21.1977 22 21.75C22 22.3023 21.5523 22.75 21 22.75H3C2.44772 22.75 2 22.3023 2 21.75Z',
  d11: 'M16.0458 4.25C17.5002 4.33893 18.6488 4.5877 19.506 5.44741C20.1807 6.12413 20.476 6.97933 20.6152 8.01798C20.75 9.02371 20.75 10.3062 20.75 11.9137L20.75 21.9986C20.75 22.4128 20.4142 22.7486 20 22.7486L14.5462 22.7486C14.9389 22.7247 15.25 22.3987 15.25 22V19.4678C15.25 19.028 15.25 18.6486 15.2218 18.3374C15.192 18.0082 15.1259 17.6822 14.9486 17.375C14.7511 17.033 14.467 16.7489 14.125 16.5514C13.8178 16.3741 13.4918 16.308 13.1627 16.2782C12.8514 16.25 12.472 16.25 12.0323 16.25H12.0322C11.5924 16.25 11.1486 16.25 10.8374 16.2782C10.5082 16.308 10.1822 16.3741 9.875 16.5514C9.53296 16.7489 9.24892 17.033 9.05144 17.375C8.87407 17.6822 8.80802 18.0082 8.77818 18.3374C8.74997 18.6486 8.74998 19.028 8.75 19.4677V19.4677V19.4678V22C8.75 22.3987 9.0611 22.7247 9.4538 22.7486H4C3.58579 22.7486 3.25 22.4128 3.25 21.9986L3.25 11.9137V11.9137V11.9137C3.24998 10.3062 3.24997 9.02371 3.38479 8.01798C3.52403 6.97933 3.81927 6.12413 4.49402 5.44741C5.35123 4.5877 6.49976 4.33893 7.95423 4.25V6.05455C7.95423 7.94016 7.95423 8.88297 8.54002 9.46876C9.1258 10.0545 10.0686 10.0545 11.9542 10.0545H12.0458C13.9314 10.0545 14.8742 10.0545 15.46 9.46876C16.0458 8.88297 16.0458 7.94016 16.0458 6.05454V4.25ZM13.75 22C13.75 22.3987 14.0611 22.7247 14.4538 22.7486H9.54621C9.9389 22.7247 10.25 22.3987 10.25 22L10.25 19.5C10.25 19.0189 10.2507 18.7082 10.2721 18.4727C10.3015 18.2392 10.4223 17.7721 10.9727 17.7721C11.2082 17.7507 11.5189 17.75 12 17.75C12.4811 17.75 12.7918 17.7507 13.0273 17.7721C13.2608 17.7843 13.7279 17.9415 13.7279 18.4727C13.7493 18.7082 13.75 19.0189 13.75 19.5V22ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H8.00896C8.56125 14 9.00896 13.5523 9.00896 13C9.00896 12.4477 8.56125 12 8.00896 12H8ZM11.991 12C11.4388 12 10.991 12.4477 10.991 13C10.991 13.5523 11.4388 14 11.991 14H12C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12H11.991ZM15.9922 12C15.4399 12 14.9922 12.4477 14.9922 13C14.9922 13.5523 15.4399 14 15.9922 14H16.0011C16.5534 14 17.0011 13.5523 17.0011 13C17.0011 12.4477 16.5534 12 16.0011 12H15.9922Z',
  d12: 'M11.948 1.25H12.052C12.9505 1.24997 13.6997 1.24995 14.2945 1.32991C14.9223 1.41432 15.4891 1.59999 15.9445 2.05546C16.4 2.51093 16.5857 3.07773 16.6701 3.70552C16.7501 4.30031 16.75 5.04953 16.75 5.94801V6.052C16.75 6.95048 16.7501 7.6997 16.6701 8.29448C16.5857 8.92228 16.4 9.48908 15.9445 9.94455C15.4891 10.4 14.9223 10.5857 14.2945 10.6701C13.6997 10.7501 12.9505 10.75 12.052 10.75H11.948C11.0495 10.75 10.3003 10.7501 9.70552 10.6701C9.07773 10.5857 8.51093 10.4 8.05546 9.94455C7.59999 9.48908 7.41432 8.92228 7.32991 8.29448C7.24995 7.6997 7.24997 6.95048 7.25 6.052V5.948C7.24997 5.04952 7.24995 4.3003 7.32991 3.70552C7.41432 3.07773 7.59999 2.51093 8.05546 2.05546C8.51093 1.59999 9.07773 1.41432 9.70552 1.32991C10.3003 1.24995 11.0495 1.24997 11.948 1.25ZM9.90539 2.81654C9.44393 2.87858 9.24644 2.9858 9.11612 3.11612C8.9858 3.24644 8.87858 3.44393 8.81654 3.90539C8.7516 4.38843 8.75 5.03599 8.75 6C8.75 6.96401 8.7516 7.61157 8.81654 8.09461C8.87858 8.55607 8.9858 8.75357 9.11612 8.88389C9.24644 9.0142 9.44393 9.12143 9.90539 9.18347C10.3884 9.24841 11.036 9.25 12 9.25C12.964 9.25 13.6116 9.24841 14.0946 9.18347C14.5561 9.12143 14.7536 9.0142 14.8839 8.88389C15.0142 8.75357 15.1214 8.55607 15.1835 8.09461C15.2484 7.61157 15.25 6.96401 15.25 6C15.25 5.03599 15.2484 4.38843 15.1835 3.90539C15.1214 3.44393 15.0142 3.24644 14.8839 3.11612C14.7536 2.9858 14.5561 2.87858 14.0946 2.81654C13.6116 2.7516 12.964 2.75 12 2.75C11.036 2.75 10.3884 2.7516 9.90539 2.81654Z',
  d13: 'M12 3.75C12.4142 3.75 12.75 4.08579 12.75 4.5V5.25H13.5C13.9142 5.25 14.25 5.58579 14.25 6C14.25 6.41421 13.9142 6.75 13.5 6.75H12.75V7.5C12.75 7.91421 12.4142 8.25 12 8.25C11.5858 8.25 11.25 7.91421 11.25 7.5V6.75H10.5C10.0858 6.75 9.75 6.41421 9.75 6C9.75 5.58579 10.0858 5.25 10.5 5.25H11.25V4.5C11.25 4.08579 11.5858 3.75 12 3.75Z',
  d14: 'M16.0458 4.25C17.5002 4.33893 18.6488 4.5877 19.506 5.44741C20.1807 6.12413 20.476 6.97933 20.6152 8.01798C20.75 9.02371 20.75 10.3062 20.75 11.9137V21.9986C20.75 22.4128 20.4142 22.7486 20 22.7486H4C3.58579 22.7486 3.25 22.4128 3.25 21.9986V11.9137V11.9137C3.24998 10.3062 3.24997 9.02371 3.38479 8.01798C3.52403 6.97933 3.81927 6.12413 4.49402 5.44741C5.35122 4.5877 6.49976 4.33893 7.95423 4.25V6.05455C7.95423 7.94016 7.95423 8.88297 8.54002 9.46876C9.1258 10.0545 10.0686 10.0545 11.9542 10.0545H12.0458C13.9314 10.0545 14.8742 10.0545 15.46 9.46876C16.0458 8.88297 16.0458 7.94016 16.0458 6.05454V4.25Z',
  d15: 'M12.0323 16.25C12.472 16.25 12.8514 16.25 13.1627 16.2782C13.4918 16.308 13.8178 16.3741 14.125 16.5514C14.467 16.7489 14.7511 17.033 14.9486 17.375C15.1259 17.6822 15.192 18.0082 15.2218 18.3374C15.25 18.6486 15.25 19.028 15.25 19.4678L15.25 22C15.25 22.4142 14.9142 22.75 14.5 22.75C14.0858 22.75 13.75 22.4142 13.75 22V19.5C13.75 19.0189 13.7493 18.7082 13.7279 18.4727C13.7279 17.9415 13.2608 17.7843 13.0273 17.7721C12.7918 17.7507 12.4811 17.75 12 17.75C11.5189 17.75 11.2082 17.7507 10.9727 17.7721C10.4223 17.7721 10.3015 18.2392 10.2721 18.4727C10.2507 18.7082 10.25 19.0189 10.25 19.5V22C10.25 22.4142 9.91422 22.75 9.5 22.75C9.08579 22.75 8.75 22.4142 8.75 22V19.4678V19.4677C8.74998 19.028 8.74997 18.6486 8.77818 18.3374C8.80802 18.0082 8.87407 17.6822 9.05144 17.375C9.24892 17.033 9.53296 16.7489 9.875 16.5514C10.1822 16.3741 10.5082 16.308 10.8374 16.2782C11.1486 16.25 11.5924 16.25 12.0322 16.25H12.0323Z',
  d16: 'M7 13C7 12.4477 7.44772 12 8 12H8.00896C8.56125 12 9.00896 12.4477 9.00896 13C9.00896 13.5523 8.56125 14 8.00896 14H8C7.44772 14 7 13.5523 7 13ZM10.991 13C10.991 12.4477 11.4388 12 11.991 12H12C12.5523 12 13 12.4477 13 13C13 13.5523 12.5523 14 12 14H11.991C11.4388 14 10.991 13.5523 10.991 13ZM14.9922 13C14.9922 12.4477 15.4399 12 15.9922 12H16.0011C16.5534 12 17.0011 12.4477 17.0011 13C17.0011 13.5523 16.5534 14 16.0011 14H15.9922C15.4399 14 14.9922 13.5523 14.9922 13Z',
  d17: 'M4 21.9999V6H8M20 21.9999V6H16',
  d18: 'M12 4V6M12 6V8M12 6H14M12 6H10',
  d19: 'M8 10H16V2.00021L8 2V10Z',
  d20: 'M8.00896 14H8M12 14H11.991M16.0011 14H15.9922',
  d21: 'M21.9978 21.9999H14.5055C14.5 21.9999 14.4955 21.9954 14.4955 21.9899V18.0066C14.4955 18.0011 14.491 17.9966 14.4855 17.9966H9.50499C9.49946 17.9966 9.49499 18.0011 9.49499 18.0066V21.9746C9.49499 21.9802 9.49051 21.9846 9.48499 21.9846H2',
  d22: 'M7.46968 1.46966C7.61033 1.32901 7.8011 1.24999 8.00002 1.25L16 1.25021C16.4142 1.25022 16.75 1.586 16.75 2.00021V10C16.75 10.4142 16.4142 10.75 16 10.75H8C7.58579 10.75 7.25 10.4142 7.25 10V2C7.25 1.80108 7.32902 1.61032 7.46968 1.46966ZM8.75 2.75002V9.25H15.25V2.75019L8.75 2.75002Z',
  d23: 'M22 22.75H2V20.75H22V22.75Z',
  d24: 'M11.25 5.25V4H12.75V5.25H14V6.75H12.75V8H11.25V6.75H10V5.25H11.25Z',
  d25: 'M3.46967 5.46967C3.61032 5.32902 3.80109 5.25 4 5.25H8C8.41421 5.25 8.75 5.58579 8.75 6V9.25684H15.25V6C15.25 5.58579 15.5858 5.25 16 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6V21.9999C20.75 22.4142 20.4142 22.7499 20 22.7499H15.25V17C15.25 16.5858 14.9142 16.25 14.5 16.25H9.5C9.08579 16.25 8.75 16.5858 8.75 17V22.7499H4C3.58579 22.7499 3.25 22.4142 3.25 21.9999V6C3.25 5.80109 3.32902 5.61032 3.46967 5.46967ZM9.00896 12H7V14H9.00896V12ZM13 12H10.991V14H13V12ZM17.0011 12H14.9922V14H17.0011V12Z',
  d26: 'M13.75 17.75V22.7499H10.25V17.75H13.75Z',
} as const;

export const IconHospital02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-02-stroke-rounded IconHospital02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHospital02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-02-duotone-rounded IconHospital02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
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
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHospital02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-02-twotone-rounded IconHospital02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHospital02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-02-solid-rounded IconHospital02SolidRounded"
    >
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

export const IconHospital02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-02-bulk-rounded IconHospital02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHospital02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-02-stroke-sharp IconHospital02StrokeSharp"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
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
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHospital02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hospital-02-solid-sharp IconHospital02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHospital02: TheIconSelfPack = {
  name: 'Hospital02',
  StrokeRounded: IconHospital02StrokeRounded,
  DuotoneRounded: IconHospital02DuotoneRounded,
  TwotoneRounded: IconHospital02TwotoneRounded,
  SolidRounded: IconHospital02SolidRounded,
  BulkRounded: IconHospital02BulkRounded,
  StrokeSharp: IconHospital02StrokeSharp,
  SolidSharp: IconHospital02SolidSharp,
};