import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15.0151 5C15.0151 3.58579 15.0151 2.87868 15.5267 2.43934C16.0383 2 16.8617 2 18.5084 2C20.1551 2 20.9785 2 21.49 2.43934C22.0016 2.87868 22.0016 3.58579 22.0016 5C22.0016 6.41421 22.0016 7.12132 21.49 7.56066C20.9785 8 20.1551 8 18.5084 8C16.8617 8 16.0383 8 15.5267 7.56066C15.0151 7.12132 15.0151 6.41421 15.0151 5Z',
  d2: 'M15.0151 19C15.0151 17.5858 15.0151 16.8787 15.5267 16.4393C16.0383 16 16.8617 16 18.5084 16C20.1551 16 20.9785 16 21.49 16.4393C22.0016 16.8787 22.0016 17.5858 22.0016 19C22.0016 20.4142 22.0016 21.1213 21.49 21.5607C20.9785 22 20.1551 22 18.5084 22C16.8617 22 16.0383 22 15.5267 21.5607C15.0151 21.1213 15.0151 20.4142 15.0151 19Z',
  d3: 'M8.54111 10.4822L5.52328 13.4945M8.54111 13.4945L5.52328 10.4821',
  d4: 'M7.04524 17.0318C9.81002 17.0318 12.0102 14.7714 12.0102 11.9936C12.0102 9.21583 9.76889 6.96399 7.00412 6.96399M7.04524 17.0318C4.28047 17.0318 1.99805 14.7714 1.99805 11.9936C1.99805 9.21583 4.23934 6.96399 7.00412 6.96399M7.04524 17.0318C6.9756 19.1617 8.53173 19.9392 9.63979 19.98H12.0102M7.00412 6.96399C6.93377 4.80392 8.51699 4.04432 9.63979 3.99658H12.0209',
  d5: 'M15 5C15 3.58579 15 2.87868 15.5126 2.43934C16.0251 2 16.8501 2 18.5 2C20.1499 2 20.9749 2 21.4874 2.43934C22 2.87868 22 3.58579 22 5C22 6.41421 22 7.12132 21.4874 7.56066C20.9749 8 20.1499 8 18.5 8C16.8501 8 16.0251 8 15.5126 7.56066C15 7.12132 15 6.41421 15 5Z',
  d6: 'M15 19C15 17.5858 15 16.8787 15.5126 16.4393C16.0251 16 16.8501 16 18.5 16C20.1499 16 20.9749 16 21.4874 16.4393C22 16.8787 22 17.5858 22 19C22 20.4142 22 21.1213 21.4874 21.5607C20.9749 22 20.1499 22 18.5 22C16.8501 22 16.0251 22 15.5126 21.5607C15 21.1213 15 20.4142 15 19Z',
  d7: 'M12 12C12 14.7614 9.76142 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C9.76142 7 12 9.23858 12 12Z',
  d8: 'M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25V4.75ZM12 20.75C12.4142 20.75 12.75 20.4142 12.75 20C12.75 19.5858 12.4142 19.25 12 19.25V20.75ZM7.75 17C7.75 16.5858 7.41421 16.25 7 16.25C6.58579 16.25 6.25 16.5858 6.25 17H7.75ZM6.25 7C6.25 7.41421 6.58579 7.75 7 7.75C7.41421 7.75 7.75 7.41421 7.75 7H6.25ZM12 3.25H10V4.75H12V3.25ZM10 20.75H12V19.25H10V20.75ZM7.75 7C7.75 6.23188 7.97121 5.68808 8.31022 5.33923C8.64574 4.99397 9.18368 4.75 10 4.75V3.25C8.87593 3.25 7.91387 3.59476 7.23449 4.29386C6.5586 4.98937 6.25 5.94558 6.25 7H7.75ZM10 19.25C9.23188 19.25 8.68808 19.0288 8.33923 18.6898C7.99397 18.3543 7.75 17.8163 7.75 17H6.25C6.25 18.1241 6.59476 19.0861 7.29386 19.7655C7.98937 20.4414 8.94558 20.75 10 20.75V19.25Z',
  d9: 'M11.25 12C11.25 14.3472 9.34721 16.25 7 16.25V17.75C10.1756 17.75 12.75 15.1756 12.75 12H11.25ZM7 16.25C4.65279 16.25 2.75 14.3472 2.75 12H1.25C1.25 15.1756 3.82436 17.75 7 17.75V16.25ZM2.75 12C2.75 9.65279 4.65279 7.75 7 7.75V6.25C3.82436 6.25 1.25 8.82436 1.25 12H2.75ZM7 7.75C9.34721 7.75 11.25 9.65279 11.25 12H12.75C12.75 8.82436 10.1756 6.25 7 6.25V7.75Z',
  d10: 'M9.03033 11.0303C9.32322 10.7374 9.32322 10.2626 9.03033 9.96967C8.73744 9.67678 8.26256 9.67678 7.96967 9.96967L9.03033 11.0303ZM4.96967 12.9697C4.67678 13.2626 4.67678 13.7374 4.96967 14.0303C5.26256 14.3232 5.73744 14.3232 6.03033 14.0303L4.96967 12.9697ZM7.96967 14.0303C8.26256 14.3232 8.73744 14.3232 9.03033 14.0303C9.32322 13.7374 9.32322 13.2626 9.03033 12.9697L7.96967 14.0303ZM6.03033 9.96967C5.73744 9.67678 5.26256 9.67678 4.96967 9.96967C4.67678 10.2626 4.67678 10.7374 4.96967 11.0303L6.03033 9.96967ZM7.96967 9.96967L6.46967 11.4697L7.53033 12.5303L9.03033 11.0303L7.96967 9.96967ZM6.46967 11.4697L4.96967 12.9697L6.03033 14.0303L7.53033 12.5303L6.46967 11.4697ZM9.03033 12.9697L7.53033 11.4697L6.46967 12.5303L7.96967 14.0303L9.03033 12.9697ZM7.53033 11.4697L6.03033 9.96967L4.96967 11.0303L6.46967 12.5303L7.53033 11.4697Z',
  d11: 'M9.03033 11.0303C9.32322 10.7374 9.32322 10.2626 9.03033 9.96967C8.73744 9.67678 8.26256 9.67678 7.96967 9.96967L9.03033 11.0303ZM4.96967 12.9697C4.67678 13.2626 4.67678 13.7374 4.96967 14.0303C5.26256 14.3232 5.73744 14.3232 6.03033 14.0303L4.96967 12.9697ZM7.96967 14.0303C8.26256 14.3232 8.73744 14.3232 9.03033 14.0303C9.32322 13.7374 9.32322 13.2626 9.03033 12.9697L7.96967 14.0303ZM6.03033 9.96967C5.73744 9.67678 5.26256 9.67678 4.96967 9.96967C4.67678 10.2626 4.67678 10.7374 4.96967 11.0303L6.03033 9.96967ZM11.25 12C11.25 14.3472 9.34721 16.25 7 16.25V17.75C10.1756 17.75 12.75 15.1756 12.75 12H11.25ZM7 16.25C4.65279 16.25 2.75 14.3472 2.75 12H1.25C1.25 15.1756 3.82436 17.75 7 17.75V16.25ZM2.75 12C2.75 9.65279 4.65279 7.75 7 7.75V6.25C3.82436 6.25 1.25 8.82436 1.25 12H2.75ZM7 7.75C9.34721 7.75 11.25 9.65279 11.25 12H12.75C12.75 8.82436 10.1756 6.25 7 6.25V7.75ZM7.96967 9.96967L6.46967 11.4697L7.53033 12.5303L9.03033 11.0303L7.96967 9.96967ZM6.46967 11.4697L4.96967 12.9697L6.03033 14.0303L7.53033 12.5303L6.46967 11.4697ZM9.03033 12.9697L7.53033 11.4697L6.46967 12.5303L7.96967 14.0303L9.03033 12.9697ZM7.53033 11.4697L6.03033 9.96967L4.96967 11.0303L6.46967 12.5303L7.53033 11.4697Z',
  d12: 'M8.4895 5.51346C8.20664 5.80453 8 6.27959 8 7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7C6 5.89786 6.32316 4.87292 7.0552 4.11963C7.79189 3.36155 8.82464 3 10 3H12C12.5523 3 13 3.44772 13 4C13 4.55228 12.5523 5 12 5H10C9.23497 5 8.76772 5.22717 8.4895 5.51346ZM7 16C7.55228 16 8 16.4477 8 17C8 17.765 8.22717 18.2323 8.51346 18.5105C8.80453 18.7934 9.27959 19 10 19H12C12.5523 19 13 19.4477 13 20C13 20.5523 12.5523 21 12 21H10C8.89786 21 7.87292 20.6768 7.11963 19.9448C6.36155 19.2081 6 18.1754 6 17C6 16.4477 6.44772 16 7 16Z',
  d13: 'M18.5449 1.25C19.3316 1.24998 19.9864 1.24996 20.5061 1.30985C21.0469 1.37217 21.5549 1.50935 21.9755 1.8699C22.4129 2.24474 22.5961 2.72301 22.6769 3.23787C22.7501 3.7048 22.7501 4.28503 22.75 4.94459L22.75 5L22.75 5.05541C22.7501 5.71497 22.7501 6.2952 22.6769 6.76213C22.5961 7.27699 22.4129 7.75526 21.9755 8.1301C21.5549 8.49065 21.0469 8.62783 20.5061 8.69015C19.9864 8.75004 19.3316 8.75002 18.5449 8.75H18.4551C17.6684 8.75002 17.0136 8.75004 16.4939 8.69015C15.9532 8.62783 15.4451 8.49065 15.0245 8.1301C14.5872 7.75526 14.4039 7.27699 14.3231 6.76213C14.2499 6.2952 14.2499 5.71497 14.25 5.05541L14.25 5.0554L14.25 5L14.25 4.9446L14.25 4.9446C14.2499 4.28504 14.2499 3.7048 14.3231 3.23787C14.4039 2.72301 14.5872 2.24474 15.0245 1.8699C15.4451 1.50935 15.9532 1.37217 16.4939 1.30985C17.0136 1.24996 17.6684 1.24998 18.4551 1.25H18.4551H18.5449H18.5449Z',
  d14: 'M18.5449 15.25C19.3316 15.25 19.9864 15.25 20.5061 15.3099C21.0469 15.3722 21.5549 15.5094 21.9755 15.8699C22.4129 16.2447 22.5961 16.723 22.6769 17.2379C22.7501 17.7048 22.7501 18.285 22.75 18.9446L22.75 19L22.75 19.0554C22.7501 19.715 22.7501 20.2952 22.6769 20.7621C22.5961 21.277 22.4129 21.7553 21.9755 22.1301C21.5549 22.4907 21.0469 22.6278 20.5061 22.6902C19.9864 22.75 19.3316 22.75 18.5449 22.75H18.4551C17.6684 22.75 17.0136 22.75 16.4939 22.6902C15.9532 22.6278 15.4451 22.4907 15.0245 22.1301C14.5872 21.7553 14.4039 21.277 14.3231 20.7621C14.2499 20.2952 14.2499 19.715 14.25 19.0554L14.25 19.0554L14.25 19L14.25 18.9446L14.25 18.9446C14.2499 18.285 14.2499 17.7048 14.3231 17.2379C14.4039 16.723 14.5872 16.2447 15.0245 15.8699C15.4451 15.5094 15.9532 15.3722 16.4939 15.3099C17.0136 15.25 17.6684 15.25 18.4551 15.25H18.4551H18.5449H18.5449Z',
  d15: 'M7 6.25C3.82436 6.25 1.25 8.82436 1.25 12C1.25 15.1756 3.82436 17.75 7 17.75C10.1756 17.75 12.75 15.1756 12.75 12C12.75 8.82436 10.1756 6.25 7 6.25ZM6.03033 9.96967C5.73744 9.67678 5.26256 9.67678 4.96967 9.96967C4.67678 10.2626 4.67678 10.7374 4.96967 11.0303L5.93934 12L4.96967 12.9697C4.67678 13.2626 4.67678 13.7374 4.96967 14.0303C5.26256 14.3232 5.73744 14.3232 6.03033 14.0303L7 13.0607L7.96967 14.0303C8.26256 14.3232 8.73744 14.3232 9.03033 14.0303C9.32322 13.7374 9.32322 13.2626 9.03033 12.9697L8.06066 12L9.03033 11.0303C9.32322 10.7374 9.32322 10.2626 9.03033 9.96967C8.73744 9.67678 8.26256 9.67678 7.96967 9.96967L7 10.9393L6.03033 9.96967Z',
  d16: 'M1.25 12C1.25 8.82436 3.82436 6.25 7 6.25C10.1756 6.25 12.75 8.82436 12.75 12C12.75 15.1756 10.1756 17.75 7 17.75C3.82436 17.75 1.25 15.1756 1.25 12Z',
  d17: 'M4.96967 9.96967C5.26256 9.67678 5.73744 9.67678 6.03033 9.96967L7 10.9393L7.96967 9.96967C8.26256 9.67678 8.73744 9.67678 9.03033 9.96967C9.32322 10.2626 9.32322 10.7374 9.03033 11.0303L8.06066 12L9.03033 12.9697C9.32322 13.2626 9.32322 13.7374 9.03033 14.0303C8.73744 14.3232 8.26256 14.3232 7.96967 14.0303L7 13.0607L6.03033 14.0303C5.73744 14.3232 5.26256 14.3232 4.96967 14.0303C4.67678 13.7374 4.67678 13.2626 4.96967 12.9697L5.93934 12L4.96967 11.0303C4.67678 10.7374 4.67678 10.2626 4.96967 9.96967Z',
  d18: 'M8.06583 6.34869C8.14857 5.97823 8.30215 5.70571 8.48898 5.51346C8.76719 5.22717 9.23444 5 9.99947 5H11.9995C12.5518 5 12.9995 4.55228 12.9995 4C12.9995 3.44772 12.5518 3 11.9995 3H9.99947C8.82412 3 7.79137 3.36155 7.05468 4.11963C6.47366 4.71751 6.15021 5.48653 6.04149 6.32944C6.35304 6.2772 6.67308 6.25 6.99947 6.25C7.36383 6.25 7.72028 6.28389 8.06583 6.34869Z',
  d19: 'M6.04102 17.6705C6.35271 17.7228 6.67291 17.75 6.99947 17.75C7.36349 17.75 7.71961 17.7162 8.06485 17.6515C8.15232 18.047 8.31907 18.3221 8.51294 18.5105C8.80401 18.7934 9.27907 19 9.99947 19H11.9995C12.5518 19 12.9995 19.4477 12.9995 20C12.9995 20.5523 12.5518 21 11.9995 21H9.99947C8.89733 21 7.87239 20.6768 7.1191 19.9448C6.50892 19.3518 6.15564 18.567 6.04102 17.6705Z',
  d20: 'M22 22V16H15V22H22Z',
  d21: 'M22 8V2H15V8H22Z',
  d22: 'M8.5 10.5L7 12M7 12L5.5 13.5M7 12L8.5 13.5M7 12L5.5 10.5M12 12C12 14.7614 9.76142 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C9.76142 7 12 9.23858 12 12Z',
  d23: 'M6.99414 6.64355V4.10684C6.99414 4.05161 7.03891 4.00684 7.09414 4.00684H12.0269M6.99951 17.3535V19.8902C6.99951 19.9455 7.04428 19.9902 7.09951 19.9902H12.0322',
  d24: 'M6.0019 3.99937C6.00225 3.44733 6.44986 3 7.0019 3H12V5H8.00127L8 7.00063L6 6.99937L6.0019 3.99937ZM8.00128 19L8 16.9994L6 17.0006L6.00192 20.0006C6.00227 20.5527 6.44988 21 7.00192 21H12V19H8.00128Z',
  d25: 'M14.25 16C14.25 15.5858 14.5858 15.25 15 15.25H22C22.4142 15.25 22.75 15.5858 22.75 16V22C22.75 22.4142 22.4142 22.75 22 22.75H15C14.5858 22.75 14.25 22.4142 14.25 22V16Z',
  d26: 'M14.25 2C14.25 1.58579 14.5858 1.25 15 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V8C22.75 8.41421 22.4142 8.75 22 8.75H15C14.5858 8.75 14.25 8.41421 14.25 8V2Z',
  d27: 'M7 6.25C3.82436 6.25 1.25 8.82436 1.25 12C1.25 15.1756 3.82436 17.75 7 17.75C10.1756 17.75 12.75 15.1756 12.75 12C12.75 8.82436 10.1756 6.25 7 6.25ZM9.70718 10.7072L8.41429 12.0001L9.70718 13.293L8.29297 14.7072L7.00008 13.4143L5.70718 14.7072L4.29297 13.293L5.58586 12.0001L4.29297 10.7072L5.70718 9.29297L7.00008 10.5859L8.29297 9.29297L9.70718 10.7072Z',
};

export const IconStructureFailStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-fail-stroke-rounded IconStructureFailStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconStructureFailDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-fail-duotone-rounded IconStructureFailDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureFailTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-fail-twotone-rounded IconStructureFailTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureFailSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-fail-solid-rounded IconStructureFailSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureFailBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-fail-bulk-rounded IconStructureFailBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureFailStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-fail-stroke-sharp IconStructureFailStrokeSharp"
    >
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureFailSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-fail-solid-sharp IconStructureFailSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStructureFail: TheIconSelfPack = {
  name: 'StructureFail',
  StrokeRounded: IconStructureFailStrokeRounded,
  DuotoneRounded: IconStructureFailDuotoneRounded,
  TwotoneRounded: IconStructureFailTwotoneRounded,
  SolidRounded: IconStructureFailSolidRounded,
  BulkRounded: IconStructureFailBulkRounded,
  StrokeSharp: IconStructureFailStrokeSharp,
  SolidSharp: IconStructureFailSolidSharp,
};