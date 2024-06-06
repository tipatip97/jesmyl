import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 2H6C3.518 2 3 2.518 3 5V22H15V5C15 2.518 14.482 2 12 2Z',
  d2: 'M18 8H15V22H21V11C21 8.518 20.482 8 18 8Z',
  d3: 'M8 6L10 6M8 9L10 9M8 12L10 12',
  d4: 'M11.5 22V18C11.5 17.0572 11.5 16.5858 11.2071 16.2929C10.9142 16 10.4428 16 9.5 16H8.5C7.55719 16 7.08579 16 6.79289 16.2929C6.5 16.5858 6.5 17.0572 6.5 18V22',
  d5: 'M6 2H12C14.482 2 15 2.518 15 5V22H11.5V18C11.5 17.0572 11.5 16.5858 11.2071 16.2929C10.9142 16 10.4428 16 9.5 16H8.5C7.55719 16 7.08579 16 6.79289 16.2929C6.5 16.5858 6.5 17.0572 6.5 18V22H3V5C3 2.518 3.518 2 6 2Z',
  d6: 'M13.75 7.75C13.75 7.19772 14.1977 6.75 14.75 6.75H17.75C18.3921 6.75 18.9759 6.78219 19.4804 6.89301C19.9962 7.00632 20.4907 7.21503 20.8879 7.61214C21.285 8.00926 21.4937 8.5038 21.607 9.01959C21.7178 9.52406 21.75 10.1079 21.75 10.75V21.75C21.75 22.3023 21.3023 22.75 20.75 22.75H14.75C14.1977 22.75 13.75 22.3023 13.75 21.75V7.75ZM15.75 8.75V20.75H19.75V10.75C19.75 10.1511 19.7174 9.73944 19.6536 9.44872C19.5922 9.16933 19.5163 9.06899 19.4736 9.02636C19.431 8.98372 19.3307 8.90781 19.0513 8.84643C18.7606 8.78256 18.3489 8.75 17.75 8.75H15.75Z',
  d7: 'M8.45526 15.25C8.02244 15.25 7.62561 15.2499 7.3028 15.2933C6.94732 15.3411 6.57159 15.4535 6.26257 15.7626C5.95355 16.0716 5.8411 16.4473 5.79331 16.8028C5.74991 17.1256 5.74995 17.5224 5.75 17.9553L5.75001 22.35C5.75001 22.5386 5.75001 22.6328 5.69143 22.6914C5.63285 22.75 5.53857 22.75 5.35001 22.75H3C2.58579 22.75 2.25 22.4142 2.25 22V5C2.25 4.36327 2.28223 3.80098 2.38719 3.32323C2.49401 2.83699 2.68612 2.39172 3.03892 2.03892C3.39172 1.68612 3.83699 1.49401 4.32323 1.38719C4.80098 1.28223 5.36327 1.25 6 1.25H12C12.6367 1.25 13.199 1.28223 13.6768 1.38719C14.163 1.49401 14.6083 1.68612 14.9611 2.03892C15.3139 2.39172 15.506 2.83699 15.6128 3.32323C15.7178 3.80099 15.75 4.36327 15.75 5V22C15.75 22.4142 15.4142 22.75 15 22.75H12.65C12.4614 22.75 12.3672 22.75 12.3086 22.6914C12.25 22.6328 12.25 22.5386 12.25 22.35L12.25 17.9553C12.2501 17.5225 12.2501 17.1256 12.2067 16.8028C12.1589 16.4473 12.0465 16.0716 11.7374 15.7626C11.4284 15.4535 11.0527 15.3411 10.6972 15.2933C10.3744 15.2499 9.97757 15.25 9.54476 15.25H8.45526ZM7.25 6C7.25 5.58579 7.58579 5.25 8 5.25H10C10.4142 5.25 10.75 5.58579 10.75 6C10.75 6.41422 10.4142 6.75 10 6.75H8C7.58579 6.75 7.25 6.41421 7.25 6ZM7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H10C10.4142 8.25 10.75 8.58579 10.75 9C10.75 9.41421 10.4142 9.75 10 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H10C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12Z',
  d8: 'M10.35 22.75C10.5386 22.75 10.6329 22.75 10.6914 22.6914C10.75 22.6328 10.75 22.5386 10.75 22.35V18C10.75 17.5074 10.7484 17.2134 10.7201 17.0027C10.696 16.8239 10.6764 16.804 10.4973 16.7799C10.2866 16.7516 9.99261 16.75 9.50001 16.75H8.50001C8.0074 16.75 7.71339 16.7516 7.50267 16.7799C7.33152 16.8029 7.30297 16.8313 7.27993 17.0027C7.2516 17.2134 7.25001 17.5074 7.25001 18V22.35C7.25001 22.5386 7.25001 22.6328 7.30859 22.6914C7.36716 22.75 7.46145 22.75 7.65001 22.75H10.35Z',
  d9: 'M4.32323 1.38719C4.80098 1.28223 5.36327 1.25 6 1.25H12C12.6367 1.25 13.199 1.28223 13.6768 1.38719C14.163 1.49401 14.6083 1.68612 14.9611 2.03892C15.3139 2.39172 15.506 2.83699 15.6128 3.32323C15.7178 3.80098 15.75 4.36327 15.75 5V22C15.75 22.4142 15.4142 22.75 15 22.75H3C2.58579 22.75 2.25 22.4142 2.25 22V5C2.25 4.36327 2.28223 3.80098 2.38719 3.32323C2.49401 2.83699 2.68612 2.39172 3.03892 2.03892C3.39172 1.68612 3.83699 1.494 4.32323 1.38719Z',
  d10: 'M15.75 6.75H17.75C18.3921 6.75 18.9759 6.78219 19.4804 6.89301C19.9962 7.00632 20.4907 7.21503 20.8879 7.61214C21.285 8.00926 21.4937 8.5038 21.607 9.01959C21.7178 9.52406 21.75 10.1079 21.75 10.75V21.75C21.75 22.3023 21.3023 22.75 20.75 22.75H15C15.4142 22.75 15.75 22.4142 15.75 22V20.75H19.75V10.75C19.75 10.1511 19.7174 9.73944 19.6536 9.44872C19.5922 9.16933 19.5163 9.06899 19.4736 9.02636C19.431 8.98372 19.3307 8.90781 19.0513 8.84643C18.7606 8.78256 18.3489 8.75 17.75 8.75H15.75V6.75Z',
  d11: 'M7.25 6C7.25 5.58579 7.58579 5.25 8 5.25L10 5.25C10.4142 5.25 10.75 5.58579 10.75 6C10.75 6.41421 10.4142 6.75 10 6.75L8 6.75C7.58579 6.75 7.25 6.41421 7.25 6ZM7.25 9C7.25 8.58579 7.58579 8.25 8 8.25L10 8.25C10.4142 8.25 10.75 8.58579 10.75 9C10.75 9.41421 10.4142 9.75 10 9.75L8 9.75C7.58579 9.75 7.25 9.41421 7.25 9ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25L10 11.25C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75L8 12.75C7.58579 12.75 7.25 12.4142 7.25 12Z',
  d12: 'M8.45526 15.25C8.02244 15.25 7.62561 15.2499 7.3028 15.2933C6.94732 15.3411 6.57159 15.4535 6.26257 15.7626C5.95355 16.0716 5.8411 16.4473 5.79331 16.8028C5.74991 17.1256 5.74995 17.5224 5.75 17.9553C5.75001 17.9701 5.75001 17.985 5.75001 18V22.75H7.25001V18C7.25001 17.5074 7.2516 17.2134 7.27993 17.0027C7.30337 16.8283 7.32439 16.8039 7.50267 16.7799C7.71339 16.7516 8.0074 16.75 8.50001 16.75H9.50001C9.99261 16.75 10.2866 16.7516 10.4973 16.7799C10.6687 16.803 10.6971 16.8317 10.7201 17.0027C10.7484 17.2134 10.75 17.5074 10.75 18V22.75H12.25V18C12.25 17.9851 12.25 17.9702 12.25 17.9553C12.2501 17.5225 12.2501 17.1256 12.2067 16.8028C12.1589 16.4473 12.0465 16.0716 11.7374 15.7626C11.4284 15.4535 11.0527 15.3411 10.6972 15.2933C10.3744 15.2499 9.97757 15.25 9.54476 15.25H8.45526Z',
  d13: 'M6.99158 6.02002H10.9887M6.99158 9.01405H10.9887M6.99158 12.0081H10.9887',
  d14: 'M11.4884 21.9876V15.9995H6.49207V21.9876',
  d15: 'M15.0287 21.9985H3.00183V2.01147C3.00183 2.00594 3.00631 2.00146 3.01183 2.00146H15.0187C15.0242 2.00146 15.0287 2.00594 15.0287 2.01146V8.00541M15.0287 21.9985H20.9982V8.01541C20.9982 8.00989 20.9937 8.00541 20.9882 8.00541H15.0287M15.0287 21.9985V8.00541',
  d16: 'M19.75 8.75L14.75 8.75V6.75L20.75 6.75C21.0152 6.75 21.2696 6.85536 21.4571 7.04289C21.6446 7.23043 21.75 7.48478 21.75 7.75V22.75H14.75V20.75H19.75V8.75Z',
  d17: 'M6.5 16.25C6.08579 16.25 5.75 16.5858 5.75 17L5.75 22.75H2.25L2.25 2C2.25 1.58579 2.58579 1.25 3 1.25H15C15.4142 1.25 15.75 1.58579 15.75 2L15.75 22C15.75 22.4142 15.4142 22.75 15 22.75H12.25V17C12.25 16.5858 11.9142 16.25 11.5 16.25H6.5ZM10.75 22.75H7.25L7.25 17.75H10.75V22.75ZM11 6.75L7 6.75V5.25H11V6.75ZM11 9.75L7 9.75V8.25L11 8.25V9.75ZM11 12.75L7 12.75L7 11.25L11 11.25V12.75Z',
};

export const IconBuilding06StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="building-06-stroke-rounded IconBuilding06StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBuilding06DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="building-06-duotone-rounded IconBuilding06DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBuilding06TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="building-06-twotone-rounded IconBuilding06TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBuilding06SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="building-06-solid-rounded IconBuilding06SolidRounded"
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBuilding06BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="building-06-bulk-rounded IconBuilding06BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBuilding06StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="building-06-stroke-sharp IconBuilding06StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBuilding06SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="building-06-solid-sharp IconBuilding06SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBuilding06: TheIconSelfPack = {
  name: 'Building06',
  StrokeRounded: IconBuilding06StrokeRounded,
  DuotoneRounded: IconBuilding06DuotoneRounded,
  TwotoneRounded: IconBuilding06TwotoneRounded,
  SolidRounded: IconBuilding06SolidRounded,
  BulkRounded: IconBuilding06BulkRounded,
  StrokeSharp: IconBuilding06StrokeSharp,
  SolidSharp: IconBuilding06SolidSharp,
};