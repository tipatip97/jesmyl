import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M6.5 16V12M6.5 12V9.125C6.5 9.00892 6.5 8.95087 6.50482 8.90198C6.55158 8.42721 6.92721 8.05158 7.40198 8.00482C7.45087 8 7.50892 8 7.625 8H9C10.1046 8 11 8.89543 11 10C11 11.1046 10.1046 12 9 12H6.5Z',
  d3: 'M17.4658 11.2225C17.2923 10.5267 16.4782 10 15.5 10C14.3954 10 13.5 10.6716 13.5 11.5C13.5 12.3284 14.3954 13 15.5 13C16.6046 13 17.5 13.6716 17.5 14.5C17.5 15.3284 16.6046 16 15.5 16C14.5183 16 13.7019 15.4696 13.5323 14.77',
  d4: 'M6.5 16V12M6.5 12V9.125C6.5 9.00892 6.5 8.95087 6.50482 8.90198C6.55158 8.42721 6.92721 8.05158 7.40198 8.00482C7.45087 8 7.50892 8 7.625 8H9C10.1046 8 11 8.89543 11 10C11 11.1046 10.1046 12 9 12H6.5ZM17.4658 11.2225C17.2923 10.5267 16.4782 10 15.5 10C14.3954 10 13.5 10.6716 13.5 11.5C13.5 12.3284 14.3954 13 15.5 13C16.6046 13 17.5 13.6716 17.5 14.5C17.5 15.3284 16.6046 16 15.5 16C14.5183 16 13.7019 15.4696 13.5323 14.77',
  d5: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM7.32849 7.25845C7.41559 7.24987 7.51001 7.24994 7.60096 7.25001L9.00002 7.25002C10.5188 7.25002 11.75 8.48124 11.75 10C11.75 11.5188 10.5188 12.75 9.00002 12.75H7.25002V16C7.25002 16.4142 6.91424 16.75 6.50002 16.75C6.08581 16.75 5.75002 16.4142 5.75002 16L5.75001 9.10096C5.74994 9.01001 5.74987 8.91559 5.75845 8.82849C5.84028 7.99763 6.49763 7.34028 7.32849 7.25845ZM7.25 11.25H9C9.69036 11.25 10.25 10.6904 10.25 10C10.25 9.30964 9.69036 8.75 9 8.75L7.47447 8.75131C7.3566 8.7634 7.2634 8.8566 7.25131 8.97447L7.25 11.25ZM14.25 11.5C14.25 11.3748 14.3159 11.2043 14.5358 11.0394C14.7559 10.8743 15.0943 10.75 15.5 10.75C16.2709 10.75 16.677 11.159 16.7381 11.404C16.8384 11.8059 17.2454 12.0505 17.6473 11.9503C18.0492 11.85 18.2938 11.443 18.1936 11.0411C17.9076 9.89438 16.6854 9.25002 15.5 9.25002C14.8011 9.25002 14.1396 9.46154 13.6358 9.83936C13.1318 10.2174 12.75 10.7968 12.75 11.5C12.75 12.2032 13.1318 12.7827 13.6358 13.1607C14.1396 13.5385 14.8011 13.75 15.5 13.75C15.9057 13.75 16.2441 13.8743 16.4642 14.0394C16.6841 14.2043 16.75 14.3748 16.75 14.5C16.75 14.6252 16.6841 14.7958 16.4642 14.9607C16.2441 15.1258 15.9057 15.25 15.5 15.25C14.7256 15.25 14.3205 14.838 14.2612 14.5934C14.1636 14.1908 13.7582 13.9436 13.3557 14.0411C12.9531 14.1387 12.7059 14.5441 12.8034 14.9467C13.0832 16.1011 14.3111 16.75 15.5 16.75C16.1989 16.75 16.8604 16.5385 17.3642 16.1607C17.8682 15.7827 18.25 15.2032 18.25 14.5C18.25 13.7968 17.8682 13.2174 17.3642 12.8394C16.8604 12.4615 16.1989 12.25 15.5 12.25C15.0943 12.25 14.7559 12.1258 14.5358 11.9607C14.3159 11.7958 14.25 11.6252 14.25 11.5Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M14.5358 11.0394C14.3159 11.2043 14.25 11.3748 14.25 11.5C14.25 11.6252 14.3159 11.7958 14.5358 11.9607C14.7559 12.1258 15.0943 12.25 15.5 12.25C16.1989 12.25 16.8604 12.4615 17.3642 12.8394C17.8682 13.2174 18.25 13.7968 18.25 14.5C18.25 15.2032 17.8682 15.7827 17.3642 16.1607C16.8604 16.5385 16.1989 16.75 15.5 16.75C14.3111 16.75 13.0832 16.1011 12.8034 14.9467C12.7059 14.5441 12.9531 14.1387 13.3557 14.0411C13.7582 13.9436 14.1636 14.1908 14.2612 14.5934C14.3205 14.838 14.7256 15.25 15.5 15.25C15.9057 15.25 16.2441 15.1258 16.4642 14.9607C16.6841 14.7958 16.75 14.6252 16.75 14.5C16.75 14.3748 16.6841 14.2043 16.4642 14.0394C16.2441 13.8743 15.9057 13.75 15.5 13.75C14.8011 13.75 14.1396 13.5385 13.6358 13.1607C13.1318 12.7827 12.75 12.2032 12.75 11.5C12.75 10.7968 13.1318 10.2174 13.6358 9.83936C14.1396 9.46154 14.8011 9.25002 15.5 9.25002C16.6854 9.25002 17.9076 9.89438 18.1936 11.0411C18.2938 11.443 18.0492 11.85 17.6473 11.9503C17.2454 12.0505 16.8384 11.8059 16.7381 11.404C16.677 11.159 16.2709 10.75 15.5 10.75C15.0943 10.75 14.7559 10.8743 14.5358 11.0394Z',
  d8: 'M7.60096 7.25001C7.51001 7.24994 7.41559 7.24987 7.32849 7.25845C6.49763 7.34028 5.84028 7.99763 5.75845 8.82849C5.74987 8.91559 5.74994 9.01001 5.75001 9.10096L5.75002 16C5.75002 16.4142 6.08581 16.75 6.50002 16.75C6.91424 16.75 7.25002 16.4142 7.25002 16V12.75H9.00002C10.5188 12.75 11.75 11.5188 11.75 10C11.75 8.48124 10.5188 7.25002 9.00002 7.25002L7.60096 7.25001ZM9 11.25H7.25L7.25131 8.97447C7.2634 8.8566 7.3566 8.7634 7.47447 8.75131L9 8.75C9.69036 8.75 10.25 9.30964 10.25 10C10.25 10.6904 9.69036 11.25 9 11.25Z',
  d9: 'M21 3V21H3V3H21Z',
  d10: 'M6.5 16V12M6.5 12V8H11V12H6.5Z',
  d11: 'M17.4991 11.2225V10H13.4991V13H17.4991V16H13.4991V14.77',
  d12: 'M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25L21 2.25C21.4142 2.25 21.75 2.58579 21.75 3L21.75 21C21.75 21.4142 21.4142 21.75 21 21.75L3 21.75C2.58579 21.75 2.25 21.4142 2.25 21L2.25 3ZM5.75 7.25L11.75 7.25V12.75L7.25 12.75V16.75H5.75L5.75 7.25ZM7.25 11.25L10.25 11.25V8.75L7.25 8.75L7.25 11.25ZM18.25 9.25H12.75V13.75L16.75 13.75V15.25H14.25V14.77L12.75 14.77V16.75H18.25V12.25H14.25V10.75H16.75V11.2225H18.25V9.25Z',
} as const;

