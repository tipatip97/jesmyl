import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.9953 12.5H12.0042M7.99976 12.5H8.00873',
  d2: 'M11.5 3.00391C10.9383 3.01227 10.3789 3.03473 9.8294 3.07126C5.64639 3.34932 2.31441 6.72856 2.04024 10.9709C1.98659 11.8011 1.98659 12.6609 2.04024 13.4911C2.1401 15.0362 2.82343 16.4668 3.62791 17.6748C4.09501 18.5205 3.78674 19.576 3.30021 20.498C2.94941 21.1628 2.77401 21.4952 2.91484 21.7353C3.05568 21.9754 3.37026 21.9831 3.99943 21.9984C5.24367 22.0287 6.08268 21.6759 6.74868 21.1848C7.1264 20.9063 7.31527 20.767 7.44544 20.751C7.5756 20.735 7.83177 20.8405 8.34401 21.0515C8.8044 21.2411 9.33896 21.3581 9.8294 21.3907C11.2536 21.4854 12.7435 21.4856 14.1706 21.3907C18.3536 21.1127 21.6856 17.7334 21.9598 13.4911C21.9809 13.1642 21.9937 12.8327 21.9982 12.5002',
  d3: 'M18 6L19 5M22 6C22 8.20914 20.2091 10 18 10C15.7909 10 14 8.20914 14 6C14 3.79086 15.7909 2 18 2C20.2091 2 22 3.79086 22 6Z',
  d4: 'M21.3214 8.22975C20.6031 9.29751 19.3836 10 18 10C15.7909 10 14 8.20914 14 6C14 4.90711 14.4383 3.9166 15.1487 3.19464C14.8288 3.13469 14.5024 3.09313 14.1706 3.07107C12.7435 2.97621 11.2536 2.97641 9.8294 3.07107C5.64639 3.34913 2.31441 6.72838 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05567 21.9752 3.37025 21.9829 3.99941 21.9982C5.24365 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83174 20.8403 8.34392 21.0512C8.80432 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C22.0134 12.6607 22.0134 11.8009 21.9598 10.9707C21.8972 10.0033 21.6757 9.08084 21.3214 8.22975Z',
  d5: 'M11.5 3C10.9383 3.00836 10.3789 3.03083 9.8294 3.06736C5.64639 3.34541 2.31441 6.72466 2.04024 10.967C1.98659 11.7972 1.98659 12.657 2.04024 13.4872C2.1401 15.0323 2.82343 16.4629 3.62791 17.6709C4.09501 18.5166 3.78674 19.5721 3.30021 20.4941C2.94941 21.1589 2.77401 21.4913 2.91484 21.7314C3.05568 21.9715 3.37026 21.9792 3.99943 21.9945C5.24367 22.0248 6.08268 21.672 6.74868 21.1809C7.1264 20.9024 7.31527 20.7631 7.44544 20.7471C7.5756 20.7311 7.83177 20.8366 8.34401 21.0476C8.8044 21.2372 9.33896 21.3542 9.8294 21.3868C11.2536 21.4815 12.7435 21.4817 14.1706 21.3868C18.3536 21.1087 21.6856 17.7295 21.9598 13.4872C21.9809 13.1602 21.9937 12.8287 21.9982 12.4963',
  d6: 'M18 1.25C15.3766 1.25 13.25 3.37665 13.25 6C13.25 8.62335 15.3766 10.75 18 10.75C20.6234 10.75 22.75 8.62335 22.75 6C22.75 3.37665 20.6234 1.25 18 1.25ZM19.5303 5.53033C19.8232 5.23744 19.8232 4.76256 19.5303 4.46967C19.2374 4.17678 18.7626 4.17678 18.4697 4.46967L17.4697 5.46967C17.1768 5.76256 17.1768 6.23744 17.4697 6.53033C17.7626 6.82322 18.2374 6.82322 18.5303 6.53033L19.5303 5.53033Z',
  d7: 'M12.651 2.38858C12.5623 2.24701 12.3196 2.24818 11.8341 2.25052C11.1437 2.25386 10.4546 2.27798 9.77965 2.32285C5.213 2.62641 1.58972 6.3127 1.2918 10.9225C1.23607 11.7849 1.23607 12.677 1.2918 13.5394C1.40272 15.2557 2.15148 16.8041 2.98381 18.0606C3.23314 18.5421 3.10323 19.2642 2.6369 20.1479L2.61542 20.1886C2.45874 20.4854 2.30536 20.7758 2.21688 21.0235C2.12313 21.2859 2.02623 21.7026 2.26791 22.1147C2.48996 22.4933 2.84475 22.6319 3.13152 22.6874C3.36961 22.7335 3.66155 22.7404 3.93544 22.747L3.98117 22.7481C5.40092 22.7826 6.40136 22.3727 7.1938 21.7884L7.28907 21.7182C7.40859 21.6303 7.46835 21.5864 7.54604 21.5767C7.62373 21.5671 7.69203 21.5949 7.82861 21.6506C7.89626 21.6781 7.97233 21.7094 8.05839 21.7449C8.59978 21.9679 9.21472 22.1014 9.77965 22.139C11.2369 22.2359 12.7601 22.2361 14.2204 22.139C18.787 21.8354 22.4103 18.1491 22.7082 13.5394C22.7639 12.677 22.7639 11.7849 22.7082 10.9225L22.7082 10.9224C22.7032 10.8459 22.7008 10.8076 22.6953 10.784C22.6483 10.5792 22.4227 10.4854 22.2444 10.5965C22.2238 10.6093 22.1864 10.642 22.1115 10.7074L22.1115 10.7075C21.0126 11.6681 19.5743 12.2501 18 12.2501C14.5482 12.2501 11.75 9.4519 11.75 6.00012C11.75 5.01252 11.9791 4.07842 12.387 3.24805C12.6221 2.76945 12.7396 2.53015 12.651 2.38858ZM8 11.5001C7.44772 11.5001 7 11.9479 7 12.5001C7 13.0524 7.44772 13.5001 8 13.5001H8.00897C8.56126 13.5001 9.00897 13.0524 9.00897 12.5001C9.00897 11.9479 8.56126 11.5001 8.00897 11.5001H8ZM11.9955 11.5001C11.4432 11.5001 10.9955 11.9479 10.9955 12.5001C10.9955 13.0524 11.4432 13.5001 11.9955 13.5001H12.0045C12.5568 13.5001 13.0045 13.0524 13.0045 12.5001C13.0045 11.9479 12.5568 11.5001 12.0045 11.5001H11.9955Z',
  d8: 'M11.8341 2.25055C12.3196 2.24821 12.5623 2.24703 12.651 2.38861C12.7396 2.53018 12.6221 2.76948 12.387 3.24808C11.9791 4.07845 11.75 5.01255 11.75 6.00015C11.75 9.45193 14.5482 12.2501 18 12.2501C19.5743 12.2501 21.0126 11.6681 22.1115 10.7075C22.1863 10.6421 22.2238 10.6094 22.2444 10.5965C22.4227 10.4854 22.6483 10.5792 22.6953 10.784C22.7008 10.8076 22.7032 10.8459 22.7082 10.9225C22.7639 11.7849 22.7639 12.677 22.7082 13.5394C22.4103 18.1492 18.787 21.8355 14.2204 22.139C12.7601 22.2361 11.2369 22.2359 9.77965 22.139C9.21472 22.1015 8.59978 21.9679 8.05839 21.7449C7.97233 21.7095 7.89626 21.6782 7.82861 21.6506C7.69203 21.5949 7.62373 21.5671 7.54604 21.5767C7.46835 21.5864 7.40859 21.6303 7.28907 21.7182C7.25946 21.74 7.22778 21.7633 7.1938 21.7884C6.40136 22.3728 5.40092 22.7827 3.98117 22.7481L3.93544 22.747C3.66155 22.7405 3.36961 22.7335 3.13152 22.6874C2.84475 22.6319 2.48996 22.4933 2.26791 22.1147C2.02623 21.7026 2.12313 21.286 2.21688 21.0235C2.30536 20.7759 2.45874 20.4854 2.61542 20.1886L2.6369 20.1479C3.10323 19.2642 3.23314 18.5421 2.98381 18.0606C2.15148 16.8042 1.40272 15.2558 1.2918 13.5394C1.23607 12.677 1.23607 11.7849 1.2918 10.9225C1.58972 6.31272 5.213 2.62643 9.77965 2.32287C10.4546 2.27801 11.1437 2.25388 11.8341 2.25055Z',
  d9: 'M7 12.5C7 11.9477 7.44772 11.5 8 11.5H8.00897C8.56126 11.5 9.00897 11.9477 9.00897 12.5C9.00897 13.0523 8.56126 13.5 8.00897 13.5H8C7.44772 13.5 7 13.0523 7 12.5ZM10.9955 12.5C10.9955 11.9477 11.4432 11.5 11.9955 11.5H12.0045C12.5568 11.5 13.0045 11.9477 13.0045 12.5C13.0045 13.0523 12.5568 13.5 12.0045 13.5H11.9955C11.4432 13.5 10.9955 13.0523 10.9955 12.5Z',
  d10: 'M11.8978 12.4453H11.9066M7.94043 12.4453H7.94931',
  d11: 'M17.3499 6.47662L19.3308 4.48701M21.8069 5.97922C21.8069 8.17688 20.0331 9.95844 17.8451 9.95844C15.6571 9.95844 13.8833 8.17688 13.8833 5.97922C13.8833 3.78156 15.6571 2 17.8451 2C20.0331 2 21.8069 3.78156 21.8069 5.97922Z',
  d12: 'M9.87275 3.01081C3.1972 3.21671 -0.306691 11.9897 3.73599 17.9515L1.90769 21.7887C1.86956 21.8687 1.9467 21.9551 2.03052 21.9263L6.3696 20.4324C8.68175 21.821 14.9677 21.9879 17.2408 20.456C19.5345 19.1905 21.9859 16.9121 21.7986 12.2078M9.87275 3.01081C10.0317 3.00169 10.1923 2.99707 10.3546 2.99707M9.87275 3.01081L11.2787 3.0058L12.5773 2.99707',
  d13: 'M12 6C12 4.58136 12.4923 3.27771 13.3155 2.25061C13.1622 2.25 12.9891 2.25 12.7898 2.25H12.7895H11.2105H11.2104C10.5514 2.24999 10.1795 2.24999 9.85949 2.2722C5.25571 2.59176 1.59176 6.25571 1.2722 10.8595C1.24999 11.1795 1.24999 11.5514 1.25 12.2105V12.2105V12.2895V12.2896C1.24999 12.9486 1.24999 13.3205 1.2722 13.6405C1.38603 15.2804 1.92471 16.8022 2.77921 18.0954L1.47483 22.75L6.43709 21.3113C7.48219 21.8226 8.63831 22.143 9.85949 22.2278C10.1796 22.25 10.5514 22.25 11.2105 22.25H12.7895C13.4486 22.25 13.8204 22.25 14.1405 22.2278C18.7443 21.9082 22.4082 18.2443 22.7278 13.6405C22.75 13.3204 22.75 12.9486 22.75 12.2895V12.2105C22.75 11.5514 22.75 11.1796 22.7278 10.8595C22.7041 10.5174 22.6618 10.1806 22.6022 9.8499C21.5015 11.1642 19.8484 12 18 12C14.6863 12 12 9.31371 12 6ZM9.00897 11.5H7V13.5H9.00897V11.5ZM13.0045 13.5V11.5H10.9955V13.5H13.0045Z',
  d14: 'M18 1.25C15.3766 1.25 13.25 3.37665 13.25 6C13.25 8.62335 15.3766 10.75 18 10.75C20.6234 10.75 22.75 8.62335 22.75 6C22.75 3.37665 20.6234 1.25 18 1.25ZM18.0294 7.03033L20.0294 5.03033L18.9688 3.96967L16.9688 5.96967L18.0294 7.03033Z',
};

export const IconMessageDelay02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-delay-02-stroke-rounded IconMessageDelay02StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageDelay02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-delay-02-duotone-rounded IconMessageDelay02DuotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconMessageDelay02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-delay-02-twotone-rounded IconMessageDelay02TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageDelay02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-delay-02-solid-rounded IconMessageDelay02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageDelay02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-delay-02-bulk-rounded IconMessageDelay02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMessageDelay02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-delay-02-stroke-sharp IconMessageDelay02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageDelay02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-delay-02-solid-sharp IconMessageDelay02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMessageDelay02: TheIconSelfPack = {
  name: 'MessageDelay02',
  StrokeRounded: IconMessageDelay02StrokeRounded,
  DuotoneRounded: IconMessageDelay02DuotoneRounded,
  TwotoneRounded: IconMessageDelay02TwotoneRounded,
  SolidRounded: IconMessageDelay02SolidRounded,
  BulkRounded: IconMessageDelay02BulkRounded,
  StrokeSharp: IconMessageDelay02StrokeSharp,
  SolidSharp: IconMessageDelay02SolidSharp,
};