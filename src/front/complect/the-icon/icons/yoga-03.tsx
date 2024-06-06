import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 10C9 13.866 12 17 12 17C12 17 15 13.866 15 10C15 6.13401 12 3 12 3C12 3 9 6.13401 9 10Z',
  d2: 'M6.33095 8C4.11419 7.04619 2 7 2 7C2 7 2.09572 11.3814 4.85714 14.1429C7.61857 16.9043 12 17 12 17C12 17 16.3814 16.9043 19.1429 14.1429C21.9043 11.3814 22 7 22 7C22 7 19.8858 7.04619 17.6691 8',
  d3: 'M12.0207 17C11.8544 18.3333 12.6604 21 15.5135 21C17.5093 21 18.5072 19 22 21C21.6 18.9999 20.7998 17.7199 19.6329 17M11.9793 17C12.1456 18.3333 11.3396 21 8.48654 21C6.49068 21 5.49275 19 2 21C2.40005 18.9999 3.20018 17.7199 4.36707 17',
  d4: 'M12 17.3522C12 17.2273 12.0071 17.1092 12.0207 17C16.385 15.4657 18.914 16.3607 19.6329 17C20.7998 17.7199 21.6 18.9999 22 21C18.5072 19 17.5093 21 15.5135 21C12.8946 21 12.0005 18.7532 12 17.3531C11.9995 18.7532 11.1054 21 8.48654 21C6.49068 21 5.49275 19 2 21C2.40005 18.9999 3.20018 17.7199 4.36707 17C5.38538 16.4069 8.33346 15.5765 11.9793 17C11.9929 17.1092 12 17.2273 12 17.3522Z',
  d5: 'M12.5418 2.48138C12.4003 2.33358 12.2046 2.25 12 2.25C11.7954 2.25 11.5997 2.33358 11.4582 2.48138C11.2689 2.67911 11.0931 2.89584 10.9439 3.08373C10.646 3.45889 10.2504 3.99965 9.85463 4.66815C9.06918 5.99478 8.25 7.87988 8.25 10C8.25 12.1201 9.06918 14.0052 9.85463 15.3318C10.2504 16.0003 10.646 16.5411 10.9439 16.9163C11.0886 17.0986 11.3524 17.3984 11.4498 17.509L11.4582 17.5186C11.5997 17.6664 11.7954 17.75 12 17.75C12.2046 17.75 12.4007 17.6661 12.5421 17.5183L12.5502 17.5091C12.6472 17.3989 12.9112 17.0988 13.0561 16.9163C13.354 16.5411 13.7496 16.0003 14.1454 15.3318C14.9308 14.0052 15.75 12.1201 15.75 10C15.75 7.87988 14.9308 5.99478 14.1454 4.66815C13.7496 3.99965 13.354 3.45889 13.0561 3.08373C12.9069 2.89584 12.7274 2.6753 12.5418 2.48138Z',
  d6: 'M1.25023 7.22926C1.24441 6.9679 1.34773 6.71555 1.53624 6.53069C1.72475 6.34583 1.98209 6.24452 2.24862 6.25023C2.63283 6.25846 3.26551 6.33157 3.68772 6.39877C4.52831 6.53257 5.6687 6.7896 6.84605 7.28636C7.34184 7.49555 7.57082 8.05926 7.35749 8.54544C7.14417 9.03162 6.56932 9.25616 6.07353 9.04697C5.0845 8.62966 4.05678 8.39938 3.3227 8.28253C3.37517 8.60827 3.45041 8.98867 3.55807 9.4007C3.89628 10.6951 4.5336 12.2218 5.71052 13.3759C6.88743 14.53 8.44434 15.155 9.76431 15.4867C10.4167 15.6506 10.9913 15.7379 11.4003 15.7839C11.5737 15.8312 12.0565 15.8975 12.5997 15.7839C13.0087 15.7379 13.5833 15.6506 14.2357 15.4867C15.5557 15.155 17.1126 14.53 18.2895 13.3759C19.4664 12.2218 20.1037 10.6951 20.4419 9.4007C20.5496 8.98867 20.6248 8.60827 20.6773 8.28253C19.9432 8.39938 18.9155 8.62966 17.9265 9.04697C17.4307 9.25616 16.8558 9.03162 16.6425 8.54544C16.4292 8.05926 16.6582 7.49555 17.154 7.28636C18.3313 6.7896 19.4717 6.53257 20.3123 6.39877C20.7345 6.33157 21.1989 6.26207 21.7514 6.25023C22.0179 6.24452 22.2753 6.34583 22.4638 6.53069C22.6523 6.71555 22.7556 6.9679 22.7498 7.22926C22.7498 7.46484 22.7144 7.78011 22.6868 8.01508C22.6319 8.48402 22.5289 9.13566 22.3353 9.87643C21.9521 11.3431 21.1933 13.239 19.6716 14.7312C18.1498 16.2235 16.2165 16.9676 14.7208 17.3433C13.9654 17.5332 13.3009 17.6342 12.8227 17.6881C11.9876 17.7625 11.3778 17.7191 11.1773 17.6881C10.6991 17.6342 10.0346 17.5332 9.27917 17.3433C7.78354 16.9676 5.85019 16.2235 4.32844 14.7312C2.8067 13.239 2.04791 11.3431 1.66469 9.87643C1.47113 9.13566 1.36807 8.48402 1.31316 8.01508C1.28565 7.78011 1.25023 7.47236 1.25023 7.22926Z',
  d7: 'M11.7315 16.3094C15.6316 14.6796 18.8153 15.5931 20.0314 16.3661C21.4303 17.2313 22.3105 18.7302 22.7354 20.8543C22.793 21.1427 22.6769 21.4382 22.4382 21.6101C22.1995 21.7819 21.8825 21.7984 21.6272 21.6523C20.0317 20.7387 19.1114 20.783 18.3889 20.976C18.1012 21.0529 17.8553 21.1485 17.5742 21.2578L17.5742 21.2578C17.4387 21.3105 17.295 21.3664 17.1345 21.4249C16.6744 21.5925 16.1414 21.7514 15.5134 21.7514C13.8098 21.7514 12.6674 20.936 12.0044 19.9079C11.3679 18.9207 11.1723 17.7428 11.2764 16.9086C11.3097 16.6417 11.4833 16.4131 11.7315 16.3094Z',
  d8: 'M12.2685 16.3094C8.36843 14.6796 5.18467 15.5931 3.96861 16.3661C2.56972 17.2313 1.68949 18.7302 1.26463 20.8543C1.20695 21.1427 1.32314 21.4382 1.5618 21.6101C1.80046 21.7819 2.11754 21.7984 2.37275 21.6523C3.96826 20.7387 4.88857 20.783 5.61105 20.976C5.89883 21.0529 6.14474 21.1485 6.42579 21.2578L6.4258 21.2578C6.56131 21.3105 6.70499 21.3664 6.86547 21.4249C7.32559 21.5925 7.8586 21.7514 8.48661 21.7514C10.1902 21.7514 11.3326 20.936 11.9956 19.9079C12.6321 18.9207 12.8277 17.7428 12.7236 16.9086C12.6903 16.6417 12.5167 16.4131 12.2685 16.3094Z',
  d9: 'M12.0001 19.8969C12.0016 19.8993 12.0031 19.9016 12.0046 19.904C12.6676 20.9321 13.81 21.7475 15.5136 21.7475C16.1416 21.7475 16.6746 21.5886 17.1347 21.421C17.2952 21.3625 17.4389 21.3066 17.5744 21.2539C17.8555 21.1446 18.1014 21.049 18.3892 20.9721C19.1116 20.7791 20.0319 20.7348 21.6275 21.6484C21.8827 21.7945 22.1997 21.778 22.4384 21.6062C22.6771 21.4343 22.7933 21.1388 22.7356 20.8504C22.3107 18.7263 21.4305 17.2274 20.0316 16.3622C18.8436 15.607 15.7774 14.7177 12.0001 16.1969C8.22273 14.7177 5.15662 15.607 3.96857 16.3622C2.56968 17.2274 1.68945 18.7263 1.2646 20.8504C1.20691 21.1388 1.32311 21.4343 1.56176 21.6062C1.80042 21.778 2.1175 21.7945 2.37271 21.6484C3.96823 20.7348 4.88853 20.7791 5.61101 20.9721C5.89879 21.049 6.1447 21.1446 6.42575 21.2539L6.42576 21.2539C6.56127 21.3066 6.70495 21.3625 6.86544 21.421C7.32555 21.5886 7.85856 21.7475 8.48657 21.7475C10.1902 21.7475 11.3326 20.9321 11.9955 19.904C11.9971 19.9016 11.9986 19.8993 12.0001 19.8969Z',
  d10: 'M14.344 14.6588C15.6366 14.3209 17.1361 13.7002 18.2775 12.5808C19.452 11.4289 20.088 9.90502 20.4256 8.61309C20.533 8.20185 20.6081 7.82217 20.6604 7.49705L20.6087 7.50518C19.8761 7.6218 18.9022 7.84352 17.9152 8.26004L17.1443 6.50277C18.3192 6.00695 19.4573 5.75041 20.2962 5.61686C20.7175 5.54978 21.0684 5.51295 21.3174 5.49278C21.442 5.48268 22.7509 5.44678 22.7509 5.44678C22.7509 5.96777 22.722 6.60403 22.7176 6.6712C22.7089 6.80546 22.6933 6.99558 22.6659 7.23011C22.6111 7.69815 22.5082 8.34855 22.3151 9.08793C21.9326 10.5518 21.1754 12.4441 19.6568 13.9335C19.0456 14.5329 18.368 15.0113 17.679 15.3935C18.6582 15.5585 19.3838 15.8653 19.8168 16.1672C21.1703 17.0312 22.0225 18.5238 22.4344 20.6366L22.749 22.25L21.3573 21.4324C19.8063 20.5212 18.9118 20.5654 18.2095 20.7579C17.9297 20.8346 17.6907 20.93 17.4175 21.039C17.2858 21.0915 17.1461 21.1473 16.9901 21.2056C16.5428 21.3728 16.0247 21.5313 15.4143 21.5313C13.7582 21.5313 12.6477 20.718 12.0033 19.6927L11.999 19.6857L11.9946 19.6927C11.3502 20.718 10.2397 21.5313 8.58367 21.5313C7.97321 21.5313 7.4551 21.3728 7.00784 21.2056C6.85184 21.1473 6.71214 21.0915 6.58041 21.039C6.30723 20.93 6.06819 20.8346 5.78847 20.7579C5.08617 20.5654 4.19158 20.5212 2.64065 21.4324L1.24896 22.25L1.5635 20.6366C1.97695 18.5158 2.83404 17.0199 4.19651 16.1575L4.21166 16.1479L4.22726 16.1391C4.69251 15.8758 5.41664 15.5805 6.30838 15.3855C5.62441 15.0046 4.95194 14.5287 4.34507 13.9335C2.82644 12.4441 2.06921 10.5518 1.68677 9.08793C1.49361 8.34855 1.39077 7.69815 1.33597 7.23011C1.30851 6.99558 1.29296 6.80546 1.2842 6.6712C1.27982 6.60403 1.25092 5.96777 1.25092 5.44678C1.25092 5.44678 2.55984 5.48268 2.68445 5.49278C2.93341 5.51295 3.28432 5.54978 3.70567 5.61686C4.54453 5.75041 5.68259 6.00695 6.85752 6.50277L6.08659 8.26004C5.09958 7.84352 4.12572 7.6218 3.39314 7.50518L3.34139 7.49705C3.39375 7.82217 3.46884 8.20185 3.57628 8.61309C3.9138 9.90502 4.54981 11.4289 5.72432 12.5808C6.86409 13.6986 8.36098 14.3191 9.65234 14.6574C8.97866 13.3763 8.35334 11.6866 8.35334 9.81287C8.35334 7.69844 9.14964 5.81841 9.91314 4.49536C10.2979 3.82866 10.6824 3.28934 10.972 2.91519C11.0746 2.78261 11.5023 2.30516 11.7746 2.00127C11.8871 1.87565 11.9731 1.77969 11.9986 1.75C12.024 1.77969 12.11 1.87565 12.2225 2.00127C12.4948 2.30516 12.9226 2.78261 13.0252 2.91519C13.3147 3.28934 13.6992 3.82866 14.084 4.49536C14.8475 5.81841 15.6438 7.69844 15.6438 9.81287C15.6438 11.6873 15.018 13.3775 14.344 14.6588Z',
};

export const IconYoga03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-03-stroke-rounded IconYoga03StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYoga03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-03-duotone-rounded IconYoga03DuotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconYoga03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-03-twotone-rounded IconYoga03TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconYoga03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-03-solid-rounded IconYoga03SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconYoga03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-03-bulk-rounded IconYoga03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
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

export const IconYoga03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-03-stroke-sharp IconYoga03StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconYoga03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="yoga-03-solid-sharp IconYoga03SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfYoga03: TheIconSelfPack = {
  name: 'Yoga03',
  StrokeRounded: IconYoga03StrokeRounded,
  DuotoneRounded: IconYoga03DuotoneRounded,
  TwotoneRounded: IconYoga03TwotoneRounded,
  SolidRounded: IconYoga03SolidRounded,
  BulkRounded: IconYoga03BulkRounded,
  StrokeSharp: IconYoga03StrokeSharp,
  SolidSharp: IconYoga03SolidSharp,
};