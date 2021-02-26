console.log(THREE);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});
const scene = new THREE.Scene();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set ( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

    let controls = new THREE.OrbitControls(camera, renderer.domElement);

    controls.addEventListener("change", renderer);

 const LineMaterial = new THREE.LineBasicMaterial( { color: 0x00ffff } );
//  const points = [];
//  points.push( new THREE.Vector3( -10, 0, 0 ) );
//  points.push( new THREE.Vector3( 0, 10, 0 ) );
//  points.push( new THREE.Vector3( 0, -10, 0 ) );

//  for (var i=1; i<15; i++){
//     points.push( new THREE.Vector3( -5*i, -2*i, 0 ) );
//     points.push( new THREE.Vector3( 3*i, 3*i, 0 ) );
//  }

// const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
// const line = new THREE.Line( lineGeometry, LineMaterial );
// scene.add( line );
// renderer.render( scene, camera );

const light1 = new THREE.PointLight({color: 0x0fff00})
scene.add( light1 );
light1.position.x = 50
light1.position.y = -20
light1.position.z = 10

const light2 = new THREE.PointLight({color: 0x0fff00})
scene.add(light2 );
light2.position.set(-50,50,20)

const near = 50;
const far = 150;
const color = 'violet';
scene.fog = new THREE.Fog(color, near, far);
scene.background = new THREE.Color(color);

const colorWhite = new THREE.Color('hsl(106, 100%, 90%)')

const width = 20;
const height = 20;
const depth = 80;
const cubeGeometry = new THREE.BoxGeometry( width, height, depth );
const cubeMaterial = new THREE.MeshPhongMaterial({
    color: colorWhite,
    shininess: 80
})

const cube = new THREE.Mesh ( cubeGeometry, cubeMaterial );
scene.add( cube );


cube.rotation.z = 0;
cube.rotation.x = 10;

cube.position.x = 30;
cube.position.y = 20;
cube.position.z = 20;
// renderer.render( scene, camera );

    const conegeometry = new THREE.ConeGeometry(5, 20, 32 );
const conematerial = new THREE.MeshBasicMaterial( {color: 0xffff0});
const cone = new THREE.Mesh( conegeometry, conematerial );
scene.add( cone );

cone.position.x = -50;
cone.position.y =  20;
cone.position.z =  20;

    const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

cylinder.rotation.z = 0;
cylinder.rotation.x = 10;

cylinder.position.x = -20;
cylinder.position.y = 0;
cylinder.position.z = 0;

const animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.x +=.03
    cube.rotation.y +=.03
    cone.rotation.x +=.03
    cylinder.rotation.x +=.03
    cylinder.rotation.y +=.03
    renderer.render( scene, camera );
}
animate()
