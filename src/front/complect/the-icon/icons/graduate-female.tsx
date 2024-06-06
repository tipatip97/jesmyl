import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19 10C16.995 9.36815 14.5882 9 12 9C9.41179 9 7.00499 9.36815 5 10V13.5C7.00499 12.8682 9.41179 12.5 12 12.5C14.5882 12.5 16.995 12.8682 19 13.5V10Z',
  d2: 'M19 11V14.2611C19.1795 15.4395 19.8462 18.0707 22 20.091C21.2821 21.2694 18.8769 23.1213 15 21.1011',
  d3: 'M5 11V14.2611C4.82051 15.4395 4.15385 18.0707 2 20.091C2.71795 21.2694 5.12308 23.1213 9 21.1011',
  d4: 'M16.5 16V17.3488C16.5 18.7695 15.8365 20.086 14.7522 20.8169L13.8522 21.4236C12.7121 22.1921 11.2879 22.1921 10.1478 21.4236L9.24782 20.8169C8.16348 20.086 7.5 18.7695 7.5 17.3488V16',
  d5: 'M19 10L20.1257 9.4071C21.3888 8.57875 22.0203 8.16457 21.9995 7.57281C21.9787 6.98105 21.32 6.62104 20.0025 5.90101L15.2753 3.31756C13.6681 2.43919 12.8645 2 12 2C11.1355 2 10.3319 2.43919 8.72468 3.31756L3.99753 5.90101C2.68004 6.62104 2.02129 6.98105 2.0005 7.57281C1.9797 8.16457 2.61125 8.57875 3.87434 9.4071L5 10',
  d6: 'M10.1478 21.4243C11.2879 22.1928 12.7121 22.1928 13.8522 21.4243C14.3991 21.0556 15.1079 21.0592 15.7197 21.3056C17.3963 21.9809 20.0417 22.2854 22 20.0006C21.1667 19.334 19.4 17.1006 19 13.5006C17 12.834 11.4 11.9006 5 13.5006C4.83333 15.0004 4 18.4 2 20C2.75673 20.9506 4.98829 22.3825 8.24699 21.2378C8.8807 21.0152 9.59087 21.0488 10.1478 21.4243Z',
  d7: 'M15.2753 3.31756L20.0025 5.90101C21.32 6.62104 21.9787 6.98105 21.9995 7.57281C22.0203 8.16457 21.3888 8.57875 20.1257 9.4071L19 10C12.6 8 7 9.16667 5 10L3.87434 9.4071C2.61125 8.57875 1.9797 8.16457 2.0005 7.57281C2.02129 6.98105 2.68004 6.62104 3.99753 5.90101L8.72468 3.31756C10.3319 2.43919 11.1355 2 12 2C12.8645 2 13.6681 2.43919 15.2753 3.31756Z',
  d8: 'M15 21.1011C18.8769 23.1213 21.2821 21.2694 22 20.091C19.8462 18.0707 19.1795 15.4395 19 14.2611V10M9 21.1011C5.12308 23.1213 2.71795 21.2694 2 20.091C4.15385 18.0707 4.82051 15.4395 5 14.2611V10',
  d9: 'M19.0004 8.73828C19.5527 8.73828 20.0004 9.186 20.0004 9.73828V14.058C20.1799 15.1627 20.8053 17.4741 22.6846 19.2367C23.0298 19.5605 23.1007 20.0821 22.8544 20.4863C22.377 21.27 21.4032 22.1931 19.9762 22.6273C18.5515 23.0609 16.7634 22.9813 14.6896 21.9404L14.4114 22.1279C12.9335 23.1242 11.067 23.1242 9.5891 22.1279L9.31226 21.9413C7.23778 22.9831 5.44912 23.0627 4.02406 22.6291C2.59705 22.1948 1.62319 21.2717 1.1458 20.4881C0.899515 20.0839 0.970415 19.5623 1.31567 19.2385C3.19489 17.4758 3.82033 15.1645 3.99979 14.0598V9.81641C3.99979 9.26412 4.44751 8.81641 4.99979 8.81641C5.55208 8.81641 5.99979 9.26412 5.99979 9.81641V14.1379C5.99979 14.1883 5.99598 14.2387 5.98839 14.2885C5.81223 15.4451 5.20812 17.9033 3.34449 20.0159C3.65166 20.2876 4.07294 20.5534 4.6063 20.7157C5.33128 20.9363 6.32605 20.9842 7.60655 20.5081C6.89383 19.5957 6.50024 18.4285 6.50024 17.2239V15.8751C6.50024 15.3228 6.94795 14.8751 7.50024 14.8751C8.05252 14.8751 8.50024 15.3228 8.50024 15.8751V17.2239C8.50024 18.346 9.02542 19.336 9.80701 19.8629L10.707 20.4695C11.5092 21.0103 12.4913 21.0103 13.2935 20.4695L14.1935 19.8629C14.9751 19.336 15.5002 18.346 15.5002 17.2239V15.8751C15.5002 15.3228 15.948 14.8751 16.5002 14.8751C17.0525 14.8751 17.5002 15.3228 17.5002 15.8751V17.2239C17.5002 18.4279 17.107 19.5946 16.3949 20.5068C17.6748 20.9825 18.6692 20.9345 19.3939 20.7139C19.9273 20.5516 20.3486 20.2859 20.6557 20.0142C18.7921 17.9016 18.188 15.4434 18.0118 14.2867C18.0043 14.2369 18.0004 14.1866 18.0004 14.1362V9.73828C18.0004 9.186 18.4482 8.73828 19.0004 8.73828Z',
  d10: 'M12 1.125C11.4297 1.125 10.9077 1.27288 10.3442 1.51556C9.80197 1.74911 9.17341 2.09264 8.39645 2.51726L3.58598 5.14624L3.58598 5.14624C2.97174 5.48187 2.43523 5.77502 2.05706 6.06434C1.65507 6.37188 1.27304 6.79387 1.25099 7.42147C1.22901 8.04686 1.57809 8.4961 1.95505 8.83441C2.31095 9.15381 2.82452 9.49056 3.41408 9.87714L4 10.1906V13.375C4 13.6139 4.11749 13.8385 4.31636 13.9798C4.51523 14.1211 4.77168 14.1621 5.00689 14.0903C6.99331 13.4839 9.39843 13.125 12 13.125C14.6016 13.125 17.0067 13.4839 18.9931 14.0903C19.2283 14.1621 19.4848 14.1211 19.6836 13.9798C19.8825 13.8385 20 13.6139 20 13.375V10.1906L20.586 9.87713C21.1755 9.49056 21.6891 9.15381 22.045 8.83441C22.422 8.4961 22.771 8.04686 22.7491 7.42147C22.727 6.79387 22.345 6.37188 21.943 6.06434C21.5648 5.77502 21.0283 5.48186 20.4141 5.14624L20.414 5.14623L15.6036 2.51727C14.8267 2.09264 14.1981 1.74911 13.6558 1.51556C13.0923 1.27288 12.5704 1.125 12 1.125Z',
  d11: 'M19 13.5V10H5V13.5H19Z',
  d12: 'M19 11V15C19 15 19.8462 18.1198 22 20.1541C21.2821 21.3408 18.3769 23.1037 14.5 21.0695',
  d13: 'M5 11V15C5 15 4.15385 18.1198 2 20.1541C2.71795 21.3408 5.62308 23.1037 9.5 21.0695',
  d14: 'M16.5 16V17.5C16.5 21 12 22 12 22C12 22 7.5 21 7.5 17.5V16',
  d15: 'M19.0018 10L22.0013 7.57281L12.0018 2L2 7.57281L5.00176 10',
  d16: 'M4.25272 14.8815V10.9917H5.75272V15.0881C5.72283 15.1856 5.60498 15.582 5.5451 15.7537C5.4255 16.0966 5.2433 16.5735 4.99053 17.1168C4.56306 18.0356 4.37602 19.1749 3.46899 20.1767C4.28728 20.9182 5.6904 21.7591 8.2154 20.8116C7.4065 20.034 6.75083 18.9501 6.75083 17.4862V15.9874H8.25083V17.4862C8.25083 18.8576 9.11853 19.7814 10.1419 20.4062C10.6469 20.7145 11.1581 20.9281 11.5466 21.0647C11.7353 21.131 11.892 21.1782 12.0008 21.2085C12.1096 21.1782 12.2663 21.131 12.455 21.0647C12.8436 20.9281 13.3548 20.7145 13.8597 20.4062C14.8831 19.7814 15.7508 18.8576 15.7508 17.4862V15.9874H17.2508V17.4862C17.2508 18.9497 16.5956 20.0333 15.787 20.8108C18.313 21.7596 19.7211 20.9184 20.5396 20.1767C19.6326 19.1749 19.4413 18.0356 19.0138 17.1168C18.7611 16.5735 18.5789 16.0966 18.4593 15.7537C18.3994 15.582 18.2815 15.1856 18.2516 15.0881V10.9917H19.7516V14.8815L19.7593 14.9068C19.7841 14.9877 19.8227 15.1083 19.8758 15.2606C19.9821 15.5656 20.1461 15.995 20.3741 16.4851C20.8341 17.4739 21.0838 18.6676 22.0647 19.5932L22.5047 20.0085L22.1914 20.5259C21.2717 22.0448 18.4803 23.8516 14.3862 21.8347C13.8556 22.1321 13.3453 22.3405 12.9529 22.4785C12.724 22.5589 12.532 22.6166 12.3949 22.6546C12.3263 22.6736 12.0401 22.7403 12.0008 22.75C11.9616 22.7403 11.6753 22.6736 11.6067 22.6546C11.4697 22.6166 11.2776 22.5589 11.0488 22.4785C10.6566 22.3406 10.1468 22.1324 9.6167 21.8354C5.52331 23.8512 2.73686 22.0446 1.81723 20.5259L1.50391 20.0085L1.94395 19.5932C2.92488 18.6676 3.17025 17.4739 3.63031 16.4851C3.8583 15.995 4.02225 15.5656 4.12862 15.2606C4.18172 15.1083 4.22024 14.9877 4.24504 14.9068L4.25272 14.8815Z',
  d17: 'M12.3669 1.34479C12.1399 1.21842 11.8637 1.2184 11.6367 1.34475L1.63496 6.91283C1.41733 7.03398 1.27412 7.25521 1.25276 7.50321C1.23141 7.75121 1.33471 7.99363 1.52844 8.15014L4.25 10.3489V13.2406H19.75V10.3516L22.473 8.14996C22.6667 7.99342 22.7699 7.75105 22.7485 7.50311C22.7271 7.25517 22.5839 7.03401 22.3664 6.91286L12.3669 1.34479Z',
} as const;

export const IconGraduateFemaleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduate-female-stroke-rounded IconGraduateFemaleStrokeRounded"
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

export const IconGraduateFemaleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduate-female-duotone-rounded IconGraduateFemaleDuotoneRounded"
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

export const IconGraduateFemaleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduate-female-twotone-rounded IconGraduateFemaleTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconGraduateFemaleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduate-female-solid-rounded IconGraduateFemaleSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconGraduateFemaleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduate-female-bulk-rounded IconGraduateFemaleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconGraduateFemaleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduate-female-stroke-sharp IconGraduateFemaleStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGraduateFemaleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="graduate-female-solid-sharp IconGraduateFemaleSolidSharp"
    >
      <path 
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

export const iconPackOfGraduateFemale: TheIconSelfPack = {
  name: 'GraduateFemale',
  StrokeRounded: IconGraduateFemaleStrokeRounded,
  DuotoneRounded: IconGraduateFemaleDuotoneRounded,
  TwotoneRounded: IconGraduateFemaleTwotoneRounded,
  SolidRounded: IconGraduateFemaleSolidRounded,
  BulkRounded: IconGraduateFemaleBulkRounded,
  StrokeSharp: IconGraduateFemaleStrokeSharp,
  SolidSharp: IconGraduateFemaleSolidSharp,
};