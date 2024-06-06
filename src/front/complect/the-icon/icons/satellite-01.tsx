import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.3068 15.3312C16.7859 18.8521 11.1336 18.908 7.61276 15.3872C4.09192 11.8663 4.14799 6.21408 7.66883 2.69323M20.3068 15.3312C21.9837 13.6543 20.5139 9.46584 17.0241 5.97596C13.5342 2.48608 9.34571 1.01635 7.66883 2.69323M20.3068 15.3312C18.6299 17.0081 14.4414 15.5384 10.9516 12.0485M7.66883 2.69323C5.99196 4.37011 7.46169 8.55859 10.9516 12.0485M10.9516 12.0485L14 9',
  d2: 'M6.48804 15L4.75106 17.4884C3.3523 19.4923 2.65291 20.4942 3.17039 21.2471C3.68787 22 5.07589 22 7.85193 22H12.1481C14.9241 22 16.3121 22 16.8296 21.2471C17.301 20.5612 16.7625 19.6686 15.6053 18',
  d3: 'M15.2825 17.8938C12.5707 18.3148 9.71263 17.4872 7.61276 15.3873C7.60423 15.3788 7.59572 15.3702 7.58724 15.3617L6.48804 15L4.75106 17.4884C3.3523 19.4923 2.65291 20.4942 3.17039 21.2471C3.68787 22 5.07589 22 7.85193 22H12.1481C14.9241 22 16.3121 22 16.8296 21.2471C17.301 20.5612 16.7625 19.6686 15.6053 18L15.2825 17.8938Z',
  d4: 'M20.3077 15.3312C21.9846 13.6543 20.5149 9.46584 17.025 5.97596C13.5351 2.48608 9.34666 1.01635 7.66979 2.69323C5.99291 4.37011 7.46264 8.55859 10.9525 12.0485C14.4424 15.5384 18.6309 17.0081 20.3077 15.3312Z',
  d5: 'M20.3068 15.3312C16.7859 18.8521 11.1336 18.908 7.61276 15.3872C4.09192 11.8663 4.14799 6.21408 7.66883 2.69323M20.3068 15.3312C21.9837 13.6543 20.5139 9.46584 17.0241 5.97596C13.5342 2.48608 9.34571 1.01635 7.66883 2.69323M20.3068 15.3312C18.6299 17.0081 14.4414 15.5384 10.9516 12.0485C7.46169 8.55859 5.99196 4.37011 7.66883 2.69323',
  d6: 'M10.9512 12.0485L13.9996 9',
  d7: 'M20.792 15.8704C22.0223 14.6401 21.9199 12.7126 21.3099 10.9742C20.6742 9.16269 19.3767 7.17613 17.6003 5.3997C15.8239 3.62326 13.8373 2.32578 12.0259 1.69013C10.2874 1.08011 8.3599 0.977705 7.12959 2.20802C3.33466 6.00296 3.2643 12.1141 7.07507 15.9249C10.8858 19.7356 16.997 19.6654 20.792 15.8704ZM8.50528 3.58292C8.90534 3.18287 9.82918 2.97976 11.3827 3.5249C12.8633 4.04441 14.6094 5.15795 16.226 6.7746C17.8427 8.39125 18.9562 10.1374 19.4757 11.6179C20.0209 13.1715 19.8178 14.0953 19.4177 14.4954C19.0176 14.8954 18.0938 15.0985 16.5403 14.5534C15.2734 14.1089 13.812 13.2294 12.4038 11.9719L14.6609 9.71477C15.0406 9.33508 15.0406 8.71947 14.6609 8.33978C14.2812 7.96009 13.6656 7.96009 13.2859 8.33978L11.0288 10.5969C9.7713 9.18861 8.89181 7.72726 8.44726 6.46037C7.90213 4.90683 8.10523 3.98298 8.50528 3.58292Z',
  d8: 'M4.99907 15.8223L4.13653 17.0579C3.47183 18.0101 2.87784 18.861 2.56617 19.5117C2.24396 20.1845 2.06125 20.9556 2.55277 21.6707C3.00616 22.3304 3.77627 22.5503 4.57234 22.649C5.37729 22.7489 6.45595 22.7488 7.79695 22.7488H12.2039C13.5449 22.7488 14.6236 22.7489 15.4286 22.649C16.2246 22.5503 16.9948 22.3304 17.4482 21.6707C17.8935 21.0228 17.7852 20.3228 17.5187 19.697C17.512 19.6813 17.5052 19.6655 17.4982 19.6496C13.6082 20.9751 9.14349 20.1147 6.01443 16.9857C5.64427 16.6155 5.30586 16.2266 4.99907 15.8223Z',
  d9: 'M21.3099 10.9742C21.9199 12.7126 22.0223 14.6401 20.792 15.8704C16.997 19.6654 10.8858 19.7356 7.07507 15.9249C3.2643 12.1141 3.33466 6.00296 7.12959 2.20802C8.3599 0.977705 10.2874 1.08011 12.0259 1.69013C13.8373 2.32578 15.8239 3.62326 17.6003 5.3997C19.3767 7.17613 20.6742 9.16269 21.3099 10.9742ZM11.3827 3.5249C9.82918 2.97976 8.90534 3.18287 8.50528 3.58292C8.10523 3.98298 7.90213 4.90683 8.44726 6.46037C8.89181 7.72726 9.7713 9.18861 11.0288 10.5969C11.3547 10.9407 12.086 11.697 12.4038 11.9719C13.812 13.2294 15.2734 14.1089 16.5403 14.5534C18.0938 15.0985 19.0176 14.8954 19.4177 14.4954C19.8178 14.0953 20.0209 13.1715 19.4757 11.6179C18.9562 10.1374 17.8427 8.39125 16.226 6.7746C14.6094 5.15795 12.8633 4.04441 11.3827 3.5249Z',
  d10: 'M12.4043 11.9716L14.6614 9.71444C15.0411 9.33475 15.0411 8.71915 14.6614 8.33946C14.2817 7.95976 13.6661 7.95976 13.2864 8.33946L11.0293 10.5966C11.3552 10.9404 12.0865 11.6967 12.4043 11.9716Z',
  d11: 'M20.3068 15.3312C16.7859 18.8521 11.1336 18.908 7.61276 15.3872C4.09192 11.8663 4.14799 6.21408 7.66883 2.69323M20.3068 15.3312C21.9837 13.6543 20.5139 9.46584 17.0241 5.97596C13.5342 2.48608 9.34571 1.01635 7.66883 2.69323M20.3068 15.3312C18.6299 17.0081 14.4414 15.5384 10.9516 12.0485M7.66883 2.69323C5.99196 4.37011 7.46169 8.55859 10.9516 12.0485M10.9516 12.0485L14.5 8.5',
  d12: 'M6.48794 15L3 22H17.4999L15.6052 18',
  d13: 'M20.792 15.8704C22.0223 14.6401 21.9199 12.7126 21.3099 10.9742C20.6742 9.16269 19.3767 7.17613 17.6003 5.3997C15.8239 3.62326 13.8373 2.32578 12.0259 1.69013C10.2874 1.08011 8.3599 0.977705 7.12959 2.20802C3.33466 6.00296 3.2643 12.1141 7.07507 15.9249C10.8858 19.7356 16.997 19.6654 20.792 15.8704ZM8.50528 3.58292C8.90534 3.18287 9.82918 2.97976 11.3827 3.5249C12.8633 4.04441 14.6094 5.15795 16.226 6.7746C17.8427 8.39125 18.9562 10.1374 19.4757 11.6179C20.0209 13.1715 19.8178 14.0953 19.4177 14.4954C19.0176 14.8954 18.0938 15.0985 16.5403 14.5534C15.2734 14.1089 13.812 13.2294 12.4038 11.9719L15.147 9.22863L13.772 7.85365L11.0288 10.5969C9.77129 9.18861 8.89181 7.72726 8.44726 6.46037C7.90213 4.90683 8.10523 3.98298 8.50528 3.58292Z',
  d14: 'M5.14559 16.0117L2.32872 21.6649C2.21288 21.8974 2.22557 22.1733 2.36228 22.3942C2.499 22.615 2.74025 22.7494 3 22.7494H17.4999C17.757 22.7494 17.9962 22.6177 18.1337 22.4005C18.2711 22.1833 18.2878 21.9107 18.1777 21.6784L17.2548 19.73C13.4232 20.9389 9.07844 20.0502 6.01443 16.9862C5.70227 16.674 5.41268 16.3486 5.14559 16.0117Z',
};

export const IconSatellite01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-01-stroke-rounded IconSatellite01StrokeRounded"
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

export const IconSatellite01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-01-duotone-rounded IconSatellite01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
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

export const IconSatellite01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-01-twotone-rounded IconSatellite01TwotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconSatellite01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-01-solid-rounded IconSatellite01SolidRounded"
    >
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

export const IconSatellite01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-01-bulk-rounded IconSatellite01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSatellite01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-01-stroke-sharp IconSatellite01StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSatellite01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="satellite-01-solid-sharp IconSatellite01SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfSatellite01: TheIconSelfPack = {
  name: 'Satellite01',
  StrokeRounded: IconSatellite01StrokeRounded,
  DuotoneRounded: IconSatellite01DuotoneRounded,
  TwotoneRounded: IconSatellite01TwotoneRounded,
  SolidRounded: IconSatellite01SolidRounded,
  BulkRounded: IconSatellite01BulkRounded,
  StrokeSharp: IconSatellite01StrokeSharp,
  SolidSharp: IconSatellite01SolidSharp,
};