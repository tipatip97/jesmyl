import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M17 14C17 14 13.3176 10 12 10C10.6824 9.99999 7 14 7 14',
  d3: 'M6.68802 22.0694C8.03144 22.25 9.75212 22.25 11.9428 22.25L12.0572 22.25C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572L22.25 11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75L12.0572 1.75L11.9428 1.75L11.9428 1.75C9.75211 1.74999 8.03144 1.74998 6.68803 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31136 1.93059 6.68802C1.74998 8.03143 1.74999 9.7521 1.75 11.9428L1.75 11.9428L1.75 12.0572L1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694ZM11.9374 11.5402C11.9627 11.5288 11.9834 11.5202 11.9999 11.5139C12.0164 11.5202 12.0372 11.5288 12.0625 11.5402C12.1777 11.5923 12.3303 11.6785 12.5173 11.8024C12.8905 12.0497 13.3209 12.3935 13.7416 12.7568C14.1581 13.1166 14.5456 13.4788 14.8303 13.7523L15.2865 14.2007C15.6734 14.5946 16.3066 14.6005 16.7007 14.2136C17.0947 13.8266 17.1005 13.1935 16.7135 12.7994L16.2161 12.3103C15.9155 12.0214 15.5007 11.6335 15.049 11.2433C14.6014 10.8567 14.0977 10.4504 13.6221 10.1353C13.3847 9.97793 13.1341 9.82979 12.8865 9.7178C12.6564 9.61378 12.3416 9.50009 11.9999 9.50009C11.6583 9.50009 11.3435 9.61378 11.1134 9.7178C10.8658 9.82979 10.6153 9.97793 10.3778 10.1353C9.90221 10.4504 9.39853 10.8567 8.95094 11.2433C8.49922 11.6335 8.0844 12.0214 7.78376 12.3103L7.2864 12.7994C6.89944 13.1935 6.90519 13.8266 7.29924 14.2136C7.69327 14.6005 8.32647 14.5946 8.71344 14.2007L9.16959 13.7523C9.45425 13.4788 9.8418 13.1166 10.2583 12.7568C10.679 12.3935 11.1094 12.0497 11.4826 11.8024C11.6696 11.6785 11.8222 11.5923 11.9374 11.5402Z',
  d4: 'M11.9428 22.25C9.75212 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572L1.75 12.0572L1.75 11.9428L1.75 11.9428C1.74999 9.7521 1.74998 8.03143 1.93059 6.68802C2.11568 5.31136 2.50272 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68803 1.93059C8.03144 1.74998 9.75211 1.74999 11.9428 1.75L11.9428 1.75L12.0572 1.75L12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428L22.25 12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25L11.9428 22.25Z',
  d5: 'M11.9999 11.5139C11.9834 11.5202 11.9627 11.5288 11.9374 11.5402C11.8222 11.5923 11.6696 11.6785 11.4826 11.8024C11.1094 12.0497 10.679 12.3935 10.2583 12.7568C9.8418 13.1166 9.45425 13.4788 9.16959 13.7523L8.71344 14.2007C8.32647 14.5946 7.69327 14.6005 7.29924 14.2136C6.90519 13.8266 6.89944 13.1935 7.2864 12.7994L7.78376 12.3103C8.0844 12.0214 8.49922 11.6335 8.95094 11.2433C9.39853 10.8567 9.90221 10.4504 10.3778 10.1353C10.6152 9.97793 10.8658 9.82979 11.1134 9.7178C11.3435 9.61378 11.6583 9.50009 11.9999 9.50009C12.3416 9.50009 12.6564 9.61378 12.8865 9.7178C13.1341 9.82979 13.3846 9.97793 13.6221 10.1353C14.0977 10.4504 14.6014 10.8567 15.049 11.2433C15.5007 11.6335 15.9155 12.0214 16.2161 12.3103L16.7135 12.7994C17.1005 13.1935 17.0947 13.8266 16.7007 14.2136C16.3066 14.6005 15.6734 14.5946 15.2865 14.2007L14.8303 13.7523C14.5456 13.4788 14.1581 13.1166 13.7416 12.7568C13.3209 12.3935 12.8905 12.0497 12.5173 11.8024C12.3303 11.6785 12.1777 11.5923 12.0625 11.5402C12.0372 11.5288 12.0164 11.5202 11.9999 11.5139Z',
  d6: 'M21 3V21H3V3H21Z',
  d7: 'M17 14L12 10L7 14',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM17.6244 13.2191L11.9997 8.71936L6.375 13.2191L7.6244 14.7809L11.9997 11.2806L16.375 14.7808L17.6244 13.2191Z',
} as const;

export const IconSquareArrowUp01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-01-stroke-rounded IconSquareArrowUp01StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowUp01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-01-duotone-rounded IconSquareArrowUp01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowUp01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-01-twotone-rounded IconSquareArrowUp01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowUp01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-01-solid-rounded IconSquareArrowUp01SolidRounded"
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

export const IconSquareArrowUp01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-01-bulk-rounded IconSquareArrowUp01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowUp01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-01-stroke-sharp IconSquareArrowUp01StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowUp01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-01-solid-sharp IconSquareArrowUp01SolidSharp"
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

export const iconPackOfSquareArrowUp01: TheIconSelfPack = {
  name: 'SquareArrowUp01',
  StrokeRounded: IconSquareArrowUp01StrokeRounded,
  DuotoneRounded: IconSquareArrowUp01DuotoneRounded,
  TwotoneRounded: IconSquareArrowUp01TwotoneRounded,
  SolidRounded: IconSquareArrowUp01SolidRounded,
  BulkRounded: IconSquareArrowUp01BulkRounded,
  StrokeSharp: IconSquareArrowUp01StrokeSharp,
  SolidSharp: IconSquareArrowUp01SolidSharp,
};