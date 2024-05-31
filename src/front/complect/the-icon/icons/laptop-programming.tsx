import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 14.5V6.5C20 4.61438 20 3.67157 19.4142 3.08579C18.8284 2.5 17.8856 2.5 16 2.5H8C6.11438 2.5 5.17157 2.5 4.58579 3.08579C4 3.67157 4 4.61438 4 6.5V14.5',
  d2: 'M3.49762 15.5154L4.01953 14.5H19.9518L20.5023 15.5154C21.9452 18.177 22.3046 19.5077 21.7561 20.5039C21.2077 21.5 19.7536 21.5 16.8454 21.5L7.15462 21.5C4.24642 21.5 2.79231 21.5 2.24387 20.5039C1.69543 19.5077 2.05474 18.177 3.49762 15.5154Z',
  d3: 'M15.5 7L16.4199 7.79289C16.8066 8.12623 17 8.29289 17 8.5C17 8.70711 16.8066 8.87377 16.4199 9.20711L15.5 10',
  d4: 'M8.5 7L7.58009 7.79289C7.19337 8.12623 7 8.29289 7 8.5C7 8.70711 7.19336 8.87377 7.58009 9.20711L8.5 10',
  d5: 'M13 6L11 11',
  d6: 'M8.04748 1.75C7.18562 1.74995 6.44302 1.74991 5.84835 1.82921C5.21104 1.9142 4.60015 2.10584 4.10464 2.5973C3.60914 3.08876 3.41591 3.69467 3.33023 4.32678C3.25028 4.91659 3.25032 5.65313 3.25037 6.50795L3.25037 14.2857C3.25037 14.3291 3.24215 14.3723 3.22234 14.4109L2.83458 15.1653C2.11058 16.5014 1.62304 17.5653 1.39756 18.4487C1.16552 19.3577 1.19287 20.1495 1.58712 20.8656C2.02786 21.6661 2.81533 21.9782 3.69862 22.1165C4.55226 22.2501 5.69063 22.25 7.08712 22.25H16.9134C18.3099 22.25 19.4483 22.2501 20.3019 22.1165C21.1852 21.9782 21.9727 21.6661 22.4134 20.8656C22.8077 20.1495 22.835 19.3576 22.6029 18.4486C22.377 17.5637 21.8881 16.4975 21.1619 15.158L20.7941 14.4796C20.7879 14.4681 20.7847 14.4623 20.783 14.4588C20.7583 14.4104 20.7519 14.385 20.7505 14.3307C20.7504 14.3268 20.7504 14.3131 20.7504 14.2857L20.7504 6.50798C20.7504 5.65314 20.7505 4.9166 20.6705 4.32678C20.5848 3.69467 20.3916 3.08876 19.8961 2.5973C19.4006 2.10584 18.7897 1.9142 18.1524 1.82921C17.5577 1.74991 16.8151 1.74995 15.9533 1.75H8.04748ZM18.2059 13.75C18.4888 13.75 18.6302 13.75 18.7181 13.6621C18.8059 13.5743 18.8059 13.4328 18.8059 13.15V6.57143C18.8059 5.63503 18.8039 5.02974 18.7434 4.58375C18.6867 4.16551 18.5952 4.03441 18.5212 3.96101C18.4472 3.8876 18.315 3.79682 17.8933 3.74058C17.4436 3.68062 16.8334 3.67858 15.8893 3.67858H8.11148C7.16737 3.67858 6.5571 3.68062 6.10744 3.74058C5.68575 3.79682 5.55358 3.8876 5.47957 3.96101C5.40556 4.03441 5.31403 4.16551 5.25733 4.58375C5.19688 5.02974 5.19481 5.63503 5.19481 6.57143V13.15C5.19481 13.4328 5.19481 13.5743 5.28268 13.6621C5.37055 13.75 5.51197 13.75 5.79481 13.75H18.2059Z',
  d7: 'M14.7427 6.56198C14.3821 6.98032 14.4289 7.61175 14.8472 7.97232L15.7087 8.71486L14.8472 9.4574C14.4289 9.81797 14.3821 10.4494 14.7427 10.8677C15.1032 11.2861 15.7347 11.3329 16.153 10.9723L17.0729 10.1794L17.1048 10.1519C17.2693 10.0103 17.461 9.84531 17.6039 9.6839C17.7693 9.49699 18.0001 9.17374 18.0001 8.71486C18.0001 8.25598 17.7693 7.93273 17.6039 7.74583C17.461 7.58441 17.2693 7.41937 17.1048 7.27778L17.0729 7.25029L16.153 6.4574C15.7347 6.09682 15.1032 6.14365 14.7427 6.56198Z',
  d8: 'M9.25758 6.56198C9.61816 6.98032 9.57134 7.61175 9.153 7.97232L8.29152 8.71486L9.153 9.4574C9.57134 9.81797 9.61816 10.4494 9.25758 10.8677C8.89701 11.2861 8.26558 11.3329 7.84724 10.9723L6.92734 10.1794L6.89542 10.1519C6.73095 10.0103 6.53925 9.84531 6.39636 9.6839C6.23092 9.49699 6.00012 9.17374 6.00012 8.71486C6.00012 8.25598 6.23092 7.93273 6.39636 7.74583C6.53925 7.58441 6.73095 7.41937 6.89542 7.27778L6.92734 7.25029L7.84724 6.4574C8.26558 6.09682 8.89701 6.14365 9.25758 6.56198Z',
  d9: 'M13.3718 5.28663C13.8846 5.49175 14.134 6.07372 13.9289 6.5865L11.9289 11.5865C11.7238 12.0993 11.1418 12.3487 10.629 12.1436C10.1162 11.9385 9.8668 11.3565 10.0719 10.8437L12.0719 5.84372C12.277 5.33094 12.859 5.08152 13.3718 5.28663Z',
  d10: 'M20.0002 14.5V2.5H4.00024V14.5',
  d11: 'M2.00024 21.5L4.01935 14.5H19.9516L21.9998 21.5H2.00024Z',
  d12: 'M14.9954 6.49832L16.9954 8.49832L14.9954 10.4983M9.00024 6.5L7.00024 8.5L9.00024 10.5M13.0002 6L10.9955 10.9966',
  d13: 'M20.7502 14.5587V1.75H3.25024V14.4603L1.27963 21.2921C1.21431 21.5186 1.25923 21.7626 1.40092 21.9509C1.54261 22.1392 1.76457 22.25 2.00025 22.25H21.9998C22.236 22.25 22.4584 22.1387 22.6 21.9497C22.7417 21.7607 22.786 21.5161 22.7197 21.2894L20.7502 14.5587ZM18.8058 13.75V3.71154L5.19469 3.71154V13.75H18.8058Z',
  d14: 'M10.3039 10.7217L12.3039 5.72168L13.6966 6.27877L11.6966 11.2788L10.3039 10.7217ZM15.9396 8.50022L14.4699 7.03055L15.5306 5.96989L18.0609 8.50022L15.5306 11.0306L14.4699 9.96989L15.9396 8.50022ZM8.46991 5.96989L9.53057 7.03055L8.0609 8.50022L9.53057 9.96989L8.46991 11.0306L5.93958 8.50022L8.46991 5.96989Z',
} as const;

export const IconLaptopProgrammingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-programming-stroke-rounded IconLaptopProgrammingStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopProgrammingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-programming-duotone-rounded IconLaptopProgrammingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopProgrammingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-programming-twotone-rounded IconLaptopProgrammingTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopProgrammingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-programming-solid-rounded IconLaptopProgrammingSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconLaptopProgrammingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-programming-bulk-rounded IconLaptopProgrammingBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconLaptopProgrammingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-programming-stroke-sharp IconLaptopProgrammingStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopProgrammingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-programming-solid-sharp IconLaptopProgrammingSolidSharp"
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

export const iconPackOfLaptopProgramming: TheIconSelfPack = {
  name: 'LaptopProgramming',
  StrokeRounded: IconLaptopProgrammingStrokeRounded,
  DuotoneRounded: IconLaptopProgrammingDuotoneRounded,
  TwotoneRounded: IconLaptopProgrammingTwotoneRounded,
  SolidRounded: IconLaptopProgrammingSolidRounded,
  BulkRounded: IconLaptopProgrammingBulkRounded,
  StrokeSharp: IconLaptopProgrammingStrokeSharp,
  SolidSharp: IconLaptopProgrammingSolidSharp,
};