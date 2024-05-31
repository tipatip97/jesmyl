import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.85221 21.0098L5.44108 18.227C3.62622 17.0821 2.71879 16.5097 2.53271 15.569C2.34663 14.6284 2.96172 13.723 4.1919 11.9122L8.60303 5.41914C10.1516 3.13971 10.9259 2 12 2C13.0741 2 13.8484 3.13971 15.397 5.41914L19.8081 11.9122C21.0383 13.723 21.6534 14.6284 21.4673 15.569C21.2812 16.5097 20.3738 17.0821 18.5589 18.227L14.1478 21.0098C13.1014 21.6699 12.5781 22 12 22C11.4219 22 10.8986 21.6699 9.85221 21.0098Z',
  d2: 'M12 2L14 14M21 15.569L14 14M12 22L14 14M3 15.569L14 14',
  d3: 'M12 22C12.5781 22 13.1014 21.6699 14.1478 21.0098L18.5589 18.227C20.3738 17.0821 21.2812 16.5097 21.4673 15.569C21.6534 14.6284 21.0383 13.723 19.8081 11.9122L15.397 5.41914C13.8484 3.13972 13.0741 2 12 2L14 14L12 22Z',
  d4: 'M10.9451 2.07011C10.8997 1.81028 10.877 1.68036 10.7678 1.64067C10.6586 1.60097 10.565 1.67945 10.3777 1.8364C10.2189 1.96952 10.0669 2.11788 9.91977 2.27642C9.35766 2.88197 8.74774 3.76694 7.99796 4.85485L3.49098 11.394C2.89737 12.2553 2.40901 12.9638 2.09994 13.5749C1.98628 13.7997 1.89027 14.0235 1.81952 14.2493C1.75183 14.4654 1.71799 14.5734 1.79099 14.6577C1.864 14.742 1.98645 14.7228 2.23137 14.6844L12.2513 13.1132C12.5363 13.0685 12.6788 13.0461 12.7523 12.9438C12.8258 12.8414 12.8011 12.6998 12.7516 12.4165L10.9451 2.07011Z',
  d5: 'M3.00205 16.5735C2.69023 16.6224 2.53433 16.6468 2.49944 16.7705C2.46454 16.8942 2.57774 16.9901 2.80413 17.1818C2.81487 17.1909 2.82566 17.1999 2.83651 17.209C3.35742 17.6437 4.08011 18.093 4.95382 18.6363L9.47436 21.4472C9.97395 21.7579 10.3973 22.0212 10.7689 22.2022C10.771 22.2032 10.7735 22.2021 10.7741 22.1998L12.4248 15.9486C12.5308 15.5473 12.5838 15.3466 12.4744 15.226C12.3651 15.1053 12.1594 15.1375 11.7481 15.202L3.00205 16.5735Z',
  d6: 'M12.9276 21.9251C12.9092 21.9949 12.9 22.0297 12.9019 22.0617C12.9085 22.1711 13.0211 22.2631 13.13 22.2481C13.1619 22.2438 13.1903 22.2299 13.2472 22.2022C13.6188 22.0211 14.0421 21.7579 14.5417 21.4472L19.0622 18.6363C19.9359 18.093 20.6586 17.6437 21.1796 17.209C21.2249 17.1711 21.2694 17.1329 21.3128 17.0942C21.5152 16.914 21.6165 16.8239 21.5861 16.7059C21.5556 16.5878 21.4144 16.5554 21.1319 16.4906L15.3188 15.157C15.0496 15.0953 14.915 15.0644 14.8105 15.1274C14.706 15.1903 14.6708 15.3235 14.6005 15.5897L12.9276 21.9251Z',
  d7: 'M21.7356 14.5911C21.9971 14.651 22.1279 14.681 22.207 14.5935C22.2862 14.5059 22.2462 14.3897 22.1663 14.1572C22.0993 13.9625 22.0143 13.769 21.9161 13.5749C21.6071 12.9638 21.1188 12.2554 20.5252 11.3942L16.0181 4.85487C15.2683 3.76696 14.6584 2.88196 14.0963 2.27642C13.9042 2.06946 13.7039 1.87986 13.4909 1.71887C13.2566 1.54183 13.1394 1.45331 13.0225 1.5243C12.9056 1.59529 12.9332 1.75337 12.9884 2.06954L14.8323 12.63C14.8656 12.8206 14.8822 12.9159 14.9448 12.9817C15.0074 13.0475 15.1019 13.0692 15.2911 13.1126L21.7356 14.5911Z',
  d8: 'M9.92619 2.3485C10.5015 1.71975 11.1502 1.25 12.0001 1.25C12.85 1.25 13.4987 1.71975 14.074 2.3485C14.6323 2.95862 15.238 3.85027 15.9826 4.94639L15.9826 4.94642L20.4587 11.535L20.4587 11.5351C21.0482 12.4028 21.5332 13.1166 21.8401 13.7323C22.162 14.378 22.3413 15.0163 22.2031 15.7146C22.0644 16.4159 21.6543 16.9319 21.1086 17.3939C20.5913 17.8318 19.8735 18.2846 19.0058 18.832L14.5164 21.6641C14.0202 21.9772 13.5998 22.2424 13.2307 22.4248C12.8385 22.6187 12.4459 22.75 12.0001 22.75C11.5543 22.75 11.1617 22.6187 10.7695 22.4248C10.4004 22.2424 9.98006 21.9772 9.48385 21.6641L9.48384 21.6641L4.99436 18.8319C4.12665 18.2846 3.40893 17.8318 2.8916 17.3939C2.34594 16.9319 1.93579 16.4159 1.79707 15.7146C1.65893 15.0163 1.83824 14.378 2.16009 13.7323C2.46704 13.1166 2.95205 12.4027 3.54157 11.535L8.01759 4.9464C8.76222 3.85027 9.36794 2.95862 9.92619 2.3485Z',
  d9: 'M1.77621 14.8739L12.8544 13.1115L10.8663 1.55971C11.205 1.36579 11.5777 1.24976 12.0001 1.24976C12.3169 1.24976 12.6058 1.31502 12.8733 1.42947L14.8846 13.1164L22.2162 14.8228C22.2632 15.1122 22.2638 15.4075 22.2031 15.7143C22.1237 16.1159 21.9552 16.4568 21.7233 16.7615L14.734 15.1348L12.7878 22.6122C12.5374 22.6983 12.2792 22.7498 12.0001 22.7498C11.5545 22.7498 11.162 22.6185 10.7699 22.4248L12.6588 15.1678L2.31697 16.813C2.06436 16.4953 1.88102 16.1387 1.79707 15.7143C1.73994 15.4255 1.73711 15.147 1.77621 14.8739Z',
  d10: 'M22 16L12 2L2 15.5L12 22L22 16Z',
  d11: 'M12 2L14 14M22 16L14 14M12 22L14 14M2 15.5L14 14',
  d12: 'M11.1973 1.84872L13.1212 13.2665L1.5 14.7924L11.1973 1.84872Z',
  d13: 'M12.7009 1.75L14.6478 13.3036L22.5 15.3139L12.7009 1.75Z',
  d14: 'M22.0186 16.7222L14.5365 14.8067L12.7005 22.25L22.0186 16.7222Z',
  d15: 'M11.1765 22.1707L13 14.7782L1.93432 16.2311L11.1765 22.1707Z',
} as const;

export const IconGemStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gem-stroke-rounded IconGemStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconGemDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gem-duotone-rounded IconGemDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconGemTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gem-twotone-rounded IconGemTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconGemSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gem-solid-rounded IconGemSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGemBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gem-bulk-rounded IconGemBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconGemStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gem-stroke-sharp IconGemStrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconGemSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gem-solid-sharp IconGemSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGem: TheIconSelfPack = {
  name: 'Gem',
  StrokeRounded: IconGemStrokeRounded,
  DuotoneRounded: IconGemDuotoneRounded,
  TwotoneRounded: IconGemTwotoneRounded,
  SolidRounded: IconGemSolidRounded,
  BulkRounded: IconGemBulkRounded,
  StrokeSharp: IconGemStrokeSharp,
  SolidSharp: IconGemSolidSharp,
};