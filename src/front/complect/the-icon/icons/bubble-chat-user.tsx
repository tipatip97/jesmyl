import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13 2.04725C12.6711 2.016 12.3375 2 12 2C6.47778 2 2 6.28357 2 11.5667C2 14.1051 3.03333 16.4115 4.71889 18.1231C5.09 18.5 5.33778 19.0148 5.23778 19.5448C5.07275 20.4112 4.69874 21.2194 4.15111 21.893C5.59195 22.161 7.09014 21.9197 8.37499 21.2364C8.82918 20.9949 9.05627 20.8741 9.21653 20.8496C9.37678 20.8251 9.60633 20.8682 10.0654 20.9545C10.7032 21.0742 11.3507 21.1343 12 21.1334C16.83 21.1334 21.0653 17.8565 22 13.5',
  d2: 'M11.9955 12H12.0045M8 12H8.00897',
  d3: 'M20.1836 3.79079C20.1836 4.77982 19.3988 5.58158 18.4308 5.58158C17.4627 5.58158 16.6779 4.77982 16.6779 3.79079C16.6779 2.80176 17.4627 2 18.4308 2C19.3988 2 20.1836 2.80176 20.1836 3.79079Z',
  d4: 'M14.9644 9.39623C15.892 7.93728 17.365 7.39052 18.4308 7.39165C19.4966 7.39278 20.9264 7.93728 21.854 9.39623C21.914 9.49056 21.9305 9.60671 21.8764 9.70476C21.6594 10.0977 20.9859 10.8776 20.4994 10.9305C19.9405 10.9912 18.4783 10.9997 18.4319 11C18.3855 10.9998 16.8781 10.9912 16.3189 10.9305C15.8325 10.8776 15.1589 10.0977 14.942 9.70476C14.8879 9.60671 14.9044 9.49056 14.9644 9.39623Z',
  d5: 'M12 21.1334C17.5222 21.1334 22 16.8499 22 11.5667C22 11.0333 21.9544 10.5102 21.8666 10.0005C21.8281 10.0623 21.7804 10.125 21.7229 10.1885C21.2937 10.6616 20.8156 11 20.2147 11H16.7853C16.1844 11 15.7063 10.6616 15.2771 10.1885C14.4859 9.31619 15.5771 8.60169 16.2038 8.19135C16.273 8.14603 16.3366 8.10442 16.3913 8.06671C17.6815 7.17776 19.3185 7.17776 20.6087 8.06671C20.6634 8.1044 20.727 8.146 20.7961 8.1913C21.0282 8.34322 21.3239 8.53687 21.5641 8.76473C21.1455 7.4557 20.4413 6.26597 19.521 5.26203C19.2337 5.47472 18.8811 5.6 18.5 5.6C17.5335 5.6 16.75 4.79411 16.75 3.8C16.75 3.58914 16.7852 3.38676 16.85 3.19873C15.4135 2.435 13.7598 2 12 2C6.47778 2 2 6.28357 2 11.5667C2 14.1051 3.03333 16.4115 4.71889 18.1231C5.09 18.5 5.33778 19.0148 5.23778 19.5448C5.07275 20.4112 4.69874 21.2194 4.15111 21.893C5.59195 22.161 7.09014 21.9197 8.37499 21.2364C8.82918 20.9949 9.05627 20.8741 9.21653 20.8496C9.37678 20.8251 9.60633 20.8682 10.0654 20.9545C10.7032 21.0742 11.3507 21.1343 12 21.1334Z',
  d6: 'M16.3913 8.06671C15.8411 8.4458 14.3985 9.21985 15.2771 10.1885C15.7063 10.6616 16.1844 11 16.7853 11H20.2147C20.8156 11 21.2937 10.6616 21.7229 10.1885C22.6015 9.21985 21.1589 8.4458 20.6087 8.06671C19.3185 7.17776 17.6815 7.17776 16.3913 8.06671Z',
  d7: 'M20.25 3.8C20.25 4.79411 19.4665 5.6 18.5 5.6C17.5335 5.6 16.75 4.79411 16.75 3.8C16.75 2.80589 17.5335 2 18.5 2C19.4665 2 20.25 2.80589 20.25 3.8Z',
  d8: 'M14.8727 1.71364C14.8062 1.59414 14.6425 1.55959 14.315 1.49048C13.5686 1.33295 12.7938 1.24999 11.9998 1.24999C6.09502 1.24999 1.24979 5.83837 1.24979 11.5667C1.24979 14.3144 2.36951 16.8065 4.1843 18.6493C4.45206 18.9213 4.53916 19.2 4.50067 19.4052C4.35842 20.1513 4.03677 20.8444 3.56896 21.4198C3.40203 21.6252 3.35566 21.9033 3.44692 22.1516C3.53819 22.4 3.7536 22.5819 4.01376 22.6303C5.62484 22.93 7.29521 22.6599 8.72693 21.8986C8.96047 21.7744 9.11302 21.6935 9.22754 21.6391C9.2591 21.6219 9.34313 21.5907 9.42676 21.6035C9.53888 21.6189 9.68958 21.647 9.92677 21.6916C10.6101 21.8199 11.3039 21.8842 11.9998 21.8834C17.1466 21.8834 21.4885 18.3974 22.5183 13.7089C22.6284 13.2078 22.6834 12.9572 22.5517 12.8404C22.42 12.7235 22.1327 12.8238 21.5581 13.0242C21.1611 13.1628 20.7139 13.25 20.2149 13.25H16.7856C15.311 13.25 14.2892 12.4885 13.676 11.892C13.1215 11.3526 12.6583 10.5434 12.7653 9.54421C12.8596 8.66277 13.3616 8.05635 13.6761 7.74205C14.1587 7.25968 14.935 6.81647 15.1889 6.67152L15.1889 6.67149C15.2358 6.64321 15.2593 6.62907 15.2679 6.623C15.4143 6.51998 15.4444 6.36674 15.3479 6.21594C15.3422 6.20706 15.3244 6.18304 15.2887 6.13501C14.7933 5.46907 14.5001 4.64376 14.5001 3.74999C14.5001 3.27131 14.5842 2.81226 14.7384 2.38682C14.8722 2.01769 14.9391 1.83313 14.8727 1.71364ZM6.99988 11C6.44759 11 5.99988 11.4477 5.99988 12C5.99988 12.5523 6.44759 13 6.99988 13H7.00885C7.56113 13 8.00885 12.5523 8.00885 12C8.00885 11.4477 7.56113 11 7.00885 11H6.99988ZM10.9954 11C10.4431 11 9.99539 11.4477 9.99539 12C9.99539 12.5523 10.4431 13 10.9954 13H11.0044C11.5566 13 12.0044 12.5523 12.0044 12C12.0044 11.4477 11.5566 11 11.0044 11H10.9954Z',
  d9: 'M15.9657 7.9551C17.5121 7.01497 19.4878 7.01497 21.0342 7.9551C21.3034 8.10933 21.9302 8.46968 22.2638 8.80305C22.4763 9.01542 22.7022 9.31892 22.7434 9.70389C22.7877 10.1169 22.6073 10.4968 22.2783 10.8168C21.7956 11.2863 21.1305 11.75 20.2146 11.75H16.7853C15.8694 11.75 15.2043 11.2863 14.7216 10.8168C14.3927 10.4968 14.2123 10.1169 14.2565 9.70389C14.2977 9.31892 14.5237 9.01542 14.7361 8.80305C15.0697 8.46967 15.6966 8.10933 15.9657 7.9551Z',
  d10: 'M18.4999 6.25C19.8806 6.25 20.9999 5.13071 20.9999 3.75C20.9999 2.36929 19.8806 1.25 18.4999 1.25C17.1192 1.25 15.9999 2.36929 15.9999 3.75C15.9999 5.13071 17.1192 6.25 18.4999 6.25Z',
  d11: 'M14.315 1.49049C14.6424 1.5596 14.8062 1.59415 14.8726 1.71365C14.9391 1.83314 14.8722 2.0177 14.7384 2.38683C14.5842 2.81228 14.5001 3.27132 14.5001 3.75C14.5001 4.64377 14.7932 5.46908 15.2886 6.13502C15.3243 6.18305 15.3422 6.20707 15.3479 6.21595C15.4444 6.36675 15.4143 6.51999 15.2678 6.62301C15.2592 6.62908 15.2358 6.64323 15.1889 6.67153C14.935 6.81648 14.1587 7.2597 13.676 7.74206C13.3616 8.05636 12.8596 8.66278 12.7652 9.54422C12.6583 10.5434 13.1214 11.3526 13.6759 11.892C14.2891 12.4885 15.3109 13.25 16.7855 13.25H20.2149C20.7139 13.25 21.1611 13.1628 21.5581 13.0243C22.1327 12.8238 22.42 12.7235 22.5517 12.8404C22.6834 12.9572 22.6283 13.2078 22.5183 13.7089C21.4884 18.3974 17.1466 21.8834 11.9998 21.8834C11.3039 21.8843 10.6101 21.8199 9.92674 21.6916C9.68955 21.647 9.53885 21.6189 9.42672 21.6036C9.34309 21.5907 9.25906 21.6219 9.22751 21.6391C9.11298 21.6935 8.96044 21.7744 8.72689 21.8986C7.29517 22.66 5.6248 22.93 4.01372 22.6303C3.75356 22.5819 3.53816 22.4 3.44689 22.1517C3.35562 21.9033 3.402 21.6252 3.56893 21.4199C4.03673 20.8445 4.35839 20.1513 4.50064 19.4052C4.53912 19.2 4.45203 18.9213 4.18427 18.6494C2.36947 16.8065 1.24976 14.3144 1.24976 11.5667C1.24976 5.83838 6.09499 1.25 11.9998 1.25C12.7937 1.25 13.5685 1.33296 14.315 1.49049Z',
  d12: 'M5.99988 12C5.99988 11.4477 6.44759 11 6.99988 11H7.00885C7.56113 11 8.00885 11.4477 8.00885 12C8.00885 12.5523 7.56113 13 7.00885 13H6.99988C6.44759 13 5.99988 12.5523 5.99988 12ZM9.99539 12C9.99539 11.4477 10.4431 11 10.9954 11H11.0044C11.5566 11 12.0044 11.4477 12.0044 12C12.0044 12.5523 11.5566 13 11.0044 13H10.9954C10.4431 13 9.99539 12.5523 9.99539 12Z',
  d13: 'M21.9984 11.012H15.0054C15.0054 9.07587 16.5708 7.50635 18.5019 7.50635C20.433 7.50635 21.9984 9.07587 21.9984 11.012Z',
  d14: 'M20.25 3.75038C20.25 4.71843 19.4672 5.5032 18.5017 5.5032C17.5361 5.5032 16.7534 4.71843 16.7534 3.75038C16.7534 2.78232 17.5361 1.99756 18.5017 1.99756C19.4672 1.99756 20.25 2.78232 20.25 3.75038Z',
  d15: 'M12.0038 12.0132H12.0127M8.01221 12.0132H8.02117',
  d16: 'M13.9968 2.14585C13.1227 1.99624 12.2086 1.95685 11.2715 2.04132C5.56293 2.34316 1.56513 7.1438 2.03965 12.419C2.48204 15.6739 3.7653 16.8921 5.02166 18.1677L3.96274 21.9898C3.96047 21.9979 3.96877 22.005 3.97648 22.0015L7.98084 20.1857C9.56494 20.9288 11.1637 21.0538 13.054 20.8834C17.3092 20.4998 20.5917 17.6979 21.6359 14.0034',
  d17: 'M16.0036 3.74795C16.0036 2.36837 17.1248 1.25 18.5078 1.25C19.8909 1.25 21.0121 2.36837 21.0121 3.74795C21.0121 5.12752 19.8909 6.24589 18.5078 6.24589C17.1248 6.24589 16.0036 5.12752 16.0036 3.74795Z',
  d18: 'M14.25 10.75C14.3796 8.52098 16.2328 6.75326 18.5 6.75326C20.7672 6.75326 22.6204 8.52098 22.75 10.75H14.25Z',
  d19: 'M14.7541 3.74795C14.7541 3.01397 14.9653 2.32987 15.3299 1.75235C14.2798 1.4261 13.1602 1.25 12 1.25C6.10029 1.25 1.25 5.80369 1.25 11.5C1.25 14.2189 2.36071 16.6855 4.16134 18.5143L3.25001 22.75L8.01735 21.0233C9.25046 21.4925 10.5948 21.75 12 21.75C17.726 21.75 22.4635 17.4605 22.7375 12H12.9258L13.0027 10.6774C13.1125 8.78884 14.176 7.15824 15.718 6.25544C15.1191 5.59174 14.7541 4.71296 14.7541 3.74795ZM7.00897 11H5V13H7.00897V11ZM11.0045 11H8.99551V13H11.0045V11Z',
};

export const IconBubbleChatUserStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-user-stroke-rounded IconBubbleChatUserStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatUserDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-user-duotone-rounded IconBubbleChatUserDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
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
    </TheIconWrapper>
  );
};

export const IconBubbleChatUserTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-user-twotone-rounded IconBubbleChatUserTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      </g>
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

export const IconBubbleChatUserSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-user-solid-rounded IconBubbleChatUserSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconBubbleChatUserBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-user-bulk-rounded IconBubbleChatUserBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconBubbleChatUserStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-user-stroke-sharp IconBubbleChatUserStrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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

export const IconBubbleChatUserSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-user-solid-sharp IconBubbleChatUserSolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfBubbleChatUser: TheIconSelfPack = {
  name: 'BubbleChatUser',
  StrokeRounded: IconBubbleChatUserStrokeRounded,
  DuotoneRounded: IconBubbleChatUserDuotoneRounded,
  TwotoneRounded: IconBubbleChatUserTwotoneRounded,
  SolidRounded: IconBubbleChatUserSolidRounded,
  BulkRounded: IconBubbleChatUserBulkRounded,
  StrokeSharp: IconBubbleChatUserStrokeSharp,
  SolidSharp: IconBubbleChatUserSolidSharp,
};