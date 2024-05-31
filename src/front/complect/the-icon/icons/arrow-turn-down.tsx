import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 13L6 8.5C6 6.01472 8.01472 4 10.5 4C12.9853 4 15 6.01472 15 8.5V20',
  d2: 'M12 17C12 17 14.2095 20 15 20C15.7906 20 18 17 18 17',
  d3: 'M12.0217 17.0507C12.6117 17.6515 14.188 20.0264 15.0198 20.0184C15.8515 20.0104 17.3827 17.6048 17.9607 16.9929M15.0093 19.5288L14.8889 8.73275C14.9051 7.94779 14.8307 6.30722 13.1602 5.00252C11.9712 4.03096 9.02698 2.99962 6.71763 6.05032C6.39604 6.46286 5.83316 7.50543 5.99132 9.71818L6.02965 13.1062',
  d4: 'M6 14C5.44771 14 5 13.5523 5 13L5 8.5C5 5.46243 7.46243 3 10.5 3C13.5376 3 16 5.46243 16 8.5L16 16L18 16C18.3772 16 18.7223 16.2122 18.8925 16.5489C19.0626 16.8855 19.0289 17.2893 18.8052 17.593L18.7972 17.6038L18.7768 17.6313C18.7592 17.6548 18.7338 17.6888 18.7015 17.7316C18.6368 17.8172 18.5442 17.9386 18.4308 18.084C18.2048 18.3736 17.8923 18.7631 17.5516 19.1556C17.2151 19.5431 16.8314 19.9564 16.4644 20.2806C16.2821 20.4417 16.0803 20.6021 15.8722 20.7275C15.6915 20.8364 15.3773 21 15 21C14.6227 21 14.3085 20.8364 14.1279 20.7275C13.9198 20.6021 13.718 20.4418 13.5356 20.2806C13.1686 19.9564 12.7849 19.5431 12.4485 19.1556C12.1077 18.7632 11.7953 18.3736 11.5692 18.084C11.4558 17.9387 11.3632 17.8173 11.2985 17.7316C11.2662 17.6888 11.2408 17.6549 11.2232 17.6313L11.2028 17.6039L11.1972 17.5963L11.1949 17.5932C10.9712 17.2895 10.9374 16.8856 11.1075 16.5489C11.2777 16.2123 11.6228 16 12 16L14 16L14 8.5C14 6.567 12.433 5 10.5 5C8.567 5 7 6.567 7 8.5L7 13C7 13.5523 6.55228 14 6 14Z',
  d5: 'M6 14C5.44772 14 5 13.5523 5 13L5 8.49998C5 5.46242 7.46243 2.99998 10.5 2.99998C13.5376 2.99998 16 5.46242 16 8.49998L16 16L14 16L14 8.49998C14 6.56699 12.433 4.99998 10.5 4.99998C8.567 4.99998 7 6.56699 7 8.49998L7 13C7 13.5523 6.55228 14 6 14Z',
  d6: 'M11.1075 16.5489C11.2776 16.2123 11.6227 16 12 16L16 16L18 16C18.3772 16 18.7223 16.2122 18.8924 16.5489C19.0626 16.8855 19.0288 17.2893 18.8052 17.593L18.7972 17.6038L18.7768 17.6313C18.7592 17.6548 18.7338 17.6888 18.7014 17.7316C18.6368 17.8172 18.5442 17.9386 18.4307 18.084C18.2047 18.3736 17.8923 18.7631 17.5515 19.1556C17.2151 19.5431 16.8314 19.9564 16.4644 20.2806C16.282 20.4417 16.0802 20.6021 15.8721 20.7275C15.6915 20.8364 15.3773 21 15 21C14.6227 21 14.3085 20.8364 14.1278 20.7275C13.9197 20.6021 13.7179 20.4418 13.5356 20.2806C13.1686 19.9564 12.7849 19.5431 12.4484 19.1556C12.1077 18.7632 11.7952 18.3736 11.5692 18.084C11.4558 17.9387 11.3631 17.8173 11.2985 17.7316C11.2661 17.6888 11.2407 17.6549 11.2232 17.6313L11.2028 17.6039L11.1972 17.5963L11.1949 17.5932C10.9712 17.2895 10.9373 16.8856 11.1075 16.5489Z',
  d7: 'M10.0449 15.7765L14.0341 19.7388L17.998 15.7817M14.0215 20L14.0215 7.94299C14.0215 5.76534 12.2263 4 10.0117 4C7.79719 4 6.00195 5.76534 6.00195 7.94299L6.00195 12.815',
  d8: 'M6.5 8.5L6.5 13H4.5L4.5 8.5C4.5 5.46243 6.96243 3 10 3C13.0376 3 15.5 5.46243 15.5 8.5L15.5 15.5859H19.5L14.5 21.0001L9.49997 15.586H13.5L13.5 8.5C13.5 6.567 11.933 5 10 5C8.067 5 6.5 6.567 6.5 8.5Z',
} as const;

export const IconArrowTurnDownStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-down-stroke-rounded IconArrowTurnDownStrokeRounded"
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

export const IconArrowTurnDownDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-down-duotone-rounded IconArrowTurnDownDuotoneRounded"
    >
      <path 
        opacity="0.5" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowTurnDownTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-down-twotone-rounded IconArrowTurnDownTwotoneRounded"
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

export const IconArrowTurnDownSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-down-solid-rounded IconArrowTurnDownSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowTurnDownBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-down-bulk-rounded IconArrowTurnDownBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconArrowTurnDownStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-down-stroke-sharp IconArrowTurnDownStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowTurnDownSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-turn-down-solid-sharp IconArrowTurnDownSolidSharp"
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

export const iconPackOfArrowTurnDown: TheIconSelfPack = {
  name: 'ArrowTurnDown',
  StrokeRounded: IconArrowTurnDownStrokeRounded,
  DuotoneRounded: IconArrowTurnDownDuotoneRounded,
  TwotoneRounded: IconArrowTurnDownTwotoneRounded,
  SolidRounded: IconArrowTurnDownSolidRounded,
  BulkRounded: IconArrowTurnDownBulkRounded,
  StrokeSharp: IconArrowTurnDownStrokeSharp,
  SolidSharp: IconArrowTurnDownSolidSharp,
};