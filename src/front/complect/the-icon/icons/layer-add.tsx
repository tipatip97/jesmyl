import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z',
  d2: 'M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999',
  d3: 'M18 15.5L13 15.5M15.5 13V18',
  d4: 'M11.4084 6.8799C12.3758 6.74983 13.5627 6.74991 14.8569 6.75L17.0931 6.75C17.3891 6.75 17.5371 6.75 17.6261 6.65419C17.7151 6.55838 17.7045 6.4142 17.6833 6.12584C17.6648 5.87546 17.6412 5.63892 17.6111 5.41544C17.4818 4.45589 17.2232 3.6585 16.6718 2.98663C16.4744 2.74612 16.2539 2.52558 16.0134 2.3282C15.3044 1.74638 14.4557 1.49055 13.4248 1.36868C12.4205 1.24998 11.1512 1.24999 9.54893 1.25H9.45109C7.84883 1.24999 6.57947 1.24998 5.57525 1.36868C4.54428 1.49054 3.69558 1.74638 2.98663 2.3282C2.74612 2.52558 2.52558 2.74612 2.3282 2.98663C1.74638 3.69558 1.49055 4.54428 1.36868 5.57525C1.24998 6.57947 1.24999 7.84882 1.25 9.45108V9.54891C1.24999 11.1512 1.24998 12.4205 1.36868 13.4247C1.49054 14.4557 1.74638 15.3044 2.3282 16.0134C2.52558 16.2539 2.74612 16.4744 2.98663 16.6718C3.6585 17.2232 4.45589 17.4818 5.41544 17.6111C5.63892 17.6412 5.87546 17.6648 6.12584 17.6833C6.4142 17.7045 6.55838 17.7151 6.65419 17.6261C6.75 17.5371 6.75 17.3891 6.75 17.0931L6.75 14.8569C6.74991 13.5627 6.74983 12.3758 6.8799 11.4084C7.0232 10.3425 7.36034 9.21504 8.28769 8.28769C9.21504 7.36034 10.3425 7.0232 11.4084 6.8799Z',
  d5: 'M14.9451 8.25H16.0549H16.0549H16.0549C17.4225 8.24998 18.5248 8.24997 19.3918 8.36653C20.2919 8.48754 21.0497 8.74644 21.6517 9.34835C22.2536 9.95027 22.5125 10.7081 22.6335 11.6083C22.75 12.4752 22.75 13.5775 22.75 14.9451V14.9451V14.9451V16.0549V16.0549V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6517C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.75 17.4225 22.75 16.0549 22.75H16.0549H16.0549H14.9451H14.9451H14.9451C13.5775 22.75 12.4752 22.75 11.6083 22.6335C10.7081 22.5125 9.95027 22.2536 9.34835 21.6517C8.74644 21.0497 8.48754 20.2919 8.36653 19.3918C8.24997 18.5248 8.24998 17.4225 8.25 16.0549V16.0549V16.0549V14.9451V14.9451V14.9451C8.24998 13.5775 8.24997 12.4752 8.36653 11.6083C8.48754 10.7081 8.74644 9.95027 9.34835 9.34835C9.95027 8.74644 10.7081 8.48754 11.6083 8.36653C12.4752 8.24997 13.5775 8.24998 14.9451 8.25H14.9451H14.9451ZM15.5 11.5C16.0523 11.5 16.5 11.9477 16.5 12.5V14.5L18.5 14.5C19.0523 14.5 19.5 14.9477 19.5 15.5C19.5 16.0523 19.0523 16.5 18.5 16.5H16.5V18.5C16.5 19.0523 16.0523 19.5 15.5 19.5C14.9477 19.5 14.5 19.0523 14.5 18.5V16.5H12.5C11.9477 16.5 11.5 16.0523 11.5 15.5C11.5 14.9477 11.9477 14.5 12.5 14.5H14.5V12.5C14.5 11.9477 14.9477 11.5 15.5 11.5Z',
  d6: 'M16.0549 8.25H14.9451H14.9451C13.5775 8.24998 12.4752 8.24997 11.6083 8.36652C10.7081 8.48754 9.95027 8.74643 9.34835 9.34835C8.74644 9.95027 8.48754 10.7081 8.36653 11.6083C8.24997 12.4752 8.24998 13.5775 8.25 14.9451V14.9451V16.0549V16.0549C8.24998 17.4225 8.24997 18.5248 8.36652 19.3918C8.48754 20.2919 8.74643 21.0497 9.34835 21.6517C9.95027 22.2536 10.7081 22.5125 11.6083 22.6335C12.4752 22.75 13.5775 22.75 14.9451 22.75H14.9451H16.0549H16.0549C17.4225 22.75 18.5248 22.75 19.3918 22.6335C20.2919 22.5125 21.0497 22.2536 21.6517 21.6517C22.2536 21.0497 22.5125 20.2919 22.6335 19.3918C22.75 18.5248 22.75 17.4225 22.75 16.0549V16.0549V14.9451V14.9451C22.75 13.5775 22.75 12.4752 22.6335 11.6083C22.5125 10.7081 22.2536 9.95027 21.6517 9.34835C21.0497 8.74644 20.2919 8.48754 19.3918 8.36653C18.5248 8.24997 17.4225 8.24998 16.0549 8.25H16.0549Z',
  d7: 'M16.5 12.5C16.5 11.9477 16.0523 11.5 15.5 11.5C14.9477 11.5 14.5 11.9477 14.5 12.5V14.5H12.5C11.9477 14.5 11.5 14.9477 11.5 15.5C11.5 16.0523 11.9477 16.5 12.5 16.5H14.5V18.5C14.5 19.0523 14.9477 19.5 15.5 19.5C16.0523 19.5 16.5 19.0523 16.5 18.5V16.5H18.5C19.0523 16.5 19.5 16.0523 19.5 15.5C19.5 14.9477 19.0523 14.5 18.5 14.5L16.5 14.5V12.5Z',
  d8: 'M17 9V2H2V17H9',
  d9: 'M18.5 15.5H12.5M15.5 12.5V18.5',
  d10: 'M9 8.25C8.58579 8.25 8.25 8.58579 8.25 9V22C8.25 22.4142 8.58579 22.75 9 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22V9C22.75 8.58579 22.4142 8.25 22 8.25H9ZM14.75 12.5V14.75H12.5V16.25H14.75V18.5H16.25V16.25H18.5V14.75H16.25V12.5H14.75Z',
  d11: 'M2 1.25C1.58579 1.25 1.25 1.58579 1.25 2V17C1.25 17.4142 1.58579 17.75 2 17.75H6.5V6.5H17.75V2C17.75 1.58579 17.4142 1.25 17 1.25H2Z',
} as const;

