import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z',
  d2: 'M10.2238 16.8177C10.0494 17.1031 9.94118 17.4189 9.94118 17.7824V21.8943C5.40603 20.9452 2 16.9236 2 12.1065C2 6.5836 6.47715 2.10645 12 2.10645C17.5228 2.10645 22 6.5836 22 12.1065C22 16.9236 18.594 20.9452 14.0588 21.8943V17.7824C14.0588 17.4189 13.9506 17.1031 13.7762 16.8177C13.6566 16.6219 13.7385 16.3441 13.9547 16.2828C15.7447 15.7746 17 14.9575 17 12.247C17 11.5424 16.7764 10.8799 16.3834 10.3033C16.1879 10.0163 16.1928 10.0429 16.2746 9.70364C16.4183 9.10712 16.4298 8.4787 16.2692 7.89249C16.2164 7.6998 16.1032 7.58741 15.8983 7.60911C15.6326 7.63726 15.1725 7.76307 14.49 8.20337C14.2219 8.37636 14.0878 8.46286 13.9697 8.48221C13.8516 8.50156 13.6938 8.46103 13.378 8.37998C12.9463 8.26913 12.5014 8.20963 12 8.20963C11.4986 8.20963 11.0537 8.26913 10.622 8.37998C10.3063 8.46104 10.1484 8.50156 10.0303 8.48221C9.91221 8.46286 9.77813 8.37636 9.50999 8.20337C8.82753 7.76307 8.3674 7.63726 8.10166 7.60911C7.8968 7.58741 7.78361 7.6998 7.73081 7.89249C7.57017 8.4787 7.58167 9.10713 7.72543 9.70365C7.80718 10.0429 7.81213 10.0163 7.61654 10.3033C7.22356 10.8799 7 11.5424 7 12.247C7 14.9575 8.25526 15.7746 10.0453 16.2828C10.2615 16.3441 10.3434 16.6219 10.2238 16.8177Z',
  d3: 'M14.3184 21.998C18.8536 21.0306 22 17.1049 22 12.1949C22 6.56545 17.5228 2.00195 12 2.00195C6.47715 2.00195 2 6.56545 2 12.1949C2 17.1049 5.67527 21.0306 10.2104 21.998',
  d4: 'M10.1795 21.8727C10.1795 21.8727 10.1795 18.7655 10.1795 18.1689C10.1795 17.5723 10.5526 16.4115 10.5526 16.4115C9.58155 16.0412 8.02387 15.7101 7.52803 14.2859C7.14329 13.1807 6.90129 11.576 7.97729 10.0676C7.97729 10.0676 7.69636 7.63065 8.22849 7.53625C8.76062 7.44185 10.3283 8.50095 10.3283 8.50095C10.7849 8.36901 11.8074 8.11651 12.2299 8.162C12.6525 8.11651 13.6713 8.36901 14.1279 8.50095C14.1279 8.50095 15.5273 7.41197 16.2278 7.53625C16.9282 7.66053 16.479 10.0676 16.479 10.0676C17.555 11.576 17.313 13.1807 16.9282 14.2859C16.4324 15.7101 14.8846 16.0412 13.9136 16.4115C13.9136 16.4115 14.2768 17.6037 14.2768 18.1689C14.2768 18.7341 14.3279 21.8727 14.3279 21.8727M6.75586 17.0706C7.15028 17.6591 8.29729 18.7942 9.93014 19.1107',
  d5: 'M9.94118 17.8806C9.94118 17.5172 10.0494 17.2013 10.2238 16.9159C10.3434 16.7202 10.2615 16.4424 10.0453 16.381C8.25526 15.8729 7 15.0557 7 12.3453C7 11.6406 7.22356 10.9781 7.61654 10.4015C7.71414 10.2583 7.76181 10.1932 7.77491 10.1217C7.78806 10.05 7.76638 9.97185 7.72543 9.80192C7.58167 9.2054 7.57017 8.57697 7.73081 7.99076C7.78361 7.79807 7.8968 7.68568 8.10166 7.70737C8.3674 7.73552 8.82753 7.86134 9.50999 8.30163C9.77813 8.47463 9.9122 8.56113 10.0303 8.58048C10.1484 8.59983 10.3062 8.5593 10.622 8.47824C11.0537 8.3674 11.4986 8.30789 12 8.30789C12.5014 8.30789 12.9463 8.3674 13.378 8.47824C13.6938 8.5593 13.8516 8.59983 13.9697 8.58048C14.0878 8.56113 14.2219 8.47463 14.49 8.30164C15.1725 7.86134 15.6326 7.73552 15.8983 7.70737C16.1032 7.68568 16.2164 7.79807 16.2692 7.99076C16.4298 8.57696 16.4183 9.20538 16.2746 9.8019C16.2336 9.97185 16.2119 10.05 16.2251 10.1217C16.2382 10.1932 16.2859 10.2583 16.3834 10.4015C16.7764 10.9781 17 11.6406 17 12.3453C17 15.0557 15.7447 15.8729 13.9547 16.381C13.7385 16.4424 13.6566 16.7202 13.7762 16.9159C13.9506 17.2013 14.0588 17.5172 14.0588 17.8806V22.6517C19.011 21.6912 22.75 17.3316 22.75 12.0986C22.75 6.16157 17.9371 1.34863 12 1.34863C6.06294 1.34863 1.25 6.16157 1.25 12.0986C1.25 17.3316 4.98901 21.6912 9.94118 22.6517V19.852C9.88484 19.8454 9.81816 19.8356 9.74225 19.8212C9.52615 19.7802 9.23571 19.7015 8.89714 19.5513C8.21489 19.2487 7.36263 18.6671 6.53685 17.5665C6.28826 17.2352 6.35533 16.7651 6.68665 16.5165C7.01798 16.2679 7.48809 16.335 7.73668 16.6663C8.4109 17.5649 9.06058 17.9829 9.50527 18.1801C9.6822 18.2586 9.83089 18.304 9.94118 18.3302V17.8806Z',
  d6: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d7: 'M9.94118 17.8805C9.94118 17.5171 10.0494 17.2012 10.2238 16.9158C10.3434 16.7201 10.2615 16.4423 10.0453 16.3809C8.25526 15.8727 7 15.0556 7 12.3452C7 11.6405 7.22356 10.978 7.61654 10.4014C7.71414 10.2582 7.76181 10.1931 7.77491 10.1216C7.78806 10.0499 7.76638 9.97173 7.72543 9.80179C7.58167 9.20528 7.57017 8.57684 7.73081 7.99064C7.78361 7.79794 7.8968 7.68555 8.10166 7.70725C8.3674 7.7354 8.82753 7.86122 9.50999 8.30151C9.77813 8.4745 9.91221 8.56101 10.0303 8.58036C10.1484 8.59971 10.3062 8.55918 10.622 8.47812C11.0537 8.36728 11.4986 8.30777 12 8.30777C12.5014 8.30777 12.9463 8.36727 13.378 8.47812C13.6938 8.55917 13.8516 8.59971 13.9697 8.58036C14.0878 8.56101 14.2219 8.47451 14.49 8.30152C15.1725 7.86122 15.6326 7.7354 15.8983 7.70725C16.1032 7.68555 16.2164 7.79794 16.2692 7.99064C16.4298 8.57684 16.4183 9.20526 16.2746 9.80178C16.2336 9.97173 16.2119 10.0499 16.2251 10.1216C16.2382 10.1931 16.2859 10.2582 16.3834 10.4014C16.7764 10.978 17 11.6405 17 12.3452C17 15.0556 15.7447 15.8727 13.9547 16.3809C13.7385 16.4423 13.6566 16.7201 13.7762 16.9158C13.9506 17.2012 14.0588 17.5171 14.0588 17.8805V22.5531C13.3925 22.6823 12.7041 22.75 12 22.75C11.2959 22.75 10.6075 22.6823 9.94118 22.5531V19.8519C9.88484 19.8453 9.81816 19.8355 9.74225 19.8211C9.52615 19.78 9.23571 19.7014 8.89714 19.5512C8.21489 19.2486 7.36263 18.667 6.53685 17.5664C6.28826 17.2351 6.35533 16.7649 6.68665 16.5164C7.01798 16.2678 7.48809 16.3348 7.73668 16.6662C8.4109 17.5648 9.06058 17.9828 9.50527 18.18C9.6822 18.2585 9.83089 18.3039 9.94118 18.3301V17.8805Z',
  d8: 'M9.50389 18.9109C9.50389 18.9109 8 18.9109 6.5 16.9117M14.0588 22V17.6759C14.0588 17.3125 13.9506 16.9966 13.7762 16.7112C13.6566 16.5155 13.7385 16.2377 13.9547 16.1763C15.7447 15.6681 17 14.851 17 12.1406C17 11.4359 16.7764 10.7734 16.3834 10.1968C16.1879 9.90984 16.1928 9.9364 16.2746 9.59719C16.4183 9.00067 16.4298 8.37225 16.2692 7.78605C16.2164 7.59335 16.1032 7.48096 15.8983 7.50266C15.6326 7.53081 15.1725 7.65663 14.49 8.09692C14.2219 8.26992 14.0878 8.35642 13.9697 8.37577C13.8516 8.39512 13.6938 8.35459 13.378 8.27353C12.9463 8.16268 12.5014 8.10318 12 8.10318C11.4986 8.10318 11.0537 8.16268 10.622 8.27353C10.3062 8.35459 10.1484 8.39512 10.0303 8.37577C9.9122 8.35642 9.77813 8.26992 9.50999 8.09692C8.82753 7.65663 8.3674 7.53081 8.10166 7.50266C7.8968 7.48096 7.78361 7.59335 7.73081 7.78605C7.57017 8.37225 7.58167 9.00069 7.72543 9.5972C7.80718 9.93642 7.81213 9.90984 7.61654 10.1968C7.22356 10.7734 7 11.4359 7 12.1406C7 14.851 8.25526 15.6681 10.0453 16.1763C10.2615 16.2377 10.3434 16.5155 10.2238 16.7112C10.0494 16.9966 9.94118 17.3125 9.94118 17.6759V22',
  d9: 'M12 1.25C6.06294 1.25 1.25 6.10743 1.25 12.0994C1.25 17.3807 4.98901 21.7806 9.94118 22.75V19.8138C9.89151 19.8073 9.83484 19.7985 9.77181 19.7864C9.55571 19.745 9.26528 19.6656 8.9267 19.514C8.24445 19.2086 7.39219 18.6216 6.56641 17.5108L7.76624 16.6023C8.44046 17.5092 9.09014 17.9311 9.53483 18.1301C9.69641 18.2025 9.83444 18.2469 9.94118 18.2743V17.8278C9.94118 17.461 10.0494 17.1422 10.2238 16.8542C10.3434 16.6566 10.2615 16.3762 10.0453 16.3143C8.25526 15.8014 7 14.9767 7 12.2413C7 11.5301 7.22356 10.8615 7.61654 10.2795C7.62445 10.2678 7.63203 10.2566 7.63929 10.2459C7.72164 10.1243 7.76287 10.0634 7.77491 9.99714C7.78698 9.93069 7.76971 9.8588 7.73513 9.71485C7.73203 9.70195 7.7288 9.68847 7.72543 9.67437C7.58167 9.07234 7.57017 8.4381 7.73081 7.84647C7.78361 7.652 7.8968 7.53857 8.10166 7.56047C8.3674 7.58887 8.82753 7.71585 9.50999 8.16022C9.77813 8.33481 9.91221 8.42211 10.0303 8.44164C10.1484 8.46117 10.3062 8.42027 10.622 8.33846C11.0537 8.22659 11.4986 8.16654 12 8.16654C12.5014 8.16654 12.9463 8.22659 13.378 8.33846C13.6938 8.42027 13.8516 8.46117 13.9697 8.44164C14.0878 8.42211 14.2219 8.33482 14.49 8.16022C15.1725 7.71585 15.6326 7.58887 15.8983 7.56047C16.1032 7.53857 16.2164 7.652 16.2692 7.84647C16.4298 8.4381 16.4183 9.07232 16.2746 9.67436C16.2712 9.68846 16.268 9.70193 16.2649 9.71482C16.2303 9.8588 16.213 9.93069 16.2251 9.99714C16.2371 10.0634 16.2784 10.1243 16.3607 10.2459C16.368 10.2566 16.3755 10.2678 16.3834 10.2795C16.7764 10.8614 17 11.5301 17 12.2413C17 14.9767 15.7447 15.8014 13.9547 16.3143C13.7385 16.3762 13.6566 16.6566 13.7762 16.8542C13.9506 17.1422 14.0588 17.461 14.0588 17.8278V22.75C19.011 21.7806 22.75 17.3807 22.75 12.0994C22.75 6.10743 17.9371 1.25 12 1.25Z',
} as const;

export const IconGithub01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="github-01-stroke-rounded IconGithub01StrokeRounded"
    >
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

export const IconGithub01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="github-01-duotone-rounded IconGithub01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
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

export const IconGithub01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="github-01-twotone-rounded IconGithub01TwotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGithub01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="github-01-solid-rounded IconGithub01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGithub01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="github-01-bulk-rounded IconGithub01BulkRounded"
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

export const IconGithub01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="github-01-stroke-sharp IconGithub01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconGithub01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="github-01-solid-sharp IconGithub01SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGithub01: TheIconSelfPack = {
  name: 'Github01',
  StrokeRounded: IconGithub01StrokeRounded,
  DuotoneRounded: IconGithub01DuotoneRounded,
  TwotoneRounded: IconGithub01TwotoneRounded,
  SolidRounded: IconGithub01SolidRounded,
  BulkRounded: IconGithub01BulkRounded,
  StrokeSharp: IconGithub01StrokeSharp,
  SolidSharp: IconGithub01SolidSharp,
};