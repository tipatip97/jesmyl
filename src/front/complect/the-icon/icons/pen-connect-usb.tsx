import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.2141 7.98239L18.6158 6.58063C19.39 5.80646 20.6452 5.80646 21.4194 6.58063C22.1935 7.3548 22.1935 8.60998 21.4194 9.38415L20.0176 10.7859M17.2141 7.98239L8.98023 16.2163C7.93493 17.2616 7.41226 17.7842 7.05637 18.4211C6.70047 19.058 6.52927 19.7771 6.18687 21.2151L6 22L6.78486 21.8131C8.22295 21.4707 8.94199 21.2995 9.57889 20.9436C10.2158 20.5877 10.7384 20.0651 11.7837 19.0198L20.0176 10.7859M17.2141 7.98239L20.0176 10.7859',
  d2: 'M2 4.25C1.58579 4.25 1.25 4.58579 1.25 5C1.25 5.41421 1.58579 5.75 2 5.75V4.25ZM8.71151 5.23717C8.8425 4.84421 8.63013 4.41947 8.23717 4.28849C7.84421 4.1575 7.41947 4.36987 7.28849 4.76283L8.71151 5.23717ZM7.45585 6.63246L8.16736 6.86963L7.45585 6.63246ZM5.5 7.25C5.08579 7.25 4.75 7.58579 4.75 8C4.75 8.41421 5.08579 8.75 5.5 8.75V7.25ZM6.86395 7.81124L7.30248 8.41967L6.86395 7.81124ZM5.78849 5.23717C5.91947 5.63013 6.34421 5.8425 6.73717 5.71151C7.13013 5.58053 7.3425 5.15579 7.21151 4.76283L5.78849 5.23717ZM5.95585 3.36754L6.66736 3.13037V3.13037L5.95585 3.36754ZM4 1.25C3.58579 1.25 3.25 1.58579 3.25 2C3.25 2.41421 3.58579 2.75 4 2.75V1.25ZM5.36395 2.18876L4.92542 2.79719L4.92542 2.79719L5.36395 2.18876ZM10 4.25H2V5.75H10V4.25ZM7.28849 4.76283L6.74434 6.39529L8.16736 6.86963L8.71151 5.23717L7.28849 4.76283ZM5.55848 7.25H5.5V8.75H5.55848V7.25ZM6.74434 6.39529C6.62887 6.74168 6.56111 6.94137 6.49559 7.08222C6.46603 7.14577 6.44572 7.17719 6.43484 7.19176C6.42981 7.19851 6.42698 7.20138 6.42637 7.20199C6.42588 7.20248 6.4258 7.20253 6.42542 7.20281L7.30248 8.41967C7.57541 8.22296 7.73754 7.96876 7.85562 7.71492C7.96557 7.47857 8.06282 7.18325 8.16736 6.86963L6.74434 6.39529ZM5.55848 8.75C5.88907 8.75 6.19999 8.75113 6.45898 8.72156C6.73713 8.68981 7.02955 8.61639 7.30248 8.41967L6.42542 7.20281C6.42503 7.20309 6.42496 7.20314 6.42434 7.20346C6.42357 7.20384 6.41995 7.20561 6.41196 7.20826C6.39469 7.21396 6.35846 7.2233 6.28883 7.23125C6.13449 7.24887 5.92362 7.25 5.55848 7.25V8.75ZM7.21151 4.76283L6.66736 3.13037L5.24434 3.60472L5.78849 5.23717L7.21151 4.76283ZM4.05848 1.25H4V2.75H4.05848V1.25ZM6.66736 3.13037C6.56282 2.81675 6.46557 2.52143 6.35562 2.28508C6.23754 2.03124 6.07541 1.77704 5.80248 1.58033L4.92542 2.79719C4.9258 2.79747 4.92588 2.79752 4.92637 2.79801C4.92698 2.79862 4.92981 2.80149 4.93484 2.80824C4.94572 2.82281 4.96603 2.85423 4.99559 2.91778C5.06111 3.05863 5.12887 3.25832 5.24434 3.60472L6.66736 3.13037ZM4.05848 2.75C4.42362 2.75 4.63449 2.75113 4.78883 2.76875C4.85846 2.7767 4.89469 2.78604 4.91196 2.79174C4.91995 2.79439 4.92357 2.79616 4.92434 2.79654C4.92496 2.79686 4.92503 2.79691 4.92542 2.79719L5.80248 1.58033C5.52955 1.38361 5.23713 1.31019 4.95898 1.27844C4.69999 1.24887 4.38907 1.25 4.05848 1.25V2.75ZM11 4.75C11.1381 4.75 11.25 4.86193 11.25 5H12.75C12.75 4.0335 11.9665 3.25 11 3.25V4.75ZM11.25 5C11.25 5.13807 11.1381 5.25 11 5.25V6.75C11.9665 6.75 12.75 5.9665 12.75 5H11.25ZM11 5.25C10.8619 5.25 10.75 5.13807 10.75 5H9.25C9.25 5.9665 10.0335 6.75 11 6.75V5.25ZM10.75 5C10.75 4.86193 10.8619 4.75 11 4.75V3.25C10.0335 3.25 9.25 4.0335 9.25 5H10.75Z',
  d3: 'M6.78486 21.8132L6 22L6.18687 21.2152C6.52927 19.7771 6.70047 19.058 7.05637 18.4211C7.41226 17.7842 7.93493 17.2616 8.98023 16.2163L17.2141 7.98242L20.0176 10.7859L11.7837 19.0198C10.7384 20.0651 10.2158 20.5878 9.57889 20.9437C8.94199 21.2996 8.22295 21.4708 6.78486 21.8132Z',
  d4: 'M4.06836 2H4.8476C5.27803 2 5.66017 2.27543 5.79628 2.68377L6.56836 5',
  d5: 'M8.06836 5L7.29628 7.31623C7.16017 7.72457 6.77803 8 6.3476 8H5.56836',
  d6: 'M10.0684 5H2',
  d7: 'M17.2141 7.97234L18.6158 6.5694C19.39 5.79458 20.6452 5.79458 21.4194 6.5694C22.1935 7.34422 22.1935 8.60046 21.4194 9.37528L20.0176 10.7782M17.2141 7.97234L8.98023 16.2132C7.93493 17.2594 7.41226 17.7824 7.05637 18.4199C6.70047 19.0573 6.52927 19.777 6.18687 21.2162L6 22.0018L6.78486 21.8147C8.22295 21.472 8.94199 21.3007 9.57889 20.9445C10.2158 20.5883 10.7384 20.0652 11.7837 19.0191L20.0176 10.7782M17.2141 7.97234L20.0176 10.7782',
  d8: 'M4.0035 1.99854L4.84986 1.99871C5.17675 2.01142 5.35685 2.14061 5.50373 2.30497C5.57212 2.3815 5.62048 2.47336 5.65622 2.5696L6.55262 4.98337M6.55262 4.98337H2.00098M6.55262 4.98337H8.0548M5.49217 7.99258H6.15558C6.47597 7.98013 6.66534 7.92838 6.89296 7.75899C7.02101 7.6637 7.1085 7.5252 7.16421 7.37555L8.0548 4.98337M8.0548 4.98337L9.98348 4.99559M9.98348 4.99559C9.98348 5.55084 10.4349 6.00095 10.9917 6.00095C11.5486 6.00095 12 5.55084 12 4.99559C12 4.44034 11.5486 3.99023 10.9917 3.99023C10.4349 3.99023 9.98348 4.44034 9.98348 4.99559Z',
  d9: 'M21.9497 6.0503C20.8827 4.98323 19.1526 4.98323 18.0855 6.0503L16.9212 7.21463C16.5879 7.54797 16.4212 7.71463 16.4212 7.92174C16.4212 8.12885 16.5879 8.29551 16.9212 8.62885L19.3712 11.0788C19.7045 11.4122 19.8712 11.5788 20.0783 11.5788C20.2854 11.5788 20.452 11.4122 20.7854 11.0788L21.9497 9.91448C23.0168 8.84742 23.0168 7.11736 21.9497 6.0503Z',
  d10: 'M18.3105 13.5537C18.6438 13.2204 18.8105 13.0537 18.8105 12.8466C18.8105 12.6395 18.6438 12.4728 18.3105 12.1395L15.8605 9.68951C15.5272 9.35617 15.3605 9.18951 15.1534 9.18951C14.9463 9.18951 14.7797 9.35617 14.4463 9.68951L8.36945 15.7664C7.40084 16.7347 6.80884 17.3266 6.40167 18.0553C5.9945 18.7839 5.80071 19.5983 5.48363 20.9307L5.27041 21.8263C5.21009 22.0796 5.28552 22.3462 5.46969 22.5303C5.65385 22.7145 5.92037 22.7899 6.17373 22.7296L7.06931 22.5164C8.40175 22.1993 9.2161 22.0055 9.94476 21.5983C10.6734 21.1912 11.2653 20.5992 12.2337 19.6306L18.3105 13.5537Z',
  d11: 'M5.01047 3.26715C4.87357 3.25152 4.67937 3.25001 4.30848 3.25001H4.25C3.69772 3.25001 3.25 2.8023 3.25 2.25001C3.25 1.69773 3.69772 1.25001 4.25 1.25001H4.30848C4.32267 1.25001 4.33687 1.25001 4.35107 1.25001C4.66184 1.24994 4.97298 1.24988 5.23734 1.28006C5.53932 1.31454 5.8784 1.3967 6.19866 1.62753C6.51892 1.85836 6.70409 2.15406 6.8323 2.42964C6.94452 2.67089 7.04286 2.96609 7.14107 3.26093C7.14556 3.2744 7.15004 3.28787 7.15453 3.30133L7.47076 4.25001H8.22666C8.24208 4.24965 8.25755 4.24965 8.27306 4.25001H9.51756C9.86337 3.65221 10.5097 3.25001 11.25 3.25001C12.3546 3.25001 13.25 4.14544 13.25 5.25001C13.25 6.35458 12.3546 7.25001 11.25 7.25001C10.5097 7.25001 9.86337 6.84781 9.51756 6.25001H8.97076L8.65453 7.1987C8.65004 7.21216 8.64556 7.22562 8.64107 7.23909C8.54286 7.53393 8.44452 7.82913 8.3323 8.07038C8.20409 8.34596 8.01892 8.64167 7.69866 8.8725C7.3784 9.10332 7.03932 9.18549 6.73734 9.21996C6.47298 9.25014 6.16183 9.25008 5.85106 9.25002C5.83686 9.25001 5.82267 9.25001 5.80848 9.25001H5.75C5.19772 9.25001 4.75 8.8023 4.75 8.25001C4.75 7.69773 5.19772 7.25001 5.75 7.25001H5.80848C6.17937 7.25001 6.37357 7.2485 6.51047 7.23287C6.51249 7.23264 6.51447 7.23241 6.51639 7.23218C6.51722 7.23043 6.51806 7.22863 6.51891 7.22679C6.57703 7.10185 6.63988 6.9181 6.75716 6.56624L6.86257 6.25001H6.77306C6.75755 6.25037 6.74208 6.25037 6.72666 6.25001H2.25C1.69772 6.25001 1.25 5.8023 1.25 5.25001C1.25 4.69773 1.69772 4.25001 2.25 4.25001H5.36257L5.25716 3.93378C5.13988 3.58192 5.07703 3.39817 5.01891 3.27324C5.01806 3.27139 5.01722 3.2696 5.01639 3.26784C5.01446 3.26761 5.01249 3.26738 5.01047 3.26715Z',
  d12: 'M15.9144 8.03184L6.00785 17.9866L6.00781 20.9991H8.98876L19.0424 10.987M15.9144 8.03184L18.971 5.0277C19.0105 4.98889 19.074 4.98956 19.1126 5.0292L21.9714 7.9606C22.0098 8.00001 22.0092 8.06306 21.97 8.10169L19.0424 10.987M15.9144 8.03184L19.0424 10.987',
  d13: 'M2.98729 3H4.95176C4.98971 3 5.0244 3.02148 5.04131 3.05547L6.46821 5.99863M5.01375 8.99061H6.95902C7.00241 8.99061 7.04086 8.96263 7.0542 8.92134L8.01863 5.99863M2 5.99863L10.0139 5.99495M10.0139 5.99495C10.0139 6.55239 10.4683 7.03526 11.0147 7.03526C11.5611 7.03526 12.004 6.55239 12.004 5.99495C12.004 5.43751 11.5611 4.95632 11.0147 4.95632C10.4683 4.95632 10.0139 5.43751 10.0139 5.99495Z',
  d14: 'M19.0284 4.46967C18.7355 4.17678 18.2606 4.17678 17.9677 4.46967L15.4997 6.93772L19.5598 10.999L22.0284 8.53033C22.3213 8.23744 22.3213 7.76256 22.0284 7.46967L19.0284 4.46967Z',
  d15: 'M18.4991 12.0596L14.439 7.99838L4.74805 17.6893V21.75H8.80871L18.4991 12.0596Z',
  d16: 'M4.75 2.25H2.75V4.25H4.13196L4.63197 5.25003H1.75V7.25003H6.36257L6.02924 8.25003H4.75V10.25H6.75C7.18043 10.25 7.56257 9.9746 7.69868 9.56626L8.47076 7.25003H9.31369C9.62993 7.70338 10.1553 8 10.75 8C11.7165 8 12.5 7.2165 12.5 6.25C12.5 5.2835 11.7165 4.5 10.75 4.5C10.1553 4.5 9.62989 4.79664 9.31365 5.25003H6.86804L5.64443 2.80279C5.47504 2.464 5.12877 2.25 4.75 2.25Z',
};

