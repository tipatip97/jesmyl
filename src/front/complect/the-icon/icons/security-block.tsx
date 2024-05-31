import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.5 5C4.5 5 3.32697 5.20385 3.1372 5.41475C2.94743 5.62566 2.89186 5.93385 2.78072 6.55024C1.59143 13.1461 4.1909 19.2441 10.3903 21.6176C11.0564 21.8726 11.3894 22.0001 12.0015 22.0001C12.6135 22.0001 12.9466 21.8726 13.6126 21.6176C15.6225 20.848 17.2537 19.9426 18.5 18.5',
  d2: 'M7.5 3.42011C8.8253 2.69687 10.2287 2 11.9982 2C15.0061 2 16.9585 4.01371 19.2659 4.74758C20.2037 5.04583 20.6726 5.19496 20.8624 5.4053C21.0522 5.61564 21.1078 5.92306 21.219 6.53789C21.8418 9.98199 21.4267 13.29 20 16',
  d3: 'M2 2L22 22',
  d4: 'M2.78072 6.55024C1.59143 13.1461 4.1909 19.2441 10.3903 21.6176C11.0564 21.8726 11.3894 22.0001 12.0015 22.0001C12.6135 22.0001 12.9466 21.8726 13.6126 21.6176C15.6225 20.848 17.2537 19.9426 18.5 18.5L4.5 5C4.5 5 3.32697 5.20385 3.1372 5.41475C2.94743 5.62566 2.89186 5.93385 2.78072 6.55024Z',
  d5: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d6: 'M7.75881 2.43555C8.95094 1.81794 10.3178 1.25 11.999 1.25C13.6803 1.25 15.0477 1.81795 16.2405 2.43554C16.6007 2.62209 16.9355 2.80664 17.2554 2.98299L17.2555 2.98309C18.0386 3.41479 18.7327 3.79744 19.4946 4.04044C19.9419 4.18307 20.3381 4.30941 20.619 4.41946C20.8835 4.52304 21.1977 4.66499 21.4207 4.91278C21.621 5.13537 21.7239 5.38529 21.7922 5.62434C21.8541 5.84133 21.9071 6.13515 21.9579 6.417C22.5908 9.92586 22.1938 13.3404 20.7718 16.1784C20.615 16.4915 20.5366 16.648 20.3851 16.6725C20.2335 16.697 20.1056 16.5691 19.8496 16.3131L7.16367 3.62717C6.90416 3.36766 6.77441 3.23791 6.79614 3.08892C6.81788 2.93994 6.97835 2.85318 7.2993 2.67967C7.45956 2.59302 7.61825 2.50837 7.75881 2.43555Z',
  d7: 'M13.8816 22.3179C13.2319 22.5667 12.7534 22.75 12.0023 22.75C11.2513 22.75 10.7727 22.5667 10.123 22.3179C3.51252 19.787 0.805527 13.2827 2.04347 6.41705C2.09425 6.13523 2.14719 5.84148 2.20912 5.6245C2.27734 5.38547 2.38023 5.13558 2.58051 4.91299C2.80348 4.6652 3.11772 4.52321 3.38214 4.4196C3.50352 4.37203 3.64643 4.32142 3.80568 4.26776C3.97302 4.21137 4.05669 4.18318 4.13992 4.20269C4.22316 4.22219 4.28664 4.28567 4.4136 4.41263L18.5118 18.5109C18.704 18.703 18.8 18.7991 18.8005 18.9227C18.8009 19.0464 18.7087 19.1399 18.5243 19.3269C17.2851 20.5838 15.7373 21.6074 13.8816 22.3179Z',
  d8: 'M13.8816 22.317C13.2319 22.5658 12.7534 22.7491 12.0023 22.7491C11.2513 22.7491 10.7727 22.5659 10.123 22.317C3.51252 19.7861 0.805527 13.2819 2.04347 6.41616C2.09425 6.13434 2.14719 5.84059 2.20912 5.62361C2.27734 5.38459 2.38023 5.1347 2.58051 4.91211C2.80348 4.66431 3.11772 4.52232 3.38214 4.41871C3.50352 4.37114 3.64643 4.32053 3.80568 4.26687C3.97302 4.21049 4.05669 4.18229 4.13992 4.2018C4.22316 4.22131 4.28664 4.28479 4.4136 4.41175L18.5118 18.51C18.704 18.7021 18.8 18.7982 18.8005 18.9218C18.8009 19.0455 18.7087 19.139 18.5243 19.3261C17.2851 20.5829 15.7373 21.6065 13.8816 22.317Z',
  d9: 'M7.75701 2.43555C8.94914 1.81794 10.316 1.25 11.9972 1.25C13.6785 1.25 15.0459 1.81795 16.2387 2.43554C16.5989 2.62209 16.9337 2.80664 17.2536 2.98299L17.2537 2.98309C18.0368 3.41479 18.7309 3.79744 19.4928 4.04044C19.9401 4.18307 20.3363 4.30941 20.6172 4.41946C20.8817 4.52304 21.1959 4.66499 21.4189 4.91278C21.6192 5.13537 21.7221 5.38529 21.7904 5.62434C21.8523 5.84133 21.9053 6.13515 21.9561 6.417C22.589 9.92586 22.192 13.3404 20.77 16.1784C20.6132 16.4915 20.5348 16.648 20.3833 16.6725C20.2317 16.697 20.1038 16.5691 19.8478 16.3131L7.16187 3.62717C6.90236 3.36766 6.77261 3.23791 6.79434 3.08892C6.81608 2.93994 6.97655 2.85318 7.2975 2.67967C7.45776 2.59302 7.61645 2.50837 7.75701 2.43555Z',
  d10: 'M18.3346 18.3457C16.728 20.089 14.5826 21.369 12.0595 22C5.73119 20.583 0.95579 14.7885 3.00914 4.98953C3.64182 5.03266 4.17881 4.89645 4.74422 4.73825M19.6726 16.4854C21.3785 13.6006 22.0067 9.77392 21.0061 4.97585C17.3463 4.97585 15.5995 1.93303 12.0297 2.00012C10.0511 2.00012 8.51605 2.94175 6.99087 3.76013',
  d11: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d12: 'M11.9969 1.25C10.0544 1.25 8.53371 2.08008 7.19133 2.8128L7.14058 2.8405C6.97308 2.93191 6.80819 3.02169 6.64506 3.10891L20.3354 16.7993C22.1932 13.5828 22.7839 9.38128 21.7129 4.82563L21.577 4.2476H20.9828C19.4594 4.2476 18.2517 3.60075 16.8601 2.84064L16.8146 2.81581C15.4713 2.08191 13.9485 1.25 11.9969 1.25Z',
  d13: 'M3.0109 4.2476H2.41666L2.28077 4.82563C0.211194 13.6288 4.34642 21.1096 11.8394 22.7163L11.9968 22.75L12.1542 22.7163C14.8772 22.1324 17.1568 20.7727 18.8563 18.8557L4.1298 4.12919C3.7719 4.20514 3.40171 4.2476 3.0109 4.2476Z',
} as const;

export const IconSecurityBlockStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-block-stroke-rounded IconSecurityBlockStrokeRounded"
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

export const IconSecurityBlockDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-block-duotone-rounded IconSecurityBlockDuotoneRounded"
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

export const IconSecurityBlockTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-block-twotone-rounded IconSecurityBlockTwotoneRounded"
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

export const IconSecurityBlockSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-block-solid-rounded IconSecurityBlockSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSecurityBlockBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-block-bulk-rounded IconSecurityBlockBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSecurityBlockStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-block-stroke-sharp IconSecurityBlockStrokeSharp"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSecurityBlockSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="security-block-solid-sharp IconSecurityBlockSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSecurityBlock: TheIconSelfPack = {
  name: 'SecurityBlock',
  StrokeRounded: IconSecurityBlockStrokeRounded,
  DuotoneRounded: IconSecurityBlockDuotoneRounded,
  TwotoneRounded: IconSecurityBlockTwotoneRounded,
  SolidRounded: IconSecurityBlockSolidRounded,
  BulkRounded: IconSecurityBlockBulkRounded,
  StrokeSharp: IconSecurityBlockStrokeSharp,
  SolidSharp: IconSecurityBlockSolidSharp,
};