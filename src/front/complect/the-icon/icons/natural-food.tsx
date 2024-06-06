import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.05857 11.7421C6.97712 11.9781 8.73113 10.5535 8.97628 8.56018C9.22142 6.56689 6.93885 4.64584 7.76802 2C3.66477 2.59449 2.25056 5.90113 2.02862 7.70572C1.78348 9.69901 3.14003 11.5062 5.05857 11.7421Z',
  d2: 'M7 20C5.07536 15.3242 4.76992 11.1941 5.13275 8',
  d3: 'M9.50786 17.6681C10.6828 20.0602 13.5206 20.7199 15.8463 19.1415C18.172 17.5631 18.5378 13.1898 22 11.6651C18.3054 7.57247 13.6971 9.04998 11.5916 10.4789C9.26587 12.0573 8.33296 15.276 9.50786 17.6681Z',
  d4: 'M6 22C8.37778 17.9044 11.2644 15.43 14 14',
  d5: 'M5.13275 8C4.76992 11.1941 5.07536 15.3242 7 20',
  d6: 'M14 14C11.2644 15.43 8.37778 17.9044 6 22',
  d7: 'M9.41342 18.798C11.0244 20.8537 13.9216 21.2298 16.2683 19.6371C16.9726 19.1591 17.4973 18.4916 17.9365 17.7982C18.2477 17.307 18.5418 16.7583 18.827 16.2263L18.827 16.2263C18.9375 16.0201 19.0467 15.8165 19.1549 15.6197C19.9621 14.1527 20.8178 12.8806 22.3032 12.2265C22.5235 12.1295 22.6839 11.9325 22.7343 11.6971C22.7847 11.4616 22.7189 11.2163 22.5576 11.0376C20.5575 8.82199 18.2696 8.08615 16.1862 8.12657C14.1348 8.16636 12.3176 8.95538 11.1713 9.73335C8.86736 11.297 7.75618 14.298 8.45896 16.8754C10.1026 15.1346 11.8397 13.876 13.5367 12.9889C14.0262 12.733 14.6304 12.9224 14.8862 13.4118C15.1421 13.9013 14.9527 14.5055 14.4633 14.7613C12.7985 15.6315 11.0561 16.9227 9.41342 18.798Z',
  d8: 'M8.48355 2.0993C8.56064 1.8533 8.506 1.58496 8.33884 1.3887C8.17169 1.19245 7.91546 1.0958 7.66034 1.13276C3.10219 1.79315 1.53033 5.48701 1.28409 7.48918C1.03021 9.55349 2.21747 11.488 4.07719 12.1514C3.94842 10.5578 3.98871 9.08637 4.13914 7.76216C4.20147 7.21341 4.69686 6.81908 5.24561 6.88142C5.79437 6.94376 6.18869 7.43914 6.12636 7.9879C5.97941 9.2815 5.94698 10.7436 6.10224 12.3454C7.96656 12.0595 9.47624 10.513 9.72053 8.52674C9.80095 7.87282 9.6696 7.25818 9.48597 6.70502C9.35702 6.31658 9.18368 5.90989 9.02163 5.5297L9.02161 5.52966C8.96067 5.38668 8.90133 5.24745 8.84655 5.11435C8.42273 4.08467 8.15222 3.15658 8.48355 2.0993Z',
  d9: 'M4.07715 12.1514C4.26923 14.5287 4.83752 17.1778 5.97762 20.0157C5.69058 20.4483 5.40945 20.9005 5.13514 21.373C4.85785 21.8506 5.02024 22.4626 5.49787 22.7399C5.97549 23.0172 6.58748 22.8548 6.86477 22.3771C7.66637 20.9964 8.52507 19.8122 9.41288 18.7986C9.19509 18.5207 9.00081 18.2122 8.83455 17.8737C8.6763 17.5515 8.55132 17.2175 8.45817 16.8761C8.09748 17.2582 7.74129 17.6635 7.39101 18.0932C6.67004 16.0342 6.2728 14.1055 6.1022 12.3454C5.73518 12.4017 5.35441 12.4091 4.96685 12.3615C4.65661 12.3233 4.35915 12.252 4.07715 12.1514Z',
  d10: 'M16.1853 8.12657C18.2686 8.08615 20.5565 8.82199 22.5566 11.0376C22.718 11.2163 22.7837 11.4616 22.7333 11.6971C22.6829 11.9325 22.5225 12.1295 22.3022 12.2265C20.8169 12.8806 19.9611 14.1527 19.154 15.6197C19.0457 15.8165 18.9365 16.0201 18.826 16.2263C18.5409 16.7583 18.2467 17.307 17.9356 17.7982C17.4963 18.4916 16.9716 19.1591 16.2673 19.6371C13.6036 21.4449 10.2307 20.7163 8.83459 17.8738C7.48155 15.119 8.56095 11.5042 11.1703 9.73335C12.3166 8.95538 14.1339 8.16636 16.1853 8.12657Z',
  d11: 'M8.33884 1.3887C8.506 1.58496 8.56064 1.8533 8.48355 2.0993C8.15222 3.15658 8.42273 4.08467 8.84655 5.11435C8.90133 5.24745 8.96067 5.38668 9.02161 5.52966C9.18366 5.90986 9.35702 6.31658 9.48597 6.70502C9.6696 7.25818 9.80095 7.87282 9.72053 8.52674C9.42815 10.9041 7.3231 12.6513 4.96688 12.3615C2.61066 12.0717 0.99171 9.86651 1.28409 7.48918C1.53033 5.48701 3.10219 1.79315 7.66034 1.13276C7.91546 1.0958 8.17169 1.19245 8.33884 1.3887Z',
  d12: 'M5.24561 6.88148C5.79437 6.94382 6.18869 7.4392 6.12635 7.98796C5.81794 10.703 6.01395 14.1605 7.39105 18.0932C9.33769 15.7053 11.467 14.0708 13.5367 12.9889C14.0262 12.733 14.6304 12.9224 14.8862 13.4118C15.1421 13.9013 14.9527 14.5055 14.4633 14.7613C11.8986 16.102 9.14973 18.4416 6.86481 22.3772C6.58751 22.8548 5.97553 23.0172 5.4979 22.7399C5.02028 22.4626 4.85788 21.8506 5.13518 21.373C5.40948 20.9005 5.69062 20.4483 5.97765 20.0157C4.0733 15.2755 3.76432 11.0618 4.13914 7.76222C4.20147 7.21347 4.69686 6.81915 5.24561 6.88148Z',
  d13: 'M8.23258 2.38745L8.58904 1.25L7.40936 1.42091C2.85122 2.08131 1.27935 5.77516 1.03311 7.77733C0.76769 9.93548 2.0774 11.9518 4.08391 12.522C3.94627 10.9052 3.98473 9.41527 4.13656 8.07861L5.62698 8.24792C5.4779 9.56032 5.44538 11.0421 5.60303 12.664C7.58019 12.4829 9.21451 10.8886 9.46955 8.8149C9.54997 8.16097 9.41862 7.54633 9.23499 6.99318C9.10604 6.60473 8.9327 6.19805 8.77065 5.81785C8.70971 5.67487 8.65035 5.5356 8.59557 5.4025C8.17176 4.37282 7.90124 3.44473 8.23258 2.38745Z',
  d14: 'M8.32265 17.5396C7.90817 17.9977 7.49968 18.4864 7.09941 19.006C6.24755 16.7263 5.78993 14.5958 5.60213 12.6639C5.31269 12.6904 5.0159 12.6866 4.71501 12.6496C4.49777 12.6229 4.28679 12.5799 4.08301 12.522C4.28671 14.9149 4.87613 17.5857 6.05457 20.4487L6.06805 20.4431C5.73726 20.9376 5.414 21.4554 5.09969 21.9968L6.39691 22.7499C7.23468 21.3069 8.13509 20.0473 9.06699 18.9629C8.88698 18.718 8.72459 18.4509 8.58264 18.1619C8.48287 17.9587 8.39633 17.7509 8.32265 17.5396Z',
  d15: 'M9.06743 18.9635C10.7031 17.06 12.4358 15.6962 14.097 14.8279L13.4021 13.4985C11.707 14.3846 9.96774 15.7221 8.32292 17.5403C7.39688 14.8847 8.50116 11.6619 10.9184 10.0214C12.0647 9.24346 13.8819 8.45444 15.9333 8.41465C18.0167 8.37424 20.3046 9.11007 22.3047 11.3257L23.0003 12.0962L22.0502 12.5146C20.5649 13.1687 19.7092 14.4408 18.902 15.9078C18.7937 16.1046 18.6846 16.3082 18.5741 16.5144C18.2889 17.0464 17.9948 17.5951 17.6836 18.0863C17.2444 18.7796 16.7197 19.4472 16.0154 19.9252C13.6227 21.549 10.6579 21.1264 9.06743 18.9635Z',
};

export const IconNaturalFoodStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="natural-food-stroke-rounded IconNaturalFoodStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNaturalFoodDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="natural-food-duotone-rounded IconNaturalFoodDuotoneRounded"
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
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNaturalFoodTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="natural-food-twotone-rounded IconNaturalFoodTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNaturalFoodSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="natural-food-solid-rounded IconNaturalFoodSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconNaturalFoodBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="natural-food-bulk-rounded IconNaturalFoodBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNaturalFoodStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="natural-food-stroke-sharp IconNaturalFoodStrokeSharp"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNaturalFoodSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="natural-food-solid-sharp IconNaturalFoodSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNaturalFood: TheIconSelfPack = {
  name: 'NaturalFood',
  StrokeRounded: IconNaturalFoodStrokeRounded,
  DuotoneRounded: IconNaturalFoodDuotoneRounded,
  TwotoneRounded: IconNaturalFoodTwotoneRounded,
  SolidRounded: IconNaturalFoodSolidRounded,
  BulkRounded: IconNaturalFoodBulkRounded,
  StrokeSharp: IconNaturalFoodStrokeSharp,
  SolidSharp: IconNaturalFoodSolidSharp,
};