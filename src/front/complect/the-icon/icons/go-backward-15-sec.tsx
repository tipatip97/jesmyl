import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 5L10.8961 3.45459C10.4851 2.87911 10.2795 2.59137 10.4093 2.32411C10.5391 2.05684 10.8689 2.04153 11.5286 2.01092C11.6848 2.00367 11.842 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927',
  d2: 'M8 10.9997C8.528 10.5797 9.008 9.8871 9.308 10.0157C9.608 10.1442 9.512 10.5677 9.512 11.2277C9.512 11.8877 9.512 14.6804 9.512 16.0037',
  d3: 'M16 10H13.3595C13.1212 10 12.916 10.1682 12.8692 10.4019L12.504 12.504C13.14 12.24 13.4607 12.1429 14.1766 12.1429C15.2126 12.1429 16.104 12.78 16.002 14.1C16.02 15.66 14.76 16.02 14.1766 16C13.5931 15.98 12.66 16.2 12.5 15',
  d4: 'M12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927C8.64715 2.01092 10.8689 2.04153 11.5286 2.01092C11.6848 2.00367 11.842 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z',
  d5: 'M7.99512 10.9928C8.52312 10.5728 9.00312 9.88024 9.30312 10.0088C9.60312 10.1373 9.50712 10.5608 9.50712 11.2208C9.50712 11.8808 9.50712 14.6735 9.50712 15.9968',
  d6: 'M15.9951 9.99316H13.3546C13.1163 9.99316 12.9111 10.1614 12.8643 10.3951L12.4991 12.4972C13.1351 12.2332 13.4558 12.1361 14.1717 12.1361C15.2077 12.1361 16.0991 12.7732 15.9971 14.0932C16.0151 15.6532 14.7551 16.0132 14.1717 15.9932C13.5882 15.9732 12.6551 16.1932 12.4951 14.9932',
  d7: 'M7.99512 10.9938C8.52312 10.5738 9.00312 9.88124 9.30312 10.0098C9.60312 10.1383 9.50712 10.5618 9.50712 11.2218C9.50712 11.8818 9.50712 14.6745 9.50712 15.9978M15.9951 9.99414H13.3546C13.1163 9.99414 12.9111 10.1623 12.8643 10.396L12.4991 12.4981C13.1351 12.2341 13.4558 12.137 14.1717 12.137C15.2077 12.137 16.0991 12.7741 15.9971 14.0941C16.0151 15.6541 14.7551 16.0141 14.1717 15.9941C13.5882 15.9741 12.6551 16.1941 12.4951 14.9941',
  d8: 'M20.7955 12C20.7955 16.8576 16.8576 20.7955 12 20.7955C7.1424 20.7955 3.20454 16.8576 3.20454 12C3.20454 9.12308 4.58476 6.56881 6.72329 4.9625C7.15484 4.63835 7.24191 4.02573 6.91776 3.59417C6.59361 3.16262 5.98099 3.07556 5.54943 3.39971C2.94058 5.3593 1.25 8.48236 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C11.8304 1.25 11.6075 1.25642 11.4398 1.26421C11.167 1.27664 10.8463 1.29127 10.5821 1.35116C10.2453 1.42751 9.80812 1.61931 9.56638 2.1171C9.31515 2.63443 9.4604 3.11204 9.60692 3.41217C9.72828 3.66078 9.92187 3.93145 10.0938 4.17184L11.2048 5.72712C11.5023 6.14365 12.0666 6.25664 12.4987 5.9996C12.5203 5.98676 12.5311 5.98034 12.5557 5.96122C12.5803 5.94211 12.5957 5.92667 12.6266 5.89581L14.4061 4.11627C14.6244 3.89797 14.7335 3.78881 14.8835 3.75961C15.0335 3.73042 15.1654 3.7863 15.4291 3.89808C18.583 5.23461 20.7955 8.35893 20.7955 12Z',
  d9: 'M8.40044 8.77867C9.33292 8.04257 10.5001 8.82268 10.5001 9.81619L10.5001 15.9999C10.5001 16.5521 10.0523 16.9999 9.50005 16.9999C8.94777 16.9999 8.50005 16.5521 8.50005 15.9999L8.50005 11.3661C8.10306 11.5958 7.58628 11.5279 7.2633 11.1761C6.88984 10.7692 6.91692 10.1366 7.3238 9.76314L8.34384 8.82687C8.36211 8.8101 8.38099 8.79403 8.40044 8.77867ZM11.8801 9.74128C12.0057 9.02352 12.6289 8.49985 13.3576 8.49985H16C16.5523 8.49985 17 8.94757 17 9.49985C17 10.0521 16.5523 10.4999 16 10.4999H13.7923L13.7005 11.1496C14.127 11.1145 14.5586 11.1446 14.9803 11.241C16.162 11.5111 17 12.5623 17 13.7744V14.2499C17 15.7686 15.7688 16.9999 14.25 16.9999H13.5C12.3954 16.9999 11.5 16.1044 11.5 14.9999C11.5 14.4476 11.9477 13.9999 12.5 13.9999C13.0523 13.9999 13.5 14.4476 13.5 14.9999H14.25C14.6642 14.9999 15 14.6641 15 14.2499V13.7744C15 13.4951 14.8069 13.2529 14.5347 13.1907C14.1112 13.0939 13.6686 13.1248 13.2627 13.2794L12.856 13.4343C12.5254 13.5603 12.1528 13.5022 11.8763 13.2815C11.5997 13.0608 11.4604 12.7104 11.5098 12.3601L11.8749 9.77388C11.8764 9.76299 11.8782 9.75212 11.8801 9.74128Z',
  d10: 'M12 5L10 2.20004C10.6462 2.06886 11.3151 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927',
  d11: 'M16 10.75C16.4142 10.75 16.75 10.4142 16.75 10C16.75 9.58579 16.4142 9.25 16 9.25V10.75ZM13 10V9.25C12.6425 9.25 12.3347 9.50234 12.2646 9.85291L13 10ZM12.5 12.5L11.7646 12.3529C11.711 12.6206 11.8072 12.8963 12.0156 13.0726C12.2241 13.2489 12.5119 13.2981 12.767 13.2009L12.5 12.5ZM12.9067 12.3451L13.1737 13.0459L12.9067 12.3451ZM14.7575 12.216L14.5904 12.9471L14.5904 12.9471L14.7575 12.216ZM13.25 15C13.25 14.5858 12.9142 14.25 12.5 14.25C12.0858 14.25 11.75 14.5858 11.75 15H13.25ZM9.50005 10H10.25C10.25 9.71592 10.0895 9.45623 9.83546 9.32918C9.58137 9.20214 9.27732 9.22955 9.05005 9.4L9.50005 10ZM8.75005 16V16.75H10.25V16H8.75005ZM16 9.25H13V10.75H16V9.25ZM12.2646 9.85291L11.7646 12.3529L13.2354 12.6471L13.7354 10.1471L12.2646 9.85291ZM12.767 13.2009L13.1737 13.0459L12.6397 11.6442L12.233 11.7991L12.767 13.2009ZM15.25 13.7746V14.25H16.75V13.7746H15.25ZM14.25 15.25H13.5V16.75H14.25V15.25ZM15.25 14.25C15.25 14.8023 14.8023 15.25 14.25 15.25V16.75C15.6307 16.75 16.75 15.6307 16.75 14.25H15.25ZM14.5904 12.9471C14.9763 13.0354 15.25 13.3787 15.25 13.7746H16.75C16.75 12.679 15.9926 11.729 14.9246 11.4848L14.5904 12.9471ZM13.1737 13.0459C13.6257 12.8737 14.1187 12.8393 14.5904 12.9471L14.9246 11.4848C14.1639 11.311 13.3688 11.3664 12.6397 11.6442L13.1737 13.0459ZM13.5 15.25C13.3619 15.25 13.25 15.1381 13.25 15H11.75C11.75 15.9665 12.5335 16.75 13.5 16.75V15.25ZM8.75005 10V16H10.25V10H8.75005ZM9.05005 9.4L7.05001 10.9L7.94999 12.1L9.95004 10.6L9.05005 9.4Z',
  d12: 'M11.8063 3.20663C11.8707 3.20524 11.9353 3.20455 12 3.20455C16.8576 3.20455 20.7955 7.1424 20.7955 12C20.7955 16.8576 16.8576 20.7955 12 20.7955C7.1424 20.7955 3.20455 16.8576 3.20455 12C3.20455 9.12308 4.58477 6.56881 6.72329 4.9625L5.54944 3.39971C2.94058 5.3593 1.25 8.48236 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C11.265 1.25 10.5462 1.32391 9.85104 1.46502C9.52654 1.53089 9.25747 1.7566 9.13614 2.06469C9.01482 2.37278 9.05776 2.72135 9.25022 2.9908L11.2048 5.72712L12.7952 4.59106L11.8063 3.20663Z',
  d13: 'M9.99847 9.00001C9.99847 8.62124 9.78447 8.27497 9.44569 8.10558C9.10691 7.93619 8.7015 7.97274 8.39848 8.2L6.39844 9.7L7.59842 11.3L7.99847 11V17H9.99847V9.00001Z',
  d14: 'M12.6227 8C12.1251 8 11.7032 8.36593 11.6328 8.85858L11.1328 12.3586C11.086 12.6862 11.2043 13.0158 11.4488 13.2388C11.6934 13.4619 12.0324 13.5495 12.3544 13.4728C12.4671 13.446 12.5743 13.4199 12.6771 13.3948C13.2682 13.2508 13.7115 13.1429 14.1942 13.1429C14.707 13.1429 15.1227 13.5586 15.1227 14.0714C15.1227 14.5843 14.707 15 14.1942 15L14.1634 15C13.9594 15 13.7892 15.0001 13.6261 14.9891C13.4565 14.9776 13.3397 14.9565 13.26 14.9305C13.2227 14.9184 13.2 14.9073 13.1875 14.9C13.1759 14.8931 13.1716 14.8886 13.1716 14.8886C13.1716 14.8886 13.1674 14.8845 13.1612 14.8725C13.1543 14.8594 13.1416 14.8307 13.1298 14.7787L11.1794 15.2213C11.2727 15.6323 11.4564 15.9934 11.737 16.2822C12.0135 16.5668 12.3374 16.7336 12.6413 16.8324C13.1643 17.0026 13.748 17.0011 14.1185 17.0001L14.1942 17C15.8116 17 17.1227 15.6888 17.1227 14.0714C17.1227 12.454 15.8116 11.1429 14.1942 11.1429C13.8933 11.1429 13.5989 11.1713 13.3165 11.2147L13.49 10H16.5V8H12.6227Z',
};

