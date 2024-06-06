import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.48457 2C9.72845 3.49019 10.4411 4.57432 12.475 3.87202C16.6773 2.42099 19.9986 6.8491 19.9986 10.8C19.9986 14.7765 17.353 18 14.0895 18H13.0247C10.492 18 8.27593 19.6321 7.45312 22',
  d2: 'M6.0058 2V2.77557C6.0058 6.57844 11.4279 9.38737 9.63736 13.1999C8.92581 14.715 4.89483 17.2931 4 22',
  d3: 'M14 7C14.9576 7.29708 15.711 8.04937 16 9',
  d4: 'M14.0914 18C17.3549 18 20.0005 14.7765 20.0005 10.8C20.0005 6.8491 16.6793 2.42099 12.477 3.87202C10.4431 4.57432 9.7304 3.49019 9.48652 2H6.0058V2.77557C6.0058 6.57844 11.4279 9.38737 9.63736 13.1999C8.92581 14.715 4.89483 17.2931 4 22H7.45508C8.27788 19.6321 10.494 18 13.0267 18H14.0914Z',
  d5: 'M9.48653 2C9.7304 3.49019 10.4431 4.57432 12.477 3.87202C16.6793 2.42099 20.0005 6.8491 20.0005 10.8C20.0005 14.7765 17.3549 18 14.0914 18H13.0267C10.494 18 8.27788 19.6321 7.45508 22',
  d6: 'M5.15185 2.41779C5.14387 2.52328 5.1439 2.66343 5.14392 2.77558C5.14392 3.90719 5.55064 4.92655 6.06536 5.83905C6.44574 6.51341 6.91711 7.18039 7.35846 7.80489C7.50401 8.01084 7.64629 8.21217 7.78097 8.40762C8.93119 10.0768 9.57733 11.3926 8.87322 12.8811C8.7661 13.1076 8.50869 13.4295 8.06392 13.9097C7.92094 14.064 7.75868 14.2348 7.58441 14.4181L7.58415 14.4184L7.58414 14.4184C7.26035 14.759 6.89518 15.1433 6.53541 15.5469C5.40428 16.816 4.14415 18.4696 3.45892 20.6011C3.38862 20.8194 3.29727 21.103 3.26617 21.3194C3.22734 21.5897 3.24455 21.9243 3.47489 22.2374C3.71332 22.5614 4.04572 22.6728 4.31316 22.7151C4.53595 22.7503 4.8045 22.7501 5.05365 22.75L6.66696 22.75C6.81175 22.7501 6.96939 22.7501 7.10531 22.737C7.26105 22.7219 7.46407 22.6843 7.66474 22.5596C7.87627 22.4282 8.00213 22.2472 8.08094 22.1166C8.15477 21.9943 8.24001 21.8201 8.3128 21.6713C9.17392 19.9123 10.9626 18.75 12.9706 18.75H14.0431C17.8799 18.75 20.75 15.0453 20.75 10.8C20.75 8.63452 19.8408 6.35344 18.3393 4.79232C16.8179 3.21061 14.626 2.32125 12.1705 3.1631C11.4474 3.41099 11.0578 3.3552 10.8528 3.2618C10.6545 3.17146 10.4699 2.97334 10.3223 2.56831C10.2524 2.37634 10.1749 2.16364 10.1055 2.01507C10.036 1.86622 9.91501 1.63932 9.68161 1.47674C9.4656 1.32627 9.23875 1.28261 9.06908 1.26528C8.91857 1.24991 8.74186 1.24996 8.57611 1.25L6.66178 1.25001C6.54884 1.24998 6.42635 1.24996 6.32009 1.25788C6.20017 1.26683 6.04135 1.28889 5.8748 1.3653C5.60338 1.48982 5.38546 1.70619 5.26004 1.97568C5.18308 2.14103 5.16086 2.29872 5.15185 2.41779ZM14.2966 6.04517C13.7691 5.88153 13.2088 6.17647 13.0452 6.70396C12.8815 7.23144 13.1765 7.79171 13.704 7.95536C14.3493 8.15556 14.8522 8.66208 15.0435 9.29117C15.2042 9.81957 15.7628 10.1177 16.2912 9.95702C16.8196 9.79635 17.1177 9.23776 16.957 8.70936C16.5702 7.43719 15.5664 6.43913 14.2966 6.04517Z',
  d7: 'M5.14392 2.77558C5.1439 2.66343 5.14387 2.52328 5.15185 2.41779C5.16086 2.29872 5.18308 2.14103 5.26004 1.97568C5.38546 1.70619 5.60338 1.48982 5.8748 1.3653C6.04135 1.28889 6.20017 1.26683 6.32009 1.25788C6.42635 1.24996 6.54884 1.24998 6.66178 1.25001L8.57611 1.25C8.74186 1.24996 8.91857 1.24991 9.06908 1.26528C9.23875 1.28261 9.4656 1.32627 9.68161 1.47674C9.91501 1.63932 10.036 1.86622 10.1055 2.01507C10.1749 2.16364 10.2524 2.37634 10.3223 2.56831C10.4699 2.97334 10.6545 3.17146 10.8528 3.2618C11.0578 3.3552 11.4474 3.41099 12.1705 3.1631C14.626 2.32125 16.8179 3.21061 18.3393 4.79232C19.8408 6.35344 20.75 8.63452 20.75 10.8C20.75 15.0453 17.8799 18.75 14.0431 18.75H12.9706C10.9626 18.75 9.17392 19.9123 8.3128 21.6713C8.24001 21.8201 8.15477 21.9943 8.08094 22.1166C8.00213 22.2472 7.87627 22.4282 7.66474 22.5596C7.46407 22.6843 7.26105 22.7219 7.10531 22.737C6.96939 22.7501 6.81175 22.7501 6.66696 22.75L5.05365 22.75C4.8045 22.7501 4.53595 22.7503 4.31316 22.7151C4.04572 22.6728 3.71332 22.5614 3.47489 22.2374C3.24455 21.9243 3.22734 21.5897 3.26617 21.3194C3.29727 21.103 3.38862 20.8194 3.45892 20.6011C4.14415 18.4696 5.40428 16.816 6.53541 15.5469C6.89518 15.1433 7.26035 14.759 7.58414 14.4184L7.58415 14.4184C7.75851 14.2349 7.92087 14.0641 8.06392 13.9097C8.50869 13.4295 8.7661 13.1076 8.87322 12.8811C9.57733 11.3926 8.93119 10.0768 7.78097 8.40762C7.64629 8.21217 7.50401 8.01084 7.35846 7.80489C6.91711 7.18039 6.44574 6.51341 6.06536 5.83905C5.55064 4.92655 5.14392 3.90719 5.14392 2.77558Z',
  d8: 'M13.0452 6.70396C13.2088 6.17647 13.7691 5.88153 14.2966 6.04517C15.5664 6.43913 16.5702 7.43719 16.957 8.70936C17.1177 9.23776 16.8196 9.79635 16.2912 9.95702C15.7628 10.1177 15.2042 9.81957 15.0435 9.29117C14.8522 8.66208 14.3493 8.15556 13.704 7.95536C13.1765 7.79171 12.8815 7.23144 13.0452 6.70396Z',
  d9: 'M9.48457 2C9.48457 3.5 10.4411 4.57432 12.475 3.87202C16.6773 2.42099 19.9986 6.8491 19.9986 10.8C19.9986 14.7765 17.353 18 14.0895 18H13.0247C10.492 18 7.45312 19.5 7.45312 22',
  d10: 'M6.0058 2V2.77557C6.0058 6.57844 11.4279 9.38737 9.63736 13.1999C8.92581 14.715 4 17.5 4 22',
  d11: 'M10.2355 2V1.25H5.25678V2.77557C5.25678 3.90718 5.66059 4.92654 6.17164 5.83904C6.54931 6.5134 7.0173 7.18036 7.45551 7.80487C7.59995 8.01071 7.74136 8.21224 7.87502 8.40761C9.01703 10.0768 9.65856 11.3926 8.95947 12.8811C8.91599 12.9737 8.81698 13.1196 8.62931 13.3324C8.44724 13.5388 8.21442 13.7723 7.93539 14.0427C7.82634 14.1484 7.71075 14.2591 7.59016 14.3747C7.10695 14.8378 6.54345 15.3777 5.99862 15.9753C4.63939 17.466 3.25098 19.4649 3.25098 22V22.75H8.2041V22C8.2041 21.092 8.74905 20.2981 9.69387 19.6946C10.6402 19.0901 11.8908 18.75 13.0257 18.75H14.0905C17.9 18.75 20.7496 15.0453 20.7496 10.8C20.7496 8.63451 19.8469 6.35343 18.356 4.7923C16.8455 3.2106 14.6693 2.32124 12.2312 3.16309C11.3486 3.46786 10.8888 3.32667 10.6667 3.16086C10.4296 2.98384 10.2355 2.61101 10.2355 2ZM13.7041 7.95511C14.3494 8.15531 14.8524 8.66182 15.0437 9.29092L16.9572 8.70911C16.5703 7.43694 15.5666 6.43888 14.2967 6.04492L13.7041 7.95511Z',
};

export const IconDigestionStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="digestion-stroke-rounded IconDigestionStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDigestionDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="digestion-duotone-rounded IconDigestionDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDigestionTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="digestion-twotone-rounded IconDigestionTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDigestionSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="digestion-solid-rounded IconDigestionSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDigestionBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="digestion-bulk-rounded IconDigestionBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDigestionStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="digestion-stroke-sharp IconDigestionStrokeSharp"
    >
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDigestionSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="digestion-solid-sharp IconDigestionSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDigestion: TheIconSelfPack = {
  name: 'Digestion',
  StrokeRounded: IconDigestionStrokeRounded,
  DuotoneRounded: IconDigestionDuotoneRounded,
  TwotoneRounded: IconDigestionTwotoneRounded,
  SolidRounded: IconDigestionSolidRounded,
  BulkRounded: IconDigestionBulkRounded,
  StrokeSharp: IconDigestionStrokeSharp,
  SolidSharp: IconDigestionSolidSharp,
};