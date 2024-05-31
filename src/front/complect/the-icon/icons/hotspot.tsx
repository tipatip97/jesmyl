import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4 20.001C2.74418 18.3295 2 16.2516 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14C22 16.2516 21.2558 18.3295 20 20.001',
  d2: 'M7.52779 18C6.57771 16.9385 6 15.5367 6 14C6 10.6863 8.68629 8 12 8C15.3137 8 18 10.6863 18 14C18 15.5367 17.4223 16.9385 16.4722 18',
  d3: 'M9.25 14C9.25 12.4812 10.4812 11.25 12 11.25C13.5188 11.25 14.75 12.4812 14.75 14C14.75 15.5188 13.5188 16.75 12 16.75C10.4812 16.75 9.25 15.5188 9.25 14Z',
  d4: 'M12 5C7.02944 5 3 9.02944 3 14C3 16.0276 3.66932 17.8961 4.79949 19.4003C5.13124 19.8418 5.04222 20.4687 4.60067 20.8005C4.15913 21.1322 3.53225 21.0432 3.20051 20.6017C1.81903 18.7629 1 16.4757 1 14C1 7.92487 5.92487 3 12 3C18.0751 3 23 7.92487 23 14C23 16.4757 22.181 18.7629 20.7995 20.6017C20.4678 21.0432 19.8409 21.1322 19.3993 20.8005C18.9578 20.4687 18.8688 19.8418 19.2005 19.4003C20.3307 17.8961 21 16.0276 21 14C21 9.02944 16.9706 5 12 5Z',
  d5: 'M12 9C9.23858 9 7 11.2386 7 14C7 15.2812 7.48059 16.4478 8.27292 17.3331C8.64125 17.7446 8.60623 18.3768 8.1947 18.7451C7.78317 19.1135 7.15098 19.0784 6.78265 18.6669C5.67482 17.4291 5 15.7922 5 14C5 10.134 8.13401 7 12 7C15.866 7 19 10.134 19 14C19 15.7922 18.3252 17.4291 17.2173 18.6669C16.849 19.0784 16.2168 19.1135 15.8053 18.7451C15.3938 18.3768 15.3588 17.7446 15.7271 17.3331C16.5194 16.4478 17 15.2812 17 14C17 11.2386 14.7614 9 12 9Z',
  d6: 'M9 14.25C9 12.5931 10.3431 11.25 12 11.25C13.6569 11.25 15 12.5931 15 14.25C15 15.9069 13.6569 17.25 12 17.25C10.3431 17.25 9 15.9069 9 14.25Z',
  d7: 'M3 14.25C3 9.27944 7.02944 5.25 12 5.25C16.9706 5.25 21 9.27944 21 14.25C21 16.2261 20.3643 18.0509 19.2858 19.5348L20.8746 20.7498C22.2104 18.9287 23 16.6802 23 14.25C23 8.17487 18.0751 3.25 12 3.25C5.92487 3.25 1 8.17487 1 14.25C1 16.6802 1.78926 18.9289 3.12504 20.75L4.71413 19.5348C3.6357 18.0509 3 16.226 3 14.25Z',
  d8: 'M7 14.25C7 11.4886 9.23858 9.25 12 9.25C14.7614 9.25 17 11.4886 17 14.25C17 15.3115 16.6701 16.2942 16.1064 17.1035L17.6963 18.3193C18.5165 17.1727 19 15.7669 19 14.25C19 10.384 15.866 7.25 12 7.25C8.13401 7.25 5 10.384 5 14.25C5 15.7669 5.48345 17.1726 6.30371 18.3192L7.89352 17.1035C7.32984 16.2942 7 15.3114 7 14.25Z',
} as const;

export const IconHotspotStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotspot-stroke-rounded IconHotspotStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="14" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconHotspotDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotspot-duotone-rounded IconHotspotDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="14" 
        r="2" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="14" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconHotspotTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotspot-twotone-rounded IconHotspotTwotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="14" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round"></circle>
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
      />
    </TheIconWrapper>
  );
};

export const IconHotspotSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotspot-solid-rounded IconHotspotSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconHotspotBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotspot-bulk-rounded IconHotspotBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHotspotStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotspot-stroke-sharp IconHotspotStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="14" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconHotspotSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="hotspot-solid-sharp IconHotspotSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfHotspot: TheIconSelfPack = {
  name: 'Hotspot',
  StrokeRounded: IconHotspotStrokeRounded,
  DuotoneRounded: IconHotspotDuotoneRounded,
  TwotoneRounded: IconHotspotTwotoneRounded,
  SolidRounded: IconHotspotSolidRounded,
  BulkRounded: IconHotspotBulkRounded,
  StrokeSharp: IconHotspotStrokeSharp,
  SolidSharp: IconHotspotSolidSharp,
};