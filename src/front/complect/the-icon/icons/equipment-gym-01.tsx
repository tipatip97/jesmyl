import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.75 11.5H16.25C17.6429 11.5 18 11.9094 18 13.25C18 14.6429 17.5906 15 16.25 15H7.75C6.3571 15 6 14.5906 6 13.25C6 11.8571 6.40936 11.5 7.75 11.5Z',
  d2: 'M7.75 15H16.25C17.6429 15 18 15.4094 18 16.75C18 18.1429 17.5906 18.5 16.25 18.5H7.75C6.3571 18.5 6 18.0906 6 16.75C6 15.3571 6.40936 15 7.75 15Z',
  d3: 'M7.75 18.5H16.25C17.6429 18.5 18 18.9094 18 20.25C18 21.6429 17.5906 22 16.25 22H7.75C6.3571 22 6 21.5906 6 20.25C6 18.8571 6.40936 18.5 7.75 18.5Z',
  d4: 'M22 7.50014L21.201 6.50136C20.6109 5.76374 20.3158 5.39493 19.9051 5.19754C19.5608 5.03203 19.1731 5.00529 18.5 5.00098M2 7.50014L2.79902 6.50136C3.38912 5.76374 3.68417 5.39493 4.09487 5.19754C4.43923 5.03203 4.82691 5.00529 5.5 5.00098M16 5.00098L8 5.00098',
  d5: 'M16 2V11.5M8 2V11.5',
  d6: 'M22 7.49917L21.201 6.50039C20.6109 5.76277 20.3158 5.39396 19.9051 5.19656C19.5608 5.03105 19.1731 5.00432 18.5 5M2 7.49917L2.79902 6.50039C3.38912 5.76277 3.68417 5.39396 4.09487 5.19656C4.43923 5.03105 4.82691 5.00432 5.5 5M16 5L8 5',
  d7: 'M5.89976 11.454C6.45983 10.9388 7.24524 10.875 7.90175 10.875L16.0982 10.875C16.7919 10.875 17.5833 10.9539 18.1358 11.4876C18.6823 12.0156 18.75 12.7561 18.75 13.375C18.75 13.9603 18.683 14.6192 18.2632 15.1245C18.6931 15.6388 18.75 16.3079 18.75 16.875C18.75 17.4603 18.683 18.1192 18.2632 18.6245C18.6931 19.1388 18.75 19.8079 18.75 20.375C18.75 21.029 18.6663 21.7751 18.1002 22.296C17.5401 22.8112 16.7547 22.875 16.0982 22.875H7.90175C7.208 22.875 6.41659 22.7961 5.86417 22.2624C5.31765 21.7344 5.24996 20.9939 5.24996 20.375C5.24996 19.7897 5.31696 19.1308 5.73669 18.6255C5.30679 18.1112 5.24996 17.4421 5.24996 16.875C5.24996 16.2897 5.31696 15.6308 5.73669 15.1255C5.30679 14.6112 5.24996 13.9421 5.24996 13.375C5.24996 12.721 5.33363 11.9749 5.89976 11.454ZM7.22969 12.8199C7.20155 12.9224 7.17854 13.0938 7.17854 13.375C7.17854 13.6487 7.19894 13.8181 7.22596 13.9227C7.23422 13.9547 7.24186 13.9758 7.24741 13.9888C7.26056 13.994 7.28154 14.0009 7.31291 14.0086C7.4217 14.0351 7.60346 14.0568 7.90175 14.0568L16.0982 14.0568C16.3884 14.0568 16.5682 14.0376 16.6791 14.0121C16.7131 14.0043 16.7355 13.9971 16.7493 13.9919C16.7547 13.9795 16.7621 13.9597 16.7702 13.9301C16.7984 13.8276 16.8214 13.6562 16.8214 13.375C16.8214 13.1013 16.801 12.9319 16.774 12.8273C16.7657 12.7953 16.7581 12.7742 16.7525 12.7612C16.7394 12.756 16.7184 12.7491 16.687 12.7414C16.5782 12.7149 16.3965 12.6932 16.0982 12.6932L7.90175 12.6932C7.61148 12.6932 7.43177 12.7124 7.3208 12.7379C7.28687 12.7457 7.26446 12.7529 7.25064 12.7581C7.24521 12.7705 7.2378 12.7903 7.22969 12.8199ZM7.22969 16.3199C7.20155 16.4224 7.17854 16.5938 7.17854 16.875C7.17854 17.1487 7.19894 17.3181 7.22596 17.4227C7.23422 17.4547 7.24186 17.4758 7.24741 17.4888C7.26056 17.494 7.28154 17.5009 7.31291 17.5086C7.4217 17.5351 7.60346 17.5568 7.90175 17.5568L16.0982 17.5568C16.3884 17.5568 16.5682 17.5376 16.6791 17.5121C16.7131 17.5043 16.7355 17.4971 16.7493 17.4919C16.7547 17.4795 16.7621 17.4597 16.7702 17.4301C16.7984 17.3276 16.8214 17.1562 16.8214 16.875C16.8214 16.6013 16.801 16.4319 16.774 16.3273C16.7657 16.2953 16.7581 16.2742 16.7525 16.2612C16.7394 16.256 16.7184 16.2491 16.687 16.2414C16.5782 16.2149 16.3965 16.1932 16.0982 16.1932H7.90175C7.61148 16.1932 7.43177 16.2124 7.3208 16.2379C7.28687 16.2457 7.26446 16.2529 7.25064 16.2581C7.24521 16.2705 7.2378 16.2903 7.22969 16.3199ZM7.17854 20.375C7.17854 20.0938 7.20155 19.9224 7.22969 19.8199C7.2378 19.7903 7.24521 19.7705 7.25064 19.7581C7.26446 19.7529 7.28687 19.7457 7.3208 19.7379C7.43177 19.7124 7.61148 19.6932 7.90175 19.6932H16.0982C16.3965 19.6932 16.5782 19.7149 16.687 19.7414C16.7184 19.7491 16.7394 19.756 16.7525 19.7612C16.7581 19.7742 16.7657 19.7953 16.774 19.8273C16.801 19.9319 16.8214 20.1013 16.8214 20.375C16.8214 20.6562 16.7984 20.8276 16.7702 20.9301C16.7621 20.9597 16.7547 20.9795 16.7493 20.9919C16.7355 20.9971 16.7131 21.0043 16.6791 21.0121C16.5682 21.0376 16.3884 21.0568 16.0982 21.0568H7.90175C7.60346 21.0568 7.4217 21.0351 7.31291 21.0086C7.28154 21.0009 7.26056 20.994 7.24741 20.9888C7.24186 20.9758 7.23422 20.9547 7.22596 20.9227C7.19894 20.8181 7.17854 20.6487 7.17854 20.375Z',
  d8: 'M16.9999 5.125C16.9999 4.57272 16.5522 4.125 15.9999 4.125L7.99992 4.125C7.44764 4.125 6.99993 4.57272 6.99993 5.125C6.99993 5.67728 7.44764 6.125 7.99992 6.125L15.9999 6.125C16.5522 6.125 16.9999 5.67728 16.9999 5.125ZM17.9708 5.09108C17.9466 5.64284 18.3743 6.10974 18.926 6.13393C19.279 6.14942 19.3981 6.18739 19.4719 6.22287C19.6291 6.29843 19.7699 6.43744 20.42 7.25008L21.2191 8.24886C21.5641 8.68013 22.1934 8.75005 22.6246 8.40504C23.0559 8.06003 23.1258 7.43074 22.7808 6.99947L21.9818 6.00069C21.948 5.95844 21.9145 5.91645 21.8813 5.87478C21.3935 5.26289 20.9601 4.71912 20.3382 4.42026C19.9018 4.21048 19.463 4.15556 19.0137 4.13586C18.4619 4.11166 17.995 4.53933 17.9708 5.09108ZM6.02904 5.09108C6.00484 4.53933 5.53794 4.11166 4.98619 4.13586C4.53688 4.15556 4.09808 4.21048 3.66161 4.42026C3.03978 4.71912 2.60633 5.26288 2.11859 5.87476C2.08536 5.91644 2.05189 5.95844 2.01808 6.00069L1.21906 6.99947C0.874048 7.43073 0.943968 8.06003 1.37523 8.40504C1.80649 8.75005 2.43579 8.68013 2.78079 8.24886L3.57982 7.25008C4.22993 6.43744 4.37076 6.29843 4.52799 6.22286C4.60179 6.18739 4.72082 6.14942 5.07382 6.13393C5.62557 6.10974 6.05324 5.64284 6.02904 5.09108Z',
  d9: 'M8.00037 1.125C8.55266 1.125 9.00038 1.57272 9.00038 2.125L8.99996 11.0927C8.99996 11.645 8.55225 12.0927 7.99996 12.0927C7.44768 12.0927 6.99996 11.645 6.99996 11.0927L7.00037 2.125C7.00037 1.57272 7.44809 1.125 8.00037 1.125ZM16.0004 1.125C16.5527 1.125 17.0004 1.57272 17.0004 2.125L17 11.0927C17 11.645 16.5522 12.0927 16 12.0927C15.4477 12.0927 15 11.645 15 11.0927L15.0004 2.125C15.0004 1.57272 15.4481 1.125 16.0004 1.125Z',
  d10: 'M5.89976 11.454C6.45982 10.9388 7.24524 10.875 7.90175 10.875L16.0982 10.875C16.7919 10.875 17.5833 10.9539 18.1358 11.4876C18.6823 12.0156 18.75 12.7561 18.75 13.375C18.75 13.9603 18.683 14.6192 18.2632 15.1245C18.6931 15.6388 18.75 16.3079 18.75 16.875C18.75 17.4603 18.683 18.1192 18.2632 18.6245C18.6931 19.1388 18.75 19.8079 18.75 20.375C18.75 21.029 18.6663 21.7751 18.1002 22.296C17.5401 22.8112 16.7547 22.875 16.0982 22.875H7.90175C7.208 22.875 6.41659 22.7961 5.86417 22.2624C5.31765 21.7344 5.24996 20.9939 5.24996 20.375C5.24996 19.7897 5.31696 19.1308 5.73669 18.6255C5.30679 18.1112 5.24996 17.4421 5.24996 16.875C5.24996 16.2897 5.31696 15.6308 5.73669 15.1255C5.30679 14.6112 5.24996 13.9421 5.24996 13.375C5.24996 12.721 5.33363 11.9749 5.89976 11.454ZM7.22969 12.8199C7.20155 12.9224 7.17853 13.0938 7.17853 13.375C7.17853 13.6487 7.19894 13.8181 7.22596 13.9227C7.23422 13.9547 7.24186 13.9758 7.24741 13.9888C7.26056 13.994 7.28153 14.0009 7.31291 14.0086C7.4217 14.0351 7.60346 14.0568 7.90175 14.0568L16.0982 14.0568C16.3884 14.0568 16.5682 14.0376 16.6791 14.0121C16.7131 14.0043 16.7355 13.9971 16.7493 13.9919C16.7547 13.9795 16.7621 13.9597 16.7702 13.9301C16.7984 13.8276 16.8214 13.6562 16.8214 13.375C16.8214 13.1013 16.801 12.9319 16.774 12.8273C16.7657 12.7953 16.7581 12.7742 16.7525 12.7612C16.7394 12.756 16.7184 12.7491 16.687 12.7414C16.5782 12.7149 16.3965 12.6932 16.0982 12.6932L7.90175 12.6932C7.61148 12.6932 7.43177 12.7124 7.32079 12.7379C7.28687 12.7457 7.26446 12.7529 7.25064 12.7581C7.24521 12.7705 7.2378 12.7903 7.22969 12.8199ZM7.22969 16.3199C7.20155 16.4224 7.17853 16.5938 7.17853 16.875C7.17853 17.1487 7.19894 17.3181 7.22596 17.4227C7.23422 17.4547 7.24186 17.4758 7.24741 17.4888C7.26056 17.494 7.28153 17.5009 7.31291 17.5086C7.4217 17.5351 7.60346 17.5568 7.90175 17.5568L16.0982 17.5568C16.3884 17.5568 16.5682 17.5376 16.6791 17.5121C16.7131 17.5043 16.7355 17.4971 16.7493 17.4919C16.7547 17.4795 16.7621 17.4597 16.7702 17.4301C16.7984 17.3276 16.8214 17.1562 16.8214 16.875C16.8214 16.6013 16.801 16.4319 16.774 16.3273C16.7657 16.2953 16.7581 16.2742 16.7525 16.2612C16.7394 16.256 16.7184 16.2491 16.687 16.2414C16.5782 16.2149 16.3965 16.1932 16.0982 16.1932H7.90175C7.61148 16.1932 7.43177 16.2124 7.32079 16.2379C7.28687 16.2457 7.26446 16.2529 7.25064 16.2581C7.24521 16.2705 7.2378 16.2903 7.22969 16.3199ZM7.17853 20.375C7.17853 20.0938 7.20155 19.9224 7.22969 19.8199C7.2378 19.7903 7.24521 19.7705 7.25064 19.7581C7.26446 19.7529 7.28687 19.7457 7.32079 19.7379C7.43177 19.7124 7.61148 19.6932 7.90175 19.6932H16.0982C16.3965 19.6932 16.5782 19.7149 16.687 19.7414C16.7184 19.7491 16.7394 19.756 16.7525 19.7612C16.7581 19.7742 16.7657 19.7953 16.774 19.8273C16.801 19.9319 16.8214 20.1013 16.8214 20.375C16.8214 20.6562 16.7984 20.8276 16.7702 20.9301C16.7621 20.9597 16.7547 20.9795 16.7493 20.9919C16.7355 20.9971 16.7131 21.0043 16.6791 21.0121C16.5682 21.0376 16.3884 21.0568 16.0982 21.0568H7.90175C7.60346 21.0568 7.4217 21.0351 7.31291 21.0086C7.28153 21.0009 7.26056 20.994 7.24741 20.9888C7.24186 20.9758 7.23422 20.9547 7.22596 20.9227C7.19894 20.8181 7.17853 20.6487 7.17853 20.375Z',
  d11: 'M9.00037 2.125C9.00037 1.57272 8.55265 1.125 8.00037 1.125C7.44808 1.125 7.00037 1.57272 7.00037 2.125L6.99996 10.9433C7.3055 10.8871 7.61585 10.875 7.90175 10.875H8.99996L9.00037 2.125ZM17 10.9448C16.6988 10.8889 16.3898 10.875 16.0982 10.875H15L15.0004 2.125C15.0004 1.57272 15.4481 1.125 16.0004 1.125C16.5527 1.125 17.0004 1.57272 17.0004 2.125L17 10.9448Z',
  d12: 'M17 18.5H7C6.44772 18.5 6 18.9477 6 19.5V21C6 21.5523 6.44772 22 7 22H17C17.5523 22 18 21.5523 18 21V19.5C18 18.9477 17.5523 18.5 17 18.5Z',
  d13: 'M17 15H7C6.44772 15 6 15.4477 6 16V17.5C6 18.0523 6.44772 18.5 7 18.5H17C17.5523 18.5 18 18.0523 18 17.5V16C18 15.4477 17.5523 15 17 15Z',
  d14: 'M17 11.5H7C6.44772 11.5 6 11.9477 6 12.5V14C6 14.5523 6.44772 15 7 15H17C17.5523 15 18 14.5523 18 14V12.5C18 11.9477 17.5523 11.5 17 11.5Z',
  d15: 'M22 7.50012L20 5.0011L18 5.00085M2 7.50012L4 5.00085H6M16 5.00095H8',
  d16: 'M5.00015 19C5.00015 17.8954 5.89558 17 7.00015 17H17.0002C18.1047 17 19.0002 17.8954 19.0002 19V20.5C19.0002 21.6046 18.1047 22.5 17.0002 22.5H7.00015C5.89558 22.5 5.00015 21.6046 5.00015 20.5V19ZM17.0002 19H7.00015V20.5H17.0002V19Z',
  d17: 'M5.00015 15.5C5.00015 14.3954 5.89558 13.5 7.00015 13.5H17.0002C18.1047 13.5 19.0002 14.3954 19.0002 15.5V17C19.0002 18.1046 18.1047 19 17.0002 19H7.00015C5.89558 19 5.00015 18.1046 5.00015 17V15.5ZM17.0002 15.5H7.00015V17H17.0002V15.5Z',
  d18: 'M5.00015 12C5.00015 10.8954 5.89558 10 7.00015 10H17.0002C18.1047 10 19.0002 10.8954 19.0002 12V13.5C19.0002 14.6046 18.1047 15.5 17.0002 15.5H7.00015C5.89558 15.5 5.00015 14.6046 5.00015 13.5V12ZM17.0002 12H7.00015V13.5H17.0002V12Z',
  d19: 'M3.24429 3.87617C3.43353 3.63902 3.71998 3.50098 4.02284 3.50098H6.01714V5.50098H4.50201L2.8071 7.62505L1.25 6.37543L3.24429 3.87617ZM19.498 5.50116L17.9828 5.50098L17.983 3.50098L19.9773 3.50122C20.2801 3.50125 20.5665 3.63928 20.7557 3.87637L22.75 6.3754L21.193 7.62509L19.498 5.50116ZM8.01143 3.50107H15.9886V5.50107H8.01143V3.50107Z',
  d20: 'M7.00015 11V1.5H9.00015V11H7.00015ZM15.0002 11V1.5H17.0002V11H15.0002Z',
};

