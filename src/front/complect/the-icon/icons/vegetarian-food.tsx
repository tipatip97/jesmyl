import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 13.2308C17 13.2308 16.0909 12.7693 15.1818 12.7693C13.8182 12.7693 12 14.6154 12 17.3846C12 20.1537 14.4896 22 17 22C19.5104 22 22 20.1537 22 17.3846C22 14.6154 20.1818 12.7693 18.8182 12.7693C17.9091 12.7693 17 13.2308 17 13.2308ZM17 13.2308C17 11.8462 17.9091 10 19.7273 10',
  d2: 'M10.655 5C11.5512 5 12.2778 4.32843 12.2778 3.5C12.2778 2.67157 11.5512 2 10.655 2H5.24561C4.34936 2 3.6228 2.67157 3.6228 3.5C3.6228 4.32843 4.34936 5 5.24561 5M11.1693 4.92311C12.1247 6.68943 12.9095 8.28337 13.3888 10C13.4279 10.1401 13.465 10.281 13.5 10.4229M10.428 22H6.32748C2.74721 22 2 21.3093 2 18V13.7771C2 10.3773 3.09757 7.88562 4.70467 4.91465',
  d3: 'M5.24561 2H10.655C11.5512 2 12.2778 2.67157 12.2778 3.5C12.2778 4.16227 11.8134 4.7243 11.1693 4.92311C12.1247 6.68943 12.9095 8.28337 13.3888 10C13.4279 10.1401 13.465 10.281 13.5 10.4229L13.9173 13.2221C12.9052 13.9326 12 15.427 12 17.3809C12 18.8696 12.7196 20.0916 13.7751 20.9034C13.7347 20.9944 13.687 21.0786 13.6309 21.1577C13.5008 21.3409 13.3409 21.5008 13.1577 21.6309C12.6377 22 11.9011 22 10.428 22H6.32748C2.74721 22 2 21.3093 2 18V13.7771C2 10.3773 3.09757 7.88562 4.70467 4.91465C4.07438 4.70873 3.6228 4.15311 3.6228 3.5C3.6228 2.67157 4.34936 2 5.24561 2Z',
  d4: 'M19.7266 9C20.2788 9 20.7266 9.44772 20.7266 10C20.7266 10.5523 20.2788 11 19.7266 11C19.2035 11 18.8012 11.2497 18.4941 11.6785C18.4092 11.7969 18.3349 11.9256 18.2714 12.0599C18.4475 12.0348 18.6313 12.0195 18.8182 12.0196C19.816 12.0195 20.8073 12.667 21.5136 13.5798C22.2408 14.5195 22.75 15.8349 22.75 17.3848C22.75 20.6682 19.8169 22.7503 17 22.7503C14.1831 22.7503 11.25 20.6682 11.25 17.3848C11.25 15.8349 11.7592 14.5195 12.4864 13.5798C13.1927 12.667 14.184 12.0195 15.1818 12.0195C15.5183 12.0195 15.8452 12.0691 16.1344 12.1362C16.2719 11.5713 16.5152 11.0066 16.8681 10.5139C17.4701 9.67339 18.4314 9 19.7266 9Z',
  d5: 'M13.1275 3.5C13.1275 4.01976 12.9449 4.48673 12.6467 4.85841C12.4791 5.06738 12.3953 5.17187 12.3863 5.26012C12.3774 5.34837 12.4275 5.44611 12.5278 5.64158C13.2716 7.09213 13.8831 8.49067 14.275 9.9996C14.3434 10.2627 14.3775 10.3943 14.3227 10.4975C14.2678 10.6007 14.121 10.6524 13.8275 10.7559C12.7891 11.1221 11.9149 11.867 11.3001 12.6615C10.3686 13.8652 9.75 15.5039 9.75 17.3845C9.75 19.1021 10.3553 20.5392 11.2997 21.6473C11.6685 22.0801 11.8529 22.2965 11.7828 22.466C11.7127 22.6356 11.4583 22.6563 10.9496 22.6976C10.5364 22.7311 10.0975 22.75 9.67278 22.75H6.32748C5.41754 22.75 4.63974 22.707 3.99164 22.5754C3.33817 22.4427 2.76433 22.2098 2.31206 21.7918C1.4107 20.9586 1.25 19.6296 1.25 18V13.7771C1.25 10.6245 2.15283 8.21494 3.47246 5.64169C3.57274 5.44614 3.62288 5.34837 3.61392 5.26012C3.60497 5.17187 3.52115 5.06738 3.35352 4.85841C3.05536 4.48673 2.8728 4.01976 2.8728 3.5C2.8728 2.20288 3.99181 1.25 5.24561 1.25H10.7547C12.0085 1.25 13.1275 2.20288 13.1275 3.5Z',
  d6: 'M6.5 5C6.5 5 4.89788 4.96992 4.72727 4.91465M4.72727 4.91465C4.09171 4.70873 3.63636 4.15311 3.63636 3.5C3.63636 2.67157 4.36899 2 5.27273 2H10.7273C11.631 2 12.3636 2.67157 12.3636 3.5C12.3636 4.16227 11.8954 4.7243 11.2459 4.92311M4.72727 4.91465C3.10674 7.88562 2 10.3773 2 13.7771V22H11M11.2459 4.92311C11.0829 4.97298 9.5 5 9.5 5M11.2459 4.92311C12.22 6.70907 13.0182 8.3188 13.5 10.0573',
  d7: 'M17.0721 10.6594C16.7381 11.1257 16.5075 11.662 16.3773 12.1982C16.0351 12.1021 15.6165 12.0193 15.1818 12.0193C14.184 12.0193 13.1927 12.6668 12.4864 13.5795C11.7592 14.5192 11.25 15.8346 11.25 17.3846C11.25 20.668 14.1831 22.75 17 22.75C19.8169 22.75 22.75 20.668 22.75 17.3846C22.75 15.8346 22.2408 14.5192 21.5136 13.5795C20.8073 12.6668 19.816 12.0193 18.8182 12.0193C18.5241 12.0193 18.2373 12.0572 17.9767 12.1115C18.0595 11.9068 18.1646 11.7101 18.2916 11.5329C18.6355 11.0527 19.1077 10.75 19.7273 10.75V9.25C18.5286 9.25 17.6372 9.87043 17.0721 10.6594Z',
  d8: 'M4.5 1.25H11.4992C12.3277 1.25 12.9992 1.92157 12.9992 2.75C12.9992 3.57843 12.3277 4.25 11.4992 4.25H4.5C3.67157 4.25 3 3.57843 3 2.75C3 1.92157 3.67157 1.25 4.5 1.25Z',
  d9: 'M1.25 13.7772C1.25 10.6015 2.17343 8.17957 3.51913 5.58616C3.82649 5.69245 4.1565 5.75018 4.5 5.75018H11.4992C11.843 5.75018 12.1732 5.69237 12.4808 5.58594C13.3417 7.24505 14.0298 8.83397 14.4138 10.5949C13.1177 10.8508 12.0271 11.7215 11.2996 12.6616C10.3681 13.8653 9.74946 15.504 9.74946 17.3847C9.74946 19.7445 10.8922 21.5749 12.4869 22.7501H2C1.58579 22.7501 1.25 22.4143 1.25 22.0001V13.7772Z',
} as const;

