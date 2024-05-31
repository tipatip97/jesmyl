import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.05025 10.0498C1.31658 12.7835 1.31658 17.2156 4.05025 19.9493C6.78392 22.683 11.2161 22.683 13.9497 19.9493L17.899 16M12.1001 2L6.5 7.60006M22 11.899L20 13.899',
  d2: 'M11.1213 12.8787C12.2929 14.0503 12.2929 15.9497 11.1213 17.1213C9.94975 18.2929 8.05025 18.2929 6.87868 17.1213C5.70711 15.9497 5.70711 14.0503 6.87868 12.8787C8.05025 11.7071 9.94975 11.7071 11.1213 12.8787Z',
  d3: 'M6.87891 12.8795L14 5.75787M17.7576 2L16 3.75772M22 6.24338L15.3639 12.8795',
  d4: 'M12.7888 1.53623C13.1705 1.91787 13.1705 2.53664 12.7888 2.91828L7.31604 8.39097C6.93439 8.77261 6.31561 8.77261 5.93396 8.39097C5.55232 8.00933 5.55232 7.39056 5.93396 7.00892L11.4067 1.53623C11.7884 1.15459 12.4072 1.15459 12.7888 1.53623ZM4.92196 9.40295C5.30361 9.78459 5.30361 10.4034 4.92196 10.785C2.63207 13.0748 2.63207 16.7874 4.92196 19.0773C7.21186 21.3671 10.9245 21.3671 13.2144 19.0773L17.0739 15.2178C17.4556 14.8362 18.0744 14.8362 18.456 15.2178C18.8377 15.5995 18.8377 16.2182 18.456 16.5999L14.5965 20.4593C11.5433 23.5125 6.59308 23.5125 3.53989 20.4593C0.486703 17.4062 0.486703 12.4561 3.53989 9.40295C3.92154 9.02131 4.54032 9.02131 4.92196 9.40295ZM22.4638 11.2101C22.8454 11.5918 22.8454 12.2105 22.4638 12.5922L20.5092 14.5467C20.1276 14.9283 19.5088 14.9283 19.1271 14.5467C18.7455 14.165 18.7455 13.5463 19.1271 13.1646L21.0817 11.2101C21.4633 10.8285 22.0821 10.8285 22.4638 11.2101Z',
  d5: 'M6.30315 12.1684C7.82974 10.6418 10.3048 10.6418 11.8314 12.1684C13.358 13.6949 13.358 16.17 11.8314 17.6966C10.3048 19.2231 7.82974 19.2231 6.30315 17.6966C4.77655 16.17 4.77655 13.6949 6.30315 12.1684Z',
  d6: 'M18.3173 1.53621C18.699 1.91783 18.699 2.5366 18.3174 2.91825L16.5997 4.636C16.2181 5.01765 15.5993 5.01768 15.2176 4.63605C14.836 4.25442 14.8359 3.63566 15.2176 3.254L16.9352 1.53626C17.3169 1.1546 17.9356 1.15458 18.3173 1.53621ZM14.6451 5.20861C15.0268 5.59024 15.0268 6.209 14.6452 6.59066L7.68591 13.5503C7.30428 13.932 6.6855 13.932 6.30384 13.5504C5.92218 13.1687 5.92215 12.55 6.30379 12.1683L13.263 5.20866C13.6447 4.827 14.2634 4.82698 14.6451 5.20861ZM22.4633 5.6831C22.845 6.06474 22.845 6.68351 22.4633 7.06515L15.978 13.5503C15.5964 13.932 14.9776 13.932 14.5959 13.5503C14.2143 13.1687 14.2143 12.5499 14.5959 12.1683L21.0812 5.6831C21.4629 5.30146 22.0817 5.30146 22.4633 5.6831Z',
  d7: 'M18.3167 2.91825C18.6983 2.5366 18.6983 1.91783 18.3166 1.53621C17.9349 1.15458 17.3162 1.1546 16.9345 1.53626L15.2169 3.254C14.8353 3.63566 14.8353 4.25442 15.2169 4.63605C15.5986 5.01768 16.2174 5.01765 16.599 4.636L18.3167 2.91825Z',
  d8: 'M14.6445 6.59066C15.0261 6.209 15.0261 5.59024 14.6444 5.20861C14.2628 4.82698 13.644 4.827 13.2623 5.20866L6.34375 12.1277C7.36442 11.1363 8.79243 10.8124 10.0792 11.1562L14.6445 6.59066Z',
  d9: 'M22.4626 7.06515C22.8443 6.68351 22.8443 6.06474 22.4626 5.6831C22.081 5.30146 21.4622 5.30146 21.0806 5.6831L14.5952 12.1683C14.2136 12.5499 14.2136 13.1687 14.5952 13.5503C14.9769 13.932 15.5957 13.932 15.9773 13.5503L22.4626 7.06515Z',
  d10: 'M12.789 2.91917L7.31612 8.39191L5.93403 7.00985L11.4069 1.53711L12.789 2.91917ZM4.92202 10.786C2.63209 13.0758 2.63209 16.7885 4.92202 19.0783C7.21194 21.3682 10.9246 21.3682 13.2146 19.0783L17.0742 15.2188L18.4563 16.6009L14.5967 20.4604C11.5434 23.5136 6.59316 23.5136 3.53992 20.4604C0.486692 17.4072 0.486692 12.4571 3.53992 9.4039L4.92202 10.786ZM22.4641 12.5932L20.5095 14.5477L19.1274 13.1656L21.082 11.2111L22.4641 12.5932Z',
  d11: 'M6.30317 12.1684C7.82978 10.6418 10.3049 10.6418 11.8315 12.1684C13.3581 13.695 13.3581 16.17 11.8315 17.6966C10.3049 19.2232 7.82978 19.2232 6.30317 17.6966C4.77655 16.17 4.77655 13.695 6.30317 12.1684Z',
  d12: 'M18.6043 2.63201L16.6008 4.63582L15.2186 3.25381L17.2221 1.25L18.6043 2.63201ZM14.6462 6.5905L7.68683 13.5502L6.30469 12.1682L13.264 5.20849L14.6462 6.5905ZM22.7503 6.77895L15.979 13.5503L14.597 12.1682L21.3682 5.39688L22.7503 6.77895Z',
} as const;

export const IconComet01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comet-01-stroke-rounded IconComet01StrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComet01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comet-01-duotone-rounded IconComet01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconComet01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comet-01-twotone-rounded IconComet01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconComet01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comet-01-solid-rounded IconComet01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconComet01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comet-01-bulk-rounded IconComet01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconComet01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comet-01-stroke-sharp IconComet01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconComet01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="comet-01-solid-sharp IconComet01SolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfComet01: TheIconSelfPack = {
  name: 'Comet01',
  StrokeRounded: IconComet01StrokeRounded,
  DuotoneRounded: IconComet01DuotoneRounded,
  TwotoneRounded: IconComet01TwotoneRounded,
  SolidRounded: IconComet01SolidRounded,
  BulkRounded: IconComet01BulkRounded,
  StrokeSharp: IconComet01StrokeSharp,
  SolidSharp: IconComet01SolidSharp,
};