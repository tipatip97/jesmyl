import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.26934 15.084C3.9629 13.6266 4.30968 12.8978 4.91395 12.4765C4.96276 12.4425 5.01259 12.4101 5.06338 12.3795C5.69228 12 6.46152 12 8 12C9.53848 12 10.3077 12 10.9366 12.3795C10.9874 12.4101 11.0372 12.4425 11.086 12.4765C11.6903 12.8978 12.0371 13.6266 12.7307 15.084C13.7648 17.2572 14.2819 18.3438 13.8433 19.1425C13.8268 19.1724 13.8095 19.2018 13.7914 19.2306C13.3077 20 12.1613 20 9.86867 20H6.13133C3.83865 20 2.69231 20 2.20859 19.2306C2.19046 19.2018 2.17317 19.1724 2.15674 19.1425C1.71814 18.3438 2.23521 17.2572 3.26934 15.084Z',
  d2: 'M14.5469 12.0207C14.9432 12 15.4158 12 15.9989 12C17.5374 12 18.3067 12 18.9356 12.3795C18.9863 12.4101 19.0362 12.4425 19.085 12.4765C19.6893 12.8978 20.036 13.6266 20.7296 15.084C21.7637 17.2572 22.2808 18.3438 21.8422 19.1425C21.8258 19.1724 21.8085 19.2018 21.7904 19.2306C21.3066 20 20.1603 20 17.8676 20H16.7391',
  d3: 'M17.6073 9C17.3908 8.47153 17.0923 7.84427 16.7306 7.08405C16.037 5.62657 15.6902 4.89783 15.086 4.4765C15.0372 4.44247 14.9873 4.41011 14.9365 4.37946C14.3076 4 13.5384 4 11.9999 4C10.4614 4 9.69221 4 9.06331 4.37946C9.01251 4.41011 8.96268 4.44247 8.91388 4.4765C8.30961 4.89783 7.96282 5.62657 7.26926 7.08405C6.9075 7.84427 6.60901 8.47153 6.39258 9',
  d4: 'M20.7296 15.0841L20.7296 15.084L20.7296 15.084C20.036 13.6266 19.6893 12.8978 19.085 12.4765C19.0362 12.4425 18.9863 12.4101 18.9356 12.3795C18.3067 12 17.5374 12 15.9989 12C15.4158 12 14.9432 12 14.5469 12.0207L16.7391 20H17.8676C20.1603 20 21.3066 20 21.7904 19.2306C21.8085 19.2018 21.8258 19.1724 21.8422 19.1425C22.2808 18.3438 21.7637 17.2572 20.7296 15.0841Z',
  d5: 'M8.03793 11.25C8.77495 11.25 9.38422 11.25 9.88582 11.3013C10.4135 11.3554 10.8822 11.4707 11.3241 11.7373C11.3891 11.7765 11.4527 11.8178 11.515 11.8613C11.9372 12.1556 12.2406 12.541 12.5189 13.0073C12.786 13.4548 13.0588 14.0282 13.3925 14.7294L13.433 14.8145L13.433 14.8145C13.9288 15.8562 14.3348 16.7096 14.5542 17.4022C14.7793 18.1128 14.8686 18.8335 14.5007 19.5035C14.4772 19.5463 14.4524 19.5885 14.4264 19.6298C14.0133 20.2869 13.3407 20.5361 12.621 20.6453C11.9309 20.7501 11.0243 20.75 9.93165 20.75H6.0684C4.97571 20.75 4.06913 20.7501 3.37908 20.6453C2.65938 20.5361 1.98677 20.2869 1.57368 19.6298C1.54767 19.5885 1.52289 19.5463 1.49937 19.5035C1.13143 18.8335 1.22072 18.1128 1.4458 17.4022C1.6652 16.7095 2.0713 15.8562 2.56706 14.8145L2.60753 14.7294C2.94122 14.0282 3.21404 13.4548 3.48115 13.0073C3.75949 12.541 4.06286 12.1556 4.48501 11.8613C4.54731 11.8178 4.61098 11.7765 4.67594 11.7373C5.11786 11.4707 5.58659 11.3554 6.11423 11.3013C6.61583 11.25 7.2251 11.25 7.96211 11.25H7.96213H8.03792H8.03793Z',
  d6: 'M12.0376 3.25H11.9618C11.2248 3.24999 10.6155 3.24997 10.1139 3.30134C9.58624 3.35536 9.11751 3.47066 8.67559 3.7373C8.61063 3.7765 8.54696 3.81785 8.48466 3.86129C8.06251 4.15563 7.75914 4.54101 7.4808 5.00733C7.21369 5.45484 6.94087 6.02817 6.60718 6.72943L6.5667 6.81448C6.07094 7.85622 5.66485 8.70955 5.44544 9.40223C5.40878 9.51798 5.37572 9.63399 5.34766 9.75001L18.6517 9.75001C18.6236 9.63399 18.5906 9.51798 18.5539 9.40223C18.3345 8.70956 17.9284 7.85624 17.4327 6.81452L17.3922 6.72944C17.0585 6.02817 16.7857 5.45484 16.5185 5.00733C16.2402 4.54101 15.9368 4.15563 15.5147 3.86129C15.4524 3.81785 15.3887 3.7765 15.3237 3.7373C14.8818 3.47066 14.4131 3.35536 13.8855 3.30134C13.3839 3.24997 12.7746 3.24999 12.0376 3.25Z',
  d7: 'M15.468 20.75H18.1338C19.2265 20.75 20.1331 20.7501 20.8232 20.6453C21.5429 20.5361 22.2155 20.2869 22.6286 19.6298C22.6546 19.5885 22.6794 19.5463 22.7029 19.5035C23.0708 18.8335 22.9815 18.1128 22.7564 17.4022C22.537 16.7096 22.131 15.8562 21.6352 14.8145L21.5947 14.7294C21.261 14.0282 20.9882 13.4548 20.7211 13.0073C20.4427 12.541 20.1394 12.1556 19.7172 11.8613C19.6549 11.8179 19.5913 11.7765 19.5263 11.7373C19.0844 11.4707 18.6156 11.3554 18.088 11.3013C17.5864 11.25 16.9772 11.25 16.2401 11.25H16.1643C15.4273 11.25 14.818 11.25 14.3164 11.3013C13.9595 11.3379 13.6296 11.4025 13.3167 11.5229C13.504 11.7575 13.6641 11.9993 13.8068 12.2383C14.1104 12.7471 14.409 13.3746 14.723 14.0345L14.8258 14.2505C15.2897 15.2251 15.7331 16.1568 15.9841 16.9491C16.2513 17.7927 16.4812 19.0129 15.8153 20.2253C15.7776 20.294 15.7379 20.3616 15.6961 20.428C15.6239 20.5428 15.5477 20.65 15.468 20.75Z',
  d8: 'M2.00049 20H14.0005L11.5005 12H4.50049L2.00049 20Z',
  d9: 'M17.5005 9.5L15.5005 4H8.50049L6.50049 9.5',
  d10: 'M16.5005 20H22.0005L19.5005 12H14.0005',
  d11: 'M3.78463 11.7763C3.88248 11.4632 4.17246 11.25 4.50049 11.25H11.5005C11.8285 11.25 12.1185 11.4632 12.2164 11.7763L14.7164 19.7763C14.7875 20.004 14.7461 20.252 14.6048 20.4443C14.4634 20.6365 14.2391 20.75 14.0005 20.75H2.00049C1.76191 20.75 1.53755 20.6365 1.39623 20.4443C1.2549 20.252 1.21347 20.004 1.28463 19.7763L3.78463 11.7763Z',
  d12: 'M13.6218 11.25L16.1481 19.3289C16.2948 19.7986 16.282 20.297 16.1218 20.75H22.0005C22.2391 20.75 22.4634 20.6365 22.6048 20.4443C22.7461 20.252 22.7875 20.004 22.7164 19.7763L20.2164 11.7763C20.1185 11.4632 19.8285 11.25 19.5005 11.25H13.6218Z',
  d13: 'M8.49988 3.25C8.17184 3.25 7.88187 3.46319 7.78402 3.77629L5.91724 9.75H18.0825L16.2157 3.77629C16.1179 3.46319 15.8279 3.25 15.4999 3.25H8.49988Z',
};

export const IconGoldIngotsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gold-ingots-stroke-rounded IconGoldIngotsStrokeRounded"
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

export const IconGoldIngotsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gold-ingots-duotone-rounded IconGoldIngotsDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconGoldIngotsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gold-ingots-twotone-rounded IconGoldIngotsTwotoneRounded"
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

export const IconGoldIngotsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gold-ingots-solid-rounded IconGoldIngotsSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconGoldIngotsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gold-ingots-bulk-rounded IconGoldIngotsBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGoldIngotsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gold-ingots-stroke-sharp IconGoldIngotsStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoldIngotsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gold-ingots-solid-sharp IconGoldIngotsSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGoldIngots: TheIconSelfPack = {
  name: 'GoldIngots',
  StrokeRounded: IconGoldIngotsStrokeRounded,
  DuotoneRounded: IconGoldIngotsDuotoneRounded,
  TwotoneRounded: IconGoldIngotsTwotoneRounded,
  SolidRounded: IconGoldIngotsSolidRounded,
  BulkRounded: IconGoldIngotsBulkRounded,
  StrokeSharp: IconGoldIngotsStrokeSharp,
  SolidSharp: IconGoldIngotsSolidSharp,
};