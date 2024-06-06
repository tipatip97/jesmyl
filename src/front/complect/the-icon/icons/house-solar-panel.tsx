import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.96586 5.79755L4.56916 4.39672C5.06999 3.23383 5.32041 2.65238 5.81138 2.32619C6.30235 2 6.92711 2 8.17664 2H15.8234C17.0729 2 17.6976 2 18.1886 2.32619C18.6796 2.65238 18.93 3.23383 19.4308 4.39672L20.0341 5.79755C20.8508 7.69388 21.2592 8.64205 20.8221 9.32102C20.3849 10 19.3661 10 17.3285 10H6.67147C4.63387 10 3.61507 10 3.17794 9.32102C2.7408 8.64205 3.14915 7.69388 3.96586 5.79755Z',
  d2: 'M4.5 10V15C4.5 16.8856 4.5 17.8284 5.08579 18.4142C5.55733 18.8858 6.26022 18.9777 7.5 18.9957M19.5 10V15C19.5 16.8856 19.5 17.8284 18.9142 18.4142C18.4427 18.8858 17.7398 18.9777 16.5 18.9957',
  d3: 'M13 14L10.4058 17.0672C10.0891 17.4778 9.93078 17.6831 10.0289 17.8416C10.127 18 10.4124 18 10.9833 18H13.0167C13.5876 18 13.873 18 13.9711 18.1584C14.0692 18.3169 13.9109 18.5222 13.5942 18.9328L10.9833 22',
  d4: 'M10 2L9 10M14 2L15 10',
  d5: 'M4 6H20',
  d6: 'M4.5 8.875C5.05229 8.875 5.5 9.32272 5.5 9.875V14.8847C5.5 15.8576 5.50212 16.4868 5.56435 16.9506C5.62274 17.3857 5.71712 17.5226 5.79358 17.5992C5.90344 17.7092 6.11789 17.8374 7.04159 17.8759C7.5934 17.8988 8.02211 18.3648 7.99915 18.9166C7.97619 19.4684 7.51025 19.8971 6.95844 19.8741C6.00983 19.8347 5.07632 19.7117 4.378 19.012C3.86868 18.5017 3.67017 17.8728 3.58211 17.2165C3.49991 16.6039 3.49995 15.8389 3.5 14.9505C3.5 14.9286 3.5 14.9067 3.5 14.8847V9.875C3.5 9.32272 3.94772 8.875 4.5 8.875ZM19.5 8.875C20.0523 8.875 20.5 9.32272 20.5 9.875L20.5 14.9505C20.5001 15.8389 20.5001 16.6039 20.4179 17.2165C20.3298 17.8728 20.1313 18.5017 19.622 19.012C18.9237 19.7117 17.9902 19.8347 17.0416 19.8741C16.4898 19.8971 16.0238 19.4684 16.0009 18.9166C15.9779 18.3648 16.4066 17.8988 16.9584 17.8759C17.8821 17.8374 18.0966 17.7092 18.2064 17.5992C18.2829 17.5226 18.3773 17.3857 18.4357 16.9506C18.4979 16.4868 18.5 15.8576 18.5 14.8847V9.875C18.5 9.32272 18.9477 8.875 19.5 8.875Z',
  d7: 'M13.6451 13.1115C14.0667 13.4682 14.1195 14.0991 13.7628 14.5208L11.7716 16.875L13.0613 16.875H13.0613C13.3059 16.8749 13.5772 16.8748 13.7973 16.9029C14.0004 16.9289 14.5158 17.0147 14.8207 17.5071C15.1658 18.0645 14.9282 18.5985 14.815 18.8055C14.709 18.9997 14.5456 19.2111 14.4143 19.3811L11.744 22.5232C11.3861 22.9438 10.7549 22.9945 10.3344 22.6365C9.91383 22.2785 9.86311 21.6474 10.2211 21.2268L12.2231 18.875L10.9373 18.875C10.6927 18.8751 10.4213 18.8753 10.2013 18.8471C9.99816 18.8212 9.48276 18.7354 9.1779 18.243C8.83279 17.6855 9.07036 17.1516 9.1835 16.9445C9.28958 16.7503 9.45292 16.539 9.5843 16.3689L12.2358 13.2292C12.5924 12.8076 13.2234 12.7548 13.6451 13.1115Z',
  d8: 'M9.25617 1.78002C9.29419 1.48571 9.31321 1.33856 9.23538 1.23958C9.2286 1.23095 9.22134 1.2227 9.21365 1.21486C9.12546 1.125 8.97708 1.125 8.68034 1.125L8.13756 1.125H8.13753H8.1375C7.54599 1.12498 7.04277 1.12496 6.62811 1.1702C6.18574 1.21846 5.77692 1.32358 5.39624 1.5765C5.01638 1.82887 4.75949 2.16535 4.54027 2.55483C4.33401 2.92131 4.13286 3.38841 3.89539 3.93984L3.88022 3.97506L3.74511 4.28878C3.58226 4.6669 3.50084 4.85596 3.58974 4.99103C3.67863 5.12611 3.88448 5.12611 4.29618 5.12611L8.30824 5.12611C8.56045 5.12611 8.68655 5.12611 8.77162 5.05101C8.85669 4.97591 8.87233 4.85079 8.90361 4.60053L9.25617 1.78002ZM3.15548 6.62611C2.95718 6.62611 2.85804 6.62611 2.78081 6.67982C2.70358 6.73353 2.67002 6.82395 2.6029 7.0048C2.51084 7.25285 2.4342 7.48346 2.37708 7.69697C2.2066 8.33419 2.1588 8.99871 2.54722 9.60202C2.93794 10.2089 3.56373 10.4341 4.21282 10.5318C4.83287 10.6251 5.6436 10.625 6.61018 10.625H7.61338C7.8604 10.625 7.98391 10.625 8.06837 10.5521C8.15283 10.4792 8.17087 10.357 8.20695 10.1126L8.25683 9.77481L8.56611 7.30053C8.6054 6.98619 8.62505 6.82903 8.53548 6.72757C8.44592 6.62611 8.28753 6.62611 7.97074 6.62611L3.15548 6.62611ZM9.74196 9.98565C9.70157 10.2592 9.68138 10.396 9.74608 10.4923C9.75954 10.5123 9.77538 10.5307 9.79324 10.5469C9.87907 10.625 10.0173 10.625 10.2938 10.625L13.6678 10.625C13.9727 10.625 14.1251 10.625 14.214 10.5299C14.2173 10.5264 14.2205 10.5228 14.2236 10.5191C14.3079 10.4199 14.2904 10.2685 14.2554 9.96566L13.9036 7.15169C13.8723 6.90143 13.8567 6.7763 13.7716 6.7012C13.6866 6.62611 13.5604 6.62611 13.3082 6.62611L10.6918 6.62611C10.4396 6.62611 10.3134 6.62611 10.2284 6.7012C10.1433 6.7763 10.1277 6.90143 10.0964 7.15169L9.74421 9.96913L9.74196 9.98565ZM15.7802 10.0939C15.8094 10.3466 15.824 10.473 15.9093 10.549C15.9946 10.625 16.1218 10.625 16.3762 10.625H17.3896C18.3562 10.625 19.1669 10.6251 19.787 10.5318C20.4361 10.4341 21.0618 10.2089 21.4526 9.60202C21.841 8.99871 21.7932 8.33419 21.6227 7.69697C21.5656 7.48346 21.4889 7.25285 21.3969 7.0048C21.3298 6.82395 21.2962 6.73353 21.219 6.67982C21.1417 6.62611 21.0426 6.62611 20.8443 6.62611L16.0293 6.62611C15.7125 6.62611 15.5541 6.62611 15.4645 6.72757C15.375 6.82903 15.3946 6.98619 15.4339 7.30053L15.7451 9.78999L15.7802 10.0939ZM19.7036 5.12611C20.1153 5.12611 20.3212 5.12611 20.41 4.99103C20.4989 4.85596 20.4175 4.6669 20.2547 4.28878L20.1044 3.93983C19.8669 3.3884 19.6658 2.9213 19.4595 2.55483C19.2403 2.16535 18.9834 1.82887 18.6035 1.5765C18.2229 1.32358 17.814 1.21846 17.3717 1.1702C16.957 1.12496 16.4538 1.12498 15.8623 1.125H15.8623H15.8622L15.3436 1.125C15.027 1.125 14.8687 1.125 14.7792 1.22639C14.6896 1.32778 14.7091 1.48488 14.7482 1.79907L15.0967 4.60017C15.1278 4.85059 15.1434 4.9758 15.2285 5.05095C15.3136 5.12611 15.4397 5.12611 15.6921 5.12611L19.7036 5.12611ZM13.2182 1.65095C13.1871 1.40053 13.1715 1.27532 13.0864 1.20016C13.0013 1.125 12.8751 1.125 12.6228 1.125L11.3807 1.125C11.1295 1.125 11.0039 1.125 10.9189 1.19969C10.834 1.27438 10.8179 1.39896 10.7857 1.64813L10.7442 1.96913L10.7438 1.9722L10.4339 4.45169C10.3946 4.76602 10.375 4.92319 10.4645 5.02465C10.5541 5.12611 10.7125 5.12611 11.0293 5.12611L12.9712 5.12611C13.2878 5.12611 13.4461 5.12611 13.5356 5.02472C13.6252 4.92333 13.6057 4.76624 13.5666 4.45205L13.2182 1.65095Z',
  d9: 'M8.68141 1.12502H8.13756C7.54607 1.125 7.04276 1.12499 6.62811 1.17022C6.18574 1.21848 5.77692 1.3236 5.39624 1.57652C5.01638 1.82889 4.75949 2.16537 4.54027 2.55486C4.33401 2.92133 3.98311 3.73614 3.74564 4.28758C3.58279 4.6657 3.50137 4.85476 3.59026 4.98983C3.67916 5.12491 3.88501 5.12491 4.2967 5.12491H8.30824C8.56045 5.12491 8.68655 5.12491 8.77162 5.04981C8.85669 4.97472 8.87233 4.84959 8.90361 4.59933L9.25617 1.77882C9.29404 1.48569 9.29004 1.31303 9.21285 1.21423C9.12476 1.12502 8.97698 1.12502 8.68141 1.12502Z',
  d10: 'M2.60337 7.00356C2.5111 7.25209 2.43429 7.48312 2.37708 7.69699C2.2066 8.33422 2.1588 8.99874 2.54722 9.60204C2.93794 10.2089 3.56373 10.4341 4.21282 10.5318C4.83287 10.6251 5.6436 10.6251 6.61018 10.625H7.6132C7.86022 10.625 7.98373 10.625 8.06819 10.5521C8.15265 10.4792 8.17069 10.357 8.20677 10.1127L8.56611 7.29933C8.6054 6.985 8.62505 6.82783 8.53548 6.72637C8.44592 6.62491 8.28753 6.62491 7.97074 6.62491H3.15594C2.95766 6.62491 2.85852 6.62491 2.7813 6.67861C2.70407 6.73231 2.67051 6.82273 2.60337 7.00356Z',
  d11: 'M10.2949 10.625H13.6668C13.9728 10.625 14.1342 10.6156 14.2232 10.5198C14.3081 10.4204 14.2905 10.2684 14.2554 9.96445L13.9036 7.15047C13.8723 6.90021 13.8567 6.77508 13.7716 6.69999C13.6866 6.62489 13.5605 6.62489 13.3083 6.62489H10.6918C10.4396 6.62489 10.3135 6.62489 10.2284 6.69999C10.1433 6.77508 10.1277 6.90021 10.0964 7.15047L9.74197 9.98443C9.70141 10.2591 9.68113 10.3965 9.74642 10.4931C9.83241 10.5717 10.0172 10.625 10.2949 10.625Z',
  d12: 'M12.623 1.125H11.3806C11.1294 1.125 11.0037 1.125 10.9188 1.19969C10.8338 1.27438 10.8177 1.39896 10.7855 1.64813L10.4339 4.45047C10.3946 4.7648 10.375 4.92197 10.4645 5.02343C10.5541 5.12489 10.7125 5.12489 11.0293 5.12489H12.9712C13.2878 5.12489 13.4461 5.12489 13.5356 5.0235C13.6252 4.92211 13.6057 4.76502 13.5666 4.45084L13.2184 1.65095C13.1872 1.40053 13.1716 1.27532 13.0866 1.20016C13.0015 1.125 12.8753 1.125 12.623 1.125Z',
  d13: 'M16.3764 10.625H17.3896C18.3562 10.625 19.1669 10.6251 19.787 10.5318C20.4361 10.4341 21.0619 10.2089 21.4526 9.60202C21.841 8.99872 21.7932 8.3342 21.6227 7.69697C21.5655 7.4831 21.4887 7.25207 21.3964 7.00354C21.3293 6.82271 21.2957 6.73229 21.2185 6.67859C21.1413 6.62489 21.0421 6.62489 20.8439 6.62489H16.0293C15.7125 6.62489 15.5541 6.62489 15.4645 6.72635C15.375 6.82781 15.3946 6.98498 15.4339 7.29931L15.7451 9.78877L15.7803 10.0939C15.8096 10.3466 15.8242 10.473 15.9095 10.549C15.9948 10.625 16.122 10.625 16.3764 10.625Z',
  d14: 'M20.2542 4.28756C20.0167 3.73613 19.6658 2.92131 19.4595 2.55483C19.2403 2.16535 18.9834 1.82887 18.6036 1.5765C18.2229 1.32358 17.8141 1.21846 17.3717 1.1702C16.957 1.12497 15.9353 1.12498 15.3438 1.125C15.0272 1.125 14.8689 1.125 14.7793 1.22639C14.6898 1.32779 14.7093 1.48488 14.7484 1.79907L15.0967 4.59895C15.1278 4.84937 15.1434 4.97458 15.2285 5.04973C15.3136 5.12489 15.4397 5.12489 15.6921 5.12489H19.7031C20.1148 5.12489 20.3206 5.12489 20.4095 4.98981C20.4984 4.85474 20.417 4.66567 20.2542 4.28756Z',
  d15: 'M3.5 10.3516C3.72674 10.4383 3.96812 10.4933 4.21282 10.5301C4.57808 10.5851 5.00952 10.6076 5.5 10.6169V14.8831C5.5 15.8559 5.50212 16.4852 5.56435 16.9489C5.62274 17.384 5.71712 17.5209 5.79358 17.5975C5.90344 17.7076 6.11789 17.8358 7.04159 17.8742C7.5934 17.8971 8.02211 18.3631 7.99915 18.9149C7.97619 19.4667 7.51025 19.8954 6.95844 19.8725C6.00983 19.833 5.07632 19.71 4.378 19.0103C3.86868 18.5 3.67017 17.8711 3.58211 17.2149C3.49991 16.6023 3.49995 15.8372 3.5 14.9488L3.5 10.3516Z',
  d16: 'M18.5 10.6169C18.9904 10.6076 19.4218 10.5851 19.787 10.5301C20.0317 10.4933 20.2732 10.4383 20.5 10.3516L20.5 14.9488C20.5001 15.8372 20.5001 16.6023 20.4179 17.2149C20.3298 17.8711 20.1313 18.5 19.622 19.0103C18.9237 19.71 17.9902 19.833 17.0416 19.8725C16.4898 19.8954 16.0238 19.4667 16.0009 18.9149C15.9779 18.3631 16.4066 17.8971 16.9584 17.8742C17.8821 17.8358 18.0966 17.7076 18.2064 17.5975C18.2829 17.5209 18.3773 17.384 18.4357 16.9489C18.4979 16.4852 18.5 15.8559 18.5 14.8831V10.6169Z',
  d17: 'M4.49512 10.0366V19.0047L6.99238 19.009M19.4787 10.0366V19.009H16.9814',
  d18: 'M12.9843 14.0239L9.98633 18.0117H13.9832L10.9698 21.9994',
  d19: 'M9.98914 2.06104L8.99023 10.0365M13.9848 2.06104L14.9837 10.0365',
  d20: 'M4.49512 6.04834H19.4787',
  d21: 'M6.01418 2.00049H17.9617L20.9984 10.0501C21.0008 10.0566 20.996 10.0636 20.989 10.0636H3.01097C3.00401 10.0636 2.99918 10.0567 3.00162 10.0501L6.01418 2.00049Z',
  d22: 'M3.49805 18.9957V10H5.49805V17.9974L6.99979 18L6.99631 20L4.49631 19.9957C3.9447 19.9947 3.49805 19.5473 3.49805 18.9957ZM20.498 10V19C20.498 19.5523 20.0503 20 19.498 20H16.998V18H18.498V10H20.498Z',
  d23: 'M12.198 13.5479L13.7977 14.7482L11.9971 17.148H16.0045L11.7796 22.7501L10.1828 21.5459L11.9912 19.148H7.99609L12.198 13.5479Z',
  d24: 'M14.14 10.75L9.85229 10.75L10.1856 6.75H13.8067L14.14 10.75Z',
  d25: 'M13.6817 5.25H10.3106L10.644 1.25H13.3484L13.6817 5.25Z',
  d26: 'M15.3106 6.75L15.644 10.75L21.0001 10.75C21.2461 10.75 21.4764 10.6294 21.6165 10.4272C21.7566 10.225 21.7887 9.967 21.7023 9.73667L20.5823 6.75H15.3106Z',
  d27: 'M20.0198 5.25H15.1856L14.8523 1.25H18.5198L20.0198 5.25Z',
  d28: 'M8.8067 5.25L9.14004 1.25H5.48046L3.97944 5.25H8.8067Z',
  d29: 'M3.41656 6.75L2.29586 9.7365C2.20943 9.96683 2.24145 10.2249 2.38156 10.4271C2.52166 10.6293 2.75204 10.75 2.99805 10.75L8.34837 10.75L8.6817 6.75H3.41656Z',
} as const;

