import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L20.8009 13',
  d2: 'M13.5 20C13.5 20 14.5 20 15.5 22C15.5 22 18.6765 17 21.5 16',
  d3: 'M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5',
  d4: 'M3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L20.1271 17.0194C19.7282 19.3991 19.5287 20.5889 18.7143 21.2945C17.9 22 16.726 22 14.3782 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194Z',
  d5: 'M4.41043 6.625C3.91822 6.62494 3.46976 6.62489 3.11081 6.67737C2.71615 6.73506 2.29576 6.87305 1.98249 7.25555C1.67264 7.63388 1.61488 8.07216 1.62633 8.47066C1.63691 8.83882 1.71248 9.28939 1.79661 9.79093L3.0162 17.0661C3.20885 18.2154 3.36469 19.1451 3.57912 19.872C3.80192 20.6272 4.11182 21.2531 4.66955 21.7363C5.22955 22.2215 5.88861 22.4322 6.65842 22.5307C7.39491 22.625 8.31534 22.625 9.44649 22.625H12.5662C12.7277 22.625 12.815 22.4307 12.7103 22.3076C12.6863 22.2794 12.6664 22.2732 12.6322 22.2625L12.6277 22.2611C11.6116 21.9431 10.875 20.9957 10.875 19.875C10.875 18.4943 11.9943 17.375 13.375 17.375C13.7877 17.375 14.0945 17.4627 14.2317 17.5019L14.2337 17.5024C14.3908 17.5473 14.5551 17.6057 14.7245 17.6802C14.9634 17.7853 15.0828 17.8378 15.1793 17.816C15.2757 17.7942 15.3532 17.7043 15.5081 17.5246C16.1137 16.822 16.9072 15.9606 17.598 15.3548C18.3975 14.6536 19.404 13.9209 20.5404 13.5184C20.6441 13.4817 20.7486 13.4522 20.8534 13.4297C21.1196 13.3726 21.2526 13.3441 21.3164 13.2774C21.3801 13.2107 21.3987 13.0998 21.4358 12.8782L21.9534 9.7909C22.0375 9.28937 22.1131 8.83881 22.1237 8.47066C22.1351 8.07216 22.0773 7.63388 21.7675 7.25556C21.4542 6.87305 21.0338 6.73506 20.6392 6.67737C20.2802 6.62489 19.8318 6.62494 19.3396 6.625H4.41043Z',
  d6: 'M11.875 3.125C9.66586 3.125 7.875 4.91586 7.875 7.125V7.625C7.875 8.17728 7.42728 8.625 6.875 8.625C6.32272 8.625 5.875 8.17728 5.875 7.625V7.125C5.875 3.81129 8.56129 1.125 11.875 1.125C15.1887 1.125 17.875 3.81129 17.875 7.125V7.625C17.875 8.17728 17.4273 8.625 16.875 8.625C16.3227 8.625 15.875 8.17728 15.875 7.625V7.125C15.875 4.91586 14.0841 3.125 11.875 3.125Z',
  d7: 'M22.3176 15.5414C22.502 16.062 22.2294 16.6335 21.7088 16.8179C21.1752 17.0069 20.5587 17.4138 19.9057 17.9865C19.263 18.5501 18.6378 19.2271 18.0841 19.8909C17.5322 20.5524 17.0635 21.1861 16.7324 21.6551C16.5672 21.8891 16.307 22.2794 16.2191 22.4115C16.0258 22.7156 15.6837 22.8924 15.3239 22.874C14.9639 22.8555 14.6418 22.6448 14.4806 22.3225C14.0399 21.4411 13.6446 21.0902 13.4453 20.9573C13.361 20.9011 13.304 20.8786 13.2814 20.8709C12.773 20.8237 12.375 20.396 12.375 19.8753C12.375 19.323 12.8227 18.8753 13.375 18.8753C13.5742 18.8753 13.7184 18.9155 13.8216 18.945C14.0295 19.0044 14.2803 19.1103 14.5547 19.2932C14.829 19.4761 15.1166 19.7288 15.4054 20.0747C15.7206 19.6439 16.109 19.1363 16.5483 18.6097C17.1416 17.8985 17.84 17.1379 18.587 16.4828C19.3236 15.8368 20.163 15.2436 21.0412 14.9326C21.5618 14.7483 22.1332 15.0208 22.3176 15.5414Z',
  d8: 'M17.499 7.5C17.499 4.46243 15.0366 2 11.999 2C8.96145 2 6.49902 4.46243 6.49902 7.5',
  d9: 'M13.499 20L15.499 22L21.499 16',
  d10: 'M11.0099 21.9819H5.04591L2.49918 7.51173C2.4981 7.50561 2.50281 7.5 2.50903 7.5H21.49C21.4963 7.5 21.501 7.50564 21.4999 7.51178L20.5839 12.9769',
  d11: 'M11.499 3.25C9.01374 3.25 6.99902 5.26472 6.99902 7.75H4.99902C4.99902 4.16015 7.90917 1.25 11.499 1.25C15.0889 1.25 17.999 4.16015 17.999 7.75H15.999C15.999 5.26472 13.9843 3.25 11.499 3.25Z',
  d12: 'M22.7492 16.0431L16.0421 22.7502L13.335 20.0431L14.7492 18.6289L16.0421 19.9218L21.335 14.6289L22.7492 16.0431Z',
  d13: 'M2.00001 6.75C1.77881 6.75 1.56889 6.84764 1.42639 7.01682C1.28389 7.186 1.22333 7.40945 1.26091 7.62743L3.86825 22.75H13.922L11.2148 20.0429L14.7504 16.5073L16.0433 17.8002L20.8064 13.0371L21.7391 7.62743C21.7767 7.40945 21.7161 7.186 21.5736 7.01682C21.4311 6.84764 21.2212 6.75 21 6.75H2.00001Z',
};

export const IconShoppingBasketDone01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-01-stroke-rounded IconShoppingBasketDone01StrokeRounded"
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

export const IconShoppingBasketDone01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-01-duotone-rounded IconShoppingBasketDone01DuotoneRounded"
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

export const IconShoppingBasketDone01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-01-twotone-rounded IconShoppingBasketDone01TwotoneRounded"
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

export const IconShoppingBasketDone01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-01-solid-rounded IconShoppingBasketDone01SolidRounded"
    >
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketDone01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-01-bulk-rounded IconShoppingBasketDone01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconShoppingBasketDone01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-01-stroke-sharp IconShoppingBasketDone01StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketDone01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-done-01-solid-sharp IconShoppingBasketDone01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingBasketDone01: TheIconSelfPack = {
  name: 'ShoppingBasketDone01',
  StrokeRounded: IconShoppingBasketDone01StrokeRounded,
  DuotoneRounded: IconShoppingBasketDone01DuotoneRounded,
  TwotoneRounded: IconShoppingBasketDone01TwotoneRounded,
  SolidRounded: IconShoppingBasketDone01SolidRounded,
  BulkRounded: IconShoppingBasketDone01BulkRounded,
  StrokeSharp: IconShoppingBasketDone01StrokeSharp,
  SolidSharp: IconShoppingBasketDone01SolidSharp,
};