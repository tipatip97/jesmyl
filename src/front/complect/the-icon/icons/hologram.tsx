import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 22H21',
  d2: 'M17 19L16 15M8 15L7 19M12 16V19',
  d3: 'M12 7C12.4955 7 12.9562 6.8015 13.8775 6.40451L14.5423 6.11803C16.1808 5.41202 17 5.05902 17 4.5C17 3.94098 16.1808 3.58798 14.5423 2.88197L13.8775 2.59549C12.9562 2.1985 12.4955 2 12 2C11.5045 2 11.0438 2.1985 10.1225 2.59549L9.45768 2.88197C7.81923 3.58798 7 3.94098 7 4.5C7 5.05902 7.81923 5.41202 9.45768 6.11803L10.1225 6.40451C11.0438 6.8015 11.5045 7 12 7ZM12 7V13',
  d4: 'M17 4.5V10.5C17 11.059 16.1808 11.412 14.5423 12.118L13.8775 12.4045C12.9562 12.8015 12.4955 13 12 13C11.5045 13 11.0438 12.8015 10.1225 12.4045L9.45768 12.118C7.81923 11.412 7 11.059 7 10.5V4.5',
  d5: 'M13.8775 6.40451L14.5423 6.11803C16.1808 5.41202 17 5.05902 17 4.5V10.5C17 11.059 16.1808 11.412 14.5423 12.118L13.8775 12.4045C12.9562 12.8015 12.4955 13 12 13C11.5045 13 11.0438 12.8015 10.1225 12.4045L9.45768 12.118C7.81923 11.412 7 11.059 7 10.5V4.5C7 5.05902 7.81923 5.41202 9.45768 6.11803L10.1225 6.40451C11.0438 6.8015 11.5045 7 12 7C12.4955 7 12.9562 6.8015 13.8775 6.40451L13.8775 6.40451Z',
  d6: 'M7 4.5C7 5.05902 7.81923 5.41202 9.45768 6.11803L10.1225 6.40451C11.0438 6.8015 11.5045 7 12 7M7 4.5C7 3.94098 7.81923 3.58798 9.45768 2.88197L10.1225 2.59549C11.0438 2.1985 11.5045 2 12 2C12.4955 2 12.9562 2.1985 13.8775 2.59549L14.5423 2.88197C16.1808 3.58798 17 3.94098 17 4.5M7 4.5V10.5C7 11.059 7.81923 11.412 9.45768 12.118L10.1225 12.4045C11.0438 12.8015 11.5045 13 12 13M12 7C12.4955 7 12.9562 6.8015 13.8775 6.40451L14.5423 6.11803C16.1808 5.41202 17 5.05902 17 4.5M12 7V13M17 4.5V10.5C17 11.059 16.1808 11.412 14.5423 12.118L13.8775 12.4045C12.9562 12.8015 12.4955 13 12 13',
  d7: 'M2.25 21.8057C2.25 21.2842 2.68652 20.8613 3.225 20.8613H20.775C21.3135 20.8613 21.75 21.2842 21.75 21.8057C21.75 22.3273 21.3135 22.7502 20.775 22.7502H3.225C2.68652 22.7502 2.25 22.3273 2.25 21.8057Z',
  d8: 'M8.33709 14.2784C8.85949 14.4049 9.17711 14.9177 9.04651 15.4237L8.07151 19.2014C7.94091 19.7074 7.41155 20.015 6.88915 19.8885C6.36675 19.762 6.04913 19.2493 6.17973 18.7433L7.15473 14.9656C7.28533 14.4596 7.81469 14.1519 8.33709 14.2784ZM15.6641 14.2784C16.1865 14.1519 16.7159 14.4596 16.8465 14.9656L17.8215 18.7433C17.9521 19.2493 17.6345 19.762 17.1121 19.8885C16.5897 20.015 16.0603 19.7074 15.9297 19.2014L14.9547 15.4237C14.8241 14.9177 15.1417 14.4049 15.6641 14.2784ZM12.0006 15.1946C12.5391 15.1946 12.9756 15.6175 12.9756 16.1391V18.9723C12.9756 19.4939 12.5391 19.9167 12.0006 19.9167C11.4621 19.9167 11.0256 19.4939 11.0256 18.9723V16.1391C11.0256 15.6175 11.4621 15.1946 12.0006 15.1946Z',
  d9: 'M12 1.25C11.3227 1.25 10.7057 1.51765 9.95807 1.8419L9.12005 2.20434C8.39008 2.51987 7.75185 2.79575 7.30319 3.06652C6.88476 3.31904 6.25 3.78698 6.25 4.61538V10.3846C6.25 11.213 6.88476 11.681 7.30319 11.9335C7.75185 12.2043 8.39009 12.4801 9.12006 12.7957L9.95807 13.1581C10.7057 13.4824 11.3227 13.75 12 13.75C12.6773 13.75 13.2943 13.4824 14.0419 13.1581L14.88 12.7957C15.6099 12.4801 16.2482 12.2042 16.6968 11.9335C17.1152 11.681 17.75 11.213 17.75 10.3846V4.61538C17.75 3.78698 17.1152 3.31904 16.6968 3.06652C16.2482 2.79575 15.6099 2.51987 14.88 2.20434L14.0419 1.8419C13.2943 1.51765 12.6773 1.25 12 1.25ZM11.0417 7.81804V11.5301L8.16667 10.2047V6.60654L11.0417 7.81804ZM12.9583 11.5301V7.81804L15.8333 6.60654V10.2047L12.9583 11.5301Z',
  d10: 'M17 19.5L15.5 14.5M8.5 14.5L7 19.5M12 15.5V19.5',
  d11: 'M7 4.5L12 2L17 4.5M7 4.5L12 7M7 4.5V10.5L12 13M17 4.5L12 7M17 4.5V10.5L12 13M12 7V13',
  d12: 'M6.04217 19.0865L7.54217 14.25L9.45783 14.8059L7.95783 19.6424L6.04217 19.0865ZM16.4578 14.25L17.9578 19.0865L16.0422 19.6424L14.5422 14.8059L16.4578 14.25ZM11 19.3645V15.4953H13V19.3645H11ZM21 22.75H3V20.8154H21V22.75Z',
  d13: 'M12.3354 1.32918C12.1243 1.22361 11.8757 1.22361 11.6646 1.32918L6.66459 3.82918C6.4105 3.95622 6.25 4.21592 6.25 4.5V10.5C6.25 10.7841 6.4105 11.0438 6.66459 11.1708L11.6646 13.6708C11.8757 13.7764 12.1243 13.7764 12.3354 13.6708L17.3354 11.1708C17.5895 11.0438 17.75 10.7841 17.75 10.5V4.5C17.75 4.21592 17.5895 3.95622 17.3354 3.82918L12.3354 1.32918ZM11.25 7.46338L7.75 5.71338V10.0363L11.25 11.7863V7.46338ZM16.25 10.0363L12.75 11.7863V7.46338L16.25 5.71338V10.0363Z',
} as const;

export const IconHologramStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hologram-stroke-rounded IconHologramStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconHologramDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hologram-duotone-rounded IconHologramDuotoneRounded"
    >
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconHologramTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hologram-twotone-rounded IconHologramTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconHologramSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hologram-solid-rounded IconHologramSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconHologramBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hologram-bulk-rounded IconHologramBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconHologramStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hologram-stroke-sharp IconHologramStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconHologramSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hologram-solid-sharp IconHologramSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHologram: TheIconSelfPack = {
  name: 'Hologram',
  StrokeRounded: IconHologramStrokeRounded,
  DuotoneRounded: IconHologramDuotoneRounded,
  TwotoneRounded: IconHologramTwotoneRounded,
  SolidRounded: IconHologramSolidRounded,
  BulkRounded: IconHologramBulkRounded,
  StrokeSharp: IconHologramStrokeSharp,
  SolidSharp: IconHologramSolidSharp,
};