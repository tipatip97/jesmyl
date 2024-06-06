import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 8.5C22 9.88071 20.8807 11 19.5 11C18.1193 11 17 9.88071 17 8.5C17 7.11929 18.1193 6 19.5 6C20.8807 6 22 7.11929 22 8.5Z',
  d2: 'M5.63604 18.364C4.00736 16.7353 3 14.4853 3 12C3 7.02944 7.02944 3 12 3C13.6393 3 15.1762 3.43827 16.5 4.20404M8.5 20.2941C9.57589 20.7487 10.7586 21 12 21C16.9706 21 21 16.9706 21 12C21 11.5348 20.9647 11.0778 20.8966 10.6315',
  d3: 'M21.1733 6.38013C22.0683 4.52016 22.2767 3.07297 21.6005 2.39804C20.7268 1.52583 18.5637 2.1307 15.8873 3.78558M18.3049 10.8299C17.2978 12.1189 16.1137 13.459 14.7889 14.784C9.48663 20.087 3.93971 23.1395 2.39946 21.602C1.52229 20.7263 2.13378 18.5508 3.8022 15.8605',
  d4: 'M12 21C16.9706 21 21 16.9706 21 12C21 11.5166 20.9619 11.0421 20.8885 10.5793C20.4913 10.845 20.0138 11 19.5 11C18.1193 11 17 9.88071 17 8.5C17 7.36347 17.7584 6.40407 18.7967 6.10028C17.1466 4.20092 14.7136 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z',
  d5: 'M16.248 8.5C16.248 6.70507 17.7031 5.25 19.498 5.25C21.293 5.25 22.748 6.70507 22.748 8.5C22.748 10.2949 21.293 11.75 19.498 11.75C17.7031 11.75 16.248 10.2949 16.248 8.5Z',
  d6: 'M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C14.1338 2.25 16.1075 2.93544 17.7129 4.09815C15.9752 4.80425 14.75 6.50929 14.75 8.50049C14.75 9.35687 14.9766 10.1603 15.3732 10.8541C14.7099 11.6233 13.9825 12.4082 13.1977 13.193C10.653 15.7381 8.10753 17.6813 6.09858 18.7869C5.84279 18.9277 5.60297 19.0508 5.3795 19.1577C3.45489 17.3767 2.25 14.829 2.25 12Z',
  d7: 'M16.9163 12.487C16.1072 13.4306 15.3535 14.2288 14.7888 14.7839C12.236 17.3371 9.62648 19.3686 7.43471 20.6173C8.79669 21.3404 10.3505 21.75 12 21.75C17.1501 21.75 21.3675 17.757 21.7254 12.698C21.0616 13.0507 20.3041 13.2505 19.5 13.2505C18.5472 13.2505 17.6599 12.97 16.9163 12.487Z',
  d8: 'M1.4206 19.0099C1.55764 18.4688 1.77478 17.884 2.05961 17.2685C2.43292 17.9715 2.87861 18.6302 3.38673 19.2346C3.36009 19.3222 3.33633 19.4073 3.31542 19.4898C3.08881 20.3845 3.2691 20.6543 3.30752 20.6926C3.33805 20.7231 3.54195 20.8746 4.23619 20.7452C4.89319 20.6226 5.77045 20.2817 6.82138 19.7034C8.91136 18.5533 11.4897 16.575 14.0345 14.0298C14.7732 13.291 15.4641 12.5494 16.1008 11.8178C16.5604 12.2886 17.117 12.6643 17.7383 12.9126C17.0237 13.7434 16.2467 14.5819 15.4168 15.4119C12.7795 18.0495 10.0562 20.1543 7.76378 21.4159C6.62348 22.0434 5.53931 22.4905 4.59452 22.6667C3.68697 22.8359 2.64872 22.7969 1.92658 22.076C1.10952 21.2604 1.15873 20.0437 1.4206 19.0099Z',
  d9: 'M22.6011 4.90189C22.6263 4.79662 22.6484 4.69287 22.6674 4.59076C22.836 3.68333 22.7959 2.64518 22.0734 1.92399C21.2526 1.10459 20.0277 1.15925 18.9878 1.42625C18.4542 1.56323 17.8783 1.77768 17.2723 2.05787C17.9754 2.43135 18.6341 2.87722 19.2385 3.38554C19.3191 3.36111 19.3976 3.33909 19.4739 3.31951C20.3787 3.08717 20.6532 3.26816 20.6925 3.30736C20.7176 3.3325 20.8273 3.47762 20.7885 3.92684C21.4662 4.11739 22.0825 4.45454 22.6011 4.90189Z',
  d10: 'M20.8972 10.6526C20.9651 11.0995 21.0003 11.5571 21.0003 12.0229C21.0003 17.0051 16.9736 21.044 12.0065 21.044C10.6395 21.044 9.39019 20.7464 8.23002 20.1992M21.1607 6.40578C23.0749 2.31246 21.3778 1.65255 19.3471 2.16564C17.9015 2.53089 16.2982 3.56276 15.836 3.84614C14.667 3.28856 13.3871 3.00186 12.0065 3.00186C7.03931 3.00186 3.01263 7.04072 3.01263 12.0229C3.01263 13.3964 3.31867 14.6983 3.8661 15.8636M8.23002 20.1992C10.8093 18.5292 14.8254 15.4151 18.3105 10.847M8.23002 20.1992C7.44388 20.748 5.21191 22.0056 3.65314 22.0194C1.83254 22.0356 1.0187 20.5594 3.8661 15.8636M5.6481 18.403C4.91738 17.6704 4.31175 16.8122 3.8661 15.8636',
};

export const IconSaturn02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="saturn-02-stroke-rounded IconSaturn02StrokeRounded"
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

export const IconSaturn02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="saturn-02-duotone-rounded IconSaturn02DuotoneRounded"
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

export const IconSaturn02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="saturn-02-twotone-rounded IconSaturn02TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSaturn02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="saturn-02-solid-rounded IconSaturn02SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSaturn02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="saturn-02-bulk-rounded IconSaturn02BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSaturn02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="saturn-02-stroke-sharp IconSaturn02StrokeSharp"
    >
      <path 
        d={d.d1} 
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

export const IconSaturn02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="saturn-02-solid-sharp IconSaturn02SolidSharp"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSaturn02: TheIconSelfPack = {
  name: 'Saturn02',
  StrokeRounded: IconSaturn02StrokeRounded,
  DuotoneRounded: IconSaturn02DuotoneRounded,
  TwotoneRounded: IconSaturn02TwotoneRounded,
  SolidRounded: IconSaturn02SolidRounded,
  BulkRounded: IconSaturn02BulkRounded,
  StrokeSharp: IconSaturn02StrokeSharp,
  SolidSharp: IconSaturn02SolidSharp,
};