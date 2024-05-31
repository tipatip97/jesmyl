import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.0212 5C15.0212 3.58579 15.0212 2.87868 15.5324 2.43934C16.0435 2 16.8662 2 18.5116 2C20.1569 2 20.9797 2 21.4907 2.43934C22.0019 2.87868 22.0019 3.58579 22.0019 5C22.0019 6.41421 22.0019 7.12132 21.4907 7.56066C20.9797 8 20.1569 8 18.5116 8C16.8662 8 16.0435 8 15.5324 7.56066C15.0212 7.12132 15.0212 6.41421 15.0212 5Z',
  d2: 'M15.0212 19C15.0212 17.5858 15.0212 16.8787 15.5324 16.4393C16.0435 16 16.8662 16 18.5116 16C20.1569 16 20.9797 16 21.4907 16.4393C22.0019 16.8787 22.0019 17.5858 22.0019 19C22.0019 20.4142 22.0019 21.1213 21.4907 21.5607C20.9797 22 20.1569 22 18.5116 22C16.8662 22 16.0435 22 15.5324 21.5607C15.0212 21.1213 15.0212 20.4142 15.0212 19Z',
  d3: 'M7.05525 17.0436C9.82537 17.0436 12.0298 14.7831 12.0298 12.0053C12.0298 9.22755 9.78417 6.97571 7.01404 6.97571M7.05525 17.0436C4.28512 17.0436 1.99829 14.7831 1.99829 12.0053C1.99829 9.22755 4.24392 6.97571 7.01404 6.97571M7.05525 17.0436C6.98548 19.1734 8.54461 19.951 9.65482 19.9917H12.0298M7.01404 6.97571C6.94356 4.81563 8.52985 4.05604 9.65482 4.0083H12.0406',
  d4: 'M8.70987 10.8793L6.63847 13.0465C6.56037 13.1282 6.43027 13.1287 6.35155 13.0476L5.37964 12.0462',
  d5: 'M15 5C15 3.58579 15 2.87868 15.5126 2.43934C16.0251 2 16.8501 2 18.5 2C20.1499 2 20.9749 2 21.4874 2.43934C22 2.87868 22 3.58579 22 5C22 6.41421 22 7.12132 21.4874 7.56066C20.9749 8 20.1499 8 18.5 8C16.8501 8 16.0251 8 15.5126 7.56066C15 7.12132 15 6.41421 15 5Z',
  d6: 'M15 19C15 17.5858 15 16.8787 15.5126 16.4393C16.0251 16 16.8501 16 18.5 16C20.1499 16 20.9749 16 21.4874 16.4393C22 16.8787 22 17.5858 22 19C22 20.4142 22 21.1213 21.4874 21.5607C20.9749 22 20.1499 22 18.5 22C16.8501 22 16.0251 22 15.5126 21.5607C15 21.1213 15 20.4142 15 19Z',
  d7: 'M12 12C12 14.7614 9.76142 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C9.76142 7 12 9.23858 12 12Z',
  d8: 'M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25V4.75ZM12 20.75C12.4142 20.75 12.75 20.4142 12.75 20C12.75 19.5858 12.4142 19.25 12 19.25V20.75ZM7.75 17C7.75 16.5858 7.41421 16.25 7 16.25C6.58579 16.25 6.25 16.5858 6.25 17H7.75ZM6.25 7C6.25 7.41421 6.58579 7.75 7 7.75C7.41421 7.75 7.75 7.41421 7.75 7H6.25ZM12 3.25H10V4.75H12V3.25ZM10 20.75H12V19.25H10V20.75ZM7.75 7C7.75 6.23188 7.97121 5.68808 8.31022 5.33923C8.64574 4.99397 9.18368 4.75 10 4.75V3.25C8.87593 3.25 7.91387 3.59476 7.23449 4.29386C6.5586 4.98937 6.25 5.94558 6.25 7H7.75ZM10 19.25C9.23188 19.25 8.68808 19.0288 8.33923 18.6898C7.99397 18.3543 7.75 17.8163 7.75 17H6.25C6.25 18.1241 6.59476 19.0861 7.29386 19.7655C7.98937 20.4414 8.94558 20.75 10 20.75V19.25Z',
  d9: 'M11.25 12C11.25 14.3472 9.34721 16.25 7 16.25V17.75C10.1756 17.75 12.75 15.1756 12.75 12H11.25ZM7 16.25C4.65279 16.25 2.75 14.3472 2.75 12H1.25C1.25 15.1756 3.82436 17.75 7 17.75V16.25ZM2.75 12C2.75 9.65279 4.65279 7.75 7 7.75V6.25C3.82436 6.25 1.25 8.82436 1.25 12H2.75ZM7 7.75C9.34721 7.75 11.25 9.65279 11.25 12H12.75C12.75 8.82436 10.1756 6.25 7 6.25V7.75Z',
  d10: 'M5.87541 11.5288C5.58877 11.2298 5.11401 11.2197 4.81499 11.5064C4.51597 11.793 4.50592 12.2678 4.79256 12.5668L5.87541 11.5288ZM6.13083 12.8791L5.5894 13.3981L5.5894 13.3981L6.13083 12.8791ZM6.75937 12.8791L6.21794 12.3601L6.75937 12.8791ZM9.20874 11.4077C9.49538 11.1086 9.48534 10.6339 9.18632 10.3472C8.8873 10.0606 8.41253 10.0707 8.12589 10.3697L9.20874 11.4077ZM4.79256 12.5668L5.5894 13.3981L6.67225 12.3601L5.87541 11.5288L4.79256 12.5668ZM7.30079 13.3981L9.20874 11.4077L8.12589 10.3697L6.21794 12.3601L7.30079 13.3981ZM5.5894 13.3981C5.6486 13.4598 5.7445 13.5622 5.84193 13.6397C5.95524 13.7299 6.15921 13.8609 6.4451 13.8609V12.3609C6.53363 12.3609 6.6132 12.3808 6.67719 12.4087C6.73472 12.4337 6.76901 12.4605 6.77607 12.4661C6.78292 12.4716 6.77909 12.4693 6.75764 12.448C6.73653 12.4271 6.71122 12.4007 6.67225 12.3601L5.5894 13.3981ZM6.21794 12.3601C6.17897 12.4007 6.15366 12.4271 6.13255 12.448C6.1111 12.4693 6.10727 12.4716 6.11412 12.4661C6.12119 12.4605 6.15547 12.4337 6.21301 12.4087C6.27699 12.3808 6.35656 12.3609 6.4451 12.3609V13.8609C6.73098 13.8609 6.93495 13.7299 7.04826 13.6397C7.14569 13.5622 7.24159 13.4598 7.30079 13.3981L6.21794 12.3601Z',
  d11: 'M5.87476 11.529C5.58812 11.23 5.11336 11.22 4.81434 11.5066C4.51531 11.7932 4.50527 12.268 4.79191 12.567L5.87476 11.529ZM6.13018 12.8793L5.58875 13.3983L5.58875 13.3983L6.13018 12.8793ZM6.75871 12.8793L7.30014 13.3983L6.75871 12.8793ZM9.20809 11.4079C9.49473 11.1089 9.48469 10.6341 9.18567 10.3475C8.88664 10.0608 8.41188 10.0709 8.12524 10.3699L9.20809 11.4079ZM11.25 12C11.25 14.3472 9.34721 16.25 7 16.25V17.75C10.1756 17.75 12.75 15.1756 12.75 12H11.25ZM7 16.25C4.65279 16.25 2.75 14.3472 2.75 12H1.25C1.25 15.1756 3.82436 17.75 7 17.75V16.25ZM2.75 12C2.75 9.65279 4.65279 7.75 7 7.75V6.25C3.82436 6.25 1.25 8.82436 1.25 12H2.75ZM7 7.75C9.34721 7.75 11.25 9.65279 11.25 12H12.75C12.75 8.82436 10.1756 6.25 7 6.25V7.75ZM4.79191 12.567L5.58875 13.3983L6.6716 12.3603L5.87476 11.529L4.79191 12.567ZM7.30014 13.3983L9.20809 11.4079L8.12524 10.3699L6.21729 12.3603L7.30014 13.3983ZM5.58875 13.3983C5.64795 13.46 5.74385 13.5624 5.84128 13.64C5.95459 13.7302 6.15856 13.8611 6.44444 13.8611V12.3611C6.53298 12.3611 6.61255 12.3811 6.67653 12.4089C6.73407 12.4339 6.76835 12.4607 6.77542 12.4663C6.78227 12.4718 6.77844 12.4695 6.75699 12.4482C6.73588 12.4273 6.71057 12.4009 6.6716 12.3603L5.58875 13.3983ZM6.21729 12.3603C6.17832 12.4009 6.15301 12.4273 6.1319 12.4482C6.11045 12.4695 6.10662 12.4718 6.11347 12.4663C6.12054 12.4607 6.15482 12.4339 6.21236 12.4089C6.27634 12.381 6.35591 12.3611 6.44444 12.3611V13.8611C6.73033 13.8611 6.9343 13.7302 7.04761 13.64C7.14504 13.5624 7.24094 13.46 7.30014 13.3983L6.21729 12.3603Z',
  d12: 'M8.4895 5.51346C8.20664 5.80453 8 6.27959 8 7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7C6 5.89786 6.32316 4.87292 7.0552 4.11963C7.79189 3.36155 8.82464 3 10 3H12C12.5523 3 13 3.44772 13 4C13 4.55228 12.5523 5 12 5H10C9.23497 5 8.76772 5.22717 8.4895 5.51346ZM7 16C7.55228 16 8 16.4477 8 17C8 17.765 8.22717 18.2323 8.51346 18.5105C8.80453 18.7934 9.27959 19 10 19H12C12.5523 19 13 19.4477 13 20C13 20.5523 12.5523 21 12 21H10C8.89786 21 7.87292 20.6768 7.11963 19.9448C6.36155 19.2081 6 18.1754 6 17C6 16.4477 6.44772 16 7 16Z',
  d13: 'M18.5449 1.25C19.3316 1.24998 19.9864 1.24996 20.5061 1.30985C21.0469 1.37217 21.5549 1.50935 21.9755 1.8699C22.4129 2.24474 22.5961 2.72301 22.6769 3.23787C22.7501 3.7048 22.7501 4.28503 22.75 4.94459L22.75 5L22.75 5.05541C22.7501 5.71497 22.7501 6.2952 22.6769 6.76213C22.5961 7.27699 22.4129 7.75526 21.9755 8.1301C21.5549 8.49065 21.0469 8.62783 20.5061 8.69015C19.9864 8.75004 19.3316 8.75002 18.5449 8.75H18.4551C17.6684 8.75002 17.0136 8.75004 16.4939 8.69015C15.9532 8.62783 15.4451 8.49065 15.0245 8.1301C14.5872 7.75526 14.4039 7.27699 14.3231 6.76213C14.2499 6.2952 14.2499 5.71497 14.25 5.05541L14.25 5.0554L14.25 5L14.25 4.9446L14.25 4.9446C14.2499 4.28504 14.2499 3.7048 14.3231 3.23787C14.4039 2.72301 14.5872 2.24474 15.0245 1.8699C15.4451 1.50935 15.9532 1.37217 16.4939 1.30985C17.0136 1.24996 17.6684 1.24998 18.4551 1.25H18.4551H18.5449H18.5449Z',
  d14: 'M18.5449 15.25C19.3316 15.25 19.9864 15.25 20.5061 15.3099C21.0469 15.3722 21.5549 15.5094 21.9755 15.8699C22.4129 16.2447 22.5961 16.723 22.6769 17.2379C22.7501 17.7048 22.7501 18.285 22.75 18.9446L22.75 19L22.75 19.0554C22.7501 19.715 22.7501 20.2952 22.6769 20.7621C22.5961 21.277 22.4129 21.7553 21.9755 22.1301C21.5549 22.4907 21.0469 22.6278 20.5061 22.6902C19.9864 22.75 19.3316 22.75 18.5449 22.75H18.4551C17.6684 22.75 17.0136 22.75 16.4939 22.6902C15.9532 22.6278 15.4451 22.4907 15.0245 22.1301C14.5872 21.7553 14.4039 21.277 14.3231 20.7621C14.2499 20.2952 14.2499 19.715 14.25 19.0554L14.25 19.0554L14.25 19L14.25 18.9446L14.25 18.9446C14.2499 18.285 14.2499 17.7048 14.3231 17.2379C14.4039 16.723 14.5872 16.2447 15.0245 15.8699C15.4451 15.5094 15.9532 15.3722 16.4939 15.3099C17.0136 15.25 17.6684 15.25 18.4551 15.25H18.4551H18.5449H18.5449Z',
  d15: 'M7 6.25C3.82436 6.25 1.25 8.82436 1.25 12C1.25 15.1756 3.82436 17.75 7 17.75C10.1756 17.75 12.75 15.1756 12.75 12C12.75 8.82436 10.1756 6.25 7 6.25ZM9.20679 11.4096C9.49343 11.1106 9.48339 10.6358 9.18436 10.3492C8.88534 10.0626 8.41058 10.0726 8.12394 10.3716L6.44314 12.1251L5.87346 11.5308C5.58682 11.2317 5.11205 11.2217 4.81303 11.5083C4.51401 11.795 4.50397 12.2697 4.79061 12.5687L5.60189 13.4151C5.66155 13.4775 5.75011 13.5702 5.83998 13.6417C5.95329 13.7319 6.15726 13.8628 6.44314 13.8628C6.72903 13.8628 6.933 13.7319 7.04631 13.6417C7.13618 13.5702 7.22473 13.4775 7.2844 13.4151L9.20679 11.4096Z',
  d16: 'M1.25 12C1.25 8.82436 3.82436 6.25 7 6.25C10.1756 6.25 12.75 8.82436 12.75 12C12.75 15.1756 10.1756 17.75 7 17.75C3.82436 17.75 1.25 15.1756 1.25 12Z',
  d17: 'M9.18436 10.3492C9.48338 10.6358 9.49343 11.1106 9.20679 11.4096L7.2844 13.4151C7.22473 13.4775 7.13618 13.5702 7.04631 13.6417C6.933 13.7319 6.72903 13.8628 6.44314 13.8628C6.15726 13.8628 5.95329 13.7319 5.83998 13.6417C5.75011 13.5702 5.66155 13.4775 5.60189 13.4151L4.79061 12.5687C4.50397 12.2697 4.51401 11.795 4.81303 11.5083C5.11205 11.2217 5.58682 11.2317 5.87346 11.5308L6.44314 12.1251L8.12394 10.3716C8.41058 10.0726 8.88534 10.0626 9.18436 10.3492Z',
  d18: 'M8.06583 6.34869C8.14857 5.97823 8.30215 5.70571 8.48898 5.51346C8.76719 5.22717 9.23444 5 9.99947 5H11.9995C12.5518 5 12.9995 4.55228 12.9995 4C12.9995 3.44772 12.5518 3 11.9995 3H9.99947C8.82412 3 7.79137 3.36155 7.05468 4.11963C6.47366 4.71751 6.15021 5.48653 6.04149 6.32944C6.35304 6.2772 6.67308 6.25 6.99947 6.25C7.36383 6.25 7.72028 6.28389 8.06583 6.34869Z',
  d19: 'M6.04102 17.6705C6.35271 17.7228 6.67291 17.75 6.99947 17.75C7.36349 17.75 7.71961 17.7162 8.06485 17.6515C8.15232 18.047 8.31907 18.3221 8.51294 18.5105C8.80401 18.7934 9.27907 19 9.99947 19H11.9995C12.5518 19 12.9995 19.4477 12.9995 20C12.9995 20.5523 12.5518 21 11.9995 21H9.99947C8.89733 21 7.87239 20.6768 7.1191 19.9448C6.50892 19.3518 6.15564 18.567 6.04102 17.6705Z',
  d20: 'M22 22V16H15V22H22Z',
  d21: 'M22 8V2H15V8H22Z',
  d22: 'M6.99414 6.64355V4.10684C6.99414 4.05161 7.03891 4.00684 7.09414 4.00684H12.0269M6.99951 17.3535V19.8902C6.99951 19.9455 7.04428 19.9902 7.09951 19.9902H12.0322',
  d23: 'M4.81123 11.6941L6.451 13.1368L9.02103 10.007M12 12C12 14.7614 9.76142 17 7 17C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7C9.76142 7 12 9.23858 12 12Z',
  d24: 'M6.00136 3.99955C6.00161 3.44744 6.44925 3 7.00136 3H12V5H8.00091L8.00002 7.00045L6.00002 6.99955L6.00136 3.99955ZM7.99984 19L8.00002 17.0001L6.00002 16.9999L5.99976 19.9999C5.99973 20.2651 6.10508 20.5195 6.29262 20.7071C6.48016 20.8946 6.73452 21 6.99976 21H12V19H7.99984Z',
  d25: 'M14.25 16C14.25 15.5858 14.5858 15.25 15 15.25H22C22.4142 15.25 22.75 15.5858 22.75 16V22C22.75 22.4142 22.4142 22.75 22 22.75H15C14.5858 22.75 14.25 22.4142 14.25 22V16Z',
  d26: 'M14.25 2C14.25 1.58579 14.5858 1.25 15 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V8C22.75 8.41421 22.4142 8.75 22 8.75H15C14.5858 8.75 14.25 8.41421 14.25 8V2Z',
  d27: 'M7 6.25C3.82436 6.25 1.25 8.82436 1.25 12C1.25 15.1756 3.82436 17.75 7 17.75C10.1756 17.75 12.75 15.1756 12.75 12C12.75 8.82436 10.1756 6.25 7 6.25ZM6.5608 14.5438L9.77186 10.6347L8.22641 9.36523L6.32636 11.6783L5.48067 10.9368L4.16211 12.4406L6.5608 14.5438Z',
} as const;

export const IconStructureCheckStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-check-stroke-rounded IconStructureCheckStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconStructureCheckDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-check-duotone-rounded IconStructureCheckDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureCheckTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-check-twotone-rounded IconStructureCheckTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureCheckSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-check-solid-rounded IconStructureCheckSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureCheckBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-check-bulk-rounded IconStructureCheckBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureCheckStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-check-stroke-sharp IconStructureCheckStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStructureCheckSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="structure-check-solid-sharp IconStructureCheckSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStructureCheck: TheIconSelfPack = {
  name: 'StructureCheck',
  StrokeRounded: IconStructureCheckStrokeRounded,
  DuotoneRounded: IconStructureCheckDuotoneRounded,
  TwotoneRounded: IconStructureCheckTwotoneRounded,
  SolidRounded: IconStructureCheckSolidRounded,
  BulkRounded: IconStructureCheckBulkRounded,
  StrokeSharp: IconStructureCheckStrokeSharp,
  SolidSharp: IconStructureCheckSolidSharp,
};