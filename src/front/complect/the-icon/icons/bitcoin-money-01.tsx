import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 4H8C5.17157 4 3.75736 4 2.87868 4.93726C2 5.87452 2 7.38301 2 10.4V13.6C2 16.617 2 18.1255 2.87868 19.0627C3.75736 20 5.17157 20 8 20H16C18.8284 20 20.2426 20 21.1213 19.0627C22 18.1255 22 16.617 22 13.6V10.4C22 7.38301 22 5.87452 21.1213 4.93726C20.2426 4 18.8284 4 16 4Z',
  d2: 'M6.87398 4C6.95625 4.31962 7 4.6547 7 5C7 7.20914 5.20914 9 3 9C2.6547 9 2.31962 8.95625 2 8.87398',
  d3: 'M22 8.87398C21.6804 8.95625 21.3453 9 21 9C18.7909 9 17 7.20914 17 5C17 4.6547 17.0438 4.31962 17.126 4',
  d4: 'M17.126 20C17.0438 19.6804 17 19.3453 17 19C17 16.7909 18.7909 15 21 15C21.3453 15 21.6804 15.0438 22 15.126',
  d5: 'M2 15.126C2.31962 15.0438 2.6547 15 3 15C5.20914 15 7 16.7909 7 19C7 19.3453 6.95625 19.6804 6.87398 20',
  d6: 'M10.4375 14.6667L10.4375 9.33333M12 9.33333V8M12 16V14.6667M10.4375 12H13.5625M13.5625 12C14.0803 12 14.5 12.4477 14.5 13V13.6667C14.5 14.219 14.0803 14.6667 13.5625 14.6667H9.5M13.5625 12C14.0803 12 14.5 11.5523 14.5 11V10.3333C14.5 9.78105 14.0803 9.33333 13.5625 9.33333H9.5',
  d7: 'M8 4H16C16.403 4 16.7772 4 17.1253 4.00271C17.0435 4.32151 17 4.65568 17 5C17 7.20914 18.7909 9 21 9C21.3433 9 21.6765 8.95675 21.9944 8.87541C22 9.33599 22 9.84221 22 10.4V13.6C22 14.1578 22 14.664 21.9944 15.1246C21.6765 15.0433 21.3433 15 21 15C18.7909 15 17 16.7909 17 19C17 19.3443 17.0435 19.6785 17.1253 19.9973C16.7772 20 16.403 20 16 20H8C7.59703 20 7.22277 20 6.87468 19.9973C6.95649 19.6785 7 19.3443 7 19C7 16.7909 5.20914 15 3 15C2.6567 15 2.3235 15.0432 2.00555 15.1246C2 14.664 2 14.1578 2 13.6V10.4C2 9.84221 2 9.33599 2.00555 8.87541C2.3235 8.95675 2.6567 9 3 9C5.20914 9 7 7.20914 7 5C7 4.65568 6.95649 4.32151 6.87468 4.00271C7.22277 4 7.59703 4 8 4Z',
  d8: 'M16.5454 3.24902L7.39476 3.24912C7.63239 3.8808 7.74951 4.5904 7.74951 4.99929C7.74951 7.62264 5.62286 9.74929 2.99951 9.74929C2.6114 9.74929 1.8529 9.74929 1.25004 9.49514L1.25 14.548C1.4649 14.4764 1.66494 14.4251 1.83882 14.3923C2.21105 14.2988 2.60002 14.2493 2.99951 14.2493C5.62286 14.2493 7.74951 16.3759 7.74951 18.9993C7.74951 19.3897 7.68138 20.1365 7.48021 20.7486L16.5415 20.7486C16.3215 20.1418 16.2495 19.3931 16.2495 18.9993C16.2495 16.3759 18.3762 14.2493 20.9995 14.2493C21.3874 14.2493 22.1255 14.3131 22.7482 14.4982L22.7479 9.43964C21.9832 9.70021 21.401 9.74929 20.9995 9.74929C18.3762 9.74929 16.2495 7.62264 16.2495 4.99929C16.2495 4.60035 16.2495 4.01575 16.5454 3.24902ZM22.7163 7.82938C22.6992 7.4534 22.6731 7.10875 22.6334 6.79375C22.5141 5.84762 22.2606 5.05573 21.6676 4.42311C21.0681 3.78364 20.3067 3.50396 19.3974 3.37356C19.0208 3.31956 18.6003 3.28893 18.1338 3.27156C17.7973 3.89017 17.7495 4.71758 17.7495 4.99929C17.7495 6.79421 19.2046 8.24929 20.9995 8.24929C21.2812 8.24929 22.0921 8.19328 22.7163 7.82938ZM22.7213 16.0511C21.9649 15.7493 21.2812 15.7493 20.9995 15.7493C19.2046 15.7493 17.7495 17.2044 17.7495 18.9993C17.7495 19.8342 17.9708 20.3513 18.1508 20.7254C18.6105 20.7079 19.0254 20.6774 19.3974 20.6241C20.3067 20.4936 21.0681 20.214 21.6676 19.5745C22.2606 18.9419 22.5141 18.15 22.6334 17.2039C22.6772 16.8564 22.7044 16.4729 22.7213 16.0511ZM6.24951 18.9993C6.24951 19.281 6.24951 19.9297 5.90098 20.7274C5.41984 20.7103 4.98717 20.6795 4.60081 20.6241C3.6915 20.4936 2.93013 20.214 2.33062 19.5745C1.73754 18.9419 1.48407 18.15 1.36482 17.2039C1.32445 16.8836 1.29816 16.5326 1.28104 16.1492C1.61023 15.9934 1.97285 15.8902 2.18646 15.8516C2.44552 15.785 2.7178 15.7493 2.99951 15.7493C4.79444 15.7493 6.24951 17.2044 6.24951 18.9993ZM1.27727 7.93694C1.98132 8.24929 2.7178 8.24929 2.99951 8.24929C4.79444 8.24929 6.24951 6.79421 6.24951 4.99929C6.24951 4.72414 6.21549 4.45799 6.15178 4.20436C6.08287 3.98779 5.94766 3.65135 5.75203 3.27604C5.3301 3.29404 4.94688 3.32393 4.60081 3.37356C3.6915 3.50396 2.93013 3.78364 2.33062 4.42311C1.73754 5.05573 1.48407 5.84762 1.36482 6.79375C1.32136 7.13855 1.29422 7.51888 1.27727 7.93694ZM12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8V8.58333H9.5C9.08579 8.58333 8.75 8.91912 8.75 9.33333C8.75 9.74755 9.08579 10.0833 9.5 10.0833H9.6875V13.9167H9.5C9.08579 13.9167 8.75 14.2525 8.75 14.6667C8.75 15.0809 9.08579 15.4167 9.5 15.4167H11.25V16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V15.4167H13.5625C14.5393 15.4167 15.25 14.5868 15.25 13.6667V13C15.25 12.6376 15.1398 12.2892 14.9465 12C15.1398 11.7108 15.25 11.3624 15.25 11V10.3333C15.25 9.41317 14.5393 8.58333 13.5625 8.58333H12.75V8ZM11.1875 11.25V10.0833H13.5625C13.6212 10.0833 13.75 10.1489 13.75 10.3333V11C13.75 11.1844 13.6212 11.25 13.5625 11.25H11.1875ZM11.1875 12.75H13.5625C13.6212 12.75 13.75 12.8156 13.75 13V13.6667C13.75 13.8511 13.6212 13.9167 13.5625 13.9167H11.1875V12.75Z',
  d9: 'M16.5454 3.24902L7.39476 3.24912C7.63239 3.8808 7.74951 4.5904 7.74951 4.99929C7.74951 7.62264 5.62286 9.74929 2.99951 9.74929C2.6114 9.74929 1.8529 9.74929 1.25004 9.49514L1.25 14.548C1.4649 14.4764 1.66494 14.4251 1.83882 14.3923C2.21105 14.2988 2.60002 14.2493 2.99951 14.2493C5.62286 14.2493 7.74951 16.3759 7.74951 18.9993C7.74951 19.3897 7.68138 20.1365 7.48021 20.7486L16.5415 20.7486C16.3215 20.1418 16.2495 19.3931 16.2495 18.9993C16.2495 16.3759 18.3762 14.2493 20.9995 14.2493C21.3874 14.2493 22.1255 14.3131 22.7482 14.4982L22.7479 9.43964C21.9832 9.70021 21.401 9.74929 20.9995 9.74929C18.3762 9.74929 16.2495 7.62264 16.2495 4.99929C16.2495 4.60035 16.2495 4.01575 16.5454 3.24902Z',
  d10: 'M22.7164 7.82931C22.6992 7.45333 22.6731 7.10868 22.6334 6.79367C22.5142 5.84755 22.2607 5.05566 21.6676 4.42304C21.0681 3.78356 20.3068 3.50389 19.3974 3.37349C19.0209 3.31949 18.6004 3.28886 18.1339 3.27148C17.7974 3.8901 17.7496 4.7175 17.7496 4.99921C17.7496 6.79414 19.2047 8.24922 20.9996 8.24922C21.2813 8.24922 22.0921 8.19321 22.7164 7.82931Z',
  d11: 'M20.9996 15.7492C21.2813 15.7492 21.965 15.7492 22.7214 16.0511C22.7045 16.4729 22.6772 16.8564 22.6334 17.2038C22.5142 18.1499 22.2607 18.9418 21.6676 19.5744C21.0681 20.2139 20.3068 20.4936 19.3974 20.624C19.0255 20.6773 18.6106 20.7079 18.1509 20.7253C17.9709 20.3512 17.7496 19.8341 17.7496 18.9992C17.7496 17.2043 19.2047 15.7492 20.9996 15.7492Z',
  d12: 'M6.24959 18.9992C6.24959 19.2809 6.24959 19.9296 5.90106 20.7273C5.41991 20.7102 4.98724 20.6794 4.60089 20.624C3.69157 20.4936 2.9302 20.2139 2.3307 19.5744C1.73762 18.9418 1.48415 18.1499 1.36489 17.2038C1.32452 16.8835 1.29823 16.5325 1.28111 16.1491C1.61031 15.9934 1.97292 15.8901 2.18653 15.8516C2.44559 15.7849 2.71788 15.7492 2.99959 15.7492C4.79451 15.7492 6.24959 17.2043 6.24959 18.9992Z',
  d13: 'M2.99959 8.24921C2.71788 8.24921 1.9814 8.24921 1.27734 7.93687C1.29429 7.51881 1.32143 7.13848 1.36489 6.79367C1.48415 5.84755 1.73762 5.05566 2.3307 4.42304C2.9302 3.78356 3.69157 3.50389 4.60089 3.37349C4.94695 3.32386 5.33017 3.29397 5.7521 3.27597C5.94774 3.65127 6.08295 3.98772 6.15185 4.20429C6.21556 4.45792 6.24959 4.72407 6.24959 4.99921C6.24959 6.79414 4.79451 8.24921 2.99959 8.24921Z',
  d14: 'M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V8.58333H13.5625C14.5393 8.58333 15.25 9.41317 15.25 10.3333V11C15.25 11.3624 15.1398 11.7108 14.9465 12C15.1398 12.2892 15.25 12.6376 15.25 13V13.6667C15.25 14.5868 14.5393 15.4167 13.5625 15.4167H12.75V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V15.4167H9.5C9.08579 15.4167 8.75 15.0809 8.75 14.6667C8.75 14.2525 9.08579 13.9167 9.5 13.9167H9.6875L9.6875 10.0833H9.5C9.08579 10.0833 8.75 9.74755 8.75 9.33333C8.75 8.91912 9.08579 8.58333 9.5 8.58333H11.25V8C11.25 7.58579 11.5858 7.25 12 7.25ZM11.1875 10.0833V11.25H13.5625C13.6212 11.25 13.75 11.1844 13.75 11V10.3333C13.75 10.1489 13.6212 10.0833 13.5625 10.0833H11.1875ZM13.5625 12.75H11.1875L11.1875 13.9167H13.5625C13.6212 13.9167 13.75 13.8511 13.75 13.6667V13C13.75 12.8156 13.6212 12.75 13.5625 12.75Z',
  d15: 'M22 4H2V20H22V4Z',
  d16: 'M6.24951 3.24902H1.24951V8.24902H2.99951C4.79444 8.24902 6.24951 6.79395 6.24951 4.99902V3.24902ZM1.24951 9.74902H2.99951C5.62286 9.74902 7.74951 7.62237 7.74951 4.99902V3.24902H16.7495V4.49902C16.7495 7.12237 18.8762 9.24902 21.4995 9.24902H22.7495V14.249H20.9995C18.3762 14.249 16.2495 16.3757 16.2495 18.999V20.749H7.74951V18.999C7.74951 16.3757 5.62286 14.249 2.99951 14.249H1.24951V9.74902ZM6.24951 20.749V18.999C6.24951 17.2041 4.79444 15.749 2.99951 15.749H1.24951V20.749H6.24951ZM17.7495 20.749H22.7495V15.749H20.9995C19.2046 15.749 17.7495 17.2041 17.7495 18.999V20.749ZM22.7495 7.74902V3.24902H18.2495V4.49902C18.2495 6.29395 19.7046 7.74902 21.4995 7.74902H22.7495ZM12.7505 8.58333V7.25H11.2505V8.58333H8.75049V10.0833H9.68799V13.9167H8.75049V15.4167H11.2505V16.75H12.7505V15.4167H13.563C14.5398 15.4167 15.2505 14.5868 15.2505 13.6667V13C15.2505 12.6376 15.1403 12.2892 14.9469 12C15.1403 11.7108 15.2505 11.3624 15.2505 11V10.3333C15.2505 9.41317 14.5398 8.58333 13.563 8.58333H12.7505ZM11.188 11.25V10.0833H13.563C13.6217 10.0833 13.7505 10.1489 13.7505 10.3333V11C13.7505 11.1844 13.6217 11.25 13.563 11.25H11.188ZM11.188 12.75H13.563C13.6217 12.75 13.7505 12.8156 13.7505 13V13.6667C13.7505 13.8511 13.6217 13.9167 13.563 13.9167H11.188V12.75Z',
};

export const IconBitcoinMoney01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-money-01-stroke-rounded IconBitcoinMoney01StrokeRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinMoney01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-money-01-duotone-rounded IconBitcoinMoney01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinMoney01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-money-01-twotone-rounded IconBitcoinMoney01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBitcoinMoney01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-money-01-solid-rounded IconBitcoinMoney01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinMoney01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-money-01-bulk-rounded IconBitcoinMoney01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinMoney01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-money-01-stroke-sharp IconBitcoinMoney01StrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinMoney01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-money-01-solid-sharp IconBitcoinMoney01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoinMoney01: TheIconSelfPack = {
  name: 'BitcoinMoney01',
  StrokeRounded: IconBitcoinMoney01StrokeRounded,
  DuotoneRounded: IconBitcoinMoney01DuotoneRounded,
  TwotoneRounded: IconBitcoinMoney01TwotoneRounded,
  SolidRounded: IconBitcoinMoney01SolidRounded,
  BulkRounded: IconBitcoinMoney01BulkRounded,
  StrokeSharp: IconBitcoinMoney01StrokeSharp,
  SolidSharp: IconBitcoinMoney01SolidSharp,
};