import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.5995 20.4737L7.63427 21.7672C6.2983 22.0153 5.63031 22.1393 5.24549 21.7545C4.86067 21.3697 4.98471 20.7016 5.2328 19.3656L6.52621 12.4001C6.73362 11.2831 6.83732 10.7246 7.20549 10.3872C7.57365 10.0497 8.24697 9.98389 9.59359 9.85218C10.8915 9.72524 12.1197 9.28032 13.4 8L19 13.6005C17.7197 14.8808 17.2746 16.1083 17.1474 17.4062C17.0155 18.753 16.9495 19.4264 16.6121 19.7945C16.2747 20.1626 15.7163 20.2663 14.5995 20.4737Z',
  d2: 'M13 16.2105C12.4405 16.1197 11.9289 15.8763 11.5263 15.4737M11.5263 15.4737C11.1237 15.0711 10.8803 14.5595 10.7895 14M11.5263 15.4737L6 21',
  d3: 'M13.5 8C14.1332 7.06586 15.4907 5.16107 16.7613 5.00976C17.6287 4.90648 18.3472 5.62499 19.7842 7.06202L19.938 7.2158C21.375 8.65283 22.0935 9.37135 21.9902 10.2387C21.8389 11.5092 19.9341 12.8668 19 13.5',
  d4: 'M5 8L5 2M2 5H8',
  d5: 'M5.125 1.125C5.67728 1.125 6.125 1.57272 6.125 2.125V4.125H8.125C8.67729 4.125 9.125 4.57272 9.125 5.125C9.125 5.67729 8.67729 6.125 8.125 6.125H6.125V8.125C6.125 8.67728 5.67728 9.125 5.125 9.125C4.57272 9.125 4.125 8.67729 4.125 8.125L4.125 6.125H2.125C1.57272 6.125 1.125 5.67729 1.125 5.125C1.125 4.57272 1.57272 4.125 2.125 4.125H4.125V2.125C4.125 1.57272 4.57272 1.125 5.125 1.125Z',
  d6: 'M20.5937 6.81058L20.44 6.65681C19.7569 5.97374 19.1436 5.36039 18.6309 4.98067C18.0878 4.57845 17.5002 4.30652 16.7981 4.39014C16.3182 4.44728 15.8807 4.66165 15.5089 4.91408C15.1328 5.16943 14.7826 5.49207 14.4716 5.82171C14.2294 6.07832 14.0018 6.34917 13.7952 6.61214C13.6462 6.80175 13.5718 6.89656 13.5786 7.01024C13.5853 7.12392 13.6729 7.2115 13.8481 7.38666L19.8635 13.4027C20.0387 13.5778 20.1263 13.6654 20.2399 13.6722C20.3536 13.679 20.4485 13.6046 20.6381 13.4556C20.9011 13.2489 21.1721 13.0212 21.4288 12.779C21.7585 12.4679 22.0811 12.1177 22.3365 11.7416C22.5889 11.3699 22.8033 10.9323 22.8604 10.4525C22.944 9.75031 22.6721 9.16276 22.2699 8.61963C21.8901 8.1069 21.2768 7.4936 20.5937 6.81058Z',
  d7: 'M18.8318 15.2474L18.8318 15.2474C18.3093 16.0328 18.0977 16.7992 18.0188 17.6045L18.0151 17.6424L18.0151 17.6425C17.9523 18.2836 17.8999 18.8186 17.8178 19.237C17.7341 19.6632 17.5995 20.0887 17.29 20.4264C16.9945 20.7488 16.6279 20.9193 16.2415 21.037C15.8795 21.1472 15.4255 21.2315 14.9008 21.3289L7.84171 22.6398C7.22049 22.7553 6.67353 22.8569 6.23548 22.8728C6.00032 22.8814 5.75217 22.8676 5.51163 22.7999L11.7129 16.5984C12.109 16.8445 12.5487 17.0018 13.0052 17.0759C13.4141 17.1423 13.7994 16.8647 13.8657 16.4558C13.9321 16.047 13.6545 15.6617 13.2456 15.5953C12.8261 15.5272 12.4629 15.3492 12.1821 15.0685C11.9013 14.7877 11.7233 14.4244 11.6552 14.0049C11.5888 13.5961 11.2036 13.3184 10.7947 13.3848C10.3859 13.4512 10.1082 13.8364 10.1746 14.2453C10.2487 14.7018 10.406 15.1415 10.6522 15.5377L4.45057 21.7396C4.38254 21.4987 4.3687 21.2501 4.37728 21.0146C4.39323 20.5765 4.49485 20.0295 4.61027 19.4082L5.92112 12.3488C6.01853 11.8241 6.10281 11.37 6.21306 11.008C6.33071 10.6216 6.50125 10.255 6.8237 9.95943C7.1614 9.64991 7.58699 9.51536 8.01314 9.43172C8.43159 9.34959 8.96664 9.29727 9.60772 9.23459L9.64555 9.23089C10.4509 9.15212 11.2176 8.94068 12.0032 8.41825C12.2285 8.26841 12.3411 8.19349 12.4478 8.20412C12.5544 8.21474 12.6428 8.30316 12.8196 8.48L18.7701 14.431C18.9469 14.6078 19.0353 14.6963 19.0459 14.8029C19.0566 14.9095 18.9816 15.0222 18.8318 15.2474Z',
  d8: 'M18.8318 15.2474C18.9816 15.0222 19.0566 14.9095 19.0459 14.8029C19.0353 14.6963 18.9469 14.6078 18.7701 14.431L12.8196 8.48C12.6428 8.30316 12.5544 8.21474 12.4478 8.20412C12.3411 8.19349 12.2285 8.26841 12.0032 8.41825C11.2176 8.94068 10.4509 9.15212 9.64555 9.23089L9.60772 9.23459C8.96664 9.29727 8.43159 9.34959 8.01314 9.43172C7.58699 9.51536 7.1614 9.64991 6.8237 9.95943C6.50125 10.255 6.33071 10.6216 6.21306 11.008C6.10281 11.37 6.01853 11.8241 5.92112 12.3488L4.61027 19.4082C4.49485 20.0295 4.39323 20.5765 4.37728 21.0146C4.36024 21.4823 4.43164 22.0015 4.84012 22.41C5.24861 22.8185 5.76772 22.8899 6.23548 22.8728C6.67353 22.8569 7.22049 22.7553 7.84171 22.6398L14.9008 21.3289C15.4255 21.2315 15.8795 21.1472 16.2415 21.037C16.6279 20.9193 16.9945 20.7488 17.29 20.4264C17.5995 20.0887 17.7341 19.6632 17.8178 19.237C17.8999 18.8186 17.9523 18.2835 18.0151 17.6424L18.0188 17.6045C18.0977 16.7992 18.3093 16.0328 18.8318 15.2474Z',
  d9: 'M5.51126 22.7999L11.7125 16.5984C12.1087 16.8445 12.5484 17.0018 13.0049 17.0759C13.4137 17.1423 13.799 16.8647 13.8654 16.4558C13.9317 16.047 13.6541 15.6617 13.2452 15.5953C12.8257 15.5272 12.4625 15.3492 12.1817 15.0685C11.9009 14.7877 11.7229 14.4244 11.6548 14.0049C11.5885 13.5961 11.2032 13.3184 10.7944 13.3848C10.3855 13.4512 10.1079 13.8364 10.1742 14.2453C10.2483 14.7018 10.4056 15.1415 10.6518 15.5377L4.4502 21.7396C4.51726 21.9771 4.63697 22.2072 4.83975 22.41C5.04287 22.6131 5.27335 22.7329 5.51126 22.7999Z',
  d10: 'M12.6152 8.00884L15.1368 4.00293L22.1972 11.0133L18.1627 13.517',
  d11: 'M5.05031 8.00887V2M2.02441 5.00443H8.0762',
  d12: 'M18.3069 13.7203L12.5823 8.07688L5.38317 11.4208L3.94508 22.2763C3.94422 22.2828 3.94982 22.2883 3.95638 22.2874L14.9004 20.8266L18.3069 13.7203Z',
  d13: 'M12.2621 17.18L10.6677 15.6168M10.6677 15.6168L9.12886 14.0907M10.6677 15.6168L4.33263 21.9117',
  d14: 'M5.5 3.75V1.75H3.5L3.5 3.75H1.5V5.75H3.5L3.5 7.75H5.5V5.75H7.5V3.75H5.5Z',
  d15: 'M10.932 7.2786L4.42212 10.2737L3 21.1848L9.14789 15.0357L8.23466 14.1224L9.29753 13.0597L12.1866 15.9489L11.1237 17.0117L10.2107 16.0985L4.0604 22.25L14.9751 20.8263L17.9703 14.3166L10.932 7.2786Z',
  d16: 'M18.3047 12.5254C18.2938 12.513 18.2825 12.5009 18.2707 12.4892L12.7595 6.97814C12.7478 6.96636 12.7357 6.95505 12.7233 6.94419L18.3047 12.5254Z',
  d17: 'M15.2656 2.97012C15.1037 2.80818 14.8767 2.72892 14.6492 2.75483C14.4216 2.78075 14.2183 2.90901 14.0969 3.10321L12.0925 6.31015L18.9397 13.1571L22.1468 11.1528C22.341 11.0314 22.4693 10.8281 22.4952 10.6006C22.5211 10.373 22.4418 10.1461 22.2799 9.98414L15.2656 2.97012Z',
};

export const IconPenToolAddStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-add-stroke-rounded IconPenToolAddStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPenToolAddDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-add-duotone-rounded IconPenToolAddDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPenToolAddTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-add-twotone-rounded IconPenToolAddTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPenToolAddSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-add-solid-rounded IconPenToolAddSolidRounded"
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

export const IconPenToolAddBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-add-bulk-rounded IconPenToolAddBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPenToolAddStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-add-stroke-sharp IconPenToolAddStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPenToolAddSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-tool-add-solid-sharp IconPenToolAddSolidSharp"
    >
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
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPenToolAdd: TheIconSelfPack = {
  name: 'PenToolAdd',
  StrokeRounded: IconPenToolAddStrokeRounded,
  DuotoneRounded: IconPenToolAddDuotoneRounded,
  TwotoneRounded: IconPenToolAddTwotoneRounded,
  SolidRounded: IconPenToolAddSolidRounded,
  BulkRounded: IconPenToolAddBulkRounded,
  StrokeSharp: IconPenToolAddStrokeSharp,
  SolidSharp: IconPenToolAddSolidSharp,
};