export const IconHouseSolarPanelStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-solar-panel-stroke-rounded IconHouseSolarPanelStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHouseSolarPanelDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-solar-panel-duotone-rounded IconHouseSolarPanelDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHouseSolarPanelTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-solar-panel-twotone-rounded IconHouseSolarPanelTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHouseSolarPanelSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-solar-panel-solid-rounded IconHouseSolarPanelSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconHouseSolarPanelBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-solar-panel-bulk-rounded IconHouseSolarPanelBulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconHouseSolarPanelStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-solar-panel-stroke-sharp IconHouseSolarPanelStrokeSharp"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHouseSolarPanelSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="house-solar-panel-solid-sharp IconHouseSolarPanelSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHouseSolarPanel: TheIconSelfPack = {
  name: 'HouseSolarPanel',
  StrokeRounded: IconHouseSolarPanelStrokeRounded,
  DuotoneRounded: IconHouseSolarPanelDuotoneRounded,
  TwotoneRounded: IconHouseSolarPanelTwotoneRounded,
  SolidRounded: IconHouseSolarPanelSolidRounded,
  BulkRounded: IconHouseSolarPanelBulkRounded,
  StrokeSharp: IconHouseSolarPanelStrokeSharp,
  SolidSharp: IconHouseSolarPanelSolidSharp,
};