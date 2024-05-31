import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.5576 4L20.4551 4.97574C20.8561 5.41165 21.0566 5.62961 20.9861 5.81481C20.9155 6 20.632 6 20.0649 6C18.7956 6 17.2771 5.79493 16.1111 6.4733C15.3903 6.89272 14.8883 7.62517 14.0392 9M3 18H4.58082C6.50873 18 7.47269 18 8.2862 17.5267C9.00708 17.1073 9.50904 16.3748 10.3582 15',
  d2: 'M19.5576 20L20.4551 19.0243C20.8561 18.5883 21.0566 18.3704 20.9861 18.1852C20.9155 18 20.632 18 20.0649 18C18.7956 18 17.2771 18.2051 16.1111 17.5267C15.2976 17.0534 14.7629 16.1815 13.6935 14.4376L10.7038 9.5624C9.63441 7.81853 9.0997 6.9466 8.2862 6.4733C7.47269 6 6.50873 6 4.58082 6H3',
  d3: 'M20.0649 5.99982L20.4035 6.00007C20.6842 6.0005 20.8246 6.00072 20.9123 6.08856C21 6.1764 21 6.31709 21 6.59848V17.3998C21 17.6827 21 17.8241 20.9121 17.9119C20.8243 17.9998 20.6829 17.9998 20.4001 17.9998H20.0649C18.7956 17.9998 17.2771 18.2049 16.1111 17.5265C15.2976 17.0532 14.7629 16.1813 13.6935 14.4374L12.1206 11.8725C11.3975 13.0144 10.7042 14.1934 10.3582 14.9998C9.50904 16.3746 9.00708 17.1071 8.2862 17.5265C7.47269 17.9998 6.50873 17.9998 4.58082 17.9998C3.70776 17.9998 3 17.2921 3 16.419V5.99982H4.58082C6.50873 5.99982 7.47269 5.99982 8.2862 6.47312C9.0997 6.94642 9.63441 7.81835 10.7038 9.56222L12.1206 11.8725C12.8321 10.7488 13.5725 9.66112 14.0392 8.99982C14.8883 7.62498 15.3903 6.89254 16.1111 6.47312C17.2771 5.79475 18.7956 5.99982 20.0649 5.99982Z',
  d4: 'M6.75056 16.9459C6.22882 16.9988 5.56462 17 4.58082 17H3C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H4.58082H4.63006H4.63009C5.55217 19 6.31793 19 6.95226 18.9357C7.62184 18.8679 8.21843 18.7231 8.78908 18.391C9.76605 17.8226 10.3916 16.8489 11.209 15.5255C11.4992 15.0556 11.3535 14.4394 10.8836 14.1492C10.4137 13.859 9.79756 14.0046 9.50735 14.4745C8.62651 15.9007 8.24811 16.3919 7.78331 16.6623C7.54046 16.8036 7.24832 16.8955 6.75056 16.9459Z',
  d5: 'M13.5137 9.85081C13.9836 10.141 14.5998 9.99536 14.89 9.52547C15.7708 8.09928 16.1492 7.60808 16.614 7.33765C16.9976 7.11449 17.4843 7.01116 18.0982 6.98106C18.5018 6.96128 18.8602 6.97226 19.2463 6.98408H19.2463H19.2464C19.5003 6.99186 19.7662 7 20.0649 7L20.1145 7.00002C20.3522 7.00021 20.6347 7.00042 20.8636 6.96524C21.0963 6.92947 21.6823 6.79616 21.9205 6.17086C22.1442 5.5838 21.8456 5.10207 21.7198 4.92028C21.5876 4.72932 21.3948 4.51987 21.2239 4.33435L21.1911 4.29873L20.2936 3.323C19.9197 2.91652 19.2871 2.89012 18.8806 3.26402C18.6663 3.46113 18.5577 3.73013 18.5576 4V4.41413C18.5576 4.65269 18.5576 4.77197 18.496 4.85261C18.4824 4.87044 18.4683 4.88521 18.4512 4.89968C18.3736 4.96516 18.2492 4.97126 18.0003 4.98346C17.2462 5.02042 16.3907 5.15374 15.6083 5.60895C14.6313 6.17736 14.0058 7.15106 13.1884 8.47453C12.8982 8.94442 13.0438 9.5606 13.5137 9.85081Z',
  d6: 'M6.75056 7.05407C6.22882 7.00118 5.56462 7 4.58082 7H3C2.44772 7 2 6.55229 2 6C2 5.44772 2.44772 5 3 5H4.58082H4.63006H4.63009C5.55217 4.99998 6.31793 4.99996 6.95226 5.06426C7.62184 5.13213 8.21843 5.27694 8.78908 5.60895C9.35568 5.9386 9.7877 6.3895 10.2008 6.94378C10.5971 7.4754 11.018 8.16179 11.5324 9.00064L11.5324 9.00068L14.546 13.9148C15.0901 14.8021 15.4644 15.4106 15.8001 15.861C16.125 16.297 16.3671 16.5187 16.614 16.6623C16.9976 16.8855 17.4843 16.9888 18.0982 17.0189C18.5018 17.0387 18.8602 17.0277 19.2463 17.0159H19.2463H19.2464C19.5003 17.0081 19.7662 17 20.0649 17L20.1145 17C20.3522 16.9998 20.6347 16.9996 20.8636 17.0348C21.0963 17.0705 21.6823 17.2038 21.9205 17.8291C22.1442 18.4162 21.8456 18.8979 21.7198 19.0797C21.5876 19.2707 21.3948 19.4801 21.2239 19.6656L21.2239 19.6656L21.1911 19.7013L20.2936 20.677C19.9197 21.0835 19.2871 21.1099 18.8806 20.736C18.6663 20.5389 18.5577 20.2699 18.5576 20V19.5859C18.5576 19.3473 18.5576 19.228 18.496 19.1474C18.4824 19.1296 18.4683 19.1148 18.4512 19.1003C18.3736 19.0348 18.2492 19.0287 18.0003 19.0165C17.2462 18.9796 16.3907 18.8463 15.6083 18.3911C15.0417 18.0614 14.6096 17.6105 14.1965 17.0562C13.8003 16.5246 13.3793 15.8382 12.8649 14.9993L12.8649 14.9993L9.85135 10.0852C9.30724 9.1979 8.93298 8.58942 8.59725 8.139C8.2723 7.70302 8.03022 7.48131 7.78331 7.33766C7.54046 7.19637 7.24832 7.10452 6.75056 7.05407Z',
  d7: 'M18.5576 21L21 18H16L8 6.00009L3 6',
  d8: 'M18.5576 3L21 6H16L14 8.99998M3 18L8 17.9999L10 14.9999',
  d9: 'M2.00004 5L8.00004 5.00009C8.33438 5.0001 8.6466 5.1672 8.83207 5.44539L16.5352 17H21C21.386 17 21.7375 17.2221 21.9032 17.5707C22.0689 17.9192 22.0192 18.3321 21.7755 18.6314L19.5 21.5L17.949 20.2373L18.8964 19H16C15.6657 19 15.3534 18.8329 15.168 18.5547L7.46483 7.00008L2 7L2.00004 5Z',
  d10: 'M2.00004 19L8.00004 18.9999C8.33438 18.9999 8.6466 18.8328 8.83207 18.5546L10.8321 15.5546L9.16797 14.4452L7.46483 16.9999L2 17L2.00004 19ZM15.168 5.4453L13.168 8.44527L14.8321 9.55468L16.5352 7H21C21.386 7 21.7375 6.7779 21.9032 6.42933C22.0689 6.08076 22.0192 5.66795 21.7755 5.36864L19.5 2.5L17.949 3.76271L18.8964 5H16C15.6657 5 15.3534 5.1671 15.168 5.4453Z',
} as const;

export const IconShuffleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shuffle-stroke-rounded IconShuffleStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconShuffleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shuffle-duotone-rounded IconShuffleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconShuffleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shuffle-twotone-rounded IconShuffleTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconShuffleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shuffle-solid-rounded IconShuffleSolidRounded"
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

export const IconShuffleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shuffle-bulk-rounded IconShuffleBulkRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShuffleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shuffle-stroke-sharp IconShuffleStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShuffleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shuffle-solid-sharp IconShuffleSolidSharp"
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

export const iconPackOfShuffle: TheIconSelfPack = {
  name: 'Shuffle',
  StrokeRounded: IconShuffleStrokeRounded,
  DuotoneRounded: IconShuffleDuotoneRounded,
  TwotoneRounded: IconShuffleTwotoneRounded,
  SolidRounded: IconShuffleSolidRounded,
  BulkRounded: IconShuffleBulkRounded,
  StrokeSharp: IconShuffleStrokeSharp,
  SolidSharp: IconShuffleSolidSharp,
};