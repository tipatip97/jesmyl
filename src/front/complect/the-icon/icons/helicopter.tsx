import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 4L14 8',
  d2: 'M14.1838 7.82217L7.05164 8.04637C6.33648 8.06885 5.9789 8.08009 5.6717 7.94382C5.08379 7.68303 4.84517 7.06182 4.58224 6.51632C4.28874 5.9074 3.73021 6.00588 3.15095 6.00588C2.53725 6.00588 2.23041 6.00588 2.07897 6.21415C1.92753 6.42241 2.01183 6.72847 2.18043 7.34059L2.23713 7.54646C2.52367 8.58683 2.66695 9.10701 3.01257 9.48147C3.3582 9.85594 3.85296 10.027 4.84247 10.3692L9.16779 11.8648C10.0835 12.1814 10.5514 12.5853 11.0192 13.4588C11.7405 14.8054 12.1011 15.4788 12.6253 15.957C13.0094 16.3073 13.454 16.5787 13.9357 16.7568C14.5933 17 15.3359 17 16.8209 17H20.7356C21.6061 17 22 16.4839 22 15.6884C22 14.1725 22 13.4145 21.8765 12.7899C21.3762 10.2594 19.4337 8.30451 16.9803 7.86242C16.3748 7.7533 15.6444 7.77626 14.1838 7.82217Z',
  d3: 'M21.5 13.5H19C16.2386 13.5 14 11.2614 14 8.5',
  d4: 'M12 20H14M21 20H19M19 20L20 17M19 20H14M14 20L15 17',
  d5: 'M11 4H17',
  d6: 'M13.5 8.00334L7.05164 8.04637C6.33648 8.06885 5.9789 8.08009 5.6717 7.94382C5.08379 7.68303 4.84517 7.06182 4.58224 6.51632C4.28874 5.9074 3.73021 6.00588 3.15095 6.00588C2.53725 6.00588 2.23041 6.00588 2.07897 6.21415C1.92753 6.42241 2.01183 6.72847 2.18043 7.34059L2.23713 7.54646C2.52367 8.58683 2.66695 9.10701 3.01257 9.48147C3.3582 9.85594 3.85296 10.027 4.84247 10.3692L4.84247 10.3692L9.16779 11.8648C10.0835 12.1814 10.5514 12.5853 11.0192 13.4588C11.7405 14.8054 12.1011 15.4788 12.6253 15.957C13.0094 16.3073 13.454 16.5787 13.9357 16.7568C14.5933 17 15.3359 17 16.8209 17H20.7356C21.6061 17 22 16.4839 22 15.6884V15.6882C22 14.6892 22 14.0194 21.9647 13.5H21.5H19C16.2386 13.5 14 11.2614 14 8.5C14 8.2244 13.7756 8.0015 13.5 8.00334Z',
  d7: 'M19 20L20 17M14 20L15 17',
  d8: 'M12 20H21',
  d9: 'M5.63107 6.29078C5.34122 5.69914 4.8613 5.40506 4.35418 5.30177C4.04634 5.23906 3.67073 5.24858 3.4613 5.25388C3.20484 5.25374 2.75601 5.25563 2.51277 5.29178C2.22415 5.33467 1.80805 5.45427 1.51392 5.85225C1.22604 6.24176 1.2311 6.6615 1.26745 6.93728C1.29812 7.16999 1.86087 9.07115 1.89884 9.19929C1.90026 9.20409 1.90174 9.20843 1.90353 9.2131C2.04071 9.57224 2.21531 9.90947 2.49858 10.2114C2.78512 10.5169 3.11464 10.7135 3.46983 10.8727C3.79635 11.019 4.19659 11.1552 4.64741 11.3085L8.91269 12.7596C9.28651 12.8867 9.50267 13.0089 9.66312 13.1449C9.82494 13.282 10.0676 13.6312 10.2621 13.9885C10.8868 15.1372 11.3142 15.9232 11.9524 16.4959C12.4196 16.9152 12.9624 17.2417 13.5527 17.4564C14.3622 17.7509 15.2549 17.7505 16.5374 17.75L20.537 17.7499C21.159 17.7499 21.7626 17.5624 22.1976 17.0908C22.6176 16.6354 22.75 15.9253 22.75 15.3975C22.7501 14.0637 22.7502 13.2479 22.6107 12.5539C22.0474 9.75053 19.8517 7.55469 17.0404 7.05628C16.346 6.93316 15.5369 6.95829 14.2408 6.99855L7.1333 7.21838C6.74654 7.23034 6.22461 7.33933 5.98402 6.97417C5.89444 6.83823 5.72623 6.48918 5.63107 6.29078ZM20.5078 12.2461C20.5515 12.372 20.4555 12.5 20.3223 12.5H18.9998C16.9994 12.5 15.3419 11.0316 15.0466 9.11383C15.0289 8.99892 15.1188 8.89755 15.2351 8.8951C15.9691 8.87964 16.3621 8.89001 16.6936 8.94878C18.4529 9.26068 19.9111 10.5254 20.5078 12.2461Z',
  d10: 'M15.3162 16.0516C15.8402 16.2262 16.1233 16.7926 15.9487 17.3165L15.3874 19.0003H18.2792L19.0513 16.684C19.226 16.1601 19.7923 15.8769 20.3162 16.0516C20.8402 16.2262 21.1233 16.7926 20.9487 17.3165L20.3874 19.0003H21C21.5523 19.0003 22 19.448 22 20.0003C22 20.5526 21.5523 21.0003 21 21.0003H12C11.4477 21.0003 11 20.5526 11 20.0003C11 19.448 11.4477 19.0003 12 19.0003H13.2792L14.0513 16.684C14.226 16.1601 14.7923 15.8769 15.3162 16.0516Z',
  d11: 'M10 4C10 3.44772 10.4477 3 11 3H17C17.5523 3 18 3.44772 18 4C18 4.55228 17.5523 5 17 5H15V8C15 8.55228 14.5523 9 14 9C13.4477 9 13 8.55228 13 8L13 5H11C10.4477 5 10 4.55228 10 4Z',
  d12: 'M5.63107 6.29078C5.34122 5.69914 4.8613 5.40506 4.35418 5.30177C4.04634 5.23906 3.67073 5.24858 3.4613 5.25388C3.20484 5.25374 2.75601 5.25563 2.51277 5.29178C2.22415 5.33467 1.80805 5.45427 1.51392 5.85225C1.22604 6.24176 1.2311 6.6615 1.26745 6.93728C1.29812 7.16999 1.86087 9.07115 1.89884 9.19929C1.90026 9.20409 1.90174 9.20843 1.90353 9.2131C2.04071 9.57224 2.21531 9.90947 2.49858 10.2114C2.78512 10.5169 3.11464 10.7135 3.46983 10.8727C3.79635 11.019 4.19659 11.1552 4.64741 11.3085L8.91269 12.7596C9.28651 12.8867 9.50267 13.0089 9.66312 13.1449C9.82494 13.282 10.0676 13.6312 10.2621 13.9885C10.8868 15.1372 11.3142 15.9232 11.9524 16.4959C12.4196 16.9152 12.9624 17.2417 13.5527 17.4564C14.3622 17.7509 15.2549 17.7505 16.5374 17.75L20.537 17.7499C21.159 17.7499 21.7626 17.5624 22.1976 17.0908C22.6176 16.6354 22.75 15.9253 22.75 15.3975V15.3975C22.7501 14.0637 22.7502 13.2479 22.6107 12.5539C22.0474 9.75053 19.8517 7.55469 17.0404 7.05628C16.346 6.93316 15.5369 6.95829 14.2408 6.99855L7.1333 7.21838C6.74654 7.23034 6.22461 7.33933 5.98402 6.97417C5.89444 6.83823 5.72623 6.48918 5.63107 6.29078Z',
  d13: 'M20.5084 12.2481C20.5521 12.374 20.4561 12.5019 20.3229 12.5019H19.0003C16.9999 12.5019 15.3425 11.0335 15.0472 9.11579C15.0295 9.00087 15.1194 8.8995 15.2356 8.89705C15.9696 8.8816 16.3627 8.89196 16.6942 8.95074C18.4535 9.26264 19.9116 10.5273 20.5084 12.2481Z',
  d14: 'M10 4C10 3.44772 10.4477 3 11 3H17C17.5523 3 18 3.44772 18 4C18 4.55228 17.5523 5 17 5H15V6.97633C14.7663 6.98223 14.5144 6.99005 14.2408 6.99855L13 7.03693L13 5H11C10.4477 5 10 4.55228 10 4ZM13.77 17.5279L13.2792 19.0003H12C11.4477 19.0003 11 19.448 11 20.0003C11 20.5526 11.4477 21.0003 12 21.0003H21C21.5523 21.0003 22 20.5526 22 20.0003C22 19.448 21.5523 19.0003 21 19.0003H20.3874L20.8083 17.7376C20.7186 17.7459 20.628 17.7499 20.537 17.7499L18.696 17.7499L18.2792 19.0003H15.3874L15.8049 17.7478C14.9981 17.7397 14.3563 17.7014 13.77 17.5279Z',
  d15: 'M16 7.99986H5.99997L4.5 6H2L3 10L10 12L13 17H22V13.9999C22 10.6862 19.3137 7.99986 16 7.99986Z',
  d16: 'M21.5004 14H20.001C16.6873 14 14.001 11.3137 14.001 8',
  d17: 'M12 20H15M22 20H19M19 20V17M19 20H15M15 20V17',
  d18: 'M10 4H18',
  d19: 'M13 8L13 4L15 4L15 8L13 8Z',
  d20: 'M2.22728 5.25C1.92635 5.25 1.64219 5.38641 1.45699 5.6198C1.27179 5.85318 1.2062 6.15749 1.27919 6.44475L2.25646 10.2909C2.34117 10.6243 2.60026 10.8878 2.93608 10.9822L9.40598 12.801L12.1393 17.2832C12.3159 17.5728 12.634 17.75 12.9773 17.75H21.7727C22.3125 17.75 22.75 17.3195 22.75 16.7885V13.9037C22.75 10.1864 19.6872 7.17294 15.9091 7.17294H6.62497L5.45227 5.6346C5.26771 5.39249 4.97806 5.25 4.67047 5.25H2.22728ZM15.9096 9.0957C18.6083 9.0957 20.796 11.2482 20.796 13.9034V13.9997H20.0017C17.0623 13.9997 14.6166 11.886 14.1016 9.0957H15.9096Z',
  d21: 'M14 19H12V21H22V19H20V17H18V19H16V17H14V19Z',
  d22: 'M18 5H10V3H18V5Z',
} as const;

export const IconHelicopterStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="helicopter-stroke-rounded IconHelicopterStrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHelicopterDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="helicopter-duotone-rounded IconHelicopterDuotoneRounded"
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
        d={d.d6} 
        fill="var(--icon-fill)" 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHelicopterTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="helicopter-twotone-rounded IconHelicopterTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHelicopterSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="helicopter-solid-rounded IconHelicopterSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconHelicopterBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="helicopter-bulk-rounded IconHelicopterBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconHelicopterStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="helicopter-stroke-sharp IconHelicopterStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHelicopterSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="helicopter-solid-sharp IconHelicopterSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfHelicopter: TheIconSelfPack = {
  name: 'Helicopter',
  StrokeRounded: IconHelicopterStrokeRounded,
  DuotoneRounded: IconHelicopterDuotoneRounded,
  TwotoneRounded: IconHelicopterTwotoneRounded,
  SolidRounded: IconHelicopterSolidRounded,
  BulkRounded: IconHelicopterBulkRounded,
  StrokeSharp: IconHelicopterStrokeSharp,
  SolidSharp: IconHelicopterSolidSharp,
};