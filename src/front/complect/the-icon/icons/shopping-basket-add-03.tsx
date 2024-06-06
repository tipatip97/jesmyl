import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13 21H10.9325C8.18162 21 6.8062 21 5.8516 20.2402C4.55052 19.1942 4.46138 17.0725 4.20066 15.5878L3.60807 12.2134C3.50177 11.6081 3.09673 11.0876 2.51841 10.8132C2.37896 10.747 2.27952 10.6235 2.24894 10.4784C2.07874 9.67075 1.6264 8.5469 2.63812 8.10084C2.86684 8 3.17922 8 3.80397 8H7.5M11.5 8H20.196C20.8208 8 21.1332 8 21.3619 8.10084C22.3736 8.5469 21.9213 9.67075 21.7511 10.4784C21.7205 10.6235 21.621 10.747 21.4816 10.8132C21.1491 10.971 20.8738 11.2102 20.6797 11.5',
  d2: 'M15 17.5H22M18.5 21L18.5 14',
  d3: 'M6.5 11L10 3M15 3L17.5 8',
  d4: 'M19.7993 15.5878L20.3919 12.2134C20.4982 11.6081 20.9033 11.0876 21.4816 10.8132C21.621 10.747 21.7205 10.6235 21.7511 10.4784C21.9213 9.67075 22.3736 8.5469 21.3619 8.10084C21.1332 8 20.8208 8 20.196 8H11.5H7.5H3.80397C3.17922 8 2.86684 8 2.63812 8.10084C1.6264 8.5469 2.07874 9.67075 2.24894 10.4784C2.27952 10.6235 2.37896 10.747 2.51841 10.8132C3.09673 11.0876 3.50177 11.6081 3.60807 12.2134L4.20066 15.5878C4.46138 17.0725 4.55052 19.1942 5.8516 20.2402C6.8062 21 8.18162 21 10.9325 21H13.0675C15.8184 21 17.1938 21 18.1484 20.2402C19.4495 19.1943 19.5386 17.0725 19.7993 15.5878Z',
  d5: 'M6.5 11L10 3',
  d6: 'M15 3L17.5 8',
  d7: 'M3.65516 7.24976L20.0949 7.24976H20.0949C20.3869 7.24975 20.643 7.24974 20.8535 7.2641C21.0735 7.27911 21.309 7.31273 21.5394 7.41434C21.9272 7.58529 22.2238 7.84713 22.4089 8.1914C22.5871 8.52256 22.6299 8.87004 22.6246 9.16731C22.6192 9.46263 22.5651 9.75139 22.5112 9.99238C22.4808 10.1285 22.3771 10.5614 22.3618 10.625L22.3603 10.6315L22.3582 10.641C22.2751 11.0222 22.0166 11.3299 21.6781 11.4906C21.3086 11.6659 21.0678 11.9886 21.0056 12.3429L20.9863 12.4553L20.9863 12.4553C20.9232 12.8213 20.8917 13.0043 20.827 13.0193C20.7623 13.0343 20.6422 12.8683 20.402 12.5362C19.9479 11.9083 19.2092 11.4998 18.375 11.4998C16.9943 11.4998 15.875 12.619 15.875 13.9998V14.3998C15.875 14.6826 15.875 14.824 15.7871 14.9119C15.6993 14.9998 15.5578 14.9998 15.275 14.9998H14.875C13.4943 14.9998 12.375 16.119 12.375 17.4998C12.375 18.8805 13.4943 19.9998 14.875 19.9998H15.275C15.5578 19.9998 15.6993 19.9998 15.7871 20.0876C15.875 20.1755 15.875 20.3169 15.875 20.5998V20.9998C15.875 21.3442 15.875 21.5165 15.8067 21.5995C15.7956 21.613 15.7882 21.6207 15.7752 21.6324C15.6952 21.7041 15.5577 21.71 15.2829 21.7217C14.6237 21.7498 13.8641 21.7498 12.9902 21.7498L10.7598 21.7498C9.42483 21.7498 8.35671 21.7498 7.50578 21.6496C6.62715 21.5463 5.88909 21.3279 5.25955 20.8268L5.25667 20.8245C4.41862 20.1508 4.01701 19.1698 3.78458 18.2649C3.62783 17.6546 3.52861 16.9805 3.44396 16.4054L2.74437 12.3429C2.68215 11.9886 2.44139 11.6659 2.07188 11.4906C1.73343 11.3299 1.47487 11.0222 1.39181 10.641L1.38972 10.6315L1.38818 10.625C1.37293 10.5614 1.26921 10.1285 1.23876 9.99238C1.18486 9.75139 1.13076 9.46263 1.12543 9.16731C1.12007 8.87004 1.16292 8.52256 1.34105 8.1914C1.52624 7.84713 1.82281 7.58529 2.21055 7.41434C2.44103 7.31273 2.67647 7.27911 2.89649 7.2641C3.10704 7.24974 3.36316 7.24975 3.65514 7.24976H3.65516ZM9.875 11.2498C9.46079 11.2498 9.125 11.5855 9.125 11.9998C9.125 12.414 9.46079 12.7498 9.875 12.7498L13.875 12.7498C14.2892 12.7498 14.625 12.414 14.625 11.9998C14.625 11.5855 14.2892 11.2498 13.875 11.2498L9.875 11.2498Z',
  d8: 'M10.2761 2.08385C10.7821 2.30522 11.0128 2.89485 10.7914 3.40083L7.29141 11.4008C7.07004 11.9068 6.48041 12.1375 5.97443 11.9162C5.46845 11.6948 5.23773 11.1052 5.4591 10.5992L8.9591 2.59919C9.18046 2.09321 9.77009 1.86249 10.2761 2.08385Z',
  d9: 'M14.428 2.10555C14.922 1.85856 15.5227 2.05878 15.7696 2.55276L18.2696 7.55276C18.5166 8.04674 18.3164 8.64741 17.8224 8.8944C17.3285 9.14139 16.7278 8.94117 16.4808 8.44719L13.9808 3.44719C13.7338 2.95321 13.934 2.35254 14.428 2.10555Z',
  d10: 'M18.375 12.9998C18.9273 12.9998 19.375 13.4475 19.375 13.9998V16.4998H21.875C22.4273 16.4998 22.875 16.9475 22.875 17.4998C22.875 18.052 22.4273 18.4998 21.875 18.4998H19.375V20.9998C19.375 21.552 18.9273 21.9998 18.375 21.9998C17.8227 21.9998 17.375 21.552 17.375 20.9998L17.375 18.4998H14.875C14.3227 18.4998 13.875 18.052 13.875 17.4998C13.875 16.9475 14.3227 16.4998 14.875 16.4998H17.375L17.375 13.9998C17.375 13.4475 17.8227 12.9998 18.375 12.9998Z',
  d11: 'M20.0949 7.24976H3.65516C3.36317 7.24975 3.10704 7.24974 2.89649 7.2641C2.67647 7.27911 2.44103 7.31273 2.21055 7.41434C1.82281 7.58529 1.52624 7.84713 1.34105 8.1914C1.16292 8.52256 1.12007 8.87004 1.12543 9.16731C1.13076 9.46263 1.18486 9.75139 1.23876 9.99238C1.26921 10.1285 1.37293 10.5614 1.38818 10.625C1.38898 10.6283 1.38938 10.63 1.38972 10.6315C1.39007 10.633 1.39065 10.6357 1.39181 10.641C1.47487 11.0222 1.73343 11.3299 2.07188 11.4906C2.44139 11.6659 2.68215 11.9886 2.74437 12.3429L3.44396 16.4054C3.52861 16.9805 3.62783 17.6546 3.78458 18.2649C4.01701 19.1698 4.41862 20.1508 5.25667 20.8245L5.25955 20.8268C5.88909 21.3279 6.62715 21.5463 7.50578 21.6496C8.35671 21.7498 9.42483 21.7498 10.7598 21.7498H12.9902C13.8641 21.7498 14.6237 21.7498 15.2829 21.7217C15.5577 21.71 15.6952 21.7041 15.7752 21.6324C15.7882 21.6207 15.7956 21.613 15.8067 21.5995C15.875 21.5165 15.875 21.3442 15.875 20.9998V20.5998C15.875 20.3169 15.875 20.1755 15.7871 20.0876C15.6993 19.9998 15.5578 19.9998 15.275 19.9998H14.875C13.4943 19.9998 12.375 18.8805 12.375 17.4998C12.375 16.119 13.4943 14.9998 14.875 14.9998H15.275C15.5578 14.9998 15.6993 14.9998 15.7871 14.9119C15.875 14.824 15.875 14.6826 15.875 14.3998V13.9998C15.875 12.619 16.9943 11.4998 18.375 11.4998C19.2092 11.4998 19.9479 11.9083 20.402 12.5362C20.6422 12.8683 20.7623 13.0343 20.827 13.0193C20.8917 13.0043 20.9232 12.8213 20.9863 12.4553L21.0056 12.3429C21.0678 11.9886 21.3086 11.6659 21.6781 11.4906C22.0166 11.3299 22.2751 11.0222 22.3582 10.641C22.3593 10.6357 22.3599 10.633 22.3603 10.6315C22.3606 10.63 22.361 10.6283 22.3618 10.625C22.3771 10.5614 22.4808 10.1285 22.5112 9.99238C22.5651 9.75139 22.6192 9.46263 22.6246 9.16731C22.6299 8.87004 22.5871 8.52256 22.4089 8.1914C22.2238 7.84713 21.9272 7.58529 21.5394 7.41434C21.309 7.31273 21.0735 7.27911 20.8535 7.2641C20.643 7.24974 20.3869 7.24975 20.0949 7.24976Z',
  d12: 'M9.125 11.9998C9.125 11.5855 9.46079 11.2498 9.875 11.2498L13.875 11.2498C14.2892 11.2498 14.625 11.5855 14.625 11.9998C14.625 12.414 14.2892 12.7498 13.875 12.7498L9.875 12.7498C9.46079 12.7498 9.125 12.414 9.125 11.9998Z',
  d13: 'M15.7696 2.55276C15.5227 2.05878 14.922 1.85856 14.428 2.10555C13.934 2.35254 13.7338 2.95321 13.9808 3.44719L15.8822 7.24997H18.1183L15.7696 2.55276Z',
  d14: 'M6.49902 10.5L9.99902 2.5M14.999 2.5L17.499 7.5',
  d15: 'M14.999 18H21.999M18.499 21.5V14.5',
  d16: 'M11.0205 7H21.9001C21.9553 7 22 7.04477 22 7.1V10.0046L20.5074 10.502L20.1951 11.9941M12.9976 19.9961H5.47224L3.52049 10.512L2 10.0015V7.01236H7.46153',
  d17: 'M20.249 19.75V22.25H18.249L18.249 19.75H15.749V17.75H18.249L18.249 15.25H20.249V17.75H22.749V19.75H20.249Z',
  d18: 'M18.3955 6.75H22.0001C22.4143 6.75 22.7501 7.08579 22.7501 7.5V11.0406L21.1453 11.5755L20.6873 13.75H16.749V16.25H14.249V21.25H5.50008C5.14542 21.25 4.83924 21.0016 4.76617 20.6545L2.85482 11.5756L1.24902 11.0407V7.5C1.24902 7.08579 1.58481 6.75 1.99902 6.75H6.91776L9.08496 1.79639L10.9173 2.59803L9.10079 6.75H16.1595L14.1067 2.64443L15.8955 1.75L18.3955 6.75ZM9.49902 10.75H14.499V12.25H9.49902V10.75Z',
};

