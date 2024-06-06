import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 16C6 12.6863 8.68629 10 12 10C15.3137 10 18 12.6863 18 16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16Z',
  d2: 'M9.5 16C9.5 14.6193 10.6193 13.5 12 13.5C13.3807 13.5 14.5 14.6193 14.5 16C14.5 17.3807 13.3807 18.5 12 18.5C10.6193 18.5 9.5 17.3807 9.5 16Z',
  d3: 'M12 2V10',
  d4: 'M16.6667 12L17.6032 11.1973C18.2904 10.6082 18.6341 10.3137 18.817 9.91584C19 9.51802 19 9.06543 19 8.16026V6C19 4.11438 19 3.17157 18.4142 2.58579C17.8284 2 16.8856 2 15 2H9C7.11438 2 6.17157 2 5.58579 2.58579C5 3.17157 5 4.11438 5 6V8.16026C5 9.06543 5 9.51802 5.18297 9.91584C5.36595 10.3137 5.70958 10.6082 6.39683 11.1973L7.33333 12',
  d5: 'M12 10C8.68629 10 6 12.6863 6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10ZM12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5Z',
  d6: 'M12 2V10M16.6667 12L17.6032 11.1973C18.2904 10.6082 18.6341 10.3137 18.817 9.91584C19 9.51802 19 9.06543 19 8.16026V6C19 4.11438 19 3.17157 18.4142 2.58579C17.8284 2 16.8856 2 15 2H9C7.11438 2 6.17157 2 5.58579 2.58579C5 3.17157 5 4.11438 5 6V8.16026C5 9.06543 5 9.51802 5.18297 9.91584C5.36595 10.3137 5.70958 10.6082 6.39683 11.1973L7.33333 12',
  d7: 'M12 9.25C8.27208 9.25 5.25 12.2721 5.25 16C5.25 19.7279 8.27208 22.75 12 22.75C15.7279 22.75 18.75 19.7279 18.75 16C18.75 12.2721 15.7279 9.25 12 9.25ZM12.001 12.75C10.2061 12.75 8.75098 14.2051 8.75098 16C8.75098 17.7949 10.2061 19.25 12.001 19.25C13.7959 19.25 15.251 17.7949 15.251 16C15.251 14.2051 13.7959 12.75 12.001 12.75Z',
  d8: 'M15.0662 1.25C15.9527 1.24995 16.7165 1.24991 17.3281 1.33215C17.9836 1.42028 18.612 1.61902 19.1217 2.12868C19.6313 2.63835 19.8301 3.2667 19.9182 3.92221C20.0004 4.53386 20.0004 5.29767 20.0003 6.18413V6.18417L20.0005 8.56442V8.56444C20.0018 9.31483 20.0029 9.9814 19.7259 10.5837C19.4489 11.186 18.942 11.619 18.3714 12.1064L17.3178 13.0093C16.8985 13.3687 16.2672 13.3201 15.9078 12.9008C15.5483 12.4815 15.5969 11.8502 16.0162 11.4907L16.9527 10.688C17.7094 10.0394 17.8388 9.9004 17.9089 9.74799C17.979 9.59558 18.0003 9.40695 18.0003 8.41026V6.25C18.0003 5.27893 17.9982 4.65122 17.936 4.18871C17.8777 3.75497 17.7836 3.61902 17.7074 3.5429C17.6313 3.46677 17.4954 3.37263 17.0616 3.31431C16.5991 3.25213 15.9714 3.25 15.0003 3.25H13.0003V10.25C13.0003 10.8023 12.5526 11.25 12.0003 11.25C11.4481 11.25 11.0003 10.8023 11.0003 10.25V3.25H9.00034C8.02926 3.25 7.40155 3.25213 6.93905 3.31431C6.50531 3.37263 6.36936 3.46677 6.29323 3.5429C6.21711 3.61902 6.12296 3.75497 6.06465 4.18871C6.00247 4.65122 6.00034 5.27893 6.00034 6.25V8.41026C6.00034 9.40695 6.02173 9.59558 6.09183 9.74799C6.16193 9.9004 6.29123 10.0394 7.04797 10.688L7.98447 11.4907C8.40379 11.8502 8.45235 12.4815 8.09293 12.9008C7.73351 13.3201 7.10221 13.3687 6.68288 13.0093L5.62922 12.1064C5.05866 11.619 4.55182 11.186 4.2748 10.5837C3.99778 9.9814 3.9989 9.31482 4.00017 8.56442L4.00034 6.18417C4.00029 5.29769 4.00025 4.53387 4.08248 3.92221C4.17061 3.2667 4.36936 2.63835 4.87902 2.12868C5.38868 1.61902 6.01703 1.42028 6.67255 1.33215C7.28421 1.24991 8.04802 1.24995 8.93451 1.25L15.0662 1.25Z',
  d9: 'M5.24902 16C5.24902 12.2721 8.2711 9.25 11.999 9.25C15.7269 9.25 18.749 12.2721 18.749 16C18.749 19.7279 15.7269 22.75 11.999 22.75C8.2711 22.75 5.24902 19.7279 5.24902 16Z',
  d10: 'M8.75 16C8.75 14.2051 10.2051 12.75 12 12.75C13.7949 12.75 15.25 14.2051 15.25 16C15.25 17.7949 13.7949 19.25 12 19.25C10.2051 19.25 8.75 17.7949 8.75 16Z',
  d11: 'M17.3272 1.33215C16.7155 1.24991 15.9517 1.24995 15.0652 1.25H8.93353C8.04705 1.24995 7.28323 1.24991 6.67157 1.33215C6.01606 1.42028 5.38771 1.61902 4.87804 2.12868C4.36838 2.63835 4.16964 3.2667 4.08151 3.92221C3.99927 4.53387 3.99931 5.29769 3.99936 6.18417L3.99919 8.56442C3.99793 9.31482 3.9968 9.9814 4.27383 10.5837C4.55085 11.186 5.05768 11.619 5.62825 12.1064L6.17921 12.5785C6.52052 11.9992 6.94587 11.4753 7.43849 11.0236L7.04699 10.688C6.29025 10.0394 6.16095 9.9004 6.09085 9.74799C6.02075 9.59558 5.99936 9.40695 5.99936 8.41026V6.25C5.99936 5.27893 6.00149 4.65122 6.06367 4.18871C6.12199 3.75497 6.21613 3.61902 6.29226 3.5429C6.36838 3.46677 6.50433 3.37263 6.93807 3.31431C7.40058 3.25213 8.02829 3.25 8.99936 3.25H10.9994V9.32351C11.3256 9.27509 11.6594 9.25 11.999 9.25C12.3389 9.25 12.673 9.27512 12.9994 9.32361V3.25H14.9994C15.9704 3.25 16.5982 3.25213 17.0607 3.31431C17.4944 3.37263 17.6303 3.46677 17.7065 3.5429C17.7826 3.61902 17.8767 3.75497 17.9351 4.18871C17.9972 4.65122 17.9994 5.27893 17.9994 6.25V8.41026C17.9994 9.40695 17.978 9.59558 17.9079 9.74799C17.8378 9.9004 17.7085 10.0394 16.9517 10.688L16.5599 11.0239C17.0525 11.4756 17.4778 11.9995 17.8191 12.5789L18.3705 12.1064C18.941 11.619 19.4479 11.186 19.7249 10.5837C20.0019 9.9814 20.0008 9.31483 19.9995 8.56444L19.9994 6.18417C19.9994 5.2977 19.9995 4.53386 19.9172 3.92221C19.8291 3.2667 19.6303 2.63835 19.1207 2.12868C18.611 1.61902 17.9827 1.42028 17.3272 1.33215Z',
  d12: 'M16.6667 12L19 9.5V2H5V9.5L7.33333 12',
  d13: 'M4.25 1.25H19.75V9.86622L17.229 12.5672L15.8126 11.2453L17.8125 9.10253V3.1875H12.9688V9.96875H11.0312V3.1875H6.1875V9.10253L8.18738 11.2453L6.77096 12.5672L4.25 9.86622V1.25Z',
  d14: 'M12 9.25C8.27208 9.25 5.25 12.2721 5.25 16C5.25 19.7279 8.27208 22.75 12 22.75C15.7279 22.75 18.75 19.7279 18.75 16C18.75 12.2721 15.7279 9.25 12 9.25ZM12 13C10.3431 13 9 14.3431 9 16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16C15 14.3431 13.6569 13 12 13Z',
};

export const IconMedal07StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-07-stroke-rounded IconMedal07StrokeRounded"
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
        strokeLinejoin="round" 
      />
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

export const IconMedal07DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-07-duotone-rounded IconMedal07DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
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

export const IconMedal07TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-07-twotone-rounded IconMedal07TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal07SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-07-solid-rounded IconMedal07SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMedal07BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-07-bulk-rounded IconMedal07BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal07StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-07-stroke-sharp IconMedal07StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedal07SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-07-solid-sharp IconMedal07SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfMedal07: TheIconSelfPack = {
  name: 'Medal07',
  StrokeRounded: IconMedal07StrokeRounded,
  DuotoneRounded: IconMedal07DuotoneRounded,
  TwotoneRounded: IconMedal07TwotoneRounded,
  SolidRounded: IconMedal07SolidRounded,
  BulkRounded: IconMedal07BulkRounded,
  StrokeSharp: IconMedal07StrokeSharp,
  SolidSharp: IconMedal07SolidSharp,
};