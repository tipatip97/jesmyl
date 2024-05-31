import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 5L13.1039 3.45459C13.5149 2.87911 13.7205 2.59137 13.5907 2.32411C13.4609 2.05684 13.1311 2.04153 12.4714 2.01092C12.3152 2.00367 12.158 2 12 2C6.4772 2 2 6.47715 2 12C2 17.5228 6.4772 22 12 22C17.5229 22 22 17.5228 22 12C22 8.72836 20.4289 5.82368 18 3.99927',
  d2: 'M8 10.9997C8.528 10.5797 9.008 9.8871 9.308 10.0157C9.608 10.1442 9.512 10.5677 9.512 11.2277C9.512 11.8877 9.512 14.6804 9.512 16.0037',
  d3: 'M16 10H13.3595C13.1212 10 12.916 10.1682 12.8692 10.4019L12.504 12.504C13.14 12.24 13.4607 12.1429 14.1766 12.1429C15.2126 12.1429 16.104 12.78 16.002 14.1C16.02 15.66 14.76 16.02 14.1766 16C13.5931 15.98 12.66 16.2 12.5 15',
  d4: 'M12 5L13.1039 3.45459C13.5149 2.87911 13.7205 2.59137 13.5907 2.32411C13.4609 2.05684 13.1311 2.04153 12.4714 2.01092C12.3152 2.00367 12.158 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 8.72836 20.4289 5.82368 18 3.99927',
  d5: 'M12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927C8.64715 2.01092 10.8689 2.04153 11.5286 2.01092C11.6848 2.00367 11.842 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z',
  d6: 'M7.99512 10.9938C8.52312 10.5738 9.00312 9.88122 9.30312 10.0098C9.60312 10.1383 9.50712 10.5618 9.50712 11.2218C9.50712 11.8818 9.50712 14.6745 9.50712 15.9978',
  d7: 'M15.9951 9.99316H13.3546C13.1163 9.99316 12.9111 10.1614 12.8643 10.3951L12.4991 12.4972C13.1351 12.2332 13.4558 12.1361 14.1717 12.1361C15.2077 12.1361 16.0991 12.7732 15.9971 14.0932C16.0151 15.6532 14.7551 16.0132 14.1717 15.9932C13.5882 15.9732 12.6551 16.1932 12.4951 14.9932',
  d8: 'M7.99512 10.9929C8.52312 10.5729 9.00312 9.88026 9.30312 10.0089C9.60312 10.1374 9.50712 10.5609 9.50712 11.2209C9.50712 11.8809 9.50712 14.6736 9.50712 15.9969M15.9951 9.99316H13.3546C13.1163 9.99316 12.9111 10.1614 12.8643 10.3951L12.4991 12.4972C13.1351 12.2332 13.4558 12.1361 14.1717 12.1361C15.2077 12.1361 16.0991 12.7732 15.9971 14.0932C16.0151 15.6532 14.7551 16.0132 14.1717 15.9932C13.5882 15.9732 12.6551 16.1932 12.4951 14.9932',
  d9: 'M3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 9.12308 19.4152 6.56881 17.2767 4.9625C16.8452 4.63835 16.7581 4.02573 17.0822 3.59417C17.4064 3.16262 18.019 3.07556 18.4506 3.39971C21.0594 5.3593 22.75 8.48236 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.1696 1.25 12.3925 1.25642 12.5602 1.26421C12.833 1.27664 13.1537 1.29127 13.4179 1.35116C13.7547 1.42751 14.1919 1.61931 14.4336 2.1171C14.6848 2.63443 14.5396 3.11204 14.3931 3.41217C14.2717 3.66078 14.0781 3.93145 13.9062 4.17184L12.7952 5.72712C12.4977 6.14365 11.9334 6.25664 11.5013 5.9996C11.4797 5.98676 11.4689 5.98034 11.4443 5.96122C11.4197 5.94211 11.4043 5.92667 11.3734 5.89581L9.59391 4.11627C9.3756 3.89797 9.26645 3.78881 9.11648 3.75961C8.96651 3.73042 8.83463 3.7863 8.57088 3.89808C5.417 5.23461 3.20455 8.35893 3.20455 12Z',
  d10: 'M8.40044 8.77867C9.33292 8.04257 10.5001 8.82268 10.5001 9.81619L10.5001 15.9999C10.5001 16.5521 10.0523 16.9999 9.50005 16.9999C8.94777 16.9999 8.50005 16.5521 8.50005 15.9999L8.50005 11.3661C8.10306 11.5958 7.58628 11.5279 7.2633 11.1761C6.88984 10.7692 6.91692 10.1366 7.3238 9.76314L8.34384 8.82687C8.36211 8.8101 8.38099 8.79403 8.40044 8.77867ZM11.8801 9.74128C12.0057 9.02352 12.6289 8.49985 13.3576 8.49985H16C16.5523 8.49985 17 8.94757 17 9.49985C17 10.0521 16.5523 10.4999 16 10.4999H13.7923L13.7005 11.1496C14.127 11.1145 14.5586 11.1446 14.9803 11.241C16.162 11.5111 17 12.5623 17 13.7744V14.2499C17 15.7686 15.7688 16.9999 14.25 16.9999H13.5C12.3954 16.9999 11.5 16.1044 11.5 14.9999C11.5 14.4476 11.9477 13.9999 12.5 13.9999C13.0523 13.9999 13.5 14.4476 13.5 14.9999H14.25C14.6642 14.9999 15 14.6641 15 14.2499V13.7744C15 13.4951 14.8069 13.2529 14.5347 13.1907C14.1112 13.0939 13.6686 13.1248 13.2627 13.2794L12.856 13.4343C12.5254 13.5603 12.1528 13.5022 11.8763 13.2815C11.5997 13.0608 11.4604 12.7104 11.5098 12.3601L11.8749 9.77388C11.8764 9.76299 11.8782 9.75212 11.8801 9.74128Z',
  d11: 'M12 5L14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 8.72836 20.4289 5.82368 18 3.99927',
  d12: 'M9.48967 16.1118V9.92929C9.48967 9.84531 9.39242 9.79874 9.32699 9.85137L7.62891 11.2489M16.0083 9.85377H13.095C13.0477 9.85377 13.0068 9.88702 12.9971 9.9334L12.468 12.2355C12.4471 12.3265 12.5557 12.4002 12.6373 12.3548C13.0022 12.1514 13.5846 11.9515 14.2994 11.9944C14.9958 11.9944 15.4557 12.3922 15.709 12.7035C15.8919 12.9284 15.9662 13.215 15.9993 13.503L16.0251 13.7271C16.0663 14.0845 16.0046 14.4462 15.8473 14.7698L15.8326 14.8002C15.5222 15.4389 14.9043 15.8723 14.1981 15.9466C13.3139 15.9466 12.8175 15.6328 12.5335 14.9915L12.4996 14.877',
  d13: 'M12.1937 3.20663C12.1293 3.20524 12.0647 3.20455 12 3.20455C7.1424 3.20455 3.20455 7.1424 3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 9.12308 19.4152 6.56881 17.2767 4.9625L18.4506 3.39971C21.0594 5.3593 22.75 8.48236 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.735 1.25 13.4538 1.32391 14.149 1.46502C14.4735 1.53089 14.7425 1.7566 14.8639 2.06469C14.9852 2.37278 14.9422 2.72135 14.7498 2.9908L12.7952 5.72712L11.2048 4.59106L12.1937 3.20663Z',
  d14: 'M9.99847 9.00001C9.99847 8.62124 9.78447 8.27497 9.44569 8.10558C9.10691 7.93619 8.7015 7.97274 8.39848 8.2L6.39844 9.7L7.59842 11.3L7.99847 11V17H9.99847V9.00001Z',
  d15: 'M12.6227 8C12.1251 8 11.7032 8.36593 11.6328 8.85858L11.1328 12.3586C11.086 12.6862 11.2043 13.0158 11.4488 13.2388C11.6934 13.4619 12.0324 13.5495 12.3544 13.4728C12.4671 13.446 12.5743 13.4199 12.6771 13.3948C13.2682 13.2508 13.7115 13.1429 14.1942 13.1429C14.707 13.1429 15.1227 13.5586 15.1227 14.0714C15.1227 14.5843 14.707 15 14.1942 15L14.1634 15C13.9594 15 13.7892 15.0001 13.6261 14.9891C13.4565 14.9776 13.3397 14.9565 13.26 14.9305C13.2227 14.9184 13.2 14.9073 13.1875 14.9C13.1759 14.8931 13.1716 14.8886 13.1716 14.8886C13.1716 14.8886 13.1674 14.8845 13.1612 14.8725C13.1543 14.8594 13.1416 14.8307 13.1298 14.7787L11.1794 15.2213C11.2727 15.6323 11.4564 15.9934 11.737 16.2822C12.0135 16.5668 12.3374 16.7336 12.6413 16.8324C13.1643 17.0026 13.748 17.0011 14.1185 17.0001L14.1942 17C15.8116 17 17.1227 15.6888 17.1227 14.0714C17.1227 12.454 15.8116 11.1429 14.1942 11.1429C13.8933 11.1429 13.5989 11.1713 13.3165 11.2147L13.49 10H16.5V8H12.6227Z',
} as const;

