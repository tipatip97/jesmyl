import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5C16.2297 2.5 18.3446 2.5 19.7472 3.69797C19.9464 3.86808 20.1319 4.05358 20.302 4.25276C21.5 5.6554 21.5 7.77027 21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12Z',
  d2: 'M9 13V8.4C9 8.02774 9 7.84162 9.04894 7.69098C9.14786 7.38655 9.38655 7.14786 9.69098 7.04894C9.84162 7 10.0277 7 10.4 7H13C14.6569 7 16 8.34315 16 10C16 11.6569 14.6569 13 13 13H9ZM9 13V18',
  d3: 'M12.0513 1.75H12.0513H11.9487H11.9487C9.87726 1.74999 8.25374 1.74998 6.97578 1.90522C5.66982 2.06386 4.62456 2.39411 3.76567 3.12767C3.53662 3.3233 3.3233 3.53662 3.12767 3.76567C2.39411 4.62456 2.06386 5.66982 1.90522 6.97578C1.74998 8.25376 1.74999 9.87731 1.75 11.9487V12.0513C1.74999 14.1227 1.74998 15.7462 1.90522 17.0242C2.06386 18.3302 2.39411 19.3754 3.12767 20.2343C3.32329 20.4634 3.53662 20.6767 3.76567 20.8723C4.62456 21.6059 5.66982 21.9361 6.97578 22.0948C8.25376 22.25 9.87731 22.25 11.9487 22.25H12.0513C14.1227 22.25 15.7462 22.25 17.0242 22.0948C18.3302 21.9361 19.3754 21.6059 20.2343 20.8723C20.4634 20.6767 20.6767 20.4634 20.8723 20.2343C21.6059 19.3754 21.9361 18.3302 22.0948 17.0242C22.25 15.7462 22.25 14.1227 22.25 12.0513V11.9487C22.25 9.87731 22.25 8.25376 22.0948 6.97578C21.9361 5.66982 21.6059 4.62456 20.8723 3.76567C20.6767 3.53662 20.4634 3.32329 20.2343 3.12767C19.3754 2.39411 18.3302 2.06386 17.0242 1.90522C15.7463 1.74998 14.1227 1.74999 12.0513 1.75ZM10.4004 6.00041L10.3194 6.00021C10.0377 5.99919 9.6913 5.99792 9.38238 6.0983C8.7735 6.29614 8.29614 6.7735 8.0983 7.38238C7.99792 7.6913 7.99919 8.03766 8.00021 8.31943L8.00041 8.40041L8.00041 18.0004C8.00041 18.5527 8.44813 19.0004 9.00041 19.0004C9.5527 19.0004 10.0004 18.5527 10.0004 18.0004L10.0004 14.0004H13.0004C15.2096 14.0004 17.0004 12.2096 17.0004 10.0004C17.0004 7.79127 15.2096 6.00041 13.0004 6.00041H10.4004ZM13.0004 12.0004H10.0004V8.40041C10.0004 8.20338 10.0008 8.09565 10.005 8.01739L10.0057 8.00573L10.0174 8.00504C10.0957 8.00076 10.2034 8.00041 10.4004 8.00041H13.0004C14.105 8.00041 15.0004 8.89584 15.0004 10.0004C15.0004 11.105 14.105 12.0004 13.0004 12.0004Z',
  d4: 'M12.0513 1.75C14.1227 1.74999 15.7462 1.74998 17.0242 1.90522C18.3302 2.06386 19.3754 2.39411 20.2343 3.12767C20.4634 3.32329 20.6767 3.53662 20.8723 3.76567C21.6059 4.62456 21.9361 5.66982 22.0948 6.97578C22.25 8.25376 22.25 9.87731 22.25 11.9487V12.0513C22.25 14.1227 22.25 15.7462 22.0948 17.0242C21.9361 18.3302 21.6059 19.3754 20.8723 20.2343C20.6767 20.4634 20.4634 20.6767 20.2343 20.8723C19.3754 21.6059 18.3302 21.9361 17.0242 22.0948C15.7462 22.25 14.1227 22.25 12.0513 22.25H11.9487C9.87731 22.25 8.25376 22.25 6.97578 22.0948C5.66982 21.9361 4.62456 21.6059 3.76567 20.8723C3.53662 20.6767 3.32329 20.4634 3.12767 20.2343C2.39411 19.3754 2.06386 18.3302 1.90522 17.0242C1.74998 15.7462 1.74999 14.1227 1.75 12.0513V11.9487C1.74999 9.87731 1.74998 8.25376 1.90522 6.97578C2.06386 5.66982 2.39411 4.62456 3.12767 3.76567C3.3233 3.53662 3.53662 3.3233 3.76567 3.12767C4.62456 2.39411 5.66982 2.06386 6.97578 1.90522C8.25376 1.74998 9.87731 1.74999 11.9487 1.75H12.0513Z',
  d5: 'M10.3194 6.00021C10.3471 6.00031 10.3741 6.00041 10.4004 6.00041H13.0004C15.2096 6.00041 17.0004 7.79127 17.0004 10.0004C17.0004 12.2096 15.2096 14.0004 13.0004 14.0004H10.0004V18.0004C10.0004 18.5527 9.5527 19.0004 9.00041 19.0004C8.44813 19.0004 8.00041 18.5527 8.00041 18.0004V8.40041C8.00041 8.37411 8.00031 8.34708 8.00021 8.31943C7.99919 8.03766 7.99792 7.6913 8.0983 7.38238C8.29614 6.7735 8.7735 6.29614 9.38238 6.0983C9.6913 5.99792 10.0377 5.99919 10.3194 6.00021ZM10.0004 12.0004H13.0004C14.105 12.0004 15.0004 11.105 15.0004 10.0004C15.0004 8.89584 14.105 8.00041 13.0004 8.00041H10.4004C10.2034 8.00041 10.0957 8.00076 10.0174 8.00504C10.0132 8.00527 10.0093 8.0055 10.0057 8.00573C10.0055 8.00934 10.0053 8.01322 10.005 8.01739C10.0008 8.09565 10.0004 8.20338 10.0004 8.40041V12.0004Z',
  d6: 'M21 3H3V21H21V3Z',
  d7: 'M9 13V7H13C14.6569 7 16 8.34315 16 10C16 11.6569 14.6569 13 13 13H9ZM9 13V18',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM13 6L8 6L8 18H10V14H13C15.2091 14 17 12.2091 17 10C17 7.79086 15.2091 6 13 6ZM13 12H10L10 8H13C14.1046 8 15 8.89543 15 10C15 11.1046 14.1046 12 13 12Z',
} as const;

export const IconParkingAreaSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parking-area-square-stroke-rounded IconParkingAreaSquareStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconParkingAreaSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parking-area-square-duotone-rounded IconParkingAreaSquareDuotoneRounded"
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

export const IconParkingAreaSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parking-area-square-twotone-rounded IconParkingAreaSquareTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconParkingAreaSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parking-area-square-solid-rounded IconParkingAreaSquareSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconParkingAreaSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parking-area-square-bulk-rounded IconParkingAreaSquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconParkingAreaSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parking-area-square-stroke-sharp IconParkingAreaSquareStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconParkingAreaSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parking-area-square-solid-sharp IconParkingAreaSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfParkingAreaSquare: TheIconSelfPack = {
  name: 'ParkingAreaSquare',
  StrokeRounded: IconParkingAreaSquareStrokeRounded,
  DuotoneRounded: IconParkingAreaSquareDuotoneRounded,
  TwotoneRounded: IconParkingAreaSquareTwotoneRounded,
  SolidRounded: IconParkingAreaSquareSolidRounded,
  BulkRounded: IconParkingAreaSquareBulkRounded,
  StrokeSharp: IconParkingAreaSquareStrokeSharp,
  SolidSharp: IconParkingAreaSquareSolidSharp,
};