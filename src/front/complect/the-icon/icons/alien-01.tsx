import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.33333 10H6.5C6.22386 10 6 10.2239 6 10.5V11.3333C6 12.8061 7.19391 14 8.66667 14H9.5C9.77614 14 10 13.7761 10 13.5V12.6667C10 11.1939 8.80609 10 7.33333 10Z',
  d2: 'M16.6667 10H17C17.4714 10 17.7071 10 17.8536 10.1464C18 10.2929 18 10.5286 18 11V11.3333C18 12.8061 16.8061 14 15.3333 14H15C14.5286 14 14.2929 14 14.1464 13.8536C14 13.7071 14 13.4714 14 13V12.6667C14 11.1939 15.1939 10 16.6667 10Z',
  d3: 'M11 18H13',
  d4: 'M21 11C21 16.5228 15 22 12 22C9 22 3 16.5228 3 11C3 5.47715 7.02944 2 12 2C16.9706 2 21 5.47715 21 11Z',
  d5: 'M21 11C21 16.5228 15 22 12 22C9 22 3 16.5228 3 11C3 5.47715 7.02944 2 12 2C16.9706 2 21 5.47715 21 11ZM7.33333 10H6.5C6.22386 10 6 10.2239 6 10.5V11.3333C6 12.8061 7.19391 14 8.66667 14H9.5C9.77614 14 10 13.7761 10 13.5V12.6667C10 11.1939 8.80609 10 7.33333 10ZM17 10H16.6667C15.1939 10 14 11.1939 14 12.6667V13C14 13.4714 14 13.7071 14.1464 13.8536C14.2929 14 14.5286 14 15 14H15.3333C16.8061 14 18 12.8061 18 11.3333V11C18 10.5286 18 10.2929 17.8536 10.1464C17.7071 10 17.4714 10 17 10Z',
  d6: 'M12 1.25C6.64617 1.25 2.25 5.03266 2.25 11C2.25 14.0182 3.87645 16.9406 5.82039 19.076C6.80001 20.152 7.88544 21.0571 8.93788 21.6984C9.97195 22.3284 11.0501 22.75 12 22.75C12.9499 22.75 14.028 22.3284 15.0621 21.6984C16.1146 21.0571 17.2 20.152 18.1796 19.076C20.1236 16.9406 21.75 14.0182 21.75 11C21.75 5.03266 17.3538 1.25 12 1.25ZM6.5 9.25C5.80964 9.25 5.25 9.80964 5.25 10.5V11.3333C5.25 13.2203 6.77969 14.75 8.66667 14.75H9.5C10.1904 14.75 10.75 14.1904 10.75 13.5V12.6667C10.75 10.7797 9.22031 9.25 7.33333 9.25H6.5ZM18.3847 9.61613C18.6205 9.85193 18.6963 10.1321 18.7258 10.3514C18.751 10.5387 18.7509 11.1282 18.7508 11.3333C18.7508 13.2203 17.2211 14.75 15.3341 14.75C15.129 14.7501 14.5394 14.7502 14.3522 14.725C14.1329 14.6955 13.8527 14.6197 13.6169 14.3839C13.3811 14.1481 13.3053 13.8679 13.2758 13.6486C13.2506 13.4614 13.2499 12.8718 13.25 12.6667C13.25 10.7797 14.7805 9.25001 16.6674 9.25001C16.8726 9.24993 17.4621 9.24983 17.6493 9.275C17.8687 9.30449 18.1489 9.38033 18.3847 9.61613ZM11 17C10.4477 17 10 17.4477 10 18C10 18.5523 10.4477 19 11 19H13C13.5523 19 14 18.5523 14 18C14 17.4477 13.5523 17 13 17H11Z',
  d7: 'M2.25 11C2.25 5.03266 6.64617 1.25 12 1.25C17.3538 1.25 21.75 5.03266 21.75 11C21.75 14.0182 20.1236 16.9406 18.1796 19.076C17.2 20.152 16.1146 21.0571 15.0621 21.6984C14.028 22.3284 12.9499 22.75 12 22.75C11.0501 22.75 9.97195 22.3284 8.93788 21.6984C7.88544 21.0571 6.80001 20.152 5.82039 19.076C3.87645 16.9406 2.25 14.0182 2.25 11Z',
  d8: 'M5.25 10.5C5.25 9.80964 5.80964 9.25 6.5 9.25H7.33333C9.22031 9.25 10.75 10.7797 10.75 12.6667V13.5C10.75 14.1904 10.1904 14.75 9.5 14.75H8.66667C6.77969 14.75 5.25 13.2203 5.25 11.3333V10.5Z',
  d9: 'M18.3847 9.61613C18.6205 9.85193 18.6963 10.1321 18.7258 10.3514C18.751 10.5387 18.7509 11.1282 18.7508 11.3333C18.7508 13.2203 17.2211 14.75 15.3341 14.75C15.129 14.7501 14.5394 14.7502 14.3522 14.725C14.1329 14.6955 13.8527 14.6197 13.6169 14.3839C13.3811 14.1481 13.3053 13.8679 13.2758 13.6486C13.2506 13.4614 13.2499 12.8718 13.25 12.6667C13.25 10.7797 14.7805 9.25001 16.6674 9.25001C16.8726 9.24993 17.4621 9.24983 17.6493 9.275C17.8687 9.30449 18.1489 9.38033 18.3847 9.61613Z',
  d10: 'M10 18C10 17.4477 10.4477 17 11 17H13C13.5523 17 14 17.4477 14 18C14 18.5523 13.5523 19 13 19H11C10.4477 19 10 18.5523 10 18Z',
  d11: 'M7.33333 10H6V11.3333C6 12.8061 7.19391 14 8.66667 14H10V12.6667C10 11.1939 8.80609 10 7.33333 10Z',
  d12: 'M16.6667 10H18V11.3333C18 12.8061 16.8061 14 15.3333 14H14V12.6667C14 11.1939 15.1939 10 16.6667 10Z',
  d13: 'M10 18H14',
  d14: 'M12 1.25C6.64617 1.25 2.25 5.03266 2.25 11C2.25 14.0182 3.87645 16.9406 5.82039 19.076C6.80001 20.152 7.88544 21.0571 8.93788 21.6984C9.97195 22.3284 11.0501 22.75 12 22.75C12.9499 22.75 14.028 22.3284 15.0621 21.6984C16.1146 21.0571 17.2 20.152 18.1796 19.076C20.1236 16.9406 21.75 14.0182 21.75 11C21.75 5.03266 17.3538 1.25 12 1.25ZM10.75 12.6667C10.75 10.7797 9.22031 9.25 7.33333 9.25H5.25V11.3333C5.25 13.2203 6.77969 14.75 8.66667 14.75H10.75V12.6667ZM13.25 12.6667C13.25 10.7797 14.7797 9.25 16.6667 9.25H18.75V11.3333C18.75 13.2203 17.2203 14.75 15.3333 14.75H13.25V12.6667ZM10 17V19H14V17H10Z',
} as const;

export const IconAlien01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alien-01-stroke-rounded IconAlien01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAlien01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alien-01-duotone-rounded IconAlien01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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
    </TheIconWrapper>
  );
};

export const IconAlien01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alien-01-twotone-rounded IconAlien01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconAlien01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alien-01-solid-rounded IconAlien01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlien01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alien-01-bulk-rounded IconAlien01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconAlien01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alien-01-stroke-sharp IconAlien01StrokeSharp"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlien01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="alien-01-solid-sharp IconAlien01SolidSharp"
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

export const iconPackOfAlien01: TheIconSelfPack = {
  name: 'Alien01',
  StrokeRounded: IconAlien01StrokeRounded,
  DuotoneRounded: IconAlien01DuotoneRounded,
  TwotoneRounded: IconAlien01TwotoneRounded,
  SolidRounded: IconAlien01SolidRounded,
  BulkRounded: IconAlien01BulkRounded,
  StrokeSharp: IconAlien01StrokeSharp,
  SolidSharp: IconAlien01SolidSharp,
};