import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 19L12 22',
  d2: 'M21 2H3C2.5286 2 2.29289 2 2.14645 2.14645C2 2.29289 2 2.5286 2 3V4C2 4.4714 2 4.70711 2.14645 4.85355C2.29289 5 2.5286 5 3 5H21C21.4714 5 21.7071 5 21.8536 4.85355C22 4.70711 22 4.4714 22 4V3C22 2.5286 22 2.29289 21.8536 2.14645C21.7071 2 21.4714 2 21 2Z',
  d3: 'M3 5V13C3 15.8284 3 17.2426 3.87868 18.1213C4.75736 19 6.17157 19 9 19H15C17.8284 19 19.2426 19 20.1213 18.1213C21 17.2426 21 15.8284 21 13V5',
  d4: 'M14 10H16M14 14L18 14',
  d5: 'M6.9375 14.6667L6.9375 9.33333M8.5 9.33333V8M8.5 16V14.6667M6.9375 12H10.0625M10.0625 12C10.5803 12 11 12.4477 11 13V13.6667C11 14.219 10.5803 14.6667 10.0625 14.6667H6M10.0625 12C10.5803 12 11 11.5523 11 11V10.3333C11 9.78105 10.5803 9.33333 10.0625 9.33333H6',
  d6: 'M3 13V5H21V13C21 15.8284 21 17.2426 20.1213 18.1213C19.2426 19 17.8284 19 15 19H9C6.17157 19 4.75736 19 3.87868 18.1213C3 17.2426 3 15.8284 3 13Z',
  d7: 'M12 18.25C12.4142 18.25 12.75 18.5858 12.75 19L12.75 22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22L11.25 19C11.25 18.5858 11.5858 18.25 12 18.25Z',
  d8: 'M2.96557 1.25001L3.00002 1.25001H21L21.0345 1.25001C21.2396 1.24994 21.4614 1.24988 21.6486 1.26945C21.8679 1.29239 22.1481 1.35137 22.3839 1.53477C22.6197 1.71817 22.6955 1.93609 22.725 2.10667C22.7502 2.25229 22.7501 2.42479 22.75 2.58433L22.75 2.61111V3.38889L22.75 3.41567C22.7501 3.57521 22.7502 3.74771 22.725 3.89333C22.6955 4.06391 22.6197 4.28183 22.3839 4.46523C22.1481 4.64863 21.8679 4.70761 21.6486 4.73055C21.4614 4.75012 21.2396 4.75006 21.0345 4.74999L21 4.74999H3.00002L2.96557 4.74999H2.96557C2.76045 4.75006 2.53866 4.75012 2.35145 4.73055C2.13212 4.70761 1.85193 4.64863 1.61614 4.46523C1.38033 4.28183 1.3045 4.06391 1.27501 3.89333C1.24984 3.74771 1.24993 3.57521 1.25001 3.41568L1.25002 3.38889V2.61111L1.25001 2.58432L1.25001 2.58432C1.24993 2.42479 1.24984 2.25229 1.27501 2.10667C1.3045 1.93609 1.38033 1.71817 1.61613 1.53477C1.85193 1.35137 2.13212 1.29239 2.35145 1.26945C2.53866 1.24988 2.76046 1.24994 2.96557 1.25001L2.96557 1.25001Z',
  d9: 'M2.25 6.25V13.0549V13.0549C2.24998 14.4224 2.24997 15.5248 2.36653 16.3917C2.48754 17.2918 2.74644 18.0497 3.34835 18.6516C3.95027 19.2535 4.70814 19.5124 5.60825 19.6335C6.47521 19.75 7.57753 19.75 8.94511 19.75H8.94512H8.94512H15.0549H15.0549H15.0549C16.4225 19.75 17.5248 19.75 18.3918 19.6335C19.2919 19.5124 20.0497 19.2535 20.6517 18.6516C21.2536 18.0497 21.5125 17.2918 21.6335 16.3917C21.75 15.5248 21.75 14.4224 21.75 13.0548V6.25H2.25ZM13.25 11C13.25 10.5858 13.5858 10.25 14 10.25H16C16.4142 10.25 16.75 10.5858 16.75 11C16.75 11.4142 16.4142 11.75 16 11.75H14C13.5858 11.75 13.25 11.4142 13.25 11ZM13.25 15C13.25 14.5858 13.5858 14.25 14 14.25L18 14.25C18.4142 14.25 18.75 14.5858 18.75 15C18.75 15.4142 18.4142 15.75 18 15.75L14 15.75C13.5858 15.75 13.25 15.4142 13.25 15ZM9.25 9C9.25 8.58579 8.91421 8.25 8.5 8.25C8.08579 8.25 7.75 8.58579 7.75 9V9.58333H6C5.58579 9.58333 5.25 9.91912 5.25 10.3333C5.25 10.7475 5.58579 11.0833 6 11.0833H6.1875L6.1875 14.9167H6C5.58579 14.9167 5.25 15.2525 5.25 15.6667C5.25 16.0809 5.58579 16.4167 6 16.4167H7.75V17C7.75 17.4142 8.08579 17.75 8.5 17.75C8.91421 17.75 9.25 17.4142 9.25 17V16.4167H10.0625C11.0393 16.4167 11.75 15.5868 11.75 14.6667V14C11.75 13.6376 11.6398 13.2892 11.4465 13C11.6398 12.7108 11.75 12.3624 11.75 12V11.3333C11.75 10.4132 11.0393 9.58333 10.0625 9.58333H9.25V9ZM7.6875 12.25V11.0833H10.0625C10.1212 11.0833 10.25 11.1489 10.25 11.3333V12C10.25 12.1844 10.1212 12.25 10.0625 12.25H7.6875ZM7.6875 13.75H10.0625C10.1212 13.75 10.25 13.8156 10.25 14V14.6667C10.25 14.8511 10.1212 14.9167 10.0625 14.9167H7.6875V13.75Z',
  d10: 'M2.25 6.25V13.0549C2.24998 14.4224 2.24997 15.5248 2.36653 16.3917C2.48754 17.2918 2.74644 18.0497 3.34835 18.6516C3.95027 19.2535 4.70814 19.5124 5.60825 19.6335C6.47522 19.75 7.57754 19.75 8.94512 19.75H15.0549C16.4225 19.75 17.5248 19.75 18.3918 19.6335C19.2919 19.5124 20.0497 19.2535 20.6517 18.6516C21.2536 18.0497 21.5125 17.2918 21.6335 16.3917C21.75 15.5248 21.75 14.4224 21.75 13.0548V6.25H2.25Z',
  d11: 'M13.25 11C13.25 10.5858 13.5858 10.25 14 10.25H16C16.4142 10.25 16.75 10.5858 16.75 11C16.75 11.4142 16.4142 11.75 16 11.75H14C13.5858 11.75 13.25 11.4142 13.25 11ZM13.25 15C13.25 14.5858 13.5858 14.25 14 14.25L18 14.25C18.4142 14.25 18.75 14.5858 18.75 15C18.75 15.4142 18.4142 15.75 18 15.75L14 15.75C13.5858 15.75 13.25 15.4142 13.25 15Z',
  d12: 'M8.5 8.25C8.91421 8.25 9.25 8.58579 9.25 9V9.58333H10.0625C11.0393 9.58333 11.75 10.4132 11.75 11.3333V12C11.75 12.3624 11.6398 12.7108 11.4465 13C11.6398 13.2892 11.75 13.6376 11.75 14V14.6667C11.75 15.5868 11.0393 16.4167 10.0625 16.4167H9.25V17C9.25 17.4142 8.91421 17.75 8.5 17.75C8.08579 17.75 7.75 17.4142 7.75 17V16.4167H6C5.58579 16.4167 5.25 16.0809 5.25 15.6667C5.25 15.2525 5.58579 14.9167 6 14.9167H6.1875L6.1875 11.0833H6C5.58579 11.0833 5.25 10.7475 5.25 10.3333C5.25 9.91912 5.58579 9.58333 6 9.58333H7.75V9C7.75 8.58579 8.08579 8.25 8.5 8.25ZM7.6875 11.0833V12.25H10.0625C10.1212 12.25 10.25 12.1844 10.25 12V11.3333C10.25 11.1489 10.1212 11.0833 10.0625 11.0833H7.6875ZM10.0625 13.75H7.6875L7.6875 14.9167H10.0625C10.1212 14.9167 10.25 14.8511 10.25 14.6667V14C10.25 13.8156 10.1212 13.75 10.0625 13.75Z',
  d13: 'M11.25 19.75H12.75L12.75 22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V19.75Z',
  d14: 'M22 2.00007L2 2V5.00007H22V2.00007Z',
  d15: 'M3 5V19H21V5',
  d16: 'M13.5 10H16.5M13.5 14L18.5 14',
  d17: 'M13 17.75L13 22.75L11 22.75L11 17.75L13 17.75Z',
  d18: 'M1.25 1.25L22.75 1.25007V4.75007H1.25V1.25Z',
  d19: 'M7.6875 12.25V11.0833H10.0625C10.1212 11.0833 10.25 11.1489 10.25 11.3333V12C10.25 12.1844 10.1212 12.25 10.0625 12.25H7.6875Z',
  d20: 'M7.6875 13.75H10.0625C10.1212 13.75 10.25 13.8156 10.25 14V14.6667C10.25 14.8511 10.1212 14.9167 10.0625 14.9167H7.6875V13.75Z',
  d21: 'M2.25 6.25V18.9999C2.25 19.4141 2.58579 19.7499 3 19.7499H21C21.4142 19.7499 21.75 19.4141 21.75 18.9999V6.25H2.25ZM16.5 11.75H13.5V10.25H16.5V11.75ZM18.5 15.75L13.5 15.75V14.25L18.5 14.25V15.75ZM9.25 9.58333V8.25H7.75V9.58333H5.25V11.0833H6.1875L6.1875 14.9167H5.25V16.4167H7.75V17.75H9.25V16.4167H10.0625C11.0393 16.4167 11.75 15.5868 11.75 14.6667V14C11.75 13.6376 11.6398 13.2892 11.4465 13C11.6398 12.7108 11.75 12.3624 11.75 12V11.3333C11.75 10.4132 11.0393 9.58333 10.0625 9.58333H9.25Z',
} as const;

export const IconBitcoinPresentationStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-presentation-stroke-rounded IconBitcoinPresentationStrokeRounded"
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

export const IconBitcoinPresentationDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-presentation-duotone-rounded IconBitcoinPresentationDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconBitcoinPresentationTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-presentation-twotone-rounded IconBitcoinPresentationTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconBitcoinPresentationSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-presentation-solid-rounded IconBitcoinPresentationSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinPresentationBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-presentation-bulk-rounded IconBitcoinPresentationBulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinPresentationStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-presentation-stroke-sharp IconBitcoinPresentationStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinPresentationSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-presentation-solid-sharp IconBitcoinPresentationSolidSharp"
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
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoinPresentation: TheIconSelfPack = {
  name: 'BitcoinPresentation',
  StrokeRounded: IconBitcoinPresentationStrokeRounded,
  DuotoneRounded: IconBitcoinPresentationDuotoneRounded,
  TwotoneRounded: IconBitcoinPresentationTwotoneRounded,
  SolidRounded: IconBitcoinPresentationSolidRounded,
  BulkRounded: IconBitcoinPresentationBulkRounded,
  StrokeSharp: IconBitcoinPresentationStrokeSharp,
  SolidSharp: IconBitcoinPresentationSolidSharp,
};