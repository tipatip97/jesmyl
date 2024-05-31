import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.9349 13.9453L18.2646 10.2968C17.9751 8.72096 17.8303 7.93303 17.257 7.46651C16.6837 7 15.8602 7 14.2132 7H9.78685C8.1398 7 7.31628 7 6.74298 7.46651C6.16968 7.93303 6.02492 8.72096 5.73538 10.2968L5.06506 13.9453C4.46408 17.2162 4.16359 18.8517 5.08889 19.9259C6.01419 21 7.72355 21 11.1423 21H12.8577C16.2765 21 17.9858 21 18.9111 19.9259C19.8364 18.8517 19.5359 17.2162 18.9349 13.9453Z',
  d2: 'M10.4375 16.6667L10.4375 11.3333M12 11.3333V10M12 18V16.6667M10.4375 14H13.5625M13.5625 14C14.0803 14 14.5 14.4477 14.5 15V15.6667C14.5 16.219 14.0803 16.6667 13.5625 16.6667H9.5M13.5625 14C14.0803 14 14.5 13.5523 14.5 13V12.3333C14.5 11.781 14.0803 11.3333 13.5625 11.3333H9.5',
  d3: 'M21 11C21.1568 10.9209 21.2931 10.8212 21.4142 10.6955C22 10.0875 22 9.10893 22 7.15176C22 5.1946 22 4.21602 21.4142 3.60801C20.8284 3 19.8856 3 18 3L6 3C4.11438 3 3.17157 3 2.58579 3.60801C2 4.21602 2 5.1946 2 7.15176C2 9.10893 2 10.0875 2.58579 10.6955C2.70688 10.8212 2.84322 10.9209 3 11',
  d4: 'M6 3H18C19.8856 3 20.8284 3 21.4142 3.60801C22 4.21602 22 5.1946 22 7.15176C22 9.10893 22 10.0875 21.4142 10.6955C21.2931 10.8212 21.1568 10.9209 21 11H18.3938L18.2646 10.2968C17.9751 8.72096 17.8303 7.93303 17.257 7.46651C16.6837 7 15.8602 7 14.2132 7H9.78685C8.1398 7 7.31628 7 6.74298 7.46651C6.16968 7.93303 6.02492 8.72096 5.73538 10.2968L5.60619 11H3C2.84322 10.9209 2.70688 10.8212 2.58579 10.6955C2 10.0875 2 9.10892 2 7.15176C2 5.1946 2 4.21602 2.58579 3.60801C3.17157 3 4.11438 3 6 3Z',
  d5: 'M5.93712 2.25C5.95963 2.25 5.98221 2.25001 6.00488 2.25001L18.0628 2.25C18.9468 2.24995 19.7124 2.2499 20.3261 2.33562C20.9883 2.4281 21.6192 2.63711 22.1269 3.16449C22.6295 3.68654 22.8237 4.32619 22.9103 4.99561C22.9919 5.62545 22.9918 6.41383 22.9918 7.33739L22.9918 7.40177C22.9918 7.65439 22.994 7.89711 22.9961 8.12825C23.0016 8.73073 23.0063 9.25455 22.9695 9.67014C22.9123 10.3154 22.7444 10.9158 22.2364 11.4435C21.8534 11.8414 21.2203 11.8535 20.8225 11.4704C20.4246 11.0874 20.4125 10.4544 20.7956 10.0565C20.8729 9.97616 20.9429 9.88104 20.9773 9.4935C21.005 9.18046 21.0016 8.8066 20.9967 8.267C20.9944 8.01749 20.9918 7.73253 20.9918 7.40177C20.9918 6.39595 20.9898 5.73847 20.9269 5.25232C20.8672 4.79115 20.7688 4.63751 20.686 4.55155C20.6084 4.47092 20.4757 4.37592 20.0495 4.3164C19.5905 4.25229 18.9664 4.25001 17.9951 4.25001L6.00488 4.25001C5.0335 4.25001 4.40942 4.25229 3.95045 4.31639C3.52427 4.37592 3.39151 4.47092 3.31389 4.55154C3.23113 4.63751 3.13273 4.79115 3.07304 5.25232C3.01012 5.73847 3.00815 6.39595 3.00815 7.40177C3.00815 7.73426 3.0055 8.02045 3.00318 8.27087C2.99819 8.80852 2.99474 9.18135 3.02234 9.49383C3.05658 9.88147 3.12657 9.97636 3.2037 10.0565C3.58672 10.4544 3.57468 11.0874 3.17679 11.4704C2.77891 11.8535 2.14586 11.8414 1.76284 11.4435C1.25466 10.9156 1.08709 10.315 1.0301 9.66981C0.993469 9.25515 0.998266 8.73244 1.00378 8.13142C1.00591 7.89931 1.00815 7.65552 1.00815 7.40177C1.00815 7.38023 1.00815 7.35877 1.00815 7.33738C1.0081 6.41382 1.00807 5.62545 1.08959 4.99561C1.17623 4.32619 1.37047 3.68654 1.87303 3.16449C2.38072 2.63711 3.01162 2.4281 3.67381 2.33562C4.28757 2.2499 5.05309 2.24995 5.93712 2.25Z',
  d6: 'M14.1978 6.25H14.1978H14.1977H9.80295H9.80292H9.80289C9.04206 6.24998 8.40264 6.24996 7.8864 6.31403C7.339 6.38197 6.84047 6.53059 6.40946 6.89146C5.97845 7.25232 5.74449 7.71697 5.58139 8.24389C5.42756 8.74085 5.31517 9.37033 5.18145 10.1193L5.18145 10.1193L5.18145 10.1193L4.51121 13.8727L4.51121 13.8727L4.51121 13.8727C4.22812 15.4578 4.00137 16.7275 3.96588 17.7329C3.92921 18.7716 4.08886 19.6676 4.70822 20.4073C5.32758 21.1471 6.18153 21.4618 7.21049 21.6082C8.20645 21.75 9.49622 21.75 11.1065 21.75H11.1065H12.8942H12.8942C14.5044 21.75 15.7942 21.75 16.7902 21.6082C17.8191 21.4618 18.6731 21.1471 19.2925 20.4073C19.9118 19.6676 20.0715 18.7716 20.0348 17.7329C19.9993 16.7275 19.7726 15.4579 19.4895 13.8727L19.4895 13.8727L19.4895 13.8726L18.8192 10.1193L18.8192 10.1193L18.8192 10.1193C18.6855 9.37031 18.5731 8.74084 18.4193 8.24389C18.2562 7.71697 18.0222 7.25232 17.5912 6.89146C17.1602 6.53059 16.6617 6.38197 16.1143 6.31403C15.598 6.24996 14.9586 6.24998 14.1978 6.25ZM12.75 10C12.75 9.58579 12.4142 9.25 12 9.25C11.5858 9.25 11.25 9.58579 11.25 10V10.5833H9.5C9.08579 10.5833 8.75 10.9191 8.75 11.3333C8.75 11.7475 9.08579 12.0833 9.5 12.0833H9.6875V15.9167H9.5C9.08579 15.9167 8.75 16.2525 8.75 16.6667C8.75 17.0809 9.08579 17.4167 9.5 17.4167H11.25V18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V17.4167H13.5625C14.5393 17.4167 15.25 16.5868 15.25 15.6667V15C15.25 14.6376 15.1398 14.2892 14.9465 14C15.1398 13.7108 15.25 13.3624 15.25 13V12.3333C15.25 11.4132 14.5393 10.5833 13.5625 10.5833H12.75V10ZM11.1875 13.25V12.0833H13.5625C13.6212 12.0833 13.75 12.1489 13.75 12.3333V13C13.75 13.1844 13.6212 13.25 13.5625 13.25H11.1875ZM11.1875 14.75H13.5625C13.6212 14.75 13.75 14.8156 13.75 15V15.6667C13.75 15.8511 13.6212 15.9167 13.5625 15.9167H11.1875V14.75Z',
  d7: 'M14.1978 6.25C14.9586 6.24997 15.598 6.24995 16.1143 6.31403C16.6617 6.38197 17.1602 6.53059 17.5912 6.89146C18.0222 7.25232 18.2562 7.71696 18.4193 8.24389C18.5731 8.74084 18.6855 9.37032 18.8192 10.1193L18.8192 10.1193L19.4895 13.8726L19.4895 13.8727C19.7726 15.4579 19.9993 16.7275 20.0348 17.7329C20.0715 18.7716 19.9118 19.6676 19.2925 20.4073C18.6731 21.1471 17.8191 21.4618 16.7902 21.6082C15.7942 21.75 14.5044 21.75 12.8942 21.75H12.8942H11.1065H11.1065C9.49622 21.75 8.20645 21.75 7.21049 21.6082C6.18153 21.4618 5.32758 21.1471 4.70822 20.4073C4.08886 19.6676 3.92921 18.7716 3.96588 17.7329C4.00137 16.7275 4.22812 15.4578 4.51121 13.8727L4.51121 13.8727L5.18145 10.1193L5.18145 10.1193C5.31517 9.37033 5.42756 8.74084 5.58139 8.24389C5.74449 7.71696 5.97845 7.25232 6.40946 6.89146C6.84047 6.53059 7.339 6.38197 7.8864 6.31403C8.40265 6.24995 9.04207 6.24997 9.80292 6.25H9.80295H14.1977H14.1978Z',
  d8: 'M12 9.25C12.4142 9.25 12.75 9.58579 12.75 10V10.5833H13.5625C14.5393 10.5833 15.25 11.4132 15.25 12.3333V13C15.25 13.3624 15.1398 13.7108 14.9465 14C15.1398 14.2892 15.25 14.6376 15.25 15V15.6667C15.25 16.5868 14.5393 17.4167 13.5625 17.4167H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.4167H9.5C9.08579 17.4167 8.75 17.0809 8.75 16.6667C8.75 16.2525 9.08579 15.9167 9.5 15.9167H9.6875L9.6875 12.0833H9.5C9.08579 12.0833 8.75 11.7475 8.75 11.3333C8.75 10.9191 9.08579 10.5833 9.5 10.5833H11.25V10C11.25 9.58579 11.5858 9.25 12 9.25ZM11.1875 12.0833V13.25H13.5625C13.6212 13.25 13.75 13.1844 13.75 13V12.3333C13.75 12.1489 13.6212 12.0833 13.5625 12.0833H11.1875ZM13.5625 14.75H11.1875L11.1875 15.9167H13.5625C13.6212 15.9167 13.75 15.8511 13.75 15.6667V15C13.75 14.8156 13.6212 14.75 13.5625 14.75Z',
  d9: 'M19 21L18 7H6L5 21H19Z',
  d10: 'M20 11H22V3H2V11H4',
  d11: 'M1 3.25C1 2.69772 1.44772 2.25 2 2.25H22C22.5523 2.25 23 2.69772 23 3.25V11.25C23 11.8023 22.5523 12.25 22 12.25H20V10.25H21V4.25H3V10.25H4V12.25H2C1.44772 12.25 1 11.8023 1 11.25V3.25Z',
  d12: 'M6 6.25C5.60652 6.25 5.27994 6.55409 5.25191 6.94656L4.25191 20.9466C4.23707 21.1542 4.30923 21.3587 4.4511 21.5111C4.59298 21.6635 4.79181 21.75 5 21.75H19C19.2082 21.75 19.407 21.6635 19.5489 21.5111C19.6908 21.3587 19.7629 21.1542 19.7481 20.9466L18.7481 6.94656C18.7201 6.55409 18.3935 6.25 18 6.25H6ZM12.75 10.5833V9.25H11.25V10.5833H8.75V12.0833H9.6875V15.9167H8.75V17.4167H11.25V18.75H12.75V17.4167H13.5625C14.5393 17.4167 15.25 16.5868 15.25 15.6667V15C15.25 14.6376 15.1398 14.2892 14.9465 14C15.1398 13.7108 15.25 13.3624 15.25 13V12.3333C15.25 11.4132 14.5393 10.5833 13.5625 10.5833H12.75ZM11.1875 13.25V12.0833H13.5625C13.6212 12.0833 13.75 12.1489 13.75 12.3333V13C13.75 13.1844 13.6212 13.25 13.5625 13.25H11.1875ZM11.1875 14.75H13.5625C13.6212 14.75 13.75 14.8156 13.75 15V15.6667C13.75 15.8511 13.6212 15.9167 13.5625 15.9167H11.1875V14.75Z',
} as const;

export const IconBitcoinWithdrawStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-withdraw-stroke-rounded IconBitcoinWithdrawStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinWithdrawDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-withdraw-duotone-rounded IconBitcoinWithdrawDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinWithdrawTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-withdraw-twotone-rounded IconBitcoinWithdrawTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinWithdrawSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-withdraw-solid-rounded IconBitcoinWithdrawSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBitcoinWithdrawBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-withdraw-bulk-rounded IconBitcoinWithdrawBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconBitcoinWithdrawStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-withdraw-stroke-sharp IconBitcoinWithdrawStrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinWithdrawSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-withdraw-solid-sharp IconBitcoinWithdrawSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfBitcoinWithdraw: TheIconSelfPack = {
  name: 'BitcoinWithdraw',
  StrokeRounded: IconBitcoinWithdrawStrokeRounded,
  DuotoneRounded: IconBitcoinWithdrawDuotoneRounded,
  TwotoneRounded: IconBitcoinWithdrawTwotoneRounded,
  SolidRounded: IconBitcoinWithdrawSolidRounded,
  BulkRounded: IconBitcoinWithdrawBulkRounded,
  StrokeSharp: IconBitcoinWithdrawStrokeSharp,
  SolidSharp: IconBitcoinWithdrawSolidSharp,
};