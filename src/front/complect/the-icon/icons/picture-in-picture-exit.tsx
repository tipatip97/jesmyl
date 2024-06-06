import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.5 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C21.947 6.29018 21.9976 8.05974 21.9999 11.5',
  d2: 'M20.5 14H15.5C14.6716 14 14 14.6716 14 15.5V18.5C14 19.3284 14.6716 20 15.5 20H20.5C21.3284 20 22 19.3284 22 18.5V15.5C22 14.6716 21.3284 14 20.5 14Z',
  d3: 'M6.00391 11.501L6.00391 9.00098C5.95641 8.42657 6.40047 7.97715 7.00391 8.00098L9.50391 8.00098M11.0039 13.001L7.00391 9.00098',
  d4: 'M3.81506 5.17157C2.35059 6.34315 2.35059 8.22876 2.35059 12C2.35059 15.7712 2.35059 17.6569 3.81506 18.8284C5.27952 20 7.63654 20 12.3506 20C13.7396 20 14.924 20 15.9412 19.97C15.4032 19.9266 15.0498 19.8205 14.7899 19.5607C14.3506 19.1213 14.3506 18.4142 14.3506 17C14.3506 15.5858 14.3506 14.8787 14.7899 14.4393C15.2293 14 15.9364 14 17.3506 14H19.3506C20.7648 14 21.4719 14 21.9113 14.4393C22.1219 14.65 22.2316 14.9223 22.2887 15.3046C22.3506 14.3989 22.3506 13.3139 22.3506 12C22.3506 8.22876 22.3506 6.34315 20.8861 5.17157C19.4217 4 17.0646 4 12.3506 4C7.63654 4 5.27952 4 3.81506 5.17157Z',
  d5: 'M11.8506 20H10.3506C6.57935 20 4.69374 20 3.52216 18.8284C2.35059 17.6569 2.35059 15.7712 2.35059 12C2.35059 8.22876 2.35059 6.34315 3.52216 5.17157C4.69374 4 6.57935 4 10.3506 4H14.3506C18.1218 4 20.0075 4 21.179 5.17157C22.2976 6.29018 22.3482 8.05974 22.3505 11.5',
  d6: 'M6.35211 11.5009V9.00091C6.30461 8.4265 6.74867 7.97708 7.35211 8.00091H9.85211M11.3521 13.0009L7.35211 9.00091',
  d7: 'M20.8506 14H15.8506C15.0222 14 14.3506 14.6716 14.3506 15.5V18.5C14.3506 19.3284 15.0222 20 15.8506 20H20.8506C21.679 20 22.3506 19.3284 22.3506 18.5V15.5C22.3506 14.6716 21.679 14 20.8506 14Z',
  d8: 'M6.06348 11.5012L5.97321 9.00091C5.94958 8.71517 6.04759 8.46036 6.22635 8.27935M9.49685 8.07698L6.97321 8.00091C6.66995 7.98893 6.40694 8.09648 6.22635 8.27935M6.22635 8.27935L10.9732 13.0009',
  d9: 'M14.0261 3.25C15.8081 3.24997 17.2445 3.24995 18.3742 3.40105C19.5471 3.55792 20.5346 3.89353 21.3189 4.67379C22.0672 5.41822 22.4091 6.34722 22.5757 7.44606C22.7381 8.51648 22.7489 9.44638 22.75 11.0983C22.7504 11.6352 22.3131 12.0708 21.7734 12.0711C21.2336 12.0715 20.7958 11.6365 20.7954 11.0996C20.7943 9.40675 20.7793 8.63405 20.6431 7.73621C20.5112 6.86679 20.2817 6.39182 19.9368 6.04872C19.5762 5.68995 19.0699 5.45604 18.1137 5.32815C17.1295 5.19651 15.825 5.19445 13.9546 5.19445H10.0455C8.1751 5.19445 6.87061 5.19651 5.88636 5.32815C4.93023 5.45604 4.4239 5.68995 4.06327 6.04872C3.70264 6.40748 3.46751 6.91119 3.33896 7.86238C3.20663 8.84154 3.20456 10.1393 3.20456 12C3.20456 13.8607 3.20663 15.1585 3.33896 16.1376C3.46751 17.0888 3.70264 17.5925 4.06327 17.9513C4.4239 18.3101 4.93023 18.544 5.88636 18.6718C6.87061 18.8035 8.1751 18.8056 10.0455 18.8056H11.0227C11.5625 18.8056 12 19.2408 12 19.7778C12 20.3147 11.5625 20.75 11.0227 20.75H9.97402C8.19199 20.75 6.75562 20.75 5.62592 20.599C4.45305 20.4421 3.46551 20.1065 2.68119 19.3262C1.89687 18.546 1.55952 17.5635 1.40184 16.3967C1.24995 15.2729 1.24997 13.8439 1.25 12.0712V12.0711V11.9289V11.9288C1.24997 10.1561 1.24995 8.72713 1.40184 7.60329C1.55952 6.43648 1.89687 5.45405 2.68119 4.67379C3.46551 3.89353 4.45305 3.55792 5.62592 3.40105C6.75561 3.24995 8.19197 3.24997 9.97398 3.25H9.974H14.0261H14.0261Z',
  d10: 'M11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071L7.77688 11.1911L6.67499 12.2929C6.52814 12.4061 6.34819 12.4797 6.1498 12.4965C5.59946 12.5429 5.11572 12.1343 5.06932 11.584C5.00051 10.9844 5.00365 10.4467 5.00051 10.046C4.99741 9.6513 5.0076 9.21159 5.05249 8.82706C5.07479 8.63608 5.10877 8.43016 5.16492 8.23776C5.21242 8.07499 5.31298 7.78434 5.54866 7.54866C5.78434 7.31299 6.07499 7.21243 6.23775 7.16493C6.43014 7.10878 6.63607 7.0748 6.82704 7.0525C7.21158 7.0076 7.65129 6.99742 8.04601 7.00051C8.44673 7.00364 9.03516 7.00051 9.584 7.0693C10.1343 7.11569 10.5429 7.59943 10.4965 8.14977C10.4797 8.34831 10.4061 8.5284 10.2929 8.67533L9.19116 9.77696L11.7071 12.2929C12.0976 12.6834 12.0976 13.3166 11.7071 13.7071Z',
  d11: 'M16.9506 13.25L17 13.25L19.0494 13.25H19.0494C19.7143 13.25 20.2871 13.2499 20.7458 13.3116C21.2375 13.3777 21.7087 13.5268 22.091 13.909C22.4732 14.2913 22.6223 14.7625 22.6884 15.2542C22.7501 15.7129 22.75 16.2858 22.75 16.9506V16.9506V17.0494V17.0494C22.75 17.7142 22.7501 18.2871 22.6884 18.7458C22.6223 19.2375 22.4732 19.7087 22.091 20.091C21.7087 20.4732 21.2375 20.6223 20.7458 20.6884C20.2871 20.7501 19.7142 20.75 19.0494 20.75H16.9506C16.2858 20.75 15.7129 20.7501 15.2542 20.6884C14.7625 20.6223 14.2913 20.4732 13.909 20.091C13.5268 19.7087 13.3777 19.2375 13.3116 18.7458C13.2499 18.2871 13.25 17.7143 13.25 17.0494V17.0494L13.25 17L13.25 16.9506V16.9506C13.25 16.2857 13.2499 15.7129 13.3116 15.2542C13.3777 14.7625 13.5268 14.2913 13.909 13.909C14.2913 13.5268 14.7625 13.3777 15.2542 13.3116C15.7129 13.2499 16.2857 13.25 16.9506 13.25H16.9506Z',
  d12: 'M14.0261 3.25C15.8081 3.24997 17.2445 3.24995 18.3742 3.40105C19.5471 3.55792 20.5346 3.89353 21.3189 4.67379C22.0672 5.41822 22.4091 6.34722 22.5757 7.44606C22.7381 8.51648 22.7489 9.37524 22.75 11.0271C22.7504 11.5641 22.3131 11.9996 21.7734 12C21.2336 12.0003 20.7958 11.5654 20.7954 11.0284C20.7943 9.3356 20.7793 8.63405 20.6431 7.73621C20.5112 6.86679 20.2817 6.39182 19.9368 6.04872C19.5762 5.68995 19.0699 5.45604 18.1137 5.32815C17.1295 5.19651 15.825 5.19445 13.9546 5.19445H10.0455C8.1751 5.19445 6.87061 5.19651 5.88636 5.32815C4.93023 5.45604 4.4239 5.68995 4.06327 6.04872C3.70264 6.40748 3.46751 6.91119 3.33896 7.86238C3.20663 8.84154 3.20456 10.1393 3.20456 12C3.20456 13.8607 3.20663 15.1585 3.33896 16.1376C3.46751 17.0888 3.70264 17.5925 4.06327 17.9513C4.4239 18.3101 4.93023 18.544 5.88636 18.6718C6.87061 18.8035 8.1751 18.8056 10.0455 18.8056H11.0227C11.5625 18.8056 12 19.2408 12 19.7778C12 20.3147 11.5625 20.75 11.0227 20.75H9.97402C8.19199 20.75 6.75562 20.75 5.62592 20.599C4.45305 20.4421 3.46551 20.1065 2.68119 19.3262C1.89687 18.546 1.55952 17.5635 1.40184 16.3967C1.24995 15.2729 1.24997 13.8439 1.25 12.0712V12.0711V11.9289V11.9288C1.24997 10.1561 1.24995 8.72713 1.40184 7.60329C1.55952 6.43648 1.89687 5.45405 2.68119 4.67379C3.46551 3.89353 4.45305 3.55792 5.62592 3.40105C6.75561 3.24995 8.19197 3.24997 9.97398 3.25H9.974H14.0261H14.0261Z',
  d13: 'M11 20H2V4H21.9999V11.5',
  d14: 'M14 14H22V20H14V14Z',
  d15: 'M10.9877 12.9875L6.39915 8.36216M6.01989 11.4929L6.01953 7.97949L9.48624 7.97953',
  d16: 'M1.25 4.22222C1.25 3.68528 1.68754 3.25 2.22727 3.25H21.7726C22.3124 3.25 22.7499 3.68528 22.7499 4.22222V11.5139H20.7953V5.19444H3.20455V18.8056H11.0227V20.75H2.22727C1.68754 20.75 1.25 20.3147 1.25 19.7778V4.22222Z',
  d17: 'M13.9766 13.9722H22.7493V20.7499H13.9766V13.9722Z',
  d18: 'M5.16016 7.13867L10.5324 7.13867V9.08312H8.49617L11.7132 12.2846L10.3308 13.6593L7.1147 10.4586L7.1147 12.4859H5.16016L5.16016 7.13867Z',
};

