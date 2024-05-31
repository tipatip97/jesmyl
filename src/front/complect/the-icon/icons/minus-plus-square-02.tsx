import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M17 7L7 17M15 17V15M15 15V13M15 15L13 15M15 15H17M7 9L11 9',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L6.29289 16.2929C5.90237 16.6834 5.90237 17.3166 6.29289 17.7071C6.68342 18.0976 7.31658 18.0976 7.70711 17.7071L17.7071 7.70711ZM6 8C5.44772 8 5 8.44771 5 9C5 9.55228 5.44772 10 6 10L10 10C10.5523 10 11 9.55229 11 9C11 8.44772 10.5523 8 10 8L6 8ZM17 13C17 12.4477 16.5523 12 16 12C15.4477 12 15 12.4477 15 13V14H14C13.4477 14 13 14.4477 13 15C13 15.5523 13.4477 16 14 16L15 16V17C15 17.5523 15.4477 18 16 18C16.5523 18 17 17.5523 17 17V16H18C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14H17V13Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289ZM5 9C5 8.44771 5.44772 8 6 8L10 8C10.5523 8 11 8.44772 11 9C11 9.55228 10.5523 10 10 10L6 10C5.44772 10 5 9.55228 5 9ZM16 12C16.5523 12 17 12.4477 17 13V14H18C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16H17V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V16L14 16C13.4477 16 13 15.5523 13 15C13 14.4477 13.4477 14 14 14L15 14V13C15 12.4477 15.4477 12 16 12Z',
  d6: 'M3 21H21V3.00046L3 3V21Z',
  d7: 'M3.001 2.24902C2.80208 2.24902 2.61131 2.32803 2.47065 2.46869C2.33 2.60934 2.25098 2.80011 2.25098 2.99902V20.999C2.25098 21.4132 2.58676 21.749 3.00098 21.749H21.001C21.4152 21.749 21.751 21.4132 21.751 20.999V2.99949C21.751 2.58528 21.4152 2.2495 21.001 2.24949L3.001 2.24902ZM16.2939 6.29199L6.29395 16.292L7.70816 17.7062L17.7082 7.70621L16.2939 6.29199ZM16.0011 17.4991V15.9991H17.5011V13.9991H16.0011V12.4991H14.0011V13.9991H12.5011V15.9991H14.0011V17.4991H16.0011ZM7.00105 9.9991H11.0011V7.9991H7.00105V9.9991Z',
} as const;

export const IconMinusPlusSquare02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-square-02-stroke-rounded IconMinusPlusSquare02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMinusPlusSquare02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-square-02-duotone-rounded IconMinusPlusSquare02DuotoneRounded"
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

export const IconMinusPlusSquare02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-square-02-twotone-rounded IconMinusPlusSquare02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconMinusPlusSquare02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-square-02-solid-rounded IconMinusPlusSquare02SolidRounded"
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

export const IconMinusPlusSquare02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-square-02-bulk-rounded IconMinusPlusSquare02BulkRounded"
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

export const IconMinusPlusSquare02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-square-02-stroke-sharp IconMinusPlusSquare02StrokeSharp"
    >
      <path 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconMinusPlusSquare02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-square-02-solid-sharp IconMinusPlusSquare02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMinusPlusSquare02: TheIconSelfPack = {
  name: 'MinusPlusSquare02',
  StrokeRounded: IconMinusPlusSquare02StrokeRounded,
  DuotoneRounded: IconMinusPlusSquare02DuotoneRounded,
  TwotoneRounded: IconMinusPlusSquare02TwotoneRounded,
  SolidRounded: IconMinusPlusSquare02SolidRounded,
  BulkRounded: IconMinusPlusSquare02BulkRounded,
  StrokeSharp: IconMinusPlusSquare02StrokeSharp,
  SolidSharp: IconMinusPlusSquare02SolidSharp,
};