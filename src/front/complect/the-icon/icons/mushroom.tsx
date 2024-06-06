import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.2762 13C12 16 8.67845 17.3826 9.02566 19.2747C9.43204 21.4891 11.7394 22.6415 13.4795 21.6298C15.9467 20.1953 14.8948 14.8029 13.9117 13.0196',
  d2: 'M12.0153 2C7.3429 2 3.53836 4.64819 3.01988 9.03138C2.29466 15.1623 21.6547 13.4713 20.9829 8.81893C20.3684 4.56276 16.6118 2 12.0153 2Z',
  d3: 'M16 6C17 6 18 7 18 8',
  d4: 'M12.0153 1.25C7.07313 1.25 2.85007 4.08233 2.27508 8.94328C2.1587 9.92719 2.45283 10.7792 3.0433 11.4634C3.61448 12.1252 4.43619 12.6019 5.3545 12.9422C7.18965 13.6223 9.63409 13.8396 12.0196 13.7179C14.4105 13.596 16.8359 13.1286 18.6477 12.3686C19.5501 11.9901 20.3511 11.518 20.9134 10.9366C21.4874 10.3429 21.8516 9.58681 21.7252 8.71176C21.0433 3.98874 16.8764 1.25 12.0153 1.25ZM16 5C16.8252 5 17.5668 5.40255 18.0821 5.9179C18.5975 6.43324 19 7.17477 19 8C19 8.55229 18.5523 9 18 9C17.4477 9 17 8.55229 17 8C17 7.82524 16.9025 7.56676 16.6679 7.33211C16.4332 7.09746 16.1748 7 16 7C15.4477 7 15 6.55229 15 6C15 5.44772 15.4477 5 16 5Z',
  d5: 'M14.8061 14.9371C15.0751 14.8953 15.2096 14.8743 15.3083 14.9431C15.407 15.0118 15.4328 15.1391 15.4844 15.3937C15.6167 16.0466 15.7086 16.739 15.7388 17.4214C15.7799 18.349 15.7097 19.3084 15.4412 20.1557C15.1714 21.0069 14.6829 21.7968 13.8566 22.2772C11.5977 23.5905 8.77315 22.0523 8.28808 19.4091C8.15678 18.6936 8.386 18.0699 8.65508 17.5645C8.78992 17.3113 8.94719 17.0653 9.09503 16.8385L9.17299 16.7191C9.29668 16.53 9.41307 16.352 9.52331 16.1674C9.62321 16.0001 9.71102 15.8384 9.78413 15.679C9.88872 15.4511 9.94102 15.3371 10.0163 15.2895C10.0917 15.242 10.2018 15.2435 10.4222 15.2466C10.9835 15.2545 11.5442 15.2432 12.096 15.2151C12.9971 15.1691 13.9112 15.0764 14.8061 14.9371Z',
  d6: 'M2.27508 8.94328C2.85007 4.08233 7.07313 1.25 12.0153 1.25C16.8764 1.25 21.0433 3.98874 21.7252 8.71175C21.8516 9.58681 21.4874 10.3429 20.9134 10.9366C20.3511 11.518 19.5501 11.9901 18.6477 12.3686C16.8359 13.1286 14.4105 13.596 12.0196 13.7179C9.63409 13.8396 7.18965 13.6223 5.3545 12.9422C4.43619 12.6019 3.61448 12.1252 3.0433 11.4634C2.45283 10.7792 2.1587 9.92719 2.27508 8.94328Z',
  d7: 'M18.0821 5.91789C17.5668 5.40255 16.8252 5 16 5C15.4477 5 15 5.44772 15 6C15 6.55228 15.4477 7 16 7C16.1748 7 16.4332 7.09745 16.6679 7.33211C16.9025 7.56676 17 7.82523 17 8C17 8.55228 17.4477 9 18 9C18.5523 9 19 8.55228 19 8C19 7.17477 18.5975 6.43324 18.0821 5.91789Z',
  d8: 'M12.0153 1.25C7.07313 1.25 2.85007 4.08155 2.27508 8.94118C2.1587 9.92482 2.45283 10.7766 3.0433 11.4606C3.61448 12.1222 4.43619 12.5988 5.3545 12.939C7.18965 13.6189 9.63409 13.8362 12.0196 13.7145C14.4105 13.5926 16.8359 13.1254 18.6477 12.3656C19.5501 11.9872 20.3511 11.5152 20.9134 10.934C21.4874 10.3404 21.8516 9.58454 21.7252 8.70972C21.0433 3.98799 16.8764 1.25 12.0153 1.25ZM16 5.24891C16.7439 5.24891 17.4251 5.61322 17.9053 6.09335C18.3856 6.57348 18.75 7.25444 18.75 7.99816H17.25C17.25 7.74215 17.1144 7.42339 16.8447 7.15372C16.5749 6.88405 16.2561 6.7485 16 6.7485V5.24891Z',
  d9: 'M15.3614 14.8416C15.559 15.6467 15.7 16.5408 15.7388 17.4182C15.7799 18.3456 15.7097 19.3047 15.4412 20.1518C15.1714 21.0027 14.6829 21.7924 13.8566 22.2727C11.5977 23.5856 8.77315 22.0479 8.28808 19.4054C8.15678 18.6901 8.386 18.0665 8.65508 17.5613C8.78992 17.3081 8.94719 17.0622 9.09503 16.8355L9.17299 16.7161C9.29669 16.527 9.41307 16.3492 9.52331 16.1646C9.71676 15.8407 9.86492 15.5377 9.94863 15.2325C10.6675 15.2567 11.389 15.2483 12.096 15.2122C13.1845 15.1568 14.2917 15.033 15.3614 14.8416Z',
};

export const IconMushroomStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mushroom-stroke-rounded IconMushroomStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMushroomDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mushroom-duotone-rounded IconMushroomDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMushroomTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mushroom-twotone-rounded IconMushroomTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMushroomSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mushroom-solid-rounded IconMushroomSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMushroomBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mushroom-bulk-rounded IconMushroomBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMushroomStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mushroom-stroke-sharp IconMushroomStrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMushroomSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mushroom-solid-sharp IconMushroomSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMushroom: TheIconSelfPack = {
  name: 'Mushroom',
  StrokeRounded: IconMushroomStrokeRounded,
  DuotoneRounded: IconMushroomDuotoneRounded,
  TwotoneRounded: IconMushroomTwotoneRounded,
  SolidRounded: IconMushroomSolidRounded,
  BulkRounded: IconMushroomBulkRounded,
  StrokeSharp: IconMushroomStrokeSharp,
  SolidSharp: IconMushroomSolidSharp,
};