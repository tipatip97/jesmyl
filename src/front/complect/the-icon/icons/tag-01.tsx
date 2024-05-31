import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.77423 11.1439C1.77108 12.2643 1.7495 13.9546 2.67016 15.1437C4.49711 17.5033 6.49674 19.5029 8.85633 21.3298C10.0454 22.2505 11.7357 22.2289 12.8561 21.2258C15.8979 18.5022 18.6835 15.6559 21.3719 12.5279C21.6377 12.2187 21.8039 11.8397 21.8412 11.4336C22.0062 9.63798 22.3452 4.46467 20.9403 3.05974C19.5353 1.65481 14.362 1.99377 12.5664 2.15876C12.1603 2.19608 11.7813 2.36233 11.472 2.62811C8.34412 5.31646 5.49781 8.10211 2.77423 11.1439Z',
  d2: 'M7 14L10 17',
  d3: 'M2.67016 15.1437C1.7495 13.9546 1.77108 12.2643 2.77423 11.1439C5.49781 8.10211 8.34412 5.31646 11.472 2.62811C11.7813 2.36233 12.1603 2.19608 12.5664 2.15876C14.362 1.99377 19.5353 1.65481 20.9403 3.05974C22.3452 4.46467 22.0062 9.63798 21.8412 11.4336C21.8039 11.8397 21.6377 12.2187 21.3719 12.5279C18.6835 15.6559 15.8979 18.5022 12.8561 21.2258C11.7357 22.2289 10.0454 22.2505 8.85633 21.3298C6.49674 19.5029 4.49711 17.5033 2.67016 15.1437ZM17.5 5C18.3284 5 19 5.67157 19 6.5C19 7.32843 18.3284 8 17.5 8C16.6716 8 16 7.32843 16 6.5C16 5.67157 16.6716 5 17.5 5Z',
  d4: 'M19.4595 1.57208C20.2081 1.74402 20.9663 2.0252 21.4705 2.5294C21.9747 3.0336 22.2559 3.79184 22.4279 4.54046C22.6055 5.3138 22.6927 6.19907 22.7288 7.06907C22.8011 8.81159 22.6717 10.5921 22.588 11.5022C22.5359 12.0702 22.3035 12.5946 21.9406 13.0168C19.2313 16.1691 16.4228 19.0388 13.3563 21.7845C11.9532 23.0408 9.85825 23.0541 8.39712 21.9228C5.98744 20.0571 3.94283 18.0125 2.07709 15.6028C0.945789 14.1417 0.959114 12.0467 2.21543 10.6436C4.9611 7.57712 7.83082 4.76863 10.9831 2.05931C11.4053 1.69644 11.9298 1.46409 12.4977 1.4119C13.4078 1.32827 15.1884 1.19887 16.9309 1.27116C17.8009 1.30726 18.6861 1.39446 19.4595 1.57208ZM19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8C18.3284 8 19 7.32843 19 6.5ZM7.70711 13.2929C7.31658 12.9024 6.68342 12.9024 6.29289 13.2929C5.90237 13.6834 5.90237 14.3166 6.29289 14.7071L9.29289 17.7071C9.68342 18.0976 10.3166 18.0976 10.7071 17.7071C11.0976 17.3166 11.0976 16.6834 10.7071 16.2929L7.70711 13.2929Z',
  d5: 'M19.4595 1.57208C20.2081 1.74402 20.9663 2.0252 21.4705 2.5294C21.9747 3.0336 22.2559 3.79184 22.4279 4.54046C22.6055 5.3138 22.6927 6.19907 22.7288 7.06907C22.8011 8.81159 22.6717 10.5921 22.588 11.5022C22.5359 12.0702 22.3035 12.5946 21.9406 13.0168C19.2313 16.1691 16.4228 19.0388 13.3563 21.7845C11.9532 23.0408 9.85825 23.0541 8.39712 21.9228C5.98744 20.0571 3.94283 18.0125 2.07709 15.6028C0.945789 14.1417 0.959114 12.0467 2.21543 10.6436C4.9611 7.57712 7.83082 4.76863 10.9831 2.05931C11.4053 1.69644 11.9298 1.46409 12.4977 1.4119C13.4078 1.32827 15.1884 1.19887 16.9309 1.27116C17.8009 1.30726 18.6861 1.39446 19.4595 1.57208Z',
  d6: 'M6.29289 13.2929C6.68342 12.9024 7.31658 12.9024 7.70711 13.2929L10.7071 16.2929C11.0976 16.6834 11.0976 17.3166 10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L6.29289 14.7071C5.90237 14.3166 5.90237 13.6834 6.29289 13.2929Z',
  d7: 'M18.4976 7.02344C18.4976 6.19501 17.826 5.52344 16.9976 5.52344C16.1692 5.52344 15.4976 6.19501 15.4976 7.02344C15.4976 7.85187 16.1692 8.52344 16.9976 8.52344C17.826 8.52344 18.4976 7.85187 18.4976 7.02344Z',
  d8: 'M7.97949 13.0234L10.9795 16.0234',
  d9: 'M12.0007 21.9854C11.9812 22.0048 11.9497 22.0049 11.9301 21.9855L2.01326 12.0243C1.99367 12.0048 1.99362 11.9731 2.01315 11.9536L12.0075 2L22.0015 2.02811V12.0155L12.0007 21.9854Z',
  d10: 'M22 1.25C22.4142 1.25 22.75 1.58579 22.75 2V12.3107L12.5304 22.5303C12.2375 22.8232 11.7626 22.8232 11.4697 22.5303L1.46967 12.5303C1.32902 12.3896 1.25 12.1989 1.25 12C1.25 11.8011 1.32902 11.6103 1.46967 11.4696L11.6893 1.25H22ZM19.5002 6C19.5002 5.17157 18.8286 4.5 18.0002 4.5C17.1718 4.5 16.5002 5.17157 16.5002 6C16.5002 6.82843 17.1718 7.5 18.0002 7.5C18.8286 7.5 19.5002 6.82843 19.5002 6ZM7.27539 13.7071L10.2754 16.7071L11.6896 15.2928L8.6896 12.2928L7.27539 13.7071Z',
} as const;

export const IconTag01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tag-01-stroke-rounded IconTag01StrokeRounded"
    >
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
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconTag01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tag-01-duotone-rounded IconTag01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconTag01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tag-01-twotone-rounded IconTag01TwotoneRounded"
    >
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
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTag01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tag-01-solid-rounded IconTag01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTag01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tag-01-bulk-rounded IconTag01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="1.5" 
        cy="1.5" 
        r="1.5" 
        transform="matrix(1 0 0 1 16 8)" 
        fill="var(--icon-fill)"></circle>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTag01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tag-01-stroke-sharp IconTag01StrokeSharp"
    >
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
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTag01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tag-01-solid-sharp IconTag01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTag01: TheIconSelfPack = {
  name: 'Tag01',
  StrokeRounded: IconTag01StrokeRounded,
  DuotoneRounded: IconTag01DuotoneRounded,
  TwotoneRounded: IconTag01TwotoneRounded,
  SolidRounded: IconTag01SolidRounded,
  BulkRounded: IconTag01BulkRounded,
  StrokeSharp: IconTag01StrokeSharp,
  SolidSharp: IconTag01SolidSharp,
};