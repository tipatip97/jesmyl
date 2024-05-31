import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.9982 2C8.99043 2 7.04018 4.01899 4.73371 4.7549C3.79589 5.05413 3.32697 5.20374 3.1372 5.41465C2.94743 5.62556 2.89186 5.93375 2.78072 6.55013C1.59143 13.146 4.1909 19.244 10.3903 21.6175C11.0564 21.8725 11.3894 22 12.0015 22C12.6135 22 12.9466 21.8725 13.6126 21.6175C19.8116 19.2439 22.4086 13.146 21.219 6.55013C21.1078 5.93364 21.0522 5.6254 20.8624 5.41449C20.6726 5.20358 20.2037 5.05405 19.2659 4.75499C16.9585 4.01915 15.0061 2 11.9982 2Z',
  d2: 'M9 13C9 13 10 13 11 15C11 15 14.1765 10 17 9',
  d3: 'M11.999 1.25C10.3178 1.25 8.95094 1.81794 7.75881 2.43555C7.39857 2.62217 7.06392 2.80678 6.74414 2.98319L6.7441 2.98321L6.74407 2.98322C5.96162 3.41486 5.26815 3.7974 4.50658 4.04039C4.05929 4.1831 3.66307 4.30951 3.38214 4.4196C3.11772 4.52321 2.80348 4.6652 2.58051 4.91299C2.38023 5.13558 2.27734 5.38547 2.20912 5.6245C2.14719 5.84148 2.09425 6.13523 2.04347 6.41705C0.805527 13.2827 3.51252 19.787 10.123 22.3179C10.7727 22.5667 11.2513 22.75 12.0023 22.75C12.7534 22.75 13.2319 22.5667 13.8816 22.3179C20.4919 19.7869 23.1962 13.2824 21.9579 6.417C21.9071 6.13515 21.8541 5.84133 21.7922 5.62434C21.7239 5.38529 21.621 5.13537 21.4207 4.91278C21.1977 4.66499 20.8835 4.52304 20.619 4.41946C20.3381 4.30941 19.9419 4.18307 19.4946 4.04044C18.7327 3.79744 18.0386 3.41479 17.2555 2.98309L17.2555 2.98308L17.2554 2.98301C16.9355 2.80664 16.6007 2.6221 16.2405 2.43554C15.0477 1.81795 13.6803 1.25 11.999 1.25ZM17.3338 9.9429C17.8544 9.75852 18.127 9.18702 17.9426 8.66643C17.7582 8.14583 17.1868 7.87327 16.6662 8.05765C15.788 8.36865 14.9486 8.96179 14.212 9.60781C13.465 10.2629 12.7666 11.0235 12.1733 11.7347C11.734 12.2613 11.3456 12.7689 11.0304 13.1997C10.7416 12.8538 10.454 12.6011 10.1797 12.4182C9.9053 12.2353 9.55228 12.0003 9 12.0003C8.44772 12.0003 8 12.448 8 13.0003C8 13.521 8.39799 13.9487 8.90638 13.9959C9.11042 14.0149 9.66489 14.5661 10.1056 15.4475C10.2668 15.7698 10.5889 15.9805 10.9489 15.999C11.3087 16.0174 11.6508 15.8406 11.8441 15.5365C11.8441 15.5365 12.1922 15.0141 12.3574 14.7801C12.6885 14.3111 13.1572 13.6774 13.7091 13.0159C14.2628 12.3521 14.888 11.6751 15.5307 11.1115C16.1837 10.5388 16.8002 10.1319 17.3338 9.9429Z',
  d4: 'M7.75881 2.43555C8.95094 1.81794 10.3178 1.25 11.999 1.25C13.6803 1.25 15.0477 1.81795 16.2405 2.43554C16.6008 2.62212 16.9356 2.80669 17.2555 2.98308L17.2555 2.98309C18.0386 3.41479 18.7327 3.79744 19.4946 4.04044C19.9419 4.18307 20.3381 4.30941 20.619 4.41946C20.8835 4.52304 21.1977 4.66499 21.4207 4.91278C21.621 5.13537 21.7239 5.38529 21.7922 5.62434C21.8541 5.84133 21.9071 6.13515 21.9579 6.417C23.1962 13.2824 20.4919 19.7869 13.8816 22.3179C13.2319 22.5667 12.7534 22.75 12.0023 22.75C11.2513 22.75 10.7727 22.5667 10.123 22.3179C3.51252 19.787 0.805527 13.2827 2.04347 6.41705C2.09425 6.13523 2.14719 5.84148 2.20912 5.6245C2.27734 5.38547 2.38023 5.13558 2.58051 4.91299C2.80348 4.6652 3.11772 4.52321 3.38214 4.4196C3.66307 4.30951 4.05929 4.1831 4.50658 4.04039C5.26815 3.7974 5.96162 3.41486 6.74407 2.98322L6.7441 2.98321C7.0639 2.8068 7.39856 2.62218 7.75881 2.43555Z',
  d5: 'M17.9426 8.66643C18.127 9.18702 17.8544 9.75852 17.3338 9.9429C16.8002 10.1319 16.1837 10.5388 15.5307 11.1115C14.888 11.6751 14.2628 12.3521 13.7091 13.0159C13.1572 13.6774 12.6885 14.3111 12.3574 14.7801C12.1922 15.0141 11.8441 15.5365 11.8441 15.5365C11.6508 15.8406 11.3087 16.0174 10.9489 15.999C10.5889 15.9805 10.2668 15.7698 10.1056 15.4475C9.66489 14.5661 9.11042 14.0149 8.90638 13.9959C8.39799 13.9487 8 13.521 8 13.0003C8 12.448 8.44772 12.0003 9 12.0003C9.55228 12.0003 9.9053 12.2353 10.1797 12.4182C10.454 12.6011 10.7416 12.8538 11.0304 13.1997C11.3456 12.7689 11.734 12.2613 12.1733 11.7347C12.7666 11.0235 13.465 10.2629 14.212 9.60781C14.9486 8.96179 15.788 8.36865 16.6662 8.05765C17.1868 7.87327 17.7582 8.14583 17.9426 8.66643Z',
  d6: 'M9 13L11 15L17 9',
  d7: 'M2.95362 4.94245C6.26657 5.16828 8.40277 2.00891 12.0269 2.00891C15.5967 1.94182 17.3435 4.98464 21.0033 4.98464C22.9652 14.3921 18.8836 20.3015 12.0568 22.0088C5.72844 20.5918 0.973462 14.6218 2.95362 4.94245Z',
  d8: 'M7.19451 2.8128C8.53688 2.08008 10.0576 1.25 12 1.25C13.9517 1.25 15.4744 2.08191 16.8178 2.81581L16.8633 2.84064C18.2549 3.60075 19.4626 4.2476 20.986 4.2476H21.5802L21.7161 4.82563C23.7857 13.6288 19.6504 21.1096 12.1573 22.7163L12 22.75L11.8426 22.7163C4.34959 21.1096 0.214368 13.6288 2.28395 4.82563L2.41984 4.2476H3.01407C4.53979 4.2476 5.75131 3.60038 7.14376 2.8405L7.19451 2.8128ZM11.0003 16.4143L17.7074 9.70718L16.2932 8.29297L11.0003 13.5859L9.70743 12.293L8.29321 13.7072L11.0003 16.4143Z',
} as const;

export const IconSecurityCheckStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-check-stroke-rounded IconSecurityCheckStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSecurityCheckDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-check-duotone-rounded IconSecurityCheckDuotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconSecurityCheckTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-check-twotone-rounded IconSecurityCheckTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSecurityCheckSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-check-solid-rounded IconSecurityCheckSolidRounded"
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

export const IconSecurityCheckBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-check-bulk-rounded IconSecurityCheckBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSecurityCheckStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-check-stroke-sharp IconSecurityCheckStrokeSharp"
    >
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
    </TheIconWrapper>
  );
};

export const IconSecurityCheckSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-check-solid-sharp IconSecurityCheckSolidSharp"
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

export const iconPackOfSecurityCheck: TheIconSelfPack = {
  name: 'SecurityCheck',
  StrokeRounded: IconSecurityCheckStrokeRounded,
  DuotoneRounded: IconSecurityCheckDuotoneRounded,
  TwotoneRounded: IconSecurityCheckTwotoneRounded,
  SolidRounded: IconSecurityCheckSolidRounded,
  BulkRounded: IconSecurityCheckBulkRounded,
  StrokeSharp: IconSecurityCheckStrokeSharp,
  SolidSharp: IconSecurityCheckSolidSharp,
};