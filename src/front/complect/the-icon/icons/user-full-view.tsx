import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15 5C15 6.65685 13.2418 8.5 12 8.5C10.7582 8.5 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5Z',
  d2: 'M16.0415 9C17.5645 10.3353 18.5513 12.5969 17.6651 14.7052C17.4742 15.1594 17.0361 15.4539 16.5514 15.4539C16.0585 15.4539 15.2489 15.296 15.0917 15.9374L13.9944 20.4123C13.7656 21.3454 12.9433 22 12 22C11.0567 22 10.2344 21.3454 10.0056 20.4123L8.90833 15.9374C8.75103 15.296 7.94149 15.4539 7.44862 15.4539C6.9639 15.4539 6.52582 15.1594 6.33488 14.7052C5.44866 12.5969 6.43558 10.3353 7.95857 9',
  d3: 'M10.7242 8.00098C7.3234 8.05457 5.04669 11.6053 6.39304 14.7997C6.58202 15.2481 7.0156 15.5388 7.49535 15.5388H8.33892C8.62326 15.5388 8.87111 15.7356 8.94007 16.0161L10.0261 20.4332C10.2525 21.3542 11.0663 22.0004 12 22.0004C12.9337 22.0004 13.7475 21.3542 13.9739 20.4332L15.0599 16.0161C15.1289 15.7356 15.3767 15.5388 15.6611 15.5388H16.5047C16.9844 15.5388 17.418 15.2481 17.607 14.7997C18.9533 11.6053 16.6766 8.05457 13.2758 8.00098C12.8473 8.31176 12.3972 8.50036 12 8.50036C11.6028 8.50036 11.1527 8.31176 10.7242 8.00098Z',
  d4: 'M8.25 5C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5C15.75 6.07361 15.1948 7.11878 14.5258 7.87011C14.1838 8.25412 13.7881 8.58958 13.3715 8.8334C12.9618 9.07316 12.4873 9.25 12 9.25C11.5127 9.25 11.0382 9.07316 10.6285 8.8334C10.2119 8.58958 9.8162 8.25412 9.47423 7.87011C8.80516 7.11878 8.25 6.07361 8.25 5Z',
  d5: 'M8.05192 8.50427C7.98277 8.41503 7.94819 8.37041 7.91539 8.34597C7.8178 8.27324 7.69427 8.26548 7.58835 8.32543C7.55276 8.34558 7.51691 8.38147 7.44522 8.45325C5.77822 9.92648 4.59606 12.5039 5.64367 14.9962C5.94906 15.7227 6.65565 16.2043 7.44881 16.2043L7.72557 16.2021C7.9533 16.2002 8.06716 16.1993 8.14949 16.2633C8.23182 16.3274 8.25894 16.438 8.31317 16.6592L9.27735 20.5913C9.58622 21.851 10.7024 22.7504 12.0002 22.7504C13.298 22.7504 14.4141 21.851 14.723 20.5913L15.6872 16.6592C15.7414 16.438 15.7685 16.3274 15.8509 16.2633C15.9332 16.1993 16.0471 16.2002 16.2748 16.2021L16.5515 16.2043C17.3447 16.2043 18.0513 15.7227 18.3567 14.9962C19.4043 12.5039 18.2222 9.92649 16.5552 8.45325C16.4833 8.38125 16.4473 8.34525 16.4116 8.32507C16.3058 8.26531 16.1825 8.27306 16.085 8.34559C16.0521 8.37008 16.0174 8.41483 15.948 8.50432C15.8488 8.63238 15.7476 8.75376 15.646 8.86789C15.2149 9.35201 14.7 9.79407 14.1292 10.1282C13.5795 10.4499 12.8413 10.7502 12 10.7502C11.1587 10.7502 10.4205 10.4499 9.87082 10.1282C9.29999 9.79407 8.78515 9.35201 8.35402 8.86789C8.25237 8.75374 8.15119 8.63235 8.05192 8.50427Z',
  d6: 'M15.5866 9C17.1964 10.2859 18.9666 13.3333 17.3811 16.2222H15.2672L13.5339 22H10.4562L8.73701 16.2222H6.62485C5.0361 13.3333 6.79561 10.2859 8.40545 9',
  d7: 'M8.25 5C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5C15.75 7.07107 14.0711 8.75 12 8.75C9.92893 8.75 8.25 7.07107 8.25 5Z',
  d8: 'M7.91976 8.37891L8.44896 8.8658C9.38401 9.7261 10.6299 10.2504 12 10.2504C13.3679 10.2504 14.6121 9.72774 15.5466 8.86984L16.076 8.38387L16.5838 8.8924C18.1487 10.4596 19.6962 13.5551 18.0348 16.5835L17.8214 16.9726H15.8224L14.0899 22.7504H9.89685L8.17844 16.9726H6.18306L5.96945 16.584C4.30379 13.5539 5.84476 10.4551 7.4114 8.88755L7.91976 8.37891Z',
} as const;

export const IconUserFullViewStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-full-view-stroke-rounded IconUserFullViewStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconUserFullViewDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-full-view-duotone-rounded IconUserFullViewDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserFullViewTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-full-view-twotone-rounded IconUserFullViewTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconUserFullViewSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-full-view-solid-rounded IconUserFullViewSolidRounded"
    >
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

export const IconUserFullViewBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-full-view-bulk-rounded IconUserFullViewBulkRounded"
    >
      <path 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserFullViewStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-full-view-stroke-sharp IconUserFullViewStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="5" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserFullViewSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="user-full-view-solid-sharp IconUserFullViewSolidSharp"
    >
      <path 
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

export const iconPackOfUserFullView: TheIconSelfPack = {
  name: 'UserFullView',
  StrokeRounded: IconUserFullViewStrokeRounded,
  DuotoneRounded: IconUserFullViewDuotoneRounded,
  TwotoneRounded: IconUserFullViewTwotoneRounded,
  SolidRounded: IconUserFullViewSolidRounded,
  BulkRounded: IconUserFullViewBulkRounded,
  StrokeSharp: IconUserFullViewStrokeSharp,
  SolidSharp: IconUserFullViewSolidSharp,
};