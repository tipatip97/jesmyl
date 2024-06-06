import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6H13C15.8284 6 17.2426 6 18.1213 6.87868C19 7.75736 19 9.17157 19 12C19 14.8284 19 16.2426 18.1213 17.1213C17.2426 18 15.8284 18 13 18H8C5.17157 18 3.75736 18 2.87868 17.1213C2 16.2426 2 14.8284 2 12Z',
  d2: 'M19 9.5L20.0272 9.6712C20.7085 9.78475 21.0491 9.84152 21.3076 10.0067C21.5618 10.1691 21.7612 10.4044 21.8796 10.6819C22 10.964 22 11.3093 22 12C22 12.6907 22 13.036 21.8796 13.3181C21.7612 13.5956 21.5618 13.8309 21.3076 13.9933C21.0491 14.1585 20.7085 14.2153 20.0272 14.3288L19 14.5',
  d3: 'M6 10V14',
  d4: 'M13.0569 5.25C14.4245 5.24998 15.5268 5.24997 16.3937 5.36653C17.2938 5.48754 18.0517 5.74644 18.6536 6.34835C19.2555 6.95027 19.5144 7.70814 19.6354 8.60825C19.646 8.68694 19.6556 8.76757 19.6644 8.85016L20.1771 8.93561C20.4968 8.98888 20.7752 9.03527 21.0044 9.09074C21.2481 9.14971 21.4867 9.22989 21.7135 9.37475C22.0948 9.6184 22.3938 9.97139 22.5715 10.3876C22.6771 10.6351 22.717 10.8836 22.7351 11.1337C22.7521 11.3689 22.7521 11.6512 22.7521 11.9753V12.025C22.7521 12.3491 22.7521 12.6313 22.7351 12.8665C22.717 13.1166 22.6771 13.3652 22.5715 13.6126C22.3938 14.0289 22.0948 14.3818 21.7135 14.6255C21.4867 14.7703 21.2481 14.8505 21.0044 14.9095C20.7751 14.965 20.4968 15.0114 20.1771 15.0646L19.6644 15.1501C19.6556 15.2326 19.646 15.3131 19.6354 15.3918C19.5144 16.2919 19.2555 17.0497 18.6536 17.6517C18.0517 18.2536 17.2938 18.5125 16.3937 18.6335C15.5268 18.75 14.4244 18.75 13.0569 18.75H13.0569H13.0568H13.0568H7.94707H7.94706H7.94705H7.94704C6.57947 18.75 5.47716 18.75 4.6102 18.6335C3.7101 18.5125 2.95222 18.2536 2.35031 17.6517C1.74839 17.0497 1.4895 16.2919 1.36848 15.3918C1.25192 14.5248 1.25193 13.4225 1.25195 12.0549V12.0549V12.0549V11.9451V11.9451V11.9451C1.25193 10.5775 1.25192 9.47521 1.36848 8.60825C1.4895 7.70814 1.74839 6.95027 2.35031 6.34835C2.95222 5.74644 3.7101 5.48754 4.6102 5.36653C5.47716 5.24997 6.57947 5.24998 7.94704 5.25H7.94705H7.94706H13.0569H13.0569H13.0569ZM19.7523 11.9439C19.7523 11.379 19.7524 10.8593 19.7441 10.3828L19.9064 10.4098C20.2576 10.4684 20.4819 10.5062 20.652 10.5474C20.8136 10.5865 20.8745 10.6173 20.9062 10.6375C21.0334 10.7187 21.133 10.8364 21.1923 10.9751C21.207 11.0098 21.2274 11.075 21.2394 11.2407C21.252 11.4153 21.2525 11.6427 21.2525 11.9989C21.2525 12.355 21.252 12.5824 21.2394 12.757C21.2274 12.9227 21.207 12.9879 21.1923 13.0226C21.133 13.1613 21.0334 13.279 20.9062 13.3602C20.8745 13.3805 20.8136 13.4112 20.652 13.4503C20.4819 13.4915 20.2576 13.5293 19.9064 13.5879L19.7441 13.6149C19.7524 13.1383 19.7523 12.6186 19.7523 12.0536V11.9439ZM6.00195 9.25C6.41617 9.25 6.75195 9.58579 6.75195 10V14C6.75195 14.4142 6.41617 14.75 6.00195 14.75C5.58774 14.75 5.25195 14.4142 5.25195 14V10C5.25195 9.58579 5.58774 9.25 6.00195 9.25Z',
  d5: 'M16.3937 5.36653C15.5267 5.24997 14.4244 5.24998 13.0569 5.25H13.0569H7.94706H7.94705C6.57948 5.24998 5.47716 5.24997 4.6102 5.36653C3.7101 5.48754 2.95222 5.74644 2.3503 6.34835C1.74839 6.95027 1.48949 7.70814 1.36848 8.60825C1.25192 9.47521 1.25193 10.5775 1.25195 11.9451V11.9451V12.0549V12.0549C1.25193 13.4225 1.25192 14.5248 1.36848 15.3918C1.48949 16.2919 1.74839 17.0497 2.3503 17.6517C2.95222 18.2536 3.7101 18.5125 4.6102 18.6335C5.47716 18.75 6.57948 18.75 7.94705 18.75H7.94706H7.94707H13.0568H13.0568H13.0569C14.4244 18.75 15.5267 18.75 16.3937 18.6335C17.2938 18.5125 18.0517 18.2536 18.6536 17.6517C19.2555 17.0497 19.5144 16.2919 19.6354 15.3918C19.646 15.3131 19.6556 15.2326 19.6644 15.1501L20.1771 15.0646C20.4968 15.0114 20.7751 14.965 21.0044 14.9095C21.2481 14.8505 21.4867 14.7703 21.7135 14.6255C22.0948 14.3818 22.3938 14.0289 22.5715 13.6126C22.6771 13.3652 22.717 13.1166 22.7351 12.8665C22.7521 12.6313 22.7521 12.3491 22.7521 12.025V11.9753C22.7521 11.6512 22.7521 11.3689 22.7351 11.1337C22.717 10.8836 22.6771 10.6351 22.5715 10.3876C22.3938 9.97139 22.0948 9.6184 21.7135 9.37475C21.4867 9.22989 21.2481 9.14971 21.0044 9.09074C20.7752 9.03527 20.4968 8.98888 20.1771 8.93561L19.6644 8.85016C19.6556 8.76757 19.646 8.68694 19.6354 8.60825C19.5144 7.70814 19.2555 6.95027 18.6536 6.34835C18.0517 5.74644 17.2938 5.48754 16.3937 5.36653ZM19.7441 10.3828C19.7524 10.8593 19.7523 11.379 19.7523 11.9439V12.0536C19.7523 12.6186 19.7524 13.1383 19.7441 13.6149L19.9064 13.5879C20.2576 13.5293 20.4819 13.4915 20.652 13.4503C20.8136 13.4112 20.8745 13.3805 20.9062 13.3602C21.0334 13.279 21.133 13.1613 21.1923 13.0226C21.207 12.9879 21.2274 12.9227 21.2394 12.757C21.252 12.5824 21.2525 12.355 21.2525 11.9989C21.2525 11.6427 21.252 11.4153 21.2394 11.2407C21.2274 11.075 21.207 11.0098 21.1923 10.9751C21.133 10.8364 21.0334 10.7187 20.9062 10.6375C20.8745 10.6173 20.8136 10.5865 20.652 10.5474C20.4819 10.5062 20.2576 10.4684 19.9064 10.4098L19.7441 10.3828Z',
  d6: 'M6.75195 10C6.75195 9.58579 6.41617 9.25 6.00195 9.25C5.58774 9.25 5.25195 9.58579 5.25195 10V14C5.25195 14.4142 5.58774 14.75 6.00195 14.75C6.41617 14.75 6.75195 14.4142 6.75195 14V10Z',
  d7: 'M19 6H2V18H19V6Z',
  d8: 'M19 9.5L22 10.0067V13.9933L19 14.5',
  d9: 'M6 9V15',
  d10: 'M1.25 6C1.25 5.58579 1.58579 5.25 2 5.25H19C19.4142 5.25 19.75 5.58579 19.75 6V8.86614L22.7501 9.37281V14.6274L19.75 15.1341V18C19.75 18.4142 19.4142 18.75 19 18.75H2C1.58579 18.75 1.25 18.4142 1.25 18V6ZM19.75 13.6129V10.3874L21.2501 10.6407V13.3595L19.75 13.6129ZM5.25 9V15H6.75V9H5.25Z',
};

export const IconBatteryLowStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-low-stroke-rounded IconBatteryLowStrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBatteryLowDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-low-duotone-rounded IconBatteryLowDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBatteryLowTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-low-twotone-rounded IconBatteryLowTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBatteryLowSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-low-solid-rounded IconBatteryLowSolidRounded"
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

export const IconBatteryLowBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-low-bulk-rounded IconBatteryLowBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBatteryLowStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-low-stroke-sharp IconBatteryLowStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBatteryLowSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-low-solid-sharp IconBatteryLowSolidSharp"
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

export const iconPackOfBatteryLow: TheIconSelfPack = {
  name: 'BatteryLow',
  StrokeRounded: IconBatteryLowStrokeRounded,
  DuotoneRounded: IconBatteryLowDuotoneRounded,
  TwotoneRounded: IconBatteryLowTwotoneRounded,
  SolidRounded: IconBatteryLowSolidRounded,
  BulkRounded: IconBatteryLowBulkRounded,
  StrokeSharp: IconBatteryLowStrokeSharp,
  SolidSharp: IconBatteryLowSolidSharp,
};