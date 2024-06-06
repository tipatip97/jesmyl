import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 14C15.2069 14 17.9143 11.8786 18.7734 8.97359C19.0045 8.192 19.1201 7.80121 18.8177 7.4006C18.5152 7 18.0239 7 17.0413 7H6.9587C5.9761 7 5.4848 7 5.18234 7.4006C4.87988 7.80121 4.99545 8.192 5.22659 8.97359C6.08569 11.8786 8.79306 14 12 14Z',
  d2: 'M13 7V3.5C13 2.67157 13.6716 2 14.5 2C15.3284 2 16 2.67157 16 3.5V4',
  d3: 'M10 7V6C10 5.05719 10 4.58579 9.70711 4.29289C9.41421 4 8.94281 4 8 4',
  d4: 'M14.5 14L14 22M9.5 14L10 22',
  d5: 'M8 22H16',
  d6: 'M14.0602 21.0612L14.5016 13.9988C14.5166 13.7972 14.3124 13.6467 14.1189 13.7052C13.1939 13.985 11.5458 14.225 9.88164 13.7051C9.68723 13.6444 9.48464 13.7959 9.50158 13.9988L9.94298 21.0612C9.97592 21.5882 10.413 21.9988 10.941 21.9988H13.0621C13.5902 21.9988 14.0272 21.5882 14.0602 21.0612Z',
  d7: 'M6.90439 6.37525H17.0955C17.5396 6.37515 17.9656 6.37505 18.3149 6.43677C18.7254 6.50929 19.1188 6.68015 19.4161 7.07395C19.6919 7.43919 19.776 7.82537 19.7431 8.23032C19.7167 8.55494 19.5948 8.96627 19.4925 9.31154C18.5408 12.53 15.5446 14.8753 11.9999 14.8753C8.45525 14.8753 5.45908 12.53 4.5073 9.31154C4.40502 8.96627 4.28318 8.55494 4.25676 8.23032C4.22381 7.82537 4.30794 7.43919 4.58371 7.07395C4.88103 6.68015 5.27444 6.50929 5.68492 6.43677C6.03429 6.37505 6.46022 6.37515 6.90439 6.37525Z',
  d8: 'M14.5 3.12524C14.2239 3.12524 14 3.3491 14 3.62524V7.12524C14 7.67753 13.5523 8.12524 13 8.12524C12.4477 8.12524 12 7.67753 12 7.12524V3.62524C12 2.24453 13.1193 1.12524 14.5 1.12524C15.8807 1.12524 17 2.24453 17 3.62524V4.12524C17 4.67753 16.5523 5.12524 16 5.12524C15.4477 5.12524 15 4.67753 15 4.12524V3.62524C15 3.3491 14.7761 3.12524 14.5 3.12524Z',
  d9: 'M8.96402 5.15295C8.77383 5.12738 8.49967 5.12526 8 5.12526C7.44772 5.12526 7 4.67754 7 4.12526C7 3.57297 7.44772 3.12526 8 3.12526C8.01815 3.12526 8.03629 3.12525 8.05441 3.12525C8.47848 3.12517 8.8906 3.12509 9.23052 3.17079C9.61372 3.22231 10.051 3.34783 10.4142 3.71104C10.7774 4.07426 10.903 4.51154 10.9545 4.89474C11.0002 5.23465 11.0001 5.64678 11 6.07085C11 6.08896 11 6.1071 11 6.12526V7.12526C11 7.67754 10.5523 8.12526 10 8.12526C9.44772 8.12526 9 7.67754 9 7.12526V6.12526C9 5.62558 8.99788 5.35143 8.97231 5.16123C8.97197 5.15876 8.97164 5.15633 8.97131 5.15395C8.96893 5.15362 8.9665 5.15329 8.96402 5.15295Z',
  d10: 'M7 22.1252C7 21.573 7.44772 21.1252 8 21.1252H16C16.5523 21.1252 17 21.573 17 22.1252C17 22.6775 16.5523 23.1252 16 23.1252H8C7.44772 23.1252 7 22.6775 7 22.1252Z',
  d11: 'M8.91139 16.7424C8.88621 16.3395 8.87361 16.138 8.99056 16.0406C9.1075 15.9432 9.31346 15.9946 9.72538 16.0974C10.4533 16.279 11.215 16.3754 11.999 16.3754C12.7832 16.3754 13.5451 16.279 14.2731 16.0973C14.6851 15.9945 14.891 15.9431 15.008 16.0404C15.1249 16.1378 15.1123 16.3393 15.0872 16.7423L14.7478 22.1719C14.7231 22.5672 14.3953 22.8751 13.9993 22.8751H9.99928C9.60323 22.8751 9.27544 22.5672 9.25074 22.1719L8.91139 16.7424Z',
  d12: 'M9 6.37525H11L11 6.07085C11.0001 5.64678 11.0002 5.23465 10.9545 4.89474C10.903 4.51154 10.7774 4.07426 10.4142 3.71104C10.051 3.34783 9.61372 3.22231 9.23052 3.17079C8.8906 3.12509 8.47848 3.12517 8.05441 3.12525L8 3.12526C7.44772 3.12526 7 3.57297 7 4.12526C7 4.67754 7.44772 5.12526 8 5.12526C8.49967 5.12526 8.77383 5.12738 8.96402 5.15295L8.97131 5.15395L8.97231 5.16123C8.99788 5.35143 9 5.62558 9 6.12526V6.37525Z',
  d13: 'M12 6.37525H14V3.62524C14 3.3491 14.2239 3.12524 14.5 3.12524C14.7761 3.12524 15 3.3491 15 3.62524V4.12524C15 4.67753 15.4477 5.12524 16 5.12524C16.5523 5.12524 17 4.67753 17 4.12524V3.62524C17 2.24453 15.8807 1.12524 14.5 1.12524C13.1193 1.12524 12 2.24453 12 3.62524V6.37525Z',
  d14: 'M12 14C15.866 14 19 10.866 19 7H5C5 10.866 8.13401 14 12 14Z',
  d15: 'M10 7V4.00001L8 4',
  d16: 'M14 14V22M10 14V22',
  d17: 'M19.75 6.25V7C19.75 11.2802 16.2802 14.75 12 14.75C7.71979 14.75 4.25 11.2802 4.25 7V6.25H19.75Z',
  d18: 'M14.5 3C14.2239 3 14 3.22386 14 3.5V7H12V3.5C12 2.11929 13.1193 1 14.5 1C15.8807 1 17 2.11929 17 3.5V4H15V3.5C15 3.22386 14.7761 3 14.5 3Z',
  d19: 'M9.00001 5.00001L8 5L8.00001 3L10 3.00001C10.5523 3.00002 11 3.44773 11 4.00001V7H9.00001V5.00001Z',
  d20: 'M16 23H8V21H16V23Z',
  d21: 'M9.25 15.8342V21.9999H14.75V15.8342C13.8813 16.1044 12.9576 16.2499 12 16.2499C11.0424 16.2499 10.1187 16.1044 9.25 15.8342Z',
};

export const IconSink01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sink-01-stroke-rounded IconSink01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSink01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sink-01-duotone-rounded IconSink01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSink01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sink-01-twotone-rounded IconSink01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSink01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sink-01-solid-rounded IconSink01SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSink01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sink-01-bulk-rounded IconSink01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSink01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sink-01-stroke-sharp IconSink01StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSink01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sink-01-solid-sharp IconSink01SolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSink01: TheIconSelfPack = {
  name: 'Sink01',
  StrokeRounded: IconSink01StrokeRounded,
  DuotoneRounded: IconSink01DuotoneRounded,
  TwotoneRounded: IconSink01TwotoneRounded,
  SolidRounded: IconSink01SolidRounded,
  BulkRounded: IconSink01BulkRounded,
  StrokeSharp: IconSink01StrokeSharp,
  SolidSharp: IconSink01SolidSharp,
};