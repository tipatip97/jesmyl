import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.5 16V12.0059C19.5 10.5195 19.5 9.77627 19.2444 9.09603C18.9888 8.4158 18.4994 7.85648 17.5206 6.73784L16 5H8L6.47939 6.73784C5.50058 7.85648 5.01118 8.4158 4.75559 9.09603C4.5 9.77627 4.5 10.5195 4.5 12.0059V16C4.5 18.8284 4.5 20.2426 5.37868 21.1213C6.25736 22 7.67157 22 10.5 22H13.5C16.3284 22 17.7426 22 18.6213 21.1213C19.5 20.2426 19.5 18.8284 19.5 16Z',
  d2: 'M9.5 15.6831C9.5 16.9125 11.3539 17.9204 13.1325 17.3553C14.9112 16.7901 14.6497 15.1248 14.0463 14.4708C13.4429 13.8169 12.555 13.9265 11.5399 13.8751C9.25873 13.7594 9.09769 11.5722 10.9447 10.7069C12.2997 10.072 14.0379 10.8862 14.2381 12M11.971 9.5V10.4777M11.971 17.7204V18.5',
  d3: 'M7.5 2H16.5C16.9659 2 17.1989 2 17.3827 2.07612C17.6277 2.17761 17.8224 2.37229 17.9239 2.61732C18 2.80109 18 3.03406 18 3.5C18 3.96594 18 4.19891 17.9239 4.38268C17.8224 4.62771 17.6277 4.82239 17.3827 4.92388C17.1989 5 16.9659 5 16.5 5H7.5C7.03406 5 6.80109 5 6.61732 4.92388C6.37229 4.82239 6.17761 4.62771 6.07612 4.38268C6 4.19891 6 3.96594 6 3.5C6 3.03406 6 2.80109 6.07612 2.61732C6.17761 2.37229 6.37229 2.17761 6.61732 2.07612C6.80109 2 7.03406 2 7.5 2Z',
  d4: 'M5.82172 6.35033L6.12826 6L17.8716 6L18.1781 6.35033C19.0675 7.36621 19.6423 8.02278 19.9464 8.83217C20.2505 9.64157 20.2503 10.5142 20.25 11.8644L20.2499 16.0549C20.2499 17.4224 20.25 18.5247 20.1334 19.3917C20.0124 20.2918 19.7535 21.0497 19.1516 21.6516C18.5497 22.2535 17.7918 22.5124 16.8917 22.6334C16.0247 22.75 14.9224 22.75 13.5548 22.7499L10.4451 22.7499C9.07747 22.75 7.97514 22.75 7.10817 22.6334C6.20807 22.5124 5.45019 22.2535 4.84828 21.6516C4.24636 21.0497 3.98747 20.2918 3.86645 19.3917C3.74989 18.5247 3.7499 17.4224 3.74993 16.0548L3.7499 11.8644C3.74955 10.5142 3.74932 9.64157 4.05344 8.83217C4.35756 8.02278 4.93235 7.36621 5.82172 6.35033ZM12.7209 10.25C12.7209 9.83579 12.3851 9.5 11.9709 9.5C11.5567 9.5 11.2209 9.83579 11.2209 10.25V10.5706C11.0203 10.6182 10.8211 10.6865 10.6264 10.7777C9.48748 11.3113 8.79924 12.3489 8.95147 13.427C9.11126 14.5586 10.1217 15.3041 11.5018 15.3741C11.7269 15.3855 11.918 15.3898 12.0892 15.3937C12.3729 15.4 12.602 15.4052 12.841 15.4394C13.1658 15.4859 13.3512 15.5736 13.4949 15.7294C13.6482 15.8955 13.7887 16.2511 13.7401 16.5899C13.7025 16.8524 13.5416 17.1883 12.9053 17.3905C12.2071 17.6123 11.4979 17.5221 10.9783 17.2683C10.4308 17.0008 10.2499 16.649 10.2499 16.4331C10.2499 16.0189 9.91409 15.6831 9.49988 15.6831C9.08566 15.6831 8.74988 16.0189 8.74988 16.4331C8.74988 17.4467 9.49586 18.2135 10.32 18.6161C10.5966 18.7512 10.9001 18.8563 11.2209 18.9248V19.25C11.2209 19.6642 11.5567 20 11.9709 20C12.3851 20 12.7209 19.6642 12.7209 19.25V18.969C12.9334 18.9368 13.147 18.8876 13.3595 18.82C14.5019 18.457 15.0995 17.6777 15.225 16.8028C15.3394 16.0041 15.0475 15.2001 14.5974 14.7123C14.1378 14.2141 13.5775 14.0296 13.0537 13.9546C12.7306 13.9083 12.3456 13.8986 12.0009 13.8899C11.8491 13.8861 11.7052 13.8825 11.5777 13.876C10.6767 13.8303 10.466 13.4245 10.4367 13.2172C10.3999 12.9564 10.5546 12.4678 11.2627 12.136C11.7168 11.9233 12.2662 11.9433 12.7346 12.1394C13.2247 12.3447 13.4604 12.6635 13.4998 12.8827C13.5731 13.2904 13.963 13.5614 14.3707 13.4882C14.7784 13.4149 15.0494 13.025 14.9762 12.6173C14.8154 11.7227 14.0819 11.0775 13.3141 10.7559C13.1267 10.6774 12.9276 10.6136 12.7209 10.5677V10.25Z',
  d5: 'M7.46557 1.25001H16.5345C16.7396 1.24993 16.9614 1.24984 17.1486 1.27501C17.3679 1.3045 17.6481 1.38033 17.8839 1.61613C18.1197 1.85193 18.1955 2.13212 18.225 2.35145C18.2502 2.53866 18.2501 2.82934 18.25 3.03446V3.03449C18.2501 3.2396 18.2502 3.46138 18.225 3.64859C18.1955 3.86791 18.1197 4.1481 17.8839 4.3839C17.6481 4.6197 17.3679 4.69554 17.1486 4.72502C16.9614 4.7502 16.7396 4.75011 16.5345 4.75003H7.46557C7.26046 4.75011 7.03866 4.7502 6.85145 4.72502C6.63212 4.69554 6.35193 4.6197 6.11613 4.3839C5.88033 4.1481 5.8045 3.86791 5.77501 3.64859C5.74984 3.46137 5.74993 3.23958 5.75001 3.03447L5.75001 3.03446C5.74993 2.82935 5.74984 2.53866 5.77501 2.35145C5.8045 2.13212 5.88033 1.85193 6.11613 1.61613C6.35193 1.38033 6.63212 1.3045 6.85145 1.27501C7.03866 1.24984 7.26046 1.24993 7.46557 1.25001L7.46557 1.25001Z',
  d6: 'M6.12826 6L5.82172 6.35033C4.93235 7.36621 4.35756 8.02278 4.05344 8.83217C3.74932 9.64157 3.74955 10.5142 3.7499 11.8644L3.74993 16.0548C3.7499 17.4224 3.74989 18.5247 3.86645 19.3917C3.98747 20.2918 4.24636 21.0497 4.84828 21.6516C5.45019 22.2535 6.20807 22.5124 7.10817 22.6334C7.97514 22.75 9.07747 22.75 10.4451 22.7499H13.5548C14.9224 22.75 16.0247 22.75 16.8917 22.6334C17.7918 22.5124 18.5497 22.2535 19.1516 21.6516C19.7535 21.0497 20.0124 20.2918 20.1334 19.3917C20.25 18.5247 20.2499 17.4224 20.2499 16.0549L20.25 11.8644C20.2503 10.5142 20.2505 9.64157 19.9464 8.83217C19.6423 8.02278 19.0675 7.36621 18.1781 6.35033L17.8716 6H6.12826Z',
  d7: 'M11.9709 9.5C12.3851 9.5 12.7209 9.83579 12.7209 10.25V10.5677C12.9276 10.6136 13.1267 10.6774 13.3141 10.7559C14.0819 11.0775 14.8154 11.7227 14.9762 12.6173C15.0494 13.025 14.7784 13.4149 14.3707 13.4882C13.963 13.5614 13.5731 13.2904 13.4998 12.8827C13.4604 12.6635 13.2247 12.3447 12.7346 12.1394C12.2662 11.9433 11.7168 11.9233 11.2627 12.136C10.5546 12.4678 10.3999 12.9564 10.4367 13.2172C10.466 13.4245 10.6767 13.8303 11.5777 13.876C11.7052 13.8825 11.8491 13.8861 12.0009 13.8899C12.3456 13.8986 12.7306 13.9083 13.0537 13.9546C13.5775 14.0296 14.1378 14.2141 14.5974 14.7123C15.0475 15.2001 15.3394 16.0041 15.225 16.8028C15.0995 17.6777 14.5019 18.457 13.3595 18.82C13.147 18.8876 12.9334 18.9368 12.7209 18.969V19.25C12.7209 19.6642 12.3851 20 11.9709 20C11.5567 20 11.2209 19.6642 11.2209 19.25V18.9248C10.9001 18.8563 10.5966 18.7512 10.32 18.6161C9.49586 18.2135 8.74988 17.4467 8.74988 16.4331C8.74988 16.0189 9.08566 15.6831 9.49988 15.6831C9.91409 15.6831 10.2499 16.0189 10.2499 16.4331C10.2499 16.649 10.4308 17.0008 10.9783 17.2683C11.4979 17.5221 12.2071 17.6123 12.9053 17.3905C13.5416 17.1883 13.7025 16.8524 13.7401 16.5899C13.7887 16.2511 13.6482 15.8955 13.4949 15.7294C13.3512 15.5736 13.1658 15.4859 12.841 15.4394C12.602 15.4052 12.3729 15.4 12.0892 15.3937C11.918 15.3898 11.7269 15.3855 11.5018 15.3741C10.1217 15.3041 9.11126 14.5586 8.95147 13.427C8.79924 12.3489 9.48748 11.3113 10.6264 10.7777C10.8211 10.6865 11.0203 10.6182 11.2209 10.5706V10.25C11.2209 9.83579 11.5567 9.5 11.9709 9.5Z',
  d8: 'M19.5 22V9L16 5H8L4.5 9V22H19.5Z',
  d9: 'M9.5 15.6831C9.5 16.9125 11.3539 17.9204 13.1325 17.3553C14.9112 16.7901 14.6497 15.1248 14.0463 14.4708C13.4429 13.8169 12.555 13.9265 11.5399 13.8751C9.25873 13.7594 9.09769 11.5722 10.9447 10.7069C12.2997 10.072 14.0379 10.8862 14.2381 12M11.971 9V10.4777M11.971 17.7204V19',
  d10: 'M18 2V5H6V2H18Z',
  d11: 'M17.8716 6L6.12842 6L3.75 8.7182L3.75 22.75L20.25 22.75L20.25 8.7182L17.8716 6ZM11.221 9.5V10.3206C11.0204 10.3682 10.8212 10.4365 10.6265 10.5277C9.4876 11.0613 8.79936 12.0989 8.95159 13.177C9.11138 14.3086 10.1218 15.0541 11.5019 15.1241C11.727 15.1355 11.9181 15.1398 12.0893 15.1437C12.373 15.15 12.6021 15.1552 12.8412 15.1894C13.1659 15.2359 13.3513 15.3236 13.4951 15.4794C13.6483 15.6455 13.7888 16.0011 13.7403 16.3399C13.7026 16.6024 13.5417 16.9383 12.9054 17.1405C12.2072 17.3623 11.498 17.2721 10.9785 17.0183C10.431 16.7508 10.25 16.399 10.25 16.1831H8.75C8.75 17.1967 9.49598 17.9635 10.3201 18.3661C10.5967 18.5012 10.9003 18.6063 11.221 18.6748V19.5H12.721V18.719C12.9335 18.6868 13.1471 18.6376 13.3597 18.57C14.502 18.207 15.0996 17.4277 15.2251 16.5528C15.3396 15.7541 15.0476 14.9501 14.5975 14.4623C14.1379 13.9641 13.5776 13.7796 13.0538 13.7046C12.7307 13.6583 12.3458 13.6486 12.001 13.6399C11.8492 13.6361 11.7053 13.6325 11.5778 13.626C10.6768 13.5803 10.4661 13.1745 10.4369 12.9672C10.4 12.7064 10.5548 12.2178 11.2629 11.886C11.7169 11.6733 12.2663 11.6933 12.7347 11.8894C13.2248 12.0947 13.4606 12.4135 13.5 12.6327L14.9763 12.3673C14.8155 11.4727 14.0821 10.8275 13.3142 10.5059C13.1268 10.4274 12.9277 10.3636 12.721 10.3177L12.721 9.5H11.221Z',
  d12: 'M5.75 4.75H18.25V1.25H5.75V4.75Z',
};

