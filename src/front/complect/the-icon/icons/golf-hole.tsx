import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.49123 16.9949C5.8476 17.3924 4.00012 18.3679 4.00012 19.4242C4.00012 20.8468 7.35134 22.0001 11.4853 22.0001C15.6192 22.0001 18.9705 20.8468 18.9705 19.4242C18.9705 18.3026 16.8876 17.3484 13.9804 16.9949',
  d2: 'M10.9802 19.0279C11.063 11.8537 10.7826 5.1379 11.1511 2.88854C11.4308 2.09171 11.9222 1.29472 15.1486 3.06315L17.3293 4.13174C18.6711 4.78928 20.5387 5.83761 19.7703 7.1192C19.4206 7.70244 18.6245 8.35403 17.0701 9.01647L10.9782 11.9837',
  d3: 'M11.5237 22C15.6785 22 19.0466 20.8807 19.0466 19.5C19.0466 18.1193 15.6785 17 11.5237 17C7.36886 17 4.00073 18.1193 4.00073 19.5C4.00073 20.8807 7.36886 22 11.5237 22Z',
  d4: 'M11.0024 19.0277C11.0854 11.8535 10.8042 5.13766 11.1738 2.8883C11.4544 2.09147 11.9473 1.29448 15.1835 3.06291L17.3709 4.1315C18.7168 4.78904 20.5901 5.83737 19.8193 7.11896C19.4686 7.7022 18.67 8.35379 17.1109 9.01623L11.0004 11.9835',
  d5: 'M8.51449 17C5.85753 17.3971 4.00073 18.3716 4.00073 19.4268C4.00073 20.8479 7.36886 22 11.5237 22C15.6784 22 19.0466 20.8479 19.0466 19.4268C19.0466 18.3064 16.9532 17.3532 14.0313 17',
  d6: 'M8.49425 16.998C5.84985 17.3953 4.00183 18.3703 4.00183 19.426C4.00183 20.8477 7.35404 22.0003 11.4892 22.0003C15.6243 22.0003 18.9766 20.8477 18.9766 19.426C18.9766 18.305 16.8931 17.3514 13.985 16.998',
  d7: 'M11.0342 19.0497C11.0124 11.844 10.9961 13.7105 10.996 11.3828',
  d8: 'M15.1552 3.06291C11.9342 1.29366 11.4436 2.09102 11.1644 2.88821C10.9101 4.44407 10.9607 7.48503 10.9918 11.9875L17.0734 9.01897C18.6238 8.35684 19.4185 7.70554 19.7681 7.12245C20.5372 5.83974 18.6703 4.78911 17.3278 4.12985L15.1552 3.06291Z',
  d9: 'M13.4977 16.9191C13.5791 16.3728 14.088 15.996 14.6342 16.0775C16.0241 16.2847 17.2686 16.6337 18.1959 17.1095C19.0336 17.5395 20 18.2818 20 19.4276C20 20.2083 19.5371 20.8031 19.0406 21.2059C18.5359 21.6153 17.8665 21.9396 17.1278 22.193C15.6408 22.7032 13.6511 23.0008 11.5 23.0008C9.3489 23.0008 7.35917 22.7032 5.87217 22.193C5.13355 21.9396 4.46414 21.6153 3.95942 21.2059C3.46294 20.8031 3 20.2083 3 19.4276C3 18.4153 3.76421 17.7022 4.47741 17.2623C5.24577 16.7884 6.27597 16.4223 7.43353 16.1771C7.97383 16.0627 8.50459 16.408 8.61902 16.9483C8.73345 17.4886 8.38821 18.0193 7.84791 18.1337C6.82412 18.3506 6.03395 18.6521 5.52729 18.9646C5.13227 19.2082 5.03206 19.3754 5.00738 19.427C5.02652 19.463 5.07966 19.5393 5.21936 19.6526C5.47368 19.8589 5.90262 20.089 6.52122 20.3013C7.74869 20.7224 9.50896 21.0008 11.5 21.0008C13.491 21.0008 15.2513 20.7224 16.4788 20.3013C17.0974 20.089 17.5263 19.8589 17.7806 19.6526C17.9169 19.5421 17.9708 19.4669 17.9911 19.4298C17.9604 19.3726 17.8292 19.1693 17.2828 18.8889C16.6174 18.5475 15.6053 18.2444 14.3393 18.0556C13.793 17.9742 13.4162 17.4653 13.4977 16.9191ZM18.0026 19.4032C18.0027 19.4032 18.0025 19.4045 18.0015 19.4073C18.0021 19.4045 18.0025 19.4032 18.0026 19.4032ZM4.99737 19.4032C4.99748 19.4032 4.99794 19.4045 4.99845 19.4073C4.99752 19.4045 4.99727 19.4032 4.99737 19.4032Z',
  d10: 'M15.6873 2.21102C14.7781 1.76756 13.996 1.38609 13.3523 1.18221C12.6777 0.968534 11.9021 0.865748 11.1779 1.31604C10.4526 1.76702 10.2034 2.50871 10.0992 3.20826C10.05 3.5386 10.0252 3.91851 10.0127 4.34047L10 19C10 19.5523 10.4477 20 11 20C11.5523 20 12 19.5523 12 19V12.6249L16.731 10.3176C17.9252 9.73532 18.9316 9.2446 19.6288 8.75378C20.3597 8.23931 21 7.55101 21 6.51883C21 5.48665 20.3597 4.79835 19.6288 4.28389C18.9316 3.79307 16.8815 2.79333 15.6873 2.21102Z',
  d11: 'M11.0096 19.0451V10.8918',
  d12: 'M8.51295 17.0303C5.85647 17.4282 4 18.4046 4 19.4619C4 20.8859 7.36752 22.0403 11.5216 22.0403C15.6756 22.0403 19.0432 20.8859 19.0432 19.4619C19.0432 18.3393 16.9501 17.3842 14.0288 17.0303',
  d13: 'M11.0161 11.8744L11.0156 2.1433C11.0156 2.06881 11.0943 2.02036 11.1612 2.05368L19.9497 6.43361C20.0203 6.46881 20.0245 6.56768 19.9571 6.60872L11.1691 11.9599C11.1021 12.0007 11.0161 11.9527 11.0161 11.8744Z',
  d14: 'M16.9954 18.8731C16.2625 18.5384 15.1612 18.2535 13.8096 18.0966L14.0433 16.2515C15.5191 16.4228 16.8442 16.7449 17.831 17.1955C18.3228 17.4201 18.7768 17.6974 19.1205 18.0418C19.4686 18.3907 19.75 18.8594 19.75 19.4292C19.75 20.1547 19.3007 20.7075 18.8188 21.0818C18.3289 21.4622 17.6792 21.7636 16.9623 21.9991C15.519 22.4733 13.5878 22.7498 11.5 22.7498C9.41217 22.7498 7.48096 22.4733 6.0377 21.9991C5.3208 21.7636 4.67107 21.4622 4.1812 21.0818C3.69932 20.7075 3.25 20.1547 3.25 19.4292C3.25 18.8966 3.49676 18.4475 3.81065 18.1036C4.12114 17.7634 4.53313 17.4833 4.98209 17.2531C5.88141 16.7919 7.08969 16.4494 8.44435 16.255L8.73212 18.093C7.51583 18.2676 6.54029 18.5624 5.89853 18.8915C5.57694 19.0564 5.37907 19.2096 5.27234 19.3266C5.22867 19.3744 5.20742 19.4077 5.19743 19.427C5.21521 19.4598 5.26622 19.5313 5.40408 19.6383C5.65092 19.83 6.06725 20.0439 6.66766 20.2411C7.85903 20.6325 9.56752 20.8912 11.5 20.8912C13.4325 20.8912 15.141 20.6325 16.3323 20.2411C16.9328 20.0439 17.3491 19.83 17.5959 19.6383C17.7312 19.5333 17.7828 19.4625 17.8015 19.4289C17.7898 19.4086 17.7655 19.3744 17.7169 19.3257C17.5925 19.201 17.3633 19.0411 16.9954 18.8731ZM17.8117 19.4513C17.8115 19.4513 17.8109 19.4497 17.8102 19.4465C17.8115 19.4497 17.8118 19.4513 17.8117 19.4513ZM17.8103 19.4103C17.8108 19.4078 17.8113 19.4065 17.8114 19.4065C17.8115 19.4065 17.8112 19.4078 17.8103 19.4103ZM5.18863 19.4065C5.18873 19.4065 5.18918 19.4078 5.18968 19.4103C5.18877 19.4078 5.18853 19.4065 5.18863 19.4065ZM5.19012 19.4436C5.1897 19.446 5.1893 19.4472 5.1892 19.4472C5.1891 19.4472 5.18931 19.446 5.19012 19.4436Z',
  d15: 'M11.3365 1.32972C11.104 1.21302 10.8277 1.2251 10.6062 1.36165C10.3848 1.49821 10.25 1.73972 10.25 1.99981V18.9956H12.25V12.1142L20.3901 7.15796C20.623 7.01619 20.7605 6.75927 20.7494 6.48694C20.7382 6.21461 20.5802 5.96977 20.3365 5.84747L11.3365 1.32972Z',
};

export const IconGolfHoleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="golf-hole-stroke-rounded IconGolfHoleStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGolfHoleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="golf-hole-duotone-rounded IconGolfHoleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconGolfHoleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="golf-hole-twotone-rounded IconGolfHoleTwotoneRounded"
    >
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

export const IconGolfHoleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="golf-hole-solid-rounded IconGolfHoleSolidRounded"
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

export const IconGolfHoleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="golf-hole-bulk-rounded IconGolfHoleBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGolfHoleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="golf-hole-stroke-sharp IconGolfHoleStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGolfHoleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="golf-hole-solid-sharp IconGolfHoleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfGolfHole: TheIconSelfPack = {
  name: 'GolfHole',
  StrokeRounded: IconGolfHoleStrokeRounded,
  DuotoneRounded: IconGolfHoleDuotoneRounded,
  TwotoneRounded: IconGolfHoleTwotoneRounded,
  SolidRounded: IconGolfHoleSolidRounded,
  BulkRounded: IconGolfHoleBulkRounded,
  StrokeSharp: IconGolfHoleStrokeSharp,
  SolidSharp: IconGolfHoleSolidSharp,
};