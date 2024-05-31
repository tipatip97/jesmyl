import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.5 8H20.196C20.8208 8 21.1332 8 21.3619 8.10084C22.3736 8.5469 21.9213 9.67075 21.7511 10.4784C21.7187 10.6318 21.6188 10.7251 21.5 10.8013M7.5 8H3.80397C3.17922 8 2.86684 8 2.63812 8.10084C1.6264 8.5469 2.07874 9.67075 2.24894 10.4784C2.27952 10.6235 2.37896 10.747 2.51841 10.8132C3.09673 11.0876 3.50177 11.6081 3.60807 12.2134L4.20066 15.5878C4.46138 17.0725 4.55052 19.1942 5.8516 20.2402C6.8062 21 8.18162 21 10.9325 21H12',
  d2: 'M14.1418 13.4418C15.3486 12.7108 16.4018 13.0054 17.0345 13.4747C17.294 13.6671 17.4237 13.7633 17.5 13.7633C17.5763 13.7633 17.706 13.6671 17.9655 13.4747C18.5982 13.0054 19.6514 12.7108 20.8582 13.4418C22.4419 14.4013 22.8002 17.5666 19.1472 20.237C18.4514 20.7457 18.1035 21 17.5 21C16.8965 21 16.5486 20.7457 15.8528 20.237C12.1998 17.5666 12.5581 14.4013 14.1418 13.4418Z',
  d3: 'M6.5 11L10 3M15 3L17.5 8',
  d4: 'M16.7578 20.8324C16.494 20.7058 16.2225 20.5073 15.8528 20.237C12.1998 17.5666 12.5581 14.4013 14.1418 13.4418C15.3486 12.7108 16.4018 13.0054 17.0345 13.4747C17.294 13.6671 17.4237 13.7633 17.5 13.7633C17.5763 13.7633 17.706 13.6671 17.9654 13.4747C18.4853 13.0891 19.289 12.8214 20.2286 13.1437L20.3919 12.2134C20.4982 11.6081 20.9033 11.0876 21.4816 10.8132C21.621 10.747 21.7205 10.6235 21.7511 10.4784C21.7742 10.3684 21.8026 10.2525 21.8319 10.1333C22.0173 9.37723 22.2358 8.48616 21.3619 8.10084C21.1332 8 20.8208 8 20.196 8H3.80397C3.17922 8 2.86684 8 2.63812 8.10084C1.76418 8.48616 1.9827 9.37723 2.16812 10.1334C2.19735 10.2525 2.22576 10.3684 2.24894 10.4784C2.27952 10.6235 2.37896 10.747 2.51841 10.8132C3.09673 11.0876 3.50177 11.6081 3.60807 12.2134L4.20066 15.5878C4.24293 15.8285 4.28069 16.086 4.31983 16.3528C4.52214 17.7322 4.76145 19.3638 5.8516 20.2402C6.8062 21 8.18162 21 10.9325 21H13.0675C14.7295 21 15.8894 21 16.7578 20.8324Z',
  d5: 'M6.5 11L10 3',
  d6: 'M15 3L17.5 8',
  d7: 'M3.78016 6.875L20.2199 6.875H20.2199C20.5119 6.87499 20.768 6.87498 20.9785 6.88935C21.1985 6.90436 21.434 6.93797 21.6644 7.03959C22.0522 7.21054 22.3488 7.47238 22.5339 7.81665C22.7121 8.14781 22.7549 8.49528 22.7496 8.79255C22.7442 9.08788 22.6901 9.37663 22.6362 9.61762C22.6058 9.75373 22.5021 10.1866 22.4868 10.2502L22.4861 10.2532L22.4853 10.2566L22.4845 10.2602L22.4832 10.2662C22.4001 10.6474 22.1416 10.9552 21.8031 11.1158C21.713 11.1585 21.6306 11.21 21.5566 11.2686C21.2712 11.4944 21.1285 11.6073 21.0584 11.6216C20.9884 11.6359 20.8737 11.6046 20.6444 11.5421C19.5858 11.2534 18.5861 11.361 17.7473 11.68C17.6191 11.7288 17.555 11.7532 17.4998 11.7532C17.4447 11.7532 17.3806 11.7288 17.2523 11.68C16.0556 11.2248 14.5312 11.2002 12.9758 12.1424C11.2752 13.1727 10.5383 15.1701 10.8038 17.1256C10.951 18.2094 11.3901 19.2811 12.1101 20.2901L12.1102 20.2901C12.4715 20.7965 12.6522 21.0497 12.5685 21.2123C12.4847 21.375 12.1905 21.375 11.6021 21.375H10.8848C9.54983 21.375 8.48171 21.375 7.63078 21.2749C6.75215 21.1715 6.01409 20.9531 5.38455 20.4521L5.38167 20.4498C4.54362 19.776 4.14201 18.795 3.90958 17.8901C3.75283 17.2799 3.65361 16.6058 3.56896 16.0307L2.86937 11.9681C2.80715 11.6138 2.56639 11.2911 2.19688 11.1158C1.85843 10.9552 1.59987 10.6474 1.51681 10.2662L1.5155 10.2602L1.51469 10.2566L1.51389 10.2532L1.51318 10.2502C1.49793 10.1866 1.39421 9.75373 1.36376 9.61762C1.30986 9.37663 1.25576 9.08787 1.25043 8.79255C1.24507 8.49528 1.28792 8.1478 1.46605 7.81665C1.65124 7.47238 1.94781 7.21054 2.33555 7.03959C2.56603 6.93797 2.80147 6.90436 3.02149 6.88935C3.23204 6.87498 3.48816 6.87499 3.78014 6.875H3.78016ZM10 10.875C9.58579 10.875 9.25 11.2108 9.25 11.625C9.25 12.0392 9.58579 12.375 10 12.375L12 12.375C12.4142 12.375 12.75 12.0392 12.75 11.625C12.75 11.2108 12.4142 10.875 12 10.875L10 10.875Z',
  d8: 'M10.4011 1.7091C10.9071 1.93046 11.1378 2.52009 10.9164 3.02607L7.41641 11.0261C7.19504 11.5321 6.60541 11.7628 6.09943 11.5414C5.59345 11.32 5.36273 10.7304 5.5841 10.2244L9.0841 2.22443C9.30546 1.71845 9.89509 1.48773 10.4011 1.7091Z',
  d9: 'M14.553 1.73079C15.047 1.4838 15.6477 1.68403 15.8946 2.17801L18.3946 7.17801C18.6416 7.67198 18.4414 8.27266 17.9474 8.51965C17.4535 8.76664 16.8528 8.56641 16.6058 8.07243L14.1058 3.07243C13.8588 2.57845 14.059 1.97778 14.553 1.73079Z',
  d10: 'M13.7529 13.4257C15.2563 12.5149 16.6394 12.8734 17.481 13.4976L17.4996 13.5114L17.5183 13.4976C18.3599 12.8734 19.7429 12.5149 21.2464 13.4257C22.3403 14.0884 22.9107 15.4409 22.7093 16.924C22.5061 18.4198 21.5362 20.0447 19.5894 21.4678C18.9636 21.9264 18.3509 22.3753 17.4996 22.3753C16.6483 22.3753 16.0356 21.9264 15.4098 21.4678C13.4631 20.0447 12.4931 18.4198 12.29 16.924C12.0886 15.4409 12.659 14.0884 13.7529 13.4257Z',
  d11: 'M20.2199 6.875H3.78016C3.48817 6.87499 3.23204 6.87498 3.02149 6.88935C2.80147 6.90436 2.56603 6.93797 2.33555 7.03959C1.94781 7.21054 1.65124 7.47238 1.46605 7.81665C1.28792 8.1478 1.24507 8.49528 1.25043 8.79255C1.25576 9.08787 1.30986 9.37663 1.36376 9.61762C1.39421 9.75373 1.49793 10.1866 1.51318 10.2502C1.51343 10.2512 1.51367 10.2523 1.51389 10.2532C1.51424 10.2547 1.51442 10.2554 1.51469 10.2566C1.51497 10.2578 1.51515 10.2586 1.5155 10.2602C1.51586 10.2619 1.51631 10.2639 1.51681 10.2662C1.59987 10.6474 1.85843 10.9552 2.19688 11.1158C2.56639 11.2911 2.80715 11.6138 2.86937 11.9681L3.56896 16.0307C3.65361 16.6058 3.75283 17.2799 3.90958 17.8901C4.14201 18.795 4.54362 19.776 5.38167 20.4498L5.38455 20.4521C6.01409 20.9531 6.75215 21.1715 7.63078 21.2749C8.48171 21.375 9.54983 21.375 10.8848 21.375H11.6021C12.1905 21.375 12.4847 21.375 12.5685 21.2123C12.6522 21.0497 12.4715 20.7965 12.1101 20.2901C11.3901 19.2811 10.951 18.2094 10.8038 17.1256C10.5383 15.1701 11.2752 13.1727 12.9758 12.1424C14.5312 11.2002 16.0556 11.2248 17.2523 11.68C17.3806 11.7288 17.4447 11.7532 17.4998 11.7532C17.555 11.7532 17.6191 11.7288 17.7473 11.68C18.5861 11.361 19.5858 11.2534 20.6444 11.5421C20.8737 11.6046 20.9884 11.6359 21.0584 11.6216C21.1285 11.6073 21.2712 11.4944 21.5566 11.2686C21.6306 11.21 21.713 11.1585 21.8031 11.1158C22.1416 10.9552 22.4001 10.6474 22.4832 10.2662C22.4837 10.2639 22.4841 10.2619 22.4845 10.2602C22.4848 10.2586 22.485 10.2578 22.4853 10.2566C22.4856 10.2554 22.4857 10.2547 22.4861 10.2532C22.4863 10.2523 22.4866 10.2513 22.4868 10.2502C22.5021 10.1866 22.6058 9.75373 22.6362 9.61762C22.6901 9.37663 22.7442 9.08788 22.7496 8.79255C22.7549 8.49528 22.7121 8.14781 22.5339 7.81665C22.3488 7.47238 22.0522 7.21054 21.6644 7.03959C21.434 6.93797 21.1985 6.90436 20.9785 6.88935C20.768 6.87498 20.5119 6.87499 20.2199 6.875Z',
  d12: 'M9.25 11.625C9.25 11.2108 9.58579 10.875 10 10.875L12 10.875C12.4142 10.875 12.75 11.2108 12.75 11.625C12.75 12.0392 12.4142 12.375 12 12.375L10 12.375C9.58579 12.375 9.25 12.0392 9.25 11.625Z',
  d13: 'M15.8946 2.17801C15.6477 1.68403 15.047 1.4838 14.553 1.73079C14.059 1.97778 13.8588 2.57845 14.1058 3.07243L16.0072 6.87524H18.2433L15.8946 2.17801Z',
  d14: 'M6.49902 10L9.99902 2M14.999 2L17.499 7',
  d15: 'M20.7421 15.2896C19.1455 14.457 17.999 15.6843 17.999 15.6843C17.999 15.6843 16.8525 14.457 15.2558 15.2896C13.322 16.298 13.1831 20.2469 17.999 22C22.815 20.2469 22.676 16.298 20.7421 15.2896Z',
  d16: 'M11.9967 19.9784L5.49856 19.9863C5.49383 19.9863 5.48975 19.983 5.48877 19.9784L3.48519 10.5107L2.00098 10.0095V7.05863C2.00098 7.05311 2.00545 7.04863 2.01098 7.04863H7.3802M10.9772 7.01367H21.9866C21.9921 7.01367 21.9966 7.01815 21.9966 7.02367V10.0129L20.4889 10.5218L20.1092 12.4987',
  d17: 'M17.5138 14.4812C17.6989 14.558 17.861 14.6458 17.9979 14.7317C18.1348 14.6458 18.2969 14.558 18.4821 14.4812C19.1348 14.2106 20.0577 14.0883 21.0878 14.6225C22.4201 15.3132 23.0197 16.93 22.6292 18.5193C22.23 20.1443 20.8352 21.723 18.2545 22.6571L17.9979 22.75L17.7414 22.6571C15.1606 21.723 13.7659 20.1443 13.3666 18.5193C12.9761 16.93 13.5757 15.3132 14.908 14.6225C15.9381 14.0883 16.861 14.2106 17.5138 14.4812Z',
  d18: 'M18.3955 6.25H22.0001C22.4143 6.25 22.7501 6.58579 22.7501 7V10.5406L21.1453 11.0755L20.7618 12.8962C19.7059 12.62 18.7431 12.7695 17.9995 13.0592C17.0226 12.6786 15.6671 12.54 14.2191 13.2908C12.1514 14.3629 11.3906 16.757 11.9115 18.8772C12.073 19.5346 12.3475 20.1632 12.7289 20.75H5.50008C5.14542 20.75 4.83924 20.5016 4.76617 20.1545L2.85482 11.0756L1.24902 10.5407V7C1.24902 6.58579 1.58481 6.25 1.99902 6.25H6.91776L9.08496 1.29639L10.9173 2.09803L9.10079 6.25H16.1595L14.1067 2.14443L15.8955 1.25L18.3955 6.25ZM9.49902 10.25H14.499V11.75H9.49902V10.25Z',
} as const;

