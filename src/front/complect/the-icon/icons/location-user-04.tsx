import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.53327 17C4.11143 19.0062 3.75309 20.0652 4.15321 20.9156C4.19286 20.9999 4.23928 21.0812 4.29207 21.1589C4.86372 22 6.34111 22 9.2959 22H14.7041C17.6589 22 19.1363 22 19.7079 21.1589C19.7607 21.0812 19.8071 20.9999 19.8468 20.9156C20.2469 20.0652 19.8891 19.0062 18.4673 17',
  d2: 'M12.9981 7H11.0019C8.13196 7 6.19701 10.0691 7.32753 12.828C7.48501 13.2124 7.84633 13.4615 8.24612 13.4615H8.9491C9.18605 13.4615 9.39259 13.6302 9.45006 13.8706L10.3551 17.6567C10.5438 18.4462 11.222 19 12 19C12.778 19 13.4562 18.4462 13.6449 17.6567L14.5499 13.8706C14.6074 13.6302 14.814 13.4615 15.0509 13.4615H15.7539C16.1537 13.4615 16.515 13.2124 16.6725 12.828C17.803 10.0691 15.868 7 12.9981 7Z',
  d3: 'M14.5 4.5C14.5 5.88071 13.3807 7 12 7C10.6193 7 9.5 5.88071 9.5 4.5C9.5 3.11929 10.6193 2 12 2C13.3807 2 14.5 3.11929 14.5 4.5Z',
  d4: 'M5.96684 16.3882C6.30479 16.6277 6.38459 17.0958 6.14508 17.4337C5.44344 18.4237 5.04921 19.1199 4.86792 19.6387C4.69655 20.1291 4.73689 20.3948 4.83176 20.5964C4.85453 20.6448 4.88139 20.6919 4.91228 20.7374C5.00851 20.879 5.23542 21.0524 5.99674 21.1512C6.74701 21.2485 7.79627 21.2501 9.2958 21.2501H14.704C16.2035 21.2501 17.2528 21.2485 18.0031 21.1512C18.7644 21.0524 18.9913 20.879 19.0875 20.7374C19.1184 20.692 19.1453 20.6448 19.1681 20.5964C19.263 20.3946 19.3034 20.1289 19.1321 19.6386C18.951 19.1198 18.5569 18.4237 17.8553 17.4337C17.6158 17.0958 17.6956 16.6277 18.0335 16.3882C18.3715 16.1486 18.8396 16.2284 19.0791 16.5664C19.7994 17.5826 20.2951 18.4191 20.5483 19.144C20.8113 19.8973 20.8305 20.5863 20.5253 21.235C20.4688 21.3551 20.4028 21.4706 20.3281 21.5805C19.8527 22.28 19.0551 22.5272 18.1961 22.6387C17.3376 22.7501 16.1902 22.7501 14.7618 22.7501H9.23804C7.80964 22.7501 6.66219 22.7501 5.80369 22.6387C4.94471 22.5272 4.1471 22.2801 3.67168 21.5806C3.59698 21.4706 3.531 21.3551 3.47447 21.235C3.16921 20.5862 3.18867 19.8971 3.45189 19.1439C3.7052 18.419 4.20107 17.5826 4.92127 16.5664C5.16078 16.2284 5.6289 16.1486 5.96684 16.3882Z',
  d5: 'M6.1114 15.9342C6.562 16.2536 6.66839 16.8777 6.34905 17.3283C5.6505 18.314 5.27321 18.9868 5.10393 19.4712C4.94786 19.9178 4.99817 20.1129 5.05797 20.24C5.07511 20.2764 5.09546 20.3122 5.11904 20.3469C5.15208 20.3955 5.28388 20.5566 6.02891 20.6533C6.75922 20.748 7.78889 20.7501 9.2958 20.7501H14.704C16.2109 20.7501 17.2406 20.748 17.9709 20.6533C18.7159 20.5566 18.8477 20.3955 18.8808 20.3469C18.9043 20.3122 18.9247 20.2764 18.9418 20.24C19.0017 20.1127 19.052 19.9175 18.8961 19.471C18.727 18.9866 18.3498 18.3139 17.6513 17.3283C17.332 16.8777 17.4384 16.2536 17.889 15.9342C18.3396 15.6149 18.9637 15.7213 19.2831 16.1719C20.0064 17.1925 20.5191 18.0523 20.7843 18.8116C21.0627 19.6088 21.0918 20.3683 20.7516 21.0914C20.6894 21.2235 20.6169 21.3504 20.5349 21.4711C19.9963 22.2636 19.1036 22.523 18.2283 22.6366C17.3536 22.7501 16.1925 22.7501 14.7783 22.7501H9.2215C7.8073 22.7501 6.64624 22.7501 5.77152 22.6366C4.89626 22.523 4.00353 22.2636 3.46492 21.4711C3.38291 21.3504 3.31041 21.2235 3.24826 21.0914C2.90793 20.3681 2.93736 19.6085 3.21589 18.8114C3.4812 18.0522 3.99401 17.1924 4.7173 16.1719C5.03664 15.7213 5.6608 15.6149 6.1114 15.9342Z',
  d6: 'M12 1.25C10.3431 1.25 9 2.59315 9 4.25C9 5.32282 9.56313 6.26411 10.4099 6.79442C7.47495 7.21056 5.69103 10.4748 6.86508 13.3582C7.12056 13.9857 7.71969 14.4167 8.40809 14.4167H8.9002L9.72805 17.9022C9.98103 18.9673 10.9033 19.75 12 19.75C13.0967 19.75 14.019 18.9673 14.272 17.9022L15.0998 14.4167H15.5919C16.2803 14.4167 16.8794 13.9857 17.1349 13.3582C18.309 10.4748 16.525 7.21056 13.5901 6.79442C14.4369 6.26411 15 5.32282 15 4.25C15 2.59315 13.6569 1.25 12 1.25Z',
  d7: 'M18 16.9922L20 21.9899H4L6 16.9922',
  d8: 'M11.988 7.07396C15.0256 7.07396 17.1376 9.55842 16.9872 12.5214V13.8863H14.9195L13.6792 19.0044H10.2957L9.07351 13.8863H7.00586V12.0844C7.11904 9.18209 9.07351 7.20223 11.988 7.07396ZM11.988 7.07396C13.5068 7.07396 14.4973 5.80814 14.4973 4.41286C14.4973 3.20618 13.4531 1.9873 11.988 1.9873C10.523 1.9873 9.49268 3.1593 9.49268 4.49544C9.49268 5.83158 10.4693 7.07396 11.988 7.07396Z',
  d9: 'M3.07153 21.3789L5.07153 16.3789L6.92848 17.1217L5.47704 20.7503H18.523L17.0715 17.1217L18.9285 16.3789L20.9285 21.3789C21.0517 21.687 21.0141 22.0362 20.8281 22.3109C20.642 22.5857 20.3318 22.7503 20 22.7503H4C3.66818 22.7503 3.35797 22.5857 3.17194 22.3109C2.98591 22.0362 2.94829 21.687 3.07153 21.3789Z',
  d10: 'M15.25 4.55C15.25 5.44011 14.9009 6.25343 14.3306 6.84994C16.3499 7.76165 17.75 9.82127 17.75 12.2V14.65H15.505L14.255 19.75H9.74496L8.49496 14.65H6.25V12.2C6.25 9.82127 7.6501 7.76165 9.66936 6.84994C9.09911 6.25343 8.75 5.44011 8.75 4.55C8.75 2.74153 10.1911 1.25 12 1.25C13.8089 1.25 15.25 2.74153 15.25 4.55Z',
};

export const IconLocationUser04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-user-04-stroke-rounded IconLocationUser04StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationUser04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-user-04-duotone-rounded IconLocationUser04DuotoneRounded"
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
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationUser04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-user-04-twotone-rounded IconLocationUser04TwotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationUser04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-user-04-solid-rounded IconLocationUser04SolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationUser04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-user-04-bulk-rounded IconLocationUser04BulkRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLocationUser04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-user-04-stroke-sharp IconLocationUser04StrokeSharp"
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

export const IconLocationUser04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="location-user-04-solid-sharp IconLocationUser04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfLocationUser04: TheIconSelfPack = {
  name: 'LocationUser04',
  StrokeRounded: IconLocationUser04StrokeRounded,
  DuotoneRounded: IconLocationUser04DuotoneRounded,
  TwotoneRounded: IconLocationUser04TwotoneRounded,
  SolidRounded: IconLocationUser04SolidRounded,
  BulkRounded: IconLocationUser04BulkRounded,
  StrokeSharp: IconLocationUser04StrokeSharp,
  SolidSharp: IconLocationUser04SolidSharp,
};