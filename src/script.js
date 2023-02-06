import * as THREE from 'three'


// Canvas element of HTML to js
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// custom variables
const sizes = {
    width: 800,
    height: 600
}


//Camera 
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)



// Functions

const start = () =>
{
    renderer.render(scene, camera)
}


const rotate = () =>
{
    renderer.render(scene, camera)
    mesh.rotation.y += 0.01 
    window.requestAnimationFrame(rotate)
}

const move = () =>
{
    renderer.render(scene, camera)
    mesh.position.y -= 0.01 
    console.log(mesh.position.y)
    if(mesh.position.y > -3){
        window.requestAnimationFrame(move)
    }
    else{
        alert("you lost")
       mesh.position.y = 0

    } 
    
}

function jump(){
    mesh.position.y += 0.5
    console.log('hashahs')
    renderer.render(scene, camera)
}

let color1 = [0xff00ff , 0xffffff, 0x0000ff, 0x00ff00, 0xffff0f]
const changeColor = () =>
{
    material.color.setHex(color1[Math.floor(Math.random() * 5)]) 
   renderer.render(scene, camera)
}


// Button to start the game
const btn0 = document.querySelector('#z')
btn0.addEventListener('click', start)

// Button to Spin it
const btn = document.querySelector('#a')
btn.addEventListener('click', rotate)

  
// Button to move it
const btn2 = document.querySelector('#b')
btn2.addEventListener('click', move)

// Btn to change color
const btn3 = document.querySelector('#c')
btn3.addEventListener('click', changeColor )

// Btn to enlarge it
const btn4 = document.querySelector('#d')
btn4.addEventListener('click', jump)







