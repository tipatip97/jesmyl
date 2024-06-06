import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 17H6.5C5.11929 17 4 18.1193 4 19.5C4 20.8807 5.11929 22 6.5 22H21',
  d2: 'M21 22C19.6193 22 18.5 20.8807 18.5 19.5C18.5 18.1193 19.6193 17 21 17',
  d3: 'M13.6716 6.67157L12.5 5.5L11.3284 6.67157H9.67157V8.32843L8.5 9.5L9.67157 10.6716V12.3284H11.3284L12.5 13.5L13.6716 12.3284H15.3284V10.6716L16.5 9.5L15.3284 8.32843V6.67157H13.6716Z',
  d4: 'M4 19.5V5.5C4 3.567 5.567 2 7.5 2H17.5C19.433 2 21 3.567 21 5.5V17',
  d5: 'M6.5 17H21V5.5C21 3.567 19.433 2 17.5 2H7.5C5.567 2 4 3.567 4 5.5V19.5C4 18.1193 5.11929 17 6.5 17ZM12.5 5.5L13.6716 6.67157H15.3284V8.32843L16.5 9.5L15.3284 10.6716V12.3284H13.6716L12.5 13.5L11.3284 12.3284H9.67157V10.6716L8.5 9.5L9.67157 8.32843V6.67157H11.3284L12.5 5.5Z',
  d6: 'M16.75 19.5C16.75 17.567 18.317 16 20.25 16C20.8023 16 21.25 16.4477 21.25 17C21.25 17.5523 20.8023 18 20.25 18C19.4216 18 18.75 18.6716 18.75 19.5C18.75 20.3284 19.4216 21 20.25 21C20.8023 21 21.25 21.4477 21.25 22C21.25 22.5523 20.8023 23 20.25 23C18.317 23 16.75 21.433 16.75 19.5Z',
  d7: 'M2.75 19.5C2.75 17.567 4.317 16 6.25 16H20.25C20.8023 16 21.25 16.4477 21.25 17C21.25 17.5523 20.8023 18 20.25 18H6.25C5.42157 18 4.75 18.6716 4.75 19.5C4.75 20.3284 5.42157 21 6.25 21H20.25C20.8023 21 21.25 21.4477 21.25 22C21.25 22.5523 20.8023 23 20.25 23H6.25C4.317 23 2.75 21.433 2.75 19.5Z',
  d8: 'M2.75 19.5L2.75 5.5C2.75 3.15279 4.65279 1.25 7 1.25H17C19.3472 1.25 21.25 3.15279 21.25 5.5L21.25 17C21.25 17.4142 20.9142 17.75 20.5 17.75L6 17.75C5.0335 17.75 4.25 18.5335 4.25 19.5C4.25 19.9142 3.91421 20.25 3.5 20.25C3.08579 20.25 2.75 19.9142 2.75 19.5ZM13.2602 6.11398C13.3255 6.1793 13.4141 6.216 13.5065 6.216H14.9376C15.13 6.216 15.286 6.37195 15.286 6.56432V7.99544C15.286 8.08782 15.3227 8.17642 15.388 8.24174L16.3999 9.2537C16.536 9.38973 16.536 9.61027 16.3999 9.7463L15.388 10.7583C15.3227 10.8236 15.286 10.9122 15.286 11.0046V12.4357C15.286 12.6281 15.13 12.784 14.9376 12.784L13.5065 12.784C13.4141 12.784 13.3255 12.8207 13.2602 12.886L12.2483 13.898C12.1122 14.034 11.8917 14.034 11.7557 13.898L10.7437 12.886C10.6784 12.8207 10.5898 12.784 10.4974 12.784H9.06627C8.8739 12.784 8.71795 12.6281 8.71795 12.4357V11.0046C8.71795 10.9122 8.68125 10.8236 8.61593 10.7583L7.60397 9.7463C7.46795 9.61027 7.46795 9.38973 7.60397 9.2537L8.61593 8.24174C8.68125 8.17642 8.71795 8.08782 8.71795 7.99544V6.56432C8.71795 6.37195 8.8739 6.216 9.06627 6.216L10.4974 6.216C10.5898 6.216 10.6784 6.1793 10.7437 6.11398L11.7557 5.10202C11.8917 4.96599 12.1122 4.96599 12.2483 5.10202L13.2602 6.11398Z',
  d9: 'M6.25 23C4.317 23 2.75 21.433 2.75 19.5L2.75 5.5C2.75 3.15279 4.65279 1.25 7 1.25H17C19.3472 1.25 21.25 3.15279 21.25 5.5L21.25 17C21.25 17.5523 20.8023 18 20.25 18C19.4216 18 18.75 18.6716 18.75 19.5C18.75 20.3284 19.4216 21 20.25 21C20.8023 21 21.25 21.4477 21.25 22C21.25 22.5523 20.8023 23 20.25 23L6.25 23ZM16.75 19.5C16.75 18.9632 16.8708 18.4546 17.0868 18H6.25C5.42157 18 4.75 18.6716 4.75 19.5C4.75 20.3284 5.42157 21 6.25 21H17.0868C16.8708 20.5454 16.75 20.0368 16.75 19.5Z',
  d10: 'M13.5065 6.216C13.4141 6.216 13.3255 6.1793 13.2602 6.11398L12.2483 5.10202C12.1122 4.96599 11.8917 4.96599 11.7557 5.10202L10.7437 6.11398C10.6784 6.1793 10.5898 6.216 10.4974 6.216H9.06627C8.8739 6.216 8.71795 6.37195 8.71795 6.56432V7.99544C8.71795 8.08782 8.68125 8.17642 8.61593 8.24174L7.60397 9.2537C7.46795 9.38973 7.46795 9.61027 7.60397 9.7463L8.61593 10.7583C8.68125 10.8236 8.71795 10.9122 8.71795 11.0046V12.4357C8.71795 12.6281 8.8739 12.784 9.06627 12.784H10.4974C10.5898 12.784 10.6784 12.8207 10.7437 12.886L11.7557 13.898C11.8917 14.034 12.1122 14.034 12.2483 13.898L13.2602 12.886C13.3255 12.8207 13.4141 12.784 13.5065 12.784H14.9376C15.13 12.784 15.286 12.6281 15.286 12.4357V11.0046C15.286 10.9122 15.3227 10.8236 15.388 10.7583L16.3999 9.7463C16.536 9.61027 16.536 9.38973 16.3999 9.2537L15.388 8.24174C15.3227 8.17642 15.286 8.08782 15.286 7.99544V6.56432C15.286 6.37195 15.13 6.216 14.9376 6.216H13.5065Z',
  d11: 'M3.51107 19.1044V6.16221C3.33985 3.29866 4.47914 2.22081 6.39078 2.00697L20.4795 2.00684V16.0055L18.4796 16.0158M3.51107 19.1044C3.51107 20.7583 4.83311 22.0049 6.48488 22.0049H18.4796M3.51107 19.1044C3.51107 17.4506 4.83311 16.0158 6.48488 16.0158H18.4796M18.4796 16.0158V22.0049M20.4951 22.0049H18.4796',
  d12: 'M13.1597 6.15185L12.0796 5.05297C12.0404 5.01312 11.9762 5.0131 11.937 5.05294L10.8247 6.18357H9.25836C9.2025 6.18357 9.15747 6.22934 9.15838 6.28519L9.18348 7.83201L8.07603 8.94368C8.03664 8.98323 8.03724 9.04736 8.07737 9.08616L9.17221 10.1445L9.1906 11.7275C9.19123 11.7823 9.23581 11.8264 9.29059 11.8264H10.8285L11.9211 12.9427C11.9603 12.9827 12.0248 12.9827 12.064 12.9428L13.1592 11.8264H14.7394C14.7947 11.8264 14.8394 11.7816 14.8394 11.7264V10.1481L15.925 9.06718C15.9644 9.028 15.9643 8.96426 15.9248 8.92521L14.809 7.82185V6.25185C14.809 6.19662 14.7642 6.15185 14.709 6.15185H13.1597Z',
  d13: 'M2.75 4.99979C2.75011 2.92882 4.429 1.25 6.5 1.25H21.2501L21.2474 16.75H19.248V21.25H20.4975V22.75H6.49609C4.42502 22.75 2.74609 21.0711 2.74609 19L2.75 4.99979C2.75 4.99986 2.75 4.99972 2.75 4.99979ZM4.24693 15.9991L4.25 5.00021C4.25 3.75757 5.25736 2.75 6.5 2.75H19.7499L19.7477 15.25H6.49609C5.65226 15.25 4.87353 15.5287 4.24693 15.9991ZM4.24609 18.9987L4.24609 19C4.24609 18.9999 4.24609 19.0001 4.24609 19C4.24621 20.2425 5.25352 21.25 6.49609 21.25H17.748V16.75H6.49609C5.25395 16.75 4.2469 17.7568 4.24609 18.9987C4.24609 18.9988 4.24609 18.9986 4.24609 18.9987Z',
  d14: 'M6.5 1.25C4.429 1.25 2.75011 2.92882 2.75 4.99979L2.74609 18.9998C2.74609 21.0709 4.51194 22.75 6.69022 22.75H21.2474V20.875H19.5105V17.125H21.2474L21.2501 1.25H6.5ZM6.69081 17.125H17.539V20.875H6.69081C5.60176 20.875 4.7189 20.0354 4.71875 19V18.9987C4.71951 17.9637 5.60214 17.125 6.69081 17.125ZM12 4.5L13.318 5.81802H15.182V7.68198L16.5 9L15.182 10.318V12.182H13.318L12 13.5L10.682 12.182H8.81802V10.318L7.5 9L8.81802 7.68198V5.81802H10.682L12 4.5Z',
};

export const IconQuran02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-02-stroke-rounded IconQuran02StrokeRounded"
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
        strokeLinecap="round" 
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

export const IconQuran02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-02-duotone-rounded IconQuran02DuotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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

export const IconQuran02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-02-twotone-rounded IconQuran02TwotoneRounded"
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
        strokeLinecap="round" 
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

export const IconQuran02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-02-solid-rounded IconQuran02SolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconQuran02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-02-bulk-rounded IconQuran02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconQuran02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-02-stroke-sharp IconQuran02StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconQuran02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-02-solid-sharp IconQuran02SolidSharp"
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

export const iconPackOfQuran02: TheIconSelfPack = {
  name: 'Quran02',
  StrokeRounded: IconQuran02StrokeRounded,
  DuotoneRounded: IconQuran02DuotoneRounded,
  TwotoneRounded: IconQuran02TwotoneRounded,
  SolidRounded: IconQuran02SolidRounded,
  BulkRounded: IconQuran02BulkRounded,
  StrokeSharp: IconQuran02StrokeSharp,
  SolidSharp: IconQuran02SolidSharp,
};