import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.5 8H20.196C20.8208 8 21.1332 8 21.3619 8.10084C22.3736 8.5469 21.9213 9.67075 21.7511 10.4784C21.7205 10.6235 21.621 10.747 21.4816 10.8132C21.1491 10.971 20.8738 11.2102 20.6797 11.5M7.5 8H3.80397C3.17922 8 2.86684 8 2.63812 8.10084C1.6264 8.5469 2.07874 9.67075 2.24894 10.4784C2.27952 10.6235 2.37896 10.747 2.51841 10.8132C3.09673 11.0876 3.50177 11.6081 3.60807 12.2134L4.20066 15.5878C4.46138 17.0725 4.55052 19.1942 5.8516 20.2402C6.8062 21 8.18162 21 10.9325 21H13.0675C13.2156 21 13.5 20.9999 13.5 20.9999',
  d2: 'M16 18.5C16.4915 19.0057 17.7998 21 18.5 21M21 18.5C20.5085 19.0057 19.2002 21 18.5 21M18.5 21V14',
  d3: 'M6.5 11L10 3M15 3L17.5 8',
  d4: 'M19.7993 15.5878L20.3919 12.2134C20.4982 11.6081 20.9033 11.0876 21.4816 10.8132C21.621 10.747 21.7205 10.6235 21.7511 10.4784C21.9213 9.67075 22.3736 8.5469 21.3619 8.10084C21.1332 8 20.8208 8 20.196 8H11.5H7.5H3.80397C3.17922 8 2.86684 8 2.63812 8.10084C1.6264 8.5469 2.07874 9.67075 2.24894 10.4784C2.27952 10.6235 2.37896 10.747 2.51841 10.8132C3.09673 11.0876 3.50177 11.6081 3.60807 12.2134L4.20066 15.5878C4.46138 17.0725 4.55052 19.1942 5.8516 20.2402C6.8062 21 8.18162 21 10.9325 21H13.0675C15.8184 21 17.1938 21 18.1484 20.2402C19.4495 19.1943 19.5386 17.0725 19.7993 15.5878Z',
  d5: 'M6.5 11L10 3',
  d6: 'M15 3L17.5 8',
  d7: 'M3.78016 7.24976L20.2199 7.24976H20.2199C20.5119 7.24975 20.768 7.24974 20.9785 7.2641C21.1985 7.27911 21.434 7.31273 21.6644 7.41434C22.0522 7.58529 22.3488 7.84713 22.5339 8.1914C22.7121 8.52256 22.7549 8.87004 22.7496 9.16731C22.7442 9.46263 22.6901 9.75139 22.6362 9.99238C22.6047 10.1334 22.4945 10.593 22.4855 10.6304L22.485 10.6327L22.4844 10.6355C22.4026 11.0192 22.1432 11.3292 21.8031 11.4906C21.4336 11.6659 21.1928 11.9886 21.1306 12.3429L21.1111 12.4562C21.0489 12.8175 21.0178 12.9982 20.9531 13.0132C20.8884 13.0282 20.77 12.8644 20.5332 12.5368L20.5332 12.5368C20.079 11.9085 19.3401 11.4997 18.5057 11.4997C17.1249 11.4997 16.0057 12.619 16.0057 13.9997L16.0057 15.8858C16.0057 15.9653 16.0057 16.005 15.984 16.0323C15.9623 16.0596 15.9217 16.0691 15.8405 16.088C15.3675 16.1981 14.4962 16.5262 14.0139 17.5205C13.3799 18.8274 14.0659 19.9521 14.1658 20.1159L14.6144 20.7443L14.6233 20.7555L14.6233 20.7555C14.9631 21.189 15.133 21.4057 15.0517 21.5741C14.9705 21.7424 14.702 21.7442 14.1652 21.7476H14.1652C13.835 21.7498 13.4854 21.7498 13.1153 21.7498H13.1152L10.8848 21.7498C9.54983 21.7498 8.48171 21.7498 7.63078 21.6496C6.75215 21.5463 6.01409 21.3279 5.38455 20.8268L5.38167 20.8245C4.54362 20.1508 4.14201 19.1698 3.90958 18.2649C3.75283 17.6546 3.65361 16.9805 3.56896 16.4054L2.86937 12.3429C2.80715 11.9886 2.56639 11.6659 2.19688 11.4906C1.85682 11.3292 1.59741 11.0192 1.51563 10.6355L1.51502 10.6327L1.51448 10.6304C1.50551 10.593 1.39531 10.1334 1.36376 9.99238C1.30986 9.75139 1.25576 9.46263 1.25043 9.16731C1.24507 8.87004 1.28792 8.52256 1.46605 8.1914C1.65124 7.84713 1.94781 7.58529 2.33555 7.41434C2.56603 7.31273 2.80147 7.27911 3.02149 7.2641C3.23204 7.24974 3.48816 7.24975 3.78014 7.24976H3.78016ZM10 11.2498C9.58579 11.2498 9.25 11.5855 9.25 11.9998C9.25 12.414 9.58579 12.7498 10 12.7498L14 12.7498C14.4142 12.7498 14.75 12.414 14.75 11.9998C14.75 11.5855 14.4142 11.2498 14 11.2498L10 11.2498Z',
  d8: 'M10.4011 2.08385C10.9071 2.30522 11.1378 2.89485 10.9164 3.40083L7.41641 11.4008C7.19504 11.9068 6.60541 12.1375 6.09943 11.9162C5.59345 11.6948 5.36273 11.1052 5.5841 10.5992L9.0841 2.59919C9.30546 2.09321 9.89509 1.86249 10.4011 2.08385Z',
  d9: 'M14.553 2.10555C15.047 1.85856 15.6477 2.05878 15.8946 2.55276L18.3946 7.55276C18.6416 8.04674 18.4414 8.64741 17.9474 8.8944C17.4535 9.14139 16.8528 8.94117 16.6058 8.44719L14.1058 3.44719C13.8588 2.95321 14.059 2.35254 14.553 2.10555Z',
  d10: 'M19.5059 14C19.5059 13.4477 19.0581 13 18.5059 13C17.9536 13 17.5059 13.4477 17.5059 14L17.5059 17.5L16.9116 17.5C16.736 17.4999 16.5203 17.4997 16.3439 17.5218L16.3405 17.5222C16.2141 17.538 15.638 17.6098 15.3637 18.1754C15.0887 18.7423 15.3907 19.2424 15.456 19.3506L15.7951 19.8191C16.0897 20.1949 16.4954 20.7094 16.8759 21.1004C17.0657 21.2955 17.283 21.4967 17.5139 21.6556C17.7191 21.7968 18.0693 22 18.5 22C18.9307 22 19.2809 21.7968 19.4861 21.6556C19.717 21.4967 19.9343 21.2955 20.1241 21.1004C20.5046 20.7094 20.9102 20.1949 21.2049 19.8191L21.544 19.3506C21.6093 19.2424 21.9113 18.7422 21.6363 18.1754C21.362 17.6098 20.7859 17.538 20.6595 17.5222L20.6561 17.5218C20.4797 17.4997 20.264 17.4999 20.0884 17.5L19.5059 17.5L19.5059 14Z',
  d11: 'M20.2199 7.24976H3.78016C3.48817 7.24975 3.23204 7.24974 3.02149 7.2641C2.80147 7.27911 2.56603 7.31273 2.33555 7.41434C1.94781 7.58529 1.65124 7.84713 1.46605 8.1914C1.28792 8.52256 1.24507 8.87004 1.25043 9.16731C1.25576 9.46263 1.30986 9.75139 1.36376 9.99238C1.39531 10.1334 1.50551 10.593 1.51448 10.6304L1.51502 10.6327L1.51563 10.6355C1.59741 11.0192 1.85682 11.3292 2.19688 11.4906C2.56639 11.6659 2.80715 11.9886 2.86937 12.3429L3.56896 16.4054C3.65361 16.9805 3.75283 17.6546 3.90958 18.2649C4.14201 19.1698 4.54362 20.1508 5.38167 20.8245L5.38455 20.8268C6.01409 21.3279 6.75215 21.5463 7.63078 21.6496C8.48171 21.7498 9.54983 21.7498 10.8848 21.7498H13.1152C13.4853 21.7498 13.835 21.7498 14.1652 21.7476C14.702 21.7442 14.9705 21.7424 15.0517 21.5741C15.133 21.4057 14.9631 21.189 14.6233 20.7555C14.6203 20.7518 14.6174 20.748 14.6144 20.7443L14.1658 20.1159C14.0659 19.9521 13.3799 18.8274 14.0139 17.5205C14.4962 16.5262 15.3675 16.1981 15.8405 16.088C15.9217 16.0691 15.9623 16.0596 15.984 16.0323C16.0057 16.005 16.0057 15.9653 16.0057 15.8858L16.0057 13.9997C16.0057 12.619 17.1249 11.4997 18.5057 11.4997C19.3401 11.4997 20.079 11.9085 20.5332 12.5368C20.77 12.8644 20.8884 13.0282 20.9531 13.0132C21.0178 12.9982 21.0489 12.8175 21.1111 12.4562L21.1306 12.3429C21.1928 11.9886 21.4336 11.6659 21.8031 11.4906C22.1432 11.3292 22.4026 11.0192 22.4844 10.6355L22.485 10.6327L22.4855 10.6304C22.4945 10.593 22.6047 10.1334 22.6362 9.99238C22.6901 9.75139 22.7442 9.46263 22.7496 9.16731C22.7549 8.87004 22.7121 8.52256 22.5339 8.1914C22.3488 7.84713 22.0522 7.58529 21.6644 7.41434C21.434 7.31273 21.1985 7.27911 20.9785 7.2641C20.768 7.24974 20.5119 7.24975 20.2199 7.24976Z',
  d12: 'M9.25 11.9998C9.25 11.5855 9.58579 11.2498 10 11.2498L14 11.2498C14.4142 11.2498 14.75 11.5855 14.75 11.9998C14.75 12.414 14.4142 12.7498 14 12.7498L10 12.7498C9.58579 12.7498 9.25 12.414 9.25 11.9998Z',
  d13: 'M15.8946 2.55276C15.6477 2.05878 15.047 1.85856 14.553 2.10555C14.059 2.35254 13.8588 2.95321 14.1058 3.44719L16.0072 7.24998H18.2433L15.8946 2.55276Z',
  d14: 'M6.5 10L10 2M15 2L17.5 7',
  d15: 'M15 19L18 22L21 19M18 14V21.3768',
  d16: 'M11.9977 19.9784L5.49953 19.9863C5.49481 19.9863 5.49073 19.983 5.48975 19.9784L3.48617 10.5107L2.00195 10.0095V7.05863C2.00195 7.05311 2.00643 7.04863 2.01196 7.04863H7.38118M10.9782 7.01367H21.9876C21.9931 7.01367 21.9976 7.01815 21.9976 7.02367V10.0129L20.4898 10.5218L20.1102 12.4987',
  d17: 'M19.043 22.75L22.7502 19.0429L21.3359 17.6287L20.043 18.9216V13.3358H18.043V18.9216L16.7502 17.6287L15.3359 19.0429L19.043 22.75Z',
  d18: 'M18.3955 6.25H22.0001C22.4143 6.25 22.7501 6.58579 22.7501 7V10.5406L21.1453 11.0755L20.9852 11.8358H16.5423V15.7145L13.2139 19.0429L14.921 20.75H5.50008C5.14542 20.75 4.83924 20.5016 4.76617 20.1545L2.85482 11.0756L1.24902 10.5407V7C1.24902 6.58579 1.58481 6.25 1.99902 6.25H6.91776L9.08496 1.29639L10.9173 2.09803L9.10079 6.25H16.1595L14.1067 2.14443L15.8955 1.25L18.3955 6.25ZM9.49902 10.25H14.499V11.75H9.49902V10.25Z',
};

