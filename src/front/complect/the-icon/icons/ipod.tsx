import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M19.5 13.5V10.5C19.5 6.74142 19.5 4.86213 18.5711 3.60746C18.4225 3.40678 18.2587 3.22119 18.0817 3.0528C16.9746 2 15.3164 2 12 2C8.68361 2 7.02541 2 5.91834 3.0528C5.74128 3.22119 5.57752 3.40678 5.42894 3.60746C4.5 4.86213 4.5 6.74142 4.5 10.5V13.5C4.5 17.2586 4.5 19.1379 5.42894 20.3925C5.57752 20.5932 5.74128 20.7788 5.91834 20.9472C7.02541 22 8.68361 22 12 22C15.3164 22 16.9746 22 18.0817 20.9472C18.2587 20.7788 18.4225 20.5932 18.5711 20.3925C19.5 19.1379 19.5 17.2586 19.5 13.5Z',
  d2: 'M15 16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16Z',
  d3: 'M4.5 10H19.5',
  d4: 'M19.4998 10L19.5 13.5C19.5 17.2586 19.5 19.1379 18.5711 20.3925C18.4225 20.5932 18.2587 20.7788 18.0817 20.9472C16.9746 22 15.3164 22 12 22C8.68361 22 7.02541 22 5.91834 20.9472C5.74128 20.7788 5.57752 20.5932 5.42894 20.3925C4.5 19.1379 4.5 17.2586 4.5 13.5L4.50009 10H19.4998ZM12 19C13.6569 19 15 17.6569 15 16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16C9 17.6569 10.3431 19 12 19Z',
  d5: 'M19 13.5V10.5C19 6.74142 19 4.86213 18.0711 3.60746C17.9225 3.40678 17.7587 3.22119 17.5817 3.0528C16.4746 2 14.8164 2 11.5 2C8.18361 2 6.52541 2 5.41834 3.0528C5.24128 3.22119 5.07752 3.40678 4.92894 3.60746C4 4.86213 4 6.74142 4 10.5V13.5C4 17.2586 4 19.1379 4.92894 20.3925C5.07752 20.5932 5.24128 20.7788 5.41834 20.9472C6.52541 22 8.18361 22 11.5 22C14.8164 22 16.4746 22 17.5817 20.9472C17.7587 20.7788 17.9225 20.5932 18.0711 20.3925C19 19.1379 19 17.2586 19 13.5Z',
  d6: 'M14.5 16C14.5 17.6569 13.1569 19 11.5 19C9.84315 19 8.5 17.6569 8.5 16C8.5 14.3431 9.84315 13 11.5 13C13.1569 13 14.5 14.3431 14.5 16Z',
  d7: 'M4 10H19',
  d8: 'M12.0555 1.25H11.9445H11.9445C10.3334 1.24998 9.04762 1.24997 8.02959 1.38845C6.97477 1.53193 6.1109 1.83469 5.4015 2.50932C5.19236 2.70821 4.99997 2.92644 4.82617 3.16118C4.24735 3.94296 3.9927 4.87986 3.87029 6.03578C3.79252 6.77012 3.76503 7.63235 3.75531 8.64764C3.7526 8.9307 3.75125 9.07223 3.83929 9.16111C3.92732 9.25 4.06946 9.25 4.35373 9.25H19.6463C19.9305 9.25 20.0727 9.25 20.1607 9.16112C20.2488 9.07223 20.2474 8.9307 20.2447 8.64764C20.235 7.63235 20.2075 6.77012 20.1297 6.03578C20.0073 4.87986 19.7527 3.94296 19.1738 3.16118C19 2.92644 18.8076 2.70821 18.5985 2.50932C17.8891 1.83469 17.0252 1.53193 15.9704 1.38845C14.9524 1.24997 13.6666 1.24998 12.0555 1.25H12.0555ZM20.25 11.35C20.25 11.0672 20.25 10.9257 20.1621 10.8379C20.0743 10.75 19.9328 10.75 19.65 10.75H4.35C4.06716 10.75 3.92574 10.75 3.83787 10.8379C3.75 10.9257 3.75 11.0672 3.75 11.35V13.5448V13.5448C3.74999 15.3861 3.74999 16.8282 3.87029 17.9642C3.9927 19.1201 4.24735 20.057 4.82617 20.8388C4.99997 21.0736 5.19236 21.2918 5.4015 21.4907C6.1109 22.1653 6.97477 22.4681 8.02959 22.6116C9.04762 22.75 10.3334 22.75 11.9445 22.75H12.0555C13.6666 22.75 14.9524 22.75 15.9704 22.6116C17.0252 22.4681 17.8891 22.1653 18.5985 21.4907C18.8076 21.2918 19 21.0736 19.1738 20.8388C19.7527 20.057 20.0073 19.1201 20.1297 17.9642C20.25 16.8282 20.25 15.3862 20.25 13.5449V11.35ZM15 16.75C15 18.4069 13.6569 19.75 12 19.75C10.3431 19.75 9 18.4069 9 16.75C9 15.0931 10.3431 13.75 12 13.75C13.6569 13.75 15 15.0931 15 16.75Z',
  d9: 'M11.9445 1.25H12.0555H12.0555C13.6666 1.24998 14.9524 1.24997 15.9704 1.38845C17.0252 1.53193 17.8891 1.83469 18.5985 2.50932C18.8076 2.70821 19 2.92644 19.1738 3.16118C19.7527 3.94296 20.0073 4.87986 20.1297 6.03578C20.2075 6.77012 20.235 7.63235 20.2447 8.64764C20.2474 8.9307 20.2488 9.07223 20.1607 9.16112C20.0727 9.25 19.9305 9.25 19.6463 9.25H4.35373C4.06946 9.25 3.92732 9.25 3.83929 9.16111C3.75125 9.07223 3.7526 8.9307 3.75531 8.64764C3.76503 7.63235 3.79252 6.77012 3.87029 6.03578C3.9927 4.87986 4.24735 3.94296 4.82617 3.16118C4.99997 2.92644 5.19236 2.70821 5.4015 2.50932C6.1109 1.83469 6.97477 1.53193 8.02959 1.38845C9.04762 1.24997 10.3334 1.24998 11.9445 1.25H11.9445Z',
  d10: 'M20.1621 10.8379C20.25 10.9257 20.25 11.0672 20.25 11.35V13.5449C20.25 15.3862 20.25 16.8282 20.1297 17.9642C20.0073 19.1201 19.7527 20.057 19.1738 20.8388C19 21.0736 18.8076 21.2918 18.5985 21.4907C17.8891 22.1653 17.0252 22.4681 15.9704 22.6116C14.9524 22.75 13.6666 22.75 12.0555 22.75H11.9445C10.3334 22.75 9.04762 22.75 8.02959 22.6116C6.97477 22.4681 6.1109 22.1653 5.4015 21.4907C5.19236 21.2918 4.99997 21.0736 4.82617 20.8388C4.24735 20.057 3.9927 19.1201 3.87029 17.9642C3.74999 16.8282 3.74999 15.3861 3.75 13.5448V13.5448V11.35C3.75 11.0672 3.75 10.9257 3.83787 10.8379C3.92574 10.75 4.06716 10.75 4.35 10.75H19.65C19.9328 10.75 20.0743 10.75 20.1621 10.8379Z',
  d11: 'M12 19.75C13.6569 19.75 15 18.4069 15 16.75C15 15.0931 13.6569 13.75 12 13.75C10.3431 13.75 9 15.0931 9 16.75C9 18.4069 10.3431 19.75 12 19.75Z',
  d12: 'M19.5 2H4.5V22H19.5V2Z',
  d13: 'M3.75 2C3.75 1.58579 4.08579 1.25 4.5 1.25H19.5C19.9142 1.25 20.25 1.58579 20.25 2V9.25H3.75V2ZM3.75 10.75H20.25V22C20.25 22.4142 19.9142 22.75 19.5 22.75H4.5C4.08579 22.75 3.75 22.4142 3.75 22V10.75ZM12 19.75C13.6569 19.75 15 18.4069 15 16.75C15 15.0931 13.6569 13.75 12 13.75C10.3431 13.75 9 15.0931 9 16.75C9 18.4069 10.3431 19.75 12 19.75Z',
} as const;

export const IconIpodStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ipod-stroke-rounded IconIpodStrokeRounded"
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

export const IconIpodDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ipod-duotone-rounded IconIpodDuotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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

export const IconIpodTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ipod-twotone-rounded IconIpodTwotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIpodSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ipod-solid-rounded IconIpodSolidRounded"
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

export const IconIpodBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ipod-bulk-rounded IconIpodBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIpodStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ipod-stroke-sharp IconIpodStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconIpodSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ipod-solid-sharp IconIpodSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfIpod: TheIconSelfPack = {
  name: 'Ipod',
  StrokeRounded: IconIpodStrokeRounded,
  DuotoneRounded: IconIpodDuotoneRounded,
  TwotoneRounded: IconIpodTwotoneRounded,
  SolidRounded: IconIpodSolidRounded,
  BulkRounded: IconIpodBulkRounded,
  StrokeSharp: IconIpodStrokeSharp,
  SolidSharp: IconIpodSolidSharp,
};