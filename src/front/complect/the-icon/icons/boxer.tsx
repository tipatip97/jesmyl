import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.82004 3H19.18C19.7167 3 19.9851 3 20.1838 3.0927C20.4487 3.21631 20.6461 3.451 20.7237 3.73439C20.7818 3.94693 20.7377 4.21349 20.6495 4.7466C20.584 5.14188 20.5513 5.33952 20.4642 5.49389C20.3481 5.69972 20.1632 5.8574 19.9425 5.93889C19.777 6 19.578 6 19.18 6H4.82003C4.42204 6 4.22304 6 4.05749 5.93889C3.83676 5.8574 3.65189 5.69972 3.53577 5.49389C3.44869 5.33952 3.41597 5.14188 3.35054 4.7466C3.2623 4.21349 3.21817 3.94693 3.27633 3.73439C3.35388 3.451 3.55133 3.21631 3.81621 3.0927C4.01487 3 4.28326 3 4.82004 3Z',
  d2: 'M4 6C2.80083 8.35175 2 10.0659 2 12.7001V17.7669C2 19.1536 2 19.847 2.43934 20.2778C3.35803 21.1786 8.51722 21.3009 9.56066 20.2778C10.6442 19.2153 9.60514 17.1627 10.1522 15.8675C10.488 15.0728 11.3875 14.4452 12 13.8446M12 13.8446L10.5 12.3737M12 13.8446C12.6125 14.4452 13.512 15.0728 13.8478 15.8675C14.3949 17.1627 13.3558 19.2153 14.4393 20.2778C15.358 21.1786 20.5172 21.3009 21.5607 20.2778C22 19.847 22 19.1536 22 17.7669V12.7001C22 10.0659 21.1992 8.35174 20 6',
  d3: 'M10 8.77778L12 6L15 11',
  d4: 'M2 17.7669V12.7001C2 10.0659 2.80083 8.35175 4 6H20C21.1992 8.35175 22 10.0659 22 12.7001V17.7669C22 19.1536 22 19.847 21.5607 20.2778C20.5172 21.3009 15.358 21.1786 14.4393 20.2778C13.3558 19.2153 14.3949 17.1627 13.8478 15.8676C13.512 15.0728 12.6125 14.4452 12 13.8446C11.3875 14.4452 10.488 15.0728 10.1522 15.8676C9.60514 17.1627 10.6442 19.2153 9.56066 20.2778C8.51722 21.3009 3.35803 21.1786 2.43934 20.2778C2 19.847 2 19.1536 2 17.7669Z',
  d5: 'M3.33185 5.6593C3.45993 5.40812 3.71805 5.25 4 5.25H20C20.2819 5.25 20.5401 5.40812 20.6682 5.6593C21.8741 8.02431 22.75 9.87523 22.75 12.7001L22.75 17.8168C22.75 18.4674 22.7501 19.0309 22.6881 19.4827C22.6214 19.9691 22.4706 20.4359 22.0858 20.8133C21.6127 21.2771 20.9044 21.4578 20.2723 21.5738C18.8643 21.8322 17.0165 21.8033 15.6499 21.5379C15.0508 21.4216 14.3643 21.2546 13.9142 20.8133C13.0982 20.0131 13.1403 18.8855 13.1942 18.1081C13.2033 17.9759 13.2184 17.8368 13.2339 17.6942C13.2897 17.1796 13.3506 16.618 13.1569 16.1594C12.9794 15.7392 12.6147 15.4053 12.2616 15.0991C12.1329 14.9875 12.0686 14.9317 11.9937 14.9319C11.9188 14.9321 11.8549 14.988 11.7271 15.0998C11.3773 15.4058 11.0205 15.7395 10.8431 16.1594C10.6494 16.618 10.7103 17.1796 10.7661 17.6942C10.7816 17.8368 10.7967 17.9759 10.8058 18.1081C10.8597 18.8855 10.9018 20.0131 10.0858 20.8133C9.6127 21.2772 8.90438 21.4578 8.27234 21.5738C6.86435 21.8322 5.01647 21.8033 3.64993 21.5379C3.05078 21.4216 2.3643 21.2546 1.91424 20.8133C1.52941 20.4359 1.37856 19.9691 1.31187 19.4827C1.24992 19.0309 1.24996 18.4674 1.25 17.8168L1.25 12.7001C1.25 9.87523 2.12592 8.02431 3.33185 5.6593ZM12.0314 5.25066C12.0209 5.25022 12.0104 5.25 12 5.25C11.7595 5.25 11.5327 5.36555 11.3914 5.56177L9.39141 8.33955C9.14938 8.6757 9.22568 9.1444 9.56183 9.38643C9.89798 9.62846 10.3667 9.55216 10.6087 9.21601L11.588 7.85582C11.7484 7.63315 11.8285 7.52181 11.9362 7.52632C12.0439 7.53082 12.1145 7.64846 12.2557 7.88374L14.3569 11.3859C14.57 11.7411 15.0307 11.8562 15.3859 11.6431C15.7411 11.43 15.8563 10.9693 15.6432 10.6141L12.6432 5.61413C12.5134 5.39778 12.2835 5.2612 12.0314 5.25066Z',
  d6: 'M4.79603 2.25C4.80402 2.25 4.81203 2.25 4.82006 2.25L19.204 2.25C19.4518 2.24999 19.6766 2.24997 19.8632 2.26357C20.0611 2.27799 20.2821 2.31092 20.501 2.41306C20.9666 2.63035 21.3118 3.04189 21.4471 3.53645C21.5106 3.76846 21.5066 3.99139 21.4883 4.18939C21.471 4.3764 21.4341 4.59915 21.3933 4.84549L21.3894 4.86908C21.385 4.89573 21.3806 4.92255 21.3762 4.94949C21.3256 5.26027 21.2723 5.58799 21.1175 5.8624C20.9145 6.22227 20.5905 6.49916 20.2023 6.64248C19.9059 6.7519 19.5735 6.751 19.2612 6.75015C19.234 6.75008 19.2069 6.75 19.18 6.75H4.82006C4.79317 6.75 4.76609 6.75008 4.73885 6.75015C4.42656 6.751 4.0942 6.7519 3.79779 6.64248C3.40953 6.49916 3.08559 6.22227 2.88258 5.8624C2.72778 5.58799 2.67441 5.26028 2.62381 4.94951C2.61942 4.92255 2.61505 4.89573 2.61064 4.86908C2.60934 4.86122 2.60804 4.85338 2.60675 4.84556C2.56595 4.59919 2.52906 4.37641 2.51176 4.18939C2.49343 3.99139 2.48947 3.76847 2.55295 3.53645C2.68828 3.0419 3.03344 2.63035 3.49909 2.41306C3.71798 2.31092 3.93899 2.27799 4.13685 2.26357C4.32348 2.24997 4.54828 2.24999 4.79603 2.25ZM4.12829 3.7748C4.06797 3.8047 4.02107 3.8596 4.00105 3.92781C4.00018 3.9366 3.99797 3.9712 4.00537 4.05118C4.0171 4.17791 4.04459 4.34672 4.0905 4.62412C4.12474 4.83094 4.14514 4.95212 4.16588 5.04203C4.17884 5.09822 4.18754 5.12127 4.18998 5.12706C4.2188 5.17724 4.26327 5.21474 4.3149 5.23442C4.32134 5.2359 4.34491 5.24042 4.39919 5.24387C4.49011 5.24965 4.61164 5.25 4.82006 5.25H19.18C19.3884 5.25 19.5099 5.24965 19.6009 5.24387C19.6552 5.24042 19.6787 5.2359 19.6852 5.23442C19.7368 5.21474 19.7813 5.17724 19.8101 5.12705C19.8125 5.12125 19.8212 5.0982 19.8342 5.04203C19.8549 4.95212 19.8753 4.83094 19.9096 4.62412C19.9555 4.34672 19.983 4.17791 19.9947 4.05118C20.0021 3.97123 19.9999 3.93663 19.999 3.92782C19.979 3.85961 19.9321 3.80471 19.8718 3.7748C19.8626 3.77243 19.8296 3.7651 19.7542 3.75961C19.6288 3.75047 19.4595 3.75 19.18 3.75H4.82006C4.54054 3.75 4.37128 3.75047 4.24587 3.75961C4.17045 3.7651 4.13743 3.77243 4.12829 3.7748ZM19.8094 5.1286L19.8101 5.12705L19.8094 5.1286ZM4.19068 5.1286L4.18998 5.12706L4.19068 5.1286Z',
  d7: 'M4 5.25C3.71806 5.25 3.45993 5.40813 3.33185 5.6593C2.12592 8.02431 1.25 9.87523 1.25 12.7001L1.25 17.8168C1.24996 18.4674 1.24993 19.0309 1.31187 19.4827C1.37857 19.9691 1.52941 20.4359 1.91424 20.8133C2.3643 21.2546 3.05079 21.4216 3.64994 21.5379C5.01648 21.8033 6.86435 21.8322 8.27234 21.5738C8.90439 21.4578 9.6127 21.2772 10.0858 20.8133C10.9018 20.0131 10.8597 18.8855 10.8058 18.1081C10.7636 17.4988 10.5957 16.7451 10.8431 16.1594C11.0205 15.7395 11.3773 15.4058 11.7271 15.0998C11.8549 14.988 11.9188 14.9321 11.9937 14.9319C12.0686 14.9317 12.1329 14.9875 12.2616 15.0991C12.6147 15.4053 12.9794 15.7392 13.1569 16.1594C13.4043 16.7451 13.2364 17.4988 13.1942 18.1081C13.1403 18.8855 13.0982 20.0131 13.9142 20.8133C14.3643 21.2546 15.0508 21.4216 15.6499 21.5379C17.0165 21.8033 18.8644 21.8322 20.2723 21.5738C20.9044 21.4578 21.6127 21.2772 22.0858 20.8133C22.4706 20.4359 22.6214 19.9691 22.6881 19.4827C22.7501 19.0309 22.75 18.4674 22.75 17.8168L22.75 12.7001C22.75 9.87523 21.8741 8.02431 20.6682 5.6593C20.5401 5.40813 20.282 5.25 20 5.25H4Z',
  d8: 'M12 5.25C12.0104 5.25 12.0209 5.25022 12.0314 5.25066C12.2835 5.2612 12.5134 5.39778 12.6432 5.61413L15.6432 10.6141C15.8563 10.9693 15.7411 11.43 15.3859 11.6431C15.0307 11.8562 14.57 11.7411 14.3569 11.3859L12.2557 7.88374C12.1145 7.64846 12.0439 7.53082 11.9362 7.52632C11.8285 7.52181 11.7484 7.63315 11.588 7.85582L10.6087 9.21601C10.3667 9.55216 9.89798 9.62846 9.56183 9.38643C9.22568 9.1444 9.14938 8.6757 9.39141 8.33955L11.3914 5.56177C11.5327 5.36555 11.7595 5.25 12 5.25Z',
  d9: 'M3 3H21V6H3V3Z',
  d10: 'M4 6L2 11V21H10V16L12 14M20 6L22 11V21H14V16L12 14M10 12L12 14',
  d11: 'M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6V3ZM3.75 3.75V5.25H20.25V3.75H3.75Z',
  d12: 'M4 5.25C3.69332 5.25 3.41754 5.43671 3.30364 5.72146L1.25 10.8556V21.75H10.75V16.3107L12 15.0607L13.25 16.3107V21.75H22.75V10.8556L20.6964 5.72146C20.5825 5.43671 20.3067 5.25 20 5.25H11.9992H4ZM11.9992 5.25C12.0096 5.25 12.0201 5.25022 12.0306 5.25066C12.2827 5.2612 12.5126 5.39778 12.6424 5.61413L15.6424 10.6141L14.3562 11.3859L11.9423 7.36274L10.6079 9.21601L9.39062 8.33955L11.3906 5.56177C11.5319 5.36555 11.7587 5.25 11.9992 5.25Z',
};

export const IconBoxerStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="boxer-stroke-rounded IconBoxerStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBoxerDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="boxer-duotone-rounded IconBoxerDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBoxerTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="boxer-twotone-rounded IconBoxerTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBoxerSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="boxer-solid-rounded IconBoxerSolidRounded"
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

export const IconBoxerBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="boxer-bulk-rounded IconBoxerBulkRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBoxerStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="boxer-stroke-sharp IconBoxerStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBoxerSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="boxer-solid-sharp IconBoxerSolidSharp"
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

export const iconPackOfBoxer: TheIconSelfPack = {
  name: 'Boxer',
  StrokeRounded: IconBoxerStrokeRounded,
  DuotoneRounded: IconBoxerDuotoneRounded,
  TwotoneRounded: IconBoxerTwotoneRounded,
  SolidRounded: IconBoxerSolidRounded,
  BulkRounded: IconBoxerBulkRounded,
  StrokeSharp: IconBoxerStrokeSharp,
  SolidSharp: IconBoxerSolidSharp,
};