import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
export const Search = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 256 256"
    {...props}>
    <Path
      fill="#fff"
      strokeMiterlimit={10}
      d="M20.5 6C12.516 6 6 12.516 6 20.5S12.516 35 20.5 35c3.273 0 6.289-1.107 8.72-2.95l9.366 9.364a2 2 0 1 0 2.828-2.828l-9.363-9.365C33.893 26.789 35 23.773 35 20.5 35 12.516 28.484 6 20.5 6zm0 4A10.47 10.47 0 0 1 31 20.5c0 2.796-1.086 5.32-2.852 7.197a2 2 0 0 0-.447.448A10.457 10.457 0 0 1 20.5 31 10.47 10.47 0 0 1 10 20.5 10.47 10.47 0 0 1 20.5 10z"
      transform="scale(5.33333)"
    />
  </Svg>
);
