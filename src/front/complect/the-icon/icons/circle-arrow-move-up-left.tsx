import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d2: 'M10.3691 11.474C9.86083 10.8438 8.82805 10.0631 9.01189 9.69249M9.01189 9.69249C8.90948 9.31454 9.90942 8.56745 10.3714 7.99756M9.01189 9.69249C11.0947 9.64717 12.369 9.89913 13.5991 11.124C14.8802 12.3997 15.091 13.7936 14.9873 16.0022',
  d3: 'M10.3691 11.4741C9.86078 10.8441 8.82808 10.0631 9.01188 9.69305M9.01188 9.69305C8.90948 9.31505 9.90938 8.56805 10.3714 7.99805M9.01188 9.69305C11.0947 9.64705 12.369 9.89908 13.5991 11.1241C14.8802 12.4001 15.091 13.7941 14.9873 16.0021',
  d4: 'M15.75 16C15.75 16.4142 15.4142 16.75 15 16.75C14.5858 16.75 14.25 16.4142 14.25 16H15.75ZM9 10.4782C8.58579 10.4782 8.25 10.1424 8.25 9.72821C8.25 9.314 8.58579 8.97821 9 8.97821V10.4782ZM11.0238 9.78761L10.9038 10.5279L11.0238 9.78761ZM14.942 13.798L15.6831 13.6833L14.942 13.798ZM9.83263 7.482C10.1187 7.18245 10.5935 7.17154 10.893 7.45762C11.1926 7.7437 11.2035 8.21845 10.9174 8.518L9.83263 7.482ZM9.19493 9.23561L8.65255 8.71761L9.19493 9.23561ZM9.19493 10.2211L8.65255 10.7391L9.19493 10.2211ZM10.9174 10.9387C11.2035 11.2383 11.1926 11.713 10.893 11.9991C10.5935 12.2852 10.1187 12.2743 9.83263 11.9747L10.9174 10.9387ZM14.25 16V15.5176H15.75V16H14.25ZM9 8.97821C9.83483 8.97821 10.7007 8.97544 11.1438 9.04727L10.9038 10.5279C10.6141 10.481 9.91675 10.4782 9 10.4782V8.97821ZM14.25 15.5176C14.25 14.5931 14.2478 14.2163 14.2008 13.9126L15.6831 13.6833C15.7522 14.1297 15.75 14.6492 15.75 15.5176H14.25ZM11.1438 9.04727C13.4912 9.4278 15.3155 11.3077 15.6831 13.6833L14.2008 13.9126C13.9295 12.1595 12.5902 10.8013 10.9038 10.5279L11.1438 9.04727ZM10.9174 8.518L9.73731 9.75361L8.65255 8.71761L9.83263 7.482L10.9174 8.518ZM9.73731 9.70313L10.9174 10.9387L9.83263 11.9747L8.65255 10.7391L9.73731 9.70313ZM9.73731 9.75361C9.7492 9.74117 9.75 9.73018 9.75 9.72837C9.75 9.72656 9.7492 9.71558 9.73731 9.70313L8.65255 10.7391C8.11582 10.1771 8.11582 9.27961 8.65255 8.71761L9.73731 9.75361Z',
  d5: 'M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25ZM9.65183 7.30933C10.0333 6.90994 10.6663 6.89538 11.0657 7.27683C11.2713 7.47326 11.375 7.7364 11.375 8V8.83486C13.7397 9.30187 15.5566 11.2304 15.9302 13.645C16.0002 14.0973 16.0001 14.6171 16 15.4205L16 15.5176V16C16 16.5523 15.5523 17 15 17C14.4477 17 14 16.5523 14 16V15.5176C14 14.5838 13.997 14.2307 13.9537 13.9509C13.7268 12.4842 12.7066 11.3166 11.375 10.8962V11.5C11.3643 11.749 11.2601 11.9942 11.0657 12.1799C10.6663 12.5614 10.0333 12.5468 9.65183 12.1474L8.47176 10.9118C8.15803 10.5833 8.00077 10.1575 8 9.73153L8 9.72821L8 9.72498C8.00083 9.29905 8.15808 8.87338 8.47176 8.54495L9.65183 7.30933Z',
  d6: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12Z',
  d7: 'M11.0657 7.27683C10.6663 6.89538 10.0333 6.90994 9.65182 7.30933L8.47174 8.54495C8.15807 8.87338 8.00082 9.29905 7.99999 9.72498L7.99998 9.72821L7.99999 9.73153C8.00076 10.1575 8.15801 10.5833 8.47174 10.9118L9.65182 12.1474C10.0333 12.5468 10.6663 12.5614 11.0657 12.1799C11.2601 11.9942 11.3643 11.749 11.375 11.5V10.8962C12.7066 11.3166 13.7268 12.4842 13.9537 13.9509C13.997 14.2307 14 14.5838 14 15.5176V16C14 16.5523 14.4477 17 15 17C15.5523 17 16 16.5523 16 16V15.5176L16 15.4205C16.0001 14.6171 16.0002 14.0973 15.9302 13.645C15.5565 11.2304 13.7397 9.30187 11.375 8.83486V8C11.375 7.7364 11.2713 7.47326 11.0657 7.27683Z',
  d8: 'M10.5 7L8 9.5L10.5 12',
  d9: 'M8 9.50732H15.8989C15.954 9.50732 16 9.57318 16 9.62844V17.0058',
  d10: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.5304 8.53033L10.4698 7.46967L7.93945 10L10.4698 12.5303L11.5304 11.4697L10.8108 10.75H14.2501V16H15.7501V10C15.7501 9.58578 15.4143 9.25 15.0001 9.25H10.8108L11.5304 8.53033Z',
};

export const IconCircleArrowMoveUpLeftStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-up-left-stroke-rounded IconCircleArrowMoveUpLeftStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveUpLeftDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-up-left-duotone-rounded IconCircleArrowMoveUpLeftDuotoneRounded"
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

export const IconCircleArrowMoveUpLeftTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-up-left-twotone-rounded IconCircleArrowMoveUpLeftTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveUpLeftSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-up-left-solid-rounded IconCircleArrowMoveUpLeftSolidRounded"
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

export const IconCircleArrowMoveUpLeftBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-up-left-bulk-rounded IconCircleArrowMoveUpLeftBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveUpLeftStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-up-left-stroke-sharp IconCircleArrowMoveUpLeftStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowMoveUpLeftSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-move-up-left-solid-sharp IconCircleArrowMoveUpLeftSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCircleArrowMoveUpLeft: TheIconSelfPack = {
  name: 'CircleArrowMoveUpLeft',
  StrokeRounded: IconCircleArrowMoveUpLeftStrokeRounded,
  DuotoneRounded: IconCircleArrowMoveUpLeftDuotoneRounded,
  TwotoneRounded: IconCircleArrowMoveUpLeftTwotoneRounded,
  SolidRounded: IconCircleArrowMoveUpLeftSolidRounded,
  BulkRounded: IconCircleArrowMoveUpLeftBulkRounded,
  StrokeSharp: IconCircleArrowMoveUpLeftStrokeSharp,
  SolidSharp: IconCircleArrowMoveUpLeftSolidSharp,
};