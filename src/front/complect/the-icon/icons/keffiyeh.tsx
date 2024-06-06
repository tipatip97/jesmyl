import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 5H18',
  d2: 'M17.62 7.83371C16.8666 4.40421 14.9933 2 12 2C9.00669 2 7.13336 4.40421 6.38003 7.83371C5.86608 10.1734 4.74087 12.3564 3.55134 14.4304C3.22035 15.0076 3 15.5955 3 16.1316C3 17.1729 3.79818 18.2142 4.57112 19.3941C5.65943 21.0553 6.20358 21.8859 6.56891 21.9853C6.93423 22.0846 7.7456 21.6785 9.36831 20.8665C10.2012 20.4496 11.0848 20.1692 12 20.1692C12.9152 20.1692 13.7988 20.4496 14.6317 20.8665C16.2544 21.6785 17.0658 22.0846 17.4311 21.9853C17.7964 21.8859 18.3406 21.0553 19.4289 19.3941C20.2018 18.2142 21 17.1729 21 16.1316C21 15.5955 20.7796 15.0076 20.4487 14.4304C19.2591 12.3564 18.1339 10.1734 17.62 7.83371Z',
  d3: 'M6.5 22C7.01593 20.596 7.57692 17.3641 6.96996 15.8262C6.53677 14.7286 7.07434 13.631 7.78352 12.7813C8.23628 12.2389 8.58177 11.6075 8.768 10.9225C9.29923 8.96859 10.3923 8 12 8C13.6077 8 14.7008 8.96859 15.232 10.9225C15.4182 11.6075 15.7637 12.2389 16.2165 12.7813C16.9257 13.631 17.4632 14.7286 17.03 15.8262C16.4231 17.3641 16.9841 20.596 17.5 22',
  d4: 'M12 2C14.9933 2 16.8666 4.40421 17.62 7.83371C18.1339 10.1734 19.2591 12.3564 20.4487 14.4304C20.7796 15.0076 21 15.5955 21 16.1316C21 17.039 20.3939 17.9465 19.7265 18.9456L19.7264 18.9457C19.628 19.0931 19.5282 19.2424 19.4289 19.3941C18.3406 21.0553 17.7964 21.8859 17.4311 21.9853C17.236 22.0383 16.9138 21.9472 16.4087 21.7272C16.9344 21.9433 17.2598 21.5029 17.129 20.9386C16.7604 19.3474 16.5454 17.0527 17.0295 15.8262C17.4627 14.7286 16.9251 13.631 16.2159 12.7813C15.7632 12.2389 15.4177 11.6075 15.2314 10.9225C14.7002 8.96859 13.6071 8 11.9995 8C10.3918 8 9.29868 8.96859 8.76745 10.9225C8.58122 11.6075 8.23573 12.2389 7.78297 12.7813C7.07379 13.631 6.53623 14.7286 6.96941 15.8262C7.45349 17.0527 7.23849 19.3474 6.86987 20.9386L6.56891 21.9853C6.20358 21.8859 5.65943 21.0553 4.57112 19.3941C4.47174 19.2424 4.37194 19.093 4.27348 18.9456C3.60612 17.9465 3 17.039 3 16.1316C3 15.5955 3.22035 15.0076 3.55134 14.4304C4.74087 12.3564 5.86608 10.1734 6.38003 7.83371C7.13336 4.40421 9.00669 2 12 2Z',
  d5: 'M5.25 4.75C5.25 4.33579 5.58579 4 6 4H18C18.4142 4 18.75 4.33579 18.75 4.75C18.75 5.16421 18.4142 5.5 18 5.5H6C5.58579 5.5 5.25 5.16421 5.25 4.75Z',
  d6: 'M6.26691 6.74219C5.78196 6.74219 5.72684 7.31246 5.6475 7.67368C5.15966 9.89455 4.08473 11.9938 2.90075 14.0582C2.54201 14.6837 2.25 15.4066 2.25 16.1325C2.25 16.8406 2.5199 17.4944 2.83869 18.0735C3.07565 18.5039 3.37549 18.9527 3.66494 19.3859C4.1959 20.1964 4.90809 21.278 5.23908 21.7235C5.53065 22.116 5.87659 22.5751 6.37212 22.7099C6.84936 22.8396 7.3535 22.6433 7.78887 22.4594C9.15832 21.8811 10.4577 20.9201 12 20.9201C13.5423 20.9201 14.8417 21.8811 16.2111 22.4594C16.6465 22.6433 17.1506 22.8396 17.6279 22.7099C18.1234 22.5751 18.4693 22.116 18.7609 21.7235C19.0919 21.278 19.8041 20.1964 20.3351 19.386C20.3351 19.386 20.9243 18.5039 21.1613 18.0735C21.4801 17.4944 21.75 16.8406 21.75 16.1325C21.75 15.4066 21.458 14.6837 21.0993 14.0582C19.9153 11.9938 18.8403 9.89455 18.3525 7.67368C18.2732 7.31246 18.218 6.74219 17.7331 6.74219H6.26691ZM14.9674 20.1966C15.3835 20.4049 15.7382 20.5823 16.042 20.7299C16.1915 20.8025 16.357 20.67 16.3225 20.5074C15.984 18.9161 15.7384 17.057 16.3325 15.5517C16.6075 14.8549 16.3046 14.0581 15.6408 13.2628C15.1256 12.6455 14.7256 11.919 14.5084 11.1201C14.2669 10.232 13.9185 9.64716 13.5181 9.28698C12.7083 8.55837 11.2919 8.55837 10.4821 9.28698C10.0817 9.64717 9.7333 10.232 9.49183 11.1201C9.27464 11.919 8.87459 12.6455 8.35941 13.2628C7.69556 14.0581 7.39269 14.8549 7.6677 15.5517C8.26177 17.057 8.01616 18.9161 7.67773 20.5074C7.64315 20.67 7.80866 20.8025 7.95817 20.7299C8.26197 20.5823 8.61668 20.4049 9.03276 20.1966C10.9859 19.2192 13.0143 19.2192 14.9674 20.1966Z',
  d7: 'M7.79545 3.12613C8.86406 1.95133 10.2777 1.25 12.0002 1.25C13.7228 1.25 15.1364 1.95133 16.205 3.12613C16.7517 3.72718 17.2036 4.44607 17.5669 5.25H6.43359C6.7969 4.44607 7.24874 3.72718 7.79545 3.12613Z',
  d8: 'M14.9674 20.1968C15.3835 20.4049 15.7382 20.5821 16.042 20.7296C16.1915 20.8022 16.357 20.6698 16.3225 20.5073C15.984 18.9173 15.7384 17.0597 16.3325 15.5557C16.6075 14.8594 16.3046 14.0633 15.6408 13.2686C15.1256 12.6518 14.7256 11.9259 14.5084 11.1277C14.2669 10.2403 13.9185 9.65591 13.5181 9.29601C12.7083 8.568 11.2919 8.568 10.4821 9.29601C10.0817 9.65591 9.7333 10.2403 9.49183 11.1277C9.27464 11.9259 8.87459 12.6518 8.35941 13.2686C7.69556 14.0633 7.39269 14.8594 7.6677 15.5557C8.26177 17.0597 8.01616 18.9173 7.67773 20.5073C7.64315 20.6698 7.80866 20.8022 7.95817 20.7296C8.26197 20.5821 8.61668 20.4049 9.03276 20.1968C10.9859 19.2202 13.0143 19.2202 14.9674 20.1968Z',
  d9: 'M5 5H19',
  d10: 'M5.6475 7.6728C5.67874 7.53056 5.71191 7.38959 5.74702 7.25H18.253C18.2881 7.38959 18.3213 7.53056 18.3525 7.6728C18.8403 9.89367 19.9153 11.9929 21.0993 14.0573C21.458 14.6828 21.75 15.4058 21.75 16.1316C21.75 16.8397 21.4801 17.4935 21.1613 18.0726C20.9244 18.503 20.6244 18.952 20.3349 19.3853C20.2401 19.5272 20.1463 19.6676 20.0562 19.8051L20.0406 19.829C19.5096 20.6394 19.0919 21.2771 18.7609 21.7226C18.5938 21.9477 18.4309 22.1483 18.2711 22.306C18.1245 22.4506 17.909 22.6325 17.6279 22.709C17.3567 22.7827 17.0912 22.7436 16.8922 22.6957C16.6811 22.6449 16.4513 22.56 16.2111 22.4586C15.7374 22.2585 15.1116 21.9453 14.3232 21.5507L14.296 21.5372C13.5283 21.1529 12.7617 20.9192 12 20.9192C11.2383 20.9192 10.4717 21.1529 9.70396 21.5372L9.67685 21.5507C8.88844 21.9453 8.26261 22.2585 7.78887 22.4586C7.54871 22.56 7.31893 22.6449 7.1078 22.6957C6.90879 22.7436 6.64334 22.7827 6.37212 22.709C6.09101 22.6325 5.87547 22.4506 5.72893 22.306C5.56913 22.1483 5.40624 21.9477 5.23908 21.7226C4.90809 21.2771 4.49036 20.6394 3.9594 19.829L3.94376 19.8051C3.85367 19.6676 3.75987 19.5272 3.66496 19.3851C3.37551 18.9519 3.07566 18.503 2.83869 18.0726C2.5199 17.4935 2.25 16.8397 2.25 16.1316C2.25 15.4058 2.54201 14.6828 2.90075 14.0573C4.08473 11.9929 5.15966 9.89367 5.6475 7.6728ZM9.03191 20.1958C8.43559 20.4942 7.96532 20.7293 7.59032 20.9042C7.72066 20.3281 7.83137 19.6867 7.9017 19.045C8.03226 17.8539 8.04317 16.5022 7.6677 15.5509C7.39269 14.8541 7.69556 14.0573 8.35941 13.2619C8.87459 12.6447 9.27464 11.9181 9.49183 11.1193C9.7333 10.2311 10.0817 9.64629 10.4821 9.2861C10.869 8.93795 11.3589 8.75 12.0001 8.75C12.6413 8.75 13.1312 8.93795 13.5181 9.2861C13.9185 9.64629 14.2669 10.2311 14.5084 11.1193C14.7256 11.9181 15.1256 12.6447 15.6408 13.2619C16.3046 14.0573 16.6075 14.8541 16.3325 15.5509C15.957 16.5022 15.9679 17.8539 16.0985 19.045C16.1689 19.687 16.2797 20.3287 16.4101 20.9051C16.0348 20.7301 15.5639 20.4947 14.9666 20.1958C14.0685 19.7463 13.068 19.4192 11.9993 19.4192C10.9305 19.4192 9.92997 19.7463 9.03191 20.1958Z',
  d11: 'M7.79521 3.12613C8.86382 1.95133 10.2774 1.25 12 1.25C13.7226 1.25 15.1362 1.95133 16.2048 3.12613C16.5132 3.46521 16.7915 3.8418 17.0406 4.25H19V5.75H5V4.25H6.95937C7.20855 3.8418 7.48678 3.46521 7.79521 3.12613Z',
};

export const IconKeffiyehStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keffiyeh-stroke-rounded IconKeffiyehStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeffiyehDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keffiyeh-duotone-rounded IconKeffiyehDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeffiyehTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keffiyeh-twotone-rounded IconKeffiyehTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeffiyehSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keffiyeh-solid-rounded IconKeffiyehSolidRounded"
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKeffiyehBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keffiyeh-bulk-rounded IconKeffiyehBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconKeffiyehStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keffiyeh-stroke-sharp IconKeffiyehStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconKeffiyehSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="keffiyeh-solid-sharp IconKeffiyehSolidSharp"
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

export const iconPackOfKeffiyeh: TheIconSelfPack = {
  name: 'Keffiyeh',
  StrokeRounded: IconKeffiyehStrokeRounded,
  DuotoneRounded: IconKeffiyehDuotoneRounded,
  TwotoneRounded: IconKeffiyehTwotoneRounded,
  SolidRounded: IconKeffiyehSolidRounded,
  BulkRounded: IconKeffiyehBulkRounded,
  StrokeSharp: IconKeffiyehStrokeSharp,
  SolidSharp: IconKeffiyehSolidSharp,
};