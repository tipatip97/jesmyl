import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.8386 19.7631H16.4671C19.3324 19.7631 20.7651 19.7631 21.4622 19.0038C21.6578 18.7907 21.8093 18.544 21.9087 18.2766C22.2627 17.3239 21.567 16.1237 20.1754 13.7234M10.8386 19.7631L13.7564 17.5262M10.8386 19.7631L13.7564 22M18.4896 10.8154L15.507 5.6705C14.2306 3.4687 13.5924 2.36781 12.7003 2.10134C12.248 1.96622 11.7634 1.96622 11.3111 2.10134C10.419 2.36781 9.78081 3.4687 8.50438 5.6705M18.4896 10.8154L15.0117 9.50645M18.4896 10.8154L19.0588 7.27638M6.81856 8.57849L3.73542 13.8968C2.43531 16.1395 1.78525 17.2608 2.06354 18.1613C2.17186 18.5119 2.36819 18.8316 2.63534 19.0926C3.32163 19.7631 4.66018 19.7631 7.33728 19.7631M6.81856 8.57849L7.36018 12.1215M6.81856 8.57849L3.33053 9.8626',
  d2: 'M7.33728 19.7631H16.4671C19.3324 19.7631 20.7651 19.7631 21.4622 19.0038C21.6578 18.7907 21.8093 18.544 21.9087 18.2766C22.2627 17.3239 21.567 16.1237 20.1755 13.7234L20.1754 13.7234L15.507 5.6705C14.2306 3.4687 13.5924 2.36781 12.7003 2.10134C12.248 1.96622 11.7634 1.96622 11.3111 2.10134C10.419 2.36781 9.78081 3.4687 8.50438 5.6705L3.73542 13.8968C2.43531 16.1395 1.78525 17.2608 2.06354 18.1613C2.17186 18.5119 2.36819 18.8316 2.63534 19.0926C3.32163 19.7631 4.66018 19.7631 7.33728 19.7631Z',
  d3: 'M18.4896 10.8154L15.507 5.6705C14.2306 3.4687 13.5924 2.36781 12.7003 2.10134C12.248 1.96622 11.7634 1.96622 11.3111 2.10134C10.419 2.36781 9.78081 3.4687 8.50438 5.6705M18.4896 10.8154L15.0117 9.50645M18.4896 10.8154L19.0588 7.27638M6.81856 8.57849L3.73542 13.8968C2.43531 16.1395 1.78525 17.2608 2.06354 18.1613C2.17186 18.5119 2.36819 18.8316 2.63534 19.0926C3.32163 19.7631 4.66018 19.7631 7.33728 19.7631M6.81856 8.57849L7.36018 12.1215M6.81856 8.57849L3.33053 9.8626',
  d4: 'M10.8389 19.7633H16.4674C19.3327 19.7633 20.7654 19.7633 21.4625 19.004C21.6581 18.791 21.8096 18.5442 21.9089 18.2769C22.263 17.3241 21.5672 16.124 20.1757 13.7236M10.8389 19.7633L13.7566 17.5264M10.8389 19.7633L13.7566 22.0002',
  d5: 'M11.047 1.38992C11.6716 1.20336 12.3395 1.20336 12.9641 1.38992C13.7088 1.61237 14.2416 2.15765 14.7014 2.78094C15.1544 3.39512 15.6446 4.24065 16.2429 5.27285L17.8124 7.98027L17.9333 7.22855C18.019 6.69567 18.5205 6.33315 19.0534 6.41884C19.5862 6.50454 19.9487 7.006 19.8631 7.53888L19.3069 10.9975C19.2603 11.2871 19.0861 11.5404 18.8324 11.6876C18.5787 11.8348 18.2723 11.8603 17.9978 11.7569L14.5989 10.4777C14.0938 10.2876 13.8384 9.72401 14.0285 9.21887C14.2186 8.71373 14.7822 8.45835 15.2874 8.64846L16.1229 8.96293L14.5818 6.30448C13.9463 5.20826 13.5096 4.45785 13.1285 3.9412C12.7466 3.42352 12.5317 3.30065 12.4046 3.26269C12.1451 3.18516 11.866 3.18516 11.6064 3.26269C11.4794 3.30065 11.2644 3.42352 10.8826 3.9412C10.5015 4.45785 10.0648 5.20826 9.42931 6.30448C9.15862 6.77142 8.56065 6.93051 8.09371 6.65981C7.62678 6.38912 7.46769 5.79115 7.73838 5.3242L7.76818 5.27281C8.36652 4.24063 8.85666 3.39511 9.3097 2.78094C9.76947 2.15765 10.3023 1.61237 11.047 1.38992ZM7.43307 7.81462C7.68576 7.96375 7.85806 8.21852 7.9024 8.50856L8.4317 11.971C8.51326 12.5046 8.14686 13.0032 7.61334 13.0848C7.07981 13.1663 6.58118 12.7999 6.49962 12.2664L6.38976 11.5477L4.7688 14.3438C4.1207 15.4618 3.68054 16.2244 3.42538 16.8162C3.16946 17.4099 3.19212 17.6323 3.22317 17.7327C3.28005 17.9168 3.38442 18.089 3.53118 18.2323C3.62721 18.3261 3.84812 18.4584 4.52401 18.5334C5.19515 18.6079 6.11142 18.6093 7.44328 18.6093C7.98301 18.6093 8.42054 19.0469 8.42054 19.5866C8.42054 20.1263 7.98301 20.5639 7.44328 20.5639H7.38291C6.12612 20.5639 5.10039 20.5639 4.30839 20.476C3.5085 20.3872 2.74001 20.1918 2.16535 19.6304C1.78997 19.2637 1.51062 18.8109 1.35578 18.3098C1.11486 17.5302 1.31919 16.7647 1.63055 16.0424C1.93729 15.331 2.43778 14.4676 3.04574 13.419L4.73276 10.5089L3.86527 10.8283C3.35878 11.0147 2.79703 10.7553 2.61056 10.2488C2.4241 9.74229 2.68354 9.18053 3.19003 8.99406L6.59874 7.73914C6.87408 7.63777 7.18039 7.66548 7.43307 7.81462ZM19.4994 12.8387C19.9663 12.568 20.5643 12.7271 20.835 13.1941L20.8694 13.2535C21.5201 14.3758 22.0555 15.2995 22.3764 16.0595C22.703 16.833 22.9047 17.6528 22.5993 18.4744C22.4576 18.8559 22.2423 19.2055 21.9669 19.5055C21.3834 20.1409 20.5677 20.3637 19.7155 20.4644C18.8727 20.5639 17.7753 20.5639 16.4302 20.5639H13.7459L14.311 20.9971C14.7393 21.3255 14.8203 21.9389 14.4919 22.3673C14.1636 22.7956 13.5501 22.8766 13.1218 22.5483L10.2704 20.3622C10.0292 20.1772 9.88772 19.8906 9.88772 19.5866C9.88772 19.2826 10.0292 18.996 10.2704 18.811L13.1218 16.625C13.5501 16.2966 14.1636 16.3776 14.4919 16.8059C14.8203 17.2343 14.7393 17.8477 14.311 18.1761L13.7459 18.6093H16.3655C17.791 18.6093 18.772 18.6077 19.4862 18.5233C20.2043 18.4385 20.4293 18.2902 20.5271 18.1836C20.634 18.0672 20.7148 17.9345 20.7672 17.7935C20.8079 17.684 20.8427 17.4518 20.5758 16.8197C20.3089 16.1874 19.8377 15.371 19.144 14.1743C18.8733 13.7074 19.0324 13.1094 19.4994 12.8387Z',
  d6: 'M11.047 1.38992C11.6716 1.20336 12.3395 1.20336 12.9641 1.38992C13.7088 1.61237 14.2416 2.15765 14.7014 2.78094C15.1544 3.39512 15.6446 4.24065 16.2429 5.27285L17.8125 7.98027L17.9333 7.22855C18.019 6.69567 18.5205 6.33315 19.0534 6.41884C19.5863 6.50454 19.9488 7.006 19.8631 7.53888L19.3069 10.9975C19.2603 11.2871 19.0861 11.5404 18.8324 11.6876C18.5787 11.8348 18.2723 11.8603 17.9978 11.7569L14.5989 10.4777C14.0938 10.2876 13.8384 9.72401 14.0285 9.21887C14.2186 8.71373 14.7822 8.45835 15.2874 8.64846L16.1229 8.96293L14.5818 6.30448C13.9463 5.20826 13.5096 4.45785 13.1285 3.94121C12.7466 3.42352 12.5317 3.30065 12.4047 3.26269C12.1451 3.18516 11.866 3.18516 11.6064 3.26269C11.4794 3.30065 11.2645 3.42352 10.8826 3.94121C10.5015 4.45785 10.0648 5.20826 9.42933 6.30448C9.15864 6.77142 8.56067 6.93051 8.09373 6.65981C7.6268 6.38912 7.46771 5.79115 7.7384 5.3242L7.7682 5.27281C8.36654 4.24063 8.85668 3.39511 9.30972 2.78094C9.76949 2.15765 10.3023 1.61237 11.047 1.38992Z',
  d7: 'M7.43307 7.81461C7.68576 7.96374 7.85806 8.21851 7.9024 8.50855L8.4317 11.971C8.51326 12.5045 8.14686 13.0032 7.61334 13.0847C7.07981 13.1663 6.58118 12.7999 6.49962 12.2664L6.38976 11.5477L4.7688 14.3438C4.1207 15.4618 3.68054 16.2244 3.42538 16.8162C3.16946 17.4098 3.19212 17.6323 3.22317 17.7327C3.28005 17.9168 3.38442 18.0889 3.53118 18.2323C3.62721 18.3261 3.84812 18.4584 4.52401 18.5334C5.19515 18.6079 6.11142 18.6093 7.44328 18.6093C7.98301 18.6093 8.42054 19.0469 8.42054 19.5866C8.42054 20.1263 7.98301 20.5639 7.44328 20.5639H7.38291C6.12612 20.5639 5.10039 20.5639 4.30839 20.476C3.5085 20.3872 2.74001 20.1918 2.16535 19.6304C1.78997 19.2637 1.51062 18.8109 1.35578 18.3098C1.11486 17.5302 1.31919 16.7647 1.63055 16.0424C1.93729 15.3309 2.43778 14.4676 3.04574 13.419L4.73276 10.5089L3.86527 10.8282C3.35878 11.0147 2.79703 10.7553 2.61056 10.2488C2.4241 9.74228 2.68354 9.18052 3.19003 8.99406L6.59874 7.73913C6.87408 7.63776 7.18039 7.66547 7.43307 7.81461ZM19.4994 12.8387C19.9663 12.568 20.5643 12.7271 20.835 13.1941L20.8694 13.2535C21.5201 14.3758 22.0555 15.2995 22.3764 16.0595C22.703 16.833 22.9047 17.6528 22.5993 18.4744C22.4576 18.8559 22.2423 19.2055 21.9669 19.5055C21.3834 20.1409 20.5677 20.3637 19.7155 20.4644C18.8727 20.5639 17.7753 20.5639 16.4302 20.5639H13.7459L14.311 20.9971C14.7393 21.3255 14.8203 21.9389 14.4919 22.3673C14.1636 22.7956 13.5501 22.8766 13.1218 22.5482L10.2704 20.3622C10.0292 20.1772 9.88772 19.8906 9.88772 19.5866C9.88772 19.2826 10.0292 18.996 10.2704 18.811L13.1218 16.625C13.5501 16.2966 14.1636 16.3776 14.4919 16.8059C14.8203 17.2343 14.7393 17.8477 14.311 18.1761L13.7459 18.6093H16.3655C17.791 18.6093 18.772 18.6077 19.4862 18.5233C20.2043 18.4385 20.4293 18.2902 20.5271 18.1836C20.634 18.0672 20.7148 17.9345 20.7672 17.7935C20.8079 17.684 20.8427 17.4518 20.5758 16.8197C20.3089 16.1874 19.8377 15.371 19.144 14.1743C18.8733 13.7074 19.0324 13.1094 19.4994 12.8387Z',
  d8: 'M13.7564 17.5262L10.8386 19.7631L13.7564 22M7.36018 12.1215L6.81856 8.57849L3.33053 9.8626M15.0117 9.50645L18.4896 10.8154L19.0588 7.27638M7.33728 19.7631C4.66018 19.7631 3.32163 19.7631 2.63534 19.0926C2.36819 18.8316 2.17186 18.5119 2.06354 18.1613C1.78525 17.2608 2.43531 16.1395 3.73542 13.8968L6.4154 9.27394M8.50438 5.6705C9.78081 3.4687 10.419 2.36781 11.3111 2.10134C11.7634 1.96622 12.248 1.96622 12.7003 2.10134C13.5924 2.36781 14.2306 3.4687 15.507 5.6705L18.1275 10.1908M20.1754 13.7234C21.567 16.1237 22.2627 17.3239 21.9087 18.2766C21.8093 18.544 21.6578 18.7907 21.4622 19.0038C20.7651 19.7631 19.3324 19.7631 16.4671 19.7631H11.6961',
  d9: 'M11.047 1.38741C11.6716 1.2042 12.3395 1.2042 12.9641 1.38741C13.7088 1.60587 14.2416 2.14136 14.7014 2.75347C15.1544 3.35662 15.6446 4.18699 16.2429 5.20066L17.8124 7.8595L18.0885 6.17371L20.0182 6.47847L19.117 11.9821L13.6843 9.9741L14.3727 8.17765L16.1229 8.82453L14.5818 6.21378C13.9463 5.13723 13.5096 4.40029 13.1285 3.89291C12.7466 3.38452 12.5317 3.26385 12.4046 3.22658C12.1451 3.15043 11.866 3.15043 11.6064 3.22658C11.4794 3.26385 11.2644 3.38452 10.8826 3.89291C10.5015 4.40029 10.0648 5.13723 9.42931 6.21378L7.76818 5.20062L7.76818 5.20061C8.36652 4.18696 8.85666 3.35661 9.3097 2.75347C9.76947 2.14136 10.3023 1.60587 11.047 1.38741Z',
  d10: 'M8.57937 12.7274L6.6473 13.0174L6.38976 11.3629L4.7688 14.1089C4.1207 15.2068 3.68054 15.9557 3.42538 16.5369C3.16946 17.1199 3.19212 17.3383 3.22317 17.437C3.28005 17.6178 3.38442 17.7868 3.53118 17.9276C3.62721 18.0197 3.84812 18.1496 4.52401 18.2233C5.19515 18.2964 6.11142 18.2978 7.44328 18.2978L7.38291 20.2173H7.38289C6.12611 20.2173 5.10039 20.2173 4.30839 20.131C3.5085 20.0438 2.74001 19.8519 2.16535 19.3006C1.78997 18.9405 1.51062 18.4958 1.35578 18.0037C1.11486 17.2381 1.31919 16.4863 1.63055 15.777C1.93729 15.0783 2.43778 14.2305 3.04573 13.2006L3.04574 13.2006L4.73276 10.3427L2.94819 10.988L2.27294 9.18667L7.72159 7.21674L8.57937 12.7274Z',
  d11: 'M20.8694 13.0381C21.5201 14.1403 22.0555 15.0474 22.3764 15.7937C22.703 16.5534 22.9047 17.3584 22.5993 18.1653C22.4576 18.5399 22.2423 18.8833 21.9669 19.1779C21.3834 19.802 20.5677 20.0207 19.7155 20.1196C18.8727 20.2174 17.7753 20.2173 16.4302 20.2173H13.7459L15.0865 21.2267L13.8974 22.75L9.25876 19.2576L13.8974 15.7651L15.0865 17.2885L13.7459 18.2978H16.3655C17.791 18.2978 18.772 18.2962 19.4862 18.2134C20.2043 18.1301 20.4293 17.9845 20.5271 17.8798C20.634 17.7654 20.7148 17.6352 20.7672 17.4967C20.8079 17.3892 20.8427 17.1611 20.5758 16.5403C20.3089 15.9194 19.8377 15.1176 19.144 13.9424L20.8694 13.0381Z',
} as const;

export const IconRecycle02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-02-stroke-rounded IconRecycle02StrokeRounded"
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

export const IconRecycle02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-02-duotone-rounded IconRecycle02DuotoneRounded"
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

export const IconRecycle02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-02-twotone-rounded IconRecycle02TwotoneRounded"
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

export const IconRecycle02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-02-solid-rounded IconRecycle02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRecycle02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-02-bulk-rounded IconRecycle02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRecycle02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-02-stroke-sharp IconRecycle02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconRecycle02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-02-solid-sharp IconRecycle02SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfRecycle02: TheIconSelfPack = {
  name: 'Recycle02',
  StrokeRounded: IconRecycle02StrokeRounded,
  DuotoneRounded: IconRecycle02DuotoneRounded,
  TwotoneRounded: IconRecycle02TwotoneRounded,
  SolidRounded: IconRecycle02SolidRounded,
  BulkRounded: IconRecycle02BulkRounded,
  StrokeSharp: IconRecycle02StrokeSharp,
  SolidSharp: IconRecycle02SolidSharp,
};