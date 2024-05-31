import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 12C7.5 12 12 7.5 12 3C12 7.5 16.5 12 21 12C16.5 12 12 16.5 12 21C12 16.5 7.5 12 3 12Z',
  d2: 'M2 19.5C2.83333 19.5 4.5 17.8333 4.5 17C4.5 17.8333 6.16667 19.5 7 19.5C6.16667 19.5 4.5 21.1667 4.5 22C4.5 21.1667 2.83333 19.5 2 19.5Z',
  d3: 'M16 5C17 5 19 3 19 2C19 3 21 5 22 5C21 5 19 7 19 8C19 7 17 5 16 5Z',
  d4: 'M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3C12.75 5.00608 13.7606 7.07493 15.3428 8.65717C16.9251 10.2394 18.9939 11.25 21 11.25C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75C18.9939 12.75 16.9251 13.7606 15.3428 15.3428C13.7606 16.9251 12.75 18.9939 12.75 21C12.75 21.4142 12.4142 21.75 12 21.75C11.5858 21.75 11.25 21.4142 11.25 21C11.25 18.9939 10.2394 16.9251 8.65717 15.3428C7.07493 13.7606 5.00608 12.75 3 12.75C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25C5.00608 11.25 7.07493 10.2394 8.65717 8.65717C10.2394 7.07493 11.25 5.00608 11.25 3C11.25 2.58579 11.5858 2.25 12 2.25Z',
  d5: 'M19.25 1.25C19.4635 1.25 19.6484 1.39794 19.6954 1.6062L19.9296 2.64601C20.0895 3.35601 20.644 3.91047 21.354 4.07041L22.3938 4.30464C22.6021 4.35155 22.75 4.53652 22.75 4.75C22.75 4.96348 22.6021 5.14845 22.3938 5.19536L21.354 5.42959C20.644 5.58953 20.0895 6.14398 19.9296 6.85398L19.6954 7.8938C19.6484 8.10206 19.4635 8.25 19.25 8.25C19.0365 8.25 18.8516 8.10206 18.8046 7.8938L18.5704 6.85398C18.4105 6.14398 17.856 5.58953 17.146 5.42959L16.1062 5.19536C15.8979 5.14845 15.75 4.96348 15.75 4.75C15.75 4.53652 15.8979 4.35155 16.1062 4.30464L17.146 4.07041C17.856 3.91047 18.4105 3.35602 18.5704 2.64601L18.8046 1.6062C18.8516 1.39794 19.0365 1.25 19.25 1.25Z',
  d6: 'M4.75 15.75C4.96348 15.75 5.14845 15.8979 5.19536 16.1062L5.42959 17.146C5.58953 17.856 6.14398 18.4105 6.85398 18.5704L7.8938 18.8046C8.10206 18.8516 8.25 19.0365 8.25 19.25C8.25 19.4635 8.10206 19.6484 7.8938 19.6954L6.85398 19.9296C6.14398 20.0895 5.58953 20.644 5.42959 21.354L5.19536 22.3938C5.14845 22.6021 4.96348 22.75 4.75 22.75C4.53652 22.75 4.35155 22.6021 4.30464 22.3938L4.07041 21.354C3.91047 20.644 3.35602 20.0895 2.64601 19.9296L1.6062 19.6954C1.39794 19.6484 1.25 19.4635 1.25 19.25C1.25 19.0365 1.39794 18.8516 1.6062 18.8046L2.64601 18.5704C3.35602 18.4105 3.91047 17.856 4.07041 17.146L4.30464 16.1062C4.35155 15.8979 4.53652 15.75 4.75 15.75Z',
  d7: 'M4.5 16.25C4.91421 16.25 5.25 16.5858 5.25 17L5.25041 17.0016C5.25348 17.0167 5.27659 17.1301 5.41114 17.3474C5.54393 17.5619 5.73931 17.8037 5.96783 18.0322C6.19635 18.2607 6.43807 18.4561 6.65258 18.5889C6.86993 18.7234 6.98333 18.7465 6.99841 18.7496L7 18.75C7.41421 18.75 7.75 19.0858 7.75 19.5C7.75 19.9142 7.41421 20.25 7 20.25L6.99841 20.2504C6.98333 20.2535 6.86993 20.2766 6.65258 20.4111C6.43807 20.5439 6.19635 20.7393 5.96783 20.9678C5.73931 21.1963 5.54393 21.4381 5.41114 21.6526C5.27659 21.8699 5.25348 21.9833 5.25041 21.9984L5.25 22C5.25 22.4142 4.91421 22.75 4.5 22.75C4.08579 22.75 3.75 22.4142 3.75 22L3.74959 21.9984C3.74652 21.9833 3.72341 21.8699 3.58886 21.6526C3.45608 21.4381 3.26069 21.1963 3.03217 20.9678C2.80365 20.7393 2.56193 20.5439 2.34742 20.4111C2.13007 20.2766 2.01667 20.2535 2.00159 20.2504L2 20.25C1.58579 20.25 1.25 19.9142 1.25 19.5C1.25 19.0858 1.58579 18.75 2 18.75L2.00159 18.7496C2.01667 18.7465 2.13007 18.7234 2.34742 18.5889C2.56193 18.4561 2.80365 18.2607 3.03217 18.0322C3.26069 17.8037 3.45608 17.5619 3.58886 17.3474C3.72341 17.1301 3.74652 17.0167 3.74959 17.0016L3.75 17C3.75 16.5858 4.08579 16.25 4.5 16.25Z',
  d8: 'M19.5 1.25C19.9142 1.25 20.25 1.58579 20.25 2L20.2504 2.00159C20.2535 2.01667 20.2766 2.13007 20.4111 2.34742C20.5439 2.56193 20.7393 2.80365 20.9678 3.03217C21.1963 3.26069 21.4381 3.45608 21.6526 3.58886C21.8699 3.72341 21.9833 3.74652 21.9984 3.74959L22 3.75C22.4142 3.75 22.75 4.08579 22.75 4.5C22.75 4.91421 22.4142 5.25 22 5.25L21.9984 5.25041C21.9833 5.25348 21.8699 5.27659 21.6526 5.41114C21.4381 5.54393 21.1963 5.73931 20.9678 5.96783C20.7393 6.19635 20.5439 6.43807 20.4111 6.65258C20.2766 6.86993 20.2535 6.98333 20.2504 6.99841L20.25 7C20.25 7.41421 19.9142 7.75 19.5 7.75C19.0858 7.75 18.75 7.41421 18.75 7L18.7496 6.99841C18.7465 6.98333 18.7234 6.86993 18.5889 6.65258C18.4561 6.43807 18.2607 6.19635 18.0322 5.96783C17.8037 5.73931 17.5619 5.54393 17.3474 5.41114C17.1301 5.27659 17.0167 5.25348 17.0016 5.25041L17 5.25C16.5858 5.25 16.25 4.91421 16.25 4.5C16.25 4.08579 16.5858 3.75 17 3.75L17.0016 3.74959C17.0167 3.74652 17.1301 3.72341 17.3474 3.58886C17.5619 3.45608 17.8037 3.26069 18.0322 3.03217C18.2607 2.80365 18.4561 2.56193 18.5889 2.34742C18.7234 2.13007 18.7465 2.01667 18.7496 2.00159L18.75 2C18.75 1.58579 19.0858 1.25 19.5 1.25Z',
} as const;

export const IconStarsStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stars-stroke-rounded IconStarsStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStarsDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stars-duotone-rounded IconStarsDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStarsTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stars-twotone-rounded IconStarsTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStarsSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stars-solid-rounded IconStarsSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStarsBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stars-bulk-rounded IconStarsBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStarsStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stars-stroke-sharp IconStarsStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStarsSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="stars-solid-sharp IconStarsSolidSharp"
    >
      <path 
        d={d.d4} 
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

export const iconPackOfStars: TheIconSelfPack = {
  name: 'Stars',
  StrokeRounded: IconStarsStrokeRounded,
  DuotoneRounded: IconStarsDuotoneRounded,
  TwotoneRounded: IconStarsTwotoneRounded,
  SolidRounded: IconStarsSolidRounded,
  BulkRounded: IconStarsBulkRounded,
  StrokeSharp: IconStarsStrokeSharp,
  SolidSharp: IconStarsSolidSharp,
};