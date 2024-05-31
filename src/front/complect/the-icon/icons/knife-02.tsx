import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.6468 17.7161C14.0276 17.6191 14.3277 17.2686 14.9279 16.5674L20.1144 10.5083C22.0236 8.27791 22.7538 5.16032 21.0179 2.53909C20.4426 1.67029 19.4814 1.97862 18.8802 2.57285L2.57422 18.6916C1.80859 19.4484 1.80859 20.6755 2.57422 21.4323C3.44222 22.2903 4.88535 22.1577 5.57852 21.1563C6.52528 19.7884 8.00705 16.2711 9.65825 15.6456C11.371 14.9968 11.9676 18.1437 13.6468 17.7161Z',
  d2: 'M21.0179 2.53909C20.4426 1.67029 19.4814 1.97862 18.8802 2.57285L2.57422 18.6916C1.80859 19.4484 1.80859 20.6755 2.57422 21.4323C3.44222 22.2903 4.88535 22.1577 5.57852 21.1563C6.52528 19.7884 8.00705 16.2711 9.65825 15.6456',
  d3: 'M19.8765 1.26181C20.5405 1.18851 21.1989 1.454 21.6432 2.12493C23.6194 5.10894 22.7383 8.59625 20.6841 10.996L15.474 17.0827C15.1942 17.4096 14.9474 17.6979 14.7211 17.9125C14.4796 18.1415 14.1986 18.3495 13.8319 18.4429C13.1433 18.6182 12.5683 18.408 12.1239 18.0947C11.7454 17.8279 11.4171 17.4529 11.16 17.1594L11.16 17.1594C10.8594 16.8173 10.5863 16.5232 10.3772 16.3957C10.22 16.2998 10.103 16.2791 9.92393 16.3469C9.67934 16.4396 9.37473 16.6704 9.02067 17.0733C8.67519 17.4663 8.3311 17.9667 7.99278 18.5159C7.68443 19.0164 7.39328 19.5368 7.11596 20.0325L7.11591 20.0326C6.82271 20.5561 6.45619 21.206 6.19521 21.5831C5.2356 22.9695 3.24514 23.15 2.04696 21.9656C0.984347 20.9152 0.984346 19.2086 2.04696 18.1581L18.353 2.03942C18.7341 1.6627 19.273 1.32843 19.8765 1.26181Z',
  d4: 'M19.8751 1.26181C20.5391 1.18851 21.1976 1.454 21.6419 2.12493C23.618 5.10894 22.7369 8.59625 20.6828 10.996L15.4727 17.0827C15.1928 17.4096 14.9461 17.6979 14.7198 17.9125C14.4782 18.1415 14.1972 18.3495 13.8305 18.4429C13.142 18.6182 12.567 18.408 12.1225 18.0947C11.744 17.8279 11.4157 17.4529 11.1586 17.1594L11.1586 17.1594C9.91331 15.7424 8.45701 14.4768 7.12109 13.1409L18.3516 2.03942C18.7327 1.6627 19.2716 1.32843 19.8751 1.26181Z',
  d5: 'M3.00195 18.5678C2.28875 19.2969 2.3248 20.4248 3.00184 21.1882C3.77519 22.0601 5.10589 21.7932 5.86294 20.9068L9.24534 16.9526L10.6014 15.4703L12.6965 17.5382C12.8973 17.7364 13.2204 17.7296 13.4129 17.5232L19.7798 10.6931C22.5889 7.52371 21.3747 4.6484 19.995 2.89679C19.8183 2.67245 19.4901 2.66055 19.2848 2.85864L3.00195 18.5678Z',
  d6: 'M19.5404 1.74976L20.0428 2.33813C21.5304 4.08062 22.1037 5.73393 21.9848 7.29695C21.8676 8.83704 21.0876 10.1523 20.1495 11.2526L20.1396 11.2642L13.1214 18.8364L10.6775 16.4879C9.63084 17.6626 7.07253 20.5517 6.6638 21.1445C5.75813 22.4582 3.88246 22.6281 2.75301 21.5072C1.749 20.5108 1.749 18.8903 2.75301 17.8939L2.76122 17.8857L19.5404 1.74976Z',
} as const;

export const IconKnife02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-02-stroke-rounded IconKnife02StrokeRounded"
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

export const IconKnife02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-02-duotone-rounded IconKnife02DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKnife02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-02-twotone-rounded IconKnife02TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKnife02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-02-solid-rounded IconKnife02SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKnife02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-02-bulk-rounded IconKnife02BulkRounded"
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

export const IconKnife02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-02-stroke-sharp IconKnife02StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKnife02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="knife-02-solid-sharp IconKnife02SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKnife02: TheIconSelfPack = {
  name: 'Knife02',
  StrokeRounded: IconKnife02StrokeRounded,
  DuotoneRounded: IconKnife02DuotoneRounded,
  TwotoneRounded: IconKnife02TwotoneRounded,
  SolidRounded: IconKnife02SolidRounded,
  BulkRounded: IconKnife02BulkRounded,
  StrokeSharp: IconKnife02StrokeSharp,
  SolidSharp: IconKnife02SolidSharp,
};