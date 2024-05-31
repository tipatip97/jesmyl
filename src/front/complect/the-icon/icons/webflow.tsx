import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.2327 15.2949L22 5.5H21.6038C19.4516 5.5 17.541 6.87715 16.8604 8.91886L15 14.5L14 5.5H13.9203C11.8583 5.5 10.0077 6.76591 9.26031 8.68777L7 14.5L6.44173 9.47554C6.19025 7.21226 4.27721 5.5 2 5.5L5 18.5C7.08422 18.5 8.98482 17.2071 9.71664 15.2556L11.5 10.5L13 18.5H13.566C15.6349 18.5 17.4901 17.2259 18.2327 15.2949Z',
  d2: 'M11.5 10.5L13 18.5H13.566C15.6349 18.5 17.4901 17.2259 18.2327 15.2949L22 5.5H21.6038C19.4516 5.5 17.541 6.87715 16.8604 8.91886L15 14.5L14 5.5',
  d3: 'M11.5 10.5L9.71664 15.2556C8.98482 17.2071 7.08422 18.5 5 18.5L2 5.5C4.27721 5.5 6.19025 7.21226 6.44173 9.47554L7 14.5L9.26031 8.68777C10.0077 6.76591 11.8583 5.5 13.9203 5.5H14',
  d4: 'M1.41307 5.03309C1.55536 4.85422 1.77145 4.75 2.00001 4.75C4.65937 4.75 6.89347 6.74961 7.18715 9.39271L7.4081 11.3813L8.56132 8.41593C9.42081 6.2058 11.549 4.75 13.9203 4.75H14C14.3822 4.75 14.7032 5.03735 14.7454 5.41718L15.3683 11.0233L16.1489 8.68169C16.9315 6.33372 19.1288 4.75 21.6038 4.75H22C22.2471 4.75 22.4783 4.87171 22.6182 5.0754C22.7581 5.27908 22.7887 5.53861 22.7 5.76923L18.9328 15.5641C18.0787 17.7847 15.9452 19.25 13.566 19.25H13C12.6391 19.25 12.3294 18.9929 12.2629 18.6382L11.2583 13.2806L10.4189 15.519C9.57519 17.7688 7.3908 19.25 5.00001 19.25C4.65076 19.25 4.34774 19.0089 4.26921 18.6686L1.26921 5.66864C1.21782 5.44594 1.27078 5.21195 1.41307 5.03309Z',
  d5: 'M18.2327 15.2949L22 5.5C19.3345 5.5 17.541 6.87715 16.8604 8.91886L15.1452 14.3892C15.1336 14.4261 15.0978 14.4498 15.0593 14.4461C15.0208 14.4424 14.9902 14.4122 14.986 14.3738L14 5.5C11.7699 5.5 10.0077 6.76591 9.26031 8.68777L7.12972 14.4067C7.11783 14.4386 7.08557 14.4582 7.05176 14.454C7.01796 14.4498 6.99144 14.423 6.98768 14.3891L6.44173 9.47554C6.19025 7.21226 4.27721 5.5 2 5.5L5 18.5C7.08422 18.5 8.98482 17.2071 9.71664 15.2556L11.4628 10.5992C11.4756 10.5651 11.5096 10.5438 11.5458 10.5472C11.5821 10.5505 11.6116 10.5778 11.6179 10.6136L13 18.5C15.9583 18.5 17.4901 17.2259 18.2327 15.2949Z',
  d6: 'M1.25 4.75H2.16991C4.76473 4.75 6.9446 6.74961 7.23115 9.39271L7.45758 11.4813L8.57189 8.4159C9.41026 6.20647 11.4002 4.75 13.8787 4.75H14.5336L15.2256 11.1321L15.9753 8.68165C16.7462 6.31135 18.7922 4.75 21.6845 4.75H22.75L18.6917 15.5641C18.2868 16.6429 17.6479 17.5836 16.6705 18.2469C15.6967 18.9078 14.4507 19.25 12.9029 19.25H12.2882L11.2471 13.1614L10.3845 15.519C9.56123 17.7688 7.42985 19.25 5.09709 19.25H4.51494L1.25 4.75Z',
} as const;

export const IconWebflowStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-stroke-rounded IconWebflowStrokeRounded"
    >
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

export const IconWebflowDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-duotone-rounded IconWebflowDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWebflowTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-twotone-rounded IconWebflowTwotoneRounded"
    >
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWebflowSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-solid-rounded IconWebflowSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWebflowBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-bulk-rounded IconWebflowBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWebflowStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-stroke-sharp IconWebflowStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWebflowSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="webflow-solid-sharp IconWebflowSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWebflow: TheIconSelfPack = {
  name: 'Webflow',
  StrokeRounded: IconWebflowStrokeRounded,
  DuotoneRounded: IconWebflowDuotoneRounded,
  TwotoneRounded: IconWebflowTwotoneRounded,
  SolidRounded: IconWebflowSolidRounded,
  BulkRounded: IconWebflowBulkRounded,
  StrokeSharp: IconWebflowStrokeSharp,
  SolidSharp: IconWebflowSolidSharp,
};