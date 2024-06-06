import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 5H13.6138C12.3798 5 11.965 5.1398 11.659 6.36394L9.33913 15.6416C8.78948 17.8398 8.51466 18.9389 7.78481 18.9976C7.05496 19.0564 6.55032 18.02 5.54104 15.9472L4.97014 14.7748C4.53541 13.882 4.31804 13.4356 3.87855 13.3147C3.21709 13.1327 2.5084 13.6703 2 14',
  d2: 'M14.4004 11.0035C15.1804 10.9195 16.1337 11.038 16.4404 11.6395C17.0523 12.8395 18.0604 15.3595 18.4204 16.1395C18.6004 16.4395 18.7804 16.7995 19.5004 16.9795C19.9804 17.0395 20.6039 16.995 20.6039 16.995',
  d3: 'M21.0005 10.998C19.5005 10.998 18.5405 12.66 17.7005 13.68C16.6205 15.24 15.4205 17.1 13.9805 16.98',
  d4: 'M14.4102 11.0084C15.1902 10.9244 16.1435 11.0429 16.4502 11.6444C17.0621 12.8444 18.0702 15.3644 18.4302 16.1444C18.6102 16.4444 18.7902 16.8044 19.5102 16.9844C19.9902 17.0444 20.6137 16.9999 20.6137 16.9999',
  d5: 'M21.0102 11.0029C19.5102 11.0029 18.5502 12.6649 17.7102 13.6849C16.6302 15.2449 15.4302 17.1049 13.9902 16.9849',
  d6: 'M14.4101 11.0084C15.1901 10.9244 16.1434 11.0429 16.4501 11.6444C17.062 12.8444 18.0701 15.3644 18.4301 16.1444C18.6101 16.4444 18.7901 16.8044 19.5101 16.9844C19.9901 17.0444 20.6136 16.9999 20.6136 16.9999M21.0102 11.0029C19.5102 11.0029 18.5502 12.6649 17.7102 13.6849C16.6302 15.2449 15.4302 17.1049 13.9902 16.9849',
  d7: 'M12.8286 6.06537C12.8044 6.0953 12.726 6.2194 12.6292 6.60652L10.2894 15.964L10.2894 15.964C10.0317 16.9949 9.8112 17.8771 9.55473 18.5017C9.3091 19.1 8.84915 19.9152 7.86514 19.9944C6.90399 20.0718 6.30228 19.3714 5.93803 18.8298C5.55523 18.2606 5.15176 17.4319 4.67686 16.4565L4.07118 15.2126C3.84002 14.7378 3.71332 14.4836 3.60185 14.3213C3.59036 14.3045 3.58051 14.291 3.57227 14.2802C3.52794 14.2857 3.44518 14.3053 3.30934 14.3695C3.12063 14.4587 2.94899 14.5722 2.73894 14.7111L2.73893 14.7111L2.73891 14.7112C2.67774 14.7516 2.6133 14.7942 2.54424 14.839C2.08087 15.1395 1.46162 15.0075 1.16111 14.5441C0.860602 14.0808 0.992625 13.4615 1.45599 13.161C1.49096 13.1383 1.53164 13.1113 1.57709 13.081L1.57718 13.081C1.7946 12.9363 2.12127 12.7189 2.45465 12.5614C2.86383 12.368 3.47373 12.1661 4.14393 12.3505C4.67439 12.4964 5.01216 12.8419 5.25065 13.1893C5.45723 13.4901 5.64876 13.8837 5.84335 14.2836L5.86934 14.337L6.44023 15.5094C6.95948 16.5758 7.30264 17.275 7.59764 17.7137C7.62443 17.7535 7.64911 17.7886 7.67171 17.8194C7.68216 17.7958 7.69313 17.77 7.7046 17.7421C7.89882 17.2691 8.08581 16.532 8.36912 15.399L10.6889 6.12137C10.8539 5.46155 11.1123 4.78497 11.7527 4.37858C12.3305 4.01195 13.0383 4 13.6139 4H22.0001C22.5524 4 23.0001 4.44772 23.0001 5C23.0001 5.55228 22.5524 6 22.0001 6H13.6139C13.3138 6 13.1181 6.00931 12.9777 6.03014C12.8852 6.04387 12.8428 6.05919 12.8286 6.06537Z',
  d8: 'M15.4109 12.0491C15.3328 12.0178 15.2132 12.0004 14.4118 12.0004C13.8595 12.0004 13.4118 11.5526 13.4118 11.0004C13.4118 10.4481 13.8595 10.0004 14.4118 10.0004L14.5458 10.0002C15.1224 9.99902 15.6692 9.99792 16.1552 10.1928C16.43 10.303 16.6857 10.4592 16.9081 10.6577C17.3132 11.0193 17.5263 11.5204 17.7296 11.9982L17.7301 11.9994C17.951 11.7253 18.1809 11.4627 18.4199 11.2266C19.067 10.587 19.9189 10.0004 21 10.0004C21.5523 10.0004 22 10.4481 22 11.0004C22 11.5526 21.5523 12.0004 21 12.0004C20.6883 12.0004 20.3169 12.1637 19.8257 12.6491C19.4328 13.0374 19.0519 13.5415 18.6395 14.1202L19.0591 15.0985C19.1936 15.412 19.2713 15.5912 19.3404 15.7212C19.3716 15.7798 19.3926 15.8119 19.4054 15.8293C19.4165 15.8445 19.4219 15.8493 19.4238 15.851C19.4668 15.8894 19.5221 15.9247 19.5891 15.9516C19.6672 15.9829 19.7868 16.0004 20.5882 16.0004C21.1405 16.0004 21.5882 16.4481 21.5882 17.0004C21.5882 17.5526 21.1405 18.0004 20.5882 18.0004L20.4542 18.0005C19.8776 18.0017 19.3308 18.0028 18.8448 17.8079C18.57 17.6977 18.3143 17.5415 18.0919 17.343C17.6868 16.9814 17.4737 16.4803 17.2704 16.0025L17.2699 16.0013C17.049 16.2754 16.8191 16.538 16.5801 16.7741C15.933 17.4137 15.0811 18.0004 14 18.0004C13.4477 18.0004 13 17.5526 13 17.0004C13 16.4481 13.4477 16.0004 14 16.0004C14.3117 16.0004 14.6831 15.837 15.1743 15.3516C15.5672 14.9633 15.9481 14.4592 16.3605 13.8805L15.9409 12.9023C15.8064 12.5887 15.7287 12.4095 15.6596 12.2795C15.6284 12.2209 15.6074 12.1888 15.5946 12.1714C15.5835 12.1562 15.5781 12.1514 15.5762 12.1497C15.5332 12.1114 15.4779 12.076 15.4109 12.0491Z',
  d9: 'M22 5.00016L12 5L7.5 19L4 13L2 15.0002',
  d10: 'M20.5681 17.0088H19.5503C18.3594 16.7369 18.277 15.6994 17.8893 14.9545C17.7619 14.6356 17.6298 14.3117 17.5015 14.0012M17.5015 14.0012C17.109 13.0513 16.7514 12.2274 16.6684 12.0596C16.3044 11.3245 16.1663 11.0088 14.3956 11.0088M17.5015 14.0012C17.746 13.6517 17.9894 13.3021 18.2353 12.9713C19.0851 11.8869 19.9323 11.0088 21 11.0088M17.5015 14.0012C16.4492 15.5056 15.3768 17.0088 14 17.0088',
  d11: 'M11.2981 4.69399C11.431 4.28043 11.8157 3.99999 12.2501 4L22.2501 4.00016L22.2501 6.00016L12.9791 6.00001L8.70213 19.306C8.58135 19.6818 8.25082 19.9514 7.85843 19.9941C7.46604 20.0369 7.08521 19.8448 6.88632 19.5039L4.24701 14.6244L3.16427 15.7072L1.75 14.2931L3.75 12.2929C3.96927 12.0736 4.27787 11.9685 4.58542 12.0083C4.89297 12.048 5.16466 12.2283 5.32091 12.4961L7.48417 16.5595L11.2981 4.69399Z',
  d12: 'M15.6609 12.0491C15.5828 12.0178 15.4632 12.0004 14.6618 12.0004V10.0004L14.7958 10.0002C15.3724 9.99902 15.9192 9.99792 16.4052 10.1928C16.68 10.303 16.9357 10.4592 17.1581 10.6577C17.5632 11.0193 17.7763 11.5204 17.9796 11.9982L17.9801 11.9994C18.201 11.7253 18.4309 11.4627 18.6699 11.2266C19.317 10.587 20.1689 10.0004 21.25 10.0004V12.0004C20.9383 12.0004 20.5669 12.1637 20.0757 12.6491C19.6828 13.0374 19.3019 13.5415 18.8895 14.1202L19.3091 15.0985C19.4436 15.412 19.5213 15.5912 19.5904 15.7212C19.6216 15.7798 19.6426 15.8119 19.6554 15.8293C19.6665 15.8445 19.6719 15.8493 19.6738 15.851C19.7168 15.8894 19.7721 15.9247 19.8391 15.9516C19.9172 15.9829 20.0368 16.0004 20.8382 16.0004V18.0004L20.7042 18.0005C20.1276 18.0017 19.5808 18.0028 19.0948 17.8079C18.82 17.6977 18.5643 17.5415 18.3419 17.343C17.9368 16.9814 17.7237 16.4803 17.5204 16.0025L17.5199 16.0013C17.299 16.2754 17.0691 16.538 16.8301 16.7741C16.183 17.4137 15.3311 18.0004 14.25 18.0004V16.0004C14.5617 16.0004 14.9331 15.837 15.4243 15.3516C15.8172 14.9633 16.1981 14.4592 16.6105 13.8805L16.1909 12.9023C16.0564 12.5887 15.9787 12.4095 15.9096 12.2795C15.8784 12.2209 15.8574 12.1888 15.8446 12.1714C15.8335 12.1562 15.8281 12.1514 15.8262 12.1497C15.7832 12.1114 15.7279 12.076 15.6609 12.0491Z',
};

export const IconRoot01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="root-01-stroke-rounded IconRoot01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconRoot01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="root-01-duotone-rounded IconRoot01DuotoneRounded"
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

export const IconRoot01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="root-01-twotone-rounded IconRoot01TwotoneRounded"
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
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRoot01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="root-01-solid-rounded IconRoot01SolidRounded"
    >
      <path 
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

export const IconRoot01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="root-01-bulk-rounded IconRoot01BulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRoot01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="root-01-stroke-sharp IconRoot01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconRoot01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="root-01-solid-sharp IconRoot01SolidSharp"
    >
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

export const iconPackOfRoot01: TheIconSelfPack = {
  name: 'Root01',
  StrokeRounded: IconRoot01StrokeRounded,
  DuotoneRounded: IconRoot01DuotoneRounded,
  TwotoneRounded: IconRoot01TwotoneRounded,
  SolidRounded: IconRoot01SolidRounded,
  BulkRounded: IconRoot01BulkRounded,
  StrokeSharp: IconRoot01StrokeSharp,
  SolidSharp: IconRoot01SolidSharp,
};