export const IconMoneySavingJarStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-saving-jar-stroke-rounded IconMoneySavingJarStrokeRounded"
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

export const IconMoneySavingJarDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-saving-jar-duotone-rounded IconMoneySavingJarDuotoneRounded"
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

export const IconMoneySavingJarTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-saving-jar-twotone-rounded IconMoneySavingJarTwotoneRounded"
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

export const IconMoneySavingJarSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-saving-jar-solid-rounded IconMoneySavingJarSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMoneySavingJarBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-saving-jar-bulk-rounded IconMoneySavingJarBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySavingJarStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-saving-jar-stroke-sharp IconMoneySavingJarStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneySavingJarSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-saving-jar-solid-sharp IconMoneySavingJarSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoneySavingJar: TheIconSelfPack = {
  name: 'MoneySavingJar',
  StrokeRounded: IconMoneySavingJarStrokeRounded,
  DuotoneRounded: IconMoneySavingJarDuotoneRounded,
  TwotoneRounded: IconMoneySavingJarTwotoneRounded,
  SolidRounded: IconMoneySavingJarSolidRounded,
  BulkRounded: IconMoneySavingJarBulkRounded,
  StrokeSharp: IconMoneySavingJarStrokeSharp,
  SolidSharp: IconMoneySavingJarSolidSharp,
};