export const IconPenConnectUsbStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-usb-stroke-rounded IconPenConnectUsbStrokeRounded"
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
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPenConnectUsbDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-usb-duotone-rounded IconPenConnectUsbDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="11.0684" 
        cy="5" 
        r="1" 
        fill="var(--icon-fill)"></circle>
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="11.0684" 
        cy="5" 
        r="1" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconPenConnectUsbTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-usb-twotone-rounded IconPenConnectUsbTwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPenConnectUsbSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-usb-solid-rounded IconPenConnectUsbSolidRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPenConnectUsbBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-usb-bulk-rounded IconPenConnectUsbBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPenConnectUsbStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-usb-stroke-sharp IconPenConnectUsbStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPenConnectUsbSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pen-connect-usb-solid-sharp IconPenConnectUsbSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPenConnectUsb: TheIconSelfPack = {
  name: 'PenConnectUsb',
  StrokeRounded: IconPenConnectUsbStrokeRounded,
  DuotoneRounded: IconPenConnectUsbDuotoneRounded,
  TwotoneRounded: IconPenConnectUsbTwotoneRounded,
  SolidRounded: IconPenConnectUsbSolidRounded,
  BulkRounded: IconPenConnectUsbBulkRounded,
  StrokeSharp: IconPenConnectUsbStrokeSharp,
  SolidSharp: IconPenConnectUsbSolidSharp,
};