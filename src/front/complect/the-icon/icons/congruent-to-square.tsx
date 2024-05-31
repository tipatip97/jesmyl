import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 12.5001H17M7 16.0001H17M7 9.50007C8 7.63654 10.3333 7.54359 12 9.00005M17 8.49509C16 10.3586 13.6667 10.4516 12 8.99511',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M7 12.4991H17M7 15.9991H17M7 9.49909C8 7.63557 10.3333 7.54262 12 8.99907M17 8.49411C16 10.3576 13.6667 10.4506 12 8.99413',
  d4: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM7.88134 9.97636C8.21528 9.35437 8.7409 9.05342 9.33079 9.00575C9.94555 8.95607 10.6858 9.1833 11.3422 9.75661C11.3668 9.77809 11.3921 9.79815 11.4181 9.8168C12.4152 10.6564 13.6426 11.0858 14.8308 10.9898C16.0742 10.8893 17.2153 10.2125 17.8813 8.97188C18.1425 8.48548 17.9597 7.87958 17.473 7.61857C16.9864 7.35756 16.3802 7.54027 16.119 8.02668C15.7851 8.64867 15.2595 8.94961 14.6696 8.99729C14.0548 9.04697 13.3146 8.81973 12.6582 8.24643C12.6336 8.22494 12.6083 8.20488 12.5823 8.18623C11.5852 7.34666 10.3578 6.91722 9.1696 7.01325C7.92616 7.11374 6.78511 7.79055 6.11905 9.03115C5.8579 9.51755 6.04071 10.1235 6.52736 10.3845C7.014 10.6455 7.6202 10.4628 7.88134 9.97636ZM7.0002 12.0024C6.44791 12.0024 6.0002 12.4499 6.0002 13.0019C6.0002 13.5539 6.44791 14.0014 7.0002 14.0014H17.0002C17.5525 14.0014 18.0002 13.5539 18.0002 13.0019C18.0002 12.4499 17.5525 12.0024 17.0002 12.0024H7.0002ZM7.0002 15.001C6.44791 15.001 6.0002 15.4485 6.0002 16.0005C6.0002 16.5525 6.44791 17 7.0002 17H17.0002C17.5525 17 18.0002 16.5525 18.0002 16.0005C18.0002 15.4485 17.5525 15.001 17.0002 15.001H7.0002Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d6: 'M9.33079 9.00575C8.7409 9.05342 8.21528 9.35437 7.88134 9.97636C7.6202 10.4628 7.014 10.6455 6.52736 10.3845C6.04071 10.1235 5.8579 9.51755 6.11905 9.03115C6.78511 7.79055 7.92616 7.11374 9.1696 7.01325C10.3578 6.91722 11.5852 7.34666 12.5823 8.18623C12.6083 8.20488 12.6336 8.22494 12.6582 8.24643C13.3146 8.81973 14.0548 9.04697 14.6696 8.99729C15.2595 8.94961 15.7851 8.64867 16.119 8.02668C16.3802 7.54027 16.9864 7.35756 17.473 7.61857C17.9597 7.87958 18.1425 8.48548 17.8813 8.97188C17.2153 10.2125 16.0742 10.8893 14.8308 10.9898C13.6426 11.0858 12.4152 10.6564 11.4181 9.81681C11.3921 9.79815 11.3668 9.77809 11.3422 9.75661C10.6858 9.1833 9.94555 8.95607 9.33079 9.00575ZM6.0002 13.0019C6.0002 12.4499 6.44791 12.0024 7.0002 12.0024H17.0002C17.5525 12.0024 18.0002 12.4499 18.0002 13.0019C18.0002 13.5539 17.5525 14.0014 17.0002 14.0014H7.0002C6.44791 14.0014 6.0002 13.5539 6.0002 13.0019ZM6.0002 16.0005C6.0002 15.4485 6.44791 15.001 7.0002 15.001H17.0002C17.5525 15.001 18.0002 15.4485 18.0002 16.0005C18.0002 16.5525 17.5525 17 17.0002 17H7.0002C6.44791 17 6.0002 16.5525 6.0002 16.0005Z',
  d7: 'M3 21H21V3.00046L3 3V21Z',
  d8: 'M3.00002 2.25C2.8011 2.24999 2.61033 2.32901 2.46968 2.46966C2.32902 2.61032 2.25 2.80108 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3.00046C21.75 2.58626 21.4142 2.25047 21 2.25046L3.00002 2.25ZM7.88144 9.47492C8.21537 8.85262 8.74099 8.55152 9.33088 8.50382C9.94564 8.45411 10.6859 8.68146 11.3423 9.25506L11.3447 9.25225C12.3546 10.1337 13.6133 10.5873 14.8309 10.4888C16.0743 10.3883 17.2154 9.71116 17.8814 8.46994L16.1191 7.52426C15.7852 8.14656 15.2596 8.44766 14.6697 8.49536C14.0549 8.54506 13.3147 8.31772 12.6583 7.74412L12.6559 7.74692C11.646 6.86547 10.3873 6.41188 9.16969 6.51033C7.92625 6.61087 6.7852 7.28801 6.11914 8.52924L7.88144 9.47492ZM7.00029 14.0021H17.0003V12.0021H7.00029V14.0021ZM7.00029 17.5021H17.0003V15.5021H7.00029V17.5021Z',
} as const;

export const IconCongruentToSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="congruent-to-square-stroke-rounded IconCongruentToSquareStrokeRounded"
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

export const IconCongruentToSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="congruent-to-square-duotone-rounded IconCongruentToSquareDuotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCongruentToSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="congruent-to-square-twotone-rounded IconCongruentToSquareTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconCongruentToSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="congruent-to-square-solid-rounded IconCongruentToSquareSolidRounded"
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

export const IconCongruentToSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="congruent-to-square-bulk-rounded IconCongruentToSquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCongruentToSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="congruent-to-square-stroke-sharp IconCongruentToSquareStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCongruentToSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="congruent-to-square-solid-sharp IconCongruentToSquareSolidSharp"
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

export const iconPackOfCongruentToSquare: TheIconSelfPack = {
  name: 'CongruentToSquare',
  StrokeRounded: IconCongruentToSquareStrokeRounded,
  DuotoneRounded: IconCongruentToSquareDuotoneRounded,
  TwotoneRounded: IconCongruentToSquareTwotoneRounded,
  SolidRounded: IconCongruentToSquareSolidRounded,
  BulkRounded: IconCongruentToSquareBulkRounded,
  StrokeSharp: IconCongruentToSquareStrokeSharp,
  SolidSharp: IconCongruentToSquareSolidSharp,
};