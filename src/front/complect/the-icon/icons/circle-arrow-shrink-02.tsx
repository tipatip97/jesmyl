import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.885 11.1151C12.3676 10.5977 12.4537 8.4 12.4537 8.4M12.885 11.1151C13.4023 11.6324 15.6 11.5462 15.6 11.5462M12.885 11.1151L16.5 7.5M11.1118 12.8882C10.5945 12.3708 8.39677 12.4569 8.39677 12.4569M11.1118 12.8882C11.6291 13.4055 11.543 15.6032 11.543 15.6032M11.1118 12.8882L7.5 16.5',
  d2: 'M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25ZM12.1046 8.35734C12.0829 7.9437 12.4006 7.59076 12.8142 7.56904C13.035 7.55745 13.2385 7.64258 13.3836 7.78738L14.091 8.49479L15.7929 6.79289C16.1834 6.40237 16.8166 6.40237 17.2071 6.79289C17.5976 7.18342 17.5976 7.81658 17.2071 8.20711L15.5052 9.90901L16.2123 10.6161C16.3573 10.7612 16.4425 10.9648 16.4309 11.1858C16.4092 11.5994 16.0563 11.9171 15.6427 11.8954C15.5599 11.8911 15.4 11.8978 15.1408 11.9117L15.0842 11.9148L15.0841 11.9148C14.8573 11.9271 14.5868 11.9418 14.3186 11.9461C14.0313 11.9507 13.7146 11.9443 13.4291 11.9026C13.1876 11.8674 12.7852 11.7852 12.5 11.5C12.2148 11.2148 12.1326 10.8124 12.0974 10.5709C12.0557 10.2854 12.0493 9.96865 12.0539 9.68139C12.0582 9.41318 12.0729 9.14267 12.0852 8.91581L12.0883 8.85914C12.1022 8.6 12.1089 8.4401 12.1046 8.35734ZM11.8954 15.6427C11.9171 16.0563 11.5994 16.4092 11.1858 16.431C10.9648 16.4426 10.7612 16.3573 10.6161 16.2123L9.90901 15.5052L8.20711 17.2071C7.81658 17.5977 7.18342 17.5977 6.79289 17.2071C6.40237 16.8166 6.40237 16.1834 6.79289 15.7929L8.4948 14.091L7.78739 13.3836C7.64258 13.2386 7.55746 13.035 7.56905 12.8142C7.59077 12.4006 7.9437 12.0829 8.35735 12.1046C8.44011 12.109 8.60001 12.1023 8.85915 12.0883L8.91579 12.0852L8.91585 12.0852L8.91589 12.0852H8.91591C9.14276 12.0729 9.41322 12.0582 9.6814 12.0539C9.96866 12.0493 10.2854 12.0557 10.5709 12.0974C10.8124 12.1326 11.2148 12.2149 11.5 12.5C11.7852 12.7852 11.8674 13.1876 11.9026 13.4291C11.9443 13.7146 11.9507 14.0314 11.9461 14.3186C11.9418 14.5868 11.9271 14.8573 11.9148 15.0842L11.9117 15.1409C11.8978 15.4 11.8911 15.5599 11.8954 15.6427Z',
  d3: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12Z',
  d4: 'M11.1858 16.431C11.5994 16.4092 11.9171 16.0563 11.8954 15.6427C11.8911 15.5599 11.8978 15.4 11.9117 15.1409L11.9148 15.0842C11.9271 14.8573 11.9418 14.5868 11.9461 14.3186C11.9507 14.0314 11.9443 13.7146 11.9026 13.4291C11.8674 13.1876 11.7852 12.7852 11.5 12.5C11.2148 12.2149 10.8124 12.1326 10.5709 12.0974C10.2854 12.0557 9.96866 12.0493 9.6814 12.0539C9.41317 12.0582 9.14266 12.0729 8.91579 12.0852L8.85915 12.0883C8.60001 12.1023 8.44011 12.109 8.35735 12.1046C7.9437 12.0829 7.59077 12.4006 7.56905 12.8142C7.55746 13.035 7.64258 13.2386 7.78739 13.3836L8.4948 14.091L6.79289 15.7929C6.40237 16.1834 6.40237 16.8166 6.79289 17.2071C7.18342 17.5977 7.81658 17.5977 8.20711 17.2071L9.90901 15.5052L10.6161 16.2123C10.7612 16.3573 10.9648 16.4426 11.1858 16.431Z',
  d5: 'M12.8142 7.56904C12.4006 7.59076 12.0829 7.94369 12.1046 8.35734C12.1089 8.4401 12.1022 8.6 12.0883 8.85914L12.0852 8.91581C12.0729 9.14267 12.0582 9.41318 12.0539 9.68139C12.0493 9.96866 12.0557 10.2854 12.0974 10.5709C12.1326 10.8124 12.2148 11.2148 12.5 11.5C12.7852 11.7852 13.1876 11.8674 13.4291 11.9026C13.7146 11.9443 14.0313 11.9507 14.3186 11.9461C14.5868 11.9418 14.8573 11.9271 15.0842 11.9148L15.1408 11.9117C15.4 11.8978 15.5599 11.8911 15.6427 11.8954C16.0563 11.9171 16.4092 11.5994 16.4309 11.1858C16.4425 10.9648 16.3573 10.7612 16.2123 10.6161L15.5052 9.90901L17.2071 8.20711C17.5976 7.81658 17.5976 7.18342 17.2071 6.79289C16.8166 6.40237 16.1834 6.40237 15.7929 6.79289L14.091 8.49479L13.3836 7.78738C13.2385 7.64258 13.035 7.55745 12.8142 7.56904Z',
  d6: 'M7 17L10.4495 13.5505M6.5 13.25H10.75V17.5M17 7L13.5812 10.4188M17.5 10.75H13.25V6.5',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.4697 6.46967L14.25 8.68934L14.25 6.5H12.75L12.75 11.25H17.5V9.75H15.3107L17.5303 7.53033L16.4697 6.46967ZM11.25 12.75H6.5V14.25H8.68934L6.46967 16.4697L7.53033 17.5303L9.75 15.3107V17.5H11.25L11.25 12.75Z',
} as const;

export const IconCircleArrowShrink02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-shrink-02-stroke-rounded IconCircleArrowShrink02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCircleArrowShrink02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-shrink-02-duotone-rounded IconCircleArrowShrink02DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCircleArrowShrink02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-shrink-02-twotone-rounded IconCircleArrowShrink02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconCircleArrowShrink02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-shrink-02-solid-rounded IconCircleArrowShrink02SolidRounded"
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

export const IconCircleArrowShrink02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-shrink-02-bulk-rounded IconCircleArrowShrink02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowShrink02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-shrink-02-stroke-sharp IconCircleArrowShrink02StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowShrink02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-shrink-02-solid-sharp IconCircleArrowShrink02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCircleArrowShrink02: TheIconSelfPack = {
  name: 'CircleArrowShrink02',
  StrokeRounded: IconCircleArrowShrink02StrokeRounded,
  DuotoneRounded: IconCircleArrowShrink02DuotoneRounded,
  TwotoneRounded: IconCircleArrowShrink02TwotoneRounded,
  SolidRounded: IconCircleArrowShrink02SolidRounded,
  BulkRounded: IconCircleArrowShrink02BulkRounded,
  StrokeSharp: IconCircleArrowShrink02StrokeSharp,
  SolidSharp: IconCircleArrowShrink02SolidSharp,
};