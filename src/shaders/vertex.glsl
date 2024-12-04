export default `
varying vec2 vUv;
varying vec3 vNormal;
uniform float uTime;


void main() {

    vUv = uv;
    vNormal = normal;
    vec3 newPosition = position;
    newPosition.z = 0.1*sin(newPosition.x*15. + uTime);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`;