import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19.5 11.5C18.4791 8.47991 17.2039 7.5 13.4291 7.5H9.65019C5.74529 7.5 4.23479 8.48796 3.1549 12.2373C2.18223 15.6144 1.6959 17.3029 2.20436 18.6124C2.51576 19.4143 3.06862 20.1097 3.79294 20.6104C5.24007 21.6109 8.98007 22.084 12.5 21.9878',
  d2: 'M7 8V6.36364C7 3.95367 9.01472 2 11.5 2C13.9853 2 16 3.95367 16 6.36364V8',
  d3: 'M14 18H22M18 22L18 14',
  d4: 'M10.5 11H12.5',
  d5: 'M13.3816 7.5H9.61841C5.72973 7.5 4.2255 8.48796 3.1501 12.2373C2.18147 15.6144 1.69716 17.3029 2.20352 18.6124C2.51361 19.4143 3.06418 20.1097 3.78549 20.6104C6.3944 22.4216 16.4865 22.5043 19.2145 20.6104C19.9358 20.1097 20.4864 19.4143 20.7965 18.6124C21.3028 17.3029 20.8185 15.6144 19.8499 12.2373C18.8173 8.63723 17.4313 7.5 13.3816 7.5Z',
  d6: 'M11.375 3.125C9.41277 3.125 7.875 4.65973 7.875 6.48864V8.125C7.875 8.67728 7.42728 9.125 6.875 9.125C6.32272 9.125 5.875 8.67728 5.875 8.125V6.48864C5.875 3.4976 8.36666 1.125 11.375 1.125C14.3833 1.125 16.875 3.4976 16.875 6.48864V8.125C16.875 8.67728 16.4273 9.125 15.875 9.125C15.3227 9.125 14.875 8.67728 14.875 8.125V6.48864C14.875 4.65973 13.3372 3.125 11.375 3.125Z',
  d7: 'M4.76681 7.72846C5.96283 6.86957 7.51333 6.625 9.49342 6.625H13.2566C15.326 6.625 16.8899 6.90938 18.0714 7.79303C19.0867 8.55241 19.7179 9.67839 20.2103 11.1447C20.3247 11.4854 20.3819 11.6558 20.2921 11.7807C20.2023 11.9055 20.0181 11.9055 19.6496 11.9055H19.622C19.525 11.9055 19.4764 11.9055 19.4343 11.8929C19.3922 11.8803 19.3438 11.8485 19.247 11.7848C18.8531 11.5257 18.3817 11.375 17.875 11.375C16.4943 11.375 15.375 12.4943 15.375 13.875V14.775C15.375 15.0578 15.375 15.1993 15.2871 15.2871C15.1993 15.375 15.0578 15.375 14.775 15.375H13.875C12.4943 15.375 11.375 16.4943 11.375 17.875C11.375 19.2557 12.4943 20.375 13.875 20.375H14.775C15.0578 20.375 15.1993 20.375 15.2871 20.4629C15.375 20.5507 15.375 20.6922 15.375 20.975V21.875C15.375 22.0755 15.375 22.1758 15.3503 22.2329C15.3216 22.2991 15.2879 22.337 15.2254 22.3732C15.1716 22.4044 15.091 22.4138 14.9301 22.4326C13.7882 22.5659 12.5539 22.6288 11.3279 22.6248C9.70017 22.6196 8.06616 22.4963 6.66133 22.255C5.2866 22.0189 4.02766 21.6533 3.23279 21.1015C2.39118 20.5172 1.74436 19.7027 1.379 18.7579C1.05359 17.9163 1.07165 17.0069 1.26024 15.9441C1.44592 14.8977 1.81799 13.6006 2.29194 11.9482L2.30418 11.9055C2.85657 9.97965 3.56216 8.59354 4.76681 7.72846ZM10.375 9.875C9.82271 9.875 9.375 10.3227 9.375 10.875C9.375 11.4273 9.82271 11.875 10.375 11.875H12.375C12.9273 11.875 13.375 11.4273 13.375 10.875C13.375 10.3227 12.9273 9.875 12.375 9.875H10.375Z',
  d8: 'M17.875 12.875C18.4273 12.875 18.875 13.3227 18.875 13.875V16.875H21.875C22.4273 16.875 22.875 17.3227 22.875 17.875C22.875 18.4273 22.4273 18.875 21.875 18.875H18.875V21.875C18.875 22.4273 18.4273 22.875 17.875 22.875C17.3227 22.875 16.875 22.4273 16.875 21.875V18.875H13.875C13.3227 18.875 12.875 18.4273 12.875 17.875C12.875 17.3227 13.3227 16.875 13.875 16.875H16.875L16.875 13.875C16.875 13.3227 17.3227 12.875 17.875 12.875Z',
  d9: 'M9.49342 6.625C7.51333 6.625 5.96283 6.86957 4.76681 7.72846C3.56216 8.59354 2.85657 9.97965 2.30418 11.9055L2.29194 11.9482C1.81799 13.6006 1.44592 14.8977 1.26024 15.9441C1.07165 17.0069 1.05359 17.9163 1.379 18.7579C1.74436 19.7027 2.39118 20.5172 3.23279 21.1015C4.02766 21.6533 5.2866 22.0189 6.66133 22.255C8.06616 22.4963 9.70017 22.6196 11.3279 22.6248C12.5539 22.6288 13.7882 22.5659 14.9301 22.4326C15.091 22.4138 15.1716 22.4044 15.2254 22.3732C15.2879 22.337 15.3216 22.2991 15.3503 22.2329C15.375 22.1758 15.375 22.0755 15.375 21.875V20.975C15.375 20.6922 15.375 20.5507 15.2871 20.4629C15.1993 20.375 15.0578 20.375 14.775 20.375H13.875C12.4943 20.375 11.375 19.2557 11.375 17.875C11.375 16.4943 12.4943 15.375 13.875 15.375H14.775C15.0578 15.375 15.1993 15.375 15.2871 15.2871C15.375 15.1993 15.375 15.0578 15.375 14.775V13.875C15.375 12.4943 16.4943 11.375 17.875 11.375C18.3817 11.375 18.8531 11.5257 19.247 11.7848C19.3438 11.8485 19.3922 11.8803 19.4343 11.8929C19.4764 11.9055 19.525 11.9055 19.622 11.9055H19.6496C20.0181 11.9055 20.2023 11.9055 20.2921 11.7807C20.3819 11.6558 20.3247 11.4854 20.2103 11.1447C19.7179 9.67839 19.0867 8.55241 18.0714 7.79303C16.8899 6.90938 15.326 6.625 13.2566 6.625H9.49342Z',
  d10: 'M9.375 10.875C9.375 10.3227 9.82272 9.875 10.375 9.875H12.375C12.9273 9.875 13.375 10.3227 13.375 10.875C13.375 11.4273 12.9273 11.875 12.375 11.875H10.375C9.82272 11.875 9.375 11.4273 9.375 10.875Z',
  d11: 'M7.875 6.48864C7.875 4.65973 9.41277 3.125 11.375 3.125C13.3372 3.125 14.875 4.65973 14.875 6.48864V6.69842C15.6197 6.77445 16.2834 6.91445 16.875 7.14084V6.48864C16.875 3.4976 14.3833 1.125 11.375 1.125C8.36666 1.125 5.875 3.4976 5.875 6.48864V7.13621C6.47181 6.90689 7.13655 6.76961 7.875 6.69595V6.48864Z',
  d12: 'M7 7.5V6.36364C7 3.95367 9.01472 2 11.5 2C13.9853 2 16 3.95367 16 6.36364V7.5',
  d13: 'M19.7823 12L18.5 7.5H4.5L3.1501 12.2373C2.18147 15.6144 1.69716 17.3029 2.20352 18.6124C2.51361 19.4143 3.06418 20.1097 3.78549 20.6104C5.16421 21.5676 8.63281 22.042 12 21.9971',
  d14: 'M9.5 11H13.5',
  d15: 'M11.5 3.25C9.53777 3.25 8 4.78473 8 6.61364V7.75H6V6.61364C6 3.6226 8.49166 1.25 11.5 1.25C14.5083 1.25 17 3.6226 17 6.61364V7.75H15V6.61364C15 4.78473 13.4622 3.25 11.5 3.25Z',
  d16: 'M19.75 19.75V22.75H17.75L17.75 19.75H14.75V17.75H17.75L17.75 14.75H19.75V17.75H22.75V19.75H19.75Z',
  d17: 'M20.5712 12.0318L20.5831 12.0731C20.7018 12.4872 20.8142 12.8789 20.9188 13.25H16.25V16.25H13.25V21.25H16.25V22.3856C16.2147 22.3918 16.1794 22.3978 16.144 22.4037C14.7229 22.6425 13.0806 22.7551 11.4529 22.7498C9.82517 22.7446 8.19116 22.6213 6.78633 22.38C5.4116 22.1439 4.15266 21.7783 3.35779 21.2265C2.51618 20.6422 1.86936 19.8277 1.504 18.8829C1.17859 18.0413 1.19665 17.1319 1.38524 16.0691C1.57092 15.0227 1.94299 13.7256 2.41694 12.0732L3.93387 6.75H19.0662L20.5712 12.0318ZM13.5 12H9.5V10H13.5V12Z',
};

export const IconShoppingBagAddStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-add-stroke-rounded IconShoppingBagAddStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagAddDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-add-duotone-rounded IconShoppingBagAddDuotoneRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagAddTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-add-twotone-rounded IconShoppingBagAddTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagAddSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-add-solid-rounded IconShoppingBagAddSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagAddBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-add-bulk-rounded IconShoppingBagAddBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagAddStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-add-stroke-sharp IconShoppingBagAddStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconShoppingBagAddSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-add-solid-sharp IconShoppingBagAddSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingBagAdd: TheIconSelfPack = {
  name: 'ShoppingBagAdd',
  StrokeRounded: IconShoppingBagAddStrokeRounded,
  DuotoneRounded: IconShoppingBagAddDuotoneRounded,
  TwotoneRounded: IconShoppingBagAddTwotoneRounded,
  SolidRounded: IconShoppingBagAddSolidRounded,
  BulkRounded: IconShoppingBagAddBulkRounded,
  StrokeSharp: IconShoppingBagAddStrokeSharp,
  SolidSharp: IconShoppingBagAddSolidSharp,
};