import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.50012 12C2.50012 7.52166 2.50012 5.28249 3.89136 3.89124C5.28261 2.5 7.52178 2.5 12.0001 2.5C16.4785 2.5 18.7176 2.5 20.1089 3.89124C21.5001 5.28249 21.5001 7.52166 21.5001 12C21.5001 16.4783 21.5001 18.7175 20.1089 20.1088C18.7176 21.5 16.4785 21.5 12.0001 21.5C7.52178 21.5 5.28261 21.5 3.89136 20.1088C2.50012 18.7175 2.50012 16.4783 2.50012 12Z',
  d2: 'M7.00012 17L11.1937 12.8065M17.0001 7L12.8066 11.1935M12.8066 11.1935L9.7779 7H7.00012L11.1937 12.8065M12.8066 11.1935L17.0001 17H14.2223L11.1937 12.8065',
  d3: 'M3.89136 3.89124C2.50012 5.28249 2.50012 7.52166 2.50012 12C2.50012 16.4783 2.50012 18.7175 3.89136 20.1088C5.28261 21.5 7.52178 21.5 12.0001 21.5C16.4785 21.5 18.7176 21.5 20.1089 20.1088C21.5001 18.7175 21.5001 16.4783 21.5001 12C21.5001 7.52166 21.5001 5.28249 20.1089 3.89124C18.7176 2.5 16.4785 2.5 12.0001 2.5C7.52178 2.5 5.28261 2.5 3.89136 3.89124ZM7.00012 7H9.7779L17.0001 17H14.2223L7.00012 7Z',
  d4: 'M17.3121 1.93059C15.9687 1.74998 14.248 1.74999 12.0573 1.75H11.9429C9.75224 1.74999 8.03156 1.74998 6.68815 1.93059C5.31149 2.11568 4.21923 2.50271 3.36104 3.36091C2.50284 4.21911 2.1158 5.31137 1.93072 6.68802C1.7501 8.03144 1.75011 9.75212 1.75012 11.9428V12.0572C1.75011 14.2479 1.7501 15.9686 1.93072 17.312C2.1158 18.6886 2.50284 19.7809 3.36104 20.6391C4.21923 21.4973 5.31149 21.8843 6.68815 22.0694C8.03156 22.25 9.75223 22.25 11.9429 22.25H11.943H12.0573H12.0573C14.248 22.25 15.9687 22.25 17.3121 22.0694C18.6888 21.8843 19.781 21.4973 20.6392 20.6391C21.4974 19.7809 21.8844 18.6886 22.0695 17.312C22.2501 15.9686 22.2501 14.2479 22.2501 12.0572V12.0572V11.9428V11.9428C22.2501 9.7521 22.2501 8.03144 22.0695 6.68802C21.8844 5.31137 21.4974 4.21911 20.6392 3.36091C19.781 2.50271 18.6888 2.11568 17.3121 1.93059ZM7.00012 6.25C6.71848 6.25 6.46057 6.40779 6.33235 6.65856C6.20413 6.90933 6.22721 7.21079 6.39212 7.43912L10.2117 12.7278L6.4698 16.4697C6.1769 16.7626 6.1769 17.2374 6.4698 17.5303C6.76269 17.8232 7.23756 17.8232 7.53046 17.5303L11.1013 13.9595L13.6143 17.4391C13.7553 17.6344 13.9815 17.75 14.2223 17.75H17.0001C17.2818 17.75 17.5397 17.5922 17.6679 17.3414C17.7961 17.0907 17.773 16.7892 17.6081 16.5609L13.7886 11.2722L17.5305 7.53033C17.8233 7.23744 17.8233 6.76256 17.5305 6.46967C17.2376 6.17678 16.7627 6.17678 16.4698 6.46967L12.899 10.0405L10.3859 6.56088C10.2449 6.36565 10.0187 6.25 9.7779 6.25H7.00012Z',
  d5: 'M12.0573 1.75C14.248 1.74999 15.9687 1.74998 17.3121 1.93059C18.6888 2.11568 19.781 2.50271 20.6392 3.36091C21.4974 4.21911 21.8844 5.31137 22.0695 6.68802C22.2501 8.03144 22.2501 9.7521 22.2501 11.9428V11.9428V12.0572V12.0572C22.2501 14.2479 22.2501 15.9686 22.0695 17.312C21.8844 18.6886 21.4974 19.7809 20.6392 20.6391C19.781 21.4973 18.6888 21.8843 17.3121 22.0694C15.9687 22.25 14.248 22.25 12.0573 22.25H12.0573H11.943H11.9429C9.75223 22.25 8.03156 22.25 6.68815 22.0694C5.31149 21.8843 4.21923 21.4973 3.36104 20.6391C2.50284 19.7809 2.1158 18.6886 1.93072 17.312C1.7501 15.9686 1.75011 14.2479 1.75012 12.0572V11.9428C1.75011 9.75212 1.7501 8.03144 1.93072 6.68802C2.1158 5.31137 2.50284 4.21911 3.36104 3.36091C4.21923 2.50271 5.31149 2.11568 6.68815 1.93059C8.03156 1.74998 9.75224 1.74999 11.9429 1.75H12.0573Z',
  d6: 'M6.33235 6.65856C6.46057 6.40779 6.71848 6.25 7.00013 6.25H9.7779C10.0187 6.25 10.2449 6.36565 10.3859 6.56088L12.899 10.0405L16.4698 6.46967C16.7627 6.17678 17.2376 6.17678 17.5305 6.46967C17.8233 6.76256 17.8233 7.23744 17.5305 7.53033L13.7886 11.2722L17.6081 16.5609C17.773 16.7892 17.7961 17.0907 17.6679 17.3414C17.5397 17.5922 17.2818 17.75 17.0001 17.75H14.2223C13.9815 17.75 13.7553 17.6344 13.6143 17.4391L11.1013 13.9595L7.53046 17.5303C7.23756 17.8232 6.76269 17.8232 6.4698 17.5303C6.1769 17.2374 6.1769 16.7626 6.4698 16.4697L10.2117 12.7278L6.39212 7.43912C6.22721 7.21079 6.20413 6.90933 6.33235 6.65856Z',
  d7: 'M7 17L11.1935 12.8065M17 7L12.8065 11.1935M12.8065 11.1935L9.77778 7H7L11.1935 12.8065M12.8065 11.1935L17 17H14.2222L11.1935 12.8065',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM5.93936 17.0001L7.00002 18.0608L11.1012 13.9596L13.8388 17.7501H18.4668L13.7884 11.2723L18.0607 7.00011L17 5.93945L12.8989 10.0406L10.1613 6.25011H5.5332L10.2116 12.7279L5.93936 17.0001Z',
} as const;

