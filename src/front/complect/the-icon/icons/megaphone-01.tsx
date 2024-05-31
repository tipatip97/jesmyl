import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.9263 2.91103L8.27352 6.10452C7.76151 6.35029 7.21443 6.41187 6.65675 6.28693C6.29177 6.20517 6.10926 6.16429 5.9623 6.14751C4.13743 5.93912 3 7.38342 3 9.04427V9.95573C3 11.6166 4.13743 13.0609 5.9623 12.8525C6.10926 12.8357 6.29178 12.7948 6.65675 12.7131C7.21443 12.5881 7.76151 12.6497 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z',
  d2: 'M11.4581 20.7709L9.96674 22C6.60515 19.3339 7.01583 18.0625 7.01583 13H8.14966C8.60978 15.8609 9.69512 17.216 11.1927 18.197C12.1152 18.8012 12.3054 20.0725 11.4581 20.7709Z',
  d3: 'M7.5 12.5V6.5',
  d4: 'M14.9263 2.91103L8.27352 6.10452C8.02311 6.22472 7.76432 6.30086 7.5 6.33267V12.6673C7.76432 12.6991 8.02312 12.7753 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z',
  d5: 'M8.25 6.25013C8.25 5.94617 8.25 5.79419 8.32601 5.67259C8.40202 5.55098 8.53863 5.48439 8.81186 5.35122L15.1701 2.25213C16.8246 1.44574 17.6518 1.04254 18.5741 1.35681C19.4964 1.67109 19.8129 2.34544 20.4461 3.69416C22.1846 7.39773 22.1846 11.6023 20.4461 15.3058C19.8129 16.6546 19.4964 17.3289 18.5741 17.6432C17.6518 17.9575 16.8246 17.5543 15.1701 16.7479L8.81186 13.6488C8.53863 13.5156 8.40202 13.449 8.32601 13.3274C8.25 13.2058 8.25 13.0538 8.25 12.7499L8.25 6.25013Z',
  d6: 'M6.75 6.57769C6.75 6.50442 6.75 6.46778 6.7485 6.44846C6.73013 6.21185 6.62495 6.08005 6.3983 6.00966C6.3798 6.00391 6.32369 5.99115 6.21148 5.96562C5.81616 5.87571 5.61835 5.83071 5.45916 5.81226C3.48222 5.58303 2.25 7.17177 2.25 8.99869V10.0013C2.25 11.8282 3.48222 13.417 5.45916 13.1877C5.61835 13.1693 5.81606 13.1243 6.21136 13.0344C6.32367 13.0089 6.37983 12.9961 6.39837 12.9903C6.62494 12.9199 6.73009 12.7882 6.74849 12.5516C6.75 12.5323 6.75 12.4956 6.75 12.4222L6.75 6.57769Z',
  d7: 'M9.91624 15.9033C10.3623 16.6113 10.9223 17.1232 11.6033 17.5693C12.8574 18.3907 13.2525 20.2631 11.9346 21.3493L10.4433 22.5784C10.1704 22.8033 9.77737 22.807 9.50025 22.5872C7.76024 21.2072 6.87686 20.0933 6.50219 18.5783C6.32275 17.8528 6.26814 17.0682 6.25385 16.1787C6.24665 15.7305 6.25085 15.1153 6.25593 14.5413C6.25715 14.4029 6.35339 14.2836 6.48834 14.2529C6.81637 14.1783 7.11787 14.2135 7.41494 14.3583L9.48067 15.3651C9.56867 15.408 9.61268 15.4295 9.64628 15.4614C9.67989 15.4934 9.70534 15.5396 9.75623 15.6319C9.80817 15.7261 9.86154 15.8165 9.91624 15.9033Z',
  d8: 'M6.96387 12.5513V18.5063L9.82356 21.9637C9.86088 22.0088 9.92874 22.0122 9.97035 21.971L12.8862 19.0855C12.9315 19.0407 12.9239 18.9653 12.8705 18.9305L9.89994 16.998L7.99404 12.7578',
  d9: 'M7.46582 12.5161V6.51904',
  d10: 'M3.00098 9.73675V6.54153H7.42212L17.924 2.02967C17.9643 2.01233 18.0122 2.02437 18.0405 2.05795C20.2505 4.67887 20.6273 6.20218 20.8582 8.36173C20.9605 9.31899 20.9369 10.2886 20.7928 11.2405C20.4815 13.298 20.118 14.4984 18.0405 17.002C18.0122 17.036 17.964 17.0485 17.9233 17.031L7.42212 12.5194H3.00098V9.32418',
  d11: 'M18.5133 1.45323C18.296 1.24921 17.9785 1.19324 17.7046 1.31066L8.25 5.36261V13.6374L17.7046 17.6894C17.9785 17.8068 18.296 17.7508 18.5133 17.5468C20.5019 15.6799 21.75 12.7512 21.75 9.50002C21.75 6.24884 20.5019 3.32012 18.5133 1.45323Z',
  d12: 'M6.75 13.25V5.75002H2.25V13.25H6.75Z',
  d13: 'M6.26214 14.5L6.25 18.7741L9.39517 22.4849C9.53025 22.6443 9.72567 22.7401 9.93438 22.7492C10.1431 22.7584 10.3462 22.6801 10.4947 22.5332L13.528 19.5332C13.6888 19.3742 13.7692 19.1512 13.747 18.9262C13.7248 18.7012 13.6022 18.4983 13.4135 18.3738L10.5504 16.4861L10.2372 15.849L7.08948 14.5H6.26214Z',
} as const;

export const IconMegaphone01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="megaphone-01-stroke-rounded IconMegaphone01StrokeRounded"
    >
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

export const IconMegaphone01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="megaphone-01-duotone-rounded IconMegaphone01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconMegaphone01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="megaphone-01-twotone-rounded IconMegaphone01TwotoneRounded"
    >
      <path 
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

export const IconMegaphone01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="megaphone-01-solid-rounded IconMegaphone01SolidRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconMegaphone01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="megaphone-01-bulk-rounded IconMegaphone01BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMegaphone01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="megaphone-01-stroke-sharp IconMegaphone01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconMegaphone01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="megaphone-01-solid-sharp IconMegaphone01SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMegaphone01: TheIconSelfPack = {
  name: 'Megaphone01',
  StrokeRounded: IconMegaphone01StrokeRounded,
  DuotoneRounded: IconMegaphone01DuotoneRounded,
  TwotoneRounded: IconMegaphone01TwotoneRounded,
  SolidRounded: IconMegaphone01SolidRounded,
  BulkRounded: IconMegaphone01BulkRounded,
  StrokeSharp: IconMegaphone01StrokeSharp,
  SolidSharp: IconMegaphone01SolidSharp,
};