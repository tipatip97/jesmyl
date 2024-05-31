import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 7C5.10457 7 6 6.10457 6 5C6 3.89543 5.10457 3 4 3C2.89543 3 2 3.89543 2 5C2 6.10457 2.89543 7 4 7Z',
  d2: 'M20 9C21.1046 9 22 8.10457 22 7C22 5.89543 21.1046 5 20 5C18.8954 5 18 5.89543 18 7C18 8.10457 18.8954 9 20 9Z',
  d3: 'M4.96694 17C1.44331 11.5 8.98977 11 4.95922 7M6.37859 5C7.48264 5 9.99986 6 9.99986 8',
  d4: 'M5 17C10.2172 18.4523 13.3284 18.2088 19 17',
  d5: 'M4 20C9.96256 21.4523 13.5182 21.2088 20 20',
  d6: 'M18.0294 6.04443C15.6645 6.4788 10.2107 9.78486 11.0504 17.238M18.2516 8.08871C17.0366 8.66132 15.1257 9.88729 17.5988 12.9124C18.3792 13.8671 19.2863 15.8795 18.9515 16.8686',
  d7: 'M18.8631 15.3898C18.5458 13.8594 17.7088 13.3973 16.6506 11.4256C15.8715 9.97409 16.905 8.62079 18.3104 8.06911C18.1145 7.75988 18.001 7.39319 18.001 7C18.001 6.63571 18.0984 6.29417 18.2686 6H18.1849C11.9988 7.42525 10.2865 13.9978 11.2527 17.998C13.1636 18.0251 15.0777 17.7788 17.4145 17.3246C18.341 17.1445 19.0547 16.314 18.8631 15.3898Z',
  d8: 'M4.00098 7C5.10555 7 6.00098 6.10457 6.00098 5C6.00098 3.89543 5.10555 3 4.00098 3C2.89641 3 2.00098 3.89543 2.00098 5C2.00098 6.10457 2.89641 7 4.00098 7Z',
  d9: 'M20.001 9C21.1055 9 22.001 8.10457 22.001 7C22.001 5.89543 21.1055 5 20.001 5C18.8964 5 18.001 5.89543 18.001 7C18.001 8.10457 18.8964 9 20.001 9Z',
  d10: 'M18.0309 6.04492C15.666 6.47929 10.2122 9.78535 11.0519 17.2385M18.2531 8.0892C17.0381 8.66181 15.1272 9.88778 17.6003 12.9129C18.3807 13.8676 19.2878 15.88 18.953 16.8691',
  d11: 'M4.96794 17C1.44424 11.5 8.99087 11 4.96022 7M6.37963 5C7.48371 5 10.001 6 10.001 8',
  d12: 'M5.00098 17C10.2182 18.4523 13.3294 18.2088 19.001 17',
  d13: 'M4.00098 20C9.96354 21.4523 13.5192 21.2088 20.001 20',
  d14: 'M18.0006 6.04712C14.8273 6.84615 10.3755 10.0879 11.106 17.3934M18.2747 8.07894C17.0597 8.65156 15.1167 9.93934 17.5898 12.9644C18.639 14.2478 19.2258 16.0162 18.8911 17.0053',
  d15: 'M1.25012 5C1.25012 3.48122 2.48134 2.25 4.00012 2.25C5.51891 2.25 6.75012 3.48122 6.75012 5C6.75012 6.51878 5.51891 7.75 4.00012 7.75C2.48134 7.75 1.25012 6.51878 1.25012 5Z',
  d16: 'M17.25 7.00012C17.25 5.48134 18.4812 4.25012 20 4.25012C21.5188 4.25012 22.75 5.48134 22.75 7.00012C22.75 8.51891 21.5188 9.75012 20 9.75012C18.4812 9.75012 17.25 8.51891 17.25 7.00012Z',
  d17: 'M3.02864 19.5135C3.15933 18.9769 3.70028 18.6478 4.23688 18.7785C10.0141 20.1857 13.4162 19.9608 19.8169 18.7671C20.3598 18.6658 20.882 19.0239 20.9833 19.5668C21.0845 20.1097 20.7265 20.6319 20.1836 20.7332C13.6207 21.9571 9.9115 22.2191 3.76358 20.7217C3.22699 20.591 2.89794 20.0501 3.02864 19.5135Z',
  d18: 'M15.7671 6.07329C15.9192 5.9968 16.0889 6.14039 16.0596 6.30808C16.0204 6.53283 16 6.76403 16 7C16 8.09176 16.4374 9.08137 17.1465 9.80314C17.2065 9.86424 17.2231 9.95541 17.1957 10.0366C17.0894 10.3513 17.1086 10.6949 17.3104 11.0709C17.631 11.6682 17.9299 12.119 18.2043 12.5122C18.2661 12.6006 18.3287 12.689 18.3914 12.7775C18.5975 13.0683 18.8037 13.3592 18.9782 13.6526C19.4523 14.4496 19.7226 15.55 19.7499 17C19.7499 17.397 19.4415 17.7219 19.0513 17.7483C19.0404 17.749 19.0295 17.7504 19.0188 17.7526C16.2595 18.338 14.0038 18.7171 11.8337 18.7479C11.6553 18.7504 11.3598 18.749 11.1821 18.7469C9.24628 18.7136 7.3249 18.4055 5.02648 17.7743C4.75517 17.7368 4.50135 17.5859 4.34201 17.3381C3.394 15.8644 3.11347 14.5962 3.30836 13.4462C3.49505 12.3444 4.10331 11.4977 4.5516 10.8758C5.06001 10.1705 5.3128 9.80002 5.35907 9.42586C5.3903 9.17327 5.34027 8.69822 4.46807 7.83614C4.0876 7.46008 4.08526 6.84802 4.46284 6.46908C4.84042 6.09013 5.45494 6.0878 5.83542 6.46386C6.91923 7.53511 7.42063 8.57048 7.28565 9.66216C7.17411 10.5642 6.62038 11.3261 6.21669 11.8816L6.21604 11.8825C6.1859 11.9239 6.15661 11.9642 6.1284 12.0034C5.66206 12.6503 5.32495 13.1629 5.22242 13.7679C5.13891 14.2607 5.19703 14.9332 5.74005 15.9028C5.76601 15.9492 5.81022 15.983 5.86158 15.9966C7.42181 16.4101 8.7696 16.654 10.0614 16.7577C10.184 16.7675 10.285 16.6642 10.2765 16.5415C10.1492 14.6952 10.4763 12.6068 11.3552 10.7182C12.2328 8.83218 13.6711 7.12756 15.7671 6.07329Z',
  d19: 'M5.55881 5.21667C5.55881 4.68279 5.99335 4.25 6.52938 4.25C6.98097 4.25 7.48443 4.39356 7.93936 4.58403C8.41331 4.78246 8.9172 5.06657 9.38251 5.42095C10.2729 6.09902 11.2234 7.19765 11.2234 8.61103C11.2234 9.14491 10.7889 9.5777 10.2529 9.5777C9.71685 9.5777 9.28231 9.14491 9.28231 8.61103C9.28231 8.09109 8.90693 7.49253 8.20342 6.95675C7.87181 6.7042 7.5118 6.50223 7.18714 6.3663C6.84345 6.2224 6.61357 6.18333 6.52938 6.18333C5.99335 6.18333 5.55881 5.75054 5.55881 5.21667Z',
  d20: 'M11.2522 18C10.2849 14 11.9968 7.42549 18.1839 6M18.5 8C17 8.5 15.8357 9.90921 16.6495 11.4256C18.0067 13.9542 18.9999 14 18.9999 17C13.3283 18.2088 10.1843 18.4523 4.96707 17C1.44344 11.5 8.9899 11 4.95934 7M9.99999 8C9.99999 6 7.48277 5 6.37872 5',
  d21: 'M1.25 5C1.25 3.48122 2.48122 2.25 4 2.25C5.51878 2.25 6.75 3.48122 6.75 5C6.75 6.51878 5.51878 7.75 4 7.75C2.48122 7.75 1.25 6.51878 1.25 5Z',
  d22: 'M17.25 7C17.25 5.48122 18.4812 4.25 20 4.25C21.5188 4.25 22.75 5.48122 22.75 7C22.75 8.51878 21.5188 9.75 20 9.75C18.4812 9.75 17.25 8.51878 17.25 7Z',
  d23: 'M20.1375 20.7373C13.5949 21.9574 9.92409 22.2148 3.82251 20.7287L4.17748 19.2713C10.001 20.6897 13.4415 20.4602 19.8625 19.2627L20.1375 20.7373Z',
  d24: 'M16.1565 5.88841C16.0546 6.24132 16 6.61428 16 7C16 8.14329 16.4797 9.17455 17.2487 9.90353C17.0876 10.2538 17.0798 10.6412 17.3104 11.0709C17.631 11.6682 17.9299 12.119 18.2043 12.5121C18.2661 12.6006 18.3287 12.689 18.3914 12.7774C18.5975 13.0683 18.8037 13.3592 18.9782 13.6526C19.4791 14.4945 19.7499 15.3951 19.7499 17V17.607L19.1562 17.7335C16.3089 18.3404 14.0466 18.7163 11.8237 18.7478C9.59 18.7795 7.42725 18.4633 4.76595 17.7225L4.49005 17.6457L4.33556 17.4046C3.38278 15.9174 3.11875 14.6678 3.30659 13.5549C3.4881 12.4794 4.07987 11.6466 4.54407 11.0001C5.05473 10.2888 5.3639 9.84903 5.42106 9.38489C5.4666 9.01508 5.35692 8.4512 4.43104 7.53234L5.48766 6.46766C6.57706 7.5488 7.03553 8.54742 6.90981 9.56823C6.80316 10.4343 6.2706 11.1715 5.84897 11.755L5.76255 11.8749C5.2844 12.5409 4.90215 13.1144 4.78568 13.8045C4.68266 14.4149 4.77572 15.2201 5.44995 16.3548C7.28015 16.8495 8.8372 17.1224 10.3444 17.2143C10.0767 15.2146 10.3676 12.8403 11.3552 10.7181C12.2861 8.71756 13.848 6.92107 16.1565 5.88841Z',
  d25: 'M10.75 8C10.75 6.64586 9.89167 5.6943 9.01284 5.12163C8.14224 4.55433 7.09677 4.25 6.37873 4.25V5.75C6.76473 5.75 7.5299 5.94567 8.19392 6.37837C8.84972 6.8057 9.25 7.35414 9.25 8H10.75Z',
} as const;

export const IconJokerStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joker-stroke-rounded IconJokerStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconJokerDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joker-duotone-rounded IconJokerDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJokerTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joker-twotone-rounded IconJokerTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
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
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJokerSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joker-solid-rounded IconJokerSolidRounded"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJokerBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joker-bulk-rounded IconJokerBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJokerStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joker-stroke-sharp IconJokerStrokeSharp"
    >
      <circle 
        cx="4" 
        cy="5" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="20" 
        cy="7" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJokerSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joker-solid-sharp IconJokerSolidSharp"
    >
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfJoker: TheIconSelfPack = {
  name: 'Joker',
  StrokeRounded: IconJokerStrokeRounded,
  DuotoneRounded: IconJokerDuotoneRounded,
  TwotoneRounded: IconJokerTwotoneRounded,
  SolidRounded: IconJokerSolidRounded,
  BulkRounded: IconJokerBulkRounded,
  StrokeSharp: IconJokerStrokeSharp,
  SolidSharp: IconJokerSolidSharp,
};