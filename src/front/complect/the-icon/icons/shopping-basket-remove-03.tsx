import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 21H10.9325C8.18162 21 6.8062 21 5.8516 20.2402C4.55052 19.1942 4.46138 17.0725 4.20066 15.5878L3.60807 12.2134C3.50177 11.6081 3.09673 11.0876 2.51841 10.8132C2.37896 10.747 2.27952 10.6235 2.24894 10.4784C2.07874 9.67075 1.6264 8.5469 2.63812 8.10084C2.86684 8 3.17922 8 3.80397 8H7.5M11.5 8H20.196C20.8208 8 21.1332 8 21.3619 8.10084C22.3736 8.5469 21.9213 9.67075 21.7511 10.4784C21.7205 10.6235 21.621 10.747 21.4816 10.8132C20.742 11.1642 20.4959 11.7928 20.3468 12.5',
  d2: 'M16 15L19 18M19 18L22 21M19 18L16 21M19 18L22 15',
  d3: 'M6.5 11L10 3M15 3L17.5 8',
  d4: 'M19.7993 15.5878L20.3919 12.2134C20.4982 11.6081 20.9033 11.0876 21.4816 10.8132C21.621 10.747 21.7205 10.6235 21.7511 10.4784C21.9213 9.67075 22.3736 8.5469 21.3619 8.10084C21.1332 8 20.8208 8 20.196 8H11.5H7.5H3.80397C3.17922 8 2.86684 8 2.63812 8.10084C1.6264 8.5469 2.07874 9.67075 2.24894 10.4784C2.27952 10.6235 2.37896 10.747 2.51841 10.8132C3.09673 11.0876 3.50177 11.6081 3.60807 12.2134L4.20066 15.5878C4.46138 17.0725 4.55052 19.1942 5.8516 20.2402C6.8062 21 8.18162 21 10.9325 21H13.0675C15.8184 21 17.1938 21 18.1484 20.2402C19.4495 19.1943 19.5386 17.0725 19.7993 15.5878Z',
  d5: 'M6.5 11L10 3',
  d6: 'M15 3L17.5 8',
  d7: 'M22.5821 14.2926C22.9726 14.6832 22.9726 15.3163 22.5821 15.7069L20.2892 17.9998L22.5821 20.2926C22.9726 20.6832 22.9726 21.3163 22.5821 21.7069C22.1916 22.0974 21.5584 22.0974 21.1679 21.7069L18.875 19.414L16.5821 21.7069C16.1916 22.0974 15.5584 22.0974 15.1679 21.7069C14.7774 21.3163 14.7774 20.6832 15.1679 20.2926L17.4608 17.9998L15.1679 15.7069C14.7774 15.3163 14.7774 14.6832 15.1679 14.2926C15.5584 13.9021 16.1916 13.9021 16.5821 14.2926L18.875 16.5855L21.1679 14.2926C21.5584 13.9021 22.1916 13.9021 22.5821 14.2926Z',
  d8: 'M3.65516 7.24976L20.0949 7.24976H20.0949C20.3869 7.24975 20.643 7.24974 20.8535 7.2641C21.0735 7.27911 21.309 7.31273 21.5394 7.41434C21.9272 7.58529 22.2238 7.84713 22.4089 8.1914C22.5871 8.52256 22.6299 8.87004 22.6246 9.16731C22.6192 9.46263 22.5651 9.75139 22.5112 9.99238C22.4808 10.1285 22.3771 10.5614 22.3618 10.625L22.3603 10.6315L22.3582 10.641C22.2751 11.0222 22.0166 11.3299 21.6781 11.4906C21.3086 11.6659 21.0678 11.9886 21.0056 12.3429V12.3429C20.979 12.4974 20.9657 12.5747 20.9268 12.6299C20.888 12.6851 20.8071 12.7309 20.6453 12.8224L20.6453 12.8224C20.4526 12.9313 20.2714 13.0679 20.1072 13.232L19.2993 14.04C19.0993 14.24 18.9993 14.34 18.875 14.34C18.7507 14.34 18.6507 14.24 18.4507 14.04L17.6428 13.232C16.6665 12.2557 15.0835 12.2557 14.1072 13.232C13.1309 14.2083 13.1309 15.7912 14.1072 16.7675L14.9152 17.5755L14.9152 17.5755C15.1152 17.7755 15.2152 17.8755 15.2152 17.9998C15.2152 18.124 15.1152 18.224 14.9152 18.424L14.1072 19.232C13.6332 19.7061 13.3893 20.3232 13.3756 20.9444C13.3663 21.3671 13.3617 21.5785 13.2742 21.664C13.1868 21.7496 13.0154 21.7496 12.6728 21.7496L10.7598 21.7498C9.42483 21.7498 8.35671 21.7498 7.50578 21.6496C6.62715 21.5463 5.88909 21.3279 5.25955 20.8268L5.25667 20.8245C4.41862 20.1508 4.01701 19.1698 3.78458 18.2649C3.62783 17.6546 3.52861 16.9805 3.44396 16.4054L2.74437 12.3429C2.68215 11.9886 2.44139 11.6659 2.07188 11.4906C1.73343 11.3299 1.47487 11.0222 1.39181 10.641L1.38972 10.6315L1.38818 10.625C1.37293 10.5614 1.26921 10.1285 1.23876 9.99238C1.18486 9.75139 1.13076 9.46263 1.12543 9.16731C1.12007 8.87004 1.16292 8.52256 1.34105 8.1914C1.52624 7.84713 1.82281 7.58529 2.21055 7.41434C2.44103 7.31273 2.67647 7.27911 2.89649 7.2641C3.10704 7.24974 3.36316 7.24975 3.65514 7.24976H3.65516ZM9.875 11.2498C9.46079 11.2498 9.125 11.5855 9.125 11.9998C9.125 12.414 9.46079 12.7498 9.875 12.7498L13.875 12.7498C14.2892 12.7498 14.625 12.414 14.625 11.9998C14.625 11.5855 14.2892 11.2498 13.875 11.2498L9.875 11.2498Z',
  d9: 'M10.2761 2.08385C10.7821 2.30522 11.0128 2.89485 10.7914 3.40083L7.29141 11.4008C7.07004 11.9068 6.48041 12.1375 5.97443 11.9162C5.46845 11.6948 5.23773 11.1052 5.4591 10.5992L8.9591 2.59919C9.18046 2.09321 9.77009 1.86249 10.2761 2.08385Z',
  d10: 'M14.428 2.10555C14.922 1.85856 15.5227 2.05878 15.7696 2.55276L18.2696 7.55276C18.5166 8.04674 18.3164 8.64741 17.8224 8.8944C17.3285 9.14139 16.7278 8.94117 16.4808 8.44719L13.9808 3.44719C13.7338 2.95321 13.934 2.35254 14.428 2.10555Z',
  d11: 'M20.0949 7.24976H3.65516C3.36317 7.24975 3.10704 7.24974 2.89649 7.2641C2.67647 7.27911 2.44103 7.31273 2.21055 7.41434C1.82281 7.58529 1.52624 7.84713 1.34105 8.1914C1.16292 8.52256 1.12007 8.87004 1.12543 9.16731C1.13076 9.46263 1.18486 9.75139 1.23876 9.99238C1.26921 10.1285 1.37293 10.5614 1.38818 10.625C1.38898 10.6283 1.38938 10.63 1.38972 10.6315C1.39007 10.633 1.39065 10.6357 1.39181 10.641C1.47487 11.0222 1.73343 11.3299 2.07188 11.4906C2.44139 11.6659 2.68215 11.9886 2.74437 12.3429L3.44396 16.4054C3.52861 16.9805 3.62783 17.6546 3.78458 18.2649C4.01701 19.1698 4.41862 20.1508 5.25667 20.8245L5.25955 20.8268C5.88909 21.3279 6.62715 21.5463 7.50578 21.6496C8.35671 21.7498 9.42483 21.7498 10.7598 21.7498L12.6728 21.7496C13.0154 21.7496 13.1868 21.7496 13.2742 21.664C13.3617 21.5785 13.3663 21.3671 13.3756 20.9444C13.3893 20.3232 13.6332 19.7061 14.1072 19.232L14.9152 18.424C15.1152 18.224 15.2152 18.124 15.2152 17.9998C15.2152 17.8755 15.1152 17.7755 14.9152 17.5755L14.1072 16.7675C13.1309 15.7912 13.1309 14.2083 14.1072 13.232C15.0835 12.2557 16.6665 12.2557 17.6428 13.232L18.4507 14.04C18.6507 14.24 18.7507 14.34 18.875 14.34C18.9993 14.34 19.0993 14.24 19.2993 14.04L20.1072 13.232C20.2714 13.0679 20.4526 12.9313 20.6453 12.8224C20.8071 12.7309 20.888 12.6851 20.9268 12.6299C20.9657 12.5747 20.979 12.4974 21.0056 12.3429C21.0678 11.9886 21.3086 11.6659 21.6781 11.4906C22.0166 11.3299 22.2751 11.0222 22.3582 10.641C22.3593 10.6357 22.3599 10.633 22.3603 10.6315C22.3606 10.63 22.361 10.6283 22.3618 10.625C22.3771 10.5614 22.4808 10.1285 22.5112 9.99238C22.5651 9.75139 22.6192 9.46263 22.6246 9.16731C22.6299 8.87004 22.5871 8.52256 22.4089 8.1914C22.2238 7.84713 21.9272 7.58529 21.5394 7.41434C21.309 7.31273 21.0735 7.27911 20.8535 7.2641C20.643 7.24974 20.3869 7.24975 20.0949 7.24976Z',
  d12: 'M9.125 11.9998C9.125 11.5855 9.46079 11.2498 9.875 11.2498L13.875 11.2498C14.2892 11.2498 14.625 11.5855 14.625 11.9998C14.625 12.414 14.2892 12.7498 13.875 12.7498L9.875 12.7498C9.46079 12.7498 9.125 12.414 9.125 11.9998Z',
  d13: 'M15.7696 2.55276C15.5227 2.05878 14.922 1.85856 14.428 2.10555C13.934 2.35254 13.7338 2.95321 13.9808 3.44719L15.8822 7.24998H18.1183L15.7696 2.55276Z',
  d14: 'M6.49707 10.5L9.99707 2.5M14.997 2.5L16.9665 6.43891',
  d15: 'M15.9971 15.5L18.9971 18.5M18.9971 18.5L21.9971 21.5M18.9971 18.5L15.9971 21.5M18.9971 18.5L21.9971 15.5',
  d16: 'M12.963 19.4727H5.49953C5.49481 19.4727 5.49073 19.4693 5.48975 19.4647L3.48617 9.99701L2.00195 9.4958V6.54496C2.00195 6.53943 2.00643 6.53496 2.01196 6.53496H8.38118M10.9782 6.5H21.9876C21.9931 6.5 21.9976 6.50448 21.9976 6.51V9.49926L20.4898 10.0081L20.1102 11.985',
  d17: 'M17.6269 18.5426L15.334 20.8354L16.7482 22.2497L19.0411 19.9568L21.334 22.2497L22.7482 20.8354L20.4553 18.5426L22.7482 16.2497L21.334 14.8354L19.0411 17.1283L16.7482 14.8354L15.334 16.2497L17.6269 18.5426Z',
  d18: 'M18.3955 6.75H22.0001C22.4143 6.75 22.7501 7.08579 22.7501 7.5V11.0406L21.1453 11.5755L20.7908 13.2588L19.0423 15.0072L16.7494 12.7144L13.2139 16.2499L15.5068 18.5428L13.2139 20.8357L13.6282 21.25H5.50008C5.14542 21.25 4.83924 21.0016 4.76617 20.6545L2.85482 11.5756L1.24902 11.0407V7.5C1.24902 7.08579 1.58481 6.75 1.99902 6.75H6.91776L9.08496 1.79639L10.9173 2.59803L9.10079 6.75H16.1595L14.1067 2.64443L15.8955 1.75L18.3955 6.75ZM9.49902 10.75H14.499V12.25H9.49902V10.75Z',
} as const;

