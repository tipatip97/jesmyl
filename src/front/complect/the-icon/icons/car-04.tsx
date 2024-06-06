import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.98052 13.2888C2.25918 14.591 2.05755 16.2028 2.00119 17.0021C1.98176 17.2775 2.20345 17.5 2.47992 17.5H3.98173M2.98052 13.2888C2.98052 10.144 3.89594 6.34904 5.72678 4.71122C5.88815 4.56686 6.10124 4.5 6.31787 4.5H11.1118C11.6911 4.5 12.2694 4.6171 12.7553 4.93222C13.9539 5.70953 15.7652 7.27971 17.3038 9.68934C17.4311 9.88859 17.6211 10.0398 17.8435 10.1204C18.7292 10.4415 19.7153 10.887 20.3463 11.1839C20.7723 11.3844 21.1116 11.7341 21.273 12.176C21.7174 13.393 21.9682 14.7508 22 16.9994C22.0038 17.2755 21.7793 17.5 21.5028 17.5H20.001M2.98052 13.2888C3.34135 12.6373 3.83222 12.0634 4.5 11.7073M15.9962 17.5H7.98654',
  d2: 'M8 17.5C8 18.6046 7.10457 19.5 6 19.5C4.89543 19.5 4 18.6046 4 17.5C4 16.3954 4.89543 15.5 6 15.5C7.10457 15.5 8 16.3954 8 17.5Z',
  d3: 'M20 17.5C20 18.6046 19.1046 19.5 18 19.5C16.8954 19.5 16 18.6046 16 17.5C16 16.3954 16.8954 15.5 18 15.5C19.1046 15.5 20 16.3954 20 17.5Z',
  d4: 'M17.5 10C14.5 9 11 8.5 7 9C7 7 8 5 8.5 4.5',
  d5: 'M8 11H9',
  d6: 'M2.98052 13.2888C2.25918 14.591 2.05755 16.2028 2.00119 17.0021C1.98176 17.2775 2.20345 17.5 2.47992 17.5H4C4 16.3954 4.89543 15.5 6 15.5C7.10457 15.5 8 16.3954 8 17.5H16C16 16.3954 16.8954 15.5 18 15.5C19.1046 15.5 20 16.3954 20 17.5H21.5028C21.7793 17.5 22.0038 17.2755 22 16.9994C21.9682 14.7508 21.7174 13.393 21.273 12.176C21.1116 11.7341 20.7723 11.3844 20.3463 11.1839C19.7153 10.887 18.7292 10.4415 17.8435 10.1204C15.729 9.58029 10.6 8.5 7 8.5L8.5 4.5H6.31787C6.10124 4.5 5.88815 4.56686 5.72678 4.71122C3.89594 6.34904 2.98052 10.144 2.98052 13.2888Z',
  d7: 'M18 15.125C16.6193 15.125 15.5 16.2443 15.5 17.625C15.5 19.0057 16.6193 20.125 18 20.125C19.3807 20.125 20.5 19.0057 20.5 17.625C20.5 16.2443 19.3807 15.125 18 15.125Z',
  d8: 'M6 15.125C4.61929 15.125 3.5 16.2443 3.5 17.625C3.5 19.0057 4.61929 20.125 6 20.125C7.38071 20.125 8.5 19.0057 8.5 17.625C8.5 16.2443 7.38071 15.125 6 15.125Z',
  d9: 'M6.44656 3.875C6.04091 3.875 5.58607 3.99911 5.21734 4.32539C4.12647 5.29067 3.38805 6.80324 2.91895 8.37108C2.48032 9.83711 2.24629 11.455 2.21219 12.9558C2.21061 13.0252 2.20982 13.0599 2.20229 13.0912C2.19475 13.1225 2.17907 13.1549 2.14772 13.2198C1.48618 14.5889 1.3061 16.1165 1.25317 16.859C1.20966 17.4694 1.6195 17.9733 2.14431 18.217C2.21554 18.2501 2.29146 18.1901 2.28136 18.1122C2.26067 17.9527 2.25 17.7901 2.25 17.625C2.25 15.5539 3.92893 13.875 6 13.875C8.07107 13.875 9.75 15.5539 9.75 17.625C9.75 17.7972 9.7384 17.9666 9.71593 18.1326C9.69885 18.2588 9.79179 18.375 9.91918 18.375H14.0797C14.2077 18.375 14.301 18.2583 14.2839 18.1314C14.2615 17.9658 14.25 17.7968 14.25 17.625C14.25 15.5539 15.9289 13.875 18 13.875C20.0711 13.875 21.75 15.5539 21.75 17.625C21.75 17.7916 21.75 17.875 21.7897 17.9443C21.8469 18.0439 22.0059 18.1133 22.1178 18.0873C22.1956 18.0693 22.2271 18.04 22.29 17.9816C22.5767 17.7153 22.7553 17.3356 22.7493 16.9108C22.7172 14.6641 22.4622 13.2372 21.9797 11.9302C21.7261 11.2433 21.201 10.7209 20.5721 10.4281C19.948 10.1376 18.9519 9.6918 18.0432 9.36596C18.0261 9.35984 18.0138 9.34917 18.0064 9.33779C16.4233 6.88535 14.5511 5.27059 13.2694 4.44843C12.5885 4.01168 11.8202 3.875 11.1315 3.875H6.44656ZM7.93448 8.14152C7.83728 8.02452 7.87775 7.86286 7.95868 7.53954C8.04282 7.20343 8.14722 6.88039 8.26218 6.58151C8.32395 6.42091 8.38696 6.27185 8.44929 6.13517C8.51974 5.98068 8.55497 5.90344 8.6291 5.85577C8.70323 5.80811 8.793 5.80811 8.97254 5.80811H11.1317C11.5754 5.80811 11.9373 5.89782 12.2061 6.0703C12.6799 6.3742 13.2746 6.82567 13.9146 7.42871C14.4293 7.91368 14.6867 8.15616 14.5923 8.35369C14.4979 8.55123 14.1294 8.50093 13.3925 8.40032C11.8774 8.1935 10.269 8.12201 8.56794 8.2258C8.21044 8.24761 8.03168 8.25852 7.93448 8.14152ZM8 10.125C7.44772 10.125 7 10.5727 7 11.125C7 11.6773 7.44772 12.125 8 12.125H9C9.55228 12.125 10 11.6773 10 11.125C10 10.5727 9.55228 10.125 9 10.125H8Z',
  d10: 'M5.21734 4.32539C5.58607 3.99911 6.04091 3.875 6.44656 3.875H11.1315C11.8202 3.875 12.5885 4.01168 13.2694 4.44843C14.5511 5.27059 16.4233 6.88535 18.0064 9.33779C18.0138 9.34917 18.0261 9.35984 18.0432 9.36596C18.9519 9.6918 19.948 10.1376 20.5721 10.4281C21.201 10.7209 21.7261 11.2433 21.9797 11.9302C22.4622 13.2372 22.7172 14.6641 22.7493 16.9108C22.7553 17.3356 22.5767 17.7153 22.29 17.9816C22.2271 18.04 22.1956 18.0693 22.1178 18.0873C22.0059 18.1133 21.8469 18.0439 21.7897 17.9443C21.75 17.875 21.75 17.7916 21.75 17.625C21.75 15.5539 20.0711 13.875 18 13.875C15.9289 13.875 14.25 15.5539 14.25 17.625C14.25 17.7968 14.2615 17.9658 14.2839 18.1314C14.301 18.2583 14.2077 18.375 14.0797 18.375H9.91918C9.79179 18.375 9.69885 18.2588 9.71593 18.1326C9.7384 17.9666 9.75 17.7972 9.75 17.625C9.75 15.5539 8.07107 13.875 6 13.875C3.92893 13.875 2.25 15.5539 2.25 17.625C2.25 17.7901 2.26067 17.9527 2.28136 18.1122C2.29146 18.1901 2.21554 18.2501 2.14431 18.217C1.6195 17.9733 1.20966 17.4694 1.25317 16.859C1.3061 16.1165 1.48618 14.5889 2.14772 13.2198C2.21042 13.09 2.20903 13.0946 2.21219 12.9558C2.24629 11.455 2.48032 9.83711 2.91895 8.37108C3.38805 6.80324 4.12647 5.29067 5.21734 4.32539Z',
  d11: 'M7.95798 7.54003C7.87705 7.86335 7.83659 8.02501 7.93379 8.14201C8.03099 8.25901 8.20974 8.2481 8.56724 8.22629C10.2683 8.1225 11.8767 8.19399 13.3918 8.40081C14.1288 8.50141 14.4972 8.55172 14.5916 8.35418C14.686 8.15665 14.4286 7.91417 13.9139 7.4292C13.2739 6.82616 12.6792 6.37469 12.2055 6.07079C11.9366 5.89831 11.5747 5.80859 11.131 5.80859H8.97184C8.61276 5.80859 8.5895 5.82668 8.44859 6.13566C8.38626 6.27234 8.32325 6.4214 8.26148 6.58199C8.14653 6.88088 8.04212 7.20392 7.95798 7.54003Z',
  d12: 'M7 11.125C7 10.5727 7.44772 10.125 8 10.125H9C9.55228 10.125 10 10.5727 10 11.125C10 11.6773 9.55228 12.125 9 12.125H8C7.44772 12.125 7 11.6773 7 11.125Z',
  d13: 'M2.98031 13.2888C2.00098 15.0568 2.00098 17.5 2.00098 17.5H3.98152M2.98031 13.2888C3.00098 10 3.50098 7 5.99979 4.5H13.001C16.501 6.5 17.501 9 17.501 9L22.001 12V17.5H20.0008M2.98031 13.2888C2.98031 13.2888 4.00098 11.5 5.99979 11.5M15.996 17.5H7.98633',
  d14: 'M17.5 9H8.50043L8.5 4.5',
  d15: 'M8 11.5H9.5',
  d16: 'M6.49805 20.25C7.87876 20.25 8.99805 19.1307 8.99805 17.75C8.99805 16.3693 7.87876 15.25 6.49805 15.25C5.11733 15.25 3.99805 16.3693 3.99805 17.75C3.99805 19.1307 5.11733 20.25 6.49805 20.25Z',
  d17: 'M17.498 20.25C18.8788 20.25 19.998 19.1307 19.998 17.75C19.998 16.3693 18.8788 15.25 17.498 15.25C16.1173 15.25 14.998 16.3693 14.998 17.75C14.998 19.1307 16.1173 20.25 17.498 20.25Z',
  d18: 'M6.1352 3.75C5.87594 3.75 5.62729 3.85191 5.444 4.03329C2.79456 6.65522 2.25339 9.7834 2.20947 12.9693C1.73048 13.9146 1.49756 14.9583 1.38005 15.7481C1.31534 16.183 1.28296 16.56 1.26669 16.8301C1.25853 16.9654 1.25 17.1172 1.25 17.2833C1.25 17.8172 1.68754 18.25 2.22727 18.25H2.78304C2.76125 18.0864 2.75 17.9195 2.75 17.75C2.75 15.6789 4.42893 14 6.5 14C8.57107 14 10.25 15.6789 10.25 17.75C10.25 17.9195 10.2388 18.0864 10.217 18.25H13.783C13.7612 18.0864 13.75 17.9195 13.75 17.75C13.75 15.6789 15.4289 14 17.5 14C19.5711 14 21.25 15.6789 21.25 17.75C21.25 17.9195 21.2388 18.0864 21.217 18.25H21.7727C22.3125 18.25 22.75 17.8172 22.75 17.2833V11.9667C22.75 11.6435 22.5867 11.3416 22.3148 11.1624L18.143 8.41131C18.1093 8.34588 18.0692 8.27086 18.022 8.18729C17.8543 7.89056 17.5975 7.48548 17.2273 7.01944C16.4856 6.08581 15.2927 4.91202 13.4621 3.87736C13.3145 3.7939 13.1473 3.75 12.9773 3.75H6.1352ZM12.7138 5.68359C14.1771 6.54849 15.1176 7.49174 15.6914 8.21415C15.9374 8.5238 16.1166 8.79364 16.2408 9.00026H8.50032L8.5 5.68359H12.7138ZM10.5 12.25H8.5V10.75H10.5V12.25Z',
};

export const IconCar04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="car-04-stroke-rounded IconCar04StrokeRounded"
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
        strokeLinejoin="round" 
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

export const IconCar04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="car-04-duotone-rounded IconCar04DuotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
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

export const IconCar04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="car-04-twotone-rounded IconCar04TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconCar04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="car-04-solid-rounded IconCar04SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconCar04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="car-04-bulk-rounded IconCar04BulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCar04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="car-04-stroke-sharp IconCar04StrokeSharp"
    >
      <path 
        d={d.d13} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCar04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="car-04-solid-sharp IconCar04SolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCar04: TheIconSelfPack = {
  name: 'Car04',
  StrokeRounded: IconCar04StrokeRounded,
  DuotoneRounded: IconCar04DuotoneRounded,
  TwotoneRounded: IconCar04TwotoneRounded,
  SolidRounded: IconCar04SolidRounded,
  BulkRounded: IconCar04BulkRounded,
  StrokeSharp: IconCar04StrokeSharp,
  SolidSharp: IconCar04SolidSharp,
};