import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 7H7.00897M12.991 7H13',
  d2: 'M17.991 14.5H18M14 14.5H14.009',
  d3: 'M10 16C10 18.7614 12.6863 21 16 21C16.9072 21 17.7673 20.8322 18.5382 20.5319C18.7266 20.4585 18.9312 20.4321 19.13 20.4689L22 21L21.3483 18.9702C21.2531 18.6738 21.3075 18.3533 21.4575 18.0805C21.8058 17.447 22 16.7424 22 16C22 13.2386 19.3137 11 16 11C12.6863 11 10 13.2386 10 16Z',
  d4: 'M17.8731 11.2485C17.9565 10.8434 18 10.4261 18 10C18 6.13401 14.4183 3 10 3C5.58172 3 2 6.13401 2 10C2 11.1124 2.29653 12.1641 2.8242 13.0981C2.97102 13.358 3.01971 13.6653 2.93243 13.9507L2 17L5.91414 16.2394C6.12183 16.199 6.33621 16.2273 6.53119 16.3094C7.61561 16.7662 8.84138 17.0157 10.1198 16.9992',
  d5: 'M10 3C14.4183 3 18 6.13401 18 10C18 10.4261 17.9565 10.8434 17.8731 11.2485C10.9716 11.0473 9.82864 14.9985 10.1198 16.9992C8.84138 17.0157 7.61561 16.7662 6.53119 16.3094C6.33621 16.2273 6.12183 16.199 5.91414 16.2394L2 17L2.93243 13.9507C3.01971 13.6653 2.97102 13.358 2.8242 13.0981C2.29653 12.1641 2 11.1124 2 10C2 6.13401 5.58172 3 10 3Z',
  d6: 'M16 8.74997C11.8549 8.74997 7.75 11.6212 7.75 16C7.75 16.5332 7.81088 17.0441 7.92529 17.5302C7.33901 17.404 6.77432 17.2256 6.24006 17.0006C6.16801 16.9703 6.10454 16.9664 6.05722 16.9756L2.14308 17.7362C1.88464 17.7864 1.61878 17.6975 1.44263 17.5018C1.26647 17.3061 1.20581 17.0324 1.2828 16.7807L2.21523 13.7314C2.23446 13.6685 2.23109 13.573 2.17123 13.467C1.58338 12.4265 1.25001 11.2484 1.25001 9.99998C1.25001 5.62884 5.26473 2.24998 10 2.24998C14.4258 2.24998 18.2221 5.20158 18.6995 9.15626C17.8309 8.89031 16.9164 8.74997 16 8.74997ZM7 4.99995C6.44772 4.99995 6 5.44767 6 5.99995C6 6.55224 6.44772 6.99995 7 6.99995H7.00897C7.56125 6.99995 8.00897 6.55224 8.00897 5.99995C8.00897 5.44767 7.56125 4.99995 7.00897 4.99995H7ZM12.991 4.99995C12.4387 4.99995 11.991 5.44767 11.991 5.99995C11.991 6.55224 12.4387 6.99995 12.991 6.99995H13C13.5523 6.99995 14 6.55224 14 5.99995C14 5.44767 13.5523 4.99995 13 4.99995H12.991Z',
  d7: 'M16 10.25C12.4059 10.25 9.25 12.7021 9.25 16C9.25 19.2979 12.4059 21.75 16 21.75C16.9995 21.75 17.9521 21.5651 18.8105 21.2307C18.8865 21.2011 18.9493 21.1981 18.9935 21.2063L21.8635 21.7375C22.1231 21.7855 22.3887 21.6936 22.5631 21.4954C22.7374 21.2972 22.7948 21.022 22.7141 20.7707L22.0624 18.7409C22.0425 18.6789 22.0431 18.5722 22.1147 18.4418C22.5203 17.7043 22.75 16.8761 22.75 16C22.75 12.7021 19.5941 10.25 16 10.25ZM14 13.5C13.4477 13.5 13 13.9477 13 14.5C13 15.0523 13.4477 15.5 14 15.5H14.009C14.5612 15.5 15.009 15.0523 15.009 14.5C15.009 13.9477 14.5612 13.5 14.009 13.5H14ZM17.991 13.5C17.4388 13.5 16.991 13.9477 16.991 14.5C16.991 15.0523 17.4388 15.5 17.991 15.5H18C18.5523 15.5 19 15.0523 19 14.5C19 13.9477 18.5523 13.5 18 13.5H17.991Z',
  d8: 'M16 8.74998C11.8549 8.74998 7.75 11.6212 7.75 16C7.75 16.5332 7.81088 17.0441 7.92529 17.5302C7.33901 17.404 6.77432 17.2257 6.24006 17.0006C6.16801 16.9703 6.10454 16.9664 6.05722 16.9756L2.14308 17.7362C1.88464 17.7864 1.61878 17.6975 1.44263 17.5018C1.26647 17.3062 1.20581 17.0325 1.2828 16.7807L2.21523 13.7314C2.23446 13.6685 2.23109 13.573 2.17123 13.467C1.58338 12.4266 1.25001 11.2484 1.25001 10C1.25001 5.62885 5.26473 2.25 10 2.25C14.4258 2.25 18.2221 5.2016 18.6995 9.15628C17.8309 8.89033 16.9164 8.74998 16 8.74998ZM7 4.99997C6.44772 4.99997 6 5.44768 6 5.99997C6 6.55225 6.44772 6.99997 7 6.99997H7.00897C7.56125 6.99997 8.00897 6.55225 8.00897 5.99997C8.00897 5.44768 7.56125 4.99997 7.00897 4.99997H7ZM12.991 4.99997C12.4387 4.99997 11.991 5.44768 11.991 5.99997C11.991 6.55225 12.4387 6.99997 12.991 6.99997H13C13.5523 6.99997 14 6.55225 14 5.99997C14 5.44768 13.5523 4.99997 13 4.99997H12.991Z',
  d9: 'M16 10.25C12.4059 10.25 9.25 12.7021 9.25 16C9.25 19.2979 12.4059 21.75 16 21.75C16.9995 21.75 17.9521 21.5652 18.8105 21.2307C18.8865 21.2011 18.9493 21.1981 18.9935 21.2063L21.8635 21.7375C22.1231 21.7855 22.3887 21.6936 22.5631 21.4954C22.7374 21.2973 22.7948 21.022 22.7141 20.7707L22.0624 18.741C22.0425 18.6789 22.0431 18.5722 22.1147 18.4418C22.5203 17.7043 22.75 16.8761 22.75 16C22.75 12.7021 19.5941 10.25 16 10.25ZM14 13.5C13.4477 13.5 13 13.9477 13 14.5C13 15.0523 13.4477 15.5 14 15.5H14.009C14.5612 15.5 15.009 15.0523 15.009 14.5C15.009 13.9477 14.5612 13.5 14.009 13.5H14ZM17.991 13.5C17.4388 13.5 16.991 13.9477 16.991 14.5C16.991 15.0523 17.4388 15.5 17.991 15.5H18C18.5523 15.5 19 15.0523 19 14.5C19 13.9477 18.5523 13.5 18 13.5H17.991Z',
  d10: 'M6.99054 7.01514H6.99949M12.9671 7.01514H12.9761',
  d11: 'M17.9553 14.4575H17.9643M13.9739 14.4575H13.9829',
  d12: 'M21.9991 16.0253C22.0184 13.2761 19.3364 11.0286 16.0088 11.0056C12.6811 10.9825 9.96793 13.1925 9.94865 15.9417C9.92937 18.6909 12.6113 20.9383 15.939 20.9614C17.0769 20.9693 18.0477 20.76 18.9587 20.3134L21.9541 21.0009C21.9586 21.0019 21.9627 20.9985 21.9616 20.9948L21.1768 18.5229C21.7364 17.7737 21.9925 16.971 21.9991 16.0253Z',
  d13: 'M9.98248 16.9073C8.46605 16.9073 7.17622 16.6182 5.96883 15.9785L2.01417 16.9042C2.00823 16.9056 2.0028 16.9008 2.00439 16.8957L3.07331 13.4332C2.3471 12.3853 2.00079 11.2667 2.00079 9.95341C2.00079 6.11288 5.57431 2.99951 9.98248 2.99951C14.3906 2.99951 17.9642 6.11288 17.9642 9.95341C17.9642 10.42 17.9115 10.8758 17.8109 11.3167',
  d14: 'M7.75 16.0005C7.75 11.6217 11.8549 8.75047 16 8.75047C16.9164 8.75047 17.8309 8.89082 18.6995 9.15677C18.2221 5.20208 14.4258 2.25047 10 2.25047C5.26473 2.25047 1.25001 5.62933 1.25001 10.0005C1.25001 10.6114 1.37966 11.3353 1.55945 12.0027C1.70975 12.5607 1.9056 13.118 2.11945 13.5803L1.27443 16.8107C1.20918 17.0601 1.27662 17.3255 1.45301 17.5136C1.62939 17.7016 1.88999 17.7859 2.14308 17.7367L5.75885 17.0341C6.35871 17.2511 7.14564 17.4346 7.93263 17.5615C7.81348 17.0662 7.75 16.545 7.75 16.0005ZM7 6.00023C6.44772 6.00023 6 6.44795 6 7.00023C6 7.55252 6.44772 8.00023 7 8.00023H7.00897C7.56125 8.00023 8.00897 7.55252 8.00897 7.00023C8.00897 6.44795 7.56125 6.00023 7.00897 6.00023H7ZM12.991 6.00023C12.4387 6.00023 11.991 6.44795 11.991 7.00023C11.991 7.55252 12.4387 8.00023 12.991 8.00023H13C13.5523 8.00023 14 7.55252 14 7.00023C14 6.44795 13.5523 6.00023 13 6.00023H12.991Z',
  d15: 'M16 10.25C12.4059 10.25 9.25 12.7021 9.25 16C9.25 19.2979 12.4059 21.75 16 21.75C16.904 21.75 18.2954 21.5441 19.1929 21.2432L21.8635 21.7375C22.1175 21.7845 22.3777 21.6975 22.5524 21.5073C22.7271 21.3171 22.7916 21.0504 22.7232 20.8013L22.1128 18.5791C22.2652 18.2514 22.4024 17.8719 22.509 17.495C22.6468 17.0075 22.75 16.467 22.75 16C22.75 12.7021 19.5941 10.25 16 10.25ZM14 13.5C13.4477 13.5 13 13.9477 13 14.5C13 15.0523 13.4477 15.5 14 15.5H14.009C14.5612 15.5 15.009 15.0523 15.009 14.5C15.009 13.9477 14.5612 13.5 14.009 13.5H14ZM17.991 13.5C17.4388 13.5 16.991 13.9477 16.991 14.5C16.991 15.0523 17.4388 15.5 17.991 15.5H18C18.5523 15.5 19 15.0523 19 14.5C19 13.9477 18.5523 13.5 18 13.5H17.991Z',
} as const;

export const IconWechatStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wechat-stroke-rounded IconWechatStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWechatDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wechat-duotone-rounded IconWechatDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWechatTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wechat-twotone-rounded IconWechatTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWechatSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wechat-solid-rounded IconWechatSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconWechatBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wechat-bulk-rounded IconWechatBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconWechatStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wechat-stroke-sharp IconWechatStrokeSharp"
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
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconWechatSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wechat-solid-sharp IconWechatSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfWechat: TheIconSelfPack = {
  name: 'Wechat',
  StrokeRounded: IconWechatStrokeRounded,
  DuotoneRounded: IconWechatDuotoneRounded,
  TwotoneRounded: IconWechatTwotoneRounded,
  SolidRounded: IconWechatSolidRounded,
  BulkRounded: IconWechatBulkRounded,
  StrokeSharp: IconWechatStrokeSharp,
  SolidSharp: IconWechatSolidSharp,
};