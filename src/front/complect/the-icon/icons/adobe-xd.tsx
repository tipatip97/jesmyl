import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M6 8L12 16M6 16L12 8',
  d3: 'M18 11L18 15C18 16.1026 17.483 16 16.5 16C15.1193 16 14 14.8807 14 13.5C14 12.1193 15.1193 11 16.5 11H18ZM18 11V8',
  d4: 'M6 7.99902L12 15.999M6 15.999L12 7.99902M18 10.999V14.999C18 16.1016 17.483 15.999 16.5 15.999C15.1193 15.999 14 14.8797 14 13.499C14 12.1183 15.1193 10.999 16.5 10.999H18ZM18 10.999V7.99902',
  d5: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM6.60004 7.55004C6.35152 7.21867 5.88141 7.15152 5.55004 7.40004C5.21867 7.64857 5.15152 8.11867 5.40004 8.45004L8.06254 12L5.40004 15.55C5.15152 15.8814 5.21867 16.3515 5.55004 16.6C5.88141 16.8486 6.35152 16.7814 6.60004 16.45L9.00004 13.25L11.4 16.45C11.6486 16.7814 12.1187 16.8486 12.45 16.6C12.7814 16.3515 12.8486 15.8814 12.6 15.55L9.93754 12L12.6 8.45004C12.8486 8.11867 12.7814 7.64857 12.45 7.40004C12.1187 7.15152 11.6486 7.21867 11.4 7.55004L9.00004 10.75L6.60004 7.55004ZM18.75 8.00004C18.75 7.58583 18.4143 7.25004 18 7.25004C17.5858 7.25004 17.25 7.58583 17.25 8.00004V10.25H16.5C14.7051 10.25 13.25 11.7051 13.25 13.5C13.25 15.295 14.7051 16.75 16.5 16.75C16.5634 16.75 16.631 16.7506 16.7002 16.7512C16.8632 16.7526 17.035 16.7541 17.1797 16.7482C17.3898 16.7397 17.6636 16.7144 17.9236 16.5988C18.2204 16.4667 18.4518 16.2392 18.5907 15.9229C18.7148 15.64 18.75 15.3201 18.75 15V8.00004ZM16.5 11.75H17.25V15C17.25 15.1084 17.2437 15.1864 17.2353 15.2412C17.2064 15.2444 17.1682 15.2474 17.1186 15.2495C17.0111 15.2538 16.9016 15.2528 16.7629 15.2516L16.7628 15.2516L16.7624 15.2515C16.6854 15.2508 16.5995 15.25 16.5 15.25C15.5335 15.25 14.75 14.4665 14.75 13.5C14.75 12.5335 15.5335 11.75 16.5 11.75Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M5.55004 7.40004C5.88142 7.15152 6.35152 7.21867 6.60004 7.55004L9.00004 10.75L11.4 7.55004C11.6486 7.21867 12.1187 7.15152 12.45 7.40004C12.7814 7.64857 12.8486 8.11867 12.6 8.45004L9.93754 12L12.6 15.55C12.8486 15.8814 12.7814 16.3515 12.45 16.6C12.1187 16.8486 11.6486 16.7814 11.4 16.45L9.00004 13.25L6.60004 16.45C6.35152 16.7814 5.88142 16.8486 5.55004 16.6C5.21867 16.3515 5.15152 15.8814 5.40004 15.55L8.06254 12L5.40004 8.45004C5.15152 8.11867 5.21867 7.64857 5.55004 7.40004ZM18 7.25004C18.4143 7.25004 18.75 7.58583 18.75 8.00004V15C18.75 15.3201 18.7148 15.64 18.5907 15.9229C18.4518 16.2392 18.2204 16.4667 17.9236 16.5988C17.6636 16.7144 17.3898 16.7397 17.1797 16.7482C17.035 16.7541 16.8632 16.7526 16.7002 16.7512C16.631 16.7506 16.5634 16.75 16.5 16.75C14.7051 16.75 13.25 15.295 13.25 13.5C13.25 11.7051 14.7051 10.25 16.5 10.25H17.25V8.00004C17.25 7.58583 17.5858 7.25004 18 7.25004ZM17.25 11.75H16.5C15.5335 11.75 14.75 12.5335 14.75 13.5C14.75 14.4665 15.5335 15.25 16.5 15.25C16.5997 15.25 16.6858 15.2508 16.7628 15.2516C16.9015 15.2528 17.0111 15.2539 17.1186 15.2495C17.1682 15.2474 17.2064 15.2444 17.2353 15.2412C17.2437 15.1864 17.25 15.1084 17.25 15V11.75Z',
  d8: 'M21 3V21H3V3H21Z',
  d9: 'M17.9883 11.0101H14.599C14.5438 11.0101 14.499 11.0548 14.499 11.1101V15.9C14.499 15.9552 14.5438 16 14.599 16H17.9883V11.0101ZM17.9883 11.0101V7.25',
  d10: 'M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25L21 2.25C21.4142 2.25 21.75 2.58579 21.75 3L21.75 21C21.75 21.4142 21.4142 21.75 21 21.75L3 21.75C2.58579 21.75 2.25 21.4142 2.25 21L2.25 3ZM6.14922 6.9502L8.99922 10.7502L11.8492 6.9502L13.0492 7.85019L9.93672 12.0002L13.0492 16.1502L11.8492 17.0502L8.99922 13.2502L6.14922 17.0502L4.94922 16.1502L8.06172 12.0002L4.94922 7.85019L6.14922 6.9502ZM18.75 16.75V7.25H17.25V10.25H14.5C14.0858 10.25 13.75 10.5858 13.75 11L13.75 16C13.75 16.4142 14.0858 16.75 14.5 16.75H18.75ZM15.25 11.75H17.25V15.25H15.25L15.25 11.75Z',
} as const;

export const IconAdobeXdStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-xd-stroke-rounded IconAdobeXdStrokeRounded"
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

export const IconAdobeXdDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-xd-duotone-rounded IconAdobeXdDuotoneRounded"
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

export const IconAdobeXdTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-xd-twotone-rounded IconAdobeXdTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAdobeXdSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-xd-solid-rounded IconAdobeXdSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAdobeXdBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-xd-bulk-rounded IconAdobeXdBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAdobeXdStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-xd-stroke-sharp IconAdobeXdStrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAdobeXdSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-xd-solid-sharp IconAdobeXdSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAdobeXd: TheIconSelfPack = {
  name: 'AdobeXd',
  StrokeRounded: IconAdobeXdStrokeRounded,
  DuotoneRounded: IconAdobeXdDuotoneRounded,
  TwotoneRounded: IconAdobeXdTwotoneRounded,
  SolidRounded: IconAdobeXdSolidRounded,
  BulkRounded: IconAdobeXdBulkRounded,
  StrokeSharp: IconAdobeXdStrokeSharp,
  SolidSharp: IconAdobeXdSolidSharp,
};