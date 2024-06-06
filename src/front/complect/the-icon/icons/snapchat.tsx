import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.57556 7.42444C6.57556 4.42861 9.00416 2 12 2C14.9958 2 17.4244 4.42861 17.4244 7.42444C17.4244 12.1722 17.6611 14.5456 22 16.4444C19.7778 17 19.2222 17.5556 18.6667 19.7778C14.7778 19.7778 14.2222 22 12 22C9.77778 22 9.22222 19.7778 5.33333 19.7778C4.77778 17.5556 4.22222 17 2 16.4444C6.33889 14.5456 6.57556 12.1722 6.57556 7.42444Z',
  d2: 'M2 16C5.82356 13.9171 5.82356 11.9503 2.95589 9',
  d3: 'M22 16C18.1764 13.9171 18.1764 11.9503 21.0441 9',
  d4: 'M5.83163 7.42444C5.83163 4.01439 8.5933 1.25 12 1.25C15.4067 1.25 18.1684 4.01439 18.1684 7.42444C18.1684 9.13807 18.2036 10.4544 18.4163 11.5256C18.7423 10.5083 19.5056 9.49916 20.4979 8.47725C20.7864 8.18023 21.2607 8.17349 21.5574 8.46219C21.8542 8.7509 21.8609 9.22573 21.5725 9.52275C20.1462 10.9916 19.6711 11.9956 19.751 12.7458C19.8276 13.4655 20.4647 14.3141 22.3486 15.3414C22.7662 15.5691 22.7717 16.0913 22.7368 16.5072C22.71 16.827 22.4829 17.0942 22.1719 17.1721C21.0763 17.4462 20.5606 17.6861 20.2306 18.0164C19.9005 18.3468 19.6609 18.863 19.387 19.9597C19.3036 20.2936 19.0039 20.5278 18.6601 20.5278C16.8964 20.5278 15.9218 21.0204 15.0984 21.5276C14.9893 21.5948 14.8785 21.6659 14.765 21.7388L14.765 21.7389C14.0334 22.2087 13.1904 22.75 12 22.75C10.8096 22.75 9.9666 22.2087 9.23502 21.7389C9.12151 21.666 9.01068 21.5948 8.90165 21.5276C8.07816 21.0204 7.10358 20.5278 5.3399 20.5278C4.99608 20.5278 4.69639 20.2936 4.61301 19.9597C4.3391 18.863 4.09951 18.3468 3.76945 18.0164C3.43939 17.6861 2.92374 17.4462 1.82812 17.1721C1.51712 17.0942 1.29004 16.827 1.26321 16.5072C1.22832 16.0913 1.23381 15.5691 1.65141 15.3414C3.53529 14.3141 4.17237 13.4655 4.24902 12.7458C4.32891 11.9956 3.85381 10.9916 2.42752 9.52275C2.13909 9.22573 2.14583 8.7509 2.44256 8.46219C2.73929 8.17349 3.21365 8.18023 3.50207 8.47725C4.49438 9.49916 5.25772 10.5083 5.58367 11.5256C5.79643 10.4544 5.83163 9.13807 5.83163 7.42444Z',
  d5: 'M5.8257 7.42444C5.8257 4.01439 8.59009 1.25 12.0001 1.25C15.4102 1.25 18.1746 4.01439 18.1746 7.42444C18.1746 9.13807 18.2098 10.4544 18.4228 11.5256C18.7491 10.5083 19.5132 9.49916 20.5064 8.47725C20.7952 8.18023 21.27 8.17349 21.567 8.46219C21.864 8.7509 21.8708 9.22573 21.5821 9.52275C20.1544 10.9916 19.6788 11.9956 19.7588 12.7458C19.8355 13.4655 20.4732 14.3141 22.3589 15.3414C22.6784 15.5154 22.8208 15.8879 22.7166 16.2224C22.7446 16.3126 22.7558 16.4091 22.7475 16.5072C22.7207 16.827 22.4934 17.0942 22.182 17.1721C21.0853 17.4462 20.5692 17.6861 20.2388 18.0164C19.9084 18.3468 19.6686 18.863 19.3944 19.9597C19.3109 20.2936 19.011 20.5278 18.6668 20.5278C16.9014 20.5278 15.9258 21.0204 15.1015 21.5276C14.9925 21.5948 14.8816 21.6659 14.768 21.7388L14.7679 21.7389C14.0355 22.2087 13.1918 22.75 12.0001 22.75C10.8085 22.75 9.96474 22.2087 9.23244 21.7389C9.11882 21.666 9.00788 21.5948 8.89874 21.5276C8.07444 21.0204 7.0989 20.5278 5.33348 20.5278C4.98932 20.5278 4.68934 20.2936 4.60587 19.9597C4.33169 18.863 4.09186 18.3468 3.76148 18.0164C3.43109 17.6861 2.91494 17.4462 1.81824 17.1721C1.50693 17.0942 1.27962 16.827 1.25277 16.5072C1.24453 16.4091 1.25574 16.3126 1.28373 16.2224C1.17949 15.8879 1.32192 15.5154 1.64136 15.3414C3.52709 14.3141 4.1648 13.4655 4.24152 12.7458C4.3215 11.9956 3.84593 10.9916 2.41823 9.52275C2.12952 9.22573 2.13626 8.7509 2.43328 8.46219C2.7303 8.17349 3.20513 8.18023 3.49384 8.47725C4.48713 9.49916 5.25122 10.5083 5.57749 11.5256C5.79046 10.4544 5.8257 9.13807 5.8257 7.42444Z',
  d6: 'M5.82638 7.42444C5.82638 4.01439 8.59078 1.25 12.0008 1.25C15.4109 1.25 18.1756 4.01439 18.1756 7.42444C18.001 11.5256 18.6678 13.6711 22.3599 15.3414C22.7779 15.5691 22.7834 16.0913 22.7485 16.5072C22.7216 16.827 22.4943 17.0942 22.183 17.1721C21.0863 17.4462 20.5702 17.6861 20.2398 18.0164C19.9094 18.3468 19.6696 18.863 19.3954 19.9597C19.3119 20.2936 19.0119 20.5278 18.6678 20.5278C16.9024 20.5278 15.9268 21.0204 15.1025 21.5276C14.9934 21.5948 14.8825 21.666 14.7688 21.7389C14.0365 22.2087 13.1924 22.75 12.0008 22.75C10.8092 22.75 9.96543 22.2087 9.23313 21.7389C9.1195 21.666 9.00856 21.5948 8.89942 21.5276C8.07512 21.0204 7.09958 20.5278 5.33416 20.5278C4.99001 20.5278 4.69002 20.2936 4.60655 19.9597C4.33238 18.863 4.09255 18.3468 3.76216 18.0164C3.43178 17.6861 2.91562 17.4462 1.81893 17.1721C1.50762 17.0942 1.28031 16.827 1.25346 16.5072C1.21854 16.0913 1.22402 15.5691 1.64204 15.3414C5.33416 13.6711 6.00098 11.5256 5.82638 7.42444Z',
  d7: 'M2.03415 16.4871C5.84621 14.2637 5.84621 11.6304 2.98717 8.48096',
  d8: 'M21.9744 16.4871C18.1623 14.2637 18.1623 11.6304 21.0214 8.48096',
  d9: 'M6.66207 6.41185C6.4593 11.6529 6.97096 14.137 2.01876 16.4325C1.99604 16.442 1.99532 16.4872 2.01864 16.4872C4.91277 16.8322 5.23842 19.1493 5.36728 19.7708C8.04167 19.6479 10.7812 21.0939 12.0313 21.9995C13.5392 20.6541 16.9029 19.645 18.6556 19.7227C18.9729 18.0793 19.8051 16.7202 21.9547 16.4833C21.9858 16.4833 22.0133 16.4089 21.9897 16.4129C18.0361 15.0908 17.4813 12.017 17.4603 9.1489C17.4512 7.90218 17.4967 6.62299 17.0234 5.4703C16.2185 3.50993 14.5004 1.92833 12.0114 2.00303C8.17101 2.11829 6.88173 5.08887 6.66207 6.41185Z',
  d10: 'M5.82554 7.42444C5.82554 4.01439 8.58993 1.25 12 1.25C15.41 1.25 18.1744 4.01439 18.1744 7.42444C18.1744 9.08476 18.2075 10.3722 18.4033 11.4249C18.7096 10.274 19.4578 9.12746 20.4898 7.99487L21.5986 9.00519C20.2077 10.5315 19.6693 11.7714 19.7599 12.7798C19.841 13.6816 20.4525 14.6396 21.9934 15.6187C22.093 15.6651 22.1954 15.7113 22.3007 15.7574C22.5947 15.886 22.7742 16.1874 22.7474 16.5072C22.7205 16.827 22.4932 17.0942 22.1819 17.1721C21.0852 17.4462 20.569 17.6861 20.2386 18.0164C19.9083 18.3468 19.6684 18.863 19.3943 19.9597L19.2522 20.5278H18.6667C16.8636 20.5278 15.3075 21.0437 14.1943 21.5675C13.6395 21.8286 13.2004 22.089 12.9029 22.282C12.7544 22.3784 12.5421 22.5321 12.4685 22.5857C12.1949 22.8043 11.8056 22.8044 11.5318 22.5859C11.4582 22.5324 11.2456 22.3784 11.097 22.282C10.7996 22.089 10.3605 21.8286 9.80564 21.5675C8.69252 21.0437 7.13636 20.5278 5.33332 20.5278H4.74774L4.60571 19.9597C4.33154 18.863 4.09171 18.3468 3.76132 18.0164C3.43094 17.6861 2.91478 17.4462 1.81808 17.1721C1.50677 17.0942 1.27947 16.827 1.25262 16.5072C1.22576 16.1874 1.40532 15.886 1.69929 15.7574C1.80447 15.7113 1.90679 15.6652 2.00633 15.6188C3.54734 14.6396 4.15891 13.6816 4.23999 12.7798C4.33066 11.7714 3.79224 10.5315 2.40135 9.00519L3.51007 7.99487C4.54218 9.12751 5.29033 10.2741 5.59667 11.425C5.79246 10.3723 5.82554 9.08483 5.82554 7.42444Z',
};

export const IconSnapchatStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="snapchat-stroke-rounded IconSnapchatStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSnapchatDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="snapchat-duotone-rounded IconSnapchatDuotoneRounded"
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

export const IconSnapchatTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="snapchat-twotone-rounded IconSnapchatTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSnapchatSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="snapchat-solid-rounded IconSnapchatSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSnapchatBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="snapchat-bulk-rounded IconSnapchatBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSnapchatStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="snapchat-stroke-sharp IconSnapchatStrokeSharp"
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
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSnapchatSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="snapchat-solid-sharp IconSnapchatSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSnapchat: TheIconSelfPack = {
  name: 'Snapchat',
  StrokeRounded: IconSnapchatStrokeRounded,
  DuotoneRounded: IconSnapchatDuotoneRounded,
  TwotoneRounded: IconSnapchatTwotoneRounded,
  SolidRounded: IconSnapchatSolidRounded,
  BulkRounded: IconSnapchatBulkRounded,
  StrokeSharp: IconSnapchatStrokeSharp,
  SolidSharp: IconSnapchatSolidSharp,
};