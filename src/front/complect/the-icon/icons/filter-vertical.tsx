import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 21L7 18',
  d2: 'M17 21L17 15',
  d3: 'M17 6L17 3',
  d4: 'M7 9L7 3',
  d5: 'M7 18C6.06812 18 5.60218 18 5.23463 17.8478C4.74458 17.6448 4.35523 17.2554 4.15224 16.7654C4 16.3978 4 15.9319 4 15C4 14.0681 4 13.6022 4.15224 13.2346C4.35523 12.7446 4.74458 12.3552 5.23463 12.1522C5.60218 12 6.06812 12 7 12C7.93188 12 8.39782 12 8.76537 12.1522C9.25542 12.3552 9.64477 12.7446 9.84776 13.2346C10 13.6022 10 14.0681 10 15C10 15.9319 10 16.3978 9.84776 16.7654C9.64477 17.2554 9.25542 17.6448 8.76537 17.8478C8.39782 18 7.93188 18 7 18Z',
  d6: 'M17 12C16.0681 12 15.6022 12 15.2346 11.8478C14.7446 11.6448 14.3552 11.2554 14.1522 10.7654C14 10.3978 14 9.93188 14 9C14 8.06812 14 7.60218 14.1522 7.23463C14.3552 6.74458 14.7446 6.35523 15.2346 6.15224C15.6022 6 16.0681 6 17 6C17.9319 6 18.3978 6 18.7654 6.15224C19.2554 6.35523 19.6448 6.74458 19.8478 7.23463C20 7.60218 20 8.06812 20 9C20 9.93188 20 10.3978 19.8478 10.7654C19.6448 11.2554 19.2554 11.6448 18.7654 11.8478C18.3978 12 17.9319 12 17 12Z',
  d7: 'M7 22C6.44772 22 6 21.5523 6 21L6 18C6 17.4477 6.44772 17 7 17C7.55228 17 8 17.4477 8 18L8 21C8 21.5523 7.55228 22 7 22Z',
  d8: 'M17 22C16.4477 22 16 21.5523 16 21L16 15C16 14.4477 16.4477 14 17 14C17.5523 14 18 14.4477 18 15L18 21C18 21.5523 17.5523 22 17 22Z',
  d9: 'M17 7C16.4477 7 16 6.55228 16 6L16 3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3L18 6C18 6.55228 17.5523 7 17 7Z',
  d10: 'M7 10C6.44772 10 6 9.55228 6 9L6 3C6 2.44772 6.44772 2 7 2C7.55229 2 8 2.44772 8 3L8 9C8 9.55228 7.55228 10 7 10Z',
  d11: 'M6.97475 11.25H7.02525C7.46972 11.25 7.84075 11.25 8.14537 11.2708C8.46247 11.2924 8.76199 11.339 9.05238 11.4593C9.72621 11.7384 10.2616 12.2738 10.5407 12.9476C10.661 13.238 10.7076 13.5375 10.7292 13.8546C10.75 14.1592 10.75 14.5303 10.75 14.9747V15.0253C10.75 15.4697 10.75 15.8408 10.7292 16.1454C10.7076 16.4625 10.661 16.762 10.5407 17.0524C10.2616 17.7262 9.72621 18.2616 9.05238 18.5407C8.76199 18.661 8.46247 18.7076 8.14537 18.7292C7.84075 18.75 7.46972 18.75 7.02526 18.75H6.97474C6.53028 18.75 6.15925 18.75 5.85464 18.7292C5.53754 18.7076 5.23801 18.661 4.94762 18.5407C4.27379 18.2616 3.73844 17.7262 3.45933 17.0524C3.33905 16.762 3.29241 16.4625 3.27077 16.1454C3.24999 15.8408 3.24999 15.4697 3.25 15.0253V14.9747C3.24999 14.5303 3.24999 14.1592 3.27077 13.8546C3.29241 13.5375 3.33905 13.238 3.45933 12.9476C3.73844 12.2738 4.27379 11.7384 4.94762 11.4593C5.23801 11.339 5.53754 11.2924 5.85464 11.2708C6.15925 11.25 6.53029 11.25 6.97475 11.25Z',
  d12: 'M16.9747 5.25H17.0253C17.4697 5.24999 17.8408 5.24999 18.1454 5.27077C18.4625 5.29241 18.762 5.33905 19.0524 5.45933C19.7262 5.73844 20.2616 6.27379 20.5407 6.94762C20.661 7.23801 20.7076 7.53754 20.7292 7.85464C20.75 8.15925 20.75 8.53028 20.75 8.97474V9.02526C20.75 9.46972 20.75 9.84075 20.7292 10.1454C20.7076 10.4625 20.661 10.762 20.5407 11.0524C20.2616 11.7262 19.7262 12.2616 19.0524 12.5407C18.762 12.661 18.4625 12.7076 18.1454 12.7292C17.8408 12.75 17.4697 12.75 17.0253 12.75H16.9747C16.5303 12.75 16.1592 12.75 15.8546 12.7292C15.5375 12.7076 15.238 12.661 14.9476 12.5407C14.2738 12.2616 13.7384 11.7262 13.4593 11.0524C13.339 10.762 13.2924 10.4625 13.2708 10.1454C13.25 9.84075 13.25 9.46971 13.25 9.02525V8.97475C13.25 8.53029 13.25 8.15925 13.2708 7.85464C13.2924 7.53754 13.339 7.23801 13.4593 6.94762C13.7384 6.27379 14.2738 5.73844 14.9476 5.45933C15.238 5.33905 15.5375 5.29241 15.8546 5.27077C16.1592 5.24999 16.5303 5.24999 16.9747 5.25Z',
  d13: 'M20 6H14V12H20V6Z',
  d14: 'M10 12H4V18H10V12Z',
  d15: 'M8 18L8 21L6 21L6 18L8 18Z',
  d16: 'M18 15L18 21L16 21L16 15L18 15Z',
  d17: 'M18 3L18 6L16 6L16 3L18 3Z',
  d18: 'M8 3L8 9L6 9L6 3L8 3Z',
  d19: 'M13.25 5.25H20.75V12.75H13.25V5.25Z',
  d20: 'M3.25 11.25H10.75V18.75H3.25V11.25Z',
} as const;

export const IconFilterVerticalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-vertical-stroke-rounded IconFilterVerticalStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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

export const IconFilterVerticalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-vertical-duotone-rounded IconFilterVerticalDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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

export const IconFilterVerticalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-vertical-twotone-rounded IconFilterVerticalTwotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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

export const IconFilterVerticalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-vertical-solid-rounded IconFilterVerticalSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
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

export const IconFilterVerticalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-vertical-bulk-rounded IconFilterVerticalBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
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

export const IconFilterVerticalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-vertical-stroke-sharp IconFilterVerticalStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFilterVerticalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="filter-vertical-solid-sharp IconFilterVerticalSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFilterVertical: TheIconSelfPack = {
  name: 'FilterVertical',
  StrokeRounded: IconFilterVerticalStrokeRounded,
  DuotoneRounded: IconFilterVerticalDuotoneRounded,
  TwotoneRounded: IconFilterVerticalTwotoneRounded,
  SolidRounded: IconFilterVerticalSolidRounded,
  BulkRounded: IconFilterVerticalBulkRounded,
  StrokeSharp: IconFilterVerticalStrokeSharp,
  SolidSharp: IconFilterVerticalSolidSharp,
};