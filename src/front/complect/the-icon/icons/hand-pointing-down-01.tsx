import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.83397 2.00138V2.94868C8.83397 3.59418 8.62523 4.22251 8.23867 4.74055L4.58024 9.64341C4.1583 10.2089 3.8213 10.9104 4.09987 11.5581C4.55082 12.6065 5.82305 13.2876 7.38027 11.7157L8.97786 10.0063V20.4294C9.03409 22.4726 12.3229 22.5739 12.4635 20.4294V14.4894C13.9439 14.6805 20.9175 13.6371 19.901 9.21686C19.8527 9.00686 19.8045 8.79374 19.7574 8.58346C19.5517 7.66469 18.9438 6.02726 18.2733 5.06998C17.5753 4.07344 17.8216 2.44361 17.8216 2',
  d2: 'M18.9943 6.31081C19.7012 7.78747 20.6685 10.6774 19.3168 12.0382C17.1859 14.1833 14.2057 14.576 12.4981 14.5V20.25C12.4981 21.2165 11.7148 22 10.7487 22C9.78249 22 8.99926 21.2165 8.99926 20.25V10L6.78343 12.3287C6.05965 12.9689 4.96583 12.8628 4.37033 12.0947C3.87487 11.4556 3.87821 10.5466 4.37835 9.91137L7.65836 5.57638C8.22977 4.82117 8.51551 4.44354 8.67257 4.00268C8.68651 3.96356 8.69965 3.92415 8.71199 3.88447C8.85112 3.43724 8.85112 2.95816 8.85112 2H17.8881V3.61802C17.8881 4.54364 18.6119 5.51198 18.9943 6.31081Z',
  d3: 'M8.83524 2.00138V2.94868C8.83524 3.59418 8.62657 4.22251 8.24014 4.74055L4.58297 9.64341C4.16117 10.2089 3.82429 10.9104 4.10277 11.5581C4.55356 12.6065 5.82535 13.2876 7.38204 11.7157L8.97908 10.0063V20.4294C9.03529 22.4726 12.323 22.5739 12.4635 20.4294V14.4894C13.9434 14.6805 20.9146 13.6371 19.8985 9.21686C19.8502 9.00686 19.802 8.79374 19.7549 8.58346C19.5493 7.66469 18.9416 6.02726 18.2713 5.06998C17.5736 4.07344 17.8198 2.44361 17.8198 2',
  d4: 'M17.8214 2C17.8214 2.44361 17.5751 4.07344 18.2731 5.06998C18.9436 6.02726 19.5515 7.66469 19.7572 8.58346C19.8043 8.79374 19.8525 9.00686 19.9008 9.21686C20.9173 13.6371 13.9437 14.6805 12.4633 14.4894V20.4294C12.3703 21.8475 10.9006 22.2836 9.89941 21.8254',
  d5: 'M8.25 20.25C8.25 21.6307 9.36929 22.75 10.75 22.75C12.1307 22.75 13.25 21.6307 13.25 20.25V15.2525C15.1139 15.1894 17.819 14.6138 19.8531 12.5668C20.789 11.6249 20.8445 10.2471 20.6737 9.1069C20.4975 7.93015 20.0471 6.7641 19.6749 5.98688C19.5556 5.77359 19.0742 4.8798 18.9725 4.67654C18.7561 4.24372 18.6419 3.89992 18.6419 3.61802C18.6419 3.35274 18.6419 3.08205 18.6248 2.87858C18.6063 2.65905 18.564 2.41913 18.4397 2.18353C18.2752 1.87161 18.0203 1.61668 17.7084 1.45214C17.4727 1.32786 17.2328 1.28555 17.0133 1.26708C16.8098 1.24996 16.5662 1.24998 16.3009 1.25H10.7164C10.4087 1.24997 10.1252 1.24995 9.88933 1.27336C9.63272 1.29882 9.16962 1.39965 8.9075 1.66177C8.6375 1.88929 8.48834 2.22105 8.3824 2.4938C8.26927 2.78506 8.14928 3.17067 8.00494 3.63451C7.89549 3.94162 7.6596 4.33239 7.06062 5.12375L3.78347 9.45347C3.0748 10.359 3.07179 11.6452 3.77682 12.5543C4.63524 13.6612 6.22827 13.8207 7.2802 12.8906L8.25 11.8758V20.25Z',
  d6: 'M8.84446 2.17676V4.17779L4.38488 10.0834L4.37622 10.0956C4.27662 10.2355 4.16486 10.3925 4.11537 10.5598C4.0217 10.8765 4.00037 10.9133 4.00988 11.2236C4.0179 11.4853 4.0734 11.7689 4.19995 11.9912C4.27359 12.1205 4.33062 12.2204 4.40275 12.3164C4.69038 12.6994 5.22152 12.9065 5.73522 12.9261C6.24584 12.9456 6.6806 12.6169 7.03255 12.2466C7.7248 11.5182 8.16687 10.9794 8.99112 10.1489V20.0999C8.98532 20.6308 9.13512 21.1983 9.49866 21.5505C10.3607 22.3855 11.1511 22.3841 12.0476 21.5779C12.4332 21.2312 12.5244 20.6832 12.5304 20.1385L12.5019 14.6873C15.0995 14.7927 17.7206 13.7814 19.0214 12.5006C20.0136 11.6337 20.123 10.7317 19.916 9.27128C19.6308 7.58438 19.0292 6.56131 17.8952 4.18715V2.17682',
  d7: 'M18.9819 4.53288C19.2107 5.01006 19.4874 5.58726 19.6788 5.98688C20.051 6.76409 20.5015 7.93015 20.6776 9.1069C20.8484 10.2471 20.7929 11.6249 19.857 12.5668C17.8229 14.6138 15.1178 15.1894 13.2539 15.2525V20.25C13.2539 21.6307 12.1346 22.75 10.7539 22.75C9.3732 22.75 8.25391 21.6307 8.25391 20.25L8.25391 11.8758L7.3083 12.8692L7.28411 12.8906C6.23218 13.8207 4.63915 13.6612 3.78073 12.5543C3.07568 11.6452 3.07871 10.3589 3.78742 9.45341L8.10571 3.75076V1.25H18.6458V3.8321L18.9819 4.53288Z',
};

export const IconHandPointingDown01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-01-stroke-rounded IconHandPointingDown01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-01-duotone-rounded IconHandPointingDown01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
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

export const IconHandPointingDown01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-01-twotone-rounded IconHandPointingDown01TwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-01-solid-rounded IconHandPointingDown01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-01-bulk-rounded IconHandPointingDown01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-01-stroke-sharp IconHandPointingDown01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPointingDown01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-pointing-down-01-solid-sharp IconHandPointingDown01SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHandPointingDown01: TheIconSelfPack = {
  name: 'HandPointingDown01',
  StrokeRounded: IconHandPointingDown01StrokeRounded,
  DuotoneRounded: IconHandPointingDown01DuotoneRounded,
  TwotoneRounded: IconHandPointingDown01TwotoneRounded,
  SolidRounded: IconHandPointingDown01SolidRounded,
  BulkRounded: IconHandPointingDown01BulkRounded,
  StrokeSharp: IconHandPointingDown01StrokeSharp,
  SolidSharp: IconHandPointingDown01SolidSharp,
};