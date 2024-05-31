import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.77349 11.5C8.8749 7.08726 8.48911 3.78672 9.15201 3.18692C9.21537 3.12959 9.28932 3.08325 9.36678 3.04779C10.2369 2.64938 12.688 4.83294 14.2923 6.22156C14.5558 6.44968 14.5742 6.85339 14.3152 7.08672C13.1694 8.11876 10.8318 9.95773 8.77349 11.5ZM8.77349 11.5L2.51051 16.2903M8.77349 11.5C8.8749 15.9127 8.48911 19.2133 9.15201 19.8131C9.21537 19.8704 9.28942 19.9168 9.36688 19.9523C9.74875 20.127 10.435 19.8046 11.2205 19.2705M2.5 6.72564L11.4146 13.5528',
  d2: 'M19.6322 19.1589L21.5 21M20.7074 16.5964C20.7074 18.5826 19.094 20.1928 17.1037 20.1928C15.1134 20.1928 13.5 18.5826 13.5 16.5964C13.5 14.6102 15.1134 13 17.1037 13C19.094 13 20.7074 14.6102 20.7074 16.5964Z',
  d3: 'M8.75098 11.5V6.16586C8.75098 4.30386 8.75098 3.37286 9.34104 3.078C9.93108 2.78313 10.6763 3.34173 12.1668 4.45893L12.8784 4.99234C13.9221 5.77468 14.444 6.16586 14.444 6.69927C14.444 7.23268 13.9221 7.62386 12.8784 8.4062L8.75098 11.5Z',
  d4: 'M20.6931 16.6C20.6931 14.6118 19.0682 13 17.0639 13C15.0595 13 13.4346 14.6118 13.4346 16.6C13.4346 18.5882 15.0595 20.2 17.0639 20.2C19.0682 20.2 20.6931 18.5882 20.6931 16.6Z',
  d5: 'M19.6167 19.1589L21.4997 21M20.7006 16.5964C20.7006 18.5826 19.0741 20.1928 17.0676 20.1928C15.0611 20.1928 13.4346 18.5826 13.4346 16.5964C13.4346 14.6102 15.0611 13 17.0676 13C19.0741 13 20.7006 14.6102 20.7006 16.5964Z',
  d6: 'M8.8255 11.5C8.92774 7.08726 8.53881 3.78672 9.2071 3.18692C9.27098 3.12959 9.34553 3.08325 9.42362 3.04779C10.3008 2.64938 12.7719 4.83294 14.3892 6.22156C14.6549 6.44968 14.6734 6.85339 14.4123 7.08672C13.2572 8.11876 10.9006 9.95773 8.8255 11.5ZM8.8255 11.5L2.51157 16.2903M8.8255 11.5C8.92774 15.9127 8.53881 19.2133 9.2071 19.8131C9.27098 19.8704 9.34563 19.9168 9.42372 19.9523C9.8087 20.127 10.5005 19.8046 11.2924 19.2705M2.50098 6.72564L11.4881 13.5528',
  d7: 'M8.83141 11.4909C8.92911 7.23811 8.69032 4.15242 9.10217 3.26934C9.13153 3.20637 9.17688 3.15282 9.23424 3.11361C9.2762 3.08492 9.32088 3.06008 9.36678 3.03905C10.2224 2.64713 13.5844 5.39186 14.2603 6.17594C14.283 6.20225 14.3059 6.22509 14.3306 6.24952C14.5647 6.48128 14.6408 6.84774 14.3947 7.06948C13.2814 8.35723 10.8897 9.94801 8.83141 11.4909ZM8.83141 11.4909L2.51051 16.2867M8.83141 11.4909C8.92882 15.7314 8.6917 18.7606 9.09861 19.7052C9.12995 19.7779 9.18037 19.8402 9.24653 19.8837C9.28492 19.9089 9.32541 19.9311 9.36688 19.9501C9.74875 20.1248 10.2693 19.9767 11.0548 19.4424M2.5 6.71833L11.5767 13.5603',
  d8: 'M19.6322 19.1569L21.5 20.9987M20.7074 16.5934C20.7074 18.5804 19.094 20.1912 17.1037 20.1912C15.1134 20.1912 13.5 18.5804 13.5 16.5934C13.5 14.6064 15.1134 12.9956 17.1037 12.9956C19.094 12.9956 20.7074 14.6064 20.7074 16.5934Z',
  d9: 'M12.5 16.6C12.5 14.0595 14.5595 12 17.1 12C19.6405 12 21.7 14.0595 21.7 16.6C21.7 17.5083 21.4368 18.355 20.9824 19.0682L22.2071 20.2929C22.5976 20.6834 22.5976 21.3166 22.2071 21.7071C21.8166 22.0976 21.1834 22.0976 20.7929 21.7071L19.5682 20.4824C18.855 20.9368 18.0083 21.2 17.1 21.2C14.5595 21.2 12.5 19.1405 12.5 16.6ZM17.1 14C15.6641 14 14.5 15.1641 14.5 16.6C14.5 18.0359 15.6641 19.2 17.1 19.2C18.5359 19.2 19.7 18.0359 19.7 16.6C19.7 15.1641 18.5359 14 17.1 14Z',
  d10: 'M12.7828 3.61572C13.0561 3.82228 13.3306 4.02978 13.6026 4.23521C14.0748 4.59194 14.5129 4.92294 14.8236 5.23771C15.1638 5.58248 15.5001 6.05322 15.5001 6.70025C15.5001 7.34728 15.1638 7.81802 14.8236 8.16279C14.5129 8.47756 14.0748 8.80856 13.6026 9.1653C12.5721 9.94371 11.542 10.7224 10.5117 11.501L11.9833 12.6131C12.424 12.946 12.5112 13.5732 12.1783 14.0138C11.8453 14.4544 11.2182 14.5417 10.7776 14.2087L10.0133 13.6312C9.94741 13.5814 9.853 13.6284 9.853 13.711V16.8351C9.853 17.7999 9.85559 18.4097 9.91572 18.8226C9.94437 19.0193 10.1166 18.835 10.2414 18.756C10.7079 18.4605 11.3257 18.5991 11.6212 19.0657C11.9168 19.5323 11.7781 20.1501 11.3116 20.4456C10.7401 20.8075 9.87919 21.2648 8.98839 20.8161C8.23886 20.4385 8.02145 19.6935 7.9366 19.1108C7.85286 18.5359 7.85292 17.7769 7.85299 16.9114L7.853 13.5101L3.10295 17.0995C2.66232 17.4325 2.0352 17.3452 1.70223 16.9046C1.36927 16.464 1.45654 15.8369 1.89716 15.5039L7.19432 11.501L1.89716 7.49807C1.45654 7.16511 1.36927 6.53798 1.70223 6.09736C2.0352 5.65673 2.66232 5.56946 3.10295 5.90243L7.853 9.4919V6.16684C7.853 6.14132 7.853 6.11589 7.85299 6.09056C7.85292 5.22503 7.85286 4.4661 7.9366 3.89111C8.02145 3.30851 8.23886 2.5635 8.98839 2.18591C9.74117 1.80667 10.469 2.0802 10.9851 2.3628C11.493 2.64087 12.0963 3.09687 12.7828 3.61572ZM10.0133 9.37077C9.94741 9.42056 9.853 9.37356 9.853 9.29099V6.16684C9.853 5.20206 9.85559 4.59225 9.91572 4.17935C9.93122 4.07291 9.92891 4.06466 10.0246 4.11704C10.3872 4.3156 10.8719 4.67853 11.6383 5.25773L12.3442 5.79115C12.8873 6.20156 13.2046 6.44445 13.4001 6.64256C13.4553 6.69851 13.4553 6.70199 13.4001 6.75794C13.2046 6.95605 12.8873 7.19894 12.3442 7.60935L10.0133 9.37077Z',
  d11: 'M20.3581 19.397L21.9982 21.0021M21.1781 16.5881C21.1781 14.5935 19.526 12.9766 17.488 12.9766C15.45 12.9766 13.7979 14.5935 13.7979 16.5881C13.7979 18.5826 15.45 20.1996 17.488 20.1996C19.526 20.1996 21.1781 18.5826 21.1781 16.5881Z',
  d12: 'M2.00098 6.43776L8.16596 11.4597M8.19673 11.4792L14.2768 6.57109C14.3327 6.52692 14.3261 6.44165 14.264 6.40631L8.30079 3.01277C8.23246 2.97388 8.14676 3.02213 8.14676 3.09949V11.2637C8.14676 11.348 8.12969 11.5322 8.19673 11.4792ZM8.19673 11.4792L11.2416 13.9963M8.19673 11.4792C8.12986 11.4252 8.14676 11.4453 8.14676 11.5301M8.14676 11.5301L8.14678 19.9087C8.14678 19.9869 8.23416 20.035 8.30247 19.9944L11.0176 18.3813M8.14676 11.5301L2.01487 16.4882',
  d13: 'M12.6406 16.7406C12.6406 14.2001 14.7001 12.1406 17.2406 12.1406C19.7811 12.1406 21.8406 14.2001 21.8406 16.7406C21.8406 17.6489 21.5774 18.4957 21.1231 19.2088L22.5 20.5858L21.0858 22L19.7088 20.6231C18.9957 21.0774 18.1489 21.3406 17.2406 21.3406C14.7001 21.3406 12.6406 19.2811 12.6406 16.7406ZM17.2406 14.1406C15.8047 14.1406 14.6406 15.3047 14.6406 16.7406C14.6406 18.1766 15.8047 19.3406 17.2406 19.3406C18.6766 19.3406 19.8406 18.1766 19.8406 16.7406C19.8406 15.3047 18.6766 14.1406 17.2406 14.1406Z',
  d14: 'M7.64357 2.13283C7.95409 1.9545 8.33626 1.95581 8.64555 2.13627L14.6442 5.63624C14.9258 5.80056 15.1096 6.09186 15.1367 6.41678C15.1639 6.74171 15.0309 7.05946 14.7804 7.26819L9.70225 11.5L11.7811 13.2324L10.5007 14.7688L9.14159 13.6362V18.2588L10.4125 17.5172L11.4204 19.2447L8.64555 20.8637C8.33626 21.0442 7.95409 21.0455 7.64358 20.8672C7.33306 20.6888 7.14159 20.3581 7.14159 20V13.6339L2.78037 17.2682L1.5 15.7318L6.57815 11.5L1.5 7.26819L2.78037 5.73175L7.14159 9.36611V3C7.14159 2.64192 7.33306 2.31117 7.64357 2.13283ZM9.14159 9.36378V4.74123L12.4043 6.64488L9.14159 9.36378Z',
} as const;

export const IconBluetoothSearchStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-search-stroke-rounded IconBluetoothSearchStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBluetoothSearchDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-search-duotone-rounded IconBluetoothSearchDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBluetoothSearchTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-search-twotone-rounded IconBluetoothSearchTwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBluetoothSearchSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-search-solid-rounded IconBluetoothSearchSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBluetoothSearchBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-search-bulk-rounded IconBluetoothSearchBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBluetoothSearchStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-search-stroke-sharp IconBluetoothSearchStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBluetoothSearchSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bluetooth-search-solid-sharp IconBluetoothSearchSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBluetoothSearch: TheIconSelfPack = {
  name: 'BluetoothSearch',
  StrokeRounded: IconBluetoothSearchStrokeRounded,
  DuotoneRounded: IconBluetoothSearchDuotoneRounded,
  TwotoneRounded: IconBluetoothSearchTwotoneRounded,
  SolidRounded: IconBluetoothSearchSolidRounded,
  BulkRounded: IconBluetoothSearchBulkRounded,
  StrokeSharp: IconBluetoothSearchStrokeSharp,
  SolidSharp: IconBluetoothSearchSolidSharp,
};