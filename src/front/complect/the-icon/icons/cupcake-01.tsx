import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 13.5789L7.06237 18.0148C7.42652 19.5353 7.6086 20.2956 8.03895 20.8437C8.3231 21.2057 8.68075 21.4972 9.08605 21.6971C9.69988 22 10.4506 22 11.9521 22C13.5228 22 14.3081 22 14.9399 21.6754C15.3567 21.4613 15.7206 21.1498 16.0035 20.7652C16.4323 20.1822 16.5863 19.3783 16.8944 17.7706L18 12',
  d2: 'M12 10C8.04103 10.4949 6 9.5 6.48618 7.54383M6.48618 7.54383C5.07413 7.78754 4 9.51833 4 11C4 12.6569 5 14 7 14C9 14 16 13 16 13C18.5 12.5 20 11 20 9.5C20 7.29086 18.2091 6 16 6C16 3.79086 14.2091 2 12 2C13 3 11.5 4.25 10 5C9 5.5 6.97235 5.58766 6.48618 7.54383Z',
  d3: 'M9.08562 21.6952C9.69945 21.998 10.4502 21.998 11.9516 21.998C13.5223 21.998 14.3077 21.998 14.9395 21.6734C15.3562 21.4593 15.7202 21.1479 16.0031 20.7633C16.4319 20.1802 16.5859 19.3764 16.8939 17.7686L16.8939 17.7686L17.9378 12.3203C17.3873 12.6161 16.7369 12.8506 15.9996 12.998C15.9996 12.998 8.99957 13.998 6.99957 13.998C6.66276 13.998 6.35431 13.9599 6.07422 13.8887L7.06193 18.0128C7.42609 19.5333 7.60817 20.2936 8.03852 20.8418C8.32266 21.2037 8.68032 21.4952 9.08562 21.6952Z',
  d4: 'M12 1.25C11.6967 1.25 11.4232 1.43273 11.3071 1.71299C11.191 1.99324 11.2552 2.31583 11.4697 2.53033C11.5525 2.60649 11.6461 2.83043 11.3586 3.11697C11.0192 3.52898 10.3785 3.97225 9.66459 4.32918C8.52386 4.69703 7.53292 5.86957 7.21415 7.02498C7.05569 7.6624 7.08564 8.08959 7.19006 8.3724C7.2875 8.63632 7.47824 8.85322 7.8237 9.02624C8.58118 9.40563 9.94052 9.50158 11.9071 9.25575C12.3181 9.20438 12.693 9.49592 12.7443 9.90694C12.7957 10.318 12.5042 10.6928 12.0932 10.7442C10.1008 10.9932 8.34217 10.9635 7.15196 10.3674C6.52358 10.0527 6.03303 9.56938 5.78291 8.89194C5.69473 8.65312 5.64065 8.40158 5.6172 8.13909C5.57017 7.61285 5.54665 7.34973 5.37287 7.28236C5.19909 7.21499 5.04663 7.35476 4.74172 7.6343C4.49556 7.85997 4.27902 8.11547 4.09522 8.38325C3.57419 9.14233 3.25 10.0913 3.25 11C3.25 11.9751 3.54516 12.9202 4.19832 13.6294C4.86079 14.3487 5.82262 14.75 7 14.75C8.03296 14.75 13.8857 14.0182 16.0034 13.7534L16.1471 13.7354C18.7963 13.2056 20.75 11.5291 20.75 9.5C20.75 8.17341 20.2037 7.08599 19.3065 6.3437C18.5905 5.75135 17.6796 5.40047 16.6971 5.28897C16.354 3.0029 14.3817 1.25 12 1.25Z',
  d5: 'M6.06032 17.0458L6.3409 18.2174C6.51707 18.953 6.65927 19.5468 6.81305 20.0231C6.97187 20.5151 7.15868 20.9347 7.44997 21.3057C7.80209 21.7542 8.24737 22.118 8.75515 22.3686C9.17813 22.5773 9.6222 22.6663 10.1246 22.7084C10.6081 22.7489 11.1975 22.7488 11.9212 22.7488H11.9859C12.7433 22.7488 13.3594 22.7489 13.8633 22.7055C14.3864 22.6605 14.8478 22.5652 15.2836 22.3413C15.8056 22.0732 16.2583 21.6847 16.6086 21.2084C16.8989 20.8137 17.0754 20.3695 17.2183 19.8499C17.3568 19.3463 17.477 18.719 17.6261 17.9409L18.0458 15.7502C18.137 15.2745 18.1826 15.0366 18.0587 14.9235C17.9349 14.8103 17.6899 14.8806 17.1998 15.0211C16.9489 15.093 16.6958 15.1544 16.4422 15.2051C15.3834 15.3375 13.1323 15.623 11.2692 15.8398C9.46782 16.0494 7.62889 16.2488 7.00094 16.2488C6.92257 16.2488 6.84457 16.2474 6.76699 16.2447C6.32659 16.2288 6.10639 16.2209 6.01215 16.3361C5.91792 16.4512 5.96538 16.6494 6.06032 17.0458Z',
  d6: 'M17.9998 12L16.4998 22H7.4998L6.2998 14',
  d7: 'M12 10C8.04103 10.4949 6 9.5 6.48618 7.54383M6.48618 7.54383C5.07413 7.78754 4 9.51833 4 11C4 12.6569 5 14 7 14C9 14 16 13 16 13C18.5 12.5 20 11 20 9.5C20 7.29086 18.2091 6 16 6C16 3.79086 14.2091 2 12 2C12 2 12 4 10 5C9 5.5 6.97235 5.58766 6.48618 7.54383Z',
  d8: 'M11.25 1.25H12C14.3817 1.25 16.354 3.0029 16.6971 5.28897C17.6796 5.40047 18.5905 5.75135 19.3065 6.3437C20.2037 7.08599 20.75 8.17341 20.75 9.5C20.75 11.5291 18.7963 13.2056 16.1471 13.7354C15.4578 13.8294 13.3466 14.1188 12.343 14.2442C10.3607 14.492 8.05734 14.75 7 14.75C5.82262 14.75 4.86079 14.3487 4.19832 13.6294C3.54516 12.9202 3.25 11.9751 3.25 11C3.25 10.0913 3.57419 9.14233 4.09522 8.38325C4.52774 7.75312 5.14157 7.19096 5.89599 6.92549C6.27673 5.94038 7.00819 5.3905 7.72868 5.04836C8.12544 4.85995 8.53216 4.72759 8.86728 4.61952C9.22693 4.50354 9.4774 4.42277 9.66459 4.32918C10.4682 3.92739 10.8572 3.33749 11.0536 2.84646C11.1534 2.59702 11.2031 2.37274 11.2275 2.21408C11.2396 2.13524 11.2453 2.07417 11.2479 2.03629L11.25 1.25Z',
  d9: 'M5.86328 16.1465L6.85378 22.7499H17.1456L18.3678 14.6018C17.7495 14.8723 17.0968 15.0751 16.441 15.2063L16.3955 15.2154L16.1369 15.2507C15.3001 15.3649 13.4536 15.617 12.5288 15.7326C10.5814 15.976 8.17169 16.25 6.99974 16.25C6.61012 16.25 6.22991 16.2155 5.86328 16.1465Z',
};

export const IconCupcake01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cupcake-01-stroke-rounded IconCupcake01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCupcake01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cupcake-01-duotone-rounded IconCupcake01DuotoneRounded"
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

export const IconCupcake01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cupcake-01-twotone-rounded IconCupcake01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCupcake01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cupcake-01-solid-rounded IconCupcake01SolidRounded"
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

export const IconCupcake01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cupcake-01-bulk-rounded IconCupcake01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCupcake01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cupcake-01-stroke-sharp IconCupcake01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCupcake01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cupcake-01-solid-sharp IconCupcake01SolidSharp"
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

export const iconPackOfCupcake01: TheIconSelfPack = {
  name: 'Cupcake01',
  StrokeRounded: IconCupcake01StrokeRounded,
  DuotoneRounded: IconCupcake01DuotoneRounded,
  TwotoneRounded: IconCupcake01TwotoneRounded,
  SolidRounded: IconCupcake01SolidRounded,
  BulkRounded: IconCupcake01BulkRounded,
  StrokeSharp: IconCupcake01StrokeSharp,
  SolidSharp: IconCupcake01SolidSharp,
};