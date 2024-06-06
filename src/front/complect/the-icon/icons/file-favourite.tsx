import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 12V16.1801C4 17.8738 4 18.7207 4.26796 19.3971C4.69875 20.4845 5.60979 21.3422 6.76478 21.7477C7.48322 22 8.38275 22 10.1818 22C13.3302 22 14.9044 22 16.1616 21.5585C18.1829 20.8488 19.7772 19.3478 20.5311 17.4449C21 16.2612 21 14.7792 21 11.8152V9.26898C21 6.19871 21 4.66357 20.1523 3.59748C19.9094 3.29202 19.6214 3.02085 19.2969 2.79219C18.3849 2.14945 17.1498 2.02435 15 2',
  d2: 'M21 12C21 13.8409 19.5076 15.3333 17.6667 15.3333C17.0009 15.3333 16.216 15.2167 15.5686 15.3901C14.9935 15.5442 14.5442 15.9935 14.3901 16.5686C14.2167 17.216 14.3333 18.0009 14.3333 18.6667C14.3333 20.5076 12.8409 22 11 22',
  d3: 'M4.14185 2.44156C5.34859 1.71049 6.40183 2.0051 7.03454 2.47439C7.29397 2.66681 7.42368 2.76302 7.5 2.76302C7.57632 2.76302 7.70603 2.66681 7.96546 2.47439C8.59817 2.0051 9.65141 1.71049 10.8582 2.44156C12.4419 3.40102 12.8002 6.56632 9.14721 9.23676C8.45143 9.7454 8.10353 9.99972 7.5 9.99972C6.89647 9.99972 6.54857 9.7454 5.85279 9.23676C2.19977 6.56632 2.55813 3.40102 4.14185 2.44156Z',
  d4: 'M4 7.43855V16.1818C4 17.8751 4 18.7217 4.26796 19.3979C4.69875 20.4849 5.60979 21.3424 6.76478 21.7478C7.48321 22 8.38275 22 10.1818 22H10.1832C10.7172 22 11.2059 22 11.6555 21.9978C13.9262 21.8711 14.4675 18.9333 14.4508 17.4483C14.4099 15.8053 15.2005 15.5021 15.502 15.5021C19.09 15.5021 20.6582 13.8464 20.9986 13.0104C21 12.6419 21 12.2462 21 11.8199V9.27273C21 6.20337 21 4.66867 20.1523 3.60289C19.9094 3.29753 19.6214 3.02643 19.2969 2.79784C18.1645 2 16.5339 2 13.2727 2H9.42974C9.86497 2.00666 10.3478 2.1324 10.8582 2.44156C12.4419 3.40102 12.8002 6.56632 9.14721 9.23676C8.45143 9.7454 8.10353 9.99972 7.5 9.99972C6.89647 9.99972 6.54857 9.7454 5.85279 9.23676C5.05238 8.65165 4.44455 8.04277 4 7.43855Z',
  d5: 'M17.0635 1.3528C16.0812 1.25004 16.5184 1.24999 14.9773 1.25C14.4375 1.25 14 1.68756 14 2.22731C14 2.76705 14.4375 3.20459 14.9773 3.20459C16.5859 3.20459 15.9922 3.20589 16.8616 3.29684C17.7155 3.38617 18.1994 3.55293 18.5573 3.80597C18.7987 3.97672 19.0111 4.17781 19.1889 4.40216C19.4445 4.72465 19.6139 5.15745 19.7061 5.94424C19.8011 6.754 19.8026 7.81133 19.8026 9.33478L19.8027 12.235C19.8027 12.502 19.8026 13.1405 19.522 13.6127C19.349 13.9037 19.1276 14.1468 18.9002 14.2706C18.5336 14.4701 18.1135 14.5835 17.6668 14.5835L16.6264 14.547C16.2463 14.5391 15.8028 14.5511 15.3746 14.6658C14.5407 14.8893 13.8893 15.5407 13.6658 16.3747C13.5511 16.8028 13.5391 17.2464 13.547 17.6265L13.5835 18.6668C13.5835 19.1345 13.4591 19.5417 13.2417 19.9201C13.115 20.1407 12.8943 20.3425 12.5895 20.5199C12.1274 20.7888 11.574 20.7913 11.2358 20.7928C10.8977 20.7943 10.5409 20.7955 10.2428 20.7955C8.40872 20.7955 7.74159 20.7815 7.23823 20.6042C6.3656 20.2967 5.6999 19.6551 5.38981 18.8697C5.31217 18.6731 5.25733 18.4146 5.22789 17.9667C5.19788 17.51 5.19739 16.9271 5.19739 16.0868V11.9737C5.19739 11.436 4.76145 11 4.22369 11C3.68594 11 3.25 11.436 3.25 11.9737V16.12C3.24999 16.9192 3.24999 17.5667 3.28473 18.0953C3.32052 18.6399 3.39613 19.1256 3.5794 19.5898C4.10821 20.9291 5.21664 21.9633 6.5932 22.4483C7.452 22.7509 8.92408 22.7505 10.4791 22.75C13.3187 22.7504 15.0054 22.7506 16.3878 22.2635C18.6078 21.4813 20.3815 19.8186 21.2249 17.6825C21.506 16.9706 21.6306 16.2058 21.6908 15.289C21.75 14.3883 21.75 13.2757 21.75 11.8574V11.8574V9.27387C21.75 7.82578 21.75 6.65313 21.6402 5.7158C21.526 4.7424 21.2828 3.90452 20.713 3.18545C20.4178 2.81296 20.0692 2.48419 19.6789 2.20814C18.9341 1.68148 18.0729 1.45839 17.0635 1.3528Z',
  d6: 'M3.75285 1.80068C5.2563 0.889853 6.63937 1.24837 7.48096 1.87258L7.49962 1.88642L7.51828 1.87258C8.35988 1.24837 9.74295 0.889853 11.2464 1.80068C12.3403 2.46338 12.9107 3.81594 12.7093 5.29905C12.5061 6.79482 11.5362 8.4197 9.58945 9.84281L9.51032 9.90075C8.88448 10.3593 8.35092 10.7503 7.49962 10.7503C6.64833 10.7503 6.11477 10.3593 5.48892 9.90075L5.4098 9.84281C3.46305 8.4197 2.4931 6.79482 2.28999 5.29905C2.08859 3.81594 2.65897 2.46338 3.75285 1.80068Z',
  d7: 'M10.586 2.33122C8.78976 1.37972 7.50002 2.78233 7.50002 2.78233C7.50002 2.78233 6.21021 1.37972 4.41395 2.33121C2.23833 3.48366 2.0821 7.99669 7.50002 10.0002C12.9179 7.99669 12.7616 3.48366 10.586 2.33122Z',
  d8: 'M14.9549 2.01L20.99 2C20.9955 2 21 2.00448 21 2.01V15L14 22H4.01C4.00448 22 4 21.9955 4 21.99V11.9962M20.5231 15H14V21.4333',
  d9: 'M3.24902 21.7727C3.24902 22.3125 3.68496 22.75 4.22271 22.75H14.3629L21.749 15.3366V2.22727C21.749 1.68754 21.3131 1.25 20.7753 1.25H13.986V3.2045H19.8018V13.9545H12.986L12.986 20.7954H5.1965V12H3.24902V21.7727Z',
  d10: 'M6.92295 1.50936C7.14709 1.60431 7.34047 1.71433 7.49983 1.81983C7.65918 1.71433 7.85255 1.60432 8.07668 1.50937C8.79224 1.20623 9.80454 1.06862 10.9369 1.66845C12.39 2.43818 13.048 4.24061 12.6196 6.02192C12.1817 7.84282 10.6451 9.63673 7.75997 10.7037L7.49983 10.7999L7.2397 10.7037C4.35452 9.63673 2.81795 7.84282 2.38001 6.02193C1.9516 4.24062 2.60956 2.43818 4.06269 1.66844C5.19507 1.06861 6.20738 1.20623 6.92295 1.50936Z',
};

export const IconFileFavouriteStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-favourite-stroke-rounded IconFileFavouriteStrokeRounded"
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

export const IconFileFavouriteDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-favourite-duotone-rounded IconFileFavouriteDuotoneRounded"
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

export const IconFileFavouriteTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-favourite-twotone-rounded IconFileFavouriteTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFileFavouriteSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-favourite-solid-rounded IconFileFavouriteSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileFavouriteBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-favourite-bulk-rounded IconFileFavouriteBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileFavouriteStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-favourite-stroke-sharp IconFileFavouriteStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileFavouriteSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-favourite-solid-sharp IconFileFavouriteSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFileFavourite: TheIconSelfPack = {
  name: 'FileFavourite',
  StrokeRounded: IconFileFavouriteStrokeRounded,
  DuotoneRounded: IconFileFavouriteDuotoneRounded,
  TwotoneRounded: IconFileFavouriteTwotoneRounded,
  SolidRounded: IconFileFavouriteSolidRounded,
  BulkRounded: IconFileFavouriteBulkRounded,
  StrokeSharp: IconFileFavouriteStrokeSharp,
  SolidSharp: IconFileFavouriteSolidSharp,
};