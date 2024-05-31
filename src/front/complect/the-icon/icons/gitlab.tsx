import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21.7976 13.0838C21.9702 13.7157 22.0566 14.0317 21.9594 14.3228C21.8621 14.6139 21.6031 14.815 21.0851 15.2172L13.2468 21.3025C12.6478 21.7675 12.3484 22 12 22C11.6516 22 11.3522 21.7675 10.7532 21.3025L2.91487 15.2172C2.39687 14.815 2.13787 14.6139 2.04065 14.3228C1.94343 14.0317 2.02976 13.7157 2.20243 13.0838L5.23081 2L8.08792 8.65441C8.34375 9.25025 8.47166 9.54818 8.72598 9.71557C8.98031 9.88296 9.30503 9.88296 9.95448 9.88296H14.0455C14.695 9.88296 15.0197 9.88296 15.274 9.71557C15.5283 9.54818 15.6563 9.25025 15.9121 8.65441L18.7692 2L21.7976 13.0838Z',
  d2: 'M12 22C11.6516 22 11.3522 21.7675 10.7532 21.3025L2.91487 15.2172C2.39687 14.815 2.13787 14.6139 2.04065 14.3228C1.94343 14.0317 2.02976 13.7157 2.20243 13.0838L5.23081 2L8.08792 8.65441C8.34375 9.25025 8.47166 9.54818 8.72598 9.71557C8.98031 9.88296 9.30503 9.88296 9.95448 9.88296H12',
  d3: 'M5.18164 1.25182C5.49987 1.2297 5.7973 1.41112 5.92315 1.70411L8.78152 8.35852C8.91588 8.67133 8.99415 8.85096 9.06546 8.97743C9.12607 9.08492 9.1567 9.1034 9.27708 9.11637C9.42189 9.13196 9.61841 9.13297 9.95944 9.13297H14.0523C14.3933 9.13297 14.5898 9.13196 14.7346 9.11637C14.8504 9.1039 14.8884 9.08007 14.9463 8.97743C15.0176 8.85096 15.0958 8.67133 15.2302 8.35852L18.0886 1.70411C18.2144 1.41112 18.5119 1.2297 18.8301 1.25182C19.1483 1.27393 19.4178 1.49475 19.5018 1.80234L22.5403 12.9183C22.6192 13.2065 22.6933 13.4777 22.7309 13.7129C22.8263 14.3109 22.6472 14.8468 22.2116 15.2676C22.0402 15.4332 21.8179 15.6057 21.5815 15.7892L13.6836 21.918C13.4097 22.1307 13.1544 22.3288 12.9222 22.4684C12.6644 22.6233 12.3667 22.75 12.0059 22.75C11.645 22.75 11.3473 22.6233 11.0895 22.4684C10.8573 22.3288 10.6021 22.1307 10.3281 21.918L2.43025 15.7892C2.19382 15.6057 1.97149 15.4332 1.80007 15.2676C1.36453 14.8468 1.18539 14.3109 1.28084 13.7129C1.31839 13.4777 1.39256 13.2065 1.47138 12.9183L4.50989 1.80234C4.59397 1.49475 4.86341 1.27393 5.18164 1.25182Z',
  d4: 'M5.17969 1.25182C5.49792 1.2297 5.79535 1.41112 5.9212 1.70411L8.77957 8.35852C8.91393 8.67133 8.99219 8.85096 9.0635 8.97743C9.12411 9.08492 9.15475 9.1034 9.27513 9.11637C9.41994 9.13196 9.61646 9.13297 9.95748 9.13297H14.0503C14.3914 9.13297 14.5879 9.13196 14.7327 9.11637C14.8484 9.1039 14.8864 9.08007 14.9443 8.97743C15.0156 8.85096 15.0939 8.67133 15.2282 8.35852L18.0866 1.70411C18.2125 1.41112 18.5099 1.2297 18.8281 1.25182C19.1464 1.27393 19.4158 1.49475 19.4999 1.80234L22.5384 12.9183C22.6172 13.2065 22.6914 13.4777 22.7289 13.7129C22.8244 14.3109 22.6452 14.8468 22.2097 15.2676C22.0383 15.4332 21.8159 15.6057 21.5795 15.7892L13.6817 21.918C13.4077 22.1307 13.1525 22.3288 12.9203 22.4684C12.6625 22.6233 12.3647 22.75 12.0039 22.75C11.6431 22.75 11.3453 22.6233 11.0875 22.4684C10.8554 22.3288 10.6001 22.1307 10.3262 21.918L2.4283 15.7892C2.19187 15.6057 1.96954 15.4332 1.79812 15.2676C1.36258 14.8468 1.18343 14.3109 1.27889 13.7129C1.31644 13.4777 1.39061 13.2065 1.46943 12.9183L4.50794 1.80234C4.59201 1.49475 4.86146 1.27393 5.17969 1.25182Z',
  d5: 'M5.17969 1.25182C5.49792 1.2297 5.79535 1.41112 5.9212 1.70411L8.77957 8.35852C8.91393 8.67133 8.99219 8.85096 9.0635 8.97743C9.12411 9.08492 9.15475 9.1034 9.27513 9.11637C9.41994 9.13196 9.61646 9.13297 9.95748 9.13297H12.0039L12.0039 22.75C11.6431 22.75 11.3453 22.6233 11.0875 22.4684C10.8554 22.3288 10.6001 22.1307 10.3262 21.918L2.4283 15.7892C2.19187 15.6057 1.96954 15.4332 1.79812 15.2676C1.36258 14.8468 1.18343 14.3109 1.27889 13.7129C1.31644 13.4777 1.39061 13.2065 1.46943 12.9183L4.50794 1.80234C4.59201 1.49475 4.86146 1.27393 5.17969 1.25182Z',
  d6: 'M8.9773 10.2045L5.58785 2.29595C5.55068 2.20922 5.42618 2.21718 5.40018 2.30795L2 14.1782L11.9867 22.2324L22 14.1782L18.5432 2.30477C18.5169 2.21444 18.393 2.20664 18.3557 2.29297L14.9427 10.2045H8.9773Z',
  d7: 'M5.51921 1.25142C5.83092 1.23134 6.12185 1.40861 6.24704 1.69492L9.5168 9.17233H14.4847L17.7544 1.69492C17.8796 1.40861 18.1706 1.23134 18.4823 1.25142C18.794 1.27151 19.0598 1.48465 19.1472 1.78465L22.7507 14.1456L12.0015 22.7499L1.25073 14.1457L4.85425 1.78465C4.94171 1.48465 5.20751 1.27151 5.51921 1.25142Z',
} as const;

export const IconGitlabStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gitlab-stroke-rounded IconGitlabStrokeRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGitlabDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gitlab-duotone-rounded IconGitlabDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGitlabTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gitlab-twotone-rounded IconGitlabTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconGitlabSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gitlab-solid-rounded IconGitlabSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGitlabBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gitlab-bulk-rounded IconGitlabBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconGitlabStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gitlab-stroke-sharp IconGitlabStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGitlabSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gitlab-solid-sharp IconGitlabSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGitlab: TheIconSelfPack = {
  name: 'Gitlab',
  StrokeRounded: IconGitlabStrokeRounded,
  DuotoneRounded: IconGitlabDuotoneRounded,
  TwotoneRounded: IconGitlabTwotoneRounded,
  SolidRounded: IconGitlabSolidRounded,
  BulkRounded: IconGitlabBulkRounded,
  StrokeSharp: IconGitlabStrokeSharp,
  SolidSharp: IconGitlabSolidSharp,
};