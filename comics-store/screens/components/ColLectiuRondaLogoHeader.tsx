import React from "react";
import { View } from "react-native";
import { Svg, Polygon, G, Path } from "react-native-svg";
import { FullColLectiuRondaLogoProps } from "../../interfaces/interfaces";

export default function ColLectiuRondaLogoheader({
  style,
}: FullColLectiuRondaLogoProps) {
  return (
    <View style={style}>
      <Svg width="127.6" height="20" viewBox="0 0 127.6 20">
        <G>
          <Polygon
            points="12.7,15.1 19.8,19 29,19 22.4,15.1 31.9,11.4 31.8,1.9 6.7,12.2 6.6,11.1 17.5,6.6 17.5,1.9 10.2,5.3 10.2,1.9 7.8,3 7.8,6.2 0.6,9.3 0.6,19 25.9,8.1 25.9,9.3"
            fill="#A03033"
          />
          {/* Texto "Col·lectiu Ronda" */}
          <G>
            <Path
              d="M37.5,18.1c-0.8-0.4-1.5-0.9-2.1-1.6l1.9-2.3c0.8,1.1,1.7,1.6,2.8,1.6c1.4,0,2.1-0.8,2.1-2.5V6.2h-3V3.4h6.5v9.7c0,1.8-0.5,3.2-1.4,4.1s-2.3,1.4-4,1.4C39.3,18.7,38.3,18.5,37.5,18.1z"
              fill="#000000"
            />
            <Path
              d="M50.8,16.9C49.6,15.7,49,14,49,11.8V3.4h3.5v8.3c0,2.7,1.1,4,3.3,4c1.1,0,1.9-0.3,2.5-1s0.9-1.7,0.9-3.1V3.4h3.4v8.4c0,2.2-0.6,3.9-1.8,5.1c-1.2,1.2-2.9,1.8-5,1.8C53.6,18.7,51.9,18.1,50.8,16.9z"
              fill="#000000"
            />
            <Path
              d="M75.6,18.4l-2.9-4.2h-0.2h-3v4.2H66v-15h6.5c1.3,0,2.5,0.2,3.5,0.7c1,0.4,1.7,1.1,2.3,1.9s0.8,1.8,0.8,2.9s-0.3,2.1-0.8,2.9c-0.5,0.8-1.3,1.4-2.3,1.9l3.4,4.8L75.6,18.4L75.6,18.4z M74.7,6.9c-0.5-0.4-1.3-0.7-2.4-0.7h-2.8v5.2h2.8c1,0,1.8-0.2,2.4-0.7s0.8-1.1,0.8-1.9C75.5,8,75.2,7.4,74.7,6.9z"
              fill="#000000"
            />
            <Path
              d="M83.4,0.9h3.5l-1.7,1.6h-3.5L83.4,0.9z M81.8,3.4h3.5v15h-3.5V3.4z"
              fill="#000000"
            />
            <Path
              d="M88.8,3.4h6.8c1.6,0,3.1,0.3,4.3,0.9s2.2,1.5,2.9,2.6c0.7,1.1,1,2.5,1,4s-0.3,2.8-1,3.9s-1.7,2-2.9,2.6s-2.7,0.9-4.3,0.9h-6.8V3.4z M95.4,15.6c1.5,0,2.7-0.4,3.6-1.2s1.3-2,1.3-3.4S99.9,8.4,99,7.6s-2.1-1.2-3.6-1.2h-3.2v9.3L95.4,15.6L95.4,15.6z"
              fill="#000000"
            />
            <Path d="M106.5,3.4h3.5v15h-3.5V3.4z" fill="#000000" />
            <Path
              d="M116.6,17.7c-1.2-0.7-2.2-1.6-2.9-2.8s-1.1-2.5-1.1-4s0.3-2.8,1.1-4s1.7-2.1,2.9-2.8c1.2-0.7,2.6-1,4.2-1c1.3,0,2.5,0.2,3.5,0.7s1.9,1.1,2.6,2l-2.2,2.1c-1-1.2-2.3-1.8-3.8-1.8c-0.9,0-1.8,0.2-2.5,0.6s-1.3,1-1.7,1.7s-0.6,1.6-0.6,2.5s0.2,1.8,0.6,2.5s1,1.3,1.7,1.7s1.6,0.6,2.5,0.6c1.5,0,2.8-0.6,3.8-1.8l2.2,2.1c-0.7,0.9-1.6,1.5-2.7,2c-1.1,0.5-2.2,0.7-3.5,0.7C119.2,18.7,117.8,18.4,116.6,17.7z"
              fill="#000000"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
}
