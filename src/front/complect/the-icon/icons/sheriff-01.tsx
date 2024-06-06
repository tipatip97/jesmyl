import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 8C5.47582 13.3333 18.5242 13.3333 22 8',
  d2: 'M5 10L7.125 2.9922C7.76866 0.869541 9.27521 2.71887 10.5965 3.33984C11.4745 3.75243 12.5255 3.75243 13.4035 3.33984C14.7248 2.71887 16.2313 0.869541 16.875 2.9922L19 10',
  d3: 'M19 11C19 13.808 18.6968 16.4602 16.4312 18.0121C14.5873 19.2751 10.8574 19.3382 10 22',
  d4: 'M5 11C5 13.808 5.30317 16.4602 7.56884 18.0121C9.41265 19.2751 13.1426 19.3382 14 22',
  d5: 'M7.12521 2.9922L5.00021 10L4.83984 10.4381C8.82905 12.5176 15.1473 12.5206 19.1432 10.4471L19.0002 10L16.8752 2.9922C16.2316 0.869541 14.725 2.71887 13.4037 3.33984C12.5257 3.75243 11.4747 3.75243 10.5968 3.33984C9.27542 2.71887 7.76887 0.869541 7.12521 2.9922Z',
  d6: 'M19 11C19 13.808 18.6968 16.4602 16.4312 18.0121C14.5873 19.2751 10.8574 19.3382 10 22M5 11C5 13.808 5.30317 16.4602 7.56884 18.0121C9.41265 19.2751 13.1426 19.3382 14 22',
  d7: 'M17.5937 2.77473C17.4095 2.16754 17.1038 1.63064 16.5597 1.3818C16.0122 1.13144 15.4681 1.28494 15.0915 1.45117C14.7135 1.61797 14.3298 1.87702 14.0104 2.09258L13.9942 2.10356C13.643 2.34057 13.3525 2.5357 13.0854 2.66123C12.4095 2.97886 11.5923 2.97886 10.9165 2.66123C10.6494 2.5357 10.3588 2.34057 10.0077 2.10356L9.99146 2.0926C9.67211 1.87703 9.28835 1.61798 8.91039 1.45117C8.53371 1.28493 7.98965 1.13144 7.44218 1.3818C6.89801 1.63064 6.59232 2.16754 6.4082 2.77473L4.73254 8.30071C4.62287 8.66236 4.56804 8.84319 4.41236 8.8888C4.25668 8.9344 4.12144 8.81899 3.85095 8.58817C3.44369 8.24064 3.10332 7.8615 2.8379 7.45424C2.53636 6.99154 1.91681 6.86091 1.45412 7.16245C0.991421 7.464 0.860783 8.08354 1.16233 8.54624C2.18542 10.1161 3.86141 11.2232 5.74958 11.9358C7.64652 12.6518 9.83446 13.0002 12.0001 13.0002C14.1658 13.0002 16.3537 12.6518 18.2507 11.9358C20.1388 11.2232 21.8148 10.1161 22.8379 8.54624C23.1395 8.08354 23.0088 7.464 22.5461 7.16245C22.0834 6.86091 21.4639 6.99154 21.1623 7.45424C20.8972 7.86104 20.5573 8.23979 20.1507 8.587C19.8802 8.81794 19.7449 8.9334 19.5892 8.88781C19.4335 8.84222 19.3787 8.66136 19.269 8.29963L17.5937 2.77473Z',
  d8: 'M5.21875 10.25C5.75378 10.25 6.1875 10.6805 6.1875 11.2115C6.1875 13.9296 6.51459 15.9774 8.25477 17.1605C8.59334 17.3907 9.05505 17.5886 9.64704 17.8011C9.83425 17.8684 10.0425 17.9395 10.2606 18.0141C10.6762 18.1562 11.1278 18.3106 11.5395 18.4735C11.6908 18.5334 11.8449 18.5973 12 18.6663C12.1551 18.5973 12.3092 18.5334 12.4605 18.4735C12.8722 18.3106 13.3238 18.1562 13.7394 18.0141C13.9575 17.9395 14.1658 17.8684 14.353 17.8011C14.945 17.5886 15.4067 17.3907 15.7452 17.1605C17.4854 15.9774 17.8125 13.9296 17.8125 11.2115C17.8125 10.6805 18.2462 10.25 18.7812 10.25C19.3163 10.25 19.75 10.6805 19.75 11.2115C19.75 13.8933 19.4897 16.9457 16.8401 18.7471C16.2856 19.1241 15.6258 19.3891 15.012 19.6095C14.7629 19.6989 14.527 19.7793 14.2976 19.8576C14.1826 19.8967 14.0693 19.9354 13.9567 19.9743C14.3419 20.3821 14.6601 20.8788 14.8596 21.4934C15.0236 21.9989 14.7438 22.5406 14.2345 22.7034C13.7253 22.8662 13.1794 22.5885 13.0154 22.083C12.8484 21.5684 12.5082 21.1769 12 20.8438C11.4918 21.1769 11.1516 21.5684 10.9846 22.083C10.8206 22.5885 10.2747 22.8662 9.76548 22.7034C9.25622 22.5406 8.97637 21.9989 9.14041 21.4934C9.33986 20.8788 9.65813 20.3821 10.0433 19.9743C9.93074 19.9354 9.8174 19.8967 9.70244 19.8576C9.47296 19.7793 9.23706 19.6989 8.98802 19.6095C8.37417 19.3891 7.71439 19.1241 7.15986 18.7471C4.51029 16.9457 4.25 13.8933 4.25 11.2115C4.25 10.6805 4.68372 10.25 5.21875 10.25Z',
  d9: 'M5 10L8 2L10.5965 3.33984C11.4745 3.75243 12.5255 3.75243 13.4035 3.33984L16 2L19 10',
  d10: 'M7.16083 18.8888C4.51127 17.0739 4.25098 13.9986 4.25098 11.2966H6.18848C6.18848 14.0351 6.51556 16.0984 8.25575 17.2904C8.59432 17.5223 9.05603 17.7217 9.64802 17.9358C9.83522 18.0035 10.0434 18.0752 10.2616 18.1504C10.6771 18.2935 11.1288 18.4491 11.5405 18.6132C11.6918 18.6735 11.8459 18.7379 12.001 18.8075C12.1561 18.7379 12.3102 18.6735 12.4615 18.6132C12.8731 18.4491 13.3248 18.2935 13.7403 18.1504C13.9585 18.0752 14.1667 18.0035 14.3539 17.9358C14.9459 17.7217 15.4076 17.5223 15.7462 17.2904C17.4864 16.0984 17.8135 14.0351 17.8135 11.2966H19.751C19.751 13.9986 19.4907 17.0739 16.8411 18.8888C16.2866 19.2687 15.6268 19.5357 15.013 19.7578C14.7639 19.8478 14.528 19.9289 14.2985 20.0077C14.1836 20.0472 14.0702 20.0861 13.9577 20.1253C14.3428 20.5362 14.6611 21.0366 14.8606 21.6558L13.0164 22.2499C12.8494 21.7314 12.5092 21.337 12.001 21.0013C11.4928 21.337 11.1526 21.7314 10.9856 22.2499L9.14138 21.6558C9.34083 21.0366 9.65911 20.5362 10.0443 20.1253C9.93172 20.0861 9.81837 20.0472 9.70341 20.0077C9.47393 19.9289 9.23803 19.8479 8.98899 19.7578C8.37515 19.5357 7.71536 19.2687 7.16083 18.8888Z',
  d11: 'M8.34304 1.8335C8.15265 1.73526 7.92934 1.72313 7.72943 1.80017C7.52952 1.87721 7.3721 2.03606 7.29688 2.23666L4.55123 9.55837C3.85824 9.09273 3.30309 8.55419 2.912 7.9541L1.25 9.03725C2.2648 10.5944 3.92721 11.6925 5.8001 12.3994C7.68167 13.1095 9.85189 13.4552 12 13.4552C14.1481 13.4552 16.3183 13.1095 18.1999 12.3994C20.0728 11.6925 21.7352 10.5944 22.75 9.03725L21.088 7.9541C20.6966 8.55459 20.141 9.09346 19.4474 9.55932L16.7014 2.23666C16.6261 2.03606 16.4687 1.87721 16.2688 1.80017C16.0689 1.72313 15.8456 1.73526 15.6552 1.8335L13.0718 3.16654C12.4022 3.47687 11.5961 3.47687 10.9264 3.16654L8.34304 1.8335Z',
};

export const IconSheriff01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sheriff-01-stroke-rounded IconSheriff01StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSheriff01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sheriff-01-duotone-rounded IconSheriff01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSheriff01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sheriff-01-twotone-rounded IconSheriff01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSheriff01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sheriff-01-solid-rounded IconSheriff01SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSheriff01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sheriff-01-bulk-rounded IconSheriff01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSheriff01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sheriff-01-stroke-sharp IconSheriff01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconSheriff01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sheriff-01-solid-sharp IconSheriff01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfSheriff01: TheIconSelfPack = {
  name: 'Sheriff01',
  StrokeRounded: IconSheriff01StrokeRounded,
  DuotoneRounded: IconSheriff01DuotoneRounded,
  TwotoneRounded: IconSheriff01TwotoneRounded,
  SolidRounded: IconSheriff01SolidRounded,
  BulkRounded: IconSheriff01BulkRounded,
  StrokeSharp: IconSheriff01StrokeSharp,
  SolidSharp: IconSheriff01SolidSharp,
};