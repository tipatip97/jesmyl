import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M16 22C15.3805 19.7749 13.9345 17.7821 11.8765 16.3342C9.65761 14.7729 6.87163 13.9466 4.01569 14.0027C3.67658 14.0019 3.33776 14.0127 3 14.0351',
  d3: 'M13 18C14.7015 16.6733 16.5345 15.9928 18.3862 16.0001C19.4362 15.999 20.4812 16.2216 21.5 16.6617',
  d4: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 14.0017 21.5 15.5561 21.3758 16.7873C20.3187 16.2356 19.2279 15.9559 18.1313 15.9571C16.5568 15.9504 14.9969 16.5163 13.5312 17.6229L11.8762 16.3342C9.65727 14.7729 6.87129 13.9466 4.01535 14.0027C3.67624 14.0019 3.33742 14.0127 2.99966 14.0351H2.5062C2.5 13.4132 2.5 12.7369 2.5 12ZM16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9Z',
  d5: 'M11.4255 2H11.5745C13.7504 1.99998 15.4852 1.99996 16.8453 2.18282C18.2497 2.37164 19.4035 2.77175 20.3159 3.68414C21.2283 4.59653 21.6284 5.75033 21.8172 7.15471C22 8.51485 22 10.2496 22 12.4256V12.5744C22 14.7504 22 16.4851 21.8172 17.8453C21.6284 19.2497 21.2283 20.4035 20.3159 21.3159C19.4035 22.2283 18.2497 22.6284 16.8453 22.8172C15.4851 23 13.7504 23 11.5744 23H11.4256C9.24959 23 7.51485 23 6.15471 22.8172C4.75033 22.6284 3.59653 22.2283 2.68414 21.3159C1.77175 20.4035 1.37164 19.2497 1.18282 17.8453C0.999958 16.4852 0.999977 14.7504 1 12.5745V12.4255C0.999977 10.2496 0.999958 8.51485 1.18282 7.15471C1.37164 5.75033 1.77175 4.59653 2.68414 3.68414C3.59653 2.77175 4.75033 2.37164 6.15471 2.18282C7.51485 1.99996 9.24957 1.99998 11.4255 2ZM6.42121 4.16499C5.2386 4.32399 4.5772 4.6195 4.09835 5.09835C3.6195 5.5772 3.32399 6.2386 3.16499 7.42121C3.00212 8.63258 3 10.2326 3 12.5C3 14.7674 3.00212 16.3674 3.16499 17.5788C3.32399 18.7614 3.6195 19.4228 4.09835 19.9017C4.5772 20.3805 5.2386 20.676 6.42121 20.835C7.63258 20.9979 9.23256 21 11.5 21C13.7674 21 15.3674 20.9979 16.5788 20.835C17.7614 20.676 18.4228 20.3805 18.9017 19.9017C19.3805 19.4228 19.676 18.7614 19.835 17.5788C19.9979 16.3674 20 14.7674 20 12.5C20 10.2326 19.9979 8.63258 19.835 7.42121C19.676 6.2386 19.3805 5.5772 18.9017 5.09835C18.4228 4.6195 17.7614 4.32399 16.5788 4.16499C15.3674 4.00212 13.7674 4 11.5 4C9.23256 4 7.63258 4.00212 6.42121 4.16499Z',
  d6: 'M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z',
  d7: 'M3.86474 13.2527C6.67775 13.1952 9.42747 14.072 11.624 15.7364C13.6525 17.2734 15.0902 19.3925 15.7153 21.7708C15.7731 21.9907 15.728 22.2249 15.5927 22.4077C15.4574 22.5904 15.2465 22.7019 15.0193 22.7108C14.0208 22.75 12.8581 22.75 11.5126 22.75H11.4428C9.2521 22.75 7.53143 22.75 6.18802 22.5694C4.81137 22.3843 3.71911 21.9973 2.86091 21.1391C2.11505 20.3932 1.72174 19.4783 1.50986 18.3428C1.30237 17.2309 1.25969 15.8523 1.25001 14.1397C1.2479 13.7655 1.5219 13.447 1.8922 13.3932C2.54466 13.2985 3.20417 13.2514 3.86474 13.2527ZM14.5687 16.4582C14.3393 16.1904 14.4291 15.77 14.7648 15.6622C15.622 15.387 16.4998 15.2468 17.3878 15.2501C18.7039 15.249 20.0027 15.5669 21.246 16.1805C21.5202 16.3158 21.6848 16.6039 21.6621 16.9088C21.5267 18.7226 21.1763 20.1024 20.1396 21.1391C19.3573 21.9214 18.3806 22.3122 17.1712 22.5154C17.264 22.1502 17.2647 21.7629 17.1666 21.3894C16.688 19.5687 15.7945 17.8893 14.5687 16.4582Z',
  d8: 'M21 21V3H3V21H21Z',
  d9: 'M15 21C14.4281 18.7749 13.0934 16.7821 11.1937 15.3342C9.14549 13.7729 6.57381 12.9466 3.93756 13.0027C3.62454 13.0019 3.31177 13.0127 3 13.0351',
  d10: 'M13 18C14.6014 16.6733 16.3266 15.9928 18.0694 16.0001C19.0576 15.999 20.0412 16.2216 21 16.6617',
  d11: 'M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3ZM4 4V12.2514C6.77422 12.2097 9.4821 13.0865 11.6484 14.7377C13.4445 16.1068 14.7743 17.937 15.4826 20H17.0587C16.6174 18.5155 15.899 17.1317 14.9492 15.9091C15.959 15.4721 17.0064 15.2459 18.0719 15.2501C18.7212 15.2495 19.3657 15.3356 20 15.5047V4H4Z',
};

export const IconImage02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-02-stroke-rounded IconImage02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="16.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImage02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-02-duotone-rounded IconImage02DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="16.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImage02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-02-twotone-rounded IconImage02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="16.5" 
        cy="7.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImage02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-02-solid-rounded IconImage02SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImage02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-02-bulk-rounded IconImage02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconImage02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-02-stroke-sharp IconImage02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="15.5" 
        cy="8.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconImage02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-02-solid-sharp IconImage02SolidSharp"
    >
      <circle 
        cx="16" 
        cy="8" 
        r="2" 
        fill="var(--icon-fill)"></circle>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfImage02: TheIconSelfPack = {
  name: 'Image02',
  StrokeRounded: IconImage02StrokeRounded,
  DuotoneRounded: IconImage02DuotoneRounded,
  TwotoneRounded: IconImage02TwotoneRounded,
  SolidRounded: IconImage02SolidRounded,
  BulkRounded: IconImage02BulkRounded,
  StrokeSharp: IconImage02StrokeSharp,
  SolidSharp: IconImage02SolidSharp,
};