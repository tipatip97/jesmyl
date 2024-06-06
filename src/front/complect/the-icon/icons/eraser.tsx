import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.73792 7.78021L4.84693 11.7574C3.67722 12.953 3.09236 13.5508 3.01263 14.2802C2.99579 14.4343 2.99579 14.5899 3.01263 14.744C3.09236 15.4733 3.67722 16.0711 4.84693 17.2668L4.99601 17.4191C5.62049 18.0575 5.93274 18.3766 6.30638 18.5911C6.5236 18.7157 6.75482 18.8134 6.99505 18.882C7.40827 19 7.85149 19 8.73792 19C9.62436 19 10.0676 19 10.4808 18.882C10.721 18.8134 10.9522 18.7157 11.1695 18.5911C11.5431 18.3766 11.8554 18.0575 12.4798 17.4191L15.3239 14.5121M8.73792 7.78021L12.3199 4.12313C13.7065 2.70754 14.3997 1.99974 15.2627 2C16.1256 2.00026 16.8185 2.70846 18.2042 4.12487L18.9473 4.8845C20.3159 6.28342 21.0002 6.98288 21 7.85008C20.9997 8.71728 20.315 9.41633 18.9456 10.8144L15.3239 14.5121M8.73792 7.78021L15.3239 14.5121',
  d2: 'M10 22L21 22',
  d3: 'M18.9477 4.8845L18.2045 4.12487C16.8188 2.70846 16.126 2.00026 15.263 2C14.4001 1.99974 13.7068 2.70754 12.3203 4.12313L8.73828 7.78021L15.3243 14.5121L18.946 10.8144C20.3154 9.41633 21.0001 8.71728 21.0004 7.85008C21.0006 6.98288 20.3163 6.28342 18.9477 4.8845Z',
  d4: 'M19.5182 11.3022C20.1719 10.6347 20.7148 10.0805 21.0873 9.58228C21.48 9.05707 21.7502 8.50925 21.7504 7.85029C21.7506 7.19134 21.4807 6.64337 21.0883 6.11793C20.7161 5.61945 20.1735 5.06493 19.5201 4.3971L18.7038 3.56266C18.0424 2.88659 17.4932 2.32524 16.9989 1.93986C16.4785 1.53425 15.9293 1.2502 15.2633 1.25C14.5972 1.2498 14.0478 1.53353 13.5273 1.93884C13.0327 2.32392 12.4832 2.88493 11.8215 3.56061L9.32516 6.11077C9.13118 6.30894 9.0342 6.40802 9.03418 6.53038C9.03416 6.65275 9.13112 6.75186 9.32504 6.95008L16.1201 13.8957C16.3218 14.1018 16.4226 14.2049 16.5488 14.2049C16.6749 14.205 16.7758 14.102 16.9776 13.8959L19.5182 11.3022Z',
  d5: 'M14.7385 15.3448C14.9324 15.5429 15.0293 15.642 15.0293 15.7643C15.0293 15.8867 14.9324 15.9858 14.7385 16.1839L12.9447 18.0174C12.3891 18.5858 12.008 18.9756 11.5428 19.2425C11.273 19.3974 10.9856 19.5188 10.6867 19.6042C10.171 19.7514 9.52646 19.7512 8.73792 19.751C7.94939 19.7512 7.3049 19.7514 6.78912 19.6042C6.49029 19.5188 6.20288 19.3974 5.93307 19.2425C5.46788 18.9756 5.08681 18.5858 4.53111 18.0174C3.97251 17.4465 3.25734 16.7155 2.92829 16.291C2.58308 15.8457 2.32802 15.384 2.26707 14.8264C2.24431 14.6182 2.24431 14.408 2.26707 14.1997C2.32802 13.6421 2.58308 13.1804 2.92829 12.7351C3.25733 12.3107 3.72134 11.8364 4.27991 11.2655L7.08579 8.39906C7.28759 8.1929 7.38849 8.08983 7.51466 8.08984C7.64083 8.08986 7.7417 8.19297 7.94344 8.39918L14.7385 15.3448Z',
  d6: 'M8.75 21.75C8.75 21.1977 9.19772 20.75 9.75 20.75L20.75 20.75C21.3023 20.75 21.75 21.1977 21.75 21.75C21.75 22.3023 21.3023 22.75 20.75 22.75L9.75 22.75C9.19772 22.75 8.75 22.3023 8.75 21.75Z',
  d7: 'M10.4912 22.0015H21.4989',
  d8: 'M9.46492 8.01363L2.50392 14.9477C2.50001 14.9516 2.49999 14.958 2.50388 14.9619L6.49912 18.9845H10.5286L15.5212 13.9959M9.46492 8.01363L15.446 2.00148C15.4499 1.99757 15.4562 1.99755 15.4601 2.00144L21.4961 7.99171C21.5 7.99561 21.5 8.00196 21.4961 8.00588L15.5212 13.9959M9.46492 8.01363L15.5212 13.9959',
  d9: 'M16.0303 1.46967C15.8897 1.32902 15.6989 1.25 15.5 1.25C15.3011 1.25 15.1103 1.32902 14.9697 1.46967L9.66646 6.77288L16.7271 13.8335L22.0303 8.53033C22.3232 8.23744 22.3232 7.76256 22.0303 7.46967L16.0303 1.46967Z',
  d10: 'M15.3129 15.2478L8.25225 8.18709L1.96967 14.4697C1.67678 14.7626 1.67678 15.2374 1.96967 15.5303L6.18934 19.75L10.8107 19.75L15.3129 15.2478Z',
  d11: 'M21.5039 22.75L10.5039 22.75L10.5039 20.75L21.5039 20.75L21.5039 22.75Z',
};

export const IconEraserStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-stroke-rounded IconEraserStrokeRounded"
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

export const IconEraserDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-duotone-rounded IconEraserDuotoneRounded"
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

export const IconEraserTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-twotone-rounded IconEraserTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconEraserSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-solid-rounded IconEraserSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEraserBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-bulk-rounded IconEraserBulkRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEraserStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-stroke-sharp IconEraserStrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconEraserSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="eraser-solid-sharp IconEraserSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEraser: TheIconSelfPack = {
  name: 'Eraser',
  StrokeRounded: IconEraserStrokeRounded,
  DuotoneRounded: IconEraserDuotoneRounded,
  TwotoneRounded: IconEraserTwotoneRounded,
  SolidRounded: IconEraserSolidRounded,
  BulkRounded: IconEraserBulkRounded,
  StrokeSharp: IconEraserStrokeSharp,
  SolidSharp: IconEraserSolidSharp,
};