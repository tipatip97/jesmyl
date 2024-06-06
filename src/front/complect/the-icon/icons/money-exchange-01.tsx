import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.3333 14L20.1565 14.7579C20.3357 14.934 20.4253 15.0221 20.3938 15.0969C20.3622 15.1717 20.2355 15.1717 19.9821 15.1717H16.8777C15.2884 15.1717 14 16.438 14 18C14 18.3521 14.0655 18.6891 14.185 19M16.6667 22L15.8435 21.2421C15.6643 21.066 15.5747 20.9779 15.6062 20.9031C15.6378 20.8283 15.7645 20.8283 16.0179 20.8283H19.1223C20.7116 20.8283 22 19.562 22 18C22 17.6479 21.9345 17.3109 21.815 17',
  d2: 'M21.9913 11.5C22 10.8993 22 10.7355 22 10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10C2 13.7712 2 15.6569 3.17157 16.8284C4.34315 18 6.22876 18 10 18H11',
  d3: 'M18.5 10H18.491',
  d4: 'M5.5 10H5.49102',
  d5: 'M14.5 10C14.5 11.3807 13.3807 12.5 12 12.5C10.6193 12.5 9.5 11.3807 9.5 10C9.5 8.61929 10.6193 7.5 12 7.5C13.3807 7.5 14.5 8.61929 14.5 10Z',
  d6: 'M2 10C2 6.46252 2 4.69377 3.0528 3.5129C3.22119 3.32403 3.40678 3.14935 3.60746 2.99087C4.86213 2 6.74142 2 10.5 2H13.5C17.2586 2 19.1379 2 20.3925 2.99087C20.5932 3.14935 20.7788 3.32403 20.9472 3.5129C22 4.69377 22 6.46252 22 10C22 12.9451 22 14.6642 21.3925 15.8388C20.9555 15.2796 20.3026 15 19.5 15H16.8777C15.2884 15 14 16.3431 14 17.9999L10.5 18C6.74142 18 4.86213 18 3.60746 17.0091C3.40678 16.8506 3.22119 16.676 3.0528 16.4871C2 15.3062 2 13.5375 2 10ZM12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z',
  d7: 'M17.8444 1.2536C16.7058 1.12498 15.2615 1.12499 13.4225 1.125H13.4225H10.3275H10.3275C8.48845 1.12499 7.04417 1.12498 5.90558 1.2536C4.74342 1.38488 3.801 1.65862 3.01763 2.27729C2.78311 2.46249 2.56568 2.66705 2.36798 2.8888C1.70181 3.63601 1.40432 4.54169 1.26263 5.65285C1.12498 6.73227 1.12499 8.09825 1.125 9.82225V9.82226V9.92773V9.92774C1.12499 11.6517 1.12498 13.0177 1.26263 14.0972C1.40432 15.2083 1.70181 16.114 2.36798 16.8612C2.56568 17.0829 2.78311 17.2875 3.01763 17.4727C3.801 18.0914 4.74342 18.3651 5.90558 18.4964C7.04417 18.625 8.48845 18.625 10.3275 18.625H10.7278C11.0298 18.625 11.1808 18.625 11.2632 18.5586C11.2832 18.5425 11.2925 18.5332 11.3086 18.5132C11.375 18.4308 11.375 18.2456 11.375 17.875C11.375 14.8897 13.8256 12.5467 16.7527 12.5467H16.7583C16.9112 12.5467 16.9876 12.5467 17.0482 12.5183C17.1087 12.4899 17.1673 12.4194 17.2845 12.2784C17.3118 12.2456 17.34 12.2134 17.3691 12.1817C18.3043 11.1659 19.8859 11.1006 20.9017 12.0358C20.9095 12.043 20.9173 12.0504 20.925 12.0578L22.0626 13.1511C22.1175 13.2038 22.1682 13.2605 22.2144 13.3209L22.2176 13.3251C22.3176 13.4555 22.556 13.4055 22.5664 13.2415C22.625 12.3193 22.625 11.2249 22.625 9.92775V9.82225C22.625 8.09825 22.625 6.73227 22.4874 5.65285C22.3457 4.54169 22.0482 3.63601 21.382 2.8888C21.1843 2.66705 20.9669 2.46249 20.7324 2.27729C19.949 1.65862 19.0066 1.38488 17.8444 1.2536ZM11.875 12.875C13.5319 12.875 14.875 11.5319 14.875 9.875C14.875 8.21815 13.5319 6.875 11.875 6.875C10.2181 6.875 8.875 8.21815 8.875 9.875C8.875 11.5319 10.2181 12.875 11.875 12.875ZM6.37617 9.875C6.37617 9.32271 5.92845 8.875 5.37617 8.875H5.36719C4.8149 8.875 4.36719 9.32271 4.36719 9.875C4.36719 10.4273 4.8149 10.875 5.36719 10.875H5.37617C5.92845 10.875 6.37617 10.4273 6.37617 9.875Z',
  d8: 'M18.4727 13.1977C18.8467 12.7914 19.4794 12.7652 19.8857 13.1393L21.0233 14.2326C21.0918 14.3221 21.4349 14.7798 21.1903 15.3603C20.9494 15.9318 20.3924 16.0128 20.2838 16.0278C20.1439 16.0473 19.9815 16.047 19.883 16.0468L16.7527 16.0467C15.6993 16.0467 14.875 16.8815 14.875 17.875C14.875 18.4273 14.4273 18.875 13.875 18.875C13.3227 18.875 12.875 18.4273 12.875 17.875C12.875 15.7444 14.6275 14.0467 16.7527 14.0467H18.2231C18.1718 13.751 18.2536 13.4356 18.4727 13.1977Z',
  d9: 'M21.875 16.875C22.4273 16.875 22.875 17.3227 22.875 17.875C22.875 20.0056 21.1225 21.7033 18.9973 21.7033H17.5269C17.5782 21.999 17.4964 22.3145 17.2773 22.5523C16.9033 22.9586 16.2706 22.9848 15.8643 22.6107L14.7267 21.5174C14.6582 21.4279 14.3151 20.9702 14.5597 20.3897C14.8006 19.8182 15.3576 19.7373 15.4662 19.7222C15.606 19.7027 15.7685 19.7031 15.867 19.7033H15.867L18.9973 19.7033C20.0507 19.7033 20.875 18.8685 20.875 17.875C20.875 17.3227 21.3227 16.875 21.875 16.875Z',
  d10: 'M17.8444 1.2536C16.7058 1.12498 15.2615 1.12499 13.4225 1.125H10.3275C8.48846 1.12499 7.04417 1.12498 5.90558 1.2536C4.74342 1.38488 3.801 1.65862 3.01763 2.27729C2.78311 2.46249 2.56568 2.66705 2.36798 2.8888C1.70181 3.63601 1.40432 4.54169 1.26263 5.65285C1.12498 6.73227 1.12499 8.09826 1.125 9.82226V9.92773C1.12499 11.6517 1.12498 13.0177 1.26263 14.0972C1.40432 15.2083 1.70181 16.114 2.36798 16.8612C2.56568 17.0829 2.78311 17.2875 3.01763 17.4727C3.801 18.0914 4.74342 18.3651 5.90558 18.4964C7.04417 18.625 8.48845 18.625 10.3275 18.625H10.7278C11.0298 18.625 11.1808 18.625 11.2632 18.5586C11.2832 18.5425 11.2925 18.5332 11.3086 18.5132C11.375 18.4308 11.375 18.2456 11.375 17.875C11.375 14.8897 13.8256 12.5467 16.7527 12.5467H16.7583C16.9112 12.5467 16.9876 12.5467 17.0482 12.5183C17.1087 12.4899 17.1673 12.4194 17.2845 12.2784C17.3118 12.2456 17.34 12.2134 17.3691 12.1817C18.3043 11.1659 19.8859 11.1006 20.9017 12.0358C20.9095 12.043 20.9173 12.0504 20.925 12.0578L22.0626 13.1511C22.1175 13.2038 22.1682 13.2605 22.2144 13.3209L22.2176 13.3251C22.3176 13.4555 22.556 13.4055 22.5664 13.2415C22.625 12.3193 22.625 11.2249 22.625 9.92775V9.82225C22.625 8.09825 22.625 6.73227 22.4874 5.65285C22.3457 4.54169 22.0482 3.63601 21.382 2.8888C21.1843 2.66705 20.9669 2.46249 20.7324 2.27729C19.949 1.65862 19.0066 1.38488 17.8444 1.2536Z',
  d11: 'M11.875 12.875C13.5319 12.875 14.875 11.5319 14.875 9.875C14.875 8.21815 13.5319 6.875 11.875 6.875C10.2181 6.875 8.875 8.21815 8.875 9.875C8.875 11.5319 10.2181 12.875 11.875 12.875Z',
  d12: 'M5.37617 8.875C5.92845 8.875 6.37617 9.32271 6.37617 9.875C6.37617 10.4273 5.92845 10.875 5.37617 10.875H5.36719C4.8149 10.875 4.36719 10.4273 4.36719 9.875C4.36719 9.32271 4.8149 8.875 5.36719 8.875H5.37617Z',
  d13: 'M22 9.99756V1.99756H2V17.9976H12',
  d14: 'M18.5002 9.99756H18.4912',
  d15: 'M5.50019 9.99756H5.49121',
  d16: 'M14.5 9.99756C14.5 11.3783 13.3807 12.4976 12 12.4976C10.6193 12.4976 9.5 11.3783 9.5 9.99756C9.5 8.61685 10.6193 7.49756 12 7.49756C13.3807 7.49756 14.5 8.61685 14.5 9.99756Z',
  d17: 'M20.4951 12.9868L21.9923 14.9824V15.4852H14.9836C14.9781 15.4852 14.9736 15.4897 14.9736 15.4952V17.494M16.5006 22.0024L14.9736 19.9829V19.4819L21.99 19.499C21.9956 19.499 22 19.4945 22 19.489V17.494',
  d18: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V12.5458L21.3976 10.7461L17.6756 13.5447H15C13.7574 13.5447 12.75 14.5521 12.75 15.7947L12.75 18.75H2C1.58579 18.75 1.25 18.4142 1.25 18V2ZM17.491 11H19.5V9H17.491V11ZM6.5 11H4.49102V9H6.5V11ZM12 6.75C10.2051 6.75 8.75 8.20507 8.75 10C8.75 11.7949 10.2051 13.25 12 13.25C13.7949 13.25 15.25 11.7949 15.25 10C15.25 8.20507 13.7949 6.75 12 6.75Z',
  d19: 'M21.0996 12.8477L22.75 15.0439V16.546H15.75V17.7982H14.25V15.796C14.25 15.3818 14.5858 15.046 15 15.046H20.8752L19.9004 13.7488L21.0996 12.8477ZM22.75 17.7982V19.7982C22.75 20.2124 22.4142 20.5482 22 20.5482H16.125L17.1 21.8482L15.9 22.7482L14.25 20.5482V19.0482H21.25V17.7982H22.75Z',
} as const;

