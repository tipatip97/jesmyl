import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.00017 11.9496C1.96943 12.9853 6.03156 15.4206 6.41417 14.9373C7.15382 13.8962 7.21955 10.1078 6.45955 9.06478C6.10401 8.58035 2.03018 10.9389 2.00017 11.9496Z',
  d2: 'M11.9496 21.9998C12.9853 22.0306 15.4206 17.9684 14.9373 17.5858C13.8962 16.8462 10.1078 16.7805 9.06478 17.5404C8.58035 17.896 10.9389 21.9698 11.9496 21.9998Z',
  d3: 'M21.9998 11.9496C22.0306 12.9853 17.9684 15.4206 17.5858 14.9373C16.8462 13.8962 16.7805 10.1078 17.5404 9.06478C17.896 8.58035 21.9698 10.9389 21.9998 11.9496Z',
  d4: 'M11.9496 2.00017C12.9853 1.96943 15.4206 6.03156 14.9373 6.41417C13.8962 7.15382 10.1078 7.21955 9.06478 6.45955C8.58035 6.10401 10.9389 2.03018 11.9496 2.00017Z',
  d5: 'M15.7345 6.42454C15.7081 6.58316 15.6296 6.82269 15.4027 7.00225C15.0059 7.28418 14.4104 7.47388 13.867 7.57702C13.298 7.68504 12.6494 7.74183 12.0104 7.74918C11.3717 7.75653 10.7211 7.71472 10.1488 7.61624C9.60353 7.52241 9.02656 7.35969 8.62102 7.06419C8.38264 6.88923 8.29794 6.64618 8.26863 6.487C8.23943 6.32838 8.24952 6.17831 8.26525 6.06443C8.29714 5.83368 8.37757 5.58202 8.47036 5.34429C8.66028 4.85775 8.9646 4.27317 9.30749 3.71515C9.65058 3.15678 10.0523 2.59238 10.4491 2.15543C10.6465 1.93803 10.8594 1.73348 11.0784 1.57638C11.279 1.43252 11.5763 1.26093 11.9273 1.25051C12.2874 1.23982 12.5977 1.40023 12.8086 1.5396C13.0371 1.69055 13.2585 1.8909 13.4629 2.10426C13.8737 2.53314 14.2896 3.09272 14.6448 3.64797C15.0001 4.20319 15.316 4.78739 15.5148 5.27626C15.612 5.51538 15.6964 5.76831 15.7317 6.00111C15.7491 6.11627 15.7609 6.26607 15.7345 6.42454Z',
  d6: 'M15.7345 17.5755C15.7081 17.4168 15.6296 17.1773 15.4027 16.9978C15.0059 16.7158 14.4104 16.5261 13.867 16.423C13.298 16.315 12.6494 16.2582 12.0104 16.2508C11.3717 16.2435 10.7211 16.2853 10.1488 16.3838C9.60353 16.4776 9.02656 16.6403 8.62102 16.9358C8.38264 17.1108 8.29794 17.3538 8.26863 17.513C8.23943 17.6716 8.24952 17.8217 8.26525 17.9356C8.29714 18.1663 8.37757 18.418 8.47036 18.6557C8.66028 19.1422 8.9646 19.7268 9.30749 20.2849C9.65058 20.8432 10.0523 21.4076 10.4491 21.8446C10.6465 22.062 10.8594 22.2665 11.0784 22.4236C11.279 22.5675 11.5763 22.7391 11.9273 22.7495C12.2874 22.7602 12.5977 22.5998 12.8086 22.4604C13.0371 22.3095 13.2585 22.1091 13.4629 21.8957C13.8737 21.4669 14.2896 20.9073 14.6448 20.352C15.0001 19.7968 15.316 19.2126 15.5148 18.7237C15.612 18.4846 15.6964 18.2317 15.7317 17.9989C15.7491 17.8837 15.7609 17.7339 15.7345 17.5755Z',
  d7: 'M17.5755 15.7345C17.4168 15.7081 17.1773 15.6296 16.9978 15.4027C16.7158 15.0059 16.5261 14.4104 16.423 13.867C16.315 13.298 16.2582 12.6494 16.2508 12.0104C16.2435 11.3717 16.2853 10.7211 16.3838 10.1488C16.4776 9.60353 16.6403 9.02656 16.9358 8.62102C17.1108 8.38264 17.3538 8.29794 17.513 8.26863C17.6716 8.23943 17.8217 8.24952 17.9356 8.26525C18.1663 8.29714 18.418 8.37757 18.6557 8.47036C19.1422 8.66028 19.7268 8.9646 20.2849 9.30749C20.8432 9.65058 21.4076 10.0523 21.8446 10.4491C22.062 10.6465 22.2665 10.8594 22.4236 11.0784C22.5675 11.279 22.7391 11.5763 22.7495 11.9273C22.7602 12.2874 22.5998 12.5977 22.4604 12.8086C22.3095 13.0371 22.1091 13.2585 21.8957 13.4629C21.4669 13.8737 20.9073 14.2896 20.352 14.6448C19.7968 15.0001 19.2126 15.316 18.7237 15.5148C18.4846 15.612 18.2317 15.6964 17.9989 15.7317C17.8837 15.7491 17.7339 15.7609 17.5755 15.7345Z',
  d8: 'M6.42454 15.7345C6.58316 15.7081 6.82269 15.6296 7.00225 15.4027C7.28418 15.0059 7.47388 14.4104 7.57702 13.867C7.68504 13.298 7.74183 12.6494 7.74918 12.0104C7.75653 11.3717 7.71472 10.7211 7.61624 10.1488C7.52241 9.60354 7.35969 9.02656 7.06419 8.62102C6.88923 8.38264 6.64618 8.29794 6.487 8.26863C6.32838 8.23943 6.17831 8.24952 6.06443 8.26525C5.83368 8.29714 5.58202 8.37757 5.34429 8.47036C4.85775 8.66028 4.27317 8.9646 3.71515 9.30749C3.15678 9.65058 2.59238 10.0523 2.15543 10.4491C1.93803 10.6465 1.73348 10.8594 1.57638 11.0784C1.43252 11.279 1.26093 11.5763 1.25051 11.9273C1.23982 12.2874 1.40023 12.5977 1.5396 12.8086C1.69055 13.0371 1.8909 13.2585 2.10426 13.4629C2.53314 13.8737 3.09272 14.2896 3.64797 14.6448C4.20319 15.0001 4.78739 15.316 5.27626 15.5148C5.51538 15.612 5.76831 15.6964 6.00111 15.7317C6.11627 15.7491 6.26607 15.7609 6.42454 15.7345Z',
  d9: 'M9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12Z',
  d10: 'M11.9493 2L15 7H9L11.9493 2Z',
  d11: 'M11.9493 22L15 17H9L11.9493 22Z',
  d12: 'M22 11.9493L17 15L17 9L22 11.9493Z',
  d13: 'M2 11.9493L7 15V9L2 11.9493Z',
  d14: 'M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z',
  d15: 'M11.9437 1.25002C12.2071 1.24805 12.4523 1.38446 12.5895 1.60936L15.6402 6.60936C15.7815 6.84087 15.7868 7.1306 15.654 7.3671C15.5213 7.60359 15.2712 7.75 15 7.75H9C8.7308 7.75 8.48225 7.60573 8.34874 7.37197C8.21523 7.13821 8.21724 6.85083 8.35401 6.61896L11.3033 1.61896C11.4371 1.39204 11.6802 1.25199 11.9437 1.25002Z',
  d16: 'M8.34874 16.628C8.48225 16.3943 8.7308 16.25 9 16.25H15C15.2712 16.25 15.5213 16.3964 15.654 16.6329C15.7868 16.8694 15.7815 17.1591 15.6402 17.3906L12.5895 22.3906C12.4523 22.6155 12.2071 22.7519 11.9437 22.75C11.6802 22.748 11.4371 22.608 11.3033 22.381L8.35401 17.381C8.21724 17.1492 8.21523 16.8618 8.34874 16.628Z',
  d17: 'M16.628 8.34874C16.8618 8.21523 17.1492 8.21724 17.381 8.35401L22.381 11.3033C22.608 11.4371 22.748 11.6802 22.75 11.9437C22.7519 12.2071 22.6155 12.4523 22.3906 12.5895L17.3906 15.6402C17.1591 15.7815 16.8694 15.7868 16.6329 15.654C16.3964 15.5213 16.25 15.2712 16.25 15V9C16.25 8.7308 16.3943 8.48225 16.628 8.34874Z',
  d18: 'M7.37197 8.34874C7.60573 8.48225 7.75 8.7308 7.75 9V15C7.75 15.2712 7.60359 15.5213 7.3671 15.654C7.1306 15.7868 6.84087 15.7815 6.60936 15.6402L1.60936 12.5895C1.38446 12.4523 1.24805 12.2071 1.25002 11.9437C1.25199 11.6802 1.39204 11.4371 1.61896 11.3033L6.61896 8.35401C6.85083 8.21724 7.13821 8.21523 7.37197 8.34874Z',
} as const;

export const IconNavigation02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="navigation-02-stroke-rounded IconNavigation02StrokeRounded"
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
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconNavigation02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="navigation-02-duotone-rounded IconNavigation02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="2" 
        fill="var(--icon-fill)"></circle>
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
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconNavigation02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="navigation-02-twotone-rounded IconNavigation02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconNavigation02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="navigation-02-solid-rounded IconNavigation02SolidRounded"
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

export const IconNavigation02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="navigation-02-bulk-rounded IconNavigation02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconNavigation02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="navigation-02-stroke-sharp IconNavigation02StrokeSharp"
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
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNavigation02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="navigation-02-solid-sharp IconNavigation02SolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNavigation02: TheIconSelfPack = {
  name: 'Navigation02',
  StrokeRounded: IconNavigation02StrokeRounded,
  DuotoneRounded: IconNavigation02DuotoneRounded,
  TwotoneRounded: IconNavigation02TwotoneRounded,
  SolidRounded: IconNavigation02SolidRounded,
  BulkRounded: IconNavigation02BulkRounded,
  StrokeSharp: IconNavigation02StrokeSharp,
  SolidSharp: IconNavigation02SolidSharp,
};