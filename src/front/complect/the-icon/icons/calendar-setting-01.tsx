import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 2V4M6 2V4',
  d2: 'M21.4997 11.5C21.4957 7.63364 21.4267 5.62803 20.2479 4.35364C18.9958 3 16.9805 3 12.95 3H11.05C7.01949 3 5.00424 3 3.75212 4.35364C2.5 5.70728 2.5 7.88594 2.5 12.2432V12.7568C2.5 17.1141 2.5 19.2927 3.75212 20.6464C4.95133 21.9428 6.80467 21.9976 10.5 21.9999',
  d3: 'M3 8H21',
  d4: 'M17.5 20.7143V22M17.5 20.7143C16.3432 20.7143 15.3241 20.1461 14.7263 19.2833M17.5 20.7143C18.6568 20.7143 19.6759 20.1461 20.2737 19.2833M17.5 14.2857C18.6569 14.2857 19.6761 14.854 20.2738 15.7169M17.5 14.2857C16.3431 14.2857 15.3239 14.854 14.7262 15.7169M17.5 14.2857V13M21.5 14.9286L20.2738 15.7169M13.5004 20.0714L14.7263 19.2833M13.5 14.9286L14.7262 15.7169M21.4996 20.0714L20.2737 19.2833M20.2738 15.7169C20.6273 16.2271 20.8333 16.8403 20.8333 17.5C20.8333 18.1597 20.6272 18.773 20.2737 19.2833M14.7262 15.7169C14.3727 16.2271 14.1667 16.8403 14.1667 17.5C14.1667 18.1597 14.3728 18.773 14.7263 19.2833',
  d5: 'M21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432C2.5 10.5138 2.5 9.12764 2.57828 8H21.4217C21.5 9.12764 21.5 10.5138 21.5 12.2432ZM17.5013 14.2852C18.6582 14.2852 19.6774 14.8534 20.2751 15.7163C20.6286 16.2266 20.8346 16.8398 20.8346 17.4994C20.8346 18.1592 20.6285 18.7725 20.275 19.2828C19.6772 20.1455 18.6581 20.7137 17.5013 20.7137C16.3445 20.7137 15.3254 20.1455 14.7276 19.2828C14.3741 18.7725 14.168 18.1592 14.168 17.4994C14.168 16.8398 14.374 16.2266 14.7275 15.7163C15.3252 14.8534 16.3444 14.2852 17.5013 14.2852Z',
  d6: 'M13.0288 2H10.9712C9.02294 1.99997 7.45141 1.99994 6.21533 2.17961C4.92535 2.3671 3.8568 2.76781 3.01802 3.6746C2.18949 4.57031 1.83279 5.69272 1.66416 7.04866C1.49997 8.36894 1.49998 10.0541 1.5 12.1739V12.8261C1.49998 14.9459 1.49997 16.6311 1.66416 17.9513C1.83279 19.3073 2.18949 20.4297 3.01802 21.3254C3.81739 22.1896 4.81631 22.5968 6.02843 22.7953C7.1999 22.9871 8.67544 22.9988 10.4994 22.9999C11.0517 23.0002 11.4997 22.5528 11.5 22.0005C11.5003 21.4482 11.0529 21.0002 10.5006 20.9999C8.62923 20.9987 7.33044 20.9818 6.3516 20.8216C5.41341 20.668 4.88606 20.3996 4.48622 19.9673C4.06263 19.5094 3.79327 18.8656 3.64887 17.7045C3.50182 16.5221 3.5 14.9616 3.5 12.7568V12.2432C3.5 11.3942 3.50027 10.6407 3.509 9.96751C3.51487 9.51472 3.51781 9.28833 3.66385 9.14417C3.8099 9 4.03921 9 4.49783 9H19.5022C19.9607 9 20.19 9 20.3361 9.14413C20.4821 9.28826 20.4851 9.51465 20.4911 9.96744C20.4933 10.1415 20.4951 10.3212 20.4963 10.5068C20.5001 11.0591 20.9509 11.5038 21.5032 11.5C22.0554 11.4962 22.5001 11.0454 22.4963 10.4932C22.4853 8.88713 22.4426 7.56168 22.2507 6.47906C22.0549 5.37385 21.6907 4.44081 20.982 3.6746C20.1432 2.76781 19.0747 2.3671 17.7847 2.17961C16.5486 1.99994 14.9771 1.99997 13.0288 2Z',
  d7: 'M7 2C7 1.44772 6.55228 1 6 1C5.44772 1 5 1.44772 5 2V2.44885C5.38032 2.32821 5.78553 2.24207 6.21533 2.17961C6.46328 2.14357 6.72472 2.11476 7 2.09173V2Z',
  d8: 'M19 2.44885C18.6197 2.32821 18.2145 2.24207 17.7847 2.17961C17.5367 2.14357 17.2753 2.11476 17 2.09173V2C17 1.44772 17.4477 1 18 1C18.5523 1 19 1.44772 19 2V2.44885Z',
  d9: 'M17.5001 12C18.0524 12 18.5001 12.4477 18.5001 13V13.3986C19.2405 13.5688 19.9099 13.9241 20.4513 14.414L20.9593 14.0874C21.4239 13.7887 22.0426 13.9232 22.3413 14.3878C22.64 14.8524 22.5055 15.4711 22.0409 15.7697L21.5767 16.0682C21.7426 16.515 21.8335 16.9973 21.8335 17.5C21.8335 18.0028 21.7426 18.4852 21.5766 18.932L22.0405 19.2303C22.505 19.5289 22.6395 20.1476 22.3409 20.6122C22.0422 21.0768 21.4235 21.2113 20.9589 20.9126L20.4512 20.5862C19.9097 21.076 19.2404 21.4312 18.5001 21.6014V22C18.5001 22.5523 18.0524 23 17.5001 23C16.9478 23 16.5001 22.5523 16.5001 22V21.6014C15.7598 21.4312 15.0905 21.076 14.5491 20.5862L14.0413 20.9126C13.5768 21.2113 12.958 21.0768 12.6594 20.6122C12.3607 20.1476 12.4952 19.5289 12.9598 19.2303L13.4236 18.932C13.2577 18.4852 13.1668 18.0028 13.1668 17.5C13.1668 16.9973 13.2576 16.515 13.4236 16.0682L12.9593 15.7697C12.4948 15.4711 12.3603 14.8524 12.659 14.3878C12.9576 13.9232 13.5763 13.7887 14.0409 14.0874L14.5489 14.414C15.0904 13.9241 15.7597 13.5688 16.5001 13.3986V13C16.5001 12.4477 16.9478 12 17.5001 12ZM17.5001 15.2857C16.6753 15.2857 15.9615 15.6898 15.5483 16.2863C15.3057 16.6366 15.1668 17.0526 15.1668 17.5C15.1668 17.9475 15.3057 18.3635 15.5484 18.7138C15.9616 19.3102 16.6753 19.7143 17.5001 19.7143C18.3249 19.7143 19.0386 19.3102 19.4518 18.7138C19.6945 18.3635 19.8335 17.9475 19.8335 17.5C19.8335 17.0526 19.6945 16.6366 19.4519 16.2863C19.0387 15.6898 18.325 15.2857 17.5001 15.2857Z',
  d10: 'M17.5 2V6M6.5 2V6',
  d11: 'M21 12V4H3V22H12',
  d12: 'M3 9H21',
  d13: 'M18 20.3929V22M18 20.3929C16.9717 20.3929 16.0658 19.8815 15.5345 19.105M18 20.3929C19.0283 20.3929 19.9342 19.8815 20.4655 19.105M18 14.6071C19.0283 14.6071 19.9343 15.1186 20.4656 15.8952M18 14.6071C16.9717 14.6071 16.0657 15.1186 15.5344 15.8952M18 14.6071V13M22 14.8L20.4656 15.8952M14 20.2L15.5345 19.105M14 14.8L15.5344 15.8952M22 20.2L20.4655 19.105M20.4656 15.8952C20.7798 16.3544 20.963 16.9063 20.963 17.5C20.963 18.0938 20.7797 18.6457 20.4655 19.105M15.5344 15.8952C15.2202 16.3544 15.037 16.9063 15.037 17.5C15.037 18.0938 15.2203 18.6457 15.5345 19.105',
  d14: 'M16.5 1.5V3H7.5V1.5H5.5V3H3C2.58579 3 2.25 3.33579 2.25 3.75V21.525C2.25 22.0635 2.68652 22.5 3.225 22.5H11V20.55H4.2V9.5H19.8V12.025H21.75V3.75C21.75 3.33579 21.4142 3 21 3H18.5V1.5H16.5Z',
  d15: 'M16.1688 14.2323C15.5668 14.3861 15.0193 14.6757 14.5633 15.0667L13.7498 14.4861L12.5879 16.1139L13.4277 16.7134C13.2842 17.1162 13.2059 17.5493 13.2059 18C13.2059 18.4507 13.2842 18.8839 13.4278 19.2867L12.588 19.886L13.7497 21.514L14.5634 20.9333C15.0194 21.3244 15.5669 21.6139 16.1688 21.7677V22.5H18.1688V21.7677C18.7708 21.6139 19.3183 21.3244 19.7743 20.9333L20.588 21.514L21.7497 19.886L20.9099 19.2867C21.0535 18.8839 21.1318 18.4507 21.1318 18C21.1318 17.5493 21.0535 17.1162 20.91 16.7134L21.7498 16.1139L20.5879 14.4861L19.7744 15.0667C19.3183 14.6757 18.7708 14.3861 18.1688 14.2323V13.5H16.1688V14.2323ZM17.1688 16.1071C16.4779 16.1071 15.8776 16.4496 15.5286 16.9598C15.3237 17.2593 15.2059 17.6156 15.2059 18C15.2059 18.3844 15.3237 18.7408 15.5286 19.0403C15.8777 19.5504 16.478 19.8929 17.1688 19.8929C17.8597 19.8929 18.46 19.5504 18.8091 19.0403C19.014 18.7408 19.1318 18.3844 19.1318 18C19.1318 17.6156 19.014 17.2593 18.8091 16.9598C18.46 16.4496 17.8598 16.1071 17.1688 16.1071Z',
};

export const IconCalendarSetting01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-setting-01-stroke-rounded IconCalendarSetting01StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarSetting01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-setting-01-duotone-rounded IconCalendarSetting01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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
      />
    </TheIconWrapper>
  );
};

export const IconCalendarSetting01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-setting-01-twotone-rounded IconCalendarSetting01TwotoneRounded"
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

export const IconCalendarSetting01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-setting-01-solid-rounded IconCalendarSetting01SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarSetting01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-setting-01-bulk-rounded IconCalendarSetting01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarSetting01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-setting-01-stroke-sharp IconCalendarSetting01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarSetting01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-setting-01-solid-sharp IconCalendarSetting01SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCalendarSetting01: TheIconSelfPack = {
  name: 'CalendarSetting01',
  StrokeRounded: IconCalendarSetting01StrokeRounded,
  DuotoneRounded: IconCalendarSetting01DuotoneRounded,
  TwotoneRounded: IconCalendarSetting01TwotoneRounded,
  SolidRounded: IconCalendarSetting01SolidRounded,
  BulkRounded: IconCalendarSetting01BulkRounded,
  StrokeSharp: IconCalendarSetting01StrokeSharp,
  SolidSharp: IconCalendarSetting01SolidSharp,
};