export const IconMoneyExchange01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-exchange-01-stroke-rounded IconMoneyExchange01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMoneyExchange01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-exchange-01-duotone-rounded IconMoneyExchange01DuotoneRounded"
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
        strokeLinejoin="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconMoneyExchange01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-exchange-01-twotone-rounded IconMoneyExchange01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconMoneyExchange01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-exchange-01-solid-rounded IconMoneyExchange01SolidRounded"
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

export const IconMoneyExchange01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-exchange-01-bulk-rounded IconMoneyExchange01BulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
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

export const IconMoneyExchange01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-exchange-01-stroke-sharp IconMoneyExchange01StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyExchange01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="money-exchange-01-solid-sharp IconMoneyExchange01SolidSharp"
    >
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

export const iconPackOfMoneyExchange01: TheIconSelfPack = {
  name: 'MoneyExchange01',
  StrokeRounded: IconMoneyExchange01StrokeRounded,
  DuotoneRounded: IconMoneyExchange01DuotoneRounded,
  TwotoneRounded: IconMoneyExchange01TwotoneRounded,
  SolidRounded: IconMoneyExchange01SolidRounded,
  BulkRounded: IconMoneyExchange01BulkRounded,
  StrokeSharp: IconMoneyExchange01StrokeSharp,
  SolidSharp: IconMoneyExchange01SolidSharp,
};