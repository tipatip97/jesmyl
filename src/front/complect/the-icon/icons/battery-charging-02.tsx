import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 6C5.17157 6 3.75736 6 2.87868 6.87868C2 7.75736 2 9.17157 2 12C2 14.8284 2 16.2426 2.87868 17.1213C3.44798 17.6906 4.24209 17.8911 5.5 17.9616M12 17.9827L13 18C15.8284 18 17.2426 18 18.1213 17.1213C19 16.2426 19 14.8284 19 12C19 9.17157 19 7.75736 18.1213 6.87868C17.414 6.17137 16.3597 6.03342 14.5 6.00652',
  d2: 'M11.5623 6L8.59169 10.4367C8.13166 11.1237 7.90164 11.4673 8.03989 11.7336C8.17814 12 8.58645 12 9.40307 12H10.5969C11.4136 12 11.8219 12 11.9601 12.2664C12.0984 12.5327 11.8683 12.8763 11.4083 13.5633L8.43769 18',
  d3: 'M19 9.5L20.0272 9.6712C20.7085 9.78475 21.0491 9.84152 21.3076 10.0067C21.5618 10.1691 21.7612 10.4044 21.8796 10.6819C22 10.964 22 11.3093 22 12C22 12.6907 22 13.036 21.8796 13.3181C21.7612 13.5956 21.5618 13.8309 21.3076 13.9933C21.0491 14.1585 20.7085 14.2153 20.0272 14.3288L19 14.5',
  d4: 'M2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6H13C15.8284 6 17.2426 6 18.1213 6.87868C19 7.75736 19 9.17157 19 12C19 14.8284 19 16.2426 18.1213 17.1213C17.2426 18 15.8284 18 13 18H8C5.17157 18 3.75736 18 2.87868 17.1213C2 16.2426 2 14.8284 2 12Z',
  d5: 'M11.98 5.37687C12.3242 5.60733 12.4164 6.07317 12.186 6.41735L8.95499 11.2477L10.6468 11.2501C11.0119 11.25 11.3668 11.2499 11.6449 11.2917C11.9386 11.3359 12.3872 11.4604 12.6262 11.921C12.8625 12.3761 12.7131 12.8133 12.5861 13.0798C12.4644 13.3352 12.2655 13.632 12.0591 13.9402L9.06135 18.4174C8.83089 18.7615 8.36505 18.8537 8.02087 18.6233C7.67668 18.3928 7.58448 17.927 7.81494 17.5828L11.0459 12.7524L9.35407 12.7501C8.98899 12.7502 8.63407 12.7503 8.35602 12.7084C8.06232 12.6643 7.6137 12.5398 7.37466 12.0792C7.13842 11.624 7.28782 11.1869 7.41484 10.9203C7.53653 10.665 7.73539 10.3681 7.94182 10.06L7.94183 10.06L10.9396 5.5828C11.17 5.23862 11.6358 5.14642 11.98 5.37687Z',
  d6: 'M13.0549 18.75H11.7499C11.2597 18.75 11.0147 18.75 10.9297 18.5924C10.8447 18.4349 10.9793 18.2301 11.2485 17.8205L13.94 13.7252C14.1221 13.3431 14.5301 12.3334 13.9575 11.23C13.6334 10.6056 13.1132 10.2502 12.6419 10.0467C12.2181 9.86376 12.0063 9.7723 11.9665 9.63747C11.9267 9.50264 12.0378 9.33658 12.26 9.00446L13.4326 7.25131C13.6731 6.89186 13.7964 6.48822 13.8113 6.08555C13.8278 5.64014 13.8361 5.41743 13.9248 5.3332C14.0136 5.24898 14.187 5.25161 14.534 5.25687C15.2455 5.26766 15.8625 5.29537 16.3918 5.36653C17.2919 5.48754 18.0497 5.74644 18.6517 6.34835C19.2536 6.95027 19.5125 7.70814 19.6335 8.60825C19.6361 8.62787 19.6374 8.63769 19.6386 8.64408C19.6606 8.76713 19.7495 8.8589 19.8718 8.88477C19.8782 8.88611 19.8864 8.88748 19.9027 8.89021L20.1751 8.93561C20.4949 8.98889 20.7732 9.03527 21.0025 9.09074C21.2462 9.14971 21.4848 9.22989 21.7115 9.37475C22.0929 9.6184 22.3919 9.97139 22.5695 10.3876C22.6751 10.6351 22.715 10.8836 22.7331 11.1337C22.7501 11.3689 22.7501 11.6512 22.7501 11.9753V12.025C22.7501 12.3491 22.7501 12.6313 22.7331 12.8665C22.715 13.1166 22.6751 13.3652 22.5695 13.6126C22.3919 14.0289 22.0929 14.3818 21.7115 14.6255C21.4848 14.7703 21.2462 14.8505 21.0025 14.9095C20.7732 14.965 20.4948 15.0114 20.1751 15.0646L19.9025 15.1101C19.8863 15.1128 19.8782 15.1141 19.872 15.1154C19.7495 15.1413 19.6605 15.2332 19.6385 15.3564C19.6374 15.3627 19.6361 15.3724 19.6335 15.3918C19.5125 16.2919 19.2536 17.0497 18.6517 17.6517C18.0497 18.2536 17.2919 18.5125 16.3918 18.6335C15.5248 18.75 14.4224 18.75 13.0549 18.75ZM19.9044 10.4113C19.82 10.3973 19.7436 10.4631 19.7447 10.5487C19.7504 10.9797 19.7504 11.4447 19.7504 11.9453V12.0551C19.7504 12.5558 19.7504 13.0209 19.7447 13.4519C19.7436 13.5375 19.82 13.6034 19.9044 13.5893C20.2557 13.5308 20.4799 13.4929 20.6501 13.4518C20.8116 13.4127 20.8726 13.3819 20.9043 13.3616C21.0314 13.2804 21.1311 13.1628 21.1903 13.024C21.2051 12.9894 21.2254 12.9242 21.2374 12.7585C21.25 12.5838 21.2505 12.3564 21.2505 12.0003C21.2505 11.6442 21.25 11.4168 21.2374 11.2422C21.2254 11.0764 21.2051 11.0112 21.1903 10.9766C21.1311 10.8379 21.0314 10.7202 20.9043 10.639C20.8726 10.6187 20.8116 10.5879 20.6501 10.5489C20.4799 10.5077 20.2557 10.4699 19.9044 10.4113Z',
  d7: 'M7.94511 5.25H8.23338C8.72793 5.25 8.97521 5.25 9.05994 5.40871C9.14467 5.56742 9.0071 5.77289 8.73194 6.18382L6.6668 9.26809C6.48313 9.54198 6.23072 9.91836 6.06075 10.275C5.87869 10.657 5.47063 11.6668 6.04329 12.7702C6.36732 13.3945 6.88757 13.75 7.35891 13.9534C7.78262 14.1364 7.99448 14.2279 8.03426 14.3627C8.07403 14.4975 7.96295 14.6636 7.7408 14.9957L6.56814 16.7488C6.33184 17.102 6.20873 17.4978 6.19034 17.8934C6.16931 18.3457 6.1588 18.5718 6.06588 18.6556C5.97296 18.7394 5.79956 18.7296 5.45277 18.7101C5.14955 18.6929 4.86831 18.6684 4.60825 18.6335C3.70814 18.5125 2.95027 18.2536 2.34835 17.6517C1.74644 17.0497 1.48754 16.2919 1.36653 15.3918C1.24997 14.5248 1.24998 13.4225 1.25 12.0549V11.9451C1.24998 10.5775 1.24997 9.47521 1.36653 8.60825C1.48754 7.70814 1.74644 6.95027 2.34835 6.34835C2.95027 5.74644 3.70814 5.48754 4.60825 5.36653C5.47521 5.24997 6.57754 5.24998 7.94511 5.25Z',
  d8: 'M13.0549 18.75H11.7499C11.2597 18.75 11.0147 18.75 10.9297 18.5924C10.8447 18.4349 10.9793 18.2301 11.2485 17.8205L13.94 13.7252C14.1221 13.3431 14.5301 12.3334 13.9575 11.23C13.6334 10.6056 13.1132 10.2502 12.6419 10.0467C12.2181 9.86376 12.0063 9.77229 11.9665 9.63747C11.9267 9.50264 12.0378 9.33658 12.26 9.00446L13.4326 7.25131C13.6731 6.89186 13.7964 6.48822 13.8113 6.08555C13.8278 5.64014 13.8361 5.41743 13.9248 5.3332C14.0136 5.24898 14.187 5.25161 14.534 5.25687C15.2455 5.26766 15.8625 5.29537 16.3918 5.36653C17.2919 5.48754 18.0497 5.74644 18.6517 6.34835C19.2536 6.95027 19.5125 7.70814 19.6335 8.60825C19.6361 8.62787 19.6374 8.63769 19.6386 8.64408C19.6606 8.76713 19.7495 8.8589 19.8718 8.88477C19.8782 8.88611 19.8864 8.88748 19.9027 8.89021L20.1751 8.93561C20.4949 8.98889 20.7732 9.03527 21.0025 9.09074C21.2462 9.14971 21.4848 9.22989 21.7115 9.37475C22.0929 9.6184 22.3919 9.97139 22.5695 10.3876C22.6751 10.6351 22.715 10.8836 22.7331 11.1337C22.7501 11.3689 22.7501 11.6512 22.7501 11.9753V12.025C22.7501 12.3491 22.7501 12.6313 22.7331 12.8665C22.715 13.1166 22.6751 13.3652 22.5695 13.6126C22.3919 14.0289 22.0929 14.3818 21.7115 14.6255C21.4848 14.7703 21.2462 14.8505 21.0025 14.9095C20.7732 14.965 20.4948 15.0114 20.1751 15.0646L19.9025 15.1101C19.8863 15.1128 19.8782 15.1141 19.872 15.1154C19.7495 15.1413 19.6605 15.2332 19.6385 15.3564C19.6374 15.3627 19.6361 15.3724 19.6335 15.3918C19.5125 16.2919 19.2536 17.0497 18.6517 17.6517C18.0497 18.2536 17.2919 18.5125 16.3918 18.6335C15.5248 18.75 14.4224 18.75 13.0549 18.75ZM19.9044 10.4113C19.82 10.3973 19.7436 10.4631 19.7447 10.5487C19.7504 10.9797 19.7504 11.4447 19.7504 11.9453V12.0551C19.7504 12.5558 19.7504 13.0209 19.7447 13.4519C19.7435 13.5375 19.82 13.6034 19.9044 13.5893C20.2557 13.5308 20.4799 13.4929 20.6501 13.4518C20.8116 13.4127 20.8726 13.3819 20.9043 13.3616C21.0314 13.2804 21.1311 13.1628 21.1903 13.024C21.2051 12.9894 21.2254 12.9242 21.2374 12.7585C21.25 12.5838 21.2505 12.3564 21.2505 12.0003C21.2505 11.6442 21.25 11.4168 21.2374 11.2422C21.2254 11.0764 21.2051 11.0112 21.1903 10.9766C21.1311 10.8379 21.0314 10.7202 20.9043 10.639C20.8726 10.6187 20.8116 10.5879 20.6501 10.5489C20.4799 10.5077 20.2557 10.4699 19.9044 10.4113Z',
  d9: 'M14 6H19V18H12M8 6H2V18H6',
  d10: 'M19 9.5L22 10.0067V13.9933L19 14.5',
  d11: 'M11.5625 6L8.00195 12H12.0002L8.43785 18',
  d12: 'M10.9163 5.61719L12.2063 6.38268L9.31795 11.2499H13.3165L9.08157 18.3828L7.79177 17.617L10.6815 12.7499H6.68359L10.9163 5.61719Z',
  d13: 'M9.68066 5.25H2C1.58579 5.25 1.25 5.58579 1.25 6V18C1.25 18.4142 1.58579 18.75 2 18.75H7.25151L6.07877 18.0537L8.48558 13.9999H4.48828L9.68066 5.25Z',
  d14: 'M10.3173 18.75H19C19.4142 18.75 19.75 18.4142 19.75 18V15.1341L22.7501 14.6274V9.37281L19.75 8.86614V6C19.75 5.58579 19.4142 5.25 19 5.25H12.7469L13.9191 5.94561L11.5132 9.99993H15.5123L10.3173 18.75ZM19.75 13.6129V10.3874L21.2501 10.6407V13.3595L19.75 13.6129Z',
};

