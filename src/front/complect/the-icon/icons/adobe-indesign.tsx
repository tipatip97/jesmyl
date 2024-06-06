import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M15 11L15 15C15 16.1026 14.483 16 13.5 16C12.1193 16 11 14.8807 11 13.5C11 12.1193 12.1193 11 13.5 11H15ZM15 11V8',
  d3: 'M8 8V16',
  d4: 'M15 10.999V14.999C15 16.1016 14.483 15.999 13.5 15.999C12.1193 15.999 11 14.8797 11 13.499C11 12.1183 12.1193 10.999 13.5 10.999H15ZM15 10.999V7.99902M8 7.99902V15.999',
  d5: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM9.25 8C9.25 7.58579 8.91421 7.25 8.5 7.25C8.08579 7.25 7.75 7.58579 7.75 8L7.75 16C7.75 16.4142 8.08579 16.75 8.5 16.75C8.91421 16.75 9.25 16.4142 9.25 16L9.25 8ZM16.25 8C16.25 7.58579 15.9142 7.25 15.5 7.25C15.0858 7.25 14.75 7.58579 14.75 8V10.25H14C12.2051 10.25 10.75 11.7051 10.75 13.5C10.75 15.2949 12.2051 16.75 14 16.75C14.0633 16.75 14.131 16.7506 14.2002 16.7512C14.3632 16.7526 14.5349 16.7541 14.6796 16.7482C14.8897 16.7396 15.1635 16.7144 15.4235 16.5987C15.7204 16.4666 15.9518 16.2391 16.0906 15.9228C16.2148 15.64 16.25 15.3201 16.25 15V8ZM14 11.75H14.75L14.75 15C14.75 15.1084 14.7436 15.1864 14.7353 15.2411C14.7063 15.2443 14.6681 15.2474 14.6185 15.2494C14.511 15.2538 14.4015 15.2528 14.2628 15.2515C14.1857 15.2508 14.0997 15.25 14 15.25C13.0335 15.25 12.25 14.4665 12.25 13.5C12.25 12.5335 13.0335 11.75 14 11.75Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M8.5 7.25C8.91421 7.25 9.25 7.58579 9.25 8V16C9.25 16.4142 8.91421 16.75 8.5 16.75C8.08579 16.75 7.75 16.4142 7.75 16V8C7.75 7.58579 8.08579 7.25 8.5 7.25ZM15.5 7.25C15.9142 7.25 16.25 7.58579 16.25 8V15C16.25 15.3201 16.2148 15.64 16.0906 15.9228C15.9518 16.2391 15.7204 16.4666 15.4235 16.5987C15.1635 16.7144 14.8897 16.7396 14.6796 16.7482C14.5349 16.7541 14.3632 16.7526 14.2002 16.7512C14.131 16.7506 14.0633 16.75 14 16.75C12.2051 16.75 10.75 15.2949 10.75 13.5C10.75 11.7051 12.2051 10.25 14 10.25H14.75V8C14.75 7.58579 15.0858 7.25 15.5 7.25ZM14.75 11.75H14C13.0335 11.75 12.25 12.5335 12.25 13.5C12.25 14.4665 13.0335 15.25 14 15.25C14.0997 15.25 14.1857 15.2508 14.2628 15.2515C14.4015 15.2528 14.511 15.2538 14.6185 15.2494C14.6681 15.2474 14.7063 15.2443 14.7353 15.2411C14.7436 15.1864 14.75 15.1084 14.75 15L14.75 11.75Z',
  d8: 'M21 3V21H3V3H21Z',
  d9: 'M8 8V16.2578',
  d10: 'M14.9863 11.1253H11.0863C11.0311 11.1253 10.9863 11.1701 10.9863 11.2253V16.1578C10.9863 16.213 11.0311 16.2578 11.0863 16.2578H14.9863V11.1253ZM14.9863 11.1253V7.25781',
  d11: 'M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25L21 2.25C21.4142 2.25 21.75 2.58579 21.75 3L21.75 21C21.75 21.4142 21.4142 21.75 21 21.75L3 21.75C2.58579 21.75 2.25 21.4142 2.25 21L2.25 3ZM15.7501 7.25L15.75 16.75H11C10.5858 16.75 10.25 16.4142 10.25 16L10.25 11C10.25 10.5858 10.5858 10.25 11 10.25H14.2501V7.25H15.7501ZM11.75 11.75L11.75 15.25L14.25 15.25L14.2501 11.75H11.75ZM8.75 16.75L8.75 7.25H7.25L7.25 16.75H8.75Z',
} as const;

export const IconAdobeIndesignStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-indesign-stroke-rounded IconAdobeIndesignStrokeRounded"
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

export const IconAdobeIndesignDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-indesign-duotone-rounded IconAdobeIndesignDuotoneRounded"
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

export const IconAdobeIndesignTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-indesign-twotone-rounded IconAdobeIndesignTwotoneRounded"
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

export const IconAdobeIndesignSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-indesign-solid-rounded IconAdobeIndesignSolidRounded"
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

export const IconAdobeIndesignBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-indesign-bulk-rounded IconAdobeIndesignBulkRounded"
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

export const IconAdobeIndesignStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-indesign-stroke-sharp IconAdobeIndesignStrokeSharp"
    >
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
        strokeLinecap="square" 
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

export const IconAdobeIndesignSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-indesign-solid-sharp IconAdobeIndesignSolidSharp"
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

export const iconPackOfAdobeIndesign: TheIconSelfPack = {
  name: 'AdobeIndesign',
  StrokeRounded: IconAdobeIndesignStrokeRounded,
  DuotoneRounded: IconAdobeIndesignDuotoneRounded,
  TwotoneRounded: IconAdobeIndesignTwotoneRounded,
  SolidRounded: IconAdobeIndesignSolidRounded,
  BulkRounded: IconAdobeIndesignBulkRounded,
  StrokeSharp: IconAdobeIndesignStrokeSharp,
  SolidSharp: IconAdobeIndesignSolidSharp,
};