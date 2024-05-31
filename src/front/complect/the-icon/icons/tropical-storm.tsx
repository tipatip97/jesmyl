import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.4467 7.85654L16.2793 6.41593L20.2108 3.84728C7.2706 1.80329 5.34287 9.75047 5.26372 10.1067L5.25607 10.141L5.24414 10.1882C4.96941 11.2032 4.94505 12.2707 5.17302 13.3048C5.40099 14.3388 5.87492 15.3104 6.55663 16.1413L7.72397 17.5819L3.78906 20.1526C16.7291 22.2089 18.66 14.2479 18.7394 13.8911L18.747 13.8568L18.7589 13.8095C19.0337 12.7945 19.0581 11.7271 18.8302 10.6931C18.6022 9.65908 18.1284 8.68748 17.4467 7.85654Z',
  d2: 'M16.2793 6.41593L17.4467 7.85654C18.1284 8.68748 18.6022 9.65908 18.8302 10.6931C19.0581 11.7271 19.0337 12.7945 18.7589 13.8095L18.747 13.8568L18.7394 13.8911C18.66 14.2479 16.7291 22.2089 3.78906 20.1526L7.72397 17.5819L6.55663 16.1413C5.87492 15.3104 5.40099 14.3388 5.17302 13.3048C4.94505 12.2707 4.96941 11.2032 5.24414 10.1882L5.25607 10.141L5.26372 10.1067C5.34287 9.75047 7.2706 1.80329 20.2108 3.84728L16.2793 6.41593ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z',
  d3: 'M20.3642 3.0921C13.6981 2.04221 9.72436 3.56549 7.39906 5.53526C5.14709 7.4429 4.56075 9.66935 4.4835 10.0031C4.1795 11.1327 4.15392 12.3191 4.4077 13.4668C4.66243 14.6188 5.19118 15.6986 5.94911 16.6203L5.95058 16.6221L6.59471 17.4147L3.34132 19.534C3.08061 19.7038 2.95159 20.0161 3.01667 20.3198C3.08176 20.6234 3.32754 20.8558 3.63509 20.9046C10.3015 21.9608 14.2763 20.4372 16.6026 18.4651C18.8554 16.5554 19.4424 14.3254 19.5197 13.9916C19.8237 12.862 19.8493 11.6757 19.5956 10.528C19.3409 9.37596 18.8122 8.29615 18.0544 7.37442L18.0529 7.37266L17.4087 6.57997L20.6587 4.46276C20.9195 4.29286 21.0485 3.9804 20.9832 3.67666C20.918 3.37291 20.6719 3.14057 20.3642 3.0921ZM12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z',
  d4: 'M20.3639 3.0921C13.6978 2.04221 9.72403 3.56549 7.39873 5.53526C5.14676 7.4429 4.56042 9.66935 4.48317 10.0031C4.17917 11.1327 4.15359 12.3191 4.40737 13.4668C4.66209 14.6188 5.19085 15.6986 5.94878 16.6203L5.95025 16.6221L6.59438 17.4147L10.3883 15.1078C9.26619 14.5249 8.49967 13.3519 8.49967 12C8.49967 10.067 10.0667 8.5 11.9997 8.5C12.5801 8.5 13.1274 8.64127 13.6093 8.89129L17.4083 6.57997L20.6584 4.46276C20.9192 4.29286 21.0482 3.9804 20.9829 3.67666C20.9177 3.37291 20.6716 3.14057 20.3639 3.0921Z',
  d5: 'M6.59471 17.4129L3.34132 19.5322C3.08061 19.702 2.95159 20.0143 3.01667 20.3179C3.08176 20.6216 3.32754 20.854 3.63509 20.9027C10.3015 21.959 14.2763 20.4353 16.6026 18.4633C18.8554 16.5536 19.4424 14.3235 19.5197 13.9897C19.8237 12.8601 19.8493 11.6738 19.5956 10.5261C19.3409 9.37412 18.8122 8.29431 18.0544 7.37258L18.0529 7.37082L17.4087 6.57812L13.6097 8.88945C14.7327 9.47214 15.5 10.6455 15.5 11.9982C15.5 13.9312 13.933 15.4982 12 15.4982C11.4189 15.4982 10.871 15.3566 10.3887 15.106L6.59471 17.4129Z',
  d6: 'M12.0385 15.0005C13.7037 15.0005 15.0536 13.6573 15.0536 12.0003C15.0536 10.3433 13.7037 9 12.0385 9C10.3733 9 9.02344 10.3433 9.02344 12.0003C9.02344 13.6573 10.3733 15.0005 12.0385 15.0005Z',
  d7: 'M5.22743 12.1209C5.48293 4.47525 14.4926 3.30915 19.7259 4.31047C19.8143 4.32738 19.8332 4.44175 19.7575 4.49006L16.236 6.73582C17.8288 8.55044 18.7867 9.5726 18.8861 11.8398C18.7573 19.6197 9.24838 20.7256 4.37535 19.6544C4.28896 19.6354 4.27271 19.5235 4.3472 19.476L7.87746 17.2249C6.28472 15.4103 5.32676 14.3881 5.22743 12.1209Z',
} as const;

export const IconTropicalStormStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tropical-storm-stroke-rounded IconTropicalStormStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconTropicalStormDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tropical-storm-duotone-rounded IconTropicalStormDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconTropicalStormTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tropical-storm-twotone-rounded IconTropicalStormTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="3" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconTropicalStormSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tropical-storm-solid-rounded IconTropicalStormSolidRounded"
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

export const IconTropicalStormBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tropical-storm-bulk-rounded IconTropicalStormBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTropicalStormStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tropical-storm-stroke-sharp IconTropicalStormStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTropicalStormSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tropical-storm-solid-sharp IconTropicalStormSolidSharp"
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

export const iconPackOfTropicalStorm: TheIconSelfPack = {
  name: 'TropicalStorm',
  StrokeRounded: IconTropicalStormStrokeRounded,
  DuotoneRounded: IconTropicalStormDuotoneRounded,
  TwotoneRounded: IconTropicalStormTwotoneRounded,
  SolidRounded: IconTropicalStormSolidRounded,
  BulkRounded: IconTropicalStormBulkRounded,
  StrokeSharp: IconTropicalStormStrokeSharp,
  SolidSharp: IconTropicalStormSolidSharp,
};