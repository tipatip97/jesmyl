import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.9685 12L21.3307 9.83981C21.5126 8.75428 21.6036 8.21152 21.3123 7.85576C21.0209 7.5 20.4854 7.5 19.4144 7.5H4.58564C3.51461 7.5 2.9791 7.5 2.68773 7.85576C2.39637 8.21152 2.48735 8.75428 2.66933 9.83981L3.87289 17.0194C4.27181 19.3991 4.47127 20.5889 5.28565 21.2945C6.10003 22 7.27396 22 9.62182 22H11.5',
  d2: 'M14.5 15L18 18.5M18 18.5L21.5 22M18 18.5L14.5 22M18 18.5L21.5 15',
  d3: 'M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5',
  d4: 'M3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L20.1271 17.0194C19.7282 19.3991 19.5287 20.5889 18.7143 21.2945C17.9 22 16.726 22 14.3782 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194Z',
  d5: 'M22.0821 14.1679C22.4726 14.5584 22.4726 15.1916 22.0821 15.5821L19.2892 18.375L22.0821 21.1679C22.4726 21.5584 22.4726 22.1916 22.0821 22.5821C21.6916 22.9726 21.0584 22.9726 20.6679 22.5821L17.875 19.7892L15.0821 22.5821C14.6916 22.9726 14.0584 22.9726 13.6679 22.5821C13.2774 22.1916 13.2774 21.5584 13.6679 21.1679L16.4608 18.375L13.6679 15.5821C13.2774 15.1916 13.2774 14.5584 13.6679 14.1679C14.0584 13.7774 14.6916 13.7774 15.0821 14.1679L17.875 16.9608L20.6679 14.1679C21.0584 13.7774 21.6916 13.7774 22.0821 14.1679Z',
  d6: 'M11.875 3.125C9.66586 3.125 7.875 4.91586 7.875 7.125V7.625C7.875 8.17728 7.42728 8.625 6.875 8.625C6.32272 8.625 5.875 8.17728 5.875 7.625V7.125C5.875 3.81129 8.56129 1.125 11.875 1.125C15.1887 1.125 17.875 3.81129 17.875 7.125V7.625C17.875 8.17728 17.4273 8.625 16.875 8.625C16.3227 8.625 15.875 8.17728 15.875 7.625V7.125C15.875 4.91586 14.0841 3.125 11.875 3.125Z',
  d7: 'M4.41043 6.625C3.91822 6.62494 3.46976 6.62489 3.11081 6.67737C2.71615 6.73506 2.29576 6.87305 1.98249 7.25555C1.67264 7.63388 1.61488 8.07216 1.62633 8.47066C1.63691 8.83882 1.71248 9.28939 1.79661 9.79093L3.0162 17.0661C3.20885 18.2154 3.36469 19.1451 3.57912 19.872C3.80192 20.6272 4.11182 21.2531 4.66955 21.7363C5.22955 22.2215 5.88861 22.4322 6.65842 22.5307C7.39491 22.625 8.31534 22.625 9.44649 22.625H11.1727C11.5154 22.625 11.6868 22.625 11.7742 22.5395C11.8617 22.4539 11.8663 22.2425 11.8756 21.8197C11.8893 21.1985 12.1331 20.5813 12.6072 20.1072L13.9152 18.7993C14.1152 18.5993 14.2152 18.4993 14.2152 18.375C14.2152 18.2507 14.1152 18.1507 13.9152 17.9507L12.6072 16.6428C11.6309 15.6665 11.6309 14.0835 12.6072 13.1072C13.5835 12.1309 15.1665 12.1309 16.1428 13.1072L17.4507 14.4152C17.6507 14.6152 17.7507 14.7152 17.875 14.7152C17.9993 14.7152 18.0993 14.6152 18.2993 14.4152L19.6072 13.1072C19.9954 12.7191 20.4794 12.4853 20.983 12.4057C21.2688 12.3606 21.4117 12.3381 21.4805 12.27C21.5492 12.2019 21.569 12.084 21.6085 11.8484L21.9534 9.7909C22.0375 9.28937 22.1131 8.83881 22.1237 8.47066C22.1351 8.07216 22.0773 7.63388 21.7675 7.25556C21.4542 6.87305 21.0338 6.73506 20.6392 6.67737C20.2802 6.62489 19.8318 6.62494 19.3396 6.625H4.41043Z',
  d8: 'M17.501 7.5C17.501 4.46243 15.0386 2 12.001 2C8.96341 2 6.50098 4.46243 6.50098 7.5',
  d9: 'M4.50098 17.5H11.001',
  d10: 'M13.501 15L17.001 18.5M17.001 18.5L20.501 22M17.001 18.5L13.501 22M17.001 18.5L20.501 15',
  d11: 'M11.0682 21.9819H5.04689L2.50015 7.51173C2.49908 7.50561 2.50379 7.5 2.51 7.5H21.491C21.4972 7.5 21.502 7.50564 21.5008 7.51178L20.5864 12.9767',
  d12: 'M11.5 1.25C8.25021 1.25 5.55745 3.63491 5.07645 6.75H2.00001C1.77881 6.75 1.56889 6.84764 1.42639 7.01682C1.28389 7.186 1.22333 7.40945 1.26091 7.62743L3.86825 22.75H13.6292L12.2148 21.3357L15.0077 18.5428L12.2148 15.7499L15.7504 12.2144L18.5433 15.0072L20.8674 12.6831L21.7391 7.62743C21.7767 7.40945 21.7161 7.186 21.5736 7.01682C21.4311 6.84764 21.2212 6.75 21 6.75H17.9236C17.4425 3.63491 14.7498 1.25 11.5 1.25ZM11.5 3.25C9.35841 3.25 7.56624 4.74601 7.11151 6.75H15.8885C15.4338 4.74601 13.6416 3.25 11.5 3.25Z',
  d13: 'M17.1288 18.543L14.3359 21.3359L15.7502 22.7502L18.543 19.9573L21.3359 22.7502L22.7502 21.3359L19.9573 18.543L22.7502 15.7502L21.3359 14.3359L18.543 17.1288L15.7502 14.3359L14.3359 15.7502L17.1288 18.543Z',
} as const;

export const IconShoppingBasketRemove01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-01-stroke-rounded IconShoppingBasketRemove01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketRemove01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-01-duotone-rounded IconShoppingBasketRemove01DuotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketRemove01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-01-twotone-rounded IconShoppingBasketRemove01TwotoneRounded"
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
        strokeLinecap="round" 
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

export const IconShoppingBasketRemove01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-01-solid-rounded IconShoppingBasketRemove01SolidRounded"
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

export const IconShoppingBasketRemove01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-01-bulk-rounded IconShoppingBasketRemove01BulkRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketRemove01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-01-stroke-sharp IconShoppingBasketRemove01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketRemove01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-01-solid-sharp IconShoppingBasketRemove01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfShoppingBasketRemove01: TheIconSelfPack = {
  name: 'ShoppingBasketRemove01',
  StrokeRounded: IconShoppingBasketRemove01StrokeRounded,
  DuotoneRounded: IconShoppingBasketRemove01DuotoneRounded,
  TwotoneRounded: IconShoppingBasketRemove01TwotoneRounded,
  SolidRounded: IconShoppingBasketRemove01SolidRounded,
  BulkRounded: IconShoppingBasketRemove01BulkRounded,
  StrokeSharp: IconShoppingBasketRemove01StrokeSharp,
  SolidSharp: IconShoppingBasketRemove01SolidSharp,
};