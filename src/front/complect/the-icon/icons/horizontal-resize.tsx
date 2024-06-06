import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10 20L10 4',
  d2: 'M14 20L14 4',
  d3: 'M10 12L6 12',
  d4: 'M2.00017 12.0504C1.9696 11.0147 6.00844 8.57937 6.38885 9.06275C6.82022 9.61089 5.78886 11.2397 5.55656 11.7584C5.41686 12.0703 5.42069 12.2056 5.57954 12.5172C6.29675 13.9241 6.65535 14.6275 6.43595 14.9325L6.43397 14.9352C6.08047 15.4197 2.03001 13.0611 2.00017 12.0504Z',
  d5: 'M21.9998 11.9496C22.0304 12.9853 17.9916 15.4206 17.6112 14.9373C17.1798 14.3891 18.2111 12.7602 18.4434 12.2416C18.5831 11.9297 18.5793 11.7944 18.4205 11.4828C17.7033 10.0759 17.3446 9.37251 17.564 9.06751L17.566 9.06478C17.9195 8.58035 21.97 10.9389 21.9998 11.9496Z',
  d6: 'M18 12L14 12',
  d7: 'M21.9998 11.9496C22.0304 12.9853 17.9916 15.4206 17.6112 14.9372C17.1798 14.3891 18.2111 12.7602 18.4434 12.2416C18.5831 11.9297 18.5793 11.7944 18.4205 11.4828C17.7033 10.0759 17.3446 9.37251 17.564 9.06751L17.566 9.06478C17.9195 8.58035 21.97 10.9389 21.9998 11.9496Z',
  d8: 'M10 21C9.44772 21 9 20.5523 9 20L9 4C9 3.44772 9.44771 3 10 3C10.5523 3 11 3.44772 11 4L11 20C11 20.5523 10.5523 21 10 21Z',
  d9: 'M14 21C13.4477 21 13 20.5523 13 20L13 4C13 3.44772 13.4477 3 14 3C14.5523 3 15 3.44772 15 4L15 20C15 20.5523 14.5523 21 14 21Z',
  d10: 'M5 12C5 11.4477 5.44772 11 6 11L10 11C10.5523 11 11 11.4477 11 12C11 12.5523 10.5523 13 10 13L6 13C5.44772 13 5 12.5523 5 12Z',
  d11: 'M16.7586 9.45539C16.7336 9.22176 16.753 8.9105 16.9551 8.62955L16.9566 8.62749L16.9601 8.62269C17.1343 8.38387 17.3772 8.2984 17.5371 8.26879C17.696 8.23936 17.8463 8.24955 17.9599 8.26535C18.1903 8.29736 18.4412 8.37805 18.6777 8.47091C19.1619 8.66102 19.7435 8.96553 20.2985 9.30851C20.8538 9.65172 21.4152 10.0536 21.8498 10.4505C22.0661 10.648 22.2695 10.8611 22.4258 11.0801C22.569 11.2809 22.7391 11.5777 22.7494 11.9275C22.76 12.2863 22.601 12.5959 22.4623 12.807C22.3122 13.0354 22.113 13.2569 21.9008 13.4614C21.4742 13.8724 20.9176 14.2884 20.3653 14.6438C19.8132 14.9991 19.232 15.3152 18.7454 15.5142C18.5075 15.6115 18.2554 15.6962 18.023 15.7316C17.908 15.7491 17.7581 15.761 17.5993 15.7344C17.44 15.7077 17.2006 15.6285 17.0217 15.4011C16.7121 15.0077 16.7373 14.5302 16.7866 14.2344C16.841 13.9082 16.9643 13.5721 17.0895 13.2815C17.2177 12.9842 17.6568 12.1205 17.7811 11.883C17.4399 11.2137 17.1077 10.5593 16.9421 10.1342C16.8575 9.91726 16.783 9.68429 16.7586 9.45539Z',
  d12: 'M7.24142 9.45539C7.26638 9.22176 7.24701 8.9105 7.0449 8.62955L7.04342 8.62749L7.03993 8.62269C6.86566 8.38387 6.62284 8.2984 6.46291 8.26879C6.30397 8.23936 6.15374 8.24955 6.04006 8.26535C5.80969 8.29736 5.55882 8.37805 5.32228 8.47091C4.83805 8.66102 4.2565 8.96553 3.70152 9.30851C3.14617 9.65172 2.58479 10.0536 2.15017 10.4505C1.93391 10.648 1.73046 10.8611 1.57424 11.0801C1.43103 11.2809 1.26094 11.5777 1.25061 11.9275C1.24002 12.2863 1.39897 12.5959 1.53767 12.807C1.68775 13.0354 1.88701 13.2569 2.09924 13.4614C2.52583 13.8724 3.08241 14.2884 3.63465 14.6438C4.18685 14.9991 4.76802 15.3152 5.25456 15.5142C5.49248 15.6115 5.7446 15.6962 5.97699 15.7316C6.09196 15.7491 6.24189 15.761 6.40067 15.7344C6.56 15.7077 6.79939 15.6285 6.97834 15.4011C7.2879 15.0077 7.26267 14.5302 7.21336 14.2344C7.15897 13.9082 7.03569 13.5721 6.91046 13.2815C6.7823 12.9842 6.34324 12.1205 6.21885 11.883C6.56005 11.2137 6.89231 10.5593 7.05792 10.1342C7.14245 9.91726 7.21698 9.68429 7.24142 9.45539Z',
  d13: 'M13 12C13 11.4477 13.4477 11 14 11L18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13L14 13C13.4477 13 13 12.5523 13 12Z',
  d14: 'M7.04479 8.62953C7.2469 8.91049 7.26627 9.22175 7.24132 9.45538C7.21687 9.68427 7.14234 9.91725 7.05782 10.1342C6.96745 10.3662 6.82748 10.6664 6.66351 11L9.99989 11C10.5522 11 10.9999 11.4477 10.9999 12C10.9999 12.5523 10.5522 13 9.99989 13H6.77971C6.83468 13.1142 6.88079 13.2129 6.91035 13.2815C7.03558 13.5721 7.15886 13.9082 7.21325 14.2344C7.26256 14.5302 7.28779 15.0077 6.97823 15.4011C6.79928 15.6285 6.55989 15.7077 6.40057 15.7344C6.24178 15.761 6.09185 15.7491 5.97688 15.7316C5.74449 15.6962 5.49237 15.6115 5.25445 15.5142C4.76791 15.3152 4.18674 14.9991 3.63454 14.6438C3.0823 14.2884 2.52572 13.8724 2.09913 13.4614C1.8869 13.2569 1.68764 13.0354 1.53756 12.807C1.39886 12.5959 1.23991 12.2862 1.2505 11.9275C1.26083 11.5777 1.43092 11.2809 1.57413 11.0801C1.73035 10.861 1.9338 10.648 2.15006 10.4505C2.58468 10.0536 3.14606 9.65171 3.70141 9.3085C4.25639 8.96552 4.83795 8.661 5.32218 8.4709C5.55871 8.37803 5.80958 8.29735 6.03995 8.26533C6.15364 8.24953 6.30386 8.23935 6.4628 8.26877C6.62274 8.29839 6.86555 8.38386 7.03982 8.62268L7.04331 8.62748L7.04479 8.62953Z',
  d15: 'M16.9551 8.62953C16.753 8.91049 16.7336 9.22175 16.7586 9.45538C16.783 9.68427 16.8575 9.91725 16.9421 10.1342C17.0324 10.3662 17.1724 10.6664 17.3364 11L14 11C13.4477 11 13 11.4477 13 12C13 12.5523 13.4477 13 14 13H17.2202C17.1652 13.1142 17.1191 13.2129 17.0895 13.2815C16.9643 13.5721 16.841 13.9082 16.7866 14.2344C16.7373 14.5302 16.7121 15.0077 17.0217 15.4011C17.2006 15.6285 17.44 15.7077 17.5993 15.7344C17.7581 15.761 17.908 15.7491 18.023 15.7316C18.2554 15.6962 18.5075 15.6115 18.7454 15.5142C19.232 15.3152 19.8132 14.9991 20.3653 14.6438C20.9176 14.2884 21.4742 13.8724 21.9008 13.4614C22.113 13.2569 22.3122 13.0354 22.4623 12.807C22.601 12.5959 22.76 12.2862 22.7494 11.9275C22.7391 11.5777 22.569 11.2809 22.4258 11.0801C22.2695 10.861 22.0661 10.648 21.8498 10.4505C21.4152 10.0536 20.8538 9.65171 20.2985 9.3085C19.7435 8.96552 19.1619 8.661 18.6777 8.4709C18.4412 8.37803 18.1903 8.29735 17.9599 8.26533C17.8463 8.24953 17.696 8.23935 17.5371 8.26877C17.3772 8.29839 17.1343 8.38386 16.9601 8.62268L16.9566 8.62748L16.9551 8.62953Z',
  d16: 'M10 20V4',
  d17: 'M14 20V4',
  d18: 'M10 12H6',
  d19: 'M18 12H14',
  d20: 'M18.0099 12.0076L17.0015 9.02203C16.9985 9.01318 17.0082 9.00542 17.0162 9.0103L21.9964 12.053C22.0029 12.0569 22.0028 12.0663 21.9963 12.0701L17.0275 14.9834C17.0195 14.9881 17.01 14.9803 17.013 14.9716L18.0099 12.0076Z',
  d21: 'M6.00197 12.0075L7.00074 9.02591C7.0037 9.01706 6.994 9.00934 6.98604 9.0142L2.00576 12.0569C1.99931 12.0609 1.9994 12.0703 2.00593 12.0741L6.9883 14.989C6.99628 14.9936 7.00578 14.9859 7.00283 14.9771L6.00197 12.0075Z',
  d22: 'M11 4L11 20H9L9 4H11Z',
  d23: 'M15 4L15 20H13L13 4H15Z',
  d24: 'M6 11L10 11V13H6V11Z',
  d25: 'M7.46712 8.41323C7.71347 8.60935 7.81109 8.93845 7.71151 9.23717L6.79057 12L7.71151 14.7628C7.81044 15.0596 7.71477 15.3866 7.47149 15.5833C7.2282 15.7799 6.88841 15.8049 6.61896 15.646L1.61896 12.6967C1.39204 12.5629 1.25199 12.3198 1.25002 12.0563C1.24805 11.7929 1.38446 11.5477 1.60936 11.4105L6.60936 8.35977C6.87816 8.19576 7.22077 8.21712 7.46712 8.41323Z',
  d26: 'M16.5329 8.41323C16.7793 8.21712 17.1219 8.19576 17.3907 8.35977L22.3907 11.4105C22.6156 11.5477 22.752 11.7929 22.75 12.0563C22.7481 12.3198 22.608 12.5629 22.3811 12.6967L17.3811 15.646C17.1116 15.8049 16.7718 15.7799 16.5286 15.5833C16.2853 15.3866 16.1896 15.0596 16.2885 14.7628L17.2095 12L16.2885 9.23717C16.189 8.93845 16.2866 8.60935 16.5329 8.41323Z',
  d27: 'M14 11L18 11V13H14V11Z',
} as const;

