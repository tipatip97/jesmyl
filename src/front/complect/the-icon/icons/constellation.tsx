import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z',
  d2: 'M20 18C21.1046 18 22 17.1046 22 16C22 14.8954 21.1046 14 20 14C18.8954 14 18 14.8954 18 16C18 17.1046 18.8954 18 20 18Z',
  d3: 'M11 22C12.1046 22 13 21.1046 13 20C13 18.8954 12.1046 18 11 18C9.89543 18 9 18.8954 9 20C9 21.1046 9.89543 22 11 22Z',
  d4: 'M15 6C16.1046 6 17 5.10457 17 4C17 2.89543 16.1046 2 15 2C13.8954 2 13 2.89543 13 4C13 5.10457 13.8954 6 15 6Z',
  d5: 'M4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10Z',
  d6: 'M14.2983 5.87309L12.7032 10.1268M13.1207 4.68359L5.88086 7.31625M11.7527 13.9847L11.2489 18.0152M13.79 12.8945L18.2115 15.1053M18.1727 16.8124L12.8288 19.1874',
  d7: 'M9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12Z',
  d8: 'M17.25 16C17.25 14.4812 18.4812 13.25 20 13.25C21.5188 13.25 22.75 14.4812 22.75 16C22.75 17.5188 21.5188 18.75 20 18.75C18.4812 18.75 17.25 17.5188 17.25 16Z',
  d9: 'M8.25 20C8.25 18.4812 9.48122 17.25 11 17.25C12.5188 17.25 13.75 18.4812 13.75 20C13.75 21.5188 12.5188 22.75 11 22.75C9.48122 22.75 8.25 21.5188 8.25 20Z',
  d10: 'M12.25 4C12.25 2.48122 13.4812 1.25 15 1.25C16.5188 1.25 17.75 2.48122 17.75 4C17.75 5.51878 16.5188 6.75 15 6.75C13.4812 6.75 12.25 5.51878 12.25 4Z',
  d11: 'M1.25 8C1.25 6.48122 2.48122 5.25 4 5.25C5.51878 5.25 6.75 6.48122 6.75 8C6.75 9.51878 5.51878 10.75 4 10.75C2.48122 10.75 1.25 9.51878 1.25 8Z',
  d12: 'M14.0969 4.89337C14.1352 4.71572 14.1255 4.52551 14.0588 4.34212C13.87 3.82309 13.2963 3.55533 12.7772 3.74407L5.53744 6.37673C5.0184 6.56547 4.75065 7.13923 4.93939 7.65826C5.12812 8.1773 5.70189 8.44506 6.22092 8.25632L13.3004 5.68195L11.7652 9.7759C11.5713 10.293 11.8333 10.8694 12.3504 11.0634C12.8675 11.2573 13.4439 10.9953 13.6378 10.4782L15.233 6.22448C15.4269 5.70736 15.1649 5.13095 14.6478 4.93703C14.4651 4.86852 14.275 4.85691 14.0969 4.89337ZM12.8939 12.4476C13.1409 11.9536 13.7416 11.7534 14.2355 12.0004L18.657 14.2111C19.151 14.4581 19.3513 15.0588 19.1043 15.5528C19.0134 15.7345 18.8748 15.8764 18.7111 15.971C18.8703 16.0729 19.0023 16.2209 19.0848 16.4065C19.3091 16.9112 19.0818 17.5022 18.5771 17.7265L13.2333 20.1015C12.7286 20.3258 12.1377 20.0985 11.9133 19.5939C11.788 19.3119 11.8037 19.003 11.9299 18.7461C11.7206 18.9415 11.4294 19.046 11.1231 19.0077C10.5751 18.9392 10.1864 18.4394 10.2549 17.8914L10.7587 13.8609C10.8272 13.3129 11.327 12.9242 11.875 12.9927C12.423 13.0612 12.8118 13.561 12.7433 14.109L12.2395 18.1395C12.2253 18.2526 12.1928 18.359 12.1452 18.4559C12.2243 18.3823 12.3167 18.3203 12.421 18.2739L17.6566 15.947L13.3411 13.7892C12.8471 13.5423 12.6469 12.9416 12.8939 12.4476Z',
  d13: 'M12.2516 3.93555L6.06641 6.18471C6.49247 6.66906 6.75087 7.30449 6.75087 8.00027C6.75087 8.02164 6.75062 8.04295 6.75014 8.06421L12.9348 5.81524C12.5091 5.33096 12.2509 4.69577 12.2509 4.00027C12.2509 3.97863 12.2511 3.95706 12.2516 3.93555Z',
  d14: 'M13.1643 6.04717C13.6512 6.48432 14.295 6.75027 15.0009 6.75027C15.0128 6.75027 15.0248 6.75019 15.0368 6.75004L13.836 9.95211C13.3492 9.5157 12.7061 9.25027 12.0009 9.25027C11.9883 9.25027 11.9757 9.25035 11.9631 9.25052L13.1643 6.04717Z',
  d15: 'M10.6899 14.4183L10.3255 17.3338C10.5416 17.2793 10.7678 17.2503 11.0009 17.2503C11.4748 17.2503 11.9208 17.3702 12.3101 17.5813L12.6744 14.6672C12.4588 14.7215 12.2332 14.7503 12.0009 14.7503C11.5262 14.7503 11.0796 14.63 10.6899 14.4183Z',
  d16: 'M13.8447 14.0406L17.2622 15.7494C17.3262 15.0415 17.6584 14.4111 18.1565 13.9604L14.7395 12.252C14.6753 12.9598 14.3429 13.5901 13.8447 14.0406Z',
  d17: 'M18.0657 17.9542C17.5904 17.4834 17.286 16.8404 17.2537 16.1264L12.9354 18.0457C13.4109 18.5164 13.7155 19.1593 13.748 19.8732L18.0657 17.9542Z',
  d18: 'M5.53906 6.3768L12.7789 3.74414L13.4355 5.54989L15.2346 6.22455L13.6395 10.4782L11.7668 9.77597L13.302 5.68202L6.22255 8.25638L5.53906 6.3768ZM17.6582 15.9471L13.3427 13.7893L14.2372 12.0005L18.6587 14.2112L17.7892 15.9501L18.5788 17.7266L13.2349 20.1016L12.4226 18.274L17.6582 15.9471ZM12.7449 14.1091L12.2411 18.1395L10.2565 17.8915L10.7603 13.861L12.7449 14.1091Z',
};

export const IconConstellationStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="constellation-stroke-rounded IconConstellationStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconConstellationDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="constellation-duotone-rounded IconConstellationDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconConstellationTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="constellation-twotone-rounded IconConstellationTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconConstellationSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="constellation-solid-rounded IconConstellationSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconConstellationBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="constellation-bulk-rounded IconConstellationBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      </g>
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
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconConstellationStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="constellation-stroke-sharp IconConstellationStrokeSharp"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconConstellationSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="constellation-solid-sharp IconConstellationSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
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

export const iconPackOfConstellation: TheIconSelfPack = {
  name: 'Constellation',
  StrokeRounded: IconConstellationStrokeRounded,
  DuotoneRounded: IconConstellationDuotoneRounded,
  TwotoneRounded: IconConstellationTwotoneRounded,
  SolidRounded: IconConstellationSolidRounded,
  BulkRounded: IconConstellationBulkRounded,
  StrokeSharp: IconConstellationStrokeSharp,
  SolidSharp: IconConstellationSolidSharp,
};