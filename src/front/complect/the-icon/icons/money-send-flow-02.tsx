import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19 19C19.3437 18.9498 19.6777 18.887 20 18.8125C20.5912 18.676 20.8868 18.6077 21.241 18.3251C21.443 18.1639 21.6952 17.8448 21.8059 17.6103C22 17.199 22 16.8002 22 16.0026V5.14011C22 4.14701 20.96 3.46492 20 3.68664C19.0803 3.89906 18.0659 4.01679 17 4.01679C15.0829 4.01679 13.3325 3.63598 12 3.00839C10.6675 2.38081 8.91707 2 7 2C5.93408 2 4.91969 2.11773 4 2.33014C3.4088 2.46669 3.11319 2.53497 2.75898 2.81759C2.55696 2.97878 2.30483 3.29786 2.19412 3.53242C2 3.94368 2 4.34249 2 5.14011V16.0026C2 16.9957 3.04003 17.6778 4 17.456C4.32232 17.3816 4.65627 17.3188 5 17.2686',
  d2: 'M14.5 10.5C14.5 9.11929 13.3807 8 12 8C10.6193 8 9.5 9.11929 9.5 10.5C9.5 11.8807 10.6193 13 12 13C13.3807 13 14.5 11.8807 14.5 10.5Z',
  d3: 'M5.5 9.5L5.5 9.49102',
  d4: 'M18.5 11.5078L18.5 11.4988',
  d5: 'M12 22V18M8 19L8 17M16 21V19',
  d6: 'M7 2C8.91707 2 10.6675 2.37764 12 3C13.3325 3.62236 15.0829 4 17 4C18.0659 4 19.0803 3.88325 20 3.6726C20.96 3.45273 22 4.12914 22 5.11397V15.886C22 17.3796 21.5817 18.3103 20 18.6726C19.0803 18.8833 18.0659 19 17 19C15.0829 19 13.3325 18.6224 12 18C10.6675 17.3776 8.91707 17 7 17C5.93408 17 4.91969 17.1167 4 17.3274C3.04003 17.5473 2 16.8709 2 15.886V5.11397C2 3.57363 2.49957 2.67106 4 2.3274C4.91969 2.11675 5.93408 2 7 2ZM12 8C13.3807 8 14.5 9.11929 14.5 10.5C14.5 11.8807 13.3807 13 12 13C10.6193 13 9.5 11.8807 9.5 10.5C9.5 9.11929 10.6193 8 12 8Z',
  d7: 'M7 1.125C9.00849 1.125 10.8702 1.51954 12.3174 2.19546C13.5352 2.76427 15.1744 3.125 17 3.125C18.012 3.125 18.9701 3.01407 19.8326 2.81653C21.159 2.51272 22.75 3.42178 22.75 4.98897V15.761C22.75 16.5966 22.6176 17.3832 22.1836 18.0238C21.7348 18.6861 21.0431 19.0781 20.1674 19.2787C19.841 19.3534 19.5042 19.4169 19.1585 19.4683C18.8583 19.5129 18.7082 19.5352 18.6041 19.4454C18.5 19.3557 18.5 19.1993 18.5 18.8867V18.8749C18.5 17.4942 17.3807 16.3749 16 16.3749C15.6771 16.3749 15.3685 16.4361 15.0852 16.5475C14.6936 16.7016 14.4979 16.7786 14.4047 16.7553C14.3116 16.7321 14.1751 16.5722 13.9022 16.2526L13.9022 16.2526C13.4436 15.7154 12.7616 15.3749 12 15.3749C11.6771 15.3749 11.3685 15.4361 11.0852 15.5475C10.6936 15.7016 10.4979 15.7786 10.4047 15.7553C10.3115 15.7321 10.1751 15.5722 9.90218 15.2526C9.44364 14.7154 8.76159 14.3749 8 14.3749C6.61929 14.3749 5.5 15.4942 5.5 16.8749V17.1721C5.5 17.4245 5.5 17.5507 5.42794 17.6349C5.35588 17.7191 5.22682 17.7393 4.9687 17.7797C4.69375 17.8227 4.42629 17.8742 4.16745 17.9335C2.841 18.2373 1.25 17.3282 1.25 15.761V4.98897C1.25 4.19212 1.35722 3.40953 1.77818 2.76245C2.21749 2.08717 2.9155 1.68137 3.83255 1.47133C4.80949 1.24757 5.88016 1.125 7 1.125ZM9 10.375C9 12.0319 10.3431 13.375 12 13.375C13.6569 13.375 15 12.0319 15 10.375C15 8.71815 13.6569 7.375 12 7.375C10.3431 7.375 9 8.71815 9 10.375ZM17.5 11.375C17.5 10.8227 17.9477 10.375 18.5 10.375C19.0523 10.375 19.5 10.8227 19.5 11.375V11.384C19.5 11.9363 19.0523 12.384 18.5 12.384C17.9477 12.384 17.5 11.9363 17.5 11.384V11.375ZM5.5 8.36719C4.94772 8.36719 4.5 8.8149 4.5 9.36719V9.37617C4.5 9.92845 4.94772 10.3762 5.5 10.3762C6.05228 10.3762 6.5 9.92845 6.5 9.37617V9.36719C6.5 8.8149 6.05228 8.36719 5.5 8.36719Z',
  d8: 'M8 15.875C8.55228 15.875 9 16.3227 9 16.875V18.875C9 19.4273 8.55228 19.875 8 19.875C7.44772 19.875 7 19.4273 7 18.875L7 16.875C7 16.3227 7.44772 15.875 8 15.875ZM12 16.875C12.5523 16.875 13 17.3227 13 17.875V21.875C13 22.4273 12.5523 22.875 12 22.875C11.4477 22.875 11 22.4273 11 21.875V17.875C11 17.3227 11.4477 16.875 12 16.875ZM16 17.875C16.5523 17.875 17 18.3227 17 18.875V20.875C17 21.4273 16.5523 21.875 16 21.875C15.4477 21.875 15 21.4273 15 20.875V18.875C15 18.3227 15.4477 17.875 16 17.875Z',
  d9: 'M12.3174 2.19546C10.8702 1.51954 9.00849 1.125 7 1.125C5.88016 1.125 4.80949 1.24757 3.83255 1.47133C2.9155 1.68137 2.21749 2.08717 1.77818 2.76245C1.35722 3.40953 1.25 4.19212 1.25 4.98897V15.761C1.25 17.3282 2.841 18.2373 4.16745 17.9335C4.42629 17.8742 4.69375 17.8227 4.9687 17.7797C5.22682 17.7393 5.35588 17.7191 5.42794 17.6349C5.5 17.5507 5.5 17.4245 5.5 17.1721V16.8749C5.5 15.4942 6.61929 14.3749 8 14.3749C8.76159 14.3749 9.44364 14.7154 9.90218 15.2526C10.1751 15.5722 10.3115 15.7321 10.4047 15.7553C10.4979 15.7786 10.6936 15.7016 11.0852 15.5475C11.3685 15.4361 11.6771 15.3749 12 15.3749C12.7616 15.3749 13.4436 15.7154 13.9022 16.2526C14.1751 16.5722 14.3116 16.7321 14.4047 16.7553C14.4979 16.7786 14.6936 16.7016 15.0852 16.5475C15.3685 16.4361 15.6771 16.3749 16 16.3749C17.3807 16.3749 18.5 17.4942 18.5 18.8749V18.8867C18.5 19.1993 18.5 19.3557 18.6041 19.4454C18.7082 19.5352 18.8583 19.5129 19.1585 19.4683C19.5042 19.4169 19.841 19.3534 20.1674 19.2787C21.0431 19.0781 21.7348 18.6861 22.1836 18.0238C22.6176 17.3832 22.75 16.5966 22.75 15.761V4.98897C22.75 3.42178 21.159 2.51272 19.8326 2.81653C18.9701 3.01407 18.012 3.125 17 3.125C15.1744 3.125 13.5352 2.76427 12.3174 2.19546Z',
  d10: 'M12 13.375C10.3431 13.375 9 12.0319 9 10.375C9 8.71815 10.3431 7.375 12 7.375C13.6569 7.375 15 8.71815 15 10.375C15 12.0319 13.6569 13.375 12 13.375ZM18.5 10.375C17.9477 10.375 17.5 10.8227 17.5 11.375V11.384C17.5 11.9363 17.9477 12.384 18.5 12.384C19.0523 12.384 19.5 11.9363 19.5 11.384V11.375C19.5 10.8227 19.0523 10.375 18.5 10.375ZM4.5 9.36719C4.5 8.8149 4.94772 8.36719 5.5 8.36719C6.05228 8.36719 6.5 8.8149 6.5 9.36719V9.37617C6.5 9.92845 6.05228 10.3762 5.5 10.3762C4.94772 10.3762 4.5 9.92845 4.5 9.37617V9.36719Z',
  d11: 'M19 18.8509C20.8558 18.5721 22 18 22 18V3C22 3 20 4 17 4C15.0829 4 13.3325 3.62236 12 3C10.6675 2.37764 8.91707 2 7 2C5.93408 2 4.5 2 2 3V18C3.2305 17.5078 4.20276 17.2579 5 17.1309',
  d12: 'M2.27879 18.6964C3.80224 18.087 4.89556 17.87 5.75024 17.7927V16.5H10.2502V17.5H14.2502V18.5H18.2502V19.6951C19.283 19.6041 20.1597 19.413 20.8313 19.2211C21.2959 19.0884 21.6638 18.9548 21.9194 18.8526C22.0473 18.8015 22.1472 18.7581 22.2171 18.7265L22.7502 18.4635V1.78647L21.3623 2.45989C21.1491 2.54516 20.8296 2.66159 20.4192 2.77886C19.5975 3.01364 18.4176 3.25 17.0002 3.25C15.1746 3.25 13.5355 2.88927 12.3176 2.32046C10.8704 1.64454 9.00874 1.25 7.00024 1.25C5.87907 1.25 4.34119 1.25585 1.7217 2.30364L1.25024 2.49223V19.1078L2.27879 18.6964ZM12.0002 13.75C10.2053 13.75 8.75024 12.2949 8.75024 10.5C8.75024 8.70507 10.2053 7.25 12.0002 7.25C13.7952 7.25 15.2502 8.70507 15.2502 10.5C15.2502 12.2949 13.7952 13.75 12.0002 13.75ZM6.50024 10.5V8.49103H4.50024V10.5H6.50024ZM19.5002 10.4988V12.5078H17.5002V10.4988H19.5002Z',
  d13: 'M11.0005 18.75V22.75H13.0005V18.75H11.0005ZM15.0005 19.75V21.75H17.0005V19.75H15.0005ZM7.00049 17.75L7.00049 19.75H9.00049V17.75H7.00049Z',
};

