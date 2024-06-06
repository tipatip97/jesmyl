import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.9424 20.1646C10.2893 21.1435 8.93948 21.6161 7.57121 21.9011C5.54758 22.3225 3.5708 21.358 2.30947 19.7602C1.77638 19.0849 1.95852 18.3107 2.6524 17.9114L4.21891 17.0098C5.46056 16.2953 6.08139 15.938 6.73959 16.0088C7.39779 16.0797 7.93386 16.5616 9.00601 17.5253L11.9424 20.1646ZM11.9424 20.1646C13.5704 19.2007 15.1184 17.9704 16.5 16.5638',
  d2: 'M20.1646 11.9475C21.1435 10.2936 21.6161 8.94308 21.9011 7.5741C22.3225 5.54942 21.358 3.57162 19.7602 2.30963C19.0849 1.77627 18.3107 1.9585 17.9114 2.65274L17.0098 4.22006C16.2953 5.46236 15.938 6.08351 16.0088 6.74205C16.0797 7.40059 16.5616 7.93694 17.5253 9.00964L20.1646 11.9475ZM20.1646 11.9475C19.6448 12.8258 19.0474 13.6812 18.3863 14.5',
  d3: 'M2 2L22 22',
  d4: 'M20.1646 11.9475C21.1435 10.2936 21.6161 8.94308 21.9011 7.5741C22.3225 5.54942 21.358 3.57162 19.7602 2.30963C19.0849 1.77627 18.3107 1.9585 17.9114 2.65274L17.0098 4.22006C16.2953 5.46236 15.938 6.08351 16.0088 6.74205C16.0797 7.40059 16.5616 7.93694 17.5253 9.00964L20.1646 11.9475Z',
  d5: 'M11.9414 20.1646C10.2884 21.1435 8.93853 21.6161 7.57026 21.9011C5.54663 22.3225 3.56985 21.358 2.30852 19.7602C1.77543 19.0849 1.95757 18.3107 2.65145 17.9114L4.21796 17.0098C5.45961 16.2953 6.08044 15.938 6.73864 16.0088C7.39684 16.0797 7.93291 16.5616 9.00506 17.5253L11.9414 20.1646Z',
  d6: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d7: 'M18.6835 1.28657C18.1168 1.40369 17.6655 1.78443 17.3851 2.28746L16.4919 3.88991C16.1629 4.48011 15.886 4.9768 15.7052 5.40857C15.5134 5.86658 15.3995 6.31824 15.4516 6.8176C15.5036 7.31696 15.7083 7.7354 15.9905 8.14399C16.2565 8.52917 16.6299 8.95804 17.0736 9.46767L18.3866 10.9759C18.6219 11.2461 18.7395 11.3812 18.7503 11.5501C18.761 11.719 18.6646 11.8633 18.4718 12.1518C18.2042 12.5522 17.9214 12.9461 17.6249 13.3322C17.4667 13.5382 17.3876 13.6412 17.395 13.7539C17.4023 13.8666 17.4925 13.9567 17.6727 14.137L18.3545 14.8188C18.5754 15.0397 18.6859 15.1502 18.8216 15.1412C18.9573 15.1323 19.0506 15.0105 19.2373 14.7668C19.8416 13.978 20.3906 13.1573 20.8732 12.3157C21.8623 10.591 22.348 9.165 22.6396 7.71974C23.1139 5.36852 22.021 3.12724 20.3047 1.72833C19.8316 1.34279 19.2561 1.16822 18.6835 1.28657Z',
  d8: 'M9.46766 17.0736C8.95804 16.6299 8.52917 16.2565 8.14399 15.9905C7.7354 15.7083 7.31697 15.5036 6.8176 15.4516C6.31824 15.3995 5.86658 15.5134 5.40857 15.7052C4.97686 15.886 4.47998 16.163 3.8899 16.4919L2.28746 17.3851C1.78443 17.6655 1.40369 18.1168 1.28657 18.6835C1.16822 19.2561 1.34279 19.8316 1.72833 20.3047C3.12724 22.021 5.36852 23.1139 7.71974 22.6396C9.165 22.348 10.591 21.8623 12.3157 20.8732C13.8799 19.9761 15.3711 18.8506 16.719 17.5673C16.9214 17.3746 17.0226 17.2783 17.0241 17.1519C17.0257 17.0255 16.9252 16.925 16.7242 16.724L16.0421 16.0419C15.8432 15.843 15.7438 15.7436 15.6217 15.742C15.4997 15.7405 15.3959 15.8391 15.1883 16.0365C14.2401 16.9378 13.2191 17.7585 12.1519 18.4718C11.8634 18.6647 11.7191 18.7611 11.5502 18.7503C11.3813 18.7396 11.2462 18.6219 10.9759 18.3866L9.46766 17.0736Z',
  d9: 'M9.46766 17.0721C8.95804 16.6284 8.52917 16.255 8.14399 15.989C7.7354 15.7068 7.31697 15.5022 6.8176 15.4501C6.31824 15.398 5.86658 15.512 5.40857 15.7038C4.97686 15.8845 4.47998 16.1615 3.8899 16.4905L2.28746 17.3837C1.78443 17.6641 1.40369 18.1154 1.28657 18.682C1.16822 19.2546 1.34279 19.8302 1.72833 20.3032C3.12724 22.0196 5.36852 23.1124 7.71974 22.6381C9.165 22.3466 10.591 21.8609 12.3157 20.8717C13.8799 19.9747 15.3711 18.8491 16.719 17.5658C16.9214 17.3732 17.0226 17.2769 17.0241 17.1504C17.0257 17.024 16.9252 16.9235 16.7242 16.7226L16.0421 16.0405C15.8432 15.8416 15.7438 15.7421 15.6217 15.7406C15.4997 15.739 15.3959 15.8377 15.1883 16.0351C14.2401 16.9364 13.2191 17.757 12.1519 18.4704C11.8634 18.6632 11.7191 18.7596 11.5502 18.7489C11.3813 18.7381 11.2462 18.6205 10.9759 18.3852L9.46766 17.0721Z',
  d10: 'M18.682 1.28657C18.1154 1.40369 17.6641 1.78443 17.3837 2.28746L16.4905 3.88991C16.1614 4.48011 15.8846 4.9768 15.7038 5.40857C15.512 5.86658 15.398 6.31824 15.4501 6.8176C15.5022 7.31696 15.7068 7.7354 15.989 8.14399C16.255 8.52917 16.6284 8.95804 17.0721 9.46767L18.3851 10.9759C18.6204 11.2461 18.7381 11.3812 18.7488 11.5501C18.7596 11.719 18.6631 11.8633 18.4703 12.1518C18.2027 12.5522 17.92 12.9461 17.6235 13.3322C17.4653 13.5382 17.3862 13.6412 17.3935 13.7539C17.4009 13.8666 17.491 13.9567 17.6713 14.137L18.3531 14.8188C18.574 15.0397 18.6845 15.1502 18.8202 15.1412C18.9559 15.1323 19.0492 15.0105 19.2358 14.7668C19.8401 13.978 20.3891 13.1573 20.8718 12.3157C21.8609 10.591 22.3466 9.165 22.6381 7.71974C23.1124 5.36852 22.0196 3.12724 20.3032 1.72833C19.8302 1.34279 19.2546 1.16822 18.682 1.28657Z',
  d11: 'M12.0667 20.1593L8.05379 16.0267L2.0767 19.0478C2.07104 19.0507 2.06954 19.058 2.07354 19.0629C3.81166 21.1906 5.66051 22.1874 7.27215 21.9399C9.37365 21.6172 12.6802 20.3985 15.9247 17.2568C16.2239 17.0039 16.5449 16.7082 16.8766 16.3757M20.259 11.8371C21.5361 9.43157 22.7486 6.6837 21.2571 4.38447C20.9285 3.87799 19.6612 2.5056 18.9369 2.0338C18.9319 2.03054 18.9254 2.03256 18.9228 2.0379L15.9753 8.00319L20.259 11.8371ZM20.259 11.8371C19.6563 12.9724 18.9172 14.0336 18.1619 14.9532',
  d12: 'M21.336 22.75L1.25024 2.66421L2.66446 1.25L22.7502 21.3358L21.336 22.75Z',
  d13: 'M11.7473 18.9174C13.172 18.0523 14.5314 16.9746 15.7531 15.7521L17.1536 17.1565C15.6968 18.6143 14.0572 19.8868 12.3206 20.8831C10.5953 21.8729 9.16857 22.3591 7.72278 22.6508C4.66336 23.2672 2.2553 20.8831 1.25122 19.0189L8.16938 15.0788L11.7473 18.9174Z',
  d14: 'M22.6521 7.72156C22.3603 9.16735 21.8742 10.5941 20.8843 12.3194C20.2925 13.351 19.6017 14.3498 18.8328 15.2962L17.422 13.8853C17.971 13.1961 18.4728 12.4796 18.9183 11.7457L15.0801 8.16817L19.0201 1.25C20.8843 2.25408 23.2684 4.66214 22.6521 7.72156Z',
};

export const IconCallDisabledStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-disabled-stroke-rounded IconCallDisabledStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCallDisabledDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-disabled-duotone-rounded IconCallDisabledDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCallDisabledTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-disabled-twotone-rounded IconCallDisabledTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCallDisabledSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-disabled-solid-rounded IconCallDisabledSolidRounded"
    >
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallDisabledBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-disabled-bulk-rounded IconCallDisabledBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCallDisabledStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-disabled-stroke-sharp IconCallDisabledStrokeSharp"
    >
      <path 
        d={d.d3} 
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

export const IconCallDisabledSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="call-disabled-solid-sharp IconCallDisabledSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfCallDisabled: TheIconSelfPack = {
  name: 'CallDisabled',
  StrokeRounded: IconCallDisabledStrokeRounded,
  DuotoneRounded: IconCallDisabledDuotoneRounded,
  TwotoneRounded: IconCallDisabledTwotoneRounded,
  SolidRounded: IconCallDisabledSolidRounded,
  BulkRounded: IconCallDisabledBulkRounded,
  StrokeSharp: IconCallDisabledStrokeSharp,
  SolidSharp: IconCallDisabledSolidSharp,
};