import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.64331 22 11.75C22 12.0369 22.0005 12.0137 22 12.5M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.94493 20.4921 11 20.4994',
  d2: 'M17.7057 20.9414C18.4593 21.6862 19.6812 21.6862 20.4348 20.9414C21.1884 20.1966 21.1884 18.9891 20.4348 18.2443L18.7291 16.5586C18.0629 15.9002 17.0309 15.8238 16.2799 16.3294M16.2943 14.0586C15.5407 13.3138 14.3188 13.3138 13.5652 14.0586C12.8116 14.8034 12.8116 16.0109 13.5652 16.7557L15.2709 18.4414C15.9493 19.1119 17.0072 19.1788 17.7613 18.6421',
  d3: 'M12 20.5H13.25C16.7612 20.5 18.5167 20.5 19.7779 19.6573C20.3238 19.2926 20.7926 18.8238 21.1573 18.2779C22 17.0167 22 15.2612 22 11.75C22 9.64331 22 8.58996 21.4944 7.83329C21.2755 7.50572 20.9943 7.22447 20.6667 7.00559C19.91 6.5 18.8567 6.5 16.75 6.5H12L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.92893 20.5 7.28595 20.5 12 20.5Z',
  d4: 'M11.0036 11.362C12.3352 10.046 14.4892 10.046 15.8208 11.362C16.2136 11.7502 16.2174 12.3833 15.8292 12.7762C15.4409 13.169 14.8078 13.1727 14.415 12.7845C13.8625 12.2385 12.9619 12.2385 12.4094 12.7845C11.8635 13.324 11.8635 14.1938 12.4094 14.7334L14.5416 16.8405C15.0375 17.3306 15.8177 17.3823 16.3719 16.9879C16.8219 16.6677 17.4462 16.7729 17.7664 17.2229C18.0866 17.6729 17.9814 18.2972 17.5315 18.6174C16.2003 19.5647 14.3358 19.4491 13.1357 18.263L11.0036 16.1559C9.66547 14.8335 9.66547 12.6844 11.0036 11.362L11.0036 11.362ZM14.5415 14.0821C15.8667 13.1901 17.6857 13.3222 18.8643 14.487L20.9964 16.5941C22.3345 17.9165 22.3345 20.0656 20.9964 21.388C19.6648 22.704 17.5108 22.704 16.1792 21.388C15.7864 20.9998 15.7826 20.3667 16.1708 19.9738C16.5591 19.581 17.1922 19.5773 17.585 19.9655C18.1375 20.5115 19.0381 20.5115 19.5906 19.9655C20.1365 19.426 20.1365 18.5562 19.5906 18.0166L17.4584 15.9095C16.9717 15.4285 16.2106 15.3695 15.6582 15.7413C15.2 16.0497 14.5786 15.9282 14.2702 15.4701C13.9619 15.0119 14.0833 14.3905 14.5415 14.0821Z',
  d5: 'M7.08264 1.62504C8.11205 1.62458 8.82373 1.62427 9.4626 1.86384C10.8581 2.38713 11.4704 3.62629 11.9425 4.58144C12.0838 4.86416 12.3409 5.37777 12.4128 5.49071C12.4348 5.52763 12.5044 5.60325 12.6064 5.61039C12.7396 5.62415 12.92 5.62508 13.2361 5.62508L16.7905 5.62508C17.8095 5.62507 18.6312 5.62506 19.2905 5.69213C19.9711 5.76136 20.5613 5.90821 21.0834 6.25707C21.4929 6.53066 21.8444 6.88223 22.118 7.29169C22.4669 7.8138 22.6137 8.404 22.683 9.08456C22.75 9.74389 22.75 10.6483 22.75 11.6673C22.75 12.9602 22.75 14.2812 22.7036 15.3134C22.6985 15.4268 22.696 15.4835 22.6917 15.5054C22.6467 15.7358 22.4097 15.8286 22.2202 15.69C22.2022 15.6769 22.1517 15.627 22.0508 15.5272L19.9187 13.4201C19.3811 12.8888 18.7519 12.5071 18.0825 12.2742C17.8628 12.1977 17.7529 12.1595 17.7 12.0968C17.647 12.0341 17.6255 11.9075 17.5827 11.6542C17.4984 11.1556 17.2624 10.6777 16.8752 10.2951C14.9593 8.40164 11.8651 8.40164 9.9492 10.2951L9.94578 10.2985C8.01693 12.2084 8.01807 15.3143 9.9492 17.2228L12.0813 19.3299C12.6891 19.9306 13.4143 20.3402 14.1822 20.5597C14.2986 20.5929 14.3793 20.699 14.3862 20.8198C14.3953 20.9792 14.2757 21.1243 14.1161 21.1246C13.8514 21.1251 13.5769 21.1251 13.2923 21.1251H11.9426C9.63423 21.1251 7.82519 21.1251 6.41371 20.9353C4.96897 20.7411 3.82895 20.3358 2.93414 19.4409C2.03933 18.5461 1.63399 17.4061 1.43975 15.9614C1.24998 14.5499 1.24999 12.7408 1.25 10.4325V7.28457C1.24999 6.40584 1.24999 5.69712 1.30044 5.12478C1.35242 4.53504 1.46238 4.01896 1.7254 3.54766C2.06428 2.94041 2.56533 2.43935 3.17258 2.10048C3.64388 1.83746 4.15996 1.7275 4.7497 1.67552C5.32205 1.62506 6.2039 1.62503 7.08264 1.62504Z',
  d6: 'M17.7041 20.9414C18.4581 21.6862 19.6806 21.6862 20.4345 20.9414C21.1885 20.1966 21.1885 18.9891 20.4345 18.2443L18.728 16.5586C18.0615 15.9002 17.029 15.8238 16.2776 16.3294M16.292 14.0586C15.538 13.3138 14.3155 13.3138 13.5616 14.0586C12.8076 14.8034 12.8076 16.0109 13.5616 16.7557L15.2681 18.4414C15.9468 19.1119 17.0053 19.1788 17.7597 18.6421',
  d7: 'M6.9829 6.5112H21.8936C21.9489 6.5112 21.9936 6.55597 21.9936 6.6112V14.0538M12.0042 20.4987H2.09712C2.04186 20.4987 1.99707 20.454 1.99707 20.3987L1.99718 2.60139C1.99718 2.54616 2.04197 2.50139 2.09722 2.50139L8.97096 2.50098L12.0469 6.5112',
  d8: 'M13.6123 13.5973C14.7555 12.4676 16.6041 12.4676 17.7472 13.5973L16.3414 15.0199C15.9773 14.66 15.3822 14.66 15.0181 15.0199C14.6606 15.3732 14.6606 15.9411 15.0181 16.2944L16.7238 17.9801C17.0501 18.3026 17.5659 18.3376 17.9315 18.0774L19.0911 19.7069C17.9485 20.52 16.3485 20.4211 15.318 19.4027L13.6123 17.717L14.3152 17.0057L13.6123 17.717C12.4626 16.5807 12.4626 14.7336 13.6123 13.5973L13.6123 13.5973ZM16.4715 15.7498C17.609 14.9842 19.1699 15.0971 20.182 16.0973L21.8877 17.783C23.0374 18.9193 23.0374 20.7664 21.8877 21.9027C20.7445 23.0324 18.8959 23.0324 17.7528 21.9027L19.1586 20.4801C19.5227 20.84 20.1178 20.84 20.4819 20.4801C20.8394 20.1268 20.8394 19.5589 20.4819 19.2056L18.7762 17.5199C18.456 17.2034 17.9529 17.1635 17.5882 17.4089L16.4715 15.7498Z',
  d9: 'M1.46967 1.46967C1.61032 1.32902 1.80109 1.25 2 1.25L9.375 1.25001L12.375 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6V16.5263L21.2364 15.0304C20.7275 14.5275 20.1279 14.1733 19.4909 13.9669L19.8685 13.5848L18.8016 12.5304C17.0947 10.8435 14.3516 10.8234 12.62 12.4702L12.6138 12.4752L12.5579 12.5304C11.189 13.8833 10.8947 15.9036 11.6749 17.5434L11.491 17.7295L14.2636 20.4696C14.364 20.5688 14.468 20.6623 14.5751 20.75H2C1.58579 20.75 1.25 20.4142 1.25 20V2C1.25 1.80109 1.32902 1.61032 1.46967 1.46967Z',
};

export const IconFolderLinksStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-links-stroke-rounded IconFolderLinksStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFolderLinksDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-links-duotone-rounded IconFolderLinksDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconFolderLinksTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-links-twotone-rounded IconFolderLinksTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconFolderLinksSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-links-solid-rounded IconFolderLinksSolidRounded"
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

export const IconFolderLinksBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-links-bulk-rounded IconFolderLinksBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderLinksStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-links-stroke-sharp IconFolderLinksStrokeSharp"
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

export const IconFolderLinksSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-links-solid-sharp IconFolderLinksSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfFolderLinks: TheIconSelfPack = {
  name: 'FolderLinks',
  StrokeRounded: IconFolderLinksStrokeRounded,
  DuotoneRounded: IconFolderLinksDuotoneRounded,
  TwotoneRounded: IconFolderLinksTwotoneRounded,
  SolidRounded: IconFolderLinksSolidRounded,
  BulkRounded: IconFolderLinksBulkRounded,
  StrokeSharp: IconFolderLinksStrokeSharp,
  SolidSharp: IconFolderLinksSolidSharp,
};