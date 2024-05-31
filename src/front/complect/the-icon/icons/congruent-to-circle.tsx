import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.5 12.5022H16.5M7.5 16H16.5M7.5 9.50402C8.4 7.64165 10.5 7.54875 12 9.00431M16.5 8.49966C15.6 10.362 13.5 10.4549 12 8.99937',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.40061 9.93924C8.70802 9.3031 9.16286 9.04661 9.61466 9.00605C10.0988 8.96257 10.7231 9.15854 11.3038 9.72208C11.3269 9.74446 11.3508 9.76551 11.3753 9.78522C12.2836 10.6338 13.4288 11.0918 14.5647 10.9898C15.7629 10.8823 16.808 10.1611 17.4006 8.93488C17.6409 8.43762 17.4326 7.8397 16.9353 7.5994C16.4381 7.35909 15.8402 7.5674 15.5999 8.06466C15.2924 8.7008 14.8376 8.95729 14.3858 8.99786C13.9017 9.04133 13.2774 8.84537 12.6966 8.28182C12.6736 8.25944 12.6497 8.2384 12.6251 8.21869C11.7168 7.37015 10.5716 6.91207 9.4358 7.01406C8.2376 7.12164 7.19244 7.84279 6.59985 9.06902C6.35955 9.56628 6.56785 10.1642 7.06512 10.4045C7.56238 10.6448 8.1603 10.4365 8.40061 9.93924ZM7.50023 12.0001C6.94794 12.0001 6.50023 12.4478 6.50023 13.0001C6.50023 13.5524 6.94794 14.0001 7.50023 14.0001H16.5002C17.0525 14.0001 17.5002 13.5524 17.5002 13.0001C17.5002 12.4478 17.0525 12.0001 16.5002 12.0001H7.50023ZM7.50023 15.0001C6.94794 15.0001 6.50023 15.4478 6.50023 16.0001C6.50023 16.5524 6.94794 17.0001 7.50023 17.0001H16.5002C17.0525 17.0001 17.5002 16.5524 17.5002 16.0001C17.5002 15.4478 17.0525 15.0001 16.5002 15.0001H7.50023Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M9.61466 9.00605C9.16286 9.04661 8.70802 9.3031 8.40061 9.93924C8.1603 10.4365 7.56238 10.6448 7.06512 10.4045C6.56785 10.1642 6.35955 9.56628 6.59985 9.06902C7.19244 7.84279 8.2376 7.12164 9.4358 7.01406C10.5716 6.91207 11.7168 7.37015 12.6251 8.21869C12.6497 8.2384 12.6736 8.25944 12.6966 8.28182C13.2774 8.84537 13.9017 9.04133 14.3858 8.99786C14.8376 8.95729 15.2924 8.7008 15.5999 8.06466C15.8402 7.5674 16.4381 7.35909 16.9353 7.5994C17.4326 7.8397 17.6409 8.43762 17.4006 8.93488C16.808 10.1611 15.7629 10.8823 14.5647 10.9898C13.4288 11.0918 12.2836 10.6338 11.3753 9.78522C11.3508 9.76551 11.3269 9.74446 11.3038 9.72208C10.7231 9.15854 10.0988 8.96257 9.61466 9.00605ZM6.50023 13.0001C6.50023 12.4478 6.94794 12.0001 7.50023 12.0001H16.5002C17.0525 12.0001 17.5002 12.4478 17.5002 13.0001C17.5002 13.5524 17.0525 14.0001 16.5002 14.0001H7.50023C6.94794 14.0001 6.50023 13.5524 6.50023 13.0001ZM6.50023 16.0001C6.50023 15.4478 6.94794 15.0001 7.50023 15.0001H16.5002C17.0525 15.0001 17.5002 15.4478 17.5002 16.0001C17.5002 16.5524 17.0525 17.0001 16.5002 17.0001H7.50023C6.94794 17.0001 6.50023 16.5524 6.50023 16.0001Z',
  d5: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.40036 9.43924C8.70778 8.8031 9.16262 8.54661 9.61441 8.50605C10.0986 8.46257 10.7228 8.65854 11.3036 9.22208L11.3061 9.21954C12.2249 10.11 13.3996 10.5944 14.5644 10.4898C15.7626 10.3823 16.8078 9.66112 17.4004 8.43488L15.5996 7.56466C15.2922 8.2008 14.8374 8.45729 14.3856 8.49786C13.9014 8.54133 13.2771 8.34537 12.6964 7.78182L12.6939 7.78437C11.775 6.89388 10.6004 6.40947 9.43556 6.51406C8.23736 6.62164 7.19219 7.34279 6.59961 8.56902L8.40036 9.43924ZM7.49999 14.0023H16.5V12.0023H7.49999V14.0023ZM7.49999 17.5001H16.5V15.5001H7.49999V17.5001Z',
} as const;

export const IconCongruentToCircleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="congruent-to-circle-stroke-rounded IconCongruentToCircleStrokeRounded"
    >
      <path 
        d={d.d1} 
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

export const IconCongruentToCircleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="congruent-to-circle-duotone-rounded IconCongruentToCircleDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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

export const IconCongruentToCircleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="congruent-to-circle-twotone-rounded IconCongruentToCircleTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconCongruentToCircleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="congruent-to-circle-solid-rounded IconCongruentToCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCongruentToCircleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="congruent-to-circle-bulk-rounded IconCongruentToCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCongruentToCircleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="congruent-to-circle-stroke-sharp IconCongruentToCircleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconCongruentToCircleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="congruent-to-circle-solid-sharp IconCongruentToCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCongruentToCircle: TheIconSelfPack = {
  name: 'CongruentToCircle',
  StrokeRounded: IconCongruentToCircleStrokeRounded,
  DuotoneRounded: IconCongruentToCircleDuotoneRounded,
  TwotoneRounded: IconCongruentToCircleTwotoneRounded,
  SolidRounded: IconCongruentToCircleSolidRounded,
  BulkRounded: IconCongruentToCircleBulkRounded,
  StrokeSharp: IconCongruentToCircleStrokeSharp,
  SolidSharp: IconCongruentToCircleSolidSharp,
};