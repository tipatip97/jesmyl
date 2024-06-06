import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 14C13.4732 14.3174 12.6598 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 10.3402 8.68259 9.52677 9 9',
  d2: 'M11.5 7.53544C11.6633 7.51209 11.8302 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11C15.5 11.1698 15.4879 11.3367 15.4646 11.5',
  d3: 'M18 18C16.5648 19.4833 14.6122 20.7255 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 8.83373 3.75496 7.02961 5 5.5',
  d4: 'M7.5 3.22795C8.83379 2.44855 10.3757 2 12 2C16.8706 2 21 6.03298 21 10.9258C21 12.6174 20.514 14.1373 19.7199 15.5',
  d5: 'M2 2L22 22',
  d6: 'M12 22C12.325 22 12.6445 21.9162 12.927 21.7567C14.6122 20.7255 16.5648 19.4833 18 18L5.23828 5.23828L5 5.5C3.75496 7.02961 3 8.83373 3 10.9258C3 15.9137 7.2039 19.3616 11.073 21.7567C11.3555 21.9162 11.675 22 12 22Z',
  d7: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d8: 'M2.25 10.9258C2.25 13.6482 3.40187 15.9241 5.01689 17.8025C6.62496 19.6728 8.71834 21.1811 10.6782 22.3944L10.6911 22.4024L10.7043 22.4098C11.0996 22.6329 11.546 22.75 12 22.75C12.454 22.75 12.9004 22.6329 13.2957 22.4098L13.3072 22.4033L13.3185 22.3964C14.9088 21.4233 16.5819 20.2478 18.0139 18.842C18.2079 18.6515 18.305 18.5563 18.3055 18.4312C18.3061 18.3061 18.2077 18.2077 18.0108 18.0108L14.6393 14.6393C14.4757 14.4757 14.3939 14.3939 14.2966 14.3791C14.1993 14.3643 14.0845 14.4244 13.8551 14.5447C13.3006 14.8355 12.6695 15 12 15C9.79086 15 8 13.2091 8 11C8 10.3305 8.16449 9.69936 8.45528 9.14489C8.57559 8.91546 8.63575 8.80075 8.62092 8.70342C8.60609 8.60609 8.52429 8.52429 8.36069 8.36069L5.09071 5.09071C4.87547 4.87547 4.76785 4.76785 4.63207 4.77687C4.49628 4.78589 4.40761 4.90186 4.23028 5.1338C2.99294 6.75212 2.25 8.75952 2.25 10.9258Z',
  d9: 'M21.75 10.9258C21.75 5.60954 17.2755 1.25 12 1.25C10.2366 1.25 8.56262 1.73712 7.11539 2.58426C6.83548 2.74811 6.69553 2.83003 6.67673 2.97621C6.65793 3.12239 6.77751 3.24197 7.01667 3.48113L10.4766 6.94111C10.5998 7.06426 10.6614 7.12584 10.736 7.14721C10.8106 7.16859 10.9054 7.14667 11.0949 7.10283C11.3857 7.03556 11.6887 7 12 7C14.2091 7 16 8.79086 16 11C16 11.3113 15.9644 11.6143 15.8972 11.9051C15.8533 12.0946 15.8314 12.1894 15.8528 12.264C15.8742 12.3386 15.9357 12.4002 16.0589 12.5234L19.4826 15.9471C19.7251 16.1896 19.8464 16.3109 19.993 16.2916C20.1397 16.2723 20.2225 16.129 20.3882 15.8424C21.2256 14.3937 21.75 12.7582 21.75 10.9258Z',
  d10: 'M2.25 10.9268C2.25 13.6492 3.40187 15.9251 5.01689 17.8035C6.62496 19.6738 8.71834 21.1821 10.6782 22.3954L10.6911 22.4034L10.7043 22.4108C11.0996 22.6339 11.546 22.751 12 22.751C12.454 22.751 12.9004 22.6339 13.2957 22.4108L13.3072 22.4043L13.3185 22.3974C14.9088 21.4243 16.5819 20.2488 18.0139 18.843C18.2079 18.6525 18.305 18.5572 18.3055 18.4322C18.3061 18.3071 18.2077 18.2087 18.0108 18.0118L14.6393 14.6403C14.4757 14.4767 14.3939 14.3949 14.2966 14.3801C14.1993 14.3652 14.0845 14.4254 13.8551 14.5457C13.3006 14.8365 12.6695 15.001 12 15.001C9.79086 15.001 8 13.2101 8 11.001C8 10.3315 8.16449 9.70036 8.45528 9.14588C8.57559 8.91645 8.63575 8.80174 8.62092 8.70441C8.60609 8.60708 8.52429 8.52528 8.36069 8.36168L5.09071 5.0917C4.87547 4.87647 4.76785 4.76885 4.63207 4.77787C4.49628 4.78688 4.40761 4.90285 4.23028 5.13479C2.99294 6.75312 2.25 8.76052 2.25 10.9268Z',
  d11: 'M6.97577 3.79281C8.34921 2.67152 10.0975 2 12.001 2C16.4193 2 20.001 5.61783 20.001 10.0807C20.001 12.0235 19.4213 13.6373 18.262 15.0791M16.6815 16.6795C15.2381 18.022 13.001 20.4696 12.001 21.9999C10.9756 20.3179 8.41069 17.6382 7.00098 16.389C5.00098 14.6167 4.00098 12.6325 4.00098 10.0807C4.00098 8.356 4.53588 6.75754 5.44726 5.4453',
  d12: 'M10.5137 7.33078C10.9651 7.1186 11.4692 7 12.001 7C13.934 7 15.501 8.567 15.501 10.5C15.501 11.0318 15.3824 11.5359 15.1702 11.9872M13.6107 13.6087C13.1288 13.8587 12.5814 14 12.001 14C10.068 14 8.50098 12.433 8.50098 10.5C8.50098 9.91961 8.64225 9.37221 8.89228 8.89032',
  d13: 'M21.3338 22.75L1.24805 2.66421L2.66226 1.25L22.748 21.3358L21.3338 22.75Z',
  d14: 'M3.24805 10.0807C3.24805 12.8754 4.36247 15.0556 6.50063 16.9503C7.89171 18.183 10.3906 20.804 11.3577 22.3903C11.4916 22.61 11.7289 22.7457 11.9863 22.7498C12.2436 22.7538 12.4851 22.6256 12.6259 22.4101C13.5872 20.9391 15.7976 18.5195 17.2079 17.2114L13.2712 13.2747C12.8864 13.4203 12.4691 13.5 12.0332 13.5C10.1002 13.5 8.5332 11.933 8.5332 10C8.5332 9.56412 8.61288 9.14685 8.75847 8.76196L4.90522 4.90871C3.86231 6.36322 3.24805 8.15053 3.24805 10.0807Z',
  d15: 'M20.748 10.0807C20.748 5.21073 16.8376 1.25 11.998 1.25C9.97544 1.25 8.11511 1.94181 6.63471 3.10267L10.4234 6.89136C10.9053 6.64129 11.4528 6.5 12.0332 6.5C13.9662 6.5 15.5332 8.067 15.5332 10C15.5332 10.5804 15.3919 11.1279 15.1418 11.6098L18.9482 15.4162C20.1358 13.886 20.748 12.1522 20.748 10.0807Z',
};

export const IconLocationOffline03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-03-stroke-rounded IconLocationOffline03StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconLocationOffline03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-03-duotone-rounded IconLocationOffline03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconLocationOffline03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-03-twotone-rounded IconLocationOffline03TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconLocationOffline03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-03-solid-rounded IconLocationOffline03SolidRounded"
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
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationOffline03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-03-bulk-rounded IconLocationOffline03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationOffline03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-03-stroke-sharp IconLocationOffline03StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationOffline03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-offline-03-solid-sharp IconLocationOffline03SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLocationOffline03: TheIconSelfPack = {
  name: 'LocationOffline03',
  StrokeRounded: IconLocationOffline03StrokeRounded,
  DuotoneRounded: IconLocationOffline03DuotoneRounded,
  TwotoneRounded: IconLocationOffline03TwotoneRounded,
  SolidRounded: IconLocationOffline03SolidRounded,
  BulkRounded: IconLocationOffline03BulkRounded,
  StrokeSharp: IconLocationOffline03StrokeSharp,
  SolidSharp: IconLocationOffline03SolidSharp,
};