export default `

uniform float uTime;
uniform vec2 uResolution;
#define PI 3.14159265359;

varying vec2 vUv;
varying vec3 vNormal;


void main() {

  vec2 newUV = vUv;
  vec3 newNormal = vNormal;
  newUV.x+= sin(vNormal.x+uTime);

  gl_FragColor = vec4(newUV,1.0,1.0);
  
}
`;
