import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.5048 2C6.21213 2.24942 2 6.43482 2 11.5606C2 14.1004 3.03385 16.4082 4.72026 18.1208C5.09156 18.4979 5.33946 19.0131 5.23941 19.5433C5.07429 20.4103 4.7001 21.2189 4.1522 21.8929C5.59376 22.1611 7.0927 21.9196 8.3782 21.2359C8.83262 20.9943 9.05983 20.8734 9.22016 20.8489C9.3805 20.8244 9.61016 20.8676 10.0695 20.9538C10.7076 21.0737 11.3554 21.1337 12.005 21.1329C17.3782 21.1329 21.763 17.0792 22 11.9941',
  d2: 'M17.9992 2C16.7328 2 15.9117 2.8076 14.9405 3.10196C14.5456 3.22165 14.3482 3.2815 14.2683 3.36586C14.1884 3.45022 14.165 3.5735 14.1182 3.82005C13.6174 6.4584 14.712 8.89759 17.3222 9.84699C17.6027 9.949 17.7429 10 18.0006 10C18.2583 10 18.3986 9.94899 18.679 9.84698C21.2891 8.89758 22.3826 6.45839 21.8817 3.82005C21.8349 3.57346 21.8114 3.45016 21.7315 3.36579C21.6516 3.28143 21.4542 3.22162 21.0593 3.10199C20.0878 2.80766 19.2657 2 17.9992 2Z',
  d3: 'M11.9955 12H12.0045M8 12H8.00897',
  d4: 'M12 21.1334C17.5222 21.1334 22 16.8499 22 11.5667C22 10.253 21.7231 9.00118 21.2222 7.86161C20.6673 8.73541 19.8174 9.4329 18.679 9.84698C18.3986 9.94899 18.2583 10 18.0006 10C17.7429 10 17.6027 9.949 17.3222 9.84699C14.712 8.89759 13.6174 6.4584 14.1182 3.82005C14.165 3.5735 14.1884 3.45022 14.2683 3.36586C14.3482 3.2815 14.5456 3.22165 14.9405 3.10196C15.2406 3.01102 15.5263 2.87107 15.8153 2.72109C14.6395 2.25639 13.351 2 12 2C6.47778 2 2 6.28357 2 11.5667C2 14.1051 3.03333 16.4115 4.71889 18.1231C5.09 18.5 5.33778 19.0148 5.23778 19.5448C5.07275 20.4112 4.69874 21.2194 4.15111 21.893C5.59195 22.161 7.09014 21.9197 8.37499 21.2364C8.82918 20.9949 9.05627 20.8741 9.21653 20.8496C9.37678 20.8251 9.60633 20.8682 10.0654 20.9545C10.7032 21.0742 11.3507 21.1343 12 21.1334Z',
  d5: 'M16.027 1.76768C16.5525 1.50907 17.1965 1.25 17.9983 1.25C18.8001 1.25 19.4444 1.50906 19.97 1.76764C20.1484 1.8554 20.3028 1.93633 20.4432 2.00989C20.7534 2.17248 21.0154 2.3053 21.2963 2.3904C21.4761 2.44485 21.6433 2.4955 21.7742 2.54421C21.8865 2.58599 22.105 2.67049 22.2751 2.85C22.4251 3.0083 22.4959 3.18169 22.5364 3.31625C22.5697 3.42718 22.5978 3.57579 22.6176 3.68016C23.1751 6.61675 21.9472 9.45596 18.9345 10.5518C18.6613 10.6513 18.3902 10.75 17.9997 10.75C17.6092 10.75 17.3381 10.6513 17.065 10.5518C14.0523 9.45606 12.823 6.61704 13.3804 3.6802C13.4002 3.57585 13.4283 3.42725 13.4616 3.31634C13.5021 3.18179 13.5729 3.00842 13.7229 2.85012C13.8929 2.6706 14.1115 2.58607 14.2237 2.54428C14.3546 2.49555 14.5422 2.43869 14.722 2.38421C15.0027 2.29913 15.2441 2.17256 15.554 2.01001C15.6943 1.93644 15.8486 1.85549 16.027 1.76768Z',
  d6: 'M12.4719 1.25979C12.727 1.2704 12.8105 1.63324 12.6349 1.81861C12.3595 2.10943 12.2031 2.45933 12.1233 2.66042C12.0282 2.9001 11.9536 3.15969 11.9079 3.40048C11.2379 6.93043 12.7332 10.5717 16.5533 11.9615L16.5771 11.9701C16.8662 12.0756 17.3442 12.25 18.0008 12.25C18.6575 12.25 19.1355 12.0756 19.4245 11.9701L19.4483 11.9614C20.3105 11.6478 21.0542 11.2195 21.6812 10.7037C22.1349 10.3306 22.3617 10.144 22.5309 10.2189C22.7001 10.2938 22.7128 10.5546 22.7381 11.0762C22.746 11.2387 22.75 11.4022 22.75 11.5667C22.75 17.295 17.9048 21.8834 12 21.8834C11.3041 21.8842 10.6103 21.8199 9.92698 21.6916C9.68979 21.647 9.53909 21.6189 9.42696 21.6035C9.34334 21.5907 9.25931 21.6219 9.22775 21.6391C9.11322 21.6935 8.96068 21.7744 8.72714 21.8986C7.29542 22.6599 5.62504 22.93 4.01396 22.6303C3.75381 22.5819 3.5384 22.4 3.44713 22.1516C3.35586 21.9033 3.40224 21.6252 3.56917 21.4198C4.03697 20.8444 4.35863 20.1513 4.50088 19.4052C4.53937 19.2 4.45227 18.9213 4.18451 18.6493C2.36972 16.8065 1.25 14.3144 1.25 11.5667C1.25 5.83837 6.09523 1.24999 12 1.24999C12.1581 1.24999 12.3154 1.25328 12.4719 1.25979ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H8.00897C8.56126 13 9.00897 12.5523 9.00897 12C9.00897 11.4477 8.56126 11 8.00897 11H8ZM11.9955 11C11.4432 11 10.9955 11.4477 10.9955 12C10.9955 12.5523 11.4432 13 11.9955 13H12.0045C12.5568 13 13.0045 12.5523 13.0045 12C13.0045 11.4477 12.5568 11 12.0045 11H11.9955Z',
  d7: 'M12.6349 1.81862C12.8105 1.63325 12.727 1.27041 12.4719 1.2598C12.3154 1.25329 12.1581 1.25 12 1.25C6.09523 1.25 1.25 5.83838 1.25 11.5667C1.25 14.3144 2.36972 16.8065 4.18451 18.6494C4.45227 18.9213 4.53937 19.2 4.50088 19.4052C4.35863 20.1513 4.03697 20.8445 3.56917 21.4199C3.40224 21.6252 3.35586 21.9033 3.44713 22.1517C3.5384 22.4 3.75381 22.5819 4.01396 22.6303C5.62504 22.93 7.29542 22.66 8.72714 21.8986C8.96068 21.7744 9.11322 21.6935 9.22775 21.6391C9.25931 21.6219 9.34334 21.5907 9.42696 21.6036C9.53909 21.6189 9.68979 21.647 9.92698 21.6916C10.6103 21.8199 11.3041 21.8843 12 21.8834C17.9048 21.8834 22.75 17.295 22.75 11.5667C22.75 11.4023 22.746 11.2387 22.7381 11.0762C22.7128 10.5547 22.7001 10.2939 22.5309 10.2189C22.3617 10.144 22.1349 10.3306 21.6812 10.7037C21.0542 11.2195 20.3105 11.6478 19.4483 11.9614L19.4245 11.9701C19.1355 12.0756 18.6575 12.25 18.0008 12.25C17.3442 12.25 16.8662 12.0756 16.5771 11.9701L16.5533 11.9615C12.7332 10.5717 11.2379 6.93044 11.9079 3.40049C11.9536 3.1597 12.0282 2.90011 12.1233 2.66043C12.2031 2.45934 12.3595 2.10944 12.6349 1.81862Z',
  d8: 'M7 12C7 11.4477 7.44772 11 8 11H8.00897C8.56126 11 9.00897 11.4477 9.00897 12C9.00897 12.5523 8.56126 13 8.00897 13H8C7.44772 13 7 12.5523 7 12ZM10.9955 12C10.9955 11.4477 11.4432 11 11.9955 11H12.0045C12.5568 11 13.0045 11.4477 13.0045 12C13.0045 12.5523 12.5568 13 12.0045 13H11.9955C11.4432 13 10.9955 12.5523 10.9955 12Z',
  d9: 'M11.9911 12H12.0001M7.99561 12H8.00458',
  d10: 'M12.056 2C6.50221 2 2 6.25513 2 11.5041C2 14.1818 3.16811 16.5119 5.02152 18.2923L4.01471 21.9874C4.01249 21.9955 4.02079 22.0026 4.02853 21.9991L8.02753 20.2149C9.26091 20.7251 10.6235 21.0082 12.056 21.0082C17.0722 21.0082 22 17.0872 22 11.5092',
  d11: 'M17.9948 2C16.5859 2 15.5905 3.22436 14.2053 3.22076C13.4334 6.42192 14.7838 8.80903 17.1795 9.74779C17.4593 9.84979 17.739 10 17.9962 10C18.2533 10 18.3932 9.949 18.6731 9.847C21.6802 8.75094 22.4153 5.89782 21.7738 3.21595C20.493 3.21595 19.2585 2 17.9948 2Z',
  d12: 'M15.8022 1.91299C16.3589 1.62386 17.0787 1.25 18 1.25C18.9252 1.25 19.6458 1.62455 20.2031 1.91425L20.2419 1.9344C20.8367 2.2433 21.2584 2.45 21.7836 2.45H22.3707L22.5117 3.01997C22.9717 4.88057 22.7533 6.63196 21.9626 8.02105C21.1694 9.41434 19.8274 10.3929 18.1498 10.7349L18 10.7655L17.8502 10.7349C16.1727 10.3929 14.8306 9.41434 14.0375 8.02105C13.2468 6.63196 13.0283 4.88057 13.4884 3.01997L13.6293 2.45H14.2165C14.7428 2.45 15.1663 2.24296 15.7612 1.93427L15.8022 1.91299Z',
  d13: 'M12 1.25C12.2127 1.25 12.424 1.25592 12.6338 1.26759L12.2747 2.71992C11.7485 4.84791 11.9807 6.93498 12.9509 8.63942C13.9274 10.3549 15.5795 11.5478 17.6002 11.9597L17.9997 12.0412L18.3993 11.9597C20.0968 11.6137 21.5342 10.7165 22.5295 9.42137C22.674 10.0919 22.75 10.787 22.75 11.5C22.75 17.1963 17.8997 21.75 12 21.75C10.5948 21.75 9.25046 21.4925 8.01735 21.0233L3.25001 22.75L4.16134 18.5143C2.36071 16.6855 1.25 14.2189 1.25 11.5C1.25 5.80369 6.10029 1.25 12 1.25ZM8.00897 11H6V13H8.00897V11ZM12.0045 11H9.99551V13H12.0045V11Z',
} as const;

export const IconBubbleChatSecureStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-secure-stroke-rounded IconBubbleChatSecureStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBubbleChatSecureDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-secure-duotone-rounded IconBubbleChatSecureDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBubbleChatSecureTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-secure-twotone-rounded IconBubbleChatSecureTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBubbleChatSecureSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-secure-solid-rounded IconBubbleChatSecureSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatSecureBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-secure-bulk-rounded IconBubbleChatSecureBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBubbleChatSecureStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-secure-stroke-sharp IconBubbleChatSecureStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatSecureSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-secure-solid-sharp IconBubbleChatSecureSolidSharp"
    >
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

export const iconPackOfBubbleChatSecure: TheIconSelfPack = {
  name: 'BubbleChatSecure',
  StrokeRounded: IconBubbleChatSecureStrokeRounded,
  DuotoneRounded: IconBubbleChatSecureDuotoneRounded,
  TwotoneRounded: IconBubbleChatSecureTwotoneRounded,
  SolidRounded: IconBubbleChatSecureSolidRounded,
  BulkRounded: IconBubbleChatSecureBulkRounded,
  StrokeSharp: IconBubbleChatSecureStrokeSharp,
  SolidSharp: IconBubbleChatSecureSolidSharp,
};