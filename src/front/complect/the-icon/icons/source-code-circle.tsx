import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 10L17.2265 11.0572C17.7422 11.5016 18 11.7239 18 12C18 12.2761 17.7422 12.4984 17.2265 12.9428L16 14',
  d2: 'M8 10L6.77346 11.0572C6.25782 11.5016 6 11.7239 6 12C6 12.2761 6.25782 12.4984 6.77346 12.9428L8 14',
  d3: 'M13 9L11 15',
  d4: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM15.3471 10.7575C14.9288 10.3969 14.882 9.76547 15.2425 9.34714C15.6031 8.9288 16.2345 8.88198 16.6529 9.24255L17.8794 10.2997L17.9165 10.3317L17.9165 10.3317C18.1415 10.5255 18.3806 10.7314 18.5554 10.9289C18.7531 11.1522 19 11.5066 19 12C19 12.4934 18.7531 12.8478 18.5554 13.0711C18.3806 13.2686 18.1416 13.4745 17.9165 13.6683L17.9165 13.6684L17.9165 13.6684L17.8794 13.7003L16.6529 14.7575C16.2345 15.1181 15.6031 15.0712 15.2425 14.6529C14.882 14.2346 14.9288 13.6031 15.3471 13.2426L16.5737 12.1854C16.6552 12.1151 16.7256 12.0544 16.7876 12C16.7256 11.9456 16.6552 11.885 16.5737 11.8147L15.3471 10.7575ZM8.75746 9.34714C9.11804 9.76547 9.07121 10.3969 8.65288 10.7575L7.42634 11.8147C7.34477 11.885 7.27445 11.9456 7.21242 12C7.27445 12.0544 7.34477 12.1151 7.42634 12.1854L8.65288 13.2426C9.07121 13.6031 9.11804 14.2346 8.75746 14.6529C8.39689 15.0712 7.76546 15.1181 7.34712 14.7575L6.12058 13.7003L6.08353 13.6684L6.08353 13.6684L6.0835 13.6683L6.08348 13.6683C5.85847 13.4745 5.6194 13.2686 5.44458 13.0711C5.24691 12.8478 5 12.4934 5 12C5 11.5066 5.24691 11.1522 5.44458 10.9289C5.61941 10.7314 5.8585 10.5255 6.08354 10.3317L6.12058 10.2997L7.34712 9.24255C7.76546 8.88198 8.39689 8.9288 8.75746 9.34714ZM13.949 9.3165C14.1236 8.79256 13.8404 8.22624 13.3165 8.05159C12.7926 7.87694 12.2262 8.1601 12.0516 8.68404L10.0516 14.684C9.87694 15.208 10.1601 15.7743 10.684 15.949C11.208 16.1236 11.7743 15.8404 11.949 15.3165L13.949 9.3165Z',
  d5: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d6: 'M15.2425 9.34714C14.882 9.76547 14.9288 10.3969 15.3471 10.7575L16.5737 11.8147C16.6552 11.885 16.7256 11.9456 16.7876 12C16.7256 12.0544 16.6552 12.1151 16.5737 12.1854L15.3471 13.2426C14.9288 13.6031 14.882 14.2346 15.2425 14.6529C15.6031 15.0712 16.2345 15.1181 16.6529 14.7575L17.8794 13.7003L17.9165 13.6684L17.9165 13.6684C18.1415 13.4746 18.3806 13.2686 18.5554 13.0711C18.7531 12.8478 19 12.4934 19 12C19 11.5066 18.7531 11.1522 18.5554 10.9289C18.3806 10.7314 18.1415 10.5255 17.9165 10.3317L17.9165 10.3317L17.8794 10.2997L16.6529 9.24255C16.2345 8.88198 15.6031 8.9288 15.2425 9.34714Z',
  d7: 'M8.75746 9.34714C9.11804 9.76547 9.07121 10.3969 8.65288 10.7575L7.42634 11.8147C7.34477 11.885 7.27445 11.9456 7.21242 12C7.27445 12.0544 7.34477 12.1151 7.42634 12.1854L8.65288 13.2426C9.07121 13.6031 9.11804 14.2346 8.75746 14.6529C8.39689 15.0712 7.76546 15.1181 7.34712 14.7575L6.12058 13.7003L6.08353 13.6684L6.08353 13.6684C5.8585 13.4746 5.61941 13.2686 5.44458 13.0711C5.24691 12.8478 5 12.4934 5 12C5 11.5066 5.24691 11.1522 5.44458 10.9289C5.61941 10.7314 5.8585 10.5255 6.08354 10.3317L6.08354 10.3317L6.12058 10.2997L7.34712 9.24255C7.76546 8.88198 8.39689 8.9288 8.75746 9.34714Z',
  d8: 'M13.3165 8.05159C13.8404 8.22624 14.1236 8.79256 13.949 9.3165L11.949 15.3165C11.7743 15.8404 11.208 16.1236 10.684 15.949C10.1601 15.7743 9.87694 15.208 10.0516 14.684L12.0516 8.68404C12.2262 8.1601 12.7926 7.87694 13.3165 8.05159Z',
  d9: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d10: 'M15.502 9.49133L18.0032 12.0007L15.502 14.5101M8.49828 9.49133L5.99707 12.0007L8.49828 14.5101M13.9978 7.99316L9.99422 15.9975',
  d11: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM13.3293 7.66504L9.32929 15.665L10.6709 16.3359L14.6709 8.33586L13.3293 7.66504ZM9.03044 10.0308L7.96978 8.97012L4.93945 12.0004L7.96978 15.0308L9.03044 13.9701L7.06077 12.0004L9.03044 10.0308ZM14.9698 10.0308L16.9395 12.0004L14.9698 13.9701L16.0304 15.0308L19.0608 12.0004L16.0304 8.97012L14.9698 10.0308Z',
} as const;

export const IconSourceCodeCircleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="source-code-circle-stroke-rounded IconSourceCodeCircleStrokeRounded"
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

export const IconSourceCodeCircleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="source-code-circle-duotone-rounded IconSourceCodeCircleDuotoneRounded"
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

export const IconSourceCodeCircleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="source-code-circle-twotone-rounded IconSourceCodeCircleTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSourceCodeCircleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="source-code-circle-solid-rounded IconSourceCodeCircleSolidRounded"
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

export const IconSourceCodeCircleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="source-code-circle-bulk-rounded IconSourceCodeCircleBulkRounded"
    >
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

export const IconSourceCodeCircleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="source-code-circle-stroke-sharp IconSourceCodeCircleStrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconSourceCodeCircleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="source-code-circle-solid-sharp IconSourceCodeCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSourceCodeCircle: TheIconSelfPack = {
  name: 'SourceCodeCircle',
  StrokeRounded: IconSourceCodeCircleStrokeRounded,
  DuotoneRounded: IconSourceCodeCircleDuotoneRounded,
  TwotoneRounded: IconSourceCodeCircleTwotoneRounded,
  SolidRounded: IconSourceCodeCircleSolidRounded,
  BulkRounded: IconSourceCodeCircleBulkRounded,
  StrokeSharp: IconSourceCodeCircleStrokeSharp,
  SolidSharp: IconSourceCodeCircleSolidSharp,
};