export const IconNewTwitterRectangleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="new-twitter-rectangle-stroke-rounded IconNewTwitterRectangleStrokeRounded"
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

export const IconNewTwitterRectangleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="new-twitter-rectangle-duotone-rounded IconNewTwitterRectangleDuotoneRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconNewTwitterRectangleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="new-twitter-rectangle-twotone-rounded IconNewTwitterRectangleTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconNewTwitterRectangleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="new-twitter-rectangle-solid-rounded IconNewTwitterRectangleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNewTwitterRectangleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="new-twitter-rectangle-bulk-rounded IconNewTwitterRectangleBulkRounded"
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

export const IconNewTwitterRectangleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="new-twitter-rectangle-stroke-sharp IconNewTwitterRectangleStrokeSharp"
    >
      <rect 
        x="3" 
        y="3" 
        width="18" 
        height="18" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></rect>
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconNewTwitterRectangleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="new-twitter-rectangle-solid-sharp IconNewTwitterRectangleSolidSharp"
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

export const iconPackOfNewTwitterRectangle: TheIconSelfPack = {
  name: 'NewTwitterRectangle',
  StrokeRounded: IconNewTwitterRectangleStrokeRounded,
  DuotoneRounded: IconNewTwitterRectangleDuotoneRounded,
  TwotoneRounded: IconNewTwitterRectangleTwotoneRounded,
  SolidRounded: IconNewTwitterRectangleSolidRounded,
  BulkRounded: IconNewTwitterRectangleBulkRounded,
  StrokeSharp: IconNewTwitterRectangleStrokeSharp,
  SolidSharp: IconNewTwitterRectangleSolidSharp,
};