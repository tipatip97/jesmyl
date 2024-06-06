import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 22H10.8889C6.69863 22 4.6035 22 3.30175 20.7447C2 19.4895 2 17.4692 2 13.4286V8H22V11.5',
  d2: 'M2 8L2.96154 5.69231C3.70726 3.90257 4.08013 3.0077 4.8359 2.50385C5.59167 2 6.56112 2 8.5 2H15.5C17.4389 2 18.4083 2 19.1641 2.50385C19.9199 3.0077 20.2927 3.90257 21.0385 5.69231L22 8',
  d3: 'M12 8V2',
  d4: 'M10 12H14',
  d5: 'M16.7365 16.1746L16.7365 14.7836C16.7365 14.5782 16.7451 14.3702 16.8187 14.1783C17.0148 13.6676 17.5341 12.9985 18.4796 12.9985C19.4251 12.9985 19.9649 13.6676 20.1609 14.1783C20.2346 14.3702 20.2432 14.5782 20.2432 14.7836L20.2431 16.1746M16.806 22.0001H20.194C21.1914 22.0001 22 21.1931 22 20.1977V18.1955C22 17.2001 21.1914 16.3931 20.194 16.3931H16.806C15.8086 16.3931 15 17.2001 15 18.1955V20.1977C15 21.1931 15.8086 22.0001 16.806 22.0001Z',
  d6: 'M3.19043 7.89062V12.9328C3.19043 16.6858 3.19043 18.5623 4.362 19.7282C5.53358 20.8941 7.41919 20.8941 11.1904 20.8941H13.1904C13.9842 20.8941 14.6945 20.8941 15.3321 20.8832C15.3292 20.8761 15.3264 20.8689 15.3236 20.8616C15.1904 20.517 15.1904 20.08 15.1904 19.2062C15.1904 18.3323 15.1904 17.8953 15.3236 17.5507C15.5012 17.0911 15.8419 16.726 16.2707 16.5357C16.4491 16.4564 16.6541 16.4212 16.9404 16.4055V14.5799C16.9404 13.6477 17.7239 12.892 18.6904 12.892C19.6569 12.892 20.4404 13.6477 20.4404 14.5799V16.4055C20.7267 16.4212 20.9317 16.4564 21.1101 16.5357C21.1136 16.5373 21.1171 16.5389 21.1206 16.5404C21.1904 15.5777 21.1904 14.3984 21.1904 12.9328V7.89062H3.19043Z',
  d7: 'M20.3884 2.88965H3.99243C3.2419 2.88965 2.86663 2.88965 2.6068 3.06696C2.47811 3.15477 2.37176 3.27084 2.2961 3.40606C2.14333 3.67907 2.18067 4.04789 2.25536 4.78553C2.38001 6.01673 2.44233 6.63234 2.76866 7.07246C2.93127 7.29179 3.13744 7.47607 3.37457 7.61407C3.85042 7.891 4.47678 7.891 5.72951 7.891H18.6513C19.904 7.891 20.5304 7.891 21.0063 7.61407C21.2434 7.47607 21.4496 7.29179 21.6122 7.07246C21.9385 6.63234 22.0008 6.01673 22.1255 4.78553C22.2002 4.04789 22.2375 3.67907 22.0847 3.40606C22.0091 3.27084 21.9027 3.15477 21.774 3.06696C21.5142 2.88965 21.1389 2.88965 20.3884 2.88965Z',
  d8: 'M3.19043 7.89062V12.9328C3.19043 16.6858 3.19043 18.5623 4.362 19.7282C5.53358 20.8941 7.41919 20.8941 11.1904 20.8941H12.1904M21.1904 10.3913V7.89062',
  d9: 'M16.9328 16.0702V14.6807C16.9328 14.4755 16.9414 14.2677 17.0148 14.076C17.2102 13.5658 17.7278 12.8975 18.6701 12.8975C19.6125 12.8975 20.1504 13.5658 20.3458 14.076C20.4192 14.2677 20.4278 14.4755 20.4278 14.6807V16.0702M17.0021 21.8896H20.3788C21.3729 21.8896 22.1788 21.0835 22.1788 20.0891V18.089C22.1788 17.0946 21.3729 16.2885 20.3788 16.2885H17.0021C16.008 16.2885 15.2021 17.0946 15.2021 18.089V20.0891C15.2021 21.0835 16.008 21.8896 17.0021 21.8896Z',
  d10: 'M10.1904 10.8918H14.1904',
  d11: 'M12 21.9998H10.8889C6.69863 21.9998 4.6035 21.9998 3.30175 20.7445C2 19.4893 2 17.469 2 13.4284V7.99976H22V11.4998',
  d12: 'M2 7.99976L2.96154 5.69207C3.70726 3.90233 4.08013 3.00746 4.8359 2.50361C5.59167 1.99976 6.56112 1.99976 8.5 1.99976H15.5C17.4389 1.99976 18.4083 1.99976 19.1641 2.50361C19.9199 3.00746 20.2927 3.90233 21.0385 5.69207L22 7.99976',
  d13: 'M12 7.99976V1.99976',
  d14: 'M10 11.9998H14',
  d15: 'M16.7365 16.1749L16.7365 14.7839C16.7365 14.5784 16.7451 14.3704 16.8187 14.1785C17.0148 13.6678 17.5341 12.9988 18.4796 12.9988C19.4251 12.9988 19.9649 13.6678 20.1609 14.1785C20.2346 14.3704 20.2432 14.5784 20.2432 14.7839L20.2431 16.1749M16.806 22.0003H20.194C21.1914 22.0003 22 21.1934 22 20.198V18.1957C22 17.2003 21.1914 16.3934 20.194 16.3934H16.806C15.8086 16.3934 15 17.2003 15 18.1957V20.198C15 21.1934 15.8086 22.0003 16.806 22.0003Z',
  d16: 'M15.4724 1.25H8.52755C7.62451 1.24998 6.86914 1.24996 6.25004 1.31454C5.59532 1.38284 5.0034 1.53023 4.45681 1.87979C3.91021 2.22936 3.54072 2.69681 3.22319 3.2503C2.92293 3.77368 2.63242 4.44256 2.28512 5.24222L1.32543 7.45172C1.11784 7.92965 1.35344 8.47851 1.85164 8.67764C2.34984 8.87678 2.922 8.65078 3.12958 8.17285L4.06924 6.00946C4.4418 5.15172 4.69249 4.57789 4.9355 4.1543C5.16699 3.75079 5.34898 3.56262 5.54097 3.43984C5.73295 3.31706 5.98402 3.22828 6.46133 3.17849C6.96239 3.12622 7.61098 3.12494 8.57963 3.12494H11V8H13V3.12494H15.4204C16.389 3.12494 17.0376 3.12622 17.5387 3.17849C18.016 3.22828 18.2671 3.31706 18.459 3.43984C18.651 3.56262 18.833 3.75079 19.0645 4.1543C19.3075 4.57789 19.5582 5.15172 19.9308 6.00946L20.8704 8.17285C21.078 8.65078 21.6502 8.87678 22.1484 8.67764C22.6466 8.47851 22.8822 7.92965 22.6746 7.45172L21.7149 5.24222C21.3676 4.44256 21.0771 3.77368 20.7768 3.2503C20.4593 2.69681 20.0898 2.22936 19.5432 1.87979C18.9966 1.53023 18.4047 1.38284 17.75 1.31454C17.1309 1.24996 16.3755 1.24998 15.4724 1.25Z',
  d17: 'M1.25 8C1.25 7.58579 1.58579 7.25 2 7.25L22 7.25C22.4142 7.25 22.75 7.58579 22.75 8V13.4872C22.75 13.9061 22.75 14.3064 22.7484 14.6888C22.7478 14.824 22.6328 14.846 22.5502 14.7388C22.5183 14.6973 22.5002 14.6559 22.4991 14.6035C22.4533 12.3902 20.6 10.75 18.5 10.75C16.3735 10.75 14.5 12.4318 14.5 14.6875C14.5 14.7822 14.4534 14.8704 14.3779 14.9277C13.769 15.39 13.3071 16.0163 13.0346 16.7211C12.8502 17.1981 12.7946 17.6511 12.7712 18.0186C12.75 18.3523 12.75 18.8576 12.75 19.2459C12.75 19.6342 12.75 20.0227 12.7712 20.3564C12.7946 20.7239 12.8502 21.1769 13.0346 21.6539L13.0423 21.6736C13.2553 22.2165 13.3618 22.4879 13.2725 22.6189C13.1832 22.7499 12.9276 22.7499 12.4162 22.75L10.8338 22.75C8.78537 22.75 7.17418 22.75 5.9157 22.5869C4.6271 22.4198 3.59552 22.0699 2.78115 21.2846C1.96296 20.4957 1.59493 19.4901 1.41991 18.2347C1.24997 17.0159 1.24998 15.4578 1.25 13.4872V13.4872L1.25 8ZM10 10.25C9.58579 10.25 9.25 10.5858 9.25 11C9.25 11.4142 9.58579 11.75 10 11.75L14 11.75C14.4142 11.75 14.75 11.4142 14.75 11C14.75 10.5858 14.4142 10.25 14 10.25L10 10.25Z',
  d18: 'M21 15.7492V14.6875C21 13.3158 19.8548 12.25 18.5 12.25C17.1452 12.25 16 13.3158 16 14.6875V15.7492C15.9249 15.772 15.8502 15.7993 15.7761 15.8322C15.1559 16.1074 14.6789 16.6277 14.4337 17.262C14.3278 17.536 14.2871 17.8173 14.2682 18.1139C14.25 18.3994 14.25 18.7471 14.25 19.1639V19.2111C14.25 19.6278 14.25 19.9756 14.2682 20.2611C14.2871 20.5577 14.3278 20.839 14.4337 21.113C14.6789 21.7474 15.1559 22.2676 15.7761 22.5428C16.0484 22.6637 16.3272 22.7093 16.6128 22.7302C16.8844 22.75 17.2134 22.75 17.5989 22.75H19.4011C19.7866 22.75 20.1156 22.75 20.3872 22.7302C20.6728 22.7093 20.9516 22.6637 21.2239 22.5428C21.8441 22.2676 22.3211 21.7474 22.5663 21.113C22.6722 20.839 22.7129 20.5577 22.7318 20.2611C22.75 19.9756 22.75 19.6279 22.75 19.2111V19.1639C22.75 18.7472 22.75 18.3994 22.7318 18.1139C22.7129 17.8173 22.6722 17.536 22.5663 17.262C22.3211 16.6277 21.8441 16.1074 21.2239 15.8322C21.1498 15.7993 21.0751 15.772 21 15.7492ZM17.5 14.6875C17.5 14.1952 17.9218 13.75 18.5 13.75C19.0782 13.75 19.5 14.1952 19.5 14.6875V15.625H17.5V14.6875Z',
  d19: 'M2 7.25C1.58579 7.25 1.25 7.58579 1.25 8V13.4872C1.24998 15.4578 1.24997 17.0159 1.41991 18.2347C1.59493 19.4901 1.96296 20.4957 2.78115 21.2846C3.59552 22.0699 4.6271 22.4198 5.9157 22.5869C7.17418 22.75 8.78537 22.75 10.8338 22.75L12.4162 22.75C12.9276 22.7499 13.1832 22.7499 13.2725 22.6189C13.3618 22.4879 13.2553 22.2165 13.0423 21.6736C13.0397 21.667 13.0371 21.6604 13.0346 21.6539C12.8502 21.1769 12.7946 20.7239 12.7712 20.3564C12.75 20.0227 12.75 19.6342 12.75 19.2459C12.75 18.8576 12.75 18.3523 12.7712 18.0186C12.7946 17.6511 12.8502 17.1981 13.0346 16.7211C13.3071 16.0163 13.769 15.39 14.3779 14.9277C14.4534 14.8704 14.5 14.7822 14.5 14.6875C14.5 12.4318 16.3735 10.75 18.5 10.75C20.6 10.75 22.4533 12.3902 22.4991 14.6035C22.5002 14.6559 22.5183 14.6973 22.5502 14.7388C22.6328 14.846 22.7478 14.824 22.7484 14.6888C22.75 14.3064 22.75 13.9061 22.75 13.4872V8C22.75 7.58579 22.4142 7.25 22 7.25H2Z',
  d20: 'M9.25 11C9.25 10.5858 9.58579 10.25 10 10.25H14C14.4142 10.25 14.75 10.5858 14.75 11C14.75 11.4142 14.4142 11.75 14 11.75H10C9.58579 11.75 9.25 11.4142 9.25 11Z',
  d21: 'M8.52755 1.25H15.4724C16.3755 1.24998 17.1309 1.24996 17.75 1.31454C18.4047 1.38284 18.9966 1.53023 19.5432 1.87979C20.0898 2.22936 20.4593 2.69681 20.7768 3.2503C21.0771 3.77368 21.3676 4.44256 21.7149 5.24222L22.6746 7.45172C22.7397 7.60176 22.7612 7.75879 22.7446 7.9098C22.7001 7.53812 22.3837 7.25 22 7.25H20.4696L19.9308 6.00946C19.5582 5.15173 19.3075 4.57789 19.0645 4.1543C18.833 3.75079 18.651 3.56262 18.459 3.43984C18.2671 3.31706 18.016 3.22828 17.5387 3.17849C17.0376 3.12622 16.389 3.12494 15.4204 3.12494H13V7.25H11V3.12494H8.57963C7.61098 3.12494 6.96239 3.12622 6.46133 3.17849C5.98402 3.22828 5.73295 3.31706 5.54097 3.43984C5.34898 3.56262 5.16699 3.75079 4.9355 4.1543C4.69249 4.57789 4.4418 5.15173 4.06924 6.00946L3.53042 7.25H2C1.61632 7.25 1.29992 7.53811 1.25537 7.90979C1.23877 7.75879 1.26026 7.60176 1.32543 7.45172L2.28512 5.24223C2.63242 4.44256 2.92293 3.77368 3.22319 3.2503C3.54072 2.69681 3.91021 2.22936 4.45681 1.87979C5.0034 1.53023 5.59532 1.38284 6.25004 1.31454C6.86913 1.24996 7.62453 1.24998 8.52755 1.25Z',
  d22: 'M22 11V8H2V22H12',
  d23: 'M2 8L5 2L19 2.00001L22 8',
  d24: 'M9 12H15',
  d25: 'M20.5 16.5V15C20.5 13.8954 19.6046 13 18.5 13C17.3954 13 16.5 13.8954 16.5 15V16.5M15 16.5H22V22H15V16.5Z',
  d26: 'M18.5 12.25C16.9812 12.25 15.75 13.4812 15.75 15V15.75H14.25V22.75H22.75V15.75H21.25V15C21.25 13.4812 20.0188 12.25 18.5 12.25ZM19.75 15V15.75H17.25V15C17.25 14.3096 17.8096 13.75 18.5 13.75C19.1904 13.75 19.75 14.3096 19.75 15Z',
  d27: 'M19.5131 1.25001L4.47905 1.25L1.25 7.80279V22C1.25 22.4142 1.58579 22.75 2 22.75H12.75V14.25H14.316C14.6702 12.2605 16.4087 10.75 18.5 10.75C20.5913 10.75 22.3298 12.2605 22.684 14.25H22.75V7.80279L19.5131 1.25001ZM20.2683 7.25L18.2948 3.25L12.9842 3.25V7.25H20.2683ZM11.0107 7.25V3.25L5.70005 3.25L3.72656 7.25H11.0107Z',
};

export const IconDeliverySecure01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-secure-01-stroke-rounded IconDeliverySecure01StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliverySecure01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-secure-01-duotone-rounded IconDeliverySecure01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
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
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliverySecure01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-secure-01-twotone-rounded IconDeliverySecure01TwotoneRounded"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliverySecure01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-secure-01-solid-rounded IconDeliverySecure01SolidRounded"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliverySecure01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-secure-01-bulk-rounded IconDeliverySecure01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliverySecure01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-secure-01-stroke-sharp IconDeliverySecure01StrokeSharp"
    >
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliverySecure01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-secure-01-solid-sharp IconDeliverySecure01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDeliverySecure01: TheIconSelfPack = {
  name: 'DeliverySecure01',
  StrokeRounded: IconDeliverySecure01StrokeRounded,
  DuotoneRounded: IconDeliverySecure01DuotoneRounded,
  TwotoneRounded: IconDeliverySecure01TwotoneRounded,
  SolidRounded: IconDeliverySecure01SolidRounded,
  BulkRounded: IconDeliverySecure01BulkRounded,
  StrokeSharp: IconDeliverySecure01StrokeSharp,
  SolidSharp: IconDeliverySecure01SolidSharp,
};