export const IconEquipmentGym01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-gym-01-stroke-rounded IconEquipmentGym01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconEquipmentGym01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-gym-01-duotone-rounded IconEquipmentGym01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d3} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEquipmentGym01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-gym-01-twotone-rounded IconEquipmentGym01TwotoneRounded"
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
        d={d.d6} 
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

export const IconEquipmentGym01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-gym-01-solid-rounded IconEquipmentGym01SolidRounded"
    >
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

export const IconEquipmentGym01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-gym-01-bulk-rounded IconEquipmentGym01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEquipmentGym01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-gym-01-stroke-sharp IconEquipmentGym01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconEquipmentGym01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-gym-01-solid-sharp IconEquipmentGym01SolidSharp"
    >
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

export const iconPackOfEquipmentGym01: TheIconSelfPack = {
  name: 'EquipmentGym01',
  StrokeRounded: IconEquipmentGym01StrokeRounded,
  DuotoneRounded: IconEquipmentGym01DuotoneRounded,
  TwotoneRounded: IconEquipmentGym01TwotoneRounded,
  SolidRounded: IconEquipmentGym01SolidRounded,
  BulkRounded: IconEquipmentGym01BulkRounded,
  StrokeSharp: IconEquipmentGym01StrokeSharp,
  SolidSharp: IconEquipmentGym01SolidSharp,
};