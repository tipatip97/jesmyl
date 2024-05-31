import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.59988 5.65676C6.79984 4.48521 9.79974 3.3138 11.5997 4.48521C14.9486 6.66473 12.8 10.3431 9.20016 10.9288C10.8001 10.9288 14 11.6318 14 14.4435C14 18.7942 9.19988 21.1845 5.6 19.4092C2.00012 17.6339 2 14.7573 2 13',
  d2: 'M19.0006 10C18.052 13.7503 14.9728 13.2464 13.1992 12.3941',
  d3: 'M19 5L19 20',
  d4: 'M16 4C17.5 4.43301 19.5 4.86603 22 4',
  d5: 'M11.5997 4.48521C9.91124 3.38637 7.16691 4.34907 5.84289 5.43959C5.67582 5.5772 5.50237 5.70635 5.32532 5.83086C3.52246 7.09882 2 10.6199 2 13C2 14.7573 2.00012 17.6339 5.6 19.4092C9.19988 21.1845 14 18.7942 14 14.4435C14 11.6318 10.8001 10.9288 9.20016 10.9288C12.8 10.3431 14.9486 6.66473 11.5997 4.48521Z',
  d6: 'M22.3276 4.94518C22.8494 4.76441 23.1259 4.19481 22.9451 3.67295C22.7644 3.15109 22.1948 2.87458 21.6729 3.05536C19.4606 3.82173 17.7007 3.45031 16.2776 3.0395C15.747 2.88633 15.1926 3.1923 15.0395 3.72292C14.8863 4.25354 15.1923 4.80787 15.7229 4.96104C16.3722 5.14849 17.134 5.34263 18.0002 5.43872V9.87312C17.7971 10.6131 17.512 11.0831 17.2235 11.3825C16.9251 11.6922 16.5803 11.8645 16.2013 11.9452C15.4613 12.1027 14.5751 11.9089 13.8201 11.579C13.4733 11.2384 13.0764 10.9636 12.6664 10.7474C12.5762 10.6999 12.4848 10.6548 12.3927 10.6121C13.0626 10.087 13.5923 9.43947 13.9179 8.7148C14.2904 7.88584 14.3942 6.94743 14.0955 6.02213C13.7975 5.09946 13.1321 4.28965 12.1452 3.64734C10.906 2.84088 9.37174 2.89976 8.12286 3.22489C6.86023 3.5536 5.64654 4.2139 4.9013 4.94149C4.50613 5.32731 4.49854 5.96043 4.88436 6.35561C5.27018 6.75078 5.9033 6.75836 6.29847 6.37255C6.7532 5.92859 7.63944 5.41741 8.62674 5.16038C9.62778 4.89977 10.4934 4.95865 11.0542 5.32361C11.7417 5.77105 12.0636 6.23835 12.1922 6.63667C12.32 7.03235 12.2896 7.4588 12.0936 7.89509C11.6875 8.79874 10.5725 9.69265 9.03956 9.94209C8.52528 10.0258 8.16144 10.4903 8.20342 11.0097C8.2454 11.529 8.67912 11.9291 9.20017 11.9291C9.89121 11.9291 10.9184 12.0868 11.7337 12.5166C12.1558 12.7712 13 13.513 13 14.4438C13 17.9344 9.08771 20.0144 6.04231 18.5126C4.45969 17.7321 3.73899 16.7563 3.38243 15.8366C3.00846 14.872 3.00001 13.8907 3.00001 13.0003C3.00001 12.448 2.55229 12.0003 2.00001 12.0003C1.44772 12.0003 1.00001 12.448 1.00001 13.0003L1 13.0405C0.999876 13.9081 0.999681 15.2235 1.51768 16.5596C2.06115 17.9613 3.14045 19.3115 5.15771 20.3063C9.31207 22.355 15 19.6546 15 14.4438C15 14.2768 14.9913 14.1155 14.9745 13.9597C15.5075 14.0246 16.0652 14.019 16.6177 13.9014C17.0948 13.7998 17.5644 13.6149 18.0002 13.3252L18.0002 20.0003C18.0002 20.5526 18.4479 21.0003 19.0002 21.0003C19.5525 21.0003 20.0002 20.5526 20.0002 20.0003L20.0002 5.45765C20.7261 5.38875 21.5029 5.23087 22.3276 4.94518Z',
  d7: 'M8.62674 5.15989C7.63944 5.41692 6.7532 5.9281 6.29847 6.37206C5.9033 6.75788 5.27018 6.75029 4.88436 6.35512C4.49854 5.95994 4.50613 5.32682 4.9013 4.941C5.64654 4.21342 6.86023 3.55311 8.12286 3.22441C9.37174 2.89927 10.906 2.8404 12.1452 3.64685C13.1321 4.28916 13.7975 5.09898 14.0955 6.02164C14.3942 6.94695 14.2904 7.88535 13.9179 8.71431C13.5923 9.43898 13.0626 10.0865 12.3927 10.6116C12.4848 10.6543 12.5762 10.6994 12.6664 10.747C13.8912 11.3927 15 12.5625 15 14.4433C15 19.6541 9.31207 22.3546 5.15771 20.3058C3.14045 19.311 2.06115 17.9609 1.51768 16.5591C0.999681 15.223 0.999876 13.9076 1 13.04C1.00001 13.0265 1.00001 13.0131 1.00001 12.9998C1.00001 12.4475 1.44772 11.9998 2.00001 11.9998C2.55229 11.9998 3.00001 12.4475 3.00001 12.9998C3.00001 13.8902 3.00846 14.8716 3.38243 15.8361C3.73899 16.7558 4.45969 17.7316 6.04231 18.5121C9.08771 20.0139 13 17.9339 13 14.4433C13 13.5123 12.5088 12.9248 11.7337 12.5161C10.9184 12.0863 9.89121 11.9286 9.20017 11.9286C8.67912 11.9286 8.2454 11.5285 8.20342 11.0092C8.16144 10.4898 8.52528 10.0253 9.03956 9.9416C10.5725 9.69216 11.6875 8.79825 12.0936 7.8946C12.2896 7.45831 12.32 7.03186 12.1922 6.63618C12.0636 6.23786 11.7417 5.77057 11.0542 5.32312C10.4934 4.95816 9.62778 4.89928 8.62674 5.15989Z',
  d8: 'M22.3278 4.94518C22.8497 4.76441 23.1262 4.19481 22.9454 3.67295C22.7646 3.15109 22.195 2.87458 21.6732 3.05536C19.4608 3.82173 17.7009 3.45031 16.2778 3.0395C15.7472 2.88633 15.1929 3.1923 15.0397 3.72292C14.8865 4.25354 15.1925 4.80787 15.7231 4.96104C16.3725 5.14849 17.1343 5.34263 18.0005 5.43872L18.0005 9.87312C17.7974 10.6131 17.5122 11.0831 17.2237 11.3825C16.9254 11.6922 16.5805 11.8645 16.2016 11.9452C15.4616 12.1027 14.5753 11.9089 13.8203 11.579C14.4176 12.1656 14.8658 12.9472 14.9747 13.9597C15.5078 14.0246 16.0654 14.019 16.6179 13.9014C17.095 13.7998 17.5647 13.6149 18.0005 13.3252L18.0005 20.0003C18.0005 20.5526 18.4482 21.0003 19.0005 21.0003C19.5528 21.0003 20.0005 20.5526 20.0005 20.0003L20.0005 5.45765C20.7263 5.38875 21.5031 5.23087 22.3278 4.94518Z',
  d9: 'M18.25 20L18.25 20.75L19.75 20.75L19.75 20L18.25 20ZM18.25 5L18.25 20L19.75 20L19.75 5L18.25 5Z',
  d10: 'M6.71715 6.37206C7.1649 5.9281 8.03753 5.41692 9.00968 5.15989C9.99536 4.89928 10.8477 4.95816 11.3999 5.32312C12.0769 5.77057 12.3938 6.23786 12.5204 6.63618C12.6462 7.03186 12.6164 7.45831 12.4233 7.8946C12.0235 8.79825 10.9256 9.69216 9.41617 9.9416C8.90978 10.0253 8.55153 10.4898 8.59286 11.0092C8.63419 11.5285 9.06126 11.9286 9.57431 11.9286C10.2547 11.9286 11.2662 12.0863 12.069 12.5161C12.8322 12.9248 13.3158 13.5123 13.3158 14.4433C13.3158 17.9339 9.46357 20.0139 6.46492 18.5121C4.90659 17.7316 4.19695 16.7558 3.84586 15.8361C3.47763 14.8716 3.46931 13.8902 3.46931 12.9998L1.50001 12.9998L1.5 13.04C1.49988 13.9076 1.49969 15.223 2.00973 16.5591C2.54486 17.9609 3.6076 19.311 5.5939 20.3058C9.6845 22.3546 15.2851 19.6541 15.2851 14.4433C15.2851 14.2764 15.2765 14.1151 15.26 13.9593C15.7847 14.0241 16.3336 14.0185 16.8773 13.901C17.3472 13.7994 17.8098 13.6143 18.2391 13.3245V20.9998H20.2084V5.45721C20.9231 5.38831 21.688 5.23043 22.5 4.94474L21.8554 3.05492C19.677 3.82129 17.9441 3.44987 16.5429 3.03906L15.9967 4.9606C16.6361 5.14805 17.3862 5.34218 18.2391 5.43828V9.8711C18.0391 10.612 17.7581 11.0824 17.4738 11.3821C17.18 11.6917 16.8405 11.8641 16.4674 11.9448C15.7392 12.1022 14.8671 11.9087 14.1239 11.5791C13.7824 11.2383 13.3913 10.9632 12.9874 10.747C12.8985 10.6994 12.8086 10.6543 12.7178 10.6116C13.3775 10.0865 13.899 9.43898 14.2196 8.71431C14.5864 7.88535 14.6887 6.94695 14.3945 6.02164C14.1011 5.09898 13.4459 4.28916 12.4741 3.64685C11.254 2.8404 9.74325 2.89927 8.51353 3.22441C7.27029 3.55311 6.07522 4.21342 5.34143 4.941L6.71715 6.37206Z',
} as const;

export const IconAlphabetHindiStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-hindi-stroke-rounded IconAlphabetHindiStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAlphabetHindiDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-hindi-duotone-rounded IconAlphabetHindiDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconAlphabetHindiTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-hindi-twotone-rounded IconAlphabetHindiTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconAlphabetHindiSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-hindi-solid-rounded IconAlphabetHindiSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetHindiBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-hindi-bulk-rounded IconAlphabetHindiBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetHindiStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-hindi-stroke-sharp IconAlphabetHindiStrokeSharp"
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
        d={d.d9} 
        fill="var(--icon-fill)" 
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

export const IconAlphabetHindiSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-hindi-solid-sharp IconAlphabetHindiSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAlphabetHindi: TheIconSelfPack = {
  name: 'AlphabetHindi',
  StrokeRounded: IconAlphabetHindiStrokeRounded,
  DuotoneRounded: IconAlphabetHindiDuotoneRounded,
  TwotoneRounded: IconAlphabetHindiTwotoneRounded,
  SolidRounded: IconAlphabetHindiSolidRounded,
  BulkRounded: IconAlphabetHindiBulkRounded,
  StrokeSharp: IconAlphabetHindiStrokeSharp,
  SolidSharp: IconAlphabetHindiSolidSharp,
};