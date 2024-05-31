import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 13H14.5M22 13C22 13.7002 20.0057 15.0085 19.5 15.5M22 13C22 12.2998 20.0057 10.9915 19.5 10.5',
  d2: 'M12.433 8.90854C12.433 6.22693 9.76214 2.33551 5.63149 4.76687C4.24262 5.6846 2.45068 8.7357 4.6139 11.9367C5.66599 13.4935 6.70504 13.7211 9.58852 13.7211H2M6.47402 14.0071C5.93571 15.5013 4.30627 18.8986 2.09506 19.9868H10.9808C11.3895 19.9868 12.6048 20.1989 14 18.9239',
  d3: 'M12.4155 8.52514C12.4155 6.4045 10.7443 3.91097 8.0012 4.00244C7.27558 4.02664 6.47495 4.25856 5.61041 4.76718C4.22081 5.68491 2.42793 8.73602 4.59228 11.937C5.64492 13.4938 6.617 13.5251 9.50199 13.5251H1.99805M6.45339 14.0073C5.91478 15.5016 4.28449 18.8988 2.07213 19.987H10.9626C11.3715 19.987 12.5873 20.1992 13.9833 18.9242',
  d4: 'M21.9981 12.8184H14.4941M21.9981 12.8184C21.9981 13.5186 20.0027 14.8269 19.4968 15.3184M21.9981 12.8184C21.9981 12.1182 20.0027 10.8099 19.4968 10.3184',
  d5: 'M21.9987 13H14.5032M21.9987 13C21.9987 13.7002 20.0056 15.0085 19.5002 15.5M21.9987 13C21.9987 12.2998 20.0056 10.9915 19.5002 10.5',
  d6: 'M12.4157 8.86919C12.4157 6.58764 10.7006 3.9136 8.05626 4.00216C7.33374 4.02635 6.53653 4.25828 5.67569 4.76689C4.29203 5.68462 2.50682 8.73573 4.66192 11.9368C5.71005 13.4936 6.75167 13.7596 9.62432 13.7596H2.00122M6.3684 14.1206C5.8321 15.6148 4.35544 18.8986 2.15253 19.9868H11.0049C11.4121 19.9868 12.6228 20.199 14.0128 18.9239',
  d7: 'M8.0001 5C6.21883 5 4.6001 6.6394 4.6001 8.88889C4.6001 11.1384 6.21883 12.7778 8.0001 12.7778H9.56933C10.1216 12.7778 10.5693 13.2255 10.5693 13.7778C10.5693 14.3301 10.1216 14.7778 9.56933 14.7778H7.1761C6.70289 15.9104 6.12988 17.0387 5.45176 18.0349C5.22446 18.3688 4.98201 18.6929 4.72381 19H11.4946C11.4981 18.9999 11.5065 18.9997 11.5194 18.9991C11.5454 18.9979 11.5891 18.9951 11.6469 18.9891C11.7636 18.977 11.9317 18.9523 12.1241 18.9024C12.519 18.8 12.9523 18.6089 13.2803 18.2688C13.6636 17.8713 14.2967 17.8598 14.6942 18.2431C15.0918 18.6265 15.1033 19.2595 14.7199 19.6571C14.0479 20.3541 13.2312 20.6815 12.6261 20.8384C12.3185 20.9181 12.0491 20.9582 11.8532 20.9785C11.7313 20.993 11.567 20.9989 11.5001 21H2.0001C1.53906 21 1.13778 20.6848 1.02856 20.2369C0.919343 19.789 1.1305 19.3245 1.53978 19.1122C2.33734 18.6987 3.09893 17.9372 3.79843 16.9095C4.23707 16.2651 4.63516 15.5398 4.99044 14.7778H2.0001C1.44781 14.7778 1.0001 14.3301 1.0001 13.7778C1.0001 13.2255 1.44781 12.7778 2.0001 12.7778H3.94465C3.10044 11.7256 2.6001 10.3517 2.6001 8.88889C2.6001 5.73826 4.92126 3 8.0001 3C11.0789 3 13.4001 5.73826 13.4001 8.88889C13.4001 9.44117 12.9524 9.88889 12.4001 9.88889C11.8478 9.88889 11.4001 9.44117 11.4001 8.88889C11.4001 6.6394 9.78136 5 8.0001 5Z',
  d8: 'M15 14.0059C14.4477 14.0059 14 13.5581 14 13.0059C14 12.4536 14.4477 12.0059 15 12.0059L18.5 12.0059L18.5 11.4116C18.4999 11.236 18.4997 11.0203 18.5218 10.8439L18.5222 10.8405C18.538 10.7141 18.6098 10.138 19.1754 9.86368C19.7423 9.58872 20.2424 9.89065 20.3506 9.95597L20.3546 9.95841C20.5076 10.0506 20.6785 10.1848 20.8191 10.2951L20.8493 10.3188C21.2252 10.6135 21.7094 10.9954 22.1004 11.3759C22.2955 11.5657 22.4967 11.783 22.6556 12.0139C22.7968 12.2191 23 12.5693 23 13C23 13.4307 22.7968 13.7809 22.6556 13.9861C22.4967 14.217 22.2955 14.4343 22.1004 14.6241C21.7094 15.0046 21.2252 15.3865 20.8493 15.6812L20.8191 15.7049C20.6785 15.8152 20.5077 15.9494 20.3546 16.0416L20.3506 16.044C20.2424 16.1093 19.7422 16.4113 19.1754 16.1363C18.6098 15.862 18.538 15.2859 18.5222 15.1595L18.5218 15.1561C18.4997 14.9797 18.4999 14.764 18.5 14.5884L18.5 14.0059L15 14.0059Z',
  d9: 'M14.4102 13.0005H21.609M19.4712 10.5005L22.0017 13.0005L19.4712 15.5005',
  d10: 'M13.4583 8.8481C13.4583 5.48302 10.6587 3.42596 7.78636 4.13974C4.2142 5.19666 4.12572 9.28812 4.83384 10.9371C5.91793 13.2378 7.54705 13.6436 8.61655 13.7577C6.24544 13.4021 7.05544 17.4818 2.84969 19.9672C2.83412 19.9764 2.83937 20.0015 2.85736 20.0015H12.5767C13.5835 20.0015 14.819 19.3267 15.1279 19.0029M1.99854 13.7577H10.7993',
  d11: 'M8.5001 5C6.71883 5 5.1001 6.6394 5.1001 8.88889C5.1001 11.1384 6.71883 12.7778 8.5001 12.7778H10.0693V14.7778H7.6761C7.20289 15.9104 6.62988 17.0387 5.95176 18.0349C5.72446 18.3688 5.48201 18.6929 5.22381 19H11.9946C11.9981 18.9999 12.0065 18.9997 12.0194 18.9991C12.0454 18.9979 12.0891 18.9951 12.1469 18.9891C12.2636 18.977 12.4317 18.9523 12.6241 18.9024C13.019 18.8 13.4523 18.6089 13.7803 18.2688L15.2199 19.6571C14.5479 20.3541 13.7312 20.6815 13.1261 20.8384C12.8185 20.9181 12.5491 20.9582 12.3532 20.9785C12.2548 20.9887 12.063 20.9972 12.0031 21L12.0015 21L2.5001 21C2.03906 21 1.63778 20.6848 1.52856 20.2369C1.41934 19.789 1.6305 19.3245 2.03978 19.1122C2.83734 18.6987 3.59893 17.9372 4.29843 16.9095C4.73707 16.2651 5.13516 15.5398 5.49044 14.7778H2.5001V12.7778H4.44465C3.60044 11.7256 3.1001 10.3517 3.1001 8.88889C3.1001 5.73826 5.42126 3 8.5001 3C11.5789 3 13.9001 5.73826 13.9001 8.88889H11.9001C11.9001 6.6394 10.2814 5 8.5001 5Z',
  d12: 'M18.6713 12.0001L17.8784 11.2072L19.2926 9.79297L22.4998 13.0001L19.2926 16.2072L17.8784 14.793L18.6713 14.0001H13.5855V12.0001H18.6713Z',
} as const;

export const IconPoundSendStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-send-stroke-rounded IconPoundSendStrokeRounded"
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

export const IconPoundSendDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-send-duotone-rounded IconPoundSendDuotoneRounded"
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

export const IconPoundSendTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-send-twotone-rounded IconPoundSendTwotoneRounded"
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

export const IconPoundSendSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-send-solid-rounded IconPoundSendSolidRounded"
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

export const IconPoundSendBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-send-bulk-rounded IconPoundSendBulkRounded"
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

export const IconPoundSendStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-send-stroke-sharp IconPoundSendStrokeSharp"
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

export const IconPoundSendSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pound-send-solid-sharp IconPoundSendSolidSharp"
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

export const iconPackOfPoundSend: TheIconSelfPack = {
  name: 'PoundSend',
  StrokeRounded: IconPoundSendStrokeRounded,
  DuotoneRounded: IconPoundSendDuotoneRounded,
  TwotoneRounded: IconPoundSendTwotoneRounded,
  SolidRounded: IconPoundSendSolidRounded,
  BulkRounded: IconPoundSendBulkRounded,
  StrokeSharp: IconPoundSendStrokeSharp,
  SolidSharp: IconPoundSendSolidSharp,
};