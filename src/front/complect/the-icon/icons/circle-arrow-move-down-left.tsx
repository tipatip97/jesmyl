import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d2: 'M10.374 12.5316C9.86572 13.1618 8.83293 13.9425 9.01677 14.3131M9.01677 14.3131C8.91436 14.6911 9.9143 15.4381 10.3762 16.008M9.01677 14.3131C11.0995 14.3584 12.3739 14.1065 13.604 12.8816C14.8851 11.6059 15.0959 10.212 14.9922 8.00342',
  d3: 'M10.3691 12.5256C9.86088 13.1566 8.82808 13.9366 9.01188 14.3076M9.01188 14.3076C8.90948 14.6856 9.90938 15.4326 10.3714 16.0026M9.01188 14.3076C11.0947 14.3526 12.369 14.1005 13.5991 12.8755C14.8803 11.6005 15.091 10.2066 14.9873 7.99756',
  d4: 'M15.75 8C15.75 7.58579 15.4142 7.25 15 7.25C14.5858 7.25 14.25 7.58579 14.25 8H15.75ZM9 13.5218C8.58579 13.5218 8.25 13.8576 8.25 14.2718C8.25 14.686 8.58579 15.0218 9 15.0218V13.5218ZM11.0238 14.2124L10.9038 13.4721L11.0238 14.2124ZM14.942 10.202L15.6831 10.3167L14.942 10.202ZM9.83263 16.518C10.1187 16.8175 10.5935 16.8285 10.893 16.5424C11.1926 16.2563 11.2035 15.7815 10.9174 15.482L9.83263 16.518ZM9.19493 14.7644L8.65255 15.2824L9.19493 14.7644ZM9.19493 13.7789L8.65255 13.2609L9.19493 13.7789ZM10.9174 13.0613C11.2035 12.7617 11.1926 12.287 10.893 12.0009C10.5935 11.7148 10.1187 11.7257 9.83263 12.0253L10.9174 13.0613ZM14.25 8V8.48244H15.75V8H14.25ZM9 15.0218C9.83483 15.0218 10.7007 15.0246 11.1438 14.9527L10.9038 13.4721C10.6141 13.519 9.91675 13.5218 9 13.5218V15.0218ZM14.25 8.48244C14.25 9.40686 14.2478 9.78372 14.2008 10.0874L15.6831 10.3167C15.7522 9.87034 15.75 9.35081 15.75 8.48244H14.25ZM11.1438 14.9527C13.4912 14.5722 15.3155 12.6923 15.6831 10.3167L14.2008 10.0874C13.9295 11.8405 12.5902 13.1987 10.9038 13.4721L11.1438 14.9527ZM10.9174 15.482L9.73731 14.2464L8.65255 15.2824L9.83263 16.518L10.9174 15.482ZM9.73731 14.2969L10.9174 13.0613L9.83263 12.0253L8.65255 13.2609L9.73731 14.2969ZM9.73731 14.2464C9.7492 14.2588 9.75 14.2698 9.75 14.2716C9.75 14.2734 9.7492 14.2844 9.73731 14.2969L8.65255 13.2609C8.11582 13.8229 8.11582 14.7204 8.65255 15.2824L9.73731 14.2464Z',
  d5: 'M12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75ZM9.65183 16.6907C10.0333 17.0901 10.6663 17.1046 11.0657 16.7232C11.2713 16.5267 11.375 16.2636 11.375 16V15.1651C13.7397 14.6981 15.5566 12.7696 15.9302 10.355C16.0002 9.90274 16.0001 9.38288 16 8.57954L16 8.48244V8C16 7.44771 15.5523 7 15 7C14.4477 7 14 7.44771 14 8V8.48244C14 9.41619 13.997 9.76928 13.9537 10.0491C13.7268 11.5158 12.7066 12.6834 11.375 13.1038V12.5C11.3643 12.251 11.2601 12.0058 11.0657 11.8201C10.6663 11.4386 10.0333 11.4532 9.65183 11.8526L8.47176 13.0882C8.15803 13.4167 8.00077 13.8425 8 14.2685L8 14.2718L8 14.275C8.00083 14.7009 8.15808 15.1266 8.47176 15.4551L9.65183 16.6907Z',
  d6: 'M22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12Z',
  d7: 'M11.0657 16.7232C10.6663 17.1046 10.0333 17.0901 9.65182 16.6907L8.47174 15.4551C8.15807 15.1266 8.00082 14.7009 7.99999 14.275L7.99998 14.2718L7.99999 14.2685C8.00076 13.8425 8.15801 13.4167 8.47174 13.0882L9.65182 11.8526C10.0333 11.4532 10.6663 11.4386 11.0657 11.8201C11.2601 12.0058 11.3643 12.251 11.375 12.5V13.1038C12.7066 12.6834 13.7268 11.5158 13.9537 10.0491C13.997 9.76928 14 9.41619 14 8.48244V8C14 7.44771 14.4477 7 15 7C15.5523 7 16 7.44771 16 8V8.48244L16 8.57954C16.0001 9.38288 16.0002 9.90274 15.9302 10.355C15.5565 12.7696 13.7397 14.6981 11.375 15.1651V16C11.375 16.2636 11.2713 16.5267 11.0657 16.7232Z',
  d8: 'M8 14.5043H15.8989C15.954 14.5043 16 14.4385 16 14.3832V7.00586',
  d9: 'M10.4909 17.006L8 14.5044L10.4909 12.0029',
  d10: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM14.2501 8V13.25H10.8108L11.5304 12.5303L10.4698 11.4697L7.93945 14L10.4698 16.5303L11.5304 15.4697L10.8108 14.75H15.0001C15.4143 14.75 15.7501 14.4142 15.7501 14V8H14.2501Z',
} as const;

export const IconCircleArrowMoveDownLeftStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-down-left-stroke-rounded IconCircleArrowMoveDownLeftStrokeRounded"
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

export const IconCircleArrowMoveDownLeftDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-down-left-duotone-rounded IconCircleArrowMoveDownLeftDuotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveDownLeftTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-down-left-twotone-rounded IconCircleArrowMoveDownLeftTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveDownLeftSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-down-left-solid-rounded IconCircleArrowMoveDownLeftSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveDownLeftBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-down-left-bulk-rounded IconCircleArrowMoveDownLeftBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCircleArrowMoveDownLeftStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-down-left-stroke-sharp IconCircleArrowMoveDownLeftStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveDownLeftSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-down-left-solid-sharp IconCircleArrowMoveDownLeftSolidSharp"
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

export const iconPackOfCircleArrowMoveDownLeft: TheIconSelfPack = {
  name: 'CircleArrowMoveDownLeft',
  StrokeRounded: IconCircleArrowMoveDownLeftStrokeRounded,
  DuotoneRounded: IconCircleArrowMoveDownLeftDuotoneRounded,
  TwotoneRounded: IconCircleArrowMoveDownLeftTwotoneRounded,
  SolidRounded: IconCircleArrowMoveDownLeftSolidRounded,
  BulkRounded: IconCircleArrowMoveDownLeftBulkRounded,
  StrokeSharp: IconCircleArrowMoveDownLeftStrokeSharp,
  SolidSharp: IconCircleArrowMoveDownLeftSolidSharp,
};