export const IconAdobePhotoshopStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-photoshop-stroke-rounded IconAdobePhotoshopStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconAdobePhotoshopDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-photoshop-duotone-rounded IconAdobePhotoshopDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconAdobePhotoshopTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-photoshop-twotone-rounded IconAdobePhotoshopTwotoneRounded"
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

export const IconAdobePhotoshopSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-photoshop-solid-rounded IconAdobePhotoshopSolidRounded"
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

export const IconAdobePhotoshopBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-photoshop-bulk-rounded IconAdobePhotoshopBulkRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAdobePhotoshopStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-photoshop-stroke-sharp IconAdobePhotoshopStrokeSharp"
    >
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
        strokeLinecap="square" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAdobePhotoshopSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-photoshop-solid-sharp IconAdobePhotoshopSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAdobePhotoshop: TheIconSelfPack = {
  name: 'AdobePhotoshop',
  StrokeRounded: IconAdobePhotoshopStrokeRounded,
  DuotoneRounded: IconAdobePhotoshopDuotoneRounded,
  TwotoneRounded: IconAdobePhotoshopTwotoneRounded,
  SolidRounded: IconAdobePhotoshopSolidRounded,
  BulkRounded: IconAdobePhotoshopBulkRounded,
  StrokeSharp: IconAdobePhotoshopStrokeSharp,
  SolidSharp: IconAdobePhotoshopSolidSharp,
};