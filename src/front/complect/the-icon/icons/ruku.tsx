import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.5 7.76239L17.8883 7.98862C19.2866 8.12106 20.5 7.08098 20.5 5.74989C20.5 4.50731 19.4365 3.5 18.1247 3.5H15.5',
  d2: 'M12.0911 6.5L10.0207 10.3833V14.8978M10.0207 14.8978V18.5C6.78541 18.5 4.84681 17.8333 3.5 17.5V9.60937C3.5 5.68298 6.71707 2.5 10.6855 2.5C12.2479 2.5 13.4299 2.69092 14.2573 2.91951C15.1883 3.17674 15.7316 4.01566 15.9212 4.9535C16.0591 5.6359 16.0158 6.34727 15.7934 7.0075L10.0207 14.8978Z',
  d3: 'M8.5 18.5V21.5M8.5 21.5H7.5C6.55719 21.5 6.08579 21.5 5.79289 21.2071C5.5 20.9142 5.5 20.4428 5.5 19.5V18.5M8.5 21.5H10',
  d4: 'M10.6855 2.5C12.2479 2.5 13.4299 2.69092 14.2573 2.91951C15.1883 3.17674 15.7316 4.01566 15.9212 4.9535C16.0591 5.6359 16.0158 6.34727 15.7934 7.0075L10.0207 14.8978V18.5C6.78541 18.5 4.84681 17.8333 3.5 17.5V9.60937C3.5 5.68298 6.71707 2.5 10.6855 2.5Z',
  d5: 'M14.7501 3.5C14.7501 3.08579 15.0858 2.75 15.5001 2.75H18.1247C19.8119 2.75 21.2501 4.05528 21.2501 5.74989C21.2501 7.5664 19.6119 8.90522 17.8177 8.73527L15.4293 8.50905C15.017 8.46999 14.7143 8.10404 14.7534 7.69167C14.7925 7.2793 15.1584 6.97668 15.5708 7.01573L17.9591 7.24196C18.9615 7.3369 19.7501 6.59555 19.7501 5.74989C19.7501 4.95934 19.0612 4.25 18.1247 4.25H15.5001C15.0858 4.25 14.7501 3.91421 14.7501 3.5Z',
  d6: 'M5.50001 17.75C5.91422 17.75 6.25001 18.0858 6.25001 18.5V19.5C6.25001 19.9926 6.2516 20.2866 6.27993 20.4973C6.30231 20.6638 6.33635 20.6977 6.50267 20.7201C6.71339 20.7484 7.0074 20.75 7.50001 20.75H7.55001C7.64429 20.75 7.69143 20.75 7.72072 20.7207C7.75001 20.6914 7.75001 20.6443 7.75001 20.55V18.5C7.75001 18.0858 8.08579 17.75 8.50001 17.75C8.91422 17.75 9.25001 18.0858 9.25001 18.5V20.55C9.25001 20.6443 9.25001 20.6914 9.2793 20.7207C9.30859 20.75 9.35573 20.75 9.45001 20.75H10C10.4142 20.75 10.75 21.0858 10.75 21.5C10.75 21.9142 10.4142 22.25 10 22.25H7.50001C7.0498 22.25 6.6367 22.2516 6.3028 22.2067C5.94732 22.1589 5.57159 22.0465 5.26257 21.7374C4.95355 21.4284 4.8411 21.0527 4.79331 20.6972C4.74841 20.3633 4.75001 19.9502 4.75001 19.5V18.5C4.75001 18.0858 5.08579 17.75 5.50001 17.75Z',
  d7: 'M10.6855 1.75C6.31041 1.75 2.75 5.26125 2.75 9.60937V17.5C2.75 18.1696 3.43858 18.256 3.93945 18.3898C5.25269 18.7407 7.15919 19.25 10.0207 19.25C10.4349 19.25 10.7707 18.9142 10.7707 18.5V16.1006C10.7707 16.0209 10.7706 16.0207 10.7498 15.9438L9.50418 11.3441C9.29181 10.5656 9.35095 10.0429 9.73193 9.3315L11.4296 6.1473C11.6245 5.78179 12.0788 5.64346 12.4443 5.83834C12.8098 6.03321 12.9481 6.48749 12.7532 6.853L11.0556 10.0372C10.8631 10.3982 10.8428 10.5487 10.952 10.952L11.405 12.6249C11.5467 13.1479 11.6175 13.4094 11.803 13.4439C11.9885 13.4783 12.1485 13.2597 12.4684 12.8223L16.3987 7.45036C16.8873 6.78256 16.809 5.56023 16.6563 4.8049C16.4345 3.70795 15.7597 2.55651 14.457 2.1966C13.5579 1.94819 12.308 1.75 10.6855 1.75Z',
  d8: 'M16.5048 4.25C16.3096 3.6882 15.9864 3.14973 15.5115 2.75H18.1247C19.8119 2.75 21.2501 4.05528 21.2501 5.74989C21.2501 7.5664 19.6119 8.90522 17.8177 8.73527L15.6115 8.52631L16.3987 7.45036C16.4728 7.34904 16.5339 7.23496 16.5837 7.11168L17.9591 7.24196C18.9615 7.3369 19.7501 6.59555 19.7501 5.74989C19.7501 4.95934 19.0612 4.25 18.1247 4.25H16.5048ZM7.75001 19.1364C8.21532 19.1843 8.71436 19.2198 9.25001 19.2374V20.55C9.25001 20.6443 9.25001 20.6914 9.2793 20.7207C9.30859 20.75 9.35573 20.75 9.45001 20.75H10C10.4142 20.75 10.75 21.0858 10.75 21.5C10.75 21.9142 10.4142 22.25 10 22.25H7.50001L7.45526 22.25C7.02244 22.2501 6.62561 22.2501 6.3028 22.2067C5.94732 22.1589 5.57159 22.0465 5.26257 21.7374C4.95355 21.4284 4.8411 21.0527 4.79331 20.6972C4.74991 20.3744 4.74995 19.9776 4.75 19.5447L4.75001 19.5V18.6012C5.19314 18.7118 5.69033 18.825 6.25001 18.9253V19.5C6.25001 19.9926 6.2516 20.2866 6.27993 20.4973C6.30231 20.6638 6.33635 20.6977 6.50267 20.7201C6.71339 20.7484 7.0074 20.75 7.50001 20.75H7.55001C7.64429 20.75 7.69143 20.75 7.72072 20.7207C7.75001 20.6914 7.75001 20.6443 7.75001 20.55V19.1364Z',
  d9: 'M15.5 3.5H18.1247C19.4365 3.5 20.5 4.50731 20.5 5.74989C20.5 6.99247 19.4365 7.99978 18.1247 7.99978H15.5',
  d10: 'M12.0911 6.5L10.0207 10.3833V14.8978M10.0207 14.8978V18.5L3.5 18.5001V9.60937C3.5 5.68298 6.71707 2.5 10.6855 2.5H16V7.99993L10.0207 14.8978Z',
  d11: 'M8.5 18.5V21.5M8.5 21.5H5.5V18.5M8.5 21.5H10',
  d12: 'M10.6855 1.75C6.31041 1.75 2.75 5.26125 2.75 9.60937V18.5001C2.75 18.699 2.82902 18.8898 2.96967 19.0304C3.11033 19.1711 3.30109 19.2501 3.50001 19.2501L4.75 19.2501V21.5C4.75 21.9142 5.08579 22.25 5.5 22.25H10V20.75H9.25L9.26953 19.25V10.3831C9.26953 10.26 9.29982 10.1388 9.35772 10.0302L11.4281 6.14697L12.7517 6.85268L10.7695 10.5705L10.7707 15.1776L16.3426 8.74978H18.1247C19.8119 8.74978 21.25 7.4445 21.25 5.74989C21.25 4.05528 19.8119 2.75 18.1247 2.75H16.75V2.5C16.75 2.08579 16.4142 1.75 16 1.75H10.6855ZM16.75 4.25V7.24978H18.1247C19.0612 7.24978 19.75 6.54044 19.75 5.74989C19.75 4.95934 19.0612 4.25 18.1247 4.25H16.75ZM6.25 20.75V19.25L7.75 19.25V20.75H6.25Z',
} as const;

export const IconRukuStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ruku-stroke-rounded IconRukuStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconRukuDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ruku-duotone-rounded IconRukuDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconRukuTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ruku-twotone-rounded IconRukuTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRukuSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ruku-solid-rounded IconRukuSolidRounded"
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

export const IconRukuBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ruku-bulk-rounded IconRukuBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
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

export const IconRukuStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ruku-stroke-sharp IconRukuStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRukuSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ruku-solid-sharp IconRukuSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRuku: TheIconSelfPack = {
  name: 'Ruku',
  StrokeRounded: IconRukuStrokeRounded,
  DuotoneRounded: IconRukuDuotoneRounded,
  TwotoneRounded: IconRukuTwotoneRounded,
  SolidRounded: IconRukuSolidRounded,
  BulkRounded: IconRukuBulkRounded,
  StrokeSharp: IconRukuStrokeSharp,
  SolidSharp: IconRukuSolidSharp,
};