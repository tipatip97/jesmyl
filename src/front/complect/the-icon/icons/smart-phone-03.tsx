import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.5 9C5.5 5.70017 5.5 4.05025 6.4519 3.02513C7.40381 2 8.93587 2 12 2C15.0641 2 16.5962 2 17.5481 3.02513C18.5 4.05025 18.5 5.70017 18.5 9V15C18.5 18.2998 18.5 19.9497 17.5481 20.9749C16.5962 22 15.0641 22 12 22C8.93587 22 7.40381 22 6.4519 20.9749C5.5 19.9497 5.5 18.2998 5.5 15V9Z',
  d2: 'M12 19H12.009',
  d3: 'M11 5H13',
  d4: 'M22 8.5C22 8.5 21 8.846 21 9.8125C21 10.779 22 11.0335 22 12C22 12.9665 21 13.221 21 14.1875C21 15.154 22 15.5 22 15.5',
  d5: 'M2 8.5C2 8.5 3 8.846 3 9.8125C3 10.779 2 11.0335 2 12C2 12.9665 3 13.221 3 14.1875C3 15.154 2 15.5 2 15.5',
  d6: 'M12.0512 1.25H12.0512C13.5331 1.24998 14.727 1.24996 15.6658 1.38588C16.6446 1.52761 17.4542 1.83022 18.0899 2.51479C18.7182 3.19147 18.9893 4.04001 19.1174 5.06664C19.2422 6.06622 19.2422 7.34214 19.2422 8.94771V15.0523C19.2422 16.6578 19.2422 17.9338 19.1174 18.9334C18.9893 19.96 18.7182 20.8085 18.0899 21.4852C17.4542 22.1698 16.6446 22.4724 15.6658 22.6141C14.727 22.75 13.5331 22.75 12.0512 22.75H11.9332C10.4513 22.75 9.25736 22.75 8.31858 22.6141C7.33976 22.4724 6.53017 22.1698 5.8945 21.4852C5.26615 20.8085 4.99512 19.96 4.86695 18.9334C4.74216 17.9338 4.74217 16.6579 4.74219 15.0523V15.0523V15.0523V8.94776V8.94775V8.94775C4.74217 7.34216 4.74216 6.06622 4.86695 5.06664C4.99512 4.04001 5.26615 3.19147 5.8945 2.51479C6.53017 1.83022 7.33976 1.52761 8.31858 1.38588C9.25735 1.24996 10.4512 1.24998 11.9332 1.25H11.9332H11.9332H12.0512H12.0512ZM10.9922 3.25C10.578 3.25 10.2422 3.58579 10.2422 4C10.2422 4.41421 10.578 4.75 10.9922 4.75H12.9922C13.4064 4.75 13.7422 4.41421 13.7422 4C13.7422 3.58579 13.4064 3.25 12.9922 3.25H10.9922ZM11.9877 18.75C11.4379 18.75 10.9922 19.1977 10.9922 19.75C10.9922 20.3023 11.4379 20.75 11.9877 20.75H11.9967C12.5465 20.75 12.9922 20.3023 12.9922 19.75C12.9922 19.1977 12.5465 18.75 11.9967 18.75H11.9877Z',
  d7: 'M23.1953 8.17329C23.3742 8.69027 23.1044 9.25392 22.592 9.44006L22.5906 9.44064C22.545 9.4638 22.4424 9.51922 22.3886 9.56385C22.2839 9.65063 22.2503 9.72109 22.2503 9.81277C22.2503 9.89874 22.2888 9.98573 22.5535 10.3088C22.7979 10.6057 23.2503 11.1551 23.2503 12.0003C23.2503 12.8455 22.7979 13.3948 22.5535 13.6917C22.2888 14.0148 22.2503 14.1018 22.2503 14.1878C22.2503 14.2795 22.2839 14.3499 22.3886 14.4367C22.4332 14.4686 22.536 14.5378 22.5906 14.5599L22.592 14.5605C23.1044 14.7466 23.3742 15.3103 23.1953 15.8273C23.0147 16.3492 22.4452 16.6259 21.9233 16.4453C21.5237 16.2698 21.3081 16.1389 21.1119 15.9762C20.7166 15.6484 20.2503 15.0626 20.2503 14.1878C20.2503 13.3426 20.7322 12.7573 20.9766 12.4604C21.2412 12.1373 21.2503 12.0862 21.2503 12.0003C21.2503 11.9143 21.2412 11.8632 20.9766 11.5401C20.7322 11.2432 20.2503 10.658 20.2503 9.81277C20.2503 8.93796 20.7166 8.35216 21.1119 8.02432C21.3081 7.86164 21.4999 7.74946 21.6418 7.67755L21.9233 7.55524C22.4452 7.37465 23.0147 7.65136 23.1953 8.17329Z',
  d8: 'M0.805242 8.17335C0.626367 8.69032 0.896157 9.25397 1.40851 9.44012L1.40991 9.44069C1.45559 9.46386 1.55812 9.51927 1.61194 9.56391C1.7166 9.65069 1.75027 9.72114 1.75027 9.81283C1.75027 9.8988 1.71172 9.98578 1.44709 10.3089C1.20262 10.6058 0.750272 11.1551 0.750272 12.0003C0.750272 12.8455 1.20262 13.3949 1.44709 13.6918C1.71172 14.0149 1.75027 14.1019 1.75027 14.1878C1.75027 14.2795 1.7166 14.35 1.61194 14.4368C1.56738 14.4686 1.46459 14.5379 1.40991 14.56L1.40851 14.5605C0.896159 14.7467 0.626367 15.3103 0.805242 15.8273C0.985829 16.3492 1.55533 16.6259 2.07725 16.4454C2.47684 16.2698 2.69242 16.139 2.8886 15.9763C3.28395 15.6484 3.75027 15.0626 3.75027 14.1878C3.75027 13.3426 3.26839 12.7574 3.02392 12.4605C2.7593 12.1374 2.75027 12.0863 2.75027 12.0003C2.75027 11.9144 2.7593 11.8633 3.02392 11.5402C3.26839 11.2433 3.75027 10.658 3.75027 9.81283C3.75027 8.93801 3.28395 8.35222 2.8886 8.02438C2.69242 7.8617 2.5006 7.74952 2.35878 7.67761L2.07725 7.5553C1.55533 7.37471 0.985829 7.65142 0.805242 8.17335Z',
  d9: 'M12.0512 1.25C13.5331 1.24998 14.727 1.24996 15.6658 1.38588C16.6446 1.52761 17.4542 1.83022 18.0899 2.51479C18.7182 3.19147 18.9893 4.04001 19.1174 5.06664C19.2422 6.06622 19.2422 7.34214 19.2422 8.94771V15.0523C19.2422 16.6578 19.2422 17.9338 19.1174 18.9334C18.9893 19.96 18.7182 20.8085 18.0899 21.4852C17.4542 22.1698 16.6446 22.4724 15.6658 22.6141C14.727 22.75 13.5331 22.75 12.0512 22.75H11.9332C10.4513 22.75 9.25736 22.75 8.31858 22.6141C7.33976 22.4724 6.53017 22.1698 5.8945 21.4852C5.26615 20.8085 4.99512 19.96 4.86695 18.9334C4.74216 17.9338 4.74217 16.6579 4.74219 15.0523V15.0523V8.94776V8.94775C4.74217 7.34217 4.74216 6.06622 4.86695 5.06664C4.99512 4.04001 5.26615 3.19147 5.8945 2.51479C6.53017 1.83022 7.33976 1.5276 8.31858 1.38588C9.25735 1.24996 10.4512 1.24998 11.9332 1.25H11.9332H12.0512H12.0512Z',
  d10: 'M10.9922 3.25C10.578 3.25 10.2422 3.58579 10.2422 4C10.2422 4.41421 10.578 4.75 10.9922 4.75H12.9922C13.4064 4.75 13.7422 4.41421 13.7422 4C13.7422 3.58579 13.4064 3.25 12.9922 3.25H10.9922Z',
  d11: 'M10.9922 19.75C10.9922 19.1977 11.4379 18.75 11.9877 18.75H11.9967C12.5465 18.75 12.9922 19.1977 12.9922 19.75C12.9922 20.3023 12.5465 20.75 11.9967 20.75H11.9877C11.4379 20.75 10.9922 20.3023 10.9922 19.75Z',
  d12: 'M18.5 2H5.5V22H18.5V2Z',
  d13: 'M10.5 5H13.5',
  d14: 'M4.75 2C4.75 1.58579 5.08579 1.25 5.5 1.25H18.5C18.9142 1.25 19.25 1.58579 19.25 2V22C19.25 22.4142 18.9142 22.75 18.5 22.75H5.5C5.08579 22.75 4.75 22.4142 4.75 22V2ZM11 18H13.009V20H11V18ZM10.5 4.75H13.5V3.25H10.5V4.75Z',
  d15: 'M21.7542 7.79151C21.7545 7.7914 21.7548 7.7913 22 8.50007C22.2452 9.20884 22.2455 9.20874 22.2458 9.20864L22.2464 9.20844L22.2475 9.20807L22.2493 9.2074L22.2522 9.2064C22.2526 9.20626 22.2529 9.20613 22.2532 9.20603C22.2539 9.20577 22.2542 9.20565 22.2541 9.20569L22.2445 9.20953C22.2326 9.2145 22.2109 9.22395 22.1829 9.23815C22.1252 9.26741 22.0504 9.31182 21.9787 9.3712C21.8378 9.48812 21.75 9.62299 21.75 9.81257C21.75 9.99786 21.8193 10.1125 22.0802 10.4311C22.0886 10.4413 22.0971 10.4517 22.1059 10.4624C22.3488 10.7579 22.75 11.2461 22.75 12.0001C22.75 12.7541 22.3488 13.2423 22.1059 13.5378C22.0971 13.5484 22.0886 13.5589 22.0802 13.569C21.8193 13.8877 21.75 14.0023 21.75 14.1876C21.75 14.3771 21.8378 14.512 21.9787 14.6289C22.0504 14.6883 22.1252 14.7327 22.1829 14.762C22.2109 14.7762 22.2326 14.7856 22.2445 14.7906L22.2541 14.7944C22.2542 14.7945 22.2536 14.7943 22.2522 14.7937L22.2493 14.7927L22.2475 14.7921L22.2464 14.7917L22.2458 14.7915C22.2455 14.7914 22.2452 14.7913 22 15.5001C21.7548 16.2088 21.7545 16.2087 21.7542 16.2086L21.7535 16.2084L21.7522 16.2079L21.7492 16.2069L21.7421 16.2044L21.7234 16.1974C21.7091 16.192 21.691 16.1849 21.6695 16.176C21.6268 16.1583 21.5703 16.1332 21.5046 16.0998C21.3748 16.034 21.1996 15.9315 21.0213 15.7836C20.6622 15.4859 20.25 14.9645 20.25 14.1876C20.25 13.4336 20.6512 12.9454 20.8941 12.6499C20.9029 12.6392 20.9114 12.6288 20.9198 12.6186C21.1807 12.3 21.25 12.1854 21.25 12.0001C21.25 11.8148 21.1807 11.7002 20.9198 11.3815C20.9114 11.3714 20.9029 11.3609 20.8941 11.3503C20.6512 11.0548 20.25 10.5666 20.25 9.81257C20.25 9.03565 20.6622 8.51427 21.0213 8.21656C21.1996 8.06863 21.3748 7.96614 21.5046 7.90032C21.5703 7.86697 21.6268 7.84185 21.6695 7.82412C21.691 7.81522 21.7091 7.80811 21.7234 7.80269L21.7421 7.79578L21.7492 7.79324L21.7522 7.7922L21.7535 7.79173L21.7542 7.79151Z',
  d16: 'M2.24585 7.79151C2.24554 7.7914 2.24524 7.7913 2 8.50007C1.75476 9.20884 1.75447 9.20874 1.75418 9.20864L1.75361 9.20844L1.75254 9.20807L1.75065 9.2074L1.74784 9.2064C1.74744 9.20626 1.74711 9.20613 1.74684 9.20603C1.7461 9.20577 1.7458 9.20565 1.74591 9.20569L1.75547 9.20953C1.76744 9.2145 1.78906 9.22395 1.81705 9.23815C1.87475 9.26741 1.94964 9.31182 2.02125 9.3712C2.16224 9.48812 2.25 9.62299 2.25 9.81257C2.25 9.99786 2.18073 10.1125 1.91976 10.4311C1.91144 10.4413 1.90288 10.4517 1.89411 10.4624C1.65125 10.7579 1.25 11.2461 1.25 12.0001C1.25 12.7541 1.65125 13.2423 1.89411 13.5378C1.90288 13.5484 1.91144 13.5589 1.91976 13.569C2.18073 13.8877 2.25 14.0023 2.25 14.1876C2.25 14.3771 2.16224 14.512 2.02125 14.6289C1.94964 14.6883 1.87475 14.7327 1.81705 14.762C1.78906 14.7762 1.76744 14.7856 1.75547 14.7906L1.74591 14.7944C1.74576 14.7945 1.74638 14.7943 1.74784 14.7937L1.75065 14.7927L1.75254 14.7921L1.75361 14.7917L1.75418 14.7915C1.75447 14.7914 1.75476 14.7913 2 15.5001C2.24524 16.2088 2.24554 16.2087 2.24585 16.2086L2.24648 16.2084L2.24782 16.2079L2.2508 16.2069L2.2579 16.2044L2.27655 16.1974C2.29089 16.192 2.30904 16.1849 2.33047 16.176C2.37319 16.1583 2.42969 16.1332 2.49545 16.0998C2.62525 16.034 2.80036 15.9315 2.97875 15.7836C3.33776 15.4859 3.75 14.9645 3.75 14.1876C3.75 13.4336 3.34875 12.9454 3.10589 12.6499C3.09712 12.6392 3.08856 12.6288 3.08024 12.6186C2.81927 12.3 2.75 12.1854 2.75 12.0001C2.75 11.8148 2.81927 11.7002 3.08024 11.3815C3.08856 11.3714 3.09712 11.3609 3.10589 11.3503C3.34875 11.0548 3.75 10.5666 3.75 9.81257C3.75 9.03565 3.33776 8.51427 2.97875 8.21656C2.80036 8.06863 2.62525 7.96614 2.49545 7.90032C2.42969 7.86697 2.37319 7.84185 2.33047 7.82412C2.30904 7.81522 2.29089 7.80811 2.27655 7.80269L2.2579 7.79578L2.2508 7.79324L2.24782 7.7922L2.24648 7.79173L2.24585 7.79151Z',
} as const;

export const IconSmartPhone03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-03-stroke-rounded IconSmartPhone03StrokeRounded"
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

export const IconSmartPhone03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-03-duotone-rounded IconSmartPhone03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconSmartPhone03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-03-twotone-rounded IconSmartPhone03TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSmartPhone03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-03-solid-rounded IconSmartPhone03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartPhone03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-03-bulk-rounded IconSmartPhone03BulkRounded"
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartPhone03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-03-stroke-sharp IconSmartPhone03StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconSmartPhone03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-phone-03-solid-sharp IconSmartPhone03SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSmartPhone03: TheIconSelfPack = {
  name: 'SmartPhone03',
  StrokeRounded: IconSmartPhone03StrokeRounded,
  DuotoneRounded: IconSmartPhone03DuotoneRounded,
  TwotoneRounded: IconSmartPhone03TwotoneRounded,
  SolidRounded: IconSmartPhone03SolidRounded,
  BulkRounded: IconSmartPhone03BulkRounded,
  StrokeSharp: IconSmartPhone03StrokeSharp,
  SolidSharp: IconSmartPhone03SolidSharp,
};