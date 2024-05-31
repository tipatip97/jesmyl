import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.1568 2.45596C7.44599 3.52155 5.26606 5.13458 3.84323 6.46166C3.21936 7.04354 2.90742 7.33448 3.02414 7.66724C3.14086 8 3.575 8 4.44328 8H19.5567C20.425 8 20.8591 8 20.9759 7.66724C21.0926 7.33448 20.7806 7.04354 20.1568 6.46166C18.7339 5.13458 16.554 3.52155 13.8432 2.45596C13.0699 2.15199 12.6833 2 12 2C11.3167 2 10.9301 2.15199 10.1568 2.45596Z',
  d2: 'M4.49705 22C3.8036 21.3068 3.45902 20.5479 3.37922 19.5907C3.25304 18.077 3 15 3 15C3 15 3.25304 11.923 3.37922 10.4093C3.45902 9.45208 3.8036 8.69321 4.49705 8M19.5029 22C20.1964 21.3068 20.541 20.5479 20.6208 19.5907C20.747 18.077 21 15 21 15C21 15 20.747 11.923 20.6208 10.4093C20.541 9.45208 20.1964 8.69321 19.5029 8',
  d3: 'M3 22H21',
  d4: 'M3 15H9',
  d5: 'M15 15H21',
  d6: 'M9 22V14C9 12.3453 9.34533 12 11 12H13C14.6547 12 15 12.3453 15 14V22',
  d7: 'M12.009 15H12',
  d8: 'M3 15C3 15 3.25304 18.077 3.37922 19.5907C3.45902 20.5479 3.8036 21.3068 4.49705 22H9V14C9 12.3453 9.34533 12 11 12H13C14.6547 12 15 12.3453 15 14V22H19.5029C20.1964 21.3068 20.541 20.5479 20.6208 19.5907C20.747 18.077 21 15 21 15C21 15 20.747 11.923 20.6208 10.4093C20.541 9.45208 20.1964 8.69321 19.5029 8H4.49705C3.8036 8.69321 3.45902 9.45208 3.37922 10.4093C3.25304 11.923 3 15 3 15Z',
  d9: 'M4.49705 22C3.8036 21.3068 3.45902 20.5479 3.37922 19.5907C3.27038 18.285 3.06714 15.816 3.01334 15.1622C3.0067 15.0815 3.00338 15.0411 3.00338 15C3.00338 14.9589 3.0067 14.9185 3.01334 14.8378C3.06714 14.184 3.27038 11.715 3.37922 10.4093C3.45902 9.45208 3.8036 8.69321 4.49705 8M19.5029 22C20.1964 21.3068 20.541 20.5479 20.6208 19.5907C20.7296 18.285 20.9329 15.816 20.9867 15.1622C20.9933 15.0815 20.9966 15.0411 20.9966 15C20.9966 14.9589 20.9933 14.9185 20.9867 14.8378C20.9329 14.184 20.7296 11.715 20.6208 10.4093C20.541 9.45208 20.1964 8.69321 19.5029 8',
  d10: 'M9.92394 1.74199C10.6718 1.4479 11.1751 1.25 12.0009 1.25C12.8268 1.25 13.3301 1.4479 14.0779 1.74199C16.896 2.84975 19.2349 4.57534 20.7095 5.95067C20.9861 6.20856 21.2618 6.46552 21.4433 6.70566C21.6532 6.98337 21.8631 7.40639 21.6845 7.91548C21.6016 8.15179 21.4501 8.34715 21.2419 8.48498C21.0524 8.61049 20.8486 8.66662 20.6816 8.6966C20.3827 8.75028 19.9986 8.75015 19.6147 8.75001H4.38715C4.00327 8.75015 3.61922 8.75028 3.32027 8.6966C3.15331 8.66662 2.9495 8.61049 2.75993 8.48498C2.55173 8.34715 2.40024 8.15179 2.31735 7.91548C2.13878 7.40639 2.34868 6.98336 2.55856 6.70566C2.74005 6.46552 3.01573 6.20856 3.29241 5.95067C4.76698 4.57535 7.10585 2.84975 9.92394 1.74199Z',
  d11: 'M2.25 22C2.25 21.5858 2.58579 21.25 3 21.25H21C21.4142 21.25 21.75 21.5858 21.75 22C21.75 22.4142 21.4142 22.75 21 22.75H3C2.58579 22.75 2.25 22.4142 2.25 22Z',
  d12: 'M21.5702 12.8385L21.57 12.8365L21.5699 12.835C21.504 12.0655 21.4316 11.2185 21.3751 10.55C21.353 10.2889 21.342 10.1583 21.2559 10.0792C21.1698 10.0001 21.0388 10.0001 20.7768 10.0001L3.22486 10C2.96286 10 2.83186 10 2.74578 10.0791C2.65969 10.1582 2.64866 10.2888 2.62659 10.5499C2.57002 11.2192 2.49746 12.0674 2.43157 12.8376C2.37415 13.5088 2.29655 14.1791 2.2747 14.8519C2.26872 15.0361 2.26573 15.1282 2.32467 15.1891C2.38362 15.25 2.47809 15.25 2.66704 15.25H7.85107C8.03831 15.25 8.13193 15.25 8.19035 15.1923C8.24878 15.1346 8.24996 15.0397 8.25233 14.85C8.25662 14.5071 8.2746 14.1642 8.34835 13.8285C8.42606 13.4748 8.57073 13.1287 8.85024 12.8492C9.12975 12.5697 9.47587 12.425 9.82959 12.3473C10.1748 12.2714 10.5712 12.25 11.0011 12.25H13.0011C13.431 12.25 13.8273 12.2714 14.1726 12.3473C14.5263 12.425 14.8724 12.5697 15.1519 12.8492C15.4314 13.1287 15.5761 13.4748 15.6538 13.8285C15.7275 14.1642 15.7455 14.5071 15.7498 14.85C15.7522 15.0397 15.7534 15.1346 15.8118 15.1923C15.8702 15.25 15.9638 15.25 16.1511 15.25H21.3346C21.5236 15.25 21.618 15.25 21.677 15.1891C21.7359 15.1282 21.7329 15.0361 21.727 14.8519C21.7051 14.1794 21.6276 13.5094 21.5702 12.8385Z',
  d13: 'M8.25107 22V17.15C8.25107 16.9614 8.25107 16.8672 8.19249 16.8086C8.13391 16.75 8.03963 16.75 7.85107 16.75H2.82675C2.6235 16.75 2.52187 16.75 2.46246 16.8145C2.40304 16.879 2.4114 16.9803 2.42811 17.1828C2.4995 18.0481 2.57797 18.9972 2.63264 19.653C2.72701 20.785 3.14727 21.7103 3.96764 22.5304C4.10829 22.671 4.29901 22.75 4.49788 22.75H19.5038C19.7026 22.75 19.8934 22.671 20.034 22.5304C20.8544 21.7103 21.2746 20.785 21.369 19.653C21.4237 18.9972 21.5022 18.0481 21.5735 17.1828C21.5903 16.9803 21.5986 16.879 21.5392 16.8145C21.4798 16.75 21.3782 16.75 21.1749 16.75H16.1511C15.9625 16.75 15.8682 16.75 15.8096 16.8086C15.7511 16.8672 15.7511 16.9614 15.7511 17.15V22C15.7511 22.4142 15.4153 22.75 15.0011 22.75C14.5869 22.75 14.2511 22.4142 14.2511 22V15C14.2511 14.6026 14.2293 14.3353 14.1887 14.1504C14.1406 13.9311 14.07 13.8605 13.8507 13.8123C13.6658 13.7717 13.3985 13.75 13.0011 13.75H11.0011C10.6036 13.75 10.3363 13.7717 10.1514 13.8123C9.93217 13.8605 9.86158 13.9311 9.81342 14.1504C9.7728 14.3353 9.75107 14.6026 9.75107 15V22C9.75107 22.4142 9.41529 22.75 9.00107 22.75C8.58686 22.75 8.25107 22.4142 8.25107 22ZM12.0011 15C11.4488 15 11.0011 15.4477 11.0011 16C11.0011 16.5523 11.4488 17 12.0011 17H12.01C12.5623 17 13.01 16.5523 13.01 16C13.01 15.4477 12.5623 15 12.01 15H12.0011Z',
  d14: 'M9.924 1.74199C10.6719 1.4479 11.1752 1.25 12.001 1.25C12.8268 1.25 13.3301 1.4479 14.078 1.74199C16.8961 2.84975 19.235 4.57534 20.7095 5.95067C20.9862 6.20856 21.2619 6.46552 21.4434 6.70566C21.6533 6.98337 21.8632 7.40639 21.6846 7.91548C21.6017 8.15179 21.4502 8.34715 21.242 8.48498C21.0524 8.61049 20.8486 8.66662 20.6817 8.6966C20.3827 8.75028 19.9987 8.75015 19.6148 8.75001H4.38721C4.00334 8.75015 3.61928 8.75028 3.32033 8.6966C3.15337 8.66662 2.94956 8.61049 2.75999 8.48498C2.5518 8.34715 2.4003 8.15179 2.31741 7.91548C2.13884 7.40639 2.34874 6.98336 2.55862 6.70566C2.74011 6.46552 3.01579 6.20856 3.29247 5.95067C4.76704 4.57535 7.10591 2.84975 9.924 1.74199Z',
  d15: 'M21.5692 12.8385C21.4971 11.9959 21.417 11.0599 21.3587 10.3667C21.344 10.1926 21.3367 10.1056 21.2793 10.0528C21.2219 10.0001 21.1345 10.0001 20.9599 10.0001L3.03989 10C2.86522 10 2.77789 10 2.7205 10.0528C2.6631 10.1055 2.65577 10.1926 2.6411 10.3667C2.58273 11.0596 2.50269 11.9952 2.43062 12.8376C2.35643 13.7048 2.29069 14.4731 2.26575 14.7763V15.2237C2.26697 15.2386 2.27937 15.25 2.29427 15.25H9.00012C9.41434 15.25 9.75012 15.5858 9.75012 16C9.75012 16.4142 9.41434 16.75 9.00012 16.75H2.8258C2.62255 16.75 2.52092 16.75 2.46151 16.8145C2.40209 16.879 2.41045 16.9803 2.42716 17.1828C2.49855 18.0481 2.57702 18.9972 2.63169 19.653C2.72606 20.785 3.14632 21.7103 3.96669 22.5304C4.10734 22.671 4.29806 22.75 4.49693 22.75H19.5028C19.7017 22.75 19.8924 22.671 20.0331 22.5304C20.8534 21.7103 21.2737 20.785 21.3681 19.653C21.4227 18.9972 21.5012 18.0481 21.5726 17.1828C21.5893 16.9803 21.5977 16.879 21.5382 16.8145C21.4788 16.75 21.3772 16.75 21.174 16.75H15.0001C14.5859 16.75 14.2501 16.4142 14.2501 16C14.2501 15.5858 14.5859 15.25 15.0001 15.25H21.7055C21.7204 15.25 21.7328 15.2386 21.734 15.2237V14.7763C21.7091 14.4732 21.6434 13.7053 21.5692 12.8385Z',
  d16: 'M11.0001 16C11.0001 15.4477 11.4478 15 12.0001 15H12.009C12.5613 15 13.009 15.4477 13.009 16C13.009 16.5523 12.5613 17 12.009 17H12.0001C11.4478 17 11.0001 16.5523 11.0001 16Z',
  d17: 'M9.81241 14.1504C9.77179 14.3353 9.75006 14.6026 9.75006 15V22C9.75006 22.4142 9.41427 22.75 9.00006 22.75C8.58585 22.75 8.25006 22.4142 8.25006 22V15C8.25006 14.5701 8.2715 14.1737 8.34734 13.8285C8.42505 13.4748 8.56972 13.1287 8.84923 12.8492C9.12874 12.5697 9.47486 12.425 9.82858 12.3473C10.1738 12.2714 10.5702 12.25 11.0001 12.25H13.0001C13.43 12.25 13.8263 12.2714 14.1715 12.3473C14.5253 12.425 14.8714 12.5697 15.1509 12.8492C15.4304 13.1287 15.5751 13.4748 15.6528 13.8285C15.7286 14.1737 15.7501 14.5701 15.7501 15V22C15.7501 22.4142 15.4143 22.75 15.0001 22.75C14.5858 22.75 14.2501 22.4142 14.2501 22V15C14.2501 14.6026 14.2283 14.3353 14.1877 14.1504C14.1395 13.9311 14.069 13.8605 13.8497 13.8123C13.6648 13.7717 13.3975 13.75 13.0001 13.75H11.0001C10.6026 13.75 10.3353 13.7717 10.1504 13.8123C9.93116 13.8605 9.86057 13.9311 9.81241 14.1504Z',
  d18: 'M2.00006 22C2.00006 21.4477 2.44778 21 3.00006 21L21.0001 21C21.5523 21 22.0001 21.4477 22.0001 22C22.0001 22.5523 21.5523 23 21.0001 23L3.00006 23C2.44778 23 2.00006 22.5523 2.00006 22Z',
  d19: 'M12 2L3.00012 8H21L12 2Z',
  d20: 'M19.5029 22L20.5 19.5L21 15L20.5 10.5L19.5029 8M4.49705 22L3.5 19.5L3 15L3.5 10.5L4.49705 8',
  d21: 'M2 22H22',
  d22: 'M9 22V12H15V22',
  d23: 'M11.584 1.37596C11.8359 1.20801 12.1641 1.20801 12.416 1.37596L21.416 7.37596C21.691 7.55929 21.8136 7.90102 21.7178 8.21734C21.6221 8.53366 21.3305 8.75 21 8.75H3.00012C2.66962 8.75 2.37808 8.53366 2.2823 8.21734C2.18653 7.90102 2.3091 7.55929 2.58409 7.37596L11.584 1.37596Z',
  d24: 'M22 22.75H2V21.25H22V22.75Z',
  d25: 'M2.89445 9.99713L2.76715 10.3163L2.33008 14.25H8.25066V12C8.25066 11.5858 8.58644 11.25 9.00066 11.25H15.0007C15.4149 11.25 15.7507 11.5858 15.7507 12V14.25H21.6727L21.2356 10.3163L21.1083 9.99707C21.0726 9.99898 21.0367 9.99994 21.0007 9.99994H3.00081C2.96518 9.99994 2.92972 9.999 2.89445 9.99713Z',
  d26: 'M2.76715 19.6836L2.33009 15.75H8.25066V22H9.75066V12.75H14.2507V22H15.7507V15.75H21.6726L21.2356 19.6836L20.0126 22.7499H3.99009L2.76715 19.6836ZM12.759 14.25H11.25V15.75H12.759V14.25Z',
} as const;

export const IconYurtStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yurt-stroke-rounded IconYurtStrokeRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYurtDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yurt-duotone-rounded IconYurtDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
        d={d.d9} 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYurtTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yurt-twotone-rounded IconYurtTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYurtSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yurt-solid-rounded IconYurtSolidRounded"
    >
      <path 
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconYurtBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yurt-bulk-rounded IconYurtBulkRounded"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconYurtStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yurt-stroke-sharp IconYurtStrokeSharp"
    >
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d21} 
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
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYurtSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="yurt-solid-sharp IconYurtSolidSharp"
    >
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfYurt: TheIconSelfPack = {
  name: 'Yurt',
  StrokeRounded: IconYurtStrokeRounded,
  DuotoneRounded: IconYurtDuotoneRounded,
  TwotoneRounded: IconYurtTwotoneRounded,
  SolidRounded: IconYurtSolidRounded,
  BulkRounded: IconYurtBulkRounded,
  StrokeSharp: IconYurtStrokeSharp,
  SolidSharp: IconYurtSolidSharp,
};