import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 18.2222C2.18866 19.0724 2.56908 20 3.56235 20C5.28118 20 5.71088 18.2222 7 12C8.28912 5.77778 8.71882 4 10.4376 4C11.4309 4 11.8113 4.92763 12 5.77778M4.91667 9.77778H10.4376',
  d2: 'M21 12C22.3804 15.253 22.2854 16.9808 21 20',
  d3: 'M12 12C10.6196 15.253 10.7146 16.9808 12 20',
  d4: 'M14.2891 13.9992C15.093 13.9692 15.5515 14.064 15.8227 14.5459C16.1515 15.216 16.9785 17.0679 17.1835 17.472C17.3073 17.6489 17.4715 17.904 17.9995 17.9875L18.7099 18',
  d5: 'M19.0025 14C17.8793 14 17.0873 15.288 16.5593 15.936C15.7913 16.944 14.927 18.05 13.9961 18',
  d6: 'M14.29 14.0011C15.0939 13.9711 15.5524 14.0659 15.8236 14.5478C16.1524 15.2179 16.9794 17.0698 17.1844 17.4739C17.3082 17.6508 17.4724 17.9059 18.0004 17.9894L18.7108 18.0019',
  d7: 'M19.0035 14.002C17.8803 14.002 17.0883 15.29 16.5603 15.938C15.7923 16.946 14.928 18.052 13.9971 18.002',
  d8: 'M14.2901 14.0011C15.094 13.9711 15.5525 14.0659 15.8237 14.5478C16.1525 15.2179 16.9795 17.0698 17.1845 17.4739C17.3083 17.6508 17.4725 17.9059 18.0005 17.9894L18.7109 18.0019M19.0035 14.0019C17.8803 14.0019 17.0883 15.2899 16.5603 15.9379C15.7923 16.9459 14.928 18.0519 13.9971 18.0019',
  d9: 'M8.69906 3.62183C9.21557 3.17071 9.81268 3 10.4379 3C11.3117 3 11.937 3.43525 12.333 3.98679C12.6958 4.49194 12.8734 5.09648 12.9765 5.56113C13.0961 6.1003 12.756 6.63438 12.2169 6.75403C11.6777 6.87368 11.1436 6.53359 11.024 5.99442C10.9384 5.60893 10.8315 5.32458 10.7085 5.15337C10.654 5.07743 10.6109 5.04481 10.5844 5.02988C10.563 5.01784 10.523 5 10.4379 5C10.2036 5 10.1025 5.05152 10.0147 5.12817C9.88847 5.23843 9.70605 5.48269 9.4878 6.03447C9.23616 6.6707 8.99481 7.55556 8.71381 8.77778H10.4379C10.9901 8.77778 11.4379 9.22549 11.4379 9.77778C11.4379 10.3301 10.9901 10.7778 10.4379 10.7778H8.27688C8.18321 11.2216 8.08444 11.696 7.97942 12.2029C7.34348 15.2724 6.89568 17.3782 6.37244 18.7011C6.10726 19.3716 5.7794 19.9607 5.30137 20.3782C4.78486 20.8293 4.18775 21 3.56257 21C2.68876 21 2.06346 20.5648 1.6674 20.0132C1.30465 19.5081 1.12708 18.9035 1.02396 18.4389C0.904314 17.8997 1.2444 17.3656 1.78357 17.246C2.32274 17.1263 2.85681 17.4664 2.97646 18.0056C3.06201 18.3911 3.16898 18.6754 3.29192 18.8466C3.34646 18.9226 3.38951 18.9552 3.41605 18.9701C3.43747 18.9822 3.47744 19 3.56257 19C3.7968 19 3.89796 18.9485 3.98572 18.8718C4.11196 18.7616 4.29438 18.5173 4.51263 17.9655C4.95622 16.844 5.36783 14.9498 6.02101 11.7971C6.09402 11.4447 6.16455 11.105 6.23299 10.7778H4.91688C4.3646 10.7778 3.91688 10.3301 3.91688 9.77778C3.91688 9.22549 4.3646 8.77778 4.91688 8.77778H6.66272C6.99849 7.27708 7.29826 6.13252 7.62799 5.29887C7.89317 4.62843 8.22102 4.03935 8.69906 3.62183Z',
  d10: 'M20.6096 11.0797C21.118 10.864 21.7051 11.1012 21.9208 11.6096C22.6369 13.2971 23.0137 14.6874 22.9999 16.0977C22.9861 17.5061 22.5834 18.8346 21.9203 20.392C21.704 20.9001 21.1167 21.1367 20.6085 20.9203C20.1004 20.704 19.8638 20.1167 20.0802 19.6085C20.7025 18.1467 20.99 17.1016 21 16.0781C21.01 15.0565 20.7441 13.9564 20.0797 12.3909C19.864 11.8825 20.1012 11.2955 20.6096 11.0797Z',
  d11: 'M12.3904 11.0797C11.882 10.864 11.2949 11.1012 11.0792 11.6096C10.3631 13.2971 9.98633 14.6874 10.0001 16.0977C10.0139 17.5061 10.4166 18.8346 11.0797 20.392C11.296 20.9001 11.8833 21.1367 12.3915 20.9203C12.8996 20.704 13.1362 20.1167 12.9198 19.6085C12.2975 18.1467 12.01 17.1016 12 16.0781C11.99 15.0565 12.2559 13.9564 12.9203 12.3909C13.136 11.8825 12.8988 11.2955 12.3904 11.0797Z',
  d12: 'M14.8294 15.0083C14.7151 15.0009 14.5618 15.0004 14.2941 15.0004C13.7418 15.0004 13.2941 14.5527 13.2941 14.0004C13.2941 13.4481 13.7418 13.0004 14.2941 13.0004L14.3985 13.0002C14.7977 12.999 15.2327 12.9978 15.6241 13.1443C15.8454 13.2271 16.0557 13.3461 16.2416 13.501C16.461 13.6838 16.6152 13.9122 16.7341 14.1332C16.8148 14.0492 16.8972 13.9678 16.9811 13.8903C17.4735 13.4362 18.1431 13.0004 19 13.0004C19.5523 13.0004 20 13.4481 20 14.0004C20 14.5527 19.5523 15.0004 19 15.0004C18.862 15.0004 18.6579 15.0646 18.3371 15.3605C18.1162 15.5643 17.8981 15.8225 17.6595 16.1286L17.8658 16.5777C17.9126 16.6795 17.9488 16.7581 17.9812 16.8257C18.0136 16.8929 18.036 16.9361 18.0528 16.9657L18.0586 16.9755C18.0625 16.9775 18.0671 16.9796 18.0722 16.9816C18.0815 16.9836 18.11 16.9885 18.1706 16.9925C18.2849 16.9999 18.4382 17.0004 18.7059 17.0004C19.2582 17.0004 19.7059 17.4481 19.7059 18.0004C19.7059 18.5527 19.2582 19.0004 18.7059 19.0004L18.6015 19.0006H18.6015C18.2023 19.0018 17.7673 19.003 17.3759 18.8566C17.1546 18.7737 16.9443 18.6547 16.7584 18.4998C16.539 18.317 16.3848 18.0886 16.2659 17.8676C16.1852 17.9517 16.1028 18.033 16.0189 18.1105C15.5265 18.5646 14.8569 19.0004 14 19.0004C13.4477 19.0004 13 18.5527 13 18.0004C13 17.4481 13.4477 17.0004 14 17.0004C14.138 17.0004 14.3421 16.9362 14.6629 16.6403C14.8838 16.4365 15.1019 16.1784 15.3405 15.8722L15.1342 15.4231C15.0874 15.3213 15.0512 15.2427 15.0188 15.1752C14.9864 15.1079 14.964 15.0648 14.9472 15.0352L14.9414 15.0253C14.9375 15.0233 14.9329 15.0213 14.9278 15.0192C14.9185 15.0172 14.89 15.0123 14.8294 15.0083Z',
  d13: 'M18.7051 18.0052H17.9757C17.1222 17.8236 17.0632 17.1307 16.7853 16.6332C16.694 16.4203 16.5994 16.2039 16.5074 15.9966M16.5074 15.9966C16.2261 15.3622 15.9699 14.8119 15.9104 14.6998C15.6495 14.2089 15.5505 13.998 14.2815 13.998M16.5074 15.9966C16.6826 15.7631 16.8571 15.5296 17.0333 15.3087C17.6423 14.5845 18.2494 13.998 19.0146 13.998M16.5074 15.9966C15.7533 17.0013 14.9847 18.0052 13.998 18.0052',
  d14: 'M8.67509 3.62183C9.1916 3.17071 9.78871 3 10.4139 3C11.2877 3 11.913 3.43525 12.3091 3.98679C12.6718 4.49194 12.8494 5.09648 12.9525 5.56113L11 5.99442C10.9145 5.60893 10.8075 5.32458 10.6845 5.15337C10.63 5.07743 10.587 5.04481 10.5604 5.02988C10.539 5.01784 10.499 5 10.4139 5C10.1797 5 10.0785 5.05152 9.99074 5.12817C9.8645 5.23843 9.68208 5.48269 9.46384 6.03447C9.21219 6.6707 8.97084 7.55556 8.68985 8.77778H10.4139V10.7778H8.25291C8.15925 11.2216 8.06047 11.696 7.95546 12.2029C7.31951 15.2724 6.87171 17.3782 6.34847 18.7011C6.0833 19.3716 5.75544 19.9607 5.27741 20.3782C4.7609 20.8293 4.16379 21 3.5386 21C2.66479 21 2.0395 20.5648 1.64343 20.0132C1.28069 19.5081 1.10311 18.9035 1 18.4389L2.9525 18.0056C3.03805 18.3911 3.14501 18.6754 3.26796 18.8466C3.32249 18.9226 3.36555 18.9552 3.39209 18.9701C3.41351 18.9822 3.45348 19 3.5386 19C3.77283 19 3.87399 18.9485 3.96176 18.8718C4.088 18.7616 4.27042 18.5173 4.48866 17.9655C4.93226 16.844 5.34387 14.9498 5.99704 11.7971C6.07005 11.4447 6.14058 11.105 6.20903 10.7778H4.89292V8.77778H6.63876C6.97453 7.27708 7.2743 6.13252 7.60403 5.29887C7.8692 4.62843 8.19706 4.03935 8.67509 3.62183Z',
  d15: 'M21.0004 16.0779C21.0103 15.0563 20.7444 13.9562 20.0801 12.3907L21.9212 11.6094C22.6373 13.2968 23.014 14.6871 23.0003 16.0974C22.9865 17.5059 22.5837 18.8344 21.9207 20.3917L20.0805 19.6083C20.7029 18.1464 20.9903 17.1014 21.0004 16.0779Z',
  d16: 'M11.9996 16.0779C11.9897 15.0563 12.2556 13.9562 12.9199 12.3907L11.0788 11.6094C10.3627 13.2968 9.98596 14.6871 9.99974 16.0974C10.0135 17.5059 10.4163 18.8344 11.0793 20.3917L12.9195 19.6083C12.2971 18.1464 12.0097 17.1014 11.9996 16.0779Z',
  d17: 'M14.8294 15.0083C14.7151 15.0009 14.5618 15.0004 14.2941 15.0004V13.0004C14.3286 13.0004 14.3634 13.0003 14.3985 13.0002C14.7977 12.999 15.2327 12.9978 15.6241 13.1443C15.8454 13.2271 16.0557 13.3461 16.2416 13.501C16.461 13.6838 16.6152 13.9122 16.7341 14.1332C16.8148 14.0492 16.8972 13.9678 16.9811 13.8903C17.4735 13.4362 18.1431 13.0004 19 13.0004V15.0004C18.862 15.0004 18.6579 15.0646 18.3371 15.3605C18.1162 15.5643 17.8981 15.8225 17.6595 16.1286L17.8658 16.5777C17.9126 16.6795 17.9488 16.7581 17.9812 16.8257C18.0136 16.8929 18.036 16.9361 18.0528 16.9657C18.0549 16.9693 18.0568 16.9726 18.0586 16.9755C18.0625 16.9775 18.0671 16.9796 18.0722 16.9816C18.0815 16.9836 18.11 16.9885 18.1706 16.9925C18.2849 16.9999 18.4382 17.0004 18.7059 17.0004V19.0004C18.6714 19.0004 18.6366 19.0005 18.6015 19.0006C18.2023 19.0018 17.7673 19.003 17.3759 18.8566C17.1546 18.7737 16.9443 18.6547 16.7584 18.4998C16.539 18.317 16.3848 18.0886 16.2659 17.8676C16.1852 17.9517 16.1028 18.033 16.0189 18.1105C15.5265 18.5646 14.8569 19.0004 14 19.0004V17.0004C14.138 17.0004 14.3421 16.9362 14.6629 16.6403C14.8838 16.4365 15.1019 16.1784 15.3405 15.8722L15.1342 15.4231C15.0874 15.3213 15.0512 15.2427 15.0188 15.1752C14.9864 15.1079 14.964 15.0648 14.9472 15.0352C14.9451 15.0315 14.9432 15.0282 14.9414 15.0253C14.9375 15.0233 14.9329 15.0213 14.9278 15.0192C14.9185 15.0172 14.89 15.0123 14.8294 15.0083Z',
} as const;

export const IconFunctionOfXStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="function-of-x-stroke-rounded IconFunctionOfXStrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFunctionOfXDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="function-of-x-duotone-rounded IconFunctionOfXDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFunctionOfXTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="function-of-x-twotone-rounded IconFunctionOfXTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFunctionOfXSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="function-of-x-solid-rounded IconFunctionOfXSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFunctionOfXBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="function-of-x-bulk-rounded IconFunctionOfXBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFunctionOfXStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="function-of-x-stroke-sharp IconFunctionOfXStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconFunctionOfXSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="function-of-x-solid-sharp IconFunctionOfXSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFunctionOfX: TheIconSelfPack = {
  name: 'FunctionOfX',
  StrokeRounded: IconFunctionOfXStrokeRounded,
  DuotoneRounded: IconFunctionOfXDuotoneRounded,
  TwotoneRounded: IconFunctionOfXTwotoneRounded,
  SolidRounded: IconFunctionOfXSolidRounded,
  BulkRounded: IconFunctionOfXBulkRounded,
  StrokeSharp: IconFunctionOfXStrokeSharp,
  SolidSharp: IconFunctionOfXSolidSharp,
};