import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6H13C15.8284 6 17.2426 6 18.1213 6.87868C19 7.75736 19 9.17157 19 12C19 14.8284 19 16.2426 18.1213 17.1213C17.2426 18 15.8284 18 13 18H8C5.17157 18 3.75736 18 2.87868 17.1213C2 16.2426 2 14.8284 2 12Z',
  d2: 'M19 9.5L20.0272 9.6712C20.7085 9.78475 21.0491 9.84152 21.3076 10.0067C21.5618 10.1691 21.7612 10.4044 21.8796 10.6819C22 10.964 22 11.3093 22 12C22 12.6907 22 13.036 21.8796 13.3181C21.7612 13.5956 21.5618 13.8309 21.3076 13.9933C21.0491 14.1585 20.7085 14.2153 20.0272 14.3288L19 14.5',
  d3: 'M16.3918 5.36652C15.5248 5.24996 14.4225 5.24998 13.0549 5.25H7.94513C6.57754 5.24998 5.47521 5.24996 4.60825 5.36652C3.70814 5.48754 2.95027 5.74643 2.34835 6.34835C1.74643 6.95027 1.48754 7.70814 1.36652 8.60825C1.24996 9.47521 1.24998 10.5775 1.25 11.9451V12.0549C1.24998 13.4225 1.24996 14.5248 1.36652 15.3918C1.48754 16.2919 1.74643 17.0497 2.34835 17.6517C2.95027 18.2536 3.70814 18.5125 4.60825 18.6335C5.47521 18.75 6.57753 18.75 7.94512 18.75H13.0549C14.4225 18.75 15.5248 18.75 16.3918 18.6335C17.2919 18.5125 18.0497 18.2536 18.6517 17.6517C19.2536 17.0497 19.5125 16.2919 19.6335 15.3918C19.644 15.3131 19.6537 15.2326 19.6624 15.1501L20.1751 15.0646C20.4948 15.0114 20.7732 14.965 21.0025 14.9095C21.2462 14.8505 21.4848 14.7703 21.7115 14.6255C22.0929 14.3818 22.3919 14.0289 22.5695 13.6126C22.6751 13.3652 22.715 13.1166 22.7331 12.8665C22.7501 12.6313 22.7501 12.3491 22.7501 12.025V11.9753C22.7501 11.6512 22.7501 11.3689 22.7331 11.1337C22.715 10.8836 22.6751 10.6351 22.5695 10.3876C22.3919 9.97139 22.0929 9.6184 21.7115 9.37475C21.4848 9.22989 21.2462 9.14971 21.0025 9.09074C20.7732 9.03526 20.4949 8.98888 20.1751 8.93561L19.6624 8.85016C19.6537 8.76757 19.6441 8.68694 19.6335 8.60825C19.5125 7.70814 19.2536 6.95027 18.6517 6.34835C18.0497 5.74643 17.2919 5.48754 16.3918 5.36652ZM19.7418 10.3841C19.75 10.8606 19.75 11.3802 19.75 11.9451V12.0549C19.75 12.6199 19.75 13.1396 19.7418 13.6162L19.904 13.5891C20.2553 13.5306 20.4795 13.4927 20.6497 13.4516C20.8112 13.4125 20.8722 13.3817 20.9039 13.3614C21.031 13.2802 21.1307 13.1626 21.1899 13.0238C21.2047 12.9892 21.225 12.924 21.237 12.7583C21.2497 12.5836 21.2501 12.3562 21.2501 12.0001C21.2501 11.644 21.2497 11.4166 21.237 11.242C21.225 11.0762 21.2047 11.011 21.1899 10.9764C21.1307 10.8377 21.031 10.72 20.9039 10.6388C20.8722 10.6185 20.8112 10.5877 20.6497 10.5487C20.4795 10.5075 20.2553 10.4697 19.904 10.4111L19.7418 10.3841Z',
  d4: 'M19.6641 15.1513L20.1761 15.0659C20.4958 15.0126 20.7742 14.9663 21.0034 14.9108C21.2472 14.8518 21.4857 14.7716 21.7125 14.6268C22.0938 14.3831 22.3929 14.0301 22.5705 13.6139C22.6761 13.3665 22.716 13.1179 22.7341 12.8678C22.7511 12.6326 22.7511 12.3504 22.7511 12.0263V11.9766C22.7511 11.6525 22.7511 11.3702 22.7341 11.135C22.716 10.8849 22.6761 10.6364 22.5705 10.3889C22.3929 9.97267 22.0938 9.61969 21.7125 9.37604C21.4857 9.23118 21.2472 9.151 21.0034 9.09203C20.7742 9.03655 20.4958 8.99017 20.1761 8.9369L19.6641 8.85156C19.7202 9.35723 19.742 9.87179 19.7498 10.3865L19.905 10.4124C20.2563 10.4709 20.4805 10.5088 20.6507 10.55C20.8122 10.589 20.8732 10.6198 20.9049 10.6401C21.032 10.7213 21.1317 10.839 21.1909 10.9777C21.2057 11.0123 21.226 11.0775 21.238 11.2433C21.2506 11.4179 21.2511 11.6453 21.2511 12.0014C21.2511 12.3575 21.2506 12.5849 21.238 12.7595C21.226 12.9253 21.2057 12.9905 21.1909 13.0251C21.1317 13.1639 21.032 13.2815 20.9049 13.3627C20.8732 13.383 20.8122 13.4138 20.6507 13.4529C20.4805 13.494 20.2563 13.5319 19.905 13.5904L19.7497 13.6163C19.742 14.131 19.7202 14.6456 19.6641 15.1513Z',
  d5: 'M13.0549 5.25H13.0549H7.94513H7.94511C6.57754 5.24998 5.47521 5.24996 4.60825 5.36652C3.70814 5.48754 2.95027 5.74643 2.34835 6.34835C1.74643 6.95027 1.48754 7.70814 1.36652 8.60825C1.24996 9.47521 1.24998 10.5775 1.25 11.9451V11.9451V12.0549V12.0549C1.24998 13.4225 1.24996 14.5248 1.36652 15.3918C1.48754 16.2919 1.74643 17.0497 2.34835 17.6517C2.95027 18.2536 3.70814 18.5125 4.60825 18.6335C5.47521 18.75 6.57753 18.75 7.94511 18.75H7.94512H13.0549H13.0549C14.4225 18.75 15.5248 18.75 16.3918 18.6335C17.2919 18.5125 18.0497 18.2536 18.6517 17.6517C19.2536 17.0497 19.5125 16.2919 19.6335 15.3918C19.7805 14.2983 19.75 13.1561 19.75 12.0549V11.9451C19.75 10.8439 19.7805 9.70175 19.6335 8.60825C19.5125 7.70814 19.2536 6.95027 18.6517 6.34835C18.0497 5.74643 17.2919 5.48754 16.3918 5.36652C15.5248 5.24996 14.4225 5.24998 13.0549 5.25Z',
  d6: 'M19 6H2V18H19V6Z',
  d7: 'M19 9.5L22 10.0067V13.9933L19 14.5',
  d8: 'M1.25 6C1.25 5.58579 1.58579 5.25 2 5.25H19C19.4142 5.25 19.75 5.58579 19.75 6V18C19.75 18.4142 19.4142 18.75 19 18.75H2C1.58579 18.75 1.25 18.4142 1.25 18V6Z',
  d9: 'M18.2606 9.37522C18.3296 8.96679 18.7166 8.69161 19.125 8.76059L22.7501 9.37281V14.6274L19.125 15.2396C18.7166 15.3086 18.3296 15.0334 18.2606 14.625C18.1916 14.2166 18.4668 13.8296 18.8752 13.7606L21.2501 13.3595V10.6407L18.8752 10.2396C18.4668 10.1707 18.1916 9.78365 18.2606 9.37522Z',
} as const;

export const IconBatteryEmptyStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-empty-stroke-rounded IconBatteryEmptyStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBatteryEmptyDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-empty-duotone-rounded IconBatteryEmptyDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBatteryEmptyTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-empty-twotone-rounded IconBatteryEmptyTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconBatteryEmptySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-empty-solid-rounded IconBatteryEmptySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBatteryEmptyBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-empty-bulk-rounded IconBatteryEmptyBulkRounded"
    >
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

export const IconBatteryEmptyStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-empty-stroke-sharp IconBatteryEmptyStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBatteryEmptySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-empty-solid-sharp IconBatteryEmptySolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfBatteryEmpty: TheIconSelfPack = {
  name: 'BatteryEmpty',
  StrokeRounded: IconBatteryEmptyStrokeRounded,
  DuotoneRounded: IconBatteryEmptyDuotoneRounded,
  TwotoneRounded: IconBatteryEmptyTwotoneRounded,
  SolidRounded: IconBatteryEmptySolidRounded,
  BulkRounded: IconBatteryEmptyBulkRounded,
  StrokeSharp: IconBatteryEmptyStrokeSharp,
  SolidSharp: IconBatteryEmptySolidSharp,
};