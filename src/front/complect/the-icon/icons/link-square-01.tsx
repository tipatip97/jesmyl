import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.1005 3.00208C7.45162 3.00864 5.54086 3.09822 4.31974 4.31931C3.00195 5.63706 3.00195 7.75796 3.00195 11.9997C3.00195 16.2415 3.00195 18.3624 4.31974 19.6801C5.63753 20.9979 7.75849 20.9979 12.0004 20.9979C16.2423 20.9979 18.3632 20.9979 19.6811 19.6801C20.9021 18.4591 20.9917 16.5484 20.9983 12.8996',
  d2: 'M20.4809 3.51715L14.9316 9.05114M20.4809 3.51715C19.9869 3.02264 16.6593 3.06873 15.9558 3.07874M20.4809 3.51715C20.9748 4.01166 20.9288 7.34292 20.9188 8.04718',
  d3: 'M3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682C3 18.364 3 16.2426 3 12Z',
  d4: 'M11.1002 3C7.45057 3.00657 5.53942 3.09617 4.31806 4.31754C3 5.63559 3 7.75698 3 11.9997C3 16.2425 3 18.3639 4.31806 19.6819C5.63611 21 7.7575 21 12.0003 21C16.243 21 18.3644 21 19.6825 19.6819C20.9038 18.4606 20.9934 16.5494 21 12.8998',
  d5: 'M20.5547 3.44473L14.9912 8.98597M20.5547 3.44473C20.0595 2.94957 16.7233 2.99573 16.0181 3.00575M20.5547 3.44473C21.05 3.93989 21.0038 7.27551 20.9938 7.98069',
  d6: 'M20.5532 3.44415L15.0039 8.97814M20.5532 3.44415C20.0592 2.94964 16.7316 2.99573 16.0281 3.00574M20.5532 3.44415C21.0471 3.93866 21.0011 7.26992 20.9911 7.97418',
  d7: 'M12.1002 2.9982C12.1012 3.55048 11.6543 3.999 11.102 4C9.26069 4.00331 7.95244 4.02946 6.95832 4.19037C5.99343 4.34655 5.43598 4.61383 5.02517 5.02464C4.58291 5.4669 4.30569 6.08056 4.15584 7.19512C4.00213 8.33845 4 9.85009 4 11.9997C4 14.1494 4.00212 15.661 4.15584 16.8044C4.30569 17.9189 4.5829 18.5326 5.02516 18.9748C5.46742 19.4171 6.08108 19.6943 7.19564 19.8442C8.33897 19.9979 9.85061 20 12.0003 20C14.1499 20 15.6616 19.9979 16.8049 19.8442C17.9194 19.6943 18.5331 19.4171 18.9754 18.9748C19.3862 18.564 19.6534 18.0066 19.8096 17.0417C19.9705 16.0476 19.9967 14.7393 20 12.898C20.001 12.3457 20.4495 11.8988 21.0018 11.8998C21.5541 11.9008 22.001 12.3493 22 12.9016C21.9967 14.7099 21.9748 16.182 21.7839 17.3613C21.5883 18.5697 21.2001 19.5785 20.3896 20.3891C19.5138 21.2648 18.4077 21.6467 17.0714 21.8263C15.7793 22 14.1328 22 12.0744 22H11.9262C9.86771 22 8.22126 22 6.92915 21.8263C5.59281 21.6467 4.48675 21.2648 3.61095 20.389C2.73515 19.5133 2.35334 18.4072 2.17367 17.0709C1.99996 15.7787 1.99998 14.1323 2 12.0738L2 11.9257C1.99998 9.86718 1.99996 8.22073 2.17368 6.92862C2.35334 5.59229 2.73516 4.48623 3.61095 3.61043C4.4215 2.79988 5.43031 2.41167 6.63875 2.21607C7.81796 2.0252 9.29011 2.00326 11.0984 2C11.6507 1.99901 12.0992 2.44592 12.1002 2.9982Z',
  d8: 'M16.6278 2.05969C17.5062 2.00814 19.2561 1.93287 20.3023 2.11815C20.7322 2.19428 21.1066 2.40101 21.3861 2.69873L21.3948 2.70812C21.6424 2.97543 21.8141 3.31484 21.882 3.69821C22.067 4.74418 21.9919 6.49371 21.9404 7.37214C21.8724 8.53179 20.4836 9.007 19.698 8.22141L18.4671 6.99058L15.7317 9.70515C15.3334 10.1004 14.6901 10.098 14.2948 9.69967C13.8996 9.30138 13.902 8.65808 14.3003 8.26282L17.0302 5.55371L15.7786 4.3021C14.9931 3.51657 15.4682 2.12775 16.6278 2.05969Z',
  d9: 'M12 3H3V21H21V12',
  d10: 'M15.0107 8.99185L20.5151 3.48508M20.9997 8.99185L21 3H15.0107',
  d11: 'M2 3C2 2.44772 2.44772 2 3 2H12V4H4V20H20V12H22V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3Z',
  d12: 'M15.0001 2H22.0001V9H20.0001V5.41421L15.7072 9.70711L14.293 8.29289L18.5859 4H15.0001V2Z',
} as const;

export const IconLinkSquare01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="link-square-01-stroke-rounded IconLinkSquare01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLinkSquare01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="link-square-01-duotone-rounded IconLinkSquare01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconLinkSquare01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="link-square-01-twotone-rounded IconLinkSquare01TwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconLinkSquare01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="link-square-01-solid-rounded IconLinkSquare01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconLinkSquare01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="link-square-01-bulk-rounded IconLinkSquare01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconLinkSquare01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="link-square-01-stroke-sharp IconLinkSquare01StrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconLinkSquare01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="link-square-01-solid-sharp IconLinkSquare01SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfLinkSquare01: TheIconSelfPack = {
  name: 'LinkSquare01',
  StrokeRounded: IconLinkSquare01StrokeRounded,
  DuotoneRounded: IconLinkSquare01DuotoneRounded,
  TwotoneRounded: IconLinkSquare01TwotoneRounded,
  SolidRounded: IconLinkSquare01SolidRounded,
  BulkRounded: IconLinkSquare01BulkRounded,
  StrokeSharp: IconLinkSquare01StrokeSharp,
  SolidSharp: IconLinkSquare01SolidSharp,
};