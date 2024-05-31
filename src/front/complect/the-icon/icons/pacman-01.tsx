import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 12H21.991M18.009 12H18',
  d2: 'M10.5119 7.5L10.5029 7.5',
  d3: 'M2 12C2 16.9706 5.94274 21 10.8064 21C13.2733 21 15.5033 19.9634 17.102 18.2931C17.7426 17.6238 18.0629 17.2892 17.9897 16.7418C17.9166 16.1945 17.4528 15.9208 16.525 15.3735L15.7671 14.9264C13.5637 13.6266 12.462 12.9767 12.462 12C12.462 11.0233 13.5637 10.3734 15.7671 9.07358L16.525 8.62647C17.4528 8.07919 17.9166 7.80555 17.9897 7.25817C18.0629 6.71078 17.7426 6.37617 17.102 5.70695C15.5033 4.03665 13.2733 3 10.8064 3C5.94274 3 2 7.02944 2 12Z',
  d4: 'M2 12C2 16.9706 5.94274 21 10.8064 21C13.2733 21 15.5033 19.9634 17.102 18.2931C17.7426 17.6238 18.0629 17.2892 17.9897 16.7418C17.9166 16.1945 17.4528 15.9208 16.525 15.3735L15.7671 14.9264C13.5637 13.6266 12.462 12.9767 12.462 12C12.462 11.0233 13.5637 10.3734 15.7671 9.07358L16.525 8.62647C17.4528 8.07919 17.9166 7.80555 17.9897 7.25816C18.0629 6.71078 17.7426 6.37617 17.102 5.70695C15.5033 4.03665 13.2733 3 10.8064 3C5.94274 3 2 7.02944 2 12Z',
  d5: 'M16.375 12C16.375 11.3096 16.9346 10.75 17.625 10.75H17.634C18.3243 10.75 18.884 11.3096 18.884 12C18.884 12.6904 18.3243 13.25 17.634 13.25H17.625C16.9346 13.25 16.375 12.6904 16.375 12ZM20.366 12C20.366 11.3096 20.9257 10.75 21.616 10.75H21.625C22.3154 10.75 22.875 11.3096 22.875 12C22.875 12.6904 22.3154 13.25 21.625 13.25H21.616C20.9257 13.25 20.366 12.6904 20.366 12Z',
  d6: 'M10.6814 2.25C5.38823 2.25 1.125 6.63069 1.125 12C1.125 17.3693 5.38823 21.75 10.6814 21.75C13.3637 21.75 15.7863 20.6217 17.5188 18.8117C17.8063 18.5116 18.129 18.1746 18.3201 17.8763C18.5507 17.5162 18.6719 17.1195 18.6081 16.6425C18.5403 16.1342 18.2764 15.7738 17.9391 15.4866C17.6479 15.2386 16.446 14.5298 16.0232 14.2804C14.8995 13.6176 14.1327 13.1628 13.6359 12.7597C13.147 12.363 13.087 12.1484 13.087 12C13.087 11.8516 13.147 11.637 13.6359 11.2403C14.1327 10.8372 14.8995 10.3824 16.0232 9.71956C16.446 9.47023 17.6479 8.76135 17.9391 8.51342C18.2764 8.22623 18.5403 7.86576 18.6081 7.35746C18.6719 6.88049 18.5507 6.48382 18.3201 6.1237C18.129 5.82539 17.8441 5.52795 17.5567 5.22785L17.5188 5.18835C15.7863 3.37828 13.3637 2.25 10.6814 2.25ZM10.3912 8.75C11.0791 8.75 11.6367 8.19036 11.6367 7.5C11.6367 6.80964 11.0791 6.25 10.3912 6.25H10.3822C9.69436 6.25 9.13672 6.80964 9.13672 7.5C9.13672 8.19036 9.69436 8.75 10.3822 8.75H10.3912Z',
  d7: 'M1.125 12C1.125 6.63069 5.38823 2.25 10.6814 2.25C13.3637 2.25 15.7863 3.37828 17.5188 5.18835L17.5567 5.22785C17.8441 5.52795 18.129 5.82539 18.3201 6.1237C18.5507 6.48382 18.6719 6.88049 18.6081 7.35746C18.5403 7.86576 18.2764 8.22623 17.9391 8.51342C17.6479 8.76135 16.446 9.47023 16.0232 9.71956C14.8995 10.3824 14.1327 10.8372 13.6359 11.2403C13.147 11.637 13.087 11.8516 13.087 12C13.087 12.1484 13.147 12.363 13.6359 12.7597C14.1327 13.1628 14.8995 13.6176 16.0232 14.2804C16.446 14.5298 17.6479 15.2386 17.9391 15.4866C18.2764 15.7738 18.5403 16.1342 18.6081 16.6425C18.6719 17.1195 18.5507 17.5162 18.3201 17.8763C18.129 18.1746 17.8063 18.5116 17.5188 18.8117C15.7863 20.6217 13.3637 21.75 10.6814 21.75C5.38823 21.75 1.125 17.3693 1.125 12Z',
  d8: 'M11.6367 7.5C11.6367 8.19036 11.0791 8.75 10.3912 8.75L10.3822 8.75C9.69436 8.75 9.13672 8.19036 9.13672 7.5C9.13672 6.80964 9.69436 6.25 10.3822 6.25L10.3912 6.25C11.0791 6.25 11.6367 6.80964 11.6367 7.5Z',
  d9: 'M2 12C2 16.9706 6.02944 21 11 21C14.1305 21 16.8876 19.4017 18.5 16.9767L12 12L18.5 7.02331C16.8876 4.59826 14.1305 3 11 3C6.02944 3 2 7.02944 2 12Z',
  d10: 'M16.5 12C16.5 11.4477 16.9477 11 17.5 11H17.509C18.0612 11 18.509 11.4477 18.509 12C18.509 12.5523 18.0612 13 17.509 13H17.5C16.9477 13 16.5 12.5523 16.5 12ZM20.491 12C20.491 11.4477 20.9388 11 21.491 11H21.5C22.0523 11 22.5 11.4477 22.5 12C22.5 12.5523 22.0523 13 21.5 13H21.491C20.9388 13 20.491 12.5523 20.491 12Z',
  d11: 'M11.25 2.25C5.86522 2.25 1.5 6.61522 1.5 12C1.5 17.3848 5.86522 21.75 11.25 21.75C14.6421 21.75 17.6291 20.0172 19.3745 17.3919L19.763 16.8077L13.4837 12L19.763 7.19229L19.3745 6.60805C17.6291 3.98282 14.6421 2.25 11.25 2.25ZM11.0045 9C11.5543 9 12 8.55228 12 8C12 7.44772 11.5543 7 11.0045 7H10.9955C10.4457 7 10 7.44771 10 8C10 8.55228 10.4457 9 10.9955 9H11.0045Z',
} as const;

export const IconPacman01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pacman-01-stroke-rounded IconPacman01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPacman01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pacman-01-duotone-rounded IconPacman01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconPacman01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pacman-01-twotone-rounded IconPacman01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPacman01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pacman-01-solid-rounded IconPacman01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconPacman01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pacman-01-bulk-rounded IconPacman01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconPacman01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pacman-01-stroke-sharp IconPacman01StrokeSharp"
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPacman01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pacman-01-solid-sharp IconPacman01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPacman01: TheIconSelfPack = {
  name: 'Pacman01',
  StrokeRounded: IconPacman01StrokeRounded,
  DuotoneRounded: IconPacman01DuotoneRounded,
  TwotoneRounded: IconPacman01TwotoneRounded,
  SolidRounded: IconPacman01SolidRounded,
  BulkRounded: IconPacman01BulkRounded,
  StrokeSharp: IconPacman01StrokeSharp,
  SolidSharp: IconPacman01SolidSharp,
};