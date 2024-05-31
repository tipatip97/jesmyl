import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M12 16L11.1339 13.2M6 16L6.86614 13.2M6.86614 13.2L7.59031 10.8589C8.17989 8.95298 8.47468 8 9 8C9.52532 8 9.82011 8.95298 10.4097 10.8589L11.1339 13.2M6.86614 13.2H11.1339',
  d3: 'M14 12.8696V14C14 15.1046 14.8954 16 16 16C16.7429 16 17.3912 15.5949 17.7361 14.9936M14 12.8696V12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12L18 12.8696H14Z',
  d4: 'M14 12.8696V14C14 15.1046 14.8954 16 16 16C16.7429 16 17.3912 15.5949 17.7361 14.9936M14 12.8696V12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12V12C18 12.4803 17.6106 12.8696 17.1304 12.8696H14Z',
  d5: 'M12 16L11.1339 13.2M11.1339 13.2L10.4097 10.8589C9.82011 8.95298 9.52532 8 9 8C8.47468 8 8.17989 8.95298 7.59031 10.8589L6.86614 13.2M11.1339 13.2H6.86614M6 16L6.86614 13.2M14 12.8696V14C14 15.1046 14.8954 16 16 16C16.7429 16 17.3912 15.5949 17.7361 14.9936M14 12.8696V12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12V12.8696H14Z',
  d6: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM8.05691 11.0805C8.3562 10.1129 8.56127 9.45462 8.7501 9.02959C8.93893 9.45462 9.144 10.113 9.44329 11.0805L9.8669 12.4499L7.6333 12.4499L8.05691 11.0805ZM11.0336 16.2215L10.3309 13.9499L7.1693 13.9499L6.4666 16.2215C6.34419 16.6173 5.92417 16.8388 5.52846 16.7164C5.13275 16.594 4.91119 16.174 5.0336 15.7783L6.62391 10.6372L6.64039 10.5839C6.92117 9.67615 7.15299 8.92664 7.38468 8.40849C7.50267 8.14462 7.64728 7.87724 7.84178 7.66798C8.05251 7.44126 8.3559 7.2499 8.7501 7.2499C9.1443 7.2499 9.44769 7.44126 9.65842 7.66798C9.85292 7.87724 9.99753 8.14462 10.1155 8.40849C10.3472 8.92663 10.579 9.67614 10.8598 10.5839L10.8598 10.5839L12.4666 15.7783C12.589 16.174 12.3675 16.594 11.9717 16.7164C11.576 16.8388 11.156 16.6173 11.0336 16.2215ZM14.9999 11.9999C14.9999 11.3095 15.5595 10.7499 16.2499 10.7499C16.9403 10.7499 17.4999 11.3095 17.4999 11.9999C17.4999 12.066 17.4463 12.1195 17.3803 12.1195L14.9999 12.1195V11.9999ZM17.3803 13.6195L14.9999 13.6195V13.9999C14.9999 14.6903 15.5595 15.2499 16.2499 15.2499C16.7133 15.2499 17.1188 14.9981 17.3354 14.6204C17.5415 14.2611 17.9999 14.1368 18.3592 14.3429C18.7185 14.549 18.8427 15.0073 18.6366 15.3666C18.1635 16.1915 17.2724 16.7499 16.2499 16.7499C14.7311 16.7499 13.4999 15.5187 13.4999 13.9999V11.9999C13.4999 10.4811 14.7311 9.2499 16.2499 9.2499C17.7687 9.2499 18.9999 10.4811 18.9999 11.9999C18.9999 12.8944 18.2748 13.6195 17.3803 13.6195Z',
  d7: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d8: 'M8.75011 9.02969C8.56128 9.45472 8.35621 10.113 8.05692 11.0806L7.63331 12.45H9.86691L9.4433 11.0806C9.14401 10.113 8.93894 9.45472 8.75011 9.02969ZM10.3309 13.95L11.0336 16.2216C11.156 16.6174 11.576 16.8389 11.9717 16.7165C12.3675 16.5941 12.589 16.1741 12.4666 15.7784L10.8598 10.584C10.579 9.67625 10.3472 8.92674 10.1155 8.40859C9.99754 8.14472 9.85293 7.87734 9.65843 7.66808C9.44769 7.44136 9.14431 7.25 8.75011 7.25C8.35591 7.25 8.05252 7.44136 7.84179 7.66808C7.64729 7.87733 7.50268 8.14472 7.38469 8.40859C7.153 8.92674 6.92117 9.67625 6.6404 10.584C6.63492 10.6017 6.62943 10.6195 6.62392 10.6373L5.03361 15.7784C4.9112 16.1741 5.13276 16.5941 5.52847 16.7165C5.92418 16.8389 6.3442 16.6174 6.46661 16.2216L7.16931 13.95H10.3309ZM16.2499 10.75C15.5596 10.75 14.9999 11.3096 14.9999 12V12.1196H17.3803C17.4463 12.1196 17.4999 12.0661 17.4999 12C17.4999 11.3096 16.9403 10.75 16.2499 10.75ZM14.9999 13.6196H17.3803C18.2748 13.6196 18.9999 12.8945 18.9999 12C18.9999 10.4812 17.7687 9.25 16.2499 9.25C14.7311 9.25 13.4999 10.4812 13.4999 12V14C13.4999 15.5188 14.7311 16.75 16.2499 16.75C17.2724 16.75 18.1635 16.1916 18.6366 15.3667C18.8427 15.0074 18.7185 14.5491 18.3592 14.343C17.9999 14.1369 17.5415 14.2612 17.3354 14.6205C17.1188 14.9982 16.7133 15.25 16.2499 15.25C15.5596 15.25 14.9999 14.6904 14.9999 14V13.6196Z',
  d9: 'M21 3V21H3V3H21Z',
  d10: 'M5.77588 16.7226L9.00391 7.50879L12.2212 16.7252M7.0814 12.9962H10.9195',
  d11: 'M17.9975 14.2498V15.9908C17.9975 15.9963 17.9931 16.0008 17.9875 16.0008H14.5042L14.5042 10H17.9805C17.986 10 17.9905 10.0044 17.9905 10.0099L18.0216 12.8618C18.0217 12.8673 18.0172 12.8719 18.0116 12.8719H14.502',
  d12: 'M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25L21 2.25C21.4142 2.25 21.75 2.58579 21.75 3L21.75 21C21.75 21.4142 21.4142 21.75 21 21.75L3 21.75C2.58579 21.75 2.25 21.4142 2.25 21L2.25 3ZM10.0515 7.25L12.9397 16.4922L11.508 16.9396L10.5001 13.7145V13.75H7.50011V13.7145L6.49227 16.9396L5.06055 16.4922L7.94872 7.25L10.0515 7.25ZM7.95776 12.25L10.0425 12.25L9.00011 8.91446L7.95776 12.25ZM18 9.25H13.75L13.75 16.75H18C18.4142 16.75 18.75 16.4142 18.75 16V14.25H17.25V15.25H15.25L15.25 13.6196H18C18.4142 13.6196 18.75 13.2838 18.75 12.8696V10C18.75 9.58579 18.4142 9.25 18 9.25ZM17.25 12.1196H15.25V10.75H17.25V12.1196Z',
} as const;

export const IconAdobeAfterEffectStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-after-effect-stroke-rounded IconAdobeAfterEffectStrokeRounded"
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

export const IconAdobeAfterEffectDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-after-effect-duotone-rounded IconAdobeAfterEffectDuotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAdobeAfterEffectTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-after-effect-twotone-rounded IconAdobeAfterEffectTwotoneRounded"
    >
      <path 
        d={d.d1} 
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

export const IconAdobeAfterEffectSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-after-effect-solid-rounded IconAdobeAfterEffectSolidRounded"
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

export const IconAdobeAfterEffectBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-after-effect-bulk-rounded IconAdobeAfterEffectBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconAdobeAfterEffectStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-after-effect-stroke-sharp IconAdobeAfterEffectStrokeSharp"
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
        strokeLinejoin="bevel" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAdobeAfterEffectSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-after-effect-solid-sharp IconAdobeAfterEffectSolidSharp"
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

export const iconPackOfAdobeAfterEffect: TheIconSelfPack = {
  name: 'AdobeAfterEffect',
  StrokeRounded: IconAdobeAfterEffectStrokeRounded,
  DuotoneRounded: IconAdobeAfterEffectDuotoneRounded,
  TwotoneRounded: IconAdobeAfterEffectTwotoneRounded,
  SolidRounded: IconAdobeAfterEffectSolidRounded,
  BulkRounded: IconAdobeAfterEffectBulkRounded,
  StrokeSharp: IconAdobeAfterEffectStrokeSharp,
  SolidSharp: IconAdobeAfterEffectSolidSharp,
};