export const IconGoBackward15SecStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-15-sec-stroke-rounded IconGoBackward15SecStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoBackward15SecDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-15-sec-duotone-rounded IconGoBackward15SecDuotoneRounded"
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
        d={d.d4} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoBackward15SecTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-15-sec-twotone-rounded IconGoBackward15SecTwotoneRounded"
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoBackward15SecSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-15-sec-solid-rounded IconGoBackward15SecSolidRounded"
    >
      <path 
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

export const IconGoBackward15SecBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-15-sec-bulk-rounded IconGoBackward15SecBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconGoBackward15SecStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-15-sec-stroke-sharp IconGoBackward15SecStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGoBackward15SecSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="go-backward-15-sec-solid-sharp IconGoBackward15SecSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const iconPackOfGoBackward15Sec: TheIconSelfPack = {
  name: 'GoBackward15Sec',
  StrokeRounded: IconGoBackward15SecStrokeRounded,
  DuotoneRounded: IconGoBackward15SecDuotoneRounded,
  TwotoneRounded: IconGoBackward15SecTwotoneRounded,
  SolidRounded: IconGoBackward15SecSolidRounded,
  BulkRounded: IconGoBackward15SecBulkRounded,
  StrokeSharp: IconGoBackward15SecStrokeSharp,
  SolidSharp: IconGoBackward15SecSolidSharp,
};