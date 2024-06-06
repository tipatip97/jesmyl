import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 12V17M3 17H5C6.41421 17 7.12132 17 7.56066 17.4393C8 17.8787 8 18.5858 8 20V21M3 17V21',
  d2: 'M4 7L9.31672 4.08345C10.6334 3.36115 11.2918 3 12 3C12.7082 3 13.3666 3.36115 14.6833 4.08345L20 7',
  d3: 'M18 6V10M6 6V10',
  d4: 'M21 12V17M21 17H19C17.5858 17 16.8787 17 16.4393 17.4393C16 17.8787 16 18.5858 16 20V21M21 17V21',
  d5: 'M7 14H12M17 14H12M12 14V21M12 21H11M12 21H13',
  d6: 'M12 3C11.2918 3 10.6334 3.36115 9.31672 4.08345L6 5.90288V10H18V5.90288L14.6833 4.08345C13.3666 3.36115 12.7082 3 12 3Z',
  d7: 'M3.225 11.0251C3.76348 11.0251 4.2 11.4617 4.2 12.0001V15.9001H5.175C5.19509 15.9001 5.21511 15.9001 5.23507 15.9001C5.87284 15.9001 6.44586 15.9 6.90968 15.9624C7.41605 16.0305 7.93554 16.1885 8.36107 16.6141C8.7866 17.0396 8.94468 17.5591 9.01276 18.0655C9.07512 18.5293 9.07506 19.1023 9.075 19.7401C9.075 19.76 9.075 19.7801 9.075 19.8001V20.7751C9.075 21.3136 8.63848 21.7501 8.1 21.7501C7.56152 21.7501 7.125 21.3136 7.125 20.7751V19.8001C7.125 19.0832 7.12293 18.6435 7.08015 18.3253C7.04255 18.0456 6.98907 17.9989 6.98273 17.9934C6.98249 17.9932 6.98283 17.9935 6.98273 17.9934C6.98262 17.9933 6.98196 17.9927 6.98176 17.9924C6.97622 17.9861 6.92952 17.9326 6.64984 17.895C6.33165 17.8522 5.89199 17.8501 5.175 17.8501H4.2V20.7751C4.2 21.3136 3.76348 21.7501 3.225 21.7501C2.68652 21.7501 2.25 21.3136 2.25 20.7751V12.0001C2.25 11.4617 2.68652 11.0251 3.225 11.0251Z',
  d8: 'M4.66872 7.97934L5.17578 7.70119V10.0503C5.17578 10.5888 5.6123 11.0253 6.15078 11.0253H17.8508C18.3893 11.0253 18.8258 10.5888 18.8258 10.0503V7.70227L19.3309 7.97934C19.803 8.23832 20.3956 8.06555 20.6546 7.59344C20.9136 7.12133 20.7408 6.52866 20.2687 6.26968L15.0467 3.40509C14.4374 3.0708 13.9219 2.78801 13.4723 2.59365C12.9953 2.38742 12.5253 2.24951 11.9998 2.24951C11.4743 2.24951 11.0043 2.38742 10.5273 2.59365C10.0777 2.78801 9.56222 3.0708 8.95286 3.4051L3.73087 6.26968C3.25876 6.52866 3.08598 7.12133 3.34496 7.59344C3.60394 8.06555 4.19661 8.23832 4.66872 7.97934Z',
  d9: 'M20.775 11.0251C21.3135 11.0251 21.75 11.4617 21.75 12.0001V20.7751C21.75 21.3136 21.3135 21.7501 20.775 21.7501C20.2365 21.7501 19.8 21.3136 19.8 20.7751V17.8501H18.825C18.108 17.8501 17.6683 17.8522 17.3502 17.895C17.0705 17.9326 17.0238 17.9861 17.0182 17.9924C17.018 17.9927 17.0183 17.9923 17.0182 17.9924C17.0181 17.9925 17.0175 17.9932 17.0173 17.9934C17.0109 17.9989 16.9574 18.0456 16.9198 18.3253C16.8771 18.6435 16.875 19.0832 16.875 19.8001V20.7751C16.875 21.3136 16.4385 21.7501 15.9 21.7501C15.3615 21.7501 14.925 21.3136 14.925 20.7751V19.8001C14.925 19.7801 14.925 19.76 14.925 19.7401C14.9249 19.1023 14.9249 18.5293 14.9872 18.0655C15.0553 17.5591 15.2134 17.0396 15.6389 16.6141C16.0645 16.1885 16.5839 16.0305 17.0903 15.9624C17.5541 15.9 18.1272 15.9001 18.7649 15.9001C18.7849 15.9001 18.8049 15.9001 18.825 15.9001H19.8V12.0001C19.8 11.4617 20.2365 11.0251 20.775 11.0251Z',
  d10: 'M6.15002 13.9494C6.15002 13.4109 6.58655 12.9744 7.12502 12.9744H16.875C17.4135 12.9744 17.85 13.4109 17.85 13.9494C17.85 14.4878 17.4135 14.9244 16.875 14.9244H12.975V19.7994C13.5135 19.7994 13.95 20.2359 13.95 20.7744C13.95 21.3128 13.5135 21.7494 12.975 21.7494H11.025C10.4865 21.7494 10.05 21.3128 10.05 20.7744C10.05 20.2359 10.4865 19.7994 11.025 19.7994V14.9244H7.12502C6.58655 14.9244 6.15002 14.4878 6.15002 13.9494Z',
  d11: 'M3 12V17M3 17H8V21M3 17V21',
  d12: 'M4 7L12 3L20 7',
  d13: 'M18 6.5V10M6 6.5V10',
  d14: 'M21 12V17M21 17H16V21M21 17V21',
  d15: 'M4.2 11.0879V15.9343H9.075V21.75H7.125V17.8728H4.2V21.75H2.25V11.0879H4.2Z',
  d16: 'M21.1088 6.77733L12.0007 2.25L2.89258 6.77733L3.76464 8.51123L5.17578 7.8098V11.0869H18.8258V7.8099L20.2367 8.51123L21.1088 6.77733Z',
  d17: 'M21.75 11.0879V21.75H19.8V17.8728H16.875V21.75H14.925V15.9343H19.8V11.0879H21.75Z',
  d18: 'M6.15002 13.0254H17.85V14.9639H12.975V19.8103H13.95V21.7489H10.05V19.8103H11.025V14.9639H6.15002V13.0254Z',
};

export const IconRestaurantStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="restaurant-stroke-rounded IconRestaurantStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRestaurantDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="restaurant-duotone-rounded IconRestaurantDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRestaurantTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="restaurant-twotone-rounded IconRestaurantTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRestaurantSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="restaurant-solid-rounded IconRestaurantSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRestaurantBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="restaurant-bulk-rounded IconRestaurantBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRestaurantStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="restaurant-stroke-sharp IconRestaurantStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconRestaurantSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="restaurant-solid-sharp IconRestaurantSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRestaurant: TheIconSelfPack = {
  name: 'Restaurant',
  StrokeRounded: IconRestaurantStrokeRounded,
  DuotoneRounded: IconRestaurantDuotoneRounded,
  TwotoneRounded: IconRestaurantTwotoneRounded,
  SolidRounded: IconRestaurantSolidRounded,
  BulkRounded: IconRestaurantBulkRounded,
  StrokeSharp: IconRestaurantStrokeSharp,
  SolidSharp: IconRestaurantSolidSharp,
};