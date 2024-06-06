import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 17L9 17',
  d2: 'M16 13L13 13',
  d3: 'M20.5 14C20.5 17.7712 20.5 19.6569 19.2552 20.8284C18.0104 22 16.0069 22 12 22H11.2273C7.96607 22 6.33546 22 5.20307 21.2022C4.87862 20.9736 4.59058 20.7025 4.3477 20.3971C3.5 19.3313 3.5 17.7966 3.5 14.7273V12.1818C3.5 9.21865 3.5 7.73706 3.96894 6.55375C4.72281 4.65142 6.31714 3.15088 8.33836 2.44135C9.59563 2 11.1698 2 14.3182 2C16.1173 2 17.0168 2 17.7352 2.2522C18.8902 2.65765 19.8012 3.5151 20.232 4.60214C20.5 5.27832 20.5 6.12494 20.5 7.81818V14Z',
  d4: 'M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2',
  d5: 'M3.5639 10.9896C3.90429 10.1536 5.47248 8.49792 9.06055 8.49792C9.36196 8.49792 10.1526 8.19468 10.1117 6.55168C10.095 5.06667 10.6363 2.12886 12.907 2.00216C13.357 2 13.8461 2 14.3807 2C16.1798 2 17.0793 2 17.7977 2.2522C18.9527 2.65765 19.8637 3.5151 20.2945 4.60214C20.5625 5.27832 20.5625 6.12494 20.5625 7.81818V17C20.5625 17.9293 20.5625 18.394 20.4856 18.7804C20.17 20.3671 18.9296 21.6075 17.3429 21.9231C16.9565 22 16.4918 22 15.5625 22H11.2898C8.02857 22 6.39796 22 5.26557 21.2022C4.94112 20.9736 4.65308 20.7025 4.4102 20.3971C3.5625 19.3313 3.5625 17.7966 3.5625 14.7273V12.1818C3.5625 11.7548 3.5625 11.3586 3.5639 10.9896Z',
  d6: 'M16 16.9998L9 16.9998',
  d7: 'M16 12.9998L13 12.9998',
  d8: 'M7.43654 22.6472C8.41879 22.75 9.65159 22.75 11.1927 22.75H12.068C13.961 22.75 15.4749 22.75 16.6629 22.5991C17.8874 22.4436 18.9128 22.1129 19.7316 21.3394C20.5588 20.558 20.9202 19.5662 21.0887 18.3821C21.2501 17.2484 21.25 15.8086 21.25 14.0298V7.88003C21.25 7.08088 21.25 6.43332 21.2153 5.90474C21.1795 5.36012 21.1039 4.87444 20.9206 4.41028C20.3918 3.07097 19.2834 2.0367 17.9068 1.5517C17.048 1.24911 15.5759 1.2495 14.0209 1.25005C11.1813 1.24969 9.49465 1.24947 8.11221 1.73655C5.89221 2.51873 4.11848 4.18147 3.27509 6.31753C2.99398 7.02949 2.86944 7.7942 2.80919 8.71104C2.75 9.61176 2.75 10.7244 2.75 12.1427V14.7262C2.74998 16.1743 2.74996 17.3469 2.85985 18.2842C2.97396 19.2576 3.21721 20.0955 3.78704 20.8146C4.08222 21.1871 4.43077 21.5159 4.82114 21.7919C5.5659 22.3186 6.42712 22.5416 7.43654 22.6472ZM18.3969 19.9161C18.0037 20.2875 17.4477 20.5293 16.4184 20.66C15.3669 20.7936 13.9767 20.7954 12 20.7954H11.2476C9.63898 20.7954 8.50785 20.7942 7.6384 20.7032C6.78448 20.6139 6.30055 20.4471 5.94272 20.1941C5.70127 20.0233 5.48889 19.8222 5.3111 19.5979C5.05553 19.2754 4.88609 18.8426 4.79386 18.0558C4.69893 17.246 4.69735 16.1887 4.69735 14.6653L4.69727 11.7651C4.69725 11.4981 4.69743 10.8595 4.97804 10.3873C5.15098 10.0963 5.37239 9.85324 5.59984 9.72942C5.96635 9.5299 6.38654 9.41654 6.83321 9.41654L7.87358 9.45302C8.25367 9.46092 8.69721 9.44891 9.12536 9.33419C9.95933 9.11073 10.6107 8.45932 10.8342 7.62535C10.9489 7.1972 10.9609 6.75366 10.953 6.37357L10.9165 5.3332C10.9165 4.86551 11.0409 4.45838 11.2583 4.07997C11.385 3.85938 11.6057 3.65749 11.9105 3.48018C12.3726 3.21127 12.926 3.20878 13.2642 3.20726C13.6023 3.20573 13.9591 3.20456 14.2572 3.20456C16.0913 3.20456 16.7584 3.21851 17.2618 3.39587C18.1344 3.70332 18.8001 4.34497 19.1102 5.13033C19.1878 5.32697 19.2427 5.58539 19.2721 6.03334C19.3021 6.49002 19.3026 7.07296 19.3026 7.91322V13.9545C19.3026 15.8266 19.3003 17.1263 19.1609 18.1056C19.0264 19.0505 18.7818 19.5525 18.3969 19.9161Z',
  d9: 'M17 17C17 17.5523 16.5523 18 16 18L9 18C8.44772 18 8 17.5523 8 17C8 16.4477 8.44772 16 9 16L16 16C16.5523 16 17 16.4477 17 17Z',
  d10: 'M17 13C17 13.5523 16.5523 14 16 14L13 14C12.4477 14 12 13.5523 12 13C12 12.4477 12.4477 12 13 12L16 12C16.5523 12 17 12.4477 17 13Z',
  d11: 'M16 16.75H8',
  d12: 'M16 12.75H12',
  d13: 'M10.5 2.25558V8.75H4.01569M3.5 8.75V21.74C3.5 21.7455 3.50448 21.75 3.51 21.75H20.49C20.4955 21.75 20.5 21.7455 20.5 21.74V1.76C20.5 1.75448 20.4955 1.75 20.49 1.75H10.5L3.5 8.75Z',
  d14: 'M21.25 2.22727C21.25 1.68754 20.8141 1.25 20.2763 1.25H10.1362L2.75 8.66338V21.7727C2.75 22.3125 3.18593 22.75 3.72368 22.75H21.25V2.22727ZM11.5131 3.20459H19.3025V20.7955H4.69727V10.0455H11.5131L11.5131 3.20459Z',
  d15: 'M12 12H16V14H12V12ZM8 18V16H16V18H8Z',
};

export const IconFile02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-02-stroke-rounded IconFile02StrokeRounded"
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

export const IconFile02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-02-duotone-rounded IconFile02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
        strokeLinecap="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFile02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-02-twotone-rounded IconFile02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFile02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-02-solid-rounded IconFile02SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFile02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-02-bulk-rounded IconFile02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFile02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-02-stroke-sharp IconFile02StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFile02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-02-solid-sharp IconFile02SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfFile02: TheIconSelfPack = {
  name: 'File02',
  StrokeRounded: IconFile02StrokeRounded,
  DuotoneRounded: IconFile02DuotoneRounded,
  TwotoneRounded: IconFile02TwotoneRounded,
  SolidRounded: IconFile02SolidRounded,
  BulkRounded: IconFile02BulkRounded,
  StrokeSharp: IconFile02StrokeSharp,
  SolidSharp: IconFile02SolidSharp,
};