import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9146 8.46215 21.9856 9.46861 21.9976 11M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.7646 20.3357 6.7682 20.4816 10.5 20.4979',
  d2: 'M14.1418 13.9416C15.3486 13.2105 16.4018 13.5051 17.0345 13.9744C17.294 14.1668 17.4237 14.263 17.5 14.263C17.5763 14.263 17.706 14.1668 17.9655 13.9744C18.5982 13.5051 19.6514 13.2105 20.8582 13.9416C22.4419 14.901 22.8002 18.0663 19.1472 20.7368C18.4514 21.2454 18.1035 21.4997 17.5 21.4997C16.8965 21.4997 16.5486 21.2454 15.8528 20.7368C12.1998 18.0663 12.5581 14.901 14.1418 13.9416Z',
  d3: 'M13.25 20.5H12C7.28595 20.5 4.92893 20.5 3.46447 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38032 4.03806C2.65142 3.55227 3.05227 3.15142 3.53806 2.88032C4.21956 2.5 5.1278 2.5 6.94427 2.5C8.10802 2.5 8.6899 2.5 9.19926 2.69101C10.3079 3.10673 10.7955 4.08617 11.2932 5.08597C11.3176 5.13499 11.342 5.18407 11.3666 5.23313L12 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.64331 22 11.75C22 13.3165 22 14.5335 21.9252 15.5131C21.7693 14.814 21.3803 14.2579 20.8582 13.9416C19.6514 13.2105 18.5982 13.5051 17.9655 13.9744C17.706 14.1668 17.5763 14.263 17.5 14.263C17.4237 14.263 17.294 14.1668 17.0345 13.9744C16.4018 13.5051 15.3486 13.2105 14.1418 13.9416C12.6071 14.8714 12.2231 17.8727 15.5254 20.4878C14.8593 20.5 14.1069 20.5 13.25 20.5Z',
  d4: 'M13.7529 13.3007C15.2563 12.3899 16.6394 12.7484 17.481 13.3726L17.5183 13.3726C18.3599 12.7484 19.7429 12.3899 21.2464 13.3007C22.3403 13.9634 22.9107 15.3159 22.7093 16.799C22.5061 18.2948 21.5362 19.9197 19.5894 21.3428C18.9636 21.8014 18.3509 22.2503 17.4996 22.2503C16.6483 22.2503 16.0356 21.8014 15.4098 21.3428C13.4631 19.9197 12.4931 18.2948 12.29 16.799C12.0886 15.3159 12.659 13.9634 13.7529 13.3007Z',
  d5: 'M9.4626 1.98884C8.82373 1.74927 8.11205 1.74958 7.08264 1.75004C6.2039 1.75003 5.32205 1.75006 4.7497 1.80052C4.15996 1.8525 3.64388 1.96246 3.17258 2.22548C2.56533 2.56435 2.06428 3.06541 1.7254 3.67266C1.46238 4.14396 1.35242 4.66004 1.30044 5.24978C1.24998 5.82212 1.24999 6.53085 1.25 7.40958V10.5575C1.24999 12.8658 1.24998 14.6749 1.43975 16.0864C1.63399 17.5311 2.03933 18.6711 2.93414 19.5659C3.82895 20.4608 4.96897 20.8661 6.41371 21.0603C7.82519 21.2501 9.63423 21.2501 11.9426 21.2501C12.2607 21.2501 12.4197 21.2501 12.4945 21.2011C12.5911 21.1379 12.6384 21.0415 12.6293 20.9265C12.6223 20.8373 12.5194 20.7042 12.3135 20.4379C11.4726 19.3503 10.9648 18.1825 10.8043 17.0004C10.5388 15.0449 11.2756 13.0476 12.9763 12.0173C14.5317 11.075 16.0561 11.0997 17.2528 11.5549C17.381 11.6036 17.4452 11.628 17.5003 11.628C17.5554 11.628 17.6196 11.6036 17.7479 11.5549C18.9446 11.0997 20.469 11.075 22.0243 12.0173C22.0636 12.0411 22.1024 12.0654 22.1407 12.0903C22.2491 12.1606 22.3033 12.1958 22.3211 12.2042C22.5227 12.3002 22.7182 12.194 22.7474 11.9727C22.75 11.9531 22.75 11.8995 22.75 11.7923C22.75 10.7733 22.75 9.86889 22.683 9.20956C22.6137 8.529 22.4669 7.9388 22.118 7.41669C21.8444 7.00723 21.4929 6.65566 21.0834 6.38207C20.5613 6.03321 19.9711 5.88636 19.2905 5.81713C18.6312 5.75006 17.8095 5.75007 16.7905 5.75008L13.2361 5.75008C12.92 5.75008 12.7396 5.74915 12.6064 5.73539C12.5044 5.72825 12.4348 5.65263 12.4128 5.61571C12.3409 5.50277 12.0838 4.98916 11.9425 4.70644C11.4704 3.75129 10.8581 2.51213 9.4626 1.98884Z',
  d6: 'M20.5851 13.836C18.7872 12.8841 17.4963 14.2873 17.4963 14.2873C17.4963 14.2873 16.2053 12.8841 14.4074 13.836C12.2298 14.9889 12.0735 19.5038 17.4963 21.5083C22.9191 19.5038 22.7626 14.9889 20.5851 13.836Z',
  d7: 'M6.9879 6.51877H21.9048C21.9601 6.51877 22.0049 6.56356 22.0049 6.61881V11.0036M10.9802 20.5123H2.10009C2.04481 20.5123 2 20.4675 2 20.4122L2.00011 2.60729C2.00011 2.55204 2.04492 2.50725 2.1002 2.50725L8.97679 2.50684L12.0405 6.51877',
  d8: 'M17.478 13.9806C17.6808 14.0652 17.8558 14.1631 18 14.257C18.1442 14.1631 18.3192 14.0652 18.522 13.9806C19.1696 13.7108 20.0857 13.5883 21.1104 14.1222C22.4255 14.8074 23.0209 16.4117 22.6332 17.9972C22.2369 19.618 20.8464 21.2147 18.2354 22.1644L18 22.25L17.7646 22.1644C15.1536 21.2147 13.7631 19.618 13.3668 17.9972C12.9791 16.4117 13.5745 14.8074 14.8895 14.1222C15.9143 13.5883 16.8304 13.7108 17.478 13.9806Z',
  d9: 'M2 1.75C1.80109 1.75 1.61032 1.82902 1.46967 1.96967C1.32902 2.11032 1.25 2.30109 1.25 2.5V20.5C1.25 20.9142 1.58579 21.25 2 21.25H13.534C12.715 20.391 12.1668 19.4064 11.9093 18.3535C11.3928 16.2412 12.1458 13.8601 14.1961 12.7919C15.6577 12.0304 17.024 12.182 17.9996 12.5736C18.9753 12.182 20.3415 12.0304 21.8031 12.7919C22.1575 12.9765 22.473 13.2003 22.75 13.4552V6.5C22.75 6.08579 22.4142 5.75 22 5.75H12.375L9.375 1.75001L2 1.75Z',
};