export const IconVegetarianFoodStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vegetarian-food-stroke-rounded IconVegetarianFoodStrokeRounded"
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

export const IconVegetarianFoodDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vegetarian-food-duotone-rounded IconVegetarianFoodDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVegetarianFoodTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vegetarian-food-twotone-rounded IconVegetarianFoodTwotoneRounded"
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

export const IconVegetarianFoodSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vegetarian-food-solid-rounded IconVegetarianFoodSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconVegetarianFoodBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vegetarian-food-bulk-rounded IconVegetarianFoodBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVegetarianFoodStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vegetarian-food-stroke-sharp IconVegetarianFoodStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVegetarianFoodSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vegetarian-food-solid-sharp IconVegetarianFoodSolidSharp"
    >
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

export const iconPackOfVegetarianFood: TheIconSelfPack = {
  name: 'VegetarianFood',
  StrokeRounded: IconVegetarianFoodStrokeRounded,
  DuotoneRounded: IconVegetarianFoodDuotoneRounded,
  TwotoneRounded: IconVegetarianFoodTwotoneRounded,
  SolidRounded: IconVegetarianFoodSolidRounded,
  BulkRounded: IconVegetarianFoodBulkRounded,
  StrokeSharp: IconVegetarianFoodStrokeSharp,
  SolidSharp: IconVegetarianFoodSolidSharp,
};