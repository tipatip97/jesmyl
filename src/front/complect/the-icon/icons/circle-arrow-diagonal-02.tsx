import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.758 15.758L8.24202 8.24202M15.758 15.758C15.3369 16.179 13.5011 15.9164 12.9395 15.9459M15.758 15.758C16.179 15.3369 15.9164 13.5011 15.9459 12.9395M8.24202 8.24202C7.82099 8.66305 8.08361 10.4989 8.05413 11.0605M8.24202 8.24202C8.66305 7.82099 10.4989 8.08361 11.0605 8.05412',
  d2: 'M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25ZM10.9014 7.36056C11.315 7.33884 11.668 7.65655 11.6897 8.0702C11.7013 8.29115 11.616 8.49478 11.4711 8.63985L10.764 9.34696L14.653 13.236L15.3601 12.5289C15.5052 12.384 15.7089 12.2987 15.9298 12.3103C16.3434 12.332 16.6612 12.685 16.6394 13.0986C16.6351 13.1814 16.6418 13.3413 16.6558 13.6004L16.6588 13.6571C16.6711 13.8839 16.6858 14.1544 16.6901 14.4227C16.6947 14.7099 16.6883 15.0266 16.6467 15.3121C16.6114 15.5536 16.5292 15.9561 16.244 16.2413C15.9589 16.5264 15.5564 16.6086 15.3149 16.6439C15.0294 16.6856 14.7127 16.692 14.4254 16.6874C14.1572 16.683 13.8867 16.6684 13.6598 16.6561L13.6032 16.653C13.344 16.639 13.1841 16.6323 13.1014 16.6367C12.6877 16.6584 12.3348 16.3407 12.3131 15.927C12.3015 15.7062 12.3866 15.5027 12.5314 15.3577L13.2388 14.6503L9.34974 10.7612L8.64234 11.4686C8.49728 11.6134 8.29378 11.6985 8.07297 11.6869C7.65933 11.6652 7.34161 11.3123 7.36333 10.8986C7.36768 10.8159 7.36099 10.656 7.34701 10.3968L7.34394 10.3402C7.33163 10.1133 7.31696 9.8428 7.31265 9.57457C7.30804 9.28731 7.31444 8.97058 7.35611 8.6851C7.39137 8.44359 7.47358 8.04113 7.75875 7.75597C8.04391 7.47081 8.44637 7.38859 8.68787 7.35334C8.97336 7.31166 9.29008 7.30526 9.57735 7.30987C9.84555 7.31418 10.116 7.32886 10.3429 7.34117L10.3996 7.34424C10.6587 7.35821 10.8186 7.3649 10.9014 7.36056Z',
  d3: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12Z',
  d4: 'M11.6897 8.0702C11.668 7.65655 11.315 7.33884 10.9014 7.36056C10.8186 7.3649 10.6587 7.35821 10.3996 7.34424L10.3429 7.34117C10.116 7.32886 9.84555 7.31418 9.57735 7.30987C9.29009 7.30526 8.97336 7.31166 8.68787 7.35334C8.44637 7.38859 8.04391 7.47081 7.75875 7.75597C7.47358 8.04113 7.39137 8.44359 7.35611 8.6851C7.31444 8.97058 7.30804 9.28731 7.31265 9.57457C7.31696 9.8428 7.33163 10.1133 7.34394 10.3402L7.34701 10.3968C7.36099 10.656 7.36768 10.8159 7.36333 10.8986C7.34161 11.3123 7.65933 11.6652 8.07297 11.6869C8.29378 11.6985 8.49728 11.6134 8.64234 11.4686L9.34974 10.7612L13.2388 14.6503L12.5314 15.3577C12.3866 15.5027 12.3015 15.7062 12.3131 15.927C12.3348 16.3407 12.6877 16.6584 13.1014 16.6367C13.1841 16.6323 13.344 16.639 13.6032 16.653L13.6598 16.6561C13.8867 16.6684 14.1572 16.683 14.4254 16.6874C14.7127 16.692 15.0294 16.6856 15.3149 16.6439C15.5564 16.6086 15.9589 16.5264 16.244 16.2413C16.5292 15.9561 16.6114 15.5536 16.6467 15.3121C16.6883 15.0266 16.6947 14.7099 16.6901 14.4227C16.6858 14.1544 16.6711 13.8839 16.6588 13.6571L16.6558 13.6004C16.6418 13.3413 16.6351 13.1814 16.6394 13.0986C16.6612 12.685 16.3434 12.332 15.9298 12.3103C15.7089 12.2987 15.5052 12.384 15.3601 12.5289L14.653 13.236L10.764 9.34696L11.4711 8.63985C11.616 8.49478 11.7013 8.29115 11.6897 8.0702Z',
  d5: 'M11.5 7.5H7.5V11.5M12.5 16.5H16.5V12.5M7.65598 7.65598L16.3282 16.3282',
  d6: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12 8.75L12 7.25L7.25 7.25002V12H8.75V9.81067L14.1893 15.25L12 15.25L12 16.75L16.75 16.75V12H15.25V14.1893L9.81066 8.75001L12 8.75Z',
} as const;

export const IconCircleArrowDiagonal02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-diagonal-02-stroke-rounded IconCircleArrowDiagonal02StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconCircleArrowDiagonal02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-diagonal-02-duotone-rounded IconCircleArrowDiagonal02DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconCircleArrowDiagonal02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-diagonal-02-twotone-rounded IconCircleArrowDiagonal02TwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowDiagonal02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-diagonal-02-solid-rounded IconCircleArrowDiagonal02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowDiagonal02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-diagonal-02-bulk-rounded IconCircleArrowDiagonal02BulkRounded"
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

export const IconCircleArrowDiagonal02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-diagonal-02-stroke-sharp IconCircleArrowDiagonal02StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowDiagonal02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-diagonal-02-solid-sharp IconCircleArrowDiagonal02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCircleArrowDiagonal02: TheIconSelfPack = {
  name: 'CircleArrowDiagonal02',
  StrokeRounded: IconCircleArrowDiagonal02StrokeRounded,
  DuotoneRounded: IconCircleArrowDiagonal02DuotoneRounded,
  TwotoneRounded: IconCircleArrowDiagonal02TwotoneRounded,
  SolidRounded: IconCircleArrowDiagonal02SolidRounded,
  BulkRounded: IconCircleArrowDiagonal02BulkRounded,
  StrokeSharp: IconCircleArrowDiagonal02StrokeSharp,
  SolidSharp: IconCircleArrowDiagonal02SolidSharp,
};