import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.5502 3C6.69782 3.00694 4.6805 3.10152 3.39128 4.39073C2 5.78202 2 8.02125 2 12.4997C2 16.9782 2 19.2174 3.39128 20.6087C4.78257 22 7.0218 22 11.5003 22C15.9787 22 18.218 22 19.6093 20.6087C20.8985 19.3195 20.9931 17.3022 21 13.4498',
  d2: 'M11.0556 13C10.3322 3.86635 16.8023 1.27554 21.9805 2.16439C22.1896 5.19136 20.7085 6.32482 17.8879 6.84825C18.4326 7.41736 19.395 8.13354 19.2912 9.02879C19.2173 9.66586 18.7846 9.97843 17.9194 10.6036C16.0231 11.9736 13.8264 12.8375 11.0556 13Z',
  d3: 'M9 17C11 11.5 12.9604 9.63636 15 8',
  d4: 'M15.495 3.06281C12.6819 4.53627 10.6313 7.64262 11.0556 13C13.8264 12.8375 16.0231 11.9736 17.9194 10.6036C18.7846 9.97843 19.2173 9.66586 19.2912 9.02879C19.3769 8.28994 18.7363 7.67305 18.2037 7.16015C18.091 7.05158 17.9831 6.94767 17.8879 6.84825C18.9691 6.64761 19.8534 6.35735 20.5212 5.90518C21 7.32302 21 9.3617 21 12.5C21 16.9783 21 19.2175 19.6088 20.6088C18.2175 22 15.9783 22 11.5 22C7.02166 22 4.78249 22 3.39124 20.6088C2 19.2175 2 16.9783 2 12.5C2 8.02166 2 5.78249 3.39124 4.39124C4.78249 3 7.02166 3 11.5 3C13.0946 3 14.4054 3 15.495 3.06281Z',
  d5: 'M10.5502 2.99976C6.69782 3.0067 4.6805 3.10128 3.39128 4.39049C2 5.78178 2 8.02101 2 12.4995C2 16.978 2 19.2172 3.39128 20.6085C4.78257 21.9998 7.0218 21.9998 11.5003 21.9998C15.9787 21.9998 18.218 21.9998 19.6093 20.6085C20.8985 19.3193 20.9931 17.302 21 13.4496',
  d6: 'M9 17C11 11.5 12.9604 9.63636 15 8M11.0557 13C10.3323 3.86635 16.8024 1.27554 21.9806 2.16439C22.1897 5.19136 20.7086 6.32482 17.888 6.84825C18.4327 7.41736 19.3951 8.13354 19.2913 9.02879C19.2174 9.66586 18.7847 9.97843 17.9195 10.6036C16.0232 11.9736 13.8265 12.8375 11.0557 13Z',
  d7: 'M13.8469 3.23005C16.2276 1.39253 19.3676 0.954886 22.1076 1.42521C22.4484 1.48371 22.7051 1.7677 22.7289 2.11272C22.8423 3.75393 22.5041 5.03303 21.6121 5.96402C21.0236 6.57819 20.2464 6.98333 19.3493 7.26463C19.371 7.29006 19.3926 7.31579 19.4138 7.34182C19.7525 7.75653 20.1236 8.36307 20.0364 9.11519C19.9777 9.62147 19.7636 10.005 19.4443 10.3389C19.1707 10.6252 18.7975 10.8947 18.4028 11.1797L18.3588 11.2115C16.3763 12.6438 14.0783 13.5533 11.2156 13.7415C11.6782 12.8466 12.1363 12.1141 12.5903 11.4945C13.5293 10.213 14.4717 9.38559 15.4695 8.58503C15.7926 8.32582 15.8444 7.85378 15.5852 7.53069C15.326 7.2076 14.854 7.15582 14.5309 7.41503C13.4891 8.25083 12.4315 9.17343 11.3804 10.6079C11.0055 11.1195 10.6341 11.6925 10.265 12.3457C10.0856 7.97483 11.5534 5.00025 13.8469 3.23005Z',
  d8: 'M8.29536 16.7437C8.94861 14.9473 9.60301 13.5175 10.265 12.3457C10.2746 12.5795 10.289 12.8174 10.3081 13.0592C10.3403 13.4662 10.6921 13.7726 11.0997 13.7487C11.1384 13.7465 11.177 13.744 11.2156 13.7415C10.7176 14.7046 10.2144 15.8557 9.70505 17.2564C9.56349 17.6456 9.13317 17.8464 8.7439 17.7049C8.35462 17.5633 8.1538 17.133 8.29536 16.7437Z',
  d9: 'M11.4428 2.25024C9.25213 2.25023 7.53144 2.25022 6.18802 2.43084C4.81137 2.61593 3.71911 3.00296 2.86091 3.86116C2.00272 4.71936 1.61568 5.81161 1.43059 7.18827C1.24998 8.53168 1.24999 10.2524 1.25 12.4431V12.5574C1.24999 14.7481 1.24998 16.4688 1.43059 17.8122C1.61568 19.1889 2.00272 20.2811 2.86091 21.1393C3.71911 21.9975 4.81137 22.3846 6.18802 22.5696C7.53144 22.7503 9.2521 22.7503 11.4428 22.7502H11.5572C13.7479 22.7503 15.4686 22.7503 16.812 22.5696C18.1886 22.3846 19.2809 21.9975 20.1391 21.1393C20.9973 20.2811 21.3843 19.1889 21.5694 17.8122C21.75 16.4688 21.75 14.7481 21.75 12.5574C21.75 12.5574 21.75 11.8455 21.7452 11.0516C21.7413 10.3964 21.7393 10.0688 21.5946 10.028C21.4498 9.98714 21.2703 10.2759 20.9115 10.8535C20.7813 11.0629 20.6497 11.2489 20.5284 11.3758C20.1578 11.7633 19.5939 12.1702 19.237 12.4276C17.2935 13.8318 15.0685 14.7837 12.4095 15.1314C12.3001 15.1458 12.2454 15.1529 12.2038 15.1835C12.1623 15.2141 12.1399 15.2628 12.0951 15.3602C11.7746 16.0574 11.4475 16.8535 11.1146 17.7692C10.6899 18.937 9.39892 19.5395 8.2311 19.1148C7.06328 18.6902 6.46082 17.3992 6.88549 16.2314C7.47976 14.5971 8.08317 13.2335 8.70362 12.0726C8.72835 12.0264 8.74072 12.0032 8.74671 11.9786C8.7527 11.954 8.75236 11.9275 8.75168 11.8744C8.70208 8.03096 9.86166 5.05876 11.8556 3.00226C12.1838 2.6637 12.3479 2.49442 12.2963 2.37239C12.2446 2.25036 12.0168 2.25032 11.561 2.25026L11.4428 2.25024Z',
  d10: 'M9.46178 3.50146H2.5V21.5214H20.4017V13.5126',
  d11: 'M9.46777 17.5172C9.46777 11.9036 14.731 9.28394 14.731 9.28394',
  d12: 'M14.3225 4.69184C16.8749 2.85774 19.8804 2.52401 21.4989 2.52441C21.4989 3.14603 21.3809 4.5511 20.7576 5.84375C20.1375 7.12989 18.9388 7.78899 17.7629 7.7956C17.7562 7.79563 17.7529 7.80362 17.7575 7.80836L19.2219 9.3014C19.2248 9.30435 19.2246 9.30921 19.2217 9.3121C16.8999 11.5835 16.2377 11.8293 14.9142 12.5526C13.8945 13.1099 11.0314 13.8711 10.3301 13.8711C10.0099 13.8711 10.3807 11.3528 10.6416 10.1095C11.0553 8.13881 12.7295 5.8366 14.3225 4.69184Z',
  d13: 'M13.7381 4.15002C16.1574 2.33549 19.1456 1.75 21.4999 1.75H22.2499V2.5C22.2499 3.90344 21.9516 5.36578 21.2468 6.50417C20.7764 7.26397 20.1212 7.87905 19.2777 8.21666L19.7809 8.71943C19.9217 8.86006 20.0008 9.05087 20.0008 9.24985C20.0009 9.44882 19.9219 9.63966 19.7812 9.78036C16.8892 12.672 13.9112 14.2925 10.8539 14.4814C11.3147 13.3863 11.9843 12.4913 12.6648 11.7866C13.2773 11.1522 13.8913 10.6807 14.3512 10.3687C14.5806 10.213 14.77 10.0982 14.8995 10.0235C14.9641 9.98625 15.0137 9.95908 15.0457 9.94197C15.0616 9.93342 15.0732 9.92738 15.08 9.92386L15.0864 9.92058C15.0861 9.9207 15.0859 9.92083 14.7505 9.24999C14.4151 8.57916 14.4141 8.57968 14.4137 8.57985L14.4119 8.58078L14.4068 8.58337L14.3909 8.59153C14.3778 8.59828 14.3599 8.60768 14.3374 8.61972C14.2924 8.64381 14.2292 8.67854 14.1503 8.72401C13.9927 8.8149 13.7719 8.94906 13.509 9.12742C12.9844 9.48334 12.2858 10.0196 11.5857 10.7446C10.8229 11.5346 10.0496 12.5589 9.50361 13.8235C9.52054 13.9954 9.59645 14.1571 9.71964 14.2803C9.86029 14.4209 10.0511 14.5 10.25 14.5C10.4517 14.5 10.653 14.4938 10.8539 14.4814C10.4851 15.3578 10.25 16.3623 10.25 17.5H8.75C8.75 16.1044 9.04746 14.8801 9.50361 13.8235C9.50122 13.7992 9.5 13.7746 9.5 13.7499C9.50053 9.03581 11.2825 5.9918 13.7381 4.15002Z',
  d14: 'M21.25 21.5C21.25 21.9142 20.9142 22.25 20.5 22.25H2.5C2.08579 22.25 1.75 21.9142 1.75 21.5V3.50002C1.75 3.08581 2.08579 2.75002 2.5 2.75002L13.1129 2.75C13.0207 2.81514 12.9291 2.88182 12.8381 2.95006C10.0195 5.06404 8.08229 8.55098 8.00595 13.5197C7.54377 14.6821 7.25 16.0106 7.25 17.5C7.25 18.3284 7.92157 19 8.75 19H10.25C11.0784 19 11.75 18.3284 11.75 17.5C11.75 16.9102 11.8273 16.3683 11.9601 15.8703C15.1256 15.3893 18.089 13.5936 20.8418 10.8411C21.0074 10.6755 21.1445 10.4867 21.25 10.2824V21.5Z',
} as const;

export const IconQuillWrite02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quill-write-02-stroke-rounded IconQuillWrite02StrokeRounded"
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

export const IconQuillWrite02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quill-write-02-duotone-rounded IconQuillWrite02DuotoneRounded"
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

export const IconQuillWrite02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quill-write-02-twotone-rounded IconQuillWrite02TwotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQuillWrite02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quill-write-02-solid-rounded IconQuillWrite02SolidRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconQuillWrite02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quill-write-02-bulk-rounded IconQuillWrite02BulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconQuillWrite02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quill-write-02-stroke-sharp IconQuillWrite02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconQuillWrite02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quill-write-02-solid-sharp IconQuillWrite02SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfQuillWrite02: TheIconSelfPack = {
  name: 'QuillWrite02',
  StrokeRounded: IconQuillWrite02StrokeRounded,
  DuotoneRounded: IconQuillWrite02DuotoneRounded,
  TwotoneRounded: IconQuillWrite02TwotoneRounded,
  SolidRounded: IconQuillWrite02SolidRounded,
  BulkRounded: IconQuillWrite02BulkRounded,
  StrokeSharp: IconQuillWrite02StrokeSharp,
  SolidSharp: IconQuillWrite02SolidSharp,
};