export const IconShoppingBasketRemove03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-03-stroke-rounded IconShoppingBasketRemove03StrokeRounded"
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

export const IconShoppingBasketRemove03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-03-duotone-rounded IconShoppingBasketRemove03DuotoneRounded"
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

export const IconShoppingBasketRemove03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-03-twotone-rounded IconShoppingBasketRemove03TwotoneRounded"
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

export const IconShoppingBasketRemove03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-03-solid-rounded IconShoppingBasketRemove03SolidRounded"
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

export const IconShoppingBasketRemove03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-03-bulk-rounded IconShoppingBasketRemove03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketRemove03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-03-stroke-sharp IconShoppingBasketRemove03StrokeSharp"
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

export const IconShoppingBasketRemove03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-remove-03-solid-sharp IconShoppingBasketRemove03SolidSharp"
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

export const iconPackOfShoppingBasketRemove03: TheIconSelfPack = {
  name: 'ShoppingBasketRemove03',
  StrokeRounded: IconShoppingBasketRemove03StrokeRounded,
  DuotoneRounded: IconShoppingBasketRemove03DuotoneRounded,
  TwotoneRounded: IconShoppingBasketRemove03TwotoneRounded,
  SolidRounded: IconShoppingBasketRemove03SolidRounded,
  BulkRounded: IconShoppingBasketRemove03BulkRounded,
  StrokeSharp: IconShoppingBasketRemove03StrokeSharp,
  SolidSharp: IconShoppingBasketRemove03SolidSharp,
};