import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 5C9.58984 4.39316 11.1597 2 12 2C12.8403 2 14.4102 4.39316 15 5',
  d2: 'M9 19C9.58984 19.6068 11.1597 22 12 22C12.8403 22 14.4102 19.6068 15 19',
  d3: 'M12 2.23145V21.769',
  d4: 'M8.46219 4.47726C8.17349 4.77428 8.18023 5.24911 8.47726 5.53781C8.77428 5.82651 9.24911 5.81977 9.53781 5.52274L8.46219 4.47726ZM14.4622 5.52274C14.7509 5.81977 15.2257 5.82651 15.5227 5.53781C15.8198 5.24911 15.8265 4.77428 15.5378 4.47726L14.4622 5.52274ZM9.53781 18.4772C9.24911 18.1802 8.77428 18.1734 8.47726 18.4621C8.18023 18.7508 8.17349 19.2257 8.46219 19.5227L9.53781 18.4772ZM15.5378 19.5227C15.8265 19.2257 15.8198 18.7508 15.5227 18.4621C15.2257 18.1734 14.7509 18.1802 14.4622 18.4772L15.5378 19.5227ZM12.75 22V2H11.25V22H12.75ZM12 1.25C11.7242 1.25 11.4824 1.34525 11.3002 1.44275C11.112 1.54343 10.9343 1.67538 10.7734 1.81244C10.4522 2.08603 10.1277 2.44084 9.83388 2.78758C9.5373 3.13759 9.24997 3.50595 9.00961 3.81197C8.75588 4.13501 8.57547 4.36071 8.46219 4.47726L9.53781 5.52274C9.71945 5.33587 9.95647 5.03486 10.1892 4.73851C10.4354 4.42513 10.7036 4.08143 10.9783 3.75729C11.2557 3.42988 11.5181 3.14847 11.746 2.95439C11.8596 2.85761 11.9471 2.79785 12.0079 2.76528C12.0747 2.72953 12.0657 2.75 12 2.75V1.25ZM15.5378 4.47726C15.4245 4.36071 15.2441 4.13501 14.9904 3.81197C14.75 3.50595 14.4627 3.13759 14.1661 2.78758C13.8723 2.44084 13.5478 2.08603 13.2266 1.81244C13.0657 1.67538 12.888 1.54343 12.6998 1.44275C12.5176 1.34525 12.2758 1.25 12 1.25L12 2.75C11.9343 2.75 11.9253 2.72953 11.9921 2.76528C12.0529 2.79785 12.1404 2.85761 12.254 2.95439C12.4819 3.14847 12.7443 3.42988 13.0217 3.75729C13.2964 4.08143 13.5646 4.42513 13.8108 4.73851C14.0435 5.03486 14.2805 5.33587 14.4622 5.52274L15.5378 4.47726ZM12 21.25C12.0657 21.25 12.0747 21.2705 12.0079 21.2347C11.9471 21.2022 11.8596 21.1424 11.746 21.0456C11.5181 20.8515 11.2557 20.5701 10.9783 20.2427C10.7036 19.9185 10.4354 19.5748 10.1892 19.2615C9.95647 18.9651 9.71945 18.6641 9.53781 18.4772L8.46219 19.5227C8.57546 19.6392 8.75587 19.8649 9.00961 20.188C9.24997 20.494 9.5373 20.8624 9.83388 21.2124C10.1277 21.5591 10.4522 21.9139 10.7734 22.1875C10.9343 22.3246 11.112 22.4566 11.3002 22.5572C11.4823 22.6547 11.7242 22.75 12 22.75V21.25ZM14.4622 18.4772C14.2805 18.6641 14.0435 18.9651 13.8108 19.2615C13.5646 19.5748 13.2964 19.9185 13.0217 20.2427C12.7443 20.5701 12.4819 20.8515 12.254 21.0456C12.1404 21.1424 12.0529 21.2022 11.9921 21.2347C11.9253 21.2705 11.9343 21.25 12 21.25L12 22.75C12.2758 22.75 12.5177 22.6547 12.6998 22.5572C12.888 22.4566 13.0657 22.3246 13.2266 22.1875C13.5478 21.9139 13.8723 21.5591 14.1661 21.2124C14.4627 20.8624 14.75 20.494 14.9904 20.188C15.2441 19.8649 15.4245 19.6392 15.5378 19.5227L14.4622 18.4772Z',
  d5: 'M11.25 22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22H11.25ZM12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2L12.75 2ZM12.75 22L12.75 2L11.25 2L11.25 22H12.75Z',
  d6: 'M15.5378 19.5227C15.7479 19.3066 15.8082 18.9857 15.6908 18.7081C15.5735 18.4304 15.3014 18.25 15 18.25L13 18.25L13 5.75L15 5.75C15.3014 5.75 15.5735 5.56957 15.6908 5.29193C15.8082 5.01429 15.7479 4.69339 15.5378 4.47726C15.4245 4.36071 15.2441 4.13501 14.9904 3.81197C14.762 3.52108 14.4399 3.11067 14.1661 2.78758C13.8723 2.44084 13.5478 2.08603 13.2266 1.81244C13.0656 1.67538 12.888 1.54343 12.6998 1.44275C12.5176 1.34525 12.2758 1.25 12 1.25C11.7242 1.25 11.4823 1.34525 11.3001 1.44275C11.112 1.54343 10.9343 1.67538 10.7734 1.81244C10.4522 2.08603 10.1277 2.44084 9.83386 2.78758C9.56009 3.11067 9.23793 3.52107 9.00959 3.81197C8.75586 4.13501 8.57545 4.36071 8.46217 4.47726C8.25209 4.69339 8.19181 5.01429 8.30913 5.29193C8.42645 5.56957 8.69857 5.75 8.99998 5.75L11 5.75L11 18.25L8.99998 18.25C8.69857 18.25 8.42645 18.4304 8.30913 18.7081C8.19181 18.9857 8.25209 19.3066 8.46217 19.5227C8.57545 19.6393 8.75586 19.865 9.00959 20.188C9.23793 20.4789 9.5601 20.8893 9.83386 21.2124C10.1277 21.5592 10.4522 21.914 10.7734 22.1876C10.9343 22.3246 11.112 22.4566 11.3001 22.5573C11.4823 22.6547 11.7242 22.75 12 22.75C12.2758 22.75 12.5176 22.6547 12.6998 22.5572C12.888 22.4566 13.0656 22.3246 13.2266 22.1876C13.5478 21.914 13.8723 21.5592 14.1661 21.2124C14.4399 20.8893 14.762 20.4789 14.9904 20.188C15.2441 19.865 15.4245 19.6393 15.5378 19.5227Z',
  d7: 'M12 2C12.5523 2 13 2.44772 13 3L13 21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21L11 3C11 2.44772 11.4477 2 12 2Z',
  d8: 'M15.6908 5.29193C15.5735 5.56957 15.3014 5.75 15 5.75L8.99998 5.75C8.69857 5.75 8.42645 5.56957 8.30913 5.29193C8.19181 5.01429 8.25209 4.69339 8.46217 4.47726C8.57545 4.36071 8.75586 4.13501 9.00959 3.81197C9.23793 3.52107 9.56009 3.11067 9.83386 2.78758C10.1277 2.44084 10.4522 2.08603 10.7734 1.81244C10.9343 1.67538 11.112 1.54343 11.3001 1.44275C11.4823 1.34525 11.7242 1.25 12 1.25C12.2758 1.25 12.5176 1.34525 12.6998 1.44275C12.888 1.54343 13.0656 1.67538 13.2266 1.81244C13.5478 2.08603 13.8723 2.44084 14.1661 2.78758C14.4399 3.11067 14.762 3.52108 14.9904 3.81197C15.2441 4.13501 15.4245 4.36071 15.5378 4.47726C15.7479 4.69339 15.8082 5.01429 15.6908 5.29193Z',
  d9: 'M15.6908 18.7081C15.8082 18.9857 15.7479 19.3066 15.5378 19.5227C15.4245 19.6393 15.2441 19.865 14.9904 20.188C14.762 20.4789 14.4399 20.8893 14.1661 21.2124C13.8723 21.5592 13.5478 21.914 13.2266 22.1876C13.0656 22.3246 12.888 22.4566 12.6998 22.5572C12.5176 22.6547 12.2758 22.75 12 22.75C11.7242 22.75 11.4823 22.6547 11.3001 22.5573C11.112 22.4566 10.9343 22.3246 10.7734 22.1876C10.4522 21.914 10.1277 21.5592 9.83386 21.2124C9.5601 20.8893 9.23793 20.4789 9.00959 20.188C8.75586 19.865 8.57545 19.6393 8.46217 19.5227C8.25209 19.3066 8.19181 18.9857 8.30913 18.7081C8.42645 18.4304 8.69857 18.25 8.99998 18.25L15 18.25C15.3014 18.25 15.5735 18.4304 15.6908 18.7081Z',
  d10: 'M8 6L12.0001 2L16.0001 6M8 18L12.0001 22L16.0001 18M12.0001 2.28516L12.0001 21.6211',
  d11: 'M17.0001 5.99993L15.5859 7.41417L12.9999 4.82836L12.9999 19.1716L15.5859 16.5858L17.0001 18L11.9999 23L7 18.0002L8.41421 16.586L10.9999 19.1716L10.9999 4.82842L8.41421 7.41414L7 5.99993L11.9999 1L17.0001 5.99993Z',
} as const;

export const IconArrowVerticalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-vertical-stroke-rounded IconArrowVerticalStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowVerticalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-vertical-duotone-rounded IconArrowVerticalDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowVerticalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-vertical-twotone-rounded IconArrowVerticalTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconArrowVerticalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-vertical-solid-rounded IconArrowVerticalSolidRounded"
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

export const IconArrowVerticalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-vertical-bulk-rounded IconArrowVerticalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconArrowVerticalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-vertical-stroke-sharp IconArrowVerticalStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowVerticalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-vertical-solid-sharp IconArrowVerticalSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrowVertical: TheIconSelfPack = {
  name: 'ArrowVertical',
  StrokeRounded: IconArrowVerticalStrokeRounded,
  DuotoneRounded: IconArrowVerticalDuotoneRounded,
  TwotoneRounded: IconArrowVerticalTwotoneRounded,
  SolidRounded: IconArrowVerticalSolidRounded,
  BulkRounded: IconArrowVerticalBulkRounded,
  StrokeSharp: IconArrowVerticalStrokeSharp,
  SolidSharp: IconArrowVerticalSolidSharp,
};