import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.00825 15.8092C2.23114 12.3161 2.88737 9.7599 3.44345 8.27511C3.72419 7.5255 4.32818 6.96728 5.10145 6.78021C9.40147 5.73993 14.5986 5.73993 18.8986 6.78021C19.6719 6.96728 20.2759 7.5255 20.5566 8.27511C21.1127 9.7599 21.7689 12.3161 21.9918 15.8092C22.1251 17.8989 20.6148 19.0503 18.9429 19.8925C17.878 20.4289 17.0591 18.8457 16.5155 17.6203C16.2185 16.9508 15.5667 16.5356 14.8281 16.5356H9.17196C8.43331 16.5356 7.78158 16.9508 7.48456 17.6203C6.94089 18.8457 6.122 20.4289 5.05711 19.8925C3.40215 19.0588 1.87384 17.9157 2.00825 15.8092Z',
  d2: 'M5 4.5L6.96285 4M19 4.5L17 4',
  d3: 'M9 13L7.5 11.5M7.5 11.5L6 10M7.5 11.5L6 13M7.5 11.5L9 10',
  d4: 'M15.9881 10H15.9971',
  d5: 'M17.9881 13H17.9971',
  d6: 'M7.9319 3.87839C8.06823 4.41358 7.74489 4.95796 7.20969 5.09429L5.24684 5.59429C4.71165 5.73062 4.16727 5.40728 4.03094 4.87209C3.89461 4.33689 4.21795 3.79252 4.75315 3.65619L6.716 3.15619C7.25119 3.01985 7.79557 3.3432 7.9319 3.87839ZM16.0299 3.8827C16.1638 3.34691 16.7067 3.02115 17.2425 3.1551L19.2425 3.6551C19.7783 3.78905 20.1041 4.33198 19.9701 4.86778C19.8362 5.40357 19.2933 5.72933 18.7575 5.59538L16.7575 5.09538C16.2217 4.96143 15.8959 4.4185 16.0299 3.8827Z',
  d7: 'M4.92505 6.17624C9.34097 5.10792 14.659 5.10792 19.0749 6.17624C20.1031 6.42499 20.8958 7.16753 21.2589 8.13707C21.8432 9.69712 22.5131 12.3265 22.7402 15.8864C22.9054 18.4746 20.9807 19.8308 19.2803 20.6873C18.8223 20.9181 18.3491 20.9287 17.917 20.7594C17.5185 20.6031 17.2028 20.3135 16.96 20.0252C16.4777 19.4523 16.1003 18.6589 15.8299 18.0495C15.6562 17.658 15.2778 17.4106 14.828 17.4106H9.17191C8.72214 17.4106 8.34373 17.658 8.17007 18.0495C7.8997 18.6589 7.52229 19.4523 7.03996 20.0252C6.79717 20.3135 6.48147 20.6031 6.0829 20.7594C5.65085 20.9287 5.1777 20.9181 4.71965 20.6873C3.03991 19.8412 1.09337 18.4937 1.25973 15.8864C1.48688 12.3265 2.15678 9.69712 2.74104 8.13707C3.10415 7.16753 3.89685 6.42499 4.92505 6.17624ZM9.70686 9.41789C10.0974 9.80842 10.0974 10.4416 9.70686 10.8321L8.91397 11.625L9.70686 12.4179C10.0974 12.8084 10.0974 13.4416 9.70686 13.8321C9.31634 14.2226 8.68317 14.2226 8.29265 13.8321L7.49976 13.0392L6.70686 13.8321C6.31634 14.2226 5.68317 14.2226 5.29265 13.8321C4.90213 13.4416 4.90213 12.8084 5.29265 12.4179L6.08554 11.625L5.29265 10.8321C4.90212 10.4416 4.90212 9.80842 5.29265 9.41789C5.68317 9.02737 6.31634 9.02737 6.70686 9.41789L7.49976 10.2108L8.29265 9.41789C8.68317 9.02737 9.31634 9.02737 9.70686 9.41789ZM15.997 11.125H15.988C15.4358 11.125 14.988 10.6773 14.988 10.125C14.988 9.57272 15.4358 9.125 15.988 9.125H15.997C16.5493 9.125 16.997 9.57272 16.997 10.125C16.997 10.6773 16.5493 11.125 15.997 11.125ZM16.988 13.125C16.988 12.5727 17.4358 12.125 17.988 12.125H17.997C18.5493 12.125 18.997 12.5727 18.997 13.125C18.997 13.6773 18.5493 14.125 17.997 14.125H17.988C17.4358 14.125 16.988 13.6773 16.988 13.125Z',
  d8: 'M4.92505 6.17624C9.34097 5.10792 14.659 5.10792 19.0749 6.17624C20.1031 6.42499 20.8958 7.16753 21.2589 8.13707C21.8432 9.69712 22.5131 12.3265 22.7402 15.8864C22.9054 18.4746 20.9807 19.8308 19.2803 20.6873C18.8223 20.9181 18.3491 20.9287 17.917 20.7594C17.5185 20.6031 17.2028 20.3135 16.96 20.0252C16.4777 19.4523 16.1003 18.6589 15.8299 18.0495C15.6562 17.658 15.2778 17.4106 14.828 17.4106H9.17191C8.72214 17.4106 8.34373 17.658 8.17007 18.0495C7.8997 18.6589 7.52229 19.4523 7.03996 20.0252C6.79717 20.3135 6.48147 20.6031 6.0829 20.7594C5.65085 20.9287 5.1777 20.9181 4.71965 20.6873C3.03991 19.8412 1.09337 18.4937 1.25973 15.8864C1.48688 12.3265 2.15678 9.69712 2.74104 8.13707C3.10415 7.16753 3.89685 6.42499 4.92505 6.17624Z',
  d9: 'M9.70686 9.41789C10.0974 9.80842 10.0974 10.4416 9.70686 10.8321L8.91397 11.625L9.70686 12.4179C10.0974 12.8084 10.0974 13.4416 9.70686 13.8321C9.31634 14.2226 8.68317 14.2226 8.29265 13.8321L7.49976 13.0392L6.70686 13.8321C6.31634 14.2226 5.68317 14.2226 5.29265 13.8321C4.90213 13.4416 4.90213 12.8084 5.29265 12.4179L6.08554 11.625L5.29265 10.8321C4.90212 10.4416 4.90212 9.80842 5.29265 9.41789C5.68317 9.02737 6.31634 9.02737 6.70686 9.41789L7.49976 10.2108L8.29265 9.41789C8.68317 9.02737 9.31634 9.02737 9.70686 9.41789Z',
  d10: 'M15.988 9.125C15.4358 9.125 14.988 9.57272 14.988 10.125C14.988 10.6773 15.4358 11.125 15.988 11.125H15.997C16.5493 11.125 16.997 10.6773 16.997 10.125C16.997 9.57272 16.5493 9.125 15.997 9.125H15.988ZM17.988 12.125C17.4358 12.125 16.988 12.5727 16.988 13.125C16.988 13.6773 17.4358 14.125 17.988 14.125H17.997C18.5493 14.125 18.997 13.6773 18.997 13.125C18.997 12.5727 18.5493 12.125 17.997 12.125H17.988Z',
  d11: 'M2.00445 15.8088C2.22742 12.3152 2.8839 9.75874 3.44018 8.27375C3.72102 7.52405 4.32523 6.96576 5.09879 6.77866C9.3913 5.74045 14.6085 5.74045 18.901 6.77866C19.6746 6.96576 20.2788 7.52405 20.5596 8.27375C21.1159 9.75874 21.7724 12.3152 21.9954 15.8088C22.1275 17.8797 19.408 19.148 17.7163 20L15.5736 16.2877H8.42811L6.40693 20C4.71518 19.148 1.87228 17.8797 2.00445 15.8088Z',
  d12: 'M4 4.5L6.96285 4M20 4.5L17 4',
  d13: 'M17.123 3.00024L20.123 3.50024L19.8764 4.97983L16.8764 4.47983L17.123 3.00024ZM7.08733 4.47957L4.12448 4.97957L3.87488 3.50049L6.83773 3.00049L7.08733 4.47957Z',
  d14: 'M19.0772 6.0531C14.6688 4.98686 9.33074 4.98686 4.92235 6.0531C3.89393 6.30184 3.10096 7.0444 2.73772 8.01407C2.15324 9.57433 1.48309 12.2041 1.25585 15.7644C1.16469 17.1929 2.11098 18.2411 3.07025 18.9639C3.91999 19.6042 4.95194 20.1171 5.74074 20.5092C5.85594 20.5665 5.96597 20.6211 6.06947 20.6733L6.71819 21L8.8736 17.0411H15.1404L17.4207 20.9919L18.0535 20.6733C18.1255 20.637 18.2004 20.5995 18.2777 20.5608C19.079 20.1597 20.1377 19.6296 21.001 18.9563C21.9379 18.2253 22.8339 17.1782 22.7437 15.7644C22.5165 12.2041 21.8463 9.57433 21.2618 8.01407C20.8986 7.0444 20.1056 6.30184 19.0772 6.0531ZM5.47046 12.4731L6.44013 11.5035L5.47046 10.5338L6.53112 9.47314L7.50079 10.4428L8.47046 9.47314L9.53112 10.5338L8.56145 11.5035L9.53112 12.4731L8.47046 13.5338L7.50079 12.5641L6.53112 13.5338L5.47046 12.4731ZM15.238 9.25342H16.747V10.7534H15.238V9.25342ZM18.747 12.2534H17.238V13.7534H18.747V12.2534Z',
} as const;

export const IconGameController03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-03-stroke-rounded IconGameController03StrokeRounded"
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

export const IconGameController03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-03-duotone-rounded IconGameController03DuotoneRounded"
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

export const IconGameController03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-03-twotone-rounded IconGameController03TwotoneRounded"
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

export const IconGameController03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-03-solid-rounded IconGameController03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconGameController03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-03-bulk-rounded IconGameController03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconGameController03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-03-stroke-sharp IconGameController03StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGameController03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="game-controller-03-solid-sharp IconGameController03SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfGameController03: TheIconSelfPack = {
  name: 'GameController03',
  StrokeRounded: IconGameController03StrokeRounded,
  DuotoneRounded: IconGameController03DuotoneRounded,
  TwotoneRounded: IconGameController03TwotoneRounded,
  SolidRounded: IconGameController03SolidRounded,
  BulkRounded: IconGameController03BulkRounded,
  StrokeSharp: IconGameController03StrokeSharp,
  SolidSharp: IconGameController03SolidSharp,
};