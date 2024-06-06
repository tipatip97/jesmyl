import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.9999 2.0492C12.671 2.01795 12.3374 2.00195 11.9999 2.00195C6.47766 2.00195 1.99988 6.28552 1.99988 11.5687C1.99988 14.1071 3.03321 16.4135 4.71877 18.1251C5.08988 18.502 5.33766 19.0168 5.23766 19.5468C5.07263 20.4132 4.69862 21.2214 4.15099 21.895C5.59183 22.163 7.09002 21.9217 8.37487 21.2384C8.82906 20.9969 9.05615 20.8761 9.21641 20.8516C9.37666 20.8271 9.60621 20.8702 10.0653 20.9565C10.7031 21.0762 11.3506 21.1363 11.9999 21.1354C16.8299 21.1354 21.0652 17.8585 21.9999 13.502',
  d2: 'M11.9954 12.002H12.0044M7.99988 12.002H8.00885',
  d3: 'M16.754 5.16996L16.754 3.78081C16.754 3.57562 16.7626 3.36788 16.836 3.17627C17.0314 2.66623 17.549 1.99805 18.4913 1.99805C19.4337 1.99805 19.9716 2.66623 20.167 3.17627C20.2404 3.36788 20.249 3.57562 20.249 3.78081L20.249 5.16996M16.8233 10.9878H20.2C21.1941 10.9878 22 10.1819 22 9.18779V7.18818C22 6.19407 21.1941 5.38818 20.2 5.38818H16.8233C15.8292 5.38818 15.0233 6.19407 15.0233 7.18818V9.18779C15.0233 10.1819 15.8292 10.9878 16.8233 10.9878Z',
  d4: 'M11.9999 21.1334C17.5221 21.1334 21.9999 16.8499 21.9999 11.5667C21.9999 10.9952 21.9475 10.4354 21.847 9.89139C21.6646 10.3278 21.3331 10.6738 20.9196 10.8573C20.598 11 20.1903 11 19.3749 11H17.6249C16.8095 11 16.4018 11 16.0802 10.8573C15.6514 10.667 15.3107 10.302 15.1331 9.84253C14.9999 9.49796 14.9999 9.06114 14.9999 8.1875C14.9999 7.31386 14.9999 6.87704 15.1331 6.53247C15.3107 6.07304 15.6514 5.70803 16.0802 5.51773C16.4018 5.375 16.8095 5.375 17.6249 5.375H16.7499V3.6875C16.7499 3.5133 16.7773 3.34526 16.8281 3.18717C15.3967 2.43061 13.7508 2 11.9999 2C6.47766 2 1.99988 6.28357 1.99988 11.5667C1.99988 14.1051 3.03321 16.4115 4.71877 18.1231C5.08988 18.5 5.33766 19.0148 5.23766 19.5448C5.07263 20.4112 4.69862 21.2194 4.15099 21.893C5.59183 22.161 7.09002 21.9197 8.37487 21.2364C8.82906 20.9949 9.05615 20.8741 9.21641 20.8496C9.37666 20.8251 9.60621 20.8682 10.0653 20.9545C10.7031 21.0742 11.3506 21.1343 11.9999 21.1334Z',
  d5: 'M19.6229 5.375C19.6228 5.37494 19.6229 5.37506 19.6229 5.375H19.3749C19.4622 5.375 19.5446 5.37483 19.6229 5.375Z',
  d6: 'M12.9999 2.04725C12.671 2.016 12.3374 2 11.9999 2C6.47766 2 1.99988 6.28357 1.99988 11.5667C1.99988 14.1051 3.03321 16.4115 4.71877 18.1231C5.08988 18.5 5.33766 19.0148 5.23766 19.5448C5.07263 20.4112 4.69862 21.2194 4.15099 21.893C5.59183 22.161 7.09002 21.9197 8.37487 21.2364C8.82906 20.9949 9.05615 20.8741 9.21641 20.8496C9.37666 20.8251 9.60621 20.8682 10.0653 20.9545C10.7031 21.0742 11.3506 21.1343 11.9999 21.1334C16.8299 21.1334 21.0652 17.8565 21.9999 13.5',
  d7: 'M16.754 5.17191V3.78276C16.754 3.57757 16.7626 3.36983 16.836 3.17822C17.0314 2.66818 17.549 2 18.4913 2C19.4337 2 19.9716 2.66818 20.167 3.17822C20.2404 3.36983 20.249 3.57757 20.249 3.78276V5.17191M16.8233 10.9897H20.2C21.1941 10.9897 22 10.1839 22 9.18974V7.19013C22 6.19602 21.1941 5.39013 20.2 5.39013H16.8233C15.8292 5.39013 15.0233 6.19602 15.0233 7.19013V9.18974C15.0233 10.1839 15.8292 10.9897 16.8233 10.9897Z',
  d8: 'M11.9954 12H12.0044M7.99988 12H8.00885',
  d9: 'M16.754 5.38949V3.78081C16.754 3.57562 16.7626 3.36788 16.836 3.17627C17.0314 2.66623 17.549 1.99805 18.4913 1.99805C19.4337 1.99805 19.9716 2.66623 20.167 3.17627C20.2404 3.36788 20.249 3.57562 20.249 3.78081L20.2693 5.38949M16.8233 10.9878H20.2C21.1941 10.9878 22 10.1819 22 9.18779V7.18818C22 6.19407 21.1941 5.38818 20.2 5.38818H16.8233C15.8292 5.38818 15.0233 6.19407 15.0233 7.18818V9.18779C15.0233 10.1819 15.8292 10.9878 16.8233 10.9878Z',
  d10: 'M21 4.74918V3.6875C21 2.31583 19.8548 1.25 18.5 1.25C17.1452 1.25 16 2.31583 16 3.6875V4.74918C15.9249 4.77196 15.8502 4.79929 15.7761 4.8322C15.1559 5.10744 14.6789 5.62765 14.4337 6.26203C14.3278 6.53595 14.2871 6.81726 14.2682 7.11392C14.25 7.39939 14.25 7.74715 14.25 8.16389V8.2111C14.25 8.62784 14.25 8.97561 14.2682 9.26108C14.2871 9.55774 14.3278 9.83905 14.4337 10.113C14.6789 10.7474 15.1559 11.2676 15.7761 11.5428C16.0484 11.6637 16.3272 11.7093 16.6128 11.7302C16.8844 11.75 17.2134 11.75 17.5989 11.75H19.4011C19.7866 11.75 20.1156 11.75 20.3872 11.7302C20.6728 11.7093 20.9516 11.6637 21.2239 11.5428C21.8441 11.2676 22.3211 10.7474 22.5663 10.113C22.6722 9.83905 22.7129 9.55774 22.7318 9.26108C22.75 8.97561 22.75 8.62785 22.75 8.2111V8.16392C22.75 7.74717 22.75 7.39939 22.7318 7.11392C22.7129 6.81726 22.6722 6.53595 22.5663 6.26203C22.3211 5.62765 21.8441 5.10744 21.2239 4.8322C21.1498 4.79929 21.0751 4.77196 21 4.74918ZM17.5 3.6875C17.5 3.19521 17.9218 2.75 18.5 2.75C19.0782 2.75 19.5 3.19521 19.5 3.6875V4.62501H17.5V3.6875Z',
  d11: 'M14.8229 1.70386C14.7564 1.58269 14.6024 1.55049 14.2944 1.4861C13.5543 1.33141 12.7866 1.24999 12 1.24999C6.09523 1.24999 1.25 5.83838 1.25 11.5667C1.25 14.3144 2.36971 16.8065 4.18451 18.6494C4.45227 18.9213 4.53937 19.2 4.50088 19.4052C4.35863 20.1513 4.03697 20.8445 3.56917 21.4198C3.40224 21.6252 3.35586 21.9033 3.44713 22.1516C3.5384 22.4 3.75381 22.5819 4.01396 22.6303C5.62504 22.93 7.29542 22.66 8.72713 21.8986C8.96068 21.7744 9.11322 21.6935 9.22775 21.6391C9.25931 21.6219 9.34333 21.5907 9.42696 21.6036C9.53909 21.6189 9.68979 21.647 9.92698 21.6916C10.6103 21.8199 11.3041 21.8843 12 21.8834C17.2579 21.8834 21.6756 18.2453 22.5805 13.4038L22.5805 13.4038C22.6323 13.1265 22.6583 12.9879 22.6305 12.911C22.5887 12.7957 22.5044 12.729 22.3825 12.715C22.3013 12.7057 22.145 12.7751 21.8324 12.9138C21.3373 13.1336 20.8656 13.1992 20.4966 13.2262C20.1695 13.2501 19.7934 13.25 19.4375 13.25H17.5625C17.2066 13.25 16.8305 13.2501 16.5034 13.2262C16.1344 13.1992 15.6627 13.1336 15.1676 12.9138C14.1643 12.4686 13.415 11.6378 13.0346 10.6539C12.8502 10.1769 12.7946 9.7239 12.7712 9.3564C12.75 9.02271 12.75 8.51738 12.75 8.12909C12.75 7.7408 12.75 7.35227 12.7712 7.01859C12.7946 6.65109 12.8502 6.19806 13.0346 5.72113C13.2879 5.06582 13.705 4.47842 14.2517 4.0276C14.3776 3.92379 14.4405 3.87188 14.469 3.81361C14.4976 3.75533 14.4998 3.67885 14.5043 3.5259C14.5206 2.96958 14.5829 2.63456 14.6847 2.36552C14.8211 2.0052 14.8893 1.82504 14.8229 1.70386ZM7.49609 11C6.94381 11 6.49609 11.4477 6.49609 12C6.49609 12.5523 6.94381 13 7.49609 13H7.50507C8.05735 13 8.50507 12.5523 8.50507 12C8.50507 11.4477 8.05735 11 7.50507 11H7.49609ZM11.4916 11C10.9393 11 10.4916 11.4477 10.4916 12C10.4916 12.5523 10.9393 13 11.4916 13H11.5006C12.0529 13 12.5006 12.5523 12.5006 12C12.5006 11.4477 12.0529 11 11.5006 11H11.4916Z',
  d12: 'M14.2944 1.48611C14.6024 1.5505 14.7564 1.5827 14.8229 1.70387C14.8893 1.82504 14.8211 2.0052 14.6847 2.36553C14.5829 2.63456 14.5206 2.96959 14.5043 3.5259C14.4998 3.67886 14.4976 3.75534 14.469 3.81361C14.4405 3.87189 14.3776 3.9238 14.2517 4.02761C13.705 4.47842 13.2879 5.06583 13.0346 5.72114C12.8502 6.19807 12.7946 6.6511 12.7712 7.01859C12.75 7.35228 12.75 7.7408 12.75 8.1291C12.75 8.51739 12.75 9.02272 12.7712 9.35641C12.7946 9.7239 12.8502 10.1769 13.0346 10.6539C13.415 11.6378 14.1643 12.4686 15.1676 12.9138C15.6627 13.1336 16.1344 13.1992 16.5034 13.2262C16.8305 13.2501 17.2066 13.25 17.5625 13.25H19.4375C19.7934 13.25 20.1695 13.2501 20.4966 13.2262C20.8656 13.1992 21.3373 13.1336 21.8324 12.9138C22.145 12.7751 22.3013 12.7057 22.3825 12.715C22.5044 12.729 22.5887 12.7957 22.6305 12.911C22.6583 12.9879 22.6323 13.1265 22.5805 13.4038C21.6756 18.2453 17.2579 21.8834 12 21.8834C11.3041 21.8843 10.6103 21.8199 9.92698 21.6916C9.68979 21.647 9.53909 21.6189 9.42696 21.6036C9.34334 21.5907 9.25931 21.6219 9.22775 21.6391C9.11322 21.6935 8.96068 21.7744 8.72714 21.8986C7.29542 22.66 5.62504 22.93 4.01396 22.6303C3.75381 22.5819 3.5384 22.4 3.44713 22.1517C3.35586 21.9033 3.40224 21.6252 3.56917 21.4199C4.03697 20.8445 4.35863 20.1513 4.50088 19.4052C4.53937 19.2 4.45227 18.9213 4.18451 18.6494C2.36972 16.8065 1.25 14.3144 1.25 11.5667C1.25 5.83838 6.09523 1.25 12 1.25C12.7866 1.25 13.5543 1.33142 14.2944 1.48611Z',
  d13: 'M6.49609 12C6.49609 11.4477 6.94381 11 7.49609 11H7.50507C8.05735 11 8.50507 11.4477 8.50507 12C8.50507 12.5523 8.05735 13 7.50507 13H7.49609C6.94381 13 6.49609 12.5523 6.49609 12ZM10.4916 12C10.4916 11.4477 10.9393 11 11.4916 11H11.5006C12.0529 11 12.5006 11.4477 12.5006 12C12.5006 12.5523 12.0529 13 11.5006 13H11.4916C10.9393 13 10.4916 12.5523 10.4916 12Z',
  d14: 'M20.4997 5.5V4C20.4997 2.89543 19.604 2 18.499 2C17.3941 2 16.4984 2.89543 16.4984 4V5.5M14.9979 5.5H22.0001V11H14.9979V5.5Z',
  d15: 'M11.9923 12H12.0013M7.99548 12H8.00446',
  d16: 'M13.9116 2.17603C7.02115 0.988541 1.99988 5.99859 1.99988 11.4989C1.99988 14.178 3.15241 16.5092 4.98112 18.2904L3.98773 21.9874C3.98554 21.9955 3.99373 22.0026 4.00137 21.9991L7.94705 20.214C9.16398 20.7245 10.5084 21.0077 11.9218 21.0077C16.4896 21.0077 20.2783 18.1211 21.4999 13.9731',
  d17: 'M18.5 1.25C16.9812 1.25 15.75 2.48122 15.75 4V4.75H14.25V11.75H22.75V4.75H21.25V4C21.25 2.48122 20.0188 1.25 18.5 1.25ZM19.75 4V4.75H17.25V4C17.25 3.30964 17.8096 2.75 18.5 2.75C19.1904 2.75 19.75 3.30964 19.75 4Z',
  d18: 'M13 13H22.6361C21.8731 17.9752 17.3715 21.75 12 21.75C10.5948 21.75 9.25046 21.4925 8.01735 21.0233L3.25001 22.75L4.16134 18.5143C2.36071 16.6855 1.25 14.2189 1.25 11.5C1.25 5.80369 6.10029 1.25 12 1.25C13.1179 1.25 14.1982 1.4135 15.2149 1.7173C14.8541 2.23546 14.6129 2.84299 14.5309 3.5H13V13ZM7.00897 11H5V13H7.00897V11ZM11.0045 11H8.99551V13H11.0045V11Z',
};

export const IconBubbleChatLockStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-lock-stroke-rounded IconBubbleChatLockStrokeRounded"
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

export const IconBubbleChatLockDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-lock-duotone-rounded IconBubbleChatLockDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatLockTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-lock-twotone-rounded IconBubbleChatLockTwotoneRounded"
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatLockSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-lock-solid-rounded IconBubbleChatLockSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleChatLockBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-lock-bulk-rounded IconBubbleChatLockBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBubbleChatLockStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-lock-stroke-sharp IconBubbleChatLockStrokeSharp"
    >
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

export const IconBubbleChatLockSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-chat-lock-solid-sharp IconBubbleChatLockSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfBubbleChatLock: TheIconSelfPack = {
  name: 'BubbleChatLock',
  StrokeRounded: IconBubbleChatLockStrokeRounded,
  DuotoneRounded: IconBubbleChatLockDuotoneRounded,
  TwotoneRounded: IconBubbleChatLockTwotoneRounded,
  SolidRounded: IconBubbleChatLockSolidRounded,
  BulkRounded: IconBubbleChatLockBulkRounded,
  StrokeSharp: IconBubbleChatLockStrokeSharp,
  SolidSharp: IconBubbleChatLockSolidSharp,
};