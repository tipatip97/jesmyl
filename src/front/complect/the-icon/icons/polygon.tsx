import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 14.0147V9.98528C2 8.75903 2 8.1459 2.22836 7.59459C2.45672 7.04328 2.89027 6.60973 3.75736 5.74264L5.74264 3.75736C6.60973 2.89027 7.04328 2.45672 7.59459 2.22836C8.1459 2 8.75903 2 9.98528 2H14.0147C15.241 2 15.8541 2 16.4054 2.22836C16.9567 2.45672 17.3903 2.89027 18.2574 3.75736L20.2426 5.74264C21.1097 6.60973 21.5433 7.04328 21.7716 7.59459C22 8.1459 22 8.75903 22 9.98528V14.0147C22 15.241 22 15.8541 21.7716 16.4054C21.5433 16.9567 21.1097 17.3903 20.2426 18.2574L18.2574 20.2426C17.3903 21.1097 16.9567 21.5433 16.4054 21.7716C15.8541 22 15.241 22 14.0147 22H9.98528C8.75903 22 8.1459 22 7.59459 21.7716C7.04328 21.5433 6.60973 21.1097 5.74264 20.2426L3.75736 18.2574C2.89027 17.3903 2.45672 16.9567 2.22836 16.4054C2 15.8541 2 15.241 2 14.0147Z',
  d2: 'M12 2H9.98528C8.75903 2 8.1459 2 7.59459 2.22836C7.04328 2.45672 6.60973 2.89027 5.74264 3.75736L3.75736 5.74264C2.89027 6.60973 2.45672 7.04328 2.22836 7.59459C2 8.1459 2 8.75903 2 9.98528V14.0147C2 15.241 2 15.8541 2.22836 16.4054C2.45672 16.9567 2.89027 17.3903 3.75736 18.2574L5.74264 20.2426C6.60973 21.1097 7.04328 21.5433 7.59459 21.7716C8.1459 22 8.75903 22 9.98528 22H12',
  d3: 'M14.1574 1.24992C15.2452 1.2494 16.0011 1.24904 16.6925 1.53542C17.3839 1.82179 17.9182 2.35659 18.687 3.12612L20.8739 5.31308C21.6435 6.08189 22.1783 6.61617 22.4646 7.30754C22.751 7.99892 22.7507 8.75487 22.7501 9.84265V14.1573C22.7507 15.2451 22.751 16.001 22.4646 16.6924C22.1783 17.3838 21.6435 17.918 20.8739 18.6869L18.687 20.8738C17.9182 21.6433 17.3839 22.1781 16.6925 22.4645C16.0011 22.7509 15.2452 22.7505 14.1574 22.75H9.84277C8.75499 22.7505 7.99904 22.7509 7.30767 22.4645C6.61629 22.1781 6.08201 21.6433 5.3132 20.8738L3.12625 18.6868L3.12623 18.6868C2.3567 17.918 1.82191 17.3838 1.53554 16.6924C1.24916 16.001 1.24952 15.2451 1.25004 14.1573V9.84264C1.24952 8.75487 1.24916 7.99892 1.53554 7.30754C1.82192 6.61617 2.35671 6.08189 3.12625 5.31308L5.3132 3.12613C6.08201 2.35659 6.61629 1.8218 7.30767 1.53542C7.99904 1.24904 8.75499 1.2494 9.84276 1.24992H14.1574Z',
  d4: 'M20.8741 5.3113C21.6436 6.08011 22.1784 6.61439 22.4648 7.30577C22.7512 7.99714 22.7508 8.75309 22.7503 9.84087V14.1555C22.7508 15.2433 22.7512 15.9992 22.4648 16.6906C22.1784 17.382 21.6436 17.9163 20.8741 18.6851L18.6872 20.872C17.9183 21.6416 17.3841 22.1764 16.6927 22.4627C16.0013 22.7491 15.2454 22.7488 14.1576 22.7482H9.84294C8.75517 22.7488 7.99922 22.7491 7.30784 22.4627C6.61647 22.1764 6.08218 21.6416 5.31338 20.872L3.93945 19.4981L19.5002 3.93738L20.8741 5.3113Z',
  d5: 'M7.5 2L2 7.5V16.5L7.5 22H16.5L22 16.5V7.5L16.5 2H7.5Z',
  d6: 'M7.18934 1.25H16.8107L22.75 7.18934V16.8107L16.8107 22.75H7.18934L1.25 16.8107V7.18934L7.18934 1.25Z',
};

export const IconPolygonStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="polygon-stroke-rounded IconPolygonStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPolygonDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="polygon-duotone-rounded IconPolygonDuotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPolygonTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="polygon-twotone-rounded IconPolygonTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconPolygonSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="polygon-solid-rounded IconPolygonSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPolygonBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="polygon-bulk-rounded IconPolygonBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPolygonStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="polygon-stroke-sharp IconPolygonStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPolygonSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="polygon-solid-sharp IconPolygonSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPolygon: TheIconSelfPack = {
  name: 'Polygon',
  StrokeRounded: IconPolygonStrokeRounded,
  DuotoneRounded: IconPolygonDuotoneRounded,
  TwotoneRounded: IconPolygonTwotoneRounded,
  SolidRounded: IconPolygonSolidRounded,
  BulkRounded: IconPolygonBulkRounded,
  StrokeSharp: IconPolygonStrokeSharp,
  SolidSharp: IconPolygonSolidSharp,
};