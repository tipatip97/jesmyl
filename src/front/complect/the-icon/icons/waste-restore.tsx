import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.75 5H9.17963C9.84834 5 10.4728 4.6658 10.8437 4.1094L11.6563 2.8906C12.0272 2.3342 12.6517 2 13.3204 2H17.8085C18.6693 2 19.4336 2.55086 19.7058 3.36754L20.25 5M21.75 5H8.75',
  d2: 'M20.25 5L19.75 11.5M5.25 5L5.85461 15.5362C6.00945 18.1069 6.08688 19.3923 6.72868 20.3166C7.046 20.7736 7.4548 21.1593 7.92905 21.4492C8.51127 21.8051 9.21343 21.945 10.25 22',
  d3: 'M11.75 15.498L12.8863 16.9638C13.458 14.8299 15.6514 13.5636 17.7852 14.1353C18.8775 14.428 19.7425 15.1456 20.25 16.0626M21.75 20.498L20.6137 19.0343C20.0419 21.1682 17.8486 22.4345 15.7147 21.8627C14.6478 21.5769 13.7977 20.8856 13.2859 19.999',
  d4: 'M5.25 5L5.85461 15.5362C6.00945 18.1069 6.08688 19.3923 6.72868 20.3166C7.046 20.7736 7.4548 21.1593 7.92905 21.4492C8.51127 21.8051 9.21343 21.945 10.25 22H13.2943C14.4271 22 15.3123 22 16.0217 21.9349C15.9184 21.9157 15.8151 21.8923 15.7119 21.8647C14.645 21.5788 13.7949 20.8875 13.2831 20.001C12.5868 18.795 12.7309 17.3562 12.8835 16.9657C13.4552 14.8319 15.6486 13.5655 17.7824 14.1373C18.4098 14.3054 18.9621 14.6136 19.4148 15.0193L19.75 11.5L20.25 5H5.25Z',
  d5: 'M3.75 5H9.17963C9.84834 5 10.4728 4.6658 10.8437 4.1094L11.6563 2.8906C12.0272 2.3342 12.6517 2 13.3204 2H17.8085C18.6693 2 19.4336 2.55086 19.7058 3.36754L20.25 5',
  d6: 'M21.75 5H8.75',
  d7: 'M11.75 15.5L12.8863 16.9657C13.458 14.8319 15.6514 13.5655 17.7852 14.1373C18.8775 14.43 19.7425 15.1475 20.25 16.0646M21.75 20.5L20.6137 19.0363C20.0419 21.1701 17.8486 22.4365 15.7147 21.8647C14.6478 21.5788 13.7977 20.8875 13.2859 20.001',
  d8: 'M13.3204 3.25C12.986 3.25 12.6738 3.4171 12.4883 3.6953L12.1185 4.25H18.8626L18.7572 3.93377C18.6211 3.52543 18.2389 3.25 17.8085 3.25H13.3204ZM20.9708 4.25L20.6545 3.30132C20.2462 2.07629 19.0998 1.25 17.8085 1.25H13.3204C12.3173 1.25 11.3806 1.7513 10.8242 2.5859L10.0117 3.8047C9.82622 4.0829 9.51399 4.25 9.17963 4.25H3.75C3.19772 4.25 2.75 4.69772 2.75 5.25C2.75 5.80228 3.19772 6.25 3.75 6.25H20.2267C20.2421 6.25036 20.2576 6.25036 20.2731 6.25H21.75C22.3023 6.25 22.75 5.80228 22.75 5.25C22.75 4.69772 22.3023 4.25 21.75 4.25H20.9708Z',
  d9: 'M13.5938 15.5161C14.6959 14.1064 16.5947 13.4231 18.4337 13.9021C19.4118 14.1568 20.2375 14.704 20.832 15.4265C21.1829 15.853 21.1216 16.4832 20.6952 16.8341C20.2687 17.185 19.6385 17.1237 19.2876 16.6972C18.9565 16.2949 18.4926 15.9841 17.9296 15.8375C16.5162 15.4694 15.0999 16.292 14.7366 17.6098C14.6367 17.9724 14.3418 18.2482 13.9734 18.3237C13.6049 18.3992 13.2253 18.2616 12.9908 17.9676L11.9682 16.6854C11.6238 16.2536 11.6947 15.6244 12.1264 15.2801C12.5582 14.9357 13.1874 15.0066 13.5318 15.4383L13.5938 15.5161ZM20.5262 18.1758C20.1579 18.2514 19.8631 18.5271 19.7632 18.8896C19.3999 20.2074 17.9837 21.03 16.5702 20.6619C16.0067 20.5151 15.5424 20.2038 15.2113 19.8009C14.8606 19.3742 14.2305 19.3125 13.8038 19.6632C13.3771 20.0138 13.3154 20.644 13.6661 21.0707C14.2606 21.7942 15.087 22.3423 16.0662 22.5973C17.9055 23.0764 19.8047 22.3927 20.9068 20.9824L20.9686 21.0599C21.3133 21.4914 21.9425 21.5618 22.374 21.2171C22.8056 20.8725 22.876 20.2432 22.5313 19.8117L21.5086 18.5313C21.274 18.2375 20.8944 18.1002 20.5262 18.1758Z',
  d10: 'M9.66539 22.1781C8.85146 22.1046 8.16921 21.9513 7.55713 21.5998C6.99545 21.2773 6.50786 20.8462 6.12752 20.3316C5.70895 19.7654 5.50042 19.1171 5.3714 18.3445C5.2462 17.5948 5.18613 16.6578 5.11094 15.4852L5.10834 15.4446L5.1082 15.4423L4.51995 5.81063C4.48958 5.31332 4.47439 5.06466 4.62327 4.90733C4.77215 4.75 5.02263 4.75 5.52359 4.75H19.9758C20.4774 4.75 20.7283 4.75 20.8772 4.9076C21.0261 5.06519 21.0105 5.31416 20.9794 5.81208C20.8466 7.93539 20.7472 10.0641 20.5927 12.1866C20.5621 12.6073 20.5468 12.8177 20.4166 12.8983C20.2865 12.9789 20.0746 12.892 19.6507 12.7182C19.3919 12.6121 19.1232 12.5224 18.8455 12.4505C17.0421 11.9834 15.1908 12.3533 13.7524 13.3381C13.5562 13.4724 13.4581 13.5395 13.3798 13.5618C13.3016 13.5841 13.1555 13.5776 12.8634 13.5644C12.2768 13.5379 11.6782 13.7146 11.183 14.1074C10.0977 14.9683 9.91957 16.5413 10.7852 17.6207L11.8135 18.9029C11.9452 19.0672 12.0111 19.1493 12.0316 19.1863C12.1032 19.3152 12.1044 19.3206 12.0931 19.4675C12.0898 19.5097 12.0639 19.6133 12.0119 19.8204C11.8689 20.3908 11.9479 20.9734 12.1951 21.4971C12.373 21.8741 12.462 22.0626 12.4023 22.1557C12.3427 22.2489 12.1592 22.2472 11.7922 22.2439C10.9342 22.2361 10.1113 22.2184 9.66539 22.1781Z',
  d11: 'M3.24878 4.98418H9.88006M9.88006 4.98418L12.3199 2.00005L18.8614 2C18.9054 2 18.9443 2.02882 18.9571 2.07098L19.8407 4.98418M9.88006 4.98418H19.8407M19.8326 4.95692L19.8407 4.98418M19.8407 4.98418H22.2512',
  d12: 'M19.9487 4.99045L19.5014 11.5048M5.54272 4.99045L6.55932 21.8241C6.56248 21.8768 6.6059 21.918 6.6584 21.918H10.8211',
  d13: 'M19.4313 16.0223C18.7635 14.837 17.5002 13.9764 16.0789 13.9764C14.2367 13.9764 12.76 15.5517 12.2897 17.3366L10.7937 14.4726M12.76 19.9906C13.4565 21.1465 14.6741 22.0419 16.1051 21.9983C18.3612 21.9296 19.2203 20.5162 19.9396 18.5773L21.3144 21.4642',
  d14: 'M12.0316 1.25H18.5C18.9304 1.25 19.3126 1.52544 19.4487 1.93379L20.2207 4.25H22V6.25H2V4.25H9.53162L12.0316 1.25ZM12.135 4.25H18.1125L17.7792 3.25H12.9684L12.135 4.25Z',
  d15: 'M13.6834 15.2213C14.7913 13.6684 16.7707 12.8879 18.7084 13.413C19.9906 13.7604 21.0069 14.6137 21.6019 15.701L19.9584 16.6207C19.6002 15.9661 18.9918 15.4563 18.2222 15.2478C16.7192 14.8405 15.1742 15.7425 14.7715 17.2625L14.5849 17.9665H13.0084L11.5 15.124L13.1551 14.2258L13.6834 15.2213ZM22.0995 18.0335H20.401L20.2145 18.7375C19.8118 20.2575 18.2668 21.1595 16.7638 20.7522C16.012 20.5485 15.4142 20.0574 15.0529 19.4246L13.4262 20.3744C14.0264 21.4256 15.0253 22.2477 16.2776 22.587C18.2298 23.116 20.2245 22.3197 21.3275 20.7435L21.8156 21.7436L23.5 20.9029L22.0995 18.0335Z',
  d16: 'M3.95431 4.48548C4.09602 4.33518 4.29344 4.24999 4.5 4.24999L19.5 4.24997C19.7066 4.24997 19.904 4.33516 20.0457 4.48546C20.1874 4.63575 20.2608 4.83783 20.2487 5.04404L19.8268 12.2108C19.593 12.1152 19.3507 12.0329 19.1008 11.9652C17.3169 11.4818 15.5112 11.8354 14.0865 12.7808L13.7705 12.1852L9.47852 14.5144L12.0827 19.4219L11.3872 19.828L12.1237 21.1181C12.4727 21.7295 12.9257 22.2835 13.466 22.75L5.50071 22.75C5.10362 22.75 4.77534 22.4405 4.75201 22.0441L3.7513 5.04406C3.73916 4.83785 3.81261 4.63577 3.95431 4.48548Z',
};

