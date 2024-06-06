import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 13L17 17.5M12 13L7 17.5M12 13V8',
  d2: 'M18.1915 16.4456C18.7081 16.1485 18.9664 16 19.25 16C19.5336 16 19.7919 16.1485 20.3085 16.4456L20.9415 16.8097C21.4581 17.1068 21.7164 17.2553 21.8582 17.5C22 17.7447 22 18.0418 22 18.6359V19.3641C22 19.9582 22 20.2553 21.8582 20.5C21.7164 20.7447 21.4581 20.8932 20.9415 21.1903L20.3085 21.5544C19.7919 21.8515 19.5336 22 19.25 22C18.9664 22 18.7081 21.8515 18.1915 21.5544L17.5585 21.1903C17.0419 20.8932 16.7836 20.7447 16.6418 20.5C16.5 20.2553 16.5 19.9582 16.5 19.3641V18.6359C16.5 18.0418 16.5 17.7447 16.6418 17.5C16.7836 17.2553 17.0419 17.1068 17.5585 16.8097L18.1915 16.4456Z',
  d3: 'M3.69152 16.4456C4.2081 16.1485 4.46638 16 4.75 16C5.03362 16 5.2919 16.1485 5.80848 16.4456L6.44152 16.8097C6.9581 17.1068 7.21638 17.2553 7.35819 17.5C7.5 17.7447 7.5 18.0418 7.5 18.6359V19.3641C7.5 19.9582 7.5 20.2553 7.35819 20.5C7.21638 20.7447 6.9581 20.8932 6.44152 21.1903L5.80848 21.5544C5.2919 21.8515 5.03362 22 4.75 22C4.46638 22 4.2081 21.8515 3.69152 21.5544L3.05848 21.1903C2.5419 20.8932 2.28362 20.7447 2.14181 20.5C2 20.2553 2 19.9582 2 19.3641V18.6359C2 18.0418 2 17.7447 2.14181 17.5C2.28362 17.2553 2.5419 17.1068 3.05848 16.8097L3.69152 16.4456Z',
  d4: 'M10.9415 2.44563C11.4581 2.14854 11.7164 2 12 2C12.2836 2 12.5419 2.14854 13.0585 2.44563L13.6915 2.8097C14.2081 3.10679 14.4664 3.25533 14.6082 3.5C14.75 3.74467 14.75 4.04175 14.75 4.63593V5.36407C14.75 5.95825 14.75 6.25533 14.6082 6.5C14.4664 6.74467 14.2081 6.89321 13.6915 7.1903L13.0585 7.55437C12.5419 7.85146 12.2836 8 12 8C11.7164 8 11.4581 7.85146 10.9415 7.55437L10.3085 7.1903C9.7919 6.89321 9.53362 6.74467 9.39181 6.5C9.25 6.25533 9.25 5.95825 9.25 5.36407V4.63593C9.25 4.04175 9.25 3.74467 9.39181 3.5C9.53362 3.25533 9.7919 3.10679 10.3085 2.8097L10.9415 2.44563Z',
  d5: 'M12.999 12.5546L17.668 16.7567L16.3301 18.2433L11.999 14.3454L7.66801 18.2433L6.33008 16.7567L10.999 12.5546V8H12.999V12.5546Z',
  d6: 'M18.4996 15.4278C18.7206 15.3281 18.9648 15.25 19.25 15.25C19.5352 15.25 19.7794 15.3281 20.0004 15.4278C20.199 15.5174 20.4205 15.6448 20.6565 15.7806L20.6824 15.7955L21.3154 16.1596L21.3414 16.1745C21.5773 16.3101 21.7989 16.4375 21.9762 16.5641C22.1733 16.7048 22.3639 16.8769 22.5071 17.1239C22.6503 17.3711 22.7048 17.622 22.7286 17.863C22.7501 18.0796 22.75 18.3347 22.75 18.606V19.394C22.75 19.6653 22.7501 19.9204 22.7286 20.137C22.7048 20.378 22.6503 20.6289 22.5071 20.8761C22.3639 21.1231 22.1733 21.2952 21.9762 21.4359C21.7989 21.5625 21.5773 21.6899 21.3414 21.8255L21.3154 21.8404L20.6824 22.2045L20.6565 22.2194C20.4205 22.3552 20.199 22.4826 20.0004 22.5722C19.7794 22.6719 19.5352 22.75 19.25 22.75C18.9648 22.75 18.7206 22.6719 18.4996 22.5722C18.301 22.4826 18.0795 22.3552 17.8435 22.2194L17.8176 22.2045L17.1587 21.8255C16.9227 21.6899 16.7011 21.5625 16.5238 21.4359C16.3267 21.2952 16.1361 21.1231 15.9929 20.8761C15.8497 20.6289 15.7952 20.378 15.7714 20.137C15.7499 19.9204 15.75 19.6653 15.75 19.394L15.75 19.3641V18.6359L15.75 18.606C15.75 18.3347 15.7499 18.0796 15.7714 17.863C15.7952 17.622 15.8497 17.3711 15.9929 17.1239C16.1361 16.8769 16.3267 16.7048 16.5238 16.5641C16.7011 16.4375 16.9227 16.3101 17.1587 16.1745L17.1587 16.1745L17.1846 16.1596L17.8176 15.7955L17.8435 15.7806L17.8435 15.7806C18.0795 15.6448 18.301 15.5174 18.4996 15.4278Z',
  d7: 'M3.99965 15.4278C4.22058 15.3281 4.46483 15.25 4.75 15.25C5.03518 15.25 5.27943 15.3281 5.50036 15.4278C5.69902 15.5174 5.92052 15.6448 6.1565 15.7806L6.18239 15.7955L6.81544 16.1596L6.84136 16.1745C7.07734 16.3101 7.29888 16.4375 7.47619 16.5641C7.67331 16.7048 7.8639 16.8769 8.00708 17.1239C8.15035 17.3711 8.20478 17.622 8.22863 17.863C8.25006 18.0796 8.25004 18.3347 8.25001 18.606V19.394C8.25004 19.6653 8.25006 19.9204 8.22863 20.137C8.20478 20.378 8.15035 20.6289 8.00708 20.8761C7.8639 21.1231 7.67331 21.2952 7.47619 21.4359C7.29888 21.5625 7.07733 21.6899 6.84135 21.8255L6.81544 21.8404L6.18239 22.2045L6.1565 22.2194C5.92052 22.3552 5.69902 22.4826 5.50036 22.5722C5.27943 22.6719 5.03518 22.75 4.75 22.75C4.46483 22.75 4.22058 22.6719 3.99965 22.5722C3.80099 22.4826 3.57949 22.3552 3.3435 22.2194L3.31762 22.2045L2.65866 21.8255C2.42268 21.6899 2.20113 21.5625 2.02382 21.4359C1.8267 21.2952 1.6361 21.1231 1.49293 20.8761C1.34966 20.6289 1.29523 20.378 1.27138 20.137C1.24995 19.9204 1.24997 19.6653 1.25 19.394L1.25 19.3641V18.6359L1.25 18.606C1.24997 18.3347 1.24995 18.0796 1.27138 17.863C1.29523 17.622 1.34966 17.3711 1.49293 17.1239C1.6361 16.8769 1.8267 16.7048 2.02382 16.5641C2.20113 16.4375 2.42267 16.3101 2.65865 16.1745L2.65865 16.1745L2.68457 16.1596L3.31762 15.7955L3.3435 15.7806L3.34351 15.7806C3.57949 15.6448 3.80099 15.5174 3.99965 15.4278Z',
  d8: 'M11.2496 1.42778C11.4706 1.32809 11.7148 1.25 12 1.25C12.2852 1.25 12.5294 1.32809 12.7504 1.42778C12.949 1.51743 13.1705 1.64484 13.4065 1.78059L13.4324 1.79548L14.0654 2.15955L14.0914 2.17446C14.3273 2.31014 14.5489 2.43752 14.7262 2.56411C14.9233 2.70484 15.1139 2.87688 15.2571 3.12391C15.4003 3.37109 15.4548 3.62199 15.4786 3.86304C15.5001 4.07959 15.5 4.33469 15.5 4.60596V5.39404C15.5 5.66531 15.5001 5.92041 15.4786 6.13696C15.4548 6.37801 15.4003 6.62891 15.2571 6.87609C15.1139 7.12312 14.9233 7.29516 14.7262 7.43589C14.5489 7.56248 14.3273 7.68986 14.0914 7.82554L14.0654 7.84045L13.4324 8.20452L13.4065 8.21941C13.1705 8.35516 12.949 8.48257 12.7504 8.57222C12.5294 8.67191 12.2852 8.75 12 8.75C11.7148 8.75 11.4706 8.67191 11.2496 8.57222C11.051 8.48257 10.8295 8.35516 10.5935 8.21941L10.5676 8.20452L9.90866 7.82554C9.67268 7.68986 9.45113 7.56248 9.27382 7.43589C9.0767 7.29516 8.8861 7.12312 8.74293 6.87609C8.59966 6.62891 8.54523 6.37801 8.52138 6.13696C8.49995 5.92041 8.49997 5.66532 8.5 5.39404L8.5 5.36407V4.63593L8.5 4.60596C8.49997 4.33468 8.49995 4.07959 8.52138 3.86304C8.54523 3.62199 8.59966 3.37109 8.74293 3.12391C8.8861 2.87688 9.0767 2.70484 9.27382 2.56411C9.45113 2.43752 9.67267 2.31014 9.90865 2.17446L9.90865 2.17446L9.93457 2.15955L10.5676 1.79548L10.5935 1.78059L10.5935 1.78059C10.8295 1.64484 11.051 1.51743 11.2496 1.42778Z',
  d9: 'M11.0011 8.44923V12.5559L6.92578 16.2237C7.13037 16.3416 7.321 16.4538 7.47726 16.5654C7.67439 16.7061 7.86498 16.8781 8.00816 17.1252C8.12948 17.3345 8.18709 17.5465 8.21638 17.7529L12.0011 14.3466L15.7858 17.7528C15.8151 17.5464 15.8727 17.3345 15.994 17.1252C16.1372 16.8781 16.3278 16.7061 16.5249 16.5654C16.6812 16.4538 16.8718 16.3416 17.0764 16.2237L13.0011 12.5559V8.44922C12.9146 8.49546 12.8312 8.53751 12.7514 8.57349C12.5305 8.67318 12.2863 8.75127 12.0011 8.75127C11.7159 8.75127 11.4717 8.67318 11.2507 8.57349C11.171 8.53752 11.0876 8.49547 11.0011 8.44923Z',
  d10: 'M14.5008 3.5L11.9996 2L9.50118 3.5L9.5 6.5L11.9996 8L14.5008 6.5V3.5Z',
  d11: 'M7.00083 17.5L4.49965 16L2.00118 17.5L2 20.5L4.49965 22L7.00083 20.5V17.5Z',
  d12: 'M22.0008 17.5L19.4996 16L17.0012 17.5L17 20.5L19.4996 22L22.0008 20.5V17.5Z',
  d13: 'M12.999 12.6793L17.668 16.8813L16.3301 18.3679L11.999 14.47L7.66801 18.3679L6.33008 16.8813L10.999 12.6793V8.12463H12.999V12.6793Z',
  d14: 'M11.9996 1.25L15.251 3.19991V7.04941L11.9997 8.99926L8.75 7.04917L8.75152 3.20005L11.9996 1.25Z',
  d15: 'M4.4996 15.0007L7.751 16.9506V20.8001L4.49969 22.75L1.25 20.7999L1.25152 16.9508L4.4996 15.0007Z',
  d16: 'M19.4996 15.0007L22.751 16.9506V20.8001L19.4997 22.75L16.25 20.7999L16.2515 16.9508L19.4996 15.0007Z',
};

export const Icon3DScaleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-scale-stroke-rounded Icon3DScaleStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const Icon3DScaleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-scale-duotone-rounded Icon3DScaleDuotoneRounded"
    >
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const Icon3DScaleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-scale-twotone-rounded Icon3DScaleTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const Icon3DScaleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-scale-solid-rounded Icon3DScaleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const Icon3DScaleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-scale-bulk-rounded Icon3DScaleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const Icon3DScaleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-scale-stroke-sharp Icon3DScaleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const Icon3DScaleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3-d-scale-solid-sharp Icon3DScaleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOf3DScale: TheIconSelfPack = {
  name: '3DScale',
  StrokeRounded: Icon3DScaleStrokeRounded,
  DuotoneRounded: Icon3DScaleDuotoneRounded,
  TwotoneRounded: Icon3DScaleTwotoneRounded,
  SolidRounded: Icon3DScaleSolidRounded,
  BulkRounded: Icon3DScaleBulkRounded,
  StrokeSharp: Icon3DScaleStrokeSharp,
  SolidSharp: Icon3DScaleSolidSharp,
};