export const IconFolderFavouriteStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-favourite-stroke-rounded IconFolderFavouriteStrokeRounded"
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

export const IconFolderFavouriteDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-favourite-duotone-rounded IconFolderFavouriteDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconFolderFavouriteTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-favourite-twotone-rounded IconFolderFavouriteTwotoneRounded"
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

export const IconFolderFavouriteSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-favourite-solid-rounded IconFolderFavouriteSolidRounded"
    >
      <path 
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

export const IconFolderFavouriteBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-favourite-bulk-rounded IconFolderFavouriteBulkRounded"
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

export const IconFolderFavouriteStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-favourite-stroke-sharp IconFolderFavouriteStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFolderFavouriteSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="folder-favourite-solid-sharp IconFolderFavouriteSolidSharp"
    >
      <path 
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

export const iconPackOfFolderFavourite: TheIconSelfPack = {
  name: 'FolderFavourite',
  StrokeRounded: IconFolderFavouriteStrokeRounded,
  DuotoneRounded: IconFolderFavouriteDuotoneRounded,
  TwotoneRounded: IconFolderFavouriteTwotoneRounded,
  SolidRounded: IconFolderFavouriteSolidRounded,
  BulkRounded: IconFolderFavouriteBulkRounded,
  StrokeSharp: IconFolderFavouriteStrokeSharp,
  SolidSharp: IconFolderFavouriteSolidSharp,
};