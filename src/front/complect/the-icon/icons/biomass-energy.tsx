import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 14.4986C20 18.6415 16.4183 22 12 22C7.58172 22 4 18.6415 4 14.4986L4 14.2794C4 13.5451 4 13.178 4.25365 13.0433C4.80339 12.7515 6 14 6 14',
  d2: 'M4 9.50139C4 5.35849 7.58172 2 12 2C16.4183 2 20 5.35849 20 9.50139V9.72063C20 10.4549 20 10.822 19.7463 10.9567C19.1966 11.2485 18 10 18 10',
  d3: 'M11.9796 11.1605C11.2601 12.5841 10.7346 14.8928 11.5622 17.5M11.1431 15.0283C6.89727 12.0079 9.81401 8.53376 12.5599 6.78017C12.8913 6.56855 13.057 6.46274 13.2499 6.5119C13.4428 6.56106 13.5355 6.73406 13.7209 7.08005C15.2623 9.95702 16.3667 14.4893 11.1431 15.0283Z',
  d4: 'M12 2C7.58172 2 4 5.58172 4 10V14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14V10C20 5.58172 16.4183 2 12 2ZM13.2499 6.5119C13.4428 6.56106 13.5355 6.73406 13.7209 7.08005C15.2623 9.95702 16.3667 14.4893 11.1431 15.0283C6.89727 12.0079 9.81401 8.53376 12.5599 6.78017C12.8913 6.56855 13.057 6.46274 13.2499 6.5119Z',
  d5: 'M21 14.4986C21 19.2534 16.909 23 12 23C7.09103 23 3 19.2534 3 14.4986L2.99998 14.2227C2.99982 13.9065 2.99964 13.5606 3.04399 13.2802C3.09449 12.9611 3.24494 12.4467 3.78473 12.1601C4.32321 11.8742 4.86251 12.034 5.13072 12.1416C5.4379 12.2648 5.71969 12.4524 5.93262 12.612C6.15438 12.7781 6.34936 12.9504 6.48601 13.0777C6.55211 13.1393 6.66987 13.2563 6.71557 13.3017L6.72171 13.3078C7.10386 13.7065 7.09066 14.3398 6.69194 14.722L5.23718 16.1767C6.02861 18.9223 8.71523 21 12 21C15.9276 21 19 18.0296 19 14.4986C19 13.9463 19.4477 13.4986 20 13.4986C20.5523 13.4986 21 13.9463 21 14.4986Z',
  d6: 'M3 9.50139C3 4.74656 7.09103 1 12 0.999999C16.909 0.999999 21 4.74655 21 9.50139L21 9.77729C21.0002 10.0935 21.0004 10.4394 20.956 10.7198C20.9055 11.0389 20.7551 11.5533 20.2153 11.8399C19.6768 12.1258 19.1375 11.966 18.8693 11.8584C18.5621 11.7352 18.2803 11.5476 18.0674 11.388C17.8456 11.2219 17.6506 11.0496 17.514 10.9223C17.4479 10.8607 17.3301 10.7437 17.2844 10.6983L17.2783 10.6922C16.8961 10.2935 16.9093 9.66019 17.3081 9.27804L18.7628 7.82328C17.9714 5.07766 15.2848 3 12 3C8.07241 3 5 5.97042 5 9.50139C5 10.0537 4.55229 10.5014 4 10.5014C3.44772 10.5014 3 10.0537 3 9.50139Z',
  d7: 'M12.6564 5.86115C12.8645 5.77019 13.1295 5.70734 13.4352 5.78524C13.7435 5.86383 13.9467 6.04865 14.0852 6.23076C14.1929 6.37234 14.288 6.5503 14.3663 6.69669L14.382 6.72594C15.1741 8.20443 15.9254 10.226 15.7137 12.0189C15.6046 12.9432 15.2355 13.8313 14.4678 14.5214C13.8429 15.0832 13.0021 15.4705 11.9376 15.6711C11.9936 16.1854 12.1025 16.7216 12.2775 17.2729C12.4028 17.6677 12.1844 18.0894 11.7896 18.2147C11.3948 18.34 10.9731 18.1216 10.8478 17.7268C10.5941 16.9275 10.4575 16.1531 10.4102 15.418C10.5063 15.4924 10.6058 15.5662 10.7087 15.6393C10.8572 15.745 11.0391 15.793 11.2204 15.7742C11.4697 15.7485 11.7087 15.7141 11.9373 15.671C11.7504 13.9543 12.1526 12.4812 12.6491 11.4989C12.8359 11.1292 12.6877 10.6781 12.318 10.4912C11.9484 10.3044 11.4972 10.4526 11.3104 10.8222C10.7413 11.9481 10.2899 13.5574 10.4098 15.4182C9.43311 14.6624 8.7973 13.8412 8.48167 12.9666C8.13145 11.9961 8.20436 11.0397 8.52617 10.1692C9.15183 8.47682 10.7311 7.05834 12.1563 6.14818L12.1841 6.13041C12.3244 6.04065 12.494 5.9322 12.6564 5.86115Z',
  d8: 'M13.4352 5.78524C13.1295 5.70734 12.8645 5.77019 12.6564 5.86115C12.494 5.9322 12.3244 6.04065 12.1841 6.13041L12.1563 6.14818C10.7311 7.05834 9.15183 8.47682 8.52617 10.1692C8.20436 11.0397 8.13145 11.9961 8.48167 12.9666C8.7973 13.8412 9.43311 14.6624 10.4098 15.4182C10.506 15.4926 10.6053 15.5664 10.7082 15.6396C10.8567 15.7452 11.0386 15.7932 11.2199 15.7745C11.4694 15.7487 11.7086 15.7143 11.9373 15.6712C13.0019 15.4706 13.8428 15.0833 14.4678 14.5214C15.2355 13.8313 15.6046 12.9432 15.7137 12.0189C15.9254 10.226 15.1741 8.20443 14.382 6.72594L14.3663 6.69669C14.288 6.5503 14.1929 6.37234 14.0852 6.23076C13.9467 6.04865 13.7435 5.86383 13.4352 5.78524Z',
  d9: 'M10.4101 15.4219C10.2901 13.5611 10.7416 11.9517 11.3106 10.8259C11.4975 10.4562 11.9486 10.308 12.3183 10.4949C12.688 10.6817 12.8362 11.1329 12.6493 11.5026C12.1528 12.4849 11.7506 13.958 11.9375 15.6748C11.9935 16.1892 12.1022 16.7254 12.2773 17.2768C12.4026 17.6716 12.1841 18.0933 11.7893 18.2186C11.3945 18.3439 10.9729 18.1255 10.8476 17.7307C10.5938 16.9314 10.4574 16.157 10.4101 15.4219Z',
  d10: 'M4 9.50139C4 5.35849 7.58172 2 12 2C16.4183 2 20 5.35849 20 9.50139V11L17.5 9.50139',
  d11: 'M20 14.4986C20 18.6415 16.4183 22 12 22C7.58172 22 4 18.6415 4 14.4986V13L6.5 14.4986',
  d12: 'M12.0344 11.1822C11.351 12.4499 10.739 14.4569 11.5265 17.4539M10.8944 14.9556C6.81865 11.8187 10.2754 8.20326 13.4482 6.53223C15.3166 10.0497 16.4494 14.7555 10.8944 14.9556Z',
  d13: 'M3 9.50139C3 4.74656 7.09103 1 12 1C16.909 1 21 4.74656 21 9.50139V11C21 11.3602 20.8063 11.6926 20.4929 11.8701C20.1795 12.0476 19.7948 12.0429 19.4859 11.8577L16.9859 10.3591L18.0141 8.64369L18.994 9.23104C18.842 5.82011 15.8269 3 12 3C8.07241 3 5 5.97042 5 9.50139H3Z',
  d14: 'M3.50712 12.1299C3.82053 11.9524 4.2052 11.9571 4.51415 12.1423L7.01415 13.6409L5.98585 15.3563L5.00602 14.769C5.15805 18.1799 8.17307 21 12 21C15.9276 21 19 18.0296 19 14.4986H21C21 19.2534 16.909 23 12 23C7.09103 23 3 19.2534 3 14.4986V13C3 12.6398 3.19371 12.3074 3.50712 12.1299Z',
  d15: 'M13.6612 5.5L14.0403 6.15477C14.8923 7.62593 15.8267 9.77784 15.7452 11.7028C15.7033 12.6928 15.3894 13.6707 14.6122 14.4359C13.9661 15.072 13.0612 15.5005 11.8881 15.7079C11.7452 14.0922 12.1631 12.7081 12.6757 11.7698L11.3593 11.0507C10.766 12.1368 10.2892 13.6744 10.3679 15.4543C9.31787 14.6919 8.6625 13.838 8.39125 12.9047C8.09082 11.871 8.29815 10.8664 8.74459 9.98035C9.61535 8.25224 11.4851 6.78585 13.0098 5.88491L13.6612 5.5Z',
  d16: 'M10.8558 18C10.5521 17.1147 10.4035 16.2597 10.3679 15.4543C10.4741 15.5314 10.5835 15.6075 10.6978 15.6827C10.8406 15.7767 11.0112 15.8191 11.1814 15.8028C11.4267 15.7794 11.6627 15.7478 11.8881 15.7079C11.939 16.2835 12.0603 16.8885 12.2746 17.5132L10.8558 18Z',
} as const;

