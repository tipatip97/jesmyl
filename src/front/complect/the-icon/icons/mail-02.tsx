import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5',
  d2: 'M2.01576 13.4756C2.08114 16.5411 2.11382 18.0739 3.24495 19.2093C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.755 19.2093C21.8862 18.0739 21.9189 16.5411 21.9842 13.4756C22.0053 12.4899 22.0053 11.51 21.9842 10.5244C21.9189 7.45883 21.8862 5.92606 20.755 4.79063C19.6239 3.6552 18.0497 3.61565 14.9012 3.53654C12.9607 3.48778 11.0393 3.48778 9.09882 3.53653C5.95033 3.61563 4.37608 3.65518 3.24495 4.79062C2.11382 5.92605 2.08113 7.45882 2.01576 10.5243C1.99474 11.51 1.99474 12.4899 2.01576 13.4756Z',
  d3: 'M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z',
  d4: 'M2.01577 13.4756C2.08114 16.5411 2.11383 18.0739 3.24496 19.2093C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2093C21.8862 18.0739 21.9189 16.5411 21.9842 13.4756C22.0053 12.4899 22.0053 11.51 21.9842 10.5244C21.9189 7.45883 21.8862 5.92606 20.7551 4.79063C19.6239 3.6552 18.0497 3.61565 14.9012 3.53654C12.9607 3.48778 11.0393 3.48778 9.09882 3.53653C5.95033 3.61563 4.37608 3.65518 3.24495 4.79062C2.11382 5.92605 2.08114 7.45882 2.01576 10.5243C1.99474 11.51 1.99475 12.4899 2.01577 13.4756Z',
  d5: 'M14.92 2.78681C12.967 2.73773 11.033 2.73773 9.07999 2.7868L9.02182 2.78826C7.497 2.82655 6.27002 2.85735 5.2867 3.0286C4.2572 3.20789 3.42048 3.55177 2.71362 4.26132C2.00971 4.9679 1.66764 5.7926 1.49176 6.8054C1.32429 7.76978 1.29878 8.9668 1.26719 10.4496L1.26593 10.5084C1.24469 11.5047 1.24469 12.4953 1.26594 13.4916L1.26719 13.5504C1.29879 15.0332 1.32429 16.2302 1.49176 17.1946C1.66764 18.2074 2.00972 19.0321 2.71362 19.7387C3.42048 20.4482 4.2572 20.7921 5.2867 20.9714C6.27001 21.1426 7.49697 21.1735 9.02177 21.2117L9.07999 21.2132C11.033 21.2623 12.967 21.2623 14.92 21.2132L14.9782 21.2117C16.503 21.1735 17.73 21.1426 18.7133 20.9714C19.7428 20.7921 20.5795 20.4482 21.2864 19.7387C21.9903 19.0321 22.3324 18.2074 22.5082 17.1946C22.6757 16.2302 22.7012 15.0332 22.7328 13.5503L22.7341 13.4916C22.7553 12.4953 22.7553 11.5047 22.7341 10.5084L22.7328 10.4497C22.7012 8.96683 22.6757 7.76979 22.5082 6.80542C22.3324 5.79261 21.9903 4.96792 21.2864 4.26134C20.5795 3.55179 19.7428 3.20791 18.7133 3.02862C17.73 2.85737 16.503 2.82656 14.9782 2.78827L14.92 2.78681ZM7.38182 7.85452C7.02527 7.64371 6.56533 7.76186 6.35452 8.11841C6.14371 8.47497 6.26186 8.93491 6.61841 9.14572L9.56043 10.8851C10.4313 11.4 11.1827 11.7501 12.0001 11.7501C12.8175 11.7501 13.569 11.4 14.4398 10.8851L17.3818 9.14572C17.7384 8.93491 17.8565 8.47497 17.6457 8.11841C17.4349 7.76186 16.975 7.64371 16.6184 7.85452L13.6764 9.59395C12.832 10.0932 12.3831 10.2501 12.0001 10.2501C11.6171 10.2501 11.1682 10.0932 10.3238 9.59395L7.38182 7.85452Z',
  d6: 'M9.07999 2.7868C11.033 2.73773 12.967 2.73773 14.92 2.78681L14.9782 2.78827C16.503 2.82656 17.73 2.85737 18.7133 3.02862C19.7428 3.20791 20.5795 3.55179 21.2864 4.26134C21.9903 4.96792 22.3324 5.79261 22.5082 6.80542C22.6757 7.76979 22.7012 8.96683 22.7328 10.4497L22.7341 10.5084C22.7553 11.5047 22.7553 12.4953 22.7341 13.4916L22.7328 13.5503C22.7012 15.0332 22.6757 16.2302 22.5082 17.1946C22.3324 18.2074 21.9903 19.0321 21.2864 19.7387C20.5795 20.4482 19.7428 20.7921 18.7133 20.9714C17.73 21.1426 16.503 21.1735 14.9782 21.2117L14.92 21.2132C12.967 21.2623 11.033 21.2623 9.07999 21.2132L9.02177 21.2117C7.49697 21.1735 6.27001 21.1426 5.2867 20.9714C4.2572 20.7921 3.42048 20.4482 2.71362 19.7387C2.00972 19.0321 1.66764 18.2074 1.49176 17.1946C1.32429 16.2302 1.29879 15.0332 1.26719 13.5504L1.26594 13.4916C1.24469 12.4953 1.24469 11.5047 1.26593 10.5084L1.26719 10.4496C1.29878 8.9668 1.32429 7.76978 1.49176 6.8054C1.66764 5.7926 2.00971 4.9679 2.71362 4.26132C3.42048 3.55177 4.2572 3.20789 5.2867 3.0286C6.27002 2.85735 7.497 2.82655 9.02182 2.78826L9.07999 2.7868Z',
  d7: 'M6.13931 7.99119C6.42039 7.51578 7.03364 7.35824 7.50905 7.63932L10.4511 9.37875C11.2914 9.87559 11.6897 10.0001 12.0001 10.0001C12.3105 10.0001 12.7088 9.87559 13.5492 9.37875L16.4912 7.63932C16.9666 7.35824 17.5798 7.51578 17.8609 7.99119C18.142 8.4666 17.9845 9.07985 17.5091 9.36093L14.567 11.1004C13.6915 11.618 12.8897 12.0001 12.0001 12.0001C11.1105 12.0001 10.3087 11.618 9.43319 11.1004L6.49117 9.36093C6.01576 9.07985 5.85823 8.4666 6.13931 7.99119Z',
  d8: 'M2 3.5H22V20.5H2V3.5Z',
  d9: 'M6 8L12 12L18 8',
  d10: 'M2 2.75C1.58579 2.75 1.25 3.08579 1.25 3.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H22C22.4142 21.25 22.75 20.9142 22.75 20.5V3.5C22.75 3.08579 22.4142 2.75 22 2.75H2ZM6.41603 7.37598L5.58398 8.62405L12 12.9014L18.416 8.62405L17.584 7.37598L12 11.0986L6.41603 7.37598Z',
};

export const IconMail02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-02-stroke-rounded IconMail02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMail02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-02-duotone-rounded IconMail02DuotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMail02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-02-twotone-rounded IconMail02TwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMail02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-02-solid-rounded IconMail02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMail02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-02-bulk-rounded IconMail02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMail02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-02-stroke-sharp IconMail02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMail02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-02-solid-sharp IconMail02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMail02: TheIconSelfPack = {
  name: 'Mail02',
  StrokeRounded: IconMail02StrokeRounded,
  DuotoneRounded: IconMail02DuotoneRounded,
  TwotoneRounded: IconMail02TwotoneRounded,
  SolidRounded: IconMail02SolidRounded,
  BulkRounded: IconMail02BulkRounded,
  StrokeSharp: IconMail02StrokeSharp,
  SolidSharp: IconMail02SolidSharp,
};