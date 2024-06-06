import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.6034 8.58326L18.8152 7.77534C19.4562 7.34802 20.234 7.14124 20.8709 6.70794C21.003 6.61809 21.1286 6.5146 21.2457 6.39747C22.2514 5.39149 22.2514 3.76047 21.2457 2.75449C20.2399 1.7485 18.6092 1.7485 17.6034 2.75449C17.4863 2.87161 17.3828 2.99721 17.293 3.12931C16.8598 3.76635 16.653 4.54433 16.2258 5.1854L15.418 6.39747M17.6034 8.58326L15.418 6.39747M17.6034 8.58326L19.3012 11.2518C19.7989 12.034 19.6866 13.057 19.0311 13.7126C18.6449 14.0989 18.0188 14.0989 17.6326 13.7126L10.2896 6.36828C9.90345 5.98201 9.90345 5.35574 10.2896 4.96947C10.9451 4.31385 11.968 4.20155 12.75 4.69933L15.418 6.39747',
  d2: 'M16 16.8943C15.1213 19.8469 12.3861 22 9.148 22C5.20027 22 2 18.7997 2 14.852C2 11.6139 4.15309 8.87874 7.10572 8',
  d3: 'M7 15.6667C7 15.6667 7.625 15.6667 8.25 17C8.25 17 10.2353 13.6667 12 13',
  d4: 'M17.6034 2.75449C18.6092 1.7485 20.2399 1.7485 21.2457 2.75449C22.2514 3.76047 22.2514 5.39149 21.2457 6.39747C21.1286 6.5146 21.003 6.61809 20.8709 6.70794C20.234 7.14124 19.4562 7.34802 18.8152 7.77534L17.6034 8.58326L19.3012 11.2518C19.7989 12.034 19.6866 13.057 19.0311 13.7126C18.6449 14.0989 18.0188 14.0989 17.6326 13.7126L10.2896 6.36828C9.90345 5.98201 9.90345 5.35574 10.2896 4.96947C10.9451 4.31385 11.968 4.20155 12.75 4.69933L15.418 6.39747L16.2258 5.1854C16.653 4.54433 16.8598 3.76635 17.293 3.12931C17.3828 2.99721 17.4863 2.87161 17.6034 2.75449Z',
  d5: 'M21.6828 2.3172C20.5932 1.2276 18.8266 1.2276 17.737 2.3172C17.6101 2.44406 17.498 2.58011 17.4007 2.72319C16.9314 3.41317 16.7074 4.25582 16.2446 4.95018C16.1454 5.09897 16.0958 5.17337 16.0875 5.25323C16.083 5.29694 16.0874 5.34111 16.1004 5.38307C16.1242 5.45975 16.1874 5.52297 16.3139 5.64941L18.3511 7.68623C18.4773 7.81236 18.5404 7.87542 18.6168 7.89925C18.659 7.91241 18.7035 7.91681 18.7475 7.91219C18.8272 7.90381 18.9014 7.85434 19.0498 7.7554C19.7442 7.29257 20.5868 7.0686 21.2768 6.59928C21.4199 6.50196 21.5559 6.38986 21.6828 6.263C22.7724 5.1734 22.7724 3.4068 21.6828 2.3172Z',
  d6: 'M15.42 6.31345L17.6866 8.58003C17.7118 8.60523 17.7243 8.61783 17.7355 8.6317C17.7466 8.64557 17.7562 8.66061 17.7753 8.69067L19.5763 11.5208C20.1155 12.368 19.9938 13.4761 19.2837 14.1862C18.8653 14.6046 18.187 14.6046 17.7686 14.1862L9.81378 6.23138C9.39541 5.813 9.39541 5.13468 9.81378 4.7163C10.5239 4.00618 11.632 3.88455 12.4792 4.42371L15.3093 6.22469C15.3394 6.24383 15.3544 6.2534 15.3683 6.26452C15.3822 6.27565 15.3948 6.28825 15.42 6.31345Z',
  d7: 'M8.56417 7.21501C8.72171 7.74435 8.42031 8.30118 7.89097 8.45872C5.3507 9.21474 3.5 11.5687 3.5 14.3523C3.5 17.7477 6.25256 20.5003 9.648 20.5003C12.4316 20.5003 14.7855 18.6496 15.5415 16.1093C15.6991 15.58 16.2559 15.2786 16.7852 15.4361C17.3146 15.5936 17.616 16.1505 17.4585 16.6798C16.457 20.0448 13.3406 22.5003 9.648 22.5003C5.14799 22.5003 1.5 18.8523 1.5 14.3523C1.5 10.6597 3.95548 7.54328 7.32047 6.54181C7.84981 6.38427 8.40663 6.68567 8.56417 7.21501Z',
  d8: 'M13.4355 12.1469C13.6307 12.6635 13.37 13.2406 12.8534 13.4357C12.5903 13.5352 12.2477 13.7673 11.8527 14.1368C11.4692 14.4956 11.0908 14.9317 10.7509 15.3663C10.413 15.7984 10.1253 16.2133 9.92171 16.5209L9.60938 17.0116C9.41996 17.3295 9.07017 17.5173 8.7006 17.4991C8.33095 17.4808 8.00163 17.2598 7.84454 16.9247C7.58669 16.3746 7.37347 16.1932 7.31218 16.1493C6.84968 16.0614 6.5 15.655 6.5 15.1669C6.5 14.6147 6.94772 14.1669 7.5 14.1669C7.58261 14.1704 7.77806 14.1881 7.89895 14.2312C8.07094 14.2836 8.26575 14.3733 8.47015 14.5186C8.55641 14.58 8.64276 14.65 8.72874 14.7297C8.8651 14.5406 9.01492 14.3396 9.17553 14.1342C9.55256 13.6521 10.0014 13.13 10.4864 12.6762C10.96 12.2333 11.5274 11.7987 12.1466 11.5648C12.6632 11.3696 13.2403 11.6302 13.4355 12.1469Z',
  d9: 'M15.9849 16.8926C15.107 19.8459 12.3745 21.9995 9.13956 21.9995C5.19568 21.9995 1.99854 18.7984 1.99854 14.8498C1.99854 11.6109 4.14952 8.87505 7.09927 7.99609',
  d10: 'M6.49414 14.9985L8.24243 16.999L11.9888 12.998',
  d11: 'M17.6059 8.57702L18.6577 7.88096C19.3727 7.38372 20.0361 7.15402 20.5347 6.90346C20.9995 6.66994 21.5683 6.10277 21.7759 5.66603C22.3497 4.1492 21.6776 3.32574 21.4263 2.94318C20.3113 1.65231 18.704 1.87996 17.9426 2.48845C17.3669 2.8972 17.0816 3.46813 16.7988 4.06269C16.3507 5.21064 15.7684 5.75368 15.4799 6.44677M11.4289 4.5661L10.0276 5.98527C10.0083 6.00486 10.0084 6.03641 10.0278 6.05589L17.9466 13.9892C17.9661 14.0088 17.9978 14.0088 18.0174 13.9892L19.4333 12.5723L17.63 8.60122L15.4139 6.38067L11.4289 4.5661Z',
  d12: 'M7.95834 8.61184C5.49106 9.34614 3.69352 11.6325 3.69352 14.3361C3.69352 17.634 6.367 20.3075 9.66491 20.3075C12.3685 20.3075 14.6548 18.5099 15.3891 16.0426L17.251 16.5967C16.2783 19.8651 13.2514 22.25 9.66491 22.25C5.29416 22.25 1.75098 18.7068 1.75098 14.3361C1.75098 10.7496 4.13592 7.7227 7.40423 6.75L7.95834 8.61184Z',
  d13: 'M13.2302 13.1838L8.72506 17.9892L6.24805 15.1584L7.7532 13.8414L8.77618 15.0105L11.7711 11.8159L13.2302 13.1838Z',
  d14: 'M21.4979 2.50151C20.4959 1.4995 18.8714 1.4995 17.8694 2.50151C17.7527 2.61818 17.6496 2.74328 17.5602 2.87486C17.3414 3.19645 17.1806 3.5541 17.0199 3.91179C16.9048 4.16779 16.7897 4.42382 16.6533 4.66665C16.7533 4.73218 16.8465 4.80791 16.9313 4.89276L19.1084 7.06994C19.1927 7.15425 19.268 7.24678 19.3332 7.34601C19.5759 7.20976 19.8318 7.09473 20.0876 6.9797C20.4453 6.81891 20.803 6.65812 21.1245 6.43938C21.2561 6.34988 21.3812 6.2468 21.4979 6.13013C22.4998 5.12812 22.4998 3.50353 21.4979 2.50151Z',
  d15: 'M16.2243 5.59983C16.1607 5.53624 16.0862 5.4846 16.0043 5.44738L11.5396 3.41772L9.72064 5.23672C9.42776 5.52961 9.42776 6.00447 9.72064 6.29736L17.7033 14.2803C17.8439 14.421 18.0347 14.5 18.2336 14.5C18.4325 14.5 18.6233 14.421 18.764 14.2803L20.5828 12.4614L18.5538 7.997C18.5166 7.91512 18.465 7.8406 18.4014 7.777L16.2243 5.59983Z',
};

export const IconValidationStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="validation-stroke-rounded IconValidationStrokeRounded"
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

export const IconValidationDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="validation-duotone-rounded IconValidationDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconValidationTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="validation-twotone-rounded IconValidationTwotoneRounded"
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

export const IconValidationSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="validation-solid-rounded IconValidationSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconValidationBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="validation-bulk-rounded IconValidationBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconValidationStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="validation-stroke-sharp IconValidationStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconValidationSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="validation-solid-sharp IconValidationSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfValidation: TheIconSelfPack = {
  name: 'Validation',
  StrokeRounded: IconValidationStrokeRounded,
  DuotoneRounded: IconValidationDuotoneRounded,
  TwotoneRounded: IconValidationTwotoneRounded,
  SolidRounded: IconValidationSolidRounded,
  BulkRounded: IconValidationBulkRounded,
  StrokeSharp: IconValidationStrokeSharp,
  SolidSharp: IconValidationSolidSharp,
};