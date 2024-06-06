import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.9961 10H11.0111M10.9998 16H11.0148',
  d2: 'M7 13H15',
  d3: 'M2.77423 11.1439C1.77108 12.2643 1.7495 13.9546 2.67016 15.1437C4.49711 17.5033 6.49674 19.5029 8.85633 21.3298C10.0454 22.2505 11.7357 22.2289 12.8561 21.2258C15.8979 18.5022 18.6835 15.6559 21.3719 12.5279C21.6377 12.2187 21.8039 11.8397 21.8412 11.4336C22.0062 9.63798 22.3452 4.46467 20.9403 3.05974C19.5353 1.65481 14.362 1.99377 12.5664 2.15876C12.1603 2.19608 11.7813 2.36233 11.472 2.62811C8.34412 5.31646 5.49781 8.10211 2.77423 11.1439Z',
  d4: 'M2.67016 15.1437C1.7495 13.9546 1.77108 12.2643 2.77423 11.1439C5.49781 8.10211 8.34412 5.31646 11.472 2.62811C11.7813 2.36233 12.1603 2.19608 12.5664 2.15876C14.362 1.99377 19.5353 1.65481 20.9403 3.05974C22.3452 4.46467 22.0062 9.63798 21.8412 11.4336C21.8039 11.8397 21.6377 12.2187 21.3719 12.5279C18.6835 15.6559 15.8979 18.5022 12.8561 21.2258C11.7357 22.2289 10.0454 22.2505 8.85633 21.3298C6.49674 19.5029 4.49711 17.5033 2.67016 15.1437ZM17.5 5C18.3284 5 19 5.67157 19 6.5C19 7.32843 18.3284 8 17.5 8C16.6716 8 16 7.32843 16 6.5C16 5.67157 16.6716 5 17.5 5Z',
  d5: 'M21.4705 2.5294C20.9663 2.0252 20.2081 1.74401 19.4595 1.57208C18.6861 1.39446 17.8009 1.30725 16.9309 1.27116C15.1884 1.19887 13.4078 1.32827 12.4977 1.4119C11.9298 1.46408 11.4053 1.69644 10.9831 2.05931C7.83082 4.76863 4.9611 7.57712 2.21543 10.6436C0.959114 12.0467 0.945789 14.1417 2.07709 15.6028C3.94283 18.0125 5.98744 20.0571 8.39712 21.9228C9.85825 23.0541 11.9532 23.0408 13.3563 21.7845C16.4228 19.0388 19.2313 16.1691 21.9406 13.0168C22.3035 12.5946 22.5359 12.0702 22.588 11.5022C22.6717 10.5921 22.8011 8.81159 22.7288 7.06907C22.6927 6.19907 22.6055 5.3138 22.4279 4.54046C22.2559 3.79184 21.9747 3.0336 21.4705 2.5294ZM10.9961 8C10.4438 8 9.99609 8.44771 9.99609 9C9.99609 9.55228 10.4438 10 10.9961 10H11.0111C11.5633 10 12.0111 9.55228 12.0111 9C12.0111 8.44771 11.5633 8 11.0111 8H10.9961ZM10.9998 16C10.4475 16 9.9998 16.4477 9.9998 17C9.9998 17.5523 10.4475 18 10.9998 18H11.0148C11.5671 18 12.0148 17.5523 12.0148 17C12.0148 16.4477 11.5671 16 11.0148 16H10.9998ZM6 13C6 12.4477 6.44772 12 7 12L15 12C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14L7 14C6.44772 14 6 13.5523 6 13ZM17.5 5C18.3284 5 19 5.67157 19 6.5C19 7.32843 18.3284 8 17.5 8C16.6716 8 16 7.32843 16 6.5C16 5.67157 16.6716 5 17.5 5Z',
  d6: 'M9.99609 9C9.99609 8.44772 10.4438 8 10.9961 8H11.0111C11.5633 8 12.0111 8.44772 12.0111 9C12.0111 9.55228 11.5633 10 11.0111 10H10.9961C10.4438 10 9.99609 9.55228 9.99609 9ZM9.9998 17C9.9998 16.4477 10.4475 16 10.9998 16H11.0148C11.5671 16 12.0148 16.4477 12.0148 17C12.0148 17.5523 11.5671 18 11.0148 18H10.9998C10.4475 18 9.9998 17.5523 9.9998 17Z',
  d7: 'M6 13C6 12.4477 6.44772 12 7 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H7C6.44772 14 6 13.5523 6 13Z',
  d8: 'M21.4705 2.5294C20.9663 2.0252 20.2081 1.74401 19.4595 1.57208C18.6861 1.39446 17.8009 1.30725 16.9309 1.27116C15.1884 1.19887 13.4078 1.32827 12.4977 1.4119C11.9298 1.46408 11.4053 1.69644 10.9831 2.05931C7.83082 4.76863 4.9611 7.57712 2.21543 10.6436C0.959114 12.0467 0.945789 14.1417 2.07709 15.6028C3.94283 18.0125 5.98744 20.0571 8.39712 21.9228C9.85825 23.0541 11.9532 23.0408 13.3563 21.7845C16.4228 19.0388 19.2313 16.1691 21.9406 13.0168C22.3035 12.5946 22.5359 12.0702 22.588 11.5022C22.6717 10.5921 22.8011 8.81159 22.7288 7.06907C22.6927 6.19907 22.6055 5.3138 22.4279 4.54046C22.2559 3.79184 21.9747 3.0336 21.4705 2.5294ZM17.5 5C18.3284 5 19 5.67157 19 6.5C19 7.32843 18.3284 8 17.5 8C16.6716 8 16 7.32843 16 6.5C16 5.67157 16.6716 5 17.5 5Z',
  d9: 'M11.9961 9H12.0111M11.9998 15H12.0148',
  d10: 'M8 12H16',
  d11: 'M22 12V2.00001H12L2 12L12 22L22 12Z',
  d12: 'M12 1.25C11.8011 1.25 11.6103 1.32902 11.4697 1.46967L1.46967 11.4696C1.32902 11.6103 1.25 11.8011 1.25 12C1.25 12.1989 1.32902 12.3896 1.46967 12.5303L11.4697 22.5303C11.7626 22.8232 12.2375 22.8232 12.5304 22.5303L22.5303 12.5304C22.671 12.3897 22.75 12.1989 22.75 12L22.75 2C22.75 1.58579 22.4142 1.25 22 1.25L12 1.25ZM13.0111 8H10.9961V10H13.0111V8ZM13.0148 14H10.9998L10.9998 16H13.0148L13.0148 14ZM16 12.75L8 12.75L8 11.25L16 11.25V12.75ZM18.5 4C19.3284 4 20 4.67157 20 5.5C20 6.32843 19.3284 7 18.5 7C17.6716 7 17 6.32843 17 5.5C17 4.67157 17.6716 4 18.5 4Z',
};

