import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.1075 5.57624C11.3692 6.02707 11.5 6.25248 11.5 6.5C11.5 6.74752 11.3692 6.97293 11.1075 7.42376L9.85804 9.57624C9.59636 10.0271 9.46551 10.2525 9.25 10.3762C9.03449 10.5 8.7728 10.5 8.24943 10.5H5.75057C5.2272 10.5 4.96551 10.5 4.75 10.3762C4.53449 10.2525 4.40364 10.0271 4.14196 9.57624L2.89253 7.42376C2.63084 6.97293 2.5 6.74752 2.5 6.5C2.5 6.25248 2.63084 6.02707 2.89253 5.57624L4.14196 3.42376C4.40364 2.97293 4.53449 2.74752 4.75 2.62376C4.96551 2.5 5.2272 2.5 5.75057 2.5L8.24943 2.5C8.7728 2.5 9.03449 2.5 9.25 2.62376C9.46551 2.74752 9.59636 2.97293 9.85804 3.42376L11.1075 5.57624Z',
  d2: 'M21.1075 11.5762C21.3692 12.0271 21.5 12.2525 21.5 12.5C21.5 12.7475 21.3692 12.9729 21.1075 13.4238L19.858 15.5762C19.5964 16.0271 19.4655 16.2525 19.25 16.3762C19.0345 16.5 18.7728 16.5 18.2494 16.5H15.7506C15.2272 16.5 14.9655 16.5 14.75 16.3762C14.5345 16.2525 14.4036 16.0271 14.142 15.5762L12.8925 13.4238C12.6308 12.9729 12.5 12.7475 12.5 12.5C12.5 12.2525 12.6308 12.0271 12.8925 11.5762L14.142 9.42376C14.4036 8.97293 14.5345 8.74752 14.75 8.62376C14.9655 8.5 15.2272 8.5 15.7506 8.5L18.2494 8.5C18.7728 8.5 19.0345 8.5 19.25 8.62376C19.4655 8.74752 19.5964 8.97293 19.858 9.42376L21.1075 11.5762Z',
  d3: 'M11.1075 16.5762C11.3692 17.0271 11.5 17.2525 11.5 17.5C11.5 17.7475 11.3692 17.9729 11.1075 18.4238L9.85804 20.5762C9.59636 21.0271 9.46551 21.2525 9.25 21.3762C9.03449 21.5 8.7728 21.5 8.24943 21.5H5.75057C5.2272 21.5 4.96551 21.5 4.75 21.3762C4.53449 21.2525 4.40364 21.0271 4.14196 20.5762L2.89253 18.4238C2.63084 17.9729 2.5 17.7475 2.5 17.5C2.5 17.2525 2.63084 17.0271 2.89253 16.5762L4.14196 14.4238C4.40364 13.9729 4.53449 13.7475 4.75 13.6238C4.96551 13.5 5.2272 13.5 5.75057 13.5L8.24943 13.5C8.7728 13.5 9.03449 13.5 9.25 13.6238C9.46551 13.7475 9.59636 13.9729 9.85804 14.4238L11.1075 16.5762Z',
  d4: 'M8.52801 1.75C8.765 1.74997 8.99342 1.74994 9.18834 1.76905C9.40735 1.79053 9.64136 1.84008 9.87349 1.97338C10.1058 2.1068 10.2665 2.28404 10.3952 2.46266C10.5095 2.62135 10.6239 2.81845 10.7423 3.02245L12.0205 5.22455C12.1389 5.42848 12.2534 5.62559 12.3344 5.80351C12.4256 6.00367 12.5 6.23153 12.5 6.5C12.5 6.76848 12.4256 6.99634 12.3344 7.1965C12.2534 7.37442 12.1389 7.57153 12.0205 7.77546L10.7423 9.97756L10.7423 9.97757C10.6239 10.1816 10.5095 10.3787 10.3952 10.5374C10.2665 10.716 10.1058 10.8932 9.87349 11.0266C9.64136 11.1599 9.40735 11.2095 9.18834 11.231C8.99342 11.2501 8.76501 11.25 8.52802 11.25H5.97198C5.73499 11.25 5.50658 11.2501 5.31165 11.231C5.09265 11.2095 4.85864 11.1599 4.62651 11.0266C4.39417 10.8932 4.23352 10.716 4.10481 10.5374C3.99046 10.3787 3.87609 10.1816 3.75771 9.97757L3.75771 9.97756L2.47947 7.77544C2.36106 7.57151 2.24661 7.37441 2.16559 7.1965C2.07443 6.99634 2 6.76848 2 6.5C2 6.23153 2.07443 6.00367 2.16559 5.80351C2.24661 5.6256 2.36106 5.4285 2.47946 5.22458L2.47947 5.22457L3.7577 3.02246C3.87608 2.81846 3.99046 2.62135 4.10481 2.46266C4.23352 2.28404 4.39417 2.1068 4.62651 1.97338C4.85864 1.84008 5.09265 1.79053 5.31166 1.76905C5.50658 1.74994 5.735 1.74997 5.97199 1.75L8.52801 1.75Z',
  d5: 'M8.52801 12.75C8.765 12.75 8.99342 12.7499 9.18834 12.7691C9.40735 12.7905 9.64136 12.8401 9.87349 12.9734C10.1058 13.1068 10.2665 13.284 10.3952 13.4627C10.5095 13.6213 10.6239 13.8185 10.7423 14.0224L12.0205 16.2245C12.1389 16.4285 12.2534 16.6256 12.3344 16.8035C12.4256 17.0037 12.5 17.2315 12.5 17.5C12.5 17.7685 12.4256 17.9963 12.3344 18.1965C12.2534 18.3744 12.1389 18.5715 12.0205 18.7755L10.7423 20.9776L10.7423 20.9776C10.6239 21.1816 10.5095 21.3787 10.3952 21.5374C10.2665 21.716 10.1058 21.8932 9.87349 22.0266C9.64136 22.1599 9.40735 22.2095 9.18834 22.231C8.99342 22.2501 8.76501 22.25 8.52802 22.25H5.97198C5.73499 22.25 5.50658 22.2501 5.31165 22.231C5.09265 22.2095 4.85864 22.1599 4.62651 22.0266C4.39417 21.8932 4.23352 21.716 4.10481 21.5374C3.99046 21.3787 3.87609 21.1816 3.75771 20.9776L3.75771 20.9776L2.47947 18.7754C2.36106 18.5715 2.24661 18.3744 2.16559 18.1965C2.07443 17.9963 2 17.7685 2 17.5C2 17.2315 2.07443 17.0037 2.16559 16.8035C2.24661 16.6256 2.36106 16.4285 2.47946 16.2246L2.47947 16.2246L3.7577 14.0225C3.87608 13.8185 3.99046 13.6213 4.10481 13.4627C4.23352 13.284 4.39417 13.1068 4.62651 12.9734C4.85864 12.8401 5.09265 12.7905 5.31166 12.7691C5.50658 12.7499 5.735 12.75 5.97199 12.75L8.52801 12.75Z',
  d6: 'M18.028 7.75C18.265 7.74997 18.4934 7.74994 18.6883 7.76905C18.9074 7.79053 19.1414 7.84008 19.3735 7.97338C19.6058 8.1068 19.7665 8.28404 19.8952 8.46266C20.0095 8.62135 20.1239 8.81845 20.2423 9.02245L21.5205 11.2245C21.6389 11.4285 21.7534 11.6256 21.8344 11.8035C21.9256 12.0037 22 12.2315 22 12.5C22 12.7685 21.9256 12.9963 21.8344 13.1965C21.7534 13.3744 21.6389 13.5715 21.5205 13.7755L20.2423 15.9776L20.2423 15.9776C20.1239 16.1816 20.0095 16.3787 19.8952 16.5374C19.7665 16.716 19.6058 16.8932 19.3735 17.0266C19.1414 17.1599 18.9074 17.2095 18.6883 17.231C18.4934 17.2501 18.265 17.25 18.028 17.25H15.472C15.235 17.25 15.0066 17.2501 14.8117 17.231C14.5926 17.2095 14.3586 17.1599 14.1265 17.0266C13.8942 16.8932 13.7335 16.716 13.6048 16.5374C13.4905 16.3787 13.3761 16.1816 13.2577 15.9776L13.2577 15.9776L11.9795 13.7754C11.8611 13.5715 11.7466 13.3744 11.6656 13.1965C11.5744 12.9963 11.5 12.7685 11.5 12.5C11.5 12.2315 11.5744 12.0037 11.6656 11.8035C11.7466 11.6256 11.8611 11.4285 11.9795 11.2246L11.9795 11.2246L13.2577 9.02246C13.3761 8.81846 13.4905 8.62135 13.6048 8.46266C13.7335 8.28404 13.8942 8.1068 14.1265 7.97338C14.3586 7.84008 14.5926 7.79053 14.8117 7.76905C15.0066 7.74994 15.235 7.74997 15.472 7.75L18.028 7.75Z',
  d7: 'M19.5 16.5L21.5 12.5L19.5 8.50017L14.5 8.50017L12.5 12.5L14.5 16.5H19.5Z',
  d8: 'M9.5 10.5L11.5 6.5L9.5 2.50017L4.5 2.50017L2.5 6.5L4.5 10.5H9.5Z',
  d9: 'M9.5 21.5L11.5 17.5L9.5 13.5002L4.5 13.5002L2.5 17.5L4.5 21.5H9.5Z',
  d10: 'M14.0192 7.75H19.8955L22.2502 12.4998L19.8955 17.2498H14.0192L11.6646 12.4998L14.0192 7.75Z',
  d11: 'M4.10468 1.75H9.98096L12.3356 6.49982L9.98096 11.2498H4.10467L1.75 6.49982L4.10468 1.75Z',
  d12: 'M4.10468 12.75H9.98096L12.3356 17.4998L9.98096 22.2498H4.10467L1.75 17.4998L4.10468 12.75Z',
} as const;

export const IconCellsStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cells-stroke-rounded IconCellsStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCellsDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cells-duotone-rounded IconCellsDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconCellsTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cells-twotone-rounded IconCellsTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCellsSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cells-solid-rounded IconCellsSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCellsBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cells-bulk-rounded IconCellsBulkRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCellsStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cells-stroke-sharp IconCellsStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCellsSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cells-solid-sharp IconCellsSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCells: TheIconSelfPack = {
  name: 'Cells',
  StrokeRounded: IconCellsStrokeRounded,
  DuotoneRounded: IconCellsDuotoneRounded,
  TwotoneRounded: IconCellsTwotoneRounded,
  SolidRounded: IconCellsSolidRounded,
  BulkRounded: IconCellsBulkRounded,
  StrokeSharp: IconCellsStrokeSharp,
  SolidSharp: IconCellsSolidSharp,
};