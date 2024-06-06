import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 13.8829L20.9999 9.12817C20.9993 7.99289 20.999 7.42525 20.723 6.94931C20.447 6.47337 19.9544 6.19544 18.9692 5.63957L13.944 2.80421C12.9938 2.26807 12.5187 2 12 2C11.4813 2 11.0062 2.26807 10.056 2.80421L5.0308 5.63957C4.04562 6.19544 3.55303 6.47337 3.277 6.94931C3.00096 7.42525 3.00069 7.99289 3.00013 9.12817L3 13.8829C3 17.7094 3 19.6226 4.17157 20.8113C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8113C21 19.6226 21 17.7094 21 13.8829Z',
  d2: 'M10 13H8M16 13H14M10 9H8M10 17H8M16 9H14M16 17H14',
  d3: 'M12 1.25C11.5995 1.25 11.2438 1.35677 10.8859 1.51539C10.5501 1.66423 10.167 1.88043 9.7172 2.13422L9.71717 2.13423L9.71715 2.13424L4.63118 5.0039C4.16505 5.26688 3.7673 5.49128 3.45509 5.71194C3.12119 5.94793 2.8384 6.21063 2.62822 6.57303C2.41874 6.93422 2.3301 7.30934 2.28905 7.71619C2.2506 8.09721 2.25039 8.55494 2.25015 9.09253L2.25 13.9387V13.9387C2.24999 15.8046 2.24997 17.2803 2.40295 18.4348C2.56015 19.6212 2.89099 20.5804 3.63741 21.3377C4.38531 22.0966 5.33511 22.4343 6.50954 22.5945C7.64946 22.75 9.10569 22.75 10.9428 22.75H13.0572C14.8943 22.75 16.3505 22.75 17.4905 22.5945C18.6649 22.4343 19.6147 22.0966 20.3626 21.3377C21.109 20.5804 21.4398 19.6212 21.5971 18.4348C21.75 17.2803 21.75 15.8046 21.75 13.9387L21.7499 9.09251C21.7496 8.55493 21.7494 8.09721 21.711 7.71619C21.6699 7.30934 21.5813 6.93422 21.3718 6.57303C21.1616 6.21064 20.8788 5.94793 20.5449 5.71194C20.2327 5.49128 19.835 5.26688 19.3688 5.0039L14.2829 2.13425L14.2829 2.13424L14.2828 2.13424C13.8331 1.88044 13.4499 1.66423 13.1141 1.51539C12.7562 1.35676 12.4005 1.25 12 1.25ZM8 8C7.44772 8 7 8.44772 7 9C7 9.55228 7.44772 10 8 10H10C10.5523 10 11 9.55228 11 9C11 8.44772 10.5523 8 10 8H8ZM14 8C13.4477 8 13 8.44772 13 9C13 9.55228 13.4477 10 14 10H16C16.5523 10 17 9.55228 17 9C17 8.44772 16.5523 8 16 8H14ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H8ZM14 12C13.4477 12 13 12.4477 13 13C13 13.5523 13.4477 14 14 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H14ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H10C10.5523 18 11 17.5523 11 17C11 16.4477 10.5523 16 10 16H8ZM14 16C13.4477 16 13 16.4477 13 17C13 17.5523 13.4477 18 14 18H16C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16H14Z',
  d4: 'M10.8859 1.51539C11.2438 1.35677 11.5995 1.25 12 1.25C12.4005 1.25 12.7562 1.35676 13.1141 1.51539C13.4499 1.66423 13.8331 1.88044 14.2829 2.13424L14.2829 2.13425L19.3688 5.0039C19.835 5.26688 20.2327 5.49128 20.5449 5.71194C20.8788 5.94793 21.1616 6.21064 21.3718 6.57303C21.5813 6.93422 21.6699 7.30934 21.711 7.71619C21.7494 8.09721 21.7496 8.55493 21.7499 9.09251L21.75 13.9387C21.75 15.8046 21.75 17.2803 21.5971 18.4348C21.4398 19.6212 21.109 20.5804 20.3626 21.3377C19.6147 22.0966 18.6649 22.4343 17.4905 22.5945C16.3505 22.75 14.8943 22.75 13.0572 22.75H10.9428C9.10569 22.75 7.64946 22.75 6.50954 22.5945C5.33511 22.4343 4.38531 22.0966 3.63741 21.3377C2.89099 20.5804 2.56015 19.6212 2.40295 18.4348C2.24997 17.2803 2.24999 15.8046 2.25 13.9387V13.9387L2.25015 9.09253C2.25039 8.55494 2.2506 8.09721 2.28905 7.71619C2.3301 7.30934 2.41874 6.93422 2.62822 6.57303C2.8384 6.21063 3.12119 5.94793 3.45509 5.71194C3.7673 5.49128 4.16505 5.26688 4.63118 5.0039L9.71715 2.13424L9.71717 2.13423C10.1669 1.88044 10.5501 1.66423 10.8859 1.51539Z',
  d5: 'M7 9C7 8.44772 7.44772 8 8 8H10C10.5523 8 11 8.44772 11 9C11 9.55228 10.5523 10 10 10H8C7.44772 10 7 9.55228 7 9ZM13 9C13 8.44772 13.4477 8 14 8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H14C13.4477 10 13 9.55228 13 9ZM7 13C7 12.4477 7.44772 12 8 12H10C10.5523 12 11 12.4477 11 13C11 13.5523 10.5523 14 10 14H8C7.44772 14 7 13.5523 7 13ZM13 13C13 12.4477 13.4477 12 14 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H14C13.4477 14 13 13.5523 13 13ZM7 17C7 16.4477 7.44772 16 8 16H10C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18H8C7.44772 18 7 17.5523 7 17ZM13 17C13 16.4477 13.4477 16 14 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H14C13.4477 18 13 17.5523 13 17Z',
  d6: 'M3 22H21V6.5L12 2L3 6.5V22Z',
  d7: 'M10 13H7M17 13H14M10 9H7M10 17H7M17 9H14M17 17H14',
  d8: 'M12.3354 1.32918C12.1243 1.22361 11.8757 1.22361 11.6646 1.32918L2.66459 5.82918C2.4105 5.95622 2.25 6.21592 2.25 6.5V22C2.25 22.4142 2.58579 22.75 3 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22V6.5C21.75 6.21592 21.5895 5.95622 21.3354 5.82918L12.3354 1.32918ZM10 8H7V10H10V8ZM17 8H14V10H17V8ZM10 12H7V14H10V12ZM17 12H14V14H17V12ZM10 16H7V18H10V16ZM17 16H14V18H17V16Z',
};

export const IconDepartementStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="departement-stroke-rounded IconDepartementStrokeRounded"
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

export const IconDepartementDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="departement-duotone-rounded IconDepartementDuotoneRounded"
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

export const IconDepartementTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="departement-twotone-rounded IconDepartementTwotoneRounded"
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

export const IconDepartementSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="departement-solid-rounded IconDepartementSolidRounded"
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

export const IconDepartementBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="departement-bulk-rounded IconDepartementBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDepartementStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="departement-stroke-sharp IconDepartementStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDepartementSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="departement-solid-sharp IconDepartementSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDepartement: TheIconSelfPack = {
  name: 'Departement',
  StrokeRounded: IconDepartementStrokeRounded,
  DuotoneRounded: IconDepartementDuotoneRounded,
  TwotoneRounded: IconDepartementTwotoneRounded,
  SolidRounded: IconDepartementSolidRounded,
  BulkRounded: IconDepartementBulkRounded,
  StrokeSharp: IconDepartementStrokeSharp,
  SolidSharp: IconDepartementSolidSharp,
};