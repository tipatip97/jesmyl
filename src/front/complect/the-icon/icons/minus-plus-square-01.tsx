import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 16.5V10.1364M15.5 13.3182H8.5M15.5 7.5H8.5',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V14.8182H8.5C7.94772 14.8182 7.5 14.3705 7.5 13.8182C7.5 13.2659 7.94772 12.8182 8.5 12.8182H11V10.6364C11 10.0841 11.4477 9.63636 12 9.63636C12.5523 9.63636 13 10.0841 13 10.6364V12.8182H15.5C16.0523 12.8182 16.5 13.2659 16.5 13.8182C16.5 14.3705 16.0523 14.8182 15.5 14.8182H13V17ZM8.5 8C7.94772 8 7.5 7.55229 7.5 7C7.5 6.44772 7.94772 6 8.5 6H15.5C16.0523 6 16.5 6.44772 16.5 7C16.5 7.55229 16.0523 8 15.5 8H8.5Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M12 18C12.5523 18 13 17.5523 13 17V14.8182H15.5C16.0523 14.8182 16.5 14.3705 16.5 13.8182C16.5 13.2659 16.0523 12.8182 15.5 12.8182H13V10.6364C13 10.0841 12.5523 9.63636 12 9.63636C11.4477 9.63636 11 10.0841 11 10.6364V12.8182H8.5C7.94772 12.8182 7.5 13.2659 7.5 13.8182C7.5 14.3705 7.94772 14.8182 8.5 14.8182H11V17C11 17.5523 11.4477 18 12 18ZM7.5 7C7.5 7.55229 7.94772 8 8.5 8H15.5C16.0523 8 16.5 7.55229 16.5 7C16.5 6.44772 16.0523 6 15.5 6H8.5C7.94772 6 7.5 6.44772 7.5 7Z',
  d6: 'M14.0976 21.0056H12.1853C9.9477 20.3713 9.79297 17.9505 9.06444 16.2127C8.825 15.4687 8.57688 14.7128 8.3358 13.9884M8.3358 13.9884C7.59825 11.7722 6.92651 9.8498 6.77045 9.45834C6.08661 7.74311 5.61665 6.80889 2.50011 7.00661M8.3358 13.9884C8.79518 13.1729 9.25253 12.3572 9.71454 11.5854C11.3113 9.0554 12.9029 7.00661 14.9091 7.00661M8.3358 13.9884C6.35861 17.4983 4.34369 21.0056 1.75684 21.0056',
  d7: 'M22.757 9.02573H17.9757C17.9659 9.02573 17.9618 9.01347 17.9696 9.0077L21.2565 6.567C22.894 5.10093 21.5595 2.73365 19.7334 3.02681C18.6424 3.09688 17.9453 4.12567 17.9453 4.9956',
  d8: 'M3.00002 2.25C2.8011 2.24999 2.61033 2.32901 2.46968 2.46966C2.32902 2.61032 2.25 2.80108 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3.00046C21.75 2.58626 21.4142 2.25047 21 2.25046L3.00002 2.25ZM11 17V14.8182H8.5V12.8182H11V10.6364H13V12.8182H15.5V14.8182H13V17H11ZM15.5 9H8.5V7H15.5V9Z',
} as const;

export const IconMinusPlusSquare01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-square-01-stroke-rounded IconMinusPlusSquare01StrokeRounded"
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

export const IconMinusPlusSquare01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-square-01-duotone-rounded IconMinusPlusSquare01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMinusPlusSquare01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-square-01-twotone-rounded IconMinusPlusSquare01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMinusPlusSquare01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-square-01-solid-rounded IconMinusPlusSquare01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMinusPlusSquare01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-square-01-bulk-rounded IconMinusPlusSquare01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMinusPlusSquare01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-square-01-stroke-sharp IconMinusPlusSquare01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMinusPlusSquare01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-square-01-solid-sharp IconMinusPlusSquare01SolidSharp"
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

export const iconPackOfMinusPlusSquare01: TheIconSelfPack = {
  name: 'MinusPlusSquare01',
  StrokeRounded: IconMinusPlusSquare01StrokeRounded,
  DuotoneRounded: IconMinusPlusSquare01DuotoneRounded,
  TwotoneRounded: IconMinusPlusSquare01TwotoneRounded,
  SolidRounded: IconMinusPlusSquare01SolidRounded,
  BulkRounded: IconMinusPlusSquare01BulkRounded,
  StrokeSharp: IconMinusPlusSquare01StrokeSharp,
  SolidSharp: IconMinusPlusSquare01SolidSharp,
};