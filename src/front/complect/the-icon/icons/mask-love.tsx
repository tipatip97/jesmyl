import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.1418 13.4419C15.3486 12.7108 16.4018 13.0054 17.0345 13.4747C17.294 13.6671 17.4237 13.7633 17.5 13.7633C17.5763 13.7633 17.706 13.6671 17.9655 13.4747C18.5982 13.0054 19.6514 12.7108 20.8582 13.4419C22.4419 14.4013 22.8002 17.5666 19.1472 20.2371C18.4514 20.7457 18.1035 21 17.5 21C16.8965 21 16.5486 20.7457 15.8528 20.2371C12.1998 17.5666 12.5581 14.4013 14.1418 13.4419Z',
  d2: 'M6 8C7.46589 7.38677 9.61061 7 12 7C14.3894 7 16.5341 7.38677 18 8',
  d3: 'M6 9C6 12.2571 4.1688 13.9419 3.05731 13.9985C3.02153 14.0003 2.98891 13.9808 2.97139 13.9496C2.15656 12.4966 2 10.7879 2 9C2 5.68629 2.89543 3 4 3C5.10457 3 6 5.68629 6 9Z',
  d4: 'M18.06 10.02C18.0094 9.66713 18 9.40053 18 9C18 5.68629 18.8954 3 20 3C21.1046 3 22 5.68629 22 9C22 9.38088 22 10.14 21.948 10.52',
  d5: 'M11 19C8.04 18.78 4.74 17.04 3 14',
  d6: 'M3.1638 13.9796C4.32864 13.7566 6.47667 11.8124 5.99945 8C7.46534 7.38677 9.61007 7 11.9994 7C14.3888 7 16.5335 7.38677 17.9994 8C17.9994 10.5417 18.6019 12.1083 19.3266 13.0006C18.777 13.0158 18.3088 13.2193 17.9649 13.4744C17.7055 13.6668 17.5758 13.763 17.4994 13.763C17.4231 13.763 17.2934 13.6668 17.034 13.4744C16.4013 13.0051 15.348 12.7105 14.1413 13.4416C12.8424 14.2285 12.3677 16.4992 14.2545 18.7638C13.5284 18.9185 12.7738 19 11.9994 19C8.215 19 4.90311 17.0526 3.08655 14.1422C3.04657 14.0781 3.08964 13.9938 3.1638 13.9796Z',
  d7: 'M6 8C7.46589 7.38677 9.61061 7 12 7C14.3894 7 16.5341 7.38677 18 8M18.06 10.02C18.0094 9.66713 18 9.40053 18 9C18 5.68629 18.8954 3 20 3C21.1046 3 22 5.68629 22 9C22 9.38088 22 10.14 21.948 10.52M11 19C8.04 18.78 4.74 17.04 3 14M6 9C6 12.2571 4.1688 13.9419 3.05731 13.9985C3.02153 14.0003 2.98891 13.9808 2.97139 13.9496C2.15656 12.4966 2 10.7879 2 9C2 5.68629 2.89543 3 4 3C5.10457 3 6 5.68629 6 9Z',
  d8: 'M13.7509 12.7991C15.2543 11.8883 16.6561 12.2606 17.4977 12.8848C18.3393 12.2606 19.741 11.8883 21.2444 12.7991C22.3383 13.4618 22.9087 14.8144 22.7073 16.2975C22.5042 17.7932 21.5342 19.4181 19.5875 20.8412C18.9616 21.2998 18.349 21.7487 17.4977 21.7487C16.6464 21.7487 16.0337 21.2998 15.4078 20.8412C13.4611 19.4181 12.4912 17.7932 12.288 16.2975C12.0866 14.8144 12.657 13.4618 13.7509 12.7991Z',
  d9: 'M2.65346 3.07885C2.97508 2.67286 3.48417 2.25 4.18182 2.25C4.87947 2.25 5.38856 2.67286 5.71018 3.07885C6.04048 3.4958 6.29519 4.03889 6.49101 4.62332C6.66322 5.13728 6.80605 5.76266 6.91064 6.41737C6.94474 6.63082 6.96179 6.73754 7.03474 6.78604C7.10769 6.83454 7.2129 6.80891 7.42333 6.75766C8.75733 6.43273 10.331 6.25 12.0002 6.25C13.661 6.25 15.2272 6.43089 16.5568 6.75275C16.7663 6.80346 16.8711 6.82881 16.9437 6.78096C17.0163 6.7331 17.0343 6.6266 17.0704 6.41359C17.181 5.76075 17.3378 5.13434 17.509 4.62332C17.7048 4.03889 17.9595 3.4958 18.2898 3.07885C18.6114 2.67286 19.1205 2.25 19.8182 2.25C20.5158 2.25 21.0249 2.67286 21.3465 3.07885C21.6768 3.4958 21.9316 4.03889 22.1274 4.62332C22.5224 5.80234 22.75 7.36931 22.75 9.05556C22.75 9.77936 22.7252 10.5215 22.6323 11.2583C22.6014 11.5036 22.5859 11.6262 22.5107 11.6769C22.4942 11.6881 22.4783 11.6957 22.4594 11.7018C22.3728 11.7292 22.2562 11.6585 22.0228 11.5172C21.6889 11.3148 21.3561 11.1575 21.0275 11.0397C20.8691 10.9829 20.7899 10.9545 20.7531 10.8971C20.7163 10.8397 20.7234 10.7586 20.7376 10.5965C20.7802 10.1091 20.796 9.59548 20.796 9.05554C20.796 7.52012 20.586 6.17042 20.2737 5.23819C20.2085 5.04374 20.1419 4.87655 20.0765 4.73503C19.9899 4.54775 19.9466 4.4541 19.8187 4.4541C19.6908 4.4541 19.6475 4.54775 19.561 4.73503C19.4955 4.87655 19.4289 5.04374 19.3638 5.23819C19.0514 6.17042 18.8414 7.52012 18.8414 9.05554C18.8414 9.50775 18.8826 9.91827 18.9537 10.2882C18.9974 10.5153 19.0192 10.6289 18.972 10.6977C18.9248 10.7666 18.8098 10.7874 18.5798 10.8292C18.2567 10.8878 17.9494 10.9784 17.6621 11.0932C17.5789 11.1265 17.5373 11.1431 17.4988 11.1431C17.4604 11.1431 17.4188 11.1265 17.3356 11.0933C16.128 10.6106 14.5646 10.5541 12.9748 11.5172C11.2742 12.5475 10.5373 14.5448 10.8028 16.5003C10.9474 17.5647 11.3735 18.6175 12.0708 19.6106C12.1118 19.669 12.0712 19.75 12 19.75C7.89676 19.75 4.25559 17.54 2.3242 14.3432C1.39798 12.7001 1.25 10.8232 1.25 9.05556C1.25 7.36931 1.47758 5.80234 1.87262 4.62332C2.06845 4.03889 2.32316 3.4958 2.65346 3.07885ZM3.20508 9.05554C3.20508 7.52012 3.41504 6.17042 3.7274 5.23819C3.79255 5.04374 3.85917 4.87655 3.92459 4.73503C4.01118 4.54775 4.05448 4.45411 4.18235 4.45411C4.31022 4.4541 4.35352 4.54775 4.44011 4.73503C4.50554 4.87655 4.57215 5.04374 4.6373 5.23819C4.94966 6.17042 5.15962 7.52012 5.15962 9.05554C5.15962 10.4539 4.76593 11.4536 4.31109 12.0871C4.23832 12.1885 4.16572 12.2785 4.09442 12.3584C3.94662 12.5241 3.87272 12.6069 3.75753 12.5805C3.64234 12.5541 3.61009 12.4413 3.54559 12.2157C3.28026 11.2876 3.20508 10.2342 3.20508 9.05554Z',
  d10: 'M6 8.01433C7.46589 7.39934 9.61061 7.01146 12 7.01146C14.3894 7.01146 16.5341 7.39934 18 8.01433M3 14.0315C4.6389 16.7662 7.5772 18.6845 11 19M18.0608 10.0201C18.0214 9.7042 18 9.36989 18 9.01719C18 5.69399 18.8954 3 20 3C21.1046 3 22 5.69399 22 9.01719C22 9.52639 21.9874 10.0292 21.9506 10.5215M6 9.01719C6 12.2836 4.1688 13.9732 3.05731 14.03C3.02153 14.0319 2.98891 14.0123 2.97139 13.9809C2.15656 12.5238 2 10.8102 2 9.01719C2 5.69399 2.89543 3 4 3C5.10457 3 6 5.69399 6 9.01719Z',
  d11: 'M20.586 13.331C18.7898 12.3795 17.5 13.7821 17.5 13.7821C17.5 13.7821 16.2102 12.3795 14.4139 13.331C12.2383 14.4834 12.0821 18.9965 17.5 21C22.9179 18.9965 22.7616 14.4834 20.586 13.331Z',
  d12: 'M16.9239 12.5078C17.1481 12.6022 17.3414 12.7117 17.5008 12.8166C17.6602 12.7117 17.8535 12.6022 18.0777 12.5078C18.7932 12.2062 19.8055 12.0693 20.9379 12.666C22.391 13.4318 23.049 15.2248 22.6206 16.9969C22.1827 18.8083 20.6461 20.5929 17.7609 21.6543L17.5008 21.75L17.2407 21.6543C14.3555 20.5929 12.8189 18.8083 12.381 16.9969C11.9526 15.2248 12.6105 13.4318 14.0637 12.666C15.196 12.0693 16.2084 12.2062 16.9239 12.5078Z',
  d13: 'M17.5004 11.1231C16.4507 10.6823 14.9615 10.4972 13.3639 11.339C11.1756 12.4921 10.3694 15.0612 10.9226 17.3494C11.1272 18.1957 11.5043 19.0052 12.0474 19.7509C12.0316 19.7509 12.0158 19.751 12 19.751C7.89676 19.751 4.29831 17.6153 2.36692 14.4185L2.36932 14.417C2.35325 14.3933 2.33819 14.369 2.3242 14.3441C1.39798 12.7011 1.25 10.8242 1.25 9.05653C1.25 7.37029 1.47757 5.80332 1.87262 4.6243C2.06845 4.03987 2.32316 3.49678 2.65346 3.07983C2.97508 2.67384 3.48417 2.25098 4.18182 2.25098C4.87947 2.25098 5.38856 2.67384 5.71018 3.07983C6.04048 3.49678 6.29519 4.03987 6.49101 4.6243C6.69918 5.24556 6.86084 5.97454 6.96721 6.77193C8.39556 6.36794 10.1419 6.13986 12 6.13986C13.8581 6.13986 15.6044 6.36794 17.0328 6.77193C17.1392 5.97454 17.3008 5.24556 17.509 4.6243C17.7048 4.03987 17.9595 3.49678 18.2898 3.07983C18.6114 2.67384 19.1205 2.25098 19.8182 2.25098C20.5158 2.25098 21.0249 2.67384 21.3465 3.07983C21.6768 3.49678 21.9316 4.03987 22.1274 4.6243C22.5224 5.80332 22.75 7.37028 22.75 9.05653C22.75 10.0054 22.7074 10.9858 22.5246 11.9445C22.2594 11.7149 21.9635 11.5112 21.6367 11.339C21.3197 11.1719 21.0069 11.0453 20.701 10.9531C20.7715 10.3618 20.796 9.72956 20.796 9.05651C20.796 7.5211 20.586 6.1714 20.2737 5.23917C20.1184 4.77568 19.9548 4.46701 19.8187 4.29199C19.6827 4.46701 19.5191 4.77568 19.3638 5.23917C19.0514 6.1714 18.8414 7.5211 18.8414 9.05651C18.8414 9.70951 18.9273 10.2756 19.0651 10.758C18.4802 10.7924 17.95 10.9343 17.5004 11.1231ZM3.7274 5.23917C3.41504 6.1714 3.20508 7.5211 3.20508 9.05651C3.20508 10.4502 3.31019 11.6687 3.71048 12.7121C3.89102 12.5805 4.10033 12.3816 4.31109 12.0881C4.76593 11.4546 5.15962 10.4549 5.15962 9.05651C5.15962 7.5211 4.94966 6.1714 4.6373 5.23917C4.482 4.77568 4.31841 4.46701 4.18235 4.29199C4.0463 4.46701 3.8827 4.77568 3.7274 5.23917Z',
};

export const IconMaskLoveStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mask-love-stroke-rounded IconMaskLoveStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconMaskLoveDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mask-love-duotone-rounded IconMaskLoveDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconMaskLoveTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mask-love-twotone-rounded IconMaskLoveTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMaskLoveSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mask-love-solid-rounded IconMaskLoveSolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMaskLoveBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mask-love-bulk-rounded IconMaskLoveBulkRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconMaskLoveStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mask-love-stroke-sharp IconMaskLoveStrokeSharp"
    >
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMaskLoveSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mask-love-solid-sharp IconMaskLoveSolidSharp"
    >
      <path 
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

export const iconPackOfMaskLove: TheIconSelfPack = {
  name: 'MaskLove',
  StrokeRounded: IconMaskLoveStrokeRounded,
  DuotoneRounded: IconMaskLoveDuotoneRounded,
  TwotoneRounded: IconMaskLoveTwotoneRounded,
  SolidRounded: IconMaskLoveSolidRounded,
  BulkRounded: IconMaskLoveBulkRounded,
  StrokeSharp: IconMaskLoveStrokeSharp,
  SolidSharp: IconMaskLoveSolidSharp,
};