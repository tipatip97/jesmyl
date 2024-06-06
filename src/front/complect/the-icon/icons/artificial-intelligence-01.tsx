import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 21.9996V21.4996C16 20.395 16.9321 19.5001 17.9223 19.0106C18.8846 18.5349 19.6943 17.7507 19.7965 16.8309L20 14.9996L22 13.9996L19.5 10.2496C19.5 5.94604 16.2049 2.41212 12 2.0332M6.5 16.9958V21.9996M6.5 16.9958C5.46656 16.2668 4.60808 15.3064 4 14.1899M6.5 16.9958C7.25065 17.5253 8.09362 17.9327 9 18.189',
  d2: 'M8 4H6C5.05719 4 4.58579 4 4.29289 4.29289C4 4.58579 4 5.05719 4 6V8C4 8.94281 4 9.41421 4.29289 9.70711C4.58579 10 5.05719 10 6 10H8C8.94281 10 9.41421 10 9.70711 9.70711C10 9.41421 10 8.94281 10 8V6C10 5.05719 10 4.58579 9.70711 4.29289C9.41421 4 8.94281 4 8 4Z',
  d3: 'M5.5 10V12M8.5 10V12M5.5 2V4M8.5 2V4M4 5.5H2M4 8.5H2M12 5.5H10M12 8.5H10',
  d4: 'M5.86458 4.00003C7.30975 2.75365 9.19186 2 11.25 2C15.8063 2 19.5 5.69365 19.5 10.25L22 14L20 15L19.7965 16.8313C19.6943 17.7511 18.8846 18.5354 17.9223 19.011C16.9321 19.5005 16 20.3954 16 21.5V22H6.5V16.9962C4.38283 15.5028 3 13.0379 3 10.25C3 8.82295 3.36233 7.48053 4 6.30971V8C4 8.94281 4 9.41421 4.29289 9.70711C4.58579 10 5.05719 10 6 10H8C8.94281 10 9.41421 10 9.70711 9.70711C10 9.41421 10 8.94281 10 8V6C10 5.05719 10 4.58579 9.70711 4.29289C9.41421 4 8.94281 4 8 4H6C5.95374 4 5.90861 4 5.86458 4.00003Z',
  d5: 'M16.0162 22.0009V21.5C16.0162 20.3934 16.9457 19.4969 17.9331 19.0066C18.8927 18.53 19.7001 17.7444 19.802 16.823L20.0049 14.9884L21.9992 13.9867L19.5063 10.23C19.5063 5.91881 16.2206 2.37862 12.0276 1.99902M6.5432 16.9882V22.0009M6.5432 16.9882C5.51269 16.2579 4.65665 15.2958 4.05029 14.1773M6.5432 16.9882C7.29172 17.5186 8.1323 17.9267 9.0361 18.1835',
  d6: 'M5.47108 1.99902V3.98155M2.00049 5.50562H4.0428M9.98577 5.50562H12.0281M9.98577 8.48411H12.0281M2.00049 8.48411H4.0428M5.47108 10.0325V12.015M8.4823 10.0325V12.015M8.47161 1.99902V3.98155M5.03809 9.98072H8.99047C9.54016 9.98072 9.98577 9.53221 9.98577 8.97895V4.98333C9.98577 4.43006 9.54016 3.98155 8.99047 3.98155H5.03809C4.48841 3.98155 4.0428 4.43006 4.0428 4.98333V8.97895C4.0428 9.53221 4.48841 9.98072 5.03809 9.98072Z',
  d7: 'M5.5 1.25C5.91421 1.25 6.25 1.58579 6.25 2V3.25004H7.75V2C7.75 1.58579 8.08579 1.25 8.5 1.25C8.91421 1.25 9.25 1.58579 9.25 2V3.30091C9.58963 3.35272 9.94367 3.46884 10.2374 3.7626C10.5312 4.05636 10.6473 4.41038 10.6991 4.75H12C12.4142 4.75 12.75 5.08579 12.75 5.5C12.75 5.91421 12.4142 6.25 12 6.25H10.75V7.75H12C12.4142 7.75 12.75 8.08579 12.75 8.5C12.75 8.91421 12.4142 9.25 12 9.25H10.6991C10.6473 9.58964 10.5312 9.9437 10.2374 10.2375C9.94367 10.5312 9.58963 10.6474 9.25 10.6992V12C9.25 12.4142 8.91421 12.75 8.5 12.75C8.08579 12.75 7.75 12.4142 7.75 12V10.75H6.25V12C6.25 12.4142 5.91421 12.75 5.5 12.75C5.08579 12.75 4.75 12.4142 4.75 12V10.6992C4.41037 10.6474 4.05633 10.5312 3.76256 10.2375C3.46879 9.9437 3.35267 9.58964 3.30086 9.25H2C1.58579 9.25 1.25 8.91421 1.25 8.5C1.25 8.08579 1.58579 7.75 2 7.75H3.25V6.25H2C1.58579 6.25 1.25 5.91421 1.25 5.5C1.25 5.08579 1.58579 4.75 2 4.75H3.30087C3.35268 4.41038 3.46881 4.05636 3.76256 3.7626C4.05633 3.46884 4.41037 3.35272 4.75 3.30091V2C4.75 1.58579 5.08579 1.25 5.5 1.25Z',
  d8: 'M2.27148 10.8829C2.455 13.5235 3.77796 15.8502 5.74957 17.3744V22C5.74957 22.4142 6.08535 22.75 6.49957 22.75H15.9996C16.4138 22.75 16.7496 22.4142 16.7496 22V21.5C16.7496 20.8308 17.3496 20.1305 18.2542 19.6834C19.3041 19.1644 20.3972 18.2128 20.5415 16.9141L20.6999 15.4883L22.335 14.6708C22.5274 14.5746 22.6692 14.4004 22.7244 14.1925C22.7797 13.9846 22.7429 13.763 22.6236 13.584L20.2466 10.0185C20.1239 5.15495 16.1427 1.25 11.2496 1.25C11.0118 1.25 10.7762 1.25922 10.5431 1.27732C10.6756 1.5928 10.7496 1.93187 10.7496 2.26851C10.9361 2.38329 11.1212 2.52545 11.2977 2.70194C11.4741 2.87842 11.6163 3.06352 11.7311 3.25C12.9737 3.25 14.2496 4.25736 14.2496 5.5C14.2496 6.07627 14.0329 6.60193 13.6766 7C14.0329 7.39807 14.2496 7.92373 14.2496 8.5C14.2496 9.74264 12.9738 10.75 11.7311 10.75C11.6163 10.9365 11.4742 11.1216 11.2977 11.2981C11.1212 11.4746 10.9361 11.6168 10.7496 11.7316C10.7496 12.9742 9.74221 14.25 8.49957 14.25C7.9233 14.25 7.39764 14.0334 6.99957 13.6771C6.6015 14.0334 6.07583 14.25 5.49957 14.25C4.25693 14.25 3.24957 12.9742 3.24957 11.7316C3.06307 11.6168 2.87796 11.4746 2.70147 11.2981C2.65217 11.2488 2.59458 11.1951 2.53469 11.1393C2.4455 11.0562 2.3512 10.9682 2.27148 10.8829Z',
  d9: 'M9.99656 3.96875H4.00049V9.87246H9.99656V3.96875Z',
  d10: 'M5.49966 9.87259V11.8405M8.4977 9.87259V11.8405M5.49966 2.00098V3.96888M8.4977 2.00098V3.96888M4.00064 5.44481H2.00195M4.00064 8.39666H2.00195M11.9954 5.44481H9.99672M11.9954 8.39666H9.99672',
  d11: 'M11.8788 2.32031C15.7727 2.63075 19.6524 6.02938 19.4856 10.4487L21.2518 13.0435L21.9322 13.9619C21.9457 13.9812 21.9946 14.0596 21.9982 14.0806C22.0045 14.1167 21.8893 14.159 21.855 14.1729L19.9952 15.0929L18.9916 18.5387L16.0039 19.5075V21.998M6.51004 21.9993V17.1037M8.99463 18.2427C6.7833 17.6189 5.09477 16.2302 4.01025 14.3048',
  d12: 'M7 3.21484H5.5V1.96484H4V3.21484H2.5V4.71484H1.25V6.21484H2.5V7.71484H1.25V9.21484H2.5V10.7148H4V11.9648H5.5V10.7148H7V11.9648H8.5V10.7148H10V9.21484H11.25V7.71484H10V6.21484H11.25V4.71484H10V3.21484H8.5V1.96484H7V3.21484Z',
  d13: 'M9.9991 13.4639V12.2139H11.4991V10.7139H12.7491V3.21388H11.4991V1.25391C16.2772 1.38422 20.1255 5.23855 20.2462 10.019L22.6231 13.5845C22.7425 13.7635 22.7792 13.9851 22.724 14.193C22.6688 14.4009 22.5269 14.5751 22.3345 14.6713L20.6296 15.5238L19.6116 19.0869L16.7491 20.0411V22.7505H5.7491V17.3749C4.45204 16.3722 3.4357 15.0221 2.83984 13.4639H9.9991Z',
};

export const IconArtificialIntelligence01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-01-stroke-rounded IconArtificialIntelligence01StrokeRounded"
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

export const IconArtificialIntelligence01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-01-duotone-rounded IconArtificialIntelligence01DuotoneRounded"
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

export const IconArtificialIntelligence01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-01-twotone-rounded IconArtificialIntelligence01TwotoneRounded"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-01-solid-rounded IconArtificialIntelligence01SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-01-bulk-rounded IconArtificialIntelligence01BulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-01-stroke-sharp IconArtificialIntelligence01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-01-solid-sharp IconArtificialIntelligence01SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArtificialIntelligence01: TheIconSelfPack = {
  name: 'ArtificialIntelligence01',
  StrokeRounded: IconArtificialIntelligence01StrokeRounded,
  DuotoneRounded: IconArtificialIntelligence01DuotoneRounded,
  TwotoneRounded: IconArtificialIntelligence01TwotoneRounded,
  SolidRounded: IconArtificialIntelligence01SolidRounded,
  BulkRounded: IconArtificialIntelligence01BulkRounded,
  StrokeSharp: IconArtificialIntelligence01StrokeSharp,
  SolidSharp: IconArtificialIntelligence01SolidSharp,
};