export const IconMoneySendFlow02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-flow-02-stroke-rounded IconMoneySendFlow02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconMoneySendFlow02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-flow-02-duotone-rounded IconMoneySendFlow02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconMoneySendFlow02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-flow-02-twotone-rounded IconMoneySendFlow02TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySendFlow02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-flow-02-solid-rounded IconMoneySendFlow02SolidRounded"
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

export const IconMoneySendFlow02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-flow-02-bulk-rounded IconMoneySendFlow02BulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySendFlow02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-flow-02-stroke-sharp IconMoneySendFlow02StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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

export const IconMoneySendFlow02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-send-flow-02-solid-sharp IconMoneySendFlow02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfMoneySendFlow02: TheIconSelfPack = {
  name: 'MoneySendFlow02',
  StrokeRounded: IconMoneySendFlow02StrokeRounded,
  DuotoneRounded: IconMoneySendFlow02DuotoneRounded,
  TwotoneRounded: IconMoneySendFlow02TwotoneRounded,
  SolidRounded: IconMoneySendFlow02SolidRounded,
  BulkRounded: IconMoneySendFlow02BulkRounded,
  StrokeSharp: IconMoneySendFlow02StrokeSharp,
  SolidSharp: IconMoneySendFlow02SolidSharp,
};