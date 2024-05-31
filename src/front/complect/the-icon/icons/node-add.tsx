import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.5 19.5H13C10.1716 19.5 8.75736 19.5 7.87868 18.6213C7 17.7426 7 16.3284 7 13.5V11.5M7 10.5V11.5M7 11.5H13.5',
  d2: 'M13.5 11.5C13.5 10.3215 13.5 9.73223 13.8515 9.36612C14.2029 9 14.7686 9 15.9 9H17.1C18.2314 9 18.7971 9 19.1485 9.36612C19.5 9.73223 19.5 10.3215 19.5 11.5C19.5 12.6785 19.5 13.2678 19.1485 13.6339C18.7971 14 18.2314 14 17.1 14H15.9C14.7686 14 14.2029 14 13.8515 13.6339C13.5 13.2678 13.5 12.6785 13.5 11.5Z',
  d3: 'M13.5 19.5C13.5 18.3215 13.5 17.7322 13.8515 17.3661C14.2029 17 14.7686 17 15.9 17H17.1C18.2314 17 18.7971 17 19.1485 17.3661C19.5 17.7322 19.5 18.3215 19.5 19.5C19.5 20.6785 19.5 21.2678 19.1485 21.6339C18.7971 22 18.2314 22 17.1 22H15.9C14.7686 22 14.2029 22 13.8515 21.6339C13.5 21.2678 13.5 20.6785 13.5 19.5Z',
  d4: 'M7 2V8M10 5L4 5',
  d5: 'M6.375 11.625C6.375 11.0727 6.82272 10.625 7.375 10.625H13.875C14.4273 10.625 14.875 11.0727 14.875 11.625C14.875 12.1773 14.4273 12.625 13.875 12.625H8.375V13.625C8.375 15.0675 8.37713 16.0487 8.47592 16.7836C8.57085 17.4896 8.73822 17.8166 8.96079 18.0392C9.14943 18.2279 9.55459 18.4176 10.449 18.5219C11.3202 18.6235 12.4391 18.625 13.875 18.625C14.4273 18.625 14.875 19.0727 14.875 19.625C14.875 20.1773 14.4273 20.625 13.875 20.625H13.8224C12.451 20.625 11.2173 20.625 10.2174 20.5084C9.2279 20.3931 8.23661 20.1435 7.54658 19.4534C6.89047 18.7973 6.6185 17.9779 6.49375 17.0501C6.37494 16.1663 6.37497 15.0497 6.375 13.6956V13.6956L6.375 13.625V11.625Z',
  d6: 'M16.2266 8.375L16.275 8.37501H17.475L17.5234 8.375C18.0475 8.37495 18.5165 8.37491 18.8958 8.42802C19.3114 8.48623 19.7277 8.62078 20.0646 8.97172C20.3974 9.31837 20.5209 9.73928 20.5749 10.1574C20.6251 10.5462 20.625 11.0292 20.625 11.579V11.671C20.625 12.2208 20.6251 12.7038 20.5749 13.0926C20.5209 13.5107 20.3974 13.9316 20.0646 14.2783C19.7277 14.6292 19.3114 14.7638 18.8958 14.822C18.5165 14.8751 18.0475 14.8751 17.5234 14.875L17.475 14.875H16.275L16.2266 14.875C15.7025 14.8751 15.2335 14.8751 14.8543 14.822C14.4386 14.7638 14.0223 14.6292 13.6854 14.2783C13.3527 13.9316 13.2291 13.5107 13.1751 13.0926C13.1249 12.7038 13.125 12.2208 13.125 11.671L13.125 11.625L13.125 11.579C13.125 11.0292 13.1249 10.5462 13.1751 10.1574C13.2291 9.73928 13.3527 9.31837 13.6854 8.97172C14.0223 8.62078 14.4386 8.48623 14.8543 8.42802C15.2335 8.37491 15.7025 8.37495 16.2266 8.375L16.2266 8.375Z',
  d7: 'M16.2266 16.375L16.275 16.375H17.475L17.5234 16.375C18.0475 16.375 18.5165 16.3749 18.8958 16.428C19.3114 16.4862 19.7277 16.6208 20.0646 16.9717C20.3974 17.3184 20.5209 17.7393 20.5749 18.1574C20.6251 18.5462 20.625 19.0292 20.625 19.579V19.671C20.625 20.2208 20.6251 20.7038 20.5749 21.0926C20.5209 21.5107 20.3974 21.9316 20.0646 22.2783C19.7277 22.6292 19.3114 22.7638 18.8958 22.822C18.5165 22.8751 18.0475 22.8751 17.5234 22.875L17.475 22.875H16.275L16.2266 22.875C15.7025 22.8751 15.2335 22.8751 14.8543 22.822C14.4386 22.7638 14.0223 22.6292 13.6854 22.2783C13.3527 21.9316 13.2291 21.5107 13.1751 21.0926C13.1249 20.7038 13.125 20.2208 13.125 19.671L13.125 19.625L13.125 19.579C13.125 19.0292 13.1249 18.5462 13.1751 18.1574C13.2291 17.7393 13.3527 17.3184 13.6854 16.9717C14.0223 16.6208 14.4386 16.4862 14.8543 16.428C15.2335 16.3749 15.7025 16.375 16.2266 16.375L16.2266 16.375Z',
  d8: 'M7.375 1.125C7.92729 1.125 8.375 1.57272 8.375 2.125V4.125L10.375 4.125C10.9273 4.125 11.375 4.57272 11.375 5.125C11.375 5.67728 10.9273 6.125 10.375 6.125H8.375V8.125C8.375 8.67729 7.92729 9.125 7.375 9.125C6.82272 9.125 6.375 8.67729 6.375 8.125V6.125H4.375C3.82272 6.125 3.375 5.67728 3.375 5.125C3.375 4.57272 3.82272 4.125 4.375 4.125H6.375V2.125C6.375 1.57272 6.82272 1.125 7.375 1.125Z',
  d9: 'M7 1C7.55229 1 8 1.44772 8 2V4L10 4C10.5523 4 11 4.44772 11 5C11 5.55228 10.5523 6 10 6H8V8C8 8.55229 7.55229 9 7 9C6.44772 9 6 8.55229 6 8V6H4C3.44772 6 3 5.55228 3 5C3 4.44772 3.44772 4 4 4H6V2C6 1.44772 6.44772 1 7 1Z',
  d10: 'M13.1262 11.1124H8.07022V11.0351C8.07022 10.4634 7.60679 10 7.03511 10C6.46344 10 6 10.4634 6 11.0351L6 14.1486C5.99997 15.4875 5.99994 16.5917 6.12293 17.4656C6.25205 18.383 6.53357 19.1933 7.21271 19.8421C7.92697 20.5244 8.95307 20.7712 9.97727 20.8853C10.6521 20.9605 12.0459 20.9866 13.1638 20.9957C13.1249 20.6247 13.125 20.1761 13.125 19.6711V19.579C13.125 19.383 13.125 19.1954 13.1272 19.0175C12.0589 19.0086 10.7888 18.9847 10.217 18.921C9.29122 18.8178 8.87184 18.6302 8.67657 18.4437C8.44619 18.2236 8.27294 17.9002 8.17468 17.2021C8.07242 16.4755 8.07022 15.5052 8.07022 14.0788V13.09H13.1748C13.1249 12.7017 13.125 12.2196 13.125 11.6711V11.579C13.125 11.4175 13.125 11.2617 13.1262 11.1124Z',
  d11: 'M13.5 19.5H7V11.5M7 10V11.5M7 11.5H13.5',
  d12: 'M19.5 22V17H13.5V22H19.5Z',
  d13: 'M19.5 14V9H13.5V14H19.5Z',
  d14: 'M6 10H8V10.5H13.5V12.5H8V18.5H13.5V20.5H7C6.44772 20.5 6 20.0523 6 19.5V10Z',
  d15: 'M12.75 17C12.75 16.5858 13.0858 16.25 13.5 16.25H19.5C19.9142 16.25 20.25 16.5858 20.25 17V22C20.25 22.4142 19.9142 22.75 19.5 22.75H13.5C13.0858 22.75 12.75 22.4142 12.75 22V17Z',
  d16: 'M12.75 9C12.75 8.58579 13.0858 8.25 13.5 8.25H19.5C19.9142 8.25 20.25 8.58579 20.25 9V14C20.25 14.4142 19.9142 14.75 19.5 14.75H13.5C13.0858 14.75 12.75 14.4142 12.75 14V9Z',
  d17: 'M6 4V2H8V4L10 4L10 6H8V8H6V6H4V4L6 4Z',
} as const;

export const IconNodeAddStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="node-add-stroke-rounded IconNodeAddStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNodeAddDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="node-add-duotone-rounded IconNodeAddDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNodeAddTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="node-add-twotone-rounded IconNodeAddTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNodeAddSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="node-add-solid-rounded IconNodeAddSolidRounded"
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNodeAddBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="node-add-bulk-rounded IconNodeAddBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNodeAddStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="node-add-stroke-sharp IconNodeAddStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
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

export const IconNodeAddSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="node-add-solid-sharp IconNodeAddSolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNodeAdd: TheIconSelfPack = {
  name: 'NodeAdd',
  StrokeRounded: IconNodeAddStrokeRounded,
  DuotoneRounded: IconNodeAddDuotoneRounded,
  TwotoneRounded: IconNodeAddTwotoneRounded,
  SolidRounded: IconNodeAddSolidRounded,
  BulkRounded: IconNodeAddBulkRounded,
  StrokeSharp: IconNodeAddStrokeSharp,
  SolidSharp: IconNodeAddSolidSharp,
};