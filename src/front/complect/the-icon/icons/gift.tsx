import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 11V15C4 18.2998 4 19.9497 5.02513 20.9749C6.05025 22 7.70017 22 11 22H13C16.2998 22 17.9497 22 18.9749 20.9749C20 19.9497 20 18.2998 20 15V11',
  d2: 'M3 9C3 8.25231 3 7.87846 3.20096 7.6C3.33261 7.41758 3.52197 7.26609 3.75 7.16077C4.09808 7 4.56538 7 5.5 7H18.5C19.4346 7 19.9019 7 20.25 7.16077C20.478 7.26609 20.6674 7.41758 20.799 7.6C21 7.87846 21 8.25231 21 9C21 9.74769 21 10.1215 20.799 10.4C20.6674 10.5824 20.478 10.7339 20.25 10.8392C19.9019 11 19.4346 11 18.5 11H5.5C4.56538 11 4.09808 11 3.75 10.8392C3.52197 10.7339 3.33261 10.5824 3.20096 10.4C3 10.1215 3 9.74769 3 9Z',
  d3: 'M6 3.78571C6 2.79949 6.79949 2 7.78571 2H8.14286C10.2731 2 12 3.7269 12 5.85714V7H9.21429C7.43908 7 6 5.56091 6 3.78571Z',
  d4: 'M18 3.78571C18 2.79949 17.2005 2 16.2143 2H15.8571C13.7269 2 12 3.7269 12 5.85714V7H14.7857C16.5609 7 18 5.56091 18 3.78571Z',
  d5: 'M12 11L12 22',
  d6: 'M4 15V11H20V15C20 18.2998 20 19.9497 18.9749 20.9749C17.9497 22 16.2998 22 13 22H11C7.70017 22 6.05025 22 5.02513 20.9749C4 19.9497 4 18.2998 4 15Z',
  d7: 'M12 7V5.85714M12 7H9.21429C7.43908 7 6 5.56091 6 3.78571C6 2.79949 6.79949 2 7.78571 2H8.14286C10.2731 2 12 3.7269 12 5.85714M12 7H14.7857C16.5609 7 18 5.56091 18 3.78571C18 2.79949 17.2005 2 16.2143 2H15.8571C13.7269 2 12 3.7269 12 5.85714',
  d8: 'M18.527 6.25C18.9713 6.24999 19.3447 6.24998 19.6492 6.27206C19.9652 6.29497 20.2721 6.34483 20.5645 6.47989C20.8957 6.63285 21.1916 6.86234 21.4072 7.1611C21.6109 7.44339 21.687 7.7475 21.7201 8.03961C21.7501 8.30406 21.75 8.62116 21.75 8.96402V9.03598C21.75 9.37885 21.7501 9.69594 21.7201 9.96039C21.687 10.2525 21.6109 10.5566 21.4072 10.8389C21.1916 11.1377 20.8957 11.3671 20.5645 11.5201C20.2721 11.6552 19.9652 11.705 19.6492 11.7279C19.3447 11.75 18.9713 11.75 18.5269 11.75H5.47308C5.0287 11.75 4.6553 11.75 4.35082 11.7279C4.03479 11.705 3.72793 11.6552 3.43552 11.5201C3.10434 11.3671 2.80841 11.1377 2.5928 10.8389C2.38907 10.5566 2.31299 10.2525 2.27989 9.96039C2.24993 9.69594 2.24997 9.37884 2.25 9.03597V8.96403C2.24997 8.62116 2.24993 8.30406 2.27989 8.03961C2.31299 7.7475 2.38907 7.44339 2.5928 7.1611C2.80841 6.86234 3.10434 6.63285 3.43552 6.47989C3.72793 6.34483 4.03479 6.29497 4.35082 6.27206C4.65529 6.24998 5.02869 6.24999 5.47306 6.25H18.527Z',
  d9: 'M3.78678 12.9182C3.52341 12.8738 3.39172 12.8516 3.32086 12.9115C3.25 12.9714 3.25 13.0943 3.25 13.34V15.0543C3.24998 16.6569 3.24997 17.9359 3.38483 18.939C3.52415 19.9752 3.81966 20.8287 4.4948 21.5038C5.16994 22.1789 6.02335 22.4744 7.05961 22.6138C8.0627 22.7486 9.34166 22.7486 10.9443 22.7486C10.975 22.7486 11 22.7236 11 22.6929L11 13.3986C11 13.21 11 13.1158 10.9414 13.0572C10.8828 12.9986 10.7886 12.9986 10.6 12.9986H5.43911C5.02245 12.9986 4.61055 12.9987 4.26041 12.9733C4.11504 12.9627 3.95558 12.9466 3.78678 12.9182Z',
  d10: 'M13.4 12.9986C13.2114 12.9986 13.1172 12.9986 13.0586 13.0572C13 13.1158 13 13.21 13 13.3986V22.6929C13 22.7236 13.025 22.7486 13.0557 22.7486C14.6583 22.7486 15.9373 22.7486 16.9404 22.6138C17.9767 22.4744 18.8301 22.1789 19.5052 21.5038C20.1803 20.8287 20.4758 19.9752 20.6152 18.939C20.75 17.9359 20.75 16.6569 20.75 15.0543V13.3399C20.75 13.0943 20.75 12.9714 20.6791 12.9115C20.6083 12.8516 20.4766 12.8738 20.2132 12.9182C20.0444 12.9466 19.8849 12.9627 19.7396 12.9733C19.3894 12.9987 18.9776 12.9986 18.5609 12.9986H13.4Z',
  d11: 'M7.78571 1.25C6.24721 1.25 5 2.49721 5 4.03571C5 6.3632 6.8868 8.25 9.21429 8.25H12H14.7857C17.1132 8.25 19 6.3632 19 4.03571C19 2.49721 17.7528 1.25 16.2143 1.25H15.8571C14.2852 1.25 12.8877 1.9967 12 3.15474C11.1123 1.9967 9.71476 1.25 8.14286 1.25H7.78571ZM11 6.10714C11 4.52919 9.72081 3.25 8.14286 3.25H7.78571C7.35178 3.25 7 3.60178 7 4.03571C7 5.25863 7.99137 6.25 9.21429 6.25H11V6.10714ZM13 6.25H14.7857C16.0086 6.25 17 5.25863 17 4.03571C17 3.60178 16.6482 3.25 16.2143 3.25H15.8571C14.2792 3.25 13 4.52919 13 6.10714V6.25Z',
  d12: 'M3.99805 11V22H19.9619V11',
  d13: 'M5.99219 3.78571C5.99219 2.79949 6.78987 2 7.77386 2H8.1302C10.2556 2 11.9786 3.7269 11.9786 5.85714V7H9.19921C7.42801 7 5.99219 5.56091 5.99219 3.78571Z',
  d14: 'M17.9669 3.78571C17.9669 2.79949 17.1692 2 16.1852 2H15.8288C13.7035 2 11.9805 3.7269 11.9805 5.85714V7H14.7599C16.5311 7 17.9669 5.56091 17.9669 3.78571Z',
  d15: 'M11.9805 11V22',
  d16: 'M2.97671 7.01488L2.97656 11.0457H20.9746V7.01512C20.9746 7.0096 20.9701 7.00512 20.9646 7.00512L2.98669 7.00488C2.98118 7.00488 2.97671 7.00936 2.97671 7.01488Z',
  d17: 'M5.25 3.78571C5.25 2.38528 6.38528 1.25 7.78571 1.25H8.14286C9.75697 1.25 11.1772 2.08007 12 3.33662C12.8228 2.08007 14.243 1.25 15.8571 1.25H16.2143C17.6147 1.25 18.75 2.38528 18.75 3.78571C18.75 4.71706 18.4288 5.57339 17.8912 6.25H21C21.4142 6.25 21.75 6.58579 21.75 7V10.75H2.25V7C2.25 6.58579 2.58579 6.25 3 6.25H6.10879C5.57117 5.57339 5.25 4.71706 5.25 3.78571ZM11.25 6.25V5.85714C11.25 4.14112 9.85888 2.75 8.14286 2.75H7.78571C7.21371 2.75 6.75 3.21371 6.75 3.78571C6.75 5.1467 7.8533 6.25 9.21429 6.25H11.25ZM14.7857 6.25C16.1467 6.25 17.25 5.1467 17.25 3.78571C17.25 3.21371 16.7863 2.75 16.2143 2.75H15.8571C14.1411 2.75 12.75 4.14112 12.75 5.85714V6.25H14.7857Z',
  d18: 'M11.25 12.25H3.25V22C3.25 22.4142 3.58579 22.75 4 22.75H11.25L11.25 12.25Z',
  d19: 'M12.75 22.75H20C20.4142 22.75 20.75 22.4142 20.75 22V12.25H12.75L12.75 22.75Z',
};

export const IconGiftStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gift-stroke-rounded IconGiftStrokeRounded"
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

export const IconGiftDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gift-duotone-rounded IconGiftDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconGiftTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gift-twotone-rounded IconGiftTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGiftSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gift-solid-rounded IconGiftSolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
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
    </TheIconWrapper>
  );
};

export const IconGiftBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gift-bulk-rounded IconGiftBulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="0.5">
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGiftStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gift-stroke-sharp IconGiftStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconGiftSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gift-solid-sharp IconGiftSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGift: TheIconSelfPack = {
  name: 'Gift',
  StrokeRounded: IconGiftStrokeRounded,
  DuotoneRounded: IconGiftDuotoneRounded,
  TwotoneRounded: IconGiftTwotoneRounded,
  SolidRounded: IconGiftSolidRounded,
  BulkRounded: IconGiftBulkRounded,
  StrokeSharp: IconGiftStrokeSharp,
  SolidSharp: IconGiftSolidSharp,
};