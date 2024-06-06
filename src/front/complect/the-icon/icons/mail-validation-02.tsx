import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 4.5L8.91302 8.41697C11.4616 9.86101 12.5384 9.86101 15.087 8.41697L22 4.5',
  d2: 'M15 17.5C15 17.5 15.5 17.5 16 18.5C16 18.5 17.5882 16 19 15.5',
  d3: 'M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z',
  d4: 'M9.10247 2.03664L9.12134 2.7864L9.10247 2.03664ZM2.01577 9.03952L2.7656 9.05548L2.01577 9.03952ZM14.9078 2.03665L14.9267 1.28689L14.9078 2.03665ZM21.9945 9.03953L22.7444 9.02357L21.9945 9.03953ZM9.08361 19.7498C9.4977 19.7602 9.84182 19.433 9.85224 19.0189C9.86266 18.6048 9.53543 18.2607 9.12135 18.2502L9.08361 19.7498ZM2.01577 11.9971L2.7656 11.9812L2.01577 11.9971ZM21.2446 10.508C21.2389 10.9222 21.5701 11.2626 21.9842 11.2682C22.3984 11.2739 22.7388 10.9428 22.7444 10.5286L21.2446 10.508ZM9.12134 2.7864C11.0502 2.73786 12.96 2.73787 14.8889 2.78641L14.9267 1.28689C12.9726 1.23771 11.0377 1.2377 9.08361 1.28688L9.12134 2.7864ZM1.26594 9.02355C1.24469 10.022 1.24469 11.0146 1.26594 12.0131L2.7656 11.9812C2.7448 11.004 2.7448 10.0327 2.7656 9.05548L1.26594 9.02355ZM9.08361 1.28688C7.531 1.32595 6.28463 1.35541 5.28825 1.52921C4.25805 1.70892 3.42092 2.05359 2.71382 2.76454L3.77736 3.82232C4.20198 3.39538 4.71823 3.1513 5.54602 3.0069C6.40763 2.8566 7.52383 2.8266 9.12134 2.7864L9.08361 1.28688ZM2.7656 9.05548C2.79879 7.49669 2.82388 6.41086 2.96979 5.56924C3.10953 4.76325 3.34968 4.25233 3.77736 3.82232L2.71382 2.76454C2.0098 3.4724 1.66774 4.29846 1.49184 5.31301C1.32212 6.29193 1.29816 7.5102 1.26594 9.02355L2.7656 9.05548ZM14.8889 2.78641C16.4865 2.82661 17.6027 2.85661 18.4643 3.00691C19.2921 3.15131 19.8083 3.3954 20.2329 3.82233L21.2965 2.76456C20.5894 2.05361 19.7522 1.70894 18.722 1.52923C17.7257 1.35542 16.4793 1.32596 14.9267 1.28689L14.8889 2.78641ZM22.7444 9.02357C22.7121 7.51022 22.6882 6.29195 22.5184 5.31302C22.3426 4.29848 22.0005 3.47242 21.2965 2.76456L20.2329 3.82233C20.6606 4.25235 20.9008 4.76326 21.0405 5.56926C21.1864 6.41087 21.2115 7.49671 21.2447 9.0555L22.7444 9.02357ZM9.12135 18.2502C7.52384 18.21 6.40763 18.18 5.54602 18.0297C4.71823 17.8853 4.20198 17.6413 3.77737 17.2143L2.71383 18.2721C3.42092 18.983 4.25806 19.3277 5.28825 19.5074C6.28463 19.6812 7.53101 19.7107 9.08361 19.7498L9.12135 18.2502ZM1.26594 12.0131C1.29816 13.5264 1.32213 14.7447 1.49185 15.7236C1.66774 16.7382 2.0098 17.5642 2.71383 18.2721L3.77737 17.2143C3.34968 16.7843 3.10954 16.2734 2.9698 15.4674C2.82389 14.6258 2.79879 13.5399 2.7656 11.9812L1.26594 12.0131ZM21.9945 10.5183C22.7444 10.5286 22.7444 10.5286 22.7444 10.5286C22.7444 10.5286 22.7444 10.5285 22.7444 10.5285C22.7445 10.5285 22.7445 10.5284 22.7445 10.5284C22.7445 10.5282 22.7445 10.528 22.7445 10.5278C22.7445 10.5273 22.7445 10.5266 22.7445 10.5257C22.7445 10.5239 22.7445 10.5213 22.7446 10.5178C22.7447 10.5109 22.7448 10.5007 22.745 10.4877C22.7453 10.4615 22.7457 10.4236 22.7462 10.3764C22.7472 10.2821 22.7484 10.1502 22.7491 9.99997C22.7507 9.70139 22.7507 9.3235 22.7444 9.02357L21.2447 9.0555C21.2506 9.33464 21.2507 9.69615 21.2492 9.99219C21.2484 10.1393 21.2472 10.2685 21.2463 10.361C21.2458 10.4071 21.2454 10.4441 21.2451 10.4694C21.2449 10.4821 21.2448 10.4918 21.2447 10.4983C21.2447 10.5016 21.2446 10.5041 21.2446 10.5057C21.2446 10.5065 21.2446 10.5071 21.2446 10.5075C21.2446 10.5077 21.2446 10.5079 21.2446 10.5079C21.2446 10.508 21.2446 10.508 21.2446 10.508C21.2446 10.508 21.2446 10.508 21.2446 10.508C21.2446 10.508 21.2446 10.508 21.9945 10.5183Z',
  d5: 'M21.9986 15.006C22.0006 12.3759 22.0013 9.35999 21.9945 9.03954L21.6094 4.72119L15.0868 8.41698C12.5382 9.86102 11.4614 9.86102 8.91284 8.41698L2.39908 4.72624C2.08617 5.7328 2.05769 7.07074 2.01577 9.03952C1.99474 10.0273 1.99474 11.0093 2.01577 11.9971C2.08118 15.0693 2.11389 16.6053 3.2456 17.7432C4.37731 18.8811 5.95237 18.9207 9.10248 19H12.416C12.1484 18.3875 12 17.7111 12 17C12 14.2386 14.2386 12 17 12C19.3983 12 21.4022 13.6885 21.8878 15.9416C21.96 15.6415 21.9984 15.3282 21.9986 15.006Z',
  d6: 'M2 4.45605L8.91302 8.38276C11.4616 9.83038 12.5384 9.83038 15.087 8.38276L22 4.45605',
  d7: 'M15 17.4884C15 17.4884 15.5 17.4884 16 18.4909C16 18.4909 17.5882 15.9846 19 15.4834',
  d8: 'M22 16.987C22 19.7553 19.7614 21.9995 17 21.9995C14.2386 21.9995 12 19.7553 12 16.987C12 14.2188 14.2386 11.9746 17 11.9746C19.7614 11.9746 22 14.2188 22 16.987Z',
  d9: 'M21.9589 10.5339V6.5369C21.9478 5.07218 21.1512 2.14273 18.0539 2.14273L12.0863 2.00049L6.10527 2.14273C4.73685 2.04283 2 2.4755 2 7.23579V14.2932C2.00001 15.505 2.27229 17.1361 3.61079 18.1194C4.47577 18.7549 5.61117 18.8138 6.68416 18.8665L9.20865 18.991',
  d10: 'M3.21974 9.09867C3.24724 7.81159 3.26913 6.87303 3.35867 6.13226L8.54291 9.06969C9.83619 9.80247 10.8871 10.2502 11.9996 10.2502C13.1121 10.2502 14.163 9.80247 15.4563 9.06969L20.6507 6.12652C20.7408 6.86818 20.7627 7.80827 20.7903 9.09869C20.7961 9.36712 20.7917 10.2166 20.7902 10.5045C20.7828 11.0422 21.2143 11.4841 21.754 11.4914C22.2937 11.4988 22.7372 11.0681 22.7446 10.5304C22.7461 10.2392 22.7492 9.27913 22.7429 8.98371C22.7123 7.55066 22.687 6.36703 22.5201 5.40794C22.3423 4.38625 21.9914 3.53079 21.2584 2.79647C20.5214 2.05814 19.651 1.70621 18.6113 1.5255C17.6317 1.35526 16.4165 1.32482 14.9396 1.28783L14.8663 1.28599C12.9526 1.23801 11.0575 1.238 9.14374 1.28598L9.07044 1.28782C7.59358 1.32481 6.37833 1.35525 5.39881 1.52549C4.35905 1.70619 3.48868 2.05812 2.75165 2.79645C2.01861 3.53077 1.66772 4.38624 1.48994 5.40792C1.32304 6.36702 1.29778 7.55067 1.2672 8.98374L1.26564 9.05722C1.24479 10.0329 1.24479 11.0028 1.26564 11.9784L1.26721 12.0519C1.29779 13.485 1.32305 14.6686 1.48994 15.6277C1.66773 16.6494 2.01861 17.5049 2.75165 18.2392C3.48868 18.9775 4.35906 19.3295 5.39881 19.5102C6.3783 19.6804 7.66688 19.7127 9.14369 19.7497H9.14375C9.68331 19.7632 10.1317 19.3384 10.1453 18.8008C10.1589 18.2632 9.73248 17.8165 9.19292 17.8029C7.6244 17.7636 6.55477 17.7343 5.73469 17.5918C4.95868 17.4569 4.50643 17.2356 4.13747 16.866C3.76452 16.4924 3.54643 16.046 3.41576 15.2951C3.27704 14.4979 3.25233 13.4621 3.21974 11.937C3.19948 10.989 3.19948 10.0467 3.21974 9.09867Z',
  d11: 'M17 11.25C13.8244 11.25 11.25 13.8244 11.25 17C11.25 20.1756 13.8244 22.75 17 22.75C20.1756 22.75 22.75 20.1756 22.75 17C22.75 13.8244 20.1756 11.25 17 11.25ZM19.2504 16.2072C19.6408 16.0689 19.8453 15.6403 19.707 15.2498C19.5687 14.8594 19.1401 14.6549 18.7496 14.7932C18.2675 14.964 17.8199 15.2838 17.4411 15.616C17.0546 15.955 16.6963 16.3457 16.3947 16.7073C16.2485 16.8825 16.1135 17.0534 15.9928 17.2119C15.9046 17.1294 15.8162 17.0596 15.7285 17.0012C15.5696 16.8952 15.3292 16.7438 15 16.7502C14.5858 16.7502 14.25 17.086 14.25 17.5002C14.25 17.8749 14.5248 18.1855 14.8839 18.2413C14.8875 18.2434 14.8917 18.246 14.8965 18.2492C14.9522 18.2864 15.1237 18.4246 15.3292 18.8356C15.4501 19.0774 15.6917 19.2354 15.9616 19.2492C16.2315 19.263 16.4882 19.1302 16.6332 18.9021C16.796 18.6715 17.276 17.9924 17.5465 17.6681C17.8184 17.3422 18.1219 17.0142 18.4302 16.7438C18.7463 16.4666 19.0266 16.2864 19.2504 16.2072Z',
  d12: 'M22 11V2H2V19H10',
  d13: 'M2 5.5L12 10.5L22 5.5',
  d14: 'M14.75 17L16.25 18.5L19.25 15.5M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z',
  d15: 'M17 11.25C13.8244 11.25 11.25 13.8244 11.25 17C11.25 20.1756 13.8244 22.75 17 22.75C20.1756 22.75 22.75 20.1756 22.75 17C22.75 13.8244 20.1756 11.25 17 11.25ZM19.7804 16.0304L18.7197 14.9697L16.2501 17.4394L15.2804 16.4697L14.2197 17.5304L16.2501 19.5607L19.7804 16.0304Z',
  d16: 'M2.22727 1.25C1.68754 1.25 1.25 1.68593 1.25 2.22368V18.7763C1.25 19.3141 1.68754 19.75 2.22727 19.75H10.0455V17.8026H3.20455V6.94074L12 11.3384L20.7955 6.9407V10.9868H22.75V2.22368C22.75 1.68593 22.3125 1.25 21.7727 1.25H2.22727Z',
};

export const IconMailValidation02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-validation-02-stroke-rounded IconMailValidation02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailValidation02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-validation-02-duotone-rounded IconMailValidation02DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailValidation02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-validation-02-twotone-rounded IconMailValidation02TwotoneRounded"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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

export const IconMailValidation02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-validation-02-solid-rounded IconMailValidation02SolidRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailValidation02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-validation-02-bulk-rounded IconMailValidation02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailValidation02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-validation-02-stroke-sharp IconMailValidation02StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
    </TheIconWrapper>
  );
};

export const IconMailValidation02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-validation-02-solid-sharp IconMailValidation02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMailValidation02: TheIconSelfPack = {
  name: 'MailValidation02',
  StrokeRounded: IconMailValidation02StrokeRounded,
  DuotoneRounded: IconMailValidation02DuotoneRounded,
  TwotoneRounded: IconMailValidation02TwotoneRounded,
  SolidRounded: IconMailValidation02SolidRounded,
  BulkRounded: IconMailValidation02BulkRounded,
  StrokeSharp: IconMailValidation02StrokeSharp,
  SolidSharp: IconMailValidation02SolidSharp,
};