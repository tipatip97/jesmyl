import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.002 9.00098C10.8974 9.00098 10.002 9.67255 10.002 10.501C10.002 11.3294 10.8974 12.001 12.002 12.001C13.1065 12.001 14.002 12.6726 14.002 13.501C14.002 14.3294 13.1065 15.001 12.002 15.001M12.002 9.00098C12.8728 9.00098 13.6136 9.41838 13.8881 10.001M12.002 9.00098V8.00098M12.002 15.001C11.1311 15.001 10.3903 14.5836 10.1158 14.001M12.002 15.001V16.001',
  d2: 'M13.5 2.50098C13.5 2.50098 12.6839 2.50098 12 2.50098C7.52166 2.50098 5.28249 2.50098 3.89124 3.89223C2.5 5.28347 2.5 7.52264 2.5 12.001C2.5 16.4793 2.5 18.7185 3.89124 20.1098C5.28249 21.501 7.52166 21.501 12 21.501C16.4783 21.501 18.7175 21.501 20.1088 20.1098C21.5 18.7185 21.5 16.4793 21.5 12.001C21.5 11.3171 21.5 10.501 21.5 10.501',
  d3: 'M16.5 7.49902L20.6758 3.32082M21.5 6.97726L21.3818 3.88577C21.3818 3.15713 20.9467 2.70314 20.1542 2.64588L17.0302 2.49902',
  d4: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d5: 'M12.002 9C10.8974 9 10.002 9.67157 10.002 10.5C10.002 11.3284 10.8974 12 12.002 12C13.1065 12 14.002 12.6716 14.002 13.5C14.002 14.3284 13.1065 15 12.002 15M12.002 9C12.8728 9 13.6136 9.4174 13.8881 10M12.002 9V8M12.002 15C11.1311 15 10.3903 14.5826 10.1158 14M12.002 15V16',
  d6: 'M13.5 2.5C13.5 2.5 12.6839 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89125C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 11.3161 21.5 10.5 21.5 10.5',
  d7: 'M16.502 7.49805L20.6779 3.31985M21.502 6.97629L21.3838 3.8848C21.3838 3.15616 20.9488 2.70217 20.1563 2.64491L17.0322 2.49805',
  d8: 'M12.0026 9.00098C10.8979 9.00098 10.0024 9.67255 10.0024 10.501C10.0024 11.3294 10.8979 12.001 12.0026 12.001C13.1071 12.001 14.0027 12.6726 14.0027 13.501C14.0027 14.3294 13.1071 15.001 12.0026 15.001M12.0026 9.00098C12.8734 9.00098 13.6143 9.41838 13.8888 10.001M12.0026 9.00098V8.00098M12.0026 15.001C11.1316 15.001 10.3908 14.5836 10.1162 14.001M12.0026 15.001V16.001',
  d9: 'M13.5002 2.50098C13.5002 2.50098 12.6841 2.50098 12.0001 2.50098C7.5215 2.50098 5.28219 2.50098 3.89084 3.89223C2.49951 5.28347 2.49951 7.52264 2.49951 12.001C2.49951 16.4793 2.49951 18.7185 3.89084 20.1098C5.28219 21.501 7.5215 21.501 12.0001 21.501C16.4787 21.501 18.7181 21.501 20.1095 20.1098C21.5008 18.7185 21.5008 16.4793 21.5008 12.001C21.5008 11.3171 21.5008 10.501 21.5008 10.501',
  d10: 'M16.4995 7.49902L20.6761 3.32082M21.5005 6.97726L21.3822 3.88577C21.3822 3.15713 20.9471 2.70314 20.1544 2.64588L17.0297 2.49902',
  d11: 'M12 3.70239C9.78654 3.70239 8.22466 3.70446 7.04213 3.86345C5.88768 4.01866 5.24203 4.30713 4.77458 4.77458C4.30713 5.24203 4.01865 5.88769 3.86344 7.04213C3.70445 8.22466 3.70238 9.78655 3.70238 12C3.70238 14.2135 3.70445 15.7753 3.86344 16.9579C4.01865 18.1123 4.30713 18.758 4.77458 19.2254C5.24203 19.6929 5.88768 19.9813 7.04213 20.1366C8.22466 20.2955 9.78654 20.2976 12 20.2976C14.2135 20.2976 15.7753 20.2955 16.9579 20.1366C18.1123 19.9813 18.758 19.6929 19.2254 19.2254C19.6929 18.758 19.9813 18.1123 20.1366 16.9579C20.2955 15.7753 20.2976 14.2135 20.2976 12V10.5364C20.2976 9.99731 20.7347 9.55952 21.2738 9.55952C21.8129 9.55952 22.25 9.99658 22.25 10.5357V12.0727C22.25 14.1968 22.25 15.8903 22.0715 17.218C21.8872 18.589 21.4966 19.7153 20.606 20.606C19.7153 21.4966 18.589 21.8872 17.218 22.0715C15.8903 22.25 14.1968 22.25 12.0726 22.25H11.9273C9.80317 22.25 8.10974 22.25 6.78198 22.0715C5.41104 21.8872 4.2847 21.4966 3.39404 20.606C2.50337 19.7153 2.11279 18.589 1.92847 17.218C1.74996 15.8903 1.74998 14.1968 1.75 12.0727V11.9273C1.74998 9.80316 1.74996 8.10973 1.92847 6.78198C2.11279 5.41104 2.50337 4.28471 3.39404 3.39404C4.2847 2.50338 5.41104 2.11279 6.78198 1.92847C8.10973 1.74996 9.80315 1.74998 11.9273 1.75L13.4637 1.75C14.0028 1.75 14.4405 2.18705 14.4405 2.72618C14.4405 3.26532 14.0034 3.70238 13.4643 3.70238L12 3.70239Z',
  d12: 'M17.4459 7.95903C17.0579 8.34699 16.4289 8.34699 16.041 7.95903C15.653 7.57108 15.653 6.94207 16.041 6.55412L17.8414 4.75369L17.7276 4.63989C17.5235 4.43596 17.3076 4.22019 17.1576 4.02945C17.0483 3.89039 16.6474 3.37739 16.8643 2.73881C17.0814 2.09971 17.7049 1.9608 17.8736 1.92363C18.106 1.87246 18.405 1.84461 18.6879 1.81826L18.7364 1.81374C19.182 1.77209 19.6997 1.7353 20.1614 1.75589C20.392 1.76617 20.6448 1.79199 20.8856 1.85356C21.109 1.91064 21.4361 2.02632 21.7049 2.29508C21.9736 2.56383 22.0893 2.89098 22.1464 3.11429C22.2079 3.35518 22.2338 3.60795 22.244 3.83853C22.2646 4.30026 22.2278 4.818 22.1862 5.26352L22.1817 5.31209C22.1553 5.59498 22.1275 5.894 22.0763 6.12632C22.0391 6.29504 21.9002 6.91855 21.2611 7.13566C20.6225 7.3526 20.1096 6.95166 19.9705 6.84233C19.7798 6.69239 19.564 6.47648 19.3601 6.27241L19.2463 6.15861L17.4459 7.95903Z',
  d13: 'M12 6.5C12.5523 6.5 13 6.94772 13 7.5V7.77827C13.8024 8.03113 14.4829 8.58617 14.8085 9.36363C15.0219 9.87302 14.782 10.459 14.2726 10.6723C13.7632 10.8857 13.1772 10.6458 12.9639 10.1364C12.8699 9.91204 12.5363 9.625 12 9.625C11.2818 9.625 11 10.0853 11 10.3125C11 10.5397 11.2818 11 12 11C13.4909 11 15 12.0507 15 13.6875C15 14.9528 14.0981 15.8679 13 16.2181V16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5V16.2217C10.1976 15.9689 9.51714 15.4138 9.19146 14.6364C8.97807 14.127 9.21804 13.541 9.72743 13.3277C10.2368 13.1143 10.8228 13.3542 11.0361 13.8636C11.1301 14.088 11.4637 14.375 12 14.375C12.7182 14.375 13 13.9147 13 13.6875C13 13.4603 12.7182 13 12 13C10.5091 13 9 11.9493 9 10.3125C9 9.04719 9.90187 8.1321 11 7.78192V7.5C11 6.94772 11.4477 6.5 12 6.5Z',
  d14: 'M11.9997 9C10.8951 9 9.99976 9.67157 9.99976 10.5C9.99976 11.3284 10.8951 12 11.9997 12C13.1043 12 13.9997 12.6716 13.9997 13.5C13.9997 14.3284 13.1043 15 11.9997 15M11.9997 9C12.8705 9 13.6114 9.4174 13.8859 10M11.9997 9V7.5M11.9997 15C11.1289 15 10.3881 14.5826 10.1135 14M11.9997 15V16.5',
  d15: 'M13.5002 2.5H2.49976V21.5H21.5002V10.5',
  d16: 'M16.5286 7.52253L21.2031 2.77073M16.968 2.5311L21.4694 2.5L21.5004 6.98801',
  d17: 'M10.9995 8.14015C10.6274 8.24804 10.2825 8.41646 9.9853 8.63934C9.43394 9.05286 8.99951 9.70046 8.99951 10.5C8.99951 11.2995 9.43394 11.9471 9.9853 12.3607C10.5363 12.7739 11.2518 13 11.9995 13C12.3563 13 12.6409 13.1097 12.8137 13.2393C12.9862 13.3687 12.9995 13.4711 12.9995 13.5C12.9995 13.5289 12.9862 13.6313 12.8137 13.7607C12.6409 13.8903 12.3563 14 11.9995 14C11.3986 14 11.0827 13.7112 11.0179 13.5737L9.20873 14.4263C9.54988 15.1502 10.2291 15.6351 10.9995 15.8585V16.5H12.9995V15.8598C13.3716 15.752 13.7166 15.5835 14.0137 15.3607C14.5651 14.9471 14.9995 14.2995 14.9995 13.5C14.9995 12.7005 14.5651 12.0529 14.0137 11.6393C13.4627 11.2261 12.7472 11 11.9995 11C11.6427 11 11.3581 10.8903 11.1853 10.7607C11.0128 10.6313 10.9995 10.5289 10.9995 10.5C10.9995 10.4711 11.0128 10.3687 11.1853 10.2393C11.3581 10.1097 11.6427 10 11.9995 10C12.6004 10 12.9163 10.2888 12.9811 10.4263L14.7903 9.5737C14.4491 8.84981 13.7699 8.36492 12.9995 8.14149V7.5H10.9995V8.14015Z',
  d18: 'M1.49951 2.5C1.49951 1.94772 1.94723 1.5 2.49951 1.5H13.5V3.5H3.49951V20.5H20.5V10.5H22.5V21.5C22.5 22.0523 22.0523 22.5 21.5 22.5H2.49951C1.94723 22.5 1.49951 22.0523 1.49951 21.5V2.5Z',
  d19: 'M19.085 3.5H17.0034V1.5H22.499L22.4996 7.00002L20.4996 7.00023L20.4994 4.91404L17.2106 8.20294L15.7964 6.78876L19.085 3.5Z',
};

export const IconMoneySendSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-square-stroke-rounded IconMoneySendSquareStrokeRounded"
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

export const IconMoneySendSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-square-duotone-rounded IconMoneySendSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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

export const IconMoneySendSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-square-twotone-rounded IconMoneySendSquareTwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySendSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-square-solid-rounded IconMoneySendSquareSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySendSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-square-bulk-rounded IconMoneySendSquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySendSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-square-stroke-sharp IconMoneySendSquareStrokeSharp"
    >
      <path 
        d={d.d14} 
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
      />
    </TheIconWrapper>
  );
};

export const IconMoneySendSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-square-solid-sharp IconMoneySendSquareSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfMoneySendSquare: TheIconSelfPack = {
  name: 'MoneySendSquare',
  StrokeRounded: IconMoneySendSquareStrokeRounded,
  DuotoneRounded: IconMoneySendSquareDuotoneRounded,
  TwotoneRounded: IconMoneySendSquareTwotoneRounded,
  SolidRounded: IconMoneySendSquareSolidRounded,
  BulkRounded: IconMoneySendSquareBulkRounded,
  StrokeSharp: IconMoneySendSquareStrokeSharp,
  SolidSharp: IconMoneySendSquareSolidSharp,
};