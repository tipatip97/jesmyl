import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 11.5V5.11397C22 4.32299 22 3.92751 21.8059 3.51966C21.6952 3.28705 21.443 2.97064 21.241 2.81079C20.8868 2.53051 20.5912 2.46281 20 2.3274C19.0803 2.11675 18.0659 2 17 2C15.0829 2 13.3325 2.37764 12 3C10.6675 3.62236 8.91707 4 7 4C5.93408 4 4.91969 3.88325 4 3.6726C3.04003 3.45273 2 4.12914 2 5.11397V15.886C2 16.677 2 17.0725 2.19412 17.4803C2.30483 17.7129 2.55696 18.0294 2.75898 18.1892C3.11319 18.4695 3.4088 18.5372 4 18.6726C4.91969 18.8833 5.93408 19 7 19C8.46884 19 9.83983 18.7783 11 18.3947',
  d2: 'M14.5 10.5C14.5 11.8807 13.3807 13 12 13C10.6193 13 9.5 11.8807 9.5 10.5C9.5 9.11929 10.6193 8 12 8C13.3807 8 14.5 9.11929 14.5 10.5Z',
  d3: 'M5.5 11.5L5.5 11.509',
  d4: 'M18.5 9.49219L18.5 9.50117',
  d5: 'M19.3333 14L20.1565 14.7579C20.3357 14.934 20.4253 15.0221 20.3938 15.0969C20.3622 15.1717 20.2355 15.1717 19.9821 15.1717H16.8777C15.2884 15.1717 14 16.438 14 18C14 18.3521 14.0655 18.6891 14.185 19M16.6667 22L15.8435 21.2421C15.6643 21.066 15.5747 20.9779 15.6062 20.9031C15.6378 20.8283 15.7645 20.8283 16.0179 20.8283H19.1223C20.7116 20.8283 22 19.562 22 18C22 17.6479 21.9345 17.3109 21.815 17',
  d6: 'M12 18C10.6675 18.6224 8.91707 19 7 19C5.93408 19 4.91969 18.8833 4 18.6726C2.49957 18.3289 2 17.4264 2 15.886V5.11397C2 4.12914 3.04003 3.45273 4 3.6726C4.91969 3.88325 5.93408 4 7 4C8.91707 4 10.6675 3.62236 12 3C13.3325 2.37764 15.0829 2 17 2C18.0659 2 19.0803 2.11675 20 2.3274C21.5817 2.68968 22 3.62036 22 5.11397V15.886C22 16.1513 21.9245 16.3942 21.7955 16.6032C21.4329 15.5344 20.6096 15 19.5 15H16.8777C15.5161 15 14.3754 15.9858 14.0765 17.3102C13.3124 17.4799 12.6121 17.7141 12 18ZM12 8C13.3807 8 14.5 9.11929 14.5 10.5C14.5 11.8807 13.3807 13 12 13C10.6193 13 9.5 11.8807 9.5 10.5C9.5 9.11929 10.6193 8 12 8Z',
  d7: 'M16.875 1.125C14.8665 1.125 13.0048 1.51954 11.5576 2.19546C10.3398 2.76427 8.70065 3.125 6.875 3.125C5.863 3.125 4.90489 3.01407 4.04245 2.81653C2.716 2.51272 1.125 3.42178 1.125 4.98897V15.761C1.125 16.5966 1.25742 17.3832 1.69144 18.0238C2.14024 18.6861 2.83189 19.0781 3.70755 19.2787C4.68449 19.5024 5.75516 19.625 6.875 19.625C8.34085 19.625 9.72849 19.4149 10.9339 19.0385C11.21 18.9523 11.3481 18.9092 11.407 18.8182C11.4659 18.7273 11.4392 18.5031 11.3856 18.0547C11.3786 17.9958 11.375 17.9358 11.375 17.875C11.375 14.8897 13.8256 12.5467 16.7527 12.5467H16.7583C16.9112 12.5467 16.9876 12.5467 17.0482 12.5183C17.1087 12.4899 17.1673 12.4194 17.2845 12.2784C17.3118 12.2456 17.34 12.2134 17.3691 12.1817C18.3043 11.1659 19.8859 11.1006 20.9016 12.0358C20.9095 12.0431 20.9173 12.0504 20.925 12.0578L22.0626 13.1511C22.1175 13.2038 22.1682 13.2606 22.2144 13.3209L22.2176 13.3251C22.3196 13.458 22.625 13.3856 22.625 13.2181V4.98897C22.625 4.19212 22.5178 3.40953 22.0968 2.76245C21.6575 2.08717 20.9595 1.68137 20.0424 1.47133C19.0655 1.24757 17.9948 1.125 16.875 1.125ZM14.875 10.375C14.875 12.0319 13.5319 13.375 11.875 13.375C10.2181 13.375 8.875 12.0319 8.875 10.375C8.875 8.71815 10.2181 7.375 11.875 7.375C13.5319 7.375 14.875 8.71815 14.875 10.375ZM6.375 11.375C6.375 10.8227 5.92728 10.375 5.375 10.375C4.82272 10.375 4.375 10.8227 4.375 11.375V11.384C4.375 11.9363 4.82272 12.384 5.375 12.384C5.92728 12.384 6.375 11.9363 6.375 11.384V11.375ZM18.375 8.36719C18.9273 8.36719 19.375 8.8149 19.375 9.36719V9.37617C19.375 9.92845 18.9273 10.3762 18.375 10.3762C17.8227 10.3762 17.375 9.92845 17.375 9.37617V9.36719C17.375 8.8149 17.8227 8.36719 18.375 8.36719Z',
  d8: 'M18.4727 13.1977C18.8467 12.7914 19.4794 12.7652 19.8857 13.1393L21.0233 14.2326C21.0918 14.3221 21.4349 14.7798 21.1903 15.3603C20.9494 15.9318 20.3924 16.0128 20.2838 16.0278C20.1439 16.0473 19.9815 16.047 19.883 16.0468L16.7527 16.0467C15.6993 16.0467 14.875 16.8815 14.875 17.875C14.875 18.4273 14.4273 18.875 13.875 18.875C13.3227 18.875 12.875 18.4273 12.875 17.875C12.875 15.7444 14.6275 14.0467 16.7527 14.0467H18.2231C18.1718 13.751 18.2536 13.4356 18.4727 13.1977Z',
  d9: 'M21.875 16.875C22.4273 16.875 22.875 17.3227 22.875 17.875C22.875 20.0056 21.1225 21.7033 18.9973 21.7033H17.5269C17.5782 21.999 17.4964 22.3145 17.2773 22.5523C16.9033 22.9586 16.2706 22.9848 15.8643 22.6107L14.7267 21.5174C14.6582 21.4279 14.3151 20.9702 14.5597 20.3897C14.8006 19.8182 15.3576 19.7373 15.4662 19.7222C15.606 19.7027 15.7685 19.7031 15.867 19.7033H15.867L18.9973 19.7033C20.0507 19.7033 20.875 18.8685 20.875 17.875C20.875 17.3227 21.3227 16.875 21.875 16.875Z',
  d10: 'M11.5576 2.19546C13.0048 1.51954 14.8665 1.125 16.875 1.125C17.9948 1.125 19.0655 1.24757 20.0424 1.47133C20.9595 1.68137 21.6575 2.08717 22.0968 2.76245C22.5178 3.40953 22.625 4.19212 22.625 4.98897V13.2181C22.625 13.3856 22.3196 13.458 22.2176 13.3251L22.2144 13.3209C22.1682 13.2606 22.1175 13.2038 22.0626 13.1511L20.925 12.0578C20.9173 12.0504 20.9095 12.0431 20.9016 12.0358C19.8859 11.1006 18.3043 11.1659 17.3691 12.1817C17.34 12.2134 17.3118 12.2456 17.2845 12.2784C17.1673 12.4194 17.1087 12.4899 17.0482 12.5183C16.9876 12.5467 16.9112 12.5467 16.7583 12.5467H16.7527C13.8256 12.5467 11.375 14.8897 11.375 17.875C11.375 17.9358 11.3786 17.9958 11.3856 18.0547C11.4392 18.5031 11.4659 18.7273 11.407 18.8182C11.3481 18.9092 11.21 18.9523 10.9339 19.0385C9.72849 19.4149 8.34085 19.625 6.875 19.625C5.75516 19.625 4.68449 19.5024 3.70755 19.2787C2.83189 19.0781 2.14024 18.6861 1.69144 18.0238C1.25742 17.3832 1.125 16.5966 1.125 15.761V4.98897C1.125 3.42178 2.716 2.51272 4.04245 2.81653C4.90489 3.01407 5.863 3.125 6.875 3.125C8.70065 3.125 10.3398 2.76427 11.5576 2.19546Z',
  d11: 'M11.875 13.375C13.5319 13.375 14.875 12.0319 14.875 10.375C14.875 8.71815 13.5319 7.375 11.875 7.375C10.2181 7.375 8.875 8.71815 8.875 10.375C8.875 12.0319 10.2181 13.375 11.875 13.375ZM5.375 10.375C5.92728 10.375 6.375 10.8227 6.375 11.375V11.384C6.375 11.9363 5.92728 12.384 5.375 12.384C4.82272 12.384 4.375 11.9363 4.375 11.384V11.375C4.375 10.8227 4.82272 10.375 5.375 10.375ZM19.375 9.36719C19.375 8.8149 18.9273 8.36719 18.375 8.36719C17.8227 8.36719 17.375 8.8149 17.375 9.36719V9.37617C17.375 9.92845 17.8227 10.3762 18.375 10.3762C18.9273 10.3762 19.375 9.92845 19.375 9.37617V9.36719Z',
  d12: 'M11.9931 17.9872C10.6612 18.6091 8.91158 18.9864 6.99535 18.9864C5.9299 18.9864 4.49646 18.9864 1.99756 17.9872V2.99966C4.49646 3.99883 5.9299 3.99883 6.99535 3.99883C8.91158 3.99883 10.6612 3.6215 11.9931 2.99966C13.3251 2.37782 15.0747 2.00049 16.9909 2.00049C19.9896 2.00049 21.9887 2.99966 21.9887 2.99966V10.993',
  d13: 'M14.4919 10.4935C14.4919 11.8731 13.3731 12.9915 11.993 12.9915C10.6129 12.9915 9.49414 11.8731 9.49414 10.4935C9.49414 9.11397 10.6129 7.99561 11.993 7.99561C13.3731 7.99561 14.4919 9.11397 14.4919 10.4935Z',
  d14: 'M5.49609 11.4927V11.5017',
  d15: 'M18.4902 9.48633V9.49531',
  d16: 'M20.498 12.9912L21.9945 14.9852V15.4876H14.989C14.9835 15.4876 14.979 15.492 14.979 15.4976V17.4947M16.5053 21.9994L14.979 19.9815V19.4809L21.9923 19.498C21.9978 19.498 22.0023 19.4935 22.0023 19.488V17.4947',
  d17: 'M21.3976 11.2471L22.75 13.0468V2.03745C22.75 2.03745 21.2956 1.41257 20.831 1.27983C19.9028 1.01461 18.5827 0.750977 17 0.750977C14.9915 0.750977 13.1298 1.14552 11.6826 1.82144C10.4648 2.39024 8.82565 2.75098 7 2.75098L6.98161 2.75098C5.97319 2.75101 4.64464 2.75106 2.27854 1.80462L1.25 1.3932V18.0088L1.72146 18.1973C4.34095 19.2451 5.87882 19.251 7 19.251C9.00849 19.251 10.8702 18.8564 12.3174 18.1805C12.4562 18.1157 12.6005 18.0535 12.75 17.9943V16.2957C12.75 15.0531 13.7574 14.0457 15 14.0457H17.7058L21.3976 11.2471ZM12 6.75098C10.2051 6.75098 8.75 8.20605 8.75 10.001C8.75 11.7959 10.2051 13.251 12 13.251C13.7949 13.251 15.25 11.7959 15.25 10.001C15.25 8.20605 13.7949 6.75098 12 6.75098ZM6.5 10.001V12.01H4.5V10.001H6.5ZM19.5 10.0021V7.99316H17.5V10.0021H19.5Z',
  d18: 'M21.0996 13.3486L22.75 15.5449V17.047H15.75V18.2992H14.25V16.297C14.25 15.8828 14.5858 15.547 15 15.547H20.8752L19.9004 14.2498L21.0996 13.3486ZM22.75 18.2992L22.75 20.2992C22.75 20.4981 22.671 20.6889 22.5303 20.8295C22.3897 20.9702 22.1989 21.0492 22 21.0492H16.125L17.1 22.3492L15.9 23.2492L14.25 21.0492V19.5492H21.25L21.25 18.2992L22.75 18.2992Z',
};

export const IconMoneyExchange02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-exchange-02-stroke-rounded IconMoneyExchange02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyExchange02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-exchange-02-duotone-rounded IconMoneyExchange02DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyExchange02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-exchange-02-twotone-rounded IconMoneyExchange02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyExchange02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-exchange-02-solid-rounded IconMoneyExchange02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyExchange02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-exchange-02-bulk-rounded IconMoneyExchange02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyExchange02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-exchange-02-stroke-sharp IconMoneyExchange02StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
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

export const IconMoneyExchange02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-exchange-02-solid-sharp IconMoneyExchange02SolidSharp"
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

export const iconPackOfMoneyExchange02: TheIconSelfPack = {
  name: 'MoneyExchange02',
  StrokeRounded: IconMoneyExchange02StrokeRounded,
  DuotoneRounded: IconMoneyExchange02DuotoneRounded,
  TwotoneRounded: IconMoneyExchange02TwotoneRounded,
  SolidRounded: IconMoneyExchange02SolidRounded,
  BulkRounded: IconMoneyExchange02BulkRounded,
  StrokeSharp: IconMoneyExchange02StrokeSharp,
  SolidSharp: IconMoneyExchange02SolidSharp,
};