import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 14C2 10.4934 2 8.74003 2.90796 7.55992C3.07418 7.34388 3.25989 7.14579 3.46243 6.96849C4.56878 6 6.21252 6 9.5 6H14.5C17.7875 6 19.4312 6 20.5376 6.96849C20.7401 7.14579 20.9258 7.34388 21.092 7.55992C22 8.74003 22 10.4934 22 14C22 17.5066 22 19.26 21.092 20.4401C20.9258 20.6561 20.7401 20.8542 20.5376 21.0315C19.4312 22 17.7875 22 14.5 22H9.5C6.21252 22 4.56878 22 3.46243 21.0315C3.25989 20.8542 3.07418 20.6561 2.90796 20.4401C2 19.26 2 17.5066 2 14Z',
  d2: 'M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6',
  d3: 'M12 11C10.8954 11 10 11.6716 10 12.5C10 13.3284 10.8954 14 12 14C13.1046 14 14 14.6716 14 15.5C14 16.3284 13.1046 17 12 17M12 11C12.8708 11 13.6116 11.4174 13.8862 12M12 11V10M12 17C11.1292 17 10.3884 16.5826 10.1138 16M12 17V18',
  d4: 'M6 12H2',
  d5: 'M22 12L18 12',
  d6: 'M2.00858 12C2 12.5957 2 13.2587 2 14C2 17.5066 2 19.26 2.90796 20.4401C3.07418 20.6561 3.25989 20.8542 3.46243 21.0315C4.56877 22 6.21251 22 9.49998 22H14.5C17.7875 22 19.4312 22 20.5376 21.0315C20.7401 20.8542 20.9258 20.6561 21.092 20.4401C22 19.26 22 17.5066 22 14C22 13.2587 22 12.5957 21.9914 12H2.00858Z',
  d7: 'M18.4305 5.37696C17.4234 5.24998 16.1516 5.24999 14.5518 5.25H9.44821C7.84841 5.24999 6.57657 5.24998 5.56947 5.37696C4.53118 5.50787 3.6776 5.78336 2.96842 6.40417C2.72853 6.61417 2.50927 6.84818 2.31354 7.10259C1.74054 7.84733 1.48866 8.73659 1.36806 9.82491C1.33019 10.1666 1.30447 10.5375 1.28699 10.9403C1.27965 11.1096 1.41571 11.25 1.5852 11.25H5C5.41421 11.25 5.75 11.5858 5.75 12C5.75 12.4142 5.41421 12.75 5 12.75H1.55037C1.38523 12.75 1.25113 12.8835 1.25072 13.0486C1.25 13.3371 1.25 13.6372 1.25 13.9494V14.0464C1.24999 15.7604 1.24998 17.1096 1.36806 18.1751C1.48866 19.2634 1.74054 20.1527 2.31354 20.8974C2.50927 21.1518 2.72853 21.3858 2.96842 21.5958C3.6776 22.2166 4.53118 22.4921 5.56947 22.6231C6.57657 22.75 7.8484 22.75 9.44819 22.75H14.5518C16.1516 22.75 17.4234 22.75 18.4305 22.6231C19.4688 22.4921 20.3224 22.2166 21.0316 21.5958C21.2715 21.3858 21.4907 21.1518 21.6865 20.8974C22.2595 20.1527 22.5113 19.2634 22.6319 18.1751C22.75 17.1096 22.75 15.7604 22.75 14.0464V13.9536V13.9535C22.75 13.6398 22.75 13.3383 22.7493 13.0486C22.7489 12.8835 22.6148 12.75 22.4496 12.75L19 12.75C18.5858 12.75 18.25 12.4142 18.25 12C18.25 11.5858 18.5858 11.25 19 11.25L22.4148 11.25C22.5843 11.25 22.7204 11.1096 22.713 10.9403C22.6955 10.5375 22.6698 10.1666 22.6319 9.82491C22.5113 8.73659 22.2595 7.84733 21.6865 7.10259C21.4907 6.84818 21.2715 6.61417 21.0316 6.40417C20.3224 5.78336 19.4688 5.50787 18.4305 5.37696ZM12.75 10C12.75 9.58579 12.4142 9.25 12 9.25C11.5858 9.25 11.25 9.58579 11.25 10V10.3336C10.8358 10.4281 10.4543 10.6005 10.1358 10.8393C9.63179 11.2173 9.25 11.7968 9.25 12.5C9.25 13.2032 9.63179 13.7827 10.1358 14.1607C10.6396 14.5385 11.3011 14.75 12 14.75C12.4057 14.75 12.7441 14.8743 12.9642 15.0393C13.1841 15.2042 13.25 15.3748 13.25 15.5C13.25 15.6252 13.1841 15.7958 12.9642 15.9607C12.7441 16.1257 12.4057 16.25 12 16.25C11.3316 16.25 10.9095 15.929 10.7922 15.6803C10.6157 15.3056 10.1688 15.145 9.79408 15.3216C9.41939 15.4981 9.25879 15.945 9.43537 16.3197C9.76526 17.0197 10.4613 17.4848 11.25 17.6655V18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V17.6664C13.1642 17.5719 13.5457 17.3995 13.8642 17.1607C14.3682 16.7827 14.75 16.2032 14.75 15.5C14.75 14.7968 14.3682 14.2173 13.8642 13.8393C13.3604 13.4615 12.6989 13.25 12 13.25C11.5943 13.25 11.2559 13.1257 11.0358 12.9607C10.8159 12.7958 10.75 12.6252 10.75 12.5C10.75 12.3748 10.8159 12.2042 11.0358 12.0393C11.2559 11.8743 11.5943 11.75 12 11.75C12.6684 11.75 13.0905 12.071 13.2078 12.3197C13.3843 12.6944 13.8312 12.855 14.2059 12.6784C14.5806 12.5019 14.7412 12.055 14.5646 11.6803C14.2347 10.9803 13.5387 10.5152 12.75 10.3345V10Z',
  d8: 'M12 1C12.9145 1 13.701 0.997881 14.3278 1.08215C14.9833 1.17028 15.6117 1.36902 16.1213 1.87868C16.631 2.38835 16.8297 3.0167 16.9179 3.67221C17.0212 4.44118 17 5.22604 17 6C17 6.55229 16.5523 7 16 7C15.4477 7 15 6.55229 15 6C15 5.02893 14.9979 4.40122 14.9357 3.93871C14.8774 3.50497 14.7832 3.36902 14.7071 3.2929C14.631 3.21677 14.495 3.12263 14.0613 3.06431C13.5988 3.00213 12.9711 3 12 3C11.0289 3 10.4012 3.00213 9.93871 3.06431C9.50497 3.12263 9.36902 3.21677 9.2929 3.2929C9.21677 3.36902 9.12263 3.50497 9.06431 3.93871C9.00213 4.40122 9 5.02893 9 6C9 6.55229 8.55229 7 8 7C7.44772 7 7 6.55229 7 6C7 5.08547 6.99788 4.29896 7.08215 3.67221C7.17028 3.0167 7.36902 2.38835 7.87868 1.87868C8.38835 1.36902 9.0167 1.17028 9.67221 1.08215C10.299 0.997881 11.0855 1 12 1Z',
  d9: 'M14.5518 5.25C16.1516 5.24999 17.4234 5.24998 18.4305 5.37695C19.4688 5.50786 20.3224 5.78336 21.0316 6.40417C21.2715 6.61417 21.4907 6.84818 21.6865 7.10258C22.2595 7.84732 22.5113 8.73658 22.6319 9.8249C22.6698 10.1666 22.6955 10.5375 22.713 10.9403C22.7204 11.1096 22.5843 11.25 22.4148 11.25L19 11.25C18.5858 11.25 18.25 11.5858 18.25 12C18.25 12.4142 18.5858 12.75 19 12.75L22.4496 12.75C22.6148 12.75 22.7489 12.8835 22.7493 13.0486C22.75 13.3384 22.75 13.6399 22.75 13.9536V14.0464C22.75 15.7604 22.75 17.1096 22.6319 18.1751C22.5113 19.2634 22.2595 20.1527 21.6865 20.8974C21.4907 21.1518 21.2715 21.3858 21.0316 21.5958C20.3224 22.2166 19.4688 22.4921 18.4305 22.623C17.4234 22.75 16.1516 22.75 14.5518 22.75H9.44819C7.8484 22.75 6.57657 22.75 5.56947 22.623C4.53118 22.4921 3.6776 22.2166 2.96842 21.5958C2.72853 21.3858 2.50927 21.1518 2.31354 20.8974C1.74054 20.1527 1.48866 19.2634 1.36806 18.1751C1.24998 17.1096 1.24999 15.7604 1.25 14.0464V13.9494C1.25 13.6372 1.25 13.3371 1.25072 13.0486C1.25113 12.8835 1.38523 12.75 1.55037 12.75H5C5.41421 12.75 5.75 12.4142 5.75 12C5.75 11.5858 5.41421 11.25 5 11.25H1.5852C1.41571 11.25 1.27965 11.1096 1.28699 10.9403C1.30447 10.5375 1.33019 10.1666 1.36806 9.8249C1.48866 8.73658 1.74054 7.84732 2.31354 7.10258C2.50927 6.84818 2.72853 6.61417 2.96842 6.40417C3.6776 5.78336 4.53118 5.50786 5.56947 5.37695C6.57657 5.24998 7.84842 5.24999 9.44821 5.25H14.5518Z',
  d10: 'M12 9.25C12.4142 9.25 12.75 9.58579 12.75 10V10.3345C13.5387 10.5152 14.2347 10.9803 14.5646 11.6803C14.7412 12.055 14.5806 12.5019 14.2059 12.6784C13.8312 12.855 13.3843 12.6944 13.2078 12.3197C13.0905 12.071 12.6684 11.75 12 11.75C11.5943 11.75 11.2559 11.8743 11.0358 12.0393C10.8159 12.2042 10.75 12.3748 10.75 12.5C10.75 12.6252 10.8159 12.7958 11.0358 12.9607C11.2559 13.1257 11.5943 13.25 12 13.25C12.6989 13.25 13.3604 13.4615 13.8642 13.8393C14.3682 14.2173 14.75 14.7968 14.75 15.5C14.75 16.2032 14.3682 16.7827 13.8642 17.1607C13.5457 17.3995 13.1642 17.5719 12.75 17.6664V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.6655C10.4613 17.4848 9.76526 17.0197 9.43537 16.3197C9.25879 15.945 9.41939 15.4981 9.79408 15.3216C10.1688 15.145 10.6157 15.3056 10.7922 15.6803C10.9095 15.929 11.3316 16.25 12 16.25C12.4057 16.25 12.7441 16.1257 12.9642 15.9607C13.1841 15.7958 13.25 15.6252 13.25 15.5C13.25 15.3748 13.1841 15.2042 12.9642 15.0393C12.7441 14.8743 12.4057 14.75 12 14.75C11.3011 14.75 10.6396 14.5385 10.1358 14.1607C9.63179 13.7827 9.25 13.2032 9.25 12.5C9.25 11.7968 9.63179 11.2173 10.1358 10.8393C10.4543 10.6005 10.8358 10.4281 11.25 10.3336V10C11.25 9.58579 11.5858 9.25 12 9.25Z',
  d11: 'M12.0664 1H11.9348C11.0483 0.999953 10.2845 0.99991 9.6728 1.08215C9.01728 1.17028 8.38893 1.36902 7.87927 1.87868C7.3696 2.38835 7.17086 3.0167 7.08273 3.67221C7.02167 4.12634 7.00597 4.66434 7.00195 5.27414C7.59918 5.25397 8.26368 5.25065 9.00244 5.2501C9.00666 4.68495 9.02041 4.26956 9.06489 3.93871C9.12321 3.50497 9.21736 3.36902 9.29348 3.2929C9.3696 3.21677 9.50555 3.12263 9.93929 3.06431C10.4018 3.00213 11.0295 3.00001 12.0006 3.00001C12.9717 3.00001 13.5994 3.00213 14.0619 3.06431C14.4956 3.12263 14.6316 3.21677 14.7077 3.2929C14.7838 3.36902 14.878 3.50497 14.9363 3.93871C14.9808 4.26956 14.9945 4.68495 14.9987 5.2501C15.7388 5.25065 16.4043 5.25398 17.0024 5.27424C17.0017 4.73853 16.9896 4.20161 16.9184 3.67221C16.8303 3.0167 16.6316 2.38835 16.1219 1.87868C15.6122 1.36902 14.9839 1.17028 14.3284 1.08215C13.7167 0.99991 12.9529 0.999953 12.0664 1Z',
  d12: 'M21.5 6H2.5V21.5H21.5V6Z',
  d13: 'M15.5 6V2.5H8.5V6',
  d14: 'M12 11C10.8954 11 10 11.6716 10 12.5C10 13.3284 10.8954 14 12 14C13.1046 14 14 14.6716 14 15.5C14 16.3284 13.1046 17 12 17M12 11C12.8708 11 13.6116 11.4174 13.8862 12M12 11V9.5M12 17C11.1292 17 10.3884 16.5826 10.1138 16M12 17V18.5',
  d15: 'M7.5 2.75C7.5 2.19772 7.94772 1.75 8.5 1.75H15.5C16.0523 1.75 16.5 2.19772 16.5 2.75V6.25H14.5V3.75H9.5V6.25H7.5V2.75Z',
  d16: 'M1.75 6C1.75 5.58579 2.08579 5.25 2.5 5.25H21.5C21.9142 5.25 22.25 5.58579 22.25 6V11.25L18 11.25V12.75L22.25 12.75V21.5C22.25 21.9142 21.9142 22.25 21.5 22.25H2.5C2.08579 22.25 1.75 21.9142 1.75 21.5V12.75H6V11.25H1.75V6ZM10.1358 10.8393C10.4543 10.6005 10.8358 10.4281 11.25 10.3336V9.5H12.75V10.3345C13.5387 10.5152 14.2347 10.9803 14.5646 11.6803L13.2078 12.3197C13.0905 12.071 12.6684 11.75 12 11.75C11.5943 11.75 11.2559 11.8743 11.0358 12.0393C10.8159 12.2042 10.75 12.3748 10.75 12.5C10.75 12.6252 10.8159 12.7958 11.0358 12.9607C11.2559 13.1257 11.5943 13.25 12 13.25C12.6989 13.25 13.3604 13.4615 13.8642 13.8393C14.3682 14.2173 14.75 14.7968 14.75 15.5C14.75 16.2032 14.3682 16.7827 13.8642 17.1607C13.5457 17.3995 13.1642 17.5719 12.75 17.6664V18.5H11.25V17.6655C10.4613 17.4848 9.76526 17.0197 9.43537 16.3197L10.7922 15.6803C10.9095 15.929 11.3316 16.25 12 16.25C12.4057 16.25 12.7441 16.1257 12.9642 15.9607C13.1841 15.7958 13.25 15.6252 13.25 15.5C13.25 15.3748 13.1841 15.2042 12.9642 15.0393C12.7441 14.8743 12.4057 14.75 12 14.75C11.3011 14.75 10.6396 14.5385 10.1358 14.1607C9.63179 13.7827 9.25 13.2032 9.25 12.5C9.25 11.7968 9.63179 11.2173 10.1358 10.8393Z',
};

export const IconBriefcaseDollarStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-dollar-stroke-rounded IconBriefcaseDollarStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconBriefcaseDollarDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-dollar-duotone-rounded IconBriefcaseDollarDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconBriefcaseDollarTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-dollar-twotone-rounded IconBriefcaseDollarTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBriefcaseDollarSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-dollar-solid-rounded IconBriefcaseDollarSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconBriefcaseDollarBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-dollar-bulk-rounded IconBriefcaseDollarBulkRounded"
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcaseDollarStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-dollar-stroke-sharp IconBriefcaseDollarStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBriefcaseDollarSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="briefcase-dollar-solid-sharp IconBriefcaseDollarSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBriefcaseDollar: TheIconSelfPack = {
  name: 'BriefcaseDollar',
  StrokeRounded: IconBriefcaseDollarStrokeRounded,
  DuotoneRounded: IconBriefcaseDollarDuotoneRounded,
  TwotoneRounded: IconBriefcaseDollarTwotoneRounded,
  SolidRounded: IconBriefcaseDollarSolidRounded,
  BulkRounded: IconBriefcaseDollarBulkRounded,
  StrokeSharp: IconBriefcaseDollarStrokeSharp,
  SolidSharp: IconBriefcaseDollarSolidSharp,
};