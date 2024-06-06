import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 2.04938C12.6711 2.01672 12.3375 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10',
  d2: 'M10 11H8.70711C8.25435 11 7.82014 10.8201 7.5 10.5M14 11H15.2929C15.7456 11 16.1799 10.8201 16.5 10.5',
  d3: 'M17 2H19.9474C20.5675 2 20.8775 2 20.9601 2.20009C21.0427 2.40019 20.8317 2.64023 20.4098 3.1203L17.9846 5.8797C17.5627 6.35977 17.3517 6.59981 17.4343 6.79991C17.5169 7 17.8269 7 18.447 7H21',
  d4: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z',
  d5: 'M19.0815 3.12505H16.9994C16.4471 3.12505 15.9994 2.67733 15.9994 2.12505C15.9994 1.57276 16.4471 1.12505 16.9994 1.12505H19.9338L19.9856 1.12502C20.247 1.12486 20.547 1.12466 20.7888 1.1614C21.0356 1.19891 21.6151 1.33193 21.867 1.94506C22.1079 2.53125 21.8245 3.02685 21.6937 3.22714C21.5594 3.43276 21.3602 3.66019 21.1801 3.86574L21.1468 3.90386C21.1287 3.92447 21.1098 3.94434 21.0902 3.96341L18.8599 6.12505H20.9818C21.5341 6.12505 21.9818 6.57276 21.9818 7.12505C21.9818 7.67733 21.5341 8.12505 20.9818 8.12505H18.0075L17.9558 8.12507C17.6944 8.12524 17.3943 8.12543 17.1525 8.08869C16.9057 8.05118 16.3263 7.91816 16.0744 7.30503C15.8335 6.71884 16.1169 6.22324 16.2477 6.02295C16.382 5.81733 16.5812 5.5899 16.7612 5.38435L16.7946 5.34624C16.8127 5.32562 16.8315 5.30575 16.8512 5.28668L19.0815 3.12505Z',
  d6: 'M12 1.375C6.06294 1.375 1.25 6.18794 1.25 12.125C1.25 18.0621 6.06294 22.875 12 22.875C17.9371 22.875 22.75 18.0621 22.75 12.125C22.75 11.3353 22.6649 10.5655 22.5032 9.82428C22.4572 9.6132 22.4342 9.50767 22.3518 9.44131C22.2694 9.37494 22.1572 9.37494 21.9328 9.37495L17.9225 9.375C17.9148 9.375 17.3002 9.37542 16.9644 9.3244C16.6296 9.27353 15.4365 9.04229 14.9178 7.78002C14.4252 6.58137 15.0301 5.60058 15.2008 5.33922C15.2687 5.2353 15.4186 5.05481 15.5806 4.86855C15.8188 4.59459 15.938 4.45761 15.9328 4.33804C15.9276 4.21847 15.7636 4.06003 15.4357 3.74316L15.4357 3.74314C15.0123 3.33401 14.749 2.76022 14.749 2.12494C14.749 2.00163 14.749 1.93998 14.7455 1.9171C14.7257 1.78994 14.6801 1.73259 14.5607 1.68468C14.5392 1.67607 14.504 1.66792 14.4337 1.65164C13.6517 1.47066 12.837 1.375 12 1.375ZM6.96967 10.0947C7.26256 9.80178 7.73744 9.80178 8.03033 10.0947C8.20982 10.2742 8.45327 10.375 8.70711 10.375H10C10.4142 10.375 10.75 10.7108 10.75 11.125C10.75 11.5392 10.4142 11.875 10 11.875H8.70711C8.05544 11.875 7.43047 11.6161 6.96967 11.1553C6.67678 10.8624 6.67678 10.3876 6.96967 10.0947ZM17.0303 10.0947C17.3232 10.3876 17.3232 10.8624 17.0303 11.1553C16.5695 11.6161 15.9446 11.875 15.2929 11.875H14C13.5858 11.875 13.25 11.5392 13.25 11.125C13.25 10.7108 13.5858 10.375 14 10.375H15.2929C15.5467 10.375 15.7902 10.2742 15.9697 10.0947C16.2626 9.80178 16.7374 9.80178 17.0303 10.0947ZM10.75 16.125C10.75 15.4346 11.3096 14.875 12 14.875C12.6904 14.875 13.25 15.4346 13.25 16.125C13.25 16.8154 12.6904 17.375 12 17.375C11.3096 17.375 10.75 16.8154 10.75 16.125ZM12 13.375C10.4812 13.375 9.25 14.6062 9.25 16.125C9.25 17.6438 10.4812 18.875 12 18.875C13.5188 18.875 14.75 17.6438 14.75 16.125C14.75 14.6062 13.5188 13.375 12 13.375Z',
  d7: 'M12 1.375C6.06294 1.375 1.25 6.18794 1.25 12.125C1.25 18.0621 6.06294 22.875 12 22.875C17.9371 22.875 22.75 18.0621 22.75 12.125C22.75 11.3353 22.6649 10.5655 22.5032 9.82428C22.4572 9.6132 22.4342 9.50767 22.3518 9.44131C22.2694 9.37494 22.1572 9.37494 21.9328 9.37495L17.9225 9.375C17.9148 9.375 17.3002 9.37542 16.9644 9.3244C16.6296 9.27353 15.4365 9.04229 14.9178 7.78002C14.4252 6.58137 15.0301 5.60058 15.2008 5.33922C15.2687 5.2353 15.4186 5.05481 15.5806 4.86855C15.8188 4.59459 15.938 4.45762 15.9328 4.33804C15.9276 4.21847 15.7636 4.06003 15.4357 3.74314C15.0123 3.33401 14.749 2.76022 14.749 2.12494C14.749 2.00163 14.749 1.93998 14.7455 1.91711C14.7257 1.78994 14.6801 1.73259 14.5607 1.68468C14.5392 1.67607 14.504 1.66792 14.4337 1.65164C13.6517 1.47066 12.837 1.375 12 1.375Z',
  d8: 'M6.96967 10.0947C7.26256 9.80178 7.73744 9.80178 8.03033 10.0947C8.20982 10.2742 8.45327 10.375 8.70711 10.375H10C10.4142 10.375 10.75 10.7108 10.75 11.125C10.75 11.5392 10.4142 11.875 10 11.875H8.70711C8.05544 11.875 7.43047 11.6161 6.96967 11.1553C6.67678 10.8624 6.67678 10.3876 6.96967 10.0947ZM17.0303 10.0947C17.3232 10.3876 17.3232 10.8624 17.0303 11.1553C16.5695 11.6161 15.9446 11.875 15.2929 11.875H14C13.5858 11.875 13.25 11.5392 13.25 11.125C13.25 10.7108 13.5858 10.375 14 10.375H15.2929C15.5467 10.375 15.7902 10.2742 15.9697 10.0947C16.2626 9.80178 16.7374 9.80178 17.0303 10.0947Z',
  d9: 'M12 14.875C11.3096 14.875 10.75 15.4346 10.75 16.125C10.75 16.8154 11.3096 17.375 12 17.375C12.6904 17.375 13.25 16.8154 13.25 16.125C13.25 15.4346 12.6904 14.875 12 14.875ZM9.25 16.125C9.25 14.6062 10.4812 13.375 12 13.375C13.5188 13.375 14.75 14.6062 14.75 16.125C14.75 17.6438 13.5188 18.875 12 18.875C10.4812 18.875 9.25 17.6438 9.25 16.125Z',
  d10: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 10.8672 22.5748 9.77534 22.25 8.75002V9.00008L18.3644 9.00012C18.1233 9.00037 17.7584 9.00074 17.4399 8.95257C17.1273 8.90527 16.0534 8.69649 15.5856 7.56301C15.1395 6.48228 15.6859 5.59492 15.8481 5.34771L16.974 4.00008L15.75 4.00008V1.92216C14.5824 1.48753 13.319 1.25 12 1.25ZM8.02941 9.96973C8.2089 10.1492 8.45235 10.2501 8.70619 10.2501H9.99908V11.7501H8.70619C8.05452 11.7501 7.42955 11.4912 6.96875 11.0304L8.02941 9.96973ZM17.0294 11.0304C16.5686 11.4912 15.9436 11.7501 15.292 11.7501H13.9991V10.2501H15.292C15.5458 10.2501 15.7893 10.1492 15.9688 9.96973L17.0294 11.0304ZM10.75 16C10.75 15.3096 11.3096 14.75 12 14.75C12.6904 14.75 13.25 15.3096 13.25 16C13.25 16.6904 12.6904 17.25 12 17.25C11.3096 17.25 10.75 16.6904 10.75 16ZM12 13.25C10.4812 13.25 9.25 14.4812 9.25 16C9.25 17.5188 10.4812 18.75 12 18.75C13.5188 18.75 14.75 17.5188 14.75 16C14.75 14.4812 13.5188 13.25 12 13.25Z',
  d11: 'M19.7368 2.75002H17.0001V1.25002H19.9475L19.9925 1.25001C20.2625 1.24991 20.5449 1.2498 20.7676 1.28347C20.9932 1.31761 21.4533 1.42906 21.6534 1.91398C21.8458 2.3801 21.6234 2.7805 21.5013 2.96667C21.3765 3.15686 21.1876 3.37162 21.0021 3.58262L20.9732 3.61544L18.6577 6.25002H21.0001V7.75002H18.4471L18.4021 7.75003C18.1321 7.75014 17.8496 7.75025 17.627 7.71657C17.4013 7.68244 16.9413 7.57099 16.7411 7.08606C16.5487 6.61995 16.7711 6.21955 16.8933 6.03338C17.0181 5.84318 17.2069 5.62842 17.3925 5.41741L17.4214 5.38461L19.7368 2.75002Z',
} as const;

export const IconSleepingStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sleeping-stroke-rounded IconSleepingStrokeRounded"
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
      <circle 
        cx="12" 
        cy="16" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSleepingDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sleeping-duotone-rounded IconSleepingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <circle 
        cx="12" 
        cy="16" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSleepingTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sleeping-twotone-rounded IconSleepingTwotoneRounded"
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
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="16" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSleepingSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sleeping-solid-rounded IconSleepingSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSleepingBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sleeping-bulk-rounded IconSleepingBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const IconSleepingStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sleeping-stroke-sharp IconSleepingStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="16" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSleepingSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="sleeping-solid-sharp IconSleepingSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSleeping: TheIconSelfPack = {
  name: 'Sleeping',
  StrokeRounded: IconSleepingStrokeRounded,
  DuotoneRounded: IconSleepingDuotoneRounded,
  TwotoneRounded: IconSleepingTwotoneRounded,
  SolidRounded: IconSleepingSolidRounded,
  BulkRounded: IconSleepingBulkRounded,
  StrokeSharp: IconSleepingStrokeSharp,
  SolidSharp: IconSleepingSolidSharp,
};