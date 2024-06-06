import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 16C16.6161 16 17.1155 15.4883 17.1155 14.8571V13.6162C17.1155 13.3131 17.233 13.0224 17.4422 12.8081L17.8366 12.4041C18.0545 12.1809 18.0545 11.8191 17.8366 11.5959L17.4422 11.1919C17.233 10.9776 17.1155 10.6869 17.1155 10.3838V9.14286C17.1155 8.51167 16.6161 8 16 8',
  d2: 'M8 16C7.38392 16 6.88448 15.4883 6.88448 14.8571V13.6162C6.88448 13.3131 6.76696 13.0224 6.55776 12.8081L6.16336 12.4041C5.94555 12.1809 5.94555 11.8191 6.16336 11.5959L6.55776 11.1919C6.76696 10.9776 6.88448 10.6869 6.88448 10.3838V9.14286C6.88448 8.51167 7.38392 8 8 8',
  d3: 'M9.99976 12H10.0087M13.9908 12H13.9998',
  d4: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16 7.25C15.5858 7.25 15.25 7.58579 15.25 8C15.25 8.41421 15.5858 8.75 16 8.75C16.1849 8.75 16.3655 8.90866 16.3655 9.14286V10.3838C16.3655 10.88 16.5578 11.3595 16.9055 11.7157L17.183 12L16.9055 12.2843C16.5578 12.6405 16.3655 13.12 16.3655 13.6162V14.8571C16.3655 15.0913 16.1849 15.25 16 15.25C15.5858 15.25 15.25 15.5858 15.25 16C15.25 16.4142 15.5858 16.75 16 16.75C17.0473 16.75 17.8655 15.8853 17.8655 14.8571V13.6162C17.8655 13.5063 17.9083 13.4044 17.979 13.332L18.3733 12.9279C18.8755 12.4134 18.8756 11.5866 18.3733 11.0721L17.979 10.668C17.9083 10.5956 17.8655 10.4937 17.8655 10.3838V9.14286C17.8655 8.11469 17.0473 7.25 16 7.25ZM8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C6.95269 7.25 6.13448 8.11469 6.13448 9.14286V10.3838C6.13448 10.4937 6.09167 10.5956 6.02105 10.668L5.62665 11.0721C5.12445 11.5866 5.12445 12.4134 5.62665 12.9279L6.02105 13.332C6.09167 13.4044 6.13448 13.5063 6.13448 13.6162V14.8571C6.13448 15.8853 6.95269 16.75 8 16.75C8.41421 16.75 8.75 16.4142 8.75 16C8.75 15.5858 8.41421 15.25 8 15.25C7.81515 15.25 7.63448 15.0913 7.63448 14.8571V13.6162C7.63448 13.12 7.44224 12.6405 7.09447 12.2843L6.81702 12L7.09447 11.7157C7.44224 11.3595 7.63448 10.88 7.63448 10.3838V9.14286C7.63448 8.90866 7.81515 8.75 8 8.75C8.41421 8.75 8.75 8.41421 8.75 8ZM10 11C9.44771 11 9 11.4477 9 12C9 12.5523 9.44771 13 10 13H10.009C10.5612 13 11.009 12.5523 11.009 12C11.009 11.4477 10.5612 11 10.009 11H10ZM13.991 11C13.4388 11 12.991 11.4477 12.991 12C12.991 12.5523 13.4388 13 13.991 13H14C14.5523 13 15 12.5523 15 12C15 11.4477 14.5523 11 14 11H13.991Z',
  d5: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d6: 'M15.25 8C15.25 7.58579 15.5858 7.25 16 7.25C17.0473 7.25 17.8655 8.11469 17.8655 9.14286V10.3838C17.8655 10.4937 17.9083 10.5956 17.979 10.668L18.3733 11.0721C18.8756 11.5866 18.8755 12.4134 18.3733 12.9279L17.979 13.332L17.4422 12.8081L17.979 13.332C17.9083 13.4044 17.8655 13.5063 17.8655 13.6162V14.8571C17.8655 15.8853 17.0473 16.75 16 16.75C15.5858 16.75 15.25 16.4142 15.25 16C15.25 15.5858 15.5858 15.25 16 15.25C16.1849 15.25 16.3655 15.0913 16.3655 14.8571V13.6162C16.3655 13.12 16.5578 12.6405 16.9055 12.2843L17.183 12L16.9055 11.7157C16.5578 11.3595 16.3655 10.88 16.3655 10.3838V9.14286C16.3655 8.90866 16.1849 8.75 16 8.75C15.5858 8.75 15.25 8.41421 15.25 8Z',
  d7: 'M8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C6.95269 7.25 6.13448 8.11469 6.13448 9.14286V10.3838C6.13448 10.4937 6.09167 10.5956 6.02105 10.668L5.62665 11.0721C5.12445 11.5866 5.12445 12.4134 5.62665 12.9279L6.02105 13.332L6.55776 12.8081L6.02105 13.332C6.09167 13.4044 6.13448 13.5063 6.13448 13.6162V14.8571C6.13448 15.8853 6.95269 16.75 8 16.75C8.41421 16.75 8.75 16.4142 8.75 16C8.75 15.5858 8.41421 15.25 8 15.25C7.81515 15.25 7.63448 15.0913 7.63448 14.8571V13.6162C7.63448 13.12 7.44224 12.6405 7.09447 12.2843L6.81702 12L7.09447 11.7157C7.44224 11.3595 7.63448 10.88 7.63448 10.3838V9.14286C7.63448 8.90866 7.81515 8.75 8 8.75C8.41421 8.75 8.75 8.41421 8.75 8Z',
  d8: 'M9 12C9 11.4477 9.44772 11 10 11H10.009C10.5612 11 11.009 11.4477 11.009 12C11.009 12.5523 10.5612 13 10.009 13H10C9.44772 13 9 12.5523 9 12ZM12.991 12C12.991 11.4477 13.4388 11 13.991 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H13.991C13.4388 13 12.991 12.5523 12.991 12Z',
  d9: 'M15.5 8H17V11L18 12L17 13V16H15.5',
  d10: 'M8.5 8H7V11L6 12L7 13V16H8.5',
  d11: 'M10 12H10.009M13.991 12H14',
  d12: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM15.5 8.75H16.25V11C16.25 11.1989 16.329 11.3897 16.4697 11.5303L16.9393 12L16.4697 12.4697C16.329 12.6103 16.25 12.8011 16.25 13V15.25H15.5V16.75H17C17.4142 16.75 17.75 16.4142 17.75 16V13.3107L18.5303 12.5303C18.8232 12.2374 18.8232 11.7626 18.5303 11.4697L17.75 10.6893V8C17.75 7.58579 17.4142 7.25 17 7.25H15.5V8.75ZM6.25 8C6.25 7.58579 6.58579 7.25 7 7.25H8.5V8.75H7.75V11C7.75 11.1989 7.67098 11.3897 7.53033 11.5303L7.06066 12L7.53033 12.4697C7.67098 12.6103 7.75 12.8011 7.75 13V15.25H8.5V16.75H7C6.58579 16.75 6.25 16.4142 6.25 16V13.3107L5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L6.25 10.6893V8ZM10.759 11.25H9.25V12.75H10.759V11.25ZM14.75 11.25H13.241V12.75H14.75V11.25Z',
} as const;

export const IconCodeCircleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="code-circle-stroke-rounded IconCodeCircleStrokeRounded"
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
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconCodeCircleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="code-circle-duotone-rounded IconCodeCircleDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
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
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconCodeCircleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="code-circle-twotone-rounded IconCodeCircleTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconCodeCircleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="code-circle-solid-rounded IconCodeCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCodeCircleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="code-circle-bulk-rounded IconCodeCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCodeCircleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="code-circle-stroke-sharp IconCodeCircleStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconCodeCircleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="code-circle-solid-sharp IconCodeCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCodeCircle: TheIconSelfPack = {
  name: 'CodeCircle',
  StrokeRounded: IconCodeCircleStrokeRounded,
  DuotoneRounded: IconCodeCircleDuotoneRounded,
  TwotoneRounded: IconCodeCircleTwotoneRounded,
  SolidRounded: IconCodeCircleSolidRounded,
  BulkRounded: IconCodeCircleBulkRounded,
  StrokeSharp: IconCodeCircleStrokeSharp,
  SolidSharp: IconCodeCircleSolidSharp,
};