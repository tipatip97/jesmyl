import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 13V8.4C9 8.02774 9 7.84162 9.04894 7.69098C9.14786 7.38655 9.38655 7.14786 9.69098 7.04894C9.84162 7 10.0277 7 10.4 7H13C14.6569 7 16 8.34315 16 10C16 11.6569 14.6569 13 13 13H9ZM9 13V18',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM10.4004 6.00041L10.3194 6.00021C10.0377 5.99919 9.6913 5.99792 9.38238 6.0983C8.7735 6.29613 8.29614 6.7735 8.0983 7.38238C7.99792 7.6913 7.99919 8.03766 8.00021 8.31943L8.00041 8.40041L8.00041 18.0004C8.00041 18.5527 8.44813 19.0004 9.00041 19.0004C9.5527 19.0004 10.0004 18.5527 10.0004 18.0004L10.0004 14.0004H13.0004C15.2096 14.0004 17.0004 12.2096 17.0004 10.0004C17.0004 7.79127 15.2096 6.00041 13.0004 6.00041H10.4004ZM13.0004 12.0004H10.0004V8.40041C10.0004 8.20338 10.0008 8.09565 10.005 8.01739L10.0057 8.00573L10.0174 8.00504C10.0957 8.00076 10.2034 8.00041 10.4004 8.00041H13.0004C14.105 8.00041 15.0004 8.89584 15.0004 10.0004C15.0004 11.105 14.105 12.0004 13.0004 12.0004Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M10.3194 6.00021C10.3471 6.00031 10.3741 6.00041 10.4004 6.00041H13.0004C15.2096 6.00041 17.0004 7.79127 17.0004 10.0004C17.0004 12.2096 15.2096 14.0004 13.0004 14.0004H10.0004V18.0004C10.0004 18.5527 9.5527 19.0004 9.00041 19.0004C8.44813 19.0004 8.00041 18.5527 8.00041 18.0004V8.40041C8.00041 8.37411 8.00031 8.34708 8.00021 8.31943C7.99919 8.03766 7.99792 7.6913 8.0983 7.38238C8.29614 6.7735 8.7735 6.29614 9.38238 6.0983C9.6913 5.99792 10.0377 5.99919 10.3194 6.00021ZM10.0004 12.0004H13.0004C14.105 12.0004 15.0004 11.105 15.0004 10.0004C15.0004 8.89584 14.105 8.00041 13.0004 8.00041H10.4004C10.2034 8.00041 10.0957 8.00076 10.0174 8.00504C10.0132 8.00527 10.0093 8.0055 10.0057 8.00573C10.0055 8.00934 10.0053 8.01322 10.005 8.01739C10.0008 8.09565 10.0004 8.20338 10.0004 8.40041V12.0004Z',
  d5: 'M9 13V7H13C14.6569 7 16 8.34315 16 10C16 11.6569 14.6569 13 13 13H9ZM9 13V18',
  d6: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM13 6H8L8 18H10L10 14H13C15.2091 14 17 12.2091 17 10C17 7.79086 15.2091 6 13 6ZM13 12H10V8H13C14.1046 8 15 8.89543 15 10C15 11.1046 14.1046 12 13 12Z',
} as const;

export const IconParkingAreaCircleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parking-area-circle-stroke-rounded IconParkingAreaCircleStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconParkingAreaCircleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parking-area-circle-duotone-rounded IconParkingAreaCircleDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconParkingAreaCircleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parking-area-circle-twotone-rounded IconParkingAreaCircleTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconParkingAreaCircleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parking-area-circle-solid-rounded IconParkingAreaCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconParkingAreaCircleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parking-area-circle-bulk-rounded IconParkingAreaCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconParkingAreaCircleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parking-area-circle-stroke-sharp IconParkingAreaCircleStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconParkingAreaCircleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="parking-area-circle-solid-sharp IconParkingAreaCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfParkingAreaCircle: TheIconSelfPack = {
  name: 'ParkingAreaCircle',
  StrokeRounded: IconParkingAreaCircleStrokeRounded,
  DuotoneRounded: IconParkingAreaCircleDuotoneRounded,
  TwotoneRounded: IconParkingAreaCircleTwotoneRounded,
  SolidRounded: IconParkingAreaCircleSolidRounded,
  BulkRounded: IconParkingAreaCircleBulkRounded,
  StrokeSharp: IconParkingAreaCircleStrokeSharp,
  SolidSharp: IconParkingAreaCircleSolidSharp,
};