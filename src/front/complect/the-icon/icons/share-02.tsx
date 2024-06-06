import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 4.5C5.50442 5.70104 3 8.94175 3 12.7511C3 13.9579 3.25134 15.1076 3.70591 16.1534M15 4.5C18.4956 5.70104 21 8.94175 21 12.7511C21 13.7736 20.8195 14.7552 20.4879 15.6674M16.5 20.3296C15.1762 21.074 13.6393 21.5 12 21.5C10.3607 21.5 8.82378 21.074 7.5 20.3296',
  d2: 'M15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5Z',
  d3: 'M15 5.00002C15 6.65687 13.6569 8.00002 12 8.00002C10.3431 8.00002 9 6.65687 9 5.00002C9 4.82876 9.01435 4.66085 9.04191 4.49744C5.52446 5.72103 3 9.06572 3 13C3 14.1755 3.22536 15.2983 3.63522 16.3277C4.04463 16.1182 4.50851 16 5 16C6.65685 16 8 17.3432 8 19C8 19.6559 7.78949 20.2627 7.43234 20.7564C8.7713 21.5466 10.3327 22 12 22C13.6673 22 15.2287 21.5466 16.5677 20.7564C16.2105 20.2627 16 19.6559 16 19C16 17.3432 17.3431 16 19 16C19.4915 16 19.9554 16.1182 20.3648 16.3277C20.7746 15.2983 21 14.1755 21 13C21 9.06571 18.4755 5.72104 14.9581 4.49744C14.9857 4.66086 15 4.82876 15 5.00002Z',
  d4: 'M9.32494 5.44615C6.20631 6.51768 4 9.39702 4 12.7515C4 13.8181 4.22189 14.8323 4.62303 15.7553L2.78879 16.5525C2.28079 15.3837 2 14.0985 2 12.7515C2 8.48733 4.80254 4.88524 8.67506 3.55469L9.32494 5.44615ZM20 12.7515C20 9.39702 17.7937 6.51768 14.6751 5.44615L15.3249 3.55469C19.1975 4.88524 22 8.48733 22 12.7515C22 13.8926 21.7985 14.9897 21.4277 16.0095L19.5481 15.3261C19.8406 14.5216 20 13.6555 20 12.7515ZM7.99015 19.4583C9.16718 20.1202 10.5357 20.5004 12 20.5004C13.4643 20.5004 14.8328 20.1202 16.0099 19.4583L16.9901 21.2016C15.5196 22.0285 13.8143 22.5004 12 22.5004C10.1857 22.5004 8.48038 22.0285 7.00985 21.2016L7.99015 19.4583Z',
  d5: 'M12 1C9.79086 1 8 2.79086 8 5C8 7.20914 9.79086 9 12 9C14.2091 9 16 7.20914 16 5C16 2.79086 14.2091 1 12 1Z',
  d6: 'M5 15C2.79086 15 1 16.7909 1 19C1 21.2091 2.79086 23 5 23C7.20914 23 9 21.2091 9 19C9 16.7909 7.20914 15 5 15Z',
  d7: 'M19 15C16.7909 15 15 16.7909 15 19C15 21.2091 16.7909 23 19 23C21.2091 23 23 21.2091 23 19C23 16.7909 21.2091 15 19 15Z',
  d8: 'M9.32494 5.44579C6.20631 6.51732 4 9.39665 4 12.7511C4 13.8177 4.22189 14.8319 4.62303 15.7549L2.78879 16.5521C2.28079 15.3833 2 14.0981 2 12.7511C2 8.48696 4.80254 4.88488 8.67506 3.55432L9.32494 5.44579ZM20 12.7511C20 9.39665 17.7937 6.51732 14.6751 5.44579L15.3249 3.55432C19.1975 4.88488 22 8.48696 22 12.7511C22 13.878 21.7947 15.1505 21.4193 16.1831L19.5397 15.4997C19.8275 14.7079 20 13.6694 20 12.7511ZM7.99015 19.458C9.16718 20.1198 10.5357 20.5001 12 20.5001C13.4643 20.5001 14.8328 20.1198 16.0099 19.458L16.9901 21.2012C15.5196 22.0282 13.8143 22.5001 12 22.5001C10.1857 22.5001 8.48038 22.0282 7.00985 21.2012L7.99015 19.458Z',
  d9: 'M8.25 5C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5C15.75 7.07107 14.0711 8.75 12 8.75C9.92893 8.75 8.25 7.07107 8.25 5Z',
  d10: 'M1.25 19C1.25 16.9289 2.92893 15.25 5 15.25C7.07107 15.25 8.75 16.9289 8.75 19C8.75 21.0711 7.07107 22.75 5 22.75C2.92893 22.75 1.25 21.0711 1.25 19Z',
  d11: 'M15.25 19C15.25 16.9289 16.9289 15.25 19 15.25C21.0711 15.25 22.75 16.9289 22.75 19C22.75 21.0711 21.0711 22.75 19 22.75C16.9289 22.75 15.25 21.0711 15.25 19Z',
};

export const IconShare02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-02-stroke-rounded IconShare02StrokeRounded"
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
      <circle 
        cx="5" 
        cy="19" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="19" 
        cy="19" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconShare02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-02-duotone-rounded IconShare02DuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="5" 
        cy="19" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="19" 
        cy="19" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconShare02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-02-twotone-rounded IconShare02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="5" 
        cy="19" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="19" 
        cy="19" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconShare02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-02-solid-rounded IconShare02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconShare02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-02-bulk-rounded IconShare02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconShare02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-02-stroke-sharp IconShare02StrokeSharp"
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
      <circle 
        cx="5" 
        cy="19" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="19" 
        cy="19" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconShare02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-02-solid-sharp IconShare02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShare02: TheIconSelfPack = {
  name: 'Share02',
  StrokeRounded: IconShare02StrokeRounded,
  DuotoneRounded: IconShare02DuotoneRounded,
  TwotoneRounded: IconShare02TwotoneRounded,
  SolidRounded: IconShare02SolidRounded,
  BulkRounded: IconShare02BulkRounded,
  StrokeSharp: IconShare02StrokeSharp,
  SolidSharp: IconShare02SolidSharp,
};