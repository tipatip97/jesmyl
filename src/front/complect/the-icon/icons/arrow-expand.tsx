import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 3.09779C8 3.09779 4.03374 2.74194 3.38783 3.38785C2.74191 4.03375 3.09783 8 3.09783 8',
  d2: 'M8 20.9022C8 20.9022 4.03374 21.2581 3.38783 20.6122C2.74191 19.9662 3.09783 16 3.09783 16',
  d3: 'M16 3.09779C16 3.09779 19.9663 2.74194 20.6122 3.38785C21.2581 4.03375 20.9022 8 20.9022 8',
  d4: 'M16 20.9022C16 20.9022 19.9663 21.2581 20.6122 20.6122C21.2581 19.9662 20.9022 16 20.9022 16',
  d5: 'M14.0107 9.99847L20.0625 3.94678',
  d6: 'M9.99695 14.0024L3.63965 20.3807',
  d7: 'M9.99732 10.0024L3.8457 3.85889',
  d8: 'M13.9795 14.0024L20.5279 20.4983',
  d9: 'M7.99999 20.9019C7.99999 20.9019 4.03374 21.2579 3.38783 20.6119C2.74191 19.9659 3.09783 15.9999 3.09783 15.9999M16 3.09786C16 3.09786 19.9663 2.74186 20.6122 3.38786C21.2581 4.03386 20.9022 7.99986 20.9022 7.99986M14.0104 9.99886L20.0622 3.94686M9.99683 14.0019L3.63952 20.3809',
  d10: 'M7.99999 3.09786C7.99999 3.09786 4.03374 2.74186 3.38783 3.38786C2.74191 4.03386 3.09783 7.99986 3.09783 7.99986M16 20.9019C16 20.9019 19.9663 21.2579 20.6122 20.6119C21.2581 19.9659 20.9022 15.9999 20.9022 15.9999M9.99683 10.0029L3.84521 3.85886M13.9797 14.0019L20.5281 20.4979',
  d11: 'M14.002 9.9941L20.2431 3.77441',
  d12: 'M9.99634 10.0024L3.84473 3.85889',
  d13: 'M14.7071 10.7071C14.3166 11.0976 13.6834 11.0976 13.2929 10.7071C12.9024 10.3166 12.9024 9.68341 13.2929 9.29289L17.1566 5.42923L16.2162 4.48889L16.1868 4.45948C16.056 4.32893 15.889 4.16232 15.7719 4.00362C15.6507 3.8394 15.3612 3.38884 15.5786 2.82748C15.7943 2.27038 16.3049 2.12965 16.5093 2.08863C16.7022 2.04991 16.9366 2.03923 17.1182 2.03095L17.1595 2.02905C17.7666 2.00074 18.5654 1.98187 19.2792 2.02729C19.634 2.04986 19.9977 2.09001 20.3188 2.16276C20.5913 2.22451 21.025 2.34819 21.3384 2.66159C21.6518 2.975 21.7755 3.40869 21.8372 3.68124C21.91 4.00232 21.9501 4.366 21.9727 4.72076C22.0181 5.43456 21.9992 6.23338 21.9709 6.84054L21.969 6.88184C21.9607 7.06343 21.95 7.29775 21.9113 7.49066C21.8703 7.69506 21.7296 8.2057 21.1725 8.42138C20.6111 8.63872 20.1605 8.3493 19.9963 8.22809C19.8376 8.11095 19.671 7.94401 19.5405 7.81321L19.5405 7.81321L19.5111 7.78375L18.5708 6.84345L14.7071 10.7071Z',
  d14: 'M9.29289 10.7071C9.68342 11.0976 10.3166 11.0976 10.7071 10.7071C11.0976 10.3166 11.0976 9.68341 10.7071 9.29289L6.84345 5.42923L7.78378 4.48889L7.81324 4.45948C7.94404 4.32893 8.11098 4.16232 8.22812 4.00362C8.34933 3.8394 8.63875 3.38884 8.4214 2.82748C8.20571 2.27038 7.69506 2.12965 7.49066 2.08863C7.29776 2.04991 7.06344 2.03923 6.88185 2.03095L6.84054 2.02905C6.23337 2.00074 5.43456 1.98187 4.72076 2.02729C4.366 2.04986 4.00232 2.09001 3.68124 2.16276C3.4087 2.22451 2.97502 2.34819 2.66161 2.66159C2.34819 2.975 2.22451 3.40869 2.16276 3.68124C2.09001 4.00232 2.04988 4.366 2.02731 4.72076C1.9819 5.43456 2.00078 6.23338 2.0291 6.84054L2.031 6.88184C2.03928 7.06343 2.04996 7.29775 2.08868 7.49066C2.12971 7.69506 2.27045 8.2057 2.82754 8.42138C3.3889 8.63872 3.83946 8.3493 4.00368 8.22809C4.16238 8.11095 4.32898 7.94401 4.45953 7.81321L4.45953 7.81321L4.48895 7.78375L5.42924 6.84345L9.29289 10.7071Z',
  d15: 'M14.7071 13.2929C14.3166 12.9024 13.6834 12.9024 13.2929 13.2929C12.9024 13.6834 12.9024 14.3166 13.2929 14.7071L17.1566 18.5708L16.2162 19.5111L16.1868 19.5405C16.056 19.6711 15.889 19.8377 15.7719 19.9964C15.6507 20.1606 15.3612 20.6112 15.5786 21.1725C15.7943 21.7296 16.3049 21.8703 16.5093 21.9114C16.7022 21.9501 16.9366 21.9608 17.1182 21.969L17.1595 21.9709C17.7666 21.9993 18.5654 22.0181 19.2792 21.9727C19.634 21.9501 19.9977 21.91 20.3188 21.8372C20.5913 21.7755 21.025 21.6518 21.3384 21.3384C21.6518 21.025 21.7755 20.5913 21.8372 20.3188C21.91 19.9977 21.9501 19.634 21.9727 19.2792C22.0181 18.5654 21.9992 17.7666 21.9709 17.1595L21.969 17.1182C21.9607 16.9366 21.95 16.7023 21.9113 16.5093C21.8703 16.3049 21.7296 15.7943 21.1725 15.5786C20.6111 15.3613 20.1605 15.6507 19.9963 15.7719C19.8376 15.8891 19.671 16.056 19.5405 16.1868L19.5405 16.1868L19.5111 16.2162L18.5708 17.1566L14.7071 13.2929Z',
  d16: 'M9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071L6.84345 18.5708L7.78378 19.5111L7.81324 19.5405C7.94404 19.6711 8.11098 19.8377 8.22812 19.9964C8.34933 20.1606 8.63875 20.6112 8.4214 21.1725C8.20571 21.7296 7.69506 21.8703 7.49066 21.9114C7.29776 21.9501 7.06344 21.9608 6.88185 21.969L6.84054 21.9709C6.23337 21.9993 5.43456 22.0181 4.72076 21.9727C4.366 21.9501 4.00232 21.91 3.68124 21.8372C3.4087 21.7755 2.97502 21.6518 2.66161 21.3384C2.34819 21.025 2.22451 20.5913 2.16276 20.3188C2.09001 19.9977 2.04988 19.634 2.02731 19.2792C1.9819 18.5654 2.00078 17.7666 2.0291 17.1595L2.031 17.1182C2.03928 16.9366 2.04996 16.7023 2.08868 16.5093C2.12971 16.3049 2.27045 15.7943 2.82754 15.5786C3.3889 15.3613 3.83946 15.6507 4.00368 15.7719C4.16238 15.8891 4.32898 16.056 4.45953 16.1868L4.45953 16.1868L4.48895 16.2162L5.42924 17.1566L9.29289 13.2929Z',
  d17: 'M14.7071 10.7076C14.3166 11.0981 13.6834 11.0981 13.2929 10.7076C12.9024 10.317 12.9024 9.68387 13.2929 9.29334L17.1566 5.42969L18.5708 6.84391L14.7071 10.7076Z',
  d18: 'M20.3188 2.16276C20.5913 2.22451 21.025 2.34819 21.3384 2.66159C21.6518 2.975 21.7755 3.40869 21.8373 3.68124C21.91 4.00232 21.9501 4.366 21.9727 4.72076C22.0181 5.43456 21.9992 6.23338 21.9709 6.84054L21.969 6.88184V6.88185C21.9607 7.06344 21.9501 7.29775 21.9113 7.49066C21.8703 7.69506 21.7296 8.2057 21.1725 8.42138C20.6111 8.63872 20.1606 8.3493 19.9963 8.22809C19.8376 8.11095 19.671 7.94401 19.5405 7.81321L19.5405 7.81321L19.5111 7.78375L18.5708 6.84345L16.2162 4.48889L16.1868 4.45948C16.056 4.32893 15.8891 4.16232 15.7719 4.00362C15.6507 3.8394 15.3613 3.38884 15.5786 2.82748C15.7943 2.27038 16.305 2.12965 16.5094 2.08863C16.7023 2.04991 16.9366 2.03923 17.1182 2.03095L17.1595 2.02905C17.7667 2.00074 18.5655 1.98187 19.2793 2.02729C19.634 2.04986 19.9977 2.09001 20.3188 2.16276Z',
  d19: 'M9.29289 10.7076C9.68342 11.0981 10.3166 11.0981 10.7071 10.7076C11.0976 10.317 11.0976 9.68387 10.7071 9.29334L6.84345 5.42969L5.42924 6.84391L9.29289 10.7076Z',
  d20: 'M3.68122 2.16276C3.40867 2.22451 2.97499 2.34819 2.66158 2.66159C2.34817 2.975 2.22449 3.40869 2.16274 3.68124C2.08999 4.00232 2.04985 4.366 2.02728 4.72076C1.98187 5.43456 2.00075 6.23338 2.02907 6.84054L2.03097 6.88184V6.88185C2.03925 7.06344 2.04994 7.29775 2.08866 7.49066C2.12968 7.69506 2.27042 8.2057 2.82752 8.42138C3.38888 8.63872 3.83943 8.3493 4.00365 8.22809C4.16235 8.11095 4.32896 7.94401 4.4595 7.81321L4.4595 7.81321L4.48892 7.78375L6.84342 5.42923L7.78376 4.48889L7.81321 4.45948C7.94401 4.32893 8.11095 4.16232 8.22809 4.00362C8.3493 3.8394 8.63872 3.38884 8.42138 2.82748C8.20568 2.27038 7.69504 2.12965 7.49064 2.08863C7.29773 2.04991 7.06342 2.03923 6.88182 2.03095L6.84051 2.02905C6.23335 2.00074 5.43453 1.98187 4.72074 2.02729C4.36597 2.04986 4.00229 2.09001 3.68122 2.16276Z',
  d21: 'M14.7071 13.2924C14.3166 12.9019 13.6834 12.9019 13.2929 13.2924C12.9024 13.683 12.9024 14.3161 13.2929 14.7067L17.1566 18.5703L18.5708 17.1561L14.7071 13.2924Z',
  d22: 'M20.3188 21.8372C20.5913 21.7755 21.025 21.6518 21.3384 21.3384C21.6518 21.025 21.7755 20.5913 21.8373 20.3188C21.91 19.9977 21.9501 19.634 21.9727 19.2792C22.0181 18.5654 21.9992 17.7666 21.9709 17.1595L21.969 17.1182V17.1182C21.9607 16.9366 21.9501 16.7022 21.9113 16.5093C21.8703 16.3049 21.7296 15.7943 21.1725 15.5786C20.6111 15.3613 20.1606 15.6507 19.9963 15.7719C19.8376 15.8891 19.671 16.056 19.5405 16.1868L19.5405 16.1868L19.5111 16.2162L18.5708 17.1566L16.2162 19.5111L16.1868 19.5405C16.056 19.6711 15.8891 19.8377 15.7719 19.9964C15.6507 20.1606 15.3613 20.6112 15.5786 21.1725C15.7943 21.7296 16.305 21.8703 16.5094 21.9114C16.7023 21.9501 16.9366 21.9608 17.1182 21.969L17.1595 21.9709C17.7667 21.9993 18.5655 22.0181 19.2793 21.9727C19.634 21.9501 19.9977 21.91 20.3188 21.8372Z',
  d23: 'M9.29289 13.2924C9.68342 12.9019 10.3166 12.9019 10.7071 13.2924C11.0976 13.683 11.0976 14.3161 10.7071 14.7067L6.84345 18.5703L5.42924 17.1561L9.29289 13.2924Z',
  d24: 'M3.68122 21.8372C3.40867 21.7755 2.97499 21.6518 2.66158 21.3384C2.34817 21.025 2.22449 20.5913 2.16274 20.3188C2.08999 19.9977 2.04985 19.634 2.02728 19.2792C1.98187 18.5654 2.00075 17.7666 2.02907 17.1595L2.03097 17.1182V17.1182C2.03925 16.9366 2.04994 16.7022 2.08866 16.5093C2.12968 16.3049 2.27042 15.7943 2.82752 15.5786C3.38888 15.3613 3.83943 15.6507 4.00365 15.7719C4.16235 15.8891 4.32896 16.056 4.4595 16.1868L4.4595 16.1868L4.48892 16.2162L6.84342 18.5708L7.78376 19.5111L7.81321 19.5405C7.94401 19.6711 8.11095 19.8377 8.22809 19.9964C8.3493 20.1606 8.63872 20.6112 8.42138 21.1725C8.20568 21.7296 7.69504 21.8703 7.49064 21.9114C7.29773 21.9501 7.06342 21.9608 6.88182 21.969L6.84051 21.9709C6.23335 21.9993 5.43453 22.0181 4.72074 21.9727C4.36597 21.9501 4.00229 21.91 3.68122 21.8372Z',
  d25: 'M8 3H3V8',
  d26: 'M8 21H3V16',
  d27: 'M16 3H21V8',
  d28: 'M16 21H21V16',
  d29: 'M3.44141 3.44043L9.99566 9.99468',
  d30: 'M13.9727 13.9727L20.5269 20.5269',
  d31: 'M20.5269 3.44043L13.9727 9.99468',
  d32: 'M10.0269 13.9727L3.47266 20.5269',
  d33: 'M9 2H2V9H4V5.41409L9.58579 10.9999L11 9.58566L5.41434 4H9V2Z',
  d34: 'M5.41424 20H9V22H2V15H4V18.5858L9.58582 13L11 14.4142L5.41424 20Z',
  d35: 'M15.0001 4H18.5859L13 9.58582L14.4142 11L20.0001 5.41424V9H22.0001V2H15.0001V4Z',
  d36: 'M13.0001 14.4142L18.5859 20H15V22H22V15H20V18.5856L14.4143 13L13.0001 14.4142Z',
};

export const IconArrowExpandStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-stroke-rounded IconArrowExpandStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-duotone-rounded IconArrowExpandDuotoneRounded"
    >
      <path 
        opacity="0.5" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-twotone-rounded IconArrowExpandTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-solid-rounded IconArrowExpandSolidRounded"
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
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-bulk-rounded IconArrowExpandBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-stroke-sharp IconArrowExpandStrokeSharp"
    >
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d30} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d31} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d32} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowExpandSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-expand-solid-sharp IconArrowExpandSolidSharp"
    >
      <path 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d34} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d35} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d36} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrowExpand: TheIconSelfPack = {
  name: 'ArrowExpand',
  StrokeRounded: IconArrowExpandStrokeRounded,
  DuotoneRounded: IconArrowExpandDuotoneRounded,
  TwotoneRounded: IconArrowExpandTwotoneRounded,
  SolidRounded: IconArrowExpandSolidRounded,
  BulkRounded: IconArrowExpandBulkRounded,
  StrokeSharp: IconArrowExpandStrokeSharp,
  SolidSharp: IconArrowExpandSolidSharp,
};