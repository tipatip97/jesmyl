import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 20H10C7.17157 20 5.75736 20 4.87868 19.1213C4 18.2426 4 16.8284 4 14V2',
  d2: 'M6 20C9.68373 16.4365 13.8235 11.7106 20 15.2551',
  d3: 'M2 4L14 4C16.8284 4 18.2426 4 19.1213 4.87868C20 5.75736 20 7.17157 20 10L20 22',
  d4: 'M6.72487 19.2934C6.55065 19.4641 6.37764 19.6337 6.20568 19.8011C5.64675 19.6737 5.22187 19.4645 4.87868 19.1213C4 18.2426 4 16.8284 4 14V4H14C16.8284 4 18.2426 4 19.1213 4.87868C20 5.75736 20 7.17157 20 10V15.2572C14.2252 11.9433 10.2308 15.8577 6.72487 19.2934ZM8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z',
  d5: 'M5 2C5 1.44772 4.55229 1 4 1C3.44772 1 3 1.44772 3 2V3H2C1.44772 3 1 3.44772 1 4C1 4.55229 1.44772 5 2 5H3L3 14.0706C2.99997 15.4247 2.99994 16.5413 3.11875 17.4251C3.2435 18.3529 3.51547 19.1723 4.17158 19.8284C4.82768 20.4845 5.64711 20.7565 6.57494 20.8812C7.4587 21.0001 8.57531 21 9.92943 21H19V22C19 22.5523 19.4477 23 20 23C20.5523 23 21 22.5523 21 22V21H22C22.5523 21 23 20.5523 23 20C23 19.4477 22.5523 19 22 19H21L21 9.92946C21 8.57534 21.0001 7.4587 20.8812 6.57494C20.7565 5.64711 20.4845 4.82769 19.8284 4.17158C19.1723 3.51547 18.3529 3.2435 17.4251 3.11875C16.5413 2.99994 15.4247 2.99997 14.0706 3L5 3V2ZM5 5V14C5 15.4425 5.00213 16.4237 5.10092 17.1586C5.19585 17.8646 5.36322 18.1916 5.58579 18.4142C5.80836 18.6368 6.13538 18.8042 6.84143 18.8991C7.57625 18.9979 8.55752 19 10 19H19L19 10C19 8.55752 18.9979 7.57626 18.8991 6.84144C18.8042 6.13538 18.6368 5.80836 18.4142 5.58579C18.1916 5.36322 17.8646 5.19585 17.1586 5.10092C16.4237 5.00213 15.4425 5 14 5L5 5Z',
  d6: 'M20.4977 14.3877C18.8238 13.4271 17.237 12.9997 15.7246 13C14.2152 13.0003 12.8454 13.4266 11.6024 14.0756C9.4874 15.1798 7.63299 16.9996 6.01413 18.5883C5.77243 18.8254 5.53597 19.0575 5.30469 19.2812L5.3054 20.2015L11.2503 21H19V22C19 22.5522 19.4477 23 20 23C20.5522 23 21 22.5522 21 22L21 21H22C22.5523 21 23 20.5522 23 20C23 19.4477 22.5523 19 22 19H21V14.6759L20.4977 14.3877Z',
  d7: 'M6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5Z',
  d8: 'M22 20H4V2',
  d9: 'M2 4H20L20 22',
  d10: 'M6 20L14.5 12L20 15.5',
  d11: 'M10.5 9C10.5 9.82843 9.82843 10.5 9 10.5C8.17157 10.5 7.5 9.82843 7.5 9C7.5 8.17157 8.17157 7.5 9 7.5C9.82843 7.5 10.5 8.17157 10.5 9Z',
  d12: 'M3 20V5H1V3H3V1H5V3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4L21 19H23V21H21V23H19V21H4C3.44772 21 3 20.5523 3 20ZM5 19V5H19L19 14.1575L14.909 11.5542L6.99788 19H5Z',
  d13: 'M11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z',
};

export const IconImageCropStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-crop-stroke-rounded IconImageCropStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <circle 
        cx="8.5" 
        cy="8.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconImageCropDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-crop-duotone-rounded IconImageCropDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <circle 
        cx="8.5" 
        cy="8.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconImageCropTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-crop-twotone-rounded IconImageCropTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <circle 
        opacity="var(--icon-opacity)" 
        cx="8.5" 
        cy="8.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconImageCropSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-crop-solid-rounded IconImageCropSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconImageCropBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-crop-bulk-rounded IconImageCropBulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageCropStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-crop-stroke-sharp IconImageCropStrokeSharp"
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
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageCropSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-crop-solid-sharp IconImageCropSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfImageCrop: TheIconSelfPack = {
  name: 'ImageCrop',
  StrokeRounded: IconImageCropStrokeRounded,
  DuotoneRounded: IconImageCropDuotoneRounded,
  TwotoneRounded: IconImageCropTwotoneRounded,
  SolidRounded: IconImageCropSolidRounded,
  BulkRounded: IconImageCropBulkRounded,
  StrokeSharp: IconImageCropStrokeSharp,
  SolidSharp: IconImageCropSolidSharp,
};