export const IconDiscountTag02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="discount-tag-02-stroke-rounded IconDiscountTag02StrokeRounded"
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
      <circle 
        cx="1.5" 
        cy="1.5" 
        r="1.5" 
        transform="matrix(1 0 0 1 16 8)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiscountTag02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="discount-tag-02-duotone-rounded IconDiscountTag02DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="1.5" 
        cy="1.5" 
        r="1.5" 
        transform="matrix(1 0 0 1 16 8)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiscountTag02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="discount-tag-02-twotone-rounded IconDiscountTag02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="1.5" 
        cy="1.5" 
        r="1.5" 
        transform="matrix(1 0 0 1 16 8)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiscountTag02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="discount-tag-02-solid-rounded IconDiscountTag02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiscountTag02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="discount-tag-02-bulk-rounded IconDiscountTag02BulkRounded"
    >
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiscountTag02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="discount-tag-02-stroke-sharp IconDiscountTag02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="1.5" 
        cy="1.5" 
        r="1.5" 
        transform="matrix(1 0 0 1 16 8)" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiscountTag02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="discount-tag-02-solid-sharp IconDiscountTag02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDiscountTag02: TheIconSelfPack = {
  name: 'DiscountTag02',
  StrokeRounded: IconDiscountTag02StrokeRounded,
  DuotoneRounded: IconDiscountTag02DuotoneRounded,
  TwotoneRounded: IconDiscountTag02TwotoneRounded,
  SolidRounded: IconDiscountTag02SolidRounded,
  BulkRounded: IconDiscountTag02BulkRounded,
  StrokeSharp: IconDiscountTag02StrokeSharp,
  SolidSharp: IconDiscountTag02SolidSharp,
};