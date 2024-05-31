import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.97579 17C2.98763 17 2.49356 17 2.19107 16.5529C1.88859 16.1059 1.98915 15.633 2.19025 14.6872C2.83062 11.6757 4.74084 10 6.99778 10C9.33384 10 11.2984 11.7952 11.8679 15.0088C12.0187 15.8599 12.0942 16.2854 11.7934 16.6427C11.4926 17 11.0043 17 10.0275 17H3.97579Z',
  d2: 'M5 7H9',
  d3: 'M10 17C10 18.6569 8.65685 20 7 20C5.34315 20 4 18.6569 4 17',
  d4: 'M15.1203 4H16.1322C16.1874 4 16.215 4 16.2406 4.0003C17.7795 4.01851 19.1822 4.85203 19.8874 6.16725C19.8991 6.18913 19.9115 6.21285 19.9361 6.26031C19.9435 6.2744 19.9471 6.28145 19.9496 6.28656C20.1103 6.61381 19.8674 6.99169 19.4911 6.99987C19.4852 7 19.477 7 19.4607 7H16.8125C16.5191 7 16.3724 7 16.3111 7.09242C16.2497 7.18485 16.3116 7.31275 16.4352 7.56855L17.4565 9.68182C17.8386 10.4726 18.0297 10.8679 17.9856 11.2791C17.9415 11.6902 17.6705 12.0397 17.1285 12.7388L15.5361 14.7929C15.0769 15.3851 14.8473 15.6813 14.5171 15.8406C14.1868 16 13.8026 16 13.0343 16H12',
  d5: 'M1.08163 14.4062C1.77389 11.1507 3.9167 9.125 6.62275 9.125C9.42822 9.125 11.6189 11.2965 12.2314 14.7529L12.2403 14.803C12.3081 15.1849 12.3748 15.5611 12.375 15.8856C12.3751 16.2726 12.2835 16.6545 11.9921 17.0007C11.6868 17.3634 11.296 17.5093 10.9063 17.5711C10.5652 17.6252 10.1476 17.6251 9.70307 17.625L9.65251 17.625H3.60076L3.54286 17.625C3.09931 17.6251 2.66465 17.6253 2.30689 17.5551C1.87492 17.4703 1.48146 17.2718 1.19486 16.8482C0.933893 16.4625 0.859817 16.064 0.877469 15.6501C0.892653 15.2941 0.979567 14.8857 1.07117 14.4553L1.08163 14.4062Z',
  d6: 'M3.625 6.875C3.625 6.32272 4.07272 5.875 4.625 5.875H8.625C9.17728 5.875 9.625 6.32272 9.625 6.875C9.625 7.42728 9.17728 7.875 8.625 7.875H4.625C4.07272 7.875 3.625 7.42728 3.625 6.875Z',
  d7: 'M3.625 15.875C4.17728 15.875 4.625 16.3227 4.625 16.875C4.625 17.9796 5.52043 18.875 6.625 18.875C7.72957 18.875 8.625 17.9796 8.625 16.875C8.625 16.3227 9.07272 15.875 9.625 15.875C10.1773 15.875 10.625 16.3227 10.625 16.875C10.625 19.0841 8.83414 20.875 6.625 20.875C4.41586 20.875 2.625 19.0841 2.625 16.875C2.625 16.3227 3.07272 15.875 3.625 15.875Z',
  d8: 'M20.125 15.375C19.5727 15.375 19.125 15.8227 19.125 16.375C19.125 16.9273 19.5727 17.375 20.125 17.375C20.6773 17.375 21.125 16.9273 21.125 16.375C21.125 15.8227 20.6773 15.375 20.125 15.375ZM17.125 16.375C17.125 14.7181 18.4681 13.375 20.125 13.375C21.7819 13.375 23.125 14.7181 23.125 16.375C23.125 18.0319 21.7819 19.375 20.125 19.375C18.4681 19.375 17.125 18.0319 17.125 16.375Z',
  d9: 'M15.6038 5.12695C15.2344 5.12257 14.8647 5.12671 14.4953 5.12671C13.943 5.12671 13.4953 4.679 13.4953 4.12671C13.4953 3.57443 13.943 3.12671 14.4953 3.12671C14.8726 3.12671 15.2501 3.12262 15.6274 3.12709C17.5421 3.14974 19.3729 4.24263 20.2223 5.97254C20.7321 7.01088 19.9324 8.10363 18.8879 8.12635C18.4085 8.13678 17.928 8.13038 17.4481 8.12771C17.3053 8.12692 17.2339 8.12652 17.2042 8.17345C17.1746 8.22037 17.2058 8.28483 17.2681 8.41374C17.4289 8.74649 17.5897 9.07925 17.7505 9.41198C17.9256 9.77412 18.0885 10.1111 18.1963 10.4096C18.3159 10.7404 18.3989 11.1023 18.3549 11.5124C18.311 11.9219 18.1534 12.2583 17.9673 12.5567C17.7989 12.8269 17.5685 13.124 17.3199 13.4446L15.7014 15.5323C15.3018 16.0477 14.9178 16.5828 14.3266 16.868C13.7836 17.13 13.1737 17.1285 12.5527 17.127C12.1601 17.126 11.7676 17.1267 11.375 17.1267C10.8227 17.1267 10.375 16.679 10.375 16.1267C10.375 15.5744 10.8227 15.1267 11.375 15.1267H12.4093C13.4139 15.1267 13.5079 15.0975 14.1208 14.3069L15.7132 12.2528C15.9967 11.8872 16.1625 11.6714 16.2702 11.4986C16.3735 11.3328 16.3817 11.2728 16.3154 11.0894C16.2471 10.9003 16.1312 10.6576 15.9311 10.2437C15.5865 9.53064 15.2433 8.81693 14.8973 8.1046C14.8485 8.00407 14.7698 7.84219 14.723 7.6901C14.6662 7.50552 14.5757 7.08388 14.8529 6.6662C15.1216 6.26129 15.5308 6.17364 15.7086 6.14828C15.877 6.12426 16.0728 6.12671 16.1875 6.12671H17.4562C17.6568 6.12671 17.7572 6.12671 17.7805 6.05937C17.8037 5.99203 17.7284 5.93288 17.5776 5.81458C17.0345 5.38832 16.3437 5.1357 15.6038 5.12695Z',
  d10: 'M5 8H9',
  d11: 'M10 16C10 17.6569 8.65685 19 7 19C5.34315 19 4 17.6569 4 16',
  d12: 'M7 11C4.23858 11 2 13.2386 2 16H12C12 13.2386 9.76142 11 7 11Z',
  d13: 'M12 16H14.5L18 11.5L16 8H20C20 8 20 5 15 5',
  d14: 'M9 9H5V7H9V9Z',
  d15: 'M5 16C5 17.1046 5.89543 18 7 18C8.10457 18 9 17.1046 9 16H11C11 18.2091 9.20914 20 7 20C4.79086 20 3 18.2091 3 16H5Z',
  d16: 'M20 16C19.4477 16 19 16.4477 19 17C19 17.5523 19.4477 18 20 18C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16ZM17 17C17 15.3431 18.3431 14 20 14C21.6569 14 23 15.3431 23 17C23 18.6569 21.6569 20 20 20C18.3431 20 17 18.6569 17 17Z',
  d17: 'M1 16C1 12.6863 3.68629 10 7 10C10.3137 10 13 12.6863 13 16V17H1V16Z',
  d18: 'M18.4781 7C18.0285 6.55326 17.0696 6 15 6V4C17.7069 4 19.2774 4.82079 20.1432 5.85982C20.5625 6.36296 20.7766 6.87208 20.8854 7.26361C20.9397 7.45913 21 7.63281 21 8C21 8.55228 20.5523 9 20 9H17.7232L18.8682 11.0039C19.0693 11.3557 19.0381 11.7941 18.7894 12.1139L15.2894 16.6139C15.0999 16.8575 14.8086 17 14.5 17H12V15H14.0109L16.7995 11.4147L15.1318 8.49614C14.9549 8.18664 14.9562 7.80639 15.1351 7.49807C15.314 7.18976 15.6435 7 16 7H18.4781Z',
} as const;

export const IconScooter01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-01-stroke-rounded IconScooter01StrokeRounded"
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
      />
      <circle 
        cx="20" 
        cy="16" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconScooter01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-01-duotone-rounded IconScooter01DuotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="20" 
        cy="16" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconScooter01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-01-twotone-rounded IconScooter01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
      <circle 
        cx="20" 
        cy="16" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconScooter01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-01-solid-rounded IconScooter01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconScooter01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-01-bulk-rounded IconScooter01BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconScooter01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-01-stroke-sharp IconScooter01StrokeSharp"
    >
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
        cx="20" 
        cy="17" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconScooter01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="scooter-01-solid-sharp IconScooter01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfScooter01: TheIconSelfPack = {
  name: 'Scooter01',
  StrokeRounded: IconScooter01StrokeRounded,
  DuotoneRounded: IconScooter01DuotoneRounded,
  TwotoneRounded: IconScooter01TwotoneRounded,
  SolidRounded: IconScooter01SolidRounded,
  BulkRounded: IconScooter01BulkRounded,
  StrokeSharp: IconScooter01StrokeSharp,
  SolidSharp: IconScooter01SolidSharp,
};