import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.5766 13.8983L15.9282 11.7497C16.0058 11.2757 16.0446 11.0386 15.9175 11.0039C15.7905 10.9692 15.6021 11.1654 15.2254 11.5577L10 17',
  d2: 'M8.42338 10.1017L8.07175 12.2503C7.99417 12.7243 7.95538 12.9614 8.08246 12.9961C8.20954 13.0308 8.39789 12.8346 8.77459 12.4423L14 7',
  d3: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d4: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM14.2996 6.87201C14.0067 6.57912 13.5318 6.57912 13.2389 6.87201L9.11343 10.9975L8.22951 10.1136C8.12342 10.0073 7.98448 9.93183 7.8252 9.90468C7.41687 9.83508 7.02944 10.1097 6.95984 10.518L6.5702 12.8039C6.5341 13.015 6.49448 13.2468 6.48906 13.4291C6.48626 13.5232 6.48738 13.6961 6.55801 13.8758C6.64772 14.1041 6.84164 14.3167 7.13781 14.3944C7.39822 14.4627 7.6212 14.396 7.75729 14.334C7.88909 14.274 7.99888 14.1919 8.07769 14.1275C8.2271 14.0053 8.4036 13.8287 8.5871 13.6452L8.58717 13.6451L8.58718 13.6451L14.2996 7.93267C14.5925 7.63978 14.5925 7.16491 14.2996 6.87201ZM16.1778 14.0924C16.5861 14.162 16.9736 13.8874 17.0432 13.4791L17.4328 11.1932C17.4689 10.9821 17.5085 10.7503 17.514 10.568C17.5168 10.4739 17.5156 10.301 17.445 10.1213C17.3553 9.89296 17.1614 9.68037 16.8652 9.60269C16.6048 9.53439 16.3818 9.60108 16.2457 9.66304C16.1139 9.72305 16.0041 9.80514 15.9253 9.8696C15.7759 9.9918 15.5994 10.1684 15.4159 10.3519L9.70341 16.0644C9.41052 16.3573 9.41052 16.8322 9.70341 17.1251C9.99631 17.418 10.4712 17.418 10.7641 17.1251L14.8896 12.9996L15.7734 13.8834C15.8795 13.9897 16.0185 14.0652 16.1778 14.0924Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d6: 'M13.2389 6.87201C13.5318 6.57912 14.0067 6.57912 14.2996 6.87201C14.5925 7.16491 14.5925 7.63978 14.2996 7.93267L8.58718 13.6451C8.40365 13.8287 8.22712 14.0053 8.07769 14.1275C7.99888 14.1919 7.88909 14.274 7.75729 14.334C7.6212 14.396 7.39822 14.4627 7.13782 14.3944C6.84164 14.3167 6.64772 14.1041 6.55801 13.8758C6.48738 13.6961 6.48625 13.5232 6.48906 13.4291C6.49448 13.2468 6.5341 13.015 6.5702 12.8039L6.95984 10.518C7.02944 10.1097 7.41687 9.83508 7.8252 9.90468C7.98448 9.93183 8.12342 10.0073 8.22951 10.1136L9.11343 10.9975L13.2389 6.87201Z',
  d7: 'M17.0432 13.4791C16.9736 13.8874 16.5861 14.162 16.1778 14.0924C16.0185 14.0652 15.8795 13.9897 15.7734 13.8834L14.8896 12.9996L10.7641 17.1251C10.4712 17.418 9.9963 17.418 9.70341 17.1251C9.41052 16.8322 9.41052 16.3573 9.70341 16.0644L15.4159 10.3519C15.5994 10.1684 15.7759 9.9918 15.9253 9.8696C16.0041 9.80514 16.1139 9.72305 16.2457 9.66304C16.3818 9.60108 16.6048 9.53439 16.8652 9.60269C17.1614 9.68037 17.3553 9.89296 17.445 10.1213C17.5156 10.301 17.5168 10.4739 17.514 10.568C17.5085 10.7503 17.4689 10.9821 17.4328 11.1932L17.0432 13.4791Z',
  d8: 'M16 15V11L10.0005 17M8 9V13L14.0005 7',
  d9: 'M21 3V21H3V3H21Z',
  d10: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM8.53031 13.5303L14.5308 7.53031L13.4702 6.4696L8.75 11.1894V8.99996H7.25V13C7.25 13.3033 7.43272 13.5768 7.71297 13.6929C7.99322 13.809 8.3158 13.7448 8.53031 13.5303ZM16.75 11C16.75 10.6966 16.5673 10.4231 16.287 10.307C16.0067 10.191 15.6841 10.2551 15.4696 10.4697L9.47016 16.4696L10.5309 17.5303L15.25 12.8107V15H16.75V11Z',
} as const;

export const IconSquareArrowDataTransferDiagonalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-data-transfer-diagonal-stroke-rounded IconSquareArrowDataTransferDiagonalStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDataTransferDiagonalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-data-transfer-diagonal-duotone-rounded IconSquareArrowDataTransferDiagonalDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDataTransferDiagonalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-data-transfer-diagonal-twotone-rounded IconSquareArrowDataTransferDiagonalTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDataTransferDiagonalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-data-transfer-diagonal-solid-rounded IconSquareArrowDataTransferDiagonalSolidRounded"
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

export const IconSquareArrowDataTransferDiagonalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-data-transfer-diagonal-bulk-rounded IconSquareArrowDataTransferDiagonalBulkRounded"
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDataTransferDiagonalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-data-transfer-diagonal-stroke-sharp IconSquareArrowDataTransferDiagonalStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDataTransferDiagonalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-data-transfer-diagonal-solid-sharp IconSquareArrowDataTransferDiagonalSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSquareArrowDataTransferDiagonal: TheIconSelfPack = {
  name: 'SquareArrowDataTransferDiagonal',
  StrokeRounded: IconSquareArrowDataTransferDiagonalStrokeRounded,
  DuotoneRounded: IconSquareArrowDataTransferDiagonalDuotoneRounded,
  TwotoneRounded: IconSquareArrowDataTransferDiagonalTwotoneRounded,
  SolidRounded: IconSquareArrowDataTransferDiagonalSolidRounded,
  BulkRounded: IconSquareArrowDataTransferDiagonalBulkRounded,
  StrokeSharp: IconSquareArrowDataTransferDiagonalStrokeSharp,
  SolidSharp: IconSquareArrowDataTransferDiagonalSolidSharp,
};