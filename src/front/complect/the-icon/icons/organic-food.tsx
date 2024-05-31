import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10 9.25524C7.60631 7.95835 5.08056 5.71428 3 2M11.6155 4.41901C9.5805 3.0835 7.09742 3.64165 6.06938 5.66567C5.04134 7.68969 5.85764 10.4131 7.89263 11.7486C9.73497 12.9577 13.7672 14.2079 17 10.745C13.9706 9.45488 13.6505 5.75451 11.6155 4.41901Z',
  d2: 'M4 11C3.36093 11.4709 3 12.0054 3 12.572C3 14.4652 7.02944 16 12 16C16.9706 16 21 14.4652 21 12.572C21 12.0054 20.6391 11.4709 20 11',
  d3: 'M21 13C21 16.5766 18.4936 19.7147 15.7951 21.4822C15.2402 21.8457 14.5804 22 13.9171 22H10.0829C9.41959 22 8.75976 21.8457 8.20486 21.4822C5.5064 19.7147 3 16.5766 3 13',
  d4: 'M12 16C16.9706 16 21 14.4652 21 12.572V13C21 16.5766 18.4936 19.7147 15.7951 21.4822C15.2402 21.8457 14.5804 22 13.9171 22H10.0829C9.41959 22 8.75976 21.8457 8.20486 21.4822C5.5064 19.7147 3 16.5766 3 13V12.572C3 14.4652 7.02944 16 12 16Z',
  d5: 'M5.05625 6.21955C4.43731 8.45617 5.44207 11.0375 7.48242 12.3765C8.49715 13.0425 10.1014 13.7156 11.9121 13.7495C13.7521 13.784 15.7779 13.1554 17.5495 11.2576C17.7165 11.0788 17.7857 10.8298 17.735 10.5905C17.6844 10.3512 17.5202 10.1516 17.2951 10.0558C16.0248 9.51482 15.291 8.46459 14.588 7.22899C14.4948 7.06512 14.4002 6.89446 14.304 6.72098C14.0537 6.26945 13.7928 5.79888 13.518 5.3793C13.1292 4.78585 12.6604 4.20766 12.0283 3.79284C9.87035 2.37665 7.16718 2.76507 5.76019 4.73494C7.25016 6.54121 8.83998 7.7738 10.3574 8.59594C10.7216 8.79326 10.8569 9.24845 10.6596 9.61265C10.4622 9.97684 10.0071 10.1121 9.64286 9.9148C8.10841 9.08345 6.53589 7.88947 5.05625 6.21955Z',
  d6: 'M3.65447 1.63361C3.45204 1.27223 2.99499 1.14337 2.63361 1.3458C2.27223 1.54822 2.14337 2.00528 2.3458 2.36666C3.1873 3.86894 4.10248 5.14312 5.05625 6.21955C5.14074 5.91423 5.25549 5.61533 5.40199 5.3269C5.50913 5.11595 5.62903 4.91857 5.76019 4.73494C5.02729 3.84644 4.31855 2.81914 3.65447 1.63361Z',
  d7: 'M4.77835 11.9262C5.21186 11.622 5.30436 11.0407 4.98494 10.6278C4.66553 10.215 4.05516 10.1269 3.62165 10.4311C2.88581 10.9474 2.25 11.6861 2.25 12.6383V13.0001C2.25 16.9237 4.97693 20.2645 7.79391 22.1097C8.49664 22.57 9.30769 22.7501 10.0829 22.7501H13.9171C14.6923 22.7501 15.5034 22.57 16.2061 22.1097C19.0231 20.2645 21.75 16.9237 21.75 13.0001V12.6383C21.75 11.6861 21.1142 10.9474 20.3784 10.4311C19.9448 10.1269 19.3345 10.215 19.0151 10.6278C18.6956 11.0407 18.7881 11.622 19.2217 11.9262C19.732 12.2843 19.8 12.5383 19.8 12.6383C19.8 12.7226 19.7566 12.9098 19.433 13.1873C19.1096 13.4646 18.5869 13.7569 17.8578 14.0214C16.4065 14.5478 14.3357 14.8929 12 14.8929C9.66429 14.8929 7.59351 14.5478 6.14218 14.0214C5.41313 13.7569 4.89038 13.4646 4.56703 13.1873C4.24345 12.9098 4.2 12.7226 4.2 12.6383C4.2 12.5383 4.268 12.2843 4.77835 11.9262Z',
  d8: 'M21 13C21 16.795 18.6985 20.1246 16 22H8C5.30154 20.1246 3 16.795 3 13',
  d9: 'M5.75871 4.48353C7.16576 2.51398 9.86874 2.1257 12.0265 3.5418C12.6586 3.95662 13.1274 4.53481 13.5162 5.12826C13.7911 5.54783 14.052 6.01841 14.3022 6.46993L14.3023 6.46994C14.3984 6.64341 14.493 6.81408 14.5863 6.97796C15.2893 8.21355 16.0231 9.26378 17.2934 9.80474L18.2782 10.2241L17.5478 11.0066C15.7762 12.9043 13.7503 13.533 11.9104 13.4985C10.0997 13.4645 8.49541 12.7914 7.48068 12.1255C5.4402 10.7864 4.43544 8.20479 5.05463 5.96807C4.10123 4.89189 3.18593 3.73479 2.34473 2.23306L3.6534 1.5C4.31721 2.68505 5.02613 3.59529 5.75871 4.48353Z',
  d10: 'M3.75 12.3218C3.75 12.0993 3.89254 11.7606 4.44488 11.3536L3.55512 10.146C2.82932 10.6808 2.25 11.411 2.25 12.3218C2.25 16.4191 4.72333 20.3861 7.57197 22.3659L7.76497 22.5H16.235L16.428 22.3659C19.2767 20.3861 21.75 16.4191 21.75 12.3218C21.75 11.411 21.1707 10.6808 20.4449 10.146L19.5551 11.3536C20.1075 11.7606 20.25 12.0993 20.25 12.3218C20.25 12.5082 20.1536 12.7721 19.7909 13.0988C19.4283 13.4253 18.8614 13.7537 18.097 14.0449C16.5734 14.6252 14.418 14.9998 12 14.9998C9.58198 14.9998 7.42657 14.6252 5.903 14.0449C5.1386 13.7537 4.57173 13.4253 4.20915 13.0988C3.84638 12.7721 3.75 12.5082 3.75 12.3218Z',
} as const;

