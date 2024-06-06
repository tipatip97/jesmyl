import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 10C2.77968 6.18409 5.66918 3.12932 9.40618 2.08977C9.71987 2.00251 9.87671 1.95888 9.96119 2.05236C10.0457 2.14584 9.98344 2.30042 9.85897 2.60956L9 4.5M14 2C17.8159 2.77968 20.8707 5.66918 21.9102 9.40618C21.9975 9.71987 22.0411 9.87671 21.9476 9.96119C21.8542 10.0457 21.6996 9.98344 21.3904 9.85897L19.5 9M22 14C21.2203 17.8159 18.3308 20.8707 14.5938 21.9102C14.2801 21.9975 14.1233 22.0411 14.0388 21.9476C13.9543 21.8542 14.0166 21.6996 14.141 21.3904L15 19.5M10 22C6.18409 21.2203 3.12932 18.3308 2.08977 14.5938C2.00251 14.2801 1.95888 14.1233 2.05236 14.0388C2.14584 13.9543 2.30042 14.0166 2.60956 14.141L4.5 15',
  d2: 'M8.61288 11.6647L12.112 7.17326C12.3857 6.82199 12.8986 7.04062 12.8986 7.50853V10.985C12.8986 11.2653 13.0998 11.4925 13.3479 11.4925H15.0498C15.4364 11.4925 15.6425 12.0074 15.3871 12.3353L11.888 16.8267C11.6143 17.178 11.1014 16.9594 11.1014 16.4915V13.015C11.1014 12.7347 10.9002 12.5075 10.6521 12.5075H8.95018C8.56356 12.5075 8.35747 11.9926 8.61288 11.6647Z',
  d3: 'M12.0801 22C6.513 22 2 17.5228 2 12C2 6.47715 6.513 2 12.0801 2C16.3104 2 19.9321 4.58521 21.4274 8.25C22.3182 10.6378 22.8299 16.3845 17.7501 20.2691C16.1346 21.3614 14.1825 22 12.0801 22ZM12.112 7.17326L8.61288 11.6647C8.35747 11.9926 8.56356 12.5075 8.95018 12.5075H10.6521C10.9002 12.5075 11.1014 12.7347 11.1014 13.015V16.4915C11.1014 16.9594 11.6143 17.178 11.888 16.8267L15.3871 12.3353C15.6425 12.0074 15.4364 11.4925 15.0498 11.4925H13.3479C13.0998 11.4925 12.8986 11.2653 12.8986 10.985V7.50853C12.8986 7.04062 12.3857 6.82199 12.112 7.17326Z',
  d4: 'M12.997 2.03181C13.1051 1.50302 13.6213 1.16193 14.1501 1.26997C18.2438 2.10641 21.5135 5.20282 22.6263 9.20327C22.6604 9.32471 22.7212 9.54199 22.7403 9.70983C22.7634 9.91233 22.7724 10.3749 22.3767 10.7326C21.9716 11.0987 21.5007 11.0309 21.3082 10.9864C21.1431 10.9482 20.9621 10.875 20.8421 10.8264L18.9251 9.95795C18.4338 9.73468 17.9004 9.20327 18.4397 8.66397L19.7217 7.38202C18.4151 5.25187 16.2721 3.69844 13.7589 3.18492C13.2301 3.07688 12.889 2.56061 12.997 2.03181Z',
  d5: 'M9.95795 5.07485C9.73468 5.56623 9.20327 6.09961 8.66397 5.5603L7.38201 4.27835C5.25187 5.58491 3.69844 7.72788 3.18492 10.2411C3.07688 10.7699 2.56061 11.111 2.03181 11.003C1.50302 10.8949 1.16193 10.3787 1.26997 9.84986C2.10641 5.75616 5.20282 2.48651 9.20327 1.37367C9.32471 1.33964 9.54198 1.27878 9.70983 1.25967C9.91233 1.23662 10.3749 1.22759 10.7326 1.62334C11.0987 2.02841 11.0309 2.49927 10.9864 2.69185C10.9482 2.85691 10.875 3.03786 10.8264 3.15789L9.95795 5.07485Z',
  d6: 'M21.9682 12.997C22.497 13.1051 22.8381 13.6213 22.73 14.1501C21.8936 18.2438 18.7972 21.5135 14.7967 22.6263C14.6753 22.6604 14.458 22.7212 14.2902 22.7403C14.0877 22.7634 13.6251 22.7724 13.2674 22.3767C12.9013 21.9716 12.9691 21.5007 13.0136 21.3082C13.0518 21.1431 13.125 20.9622 13.1736 20.8421L13.1736 20.8421L14.042 18.9251C14.2653 18.4338 14.7967 17.9004 15.336 18.4397L16.618 19.7217C18.7481 18.4151 20.3016 16.2721 20.8151 13.7589C20.9231 13.2301 21.4394 12.889 21.9682 12.997Z',
  d7: 'M5.07485 14.042C5.56623 14.2653 6.09961 14.7967 5.5603 15.336L4.27835 16.618C5.58491 18.7481 7.72788 20.3016 10.2411 20.8151C10.7699 20.9231 11.111 21.4394 11.003 21.9682C10.8949 22.497 10.3787 22.8381 9.84986 22.73C5.75616 21.8936 2.48651 18.7972 1.37367 14.7967C1.33964 14.6753 1.27878 14.458 1.25968 14.2902C1.23662 14.0877 1.22759 13.6251 1.62334 13.2674C2.02841 12.9013 2.49928 12.9691 2.69185 13.0136C2.8569 13.0518 3.03785 13.125 3.15789 13.1736L3.1579 13.1736L5.07485 14.042Z',
  d8: 'M12.9018 6.34357C13.3505 6.53485 13.6484 6.98466 13.6484 7.50835V10.7423H15.0496C15.6173 10.7423 16.0009 11.1263 16.1553 11.5121C16.3095 11.8974 16.2903 12.3958 15.9785 12.796L12.4794 17.2875C12.1268 17.7401 11.5631 17.8544 11.0978 17.6561C10.649 17.4648 10.3512 17.015 10.3512 16.4913V13.2573H8.94994C8.38223 13.2573 7.99861 12.8733 7.84422 12.4875C7.69003 12.1023 7.70922 11.6038 8.021 11.2036L11.5201 6.71214C11.8727 6.25956 12.4364 6.14521 12.9018 6.34357Z',
  d9: 'M12.9964 2.03181C13.1045 1.50302 13.6207 1.16193 14.1495 1.26997C18.2432 2.10641 21.5129 5.20282 22.6257 9.20327C22.6597 9.32471 22.7206 9.54199 22.7397 9.70983C22.7628 9.91233 22.7718 10.3749 22.376 10.7326C21.971 11.0987 21.5001 11.0309 21.3075 10.9864C21.1425 10.9482 20.9615 10.875 20.8415 10.8264L18.9245 9.95795C18.4331 9.73468 17.8998 9.20327 18.4391 8.66397L19.721 7.38202C18.4145 5.25187 16.2715 3.69844 13.7583 3.18492C13.2295 3.07688 12.8884 2.56061 12.9964 2.03181Z',
  d10: 'M5.07423 14.042C5.5656 14.2653 6.09898 14.7967 5.55968 15.336L4.27772 16.618C5.58428 18.7481 7.72725 20.3016 10.2405 20.8151C10.7693 20.9231 11.1104 21.4394 11.0023 21.9682C10.8943 22.497 10.378 22.8381 9.84923 22.73C5.75553 21.8936 2.48588 18.7972 1.37304 14.7967C1.33902 14.6753 1.27816 14.458 1.25905 14.2902C1.236 14.0877 1.22697 13.6251 1.62272 13.2674C2.02778 12.9013 2.49865 12.9691 2.69122 13.0136C2.85628 13.0518 3.03724 13.125 3.15727 13.1736L5.07423 14.042Z',
  d11: 'M9.95795 5.07423C9.73468 5.5656 9.20327 6.09898 8.66397 5.55968L7.38201 4.27772C5.25187 5.58428 3.69844 7.72725 3.18492 10.2405C3.07688 10.7693 2.56061 11.1104 2.03181 11.0023C1.50302 10.8943 1.16193 10.378 1.26997 9.84923C2.10641 5.75553 5.20282 2.48588 9.20327 1.37304C9.32471 1.33902 9.54198 1.27816 9.70983 1.25905C9.91233 1.236 10.3749 1.22697 10.7326 1.62272C11.0987 2.02778 11.0309 2.49864 10.9864 2.69122C10.9482 2.85628 10.875 3.03724 10.8264 3.15727L9.95795 5.07423Z',
  d12: 'M21.9682 12.9964C22.497 13.1045 22.8381 13.6207 22.73 14.1495C21.8936 18.2432 18.7972 21.5129 14.7967 22.6257C14.6753 22.6597 14.458 22.7206 14.2902 22.7397C14.0877 22.7628 13.6251 22.7718 13.2674 22.376C12.9013 21.971 12.9691 21.5001 13.0136 21.3075C13.0518 21.1425 13.125 20.9615 13.1736 20.8415L14.042 18.9245C14.2653 18.4331 14.7967 17.8998 15.336 18.4391L16.618 19.721C18.7481 18.4145 20.3016 16.2715 20.8151 13.7583C20.9231 13.2295 21.4394 12.8884 21.9682 12.9964Z',
  d13: 'M9 5L9.95918 2C5.96094 2.8116 2.8116 5.96094 2 9.95918M19 9L22 9.95918C21.1884 5.96094 18.0391 2.8116 14.0408 2M15 19L14.0408 22C18.0391 21.1884 21.1884 18.0391 22 14.0408M9.95918 22C5.96094 21.1884 2.8116 18.0391 2 14.0408L5 15',
  d14: 'M7.5 12.5L13 6.5V11.5L16.5 11.5L11 17.4925V12.5H7.5Z',
  d15: 'M10.7333 1.57499C10.9647 1.83318 11.042 2.19465 10.9364 2.52491L9.99904 5.45672L8.13734 4.86149L8.50591 3.7087C5.80835 4.84708 3.78086 7.26471 3.18503 10.2L1.26955 9.81115C2.14078 5.51915 5.51915 2.14078 9.81115 1.26955C10.1509 1.20058 10.5018 1.31681 10.7333 1.57499ZM20.2913 8.50591C19.1529 5.80835 16.7353 3.78086 13.8 3.18503L14.1888 1.26955C18.4809 2.14078 21.8592 5.51915 22.7304 9.81115C22.7994 10.1509 22.6832 10.5018 22.425 10.7333C22.1668 10.9647 21.8053 11.042 21.4751 10.9364L18.5433 9.99904L19.1385 8.13734L20.2913 8.50591ZM1.57499 13.2667C1.83318 13.0353 2.19465 12.958 2.52491 13.0636L5.45672 14.001L4.86149 15.8627L3.7087 15.4941C4.84708 18.1917 7.2647 20.2191 10.2 20.815L9.81115 22.7304C5.51915 21.8592 2.14079 18.4809 1.26955 14.1889C1.20058 13.8491 1.31681 13.4982 1.57499 13.2667ZM15.4941 20.2913C18.1916 19.1529 20.2191 16.7353 20.815 13.8L22.7304 14.1889C21.8592 18.4809 18.4808 21.8592 14.1888 22.7304C13.8491 22.7994 13.4982 22.6832 13.2667 22.425C13.0353 22.1668 12.958 21.8053 13.0636 21.4751L14.001 18.5433L15.8627 19.1385L15.4941 20.2913Z',
};

export const IconRenewableEnergyStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="renewable-energy-stroke-rounded IconRenewableEnergyStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRenewableEnergyDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="renewable-energy-duotone-rounded IconRenewableEnergyDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRenewableEnergyTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="renewable-energy-twotone-rounded IconRenewableEnergyTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRenewableEnergySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="renewable-energy-solid-rounded IconRenewableEnergySolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconRenewableEnergyBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="renewable-energy-bulk-rounded IconRenewableEnergyBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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

export const IconRenewableEnergyStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="renewable-energy-stroke-sharp IconRenewableEnergyStrokeSharp"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRenewableEnergySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="renewable-energy-solid-sharp IconRenewableEnergySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRenewableEnergy: TheIconSelfPack = {
  name: 'RenewableEnergy',
  StrokeRounded: IconRenewableEnergyStrokeRounded,
  DuotoneRounded: IconRenewableEnergyDuotoneRounded,
  TwotoneRounded: IconRenewableEnergyTwotoneRounded,
  SolidRounded: IconRenewableEnergySolidRounded,
  BulkRounded: IconRenewableEnergyBulkRounded,
  StrokeSharp: IconRenewableEnergyStrokeSharp,
  SolidSharp: IconRenewableEnergySolidSharp,
};