import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 9C10.8954 9 10 9.67157 10 10.5C10 11.3284 10.8954 12 12 12C13.1046 12 14 12.6716 14 13.5C14 14.3284 13.1046 15 12 15M12 9C12.8708 9 13.6116 9.4174 13.8862 10M12 9V8M12 15C11.1292 15 10.3884 14.5826 10.1138 14M12 15V16',
  d2: 'M11.9982 2C8.99043 2 7.04018 4.01899 4.73371 4.7549C3.79589 5.05413 3.32697 5.20374 3.1372 5.41465C2.94743 5.62556 2.89186 5.93375 2.78072 6.55013C1.59143 13.146 4.1909 19.244 10.3903 21.6175C11.0564 21.8725 11.3894 22 12.0015 22C12.6135 22 12.9466 21.8725 13.6126 21.6175C19.8116 19.2439 22.4086 13.146 21.219 6.55013C21.1078 5.93364 21.0522 5.6254 20.8624 5.41449C20.6726 5.20358 20.2037 5.05405 19.2659 4.75499C16.9585 4.01915 15.0061 2 11.9982 2Z',
  d3: 'M11.999 1.25C10.3178 1.25 8.95093 1.81794 7.75881 2.43555C7.39855 2.62219 7.06388 2.8068 6.74408 2.98322L6.74408 2.98322L6.74407 2.98322L6.74407 2.98323C5.96161 3.41486 5.26815 3.7974 4.50658 4.04039L4.48117 4.0485C4.03387 4.19121 3.66307 4.30951 3.38214 4.4196C3.11772 4.52321 2.80348 4.6652 2.58051 4.91299C2.38023 5.13558 2.27734 5.38547 2.20912 5.6245C2.14719 5.84148 2.09977 6.10462 2.04899 6.38644L2.04347 6.41705C0.805527 13.2827 3.51252 19.787 10.123 22.3179L10.1559 22.3305C10.8056 22.5793 11.2513 22.75 12.0023 22.75C12.7534 22.75 13.199 22.5793 13.8487 22.3305L13.8816 22.3179C20.4919 19.7869 23.1962 13.2824 21.9579 6.417L21.9524 6.38634L21.9524 6.38632L21.9524 6.38629C21.9016 6.10446 21.8541 5.84132 21.7922 5.62433C21.7239 5.38529 21.621 5.13537 21.4207 4.91278C21.1977 4.66499 20.8835 4.52304 20.619 4.41946C20.3381 4.30942 19.9674 4.19119 19.5201 4.04857L19.5201 4.04856L19.4946 4.04044C18.7327 3.79744 18.0386 3.4148 17.2556 2.9831L17.2555 2.98309C16.9356 2.8067 16.6008 2.62213 16.2405 2.43554C15.0477 1.81795 13.6803 1.25 11.999 1.25ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V7.42416C10.6347 7.52886 10.0701 7.7612 9.61196 8.09711C8.97319 8.56549 8.5 9.2746 8.5 10.1278C8.5 10.8783 8.76936 11.572 9.45777 12.0328C10.0819 12.4507 10.9522 12.6062 12 12.6062C12.9582 12.6062 13.5279 12.7501 13.8421 12.9537C14.088 13.1131 14.25 13.354 14.25 13.8726C14.25 14.3084 14.0711 14.5775 13.7369 14.777C13.3572 15.0037 12.7608 15.1391 12 15.1391C11.3002 15.1391 10.7004 14.9471 10.2971 14.676C9.88907 14.4018 9.75 14.1036 9.75 13.8726C9.75 13.4584 9.41421 13.1226 9 13.1226C8.58579 13.1226 8.25 13.4584 8.25 13.8726C8.25 14.7554 8.78251 15.4654 9.46029 15.921C9.9609 16.2574 10.5786 16.4867 11.25 16.585V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V16.6006C13.3866 16.5325 13.9974 16.3684 14.5057 16.065C15.2573 15.6163 15.75 14.8772 15.75 13.8726C15.75 12.951 15.412 12.1837 14.6579 11.6949C13.9721 11.2504 13.0418 11.1062 12 11.1062C11.0478 11.1062 10.5431 10.9543 10.2922 10.7864C10.1056 10.6615 10 10.4909 10 10.1278C10 9.86732 10.1424 9.56819 10.4989 9.30676C10.855 9.04566 11.3833 8.86133 12 8.86133C12.6167 8.86133 13.145 9.04566 13.501 9.30676C13.8576 9.56819 14 9.86732 14 10.1278C14 10.542 14.3358 10.8778 14.75 10.8778C15.1642 10.8778 15.5 10.542 15.5 10.1278C15.5 9.2746 15.0268 8.56549 14.388 8.09711C13.9299 7.7612 13.3653 7.52886 12.75 7.42416V7Z',
  d4: 'M7.75881 2.43555C8.95093 1.81794 10.3178 1.25 11.999 1.25C13.6803 1.25 15.0477 1.81795 16.2405 2.43554C16.6008 2.62213 16.9356 2.8067 17.2555 2.98309L17.2556 2.9831C18.0386 3.4148 18.7327 3.79744 19.4946 4.04044L19.5201 4.04856L19.5201 4.04857C19.9674 4.19119 20.3381 4.30942 20.619 4.41946C20.8835 4.52304 21.1977 4.66499 21.4207 4.91278C21.621 5.13537 21.7239 5.38529 21.7922 5.62433C21.8541 5.84132 21.9016 6.10448 21.9524 6.38632L21.9524 6.38634L21.9579 6.417C23.1962 13.2824 20.4919 19.7869 13.8816 22.3179L13.8487 22.3305C13.199 22.5793 12.7534 22.75 12.0023 22.75C11.2513 22.75 10.8056 22.5793 10.1559 22.3305L10.123 22.3179C3.51252 19.787 0.805527 13.2827 2.04347 6.41705L2.04899 6.38644C2.09977 6.10462 2.14719 5.84148 2.20912 5.6245C2.27734 5.38547 2.38023 5.13558 2.58051 4.91299C2.80348 4.6652 3.11772 4.52321 3.38214 4.4196C3.66307 4.30951 4.03387 4.19121 4.48117 4.0485L4.50658 4.04039C5.26815 3.7974 5.96161 3.41486 6.74407 2.98323L6.74407 2.98322L6.74408 2.98322C7.06388 2.8068 7.39855 2.62219 7.75881 2.43555Z',
  d5: 'M12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V7.42416C13.3653 7.52886 13.9299 7.7612 14.388 8.09711C15.0268 8.56549 15.5 9.27459 15.5 10.1278C15.5 10.542 15.1642 10.8778 14.75 10.8778C14.3358 10.8778 14 10.542 14 10.1278C14 9.86732 13.8576 9.56819 13.501 9.30676C13.145 9.04566 12.6167 8.86133 12 8.86133C11.3833 8.86133 10.855 9.04566 10.4989 9.30676C10.1424 9.56819 10 9.86732 10 10.1278C10 10.4909 10.1056 10.6615 10.2922 10.7864C10.5431 10.9543 11.0478 11.1062 12 11.1062C13.0418 11.1062 13.9721 11.2504 14.6579 11.6949C15.412 12.1837 15.75 12.951 15.75 13.8726C15.75 14.8772 15.2573 15.6163 14.5057 16.065C13.9974 16.3684 13.3866 16.5325 12.75 16.6006V17C12.75 17.4142 12.4142 17.75 12 17.75C11.5858 17.75 11.25 17.4142 11.25 17V16.585C10.5786 16.4867 9.9609 16.2574 9.46029 15.921C8.78251 15.4654 8.25 14.7554 8.25 13.8726C8.25 13.4584 8.58579 13.1226 9 13.1226C9.41421 13.1226 9.75 13.4584 9.75 13.8726C9.75 14.1036 9.88907 14.4018 10.2971 14.676C10.7004 14.9471 11.3002 15.1391 12 15.1391C12.7608 15.1391 13.3572 15.0037 13.7369 14.777C14.0711 14.5775 14.25 14.3084 14.25 13.8726C14.25 13.354 14.088 13.1131 13.8421 12.9537C13.5279 12.7501 12.9582 12.6062 12 12.6062C10.9522 12.6062 10.0819 12.4507 9.45777 12.0328C8.76936 11.572 8.5 10.8783 8.5 10.1278C8.5 9.2746 8.97319 8.56549 9.61196 8.09711C10.0701 7.7612 10.6347 7.52886 11.25 7.42416L11.25 7C11.25 6.58579 11.5858 6.25 12 6.25Z',
  d6: 'M12.0099 9.00824C10.9038 9.00824 10.0071 9.68022 10.0071 10.5092C10.0071 11.3381 10.9038 12.0101 12.0099 12.0101C13.1159 12.0101 14.0126 12.6821 14.0126 13.511C14.0126 14.3399 13.1159 15.0119 12.0099 15.0119M12.0099 9.00824C12.8819 9.00824 13.6237 9.4259 13.8987 10.0089M12.0099 9.00824V7.50732M12.0099 15.0119C11.1378 15.0119 10.396 14.5942 10.1211 14.0113M12.0099 15.0119V16.5128',
  d7: 'M11.7461 2.01142C8.48305 2.21026 5.85882 5.13393 2.97392 5.03036C2.20527 7.91559 1.78252 14.7984 6.51743 19.2055C7.72555 20.33 10.222 21.8105 11.9507 21.9985C13.6931 21.8296 16.6619 20.1419 17.5265 19.1794C19.0777 17.4525 22.799 13.9688 21.039 5.02727C17.8525 5.12012 15.2653 1.79697 11.7461 2.01142Z',
  d8: 'M11.9991 1.25C10.0566 1.25 8.5359 2.08008 7.19353 2.8128L7.14278 2.8405C5.75033 3.60038 4.53881 4.2476 3.0131 4.2476H2.41886L2.28297 4.82563C0.213392 13.6288 4.34861 21.1096 11.8416 22.7163L11.999 22.75L12.1564 22.7163C19.6494 21.1096 23.7847 13.6288 21.7151 4.82563L21.5792 4.2476H20.985C19.4616 4.2476 18.2539 3.60075 16.8623 2.84064L16.8168 2.81581C15.4735 2.08191 13.9507 1.25 11.9991 1.25ZM10.1351 8.83934C10.4535 8.60048 10.8351 8.42809 11.2493 8.33359V7.5H12.7493V8.33451C13.5379 8.51515 14.234 8.98027 14.5639 9.68028L13.207 10.3197C13.0898 10.071 12.6677 9.75 11.9993 9.75C11.5936 9.75 11.2551 9.87427 11.0351 10.0393C10.8152 10.2042 10.7493 10.3748 10.7493 10.5C10.7493 10.6252 10.8152 10.7958 11.0351 10.9607C11.2551 11.1257 11.5936 11.25 11.9993 11.25C12.6981 11.25 13.3597 11.4615 13.8635 11.8393C14.3675 12.2173 14.7493 12.7968 14.7493 13.5C14.7493 14.2032 14.3675 14.7827 13.8635 15.1607C13.545 15.3995 13.1634 15.5719 12.7493 15.6664V16.5H11.2493V15.6655C10.4606 15.4848 9.76453 15.0197 9.43463 14.3197L10.7915 13.6803C10.9087 13.929 11.3309 14.25 11.9993 14.25C12.405 14.25 12.7434 14.1257 12.9635 13.9607C13.1833 13.7958 13.2493 13.6252 13.2493 13.5C13.2493 13.3748 13.1833 13.2042 12.9635 13.0393C12.7434 12.8743 12.405 12.75 11.9993 12.75C11.3004 12.75 10.6388 12.5385 10.1351 12.1607C9.63106 11.7827 9.24927 11.2032 9.24927 10.5C9.24927 9.79679 9.63106 9.21734 10.1351 8.83934Z',
};

export const IconMoneySecurityStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-security-stroke-rounded IconMoneySecurityStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMoneySecurityDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-security-duotone-rounded IconMoneySecurityDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconMoneySecurityTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-security-twotone-rounded IconMoneySecurityTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconMoneySecuritySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-security-solid-rounded IconMoneySecuritySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySecurityBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-security-bulk-rounded IconMoneySecurityBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySecurityStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-security-stroke-sharp IconMoneySecurityStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySecuritySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-security-solid-sharp IconMoneySecuritySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoneySecurity: TheIconSelfPack = {
  name: 'MoneySecurity',
  StrokeRounded: IconMoneySecurityStrokeRounded,
  DuotoneRounded: IconMoneySecurityDuotoneRounded,
  TwotoneRounded: IconMoneySecurityTwotoneRounded,
  SolidRounded: IconMoneySecuritySolidRounded,
  BulkRounded: IconMoneySecurityBulkRounded,
  StrokeSharp: IconMoneySecurityStrokeSharp,
  SolidSharp: IconMoneySecuritySolidSharp,
};