import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 19L18.1795 9.9942C18.9276 9.26025 19.3016 8.89327 19.6243 9.02718C19.9469 9.16108 19.9526 9.68566 19.964 10.7348L20 14.0459',
  d2: 'M15 5L5.82055 14.0058C5.07244 14.7398 4.69839 15.1067 4.37573 14.9728C4.05306 14.8389 4.04736 14.3143 4.03597 13.2652L4 9.95414',
  d3: 'M15.7138 4.29577C16.1006 4.69001 16.0945 5.32314 15.7003 5.70992L6.67027 14.5457L6.67025 14.5457C6.29581 14.9203 5.93244 15.2838 5.61629 15.5271C5.32406 15.7519 4.66669 16.1956 3.91819 15.905C3.16969 15.6145 3.04953 14.869 3.01731 14.5182C2.98245 14.1387 3.00694 13.6437 3.03216 13.1335L3.07997 12.1625C3.10435 11.6649 3.12813 11.1797 3.19945 10.803C3.26669 10.4478 3.45766 9.71857 4.20958 9.37706C4.97311 9.03027 5.59082 9.40861 5.86995 9.61238C6.16305 9.82634 6.4909 10.1544 6.82421 10.4879L7.39382 11.0575L14.2997 4.28227C14.6939 3.89549 15.327 3.90154 15.7138 4.29577Z',
  d4: 'M8.28619 19.7003C7.89941 19.3061 7.90546 18.673 8.29969 18.2862L17.3297 9.45037L17.3298 9.45036C17.7042 9.07576 18.0676 8.71225 18.3837 8.46902C18.6759 8.24421 19.3333 7.80051 20.0818 8.09106C20.8303 8.38161 20.9505 9.12713 20.9827 9.47788C21.0175 9.85736 20.9931 10.3524 20.9678 10.8626L20.92 11.8336C20.8956 12.3311 20.8719 12.8164 20.8006 13.1931C20.7333 13.5483 20.5423 14.2775 19.7904 14.619C19.0269 14.9658 18.4092 14.5875 18.13 14.3837C17.837 14.1697 17.5091 13.8417 17.1758 13.5082L16.6062 12.9386L9.70034 19.7138C9.3061 20.1006 8.67297 20.0946 8.28619 19.7003Z',
  d5: 'M9 19L20 8V14',
  d6: 'M15 4.99997L4 16V10',
  d7: 'M20.3828 7.07615C20.7565 7.23093 21.0001 7.59557 21.0001 8.00003V14H19.0001V10.4142L9.41422 20L8 18.5858L19.293 7.29292C19.579 7.00692 20.0091 6.92137 20.3828 7.07615Z',
  d8: 'M3.61732 16.9239C3.24364 16.7691 3 16.4044 3 16V9.99997H5V13.5858L14.5859 4L16.0001 5.41421L4.70711 16.7071C4.42111 16.9931 3.99099 17.0786 3.61732 16.9239Z',
} as const;

export const IconArrowDataTransferDiagonalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-data-transfer-diagonal-stroke-rounded IconArrowDataTransferDiagonalStrokeRounded"
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

export const IconArrowDataTransferDiagonalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-data-transfer-diagonal-duotone-rounded IconArrowDataTransferDiagonalDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconArrowDataTransferDiagonalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-data-transfer-diagonal-twotone-rounded IconArrowDataTransferDiagonalTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDataTransferDiagonalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-data-transfer-diagonal-solid-rounded IconArrowDataTransferDiagonalSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDataTransferDiagonalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-data-transfer-diagonal-bulk-rounded IconArrowDataTransferDiagonalBulkRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDataTransferDiagonalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-data-transfer-diagonal-stroke-sharp IconArrowDataTransferDiagonalStrokeSharp"
    >
      <path 
        d={d.d5} 
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

export const IconArrowDataTransferDiagonalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-data-transfer-diagonal-solid-sharp IconArrowDataTransferDiagonalSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrowDataTransferDiagonal: TheIconSelfPack = {
  name: 'ArrowDataTransferDiagonal',
  StrokeRounded: IconArrowDataTransferDiagonalStrokeRounded,
  DuotoneRounded: IconArrowDataTransferDiagonalDuotoneRounded,
  TwotoneRounded: IconArrowDataTransferDiagonalTwotoneRounded,
  SolidRounded: IconArrowDataTransferDiagonalSolidRounded,
  BulkRounded: IconArrowDataTransferDiagonalBulkRounded,
  StrokeSharp: IconArrowDataTransferDiagonalStrokeSharp,
  SolidSharp: IconArrowDataTransferDiagonalSolidSharp,
};