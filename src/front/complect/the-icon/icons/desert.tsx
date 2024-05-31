import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 7L8 21',
  d2: 'M12 18L12 21',
  d3: 'M3 21H15',
  d4: 'M4 13V13.9596C4 14.8052 4 15.228 4.20108 15.5762C4.40216 15.9243 4.76839 16.1356 5.50083 16.5582L8 18',
  d5: 'M12 9V11.9596C12 12.8052 12 13.228 11.7989 13.5762C11.5978 13.9243 11.2316 14.1356 10.4992 14.5582L8 16',
  d6: 'M8.25 5.75C8.80228 5.75 9.25 6.19772 9.25 6.75L9.25 14.0186L10.2494 13.442C10.6325 13.221 10.857 13.0902 11.016 12.9763C11.1534 12.8779 11.1773 12.8361 11.1826 12.8267C11.1825 12.8269 11.1827 12.8265 11.1826 12.8267L11.1834 12.8254C11.1888 12.8161 11.2131 12.7745 11.2297 12.6063C11.2489 12.4117 11.25 12.1519 11.25 11.7096V8.75C11.25 8.19772 11.6977 7.75 12.25 7.75C12.8023 7.75 13.25 8.19772 13.25 8.75L13.25 11.7503C13.25 12.1381 13.2501 12.498 13.22 12.8026C13.1868 13.1397 13.1114 13.486 12.9149 13.8263C12.7183 14.1666 12.456 14.405 12.1806 14.6022C11.9318 14.7805 11.6201 14.9603 11.2841 15.1541L9.25 16.3276V17.7327C9.25022 17.7448 9.25022 17.757 9.25 17.7692V19.75H11.25V17.75C11.25 17.1977 11.6977 16.75 12.25 16.75C12.8023 16.75 13.25 17.1977 13.25 17.75V19.75H15.25C15.8023 19.75 16.25 20.1977 16.25 20.75C16.25 21.3023 15.8023 21.75 15.25 21.75H3.25C2.69772 21.75 2.25 21.3023 2.25 20.75C2.25 20.1977 2.69772 19.75 3.25 19.75H7.25V18.3276L5.21589 17.154C4.87993 16.9603 4.56822 16.7805 4.31939 16.6022C4.044 16.405 3.78169 16.1666 3.58514 15.8263C3.38858 15.486 3.3132 15.1397 3.27996 14.8026C3.24993 14.498 3.24996 14.1381 3.25 13.7503C3.25 13.7368 3.25 13.7232 3.25 13.7096V12.75C3.25 12.1977 3.69772 11.75 4.25 11.75C4.80228 11.75 5.25 12.1977 5.25 12.75V13.7096C5.25 14.1519 5.25112 14.4117 5.27031 14.6063C5.2869 14.7745 5.3112 14.8161 5.31663 14.8254L5.31742 14.8267C5.32275 14.8361 5.34657 14.8779 5.484 14.9763C5.64299 15.0902 5.86748 15.221 6.25056 15.442L7.25 16.0186V15.7692C7.24978 15.757 7.24978 15.7448 7.25 15.7326L7.25 6.75C7.25 6.19772 7.69772 5.75 8.25 5.75Z',
  d7: 'M14.25 6C14.25 3.92893 15.9289 2.25 18 2.25C20.0711 2.25 21.75 3.92893 21.75 6C21.75 8.07107 20.0711 9.75 18 9.75C15.9289 9.75 14.25 8.07107 14.25 6Z',
  d8: 'M8.25 5.75C8.80228 5.75 9.25 6.19772 9.25 6.75L9.25 14.0186L10.2494 13.442C10.6325 13.221 10.857 13.0902 11.016 12.9763C11.1534 12.8779 11.1773 12.8361 11.1826 12.8267L11.1834 12.8254C11.1888 12.8161 11.2131 12.7745 11.2297 12.6063C11.2489 12.4117 11.25 12.1519 11.25 11.7096V8.75C11.25 8.19772 11.6977 7.75 12.25 7.75C12.8023 7.75 13.25 8.19772 13.25 8.75L13.25 11.7503C13.25 12.1381 13.2501 12.498 13.22 12.8026C13.1868 13.1397 13.1114 13.486 12.9149 13.8263C12.7183 14.1666 12.456 14.405 12.1806 14.6022C11.9318 14.7805 11.6201 14.9603 11.2841 15.1541L9.25 16.3276V17.7327C9.25022 17.7448 9.25022 17.757 9.25 17.7692V19.75H15.25C15.8023 19.75 16.25 20.1977 16.25 20.75C16.25 21.3023 15.8023 21.75 15.25 21.75H3.25C2.69772 21.75 2.25 21.3023 2.25 20.75C2.25 20.1977 2.69772 19.75 3.25 19.75H7.25V18.3276L5.21589 17.154C4.87993 16.9603 4.56822 16.7805 4.31939 16.6022C4.044 16.405 3.78169 16.1666 3.58514 15.8263C3.38858 15.486 3.3132 15.1397 3.27996 14.8026C3.24993 14.498 3.24996 14.1381 3.25 13.7503L3.25 13.7096V12.75C3.25 12.1977 3.69772 11.75 4.25 11.75C4.80228 11.75 5.25 12.1977 5.25 12.75V13.7096C5.25 14.1519 5.25112 14.4117 5.27031 14.6063C5.2869 14.7745 5.3112 14.8161 5.31663 14.8254L5.31742 14.8267C5.32275 14.8361 5.34657 14.8779 5.484 14.9763C5.64299 15.0902 5.86748 15.221 6.25056 15.442L7.25 16.0186V15.7692C7.24978 15.757 7.24978 15.7448 7.25 15.7326L7.25 6.75C7.25 6.19772 7.69772 5.75 8.25 5.75Z',
  d9: 'M11.25 19.75V17.75C11.25 17.1977 11.6977 16.75 12.25 16.75C12.8023 16.75 13.25 17.1977 13.25 17.75V19.75H11.25Z',
  d10: 'M4 13V15.5L8 18',
  d11: 'M12 9V13L8 16',
  d12: 'M7 20V18.5542L3.47 16.348C3.17762 16.1653 3 15.8448 3 15.5V13H5V14.9458L7 16.1958L7 7H9L9 13.9988L10.9984 12.5V9H12.9984V13C12.9984 13.3148 12.8502 13.6111 12.5984 13.8L9 16.4988V20H11V18H13V20H15V22H3V20H7Z',
  d13: 'M13.5 5.75C13.5 3.67893 15.1789 2 17.25 2C19.3211 2 21 3.67893 21 5.75C21 7.82107 19.3211 9.5 17.25 9.5C15.1789 9.5 13.5 7.82107 13.5 5.75Z',
} as const;

export const IconDesertStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="desert-stroke-rounded IconDesertStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="18" 
        cy="6" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconDesertDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="desert-duotone-rounded IconDesertDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="18" 
        cy="6" 
        r="3" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="18" 
        cy="6" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconDesertTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="desert-twotone-rounded IconDesertTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="18" 
        cy="6" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconDesertSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="desert-solid-rounded IconDesertSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDesertBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="desert-bulk-rounded IconDesertBulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDesertStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="desert-stroke-sharp IconDesertStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="18" 
        cy="6" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconDesertSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="desert-solid-sharp IconDesertSolidSharp"
    >
      <path 
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

export const iconPackOfDesert: TheIconSelfPack = {
  name: 'Desert',
  StrokeRounded: IconDesertStrokeRounded,
  DuotoneRounded: IconDesertDuotoneRounded,
  TwotoneRounded: IconDesertTwotoneRounded,
  SolidRounded: IconDesertSolidRounded,
  BulkRounded: IconDesertBulkRounded,
  StrokeSharp: IconDesertStrokeSharp,
  SolidSharp: IconDesertSolidSharp,
};