import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.1932 12.999C21.8501 15.8688 20.8669 19.5383 17.9971 21.1952C15.1273 22.8521 11.4578 21.8688 9.80094 18.999M20.1932 12.999C18.5364 10.1293 14.8669 9.14604 11.9971 10.8029C9.12734 12.4598 8.14409 16.1293 9.80094 18.999M20.1932 12.999L9.80094 18.999',
  d2: 'M10.0428 5.54203L15.1278 2.5374C17 1.43112 19.394 2.08763 20.4749 4.00376C21.3433 5.54315 21.1 7.4272 20 8.6822M10.0428 5.54203L4.95785 8.54667C3.08563 9.65294 2.44415 12.1031 3.52508 14.0192C4.17499 15.1713 5.29956 15.868 6.5 16M10.0428 5.54203L11.5 8',
  d3: 'M17.9969 21.1971C20.8667 19.5403 21.8499 15.8707 20.1931 13.001L9.80078 19.001C11.4576 21.8707 15.1272 22.854 17.9969 21.1971Z',
  d4: 'M7.58272 6.99312L4.95785 8.54413C3.08562 9.6504 2.44415 12.1005 3.52508 14.0167C4.17499 15.1687 5.29956 15.8654 6.5 15.9975L9.17607 14.5469C9.55671 13.0243 10.5306 11.652 11.9971 10.8053C12.3136 10.6226 12.6397 10.472 12.9719 10.3525L11.5 7.99746C10.6949 6.63939 8.94196 6.18996 7.58272 6.99312Z',
  d5: 'M20.1932 13.001C21.8501 15.8708 20.8669 19.5403 17.9971 21.1972C15.1273 22.854 11.4578 21.8708 9.80094 19.001M20.1932 13.001C18.5364 10.1312 14.8669 9.148 11.9971 10.8048C9.12734 12.4617 8.14409 16.1312 9.80094 19.001M20.1932 13.001L9.80094 19.001',
  d6: 'M14.5534 1.90584C16.8585 0.552612 19.7953 1.36512 21.1121 3.68436C22.1669 5.54206 21.8722 7.81297 20.5331 9.3309C20.1782 9.73323 19.5621 9.7735 19.1572 9.42085C18.7523 9.0682 18.7117 8.45617 19.0667 8.05384C19.8726 7.14032 20.0523 5.76102 19.4137 4.63628C18.6227 3.24318 16.8912 2.78374 15.5454 3.57383L11.4282 5.99094L12.351 7.53751C12.6257 7.99772 12.4728 8.59197 12.0096 8.8648C11.5464 9.13763 10.9483 8.98574 10.6737 8.52553L9.74938 6.97654L5.62974 9.39508C4.27021 10.1932 3.7878 11.9807 4.58598 13.3864C5.06201 14.2248 5.87851 14.7237 6.74391 14.8183C7.27917 14.8768 7.66536 15.3553 7.6065 15.8871C7.54764 16.4189 7.06601 16.8026 6.53076 16.7441C5.0553 16.5829 3.67888 15.732 2.88758 14.3384C1.57794 12.0318 2.34641 9.07227 4.63774 7.72709L14.5534 1.90584Z',
  d7: 'M19.8518 12.3318C20.127 12.1729 20.2647 12.0934 20.287 11.9521C20.3094 11.8107 20.2093 11.6996 20.009 11.4773C17.9218 9.1604 14.4315 8.53361 11.6224 10.1555C8.8133 11.7773 7.61096 15.1134 8.57386 18.0794C8.66624 18.364 8.71243 18.5062 8.84603 18.5576C8.97963 18.6089 9.11725 18.5294 9.39247 18.3705L19.8518 12.3318ZM20.602 13.6307C20.8772 13.4718 21.0148 13.3924 21.1484 13.4437C21.282 13.495 21.3282 13.6372 21.4206 13.9217C22.3842 16.888 21.1819 20.2248 18.3724 21.8468C15.5629 23.4688 12.0721 22.8417 9.985 20.5241C9.78483 20.3018 9.68474 20.1906 9.70712 20.0493C9.7295 19.908 9.86709 19.8285 10.1423 19.6697L20.602 13.6307Z',
  d8: 'M19.8519 12.3321C20.1271 12.1732 20.2647 12.0938 20.2871 11.9524C20.3095 11.8111 20.2094 11.6999 20.0092 11.4777C17.922 9.16046 14.4315 8.53353 11.6222 10.1555C8.81297 11.7774 7.61065 15.1137 8.57382 18.0799C8.66621 18.3644 8.71241 18.5067 8.84601 18.558C8.9796 18.6093 9.11721 18.5298 9.39242 18.3709L19.8519 12.3321Z',
  d9: 'M20.6029 13.6322C20.8781 13.4733 21.0157 13.3939 21.1493 13.4452C21.2829 13.4965 21.3291 13.6387 21.4215 13.9233C22.3848 16.8895 21.1825 20.2259 18.3732 21.8479C15.5639 23.4699 12.0732 22.8429 9.98608 20.5255C9.78588 20.3032 9.68579 20.1921 9.70816 20.0507C9.73054 19.9094 9.86814 19.83 10.1433 19.6711L20.6029 13.6322Z',
  d10: 'M14.5534 1.90511C16.8585 0.551371 19.7953 1.36418 21.1121 3.68431C22.1669 5.54272 21.8722 7.81449 20.5331 9.333L19.0667 8.05545C19.8726 7.14159 20.0523 5.76176 19.4137 4.63659C18.6227 3.24296 16.8912 2.78335 15.5454 3.57374L11.4282 5.99177L12.351 7.53893L10.6737 8.52732L9.74938 6.97774L5.62974 9.3972C4.27021 10.1956 3.7878 11.9838 4.58598 13.3901C5.06201 14.2288 5.87851 14.7279 6.74391 14.8225L6.53076 16.749C5.0553 16.5878 3.67888 15.7365 2.88758 14.3424C1.57794 12.0349 2.34641 9.07426 4.63774 7.72857L14.5534 1.90511Z',
  d11: 'M20.4321 11.9951C18.4215 9.25895 14.6311 8.41634 11.6222 10.1535C8.61336 11.8907 7.4479 15.5945 8.81213 18.7038L20.4321 11.9951Z',
  d12: 'M21.1821 13.2941L9.56208 20.0029C11.5726 22.7393 15.3632 23.5821 18.3722 21.8448C21.3812 20.1076 22.5467 16.4035 21.1821 13.2941Z',
} as const;

export const IconMedicine02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medicine-02-stroke-rounded IconMedicine02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMedicine02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medicine-02-duotone-rounded IconMedicine02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconMedicine02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medicine-02-twotone-rounded IconMedicine02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMedicine02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medicine-02-solid-rounded IconMedicine02SolidRounded"
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

export const IconMedicine02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medicine-02-bulk-rounded IconMedicine02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedicine02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medicine-02-stroke-sharp IconMedicine02StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconMedicine02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medicine-02-solid-sharp IconMedicine02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMedicine02: TheIconSelfPack = {
  name: 'Medicine02',
  StrokeRounded: IconMedicine02StrokeRounded,
  DuotoneRounded: IconMedicine02DuotoneRounded,
  TwotoneRounded: IconMedicine02TwotoneRounded,
  SolidRounded: IconMedicine02SolidRounded,
  BulkRounded: IconMedicine02BulkRounded,
  StrokeSharp: IconMedicine02StrokeSharp,
  SolidSharp: IconMedicine02SolidSharp,
};