export const IconShoppingBasketCheckOut03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-03-stroke-rounded IconShoppingBasketCheckOut03StrokeRounded"
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

export const IconShoppingBasketCheckOut03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-03-duotone-rounded IconShoppingBasketCheckOut03DuotoneRounded"
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

export const IconShoppingBasketCheckOut03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-03-twotone-rounded IconShoppingBasketCheckOut03TwotoneRounded"
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

export const IconShoppingBasketCheckOut03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-03-solid-rounded IconShoppingBasketCheckOut03SolidRounded"
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

export const IconShoppingBasketCheckOut03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-03-bulk-rounded IconShoppingBasketCheckOut03BulkRounded"
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

export const IconShoppingBasketCheckOut03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-03-stroke-sharp IconShoppingBasketCheckOut03StrokeSharp"
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

export const IconShoppingBasketCheckOut03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-03-solid-sharp IconShoppingBasketCheckOut03SolidSharp"
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

export const iconPackOfShoppingBasketCheckOut03: TheIconSelfPack = {
  name: 'ShoppingBasketCheckOut03',
  StrokeRounded: IconShoppingBasketCheckOut03StrokeRounded,
  DuotoneRounded: IconShoppingBasketCheckOut03DuotoneRounded,
  TwotoneRounded: IconShoppingBasketCheckOut03TwotoneRounded,
  SolidRounded: IconShoppingBasketCheckOut03SolidRounded,
  BulkRounded: IconShoppingBasketCheckOut03BulkRounded,
  StrokeSharp: IconShoppingBasketCheckOut03StrokeSharp,
  SolidSharp: IconShoppingBasketCheckOut03SolidSharp,
};