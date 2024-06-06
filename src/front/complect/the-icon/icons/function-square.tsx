import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 15.8889C8.15093 16.4202 8.45526 17 9.24988 17C10.6249 17 10.9687 15.8889 12 12C13.0313 8.11111 13.3751 7 14.7501 7C15.5447 7 15.8491 7.57977 16 8.11111M10.3333 10.6111H14.7501',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM14.7504 6C14.2647 6 13.7727 6.10078 13.322 6.40835C12.8879 6.7045 12.5883 7.12759 12.3542 7.58998C12.0972 8.09766 11.8649 8.76982 11.6179 9.61111H10.3336C9.78131 9.61111 9.33359 10.0588 9.33359 10.6111C9.33359 11.1634 9.78131 11.6111 10.3336 11.6111H11.0688L11.0337 11.7437C10.5052 13.7364 10.1893 14.8599 9.86193 15.5066C9.70929 15.8082 9.60069 15.9059 9.55129 15.9396C9.51862 15.9619 9.45195 16 9.25014 16C9.17595 16 9.14667 15.9872 9.14302 15.9856L9.14294 15.9855C9.13943 15.984 9.13313 15.9812 9.12005 15.967C9.08088 15.9244 9.02081 15.822 8.9622 15.6156C8.81129 15.0844 8.25828 14.776 7.72701 14.9269C7.19575 15.0779 6.8874 15.6309 7.03831 16.1621C7.13063 16.4871 7.2982 16.9403 7.64758 17.3204C8.03107 17.7376 8.57277 18 9.25014 18C9.73586 18 10.2278 17.8992 10.6786 17.5916C11.1126 17.2955 11.4122 16.8724 11.6463 16.41C12.0923 15.529 12.464 14.1525 12.9668 12.2563C13.0268 12.0303 13.084 11.8154 13.1388 11.6111H14.7504C15.3027 11.6111 15.7504 11.1634 15.7504 10.6111C15.7504 10.0588 15.3027 9.61111 14.7504 9.61111H13.7087C13.8615 9.13156 13.999 8.76911 14.1386 8.49335C14.2912 8.19185 14.3998 8.09411 14.4492 8.0604C14.4819 8.03811 14.5486 8 14.7504 8C14.8246 8 14.8538 8.01285 14.8575 8.01445L14.8576 8.01448C14.8611 8.01603 14.8674 8.01879 14.8805 8.03303C14.9196 8.07565 14.9797 8.17802 15.0383 8.38435C15.1892 8.91562 15.7422 9.22396 16.2735 9.07306C16.8048 8.92215 17.1131 8.36914 16.9622 7.83787C16.8699 7.51286 16.7023 7.05968 16.3529 6.67957C15.9694 6.26236 15.4277 6 14.7504 6Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M13.322 6.40835C13.7727 6.10078 14.2647 6 14.7504 6C15.4277 6 15.9694 6.26236 16.3529 6.67957C16.7023 7.05968 16.8699 7.51286 16.9622 7.83787C17.1131 8.36914 16.8048 8.92215 16.2735 9.07306C15.7422 9.22396 15.1892 8.91562 15.0383 8.38435C14.9797 8.17802 14.9196 8.07565 14.8805 8.03303C14.8674 8.01879 14.8611 8.01603 14.8576 8.01448L14.8575 8.01445C14.8538 8.01285 14.8246 8 14.7504 8C14.5486 8 14.4819 8.03811 14.4492 8.0604C14.3998 8.09411 14.2912 8.19185 14.1386 8.49335C13.999 8.76911 13.8615 9.13156 13.7087 9.61111H14.7504C15.3027 9.61111 15.7504 10.0588 15.7504 10.6111C15.7504 11.1634 15.3027 11.6111 14.7504 11.6111H13.1388C13.084 11.8154 13.0268 12.0303 12.9668 12.2563C12.464 14.1525 12.0923 15.529 11.6463 16.41C11.4122 16.8724 11.1126 17.2955 10.6786 17.5916C10.2278 17.8992 9.73586 18 9.25014 18C8.57277 18 8.03107 17.7376 7.64758 17.3204C7.2982 16.9403 7.13063 16.4871 7.03831 16.1621C6.8874 15.6309 7.19575 15.0779 7.72701 14.9269C8.25828 14.776 8.81129 15.0844 8.9622 15.6156C9.02081 15.822 9.08088 15.9244 9.12005 15.967C9.13313 15.9812 9.13943 15.984 9.14294 15.9855L9.14302 15.9856C9.14667 15.9872 9.17595 16 9.25014 16C9.45195 16 9.51862 15.9619 9.55129 15.9396C9.60069 15.9059 9.70929 15.8082 9.86193 15.5066C10.1893 14.8599 10.5052 13.7364 11.0337 11.7437C11.0455 11.6992 11.0572 11.655 11.0688 11.6111H10.3336C9.78131 11.6111 9.33359 11.1634 9.33359 10.6111C9.33359 10.0588 9.78131 9.61111 10.3336 9.61111H11.6179C11.8649 8.76982 12.0972 8.09766 12.3542 7.58998C12.5883 7.12759 12.8879 6.7045 13.322 6.40835Z',
  d6: 'M3 21H21V3.00046L3 3V21Z',
  d7: 'M3.00002 2.25C2.8011 2.24999 2.61033 2.32901 2.46968 2.46966C2.32902 2.61032 2.25 2.80108 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3.00046C21.75 2.58626 21.4142 2.25047 21 2.25046L3.00002 2.25ZM14.7492 6C14.2635 6 13.7715 6.10078 13.3208 6.40835C12.8867 6.7045 12.5871 7.12759 12.353 7.58998C12.096 8.09766 11.8637 8.76982 11.6167 9.61111H10.3324V11.6111H11.0676L11.0325 11.7437C10.504 13.7364 10.1881 14.8599 9.86073 15.5066C9.70809 15.8082 9.59948 15.9059 9.55008 15.9396C9.51742 15.9619 9.45075 16 9.24894 16C9.17475 16 9.14547 15.9872 9.14182 15.9856C9.13831 15.984 9.13193 15.9812 9.11884 15.967C9.07967 15.9244 9.01961 15.822 8.961 15.6156L7.03711 16.1621C7.12943 16.4871 7.297 16.9403 7.64638 17.3204C8.02987 17.7376 8.57156 18 9.24894 18C9.73466 18 10.2266 17.8992 10.6774 17.5916C11.1114 17.2955 11.411 16.8724 11.6451 16.41C12.0911 15.529 12.4628 14.1525 12.9656 12.2563C13.0256 12.0303 13.0828 11.8154 13.1376 11.6111H14.7492V9.61111H13.7075C13.8603 9.13156 13.9978 8.76911 14.1374 8.49335C14.29 8.19185 14.3986 8.09411 14.448 8.0604C14.4807 8.03811 14.5474 8 14.7492 8C14.8234 8 14.8526 8.01285 14.8563 8.01445C14.8598 8.01599 14.8662 8.01879 14.8793 8.03303C14.9184 8.07565 14.9785 8.17802 15.0371 8.38435L16.961 7.83787C16.8687 7.51286 16.7011 7.05968 16.3517 6.67957C15.9682 6.26236 15.4265 6 14.7492 6Z',
};

export const IconFunctionSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-square-stroke-rounded IconFunctionSquareStrokeRounded"
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

export const IconFunctionSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-square-duotone-rounded IconFunctionSquareDuotoneRounded"
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

export const IconFunctionSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-square-twotone-rounded IconFunctionSquareTwotoneRounded"
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

export const IconFunctionSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-square-solid-rounded IconFunctionSquareSolidRounded"
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

export const IconFunctionSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-square-bulk-rounded IconFunctionSquareBulkRounded"
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

export const IconFunctionSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-square-stroke-sharp IconFunctionSquareStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFunctionSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-square-solid-sharp IconFunctionSquareSolidSharp"
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

export const iconPackOfFunctionSquare: TheIconSelfPack = {
  name: 'FunctionSquare',
  StrokeRounded: IconFunctionSquareStrokeRounded,
  DuotoneRounded: IconFunctionSquareDuotoneRounded,
  TwotoneRounded: IconFunctionSquareTwotoneRounded,
  SolidRounded: IconFunctionSquareSolidRounded,
  BulkRounded: IconFunctionSquareBulkRounded,
  StrokeSharp: IconFunctionSquareStrokeSharp,
  SolidSharp: IconFunctionSquareSolidSharp,
};