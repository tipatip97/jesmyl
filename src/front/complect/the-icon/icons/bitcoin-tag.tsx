import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.5 5C18.3284 5 19 5.67157 19 6.5C19 7.32843 18.3284 8 17.5 8C16.6716 8 16 7.32843 16 6.5C16 5.67157 16.6716 5 17.5 5Z',
  d2: 'M2.77423 11.1439C1.77108 12.2643 1.7495 13.9546 2.67016 15.1437C4.49711 17.5033 6.49674 19.5029 8.85633 21.3298C10.0454 22.2505 11.7357 22.2289 12.8561 21.2258C15.8979 18.5022 18.6835 15.6559 21.3719 12.5279C21.6377 12.2187 21.8039 11.8397 21.8412 11.4336C22.0062 9.63798 22.3452 4.46467 20.9403 3.05974C19.5353 1.65481 14.362 1.99377 12.5664 2.15876C12.1603 2.19608 11.7813 2.36233 11.472 2.62811C8.34412 5.31646 5.49781 8.10211 2.77423 11.1439Z',
  d3: 'M7.89551 13.4478L11.7164 9.62684M12.8358 10.7462L13.791 9.79104M8.05972 15.5224L9.01491 14.5672M9.80598 11.5373L12.0448 13.7761M12.0448 13.7761C12.4157 14.1471 12.3957 14.7685 12 15.1642L11.5224 15.6418C11.1267 16.0375 10.5053 16.0575 10.1343 15.6866L7.22387 12.7761M12.0448 13.7761C12.4157 14.1471 13.0372 14.127 13.4328 13.7313L13.9105 13.2537C14.3061 12.858 14.3262 12.2366 13.9552 11.8656L11.0448 8.9552',
  d4: 'M7.90622 13.4945L7.37589 14.0248H7.37589L7.90622 13.4945ZM9.8175 11.5832L9.28717 11.0529L9.28717 11.0529L9.8175 11.5832ZM11.7288 9.67194L12.2591 9.14161V9.1416L11.7288 9.67194ZM12.8487 10.7918L12.3183 11.3222V11.3222L12.8487 10.7918ZM14.3346 10.3665C14.6275 10.0736 14.6275 9.59875 14.3346 9.30586C14.0417 9.01296 13.5669 9.01296 13.274 9.30586L14.3346 10.3665ZM7.54014 15.0397C7.24724 15.3326 7.24724 15.8075 7.54014 16.1004C7.83303 16.3933 8.3079 16.3933 8.6008 16.1004L7.54014 15.0397ZM9.02611 14.6144L9.55644 14.0841H9.55644L9.02611 14.6144ZM12.0573 13.823L12.5876 13.2927L12.0573 13.823ZM12.0125 15.2117L11.4822 14.6813V14.6813L12.0125 15.2117ZM11.5347 15.6895L12.065 16.2198V16.2198L11.5347 15.6895ZM7.76461 12.2922C7.47172 11.9993 6.99684 11.9993 6.70395 12.2922C6.41106 12.5851 6.41106 13.06 6.70395 13.3529L7.76461 12.2922ZM11.5872 8.46967C11.2943 8.17678 10.8194 8.17678 10.5265 8.46967C10.2336 8.76256 10.2336 9.23744 10.5265 9.53033L11.5872 8.46967ZM13.9238 13.3004L14.4541 13.8307H14.4541L13.9238 13.3004ZM13.4459 13.7782L12.9156 13.2479H12.9156L13.4459 13.7782ZM8.43655 14.0248L10.3478 12.1135L9.28717 11.0529L7.37589 12.9642L8.43655 14.0248ZM10.3478 12.1135L12.2591 10.2023L11.1985 9.1416L9.28717 11.0529L10.3478 12.1135ZM13.379 11.3222L14.3346 10.3665L13.274 9.30586L12.3183 10.2615L13.379 11.3222ZM8.6008 16.1004L9.55644 15.1447L8.49578 14.0841L7.54014 15.0397L8.6008 16.1004ZM9.28717 12.1135L11.527 14.3533L12.5876 13.2927L10.3478 11.0529L9.28717 12.1135ZM11.4822 14.6813L11.0043 15.1592L12.065 16.2198L12.5428 15.742L11.4822 14.6813ZM10.6763 15.204L9.55644 14.0841L8.49578 15.1447L9.61567 16.2646L10.6763 15.204ZM9.55644 14.0841L8.43655 12.9642L7.37589 14.0248L8.49578 15.1447L9.55644 14.0841ZM8.43655 12.9642L7.76461 12.2922L6.70395 13.3529L7.37589 14.0248L8.43655 12.9642ZM11.0043 15.1592C10.8686 15.2949 10.7228 15.2504 10.6763 15.204L9.61567 16.2646C10.3114 16.9603 11.409 16.8758 12.065 16.2198L11.0043 15.1592ZM11.527 14.3533C11.5734 14.3998 11.6179 14.5456 11.4822 14.6813L12.5428 15.742C13.1988 15.086 13.2833 13.9884 12.5876 13.2927L11.527 14.3533ZM10.5265 9.53033L11.1985 10.2023L12.2591 9.1416L11.5872 8.46967L10.5265 9.53033ZM11.1985 10.2023L12.3183 11.3222L13.379 10.2615L12.2591 9.14161L11.1985 10.2023ZM12.3183 11.3222L13.4382 12.442L14.4989 11.3814L13.379 10.2615L12.3183 11.3222ZM13.3934 12.7701L12.9156 13.2479L13.9763 14.3085L14.4541 13.8307L13.3934 12.7701ZM12.9156 13.2479C12.7799 13.3836 12.6341 13.3392 12.5876 13.2927L11.527 14.3533C12.2227 15.049 13.3203 14.9645 13.9763 14.3085L12.9156 13.2479ZM13.4382 12.442C13.4847 12.4885 13.5291 12.6343 13.3934 12.7701L14.4541 13.8307C15.1101 13.1747 15.1946 12.0771 14.4989 11.3814L13.4382 12.442Z',
  d5: 'M2.67016 15.1437C1.7495 13.9546 1.77108 12.2643 2.77423 11.1439C5.49781 8.10211 8.34412 5.31646 11.472 2.62811C11.7813 2.36233 12.1603 2.19608 12.5664 2.15876C14.362 1.99377 19.5353 1.65481 20.9403 3.05974C22.3452 4.46467 22.0062 9.63798 21.8412 11.4336C21.8039 11.8397 21.6377 12.2187 21.3719 12.5279C18.6835 15.6559 15.8979 18.5022 12.8561 21.2258C11.7357 22.2289 10.0454 22.2505 8.85633 21.3298C6.49674 19.5029 4.49711 17.5033 2.67016 15.1437ZM17.5 5C18.3284 5 19 5.67157 19 6.5C19 7.32843 18.3284 8 17.5 8C16.6716 8 16 7.32843 16 6.5C16 5.67157 16.6716 5 17.5 5Z',
  d6: 'M19.4595 1.57208C20.2081 1.74401 20.9663 2.0252 21.4705 2.5294C21.9747 3.0336 22.2559 3.79184 22.4279 4.54046C22.6055 5.3138 22.6927 6.19907 22.7288 7.06907C22.8011 8.81159 22.6717 10.5921 22.588 11.5022C22.5359 12.0702 22.3035 12.5946 21.9406 13.0168C19.2313 16.1691 16.4228 19.0388 13.3563 21.7845C11.9532 23.0408 9.85825 23.0541 8.39712 21.9228C5.98744 20.0571 3.94283 18.0125 2.07709 15.6028C0.945789 14.1417 0.959114 12.0467 2.21543 10.6436C4.9611 7.57712 7.83082 4.76863 10.9831 2.05931C11.4053 1.69644 11.9298 1.46408 12.4977 1.4119C13.4078 1.32827 15.1884 1.19887 16.9309 1.27116C17.8009 1.30725 18.6861 1.39446 19.4595 1.57208ZM10.5266 8.46967C10.8195 8.17678 11.2944 8.17678 11.5873 8.46967L12.8488 9.73117L13.2741 9.30586C13.567 9.01296 14.0418 9.01296 14.3347 9.30586C14.6276 9.59875 14.6276 10.0736 14.3347 10.3665L13.9094 10.7918L14.499 11.3814C15.1947 12.0771 15.1102 13.1747 14.4542 13.8307L13.9764 14.3085C13.7163 14.5686 13.3869 14.7388 13.0406 14.8062C12.9732 15.1525 12.8029 15.482 12.5429 15.742L12.0651 16.2198C11.4091 16.8758 10.3115 16.9603 9.61576 16.2646L9.0262 15.6751L8.60089 16.1004C8.308 16.3933 7.83312 16.3933 7.54023 16.1004C7.24734 15.8075 7.24734 15.3326 7.54023 15.0397L7.96554 14.6144L6.70404 13.3529C6.41115 13.06 6.41115 12.5851 6.70404 12.2922C6.99694 11.9993 7.47181 11.9993 7.76471 12.2922L7.90631 12.4338L10.6682 9.67194L10.5266 9.53033C10.2337 9.23744 10.2337 8.76256 10.5266 8.46967ZM11.7289 10.7326L10.8783 11.5832L12.5877 13.2927C12.6342 13.3392 12.78 13.3836 12.9157 13.2479L13.3935 12.7701C13.5292 12.6343 13.4848 12.4885 13.4383 12.442L11.7289 10.7326ZM11.527 14.3533L9.81759 12.6439L8.96697 13.4945L10.6764 15.204C10.7229 15.2504 10.8687 15.2949 11.0044 15.1592L11.4822 14.6813C11.618 14.5456 11.5735 14.3998 11.527 14.3533ZM18 4.5C18.8284 4.5 19.5 5.17157 19.5 6C19.5 6.82843 18.8284 7.5 18 7.5C17.1716 7.5 16.5 6.82843 16.5 6C16.5 5.17157 17.1716 4.5 18 4.5Z',
  d7: 'M19.4595 1.57208C20.2081 1.74402 20.9663 2.0252 21.4705 2.5294C21.9747 3.0336 22.2559 3.79184 22.4279 4.54046C22.6055 5.3138 22.6927 6.19907 22.7288 7.06907C22.8011 8.81159 22.6717 10.5921 22.588 11.5022C22.5359 12.0702 22.3035 12.5946 21.9406 13.0168C19.2313 16.1691 16.4228 19.0388 13.3563 21.7845C11.9532 23.0408 9.85825 23.0541 8.39712 21.9228C5.98744 20.0571 3.94283 18.0125 2.07709 15.6028C0.945789 14.1417 0.959114 12.0467 2.21543 10.6436C4.9611 7.57712 7.83082 4.76863 10.9831 2.05931C11.4053 1.69644 11.9298 1.46409 12.4977 1.4119C13.4078 1.32827 15.1884 1.19887 16.9309 1.27116C17.8009 1.30726 18.6861 1.39446 19.4595 1.57208Z',
  d8: 'M10.5266 8.46967C10.8195 8.17678 11.2944 8.17678 11.5873 8.46967L12.8488 9.73117L13.2741 9.30586C13.567 9.01296 14.0418 9.01296 14.3347 9.30586C14.6276 9.59875 14.6276 10.0736 14.3347 10.3665L13.9094 10.7918L14.499 11.3814C15.1947 12.0771 15.1102 13.1747 14.4542 13.8307L13.9764 14.3085C13.7163 14.5686 13.3869 14.7388 13.0406 14.8062C12.9732 15.1525 12.8029 15.482 12.5429 15.742L12.0651 16.2198C11.4091 16.8758 10.3115 16.9603 9.61576 16.2646L9.0262 15.6751L8.60089 16.1004C8.308 16.3933 7.83312 16.3933 7.54023 16.1004C7.24734 15.8075 7.24734 15.3326 7.54023 15.0397L7.96554 14.6144L6.70404 13.3529C6.41115 13.06 6.41115 12.5851 6.70404 12.2922C6.99694 11.9993 7.47181 11.9993 7.76471 12.2922L7.90631 12.4338L10.6682 9.67194L10.5266 9.53033C10.2337 9.23744 10.2337 8.76256 10.5266 8.46967ZM11.7289 10.7326L10.8783 11.5832L12.5877 13.2927C12.6342 13.3392 12.78 13.3836 12.9157 13.2479L13.3935 12.7701C13.5292 12.6343 13.4848 12.4885 13.4383 12.442L11.7289 10.7326ZM11.527 14.3533L9.81759 12.6439L8.96697 13.4945L10.6764 15.204C10.7229 15.2504 10.8687 15.2949 11.0044 15.1592L11.4822 14.6813C11.618 14.5456 11.5735 14.3998 11.527 14.3533Z',
  d9: 'M19.5 6C19.5 5.17157 18.8284 4.5 18 4.5C17.1716 4.5 16.5 5.17157 16.5 6C16.5 6.82843 17.1716 7.5 18 7.5C18.8284 7.5 19.5 6.82843 19.5 6Z',
  d10: 'M19.5589 6C19.5589 5.17157 18.8851 4.5 18.0539 4.5C17.2227 4.5 16.5488 5.17157 16.5488 6C16.5488 6.82843 17.2227 7.5 18.0539 7.5C18.8851 7.5 19.5589 6.82843 19.5589 6Z',
  d11: 'M12.0391 2.06123L2.06825 11.9184C2.02886 11.9573 2.02866 12.0207 2.0678 12.0599L11.9971 22.0012C12.0365 22.0406 12.1005 22.0404 12.1397 22.0008L22.0114 12.0181C22.0299 11.9994 22.0403 11.9742 22.0403 11.9479V2.03223H12.1097C12.0832 2.03223 12.0578 2.04265 12.0391 2.06123Z',
  d12: 'M8.61945 12.8187L12.4519 8.96058M13.6361 10.0536L14.5358 9.14449M8.77538 14.8779L9.74641 13.9362M10.5613 10.8907L12.7701 13.1191M12.7701 13.1191C13.1368 13.4946 13.1723 14.1264 12.7701 14.5165L12.2846 14.9874C11.8823 15.3774 11.188 15.4339 10.8082 14.9874L7.95312 12.1469M12.7701 13.1191C13.1368 13.4946 13.775 13.5092 14.1773 13.1191L14.6628 12.6482C15.065 12.2581 15.1508 11.6126 14.7706 11.2849L11.7917 8.29883',
  d13: 'M11.4697 1.46967C11.6103 1.32902 11.8011 1.25 12 1.25L22.75 1.25L22.75 12C22.75 12.1989 22.671 12.3897 22.5303 12.5304L12.5304 22.5303C12.2375 22.8232 11.7626 22.8232 11.4697 22.5303L1.46967 12.5303C1.32902 12.3896 1.25 12.1989 1.25 12C1.25 11.8011 1.32902 11.6103 1.46967 11.4696L11.4697 1.46967ZM11.7524 7.24414L13.5442 9.03597L14.4998 8.08033L15.5605 9.14099L14.6049 10.0966L15.1944 10.6862C15.8901 11.3819 15.8056 12.4795 15.1496 13.1355L14.6718 13.6133C14.4118 13.8734 14.0823 14.0436 13.736 14.111C13.6686 14.4573 13.4984 14.7868 13.2383 15.0468L12.7605 15.5246C12.1045 16.1806 11.0069 16.2651 10.3112 15.5694L9.72163 14.9799L8.76599 15.9355L7.70533 14.8748L8.66097 13.9192L6.86914 12.1274L7.9298 11.0667L8.60174 11.7386L11.3636 8.97674L10.6917 8.3048L11.7524 7.24414ZM12.4243 10.0374L11.5737 10.888L13.2831 12.5975C13.3296 12.644 13.4754 12.6884 13.6111 12.5527L14.089 12.0749C14.2247 11.9391 14.1802 11.7933 14.1338 11.7468L12.4243 10.0374ZM12.2225 13.6581L10.513 11.9487L9.6624 12.7993L11.3718 14.5088C11.4183 14.5552 11.5641 14.5997 11.6999 14.464L12.1777 13.9861C12.3134 13.8504 12.269 13.7046 12.2225 13.6581ZM19 3.5C19.8284 3.5 20.5 4.17157 20.5 5C20.5 5.82843 19.8284 6.5 19 6.5C18.1716 6.5 17.5 5.82843 17.5 5C17.5 4.17157 18.1716 3.5 19 3.5Z',
};

export const IconBitcoinTagStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-tag-stroke-rounded IconBitcoinTagStrokeRounded"
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

export const IconBitcoinTagDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-tag-duotone-rounded IconBitcoinTagDuotoneRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinTagTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-tag-twotone-rounded IconBitcoinTagTwotoneRounded"
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

export const IconBitcoinTagSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-tag-solid-rounded IconBitcoinTagSolidRounded"
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

export const IconBitcoinTagBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-tag-bulk-rounded IconBitcoinTagBulkRounded"
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinTagStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-tag-stroke-sharp IconBitcoinTagStrokeSharp"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinTagSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-tag-solid-sharp IconBitcoinTagSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoinTag: TheIconSelfPack = {
  name: 'BitcoinTag',
  StrokeRounded: IconBitcoinTagStrokeRounded,
  DuotoneRounded: IconBitcoinTagDuotoneRounded,
  TwotoneRounded: IconBitcoinTagTwotoneRounded,
  SolidRounded: IconBitcoinTagSolidRounded,
  BulkRounded: IconBitcoinTagBulkRounded,
  StrokeSharp: IconBitcoinTagStrokeSharp,
  SolidSharp: IconBitcoinTagSolidSharp,
};