export const IconGoForward15SecStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-15-sec-stroke-rounded IconGoForward15SecStrokeRounded"
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

export const IconGoForward15SecDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-15-sec-duotone-rounded IconGoForward15SecDuotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoForward15SecTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-15-sec-twotone-rounded IconGoForward15SecTwotoneRounded"
    >
      <path 
        d={d.d4} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGoForward15SecSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-15-sec-solid-rounded IconGoForward15SecSolidRounded"
    >
      <path 
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

export const IconGoForward15SecBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-15-sec-bulk-rounded IconGoForward15SecBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconGoForward15SecStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-15-sec-stroke-sharp IconGoForward15SecStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconGoForward15SecSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="go-forward-15-sec-solid-sharp IconGoForward15SecSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfGoForward15Sec: TheIconSelfPack = {
  name: 'GoForward15Sec',
  StrokeRounded: IconGoForward15SecStrokeRounded,
  DuotoneRounded: IconGoForward15SecDuotoneRounded,
  TwotoneRounded: IconGoForward15SecTwotoneRounded,
  SolidRounded: IconGoForward15SecSolidRounded,
  BulkRounded: IconGoForward15SecBulkRounded,
  StrokeSharp: IconGoForward15SecStrokeSharp,
  SolidSharp: IconGoForward15SecSolidSharp,
};