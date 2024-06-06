import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.5 18C17.2128 17.2408 16.9563 16.1375 16 15.5C14.5 14.5 13 14 13 12.5C13 11 12.5 8 12.5 8L13.1955 7.26803C14.8935 8.02463 16.5 5.88071 16.5 4.5C16.5 3.11929 15.3807 2 14 2C12.6193 2 11.5 3.11929 11.5 4.5C11.5 5.5 10.7 6.1 9.5 6.5C8 7 6 8 6 13C6 17 7.83333 18.3333 8.5 19C5.3 19 4.5 21 4.5 22H17.5C18.6046 22 19.5 21.1046 19.5 20C19.5 18.8954 18.6046 18 17.5 18ZM17.5 18C9.7719 18 9.05992 13.3333 9.5 11',
  d2: 'M13.1955 7.26803C14.8935 8.02463 16.5 5.88071 16.5 4.5C16.5 3.11929 15.3807 2 14 2C12.6193 2 11.5 3.11929 11.5 4.5C11.5 5.5 10.7 6.1 9.5 6.5C8 7 6 8 6 13C6 17 7.83333 18.3333 8.5 19C5.3 19 4.5 21 4.5 22H17.5C18.6046 22 19.5 21.1046 19.5 20C19.5 18.8954 18.6046 18 17.5 18C17.2128 17.2408 16.9563 16.1375 16 15.5C14.5 14.5 13 14 13 12.5C13 11 12.5 8 12.5 8L13.1955 7.26803Z',
  d3: 'M8.5 19C5.3 19 4.5 21 4.5 22H17.5C18.6046 22 19.5 21.1046 19.5 20C19.5 18.8954 18.6046 18 17.5 18C9.7719 18 9.05992 13.3333 9.5 11',
  d4: 'M14 1.25C12.2051 1.25 10.75 2.70507 10.75 4.5C10.75 4.76889 10.6542 4.9762 10.4397 5.1754C10.2019 5.39618 9.81671 5.60386 9.26283 5.78849C8.45972 6.05619 7.40711 6.49478 6.5827 7.61898C5.76697 8.73134 5.25 10.4094 5.25 13C5.25 15.1222 5.73848 16.5894 6.35431 17.6315C6.53225 17.9327 6.721 18.1967 6.90596 18.4264C5.97235 18.6514 5.2678 19.0756 4.75896 19.6056C4.01137 20.3843 3.75 21.3268 3.75 22C3.75 22.4142 4.08579 22.75 4.5 22.75H17.5C19.0188 22.75 20.25 21.5188 20.25 20C20.25 18.6692 19.3047 17.5592 18.0489 17.3048C17.949 17.0209 17.8251 16.6834 17.6751 16.3757C17.42 15.8524 17.0414 15.2928 16.416 14.876C16.086 14.6559 15.7543 14.4579 15.4549 14.2792L15.4548 14.2791L15.4548 14.2791L15.2843 14.1772C14.9322 13.9659 14.6395 13.7834 14.398 13.5955C13.9365 13.2366 13.75 12.9318 13.75 12.5C13.75 11.6943 13.6182 10.5241 13.4934 9.58838C13.4301 9.11342 13.3668 8.6864 13.3194 8.37814L13.2992 8.24774L13.4158 8.12505C14.4515 8.34398 15.3849 7.84586 16.0149 7.21578C16.7371 6.49342 17.25 5.43065 17.25 4.5C17.25 2.70507 15.7949 1.25 14 1.25ZM10.2364 11.1391C10.3132 10.7321 10.0454 10.3399 9.6384 10.2631C9.23136 10.1864 8.83916 10.4541 8.76239 10.8611C8.57066 11.8777 8.56995 13.2956 9.16445 14.6654C9.77059 16.062 10.9714 17.3491 13.0642 18.0898C13.4546 18.228 13.8832 18.0235 14.0214 17.633C14.1596 17.2425 13.9551 16.8139 13.5646 16.6757C11.8542 16.0704 10.9765 15.073 10.5404 14.0682C10.0927 13.0366 10.0861 11.9361 10.2364 11.1391Z',
  d5: 'M10.75 4.5C10.75 2.70507 12.2051 1.25 14 1.25C15.7949 1.25 17.25 2.70507 17.25 4.5C17.25 5.43065 16.7371 6.49342 16.0149 7.21578C15.3849 7.84586 14.4515 8.34398 13.4158 8.12505L13.2992 8.24774L13.3194 8.37814C13.3668 8.6864 13.4301 9.11342 13.4934 9.58838C13.6182 10.5241 13.75 11.6943 13.75 12.5C13.75 12.9318 13.9365 13.2366 14.398 13.5955C14.6395 13.7834 14.9322 13.9659 15.2843 14.1772L15.4548 14.2791L15.4548 14.2791C15.7543 14.4579 16.086 14.6559 16.416 14.876C17.0414 15.2928 17.42 15.8524 17.6751 16.3757C17.8251 16.6834 17.949 17.0209 18.0489 17.3048C19.3047 17.5592 20.25 18.6692 20.25 20C20.25 21.5188 19.0188 22.75 17.5 22.75H4.5C4.08579 22.75 3.75 22.4142 3.75 22C3.75 21.3268 4.01137 20.3843 4.75896 19.6056C5.2678 19.0756 5.97235 18.6514 6.90596 18.4264C6.721 18.1967 6.53225 17.9327 6.35431 17.6315C5.73848 16.5894 5.25 15.1222 5.25 13C5.25 10.4094 5.76697 8.73134 6.5827 7.61898C7.40711 6.49478 8.45972 6.05619 9.26283 5.78849C9.81671 5.60386 10.2019 5.39618 10.4397 5.1754C10.6542 4.9762 10.75 4.76889 10.75 4.5Z',
  d6: 'M9.6384 10.2631C10.0454 10.3399 10.3132 10.7321 10.2364 11.1391C10.0861 11.9361 10.0927 13.0366 10.5404 14.0682C10.9765 15.073 11.8542 16.0704 13.5646 16.6757C13.9551 16.8139 14.1596 17.2425 14.0214 17.633C13.8832 18.0235 13.4546 18.228 13.0642 18.0898C10.9714 17.3491 9.77059 16.062 9.16445 14.6654C8.56995 13.2956 8.57066 11.8777 8.76239 10.8611C8.83916 10.4541 9.23136 10.1864 9.6384 10.2631Z',
  d7: 'M17.5 18L16 15.5L13 13L12.5 8L13.1955 7.26803C14.8935 8.02463 16.5 5.88071 16.5 4.5C16.5 3.11929 15.3807 2 14 2C12.6193 2 11.5 3.11929 11.5 4.5C11.5 5.5 10.7 6.1 9.5 6.5C8 7 6 8 6 13C6 17 7.83333 18.3333 8.5 19C5.3 19 4.5 21 4.5 22H17.5C18.6046 22 19.5 21.1046 19.5 20C19.5 18.8954 18.6046 18 17.5 18ZM17.5 18C9.7719 18 9.05992 13.3333 9.5 11',
  d8: 'M14 1.25C12.2051 1.25 10.75 2.70507 10.75 4.5C10.75 4.76889 10.6542 4.9762 10.4397 5.1754C10.2019 5.39618 9.81671 5.60386 9.26283 5.78849C8.45972 6.05619 7.40711 6.49478 6.5827 7.61898C5.76697 8.73134 5.25 10.4094 5.25 13C5.25 15.1222 5.73848 16.5894 6.35431 17.6315C6.53225 17.9327 6.721 18.1967 6.90596 18.4264C5.97235 18.6514 5.2678 19.0756 4.75896 19.6056C4.01137 20.3843 3.75 21.3268 3.75 22C3.75 22.4142 4.08579 22.75 4.5 22.75H17.5C19.0188 22.75 20.25 21.5188 20.25 20C20.25 18.6332 19.2528 17.4992 17.9463 17.286L16.6431 15.1141C16.5998 15.042 16.5448 14.9777 16.4801 14.9238L13.7158 12.6202L13.2805 8.26743L13.4158 8.12505C14.4515 8.34398 15.3849 7.84586 16.0149 7.21578C16.7371 6.49342 17.25 5.43065 17.25 4.5C17.25 2.70507 15.7949 1.25 14 1.25ZM8.76236 10.8608C8.56 11.9338 8.56991 13.4584 9.27254 14.8999C9.99028 16.3725 11.3914 17.6748 13.8062 18.3186L14.1926 16.8692C12.1618 16.3278 11.1322 15.2916 10.6209 14.2427C10.0945 13.1628 10.0772 11.9829 10.2364 11.1388L8.76236 10.8608Z',
};

export const IconSalahStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="salah-stroke-rounded IconSalahStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSalahDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="salah-duotone-rounded IconSalahDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSalahTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="salah-twotone-rounded IconSalahTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconSalahSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="salah-solid-rounded IconSalahSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSalahBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="salah-bulk-rounded IconSalahBulkRounded"
    >
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

export const IconSalahStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="salah-stroke-sharp IconSalahStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSalahSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="salah-solid-sharp IconSalahSolidSharp"
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

export const iconPackOfSalah: TheIconSelfPack = {
  name: 'Salah',
  StrokeRounded: IconSalahStrokeRounded,
  DuotoneRounded: IconSalahDuotoneRounded,
  TwotoneRounded: IconSalahTwotoneRounded,
  SolidRounded: IconSalahSolidRounded,
  BulkRounded: IconSalahBulkRounded,
  StrokeSharp: IconSalahStrokeSharp,
  SolidSharp: IconSalahSolidSharp,
};