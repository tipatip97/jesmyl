import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 5C4 4.25579 4 3.88369 4.08912 3.58019C4.30005 2.86183 4.86183 2.30005 5.58019 2.08912C5.88369 2 6.25579 2 7 2H14C14.7442 2 15.1163 2 15.4198 2.08912C16.1382 2.30005 16.7 2.86183 16.9109 3.58019C17 3.88369 17 4.25579 17 5C17 5.74421 17 6.11631 16.9109 6.41981C16.7 7.13817 16.1382 7.69995 15.4198 7.91088C15.1163 8 14.7442 8 14 8H7C6.25579 8 5.88369 8 5.58019 7.91088C4.86183 7.69995 4.30005 7.13817 4.08912 6.41981C4 6.11631 4 5.74421 4 5Z',
  d2: 'M12 17.5C12 17.0341 12 16.8011 12.0761 16.6173C12.1776 16.3723 12.3723 16.1776 12.6173 16.0761C12.8011 16 13.0341 16 13.5 16C13.9659 16 14.1989 16 14.3827 16.0761C14.6277 16.1776 14.8224 16.3723 14.9239 16.6173C15 16.8011 15 17.0341 15 17.5V20.5C15 20.9659 15 21.1989 14.9239 21.3827C14.8224 21.6277 14.6277 21.8224 14.3827 21.9239C14.1989 22 13.9659 22 13.5 22C13.0341 22 12.8011 22 12.6173 21.9239C12.3723 21.8224 12.1776 21.6277 12.0761 21.3827C12 21.1989 12 20.9659 12 20.5V17.5Z',
  d3: 'M17.249 5C18.1037 5 18.531 5 18.8681 5.15224C19.9978 5.6624 20.0005 6.86278 20.0005 8.00422C20.0005 8.96065 20.0005 9.43886 19.8701 9.84219C19.4513 11.1378 17.7387 11.768 16.0836 12.2373C14.9006 12.5727 14.3091 12.7404 13.9045 13.2756C13.5 13.8107 13.5 14.4389 13.5 15.6952V16',
  d4: 'M6.76364 1.25004L6.87509 1.25009H13.8751L13.9865 1.25004C14.6215 1.24965 15.0968 1.24936 15.5062 1.36958C16.4695 1.65242 17.2228 2.40572 17.5056 3.36898C17.6258 3.77841 17.6255 4.25369 17.6251 4.88864L17.6251 5.00009L17.6251 5.11154C17.6255 5.74648 17.6258 6.22176 17.5056 6.6312C17.2228 7.59446 16.4695 8.34775 15.5062 8.63059C15.0968 8.75081 14.6215 8.75052 13.9865 8.75013L13.8751 8.75009H6.87509L6.76364 8.75013C6.12869 8.75052 5.65341 8.75081 5.24398 8.63059C4.28072 8.34775 3.52742 7.59446 3.24458 6.6312C3.12436 6.22176 3.12465 5.74648 3.12504 5.11154L3.12509 5.00009L3.12504 4.88864C3.12465 4.25369 3.12436 3.77841 3.24458 3.36898C3.52742 2.40572 4.28072 1.65242 5.24398 1.36958C5.65341 1.24936 6.12869 1.24965 6.76364 1.25004Z',
  d5: 'M13.3532 15.25H13.375H13.3968H13.3968C13.6111 15.25 13.8079 15.25 13.9732 15.2613C14.1509 15.2734 14.3462 15.301 14.5447 15.3832C14.9735 15.5608 15.3142 15.9015 15.4918 16.3303C15.574 16.5288 15.6016 16.7241 15.6137 16.9018C15.625 17.0671 15.625 17.264 15.625 17.4782V20.5218C15.625 20.736 15.625 20.9329 15.6137 21.0982C15.6016 21.2759 15.574 21.4712 15.4918 21.6697C15.3142 22.0985 14.9735 22.4392 14.5447 22.6168C14.3462 22.699 14.1509 22.7266 13.9732 22.7387C13.8079 22.75 13.611 22.75 13.3968 22.75H13.3532C13.139 22.75 12.9421 22.75 12.7768 22.7387C12.5991 22.7266 12.4038 22.699 12.2053 22.6168C11.7765 22.4392 11.4358 22.0985 11.2582 21.6697C11.176 21.4712 11.1484 21.2759 11.1363 21.0982C11.125 20.9329 11.125 20.7361 11.125 20.5218V20.5218V17.5V17.4782V17.4782C11.125 17.2639 11.125 17.0671 11.1363 16.9018C11.1484 16.7241 11.176 16.5288 11.2582 16.3303C11.4358 15.9015 11.7765 15.5608 12.2053 15.3832C12.4038 15.301 12.5991 15.2734 12.7768 15.2613C12.9421 15.25 13.1389 15.25 13.3532 15.25H13.3532Z',
  d6: 'M18.0535 6.01628C17.8433 6.00064 17.5662 6 17.124 6C16.5717 6 16.124 5.55229 16.124 5C16.124 4.44772 16.5717 4 17.124 4L17.1575 4C17.5562 3.99998 17.9085 3.99997 18.2018 4.02179C18.5142 4.04502 18.8358 4.09686 19.1547 4.24087C20.0441 4.64254 20.492 5.34393 20.6959 6.07177C20.876 6.71472 20.8757 7.42077 20.8755 7.95322C20.8755 7.97041 20.8755 7.98741 20.8755 8.00423C20.8755 8.05401 20.8755 8.10311 20.8756 8.15158C20.8762 8.96285 20.8767 9.59279 20.6967 10.1498C20.3743 11.1471 19.5847 11.7927 18.7975 12.2258C18.0043 12.6622 17.0692 12.9618 16.2314 13.1994C14.931 13.5681 14.7361 13.6684 14.5773 13.8786C14.5065 13.9722 14.4516 14.0853 14.4169 14.3465C14.377 14.6469 14.375 15.0413 14.375 15.6952V16C14.375 16.5523 13.9273 17 13.375 17C12.8227 17 12.375 16.5523 12.375 16V15.6952C12.375 15.6767 12.375 15.6582 12.375 15.6398C12.3749 15.0592 12.3749 14.5308 12.4343 14.0834C12.5007 13.5826 12.648 13.1141 12.9818 12.6726C13.5935 11.8633 14.5043 11.6074 15.4974 11.3283C15.5599 11.3108 15.6227 11.2931 15.6858 11.2752C16.5031 11.0435 17.2519 10.7934 17.8335 10.4735C18.4211 10.1502 18.6972 9.8329 18.7936 9.53462C18.8636 9.31821 18.8755 9.03397 18.8755 8.00423C18.8755 7.4006 18.8679 6.96062 18.77 6.61124C18.6901 6.32598 18.5718 6.17211 18.3315 6.06361C18.3133 6.05539 18.2528 6.0311 18.0535 6.01628Z',
  d7: 'M17.6073 6.00014C17.7902 6.00195 17.9327 6.00598 18.0531 6.01494C18.2524 6.02977 18.313 6.05405 18.3312 6.06228C18.5714 6.17078 18.6898 6.32465 18.7697 6.6099C18.8675 6.95929 18.8752 7.39927 18.8752 8.00289C18.8752 9.03263 18.8632 9.31688 18.7933 9.53329C18.6969 9.83157 18.4207 10.1489 17.8331 10.4721C17.2516 10.7921 16.5028 11.0422 15.6855 11.2739C15.6224 11.2918 15.5596 11.3094 15.4971 11.327C14.504 11.606 13.5932 11.862 12.9815 12.6712C12.6477 13.1128 12.5004 13.5813 12.4339 14.0821C12.3855 14.4471 12.3766 14.8661 12.375 15.3233C12.5143 15.2848 12.6499 15.2683 12.7765 15.2597C12.9418 15.2484 13.1386 15.2484 13.3529 15.2484H13.3964C13.6107 15.2484 13.8076 15.2484 13.9729 15.2597C14.0997 15.2683 14.2356 15.2849 14.3752 15.3236C14.3771 14.8825 14.3848 14.5841 14.4165 14.3452C14.4512 14.084 14.5062 13.9708 14.5769 13.8772C14.7358 13.6671 14.9306 13.5667 16.231 13.198C17.0689 12.9605 18.004 12.6608 18.7972 12.2245C19.5843 11.7914 20.3739 11.1458 20.6963 10.1484C20.8764 9.59146 20.8759 8.96153 20.8752 8.15025L20.8752 7.95189C20.8754 7.41943 20.8756 6.71339 20.6955 6.07044C20.4916 5.3426 20.0438 4.64121 19.1544 4.23954C18.8355 4.09553 18.5138 4.04369 18.2015 4.02046C18.0242 4.00726 17.8252 4.00205 17.6075 4C17.6252 4.2603 17.625 4.55137 17.6248 4.88706V5.10996C17.625 5.447 17.6252 5.73905 17.6073 6.00014Z',
  d8: 'M17 2H4V8H17V2Z',
  d9: 'M15 22V16H12V22H15Z',
  d10: 'M17.2491 5.0001L20.0006 5V11L13.5 13L13.5001 16.0001',
  d11: 'M3.25 2C3.25 1.58579 3.58579 1.25 4 1.25H17C17.4142 1.25 17.75 1.58579 17.75 2V8C17.75 8.41421 17.4142 8.75 17 8.75H4C3.58579 8.75 3.25 8.41421 3.25 8V2Z',
  d12: 'M11.25 15.25H15.75V22.75H11.25V15.25Z',
  d13: 'M19.2506 5.75003L17.2491 5.7501L17.249 4.2501L20.0006 4.25C20.1995 4.24999 20.3903 4.32901 20.5309 4.46966C20.6716 4.61031 20.7506 4.80108 20.7506 5V11C20.7506 11.3293 20.5359 11.62 20.2212 11.7168L14.25 13.5539L14.2501 16.0001L12.7501 16.0001L12.75 13C12.75 12.6708 12.9647 12.38 13.2795 12.2832L19.2506 10.4461V5.75003Z',
};

export const IconPaintBrush02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-02-stroke-rounded IconPaintBrush02StrokeRounded"
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

export const IconPaintBrush02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-02-duotone-rounded IconPaintBrush02DuotoneRounded"
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

export const IconPaintBrush02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-02-twotone-rounded IconPaintBrush02TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPaintBrush02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-02-solid-rounded IconPaintBrush02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconPaintBrush02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-02-bulk-rounded IconPaintBrush02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPaintBrush02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-02-stroke-sharp IconPaintBrush02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPaintBrush02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="paint-brush-02-solid-sharp IconPaintBrush02SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPaintBrush02: TheIconSelfPack = {
  name: 'PaintBrush02',
  StrokeRounded: IconPaintBrush02StrokeRounded,
  DuotoneRounded: IconPaintBrush02DuotoneRounded,
  TwotoneRounded: IconPaintBrush02TwotoneRounded,
  SolidRounded: IconPaintBrush02SolidRounded,
  BulkRounded: IconPaintBrush02BulkRounded,
  StrokeSharp: IconPaintBrush02StrokeSharp,
  SolidSharp: IconPaintBrush02SolidSharp,
};