export const IconShoppingBasketFavorite03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-03-stroke-rounded IconShoppingBasketFavorite03StrokeRounded"
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

export const IconShoppingBasketFavorite03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-03-duotone-rounded IconShoppingBasketFavorite03DuotoneRounded"
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

export const IconShoppingBasketFavorite03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-03-twotone-rounded IconShoppingBasketFavorite03TwotoneRounded"
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

export const IconShoppingBasketFavorite03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-03-solid-rounded IconShoppingBasketFavorite03SolidRounded"
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

export const IconShoppingBasketFavorite03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-03-bulk-rounded IconShoppingBasketFavorite03BulkRounded"
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

export const IconShoppingBasketFavorite03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-03-stroke-sharp IconShoppingBasketFavorite03StrokeSharp"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketFavorite03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-03-solid-sharp IconShoppingBasketFavorite03SolidSharp"
    >
      <path 
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

export const iconPackOfShoppingBasketFavorite03: TheIconSelfPack = {
  name: 'ShoppingBasketFavorite03',
  StrokeRounded: IconShoppingBasketFavorite03StrokeRounded,
  DuotoneRounded: IconShoppingBasketFavorite03DuotoneRounded,
  TwotoneRounded: IconShoppingBasketFavorite03TwotoneRounded,
  SolidRounded: IconShoppingBasketFavorite03SolidRounded,
  BulkRounded: IconShoppingBasketFavorite03BulkRounded,
  StrokeSharp: IconShoppingBasketFavorite03StrokeSharp,
  SolidSharp: IconShoppingBasketFavorite03SolidSharp,
};