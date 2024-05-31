import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.5 8H20.196C20.8208 8 21.1332 8 21.3619 8.10084C22.3736 8.5469 21.9213 9.67075 21.7511 10.4784C21.7205 10.6235 21.621 10.747 21.4816 10.8132C21.1491 10.971 20.8738 11.2102 20.6797 11.5M7.5 8H3.80397C3.17922 8 2.86684 8 2.63812 8.10084C1.6264 8.5469 2.07874 9.67075 2.24894 10.4784C2.27952 10.6235 2.37896 10.747 2.51841 10.8132C3.09673 11.0876 3.50177 11.6081 3.60807 12.2134L4.20066 15.5878C4.46138 17.0725 4.55052 19.1942 5.8516 20.2402C6.8062 21 8.18162 21 10.9325 21H13.0675C13.2156 21 13.5 20.9999 13.5 20.9999',
  d2: 'M16 16.5C16.4915 15.9943 17.7998 14 18.5 14M21 16.5C20.5085 15.9943 19.2002 14 18.5 14M18.5 14V21',
  d3: 'M6.5 11L10 3M15 3L17.5 8',
  d4: 'M19.7993 15.5878L20.3919 12.2134C20.4982 11.6081 20.9033 11.0876 21.4816 10.8132C21.621 10.747 21.7205 10.6235 21.7511 10.4784C21.9213 9.67075 22.3736 8.5469 21.3619 8.10084C21.1332 8 20.8208 8 20.196 8H11.5H7.5H3.80397C3.17922 8 2.86684 8 2.63812 8.10084C1.6264 8.5469 2.07874 9.67075 2.24894 10.4784C2.27952 10.6235 2.37896 10.747 2.51841 10.8132C3.09673 11.0876 3.50177 11.6081 3.60807 12.2134L4.20066 15.5878C4.46138 17.0725 4.55052 19.1942 5.8516 20.2402C6.8062 21 8.18162 21 10.9325 21H13.0675C15.8184 21 17.1938 21 18.1484 20.2402C19.4495 19.1943 19.5386 17.0725 19.7993 15.5878Z',
  d5: 'M15 3L17.5 8',
  d6: 'M6.5 11L10 3',
  d7: 'M3.78016 7.24976L20.2199 7.24976H20.2199C20.5119 7.24975 20.768 7.24974 20.9785 7.2641C21.1985 7.27911 21.434 7.31273 21.6644 7.41434C22.0522 7.58529 22.3488 7.84713 22.5339 8.1914C22.7121 8.52256 22.7549 8.87004 22.7496 9.16731C22.7442 9.46263 22.6901 9.75139 22.6362 9.99238C22.6058 10.1285 22.5021 10.5614 22.4868 10.625L22.4853 10.6315L22.4832 10.641C22.4001 11.0222 22.1416 11.3299 21.8031 11.4906C21.4336 11.6659 21.1928 11.9886 21.1306 12.3429C21.1032 12.5021 20.9074 12.5659 20.7857 12.4596C20.6484 12.3399 20.4978 12.2196 20.3361 12.1084C20.0532 11.9138 19.3916 11.4997 18.4998 11.4997C17.608 11.4997 16.9464 11.9138 16.6635 12.1084C16.3176 12.3464 16.0225 12.6253 15.8006 12.8534C15.3548 13.3115 14.9005 13.8903 14.6144 14.2552L14.1658 14.8836C14.0659 15.0474 13.3799 16.1721 14.0139 17.479C14.4002 18.2753 15.036 18.6443 15.5168 18.8163C15.7697 18.9067 15.8962 18.9519 15.9509 19.0296C16.0057 19.1073 16.0057 19.222 16.0057 19.4512L16.0057 20.9998C16.0057 21.344 16.0057 21.5161 15.9374 21.5991C15.9263 21.6126 15.9189 21.6203 15.9059 21.632C15.8259 21.7037 15.6886 21.7096 15.4139 21.7214H15.4139C14.7534 21.7498 13.9918 21.7498 13.1152 21.7498H13.1152L10.8848 21.7498C9.54983 21.7498 8.48171 21.7498 7.63078 21.6496C6.75215 21.5463 6.01409 21.3279 5.38455 20.8268L5.38167 20.8245C4.54362 20.1508 4.14201 19.1698 3.90958 18.2649C3.75283 17.6546 3.65361 16.9805 3.56896 16.4054L2.86937 12.3429C2.80715 11.9886 2.56639 11.6659 2.19688 11.4906C1.85843 11.3299 1.59987 11.0222 1.51681 10.641L1.51472 10.6315L1.51318 10.625C1.49793 10.5614 1.39421 10.1285 1.36376 9.99238C1.30986 9.75139 1.25576 9.46263 1.25043 9.16731C1.24507 8.87004 1.28792 8.52256 1.46605 8.1914C1.65124 7.84713 1.94781 7.58529 2.33555 7.41434C2.56603 7.31273 2.80147 7.27911 3.02149 7.2641C3.23204 7.24974 3.48816 7.24975 3.78014 7.24976H3.78016ZM10 11.2498C9.58579 11.2498 9.25 11.5855 9.25 11.9998C9.25 12.414 9.58579 12.7498 10 12.7498L14 12.7498C14.4142 12.7498 14.75 12.414 14.75 11.9998C14.75 11.5855 14.4142 11.2498 14 11.2498L10 11.2498Z',
  d8: 'M10.4011 2.08385C10.9071 2.30522 11.1378 2.89485 10.9164 3.40083L7.41641 11.4008C7.19504 11.9068 6.60541 12.1375 6.09943 11.9162C5.59345 11.6948 5.36273 11.1052 5.5841 10.5992L9.0841 2.59919C9.30546 2.09321 9.89509 1.86249 10.4011 2.08385Z',
  d9: 'M14.553 2.10555C15.047 1.85856 15.6477 2.05878 15.8946 2.55276L18.3946 7.55276C18.6416 8.04674 18.4414 8.64741 17.9474 8.8944C17.4535 9.14139 16.8528 8.94117 16.6058 8.44719L14.1058 3.44719C13.8588 2.95321 14.059 2.35254 14.553 2.10555Z',
  d10: 'M19.5059 20.9998C19.5059 21.552 19.0581 21.9998 18.5059 21.9998C17.9536 21.9998 17.5059 21.552 17.5059 20.9998L17.5059 17.4997L16.9116 17.4997C16.736 17.4999 16.5203 17.5 16.3439 17.4779L16.3405 17.4775C16.2141 17.4618 15.638 17.3899 15.3637 16.8243C15.0887 16.2575 15.3907 15.7574 15.456 15.6492L15.7951 15.1807C16.0897 14.8048 16.4954 14.2904 16.8759 13.8994C17.0657 13.7043 17.283 13.503 17.5139 13.3442C17.7191 13.203 18.0693 12.9997 18.5 12.9997C18.9307 12.9997 19.2809 13.203 19.4861 13.3442C19.717 13.503 19.9343 13.7043 20.1241 13.8994C20.5046 14.2904 20.9102 14.8048 21.2049 15.1807L21.544 15.6492C21.6093 15.7574 21.9113 16.2575 21.6363 16.8243C21.362 17.3899 20.7859 17.4618 20.6595 17.4775L20.6561 17.4779C20.4797 17.5 20.264 17.4999 20.0884 17.4997L19.5059 17.4997L19.5059 20.9998Z',
  d11: 'M20.2199 7.24976L3.78016 7.24976C3.48817 7.24975 3.23204 7.24974 3.02149 7.2641C2.80147 7.27911 2.56603 7.31273 2.33555 7.41434C1.94781 7.58529 1.65124 7.84713 1.46605 8.1914C1.28792 8.52256 1.24507 8.87004 1.25043 9.16731C1.25576 9.46263 1.30986 9.75139 1.36376 9.99238C1.39421 10.1285 1.49793 10.5614 1.51318 10.625C1.51398 10.6283 1.51438 10.63 1.51472 10.6315C1.51507 10.633 1.51565 10.6357 1.51681 10.641C1.59987 11.0222 1.85843 11.3299 2.19688 11.4906C2.56639 11.6659 2.80715 11.9886 2.86937 12.3429L3.56896 16.4054C3.65361 16.9805 3.75283 17.6546 3.90958 18.2649C4.14201 19.1698 4.54362 20.1508 5.38167 20.8245L5.38455 20.8268C6.01409 21.3279 6.75215 21.5463 7.63078 21.6496C8.48171 21.7498 9.54983 21.7498 10.8848 21.7498H13.1152C13.9918 21.7498 14.7534 21.7498 15.4139 21.7214C15.6886 21.7096 15.8259 21.7037 15.9059 21.632C15.9189 21.6203 15.9263 21.6126 15.9374 21.5991C16.0057 21.5161 16.0057 21.344 16.0057 20.9998L16.0057 19.4512C16.0057 19.222 16.0057 19.1073 15.9509 19.0296C15.8962 18.9519 15.7697 18.9067 15.5168 18.8163C15.036 18.6443 14.4002 18.2753 14.0139 17.479C13.3799 16.1721 14.0659 15.0474 14.1658 14.8836L14.6144 14.2552C14.9005 13.8903 15.3548 13.3115 15.8006 12.8534C16.0225 12.6253 16.3176 12.3464 16.6635 12.1084C16.9464 11.9138 17.608 11.4997 18.4998 11.4997C19.3916 11.4997 20.0532 11.9138 20.3361 12.1084C20.4978 12.2196 20.6484 12.3399 20.7857 12.4596C20.9074 12.5659 21.1032 12.5021 21.1306 12.3429C21.1928 11.9886 21.4336 11.6659 21.8031 11.4906C22.1416 11.3299 22.4001 11.0222 22.4832 10.641C22.4843 10.6357 22.4849 10.633 22.4853 10.6315C22.4856 10.63 22.486 10.6283 22.4868 10.625C22.5021 10.5614 22.6058 10.1285 22.6362 9.99238C22.6901 9.75139 22.7442 9.46263 22.7496 9.16731C22.7549 8.87004 22.7121 8.52256 22.5339 8.1914C22.3488 7.84713 22.0522 7.58529 21.6644 7.41434C21.434 7.31273 21.1985 7.27911 20.9785 7.2641C20.768 7.24974 20.5119 7.24975 20.2199 7.24976Z',
  d12: 'M9.25 11.9998C9.25 11.5855 9.58579 11.2498 10 11.2498L14 11.2498C14.4142 11.2498 14.75 11.5855 14.75 11.9998C14.75 12.414 14.4142 12.7498 14 12.7498L10 12.7498C9.58579 12.7498 9.25 12.414 9.25 11.9998Z',
  d13: 'M15.8946 2.55276C15.6477 2.05878 15.047 1.85856 14.553 2.10555C14.059 2.35254 13.8588 2.95321 14.1058 3.44719L16.0072 7.24997H18.2433L15.8946 2.55276Z',
  d14: 'M6.4834 10L9.98414 2M14.9852 2L17.4857 7',
  d15: 'M14.9854 18L17.986 15L20.9866 18M17.986 22V15.5574',
  d16: 'M12.9919 19.9736H5.49953C5.49481 19.9736 5.49073 19.9703 5.48975 19.9657L3.48617 10.498L2.00195 9.99678V7.04593C2.00195 7.04041 2.00643 7.03593 2.01196 7.03593H7.38118M10.9782 7.00098H21.9876C21.9931 7.00098 21.9976 7.00545 21.9976 7.01098V10.0002L20.4898 10.5091L20.1633 11.9973',
  d17: 'M19.043 14.3354L22.7502 18.0426L21.3359 19.4568L20.043 18.1639V22.7497H18.043V18.1639L16.7502 19.4568L15.3359 18.0426L19.043 14.3354Z',
  d18: 'M18.3955 6.25H22.0001C22.4143 6.25 22.7501 6.58579 22.7501 7V10.5406L21.1453 11.0755L20.5813 13.7533L19.0423 12.2144L13.2139 18.0428L15.9211 20.75H5.50008C5.14542 20.75 4.83924 20.5016 4.76617 20.1545L2.85482 11.0756L1.24902 10.5407V7C1.24902 6.58579 1.58481 6.25 1.99902 6.25H6.91776L9.08496 1.29639L10.9173 2.09803L9.10079 6.25H16.1595L14.1067 2.14443L15.8955 1.25L18.3955 6.25ZM9.49902 10.25H14.499V11.75H9.49902V10.25Z',
} as const;

