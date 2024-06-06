import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.0195 8C9.32545 7.06743 8.14285 5.76203 8.60385 4.47631C8.91057 3.62086 11.0067 2 12 2C12.9933 2 15.0894 3.62086 15.3962 4.47631C15.8572 5.76203 14.6745 7.06743 13.9805 8',
  d2: 'M8 8H16',
  d3: 'M8 13H16',
  d4: 'M7.5 18H16.5',
  d5: 'M9.5 8L7 22M14.5 8L17 22',
  d6: 'M5 22H19',
  d7: 'M19 7.5L21 7M19 10.5L21 11',
  d8: 'M5 7.5L3 7M5 10.5L3 11',
  d9: 'M16.2863 18H7.71484L8.6077 13H15.3934L16.2863 18Z',
  d10: 'M8.60385 4.47631C8.14285 5.76203 9.32545 7.06743 10.0195 8H13.9805C14.6745 7.06743 15.8572 5.76203 15.3962 4.47631C15.0894 3.62086 12.9933 2 12 2C11.0067 2 8.91057 3.62086 8.60385 4.47631Z',
  d11: 'M15.7819 6.72595C15.6861 6.904 15.5782 7.07988 15.4655 7.25H16C16.4142 7.25 16.75 7.58579 16.75 8C16.75 8.41421 16.4142 8.75 16 8.75H13.9883H13.9716H10.0284H10.0117H8C7.58579 8.75 7.25 8.41421 7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H8.53452C8.42182 7.07988 8.31386 6.904 8.21806 6.72595C7.85172 6.04507 7.56216 5.15942 7.89786 4.22317C8.02768 3.86109 8.30286 3.5081 8.57698 3.21562C8.86719 2.90597 9.22336 2.59419 9.59599 2.31621C9.96821 2.03853 10.3735 1.78217 10.7662 1.59176C11.1392 1.41094 11.5802 1.25 12 1.25C12.4198 1.25 12.8608 1.41094 13.2338 1.59176C13.6265 1.78217 14.0318 2.03853 14.404 2.31621C14.7766 2.59419 15.1328 2.90597 15.423 3.21562C15.6971 3.5081 15.9723 3.86109 16.1021 4.22318C16.4378 5.15942 16.1483 6.04507 15.7819 6.72595Z',
  d12: 'M4.25 22C4.25 21.5858 4.58579 21.25 5 21.25H19C19.4142 21.25 19.75 21.5858 19.75 22C19.75 22.4142 19.4142 22.75 19 22.75H5C4.58579 22.75 4.25 22.4142 4.25 22Z',
  d13: 'M21.7277 6.81828C21.8281 7.22012 21.5838 7.62732 21.182 7.72778L19.182 8.22778C18.7801 8.32825 18.3729 8.08393 18.2724 7.68208C18.172 7.28023 18.4163 6.87303 18.8182 6.77257L20.8182 6.27257C21.22 6.17211 21.6272 6.41643 21.7277 6.81828ZM18.2724 10.3183C18.3729 9.91643 18.7801 9.67211 19.182 9.77257L21.182 10.2726C21.5838 10.373 21.8281 10.7802 21.7277 11.1821C21.6272 11.5839 21.22 11.8282 20.8182 11.7278L18.8182 11.2278C18.4163 11.1273 18.172 10.7201 18.2724 10.3183Z',
  d14: 'M2.27245 6.81828C2.37291 6.41643 2.78011 6.17211 3.18196 6.27257L5.18196 6.77257C5.5838 6.87303 5.82812 7.28023 5.72766 7.68208C5.6272 8.08393 5.22 8.32825 4.81815 8.22778L2.81815 7.72778C2.41631 7.62732 2.17199 7.22012 2.27245 6.81828ZM5.72766 10.3183C5.82812 10.7201 5.5838 11.1273 5.18196 11.2278L3.18196 11.7278C2.78011 11.8282 2.37291 11.5839 2.27245 11.1821C2.17199 10.7802 2.41631 10.373 2.81815 10.2726L4.81815 9.77257C5.22 9.67211 5.6272 9.91643 5.72766 10.3183Z',
  d15: 'M8.63217 10C8.48683 10 8.36239 10.1042 8.33685 10.2473L7.95424 12.3898C7.93235 12.5124 8.0266 12.625 8.15113 12.625L15.8489 12.625C15.9734 12.625 16.0677 12.5124 16.0458 12.3898L15.6632 10.2473C15.6376 10.1042 15.5132 10 15.3678 10L8.63217 10ZM16.3851 14.2898C16.368 14.1945 16.2851 14.125 16.1882 14.125L7.81184 14.125C7.71495 14.125 7.63199 14.1945 7.61496 14.2898L7.23996 16.3898C7.21807 16.5124 7.31232 16.625 7.43684 16.625H16.5632C16.6877 16.625 16.7819 16.5124 16.7601 16.3898L16.3851 14.2898ZM17.0993 18.2898C17.0823 18.1945 16.9994 18.125 16.9025 18.125H7.09755C7.00066 18.125 6.9177 18.1945 6.90067 18.2898L6.26169 21.8682C6.22266 22.0867 6.28245 22.3113 6.42495 22.4815C6.56745 22.6517 6.77803 22.75 7.00001 22.75H17C17.222 22.75 17.4326 22.6517 17.5751 22.4815C17.7176 22.3113 17.7773 22.0867 17.7383 21.8682L17.0993 18.2898Z',
  d16: 'M8.63205 10C8.48671 10 8.36227 10.1042 8.33672 10.2473L7.95412 12.3898C7.93223 12.5124 8.02648 12.625 8.15101 12.625H15.8488C15.9733 12.625 16.0675 12.5124 16.0456 12.3898L15.663 10.2473C15.6375 10.1042 15.5131 10 15.3677 10H8.63205Z',
  d17: 'M16.3849 14.2898C16.3679 14.1945 16.2849 14.125 16.188 14.125H7.81172C7.71482 14.125 7.63187 14.1945 7.61483 14.2898L7.23983 16.3898C7.21794 16.5124 7.31219 16.625 7.43672 16.625H16.563C16.6876 16.625 16.7818 16.5124 16.7599 16.3898L16.3849 14.2898Z',
  d18: 'M17.0992 18.2898C17.0822 18.1945 16.9992 18.125 16.9023 18.125H7.09743C7.00054 18.125 6.91758 18.1945 6.90055 18.2898L6.26156 21.8682C6.22254 22.0867 6.28233 22.3113 6.42483 22.4815C6.56733 22.6517 6.7779 22.75 6.99988 22.75H16.9999C17.2219 22.75 17.4324 22.6517 17.5749 22.4815C17.7174 22.3113 17.7772 22.0867 17.7382 21.8682L17.0992 18.2898Z',
  d19: 'M10.0195 8C9.32545 7.06743 8.14285 5.76203 8.60385 4.47631C8.91057 3.62086 12 2 12 2C12 2 15.0894 3.62086 15.3962 4.47631C15.8572 5.76203 14.6745 7.06743 13.9805 8',
  d20: 'M9 13H15',
  d21: 'M8 18H16',
  d22: 'M9.5 8L7 21.5M14.5 8L17 21.5',
  d23: 'M20.0002 7.72767L18.0002 8.22767L17.6364 6.77246L19.6364 6.27246L20.0002 7.72767ZM19.6364 11.7277L17.6364 11.2277L18.0002 9.77246L20.0002 10.2725L19.6364 11.7277Z',
  d24: 'M4.36368 6.27246L6.36368 6.77246L5.99988 8.22767L3.99988 7.72767L4.36368 6.27246ZM3.99988 10.2725L5.99988 9.77246L6.36368 11.2277L4.36368 11.7277L3.99988 10.2725Z',
  d25: 'M7.99988 8.75H15.9999V7.25H15.5291C15.6188 7.11034 15.7045 6.96733 15.7822 6.8229C16.1486 6.14202 16.4381 5.25638 16.1024 4.32013C16.0157 4.07816 15.8588 3.87347 15.7194 3.71889C15.5714 3.55484 15.3946 3.39491 15.2113 3.24497C14.8444 2.94481 14.4004 2.64337 13.9839 2.38024C13.5642 2.11511 13.1566 1.87895 12.855 1.70962C12.7038 1.62474 12.0884 1.29763 12.0003 1.25C11.9122 1.29763 11.2967 1.62474 11.1456 1.70962C10.844 1.87895 10.4364 2.11511 10.0167 2.38024C9.60017 2.64337 9.15615 2.94481 8.78927 3.24497C8.60601 3.39491 8.42922 3.55484 8.28124 3.71889C8.1418 3.87347 7.98491 4.07816 7.89815 4.32013C7.56246 5.25638 7.85202 6.14202 8.21836 6.8229C8.29607 6.96733 8.38178 7.11034 8.47154 7.25H7.99988V8.75Z',
  d26: 'M4.99988 22.75H18.9999V21.25H17.7163L17.2534 18.75H6.74639L6.28343 21.25H4.99988V22.75Z',
  d27: 'M7.67232 13.75H16.3274L16.9756 17.25H7.02417L7.67232 13.75Z',
  d28: 'M8.32047 10.25H15.6793L16.0497 12.25H7.9501L8.32047 10.25Z',
};

export const IconLighthouseStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lighthouse-stroke-rounded IconLighthouseStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLighthouseDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lighthouse-duotone-rounded IconLighthouseDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLighthouseTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lighthouse-twotone-rounded IconLighthouseTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLighthouseSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lighthouse-solid-rounded IconLighthouseSolidRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLighthouseBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lighthouse-bulk-rounded IconLighthouseBulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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
      <g 
        opacity="var(--icon-opacity)">
      <path 
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
      </g>
    </TheIconWrapper>
  );
};

export const IconLighthouseStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lighthouse-stroke-sharp IconLighthouseStrokeSharp"
    >
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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

export const IconLighthouseSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lighthouse-solid-sharp IconLighthouseSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLighthouse: TheIconSelfPack = {
  name: 'Lighthouse',
  StrokeRounded: IconLighthouseStrokeRounded,
  DuotoneRounded: IconLighthouseDuotoneRounded,
  TwotoneRounded: IconLighthouseTwotoneRounded,
  SolidRounded: IconLighthouseSolidRounded,
  BulkRounded: IconLighthouseBulkRounded,
  StrokeSharp: IconLighthouseStrokeSharp,
  SolidSharp: IconLighthouseSolidSharp,
};