import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.29424 14C7.91955 14 7.23221 14 6.65717 13.7642C6.02495 13.5049 5.48333 13.0456 5.10588 12.4488C4.76258 11.9059 4.6117 11.1951 4.30994 9.77358C4.05199 8.55844 3.92302 7.95087 4.04847 7.4685C4.186 6.93967 4.52244 6.49392 4.97901 6.23561C5.39547 6 5.98301 6 7.15811 6H16.8419C18.017 6 18.6045 6 19.021 6.23561C19.4776 6.49392 19.814 6.93967 19.9515 7.4685C20.077 7.95087 19.948 8.55844 19.6901 9.77359C19.3883 11.1951 19.2374 11.9059 18.8941 12.4488C18.5167 13.0456 17.9751 13.5049 17.3428 13.7642C16.7678 14 16.0804 14 14.7058 14',
  d2: 'M6 6L6.51493 3.94029C6.80001 2.79997 7.82459 2 9 2',
  d3: 'M18 6L17.4851 3.94029C17.2 2.79997 16.1754 2 15 2',
  d4: 'M9.28421 12L10.0603 17.5726C10.1053 17.8955 10.1278 18.0569 10.0834 18.1822C9.87682 18.7653 9.08754 18.3874 8.66068 18.5626C8.53152 18.6156 8.41501 18.7004 8.32003 18.8107C8.20789 18.9409 8.13871 19.1192 8.00036 19.4758C7.73896 20.1496 7.15042 21.0988 7.78292 21.7379C8.04234 22 8.50275 22 9.42357 22H14.5764C15.4972 22 15.9577 22 16.2171 21.7379C16.8496 21.0988 16.261 20.1496 15.9996 19.4758C15.8613 19.1192 15.7921 18.9409 15.68 18.8107C15.585 18.7004 15.4685 18.6156 15.3393 18.5626C14.9125 18.3874 14.1232 18.7653 13.9166 18.1822C13.8722 18.0569 13.8947 17.8955 13.9397 17.5726L14.7158 12',
  d5: 'M16.8419 6H7.15811C5.98301 6 5.39547 6 4.97901 6.23561C4.52244 6.49392 4.186 6.93967 4.04847 7.4685C3.92302 7.95087 4.05199 8.55844 4.30994 9.77358C4.6117 11.1951 4.76258 11.9059 5.10588 12.4488C5.48333 13.0456 6.02495 13.5049 6.65717 13.7642C7.23221 14 7.91955 14 9.29424 14H9.56275L10.0603 17.5726C10.1053 17.8955 10.1278 18.0569 10.0834 18.1822C9.87682 18.7653 9.08754 18.3874 8.66068 18.5626C8.53152 18.6156 8.41501 18.7004 8.32003 18.8107C8.20789 18.9409 8.13871 19.1192 8.00036 19.4758C7.73896 20.1496 7.15042 21.0988 7.78292 21.7379C8.04234 22 8.50275 22 9.42357 22H14.5764C15.4972 22 15.9577 22 16.2171 21.7379C16.8496 21.0988 16.261 20.1496 15.9996 19.4758C15.8613 19.1192 15.7921 18.9409 15.68 18.8107C15.585 18.7004 15.4685 18.6156 15.3393 18.5626C14.9125 18.3874 14.1232 18.7653 13.9166 18.1822C13.8722 18.0569 13.8947 17.8955 13.9397 17.5726L14.4372 14H14.7058C16.0804 14 16.7678 14 17.3428 13.7642C17.9751 13.5049 18.5167 13.0456 18.8941 12.4488C19.2374 11.9059 19.3883 11.1951 19.6901 9.77359C19.948 8.55844 20.077 7.95087 19.9515 7.4685C19.814 6.93967 19.4776 6.49392 19.021 6.23561C18.6045 6 18.017 6 16.8419 6Z',
  d6: 'M9.00024 1C7.36595 1 5.94139 2.11226 5.54502 3.69775L5.05474 5.65888C4.94309 5.69582 4.83588 5.74212 4.73281 5.80043C4.153 6.12846 3.7346 6.68889 3.56457 7.34265C3.47807 7.67526 3.48754 8.02232 3.53987 8.41269C3.59121 8.79568 3.69121 9.26677 3.81656 9.85725L3.8452 9.99222C4.12337 11.3036 4.29156 12.0965 4.6833 12.716C5.11424 13.3974 5.73584 13.9267 6.46745 14.2268C7.12657 14.4971 7.89603 14.5002 9.12708 14.5L9.5646 17.6415C9.58821 17.8111 9.60149 17.9091 9.60573 17.981C8.99711 17.981 8.36403 17.9929 7.94069 18.4844C7.77069 18.6818 7.6715 18.9385 7.55807 19.232C7.50436 19.371 7.44521 19.508 7.38606 19.6449C7.26562 19.9237 7.14522 20.2023 7.07098 20.4981C6.95048 20.9782 6.93376 21.5912 7.42705 22.0896C7.67211 22.3372 7.98459 22.4249 8.29283 22.4634C8.58661 22.5 8.95809 22.5 9.39158 22.5H14.6074C15.0409 22.5 15.4124 22.5 15.7062 22.4634C16.0144 22.4249 16.3269 22.3372 16.572 22.0896C17.0653 21.5912 17.0485 20.9782 16.928 20.4981C16.8538 20.2023 16.7334 19.9237 16.613 19.6449C16.5538 19.508 16.4947 19.371 16.441 19.232C16.3275 18.9385 16.2283 18.6818 16.0583 18.4844C15.635 17.9929 15.0019 17.981 14.3933 17.981C14.3975 17.9091 14.4108 17.8111 14.4344 17.6415L14.8719 14.5C16.1036 14.5003 16.8733 14.4972 17.5326 14.2268C18.2642 13.9267 18.8858 13.3974 19.3167 12.716C19.7084 12.0965 19.8766 11.3036 20.1548 9.99222L20.1834 9.85725L20.1835 9.85694L20.1836 9.8567L20.1836 9.85661C20.3089 9.26645 20.4088 8.79553 20.4601 8.41269C20.5125 8.02232 20.5219 7.67526 20.4354 7.34266C20.2654 6.68889 19.847 6.12846 19.2672 5.80043C19.1642 5.74216 19.0571 5.69589 18.9455 5.65896L18.4552 3.69775C18.0588 2.11226 16.6343 1 15 1C14.4477 1 14 1.44772 14 2C14 2.55228 14.4477 3 15 3C15.7165 3 16.3411 3.48767 16.5149 4.18282L16.8442 5.5H7.15601L7.48531 4.18282C7.6591 3.48767 8.28369 3 9.00024 3C9.55252 3 10.0002 2.55228 10.0002 2C10.0002 1.44772 9.55252 1 9.00024 1Z',
  d7: 'M16.8646 5.5H7.1354C6.56713 5.49999 6.10877 5.49999 5.74165 5.53126C5.36538 5.5633 5.03173 5.63132 4.73281 5.80043C4.153 6.12846 3.7346 6.68889 3.56457 7.34265C3.47807 7.67526 3.48754 8.02232 3.53987 8.41269C3.59121 8.79568 3.69121 9.26677 3.81656 9.85725L3.8452 9.99222C4.12337 11.3036 4.29156 12.0965 4.6833 12.716C5.11424 13.3974 5.73584 13.9267 6.46745 14.2268C7.13477 14.5005 7.91519 14.5003 9.17322 14.5H14.8268C16.0848 14.5003 16.8652 14.5005 17.5326 14.2268C18.2642 13.9267 18.8858 13.3974 19.3167 12.716C19.7084 12.0965 19.8766 11.3036 20.1548 9.99222L20.1834 9.85725C20.3088 9.26679 20.4088 8.79566 20.4601 8.41269C20.5125 8.02232 20.5219 7.67526 20.4354 7.34266C20.2654 6.68889 19.847 6.12846 19.2672 5.80043C18.9683 5.63132 18.6346 5.5633 18.2584 5.53126C17.8912 5.49999 17.4329 5.49999 16.8646 5.5Z',
  d8: 'M9.00024 1C7.36595 1 5.94139 2.11226 5.54502 3.69775L5.03009 5.75746C4.89615 6.29326 5.22191 6.83619 5.7577 6.97014C6.2935 7.10409 6.83643 6.77833 6.97038 6.24254L7.48531 4.18282C7.6591 3.48767 8.28369 3 9.00024 3C9.55252 3 10.0002 2.55228 10.0002 2C10.0002 1.44772 9.55252 1 9.00024 1ZM15 1C14.4477 1 14 1.44772 14 2C14 2.55228 14.4477 3 15 3C15.7165 3 16.3411 3.48767 16.5149 4.18282L17.0299 6.24254C17.1638 6.77833 17.7067 7.10409 18.2425 6.97014C18.7783 6.83619 19.1041 6.29326 18.9701 5.75746L18.4552 3.69775C18.0588 2.11226 16.6343 1 15 1Z',
  d9: 'M8.90657 11.6717C9.00153 11.5626 9.13908 11.5 9.28372 11.5H14.7153C14.8599 11.5 14.9975 11.5626 15.0925 11.6717C15.1874 11.7808 15.2305 11.9257 15.2105 12.069L14.4344 17.6415C14.4108 17.8111 14.3975 17.9091 14.3933 17.981C15.0019 17.981 15.635 17.9929 16.0583 18.4844C16.2283 18.6818 16.3275 18.9385 16.441 19.232C16.604 19.6541 16.8173 20.0571 16.928 20.4981C17.0485 20.9782 17.0653 21.5912 16.572 22.0896C16.3269 22.3372 16.0144 22.4249 15.7062 22.4634C15.4124 22.5 15.0409 22.5 14.6074 22.5H9.39158C8.95809 22.5 8.58661 22.5 8.29283 22.4634C7.98459 22.4249 7.67211 22.3372 7.42705 22.0896C6.93376 21.5912 6.95048 20.9782 7.07098 20.4981C7.18167 20.0571 7.395 19.6541 7.55807 19.232C7.6715 18.9385 7.77069 18.6818 7.94069 18.4844C8.36403 17.9929 8.99711 17.981 9.60574 17.981C9.60149 17.9091 9.58821 17.8111 9.5646 17.6415L8.7885 12.069C8.76855 11.9257 8.81161 11.7808 8.90657 11.6717Z',
  d10: 'M9.29424 14H5.5L4 6H20L18.5 14H14.7058',
  d11: 'M6 6L7 2.00001L9 2',
  d12: 'M18 6L17 2.00001L15 2',
  d13: 'M9.28418 11L9.99902 22M14.7158 11L13.8784 22M7.99902 22H15.999',
  d14: 'M7.17375 1.25L9.10484 1.25L9.10485 3.13077L7.92763 3.13077L7.14492 6.18L5.27148 5.72385L6.23703 1.96231C6.34449 1.54369 6.73069 1.25001 7.17375 1.25ZM16.0753 3.13077L14.8981 3.13077L14.8981 1.25L16.8292 1.25C17.2723 1.25001 17.6585 1.54369 17.7659 1.96231L18.7315 5.72385L16.858 6.18L16.0753 3.13077Z',
  d15: 'M3.42287 5.52102C3.56536 5.34934 3.77689 5.25 4.00001 5.25H20C20.2231 5.25 20.4346 5.34934 20.5771 5.52102C20.7196 5.69271 20.7783 5.91892 20.7372 6.13822L19.2372 14.1382C19.1706 14.4929 18.8609 14.75 18.5 14.75H15.1834L14.7267 20.75H16V22.7498L8 22.75V20.75H9.1672L8.77728 14.75H5.50001C5.13909 14.75 4.82936 14.4929 4.76285 14.1382L3.26285 6.13822C3.22173 5.91892 3.28039 5.69271 3.42287 5.52102Z',
} as const;

export const IconPresentationPodiumStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-podium-stroke-rounded IconPresentationPodiumStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationPodiumDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-podium-duotone-rounded IconPresentationPodiumDuotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationPodiumTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-podium-twotone-rounded IconPresentationPodiumTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationPodiumSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-podium-solid-rounded IconPresentationPodiumSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationPodiumBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-podium-bulk-rounded IconPresentationPodiumBulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconPresentationPodiumStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-podium-stroke-sharp IconPresentationPodiumStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPresentationPodiumSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="presentation-podium-solid-sharp IconPresentationPodiumSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPresentationPodium: TheIconSelfPack = {
  name: 'PresentationPodium',
  StrokeRounded: IconPresentationPodiumStrokeRounded,
  DuotoneRounded: IconPresentationPodiumDuotoneRounded,
  TwotoneRounded: IconPresentationPodiumTwotoneRounded,
  SolidRounded: IconPresentationPodiumSolidRounded,
  BulkRounded: IconPresentationPodiumBulkRounded,
  StrokeSharp: IconPresentationPodiumStrokeSharp,
  SolidSharp: IconPresentationPodiumSolidSharp,
};