export const IconPictureInPictureExitStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="picture-in-picture-exit-stroke-rounded IconPictureInPictureExitStrokeRounded"
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

export const IconPictureInPictureExitDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="picture-in-picture-exit-duotone-rounded IconPictureInPictureExitDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconPictureInPictureExitTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="picture-in-picture-exit-twotone-rounded IconPictureInPictureExitTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPictureInPictureExitSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="picture-in-picture-exit-solid-rounded IconPictureInPictureExitSolidRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPictureInPictureExitBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="picture-in-picture-exit-bulk-rounded IconPictureInPictureExitBulkRounded"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="0.5" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPictureInPictureExitStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="picture-in-picture-exit-stroke-sharp IconPictureInPictureExitStrokeSharp"
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
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPictureInPictureExitSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="picture-in-picture-exit-solid-sharp IconPictureInPictureExitSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPictureInPictureExit: TheIconSelfPack = {
  name: 'PictureInPictureExit',
  StrokeRounded: IconPictureInPictureExitStrokeRounded,
  DuotoneRounded: IconPictureInPictureExitDuotoneRounded,
  TwotoneRounded: IconPictureInPictureExitTwotoneRounded,
  SolidRounded: IconPictureInPictureExitSolidRounded,
  BulkRounded: IconPictureInPictureExitBulkRounded,
  StrokeSharp: IconPictureInPictureExitStrokeSharp,
  SolidSharp: IconPictureInPictureExitSolidSharp,
};