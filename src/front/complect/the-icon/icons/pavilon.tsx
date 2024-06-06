import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 11.3338V21.5M18 11.3361V21.5M9.5 21.5L10.0065 18.4592C10.1261 17.741 10.1859 17.3819 10.3463 17.1165C10.7446 16.4571 11.3843 16.4969 12 16.4969C12.6157 16.4969 13.2554 16.4571 13.6537 17.1165C13.8141 17.3819 13.8739 17.741 13.9935 18.4592L14.5 21.5M3 21.5H21M7.12038 11.4811C5.81567 11.4811 3.90987 10.864 3.03476 8.51048C5.33669 8.37831 10.2316 7.831 12.0044 2.5C13.8535 7.91432 18.672 8.37831 20.9739 8.51048C20.0988 10.864 18.193 11.4811 16.8883 11.4811H7.12038Z',
  d2: 'M6 21.1281H9.5L10.4012 16.3655H13.4999L14.5 21.1281H18V10.9642L6 10.9619V21.1281Z',
  d3: 'M6 10.9617V21.1279M18 10.964V21.1279M9.5 21.1279L10.0065 18.0871C10.1261 17.3689 10.1859 17.0099 10.3463 16.7445C10.7446 16.085 11.3843 16.1248 12 16.1248C12.6157 16.1248 13.2554 16.085 13.6537 16.7445C13.8141 17.0099 13.8739 17.3689 13.9935 18.0871L14.5 21.1279M3 21.1279H21M7.12038 11.1091C5.81567 11.1091 3.90987 10.4919 3.03476 8.13841C5.33669 8.00624 10.2316 7.45893 12.0044 2.12793C13.8535 7.54225 18.672 8.00624 20.9739 8.13841C20.0988 10.4919 18.193 11.1091 16.8883 11.1091H7.12038Z',
  d4: 'M6 11.4951V21.5015',
  d5: 'M18 11.4951V21.5015',
  d6: 'M9.5 21.5012L10.0065 18.4607C10.1261 17.7425 10.1859 17.3835 10.3463 17.1181C10.7446 16.4587 11.3843 16.4985 12 16.4985C12.6157 16.4985 13.2554 16.4587 13.6537 17.1181C13.8141 17.3835 13.8739 17.7425 13.9935 18.4607L14.5 21.5012',
  d7: 'M3 21.4893H21',
  d8: 'M3 8.51287C3.87511 10.8679 5.78091 11.4854 7.08562 11.4854H16.8536C18.1583 11.4854 20.0641 10.8679 20.9392 8.51287C18.6373 8.38061 13.8188 7.91632 11.9696 2.49854C10.1969 7.83295 5.30193 8.38061 3 8.51287Z',
  d9: 'M18.75 13.6166C18.75 13.414 18.5533 13.2696 18.3565 13.3177C17.867 13.4375 17.3579 13.5005 16.8377 13.5005L7.16229 13.5005C6.64213 13.5005 6.13302 13.4375 5.64349 13.3177C5.44675 13.2696 5.25 13.414 5.25 13.6166L5.25 21.5005C5.25 21.9147 5.58579 22.2505 6 22.2505H18C18.4142 22.2505 18.75 21.9147 18.75 21.5005V13.6166ZM13.0922 15.8361C12.7369 15.7463 12.3579 15.7487 12.0939 15.7503H11.9063C11.6423 15.7487 11.2633 15.7463 10.908 15.8361C10.4527 15.9511 10.0174 16.2144 9.70453 16.7319C9.56675 16.9598 9.48944 17.2013 9.4311 17.4496C9.37547 17.6863 9.32717 17.9761 9.27066 18.3152L9.27065 18.3153L8.76032 21.3769C8.69222 21.7855 8.96823 22.1719 9.37681 22.24C9.78538 22.3082 10.1718 22.0321 10.2399 21.6236L10.7464 18.585C10.8078 18.2164 10.8483 17.9757 10.8913 17.7927C10.9329 17.6158 10.9656 17.5452 10.9882 17.5079C11.0737 17.3665 11.1574 17.3202 11.2755 17.2904C11.4345 17.2502 11.614 17.2504 11.9155 17.2507H12.0847C12.3863 17.2504 12.5657 17.2502 12.7248 17.2904C12.8428 17.3202 12.9265 17.3665 13.012 17.5079C13.0346 17.5452 13.0674 17.6158 13.1089 17.7927C13.1519 17.9757 13.1924 18.2164 13.2539 18.585L13.7603 21.6236C13.8284 22.0321 14.2149 22.3082 14.6234 22.24C15.032 22.1719 15.308 21.7855 15.2399 21.3769L14.7296 18.3153L14.7296 18.3152C14.6731 17.9761 14.6248 17.6863 14.5691 17.4496C14.5108 17.2013 14.4335 16.9598 14.2957 16.7319C13.9829 16.2144 13.5475 15.9511 13.0922 15.8361Z',
  d10: 'M2 21.25C2 20.6977 2.44772 20.25 3 20.25H21C21.5523 20.25 22 20.6977 22 21.25C22 21.8023 21.5523 22.25 21 22.25H3C2.44772 22.25 2 21.8023 2 21.25Z',
  d11: 'M12 1.75C12.3442 1.75 12.6441 1.98422 12.7276 2.3181C13.1609 4.05142 15.4089 7.75 21 7.75C21.2411 7.75 21.4675 7.86589 21.6084 8.06147C21.7494 8.25704 21.7878 8.50846 21.7115 8.73717C21.0122 10.835 19.049 12.25 16.8377 12.25H7.16228C4.95098 12.25 2.98777 10.835 2.28849 8.73717C2.21226 8.50846 2.25061 8.25704 2.39157 8.06147C2.53254 7.86589 2.75892 7.75 3.00001 7.75C8.59112 7.75 10.8391 4.05142 11.2724 2.3181C11.3559 1.98422 11.6559 1.75 12 1.75Z',
  d12: 'M18.3565 13.3179C18.5533 13.2698 18.75 13.4142 18.75 13.6167V21.5007C18.75 21.9149 18.4142 22.2507 18 22.2507H6C5.58579 22.2507 5.25 21.9149 5.25 21.5007V13.6167C5.25 13.4142 5.44675 13.2698 5.64349 13.3179C6.13302 13.4377 6.64213 13.5007 7.16229 13.5007H16.8377C17.3579 13.5007 17.867 13.4377 18.3565 13.3179Z',
  d13: 'M12.0939 15.7505C12.3579 15.7488 12.7369 15.7465 13.0922 15.8362C13.5475 15.9513 13.9829 16.2146 14.2957 16.7321C14.4335 16.96 14.5108 17.2014 14.5691 17.4497C14.6248 17.6865 14.6731 17.9763 14.7296 18.3154L14.7296 18.3154L15.2399 21.3771C15.308 21.7857 15.032 22.1721 14.6234 22.2402C14.2149 22.3083 13.8284 22.0323 13.7603 21.6237L13.2539 18.5852C13.1924 18.2166 13.1519 17.9759 13.1089 17.7928C13.0674 17.616 13.0346 17.5454 13.012 17.5081C12.9265 17.3666 12.8428 17.3204 12.7248 17.2905C12.5657 17.2503 12.3863 17.2505 12.0847 17.2508H11.9155C11.614 17.2505 11.4345 17.2503 11.2755 17.2905C11.1574 17.3204 11.0737 17.3666 10.9882 17.5081C10.9656 17.5454 10.9329 17.616 10.8913 17.7928C10.8483 17.9759 10.8078 18.2166 10.7464 18.5852L10.2399 21.6237C10.1718 22.0323 9.78538 22.3083 9.37681 22.2402C8.96823 22.1721 8.69222 21.7857 8.76032 21.3771L9.27065 18.3154C9.32717 17.9763 9.37546 17.6865 9.4311 17.4497C9.48944 17.2014 9.56675 16.96 9.70453 16.7321C10.0174 16.2146 10.4527 15.9513 10.908 15.8362C11.2633 15.7465 11.6423 15.7488 11.9063 15.7505H12.0939Z',
  d14: 'M6.00537 11.4927V21.5019',
  d15: 'M18.0024 11.4927V21.5019',
  d16: 'M9.50439 21.0007L10.0043 16.4966L13.9966 16.4971L14.503 21.0007',
  d17: 'M3.00635 21.5015H21.0012',
  d18: 'M12.1658 2.70716C12.9899 6.67966 17.9436 8.63713 21.0015 8.51924C20.1939 10.3045 19.0366 11.3001 17.282 11.4418H6.2896C4.23027 10.8968 3.3002 9.58824 2.99854 8.51924L4.66404 8.42277C10.123 7.29718 11.4236 4.21016 11.9451 2.70716C11.9451 2.43881 12.1658 2.41679 12.1658 2.70716Z',
  d19: 'M7.18184 13.75C6.51452 13.75 5.86502 13.6497 5.25 13.4613L5.25 21.5C5.25 21.9142 5.58579 22.25 6 22.25H18C18.4142 22.25 18.75 21.9142 18.75 21.5V13.4613C18.135 13.6497 17.4855 13.75 16.8182 13.75L7.18184 13.75ZM10.0014 16.1659C9.61917 16.1659 9.29807 16.4532 9.25586 16.8331L8.75586 21.3331L10.2467 21.4987L10.6725 17.666L13.3245 17.6664L13.756 21.4998L15.2466 21.332L14.7401 16.8326C14.6974 16.4533 14.3766 16.1665 13.9949 16.1665L10.0014 16.1659Z',
  d20: 'M21.0004 22.25H3.00037V20.75H21.0004V22.25Z',
  d21: 'M12 1.75C12.3428 1.75 12.6415 1.98422 12.7247 2.3181C13.1562 4.05142 15.3951 7.75 20.9636 7.75H22L21.6723 8.73717C20.9758 10.835 19.0205 12.25 16.8182 12.25H7.18182C4.97945 12.25 3.02418 10.835 2.32773 8.73717L2 7.75H3.03636C8.60489 7.75 10.8438 4.05142 11.2753 2.3181C11.3585 1.98422 11.6572 1.75 12 1.75Z',
};

export const IconPavilonStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pavilon-stroke-rounded IconPavilonStrokeRounded"
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

export const IconPavilonDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pavilon-duotone-rounded IconPavilonDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
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

export const IconPavilonTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pavilon-twotone-rounded IconPavilonTwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPavilonSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pavilon-solid-rounded IconPavilonSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPavilonBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pavilon-bulk-rounded IconPavilonBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPavilonStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pavilon-stroke-sharp IconPavilonStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPavilonSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pavilon-solid-sharp IconPavilonSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPavilon: TheIconSelfPack = {
  name: 'Pavilon',
  StrokeRounded: IconPavilonStrokeRounded,
  DuotoneRounded: IconPavilonDuotoneRounded,
  TwotoneRounded: IconPavilonTwotoneRounded,
  SolidRounded: IconPavilonSolidRounded,
  BulkRounded: IconPavilonBulkRounded,
  StrokeSharp: IconPavilonStrokeSharp,
  SolidSharp: IconPavilonSolidSharp,
};