export const IconBatteryCharging02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-charging-02-stroke-rounded IconBatteryCharging02StrokeRounded"
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

export const IconBatteryCharging02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-charging-02-duotone-rounded IconBatteryCharging02DuotoneRounded"
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

export const IconBatteryCharging02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-charging-02-twotone-rounded IconBatteryCharging02TwotoneRounded"
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

export const IconBatteryCharging02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-charging-02-solid-rounded IconBatteryCharging02SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBatteryCharging02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-charging-02-bulk-rounded IconBatteryCharging02BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBatteryCharging02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-charging-02-stroke-sharp IconBatteryCharging02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBatteryCharging02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="battery-charging-02-solid-sharp IconBatteryCharging02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBatteryCharging02: TheIconSelfPack = {
  name: 'BatteryCharging02',
  StrokeRounded: IconBatteryCharging02StrokeRounded,
  DuotoneRounded: IconBatteryCharging02DuotoneRounded,
  TwotoneRounded: IconBatteryCharging02TwotoneRounded,
  SolidRounded: IconBatteryCharging02SolidRounded,
  BulkRounded: IconBatteryCharging02BulkRounded,
  StrokeSharp: IconBatteryCharging02StrokeSharp,
  SolidSharp: IconBatteryCharging02SolidSharp,
};