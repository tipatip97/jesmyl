import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M14 7C14 7 10 10.6824 10 12C9.99999 13.3176 14 17 14 17',
  d3: 'M22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572L22.25 11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75L11.9428 1.75C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03143 1.74999 9.7521 1.75 11.9428L1.75 11.9428L1.75 12.0572L1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31136 21.8843 6.68802 22.0694C8.03143 22.25 9.7521 22.25 11.9428 22.25L11.9428 22.25L12.0572 22.25L12.0572 22.25C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312ZM11.5402 12.0626C11.5288 12.0373 11.5202 12.0166 11.5139 12.0001C11.5202 11.9836 11.5288 11.9628 11.5402 11.9375C11.5923 11.8223 11.6785 11.6697 11.8024 11.4827C12.0497 11.1095 12.3935 10.6791 12.7568 10.2584C13.1166 9.8419 13.4788 9.45435 13.7523 9.16969L14.2007 8.71354C14.5946 8.32658 14.6005 7.69337 14.2136 7.29935C13.8266 6.90529 13.1935 6.89954 12.7994 7.2865L12.3103 7.78386C12.0214 8.0845 11.6335 8.49932 11.2433 8.95105C10.8567 9.39864 10.4504 9.90231 10.1353 10.3779C9.97793 10.6154 9.82979 10.8659 9.7178 11.1135C9.61378 11.3436 9.50009 11.6584 9.50009 12.0001C9.50009 12.3417 9.61378 12.6565 9.7178 12.8866C9.82979 13.1342 9.97793 13.3847 10.1353 13.6222C10.4504 14.0978 10.8567 14.6015 11.2433 15.0491C11.6335 15.5008 12.0214 15.9156 12.3103 16.2162L12.7994 16.7136C13.1935 17.1006 13.8266 17.0948 14.2136 16.7008C14.6005 16.3067 14.5946 15.6735 14.2007 15.2866L13.7523 14.8304C13.4788 14.5457 13.1166 14.1582 12.7568 13.7417C12.3935 13.321 12.0497 12.8906 11.8024 12.5174C11.6785 12.3304 11.5923 12.1778 11.5402 12.0626Z',
  d4: 'M22.25 12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25L12.0572 22.25L11.9428 22.25L11.9428 22.25C9.7521 22.25 8.03143 22.25 6.68802 22.0694C5.31136 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572L1.75 12.0572L1.75 11.9428L1.75 11.9428C1.74999 9.7521 1.74998 8.03143 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75L12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428L22.25 12.0572Z',
  d5: 'M11.5139 12.0001C11.5202 12.0166 11.5288 12.0373 11.5402 12.0626C11.5923 12.1778 11.6785 12.3304 11.8024 12.5174C12.0497 12.8906 12.3935 13.321 12.7568 13.7417C13.1166 14.1582 13.4788 14.5457 13.7523 14.8304L14.2007 15.2866C14.5946 15.6735 14.6005 16.3067 14.2136 16.7008C13.8266 17.0948 13.1935 17.1006 12.7994 16.7136L12.3103 16.2162C12.0214 15.9156 11.6335 15.5008 11.2433 15.0491C10.8567 14.6015 10.4504 14.0978 10.1353 13.6222C9.97793 13.3848 9.82979 13.1342 9.7178 12.8866C9.61378 12.6565 9.50009 12.3417 9.50009 12.0001C9.50009 11.6584 9.61378 11.3436 9.7178 11.1135C9.82979 10.8659 9.97793 10.6154 10.1353 10.3779C10.4504 9.90231 10.8567 9.39864 11.2433 8.95105C11.6335 8.49932 12.0214 8.0845 12.3103 7.78386L12.7994 7.2865C13.1935 6.89954 13.8266 6.90529 14.2136 7.29935C14.6005 7.69337 14.5946 8.32658 14.2007 8.71355L13.7523 9.16969C13.4788 9.45435 13.1166 9.8419 12.7568 10.2584C12.3935 10.6791 12.0497 11.1095 11.8024 11.4827C11.6785 11.6697 11.5923 11.8223 11.5402 11.9375C11.5288 11.9628 11.5202 11.9836 11.5139 12.0001Z',
  d6: 'M21 3V21H3V3H21Z',
  d7: 'M14 7L10 12L14 17',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM14.7802 7.62474L13.2185 6.37537L8.71875 12.0001L13.2185 17.6248L14.7802 16.3754L11.28 12.0001L14.7802 7.62474Z',
} as const;

export const IconSquareArrowLeft01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-01-stroke-rounded IconSquareArrowLeft01StrokeRounded"
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

export const IconSquareArrowLeft01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-01-duotone-rounded IconSquareArrowLeft01DuotoneRounded"
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

export const IconSquareArrowLeft01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-01-twotone-rounded IconSquareArrowLeft01TwotoneRounded"
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

export const IconSquareArrowLeft01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-01-solid-rounded IconSquareArrowLeft01SolidRounded"
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

export const IconSquareArrowLeft01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-01-bulk-rounded IconSquareArrowLeft01BulkRounded"
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

export const IconSquareArrowLeft01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-01-stroke-sharp IconSquareArrowLeft01StrokeSharp"
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

export const IconSquareArrowLeft01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-01-solid-sharp IconSquareArrowLeft01SolidSharp"
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

export const iconPackOfSquareArrowLeft01: TheIconSelfPack = {
  name: 'SquareArrowLeft01',
  StrokeRounded: IconSquareArrowLeft01StrokeRounded,
  DuotoneRounded: IconSquareArrowLeft01DuotoneRounded,
  TwotoneRounded: IconSquareArrowLeft01TwotoneRounded,
  SolidRounded: IconSquareArrowLeft01SolidRounded,
  BulkRounded: IconSquareArrowLeft01BulkRounded,
  StrokeSharp: IconSquareArrowLeft01StrokeSharp,
  SolidSharp: IconSquareArrowLeft01SolidSharp,
};