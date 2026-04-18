import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

export type GLTFResult = GLTF & {
  nodes: {
    // These names match the mesh names in your Galaxy S26 .glb files
    M2_USB_1: THREE.Mesh
    M2_Display_Activearea: THREE.Mesh
    M2_Frame: THREE.Mesh
    M2_Camera_Module: THREE.Mesh
  }
  materials: {
    // This allows you to reference any material by name
    [key: string]: THREE.MeshStandardMaterial
  }
}


