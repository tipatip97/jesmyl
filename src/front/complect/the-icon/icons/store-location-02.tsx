import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.97656 10.5146V15.009C2.97656 17.8339 2.97656 19.2463 3.85621 20.1239C4.73585 21.0015 6.15162 21.0015 8.98315 21.0015H12.9875',
  d2: 'M6.98145 17.0066H10.9858',
  d3: 'M18.4941 13.5107C20.4292 13.5107 21.9979 15.0464 21.9979 16.9408C21.9979 19.0836 19.8799 20.1371 18.8695 21.7433C18.6542 22.0857 18.3495 22.0857 18.1187 21.7433C17.0767 20.1981 14.9902 19.0389 14.9902 16.9408C14.9902 15.0464 16.559 13.5107 18.4941 13.5107Z',
  d4: 'M18.4941 17.0066H18.5031',
  d5: 'M17.7957 2.00254L6.14983 2.03002C4.41166 1.94542 3.966 3.2116 3.966 3.83056C3.966 4.38414 3.89055 5.19117 2.82524 6.70798C1.75993 8.22478 1.83998 8.67537 2.44071 9.72544C2.93928 10.5969 4.20741 10.9374 4.86862 10.9946C6.96883 11.0398 7.99065 9.32381 7.99065 8.1178C9.03251 11.1481 11.9955 11.1481 13.3158 10.8016C14.6385 10.4545 15.7717 9.2118 16.0391 8.1178C16.195 9.47735 16.6682 10.2707 18.0663 10.8158C19.5145 11.3805 20.7599 10.5174 21.3848 9.9642C22.0096 9.41096 22.4107 8.18278 21.2967 6.83288C20.5285 5.90195 20.2084 5.02494 20.1032 4.11599C20.0423 3.58931 19.9888 3.02336 19.5971 2.66323C19.0247 2.13691 18.2035 1.97722 17.7957 2.00254Z',
  d6: 'M5.13918 11C6.0609 11 6.88623 10.6119 7.44053 10H9.37442C10.1153 10.6209 11.1042 11 12.1904 11C13.2766 11 14.2655 10.6209 15.0064 10H16.9403C17.4946 10.6119 18.3199 11 19.2417 11C19.9842 11 20.6643 10.7481 21.1904 10.3302V14.5308C20.5551 13.8947 19.6697 13.5 18.6904 13.5C16.7574 13.5 15.1904 15.0376 15.1904 16.9343C15.1904 18.36 16.1504 19.3527 17.0927 20.3272C17.2966 20.5381 17.4998 20.7481 17.6922 20.9615C17.0082 21 16.1871 21 15.1904 21H9.19043C6.362 21 4.94779 21 4.06911 20.1213C3.19043 19.2426 3.19043 17.8284 3.19043 15V10.3302C3.71656 10.7481 4.39659 11 5.13918 11Z',
  d7: 'M17.9861 2.00254L6.34026 2.03002C4.6021 1.94542 4.15643 3.2116 4.15643 3.83056C4.15643 4.38414 4.08098 5.19117 3.01567 6.70798C1.95036 8.22478 2.03041 8.67537 2.63114 9.72544C3.12971 10.5969 4.39784 10.9374 5.05905 10.9946C7.15926 11.0398 8.18109 9.32381 8.18109 8.1178C9.22295 11.1481 12.186 11.1481 13.5062 10.8016C14.829 10.4545 15.9621 9.2118 16.2295 8.1178C16.3854 9.47735 16.8586 10.2707 18.2567 10.8158C19.7049 11.3805 20.9503 10.5174 21.5752 9.9642C22.2001 9.41096 22.6011 8.18278 21.4872 6.83288C20.719 5.90195 20.3988 5.02494 20.2937 4.11599C20.2327 3.58931 20.1792 3.02336 19.7875 2.66323C19.2152 2.13691 18.394 1.97722 17.9861 2.00254Z',
  d8: 'M3.19043 10.5V15C3.19043 17.8284 3.19043 19.2426 4.06911 20.1213C4.94779 21 6.362 21 9.19043 21H13.1904',
  d9: 'M7.19043 17H11.1904',
  d10: 'M18.6904 13.5C20.6234 13.5 22.1904 15.0376 22.1904 16.9343C22.1904 19.0798 20.0747 20.1346 19.0654 21.7429C18.8503 22.0857 18.546 22.0857 18.3154 21.7429C17.2746 20.1957 15.1904 19.0351 15.1904 16.9343C15.1904 15.0376 16.7574 13.5 18.6904 13.5Z',
  d11: 'M18.6904 17H18.6994',
  d12: 'M3.04785 10.4916V14.9954C3.04785 17.8262 3.04785 19.2415 3.92424 20.121C4.80064 21.0004 6.21117 21.0004 9.03223 21.0004H13.0218',
  d13: 'M7.03809 16.9974H11.0277',
  d14: 'M18.5075 13.4945C20.4355 13.4945 21.9984 15.0334 21.9984 16.9317C21.9984 19.079 19.8882 20.1347 18.8815 21.7444C18.667 22.0874 18.3635 22.0874 18.1335 21.7444C17.0954 20.1959 15.0166 19.0343 15.0166 16.9317C15.0166 15.0334 16.5795 13.4945 18.5075 13.4945Z',
  d15: 'M18.5078 16.9974H18.5168',
  d16: 'M17.8044 2.00103L6.18887 2.02929C4.45523 1.94228 4.01072 3.24463 4.01072 3.88128C4.01072 4.45067 3.93547 5.28076 2.87293 6.8409C1.81039 8.40104 1.80241 8.65336 2.40157 9.73343C2.89884 10.6298 4.16367 10.98 4.82316 11.0389C6.9179 11.0853 7.93707 9.32032 7.93707 8.07985C8.97622 11.1968 11.9315 11.1968 13.2483 10.8403C14.5676 10.4833 15.6979 9.20511 15.9645 8.07985C16.1201 9.47825 16.592 10.2943 17.9865 10.855C19.4309 11.4358 20.6731 10.548 21.2963 9.979C21.9196 9.40996 22.4074 8.35784 21.2964 6.96938C20.5302 6.01185 20.2108 5.10978 20.106 4.17486C20.0452 3.63313 19.9918 3.05102 19.6012 2.68059C19.0303 2.13924 18.2112 1.97498 17.8044 2.00103Z',
  d17: 'M3 9.25C3.55229 9.25 4 9.69772 4 10.25V14.75C4 16.1925 4.00213 17.1737 4.10092 17.9086C4.19585 18.6146 4.36322 18.9416 4.58579 19.1642C4.80836 19.3868 5.13538 19.5542 5.84144 19.6491C6.57626 19.7479 7.55752 19.75 9 19.75H12C12.5523 19.75 13 20.1977 13 20.75C13 21.3023 12.5523 21.75 12 21.75H8.92943C7.57531 21.75 6.4587 21.7501 5.57494 21.6312C4.64711 21.5065 3.82769 21.2345 3.17158 20.5784C2.51547 19.9223 2.2435 19.1029 2.11876 18.1751C1.99994 17.2913 1.99997 16.1747 2 14.8206L2 10.25C2 9.69772 2.44772 9.25 3 9.25Z',
  d18: 'M3.19143 3.95934C3.19143 2.45786 4.41603 1.25 5.91512 1.25H18.0849C19.584 1.25 20.8086 2.45786 20.8086 3.95934C20.8086 4.50972 20.9532 5.05089 21.2287 5.52939L22.2149 7.24274C22.4737 7.69195 22.6839 8.05669 22.7347 8.66669C22.7553 8.91456 22.7576 9.12312 22.726 9.32441C22.6958 9.51721 22.6381 9.67169 22.5956 9.78539L22.5894 9.80225C22.0565 11.2329 20.6723 12.25 19.0513 12.25C17.695 12.25 16.5023 11.537 15.8374 10.4644C14.9338 11.5575 13.5446 12.25 12 12.25C10.4554 12.25 9.06617 11.5575 8.16259 10.4644C7.49773 11.537 6.30506 12.25 4.94875 12.25C3.32768 12.25 1.94355 11.2329 1.41065 9.80225L1.40436 9.78538C1.3619 9.67169 1.30421 9.51721 1.27397 9.32441C1.2424 9.12312 1.24469 8.91457 1.26533 8.66669C1.31613 8.05668 1.52628 7.69195 1.78509 7.24274L2.77133 5.52939C3.04677 5.05089 3.19143 4.50972 3.19143 3.95934Z',
  d19: 'M6 17C6 16.4477 6.44772 16 7 16H11C11.5523 16 12 16.4477 12 17C12 17.5523 11.5523 18 11 18H7C6.44772 18 6 17.5523 6 17Z',
  d20: 'M18.5 12.75C16.1663 12.75 14.25 14.61 14.25 16.9343C14.25 18.2585 14.9163 19.2477 15.6071 20.0393C15.8533 20.3214 16.1238 20.6012 16.3766 20.8626L16.3766 20.8626L16.3767 20.8626L16.3767 20.8627L16.3769 20.8629C16.4727 20.9619 16.5659 21.0583 16.6543 21.1512C16.9905 21.5046 17.2795 21.8297 17.5027 22.1615C17.6895 22.4392 18.0234 22.75 18.5058 22.75C18.9964 22.75 19.3293 22.43 19.5103 22.1416C19.7223 21.8037 20.0026 21.4793 20.3331 21.131C20.4411 21.0172 20.56 20.8954 20.6833 20.7691L20.6833 20.7691L20.6834 20.769C20.9131 20.5338 21.1579 20.283 21.3752 20.0398C22.0714 19.2609 22.75 18.2853 22.75 16.9343C22.75 14.61 20.8337 12.75 18.5 12.75ZM18.4933 18.5C17.6686 18.5 17 17.8284 17 17C17 16.1716 17.6686 15.5 18.4933 15.5H18.5067C19.3314 15.5 20 16.1716 20 17C20 17.8284 19.3314 18.5 18.5067 18.5H18.4933Z',
  d21: 'M2 10.8398L2 14.8219C1.99997 16.176 1.99994 17.2927 2.11876 18.1764C2.2435 19.1042 2.51547 19.9237 3.17158 20.5798C3.82769 21.2359 4.64711 21.5078 5.57494 21.6326C6.4587 21.7514 7.57531 21.7514 8.92943 21.7513H12C12.5523 21.7513 13 21.3036 13 20.7513C13 20.1991 12.5523 19.7513 12 19.7513H9C7.55752 19.7513 6.57626 19.7492 5.84144 19.6504C5.13538 19.5555 4.80836 19.3881 4.58579 19.1656C4.36322 18.943 4.19585 18.616 4.10092 17.9099C4.00213 17.1751 4 16.1938 4 14.7513V12.1317C3.19937 11.9254 2.50158 11.4642 2 10.8398Z',
  d22: 'M3 10.5L3 21H13',
  d23: 'M5 11C6.65685 11 8 9.65685 8 8C8 10 10.1362 11 12 11C13.8638 11 16 10 16 8C16 9.65685 17.3431 11 19 11C20.6569 11 22 9.65685 22 8L20 4.5V2H4V4.5L2 8C2 9.65685 3.34315 11 5 11Z',
  d24: 'M6 17H11',
  d25: 'M18.5 13.5C20.433 13.5 22 15.0376 22 16.9343C22 19.0798 20 20.5 18.5 21.9999C17 20.5 15 19.0351 15 16.9343C15 15.0376 16.567 13.5 18.5 13.5Z',
  d26: 'M18.5 17L18.509 17',
  d27: 'M2.25 20.7751V9.5376H4.2V19.8001H12V21.7501H3.225C2.68652 21.7501 2.25 21.3136 2.25 20.7751Z',
  d28: 'M17.5 12.4395C15.1663 12.4395 13.25 14.2995 13.25 16.6237C13.25 17.9292 13.8759 18.9888 14.6138 19.865C15.0981 20.44 15.6978 21.0063 16.2471 21.5252C16.5047 21.7685 16.7513 22.0013 16.9697 22.2197L17.5 22.75L18.0303 22.2197C18.2547 21.9953 18.5113 21.7548 18.7798 21.503C19.3211 20.9953 19.911 20.4421 20.3845 19.8837C21.1261 19.0092 21.75 17.9497 21.75 16.6237C21.75 14.2995 19.8337 12.4395 17.5 12.4395ZM17.4933 18.1895C16.6686 18.1895 16 17.5179 16 16.6895C16 15.861 16.6686 15.1895 17.4933 15.1895H17.5067C18.3314 15.1895 19 15.861 19 16.6895C19 17.5179 18.3314 18.1895 17.5067 18.1895H17.4933Z',
  d29: 'M22.75 7.80083V8C22.75 10.0711 21.0711 11.75 19 11.75C17.7352 11.75 16.6167 11.1238 15.9374 10.1646C15.6962 10.4412 15.4139 10.6792 15.1085 10.8783C14.1989 11.4713 13.0504 11.75 12 11.75C10.9496 11.75 9.80112 11.4713 8.89149 10.8783C8.58614 10.6792 8.30385 10.4412 8.06256 10.1646C7.38334 11.1238 6.26479 11.75 5 11.75C2.92893 11.75 1.25 10.0711 1.25 8V7.80083L3.25 4.30083V1.25H20.75V4.30083L22.75 7.80083Z',
  d30: 'M11 18H6V16H11V18Z',
} as const;

export const IconStoreLocation02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-location-02-stroke-rounded IconStoreLocation02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconStoreLocation02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-location-02-duotone-rounded IconStoreLocation02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStoreLocation02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-location-02-twotone-rounded IconStoreLocation02TwotoneRounded"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStoreLocation02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-location-02-solid-rounded IconStoreLocation02SolidRounded"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStoreLocation02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-location-02-bulk-rounded IconStoreLocation02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStoreLocation02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-location-02-stroke-sharp IconStoreLocation02StrokeSharp"
    >
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStoreLocation02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="store-location-02-solid-sharp IconStoreLocation02SolidSharp"
    >
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStoreLocation02: TheIconSelfPack = {
  name: 'StoreLocation02',
  StrokeRounded: IconStoreLocation02StrokeRounded,
  DuotoneRounded: IconStoreLocation02DuotoneRounded,
  TwotoneRounded: IconStoreLocation02TwotoneRounded,
  SolidRounded: IconStoreLocation02SolidRounded,
  BulkRounded: IconStoreLocation02BulkRounded,
  StrokeSharp: IconStoreLocation02StrokeSharp,
  SolidSharp: IconStoreLocation02SolidSharp,
};