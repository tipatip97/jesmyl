import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.5 22H9.5C6.20017 22 4.55025 22 3.52513 20.9209C2.5 19.8418 2.5 18.1051 2.5 14.6316V9.36842C2.5 5.89491 2.5 4.15816 3.52513 3.07908C4.55025 2 6.20017 2 9.5 2H12.5C15.7998 2 17.4497 2 18.4749 3.07908C19.5 4.15816 19.5 5.89491 19.5 9.36842V12.5',
  d2: 'M22 16L19 19M19 19L16 22M19 19L22 22M19 19L16 16',
  d3: 'M7 2L7.0822 2.4932C7.28174 3.69044 7.38151 4.28906 7.80113 4.64453C8.22075 5 8.82762 5 10.0414 5H11.9586C13.1724 5 13.7793 5 14.1989 4.64453C14.6185 4.28906 14.7183 3.69044 14.9178 2.4932L15 2',
  d4: 'M7 16H11M7 11H15',
  d5: 'M3.52513 3.07908C2.5 4.15816 2.5 5.89491 2.5 9.36842V14.6316C2.5 18.1051 2.5 19.8418 3.52513 20.9209C4.55025 22 6.20016 22 9.49998 22H12.5C15.7998 22 17.4497 22 18.4749 20.9209C19.5 19.8418 19.5 18.1051 19.5 14.6316V9.36842C19.5 5.89491 19.5 4.15816 18.4749 3.07908C17.6968 2.26008 16.5589 2.06268 14.6128 2.01511C14.816 2.07093 14.9544 2.2737 14.9178 2.4932C14.7183 3.69043 14.6185 4.28906 14.1989 4.64453C13.7793 5 13.1724 5 11.9586 5H10.0414C8.82762 5 8.22075 5 7.80113 4.64453C7.38151 4.28906 7.28174 3.69044 7.0822 2.4932C7.04562 2.27369 7.18405 2.07093 7.38721 2.01511C5.44114 2.06268 4.30318 2.26008 3.52513 3.07908Z',
  d6: 'M7 16H11',
  d7: 'M7 11H15',
  d8: 'M13.8262 1.23064C13.9151 1.33181 13.896 1.48664 13.8577 1.79629L13.8004 2.26053C13.6989 2.86918 13.6322 3.25947 13.5471 3.54553C13.4671 3.81395 13.3957 3.89928 13.3391 3.94726C13.2825 3.99525 13.1866 4.05165 12.9086 4.08634C12.6099 4.12364 12.2098 4.125 11.5836 4.125H9.66639C9.04025 4.125 8.64007 4.12364 8.34138 4.08634C8.06347 4.05165 7.96756 3.99525 7.91092 3.94726C7.85428 3.89928 7.78288 3.81395 7.70297 3.54552C7.61791 3.25984 7.55125 2.87018 7.45 2.26286L7.39493 1.79259C7.35885 1.48443 7.3408 1.33036 7.42969 1.2299C7.51858 1.12944 7.67274 1.12859 7.98107 1.12689C8.32544 1.12499 8.68721 1.125 9.06694 1.125H12.1835C12.5643 1.125 12.927 1.12499 13.2721 1.1269C13.5822 1.12862 13.7372 1.12948 13.8262 1.23064Z',
  d9: 'M5.73444 1.28466C5.83378 1.3618 5.84992 1.49956 5.88218 1.77506L5.96205 2.45719L5.96681 2.48573C6.05874 3.03764 6.15125 3.59295 6.26508 3.97529C6.38984 4.39435 6.57813 4.78607 6.94111 5.09356C7.30409 5.40104 7.72143 5.52238 8.1553 5.57655C8.55798 5.62683 9.05289 5.6268 9.62188 5.62677H11.6276C12.1966 5.6268 12.6915 5.62683 13.0942 5.57655C13.5281 5.52238 13.9454 5.40104 14.3084 5.09356C14.6714 4.78607 14.8597 4.39435 14.9844 3.97529C15.0987 3.59141 15.191 3.03771 15.2833 2.48374L15.2869 2.46188L15.3721 1.77194C15.4059 1.49809 15.4228 1.36117 15.522 1.28468C15.6212 1.20819 15.7526 1.22593 16.0153 1.26142L16.0705 1.26905C17.1141 1.41673 17.9703 1.73054 18.6436 2.43928C19.3118 3.14261 19.6029 4.02793 19.7408 5.10759C19.875 6.15838 19.875 7.50031 19.875 9.19165V13.8428C19.875 13.9654 19.875 14.0268 19.8522 14.0819C19.8293 14.137 19.786 14.1804 19.6992 14.2671L19.0493 14.917C18.8493 15.1169 18.7493 15.2169 18.625 15.2169C18.5007 15.2169 18.4008 15.1169 18.2008 14.9169L17.3928 14.1089C16.4165 13.1326 14.8335 13.1326 13.8572 14.1089C12.8809 15.0853 12.8809 16.6682 13.8572 17.6445L14.6652 18.4524C14.8652 18.6524 14.9652 18.7524 14.9652 18.8767C14.9652 19.001 14.8652 19.101 14.6652 19.301L13.8572 20.1089C13.3121 20.6541 13.0713 21.3884 13.135 22.1006C13.1547 22.3208 13.1645 22.4308 13.0756 22.5283C12.9867 22.6258 12.9074 22.626 12.7488 22.6265L12.6632 22.6266C12.5065 22.6268 12.3466 22.6268 12.1833 22.6268H9.06669C7.46629 22.6268 6.1851 22.6268 5.17946 22.4845C4.13594 22.3368 3.27969 22.023 2.60638 21.3142C1.93822 20.6109 1.64708 19.7256 1.50919 18.6459C1.37498 17.5952 1.37499 16.2532 1.375 14.5619V14.5619V9.19163V9.19161C1.37499 7.50031 1.37498 6.15836 1.50919 5.10759C1.64708 4.02793 1.93822 3.14261 2.60638 2.43928C3.27969 1.73054 4.13594 1.41673 5.17946 1.26905L5.23883 1.26086C5.503 1.2253 5.63509 1.20752 5.73444 1.28466ZM6.625 10.125C6.21079 10.125 5.875 10.4608 5.875 10.875C5.875 11.2892 6.21079 11.625 6.625 11.625H14.625C15.0392 11.625 15.375 11.2892 15.375 10.875C15.375 10.4608 15.0392 10.125 14.625 10.125H6.625ZM6.625 15.125C6.21079 15.125 5.875 15.4608 5.875 15.875C5.875 16.2892 6.21079 16.625 6.625 16.625H10.625C11.0392 16.625 11.375 16.2892 11.375 15.875C11.375 15.4608 11.0392 15.125 10.625 15.125H6.625Z',
  d10: 'M14.9179 15.1679C15.3084 14.7774 15.9416 14.7774 16.3321 15.1679L18.625 17.4608L20.9179 15.1679C21.3084 14.7774 21.9416 14.7774 22.3321 15.1679C22.7226 15.5584 22.7226 16.1916 22.3321 16.5821L20.0392 18.875L22.3321 21.1679C22.7226 21.5584 22.7226 22.1916 22.3321 22.5821C21.9416 22.9726 21.3084 22.9726 20.9179 22.5821L18.625 20.2892L16.3321 22.5821C15.9416 22.9726 15.3084 22.9726 14.9179 22.5821C14.5274 22.1916 14.5274 21.5584 14.9179 21.1679L17.2108 18.875L14.9179 16.5821C14.5274 16.1916 14.5274 15.5584 14.9179 15.1679Z',
  d11: 'M5.88218 1.77506C5.84991 1.49956 5.83378 1.3618 5.73444 1.28466C5.63509 1.20752 5.503 1.2253 5.23883 1.26086L5.17946 1.26905C4.13594 1.41673 3.27968 1.73054 2.60638 2.43928C1.93822 3.14261 1.64708 4.02793 1.50919 5.10759C1.37498 6.15837 1.37499 7.50031 1.375 9.19163V14.5619C1.37499 16.2532 1.37498 17.5952 1.50919 18.6459C1.64708 19.7256 1.93822 20.6109 2.60638 21.3142C3.27968 22.023 4.13594 22.3368 5.17946 22.4845C6.1851 22.6268 7.46629 22.6268 9.06669 22.6268H12.1833C12.3466 22.6268 12.5065 22.6268 12.6632 22.6266C12.693 22.6266 12.7215 22.6266 12.7488 22.6265C12.9074 22.626 12.9867 22.6258 13.0756 22.5283C13.1645 22.4308 13.1547 22.3208 13.135 22.1006C13.0713 21.3884 13.3121 20.6541 13.8572 20.1089L14.6652 19.301C14.8652 19.101 14.9652 19.001 14.9652 18.8767C14.9652 18.7524 14.8652 18.6524 14.6652 18.4524L13.8572 17.6445C12.8809 16.6682 12.8809 15.0853 13.8572 14.1089C14.8335 13.1326 16.4165 13.1326 17.3928 14.1089L18.2008 14.9169C18.4008 15.1169 18.5007 15.2169 18.625 15.2169C18.7493 15.2169 18.8493 15.1169 19.0493 14.917L19.6992 14.2671C19.786 14.1804 19.8293 14.137 19.8522 14.0819C19.875 14.0268 19.875 13.9654 19.875 13.8428V9.19165C19.875 7.50031 19.875 6.15838 19.7408 5.10759C19.6029 4.02793 19.3118 3.14261 18.6436 2.43928C17.9703 1.73054 17.1141 1.41673 16.0705 1.26905L16.0153 1.26142C15.7526 1.22593 15.6212 1.20819 15.522 1.28468C15.4228 1.36117 15.4059 1.49809 15.3721 1.77194L15.2869 2.46188L15.2833 2.48374C15.191 3.03771 15.0987 3.59141 14.9844 3.97529C14.8597 4.39435 14.6714 4.78607 14.3084 5.09356C13.9454 5.40104 13.5281 5.52238 13.0942 5.57655C12.6915 5.62683 12.1966 5.6268 11.6276 5.62677H9.62188C9.05289 5.6268 8.55798 5.62683 8.1553 5.57655C7.72143 5.52238 7.30408 5.40104 6.94111 5.09356C6.57813 4.78607 6.38984 4.39435 6.26508 3.97529C6.15125 3.59295 6.05874 3.03764 5.96681 2.48573L5.96205 2.45719L5.88218 1.77506Z',
  d12: 'M5.875 10.875C5.875 10.4608 6.21079 10.125 6.625 10.125H14.625C15.0392 10.125 15.375 10.4608 15.375 10.875C15.375 11.2892 15.0392 11.625 14.625 11.625H6.625C6.21079 11.625 5.875 11.2892 5.875 10.875ZM5.875 15.875C5.875 15.4608 6.21079 15.125 6.625 15.125H10.625C11.0392 15.125 11.375 15.4608 11.375 15.875C11.375 16.2892 11.0392 16.625 10.625 16.625H6.625C6.21079 16.625 5.875 16.2892 5.875 15.875Z',
  d13: 'M19.5 13V2H2.5V22H13',
  d14: 'M15 2H7V5H15V2Z',
  d15: 'M6.5 16H11.5M6.5 11H15.5',
  d16: 'M5.74951 1.25H1.99951C1.5853 1.25 1.24951 1.58579 1.24951 2V22C1.24951 22.4142 1.5853 22.75 1.99951 22.75L14.6282 22.75L13.2144 21.3362L15.5072 19.0433L13.2144 16.7504L16.7499 13.2148L19.0428 15.5077L19.7495 14.801V2C19.7495 1.58579 19.4137 1.25 18.9995 1.25H15.2495V4.75C15.2495 5.16421 14.9137 5.5 14.4995 5.5H6.49951C6.0853 5.5 5.74951 5.16421 5.74951 4.75V1.25ZM5.99951 10.75H14.9995V9.25H5.99951V10.75ZM5.99951 15.75H10.9995V14.25H5.99951V15.75Z',
  d17: 'M13.7495 1.25H7.24951V4H13.7495V1.25Z',
  d18: 'M20.4576 19.0425L22.7505 16.7496L21.3362 15.3354L19.0433 17.6283L16.7505 15.3354L15.3362 16.7496L17.6291 19.0425L15.3362 21.3354L16.7505 22.7496L19.0433 20.4567L21.3362 22.7496L22.7505 21.3354L20.4576 19.0425Z',
};

export const IconTaskRemove02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="task-remove-02-stroke-rounded IconTaskRemove02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconTaskRemove02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="task-remove-02-duotone-rounded IconTaskRemove02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      />
    </TheIconWrapper>
  );
};

export const IconTaskRemove02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="task-remove-02-twotone-rounded IconTaskRemove02TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
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
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTaskRemove02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="task-remove-02-solid-rounded IconTaskRemove02SolidRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconTaskRemove02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="task-remove-02-bulk-rounded IconTaskRemove02BulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTaskRemove02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="task-remove-02-stroke-sharp IconTaskRemove02StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTaskRemove02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="task-remove-02-solid-sharp IconTaskRemove02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfTaskRemove02: TheIconSelfPack = {
  name: 'TaskRemove02',
  StrokeRounded: IconTaskRemove02StrokeRounded,
  DuotoneRounded: IconTaskRemove02DuotoneRounded,
  TwotoneRounded: IconTaskRemove02TwotoneRounded,
  SolidRounded: IconTaskRemove02SolidRounded,
  BulkRounded: IconTaskRemove02BulkRounded,
  StrokeSharp: IconTaskRemove02StrokeSharp,
  SolidSharp: IconTaskRemove02SolidSharp,
};