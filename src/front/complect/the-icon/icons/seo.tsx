import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 20L7.41286 17.5871M7.41286 17.5871C8.21715 18.3914 9.32826 18.8889 10.5556 18.8889C13.0102 18.8889 15 16.899 15 14.4444C15 11.9898 13.0102 10 10.5556 10C8.10096 10 6.11111 11.9898 6.11111 14.4444C6.11111 15.6717 6.60857 16.7829 7.41286 17.5871Z',
  d2: 'M3 15.1877C2.36394 14.0914 2 12.8191 2 11.4623C2 7.34099 5.35786 4 9.5 4H14.5C18.6421 4 22 7.34099 22 11.4623C22 14.7114 19.913 17.4756 17 18.5',
  d3: 'M9.5 4H14.5C18.6421 4 22 7.34099 22 11.4623C22 15.5836 18.6413 18.9247 14.4992 18.9247H9.49917C5.35703 18.9247 2 15.5836 2 11.4623C2 7.34099 5.35786 4 9.5 4ZM15 14.4444C15 16.899 13.0101 18.8889 10.5555 18.8889C9.32823 18.8889 8.21712 18.3914 7.41283 17.5871C6.60855 16.7829 6.11108 15.6717 6.11108 14.4444C6.11108 11.9898 8.10093 10 10.5555 10C13.0101 10 15 11.9898 15 14.4444Z',
  d4: 'M10.5882 11.0284C8.72913 11.0284 7.22204 12.5277 7.22204 14.3772C7.22204 15.3022 7.59775 16.1381 8.20797 16.7451C8.8182 17.3522 9.6584 17.726 10.5882 17.726C12.4473 17.726 13.9544 16.2267 13.9544 14.3772C13.9544 12.5277 12.4473 11.0284 10.5882 11.0284ZM5.2675 14.3772C5.2675 11.4538 7.64966 9.08398 10.5882 9.08398C13.5268 9.08398 15.9089 11.4538 15.9089 14.3772C15.9089 17.3006 13.5268 19.6704 10.5882 19.6704C9.47247 19.6704 8.43604 19.328 7.58068 18.7441L5.84995 20.4659C5.4683 20.8456 4.84953 20.8456 4.46788 20.4659C4.08623 20.0862 4.08623 19.4706 4.46788 19.091L6.19861 17.3692C5.61167 16.5182 5.2675 15.4872 5.2675 14.3772Z',
  d5: 'M1.25 11.4772C1.25 6.92885 4.97374 3.25 9.55682 3.25H14.4432C19.0263 3.25 22.75 6.92885 22.75 11.4772C22.75 15.064 20.4339 18.1089 17.2106 19.2366C16.7014 19.4147 16.1435 19.1485 15.9644 18.642C15.7854 18.1355 16.053 17.5804 16.5621 17.4023C19.0324 16.5381 20.7955 14.2082 20.7955 11.4772C20.7955 8.01196 17.9561 5.19444 14.4432 5.19444H9.55682C6.04391 5.19444 3.20455 8.01196 3.20455 11.4772C3.20455 12.6203 3.51226 13.6894 4.04985 14.6112C4.32071 15.0757 4.16183 15.6706 3.69498 15.9401C3.22813 16.2095 2.6301 16.0515 2.35924 15.587C1.65363 14.3771 1.25 12.9725 1.25 11.4772Z',
  d6: 'M5 21L7.41286 18.5871M7.41286 18.5871C8.21715 19.3914 9.32826 19.8889 10.5556 19.8889C13.0102 19.8889 15 17.899 15 15.4444C15 12.9898 13.0102 11 10.5556 11C8.10096 11 6.11111 12.9898 6.11111 15.4444C6.11111 16.6717 6.60857 17.7829 7.41286 18.5871Z',
  d7: 'M3 16.1877C2.36394 15.0914 2 13.8191 2 12.4623C2 8.34099 5.35786 5 9.5 5H14.5C18.6421 5 22 8.34099 22 12.4623C22 15.7114 19.913 18.4756 17 19.5',
  d8: 'M10.5891 11.0429C8.73 11.0429 7.22292 12.585 7.22292 14.4873C7.22292 15.4388 7.59862 16.2985 8.20884 16.9229C8.81907 17.5473 9.65927 17.9318 10.5891 17.9318C12.4482 17.9318 13.9552 16.3897 13.9552 14.4873C13.9552 12.585 12.4482 11.0429 10.5891 11.0429ZM5.26837 14.4873C5.26837 11.4805 7.65053 9.04289 10.5891 9.04289C13.5276 9.04289 15.9098 11.4805 15.9098 14.4873C15.9098 17.4942 13.5276 19.9318 10.5891 19.9318C9.47334 19.9318 8.43691 19.5796 7.58155 18.979L5.85082 20.75L4.46875 19.3358L6.19948 17.5648C5.61254 16.6896 5.26837 15.629 5.26837 14.4873Z',
  d9: 'M1.25 11.7123C1.25 7.03396 4.97374 3.25 9.55682 3.25H14.4432C19.0263 3.25 22.75 7.03396 22.75 11.7123C22.75 15.4016 20.4339 18.5334 17.2106 19.6934L16.5621 17.8066C19.0324 16.9177 20.7955 14.5213 20.7955 11.7123C20.7955 8.14802 17.9561 5.25 14.4432 5.25H9.55682C6.04391 5.25 3.20455 8.14802 3.20455 11.7123C3.20455 12.888 3.51226 13.9877 4.04985 14.9358L2.35924 15.9395C1.65363 14.695 1.25 13.2503 1.25 11.7123Z',
} as const;

export const IconSeoStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="seo-stroke-rounded IconSeoStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSeoDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="seo-duotone-rounded IconSeoDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSeoTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="seo-twotone-rounded IconSeoTwotoneRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconSeoSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="seo-solid-rounded IconSeoSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSeoBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="seo-bulk-rounded IconSeoBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSeoStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="seo-stroke-sharp IconSeoStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSeoSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="seo-solid-sharp IconSeoSolidSharp"
    >
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

export const iconPackOfSeo: TheIconSelfPack = {
  name: 'Seo',
  StrokeRounded: IconSeoStrokeRounded,
  DuotoneRounded: IconSeoDuotoneRounded,
  TwotoneRounded: IconSeoTwotoneRounded,
  SolidRounded: IconSeoSolidRounded,
  BulkRounded: IconSeoBulkRounded,
  StrokeSharp: IconSeoStrokeSharp,
  SolidSharp: IconSeoSolidSharp,
};