import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 6C5.35977 6.02555 4.96714 6.08952 4.58115 6.24967C3.79373 6.57636 3.15249 7.17983 2.77788 7.94671C2.47211 8.57266 2.42207 9.37463 2.322 10.9786L2.16519 13.4919C1.91633 17.4806 1.79191 19.4749 2.97594 20.7375C4.15998 22 6.1547 22 10.1442 22H14.1102C17.8027 22 19.7863 22 21 20.999',
  d2: 'M17 7L16.5909 6.00049M8 4C8.31282 3.27221 8.67692 2.61465 9.41085 2.25955C9.94729 2 10.5928 2 11.8837 2C13.1746 2 13.8201 2 14.3566 2.25955C15.3536 2.74195 15.6993 3.82207 16.0936 4.78543L16.5909 6.00049M21.9963 17.5C22.0185 16.4464 21.9381 15.1428 21.8369 13.5009L21.682 10.9902C21.5832 9.38799 21.5338 8.58687 21.2319 7.96158C20.862 7.19552 20.2288 6.59269 19.4513 6.26634C18.8962 6.03335 18.2206 6.00415 17 6.00049H16.5909',
  d3: 'M10.5 10.8368C9.31753 11.3985 8.5 12.6038 8.5 14C8.5 15.933 10.067 17.5 12 17.5C13.3962 17.5 14.6015 16.6825 15.1632 15.5',
  d4: 'M2 2L22 22',
  d5: 'M11.9998 6H12.0088',
  d6: 'M2.16312 13.5001L2.31796 10.9894C2.41677 9.38716 2.46618 8.58604 2.76811 7.96076C3.13801 7.19469 3.7712 6.59186 4.54873 6.26551C4.93232 6.10451 5.37342 6.04082 6.01216 6.01562L20.8219 20.9472C19.6292 21.9991 17.6663 21.9991 13.9581 21.9991H10.0419C6.10252 21.9991 4.13285 21.9991 2.96369 20.7379C1.79452 19.4767 1.91739 17.4845 2.16312 13.5001Z',
  d7: 'M10.5 10.8359C9.31753 11.3977 8.5 12.6029 8.5 13.9991C8.5 15.9321 10.067 17.4991 12 17.4991C13.3962 17.4991 14.6015 16.6816 15.1632 15.4991',
  d8: 'M9.17361 11.1731L3.96267 5.96212C3.86698 5.86644 3.71845 5.84572 3.60482 5.91921C2.95763 6.3378 2.43288 6.9301 2.09258 7.63484C1.89241 8.04939 1.79049 8.49473 1.72303 9.01191C1.65726 9.51609 1.6189 10.1382 1.5709 10.9166L1.41085 13.5117C1.29098 15.4551 1.19625 16.9909 1.28469 18.1953C1.37551 19.4323 1.66555 20.4411 2.41353 21.248C3.16298 22.0565 4.14282 22.4148 5.36028 22.5845C6.54301 22.7494 8.06311 22.7494 9.98273 22.7493H14.017C15.9366 22.7494 17.4567 22.7494 18.6395 22.5845C19.0416 22.5284 19.4179 22.4518 19.7685 22.3451C19.974 22.2826 20.0271 22.0265 19.8752 21.8746L14.8305 16.8299C14.1067 17.5527 13.1075 17.9996 12.0039 17.9996C9.79477 17.9996 8.00391 16.2088 8.00391 13.9996C8.00391 12.896 8.45085 11.8968 9.17361 11.1731Z',
  d9: 'M12.0307 1.25085C12.6347 1.25085 13.1348 1.25084 13.5477 1.28601C13.9805 1.32286 14.3715 1.40154 14.7487 1.58827C15.4206 1.92094 15.8454 2.44962 16.1436 2.97986C16.3747 3.39089 16.5542 3.85267 16.7063 4.24403C16.8129 4.51817 16.923 4.79088 17.0322 5.06396C17.0776 5.17744 17.1874 5.25194 17.3096 5.25285C18.3325 5.2605 19.0853 5.3006 19.7406 5.57564C21.1881 6.18319 22.0777 7.49363 22.2759 9.0134C22.3417 9.51761 22.3801 10.1398 22.4281 10.9182L22.5881 13.5132C22.708 15.4566 22.8027 16.9923 22.7143 18.1968C22.659 18.9493 22.53 19.6174 22.2691 20.207C22.1889 20.3881 21.954 20.4201 21.8139 20.2801L16.2933 14.7595C16.1577 14.6238 16.0899 14.556 16.0531 14.48C16.0435 14.4602 16.0381 14.4473 16.0309 14.4265C16.0031 14.3467 16.0031 14.2315 16.0031 14.0011C16.0031 11.792 14.2123 10.0011 12.0031 10.0011C11.7727 10.0011 11.6576 10.0011 11.5778 9.97334C11.557 9.96611 11.5441 9.96077 11.5243 9.95118C11.4482 9.91438 11.3804 9.84658 11.2448 9.71096L7.32896 5.79513C7.0962 5.56238 6.97983 5.446 6.95037 5.29683C6.92091 5.14767 6.9859 4.99198 7.11587 4.6806C7.17631 4.53581 7.23526 4.39038 7.29213 4.24406C7.44425 3.85269 7.62374 3.3909 7.85491 2.97986C8.15311 2.44962 8.57789 1.92094 9.24982 1.58827C9.62699 1.40154 10.018 1.32286 10.4508 1.28601C10.9755 1.24131 11.5045 1.25085 12.0307 1.25085ZM10.9992 6.0011C10.9992 5.44881 11.4469 5.0011 11.9992 5.0011H12.0082C12.5605 5.0011 13.0082 5.44881 13.0082 6.0011C13.0082 6.55338 12.5605 7.0011 12.0082 7.0011H11.9992C11.4469 7.0011 10.9992 6.55338 10.9992 6.0011Z',
  d10: 'M0.292893 2.29289C0.683417 1.90237 1.31658 1.90237 1.70711 2.29289L21.7071 22.2929C22.0976 22.6834 22.0976 23.3166 21.7071 23.7071C21.3166 24.0976 20.6834 24.0976 20.2929 23.7071L0.292893 3.70711C-0.0976311 3.31658 -0.0976311 2.68342 0.292893 2.29289Z',
  d11: 'M11 6C11 5.44772 11.4477 5 12 5H12.009C12.5613 5 13.009 5.44772 13.009 6C13.009 6.55229 12.5613 7 12.009 7H12C11.4477 7 11 6.55229 11 6Z',
  d12: 'M11.9844 6.00195H11.9934',
  d13: 'M14.7083 14.9376C14.092 15.8878 13.0328 16.5149 11.8295 16.5149C9.92648 16.5149 8.38379 14.9465 8.38379 13.0118C8.38379 11.7884 9.00059 10.7115 9.93524 10.085',
  d14: 'M16.5565 6.01433C16.811 5.96245 20.0996 5.99271 21.457 6.01433L21.8345 17.6828M5.91904 5.99037C4.85445 5.99499 3.56577 6.01145 2.81757 6.02306C2.74397 6.02306 2.75531 6.00474 2.75358 6.05802L2.28915 21.899C2.28749 21.9554 2.33273 22.002 2.3891 22.002H12.1838H21.7557C21.8448 22.002 21.8894 21.8943 21.8264 21.8313L2.00195 1.99805M16.7515 8.00701L15.2748 2.00168H8.38339L7.89115 4.00345',
  d15: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358V22.75H21.3358Z',
  d16: 'M1.77301 5.97736C1.78564 5.57246 2.11679 5.25078 2.52099 5.25078H5.25078L10.3535 10.3535C8.96566 10.9811 8 12.3778 8 14C8 16.2091 9.79086 18 12 18C13.6222 18 15.0189 17.0343 15.6465 15.6465L22.75 22.75H1.25L1.77301 5.97736Z',
  d17: 'M7.92344 1.25H16.0766L17.0743 5.25H22.2043L22.6362 19.1007L7.29697 3.76144L7.92344 1.25Z',
};

export const IconCameraOff01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-off-01-stroke-rounded IconCameraOff01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconCameraOff01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-off-01-duotone-rounded IconCameraOff01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconCameraOff01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-off-01-twotone-rounded IconCameraOff01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconCameraOff01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-off-01-solid-rounded IconCameraOff01SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraOff01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-off-01-bulk-rounded IconCameraOff01BulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraOff01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-off-01-stroke-sharp IconCameraOff01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCameraOff01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="camera-off-01-solid-sharp IconCameraOff01SolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCameraOff01: TheIconSelfPack = {
  name: 'CameraOff01',
  StrokeRounded: IconCameraOff01StrokeRounded,
  DuotoneRounded: IconCameraOff01DuotoneRounded,
  TwotoneRounded: IconCameraOff01TwotoneRounded,
  SolidRounded: IconCameraOff01SolidRounded,
  BulkRounded: IconCameraOff01BulkRounded,
  StrokeSharp: IconCameraOff01StrokeSharp,
  SolidSharp: IconCameraOff01SolidSharp,
};