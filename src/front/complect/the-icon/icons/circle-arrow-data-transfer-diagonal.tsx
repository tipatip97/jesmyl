import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.6898 8L8.87715 13.1068C8.48493 13.523 8.28882 13.7311 8.13302 13.6693C7.97723 13.6076 7.98998 13.3268 8.01548 12.7653L8.09598 10.9932M10.3102 16L15.1228 10.8932C15.5151 10.477 15.7112 10.2689 15.867 10.3307C16.0228 10.3924 16.01 10.6732 15.9845 11.2347L15.904 13.0068',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM14.2996 6.87201C14.0067 6.57912 13.5318 6.57912 13.2389 6.87201L9.11343 10.9975L8.22951 10.1136C8.12342 10.0073 7.98448 9.93183 7.8252 9.90468C7.41687 9.83508 7.02944 10.1097 6.95984 10.518L6.5702 12.8039C6.5341 13.015 6.49448 13.2468 6.48906 13.4291C6.48626 13.5232 6.48738 13.6961 6.55801 13.8758C6.64772 14.1041 6.84164 14.3167 7.13781 14.3944C7.39822 14.4627 7.6212 14.396 7.75729 14.334C7.88909 14.274 7.99888 14.1919 8.07769 14.1275C8.2271 14.0053 8.4036 13.8287 8.5871 13.6452L8.58717 13.6451L8.58718 13.6451L14.2996 7.93267C14.5925 7.63978 14.5925 7.16491 14.2996 6.87201ZM16.1778 14.0924C16.5861 14.162 16.9736 13.8874 17.0432 13.4791L17.4328 11.1932L17.4328 11.1932C17.4689 10.982 17.5085 10.7503 17.514 10.568C17.5168 10.4739 17.5156 10.301 17.445 10.1213C17.3553 9.89296 17.1614 9.68037 16.8652 9.60269C16.6048 9.53439 16.3818 9.60108 16.2457 9.66304C16.1139 9.72305 16.0041 9.80514 15.9253 9.8696C15.7759 9.9918 15.5994 10.1684 15.4159 10.3519L9.70341 16.0644C9.41052 16.3573 9.41052 16.8322 9.70341 17.1251C9.99631 17.418 10.4712 17.418 10.7641 17.1251L14.8896 12.9996L15.7734 13.8834C15.8795 13.9897 16.0185 14.0652 16.1778 14.0924Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M13.2389 6.87201C13.5318 6.57912 14.0067 6.57912 14.2996 6.87201C14.5925 7.16491 14.5925 7.63978 14.2996 7.93267L8.58718 13.6451C8.40365 13.8287 8.22712 14.0053 8.07769 14.1275C7.99888 14.1919 7.88909 14.274 7.75729 14.334C7.6212 14.396 7.39822 14.4627 7.13782 14.3944C6.84164 14.3167 6.64772 14.1041 6.55801 13.8758C6.48738 13.6961 6.48625 13.5232 6.48906 13.4291C6.49448 13.2468 6.5341 13.015 6.5702 12.8039L6.95984 10.518C7.02944 10.1097 7.41687 9.83508 7.8252 9.90468C7.98448 9.93183 8.12342 10.0073 8.22951 10.1136L9.11343 10.9975L13.2389 6.87201Z',
  d5: 'M17.0432 13.4791C16.9736 13.8874 16.5861 14.162 16.1778 14.0924C16.0185 14.0652 15.8795 13.9897 15.7734 13.8834L14.8896 12.9996L10.7641 17.1251C10.4712 17.418 9.9963 17.418 9.70341 17.1251C9.41052 16.8322 9.41052 16.3573 9.70341 16.0644L15.4159 10.3519C15.5994 10.1684 15.7759 9.9918 15.9253 9.8696C16.0041 9.80514 16.1139 9.72305 16.2457 9.66304C16.3818 9.60108 16.6048 9.53439 16.8652 9.60269C17.1614 9.68037 17.3553 9.89296 17.445 10.1213C17.5156 10.301 17.5168 10.4739 17.514 10.568C17.5085 10.7503 17.4689 10.9821 17.4328 11.1932L17.0432 13.4791Z',
  d6: 'M16 15V11L10.0005 17M8 9V13L14.0005 7',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.53031 13.5303L14.5308 7.53031L13.4702 6.4696L8.75 11.1894V9.99996H7.25V13C7.25 13.3033 7.43272 13.5768 7.71297 13.6929C7.99322 13.809 8.3158 13.7448 8.53031 13.5303ZM16.75 11C16.75 10.6966 16.5673 10.4231 16.287 10.307C16.0067 10.191 15.6841 10.2551 15.4696 10.4697L9.47016 16.4696L10.5309 17.5303L15.25 12.8107V14H16.75V11Z',
} as const;

export const IconCircleArrowDataTransferDiagonalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-diagonal-stroke-rounded IconCircleArrowDataTransferDiagonalStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconCircleArrowDataTransferDiagonalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-diagonal-duotone-rounded IconCircleArrowDataTransferDiagonalDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconCircleArrowDataTransferDiagonalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-diagonal-twotone-rounded IconCircleArrowDataTransferDiagonalTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconCircleArrowDataTransferDiagonalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-diagonal-solid-rounded IconCircleArrowDataTransferDiagonalSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowDataTransferDiagonalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-diagonal-bulk-rounded IconCircleArrowDataTransferDiagonalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowDataTransferDiagonalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-diagonal-stroke-sharp IconCircleArrowDataTransferDiagonalStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconCircleArrowDataTransferDiagonalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-data-transfer-diagonal-solid-sharp IconCircleArrowDataTransferDiagonalSolidSharp"
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

export const iconPackOfCircleArrowDataTransferDiagonal: TheIconSelfPack = {
  name: 'CircleArrowDataTransferDiagonal',
  StrokeRounded: IconCircleArrowDataTransferDiagonalStrokeRounded,
  DuotoneRounded: IconCircleArrowDataTransferDiagonalDuotoneRounded,
  TwotoneRounded: IconCircleArrowDataTransferDiagonalTwotoneRounded,
  SolidRounded: IconCircleArrowDataTransferDiagonalSolidRounded,
  BulkRounded: IconCircleArrowDataTransferDiagonalBulkRounded,
  StrokeSharp: IconCircleArrowDataTransferDiagonalStrokeSharp,
  SolidSharp: IconCircleArrowDataTransferDiagonalSolidSharp,
};