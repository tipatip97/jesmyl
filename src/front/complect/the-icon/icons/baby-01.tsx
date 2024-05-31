import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 16C13.4271 16.6318 12.7395 17 12 17C11.2605 17 10.5729 16.6318 10 16',
  d2: 'M9 11.5C8.71357 11.1841 8.36974 11 8 11C7.63026 11 7.28643 11.1841 7 11.5',
  d3: 'M17 11.5C16.7136 11.1841 16.3697 11 16 11C15.6303 11 15.2864 11.1841 15 11.5',
  d4: 'M12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8C12.7684 8 13.4692 7.71115 14 7.23611',
  d5: 'M10.5036 2.74762C9.86709 3.32441 9.75 4.05317 9.75 4.81317C9.75 6.05581 10.7574 7.2497 12 7.2497C12.5767 7.2497 13.1012 7.03368 13.4998 6.67695C13.8085 6.40071 14.2826 6.42697 14.5589 6.73562C14.8351 7.04426 14.8088 7.51841 14.5002 7.79465C13.8372 8.38801 12.96 8.7497 12 8.7497C9.92893 8.7497 8.25 6.88424 8.25 4.81317C8.25 3.91632 8.38291 2.64508 9.49639 1.63609C9.64688 1.49971 9.81238 1.37083 9.99404 1.25C5.01564 2.18963 1.25 6.74816 1.25 11.9997C1.25 17.9368 6.06294 22.7497 12 22.7497C17.9371 22.7497 22.75 17.9368 22.75 11.9997C22.75 7.19701 19.6005 2.9434 15.2543 1.56455C12.4881 1.59599 11.1533 2.15893 10.5036 2.74762ZM6.49625 12.0556C6.80312 12.3339 7.27742 12.3106 7.55564 12.0038C7.74172 11.7985 7.89707 11.75 8.00001 11.75C8.10294 11.75 8.25829 11.7985 8.44437 12.0038C8.72259 12.3106 9.19689 12.3339 9.50376 12.0556C9.81063 11.7774 9.83386 11.3031 9.55564 10.9962C9.16887 10.5696 8.63656 10.25 8.00001 10.25C7.36345 10.25 6.83114 10.5696 6.44437 10.9962C6.16615 11.3031 6.18938 11.7774 6.49625 12.0556ZM9.49625 15.4444C9.80312 15.1661 10.2774 15.1894 10.5556 15.4962C11.0281 16.0174 11.5273 16.25 12 16.25C12.4727 16.25 12.9719 16.0174 13.4444 15.4962C13.7226 15.1894 14.1969 15.1661 14.5038 15.4444C14.8106 15.7226 14.8339 16.1969 14.5556 16.5038C13.8824 17.2463 13.0063 17.75 12 17.75C10.9937 17.75 10.1176 17.2463 9.44437 16.5038C9.16615 16.1969 9.18938 15.7226 9.49625 15.4444ZM15.5556 12.0038C15.2774 12.3106 14.8031 12.3339 14.4962 12.0556C14.1894 11.7774 14.1662 11.3031 14.4444 10.9962C14.8311 10.5696 15.3635 10.25 16 10.25C16.6366 10.25 17.1689 10.5696 17.5556 10.9962C17.8339 11.3031 17.8106 11.7774 17.5038 12.0556C17.1969 12.3339 16.7226 12.3106 16.4444 12.0038C16.2583 11.7985 16.1029 11.75 16 11.75C15.8971 11.75 15.7417 11.7985 15.5556 12.0038Z',
  d6: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d7: 'M9.49625 15.4444C9.80312 15.1662 10.2774 15.1894 10.5556 15.4962C11.0281 16.0174 11.5273 16.25 12 16.25C12.4727 16.25 12.9719 16.0174 13.4444 15.4962C13.7226 15.1894 14.1969 15.1662 14.5038 15.4444C14.8106 15.7226 14.8339 16.1969 14.5556 16.5038C13.8824 17.2463 13.0063 17.75 12 17.75C10.9937 17.75 10.1176 17.2463 9.44437 16.5038C9.16615 16.1969 9.18938 15.7226 9.49625 15.4444Z',
  d8: 'M6.49625 12.0556C6.80312 12.3338 7.27742 12.3106 7.55564 12.0038C7.74172 11.7985 7.89707 11.75 8.00001 11.75C8.10294 11.75 8.25829 11.7985 8.44437 12.0038C8.72259 12.3106 9.19689 12.3338 9.50376 12.0556C9.81063 11.7774 9.83386 11.3031 9.55564 10.9962C9.16887 10.5696 8.63656 10.25 8.00001 10.25C7.36345 10.25 6.83114 10.5696 6.44437 10.9962C6.16615 11.3031 6.18938 11.7774 6.49625 12.0556Z',
  d9: 'M14.4962 12.0556C14.8031 12.3338 15.2774 12.3106 15.5556 12.0038C15.7417 11.7985 15.8971 11.75 16 11.75C16.1029 11.75 16.2583 11.7985 16.4444 12.0038C16.7226 12.3106 17.1969 12.3338 17.5038 12.0556C17.8106 11.7774 17.8339 11.3031 17.5556 10.9962C17.1689 10.5696 16.6366 10.25 16 10.25C15.3635 10.25 14.8311 10.5696 14.4444 10.9962C14.1662 11.3031 14.1894 11.7774 14.4962 12.0556Z',
  d10: 'M12 2.75C10.7574 2.75 9.75 3.75736 9.75 5C9.75 6.24264 10.7574 7.25 12 7.25C12.5767 7.25 13.1012 7.03398 13.4998 6.67726C13.8085 6.40101 14.2826 6.42728 14.5589 6.73592C14.8351 7.04457 14.8088 7.51871 14.5002 7.79496C13.8372 8.38831 12.96 8.75 12 8.75C9.92893 8.75 8.25 7.07107 8.25 5C8.25 2.92893 9.92893 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2C12.75 2.41421 12.4142 2.75 12 2.75Z',
  d11: 'M14.5 16C13.7839 16.6318 12.9244 17 12 17C11.0756 17 10.2161 16.6318 9.5 16',
  d12: 'M9 11.5C8.57036 11.1841 8.05462 11 7.5 11C6.94538 11 6.42964 11.1841 6 11.5',
  d13: 'M18 11.5C17.5704 11.1841 17.0546 11 16.5 11C15.9454 11 15.4296 11.1841 15 11.5',
  d14: 'M10.5036 2.74762C9.86709 3.32441 9.75 4.05317 9.75 4.81317C9.75 6.05581 10.7574 7.2497 12 7.2497C12.5767 7.2497 13.1012 7.03368 13.4998 6.67695L14.5002 7.79465C13.8372 8.38801 12.96 8.7497 12 8.7497C9.92893 8.7497 8.25 6.88424 8.25 4.81317C8.25 3.91632 8.38291 2.64508 9.49639 1.63609C9.64688 1.49971 9.81238 1.37083 9.99404 1.25C5.01564 2.18963 1.25 6.74816 1.25 11.9997C1.25 17.9368 6.06294 22.7497 12 22.7497C17.9371 22.7497 22.75 17.9368 22.75 11.9997C22.75 7.19701 19.6005 2.9434 15.2543 1.56455C12.4881 1.59599 11.1533 2.15893 10.5036 2.74762ZM12 16.2499C11.2845 16.2499 10.5962 15.9669 9.99624 15.4375L9.00378 16.5622C9.83598 17.2966 10.8668 17.7499 12 17.7499C13.1332 17.7499 14.164 17.2966 14.9962 16.5622L14.0038 15.4375C13.4038 15.9669 12.7156 16.2499 12 16.2499ZM6.44427 12.1035C6.75387 11.8759 7.11572 11.7493 7.49997 11.7493C7.88422 11.7493 8.24607 11.8759 8.55566 12.1035L9.44427 10.8951C8.89459 10.4909 8.22495 10.2493 7.49997 10.2493C6.77498 10.2493 6.10535 10.4909 5.55566 10.8951L6.44427 12.1035ZM16.5 11.7493C16.1157 11.7493 15.7539 11.8759 15.4443 12.1035L14.5557 10.8951C15.1053 10.4909 15.775 10.2493 16.5 10.2493C17.225 10.2493 17.8946 10.4909 18.4443 10.8951L17.5557 12.1035C17.2461 11.8759 16.8842 11.7493 16.5 11.7493Z',
} as const;

export const IconBaby01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-01-stroke-rounded IconBaby01StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconBaby01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-01-duotone-rounded IconBaby01DuotoneRounded"
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
        strokeWidth="var(--icon-stroke-width)"></circle>
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
        strokeLinecap="round" 
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
    </TheIconWrapper>
  );
};

export const IconBaby01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-01-twotone-rounded IconBaby01TwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconBaby01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-01-solid-rounded IconBaby01SolidRounded"
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

export const IconBaby01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-01-bulk-rounded IconBaby01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconBaby01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-01-stroke-sharp IconBaby01StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
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
    </TheIconWrapper>
  );
};

export const IconBaby01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="baby-01-solid-sharp IconBaby01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBaby01: TheIconSelfPack = {
  name: 'Baby01',
  StrokeRounded: IconBaby01StrokeRounded,
  DuotoneRounded: IconBaby01DuotoneRounded,
  TwotoneRounded: IconBaby01TwotoneRounded,
  SolidRounded: IconBaby01SolidRounded,
  BulkRounded: IconBaby01BulkRounded,
  StrokeSharp: IconBaby01StrokeSharp,
  SolidSharp: IconBaby01SolidSharp,
};