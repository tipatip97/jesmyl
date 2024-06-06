import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.329 7.87124L9.5 10.0051L19.25 10.0051C20.2165 10.0051 21 10.7886 21 11.7551C21 12.7216 20.2165 13.5051 19.25 13.5051H14L13.5224 16.493C13.2331 18.4216 13.0885 19.386 12.6816 20.0652C12.0094 21.1872 11 22 9.52639 22C8.5 22 7.8114 21.7463 5.96127 21.1296C4.78734 20.7383 4.20036 20.5426 3.73571 20.2236C2.97073 19.6983 2.4122 18.9233 2.15576 18.0315C2 17.4898 2 16.8711 2 15.6336L2 14.5847C2 12.9395 2 12.1169 2.30186 11.3846C2.356 11.2533 2.41709 11.1249 2.48487 11.0001C2.86288 10.304 3.50129 9.78533 4.77813 8.74791L8.91166 5.38941C9.54686 4.87331 10.4559 4.86987 11.095 5.38114C11.8631 5.99565 11.9692 7.12437 11.329 7.87124Z',
  d2: 'M22 4.5L16 4.5M22 4.5C22 3.79977 20.0057 2.49153 19.5 2M22 4.5C22 5.20023 20.0057 6.50847 19.5 7',
  d3: 'M19.25 9.25513C20.6307 9.25513 21.75 10.3744 21.75 11.7551C21.75 13.1358 20.6307 14.2551 19.25 14.2551H14.6396L14.2636 16.6078L14.2602 16.6306C14.1189 17.5726 14.0074 18.3158 13.879 18.9068C13.7485 19.5075 13.5892 20.0095 13.3249 20.4506C12.5596 21.7281 11.3367 22.75 9.52639 22.75C8.43942 22.75 7.6554 22.4875 6.11755 21.9726C5.05523 21.6188 3.86413 21.2216 3.31116 20.8418C2.40274 20.218 1.73948 19.2978 1.43497 18.2388C1.2496 17.5941 1.24975 16.8759 1.24998 15.7561L1.24997 14.4266C1.24954 12.9341 1.24927 11.9702 1.60846 11.0988C1.67274 10.9429 1.74529 10.7904 1.82579 10.6422C2.27559 9.81393 3.02388 9.20629 4.18247 8.26549L8.43872 4.80732C9.34781 4.06869 10.6489 4.06376 11.5635 4.79549C12.6629 5.67497 12.8147 7.29041 11.8985 8.35934L11.1307 9.25514L19.25 9.25513Z',
  d4: 'M15.75 5.50586C15.1977 5.50586 14.75 5.05814 14.75 4.50586C14.75 3.95357 15.1977 3.50586 15.75 3.50586L18.25 3.50586L18.25 2.9116C18.2499 2.73596 18.2497 2.52031 18.2718 2.34387L18.2722 2.34053C18.288 2.21408 18.3598 1.63804 18.9254 1.36368C19.4922 1.08872 19.9924 1.39065 20.1006 1.45597L20.569 1.79511C20.9449 2.08975 21.4593 2.49545 21.8503 2.87588C22.0454 3.06571 22.2467 3.28297 22.4055 3.51388C22.5467 3.71914 22.75 4.06933 22.75 4.5C22.75 4.93067 22.5467 5.28086 22.4055 5.48612C22.2467 5.71703 22.0454 5.93429 21.8503 6.12412C21.4593 6.50455 20.9449 6.91025 20.5691 7.20488L20.1006 7.54403C19.9924 7.60935 19.4922 7.91128 18.9254 7.63632C18.3598 7.36196 18.288 6.78592 18.2722 6.65947L18.2718 6.65613C18.2497 6.47969 18.2499 6.26403 18.25 6.0884L18.25 5.50586L15.75 5.50586Z',
  d5: 'M16.0122 4.49683H21.3447M19.5054 2.00171L22.0006 4.49683L19.5054 6.99195',
  d6: 'M9.50141 11.0378L11.3291 8.91594C11.4554 8.7694 11.5641 8.60683 11.6271 8.42413C11.9154 7.58852 11.7154 6.93405 11.0151 6.37644C10.3722 5.85682 9.58464 5.93549 8.80993 6.50184L2.22133 10.8796C2.00015 10.9878 1.9966 11.3717 2.00016 11.7029V19.2054C2.06587 20.096 2.42124 20.7746 3.10587 21.3434C3.71839 21.8523 4.53937 21.9982 5.33644 21.9982H10.1797C10.8809 21.9982 11.6067 21.917 12.1742 21.5062C12.9155 20.9694 13.4277 20.1619 13.508 19.138L13.508 14.5369H19.3346C20.2597 14.5262 21.0405 13.6069 20.9686 12.6987C20.9583 11.7439 20.1315 11.0279 19.2058 11.0378H9.50141Z',
  d7: 'M8.4687 5.78334C9.37624 5.06867 10.6589 5.07176 11.5635 5.79549C12.6629 6.67497 12.8147 8.29041 11.8985 9.35934L11.1307 10.2551L19.25 10.2551C20.6307 10.2551 21.75 11.3744 21.75 12.7551C21.75 14.1358 20.6307 15.2551 19.25 15.2551H14.2724L14.2724 19C14.2724 21.0711 12.5935 22.75 10.5224 22.75H5C2.92893 22.75 1.25 21.0711 1.25 19V11C1.25 10.7493 1.37525 10.5152 1.5838 10.3761L8.4687 5.78334Z',
  d8: 'M19.543 1.25L22.7502 4.45711L19.543 7.66421L18.1288 6.25L18.9217 5.45711L15.3359 5.45711V3.45711L18.9217 3.45711L18.1288 2.66421L19.543 1.25Z',
} as const;

export const IconPointingRight03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-03-stroke-rounded IconPointingRight03StrokeRounded"
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

export const IconPointingRight03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-03-duotone-rounded IconPointingRight03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconPointingRight03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-03-twotone-rounded IconPointingRight03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingRight03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-03-solid-rounded IconPointingRight03SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingRight03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-03-bulk-rounded IconPointingRight03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingRight03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-03-stroke-sharp IconPointingRight03StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPointingRight03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pointing-right-03-solid-sharp IconPointingRight03SolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPointingRight03: TheIconSelfPack = {
  name: 'PointingRight03',
  StrokeRounded: IconPointingRight03StrokeRounded,
  DuotoneRounded: IconPointingRight03DuotoneRounded,
  TwotoneRounded: IconPointingRight03TwotoneRounded,
  SolidRounded: IconPointingRight03SolidRounded,
  BulkRounded: IconPointingRight03BulkRounded,
  StrokeSharp: IconPointingRight03StrokeSharp,
  SolidSharp: IconPointingRight03SolidSharp,
};