export const IconOrganicFoodStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="organic-food-stroke-rounded IconOrganicFoodStrokeRounded"
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

export const IconOrganicFoodDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="organic-food-duotone-rounded IconOrganicFoodDuotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconOrganicFoodTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="organic-food-twotone-rounded IconOrganicFoodTwotoneRounded"
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

export const IconOrganicFoodSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="organic-food-solid-rounded IconOrganicFoodSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconOrganicFoodBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="organic-food-bulk-rounded IconOrganicFoodBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconOrganicFoodStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="organic-food-stroke-sharp IconOrganicFoodStrokeSharp"
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconOrganicFoodSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="organic-food-solid-sharp IconOrganicFoodSolidSharp"
    >
      <path 
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

export const iconPackOfOrganicFood: TheIconSelfPack = {
  name: 'OrganicFood',
  StrokeRounded: IconOrganicFoodStrokeRounded,
  DuotoneRounded: IconOrganicFoodDuotoneRounded,
  TwotoneRounded: IconOrganicFoodTwotoneRounded,
  SolidRounded: IconOrganicFoodSolidRounded,
  BulkRounded: IconOrganicFoodBulkRounded,
  StrokeSharp: IconOrganicFoodStrokeSharp,
  SolidSharp: IconOrganicFoodSolidSharp,
};