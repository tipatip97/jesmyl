import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 9C22 12.3137 17.5228 15 12 15C6.47715 15 2 12.3137 2 9C2 5.68629 6.47715 3 12 3C17.5228 3 22 5.68629 22 9Z',
  d2: 'M12 6.85441C15 5.44094 17 7.71729 17 8.7817C17 11.9514 7 11.7874 7 7.88187C7 5.49755 9 3 12 3',
  d3: 'M22 9V15C22 18.3137 17.5228 21 12 21C6.47715 21 2 18.3137 2 15V9',
  d4: 'M12 15C17.5228 15 22 12.3137 22 9V15C22 18.3137 17.5228 21 12 21C6.47715 21 2 18.3137 2 15V9C2 12.3137 6.47715 15 12 15Z',
  d5: 'M5.59244 5.73575C3.9805 6.69006 3.20455 7.8741 3.20455 9C3.20455 10.1259 3.9805 11.3099 5.59244 12.2642C7.18493 13.207 9.44801 13.8214 12 13.8214C14.552 13.8214 16.8151 13.207 18.4076 12.2642C20.0195 11.3099 20.7955 10.1259 20.7955 9C20.7955 7.8741 20.0195 6.69006 18.4076 5.73575C16.8151 4.79296 14.552 4.17857 12 4.17857C9.65588 4.17857 8.09091 6.10661 8.09091 7.9218C8.09091 8.37549 8.36449 8.82606 9.1112 9.23085C9.85992 9.63673 10.9255 9.89205 12.0519 9.95117C13.1782 10.0103 14.2513 9.86729 15.0012 9.5758C15.7981 9.26601 15.9091 8.9434 15.9091 8.78949C15.9091 8.7905 15.9089 8.78969 15.9084 8.78713C15.9043 8.76654 15.8774 8.63262 15.7298 8.42062C15.5783 8.20317 15.3446 7.97172 15.0395 7.79092C14.4627 7.44916 13.586 7.25966 12.4165 7.80335C11.9283 8.03034 11.346 7.8238 11.1159 7.34204C10.8859 6.86027 11.0952 6.28572 11.5835 6.05873C13.3458 5.23942 14.9123 5.46596 16.0457 6.13757C16.5957 6.46346 17.0339 6.88803 17.3405 7.32824C17.6326 7.74758 17.8636 8.26722 17.8636 8.78949C17.8636 10.1638 16.753 10.9676 15.7176 11.3701C14.6351 11.7909 13.265 11.9461 11.9481 11.877C10.6313 11.8079 9.25372 11.5086 8.17005 10.9211C7.08437 10.3326 6.13636 9.35113 6.13636 7.9218C6.13636 6.94245 6.42663 5.95003 6.95623 5.075C6.46117 5.26998 6.00437 5.49188 5.59244 5.73575ZM12 2.25C9.15467 2.25 6.53138 2.93079 4.58684 4.08201C2.66174 5.22172 1.25 6.93053 1.25 9C1.25 11.0695 2.66174 12.7783 4.58684 13.918C6.53138 15.0692 9.15467 15.75 12 15.75C14.8453 15.75 17.4686 15.0692 19.4132 13.918C21.3383 12.7783 22.75 11.0695 22.75 9C22.75 6.93053 21.3383 5.22172 19.4132 4.08201C17.4686 2.93079 14.8453 2.25 12 2.25Z',
  d6: 'M5.3148 12.5995C6.98935 13.6043 9.35114 14.25 12 14.25C14.6489 14.25 17.0106 13.6043 18.6852 12.5995C20.3747 11.5858 21.25 10.2899 21.25 9H22.75V15C22.75 17.0238 21.3867 18.7279 19.4569 19.8858C17.5122 21.0526 14.874 21.75 12 21.75C9.12602 21.75 6.4878 21.0526 4.54306 19.8858C2.61325 18.7279 1.25 17.0238 1.25 15V9H2.75C2.75 10.2899 3.62533 11.5858 5.3148 12.5995Z',
  d7: 'M10.9898 2.25024C8.511 2.39323 6.25754 3.05804 4.54306 4.08826C2.61325 5.24787 1.25 6.95447 1.25 8.98128C1.25 11.0081 2.61325 12.7147 4.54306 13.8743C6.4878 15.0429 9.12602 15.7413 12 15.7413C14.874 15.7413 17.5122 15.0429 19.4569 13.8743C21.3867 12.7147 22.75 11.0081 22.75 8.98128C22.75 6.95447 21.3867 5.24787 19.4569 4.08826C18.8225 3.70702 18.1142 3.37581 17.348 3.10257C10.2253 2.25487 7.75 6.14492 7.75 7.86148C7.75 8.45932 8.11621 8.9962 8.92364 9.44046C9.73261 9.88557 10.8629 10.1564 12.0398 10.2191C13.2167 10.2818 14.3527 10.1318 15.1626 9.81222C16.0086 9.47845 16.25 9.08092 16.25 8.76264C16.25 8.70309 16.2085 8.50872 16.0225 8.23772C15.8477 7.98296 15.5824 7.71751 15.2389 7.5109C14.5775 7.11313 13.5922 6.91152 12.3197 7.51196L11.6803 6.15302C13.4078 5.33788 14.9225 5.56835 16.0111 6.22305C16.5426 6.54267 16.9648 6.95856 17.2587 7.38683C17.5415 7.79884 17.75 8.28919 17.75 8.76264C17.75 10.0316 16.7414 10.8039 15.7124 11.2099C14.6473 11.6301 13.2833 11.7897 11.9602 11.7193C10.6371 11.6488 9.26739 11.3436 8.20136 10.7571C7.13379 10.1697 6.25 9.21928 6.25 7.86148C6.25 5.94012 7.78622 3.47623 10.9898 2.25024Z',
  d8: 'M1.25 13.0178V14.99C1.25 17.0168 2.61325 18.7234 4.54306 19.883C6.4878 21.0516 9.12602 21.75 12 21.75C14.874 21.75 17.5122 21.0516 19.4569 19.883C21.3867 18.7234 22.75 17.0168 22.75 14.99V13.0178C22.053 13.877 21.1705 14.5963 20.2287 15.1622C18.0137 16.4932 15.099 17.2433 12 17.2433C8.90096 17.2433 5.98629 16.4932 3.77132 15.1622C2.82952 14.5963 1.94698 13.877 1.25 13.0178Z',
};

export const IconCinnamonRollStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cinnamon-roll-stroke-rounded IconCinnamonRollStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCinnamonRollDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cinnamon-roll-duotone-rounded IconCinnamonRollDuotoneRounded"
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

export const IconCinnamonRollTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cinnamon-roll-twotone-rounded IconCinnamonRollTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCinnamonRollSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cinnamon-roll-solid-rounded IconCinnamonRollSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCinnamonRollBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cinnamon-roll-bulk-rounded IconCinnamonRollBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCinnamonRollStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cinnamon-roll-stroke-sharp IconCinnamonRollStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconCinnamonRollSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cinnamon-roll-solid-sharp IconCinnamonRollSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCinnamonRoll: TheIconSelfPack = {
  name: 'CinnamonRoll',
  StrokeRounded: IconCinnamonRollStrokeRounded,
  DuotoneRounded: IconCinnamonRollDuotoneRounded,
  TwotoneRounded: IconCinnamonRollTwotoneRounded,
  SolidRounded: IconCinnamonRollSolidRounded,
  BulkRounded: IconCinnamonRollBulkRounded,
  StrokeSharp: IconCinnamonRollStrokeSharp,
  SolidSharp: IconCinnamonRollSolidSharp,
};