export const IconShoppingBasketCheckIn03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-in-03-stroke-rounded IconShoppingBasketCheckIn03StrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketCheckIn03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-in-03-duotone-rounded IconShoppingBasketCheckIn03DuotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketCheckIn03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-in-03-twotone-rounded IconShoppingBasketCheckIn03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketCheckIn03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-in-03-solid-rounded IconShoppingBasketCheckIn03SolidRounded"
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketCheckIn03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-in-03-bulk-rounded IconShoppingBasketCheckIn03BulkRounded"
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

export const IconShoppingBasketCheckIn03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-in-03-stroke-sharp IconShoppingBasketCheckIn03StrokeSharp"
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
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketCheckIn03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-in-03-solid-sharp IconShoppingBasketCheckIn03SolidSharp"
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

export const iconPackOfShoppingBasketCheckIn03: TheIconSelfPack = {
  name: 'ShoppingBasketCheckIn03',
  StrokeRounded: IconShoppingBasketCheckIn03StrokeRounded,
  DuotoneRounded: IconShoppingBasketCheckIn03DuotoneRounded,
  TwotoneRounded: IconShoppingBasketCheckIn03TwotoneRounded,
  SolidRounded: IconShoppingBasketCheckIn03SolidRounded,
  BulkRounded: IconShoppingBasketCheckIn03BulkRounded,
  StrokeSharp: IconShoppingBasketCheckIn03StrokeSharp,
  SolidSharp: IconShoppingBasketCheckIn03SolidSharp,
};