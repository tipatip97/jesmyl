import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 9L16.5218 18.4136C16.2728 19.9992 16.1483 20.7921 15.5864 21.2644C14.3865 22.273 9.54699 22.217 8.41358 21.2644C7.85167 20.7921 7.72718 19.9992 7.47819 18.4136L6 9',
  d2: 'M6 9L6.51444 7.71391C7.41167 5.47084 9.58414 4 12 4C14.4159 4 16.5883 5.47084 17.4856 7.71391L18 9',
  d3: 'M5 9H19',
  d4: 'M13 9L16 2',
  d5: 'M10.0089 16.5H10M14 18H13.9911M13.0112 14H13.0023',
  d6: 'M16.5218 18.4136L18 9H6L7.47819 18.4136C7.72718 19.9992 7.85167 20.7921 8.41358 21.2644C9.54699 22.217 14.3865 22.273 15.5864 21.2644C16.1483 20.7921 16.2728 19.9992 16.5218 18.4136Z',
  d7: 'M5.9767 10C5.99206 10.0004 6.00739 10.0004 6.02268 10H17.9773C17.9926 10.0004 18.0079 10.0004 18.0233 10H19C19.5523 10 20 9.55228 20 9C20 8.44772 19.5523 8 19 8H18.677L18.414 7.34252C17.3649 4.71979 14.8248 3 12 3C9.17523 3 6.63505 4.71979 5.58596 7.34252L5.32297 8H5C4.44772 8 4 8.44772 4 9C4 9.55228 4.44772 10 5 10H5.9767ZM7.47796 8H16.522C15.7563 6.18469 13.9762 5 12 5C10.0238 5 8.2437 6.18468 7.47796 8Z',
  d8: 'M16.3957 1.08142C16.9033 1.29897 17.1385 1.88685 16.9209 2.39448L13.9209 9.39448C13.7034 9.90211 13.1155 10.1373 12.6079 9.91971C12.1002 9.70215 11.8651 9.11428 12.0826 8.60665L15.0826 1.60665C15.3002 1.09902 15.8881 0.863864 16.3957 1.08142Z',
  d9: 'M6.00001 8.25C5.78077 8.25 5.57251 8.34592 5.43002 8.51254C5.28753 8.67915 5.22508 8.89977 5.25908 9.11634L6.74466 18.577L6.74467 18.577L6.74467 18.577C6.86283 19.3297 6.96244 19.9642 7.10839 20.466C7.26364 20.9997 7.49442 21.4715 7.93101 21.8385C8.36979 22.2073 9.04862 22.4169 9.69993 22.5442C10.3873 22.6785 11.1842 22.7462 11.9716 22.7498C12.7587 22.7535 13.5611 22.6933 14.2589 22.5606C14.9237 22.4343 15.6139 22.221 16.069 21.8385C16.5056 21.4715 16.7364 20.9997 16.8916 20.466C17.0376 19.9642 17.1372 19.3298 17.2553 18.5772L17.2553 18.5771L17.2553 18.577L18.7409 9.11634C18.7749 8.89977 18.7125 8.67915 18.57 8.51254C18.4275 8.34592 18.2192 8.25 18 8.25L6.00001 8.25ZM13.0023 13C12.45 13 12.0023 13.4477 12.0023 14C12.0023 14.5523 12.45 15 13.0023 15H13.0112C13.5635 15 14.0112 14.5523 14.0112 14C14.0112 13.4477 13.5635 13 13.0112 13H13.0023ZM10 15.5C9.44772 15.5 9 15.9477 9 16.5C9 17.0523 9.44772 17.5 10 17.5H10.0089C10.5612 17.5 11.0089 17.0523 11.0089 16.5C11.0089 15.9477 10.5612 15.5 10.0089 15.5H10ZM13.9911 17C13.4388 17 12.9911 17.4477 12.9911 18C12.9911 18.5523 13.4388 19 13.9911 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H13.9911Z',
  d10: 'M5.43002 8.51254C5.57251 8.34592 5.78077 8.25 6.00001 8.25H18C18.2192 8.25 18.4275 8.34592 18.57 8.51254C18.7125 8.67915 18.7749 8.89977 18.7409 9.11634L17.2553 18.577L17.2553 18.5771C17.1372 19.3297 17.0376 19.9642 16.8916 20.466C16.7364 20.9997 16.5056 21.4715 16.069 21.8385C15.6139 22.221 14.9237 22.4343 14.2589 22.5606C13.5611 22.6933 12.7587 22.7535 11.9716 22.7498C11.1842 22.7462 10.3873 22.6785 9.69993 22.5442C9.04862 22.4169 8.36979 22.2073 7.93101 21.8385C7.49442 21.4715 7.26364 20.9997 7.10839 20.466C6.96244 19.9642 6.86283 19.3297 6.74467 18.577L6.74466 18.577L5.25908 9.11634C5.22508 8.89977 5.28753 8.67915 5.43002 8.51254Z',
  d11: 'M12.0023 14C12.0023 13.4477 12.45 13 13.0023 13H13.0112C13.5635 13 14.0112 13.4477 14.0112 14C14.0112 14.5523 13.5635 15 13.0112 15H13.0023C12.45 15 12.0023 14.5523 12.0023 14ZM9 16.5C9 15.9477 9.44772 15.5 10 15.5H10.0089C10.5612 15.5 11.0089 15.9477 11.0089 16.5C11.0089 17.0523 10.5612 17.5 10.0089 17.5H10C9.44772 17.5 9 17.0523 9 16.5ZM12.9911 18C12.9911 17.4477 13.4388 17 13.9911 17H14C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H13.9911C13.4388 19 12.9911 18.5523 12.9911 18Z',
  d12: 'M18 9L16.5 22H7.5L6 9',
  d13: 'M4 9H20',
  d14: 'M12.0001 4.75C9.89088 4.75 7.99419 6.03412 7.21086 7.99245L6.69643 9.27854L5.30371 8.72146L5.81815 7.43536C6.82927 4.90755 9.27753 3.25 12.0001 3.25C14.7226 3.25 17.1709 4.90755 18.182 7.43536L18.6964 8.72146L17.3037 9.27854L16.7893 7.99245C16.0059 6.03412 14.1093 4.75 12.0001 4.75Z',
  d15: 'M20 9.75H4V8.25H20V9.75Z',
  d16: 'M16.6893 1.84088L13.6893 8.84088L12.3105 8.25L15.3105 1.25L16.6893 1.84088Z',
  d17: 'M6 8.25C5.78612 8.25 5.58241 8.34132 5.4401 8.50099C5.2978 8.66066 5.23043 8.87349 5.25495 9.08597L6.75495 22.086C6.79861 22.4644 7.11905 22.75 7.5 22.75H16.5C16.881 22.75 17.2014 22.4644 17.2451 22.086L18.7451 9.08597C18.7696 8.87349 18.7022 8.66066 18.5599 8.50099C18.4176 8.34132 18.2139 8.25 18 8.25H6ZM13.0023 13C12.45 13 12.0023 13.4477 12.0023 14C12.0023 14.5523 12.45 15 13.0023 15H13.0112C13.5635 15 14.0112 14.5523 14.0112 14C14.0112 13.4477 13.5635 13 13.0112 13H13.0023ZM10 15.5C9.44772 15.5 9 15.9477 9 16.5C9 17.0523 9.44772 17.5 10 17.5H10.0089C10.5612 17.5 11.0089 17.0523 11.0089 16.5C11.0089 15.9477 10.5612 15.5 10.0089 15.5H10ZM13.9911 17C13.4388 17 12.9911 17.4477 12.9911 18C12.9911 18.5523 13.4388 19 13.9911 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H13.9911Z',
} as const;

export const IconBubbleTea01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-tea-01-stroke-rounded IconBubbleTea01StrokeRounded"
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

export const IconBubbleTea01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-tea-01-duotone-rounded IconBubbleTea01DuotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconBubbleTea01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-tea-01-twotone-rounded IconBubbleTea01TwotoneRounded"
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

export const IconBubbleTea01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-tea-01-solid-rounded IconBubbleTea01SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleTea01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-tea-01-bulk-rounded IconBubbleTea01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBubbleTea01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-tea-01-stroke-sharp IconBubbleTea01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconBubbleTea01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bubble-tea-01-solid-sharp IconBubbleTea01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfBubbleTea01: TheIconSelfPack = {
  name: 'BubbleTea01',
  StrokeRounded: IconBubbleTea01StrokeRounded,
  DuotoneRounded: IconBubbleTea01DuotoneRounded,
  TwotoneRounded: IconBubbleTea01TwotoneRounded,
  SolidRounded: IconBubbleTea01SolidRounded,
  BulkRounded: IconBubbleTea01BulkRounded,
  StrokeSharp: IconBubbleTea01StrokeSharp,
  SolidSharp: IconBubbleTea01SolidSharp,
};