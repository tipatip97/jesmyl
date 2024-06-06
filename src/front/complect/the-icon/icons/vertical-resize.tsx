import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 10H20',
  d2: 'M4 14H20',
  d3: 'M12 10V6',
  d4: 'M11.9496 2.00017C12.9853 1.9696 15.4206 6.00844 14.9373 6.38885C14.3891 6.82022 12.7602 5.78886 12.2416 5.55656C11.9297 5.41686 11.7944 5.42069 11.4828 5.57954C10.0759 6.29675 9.37251 6.65535 9.06751 6.43595L9.06478 6.43397C8.58035 6.08047 10.9389 2.03001 11.9496 2.00017Z',
  d5: 'M12.0504 21.9998C11.0147 22.0304 8.57937 17.9916 9.06275 17.6112C9.61089 17.1798 11.2397 18.2111 11.7584 18.4434C12.0703 18.5831 12.2056 18.5793 12.5172 18.4205C13.9241 17.7033 14.6275 17.3446 14.9325 17.564L14.9352 17.566C15.4197 17.9195 13.0611 21.97 12.0504 21.9998Z',
  d6: 'M12 18V14',
  d7: 'M3 10C3 9.44772 3.44772 9 4 9H20C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H4C3.44772 11 3 10.5523 3 10Z',
  d8: 'M3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14Z',
  d9: 'M12 5C12.5523 5 13 5.44772 13 6V10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10V6C11 5.44772 11.4477 5 12 5Z',
  d10: 'M14.5446 16.7586C14.7782 16.7336 15.0895 16.753 15.3705 16.9551L15.3725 16.9566L15.3773 16.9601C15.6161 17.1343 15.7016 17.3772 15.7312 17.5371C15.7606 17.696 15.7505 17.8463 15.7347 17.9599C15.7026 18.1903 15.622 18.4412 15.5291 18.6777C15.339 19.1619 15.0345 19.7435 14.6915 20.2985C14.3483 20.8538 13.9464 21.4152 13.5495 21.8498C13.352 22.0661 13.1389 22.2695 12.9199 22.4258C12.7191 22.569 12.4223 22.7391 12.0725 22.7494C11.7137 22.76 11.4041 22.601 11.193 22.4623C10.9646 22.3122 10.7431 22.113 10.5386 21.9008C10.1276 21.4742 9.7116 20.9176 9.35623 20.3653C9.0009 19.8132 8.68477 19.232 8.4858 18.7454C8.38851 18.5075 8.3038 18.2554 8.26841 18.023C8.2509 17.908 8.23896 17.7581 8.26558 17.5993C8.2923 17.44 8.37154 17.2006 8.59892 17.0217C8.99228 16.7121 9.46977 16.7373 9.76558 16.7866C10.0918 16.841 10.4279 16.9643 10.7185 17.0895C11.0158 17.2177 11.8795 17.6568 12.117 17.7811C12.7863 17.4399 13.4407 17.1077 13.8658 16.9421C14.0827 16.8575 14.3157 16.783 14.5446 16.7586Z',
  d11: 'M14.5446 7.24143C14.7782 7.26638 15.0895 7.24701 15.3705 7.0449L15.3725 7.04342L15.3773 7.03993C15.6161 6.86566 15.7016 6.62284 15.7312 6.46291C15.7606 6.30397 15.7505 6.15374 15.7347 6.04006C15.7026 5.80969 15.622 5.55882 15.5291 5.32228C15.339 4.83805 15.0345 4.2565 14.6915 3.70152C14.3483 3.14617 13.9464 2.58479 13.5495 2.15017C13.352 1.93391 13.1389 1.73046 12.9199 1.57424C12.7191 1.43103 12.4223 1.26094 12.0725 1.25061C11.7137 1.24002 11.4041 1.39897 11.193 1.53767C10.9646 1.68775 10.7431 1.88701 10.5386 2.09924C10.1276 2.52583 9.7116 3.08241 9.35623 3.63465C9.0009 4.18685 8.68477 4.76802 8.4858 5.25456C8.38851 5.49248 8.3038 5.7446 8.26841 5.97699C8.2509 6.09196 8.23896 6.24189 8.26558 6.40067C8.2923 6.56 8.37154 6.79939 8.59892 6.97834C8.99228 7.2879 9.46977 7.26267 9.76558 7.21336C10.0918 7.15897 10.4279 7.03569 10.7185 6.91046C11.0158 6.7823 11.8795 6.34324 12.117 6.21885C12.7863 6.56005 13.4407 6.89231 13.8658 7.05792C14.0827 7.14245 14.3157 7.21698 14.5446 7.24143Z',
  d12: 'M12 13C12.5523 13 13 13.4477 13 14V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V14C11 13.4477 11.4477 13 12 13Z',
  d13: 'M15.3705 7.04479C15.0895 7.2469 14.7782 7.26627 14.5446 7.24132C14.3157 7.21687 14.0827 7.14234 13.8658 7.05782C13.6338 6.96745 13.3336 6.82748 13 6.66351V9.99989C13 10.5522 12.5523 10.9999 12 10.9999C11.4477 10.9999 11 10.5522 11 9.99989V6.77971C10.8858 6.83468 10.7871 6.88079 10.7185 6.91035C10.4279 7.03558 10.0918 7.15886 9.76558 7.21325C9.46977 7.26256 8.99228 7.28779 8.59892 6.97823C8.37154 6.79928 8.2923 6.55989 8.26558 6.40057C8.23896 6.24178 8.2509 6.09185 8.26841 5.97688C8.3038 5.74449 8.38851 5.49237 8.4858 5.25445C8.68477 4.76791 9.0009 4.18674 9.35623 3.63454C9.7116 3.0823 10.1276 2.52572 10.5386 2.09913C10.7431 1.8869 10.9646 1.68764 11.193 1.53756C11.4041 1.39886 11.7137 1.23991 12.0725 1.2505C12.4223 1.26083 12.7191 1.43092 12.9199 1.57413C13.1389 1.73035 13.352 1.9338 13.5495 2.15006C13.9464 2.58468 14.3483 3.14606 14.6915 3.70141C15.0345 4.25639 15.339 4.83795 15.5291 5.32218C15.622 5.55871 15.7026 5.80958 15.7347 6.03995C15.7505 6.15364 15.7606 6.30386 15.7312 6.4628C15.7016 6.62274 15.6161 6.86555 15.3773 7.03982L15.3725 7.04331L15.3705 7.04479Z',
  d14: 'M13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14V17.2202C10.8858 17.1652 10.7871 17.1191 10.7185 17.0895C10.4279 16.9643 10.0918 16.841 9.76558 16.7866C9.46977 16.7373 8.99228 16.7121 8.59892 17.0217C8.37154 17.2006 8.2923 17.44 8.26558 17.5993C8.23896 17.7581 8.2509 17.908 8.26841 18.023C8.3038 18.2554 8.38851 18.5075 8.4858 18.7454C8.68477 19.232 9.0009 19.8132 9.35623 20.3653C9.7116 20.9176 10.1276 21.4742 10.5386 21.9008C10.7431 22.113 10.9646 22.3122 11.193 22.4623C11.4041 22.601 11.7137 22.76 12.0725 22.7494C12.4223 22.7391 12.7191 22.569 12.9199 22.4258C13.1389 22.2695 13.352 22.0661 13.5495 21.8498C13.9464 21.4152 14.3483 20.8538 14.6915 20.2985C15.0345 19.7435 15.339 19.1619 15.5291 18.6777C15.622 18.4412 15.7026 18.1903 15.7347 17.9599C15.7505 17.8463 15.7606 17.696 15.7312 17.5371C15.7016 17.3772 15.6161 17.1343 15.3773 16.9601L15.3725 16.9566L15.3705 16.9551C15.0895 16.753 14.7782 16.7336 14.5446 16.7586C14.3157 16.783 14.0827 16.8575 13.8658 16.9421C13.6338 17.0324 13.3336 17.1724 13 17.3364V14Z',
  d15: 'M11.9941 18.0056L14.976 17.006C14.9849 17.003 14.9926 17.0127 14.9878 17.0207L11.9537 21.9923C11.9498 21.9987 11.9404 21.9986 11.9366 21.9921L9.0124 17.0184C9.00773 17.0104 9.01546 17.0009 9.02423 17.0039L11.9941 18.0056Z',
  d16: 'M12.0059 5.99108L9.02396 6.99067C9.01511 6.99364 9.00738 6.98393 9.01225 6.97596L11.9535 2.01163C11.9574 2.00517 11.9668 2.00526 11.9707 2.01179L14.9876 6.97823C14.9923 6.98621 14.9845 6.99572 14.9758 6.99276L12.0059 5.99108Z',
  d17: 'M20 11L4 11V9L20 9V11Z',
  d18: 'M20 15L4 15V13L20 13V15Z',
  d19: 'M13 6V10H11L11 6H13Z',
  d20: 'M11.9437 1.25002C12.2071 1.24805 12.4523 1.38446 12.5895 1.60936L15.6402 6.60936C15.8042 6.87816 15.7829 7.22077 15.5868 7.46712C15.3907 7.71347 15.0616 7.81109 14.7628 7.71151L12 6.79057L9.23718 7.71151C8.9404 7.81044 8.61339 7.71477 8.41674 7.47148C8.22008 7.2282 8.19508 6.88841 8.35401 6.61896L11.3033 1.61896C11.4371 1.39204 11.6802 1.25199 11.9437 1.25002Z',
  d21: 'M15.5868 16.5329C15.7829 16.7793 15.8042 17.1219 15.6402 17.3907L12.5895 22.3907C12.4523 22.6156 12.2071 22.752 11.9437 22.75C11.6802 22.7481 11.4371 22.608 11.3033 22.3811L8.35401 17.3811C8.19508 17.1116 8.22008 16.7718 8.41674 16.5286C8.61339 16.2853 8.9404 16.1896 9.23718 16.2885L12 17.2095L14.7628 16.2885C15.0616 16.189 15.3907 16.2866 15.5868 16.5329Z',
  d22: 'M13 14V18H11L11 14H13Z',
};

export const IconVerticalResizeStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vertical-resize-stroke-rounded IconVerticalResizeStrokeRounded"
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconVerticalResizeDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vertical-resize-duotone-rounded IconVerticalResizeDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconVerticalResizeTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vertical-resize-twotone-rounded IconVerticalResizeTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVerticalResizeSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vertical-resize-solid-rounded IconVerticalResizeSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVerticalResizeBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vertical-resize-bulk-rounded IconVerticalResizeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVerticalResizeStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vertical-resize-stroke-sharp IconVerticalResizeStrokeSharp"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconVerticalResizeSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vertical-resize-solid-sharp IconVerticalResizeSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfVerticalResize: TheIconSelfPack = {
  name: 'VerticalResize',
  StrokeRounded: IconVerticalResizeStrokeRounded,
  DuotoneRounded: IconVerticalResizeDuotoneRounded,
  TwotoneRounded: IconVerticalResizeTwotoneRounded,
  SolidRounded: IconVerticalResizeSolidRounded,
  BulkRounded: IconVerticalResizeBulkRounded,
  StrokeSharp: IconVerticalResizeStrokeSharp,
  SolidSharp: IconVerticalResizeSolidSharp,
};