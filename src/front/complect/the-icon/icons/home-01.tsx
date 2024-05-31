import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.0001 17C14.2006 17.6224 13.1504 18 12.0001 18C10.8499 18 9.79965 17.6224 9.00012 17',
  d2: 'M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z',
  d3: 'M9.52393 1.99594C10.3598 1.52688 11.1341 1.25 12.0001 1.25C12.8662 1.25 13.6404 1.52688 14.4763 1.99594C15.2862 2.45043 16.2143 3.12145 17.3812 3.96522L17.3813 3.96525L18.8903 5.05633C19.8268 5.73347 20.5748 6.2743 21.139 6.77487C21.7216 7.29173 22.1574 7.807 22.4338 8.45513C22.7109 9.10469 22.7779 9.77045 22.7407 10.5381C22.7049 11.2789 22.5675 12.1726 22.3962 13.2871L22.0809 15.3387C21.8376 16.9225 21.6438 18.1837 21.3591 19.1662C21.0647 20.1821 20.65 20.9887 19.9087 21.6052C19.1706 22.2192 18.2912 22.4926 17.2171 22.6231C16.1721 22.75 14.854 22.75 13.189 22.75H10.8112C9.14627 22.75 7.82812 22.75 6.78318 22.6231C5.70903 22.4926 4.8297 22.2192 4.09153 21.6052C3.35028 20.9887 2.93556 20.1821 2.64117 19.1662C2.35647 18.1836 2.16268 16.9225 1.91931 15.3387L1.60405 13.2872C1.43276 12.1727 1.2954 11.2789 1.25953 10.5381C1.22237 9.77045 1.28938 9.10469 1.56642 8.45513C1.84286 7.807 2.27867 7.29173 2.86121 6.77487C3.42541 6.27429 4.17342 5.73346 5.10996 5.05632L6.61899 3.96524C7.78599 3.12145 8.71402 2.45043 9.52393 1.99594ZM9.61442 16.2109C9.17861 15.8717 8.5503 15.95 8.21106 16.3858C7.87182 16.8216 7.9501 17.4499 8.38591 17.7892C9.36419 18.5507 10.6315 19 12.0002 19C13.3689 19 14.6361 18.5507 15.6144 17.7892C16.0502 17.4499 16.1285 16.8216 15.7893 16.3858C15.45 15.95 14.8217 15.8717 14.3859 16.2109C13.7651 16.6942 12.9319 17 12.0002 17C11.0684 17 10.2352 16.6942 9.61442 16.2109Z',
  d4: 'M12.0001 1.25C11.1341 1.25 10.3598 1.52688 9.52393 1.99594C8.71402 2.45043 7.78599 3.12145 6.61899 3.96524L5.10996 5.05632C4.17342 5.73346 3.42541 6.27429 2.86121 6.77487C2.27867 7.29173 1.84286 7.807 1.56642 8.45513C1.28938 9.10469 1.22237 9.77045 1.25953 10.5381C1.2954 11.2789 1.43276 12.1727 1.60405 13.2872L1.91931 15.3387C2.16268 16.9225 2.35647 18.1836 2.64117 19.1662C2.93556 20.1821 3.35028 20.9887 4.09153 21.6052C4.8297 22.2192 5.70903 22.4926 6.78318 22.6231C7.82812 22.75 9.14627 22.75 10.8112 22.75H13.189C14.854 22.75 16.1721 22.75 17.2171 22.6231C18.2912 22.4926 19.1706 22.2192 19.9087 21.6052C20.65 20.9887 21.0647 20.1821 21.3591 19.1662C21.6438 18.1837 21.8376 16.9225 22.0809 15.3387L22.3962 13.2871C22.5675 12.1726 22.7049 11.2789 22.7407 10.5381C22.7779 9.77045 22.7109 9.10469 22.4338 8.45513C22.1574 7.807 21.7216 7.29173 21.139 6.77487C20.5748 6.2743 19.8268 5.73347 18.8903 5.05633L17.3813 3.96525C16.2143 3.12146 15.2862 2.45043 14.4763 1.99594C13.6404 1.52688 12.8662 1.25 12.0001 1.25Z',
  d5: 'M8.21106 16.3858C8.5503 15.95 9.17861 15.8717 9.61442 16.2109C10.2352 16.6942 11.0684 17 12.0002 17C12.9319 17 13.7651 16.6942 14.3859 16.2109C14.8217 15.8717 15.45 15.95 15.7893 16.3858C16.1285 16.8216 16.0502 17.4499 15.6144 17.7892C14.6361 18.5507 13.3689 19 12.0002 19C10.6315 19 9.36419 18.5507 8.38591 17.7892C7.9501 17.4499 7.87182 16.8216 8.21106 16.3858Z',
  d6: 'M15 17C14.2005 17.6224 13.1502 18 12 18C10.8498 18 9.79952 17.6224 9 17',
  d7: 'M19.4997 22L21.9997 9L11.9997 2L1.99805 9L4.49965 22H19.4997Z',
  d8: 'M12.4299 1.38558C12.1716 1.20482 11.8279 1.20481 11.5697 1.38554L1.56803 8.38554C1.32572 8.55513 1.2057 8.85129 1.26159 9.14172L3.76319 22.1417C3.83114 22.4948 4.14012 22.75 4.49968 22.75H19.4997C19.8593 22.75 20.1683 22.4948 20.2362 22.1416L22.7363 9.14164C22.7921 8.85125 22.6721 8.55515 22.4299 8.38558L12.4299 1.38558ZM14.3848 16.2109C13.764 16.6942 12.9308 17 11.999 17C11.0672 17 10.234 16.6942 9.61328 16.2109L8.38477 17.7892C9.36304 18.5507 10.6303 19 11.999 19C13.3677 19 14.635 18.5507 15.6133 17.7892L14.3848 16.2109Z',
} as const;

export const IconHome01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="home-01-stroke-rounded IconHome01StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHome01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="home-01-duotone-rounded IconHome01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHome01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="home-01-twotone-rounded IconHome01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHome01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="home-01-solid-rounded IconHome01SolidRounded"
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

export const IconHome01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="home-01-bulk-rounded IconHome01BulkRounded"
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

export const IconHome01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="home-01-stroke-sharp IconHome01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHome01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="home-01-solid-sharp IconHome01SolidSharp"
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

export const iconPackOfHome01: TheIconSelfPack = {
  name: 'Home01',
  StrokeRounded: IconHome01StrokeRounded,
  DuotoneRounded: IconHome01DuotoneRounded,
  TwotoneRounded: IconHome01TwotoneRounded,
  SolidRounded: IconHome01SolidRounded,
  BulkRounded: IconHome01BulkRounded,
  StrokeSharp: IconHome01StrokeSharp,
  SolidSharp: IconHome01SolidSharp,
};