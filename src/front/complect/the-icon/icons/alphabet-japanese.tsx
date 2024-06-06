import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.0078 3C9.5913 7 7.06961 14 11.5 21',
  d2: 'M3 5.31913C6.70588 6.19855 15.1765 6.63826 21 4',
  d3: 'M16.0034 10C16.4981 13 12.5403 19.5 7.15287 19.9565C0.934783 20.4834 4.62421 11 12.0451 11.5C18.2926 11.921 22.0322 16.8261 15.7923 21',
  d4: 'M12.0451 11.5001C4.62426 11.0001 0.934856 20.4834 7.15292 19.9566C11.3618 19.6 14.698 15.5548 15.7204 12.3715C14.6692 11.9015 13.4177 11.5925 12.0451 11.5001Z',
  d5: 'M16.0034 10C16.4981 13 12.5403 19.5 7.15292 19.9565C0.934856 20.4834 4.62426 11 12.0451 11.5C18.2926 11.921 22.0322 16.8261 15.7923 21',
  d6: 'M11.3419 2.05763C11.8625 2.242 12.1351 2.81349 11.9507 3.33409L11.9492 3.33838C11.7698 3.84486 11.5764 4.39104 11.3835 4.97192C14.5623 4.8482 17.9015 4.30627 20.5876 3.08939C21.0906 2.86148 21.6832 3.08454 21.9111 3.58761C22.139 4.09068 21.916 4.68325 21.4129 4.91116C18.3348 6.30563 14.6155 6.86625 11.2393 6.97842C11.0832 6.9836 10.9277 6.98783 10.7727 6.99115C9.74872 10.8109 9.29037 15.6388 12.3452 20.4655C12.6406 20.9321 12.5017 21.5499 12.035 21.8453C11.5684 22.1406 10.9506 22.0017 10.6552 21.5351C7.32607 16.275 7.70295 11.0161 8.70683 6.98214C6.33097 6.91096 4.22353 6.63747 2.76934 6.29238C2.23197 6.16486 1.89973 5.62587 2.02725 5.08851C2.15477 4.55115 2.69376 4.2189 3.23112 4.34642C4.632 4.67886 6.80211 4.95337 9.27135 4.99486C9.52779 4.18367 9.78895 3.44667 10.0187 2.79822C10.0344 2.75388 10.05 2.70996 10.0654 2.66645C10.2498 2.14585 10.8213 1.87327 11.3419 2.05763Z',
  d7: 'M15.8412 9.01348C16.3861 8.92362 16.9007 9.29252 16.9906 9.83744C17.0929 10.4577 17.0476 11.1435 16.8971 11.845C18.0444 12.4919 18.9531 13.3498 19.4893 14.3816C20.0909 15.5391 20.1857 16.8631 19.6444 18.1915C19.1154 19.4895 18.0113 20.7193 16.3488 21.8313C15.8897 22.1384 15.2687 22.0152 14.9616 21.5561C14.6545 21.0971 14.7778 20.476 15.2368 20.169C16.6943 19.1941 17.4627 18.2455 17.7923 17.4367C18.1095 16.6583 18.049 15.9471 17.7147 15.3039C17.432 14.76 16.9313 14.2354 16.2447 13.7885C15.8287 14.7168 15.2621 15.6618 14.5736 16.5464C12.8732 18.7312 10.308 20.693 7.23783 20.9531C5.44642 21.1049 4.02426 20.5408 3.36058 19.2424C2.74778 18.0436 2.97905 16.5691 3.5828 15.307C4.8098 12.7419 7.94438 10.2216 12.1128 10.5024C13.1286 10.5709 14.1075 10.7527 15.01 11.0368C15.0564 10.6937 15.0562 10.3992 15.0172 10.1629C14.9274 9.61794 15.2963 9.10334 15.8412 9.01348ZM14.4295 12.9484C13.7035 12.7178 12.8816 12.5588 11.9784 12.4979C8.72598 12.2788 6.30541 14.2501 5.387 16.17C4.91805 17.1504 4.92904 17.9167 5.14142 18.3322C5.3029 18.6481 5.75135 19.0719 7.06898 18.9602C9.38629 18.7639 11.4936 17.2474 12.9953 15.318C13.5974 14.5445 14.0824 13.7282 14.4295 12.9484Z',
  d8: 'M9.94358 2.63063C9.95917 2.58668 9.97462 2.54313 9.98991 2.5L11.8607 3.16189L11.8592 3.16614C11.6812 3.66826 11.4892 4.20974 11.2978 4.78562C14.4522 4.66296 17.7656 4.1257 20.431 2.91929L21.25 4.72538C18.1956 6.10784 14.505 6.66363 11.1548 6.77484C10.9999 6.77998 10.8455 6.78417 10.6918 6.78746C10.3937 7.89813 10.144 9.0948 10.0163 10.3522C10.6525 10.2538 11.3223 10.2216 12.0213 10.2686C13.0423 10.3374 14.0106 10.5186 14.8963 10.7972C14.9424 10.4556 14.9416 10.1643 14.9033 9.93198L16.8614 9.60937C16.9634 10.2275 16.9171 10.9086 16.7684 11.6006C18.4188 12.5344 19.643 13.9493 19.8254 15.7064C20.0384 17.7583 18.7859 19.7883 16.2246 21.5L15.1212 19.8519C17.3914 18.3348 17.9557 16.9152 17.8514 15.911C17.7656 15.0844 17.1979 14.221 16.122 13.5247C15.4843 14.9471 14.4875 16.4141 13.23 17.6416C12.7292 18.1304 12.1797 18.5882 11.5871 18.9922C11.7873 19.3764 12.0084 19.7611 12.2521 20.1458L10.5752 21.2062C10.3102 20.7878 10.0688 20.3694 9.84953 19.9517C9.01625 20.3091 8.12396 20.5497 7.18378 20.6293C5.40617 20.7798 3.99496 20.2206 3.33638 18.9334C2.72831 17.7449 2.95779 16.2831 3.55689 15.0318C4.33426 13.4082 5.88326 11.8026 7.97825 10.9264C8.07077 9.44687 8.32477 8.05121 8.64178 6.77853C6.28421 6.70797 4.19299 6.43682 2.75 6.09471L3.20823 4.1655C4.59833 4.49508 6.75173 4.76722 9.20195 4.80836C9.45642 4.00415 9.71557 3.2735 9.94358 2.63063ZM7.96914 13.1398C6.73971 13.8467 5.8323 14.8743 5.3472 15.8874C4.88186 16.8593 4.89277 17.619 5.10351 18.0309C5.26375 18.3441 5.70874 18.7643 7.01623 18.6536C7.71021 18.5949 8.38544 18.4173 9.03169 18.1443C8.37774 16.4354 8.06039 14.7526 7.96914 13.1398ZM10.7752 17.1365C11.1478 16.8601 11.5047 16.5536 11.8431 16.2233C12.9362 15.1563 13.789 13.8851 14.3196 12.6946C13.5898 12.4631 12.7712 12.3064 11.8878 12.2469C11.1939 12.2002 10.538 12.2539 9.927 12.3859C9.95197 13.9183 10.1957 15.5152 10.7752 17.1365Z',
};

export const IconAlphabetJapaneseStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-japanese-stroke-rounded IconAlphabetJapaneseStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetJapaneseDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-japanese-duotone-rounded IconAlphabetJapaneseDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetJapaneseTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-japanese-twotone-rounded IconAlphabetJapaneseTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetJapaneseSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-japanese-solid-rounded IconAlphabetJapaneseSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlphabetJapaneseBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-japanese-bulk-rounded IconAlphabetJapaneseBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
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

export const IconAlphabetJapaneseStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-japanese-stroke-sharp IconAlphabetJapaneseStrokeSharp"
    >
      <path 
        d={d.d1} 
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

export const IconAlphabetJapaneseSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="alphabet-japanese-solid-sharp IconAlphabetJapaneseSolidSharp"
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

export const iconPackOfAlphabetJapanese: TheIconSelfPack = {
  name: 'AlphabetJapanese',
  StrokeRounded: IconAlphabetJapaneseStrokeRounded,
  DuotoneRounded: IconAlphabetJapaneseDuotoneRounded,
  TwotoneRounded: IconAlphabetJapaneseTwotoneRounded,
  SolidRounded: IconAlphabetJapaneseSolidRounded,
  BulkRounded: IconAlphabetJapaneseBulkRounded,
  StrokeSharp: IconAlphabetJapaneseStrokeSharp,
  SolidSharp: IconAlphabetJapaneseSolidSharp,
};