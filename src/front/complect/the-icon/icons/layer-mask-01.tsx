import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d2: 'M5 20L19 5',
  d3: 'M16 9L22 13.8528M12.4128 12.4059L19.3601 18.3634M8 15.6672L15 21.5',
  d4: 'M12 2C6.47715 2 2 6.47715 2 12C2 15.0413 3.35767 17.7655 5.5 19.5996L8.6439 16.2028L12.2976 12.2552L15.6863 8.59404L19.075 4.93284C17.265 3.1209 14.7634 2 12 2Z',
  d5: 'M15.1308 21.5006L8.64355 16.2035L12.2973 12.2559L19.5992 18.5006C18.4247 19.8726 16.885 20.9228 15.1308 21.5006Z',
  d6: 'M22.0002 12.0008C22.0002 9.24132 20.8825 6.74293 19.0752 4.93359L15.6865 8.5948L21.861 13.6731C21.9526 13.1293 22.0002 12.5706 22.0002 12.0008Z',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM6.27617 18.6784C7.81454 19.9981 9.81415 20.7955 12 20.7955C12.2125 20.7955 12.4233 20.7879 12.6321 20.7731L7.92783 16.9028L6.27617 18.6784ZM15.1166 20.2273C16.1906 19.8203 17.164 19.209 17.9896 18.4409L11.6558 12.8951L9.29255 15.4357L15.1166 20.2273ZM19.2906 16.9217C19.8993 16.0217 20.3458 15.003 20.588 13.9075L15.0344 9.26307L13.0186 11.4301L19.2906 16.9217ZM20.7792 11.4601C20.646 9.26046 19.7043 7.27899 18.2475 5.80895L16.3985 7.79664L20.7792 11.4601Z',
  d8: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z',
  d9: 'M6.27637 18.678C7.81474 19.9977 9.81436 20.7951 12.0002 20.7951C12.2127 20.7951 12.4235 20.7876 12.6323 20.7727L7.92803 16.9024L6.27637 18.678ZM15.1168 20.2269C16.1908 19.8199 17.1642 19.2086 17.9898 18.4405L11.656 12.8948L9.29275 15.4353L15.1168 20.2269ZM19.2908 16.9213C19.8995 16.0213 20.346 15.0026 20.5882 13.9071L15.0346 9.26271L13.0188 11.4297L19.2908 16.9213ZM20.7794 11.4598C20.6462 9.2601 19.7045 7.27863 18.2477 5.80859L16.3987 7.79628L20.7794 11.4598Z',
  d10: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12.0005 21.25C9.95424 21.25 8.06316 20.5856 6.53125 19.4607L8.65371 17.1866L13.4034 21.1443C12.9459 21.2139 12.4774 21.25 12.0005 21.25ZM18.4835 18.598C17.5563 19.5092 16.4379 20.2263 15.1941 20.6839L9.67881 16.0883L12.2919 13.2886L18.4835 18.598ZM21.0273 14.0291C20.7449 15.2907 20.2048 16.455 19.4651 17.4639L13.3162 12.191L15.6556 9.68456L21.0273 14.0291ZM21.2505 12C21.2505 12.0927 21.2491 12.1851 21.2464 12.2772L16.6817 8.58522L19.0664 6.03015C20.429 7.64128 21.2505 9.72471 21.2505 12Z',
};

export const IconLayerMask01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layer-mask-01-stroke-rounded IconLayerMask01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLayerMask01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layer-mask-01-duotone-rounded IconLayerMask01DuotoneRounded"
    >
      <path 
        opacity="0.3" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="0.3" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="0.3" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLayerMask01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layer-mask-01-twotone-rounded IconLayerMask01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLayerMask01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layer-mask-01-solid-rounded IconLayerMask01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayerMask01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layer-mask-01-bulk-rounded IconLayerMask01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayerMask01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layer-mask-01-stroke-sharp IconLayerMask01StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLayerMask01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layer-mask-01-solid-sharp IconLayerMask01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLayerMask01: TheIconSelfPack = {
  name: 'LayerMask01',
  StrokeRounded: IconLayerMask01StrokeRounded,
  DuotoneRounded: IconLayerMask01DuotoneRounded,
  TwotoneRounded: IconLayerMask01TwotoneRounded,
  SolidRounded: IconLayerMask01SolidRounded,
  BulkRounded: IconLayerMask01BulkRounded,
  StrokeSharp: IconLayerMask01StrokeSharp,
  SolidSharp: IconLayerMask01SolidSharp,
};