import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 8V6.36364C7 3.95367 9.01472 2 11.5 2C13.9853 2 16 3.95367 16 6.36364V8',
  d2: 'M19.5 11.5015C18.4791 8.48028 17.2039 7.5 13.4291 7.5H9.65019C5.74529 7.5 4.23479 8.48833 3.1549 12.2391C2.18223 15.6174 1.6959 17.3066 2.20436 18.6165C2.51576 19.4188 3.06862 20.1144 3.79294 20.6154C5.03534 21.4746 7.96776 21.945 11 22',
  d3: 'M14 15L17.5 18.5M17.5 18.5L21 22M17.5 18.5L14 22M17.5 18.5L21 15',
  d4: 'M10.5 11H12.5',
  d5: 'M13.3816 7.5H9.61841C5.72973 7.5 4.2255 8.48796 3.1501 12.2373C2.18147 15.6144 1.69716 17.3029 2.20352 18.6124C2.51361 19.4143 3.06418 20.1097 3.78549 20.6104C6.3944 22.4216 16.4865 22.5043 19.2145 20.6104C19.9358 20.1097 20.4864 19.4143 20.7965 18.6124C21.3028 17.3029 20.8185 15.6144 19.8499 12.2373C18.8173 8.63723 17.4313 7.5 13.3816 7.5Z',
  d6: 'M11.875 3.125C9.91277 3.125 8.375 4.65973 8.375 6.48864V8.125C8.375 8.67728 7.92728 9.125 7.375 9.125C6.82272 9.125 6.375 8.67728 6.375 8.125V6.48864C6.375 3.4976 8.86666 1.125 11.875 1.125C14.8833 1.125 17.375 3.4976 17.375 6.48864V8.125C17.375 8.67728 16.9273 9.125 16.375 9.125C15.8227 9.125 15.375 8.67728 15.375 8.125V6.48864C15.375 4.65973 13.8372 3.125 11.875 3.125Z',
  d7: 'M5.26681 7.72846C6.46283 6.86957 8.01333 6.625 9.99342 6.625H13.7566C15.826 6.625 17.3899 6.90938 18.5714 7.79303C19.7558 8.67889 20.4175 10.0636 20.9458 11.9055C20.9856 12.044 21.0054 12.1132 21.0029 12.1631C20.9977 12.2637 20.9646 12.3262 20.8843 12.387C20.8445 12.4172 20.7603 12.4449 20.592 12.5002C20.232 12.6186 19.8935 12.8209 19.6072 13.1072L18.2993 14.4152C18.0993 14.6152 17.9993 14.7152 17.875 14.7152C17.7507 14.7152 17.6507 14.6152 17.4507 14.4152L16.1428 13.1072C15.1665 12.1309 13.5835 12.1309 12.6072 13.1072C11.6309 14.0835 11.6309 15.6665 12.6072 16.6428L13.9152 17.9507C14.1152 18.1507 14.2152 18.2507 14.2152 18.375C14.2152 18.4993 14.1152 18.5993 13.9152 18.7993L12.6072 20.1072C11.9668 20.7477 11.7465 21.6492 11.9463 22.4692C11.9653 22.5471 11.9081 22.6251 11.8279 22.6248C10.2002 22.6196 8.56616 22.4963 7.16133 22.255C5.7866 22.0189 4.52766 21.6533 3.73279 21.1015C2.89118 20.5172 2.24436 19.7027 1.879 18.7579C1.55359 17.9163 1.57165 17.0069 1.76024 15.9441C1.94592 14.8977 2.31799 13.6006 2.79194 11.9482L2.80418 11.9055C3.35657 9.97965 4.06216 8.59354 5.26681 7.72846ZM10.875 9.875C10.3227 9.875 9.875 10.3227 9.875 10.875C9.875 11.4273 10.3227 11.875 10.875 11.875H12.875C13.4273 11.875 13.875 11.4273 13.875 10.875C13.875 10.3227 13.4273 9.875 12.875 9.875H10.875Z',
  d8: 'M22.0821 14.1679C22.4726 14.5584 22.4726 15.1916 22.0821 15.5821L19.2892 18.375L22.0821 21.1679C22.4726 21.5584 22.4726 22.1916 22.0821 22.5821C21.6916 22.9726 21.0584 22.9726 20.6679 22.5821L17.875 19.7892L15.0821 22.5821C14.6916 22.9726 14.0584 22.9726 13.6679 22.5821C13.2774 22.1916 13.2774 21.5584 13.6679 21.1679L16.4608 18.375L13.6679 15.5821C13.2774 15.1916 13.2774 14.5584 13.6679 14.1679C14.0584 13.7774 14.6916 13.7774 15.0821 14.1679L17.875 16.9608L20.6679 14.1679C21.0584 13.7774 21.6916 13.7774 22.0821 14.1679Z',
  d9: 'M9.99342 6.625C8.01333 6.625 6.46283 6.86957 5.26681 7.72846C4.06216 8.59354 3.35657 9.97965 2.80418 11.9055L2.79194 11.9482C2.31799 13.6006 1.94592 14.8977 1.76024 15.9441C1.57165 17.0069 1.55359 17.9163 1.879 18.7579C2.24436 19.7027 2.89118 20.5172 3.73279 21.1015C4.52766 21.6533 5.7866 22.0189 7.16133 22.255C8.56616 22.4963 10.2002 22.6196 11.8279 22.6248C11.9081 22.6251 11.9653 22.5471 11.9463 22.4692C11.7465 21.6492 11.9668 20.7477 12.6072 20.1072L13.9152 18.7993C14.1152 18.5993 14.2152 18.4993 14.2152 18.375C14.2152 18.2507 14.1152 18.1507 13.9152 17.9507L12.6072 16.6428C11.6309 15.6665 11.6309 14.0835 12.6072 13.1072C13.5835 12.1309 15.1665 12.1309 16.1428 13.1072L17.4507 14.4152C17.6507 14.6152 17.7507 14.7152 17.875 14.7152C17.9993 14.7152 18.0993 14.6152 18.2993 14.4152L19.6072 13.1072C19.8935 12.8209 20.232 12.6186 20.592 12.5002C20.7603 12.4449 20.8445 12.4172 20.8843 12.387C20.9646 12.3262 20.9977 12.2637 21.0029 12.1631C21.0054 12.1132 20.9856 12.044 20.9458 11.9055C20.4175 10.0636 19.7558 8.67889 18.5714 7.79303C17.3899 6.90938 15.826 6.625 13.7566 6.625H9.99342Z',
  d10: 'M9.875 10.875C9.875 10.3227 10.3227 9.875 10.875 9.875H12.875C13.4273 9.875 13.875 10.3227 13.875 10.875C13.875 11.4273 13.4273 11.875 12.875 11.875H10.875C10.3227 11.875 9.875 11.4273 9.875 10.875Z',
  d11: 'M8.375 6.48864C8.375 4.65973 9.91277 3.125 11.875 3.125C13.8372 3.125 15.375 4.65973 15.375 6.48864V6.69842C16.1197 6.77445 16.7834 6.91445 17.375 7.14084V6.48864C17.375 3.4976 14.8833 1.125 11.875 1.125C8.86666 1.125 6.375 3.4976 6.375 6.48864V7.13621C6.97181 6.90689 7.63655 6.76961 8.375 6.69595V6.48864Z',
  d12: 'M7 7.5V6.36364C7 3.95367 9.01472 2 11.5 2C13.9853 2 16 3.95367 16 6.36364V7.5',
  d13: 'M20.0682 13C19.9986 12.7557 19.9257 12.5017 19.8499 12.2373L18.5 7.5H4.5L3.1501 12.2373C2.18147 15.6144 1.69716 17.3029 2.20352 18.6124C2.51361 19.4143 3.06418 20.1097 3.78549 20.6104C5.16421 21.5676 8.63281 22.042 12 21.9971',
  d14: 'M9.5 11H13.5',
  d15: 'M11.5 3.25C9.53777 3.25 8 4.78473 8 6.61364V7.75H6V6.61364C6 3.6226 8.49166 1.25 11.5 1.25C14.5083 1.25 17 3.6226 17 6.61364V7.75H15V6.61364C15 4.78473 13.4622 3.25 11.5 3.25Z',
  d16: 'M17.1288 18.543L14.3359 21.3359L15.7502 22.7502L18.543 19.9573L21.3359 22.7502L22.7502 21.3359L19.9573 18.543L22.7502 15.7502L21.3359 14.3359L18.543 17.1288L15.7502 14.3359L14.3359 15.7502L17.1288 18.543Z',
  d17: 'M20.5712 12.0318L20.5831 12.0731C20.6516 12.3122 20.7181 12.5439 20.7821 12.7684L18.5433 15.0072L15.7504 12.2144L12.2148 15.7499L15.0077 18.5428L12.2148 21.3357L13.5681 22.689C12.8733 22.7321 12.1617 22.7521 11.4529 22.7498C9.82517 22.7446 8.19116 22.6213 6.78633 22.38C5.4116 22.1439 4.15266 21.7783 3.35779 21.2265C2.51618 20.6422 1.86936 19.8277 1.504 18.8829C1.17859 18.0413 1.19665 17.1319 1.38524 16.0691C1.57092 15.0227 1.94299 13.7256 2.41694 12.0732L3.93387 6.75H19.0662L20.5712 12.0318ZM13.5 12H9.5V10H13.5V12Z',
} as const;

export const IconShoppingBagRemoveStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-remove-stroke-rounded IconShoppingBagRemoveStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagRemoveDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-remove-duotone-rounded IconShoppingBagRemoveDuotoneRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagRemoveTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-remove-twotone-rounded IconShoppingBagRemoveTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconShoppingBagRemoveSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-remove-solid-rounded IconShoppingBagRemoveSolidRounded"
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

export const IconShoppingBagRemoveBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-remove-bulk-rounded IconShoppingBagRemoveBulkRounded"
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

export const IconShoppingBagRemoveStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-remove-stroke-sharp IconShoppingBagRemoveStrokeSharp"
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

export const IconShoppingBagRemoveSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-remove-solid-sharp IconShoppingBagRemoveSolidSharp"
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

export const iconPackOfShoppingBagRemove: TheIconSelfPack = {
  name: 'ShoppingBagRemove',
  StrokeRounded: IconShoppingBagRemoveStrokeRounded,
  DuotoneRounded: IconShoppingBagRemoveDuotoneRounded,
  TwotoneRounded: IconShoppingBagRemoveTwotoneRounded,
  SolidRounded: IconShoppingBagRemoveSolidRounded,
  BulkRounded: IconShoppingBagRemoveBulkRounded,
  StrokeSharp: IconShoppingBagRemoveStrokeSharp,
  SolidSharp: IconShoppingBagRemoveSolidSharp,
};