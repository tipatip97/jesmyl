import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10',
  d2: 'M12 9C10.8954 9 10 9.67157 10 10.5C10 11.3284 10.8954 12 12 12C13.1046 12 14 12.6716 14 13.5C14 14.3284 13.1046 15 12 15M12 9C12.8708 9 13.6116 9.4174 13.8862 10M12 9V8M12 15C11.1292 15 10.3884 14.5826 10.1138 14M12 15V16',
  d3: 'M16.998 7.00195L21.1739 2.82375M21.998 6.48019L21.8798 3.3887C21.8798 2.66006 21.4448 2.20607 20.6523 2.14881L17.5282 2.00195',
  d4: 'M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z',
  d5: 'M13.9846 2.20004C13.3392 2.06886 12.6711 2 11.987 2C6.47081 2 1.99902 6.47715 1.99902 12C1.99902 17.5228 6.47081 22 11.987 22C17.5032 22 21.9751 17.5228 21.9751 12C21.9751 11.3151 21.9062 10.6462 21.7753 10',
  d6: 'M11.9869 9C10.8836 9 9.98926 9.67157 9.98926 10.5C9.98926 11.3284 10.8836 12 11.9869 12C13.0901 12 13.9845 12.6716 13.9845 13.5C13.9845 14.3284 13.0901 15 11.9869 15M11.9869 9C12.8566 9 13.5965 9.4174 13.8708 10M11.9869 9V8M11.9869 15C11.1171 15 10.3772 14.5826 10.1029 14M11.9869 15V16',
  d7: 'M17.007 7.00195L21.1778 2.82375M22.001 6.48019L21.8829 3.3887C21.8829 2.66006 21.4484 2.20607 20.6568 2.14881L17.5365 2.00195',
  d8: 'M12 6.5C12.5523 6.5 13 6.94772 13 7.5V7.77827C13.8024 8.03113 14.4829 8.58617 14.8085 9.36363C15.0219 9.87302 14.782 10.459 14.2726 10.6723C13.7632 10.8857 13.1772 10.6458 12.9639 10.1364C12.8699 9.91204 12.5363 9.625 12 9.625C11.2818 9.625 11 10.0853 11 10.3125C11 10.5397 11.2818 11 12 11C13.4909 11 15 12.0507 15 13.6875C15 14.9528 14.0981 15.8679 13 16.2181V16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5V16.2217C10.1976 15.9689 9.51714 15.4138 9.19146 14.6364C8.97807 14.127 9.21804 13.541 9.72743 13.3277C10.2368 13.1143 10.8228 13.3542 11.0361 13.8636C11.1301 14.088 11.4637 14.375 12 14.375C12.7182 14.375 13 13.9147 13 13.6875C13 13.4603 12.7182 13 12 13C10.5091 13 9 11.9493 9 10.3125C9 9.04719 9.90187 8.1321 11 7.78192V7.5C11 6.94772 11.4477 6.5 12 6.5Z',
  d9: 'M12 3.20455C7.1424 3.20455 3.20455 7.1424 3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 11.3963 20.7348 10.8078 20.6195 10.2399C20.5121 9.71092 20.8539 9.19509 21.3828 9.08771C21.9118 8.98034 22.4276 9.3221 22.535 9.85104C22.6761 10.5462 22.75 11.265 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.735 1.25 13.4538 1.32391 14.149 1.46502C14.6779 1.57239 15.0197 2.08823 14.9123 2.61717C14.8049 3.14612 14.2891 3.48787 13.7601 3.3805C13.1922 3.26522 12.6037 3.20455 12 3.20455Z',
  d10: 'M17.9439 7.45903C17.556 7.84699 16.927 7.84699 16.539 7.45903C16.1511 7.07108 16.1511 6.44207 16.539 6.05412L18.3394 4.25369L18.2256 4.13989C18.0215 3.93596 17.8056 3.72019 17.6557 3.52945C17.5463 3.39039 17.1454 2.87739 17.3624 2.23881C17.5795 1.59971 18.203 1.4608 18.3717 1.42363C18.604 1.37246 18.903 1.34461 19.1859 1.31826L19.2345 1.31374C19.68 1.27209 20.1977 1.2353 20.6595 1.25589C20.89 1.26617 21.1428 1.29199 21.3837 1.35356C21.607 1.41064 21.9341 1.52632 22.2029 1.79508C22.4717 2.06383 22.5873 2.39098 22.6444 2.61429C22.706 2.85518 22.7318 3.10795 22.7421 3.33853C22.7627 3.80026 22.7259 4.318 22.6842 4.76352L22.6797 4.81209C22.6534 5.09498 22.6255 5.394 22.5743 5.62632C22.5372 5.79504 22.3983 6.41855 21.7592 6.63566C21.1206 6.8526 20.6076 6.45166 20.4685 6.34233C20.2778 6.19239 20.062 5.97648 19.8581 5.77241L19.7443 5.65861L17.9439 7.45903Z',
  d11: 'M12 9C10.8954 9 10 9.67157 10 10.5C10 11.3284 10.8954 12 12 12C13.1046 12 14 12.6716 14 13.5C14 14.3284 13.1046 15 12 15M12 9C12.8708 9 13.6116 9.4174 13.8862 10M12 9V7.5M12 15C11.1292 15 10.3884 14.5826 10.1138 14M12 15V16.5',
  d12: 'M17.0244 7.02253L21.6748 2.29523M17.4639 2.0311L21.9652 2L21.9962 6.48801',
  d13: 'M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.3823 20.9379 10.78 20.82 10.1989L22.78 9.80107C22.9244 10.5124 23 11.2479 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C12.7521 1 13.4876 1.07563 14.1989 1.22002L13.8011 3.18005C13.22 3.06209 12.6177 3 12 3Z',
  d14: 'M11 8.14015C10.6279 8.24804 10.283 8.41646 9.98579 8.63934C9.43443 9.05286 9 9.70046 9 10.5C9 11.2995 9.43443 11.9471 9.98579 12.3607C10.5368 12.7739 11.2523 13 12 13C12.3568 13 12.6414 13.1097 12.8142 13.2393C12.9867 13.3687 13 13.4711 13 13.5C13 13.5289 12.9867 13.6313 12.8142 13.7607C12.6414 13.8903 12.3568 14 12 14C11.3991 14 11.0832 13.7112 11.0184 13.5737L9.20922 14.4263C9.55037 15.1502 10.2296 15.6351 11 15.8585V16.5H13V15.8598C13.3721 15.752 13.717 15.5835 14.0142 15.3607C14.5656 14.9471 15 14.2995 15 13.5C15 12.7005 14.5656 12.0529 14.0142 11.6393C13.4632 11.2261 12.7477 11 12 11C11.6432 11 11.3586 10.8903 11.1858 10.7607C11.0133 10.6313 11 10.5289 11 10.5C11 10.4711 11.0133 10.3687 11.1858 10.2393C11.3586 10.1097 11.6432 10 12 10C12.6009 10 12.9168 10.2888 12.9816 10.4263L14.7908 9.5737C14.4496 8.84981 13.7704 8.36492 13 8.14149V7.5H11V8.14015Z',
  d15: 'M19.5816 3.00391H17.4999V1.00391H22.9956L22.9962 6.50392L20.9962 6.50414L20.996 4.41794L17.7072 7.70685L16.293 6.29267L19.5816 3.00391Z',
} as const;

export const IconMoneySendCircleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-circle-stroke-rounded IconMoneySendCircleStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconMoneySendCircleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-circle-duotone-rounded IconMoneySendCircleDuotoneRounded"
    >
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

export const IconMoneySendCircleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-circle-twotone-rounded IconMoneySendCircleTwotoneRounded"
    >
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

export const IconMoneySendCircleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-circle-solid-rounded IconMoneySendCircleSolidRounded"
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySendCircleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-circle-bulk-rounded IconMoneySendCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySendCircleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-circle-stroke-sharp IconMoneySendCircleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconMoneySendCircleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-circle-solid-sharp IconMoneySendCircleSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoneySendCircle: TheIconSelfPack = {
  name: 'MoneySendCircle',
  StrokeRounded: IconMoneySendCircleStrokeRounded,
  DuotoneRounded: IconMoneySendCircleDuotoneRounded,
  TwotoneRounded: IconMoneySendCircleTwotoneRounded,
  SolidRounded: IconMoneySendCircleSolidRounded,
  BulkRounded: IconMoneySendCircleBulkRounded,
  StrokeSharp: IconMoneySendCircleStrokeSharp,
  SolidSharp: IconMoneySendCircleSolidSharp,
};