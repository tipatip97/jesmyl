import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z',
  d2: 'M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z',
  d3: 'M17 5.71429C17 5.71429 18 6.23573 18.5 7C18.5 7 20 4 22 3',
  d4: 'M4.551 14.6493C7.73419 12.7836 11.7662 12.7836 14.9494 14.6493C15.0502 14.7084 15.1757 14.7781 15.3186 14.8574C15.9512 15.2086 16.9231 15.7481 17.5885 16.3892C18.004 16.7896 18.4135 17.3303 18.4883 18.0037C18.5684 18.7252 18.2461 19.3911 17.6298 19.9691C16.5797 20.9539 15.3118 21.75 13.6694 21.75H5.83096C4.18862 21.75 2.9207 20.9538 1.87062 19.9691C1.2543 19.3911 0.93195 18.7252 1.01207 18.0037C1.08684 17.3303 1.4964 16.7896 1.91189 16.3892C2.57728 15.7481 3.54919 15.2086 4.18183 14.8574C4.32465 14.7781 4.4502 14.7084 4.551 14.6493Z',
  d5: 'M5.00019 7C5.00019 4.37665 7.12684 2.25 9.75019 2.25C12.3735 2.25 14.5002 4.37665 14.5002 7C14.5002 9.62335 12.3735 11.75 9.75019 11.75C7.12684 11.75 5.00019 9.62335 5.00019 7Z',
  d6: 'M22.6445 2.55301C22.8915 3.04698 22.6913 3.64766 22.1973 3.89465C21.4242 4.28122 20.6663 5.11294 20.0638 5.95646C19.774 6.36215 19.5412 6.74045 19.3811 7.01688C19.3014 7.15462 19.2404 7.26585 19.2002 7.34101C19.1802 7.37856 19.1653 7.40702 19.1559 7.42517L19.146 7.44451L19.1445 7.44743C18.9844 7.76748 18.6652 7.97786 18.3079 7.99855C17.9505 8.01924 17.6093 7.84729 17.4133 7.54769C17.2608 7.3146 16.9989 7.07788 16.7268 6.88119C16.5984 6.78838 16.4825 6.71506 16.4003 6.66583C16.3595 6.64139 16.3278 6.62337 16.308 6.61233L16.2877 6.60121C15.7984 6.34568 15.6081 5.74166 15.8634 5.25215C16.1188 4.76244 16.7227 4.57246 17.2125 4.82781L17.214 4.82863L17.2159 4.82964L17.2209 4.83227L17.2352 4.83989C17.2466 4.84601 17.2617 4.85423 17.2801 4.86447C17.3169 4.88494 17.3672 4.91363 17.428 4.95002C17.5489 5.02244 17.7143 5.12725 17.8984 5.26033C17.9452 5.29415 17.9944 5.33064 18.0453 5.36972C18.1624 5.18845 18.2932 4.99442 18.4364 4.79398C19.0838 3.88749 20.076 2.71921 21.3029 2.10579C21.7969 1.8588 22.3975 2.05903 22.6445 2.55301Z',
  d7: 'M2 21H17C17 16.9066 13.6421 13.5882 9.5 13.5882C5.35786 13.5882 2 16.9066 2 21Z',
  d8: 'M13.25 6.70588C13.25 8.75258 11.5711 10.4118 9.5 10.4118C7.42893 10.4118 5.75 8.75258 5.75 6.70588C5.75 4.65918 7.42893 3 9.5 3C11.5711 3 13.25 4.65918 13.25 6.70588Z',
  d9: 'M15 11.0714L17.1 13L22 7',
  d10: 'M5 6.70588C5 4.23662 7.02311 2.25 9.5 2.25C11.9769 2.25 14 4.23662 14 6.70588C14 9.17514 11.9769 11.1618 9.5 11.1618C7.02311 11.1618 5 9.17514 5 6.70588Z',
  d11: 'M1.25 21C1.25 16.484 4.95204 12.8382 9.5 12.8382C14.048 12.8382 17.75 16.484 17.75 21V21.75H1.25V21Z',
  d12: 'M22.75 7.61881L17.1473 14.3672L14.25 11.7499L15.6107 10.2925L16.9377 11.4913L21.1919 6.36719L22.75 7.61881Z',
};

export const IconUserCheck02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-check-02-stroke-rounded IconUserCheck02StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserCheck02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-check-02-duotone-rounded IconUserCheck02DuotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserCheck02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-check-02-twotone-rounded IconUserCheck02TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserCheck02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-check-02-solid-rounded IconUserCheck02SolidRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconUserCheck02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-check-02-bulk-rounded IconUserCheck02BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserCheck02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-check-02-stroke-sharp IconUserCheck02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserCheck02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-check-02-solid-sharp IconUserCheck02SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserCheck02: TheIconSelfPack = {
  name: 'UserCheck02',
  StrokeRounded: IconUserCheck02StrokeRounded,
  DuotoneRounded: IconUserCheck02DuotoneRounded,
  TwotoneRounded: IconUserCheck02TwotoneRounded,
  SolidRounded: IconUserCheck02SolidRounded,
  BulkRounded: IconUserCheck02BulkRounded,
  StrokeSharp: IconUserCheck02StrokeSharp,
  SolidSharp: IconUserCheck02SolidSharp,
};