export const IconShoppingBasketAdd03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-add-03-stroke-rounded IconShoppingBasketAdd03StrokeRounded"
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

export const IconShoppingBasketAdd03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-add-03-duotone-rounded IconShoppingBasketAdd03DuotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketAdd03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-add-03-twotone-rounded IconShoppingBasketAdd03TwotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketAdd03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-add-03-solid-rounded IconShoppingBasketAdd03SolidRounded"
    >
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

export const IconShoppingBasketAdd03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-add-03-bulk-rounded IconShoppingBasketAdd03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketAdd03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-add-03-stroke-sharp IconShoppingBasketAdd03StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketAdd03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-add-03-solid-sharp IconShoppingBasketAdd03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingBasketAdd03: TheIconSelfPack = {
  name: 'ShoppingBasketAdd03',
  StrokeRounded: IconShoppingBasketAdd03StrokeRounded,
  DuotoneRounded: IconShoppingBasketAdd03DuotoneRounded,
  TwotoneRounded: IconShoppingBasketAdd03TwotoneRounded,
  SolidRounded: IconShoppingBasketAdd03SolidRounded,
  BulkRounded: IconShoppingBasketAdd03BulkRounded,
  StrokeSharp: IconShoppingBasketAdd03StrokeSharp,
  SolidSharp: IconShoppingBasketAdd03SolidSharp,
};