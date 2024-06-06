import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.25 13.0249H21.75M14.25 13.0249C14.25 13.7251 16.25 15.0249 17.25 15.5249M14.25 13.0249C14.25 12.3247 16.4167 11.0249 17.25 10.5249',
  d2: 'M12.662 8.5249C12.662 6.40426 10.9917 3.91073 8.25 4.0022C7.52476 4.0264 6.72455 4.25832 5.86047 4.76694C4.4716 5.68467 2.67966 8.73578 4.84287 11.9368C5.89496 13.4936 6.86653 13.5249 9.75 13.5249H2.25M6.703 14.0071C6.16468 15.5014 4.53524 18.8986 2.32404 19.9868H11.2098C11.6185 19.9868 12.8337 20.199 14.229 18.924',
  d3: 'M12.1321 8.52514C12.1321 6.4045 10.4634 3.91097 7.72447 4.00244C6.99995 4.02664 6.20054 4.25856 5.33733 4.76718C3.94985 5.68491 2.1597 8.73602 4.32075 11.937C5.37178 13.4938 6.34238 13.5251 9.22297 13.5251H1.73047M6.17902 14.0073C5.64123 15.5016 4.01342 18.8988 1.80443 19.987H10.6813C11.0896 19.987 12.3036 20.1992 13.6975 18.9242',
  d4: 'M14.2373 13H21.7298M14.2373 13C14.2373 13.7002 16.2296 15.0085 16.7348 15.5M14.2373 13C14.2373 12.2998 16.2296 10.9915 16.7348 10.5',
  d5: 'M14.5256 12.9998H22.0019M14.5256 12.9998C14.5256 13.7 16.5136 15.0083 17.0177 15.4998M14.5256 12.9998C14.5256 12.2996 16.5136 10.9913 17.0177 10.4998',
  d6: 'M12.4189 8.86919C12.4189 6.58764 10.7029 3.9136 8.05691 4.00216C7.33397 4.02635 6.53629 4.25828 5.67494 4.76689C4.29046 5.68462 2.50419 8.73573 4.66056 11.9368C5.70932 13.4936 6.75155 13.7596 9.62591 13.7596H1.99829M6.36805 14.1206C5.83144 15.6148 4.3539 18.8986 2.14969 19.9868H11.0073C11.4147 19.9868 12.6262 20.199 14.017 18.9239',
  d7: 'M8.0001 5C6.21883 5 4.6001 6.6394 4.6001 8.88889C4.6001 11.1384 6.21883 12.7778 8.0001 12.7778H9.56933C10.1216 12.7778 10.5693 13.2255 10.5693 13.7778C10.5693 14.3301 10.1216 14.7778 9.56933 14.7778H7.1761C6.70289 15.9104 6.12988 17.0387 5.45176 18.0349C5.22446 18.3688 4.98201 18.6929 4.72381 19H11.4946C11.4981 18.9999 11.5065 18.9997 11.5194 18.9991C11.5454 18.9979 11.5891 18.9951 11.6469 18.9891C11.7636 18.977 11.9317 18.9523 12.1241 18.9024C12.519 18.8 12.9523 18.6089 13.2803 18.2688C13.6636 17.8713 14.2967 17.8598 14.6942 18.2431C15.0918 18.6265 15.1033 19.2595 14.7199 19.6571C14.0479 20.3541 13.2312 20.6815 12.6261 20.8384C12.3185 20.9181 12.0491 20.9582 11.8532 20.9785C11.7422 20.9916 11.5715 20.9983 11.5001 21H2.0001C1.53906 21 1.13778 20.6848 1.02856 20.2369C0.919343 19.789 1.1305 19.3245 1.53978 19.1122C2.33734 18.6987 3.09893 17.9372 3.79843 16.9095C4.23707 16.2651 4.63516 15.5398 4.99044 14.7778H2.0001C1.44781 14.7778 1.0001 14.3301 1.0001 13.7778C1.0001 13.2255 1.44781 12.7778 2.0001 12.7778H3.94465C3.10044 11.7256 2.6001 10.3517 2.6001 8.88889C2.6001 5.73826 4.92126 3 8.0001 3C11.0789 3 13.4001 5.73826 13.4001 8.88889C13.4001 9.44117 12.9524 9.88889 12.4001 9.88889C11.8478 9.88889 11.4001 9.44117 11.4001 8.88889C11.4001 6.6394 9.78136 5 8.0001 5Z',
  d8: 'M22 14.0059C22.5523 14.0059 23 13.5581 23 13.0059C23 12.4536 22.5523 12.0059 22 12.0059L18.5 12.0059L18.5 11.4116C18.5001 11.236 18.5003 11.0203 18.4782 10.8439L18.4778 10.8405C18.462 10.7141 18.3902 10.138 17.8246 9.86368C17.2577 9.58872 16.7576 9.89065 16.6494 9.95597L16.6454 9.95841C16.4924 10.0506 16.3215 10.1848 16.1809 10.2951L16.1507 10.3188C15.7748 10.6135 15.2906 10.9954 14.8996 11.3759C14.7045 11.5657 14.5033 11.783 14.3444 12.0139C14.2032 12.2191 14 12.5693 14 13C14 13.4307 14.2032 13.7809 14.3444 13.9861C14.5033 14.217 14.7045 14.4343 14.8996 14.6241C15.2906 15.0046 15.7748 15.3865 16.1507 15.6812L16.1809 15.7049C16.3215 15.8152 16.4923 15.9494 16.6454 16.0416L16.6494 16.044C16.7576 16.1093 17.2578 16.4113 17.8246 16.1363C18.3902 15.862 18.462 15.2859 18.4778 15.1595L18.4782 15.1561C18.5003 14.9797 18.5001 14.764 18.5 14.5884L18.5 14.0059L22 14.0059Z',
  d9: 'M21.9981 13.0033H14.7495M16.9388 10.4966L14.4092 13.0033L16.9388 15.51',
  d10: 'M13.3236 8.8481C13.3236 5.48302 10.5577 3.42596 7.72001 4.13974C4.19091 5.19666 4.10349 9.28812 4.80308 10.9371C5.8741 13.2378 7.48358 13.6436 8.54019 13.7577C6.19767 13.4021 6.9979 17.4818 2.84285 19.9672C2.82747 19.9764 2.83266 20.0015 2.85043 20.0015H12.4526C13.4472 20.0015 14.6679 19.3267 14.9731 19.0029M2.00195 13.7577H10.6967',
  d11: 'M8.5001 5C6.71883 5 5.1001 6.6394 5.1001 8.88889C5.1001 11.1384 6.71883 12.7778 8.5001 12.7778H10.0693V14.7778H7.6761C7.20289 15.9104 6.62988 17.0387 5.95176 18.0349C5.72446 18.3688 5.48201 18.6929 5.22381 19H11.9946C11.9981 18.9999 12.0065 18.9997 12.0194 18.9991C12.0454 18.9979 12.0891 18.9951 12.1469 18.9891C12.2636 18.977 12.4317 18.9523 12.6241 18.9024C13.019 18.8 13.4523 18.6089 13.7803 18.2688L15.2199 19.6571C14.5479 20.3541 13.7312 20.6815 13.1261 20.8384C12.8185 20.9181 12.5491 20.9582 12.3532 20.9785C12.2548 20.9887 12.06 20.9972 12.0001 21H2.5001C2.03906 21 1.63778 20.6848 1.52856 20.2369C1.41934 19.789 1.6305 19.3245 2.03978 19.1122C2.83734 18.6987 3.59893 17.9372 4.29843 16.9095C4.73707 16.2651 5.13516 15.5398 5.49044 14.7778H2.5001V12.7778H4.44465C3.60044 11.7256 3.1001 10.3517 3.1001 8.88889C3.1001 5.73826 5.42126 3 8.5001 3C11.5789 3 13.9001 5.73826 13.9001 8.88889H11.9001C11.9001 6.6394 10.2814 5 8.5001 5Z',
  d12: 'M16.793 9.79297L18.2073 11.2072L17.4144 12.0001H22.5002V14.0001H17.4144L18.2073 14.793L16.793 16.2072L13.5859 13.0001L16.793 9.79297Z',
};

export const IconPoundReceiveStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-receive-stroke-rounded IconPoundReceiveStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPoundReceiveDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-receive-duotone-rounded IconPoundReceiveDuotoneRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconPoundReceiveTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-receive-twotone-rounded IconPoundReceiveTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPoundReceiveSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-receive-solid-rounded IconPoundReceiveSolidRounded"
    >
      <path 
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

export const IconPoundReceiveBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-receive-bulk-rounded IconPoundReceiveBulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPoundReceiveStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-receive-stroke-sharp IconPoundReceiveStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPoundReceiveSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-receive-solid-sharp IconPoundReceiveSolidSharp"
    >
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

export const iconPackOfPoundReceive: TheIconSelfPack = {
  name: 'PoundReceive',
  StrokeRounded: IconPoundReceiveStrokeRounded,
  DuotoneRounded: IconPoundReceiveDuotoneRounded,
  TwotoneRounded: IconPoundReceiveTwotoneRounded,
  SolidRounded: IconPoundReceiveSolidRounded,
  BulkRounded: IconPoundReceiveBulkRounded,
  StrokeSharp: IconPoundReceiveStrokeSharp,
  SolidSharp: IconPoundReceiveSolidSharp,
};