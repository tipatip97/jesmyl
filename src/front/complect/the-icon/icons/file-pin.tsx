import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.0154 9.5V7.81818C20.0154 6.12494 20.0154 5.27832 19.7471 4.60214C19.3159 3.5151 18.4039 2.65765 17.2478 2.2522C16.5286 2 15.6282 2 13.8273 2C10.6757 2 9.09989 2 7.84134 2.44135C5.81806 3.15089 4.2221 4.65142 3.46747 6.55375C2.99805 7.73706 2.99805 9.21865 2.99805 12.1818V14.7273C2.99805 17.7966 2.99805 19.3313 3.84661 20.3971C4.08974 20.7025 4.37807 20.9736 4.70285 21.2022C5.8364 22 7.46867 22 10.7332 22H11.5067C12.042 22 13.0082 22 13.5088 21.9972',
  d2: 'M11.998 17H6.99805',
  d3: 'M12.998 13H9.99805',
  d4: 'M18.0049 19V22M15.0101 17.5C15.1527 18.3145 16.1894 18.6556 17.4061 18.8923C17.5171 18.9138 18.4355 18.867 18.5468 18.8477C19.4341 18.6937 21.0586 18.3917 20.9997 17.5C20.9303 16.4501 20.1525 16.0966 19.4447 15.4615C19.1547 15.2013 19.1147 14.7766 19.2888 14.4277L19.6914 13.6211C19.8778 13.2477 19.8234 12.785 19.5035 12.5173C19.0319 12.1224 18.6296 11.9995 18.0049 12C17.293 12.0691 16.8772 12.2142 16.4889 12.5268C16.1712 12.7825 16.1278 13.2392 16.31 13.6043L16.6962 14.378C16.8828 14.7519 16.819 15.2051 16.506 15.4816C15.6943 16.1985 14.8733 16.7183 15.0101 17.5Z',
  d5: 'M2.99805 12C2.99805 10.1591 4.49195 8.66667 6.33478 8.66667C7.00125 8.66667 7.78697 8.78333 8.43496 8.60988C9.01069 8.45576 9.46039 8.00652 9.61467 7.43136C9.78829 6.78404 9.67151 5.99912 9.67151 5.33333C9.67151 3.49238 11.1655 2 13.0082 2',
  d6: 'M8.49903 8.49792C4.91096 8.49792 3.34277 10.1536 3.00238 10.9896C3.00098 11.3586 3.00098 11.7548 3.00098 12.1818V14.7273C3.00098 17.7966 3.00098 19.3313 3.84868 20.3971C4.09156 20.7025 4.3796 20.9736 4.70405 21.2022C5.83644 22 7.46705 22 10.7283 22H15.001C15.9303 22 16.395 22 16.7814 21.9231C18.3681 21.6075 19.6085 20.3671 19.9241 18.7804C19.9412 18.6948 19.9544 18.6055 19.9647 18.5081C18.5752 19.0952 16.7373 19.0015 15.491 18.2268C15.2665 18.0873 15.1543 18.0175 15.066 17.8117C14.7936 17.1763 15.4371 16.3343 15.8855 15.9638C16.4558 15.4925 16.7409 15.2569 16.8035 15.0608C16.9106 14.7251 16.7441 14.268 16.6008 13.8746C16.5531 13.7439 16.5081 13.6202 16.4765 13.5104C16.359 13.102 16.3002 12.8977 16.4119 12.6639C16.5236 12.4301 16.6665 12.364 16.9521 12.2318C17.6202 11.9227 18.3813 11.9227 19.0494 12.2318C19.3351 12.364 19.4779 12.4301 19.5896 12.6639C19.7013 12.8977 19.6425 13.102 19.525 13.5104C19.4933 13.6207 19.4479 13.7453 19.3999 13.877C19.255 14.2743 19.0863 14.7372 19.1956 15.0749C19.2555 15.26 19.5064 15.4725 20.001 15.8751V7.81818C20.001 6.12494 20.001 5.27832 19.733 4.60214C19.3022 3.5151 18.3912 2.65765 17.2362 2.2522C16.5178 2 15.6183 2 13.8192 2C13.2846 2 12.7955 2 12.3455 2.00216C10.0748 2.12886 9.5335 5.06667 9.55018 6.55168C9.5911 8.19468 8.80044 8.49792 8.49903 8.49792Z',
  d7: 'M20.001 9.5V7.81818C20.001 6.12494 20.001 5.27832 19.733 4.60214C19.3022 3.5151 18.3912 2.65765 17.2362 2.2522C16.5178 2 15.6183 2 13.8192 2C10.6708 2 9.09661 2 7.83934 2.44135C5.81812 3.15089 4.22379 4.65142 3.46992 6.55375C3.00098 7.73706 3.00098 9.21865 3.00098 12.1818V14.7273C3.00098 17.7966 3.00098 19.3313 3.84868 20.3971C4.09156 20.7025 4.3796 20.9736 4.70405 21.2022C5.83644 22 7.46705 22 10.7283 22H11.501C12.0357 22 13.001 22 13.501 21.9972',
  d8: 'M12.001 17H7.00098',
  d9: 'M13.001 13H10.001',
  d10: 'M18.0059 19V22M15.0111 17.5C15.1537 18.3145 16.1904 18.6556 17.4071 18.8923C17.5181 18.9138 18.4365 18.867 18.5478 18.8477C19.4351 18.6937 21.0596 18.3917 21.0007 17.5C20.9313 16.4501 20.1535 16.0966 19.4457 15.4615C19.1557 15.2013 19.1157 14.7766 19.2898 14.4277L19.6924 13.6211C19.8788 13.2477 19.8244 12.785 19.5045 12.5173C19.0329 12.1224 18.6306 11.9995 18.0059 12C17.294 12.0691 16.8782 12.2142 16.4899 12.5268C16.1722 12.7825 16.1288 13.2392 16.311 13.6043L16.6972 14.378C16.8838 14.7519 16.82 15.2051 16.507 15.4816C15.6953 16.1985 14.8743 16.7183 15.0111 17.5Z',
  d11: 'M3.00098 12C3.00098 10.1591 4.49336 8.66667 6.33431 8.66667C7.0001 8.66667 7.78502 8.78333 8.43235 8.60988C9.0075 8.45576 9.45674 8.00652 9.61086 7.43136C9.78431 6.78404 9.66765 5.99912 9.66765 5.33333C9.66765 3.49238 11.1601 2 13.001 2',
  d12: 'M19.998 9.5V7.81818C19.998 6.12494 19.998 5.27832 19.73 4.60214C19.2992 3.5151 18.3882 2.65765 17.2332 2.2522C16.5148 2 15.6153 2 13.8162 2C10.6678 2 9.09368 2 7.83641 2.44135C5.81519 3.15089 4.22086 4.65142 3.46699 6.55375C2.99805 7.73706 2.99805 9.21865 2.99805 12.1818V14.7273C2.99805 17.7966 2.99805 19.3313 3.84575 20.3971C4.08863 20.7025 4.37667 20.9736 4.70112 21.2022C5.83351 22 7.46412 22 10.7253 22H11.498C12.0327 22 12.998 22 13.498 21.9972',
  d13: 'M2.99805 12C2.99805 10.1591 4.49043 8.66667 6.33138 8.66667C6.99717 8.66667 7.78209 8.78333 8.42942 8.60988C9.00457 8.45576 9.45381 8.00652 9.60793 7.43136C9.78138 6.78404 9.66472 5.99912 9.66472 5.33333C9.66472 3.49238 11.1571 2 12.998 2',
  d14: 'M6.81154 22.5222C7.79379 22.625 11.3566 22.625 12.8977 22.625C13.4375 22.625 13.875 22.1874 13.875 21.6477C13.875 21.108 13.4375 20.6704 12.8977 20.6704C11.2891 20.6704 7.88285 20.6691 7.0134 20.5782C6.15948 20.4888 5.67555 20.3221 5.31772 20.069C5.07627 19.8983 4.86389 19.6972 4.6861 19.4728C4.43053 19.1503 4.26109 18.7175 4.16886 17.9308C4.07393 17.121 4.07235 16.0637 4.07235 14.5402L4.07227 11.64C4.07225 11.373 4.07242 10.7345 4.35304 10.2623C4.52597 9.97131 4.74739 9.7282 4.97484 9.60438C5.34135 9.40486 5.76154 9.2915 6.20821 9.2915L7.24858 9.32799C7.62867 9.33588 8.07221 9.32387 8.50036 9.20915C9.33433 8.98569 9.98574 8.33428 10.2092 7.50031C10.3239 7.07216 10.3359 6.62862 10.328 6.24853L10.2915 5.20816C10.2915 4.74047 10.4159 4.33334 10.6333 3.95493C10.76 3.73434 10.9807 3.53245 11.2855 3.35514C11.7476 3.08623 12.301 3.08374 12.6392 3.08222C12.9773 3.08069 13.3341 3.07952 13.6322 3.07952C15.4663 3.07952 16.1334 3.09347 16.6368 3.27082C17.5094 3.57828 18.1751 4.21992 18.4852 5.00529C18.5628 5.20193 18.6177 5.46035 18.6471 5.9083C18.6771 6.36497 18.6776 6.94792 18.6776 7.78818V8.90127C18.6776 9.43902 19.1136 9.87496 19.6513 9.87496C20.1891 9.87496 20.625 9.43902 20.625 8.90127V7.755C20.625 6.95584 20.625 6.30828 20.5903 5.7797C20.5545 5.23507 20.4789 4.7494 20.2956 4.28524C19.7668 2.94593 18.6584 1.91166 17.2818 1.42666C16.423 1.12407 14.9509 1.12446 13.3959 1.125C10.5563 1.12464 8.86965 1.12443 7.48721 1.61151C5.26721 2.39369 3.49348 4.05643 2.65009 6.19249C2.36897 6.90445 2.24444 7.66916 2.18419 8.586C2.125 9.48671 2.125 10.5993 2.125 12.0176V12.0176V14.6011C2.12498 16.0492 2.12496 17.2219 2.23485 18.1592C2.34896 19.1326 2.59221 19.9705 3.16204 20.6895C3.45722 21.062 3.80577 21.3908 4.19614 21.6669C4.9409 22.1935 5.80212 22.4166 6.81154 22.5222Z',
  d15: 'M12.875 16.875C12.875 17.4273 12.4273 17.875 11.875 17.875L6.875 17.875C6.32272 17.875 5.875 17.4273 5.875 16.875C5.875 16.3227 6.32272 15.875 6.875 15.875L11.875 15.875C12.4273 15.875 12.875 16.3227 12.875 16.875Z',
  d16: 'M12.875 12.875C12.875 13.4273 12.4273 13.875 11.875 13.875H9.875C9.32272 13.875 8.875 13.4273 8.875 12.875C8.875 12.3227 9.32272 11.875 9.875 11.875H11.875C12.4273 11.875 12.875 12.3227 12.875 12.875Z',
  d17: 'M21.7294 18.081C21.6331 18.3054 21.5018 18.4964 21.3189 18.6615C21.1825 18.7845 21.0058 18.8938 20.9132 18.9511C20.3003 19.332 19.5958 19.5717 18.8755 19.685L18.8755 21.875C18.8755 22.4273 18.4278 22.875 17.8755 22.875C17.3232 22.875 16.8755 22.4273 16.8755 21.875L16.8755 19.6851C16.1552 19.5717 15.4507 19.332 14.8378 18.9511C14.7453 18.8939 14.5685 18.7845 14.4322 18.6614C14.2491 18.4963 14.1179 18.3052 14.0217 18.0808C13.7042 17.3401 13.9666 16.6179 14.2017 16.1856C14.4535 15.7228 14.814 15.3234 15.1232 15.0679C15.3984 14.8406 15.5751 14.6939 15.6951 14.5832L15.3674 13.5849C15.2714 13.2647 15.1018 12.6994 15.3844 12.1079C15.5063 11.8525 15.6732 11.6439 15.9023 11.4768C16.0709 11.3539 16.2894 11.2533 16.407 11.1993C17.3414 10.7669 18.4096 10.7669 19.3441 11.1993C19.4616 11.2533 19.6802 11.3539 19.8488 11.4768C20.0778 11.6439 20.2447 11.8525 20.3667 12.1079C20.6493 12.6994 20.4797 13.2647 20.3836 13.5849C20.3836 13.5849 20.0595 14.5698 20.0526 14.5936C20.1695 14.6995 20.341 14.8396 20.6081 15.0568C20.9212 15.3114 21.2872 15.7107 21.5431 16.175C21.7826 16.6093 22.0495 17.3349 21.7294 18.081Z',
  d18: 'M12.006 17H7.00879',
  d19: 'M12.0061 13H9.00781',
  d20: 'M12.0299 21.99L3.01977 22C3.01424 22 3.00977 21.9955 3.00977 21.99V9L10.0098 2H19.9998C20.0053 2 20.0098 2.00448 20.0098 2.01L19.9998 9M10.0098 2.51375V9H3.53699',
  d21: 'M18.0228 22.998V18.1344M18.0228 18.1344L22.0011 18.1343C22.0092 18.1343 22.014 18.1249 22.0092 18.1182L19.518 14.5576C19.5162 14.555 19.5156 14.5516 19.5166 14.5485L20.3183 12.0114C20.3204 12.0048 20.3156 11.998 20.3088 11.998H15.7311C15.7243 11.998 15.7195 12.0048 15.7215 12.0114L16.51 14.5486C16.511 14.5516 16.5105 14.555 16.5086 14.5576L14.0175 18.1182C14.0128 18.125 14.0175 18.1344 14.0257 18.1344H18.0228Z',
  d22: 'M6.5 16L11.5 16L11.5 18L6.5 18L6.5 16Z',
  d23: 'M8.5 12H11.5V14H8.5V12Z',
  d24: 'M14.9643 12.75H20.5357L19.75 15.25L22.25 18.75H18.75V22.75H16.75V18.75H13.25L15.75 15.25L14.9643 12.75Z',
  d25: 'M20.25 2.22727C20.25 1.68754 19.8141 1.25 19.2763 1.25H9.13616L1.75 8.66338V21.7727C1.75 22.3125 2.18593 22.75 2.72368 22.75H11.5131V20.7955H3.69727V10.0455H10.5131L10.5131 3.20459H18.3025V10.0455H20.25V2.22727Z',
} as const;

export const IconFilePinStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-pin-stroke-rounded IconFilePinStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFilePinDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-pin-duotone-rounded IconFilePinDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFilePinTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-pin-twotone-rounded IconFilePinTwotoneRounded"
    >
      <path 
        d={d.d12} 
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
        d={d.d13} 
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
    </TheIconWrapper>
  );
};

export const IconFilePinSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-pin-solid-rounded IconFilePinSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconFilePinBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-pin-bulk-rounded IconFilePinBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFilePinStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-pin-stroke-sharp IconFilePinStrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFilePinSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="file-pin-solid-sharp IconFilePinSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFilePin: TheIconSelfPack = {
  name: 'FilePin',
  StrokeRounded: IconFilePinStrokeRounded,
  DuotoneRounded: IconFilePinDuotoneRounded,
  TwotoneRounded: IconFilePinTwotoneRounded,
  SolidRounded: IconFilePinSolidRounded,
  BulkRounded: IconFilePinBulkRounded,
  StrokeSharp: IconFilePinStrokeSharp,
  SolidSharp: IconFilePinSolidSharp,
};