export const IconBiomassEnergyStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="biomass-energy-stroke-rounded IconBiomassEnergyStrokeRounded"
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

export const IconBiomassEnergyDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="biomass-energy-duotone-rounded IconBiomassEnergyDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBiomassEnergyTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="biomass-energy-twotone-rounded IconBiomassEnergyTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBiomassEnergySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="biomass-energy-solid-rounded IconBiomassEnergySolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconBiomassEnergyBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="biomass-energy-bulk-rounded IconBiomassEnergyBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBiomassEnergyStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="biomass-energy-stroke-sharp IconBiomassEnergyStrokeSharp"
    >
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
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBiomassEnergySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="biomass-energy-solid-sharp IconBiomassEnergySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBiomassEnergy: TheIconSelfPack = {
  name: 'BiomassEnergy',
  StrokeRounded: IconBiomassEnergyStrokeRounded,
  DuotoneRounded: IconBiomassEnergyDuotoneRounded,
  TwotoneRounded: IconBiomassEnergyTwotoneRounded,
  SolidRounded: IconBiomassEnergySolidRounded,
  BulkRounded: IconBiomassEnergyBulkRounded,
  StrokeSharp: IconBiomassEnergyStrokeSharp,
  SolidSharp: IconBiomassEnergySolidSharp,
};