import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.7341 17.7341C22.2582 13.21 23.3585 6.97526 20.1916 3.80838C17.6271 1.24383 13.0506 1.4776 9 4.06186M3.80838 20.1916C6.28643 22.6697 10.6429 22.535 14.5884 20.1916M6.26587 6.26587C2.97995 9.55179 1.50022 13.7401 2.14979 17',
  d2: 'M16.915 7.08503C15.0148 5.18491 11.274 5.84506 8.55952 8.55952C5.84506 11.274 5.18491 15.0148 7.08503 16.915C8.98515 18.8151 12.726 18.1549 15.4405 15.4405C17.0895 13.7915 17.9803 11.7638 17.9997 10',
  d3: 'M13.6383 10.3617C14.2717 10.9951 14.0516 12.242 13.1468 13.1468C12.242 14.0516 10.9951 14.2717 10.3617 13.6383C9.7283 13.0049 9.94835 11.758 10.8532 10.8532C11.758 9.94835 13.0049 9.7283 13.6383 10.3617Z',
  d4: 'M17.7341 17.7341C22.2582 13.21 23.3585 6.97526 20.1916 3.80838C17.0247 0.641511 10.79 1.74176 6.26587 6.26587C1.74176 10.79 0.641511 17.0247 3.80838 20.1916C6.97526 23.3585 13.21 22.2582 17.7341 17.7341ZM15.4405 15.4405C18.1549 12.726 18.8151 8.98515 16.915 7.08503C15.0148 5.18491 11.274 5.84506 8.55952 8.55952C5.84506 11.274 5.18491 15.0148 7.08503 16.915C8.98515 18.8151 12.726 18.1549 15.4405 15.4405Z',
  d5: 'M19.315 4.68623C17.2831 2.65441 13.3796 2.65193 9.59439 5.06677C9.13937 5.35706 8.53518 5.22353 8.24488 4.76854C7.95458 4.31354 8.08811 3.70938 8.54313 3.41909C12.675 0.783111 17.7164 0.32374 20.6971 3.30422C22.5319 5.13897 23.059 7.79267 22.5862 10.472C22.1127 13.155 20.6305 15.9599 18.2954 18.2948C17.9138 18.6765 17.295 18.6765 16.9133 18.2948C16.5317 17.9132 16.5317 17.2945 16.9133 16.9128C18.9996 14.8267 20.2656 12.3747 20.6614 10.1323C21.0577 7.8863 20.575 5.94623 19.315 4.68623ZM7.0878 5.70574C7.46945 6.08737 7.46945 6.70612 7.0878 7.08775C4.03614 10.1393 2.77913 13.9177 3.33266 16.6954C3.43814 17.2247 3.09454 17.7393 2.56521 17.8448C2.03588 17.9503 1.52128 17.6067 1.4158 17.0774C0.699725 13.4839 2.33491 9.0764 5.70573 5.70574C6.08738 5.32411 6.70615 5.32411 7.0878 5.70574ZM15.3704 19.5063C15.646 19.9703 15.4932 20.5699 15.0292 20.8456C10.9945 23.2418 6.18385 23.576 3.3041 20.6964C2.92245 20.3147 2.92245 19.696 3.3041 19.3143C3.68575 18.9327 4.30452 18.9327 4.68617 19.3143C6.64988 21.278 10.3541 21.3489 14.0311 19.1651C14.4951 18.8895 15.0948 19.0423 15.3704 19.5063Z',
  d6: 'M13.1893 7.18888C11.9319 7.41075 10.5312 8.12711 9.32924 9.32904C8.12725 10.531 7.41086 11.9316 7.18898 13.1889C6.96644 14.4498 7.24718 15.4711 7.88826 16.1122C8.52935 16.7533 9.55071 17.034 10.8117 16.8115C12.069 16.5896 13.4698 15.8732 14.6717 14.6713C16.1384 13.2047 16.871 11.4566 16.8866 10.035C16.8925 9.49532 17.3348 9.06263 17.8745 9.06855C18.4142 9.07447 18.8469 9.51676 18.841 10.0564C18.8188 12.0821 17.8101 14.2971 16.0538 16.0533C14.603 17.504 12.8494 18.4365 11.1514 18.7362C9.45707 19.0352 7.72204 18.71 6.50619 17.4942C5.29034 16.2784 4.96517 14.5435 5.26417 12.8492C5.56383 11.1513 6.49639 9.39775 7.94717 7.94704C9.39795 6.49633 11.1515 5.56381 12.8496 5.26417C14.5439 4.96518 16.2789 5.29033 17.4948 6.50613C17.8764 6.88776 17.8764 7.5065 17.4948 7.88813C17.1131 8.26976 16.4944 8.26976 16.1127 7.88813C15.4716 7.24708 14.4503 6.96636 13.1893 7.18888Z',
  d7: 'M12.1714 9.11256C12.8806 8.98741 13.6968 9.1106 14.2937 9.70745C14.8906 10.3043 15.0138 11.1205 14.8886 11.8297C14.7628 12.5426 14.3799 13.2447 13.8134 13.8112C13.2468 14.3777 12.5447 14.7606 11.8318 14.8864C11.1225 15.0115 10.3063 14.8883 9.70943 14.2915C9.11256 13.6946 8.98936 12.8784 9.11452 12.1693C9.24033 11.4564 9.62324 10.7543 10.1898 10.1878C10.7563 9.62126 11.4584 9.23837 12.1714 9.11256Z',
  d8: 'M19.315 4.68623C17.2831 2.65441 13.3796 2.65193 9.59439 5.06677L8.54313 3.41909C12.675 0.783111 17.7164 0.32374 20.6971 3.30422C22.5319 5.13897 23.059 7.79267 22.5862 10.472C22.1127 13.155 20.6305 15.9599 18.2954 18.2948L16.9133 16.9128C18.9996 14.8267 20.2656 12.3747 20.6614 10.1323C21.0577 7.8863 20.575 5.94623 19.315 4.68623ZM7.0878 7.08775C4.03614 10.1393 2.77913 13.9177 3.33266 16.6954L1.4158 17.0774C0.699725 13.4839 2.33491 9.0764 5.70573 5.70574L7.0878 7.08775ZM4.68617 19.3143C6.64988 21.278 10.3541 21.3489 14.0311 19.1651L15.0292 20.8456C10.9945 23.2418 6.18385 23.576 3.3041 20.6964L4.68617 19.3143Z',
  d9: 'M13.1893 7.18888C11.9319 7.41075 10.5312 8.12711 9.32924 9.32904C8.12725 10.531 7.41086 11.9316 7.18898 13.1889C6.96644 14.4498 7.24718 15.4711 7.88826 16.1122C8.52935 16.7533 9.55071 17.034 10.8117 16.8115C12.069 16.5896 13.4698 15.8732 14.6717 14.6713C16.1384 13.2047 16.871 11.4566 16.8866 10.035L18.841 10.0564C18.8188 12.0821 17.8101 14.2971 16.0538 16.0533C14.603 17.504 12.8494 18.4365 11.1514 18.7362C9.45707 19.0352 7.72205 18.71 6.50619 17.4942C5.29034 16.2784 4.96517 14.5435 5.26417 12.8492C5.56383 11.1513 6.49639 9.39775 7.94717 7.94704C9.39795 6.49633 11.1515 5.56381 12.8496 5.26417C14.5439 4.96518 16.2789 5.29033 17.4948 6.50613L16.1127 7.88813C15.4716 7.24708 14.4503 6.96636 13.1893 7.18888Z',
  d10: 'M12.1714 9.11451C12.8806 8.98937 13.6968 9.11256 14.2937 9.7094C14.8906 10.3062 15.0138 11.1224 14.8886 11.8316C14.7628 12.5445 14.3799 13.2466 13.8134 13.8131C13.2468 14.3796 12.5447 14.7625 11.8318 14.8883C11.1225 15.0135 10.3063 14.8903 9.70943 14.2934C9.11256 13.6966 8.98936 12.8804 9.11452 12.1712C9.24033 11.4583 9.62324 10.7562 10.1898 10.1897C10.7563 9.62321 11.4584 9.24032 12.1714 9.11451Z',
};

export const IconGalaxyStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="galaxy-stroke-rounded IconGalaxyStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGalaxyDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="galaxy-duotone-rounded IconGalaxyDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGalaxyTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="galaxy-twotone-rounded IconGalaxyTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGalaxySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="galaxy-solid-rounded IconGalaxySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGalaxyBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="galaxy-bulk-rounded IconGalaxyBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGalaxyStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="galaxy-stroke-sharp IconGalaxyStrokeSharp"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGalaxySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="galaxy-solid-sharp IconGalaxySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGalaxy: TheIconSelfPack = {
  name: 'Galaxy',
  StrokeRounded: IconGalaxyStrokeRounded,
  DuotoneRounded: IconGalaxyDuotoneRounded,
  TwotoneRounded: IconGalaxyTwotoneRounded,
  SolidRounded: IconGalaxySolidRounded,
  BulkRounded: IconGalaxyBulkRounded,
  StrokeSharp: IconGalaxyStrokeSharp,
  SolidSharp: IconGalaxySolidSharp,
};