import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 20L18 20',
  d2: 'M12 16V4',
  d3: 'M16 12C16 12 13.054 16 12 16C10.9459 16 8 12 8 12',
  d4: 'M12 16V4M12 16C13.0541 16 16 12 16 12M12 16C10.9459 16 8 12 8 12',
  d5: 'M12 16L12 4',
  d6: 'M8 12C8 12 10.946 16 12 16C13.0541 16 16 12 16 12',
  d7: 'M5 20C5 19.4477 5.44772 19 6 19L18 19C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21L6 21C5.44771 21 5 20.5523 5 20Z',
  d8: 'M15.1947 11.407C15.5222 10.9624 16.1481 10.8673 16.5928 11.1947C17.0376 11.5222 17.1327 12.1481 16.8052 12.5929L16.8023 12.5969L16.7951 12.6066L16.7685 12.6424C16.7455 12.6733 16.7121 12.718 16.6694 12.7745C16.5841 12.8874 16.4617 13.0479 16.3118 13.2401C16.0127 13.6235 15.6 14.138 15.1509 14.6555C14.706 15.168 14.2056 15.7063 13.7326 16.1243C13.4973 16.3323 13.2451 16.5317 12.9917 16.6845C12.7657 16.8208 12.4112 17 12.0009 17C11.5906 17 11.2361 16.8208 11.0101 16.6846C10.7566 16.5318 10.5044 16.3324 10.269 16.1245C9.79583 15.7065 9.29521 15.1682 8.85012 14.6557C8.40072 14.1383 7.98787 13.6237 7.6886 13.2404C7.53855 13.0482 7.41609 12.8877 7.33075 12.7747C7.28806 12.7182 7.2546 12.6736 7.23156 12.6427L7.20495 12.6069L7.19778 12.5972L7.19517 12.5936C6.86759 12.149 6.96215 11.5225 7.4068 11.1949C7.85141 10.8674 8.47737 10.9622 8.80497 11.4068L8.80637 11.4087L8.81189 11.4162L8.83501 11.4473C8.85566 11.475 8.88654 11.5162 8.92649 11.5691C9.00642 11.6749 9.12242 11.8269 9.26511 12.0097C9.55131 12.3763 9.94106 12.8618 10.3601 13.3443C10.574 13.5906 10.7905 13.8302 11.0009 14.05L11.0009 4C11.0009 3.44771 11.4486 3 12.0009 3C12.5532 3 13.0009 3.44771 13.0009 4L13.0009 14.0493C13.2109 13.8298 13.427 13.5905 13.6405 13.3445C14.0593 12.862 14.4488 12.3765 14.7349 12.0099C14.8775 11.8271 14.9934 11.6751 15.0733 11.5693C15.1132 11.5164 15.1441 11.4752 15.1647 11.4475L15.1878 11.4164L15.1933 11.4089L15.1947 11.407Z',
  d9: 'M18 20L6 20',
  d10: 'M12 4V15.5361M16 12L12 16L8 12',
  d11: 'M6 19L18 19V21L6 21V19Z',
  d12: 'M13.0001 13.5858L15.293 11.2929L16.7072 12.7071L12 17.4142L7.29297 12.7071L8.70719 11.2929L11.0001 13.5858V4H13.0001V13.5858Z',
} as const;

export const IconArrowDown03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-03-stroke-rounded IconArrowDown03StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconArrowDown03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-03-duotone-rounded IconArrowDown03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDown03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-03-twotone-rounded IconArrowDown03TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDown03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-03-solid-rounded IconArrowDown03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDown03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-03-bulk-rounded IconArrowDown03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDown03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-03-stroke-sharp IconArrowDown03StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDown03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-03-solid-sharp IconArrowDown03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfArrowDown03: TheIconSelfPack = {
  name: 'ArrowDown03',
  StrokeRounded: IconArrowDown03StrokeRounded,
  DuotoneRounded: IconArrowDown03DuotoneRounded,
  TwotoneRounded: IconArrowDown03TwotoneRounded,
  SolidRounded: IconArrowDown03SolidRounded,
  BulkRounded: IconArrowDown03BulkRounded,
  StrokeSharp: IconArrowDown03StrokeSharp,
  SolidSharp: IconArrowDown03SolidSharp,
};