export const IconLayerAddStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layer-add-stroke-rounded IconLayerAddStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLayerAddDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layer-add-duotone-rounded IconLayerAddDuotoneRounded"
    >
      <path 
        opacity="0.3" 
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
      />
    </TheIconWrapper>
  );
};

export const IconLayerAddTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layer-add-twotone-rounded IconLayerAddTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconLayerAddSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layer-add-solid-rounded IconLayerAddSolidRounded"
    >
      <path 
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

export const IconLayerAddBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layer-add-bulk-rounded IconLayerAddBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayerAddStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layer-add-stroke-sharp IconLayerAddStrokeSharp"
    >
      <rect 
        x="9" 
        y="9" 
        width="13" 
        height="13" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></rect>
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayerAddSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layer-add-solid-sharp IconLayerAddSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLayerAdd: TheIconSelfPack = {
  name: 'LayerAdd',
  StrokeRounded: IconLayerAddStrokeRounded,
  DuotoneRounded: IconLayerAddDuotoneRounded,
  TwotoneRounded: IconLayerAddTwotoneRounded,
  SolidRounded: IconLayerAddSolidRounded,
  BulkRounded: IconLayerAddBulkRounded,
  StrokeSharp: IconLayerAddStrokeSharp,
  SolidSharp: IconLayerAddSolidSharp,
};