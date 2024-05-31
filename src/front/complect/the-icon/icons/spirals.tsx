import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.9532 2C17.5019 2 22 6.47715 22 12C22 17.5228 17.5019 22 11.9532 22C-0.631103 22 -1.82658 4.01755 11.4985 5C14.8499 5.2471 18.0289 8.41015 18.0289 12C18.0289 16.5 15.2348 18.5 11.4985 18.5C4.5 18.5 3.19042 8.46691 11.0021 9C12.508 9.10276 14.0162 10.3431 14.0162 12C14.0162 13.9278 13 15 11.1211 15',
  d2: 'M11.9532 2C17.5019 2 22 6.47715 22 12C22 17.5228 17.5019 22 11.9532 22C-0.631103 22 -1.82658 4.01755 11.4985 5C14.8499 5.2471 18.0289 8.41015 18.0289 12C18.0289 16.5 15.2348 18.5 11.4985 18.5C4.5 18.5 4 9 11.0021 9C13 9 14.0162 11 14.0162 12C14.0162 14 13 15 11 15',
  d3: 'M11.4889 5C14.8304 5.2471 18 8.41015 18 12C18 16.5 15.2141 18.5 11.4889 18.5C4.51096 18.5 4.01244 9 10.9939 9C12.9859 9 13.9991 11 13.9991 12C13.9991 14 12.9859 15 10.9918 15',
  d4: 'M10.9532 2C10.9532 1.44772 11.4009 1 11.9532 1C18.0498 1 23 5.92048 23 12C23 18.0795 18.0498 23 11.9532 23C5.08582 23 1.24036 18.0427 1.01092 13.1787C0.896458 10.7523 1.67961 8.30631 3.4752 6.53072C5.28317 4.7429 8.00969 3.74006 11.572 4.00271C15.4202 4.28643 19.0289 7.86116 19.0289 12C19.0289 14.4647 18.2565 16.3839 16.8385 17.6765C15.4364 18.9546 13.5347 19.5 11.4985 19.5C7.44929 19.5 4.97088 16.5643 4.7007 13.6422C4.56523 12.1769 4.98208 10.6621 6.09313 9.55206C7.21163 8.43454 8.90429 7.85451 11.0702 8.00232C12.9759 8.13237 15.0161 9.70083 15.0161 12C15.0161 13.1311 14.7166 14.1637 13.9944 14.9156C13.266 15.674 12.2492 16 11.1211 16C10.5688 16 10.1211 15.5523 10.1211 15C10.1211 14.4477 10.5688 14 11.1211 14C11.8719 14 12.3026 13.7899 12.552 13.5302C12.8075 13.2641 13.0161 12.7967 13.0161 12C13.0161 10.9855 12.0399 10.0731 10.934 9.99768C9.19406 9.87894 8.12102 10.3531 7.50672 10.9669C6.88497 11.5881 6.60193 12.4816 6.69221 13.458C6.87352 15.4191 8.54917 17.5 11.4985 17.5C13.1986 17.5 14.562 17.0454 15.4911 16.1985C16.4042 15.3661 17.0289 14.0353 17.0289 12C17.0289 8.95914 14.2796 6.20776 11.425 5.99729C8.32474 5.76872 6.20377 6.64527 4.88147 7.95284C3.5468 9.27264 2.91688 11.1381 3.0087 13.0845C3.1918 16.9661 6.23626 21 11.9532 21C16.954 21 21 16.9662 21 12C21 7.03383 16.954 3 11.9532 3C11.4009 3 10.9532 2.55228 10.9532 2Z',
  d5: 'M3.47476 6.53039C5.28273 4.74256 8.00925 3.73973 11.5716 4.00237C15.4198 4.2861 19.0284 7.86082 19.0284 11.9997C19.0284 14.4644 18.256 16.3836 16.838 17.6762C15.436 18.9543 13.5342 19.4997 11.498 19.4997C7.44884 19.4997 4.97043 16.564 4.70026 13.6418C4.56479 12.1766 4.98164 10.6618 6.09269 9.55173C7.21119 8.43421 8.90384 7.85418 11.0697 8.00199C12.9755 8.13204 15.0157 9.7005 15.0157 11.9997C15.0157 13.1308 14.7162 14.1634 13.994 14.9153C13.2656 15.6737 12.2488 15.9997 11.1207 15.9997C10.5684 15.9997 10.1207 15.552 10.1207 14.9997C10.1207 14.4474 10.5684 13.9997 11.1207 13.9997C11.8714 13.9997 12.3021 13.7896 12.5515 13.5299C12.8071 13.2638 13.0157 12.7964 13.0157 11.9997C13.0157 10.9851 12.0395 10.0728 10.9336 9.99735C9.19361 9.87861 8.12057 10.3528 7.50628 10.9666C6.88453 11.5878 6.60149 12.4813 6.69176 13.4577C6.87308 15.4188 8.54873 17.4997 11.498 17.4997C13.1981 17.4997 14.5616 17.0451 15.4907 16.1981C16.4038 15.3657 17.0284 14.0349 17.0284 11.9997C17.0284 8.95881 14.2791 6.20743 11.4245 5.99696C8.32429 5.76838 6.20333 6.64493 4.88103 7.9525L3.4668 6.53827L3.47476 6.53039Z',
  d6: 'M21 12C21 7.03383 16.954 3 11.9532 3V1C18.0498 1 23 5.92048 23 12C23 18.0795 18.0498 23 11.9532 23C5.08582 23 1.24036 18.0427 1.01092 13.1787C0.896458 10.7523 1.67961 8.30631 3.4752 6.53072C5.28317 4.7429 8.00969 3.74006 11.572 4.00271C15.4202 4.28643 19.0289 7.86116 19.0289 12C19.0289 14.4647 18.2565 16.3839 16.8385 17.6765C15.4364 18.9546 13.5347 19.5 11.4985 19.5C7.44929 19.5 4.97088 16.5643 4.7007 13.6422C4.56523 12.1769 4.98208 10.6621 6.09313 9.55206C7.21163 8.43454 8.90429 7.85451 11.0702 8.00232C12.9759 8.13237 15.0161 9.70083 15.0161 12C15.0161 13.1311 14.7166 14.1637 13.9944 14.9156C13.266 15.674 12.2492 16 11.1211 16V14C11.8719 14 12.3026 13.7899 12.552 13.5302C12.8075 13.2641 13.0161 12.7967 13.0161 12C13.0161 10.9855 12.0399 10.0731 10.934 9.99768C9.19406 9.87894 8.12102 10.3531 7.50672 10.9669C6.88497 11.5881 6.60193 12.4816 6.69221 13.458C6.87352 15.4191 8.54917 17.5 11.4985 17.5C13.1986 17.5 14.562 17.0454 15.4911 16.1985C16.4042 15.3661 17.0289 14.0353 17.0289 12C17.0289 8.95914 14.2796 6.20776 11.425 5.99729C8.32474 5.76872 6.20377 6.64527 4.88147 7.95284C3.5468 9.27264 2.91688 11.1381 3.0087 13.0845C3.1918 16.9661 6.23626 21 11.9532 21C16.954 21 21 16.9662 21 12Z',
} as const;

export const IconSpiralsStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spirals-stroke-rounded IconSpiralsStrokeRounded"
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

export const IconSpiralsDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spirals-duotone-rounded IconSpiralsDuotoneRounded"
    >
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

export const IconSpiralsTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spirals-twotone-rounded IconSpiralsTwotoneRounded"
    >
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

export const IconSpiralsSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spirals-solid-rounded IconSpiralsSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSpiralsBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spirals-bulk-rounded IconSpiralsBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSpiralsStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spirals-stroke-sharp IconSpiralsStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSpiralsSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="spirals-solid-sharp IconSpiralsSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSpirals: TheIconSelfPack = {
  name: 'Spirals',
  StrokeRounded: IconSpiralsStrokeRounded,
  DuotoneRounded: IconSpiralsDuotoneRounded,
  TwotoneRounded: IconSpiralsTwotoneRounded,
  SolidRounded: IconSpiralsSolidRounded,
  BulkRounded: IconSpiralsBulkRounded,
  StrokeSharp: IconSpiralsStrokeSharp,
  SolidSharp: IconSpiralsSolidSharp,
};