export const IconWasteRestoreStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waste-restore-stroke-rounded IconWasteRestoreStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWasteRestoreDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waste-restore-duotone-rounded IconWasteRestoreDuotoneRounded"
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
      />
      <path 
        d={d.d6} 
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWasteRestoreTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waste-restore-twotone-rounded IconWasteRestoreTwotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWasteRestoreSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waste-restore-solid-rounded IconWasteRestoreSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWasteRestoreBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waste-restore-bulk-rounded IconWasteRestoreBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWasteRestoreStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waste-restore-stroke-sharp IconWasteRestoreStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="bevel" 
      />
    </TheIconWrapper>
  );
};

export const IconWasteRestoreSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="waste-restore-solid-sharp IconWasteRestoreSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWasteRestore: TheIconSelfPack = {
  name: 'WasteRestore',
  StrokeRounded: IconWasteRestoreStrokeRounded,
  DuotoneRounded: IconWasteRestoreDuotoneRounded,
  TwotoneRounded: IconWasteRestoreTwotoneRounded,
  SolidRounded: IconWasteRestoreSolidRounded,
  BulkRounded: IconWasteRestoreBulkRounded,
  StrokeSharp: IconWasteRestoreStrokeSharp,
  SolidSharp: IconWasteRestoreSolidSharp,
};