import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.9982 2C8.99043 2 7.04018 4.01899 4.73371 4.7549C3.79589 5.05413 3.32697 5.20374 3.1372 5.41465C2.94743 5.62556 2.89186 5.93375 2.78072 6.55013C1.59143 13.146 4.1909 19.244 10.3903 21.6175C11.0564 21.8725 11.3894 22 12.0015 22C12.6135 22 12.9466 21.8725 13.6126 21.6175C19.8116 19.2439 22.4086 13.146 21.219 6.55013C21.1078 5.93364 21.0522 5.6254 20.8624 5.41449C20.6726 5.20358 20.2037 5.05405 19.2659 4.75499C16.9585 4.01915 15.0061 2 11.9982 2Z',
  d2: 'M12 7L12 9',
  d3: 'M11.999 1.25C10.3178 1.25 8.95094 1.81794 7.75881 2.43555C7.39857 2.62217 7.06392 2.80678 6.74414 2.98319L6.7441 2.98321L6.74407 2.98322C5.96162 3.41486 5.26815 3.7974 4.50658 4.04039C4.05929 4.1831 3.66307 4.30951 3.38214 4.4196C3.11772 4.52321 2.80348 4.6652 2.58051 4.91299C2.38023 5.13558 2.27734 5.38547 2.20912 5.6245C2.14719 5.84148 2.09425 6.13523 2.04347 6.41705C0.805527 13.2827 3.51252 19.787 10.123 22.3179C10.7727 22.5667 11.2513 22.75 12.0023 22.75C12.7534 22.75 13.2319 22.5667 13.8816 22.3179C20.4919 19.7869 23.1962 13.2824 21.9579 6.417C21.9071 6.13515 21.8541 5.84133 21.7922 5.62434C21.7239 5.38529 21.621 5.13537 21.4207 4.91278C21.1977 4.66499 20.8835 4.52304 20.619 4.41946C20.3381 4.30941 19.9419 4.18307 19.4946 4.04044C18.7327 3.79744 18.0386 3.41479 17.2555 2.98309L17.2555 2.98308L17.2554 2.98301C16.9355 2.80664 16.6007 2.6221 16.2405 2.43554C15.0477 1.81795 13.6803 1.25 11.999 1.25ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55229 13 9V7Z',
  d4: 'M7.75881 2.43555C8.95094 1.81794 10.3178 1.25 11.999 1.25C13.6803 1.25 15.0477 1.81795 16.2405 2.43554C16.6008 2.62212 16.9356 2.80669 17.2555 2.98308L17.2555 2.98309C18.0386 3.41479 18.7327 3.79744 19.4946 4.04044C19.9419 4.18307 20.3381 4.30941 20.619 4.41946C20.8835 4.52304 21.1977 4.66499 21.4207 4.91278C21.621 5.13537 21.7239 5.38529 21.7922 5.62434C21.8541 5.84133 21.9071 6.13515 21.9579 6.417C23.1962 13.2824 20.4919 19.7869 13.8816 22.3179C13.2319 22.5667 12.7534 22.75 12.0023 22.75C11.2513 22.75 10.7727 22.5667 10.123 22.3179C3.51252 19.787 0.805527 13.2827 2.04347 6.41705C2.09425 6.13523 2.14719 5.84148 2.20912 5.6245C2.27734 5.38547 2.38023 5.13558 2.58051 4.91299C2.80348 4.6652 3.11772 4.52321 3.38214 4.4196C3.66307 4.30951 4.05929 4.1831 4.50658 4.04039C5.26815 3.7974 5.96162 3.41486 6.74407 2.98322L6.7441 2.98321C7.0639 2.8068 7.39856 2.62218 7.75881 2.43555Z',
  d5: 'M12 6C12.5523 6 13 6.44772 13 7L13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9L11 7C11 6.44772 11.4477 6 12 6Z',
  d6: 'M12 7.00293V10.0042',
  d7: 'M2.95362 4.94928C6.26657 5.17512 8.40277 2.01574 12.0269 2.01574C15.5967 1.94865 17.3435 4.99148 21.0033 4.99148C22.9652 14.399 18.8836 20.3083 12.0568 22.0156C5.72844 20.5986 0.973462 14.6286 2.95362 4.94928Z',
  d8: 'M11.9984 1.25C10.056 1.25 8.53529 2.08008 7.19292 2.8128L7.14217 2.8405C5.74972 3.60038 4.5382 4.2476 3.01249 4.2476H2.41825L2.28236 4.82563C0.212781 13.6288 4.348 21.1096 11.841 22.7163L11.9984 22.75L12.1558 22.7163C19.6488 21.1096 23.7841 13.6288 21.7145 4.82563L21.5786 4.2476H20.9844C19.461 4.2476 18.2533 3.60075 16.8617 2.84064L16.8162 2.81581C15.4729 2.08191 13.9501 1.25 11.9984 1.25ZM10.9987 7V10H12.9987V7H10.9987Z',
};

export const IconSecurityStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-stroke-rounded IconSecurityStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSecurityDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-duotone-rounded IconSecurityDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSecurityTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-twotone-rounded IconSecurityTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSecuritySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-solid-rounded IconSecuritySolidRounded"
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

export const IconSecurityBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-bulk-rounded IconSecurityBulkRounded"
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

export const IconSecurityStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-stroke-sharp IconSecurityStrokeSharp"
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

export const IconSecuritySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="security-solid-sharp IconSecuritySolidSharp"
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

export const iconPackOfSecurity: TheIconSelfPack = {
  name: 'Security',
  StrokeRounded: IconSecurityStrokeRounded,
  DuotoneRounded: IconSecurityDuotoneRounded,
  TwotoneRounded: IconSecurityTwotoneRounded,
  SolidRounded: IconSecuritySolidRounded,
  BulkRounded: IconSecurityBulkRounded,
  StrokeSharp: IconSecurityStrokeSharp,
  SolidSharp: IconSecuritySolidSharp,
};