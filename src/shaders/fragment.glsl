export default `

uniform float uTime;
uniform vec2 uResolution;
#define PI 3.14159265359;


void main() {

  vec2 st = gl_FragCoord.xy/uResolution;


  st.x=st.x + sin(uTime);  
  st.y=st.y - sin(uTime);  
  gl_FragColor = vec4(st.x,st.y,1.0,1.0);
  
}
`;
