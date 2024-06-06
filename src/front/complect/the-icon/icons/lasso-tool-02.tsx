import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.5 15.5L2.61096 5.5905C2.04631 3.6603 1.76399 2.6952 2.24574 2.21566C2.72749 1.73612 3.60877 2.105 5.37133 2.84278L11.692 5.48851C13.1841 6.11304 13.8363 6.06315 15.2313 5.24565L18.7973 3.15593C20.3091 2.26998 21.065 1.827 21.5902 2.19348C22.1155 2.55996 22.0396 3.47742 21.8877 5.31232L21.3335 12.0109C21.1225 14.5617 20.6625 15.2995 18.1681 15.9572L10 18',
  d2: 'M9.98703 17C9.98703 18.1046 8.87064 19 7.49351 19C6.11638 19 5 18.1046 5 17C5 15.8954 6.11638 15 7.49351 15C8.87064 15 9.98703 15.8954 9.98703 17ZM9.98703 17C10.0493 17.7724 10.0064 20.5 7.00254 22',
  d3: 'M21.8877 5.31232L21.3335 12.0109C21.1225 14.5617 20.6625 15.2995 18.1681 15.9572L10 18C10.4 14.4 7.16667 14.8333 5.5 15.5L2.61096 5.5905C2.04631 3.6603 1.76399 2.6952 2.24574 2.21566C2.72749 1.73612 3.60877 2.105 5.37133 2.84278L11.692 5.48851C13.1841 6.11304 13.8363 6.06315 15.2313 5.24565L18.7973 3.15593C20.3091 2.26998 21.065 1.827 21.5902 2.19348C22.1155 2.55996 22.0396 3.47742 21.8877 5.31232Z',
  d4: 'M5.68253 1.88834L5.75723 1.91962L12.0779 4.56535C12.7856 4.86157 13.1439 4.92941 13.4281 4.90956C13.7139 4.88959 14.0609 4.77162 14.7255 4.38216L18.3592 2.25273C19.0568 1.84386 19.6794 1.47889 20.1953 1.27458C20.7309 1.06246 21.4748 0.893023 22.1622 1.37267C22.8213 1.83251 22.9594 2.56909 22.9912 3.14671C23.0227 3.7208 22.9609 4.46628 22.8901 5.32175L22.3299 12.0926C22.2251 13.3596 22.0508 14.4614 21.3977 15.3053C20.7274 16.1713 19.6993 16.5869 18.4229 16.9235L18.4105 16.9267L10.2424 18.9694C9.70661 19.1034 9.16365 18.7777 9.02966 18.2419C8.89566 17.7061 9.22138 17.1632 9.75716 17.0292L17.9189 14.988C19.1324 14.6675 19.5803 14.3857 19.816 14.0812C20.0692 13.7541 20.2305 13.2116 20.3367 11.9277L20.8909 5.22915C20.9695 4.28003 21.0172 3.67521 20.9942 3.25634C20.9911 3.20075 20.987 3.15389 20.9825 3.11464C20.9667 3.12045 20.9498 3.1269 20.9317 3.13408C20.5771 3.27453 20.0895 3.55689 19.3027 4.01799L15.7367 6.1077C15.0062 6.53574 14.3296 6.85147 13.5675 6.9047C12.8039 6.95803 12.09 6.73855 11.3057 6.41025L4.98499 3.76451C4.07034 3.38166 3.49483 3.14391 3.08678 3.04248C3.056 3.03483 3.02823 3.02847 3.00326 3.0232C3.00687 3.07328 3.01349 3.13514 3.02478 3.21079C3.09314 3.66893 3.27925 4.31336 3.57051 5.30902L6.45981 15.2194C6.61439 15.7496 6.30988 16.3047 5.77967 16.4593C5.24946 16.6139 4.69432 16.3094 4.53975 15.7792L1.65096 5.87055L1.63014 5.7994C1.36558 4.8952 1.13782 4.11682 1.04668 3.50594C0.956377 2.90073 0.940071 2.10343 1.54004 1.50621C2.16979 0.879344 2.98113 0.955352 3.56924 1.10154C4.14541 1.24476 4.86546 1.54624 5.68253 1.88834Z',
  d5: 'M7.49351 16C6.45155 16 6 16.6423 6 17C6 17.3577 6.45155 18 7.49351 18C8.53548 18 8.98703 17.3577 8.98703 17C8.98703 16.6423 8.53548 16 7.49351 16ZM4 17C4 15.1486 5.78122 14 7.49351 14C9.1929 14 10.9602 15.1313 10.9867 16.9583C11.0567 17.9386 10.951 21.146 7.4493 22.8947C6.9552 23.1414 6.35463 22.9409 6.10789 22.4468C5.86115 21.9527 6.06168 21.3521 6.55578 21.1053C7.21535 20.776 7.6998 20.3778 8.05467 19.9595C7.8684 19.9863 7.68055 20 7.49351 20C5.78122 20 4 18.8515 4 17Z',
  d6: 'M9.98372 17.0067C9.98372 18.1118 8.86786 19.0076 7.49137 19.0076C6.11488 19.0076 4.99902 18.1118 4.99902 17.0067C4.99902 15.9017 6.11488 15.0059 7.49137 15.0059C8.86786 15.0059 9.98372 15.9017 9.98372 17.0067ZM9.98372 17.0067C10.046 17.7795 10.0031 20.5083 7.00063 22.0089',
  d7: 'M5.47202 15.3525L1.99057 2.01841C1.98852 2.01055 1.99619 2.00365 2.00378 2.00652L12.5224 5.98817L21.9734 2.02693C21.9806 2.02391 21.9884 2.02996 21.9872 2.03768L19.9978 14.9905L10.3724 17.9123',
  d8: 'M2.57532 1.31435C2.23365 1.18357 1.8479 1.25534 1.57549 1.50037C1.30308 1.74539 1.18956 2.12269 1.28128 2.4783L4.63372 15.4775C4.35081 15.8965 4.18207 16.3956 4.18207 16.9616C4.18207 18.7797 5.92295 19.9076 7.59648 19.9076C7.77928 19.9076 7.96288 19.8941 8.14492 19.8678C7.7981 20.2785 7.32462 20.6695 6.67998 20.9929L7.55327 22.75C9.69768 21.6741 10.539 20.0358 10.8515 18.7255L20.69 15.76L22.7386 2.38131C22.7924 2.02977 22.6529 1.67646 22.3737 1.4577C22.0946 1.23895 21.7195 1.18895 21.3933 1.327L12.4714 5.1021L2.57532 1.31435ZM10.9914 16.6329L18.9458 14.2353L20.5408 3.81871L12.869 7.06489C12.6372 7.16296 12.3767 7.16749 12.1417 7.07754L3.64828 3.82666L6.33105 14.2291C6.73716 14.0893 7.16902 14.0157 7.59648 14.0157C9.16669 14.0157 10.7962 15.0086 10.9914 16.6329ZM6.13678 16.9616C6.13678 16.6103 6.57811 15.9796 7.59648 15.9796C8.61485 15.9796 9.05618 16.6103 9.05618 16.9616C9.05618 17.3129 8.61485 17.9436 7.59648 17.9436C6.57811 17.9436 6.13678 17.3129 6.13678 16.9616Z',
};

export const IconLassoTool02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lasso-tool-02-stroke-rounded IconLassoTool02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLassoTool02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lasso-tool-02-duotone-rounded IconLassoTool02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLassoTool02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lasso-tool-02-twotone-rounded IconLassoTool02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLassoTool02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lasso-tool-02-solid-rounded IconLassoTool02SolidRounded"
    >
      <path 
        d={d.d4} 
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

export const IconLassoTool02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lasso-tool-02-bulk-rounded IconLassoTool02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconLassoTool02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lasso-tool-02-stroke-sharp IconLassoTool02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLassoTool02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lasso-tool-02-solid-sharp IconLassoTool02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLassoTool02: TheIconSelfPack = {
  name: 'LassoTool02',
  StrokeRounded: IconLassoTool02StrokeRounded,
  DuotoneRounded: IconLassoTool02DuotoneRounded,
  TwotoneRounded: IconLassoTool02TwotoneRounded,
  SolidRounded: IconLassoTool02SolidRounded,
  BulkRounded: IconLassoTool02BulkRounded,
  StrokeSharp: IconLassoTool02StrokeSharp,
  SolidSharp: IconLassoTool02SolidSharp,
};