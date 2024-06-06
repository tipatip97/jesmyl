import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.53809 17H11.0501',
  d2: 'M18.5625 17H21.0665',
  d3: 'M12.5349 5C13.9155 5 15.0347 6.11929 15.0347 7.5C15.0347 8.88071 13.9155 10 12.5349 10C11.1543 10 10.0352 8.88071 10.0352 7.5C10.0352 6.11929 11.1543 5 12.5349 5ZM12.5349 5C12.7016 4.5 13.4348 3.4 15.0347 3',
  d4: 'M10.0206 8.01509C4.07131 10.2637 1.67194 11.3016 2.03569 12.0463C4.01481 12.9814 7.65062 12.7408 11.3708 12.6012C12.3945 12.5628 13.4052 13.0702 13.6374 14.0776C13.8013 14.7892 13.8446 15.4095 14.168 15.8036C14.3534 16.0296 14.6687 16.1064 14.9501 16.0328C15.7105 15.8338 16.0248 14.9841 16.4001 13.4933C16.4734 13.2022 16.5774 12.8897 16.8586 12.7921C18.1189 12.3547 21.998 13.3194 21.998 11.5424C21.9354 9.69217 21.2618 8.53954 19.0991 6.82526C18.4033 6.27374 17.5245 6.00001 16.6426 6.0708C15.7174 6.14507 15.2864 6.26551 15.0112 6.50339',
  d5: 'M2.0127 11.9929L2.98803 16.2984C3.48754 18.5524 3.73729 19.6793 4.56 20.3397C5.38272 21.0001 6.53691 21.0001 8.8453 21.0001H17.4227C19.1452 21.0001 20.0064 21.0001 20.5779 20.4821C21.1495 19.9641 21.234 19.107 21.403 17.3927L21.9935 11.6338',
  d6: 'M17.3902 21H8.81188C6.50327 21 5.34897 21 4.52617 20.3396C3.70338 19.6792 3.4536 18.5523 2.95404 16.2983L2.01399 11.9067C2.01204 11.8987 2.01031 11.8906 2.00879 11.8824L2.01399 11.9067C2.19923 12.6685 4.32993 12.6685 8.54745 12.6685H11.7623C13.2854 12.6685 13.6968 13.7245 13.6938 14.7443C13.692 15.3807 14.1701 16 14.8387 16C15.4544 16 15.8095 15.346 15.9457 14.8232C16.2446 13.6756 16.3941 13.1018 16.6295 12.9051C17.0433 12.5592 17.762 12.6685 18.2553 12.6685C20.1762 12.6685 21.1366 12.6685 21.7112 11.7244C21.8689 11.4653 21.9574 11.233 21.9885 11.0078L21.3709 17.3926C21.2018 19.1069 21.1173 19.964 20.5456 20.482C19.974 21 19.1127 21 17.3902 21Z',
  d7: 'M10.001 7.5C10.001 8.88071 11.1203 10 12.501 10C13.8817 10 15.001 8.88071 15.001 7.5C15.001 6.11929 13.8817 5 12.501 5C11.1203 5 10.001 6.11929 10.001 7.5Z',
  d8: 'M3.50098 17H11.001',
  d9: 'M18.501 17H21.001',
  d10: 'M12.501 5C13.8817 5 15.001 6.11929 15.001 7.5C15.001 8.88071 13.8817 10 12.501 10C11.1203 10 10.001 8.88071 10.001 7.5C10.001 6.11929 11.1203 5 12.501 5ZM12.501 5C12.6677 4.5 13.401 3.4 15.001 3',
  d11: 'M2.00098 12L2.95367 16.2983C3.45323 18.5523 3.70301 19.6792 4.5258 20.3396C5.3486 21 6.5029 21 8.81151 21H17.3898C19.1124 21 19.9737 21 20.5453 20.482C21.1169 19.964 21.2014 19.1069 21.3705 17.3926L22.001 11',
  d12: 'M10.0216 8.01484C4.07229 10.2635 1.67292 11.3014 2.03667 12.0461C4.01579 12.9812 7.6516 12.7406 11.3718 12.601C12.3955 12.5626 13.4062 13.07 13.6384 14.0774C13.8023 14.789 13.8456 15.4093 14.169 15.8034C14.3544 16.0294 14.6697 16.1062 14.9511 16.0326C15.7115 15.8336 16.0258 14.9839 16.4011 13.4931C16.4744 13.202 16.5784 12.8895 16.8596 12.7919C18.1199 12.3545 21.999 13.3192 21.999 11.5422C21.9364 9.69192 21.2628 8.53929 19.1001 6.82501C18.4043 6.27349 17.5255 5.99976 16.6436 6.07055C15.7184 6.14482 15.2874 6.26526 15.0122 6.50314',
  d13: 'M3.55762 17H11.0115',
  d14: 'M18.4658 17H20.9505',
  d15: 'M12.5022 5C13.8744 5 14.9868 6.11929 14.9868 7.5C14.9868 8.88071 13.8744 10 12.5022 10C11.13 10 10.0176 8.88071 10.0176 7.5C10.0176 6.11929 11.13 5 12.5022 5ZM12.5022 5C12.6679 4.5 13.3967 3.4 14.9868 3',
  d16: 'M2.06738 12L3.01422 16.2983C3.51071 18.5523 3.75895 19.6792 4.57668 20.3396C5.39443 21 6.54163 21 8.83605 21H17.3616C19.0736 21 19.9296 21 20.4977 20.482C21.0658 19.964 21.1498 19.1069 21.3178 17.3926L21.9445 11',
  d17: 'M9.78338 8.07323C3.58528 10.2577 1.67977 11.3471 2.04129 12.0918C4.00824 13.027 7.29391 12.6014 11.3449 12.6014C12.5816 12.6014 13.3668 13.0704 13.5976 14.0778C13.7605 14.7894 13.8036 15.4096 14.125 15.8038C14.3093 16.0298 14.6226 16.1066 14.9022 16.033C15.6579 15.834 15.9704 14.9843 16.3433 13.4935C16.4162 13.2024 16.5195 12.8899 16.7991 12.7923C17.9011 12.4075 20.359 13.2426 21.5778 11.9423C21.9312 11.5653 21.9882 11.008 21.8794 10.5028C21.6212 9.30337 21.0062 8.31231 19.2259 6.89242C18.5343 6.34089 17.4426 5.93827 16.5662 6.00906C15.6467 6.08333 15.1461 6.34698 14.7846 6.52885',
  d18: 'M17.1827 7.04249C17.6631 7.12836 18.1601 7.3432 18.6459 7.66977C19.3721 8.15795 19.9942 8.84541 20.3873 9.51759C20.6804 10.0186 20.7676 10.3571 20.7781 10.5849C20.8108 11.2959 20.4086 11.5835 19.9349 11.7522C19.7302 11.825 19.4647 11.8802 19.1066 11.9146C18.8558 11.9185 18.5734 11.9189 18.2527 11.9189C18.1765 11.9189 18.0979 11.9159 18.0004 11.9122C17.9615 11.9108 17.9197 11.9092 17.8739 11.9076C17.7257 11.9026 17.5497 11.8988 17.369 11.9086C17.028 11.9271 16.5421 11.9984 16.1454 12.3299C15.8466 12.5795 15.698 12.9675 15.5968 13.27C15.4844 13.6059 15.367 14.0564 15.2238 14.6061L15.2164 14.6345C15.1656 14.8293 15.0801 15.0176 14.9824 15.1399C14.8935 15.2512 14.8456 15.2506 14.8347 15.2504C14.7465 15.2504 14.6579 15.213 14.5776 15.1202C14.492 15.0215 14.4391 14.8823 14.4395 14.7469C14.4412 14.1551 14.3261 13.4493 13.8963 12.875C13.4376 12.262 12.712 11.9189 11.7572 11.9189H8.54119C6.41514 11.9189 4.86852 11.9181 3.82625 11.8265C3.72739 11.8178 3.70123 11.689 3.78881 11.6423C3.84263 11.6137 3.89765 11.5851 3.94708 11.5607C4.80246 11.1395 6.17902 10.6283 8.19402 9.91474L8.3365 9.86429C8.45462 9.82246 8.50537 9.68363 8.44823 9.57212C8.22137 9.12933 8.06495 8.64449 7.99376 8.13238C7.97569 8.00234 7.84406 7.91697 7.7203 7.9608L7.52639 8.02947C5.54229 8.73209 4.04541 9.28301 3.06359 9.76644C2.57959 10.0048 2.13586 10.2664 1.81525 10.5764C1.48889 10.892 1.17086 11.3847 1.26765 12.0159C1.26787 12.0174 1.2669 12.0188 1.26542 12.0191C1.26391 12.0194 1.26292 12.0209 1.26321 12.0224C1.26631 12.0389 1.26976 12.0553 1.27357 12.0718L2.06667 15.7756C2.11534 16.0029 2.13967 16.1166 2.22218 16.1833C2.3047 16.25 2.42092 16.25 2.65337 16.25H9.00049C9.4147 16.25 9.75049 16.5858 9.75049 17C9.75049 17.4142 9.4147 17.75 9.00049 17.75H3.26545C2.91194 17.75 2.73518 17.75 2.64514 17.8683C2.55509 17.9865 2.60108 18.1531 2.69305 18.4864C2.76057 18.731 2.82986 18.9576 2.9035 19.1664C3.15677 19.8846 3.48787 20.4747 4.04907 20.925C4.61023 21.3752 5.25819 21.5706 6.01433 21.6624C6.73986 21.7504 7.64382 21.7504 8.75803 21.7504H17.4361C18.256 21.7504 18.9428 21.7504 19.4932 21.6795C20.0757 21.6044 20.6042 21.4397 21.0474 21.0382C21.4906 20.6367 21.7065 20.1271 21.8384 19.5548C21.9144 19.2252 21.9692 18.8425 22.0185 18.4091C22.0534 18.1033 22.0708 17.9505 21.9813 17.8502C21.8919 17.75 21.7363 17.75 21.4251 17.75H19.5005C19.0863 17.75 18.7505 17.4142 18.7505 17C18.7505 16.5858 19.0863 16.25 19.5005 16.25H21.6921C21.9504 16.25 22.0796 16.25 22.1654 16.1723C22.2511 16.0946 22.2638 15.966 22.2892 15.7089L22.7465 11.0743C22.7745 10.8886 22.7853 10.695 22.7759 10.4929C22.7459 9.84048 22.51 9.1853 22.1137 8.50787C21.5738 7.58473 20.7463 6.67177 19.7616 6.00992C18.7174 5.30798 17.7224 5.04798 16.6936 5.09034C16.5459 5.09642 16.4641 5.26008 16.5328 5.39102C16.769 5.84153 16.9319 6.33663 17.0056 6.86058C17.0186 6.95298 17.0909 7.02608 17.1827 7.04249Z',
  d19: 'M14.7572 2.03009C15.293 1.89615 15.836 2.22191 15.9699 2.7577C16.1039 3.2935 15.7781 3.83643 15.2423 3.97038C14.6778 4.11151 14.2699 4.36058 13.9865 4.60928C15.0338 5.14888 15.75 6.24089 15.75 7.50018C15.75 9.2951 14.2949 10.7502 12.5 10.7502C10.7051 10.7502 9.25 9.2951 9.25 7.50018C9.25 5.98518 10.2866 4.7123 11.6892 4.35212C12.0852 3.54956 13.051 2.45665 14.7572 2.03009Z',
  d20: 'M2 17H11',
  d21: 'M18 17H22',
  d22: 'M12.5 5C13.8807 5 15 6.11929 15 7.5C15 8.88071 13.8807 10 12.5 10C11.1193 10 10 8.88071 10 7.5C10 6.11929 11.1193 5 12.5 5ZM12.5 5C12.6667 4.5 13.4 3.4 15 3',
  d23: 'M15 7.3125L18 6L22 13H16V15.5C16 16.3284 15.3284 17 14.5 17C13.6716 17 13 16.3284 13 15.5V13H2L10.5 9.28125',
  d24: 'M22 13V21H2V13',
  d25: 'M15.5096 6.25324C15.1815 5.44972 14.5417 4.80687 13.7406 4.47539C14.0551 4.17653 14.5221 3.87204 15.1819 3.7069L14.8181 2.25C13.3125 2.62684 12.4224 3.54527 12.0074 4.26704C10.4462 4.50469 9.25 5.85432 9.25 7.48367C9.25 7.97614 9.35928 8.44306 9.55489 8.86145L1.69946 12.3022C1.3742 12.4447 1.19327 12.7959 1.26596 13.1438C1.33865 13.4917 1.64505 13.741 2.00007 13.741H12.2501V15.493C12.2501 16.7371 13.2574 17.7456 14.5001 17.7456C15.7427 17.7456 16.7501 16.7371 16.7501 15.493V13.741H22.0001C22.2674 13.741 22.5146 13.5985 22.6488 13.367C22.7829 13.1355 22.7839 12.85 22.6513 12.6176L18.6513 5.60944C18.4611 5.27627 18.0506 5.14026 17.6995 5.29406L15.5096 6.25324ZM15.7355 7.79348C15.5796 9.44517 14.1906 10.7374 12.5 10.7374C11.76 10.7374 11.0778 10.4898 10.5315 10.0729L5.58553 12.2392H13.0001C13.4143 12.2392 13.7501 12.5754 13.7501 12.9901V15.493C13.7501 15.9077 14.0859 16.2439 14.5001 16.2439C14.9143 16.2439 15.2501 15.9077 15.2501 15.493V12.9901C15.2501 12.5754 15.5859 12.2392 16.0001 12.2392H20.7077L17.6833 6.94033L15.7355 7.79348ZM14.25 7.48367C14.25 6.51605 13.4665 5.73164 12.5 5.73164C11.5335 5.73164 10.75 6.51605 10.75 7.48367C10.75 8.45129 11.5335 9.2357 12.5 9.2357C13.4665 9.2357 14.25 8.45129 14.25 7.48367Z',
  d26: 'M13.7406 4.47539C14.5417 4.80687 15.1815 5.44972 15.5096 6.25324L17.6995 5.29406C18.0506 5.14026 18.4611 5.27627 18.6513 5.60944L22.6513 12.6176C22.7839 12.85 22.7829 13.1355 22.6488 13.367C22.5146 13.5985 22.2674 13.741 22.0001 13.741H16.7501V15.493C16.7501 16.7371 15.7427 17.7456 14.5001 17.7456C13.2574 17.7456 12.2501 16.7371 12.2501 15.493V13.741H2.00007C1.64505 13.741 1.33865 13.4917 1.26596 13.1438C1.19327 12.7959 1.3742 12.4447 1.69946 12.3022L9.55489 8.86145C9.35928 8.44306 9.25 7.97614 9.25 7.48367C9.25 5.85432 10.4462 4.50469 12.0074 4.26704C12.4224 3.54527 13.3125 2.62684 14.8181 2.25L15.1819 3.7069C14.5221 3.87204 14.0551 4.17653 13.7406 4.47539ZM12.5 5.73157C13.4665 5.73157 14.25 6.51598 14.25 7.4836C14.25 8.45122 13.4665 9.23563 12.5 9.23563C11.5335 9.23563 10.75 8.45122 10.75 7.4836C10.75 6.51598 11.5335 5.73157 12.5 5.73157Z',
  d27: 'M1.25 12.9899C1.25 12.5752 1.58579 12.239 2 12.239H22C22.4142 12.239 22.75 12.5752 22.75 12.9899V20.9992C22.75 21.4139 22.4142 21.75 22 21.75H2C1.58579 21.75 1.25 21.4139 1.25 20.9992V12.9899ZM2.75 17.7454V20.2483H21.25V17.7454H18V16.2437H21.25V13.7408H2.75V16.2437H11V17.7454H2.75Z',
};

export const IconCheeseCake01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-cake-01-stroke-rounded IconCheeseCake01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCheeseCake01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-cake-01-duotone-rounded IconCheeseCake01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCheeseCake01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-cake-01-twotone-rounded IconCheeseCake01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCheeseCake01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-cake-01-solid-rounded IconCheeseCake01SolidRounded"
    >
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheeseCake01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-cake-01-bulk-rounded IconCheeseCake01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheeseCake01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-cake-01-stroke-sharp IconCheeseCake01StrokeSharp"
    >
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCheeseCake01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cheese-cake-01-solid-sharp IconCheeseCake01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfCheeseCake01: TheIconSelfPack = {
  name: 'CheeseCake01',
  StrokeRounded: IconCheeseCake01StrokeRounded,
  DuotoneRounded: IconCheeseCake01DuotoneRounded,
  TwotoneRounded: IconCheeseCake01TwotoneRounded,
  SolidRounded: IconCheeseCake01SolidRounded,
  BulkRounded: IconCheeseCake01BulkRounded,
  StrokeSharp: IconCheeseCake01StrokeSharp,
  SolidSharp: IconCheeseCake01SolidSharp,
};