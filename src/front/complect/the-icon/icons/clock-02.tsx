import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.04798 8.60657L2.53784 8.45376C4.33712 3.70477 9.503 0.999914 14.5396 2.34474C19.904 3.77711 23.0904 9.26107 21.6565 14.5935C20.2227 19.926 14.7116 23.0876 9.3472 21.6553C5.36419 20.5917 2.58192 17.2946 2 13.4844',
  d2: 'M12 8V12L14 14',
  d3: 'M14.2297 3.50853C18.955 4.77023 21.7528 9.59639 20.4932 14.2808C19.2332 18.9666 14.3861 21.7536 9.65962 20.4915C6.15307 19.5552 3.70523 16.6541 3.19345 13.3031C3.11197 12.7696 2.61339 12.4031 2.07986 12.4846C1.54632 12.5661 1.17985 13.0647 1.26134 13.5982C1.88693 17.6944 4.87709 21.2375 9.1554 22.3799C14.9137 23.9174 20.8381 20.525 22.3807 14.7883C23.9235 9.05039 20.4935 3.15805 14.7339 1.62017C9.3266 0.176346 3.77489 3.07901 1.83914 8.1882C1.72909 8.47867 1.76368 8.80416 1.93232 9.06502C2.10097 9.32587 2.38358 9.49102 2.69362 9.50989L5.14668 9.65923C5.6854 9.69203 6.14872 9.28189 6.18151 8.74316C6.1938 8.54137 6.18151 8.32125 6.04846 8.1882L5.04125 7.18099C4.86798 7.00772 4.84468 6.7333 4.99728 6.54158C7.11906 3.87593 10.7085 2.56832 14.2297 3.50853Z',
  d4: 'M12 7C12.5523 7 13 7.44772 13 8V11.5858L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V8C11 7.44772 11.4477 7 12 7Z',
  d5: 'M5.5 8.45376L2.53784 8.45376C4.33712 3.70477 9.503 0.999914 14.5396 2.34474C19.904 3.77711 23.0904 9.26107 21.6565 14.5935C20.2227 19.926 14.7116 23.0876 9.3472 21.6553C5.36419 20.5917 2.58192 17.2946 2 13.4844',
  d6: 'M12 7V12L14.5 14.5',
  d7: 'M1.82615 8.1882C3.7629 3.07901 9.31748 0.176346 14.7276 1.62017C20.4902 3.15805 23.922 9.05039 22.3783 14.7883C20.835 20.525 14.9075 23.9174 9.1462 22.3799C4.86567 21.2375 1.87397 17.6944 1.24805 13.5982L3.18116 13.3031C3.69321 16.6541 6.14232 19.5553 9.65068 20.4915C14.3796 21.7536 19.2292 18.9666 20.4898 14.2808C21.7501 9.59639 18.9508 4.77023 14.2232 3.50853C10.2778 2.45562 6.24684 4.22172 4.28846 7.55718L5.63678 7.55718L5.63678 9.5117L2.74049 9.5117C2.41922 9.5117 2.11844 9.35395 1.9359 9.08972C1.75335 8.82548 1.71232 8.48848 1.82615 8.1882Z',
  d8: 'M11 7H13V11.5858L15.2071 13.7929L13.7929 15.2071L11 12.4142V7Z',
} as const;

export const IconClock02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-02-stroke-rounded IconClock02StrokeRounded"
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

export const IconClock02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-02-duotone-rounded IconClock02DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
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

export const IconClock02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-02-twotone-rounded IconClock02TwotoneRounded"
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

export const IconClock02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-02-solid-rounded IconClock02SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconClock02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-02-bulk-rounded IconClock02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconClock02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-02-stroke-sharp IconClock02StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconClock02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="clock-02-solid-sharp IconClock02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfClock02: TheIconSelfPack = {
  name: 'Clock02',
  StrokeRounded: IconClock02StrokeRounded,
  DuotoneRounded: IconClock02DuotoneRounded,
  TwotoneRounded: IconClock02TwotoneRounded,
  SolidRounded: IconClock02SolidRounded,
  BulkRounded: IconClock02BulkRounded,
  StrokeSharp: IconClock02StrokeSharp,
  SolidSharp: IconClock02SolidSharp,
};