export const IconHorizontalResizeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="horizontal-resize-stroke-rounded IconHorizontalResizeStrokeRounded"
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

export const IconHorizontalResizeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="horizontal-resize-duotone-rounded IconHorizontalResizeDuotoneRounded"
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
        d={d.d7} 
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

export const IconHorizontalResizeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="horizontal-resize-twotone-rounded IconHorizontalResizeTwotoneRounded"
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

export const IconHorizontalResizeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="horizontal-resize-solid-rounded IconHorizontalResizeSolidRounded"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHorizontalResizeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="horizontal-resize-bulk-rounded IconHorizontalResizeBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
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
    </TheIconWrapper>
  );
};

export const IconHorizontalResizeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="horizontal-resize-stroke-sharp IconHorizontalResizeStrokeSharp"
    >
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
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHorizontalResizeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="horizontal-resize-solid-sharp IconHorizontalResizeSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHorizontalResize: TheIconSelfPack = {
  name: 'HorizontalResize',
  StrokeRounded: IconHorizontalResizeStrokeRounded,
  DuotoneRounded: IconHorizontalResizeDuotoneRounded,
  TwotoneRounded: IconHorizontalResizeTwotoneRounded,
  SolidRounded: IconHorizontalResizeSolidRounded,
  BulkRounded: IconHorizontalResizeBulkRounded,
  StrokeSharp: IconHorizontalResizeStrokeSharp,
  SolidSharp: IconHorizontalResizeSolidSharp,
};