import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.91211 6.83838L9.85413 8.57781C11.5693 9.5919 12.2549 9.5919 13.9701 8.57781L16.9121 6.83838',
  d2: 'M14.9121 17.3384C14.9121 17.3384 15.4121 17.3384 15.9121 18.3384C15.9121 18.3384 17.5003 15.8384 18.9121 15.3384',
  d3: 'M22 10.3118L21.9589 6.43829C21.9478 4.96285 21.1512 2.01198 18.0539 2.01198H6.10527C4.73685 1.91134 2 2.34718 2 7.1423V14.2514C2.00001 15.472 2.27229 17.115 3.61079 18.1055C4.47577 18.7456 5.61117 18.8049 6.68416 18.858L8.93115 18.9692',
  d4: 'M21.9809 16.9592C21.9809 19.7432 19.7346 22 16.9636 22C14.1926 22 11.9463 19.7432 11.9463 16.9592C11.9463 14.1753 14.1926 11.9185 16.9636 11.9185C19.7346 11.9185 21.9809 14.1753 21.9809 16.9592Z',
  d5: 'M9.10247 2.03664C11.044 1.98778 12.9663 1.98779 14.9078 2.03665C18.0579 2.11593 19.633 2.15557 20.7647 3.29344C21.8964 4.43132 21.9291 5.96739 21.9945 9.03953V15C21.9945 15.3206 21.9568 15.6325 21.8855 15.9313C21.3961 13.6834 19.3946 12 17 12C14.2386 12 12 14.2386 12 17C12 17.7111 12.1484 18.3875 12.416 19H9.10248C5.95237 18.9207 4.37731 18.8811 3.2456 17.7432C2.11389 16.6053 2.08118 15.0693 2.01577 11.9971C1.99474 11.0093 1.99474 10.0273 2.01577 9.03952C2.08118 5.96738 2.11388 4.43131 3.24559 3.29343C4.37731 2.15555 5.95236 2.11591 9.10247 2.03664Z',
  d6: 'M15 17.5C15 17.5 15.5 17.5 16 18.5C16 18.5 17.5882 16 19 15.5',
  d7: 'M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z',
  d8: 'M9.10247 2.03664L9.12134 2.7864L9.10247 2.03664ZM2.01577 9.03952L2.7656 9.05548L2.01577 9.03952ZM14.9078 2.03665L14.9267 1.28689L14.9078 2.03665ZM21.9945 9.03953L22.7444 9.02357L21.9945 9.03953ZM9.08361 19.7498C9.4977 19.7602 9.84182 19.433 9.85224 19.0189C9.86266 18.6048 9.53543 18.2607 9.12135 18.2502L9.08361 19.7498ZM2.01577 11.9971L2.7656 11.9812L2.01577 11.9971ZM21.2446 10.508C21.2389 10.9222 21.5701 11.2626 21.9842 11.2682C22.3984 11.2739 22.7388 10.9428 22.7444 10.5286L21.2446 10.508ZM9.12134 2.7864C11.0502 2.73786 12.96 2.73787 14.8889 2.78641L14.9267 1.28689C12.9726 1.23771 11.0377 1.2377 9.08361 1.28688L9.12134 2.7864ZM1.26594 9.02355C1.24469 10.022 1.24469 11.0146 1.26594 12.0131L2.7656 11.9812C2.7448 11.004 2.7448 10.0327 2.7656 9.05548L1.26594 9.02355ZM9.08361 1.28688C7.531 1.32595 6.28463 1.35541 5.28825 1.52921C4.25805 1.70892 3.42092 2.05359 2.71382 2.76454L3.77736 3.82232C4.20198 3.39538 4.71823 3.1513 5.54602 3.0069C6.40763 2.8566 7.52383 2.8266 9.12134 2.7864L9.08361 1.28688ZM2.7656 9.05548C2.79879 7.49669 2.82388 6.41086 2.96979 5.56924C3.10953 4.76325 3.34968 4.25233 3.77736 3.82232L2.71382 2.76454C2.0098 3.4724 1.66774 4.29846 1.49184 5.31301C1.32212 6.29193 1.29816 7.5102 1.26594 9.02355L2.7656 9.05548ZM14.8889 2.78641C16.4865 2.82661 17.6027 2.85661 18.4643 3.00691C19.2921 3.15131 19.8083 3.3954 20.2329 3.82233L21.2965 2.76456C20.5894 2.05361 19.7522 1.70894 18.722 1.52923C17.7257 1.35542 16.4793 1.32596 14.9267 1.28689L14.8889 2.78641ZM22.7444 9.02357C22.7121 7.51022 22.6882 6.29195 22.5184 5.31302C22.3426 4.29848 22.0005 3.47242 21.2965 2.76456L20.2329 3.82233C20.6606 4.25235 20.9008 4.76326 21.0405 5.56926C21.1864 6.41087 21.2115 7.49671 21.2447 9.0555L22.7444 9.02357ZM9.12135 18.2502C7.52384 18.21 6.40763 18.18 5.54602 18.0297C4.71823 17.8853 4.20198 17.6413 3.77737 17.2143L2.71383 18.2721C3.42092 18.983 4.25806 19.3277 5.28825 19.5074C6.28463 19.6812 7.53101 19.7107 9.08361 19.7498L9.12135 18.2502ZM1.26594 12.0131C1.29816 13.5264 1.32213 14.7447 1.49185 15.7236C1.66774 16.7382 2.0098 17.5642 2.71383 18.2721L3.77737 17.2143C3.34968 16.7843 3.10954 16.2734 2.9698 15.4674C2.82389 14.6258 2.79879 13.5399 2.7656 11.9812L1.26594 12.0131ZM21.9945 10.5183C22.7444 10.5286 22.7444 10.5286 22.7444 10.5286C22.7444 10.5286 22.7444 10.5285 22.7444 10.5285C22.7445 10.5285 22.7445 10.5284 22.7445 10.5284C22.7445 10.5282 22.7445 10.528 22.7445 10.5278C22.7445 10.5273 22.7445 10.5266 22.7445 10.5257C22.7445 10.5239 22.7445 10.5213 22.7446 10.5178C22.7447 10.5109 22.7448 10.5007 22.745 10.4877C22.7453 10.4615 22.7457 10.4236 22.7462 10.3764C22.7472 10.2821 22.7484 10.1502 22.7491 9.99997C22.7507 9.70139 22.7507 9.3235 22.7444 9.02357L21.2447 9.0555C21.2506 9.33464 21.2507 9.69615 21.2492 9.99219C21.2484 10.1393 21.2472 10.2685 21.2463 10.361C21.2458 10.4071 21.2454 10.4441 21.2451 10.4694C21.2449 10.4821 21.2448 10.4918 21.2447 10.4983C21.2447 10.5016 21.2446 10.5041 21.2446 10.5057C21.2446 10.5065 21.2446 10.5071 21.2446 10.5075C21.2446 10.5077 21.2446 10.5079 21.2446 10.5079C21.2446 10.508 21.2446 10.508 21.2446 10.508C21.2446 10.508 21.2446 10.508 21.2446 10.508C21.2446 10.508 21.2446 10.508 21.9945 10.5183Z',
  d9: 'M7 7L9.94202 8.73943C11.6572 9.75352 12.3428 9.75352 14.058 8.73943L17 7',
  d10: 'M6.99365 6.89502L9.93304 8.64654C11.6467 9.66768 12.3317 9.66768 14.0453 8.64654L16.9847 6.89502',
  d11: 'M14.9868 17.468C14.9868 17.468 15.4864 17.468 15.9859 18.475C15.9859 18.475 17.5727 15.9576 18.9832 15.4541',
  d12: 'M21.9808 16.9644C21.9808 19.745 19.7442 21.9992 16.9853 21.9992C14.2263 21.9992 11.9897 19.745 11.9897 16.9644C11.9897 14.1838 14.2263 11.9297 16.9853 11.9297C19.7442 11.9297 21.9808 14.1838 21.9808 16.9644Z',
  d13: 'M22.0013 10.4464V6.41828C21.9083 4.89552 21.1326 2.01246 18.0381 2.01246H6.10013C4.73293 1.91187 1.99854 2.34754 1.99854 7.14076V14.247C1.99855 15.4672 2.27058 17.1096 3.60788 18.0997C4.47209 18.7395 5.60647 18.7988 6.67851 18.8519L9.12537 18.9603',
  d14: 'M9.07557 1.28688C11.0316 1.2377 12.9684 1.23771 14.9244 1.28689L14.9827 1.28835C16.5098 1.32672 17.7387 1.3576 18.7235 1.52923C19.7548 1.70894 20.5927 2.05361 21.3005 2.76456C22.0052 3.47242 22.3476 4.29848 22.5237 5.31302C22.6914 6.27928 22.7169 7.47872 22.7486 8.96496L22.7498 9.02357L22.75 9.03953V11.9605L22.7498 11.9764L22.7486 12.035C22.7448 12.214 22.741 12.3889 22.7372 12.5596C21.4096 10.8502 19.3334 9.75 16.9999 9.75C12.9919 9.75 9.74277 12.9959 9.74277 17C9.74277 17.9685 9.93286 18.8926 10.2778 19.7372C9.87764 19.7312 9.47701 19.7232 9.07557 19.7131L9.01719 19.7117C7.49015 19.6733 6.2613 19.6424 5.27646 19.4708C4.24524 19.2911 3.40728 18.9464 2.69948 18.2355C1.99476 17.5276 1.65236 16.7015 1.47629 15.687C1.30861 14.7208 1.28307 13.5213 1.25142 12.0351L1.25017 11.9764L1.25 11.9605V9.03952L1.25017 9.02355L1.25142 8.96488C1.28307 7.47868 1.30861 6.27925 1.47629 5.31301C1.65236 4.29846 1.99476 3.4724 2.69948 2.76454C3.40728 2.05359 4.24524 1.70892 5.27646 1.52921C6.26132 1.35759 7.49019 1.32671 9.01727 1.28834L9.07557 1.28688ZM7.38085 5.6044C7.02429 5.39359 6.56435 5.51174 6.35354 5.8683C6.14273 6.22485 6.26088 6.68479 6.61744 6.8956L9.55945 8.63503C10.4303 9.14991 11.1818 9.5 11.9991 9.5C12.8165 9.5 13.568 9.14991 14.4388 8.63503L17.3808 6.8956C17.7374 6.68479 17.8556 6.22485 17.6447 5.8683C17.4339 5.51174 16.974 5.39359 16.6174 5.6044L13.6754 7.34383C12.8311 7.84304 12.3821 8 11.9991 8C11.6161 8 11.1672 7.84304 10.3229 7.34383L7.38085 5.6044Z',
  d15: 'M16.9995 11.25C13.8239 11.25 11.2495 13.8244 11.2495 17C11.2495 20.1756 13.8239 22.75 16.9995 22.75C20.1751 22.75 22.7495 20.1756 22.7495 17C22.7495 13.8244 20.1751 11.25 16.9995 11.25ZM19.2499 16.2072C19.6403 16.0689 19.8448 15.6403 19.7065 15.2498C19.5682 14.8594 19.1396 14.6549 18.7491 14.7932C18.267 14.964 17.8194 15.2838 17.4407 15.616C17.0541 15.955 16.6958 16.3457 16.3942 16.7073C16.248 16.8825 16.113 17.0534 15.9924 17.2119C15.9042 17.1294 15.8157 17.0596 15.728 17.0012C15.7137 16.9916 15.6992 16.9817 15.6844 16.9716C15.5346 16.8692 15.3519 16.7443 14.9995 16.7502C14.5853 16.7502 14.2495 17.086 14.2495 17.5002C14.2495 17.8749 14.5243 18.1855 14.8834 18.2413C14.887 18.2434 14.8912 18.246 14.896 18.2492C14.9517 18.2864 15.1232 18.4246 15.3287 18.8356C15.4496 19.0774 15.6912 19.2354 15.9612 19.2492C16.231 19.263 16.4878 19.1302 16.6327 18.9021C16.6327 18.9021 16.8013 18.6492 16.8825 18.5343C17.0453 18.3036 17.2755 17.9924 17.546 17.6681C17.818 17.3422 18.1214 17.0142 18.4297 16.7438C18.7458 16.4666 19.0261 16.2864 19.2499 16.2072Z',
  d16: 'M14.9244 1.28689C12.9684 1.23771 11.0316 1.2377 9.07557 1.28688L9.01727 1.28834C7.49019 1.32671 6.26132 1.35759 5.27646 1.52921C4.24524 1.70892 3.40728 2.05359 2.69948 2.76454C1.99476 3.4724 1.65236 4.29846 1.47629 5.31301C1.30861 6.27925 1.28307 7.47868 1.25142 8.96488L1.25017 9.02355L1.25 9.03952V11.9605L1.25017 11.9764L1.25142 12.0351C1.28307 13.5213 1.30861 14.7208 1.47629 15.687C1.65236 16.7015 1.99476 17.5276 2.69948 18.2355C3.40728 18.9464 4.24524 19.2911 5.27646 19.4708C6.2613 19.6424 7.49015 19.6733 9.01719 19.7117L9.07557 19.7131C9.47701 19.7232 9.87764 19.7312 10.2778 19.7372C9.93286 18.8926 9.74277 17.9685 9.74277 17C9.74277 12.9959 12.9919 9.75 16.9999 9.75C19.3334 9.75 21.4096 10.8502 22.7372 12.5596C22.741 12.3889 22.7448 12.214 22.7486 12.035L22.7498 11.9764L22.75 11.9605V9.03953L22.7498 9.02357L22.7486 8.96496C22.7169 7.47872 22.6914 6.27928 22.5237 5.31302C22.3476 4.29848 22.0052 3.47242 21.3005 2.76456C20.5927 2.05361 19.7548 1.70894 18.7235 1.52923C17.7387 1.3576 16.5098 1.32672 14.9827 1.28835L14.9244 1.28689Z',
  d17: 'M6.35354 5.8683C6.56435 5.51174 7.02429 5.39359 7.38085 5.6044L10.3229 7.34383C11.1672 7.84304 11.6161 8 11.9991 8C12.3821 8 12.8311 7.84304 13.6754 7.34383L16.6174 5.6044C16.974 5.39359 17.4339 5.51174 17.6447 5.8683C17.8556 6.22485 17.7374 6.68479 17.3808 6.8956L14.4388 8.63503C13.568 9.14991 12.8165 9.5 11.9991 9.5C11.1818 9.5 10.4303 9.14991 9.55945 8.63503L6.61744 6.8956C6.26088 6.68479 6.14273 6.22485 6.35354 5.8683Z',
  d18: 'M22 11V2H2V19H10',
  d19: 'M6 6.5L12 10.5L18 6.5',
  d20: 'M14.75 17L16.25 18.5L19.25 15.5M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z',
  d21: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V12.5835C21.4246 10.8604 19.342 9.75 17 9.75C12.9959 9.75 9.75 12.9959 9.75 17C9.75 17.9734 9.94182 18.902 10.2897 19.75H2C1.58579 19.75 1.25 19.4142 1.25 19V2ZM6.41603 4.45703L5.58398 5.70511L12 9.98246L18.416 5.70511L17.584 4.45703L12 8.17968L6.41603 4.45703Z',
  d22: 'M17 11.25C13.8244 11.25 11.25 13.8244 11.25 17C11.25 20.1756 13.8244 22.75 17 22.75C20.1756 22.75 22.75 20.1756 22.75 17C22.75 13.8244 20.1756 11.25 17 11.25ZM19.7804 16.0304L18.7197 14.9697L16.2501 17.4394L15.2804 16.4697L14.2197 17.5304L16.2501 19.5607L19.7804 16.0304Z',
};

export const IconMailValidation01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-validation-01-stroke-rounded IconMailValidation01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMailValidation01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-validation-01-duotone-rounded IconMailValidation01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailValidation01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-validation-01-twotone-rounded IconMailValidation01TwotoneRounded"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMailValidation01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-validation-01-solid-rounded IconMailValidation01SolidRounded"
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

export const IconMailValidation01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-validation-01-bulk-rounded IconMailValidation01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
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

export const IconMailValidation01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-validation-01-stroke-sharp IconMailValidation01StrokeSharp"
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
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailValidation01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-validation-01-solid-sharp IconMailValidation01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMailValidation01: TheIconSelfPack = {
  name: 'MailValidation01',
  StrokeRounded: IconMailValidation01StrokeRounded,
  DuotoneRounded: IconMailValidation01DuotoneRounded,
  TwotoneRounded: IconMailValidation01TwotoneRounded,
  SolidRounded: IconMailValidation01SolidRounded,
  BulkRounded: IconMailValidation01BulkRounded,
  StrokeSharp: IconMailValidation01StrokeSharp,
  SolidSharp: IconMailValidation01SolidSharp,
};