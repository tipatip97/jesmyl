import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 13C20 16.0024 20 17.5036 19.1213 18.4363C17.0344 20.6515 6.71606 20.3867 4.87868 18.4363C4 17.5036 4 16.0024 4 13',
  d2: 'M12.04 4C4.4529 4 2.47653 8.7964 2.03855 12.6325C1.851 14.2752 2.33921 14.2488 3.69248 13.5405C5.76039 12.458 8.50919 11.766 12.04 11.766C15.5657 11.766 18.2639 12.456 20.3076 13.5357C21.6586 14.2494 22.1436 14.2742 21.9641 12.6322C21.5448 8.7961 19.6269 4 12.04 4Z',
  d3: 'M6.99609 12C6.99609 9.47222 7.8828 4.56415 12.9961 4',
  d4: 'M15 12C15 10.0614 15.5118 6.73584 18 5',
  d5: 'M19.1213 18.4376C19.5633 17.9684 19.783 17.3554 19.8921 16.4798V16.4798C20.0875 14.9132 20.1851 14.13 19.5444 13.1926C18.9036 12.2552 18.194 12.0758 16.7746 11.7171C13.6427 10.9255 10.3332 11.2159 7.70572 11.8118C5.92801 12.215 5.03915 12.4167 4.37503 13.4279C3.71091 14.4392 3.86443 15.257 4.17146 16.8925C4.29562 17.5539 4.50966 18.0459 4.87868 18.4376C6.71606 20.388 17.0344 20.6528 19.1213 18.4376Z',
  d6: 'M13.3624 3.29745C13.0511 3.27332 12.8954 3.26126 12.7123 3.31827C12.5291 3.37528 12.4188 3.46463 12.1982 3.64332C11.0951 4.53684 10.1769 5.79676 9.45388 6.96273C8.44318 8.59273 7.84082 10.5523 7.67239 12.426C7.6515 12.6583 7.64106 12.7745 7.71423 12.8413C7.78741 12.9082 7.90678 12.8864 8.14553 12.843C9.30819 12.6316 10.6033 12.5138 12.04 12.5138C12.402 12.5138 12.7545 12.5213 13.0977 12.5359C13.6243 12.5582 13.8876 12.5694 14.0395 12.4324C14.1913 12.2955 14.2076 12.0265 14.2401 11.4885C14.3045 10.4259 14.4982 9.24021 14.891 8.1064C15.3142 6.88484 15.9857 5.67975 17.0116 4.77187C17.2493 4.56152 17.3681 4.45634 17.3487 4.34608C17.3293 4.23582 17.1933 4.18219 16.9214 4.07492C15.904 3.67349 14.7248 3.40305 13.3624 3.29745Z',
  d7: 'M9.79724 3.3971C10.0223 3.36542 10.1349 3.34958 10.1678 3.41111C10.2008 3.47265 10.1235 3.55956 9.96883 3.73338C9.27702 4.51097 8.68016 5.36412 8.17906 6.17226C6.97758 8.10994 6.29748 10.4297 6.15282 12.6203C6.12934 12.9758 6.1176 13.1536 6.02985 13.2718C5.9421 13.39 5.77556 13.4525 5.44248 13.5777C4.94014 13.7666 4.47321 13.9761 4.04028 14.2027C3.69708 14.3824 3.36641 14.5419 3.07036 14.6389C2.80324 14.7265 2.39756 14.8222 2.00226 14.6595C1.53451 14.467 1.35368 14.0426 1.29023 13.7022C1.22855 13.3714 1.24439 12.9742 1.29337 12.5452C1.5211 10.5506 2.15642 8.21743 3.79863 6.37627C5.12708 4.88688 7.05732 3.78273 9.79724 3.3971Z',
  d8: 'M18.4746 5.53276C18.6998 5.38074 18.8124 5.30474 18.982 5.31514C19.1515 5.32555 19.2607 5.42063 19.4792 5.6108C19.7575 5.85303 20.0148 6.10984 20.2524 6.37928C21.8777 8.22223 22.4919 10.5565 22.7097 12.5485C22.7565 12.9772 22.7706 13.374 22.7078 13.7043C22.6433 14.0435 22.4619 14.4672 21.9945 14.659C21.5985 14.8215 21.1928 14.7247 20.9259 14.6363C20.6301 14.5384 20.3 14.3777 19.9573 14.1966C18.9869 13.684 17.848 13.259 16.5151 12.9644C16.1224 12.8776 15.926 12.8342 15.8154 12.6927C15.7048 12.5513 15.7095 12.3694 15.7189 12.0056C15.7459 10.9614 15.9128 9.73941 16.3084 8.59744C16.7457 7.33506 17.4384 6.2321 18.4746 5.53276Z',
  d9: 'M20.6512 16.452C20.6682 16.2992 20.6767 16.2228 20.6393 16.1635C20.6019 16.1042 20.5227 16.0768 20.3645 16.022C19.9837 15.8902 19.6128 15.7126 19.2573 15.5247C17.5958 14.6469 15.2723 14.0156 12.0407 14.0156C8.801 14.0156 6.42406 14.6502 4.73663 15.5335C4.38347 15.7183 4.01535 15.8933 3.63757 16.0235C3.47912 16.0781 3.39989 16.1054 3.36237 16.1647C3.32486 16.2241 3.3334 16.3006 3.35049 16.4536C3.35557 16.4991 3.36091 16.544 3.36653 16.5883C3.4859 17.5308 3.73976 18.3201 4.33352 18.9503C4.66868 19.3061 5.14313 19.5734 5.64867 19.7808C6.16555 19.9928 6.77424 20.1661 7.43225 20.3044C8.74893 20.5811 10.3266 20.7312 11.8991 20.7481C13.4711 20.7651 15.0678 20.6494 16.4208 20.3805C17.0973 20.2461 17.7291 20.0703 18.2731 19.8451C18.8098 19.6229 19.3062 19.3344 19.668 18.9503C20.2617 18.3201 20.5156 17.5308 20.635 16.5883C20.6406 16.5435 20.646 16.498 20.6512 16.452Z',
  d10: 'M20 13V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V13',
  d11: 'M12.0481 12C7.79797 12 4.48919 12.7799 2 14C2.43962 9.55619 4.42337 4 12.0388 4C19.6541 4 21.5791 9.55626 22 14C19.5399 12.783 16.292 12 12.0481 12Z',
  d12: 'M15 12C15 10.0614 15.0118 7.23584 17.5 5.5',
  d13: 'M3.73506 6.85089C5.24441 4.89195 7.55801 3.48609 10.9925 3.25C9.86222 4.16492 9.04248 5.35305 8.45965 6.61869C7.43698 8.83947 7.11785 11.3383 7.07085 13.1639C5.21876 13.5016 3.64678 14.0259 2.3301 14.6732C2.0858 14.7933 1.7958 14.7713 1.57231 14.6157C1.34881 14.4601 1.22687 14.1952 1.25365 13.9236C1.47948 11.634 2.10782 8.96283 3.73506 6.85089Z',
  d14: 'M17.532 4.46172C16.5233 3.91389 15.3374 3.52282 13.9489 3.33696C11.9187 3.99175 10.6362 5.48018 9.8214 7.24961C8.95967 9.12091 8.64619 11.2677 8.57905 12.9387C9.6517 12.8121 10.8068 12.7439 12.0481 12.7439C13.0473 12.7439 13.9872 12.7884 14.8712 12.8721C14.8914 10.3885 15.1135 6.92435 17.532 4.46172Z',
  d15: 'M18.8127 5.31145C19.3851 5.76979 19.8827 6.28895 20.3133 6.8542C21.9231 8.96755 22.5307 11.6396 22.7467 13.9268C22.7723 14.1984 22.6493 14.4626 22.4253 14.6174C22.2013 14.7721 21.9113 14.793 21.6675 14.672C20.2227 13.9551 18.4752 13.3878 16.3708 13.0591C16.3888 10.4698 16.5934 7.3725 18.8127 5.31145Z',
  d16: 'M20.75 15.8952V17C20.75 19.0711 19.0711 20.75 17 20.75H7C4.92893 20.75 3.25 19.0711 3.25 17V15.8966C5.35081 14.9231 8.22797 14.25 12.0481 14.25C15.8594 14.25 18.6792 14.9249 20.75 15.8952Z',
} as const;

export const IconSushi01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-01-stroke-rounded IconSushi01StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSushi01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-01-duotone-rounded IconSushi01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSushi01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-01-twotone-rounded IconSushi01TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSushi01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-01-solid-rounded IconSushi01SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconSushi01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-01-bulk-rounded IconSushi01BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconSushi01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-01-stroke-sharp IconSushi01StrokeSharp"
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
        d={d.d3} 
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

export const IconSushi01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sushi-01-solid-sharp IconSushi01SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSushi01: TheIconSelfPack = {
  name: 'Sushi01',
  StrokeRounded: IconSushi01StrokeRounded,
  DuotoneRounded: IconSushi01DuotoneRounded,
  TwotoneRounded: IconSushi01TwotoneRounded,
  SolidRounded: IconSushi01SolidRounded,
  BulkRounded: IconSushi01BulkRounded,
  StrokeSharp: IconSushi01StrokeSharp,
  SolidSharp: IconSushi01SolidSharp,
};