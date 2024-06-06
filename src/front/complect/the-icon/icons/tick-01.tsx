import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7',
  d2: 'M8.5 18C8.5 18 14.0588 8.83333 19 7',
  d3: 'M19.9375 6.15241C20.1297 6.6702 19.8657 7.2457 19.3479 7.43782C18.289 7.83068 17.1274 8.64841 15.9514 9.72885C14.7866 10.799 13.6641 12.074 12.6793 13.3107C11.6965 14.5449 10.8631 15.7254 10.2751 16.5981C9.98143 17.0339 9.74984 17.3917 9.59237 17.6394C9.51365 17.7632 9.45351 17.8594 9.41344 17.924L9.36861 17.9966L9.35785 18.0142L9.35545 18.0182C9.17177 18.3209 8.84114 18.5048 8.48701 18.5002C8.13282 18.4956 7.8075 18.304 7.63176 17.9964C6.68252 16.3352 5.89836 15.5873 5.42654 15.257C5.19208 15.0929 5.03257 15.0302 4.96242 15.0079C4.94586 15.0026 4.93369 14.9994 4.92605 14.9976C4.4083 14.9597 4 14.5277 4 14.0003C4 13.448 4.44772 13.0003 5 13.0003C5.118 13.0082 5.39696 13.0397 5.56883 13.102C5.84243 13.1891 6.18292 13.3452 6.57346 13.6185C7.13325 14.0104 7.79014 14.6389 8.5059 15.6453C8.54176 15.5916 8.57862 15.5367 8.61646 15.4805C9.22514 14.5772 10.0902 13.3515 11.1148 12.0648C12.1374 10.7807 13.3311 9.42028 14.5983 8.25607C15.8543 7.10213 17.2404 6.08653 18.6521 5.56272C19.1699 5.37061 19.7454 5.63462 19.9375 6.15241Z',
  d4: 'M4 14.5C4 13.9477 4.44772 13.5 5 13.5C5.56536 13.5019 6.12449 13.804 6.57346 14.1183C7.35164 14.663 8.31748 15.665 9.36824 17.5039C9.64225 17.9834 9.47566 18.5942 8.99614 18.8682C8.51662 19.1423 7.90577 18.9757 7.63176 18.4961C6.68252 16.835 5.89836 16.087 5.42654 15.7567C5.13674 15.5539 4.96606 15.5069 4.92605 15.4973C4.4083 15.4595 4 15.0274 4 14.5Z',
  d5: 'M19.9374 6.65241C20.1296 7.1702 19.8656 7.7457 19.3478 7.93782C18.2889 8.33068 17.1273 9.14841 15.9513 10.2289C14.7865 11.299 13.664 12.574 12.6792 13.8107C11.6964 15.0449 10.863 16.2254 10.275 17.0981C9.96 17.5656 9.64863 18.0366 9.35536 18.5182C9.06894 18.9903 8.45357 19.1417 7.98138 18.8553C7.50914 18.569 7.35847 17.954 7.64484 17.4817C7.73044 17.3426 7.8169 17.2041 7.90455 17.0663C8.07037 16.8055 8.31168 16.4327 8.61636 15.9805C9.22504 15.0772 10.0901 13.8515 11.1147 12.5648C12.1373 11.2807 13.331 9.92028 14.5982 8.75607C15.8542 7.60213 17.2403 6.58653 18.652 6.06272C19.1698 5.87061 19.7453 6.13462 19.9374 6.65241Z',
  d6: 'M5 14L8.5 17.5L19 6.5',
  d7: 'M8.44242 15.6382L18.3058 5.5L19.7525 6.88095L8.4757 18.4999L4.25195 14.2762L5.66617 12.862L8.44242 15.6382Z',
};

export const IconTick01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-01-stroke-rounded IconTick01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTick01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-01-duotone-rounded IconTick01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTick01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-01-twotone-rounded IconTick01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconTick01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-01-solid-rounded IconTick01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTick01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-01-bulk-rounded IconTick01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTick01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-01-stroke-sharp IconTick01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTick01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-01-solid-sharp IconTick01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTick01: TheIconSelfPack = {
  name: 'Tick01',
  StrokeRounded: IconTick01StrokeRounded,
  DuotoneRounded: IconTick01DuotoneRounded,
  TwotoneRounded: IconTick01TwotoneRounded,
  SolidRounded: IconTick01SolidRounded,
  BulkRounded: IconTick01BulkRounded,
  StrokeSharp: IconTick01StrokeSharp,
  SolidSharp: IconTick01SolidSharp,
};