import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script2 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script3 from "../83087d33-84d2-4135-af09-ab0fa357b59d/src/item"
import Script4 from "../8d62d5a3-411c-43f8-a438-574ccf3d0fbe/src/item"
import Script5 from "../396e4247-6acd-406c-9272-046c65d0436c/src/item"
import Script6 from "../58dc566a-2add-4326-b61c-0fdf46903195/src/item"
import Script7 from "../3cf05054-0a57-4b00-ba77-a3f21876494d/src/item"
import Script8 from "../846479b0-75d3-450d-bbd6-7e6b3355a7a2/src/item"
import Script9 from "../a3401af9-8e2b-4b2b-915e-ccb8ed611c88/src/item"
import Script10 from "../3bc461a1-e060-4e46-b80c-4b016678a7f9/src/item"
import Script11 from "../ad67f3a9-fa15-4e06-aced-a2a7716ebf85/src/item"
import Script12 from "../b79a150e-5914-4fdf-a6b4-c7ff0c6833dd/src/item"
import Script13 from "../b53e3bde-9d22-4098-8707-29a685d25a3b/src/item"
import Script14 from "../bcdcfbe4-bd95-4100-9174-b38785b45e2c/src/item"
import Script15 from "../1cd258df-9b80-4e75-8aaa-524fbc438295/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const redNeonTube6 = new Entity('redNeonTube6')
engine.addEntity(redNeonTube6)
redNeonTube6.setParent(_scene)
const gltfShape = new GLTFShape("6fd50cb1-fe66-4c14-a92d-22baec98639f/NeonLightTube_06/NeonLightTube_06.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
redNeonTube6.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(0.31430351734161377, 1.9566090106964111, 1.30887770652771),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.425239324569702, 1.0000050067901611, 1)
})
redNeonTube6.addComponentOrReplace(transform2)

const redNeonTube7 = new Entity('redNeonTube7')
engine.addEntity(redNeonTube7)
redNeonTube7.setParent(_scene)
redNeonTube7.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(15.864707946777344, 1.982234001159668, 8.206141471862793),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252383708953857, 1.000004529953003, 114.75346374511719)
})
redNeonTube7.addComponentOrReplace(transform3)

const redNeonTube10 = new Entity('redNeonTube10')
engine.addEntity(redNeonTube10)
redNeonTube10.setParent(_scene)
redNeonTube10.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(0.031082984060049057, 1.982234001159668, 8.037086486816406),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.425236940383911, 1.0000038146972656, 114.75346374511719)
})
redNeonTube10.addComponentOrReplace(transform4)

const redNeonTube13 = new Entity('redNeonTube13')
engine.addEntity(redNeonTube13)
redNeonTube13.setParent(_scene)
redNeonTube13.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(8.20470905303955, 1.982234001159668, 15.986844062805176),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.4252381324768066, 1.0000050067901611, 114.75357055664062)
})
redNeonTube13.addComponentOrReplace(transform5)

const redNeonTube14 = new Entity('redNeonTube14')
engine.addEntity(redNeonTube14)
redNeonTube14.setParent(_scene)
redNeonTube14.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(0, 6.092233657836914, 8.037086486816406),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252383708953857, 1.000004529953003, 114.75346374511719)
})
redNeonTube14.addComponentOrReplace(transform6)

const floorGlass = new Entity('floorGlass')
engine.addEntity(floorGlass)
floorGlass.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(15.997428894042969, 4.0051798820495605, 15.999792098999023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass.addComponentOrReplace(transform7)
const gltfShape2 = new GLTFShape("f4a4956e-f60a-4108-82c7-41b5ebda6549/GlassFloor.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
floorGlass.addComponentOrReplace(gltfShape2)

const floorGlass2 = new Entity('floorGlass2')
engine.addEntity(floorGlass2)
floorGlass2.setParent(_scene)
floorGlass2.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(15.997428894042969, 4.0051798820495605, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass2.addComponentOrReplace(transform8)

const floorGlass3 = new Entity('floorGlass3')
engine.addEntity(floorGlass3)
floorGlass3.setParent(_scene)
floorGlass3.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(15.997428894042969, 4.0051798820495605, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass3.addComponentOrReplace(transform9)

const floorGlass4 = new Entity('floorGlass4')
engine.addEntity(floorGlass4)
floorGlass4.setParent(_scene)
floorGlass4.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(15.997428894042969, 4.0051798820495605, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass4.addComponentOrReplace(transform10)

const floorGlass5 = new Entity('floorGlass5')
engine.addEntity(floorGlass5)
floorGlass5.setParent(_scene)
floorGlass5.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(11.996179580688477, 4.0051798820495605, 15.999792098999023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass5.addComponentOrReplace(transform11)

const floorGlass6 = new Entity('floorGlass6')
engine.addEntity(floorGlass6)
floorGlass6.setParent(_scene)
floorGlass6.addComponentOrReplace(gltfShape2)
const transform12 = new Transform({
  position: new Vector3(11.996179580688477, 4.0051798820495605, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass6.addComponentOrReplace(transform12)

const floorGlass7 = new Entity('floorGlass7')
engine.addEntity(floorGlass7)
floorGlass7.setParent(_scene)
floorGlass7.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(11.996179580688477, 4.0051798820495605, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass7.addComponentOrReplace(transform13)

const floorGlass8 = new Entity('floorGlass8')
engine.addEntity(floorGlass8)
floorGlass8.setParent(_scene)
floorGlass8.addComponentOrReplace(gltfShape2)
const transform14 = new Transform({
  position: new Vector3(11.996179580688477, 4.0051798820495605, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass8.addComponentOrReplace(transform14)

const floorGlass9 = new Entity('floorGlass9')
engine.addEntity(floorGlass9)
floorGlass9.setParent(_scene)
floorGlass9.addComponentOrReplace(gltfShape2)
const transform15 = new Transform({
  position: new Vector3(8.007821083068848, 4.0051798820495605, 15.999792098999023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5089138746261597, 1, 1)
})
floorGlass9.addComponentOrReplace(transform15)

const floorGlass10 = new Entity('floorGlass10')
engine.addEntity(floorGlass10)
floorGlass10.setParent(_scene)
floorGlass10.addComponentOrReplace(gltfShape2)
const transform16 = new Transform({
  position: new Vector3(8.007821083068848, 4.0051798820495605, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass10.addComponentOrReplace(transform16)

const floorGlass11 = new Entity('floorGlass11')
engine.addEntity(floorGlass11)
floorGlass11.setParent(_scene)
floorGlass11.addComponentOrReplace(gltfShape2)
const transform17 = new Transform({
  position: new Vector3(8.007821083068848, 4.0051798820495605, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass11.addComponentOrReplace(transform17)

const floorGlass12 = new Entity('floorGlass12')
engine.addEntity(floorGlass12)
floorGlass12.setParent(_scene)
floorGlass12.addComponentOrReplace(gltfShape2)
const transform18 = new Transform({
  position: new Vector3(8.007821083068848, 4.0051798820495605, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass12.addComponentOrReplace(transform18)

const floorGlass14 = new Entity('floorGlass14')
engine.addEntity(floorGlass14)
floorGlass14.setParent(_scene)
floorGlass14.addComponentOrReplace(gltfShape2)
const transform19 = new Transform({
  position: new Vector3(3.999147415161133, 4.0051798820495605, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass14.addComponentOrReplace(transform19)

const floorGlass15 = new Entity('floorGlass15')
engine.addEntity(floorGlass15)
floorGlass15.setParent(_scene)
floorGlass15.addComponentOrReplace(gltfShape2)
const transform20 = new Transform({
  position: new Vector3(3.999147415161133, 4.0051798820495605, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass15.addComponentOrReplace(transform20)

const floorGlass16 = new Entity('floorGlass16')
engine.addEntity(floorGlass16)
floorGlass16.setParent(_scene)
floorGlass16.addComponentOrReplace(gltfShape2)
const transform21 = new Transform({
  position: new Vector3(3.999147415161133, 4.0051798820495605, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass16.addComponentOrReplace(transform21)

const floorGlass13 = new Entity('floorGlass13')
engine.addEntity(floorGlass13)
floorGlass13.setParent(_scene)
floorGlass13.addComponentOrReplace(gltfShape2)
const transform22 = new Transform({
  position: new Vector3(8.000624656677246, 7.925479412078857, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass13.addComponentOrReplace(transform22)

const floorGlass17 = new Entity('floorGlass17')
engine.addEntity(floorGlass17)
floorGlass17.setParent(_scene)
floorGlass17.addComponentOrReplace(gltfShape2)
const transform23 = new Transform({
  position: new Vector3(15.997428894042969, 7.925479412078857, 15.975967407226562),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1.9904712438583374)
})
floorGlass17.addComponentOrReplace(transform23)

const floorGlass18 = new Entity('floorGlass18')
engine.addEntity(floorGlass18)
floorGlass18.setParent(_scene)
floorGlass18.addComponentOrReplace(gltfShape2)
const transform24 = new Transform({
  position: new Vector3(15.997428894042969, 7.925479412078857, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass18.addComponentOrReplace(transform24)

const floorGlass19 = new Entity('floorGlass19')
engine.addEntity(floorGlass19)
floorGlass19.setParent(_scene)
floorGlass19.addComponentOrReplace(gltfShape2)
const transform25 = new Transform({
  position: new Vector3(15.997428894042969, 7.925479412078857, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass19.addComponentOrReplace(transform25)

const floorGlass20 = new Entity('floorGlass20')
engine.addEntity(floorGlass20)
floorGlass20.setParent(_scene)
floorGlass20.addComponentOrReplace(gltfShape2)
const transform26 = new Transform({
  position: new Vector3(11.996179580688477, 7.925479412078857, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass20.addComponentOrReplace(transform26)

const floorGlass21 = new Entity('floorGlass21')
engine.addEntity(floorGlass21)
floorGlass21.setParent(_scene)
floorGlass21.addComponentOrReplace(gltfShape2)
const transform27 = new Transform({
  position: new Vector3(11.996179580688477, 7.925479412078857, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass21.addComponentOrReplace(transform27)

const floorGlass22 = new Entity('floorGlass22')
engine.addEntity(floorGlass22)
floorGlass22.setParent(_scene)
floorGlass22.addComponentOrReplace(gltfShape2)
const transform28 = new Transform({
  position: new Vector3(11.996179580688477, 7.925479412078857, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass22.addComponentOrReplace(transform28)

const floorGlass23 = new Entity('floorGlass23')
engine.addEntity(floorGlass23)
floorGlass23.setParent(_scene)
floorGlass23.addComponentOrReplace(gltfShape2)
const transform29 = new Transform({
  position: new Vector3(3.999375343322754, 7.925479412078857, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.510823130607605, 1, 1)
})
floorGlass23.addComponentOrReplace(transform29)

const floorGlass25 = new Entity('floorGlass25')
engine.addEntity(floorGlass25)
floorGlass25.setParent(_scene)
floorGlass25.addComponentOrReplace(gltfShape2)
const transform30 = new Transform({
  position: new Vector3(8.007821083068848, 7.925479412078857, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass25.addComponentOrReplace(transform30)

const floorGlass26 = new Entity('floorGlass26')
engine.addEntity(floorGlass26)
floorGlass26.setParent(_scene)
floorGlass26.addComponentOrReplace(gltfShape2)
const transform31 = new Transform({
  position: new Vector3(8.007821083068848, 7.925479412078857, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass26.addComponentOrReplace(transform31)

const floorGlass27 = new Entity('floorGlass27')
engine.addEntity(floorGlass27)
floorGlass27.setParent(_scene)
floorGlass27.addComponentOrReplace(gltfShape2)
const transform32 = new Transform({
  position: new Vector3(8.007821083068848, 7.925479412078857, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass27.addComponentOrReplace(transform32)

const floorGlass28 = new Entity('floorGlass28')
engine.addEntity(floorGlass28)
floorGlass28.setParent(_scene)
floorGlass28.addComponentOrReplace(gltfShape2)
const transform33 = new Transform({
  position: new Vector3(3.999147415161133, 7.925479412078857, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass28.addComponentOrReplace(transform33)

const floorGlass29 = new Entity('floorGlass29')
engine.addEntity(floorGlass29)
floorGlass29.setParent(_scene)
floorGlass29.addComponentOrReplace(gltfShape2)
const transform34 = new Transform({
  position: new Vector3(3.999147415161133, 7.925479412078857, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass29.addComponentOrReplace(transform34)

const floorGlass30 = new Entity('floorGlass30')
engine.addEntity(floorGlass30)
floorGlass30.setParent(_scene)
floorGlass30.addComponentOrReplace(gltfShape2)
const transform35 = new Transform({
  position: new Vector3(3.999147415161133, 7.925479412078857, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass30.addComponentOrReplace(transform35)

const redNeonTube15 = new Entity('redNeonTube15')
engine.addEntity(redNeonTube15)
redNeonTube15.setParent(_scene)
redNeonTube15.addComponentOrReplace(gltfShape)
const transform36 = new Transform({
  position: new Vector3(8.20470905303955, 6.122361660003662, 15.98684310913086),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.2545740604400635, 1.0000054836273193, 114.75363159179688)
})
redNeonTube15.addComponentOrReplace(transform36)

const redNeonTube16 = new Entity('redNeonTube16')
engine.addEntity(redNeonTube16)
redNeonTube16.setParent(_scene)
redNeonTube16.addComponentOrReplace(gltfShape)
const transform37 = new Transform({
  position: new Vector3(15.84600830078125, 6.118805408477783, 7.958951950073242),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252402782440186, 1.0000054836273193, 114.75346374511719)
})
redNeonTube16.addComponentOrReplace(transform37)

const floorGlass24 = new Entity('floorGlass24')
engine.addEntity(floorGlass24)
floorGlass24.setParent(_scene)
floorGlass24.addComponentOrReplace(gltfShape2)
const transform38 = new Transform({
  position: new Vector3(11.992985725402832, 7.925479412078857, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass24.addComponentOrReplace(transform38)

const redNeonTube17 = new Entity('redNeonTube17')
engine.addEntity(redNeonTube17)
redNeonTube17.setParent(_scene)
redNeonTube17.addComponentOrReplace(gltfShape)
const transform39 = new Transform({
  position: new Vector3(15.864707946777344, 10.218280792236328, 8.206141471862793),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252407550811768, 1.0000057220458984, 114.75346374511719)
})
redNeonTube17.addComponentOrReplace(transform39)

const redNeonTube18 = new Entity('redNeonTube18')
engine.addEntity(redNeonTube18)
redNeonTube18.setParent(_scene)
redNeonTube18.addComponentOrReplace(gltfShape)
const transform40 = new Transform({
  position: new Vector3(8.20470905303955, 10.221837997436523, 15.986844062805176),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.4252381324768066, 1.0000056028366089, 114.75364685058594)
})
redNeonTube18.addComponentOrReplace(transform40)

const redNeonTube19 = new Entity('redNeonTube19')
engine.addEntity(redNeonTube19)
redNeonTube19.setParent(_scene)
redNeonTube19.addComponentOrReplace(gltfShape)
const transform41 = new Transform({
  position: new Vector3(0, 10.191709518432617, 8.037086486816406),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252398014068604, 1.0000052452087402, 114.75346374511719)
})
redNeonTube19.addComponentOrReplace(transform41)

const floorGlass31 = new Entity('floorGlass31')
engine.addEntity(floorGlass31)
floorGlass31.setParent(_scene)
floorGlass31.addComponentOrReplace(gltfShape2)
const transform42 = new Transform({
  position: new Vector3(15.997428894042969, 12.201950073242188, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass31.addComponentOrReplace(transform42)

const floorGlass32 = new Entity('floorGlass32')
engine.addEntity(floorGlass32)
floorGlass32.setParent(_scene)
floorGlass32.addComponentOrReplace(gltfShape2)
const transform43 = new Transform({
  position: new Vector3(15.997428894042969, 12.201950073242188, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass32.addComponentOrReplace(transform43)

const floorGlass33 = new Entity('floorGlass33')
engine.addEntity(floorGlass33)
floorGlass33.setParent(_scene)
floorGlass33.addComponentOrReplace(gltfShape2)
const transform44 = new Transform({
  position: new Vector3(15.997428894042969, 12.201950073242188, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass33.addComponentOrReplace(transform44)

const floorGlass34 = new Entity('floorGlass34')
engine.addEntity(floorGlass34)
floorGlass34.setParent(_scene)
floorGlass34.addComponentOrReplace(gltfShape2)
const transform45 = new Transform({
  position: new Vector3(15.997428894042969, 12.201950073242188, 15.999792098999023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass34.addComponentOrReplace(transform45)

const floorGlass35 = new Entity('floorGlass35')
engine.addEntity(floorGlass35)
floorGlass35.setParent(_scene)
floorGlass35.addComponentOrReplace(gltfShape2)
const transform46 = new Transform({
  position: new Vector3(11.996179580688477, 12.201950073242188, 15.999792098999023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass35.addComponentOrReplace(transform46)

const floorGlass36 = new Entity('floorGlass36')
engine.addEntity(floorGlass36)
floorGlass36.setParent(_scene)
floorGlass36.addComponentOrReplace(gltfShape2)
const transform47 = new Transform({
  position: new Vector3(11.996179580688477, 12.201950073242188, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass36.addComponentOrReplace(transform47)

const floorGlass37 = new Entity('floorGlass37')
engine.addEntity(floorGlass37)
floorGlass37.setParent(_scene)
floorGlass37.addComponentOrReplace(gltfShape2)
const transform48 = new Transform({
  position: new Vector3(11.996179580688477, 12.201950073242188, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass37.addComponentOrReplace(transform48)

const floorGlass38 = new Entity('floorGlass38')
engine.addEntity(floorGlass38)
floorGlass38.setParent(_scene)
floorGlass38.addComponentOrReplace(gltfShape2)
const transform49 = new Transform({
  position: new Vector3(11.996179580688477, 12.201950073242188, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass38.addComponentOrReplace(transform49)

const floorGlass39 = new Entity('floorGlass39')
engine.addEntity(floorGlass39)
floorGlass39.setParent(_scene)
floorGlass39.addComponentOrReplace(gltfShape2)
const transform50 = new Transform({
  position: new Vector3(8.007821083068848, 12.201950073242188, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass39.addComponentOrReplace(transform50)

const floorGlass40 = new Entity('floorGlass40')
engine.addEntity(floorGlass40)
floorGlass40.setParent(_scene)
floorGlass40.addComponentOrReplace(gltfShape2)
const transform51 = new Transform({
  position: new Vector3(8.007821083068848, 12.201950073242188, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass40.addComponentOrReplace(transform51)

const floorGlass41 = new Entity('floorGlass41')
engine.addEntity(floorGlass41)
floorGlass41.setParent(_scene)
floorGlass41.addComponentOrReplace(gltfShape2)
const transform52 = new Transform({
  position: new Vector3(8.007821083068848, 12.201950073242188, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass41.addComponentOrReplace(transform52)

const floorGlass42 = new Entity('floorGlass42')
engine.addEntity(floorGlass42)
floorGlass42.setParent(_scene)
floorGlass42.addComponentOrReplace(gltfShape2)
const transform53 = new Transform({
  position: new Vector3(8.007821083068848, 12.201950073242188, 15.999792098999023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5089138746261597, 1, 1)
})
floorGlass42.addComponentOrReplace(transform53)

const floorGlass43 = new Entity('floorGlass43')
engine.addEntity(floorGlass43)
floorGlass43.setParent(_scene)
floorGlass43.addComponentOrReplace(gltfShape2)
const transform54 = new Transform({
  position: new Vector3(3.999147415161133, 12.201950073242188, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass43.addComponentOrReplace(transform54)

const floorGlass44 = new Entity('floorGlass44')
engine.addEntity(floorGlass44)
floorGlass44.setParent(_scene)
floorGlass44.addComponentOrReplace(gltfShape2)
const transform55 = new Transform({
  position: new Vector3(3.999147415161133, 12.201950073242188, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass44.addComponentOrReplace(transform55)

const floorGlass45 = new Entity('floorGlass45')
engine.addEntity(floorGlass45)
floorGlass45.setParent(_scene)
floorGlass45.addComponentOrReplace(gltfShape2)
const transform56 = new Transform({
  position: new Vector3(3.999147415161133, 12.201950073242188, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass45.addComponentOrReplace(transform56)

const redNeonTube20 = new Entity('redNeonTube20')
engine.addEntity(redNeonTube20)
redNeonTube20.setParent(_scene)
redNeonTube20.addComponentOrReplace(gltfShape)
const transform57 = new Transform({
  position: new Vector3(15.864707946777344, 14.338839530944824, 8.206141471862793),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252421855926514, 1.0000064373016357, 114.75346374511719)
})
redNeonTube20.addComponentOrReplace(transform57)

const redNeonTube21 = new Entity('redNeonTube21')
engine.addEntity(redNeonTube21)
redNeonTube21.setParent(_scene)
redNeonTube21.addComponentOrReplace(gltfShape)
const transform58 = new Transform({
  position: new Vector3(8.20470905303955, 14.34239673614502, 15.986844062805176),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.4252381324768066, 1.0000059604644775, 114.75369262695312)
})
redNeonTube21.addComponentOrReplace(transform58)

const redNeonTube22 = new Entity('redNeonTube22')
engine.addEntity(redNeonTube22)
redNeonTube22.setParent(_scene)
redNeonTube22.addComponentOrReplace(gltfShape)
const transform59 = new Transform({
  position: new Vector3(0, 14.312268257141113, 8.037086486816406),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.425241231918335, 1.0000059604644775, 114.75346374511719)
})
redNeonTube22.addComponentOrReplace(transform59)

const floorGlass46 = new Entity('floorGlass46')
engine.addEntity(floorGlass46)
floorGlass46.setParent(_scene)
floorGlass46.addComponentOrReplace(gltfShape2)
const transform60 = new Transform({
  position: new Vector3(3.999147415161133, 16.116003036499023, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass46.addComponentOrReplace(transform60)

const floorGlass47 = new Entity('floorGlass47')
engine.addEntity(floorGlass47)
floorGlass47.setParent(_scene)
floorGlass47.addComponentOrReplace(gltfShape2)
const transform61 = new Transform({
  position: new Vector3(3.999147415161133, 16.116003036499023, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass47.addComponentOrReplace(transform61)

const floorGlass48 = new Entity('floorGlass48')
engine.addEntity(floorGlass48)
floorGlass48.setParent(_scene)
floorGlass48.addComponentOrReplace(gltfShape2)
const transform62 = new Transform({
  position: new Vector3(3.999147415161133, 16.116003036499023, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass48.addComponentOrReplace(transform62)

const floorGlass49 = new Entity('floorGlass49')
engine.addEntity(floorGlass49)
floorGlass49.setParent(_scene)
floorGlass49.addComponentOrReplace(gltfShape2)
const transform63 = new Transform({
  position: new Vector3(3.999375343322754, 16.116003036499023, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass49.addComponentOrReplace(transform63)

const floorGlass50 = new Entity('floorGlass50')
engine.addEntity(floorGlass50)
floorGlass50.setParent(_scene)
floorGlass50.addComponentOrReplace(gltfShape2)
const transform64 = new Transform({
  position: new Vector3(8.007821083068848, 16.116003036499023, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass50.addComponentOrReplace(transform64)

const floorGlass51 = new Entity('floorGlass51')
engine.addEntity(floorGlass51)
floorGlass51.setParent(_scene)
floorGlass51.addComponentOrReplace(gltfShape2)
const transform65 = new Transform({
  position: new Vector3(8.007821083068848, 16.116003036499023, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass51.addComponentOrReplace(transform65)

const floorGlass52 = new Entity('floorGlass52')
engine.addEntity(floorGlass52)
floorGlass52.setParent(_scene)
floorGlass52.addComponentOrReplace(gltfShape2)
const transform66 = new Transform({
  position: new Vector3(8.007821083068848, 16.116003036499023, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass52.addComponentOrReplace(transform66)

const floorGlass53 = new Entity('floorGlass53')
engine.addEntity(floorGlass53)
floorGlass53.setParent(_scene)
floorGlass53.addComponentOrReplace(gltfShape2)
const transform67 = new Transform({
  position: new Vector3(8.000624656677246, 16.116003036499023, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass53.addComponentOrReplace(transform67)

const floorGlass54 = new Entity('floorGlass54')
engine.addEntity(floorGlass54)
floorGlass54.setParent(_scene)
floorGlass54.addComponentOrReplace(gltfShape2)
const transform68 = new Transform({
  position: new Vector3(11.996179580688477, 16.116003036499023, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass54.addComponentOrReplace(transform68)

const floorGlass55 = new Entity('floorGlass55')
engine.addEntity(floorGlass55)
floorGlass55.setParent(_scene)
floorGlass55.addComponentOrReplace(gltfShape2)
const transform69 = new Transform({
  position: new Vector3(11.996179580688477, 16.116003036499023, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass55.addComponentOrReplace(transform69)

const floorGlass56 = new Entity('floorGlass56')
engine.addEntity(floorGlass56)
floorGlass56.setParent(_scene)
floorGlass56.addComponentOrReplace(gltfShape2)
const transform70 = new Transform({
  position: new Vector3(11.996179580688477, 16.116003036499023, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass56.addComponentOrReplace(transform70)

const floorGlass57 = new Entity('floorGlass57')
engine.addEntity(floorGlass57)
floorGlass57.setParent(_scene)
floorGlass57.addComponentOrReplace(gltfShape2)
const transform71 = new Transform({
  position: new Vector3(12, 16.116003036499023, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass57.addComponentOrReplace(transform71)

const floorGlass58 = new Entity('floorGlass58')
engine.addEntity(floorGlass58)
floorGlass58.setParent(_scene)
floorGlass58.addComponentOrReplace(gltfShape2)
const transform72 = new Transform({
  position: new Vector3(15.997428894042969, 16.116003036499023, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass58.addComponentOrReplace(transform72)

const floorGlass59 = new Entity('floorGlass59')
engine.addEntity(floorGlass59)
floorGlass59.setParent(_scene)
floorGlass59.addComponentOrReplace(gltfShape2)
const transform73 = new Transform({
  position: new Vector3(15.997428894042969, 16.116003036499023, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass59.addComponentOrReplace(transform73)

const floorGlass60 = new Entity('floorGlass60')
engine.addEntity(floorGlass60)
floorGlass60.setParent(_scene)
floorGlass60.addComponentOrReplace(gltfShape2)
const transform74 = new Transform({
  position: new Vector3(15.977499008178711, 16.116003036499023, 15.976698875427246),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1.994036316871643)
})
floorGlass60.addComponentOrReplace(transform74)

const redNeonTube23 = new Entity('redNeonTube23')
engine.addEntity(redNeonTube23)
redNeonTube23.setParent(_scene)
redNeonTube23.addComponentOrReplace(gltfShape)
const transform75 = new Transform({
  position: new Vector3(15.864707946777344, 17.934370040893555, 8.206141471862793),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.14564146101474762, 1.0000073909759521, 114.75346374511719)
})
redNeonTube23.addComponentOrReplace(transform75)

const redNeonTube24 = new Entity('redNeonTube24')
engine.addEntity(redNeonTube24)
redNeonTube24.setParent(_scene)
redNeonTube24.addComponentOrReplace(gltfShape)
const transform76 = new Transform({
  position: new Vector3(8.20470905303955, 17.937204360961914, 15.986844062805176),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(0.1463773548603058, 1.0000064373016357, 114.75375366210938)
})
redNeonTube24.addComponentOrReplace(transform76)

const redNeonTube25 = new Entity('redNeonTube25')
engine.addEntity(redNeonTube25)
redNeonTube25.setParent(_scene)
redNeonTube25.addComponentOrReplace(gltfShape)
const transform77 = new Transform({
  position: new Vector3(0, 17.913198471069336, 8.037086486816406),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.16139283776283264, 1.000006914138794, 114.75346374511719)
})
redNeonTube25.addComponentOrReplace(transform77)

const redNeonTube26 = new Entity('redNeonTube26')
engine.addEntity(redNeonTube26)
redNeonTube26.setParent(_scene)
redNeonTube26.addComponentOrReplace(gltfShape)
const transform78 = new Transform({
  position: new Vector3(8.20470905303955, 17.820009231567383, 0.13731706142425537),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(1.9324930906295776, 1.0000066757202148, 114.7537841796875)
})
redNeonTube26.addComponentOrReplace(transform78)

const redNeonTube27 = new Entity('redNeonTube27')
engine.addEntity(redNeonTube27)
redNeonTube27.setParent(_scene)
redNeonTube27.addComponentOrReplace(gltfShape)
const transform79 = new Transform({
  position: new Vector3(8.20470905303955, 14.34239673614502, 0.12936925888061523),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.4252381324768066, 1.0000061988830566, 114.75372314453125)
})
redNeonTube27.addComponentOrReplace(transform79)

const redNeonTube28 = new Entity('redNeonTube28')
engine.addEntity(redNeonTube28)
redNeonTube28.setParent(_scene)
redNeonTube28.addComponentOrReplace(gltfShape)
const transform80 = new Transform({
  position: new Vector3(8.20470905303955, 10.221837997436523, 0.15693187713623047),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.4252381324768066, 1.0000057220458984, 114.753662109375)
})
redNeonTube28.addComponentOrReplace(transform80)

const redNeonTube29 = new Entity('redNeonTube29')
engine.addEntity(redNeonTube29)
redNeonTube29.setParent(_scene)
redNeonTube29.addComponentOrReplace(gltfShape)
const transform81 = new Transform({
  position: new Vector3(8.20470905303955, 6.122361660003662, 0.15148210525512695),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.4252381324768066, 1.0000057220458984, 114.753662109375)
})
redNeonTube29.addComponentOrReplace(transform81)

const plainText3 = new Entity('plainText3')
engine.addEntity(plainText3)
plainText3.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(8.163972854614258, 9.409811973571777, 0.000164096214575693),
  rotation: new Quaternion(2.45665812725112e-15, -1, 1.1920928244535389e-7, -7.450580596923828e-9),
  scale: new Vector3(8.737273216247559, 9.4327974319458, 1.0000001192092896)
})
plainText3.addComponentOrReplace(transform82)

const plainText4 = new Entity('plainText4')
engine.addEntity(plainText4)
plainText4.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(8.163972854614258, 5.369676113128662, 0.000164096214575693),
  rotation: new Quaternion(2.45665812725112e-15, -1, 1.1920928244535389e-7, -7.450580596923828e-9),
  scale: new Vector3(8.737273216247559, 9.4327974319458, 1.0000001192092896)
})
plainText4.addComponentOrReplace(transform83)

const plainText2 = new Entity('plainText2')
engine.addEntity(plainText2)
plainText2.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(8.163972854614258, 13.547593116760254, 0.000164096214575693),
  rotation: new Quaternion(2.45665812725112e-15, -1, 1.1920928244535389e-7, -7.450580596923828e-9),
  scale: new Vector3(8.737273216247559, 9.4327974319458, 1.0000001192092896)
})
plainText2.addComponentOrReplace(transform84)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(0.28492701053619385, 1.6292911767959595, 1.3403842449188232),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000004768371582, 2, 1.000002384185791)
})
nftPictureFrame.addComponentOrReplace(transform85)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform86 = new Transform({
  position: new Vector3(0.4647136926651001, 1.62929105758667, 1.3403842449188232),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(2.0000052452087402, 2, 1.0000026226043701)
})
nftPictureFrame2.addComponentOrReplace(transform86)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(0.18930786848068237, 0.9306952953338623, 4.298744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315554141998291, 4.5, 1.0002344846725464)
})
nftPictureFrame7.addComponentOrReplace(transform87)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(0.18930786848068237, 0.9306952953338623, 6.798744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315556049346924, 4.5, 1.0002349615097046)
})
nftPictureFrame8.addComponentOrReplace(transform88)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(0.18930786848068237, 0.9306952953338623, 9.298744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315557956695557, 4.5, 1.0002354383468628)
})
nftPictureFrame9.addComponentOrReplace(transform89)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(0.18930786848068237, 0.9306952953338623, 11.798744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315558433532715, 4.5, 1.0002355575561523)
})
nftPictureFrame10.addComponentOrReplace(transform90)

const nftPictureFrame11 = new Entity('nftPictureFrame11')
engine.addEntity(nftPictureFrame11)
nftPictureFrame11.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(0.18930786848068237, 4.930695533752441, 4.298744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315556049346924, 4.5, 1.0002349615097046)
})
nftPictureFrame11.addComponentOrReplace(transform91)

const nftPictureFrame12 = new Entity('nftPictureFrame12')
engine.addEntity(nftPictureFrame12)
nftPictureFrame12.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(0.18930786848068237, 4.930695533752441, 6.798744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315557956695557, 4.5, 1.0002354383468628)
})
nftPictureFrame12.addComponentOrReplace(transform92)

const nftPictureFrame13 = new Entity('nftPictureFrame13')
engine.addEntity(nftPictureFrame13)
nftPictureFrame13.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(0.18930786848068237, 4.930695533752441, 9.298744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.3155598640441895, 4.5, 1.000235915184021)
})
nftPictureFrame13.addComponentOrReplace(transform93)

const nftPictureFrame14 = new Entity('nftPictureFrame14')
engine.addEntity(nftPictureFrame14)
nftPictureFrame14.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(0.18930786848068237, 4.930695533752441, 11.798744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315560340881348, 4.5, 1.0002360343933105)
})
nftPictureFrame14.addComponentOrReplace(transform94)

const nftPictureFrame15 = new Entity('nftPictureFrame15')
engine.addEntity(nftPictureFrame15)
nftPictureFrame15.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(0.18930786848068237, 8.930695533752441, 4.298744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.31555700302124, 4.5, 1.0002351999282837)
})
nftPictureFrame15.addComponentOrReplace(transform95)

const nftPictureFrame16 = new Entity('nftPictureFrame16')
engine.addEntity(nftPictureFrame16)
nftPictureFrame16.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(0.18930786848068237, 8.930695533752441, 6.798744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315558910369873, 4.5, 1.000235676765442)
})
nftPictureFrame16.addComponentOrReplace(transform96)

const nftPictureFrame17 = new Entity('nftPictureFrame17')
engine.addEntity(nftPictureFrame17)
nftPictureFrame17.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(0.18930786848068237, 8.930695533752441, 9.298744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315560817718506, 4.5, 1.0002361536026)
})
nftPictureFrame17.addComponentOrReplace(transform97)

const nftPictureFrame18 = new Entity('nftPictureFrame18')
engine.addEntity(nftPictureFrame18)
nftPictureFrame18.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(0.18930786848068237, 8.930695533752441, 11.798744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315561294555664, 4.5, 1.0002362728118896)
})
nftPictureFrame18.addComponentOrReplace(transform98)

const nftPictureFrame19 = new Entity('nftPictureFrame19')
engine.addEntity(nftPictureFrame19)
nftPictureFrame19.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(0.18930786848068237, 13.293418884277344, 4.298744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315557956695557, 4.5, 1.0002354383468628)
})
nftPictureFrame19.addComponentOrReplace(transform99)

const nftPictureFrame20 = new Entity('nftPictureFrame20')
engine.addEntity(nftPictureFrame20)
nftPictureFrame20.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(0.18930786848068237, 13.293418884277344, 6.798744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.3155598640441895, 4.5, 1.000235915184021)
})
nftPictureFrame20.addComponentOrReplace(transform100)

const nftPictureFrame21 = new Entity('nftPictureFrame21')
engine.addEntity(nftPictureFrame21)
nftPictureFrame21.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(0.18930786848068237, 13.293418884277344, 9.298744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315561771392822, 4.5, 1.0002363920211792)
})
nftPictureFrame21.addComponentOrReplace(transform101)

const nftPictureFrame22 = new Entity('nftPictureFrame22')
engine.addEntity(nftPictureFrame22)
nftPictureFrame22.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(0.18930786848068237, 13.293418884277344, 11.798744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.3155622482299805, 4.5, 1.0002365112304688)
})
nftPictureFrame22.addComponentOrReplace(transform102)

const nftPictureFrame23 = new Entity('nftPictureFrame23')
engine.addEntity(nftPictureFrame23)
nftPictureFrame23.setParent(_scene)
const transform103 = new Transform({
  position: new Vector3(15.816289901733398, 0.9306941032409668, 4.298745632171631),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315578937530518, 4.5, 1.000240683555603)
})
nftPictureFrame23.addComponentOrReplace(transform103)

const nftPictureFrame24 = new Entity('nftPictureFrame24')
engine.addEntity(nftPictureFrame24)
nftPictureFrame24.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(15.816289901733398, 0.930694580078125, 6.798745632171631),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315577507019043, 4.5, 1.0002403259277344)
})
nftPictureFrame24.addComponentOrReplace(transform104)

const nftPictureFrame25 = new Entity('nftPictureFrame25')
engine.addEntity(nftPictureFrame25)
nftPictureFrame25.setParent(_scene)
const transform105 = new Transform({
  position: new Vector3(15.816289901733398, 0.9306955337524414, 9.298746109008789),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315574645996094, 4.5, 1.000239610671997)
})
nftPictureFrame25.addComponentOrReplace(transform105)

const nftPictureFrame26 = new Entity('nftPictureFrame26')
engine.addEntity(nftPictureFrame26)
nftPictureFrame26.setParent(_scene)
const transform106 = new Transform({
  position: new Vector3(15.816289901733398, 0.9306960105895996, 11.798746109008789),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315569877624512, 4.5, 1.0002384185791016)
})
nftPictureFrame26.addComponentOrReplace(transform106)

const nftPictureFrame27 = new Entity('nftPictureFrame27')
engine.addEntity(nftPictureFrame27)
nftPictureFrame27.setParent(_scene)
const transform107 = new Transform({
  position: new Vector3(15.816289901733398, 4.930696487426758, 11.798744201660156),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315567970275879, 4.5, 1.0002379417419434)
})
nftPictureFrame27.addComponentOrReplace(transform107)

const nftPictureFrame28 = new Entity('nftPictureFrame28')
engine.addEntity(nftPictureFrame28)
nftPictureFrame28.setParent(_scene)
const transform108 = new Transform({
  position: new Vector3(15.816289901733398, 4.930695533752441, 9.298744201660156),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315570831298828, 4.5, 1.0002386569976807)
})
nftPictureFrame28.addComponentOrReplace(transform108)

const nftPictureFrame29 = new Entity('nftPictureFrame29')
engine.addEntity(nftPictureFrame29)
nftPictureFrame29.setParent(_scene)
const transform109 = new Transform({
  position: new Vector3(15.816289901733398, 4.930695533752441, 6.7987446784973145),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315573692321777, 4.5, 1.000239372253418)
})
nftPictureFrame29.addComponentOrReplace(transform109)

const nftPictureFrame30 = new Entity('nftPictureFrame30')
engine.addEntity(nftPictureFrame30)
nftPictureFrame30.setParent(_scene)
const transform110 = new Transform({
  position: new Vector3(15.816289901733398, 4.930694580078125, 4.2987446784973145),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315575122833252, 4.5, 1.0002397298812866)
})
nftPictureFrame30.addComponentOrReplace(transform110)

const nftPictureFrame31 = new Entity('nftPictureFrame31')
engine.addEntity(nftPictureFrame31)
nftPictureFrame31.setParent(_scene)
const transform111 = new Transform({
  position: new Vector3(15.816289901733398, 8.930694580078125, 4.298743724822998),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315572261810303, 4.5, 1.0002390146255493)
})
nftPictureFrame31.addComponentOrReplace(transform111)

const nftPictureFrame32 = new Entity('nftPictureFrame32')
engine.addEntity(nftPictureFrame32)
nftPictureFrame32.setParent(_scene)
const transform112 = new Transform({
  position: new Vector3(15.816289901733398, 8.930695533752441, 6.798743724822998),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315570831298828, 4.5, 1.0002386569976807)
})
nftPictureFrame32.addComponentOrReplace(transform112)

const nftPictureFrame33 = new Entity('nftPictureFrame33')
engine.addEntity(nftPictureFrame33)
nftPictureFrame33.setParent(_scene)
const transform113 = new Transform({
  position: new Vector3(15.816289901733398, 8.930695533752441, 9.298744201660156),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315567970275879, 4.5, 1.0002379417419434)
})
nftPictureFrame33.addComponentOrReplace(transform113)

const nftPictureFrame34 = new Entity('nftPictureFrame34')
engine.addEntity(nftPictureFrame34)
nftPictureFrame34.setParent(_scene)
const transform114 = new Transform({
  position: new Vector3(15.816289901733398, 8.930696487426758, 11.798744201660156),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.31556510925293, 4.5, 1.000237226486206)
})
nftPictureFrame34.addComponentOrReplace(transform114)

const nftPictureFrame35 = new Entity('nftPictureFrame35')
engine.addEntity(nftPictureFrame35)
nftPictureFrame35.setParent(_scene)
const transform115 = new Transform({
  position: new Vector3(15.816289901733398, 13.29341983795166, 11.798742294311523),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.3155622482299805, 4.5, 1.0002365112304688)
})
nftPictureFrame35.addComponentOrReplace(transform115)

const nftPictureFrame36 = new Entity('nftPictureFrame36')
engine.addEntity(nftPictureFrame36)
nftPictureFrame36.setParent(_scene)
const transform116 = new Transform({
  position: new Vector3(15.816289901733398, 13.293418884277344, 9.298742294311523),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.31556510925293, 4.5, 1.000237226486206)
})
nftPictureFrame36.addComponentOrReplace(transform116)

const nftPictureFrame37 = new Entity('nftPictureFrame37')
engine.addEntity(nftPictureFrame37)
nftPictureFrame37.setParent(_scene)
const transform117 = new Transform({
  position: new Vector3(15.816289901733398, 13.293418884277344, 6.798742771148682),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315567970275879, 4.5, 1.0002379417419434)
})
nftPictureFrame37.addComponentOrReplace(transform117)

const nftPictureFrame38 = new Entity('nftPictureFrame38')
engine.addEntity(nftPictureFrame38)
nftPictureFrame38.setParent(_scene)
const transform118 = new Transform({
  position: new Vector3(15.816289901733398, 13.293416976928711, 4.298742771148682),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.3155694007873535, 4.5, 1.000238299369812)
})
nftPictureFrame38.addComponentOrReplace(transform118)

const nftPictureFrame39 = new Entity('nftPictureFrame39')
engine.addEntity(nftPictureFrame39)
nftPictureFrame39.setParent(_scene)
const transform119 = new Transform({
  position: new Vector3(12.030223846435547, 0.930694580078125, 15.764662742614746),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315582275390625, 4.5, 1.0002418756484985)
})
nftPictureFrame39.addComponentOrReplace(transform119)

const nftPictureFrame40 = new Entity('nftPictureFrame40')
engine.addEntity(nftPictureFrame40)
nftPictureFrame40.setParent(_scene)
const transform120 = new Transform({
  position: new Vector3(9.53022289276123, 0.930694580078125, 15.764662742614746),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.31558084487915, 4.5, 1.0002415180206299)
})
nftPictureFrame40.addComponentOrReplace(transform120)

const nftPictureFrame41 = new Entity('nftPictureFrame41')
engine.addEntity(nftPictureFrame41)
nftPictureFrame41.setParent(_scene)
const transform121 = new Transform({
  position: new Vector3(7.030222415924072, 0.9306955337524414, 15.764662742614746),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315577983856201, 4.5, 1.0002408027648926)
})
nftPictureFrame41.addComponentOrReplace(transform121)

const nftPictureFrame42 = new Entity('nftPictureFrame42')
engine.addEntity(nftPictureFrame42)
nftPictureFrame42.setParent(_scene)
const transform122 = new Transform({
  position: new Vector3(4.530221939086914, 0.9306955337524414, 15.76466178894043),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315573215484619, 4.5, 1.000239610671997)
})
nftPictureFrame42.addComponentOrReplace(transform122)

const nftPictureFrame43 = new Entity('nftPictureFrame43')
engine.addEntity(nftPictureFrame43)
nftPictureFrame43.setParent(_scene)
const transform123 = new Transform({
  position: new Vector3(12.030223846435547, 4.930695056915283, 15.764662742614746),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315578460693359, 4.5, 1.0002409219741821)
})
nftPictureFrame43.addComponentOrReplace(transform123)

const nftPictureFrame44 = new Entity('nftPictureFrame44')
engine.addEntity(nftPictureFrame44)
nftPictureFrame44.setParent(_scene)
const transform124 = new Transform({
  position: new Vector3(9.530223846435547, 4.930695533752441, 15.76466178894043),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315577030181885, 4.5, 1.0002405643463135)
})
nftPictureFrame44.addComponentOrReplace(transform124)

const nftPictureFrame45 = new Entity('nftPictureFrame45')
engine.addEntity(nftPictureFrame45)
nftPictureFrame45.setParent(_scene)
const transform125 = new Transform({
  position: new Vector3(7.030223846435547, 4.930695533752441, 15.76466178894043),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.3155741691589355, 4.5, 1.0002398490905762)
})
nftPictureFrame45.addComponentOrReplace(transform125)

const nftPictureFrame46 = new Entity('nftPictureFrame46')
engine.addEntity(nftPictureFrame46)
nftPictureFrame46.setParent(_scene)
const transform126 = new Transform({
  position: new Vector3(4.530223846435547, 4.9306960105896, 15.76466178894043),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315571308135986, 4.5, 1.0002391338348389)
})
nftPictureFrame46.addComponentOrReplace(transform126)

const nftPictureFrame47 = new Entity('nftPictureFrame47')
engine.addEntity(nftPictureFrame47)
nftPictureFrame47.setParent(_scene)
const transform127 = new Transform({
  position: new Vector3(12.030224800109863, 8.930694580078125, 15.76466178894043),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.31557559967041, 4.5, 1.0002402067184448)
})
nftPictureFrame47.addComponentOrReplace(transform127)

const nftPictureFrame48 = new Entity('nftPictureFrame48')
engine.addEntity(nftPictureFrame48)
nftPictureFrame48.setParent(_scene)
const transform128 = new Transform({
  position: new Vector3(9.530223846435547, 8.930695533752441, 15.76466178894043),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.3155741691589355, 4.5, 1.0002398490905762)
})
nftPictureFrame48.addComponentOrReplace(transform128)

const nftPictureFrame49 = new Entity('nftPictureFrame49')
engine.addEntity(nftPictureFrame49)
nftPictureFrame49.setParent(_scene)
const transform129 = new Transform({
  position: new Vector3(7.030223369598389, 8.930695533752441, 15.76466178894043),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315571308135986, 4.5, 1.0002391338348389)
})
nftPictureFrame49.addComponentOrReplace(transform129)

const nftPictureFrame50 = new Entity('nftPictureFrame50')
engine.addEntity(nftPictureFrame50)
nftPictureFrame50.setParent(_scene)
const transform130 = new Transform({
  position: new Vector3(4.5302228927612305, 8.930696487426758, 15.764660835266113),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315568447113037, 4.5, 1.0002384185791016)
})
nftPictureFrame50.addComponentOrReplace(transform130)

const nftPictureFrame51 = new Entity('nftPictureFrame51')
engine.addEntity(nftPictureFrame51)
nftPictureFrame51.setParent(_scene)
const transform131 = new Transform({
  position: new Vector3(12.030224800109863, 13.293416976928711, 15.76466178894043),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315572738647461, 4.5, 1.0002394914627075)
})
nftPictureFrame51.addComponentOrReplace(transform131)

const nftPictureFrame52 = new Entity('nftPictureFrame52')
engine.addEntity(nftPictureFrame52)
nftPictureFrame52.setParent(_scene)
const transform132 = new Transform({
  position: new Vector3(9.530224800109863, 13.293418884277344, 15.764660835266113),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315571308135986, 4.5, 1.0002391338348389)
})
nftPictureFrame52.addComponentOrReplace(transform132)

const nftPictureFrame53 = new Entity('nftPictureFrame53')
engine.addEntity(nftPictureFrame53)
nftPictureFrame53.setParent(_scene)
const transform133 = new Transform({
  position: new Vector3(7.030224800109863, 13.293418884277344, 15.764660835266113),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315568447113037, 4.5, 1.0002384185791016)
})
nftPictureFrame53.addComponentOrReplace(transform133)

const nftPictureFrame54 = new Entity('nftPictureFrame54')
engine.addEntity(nftPictureFrame54)
nftPictureFrame54.setParent(_scene)
const transform134 = new Transform({
  position: new Vector3(4.530224800109863, 13.293418884277344, 15.764660835266113),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315565586090088, 4.5, 1.0002377033233643)
})
nftPictureFrame54.addComponentOrReplace(transform134)

const redNeonTube = new Entity('redNeonTube')
engine.addEntity(redNeonTube)
redNeonTube.setParent(_scene)
redNeonTube.addComponentOrReplace(gltfShape)
const transform135 = new Transform({
  position: new Vector3(4.077718734741211, 1.9562644958496094, 0.15148231387138367),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.4252381324768066, 1.000005841255188, 49.42108154296875)
})
redNeonTube.addComponentOrReplace(transform135)

const redNeonTube2 = new Entity('redNeonTube2')
engine.addEntity(redNeonTube2)
redNeonTube2.setParent(_scene)
redNeonTube2.addComponentOrReplace(gltfShape)
const transform136 = new Transform({
  position: new Vector3(12.069624900817871, 1.9562644958496094, 0.15148137509822845),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.4252381324768066, 1.0000059604644775, 49.42108154296875)
})
redNeonTube2.addComponentOrReplace(transform136)

const redNeonTube3 = new Entity('redNeonTube3')
engine.addEntity(redNeonTube3)
redNeonTube3.setParent(_scene)
redNeonTube3.addComponentOrReplace(gltfShape)
const transform137 = new Transform({
  position: new Vector3(15.800870895385742, 1.9566090106964111, 1.30887770652771),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252421855926514, 1.0000064373016357, 1)
})
redNeonTube3.addComponentOrReplace(transform137)

const nftPictureFrame55 = new Entity('nftPictureFrame55')
engine.addEntity(nftPictureFrame55)
nftPictureFrame55.setParent(_scene)
const transform138 = new Transform({
  position: new Vector3(15.771493911743164, 1.6292911767959595, 1.3403842449188232),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000076293945312, 2, 1.0000038146972656)
})
nftPictureFrame55.addComponentOrReplace(transform138)

const nftPictureFrame56 = new Entity('nftPictureFrame56')
engine.addEntity(nftPictureFrame56)
nftPictureFrame56.setParent(_scene)
const transform139 = new Transform({
  position: new Vector3(15.95128059387207, 1.62929105758667, 1.3403842449188232),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(2.000006675720215, 2, 1.0000033378601074)
})
nftPictureFrame56.addComponentOrReplace(transform139)

const nftPictureFrame57 = new Entity('nftPictureFrame57')
engine.addEntity(nftPictureFrame57)
nftPictureFrame57.setParent(_scene)
const transform140 = new Transform({
  position: new Vector3(15.95128059387207, 5.809698581695557, 1.3403842449188232),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(2.000006914138794, 2, 1.000003457069397)
})
nftPictureFrame57.addComponentOrReplace(transform140)

const nftPictureFrame58 = new Entity('nftPictureFrame58')
engine.addEntity(nftPictureFrame58)
nftPictureFrame58.setParent(_scene)
const transform141 = new Transform({
  position: new Vector3(15.771493911743164, 5.809699058532715, 1.3403842449188232),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000081062316895, 2, 1.0000040531158447)
})
nftPictureFrame58.addComponentOrReplace(transform141)

const redNeonTube4 = new Entity('redNeonTube4')
engine.addEntity(redNeonTube4)
redNeonTube4.setParent(_scene)
redNeonTube4.addComponentOrReplace(gltfShape)
const transform142 = new Transform({
  position: new Vector3(15.800870895385742, 6.137016773223877, 1.30887770652771),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252426624298096, 1.0000066757202148, 1)
})
redNeonTube4.addComponentOrReplace(transform142)

const nftPictureFrame59 = new Entity('nftPictureFrame59')
engine.addEntity(nftPictureFrame59)
nftPictureFrame59.setParent(_scene)
const transform143 = new Transform({
  position: new Vector3(15.95128059387207, 9.764010429382324, 1.3403842449188232),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(2.000007152557373, 2, 1.0000035762786865)
})
nftPictureFrame59.addComponentOrReplace(transform143)

const nftPictureFrame60 = new Entity('nftPictureFrame60')
engine.addEntity(nftPictureFrame60)
nftPictureFrame60.setParent(_scene)
const transform144 = new Transform({
  position: new Vector3(15.771493911743164, 9.76401138305664, 1.3403842449188232),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000085830688477, 2, 1.0000042915344238)
})
nftPictureFrame60.addComponentOrReplace(transform144)

const redNeonTube5 = new Entity('redNeonTube5')
engine.addEntity(redNeonTube5)
redNeonTube5.setParent(_scene)
redNeonTube5.addComponentOrReplace(gltfShape)
const transform145 = new Transform({
  position: new Vector3(15.800870895385742, 10.091328620910645, 1.30887770652771),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252431392669678, 1.000006914138794, 1)
})
redNeonTube5.addComponentOrReplace(transform145)

const nftPictureFrame61 = new Entity('nftPictureFrame61')
engine.addEntity(nftPictureFrame61)
nftPictureFrame61.setParent(_scene)
const transform146 = new Transform({
  position: new Vector3(15.95128059387207, 13.928465843200684, 1.3403842449188232),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(2.000007390975952, 2, 1.000003695487976)
})
nftPictureFrame61.addComponentOrReplace(transform146)

const nftPictureFrame62 = new Entity('nftPictureFrame62')
engine.addEntity(nftPictureFrame62)
nftPictureFrame62.setParent(_scene)
const transform147 = new Transform({
  position: new Vector3(15.771493911743164, 13.928466796875, 1.3403842449188232),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000009059906006, 2, 1.000004529953003)
})
nftPictureFrame62.addComponentOrReplace(transform147)

const redNeonTube8 = new Entity('redNeonTube8')
engine.addEntity(redNeonTube8)
redNeonTube8.setParent(_scene)
redNeonTube8.addComponentOrReplace(gltfShape)
const transform148 = new Transform({
  position: new Vector3(15.800870895385742, 14.255784034729004, 1.30887770652771),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.425243616104126, 1.000007152557373, 1)
})
redNeonTube8.addComponentOrReplace(transform148)

const nftPictureFrame63 = new Entity('nftPictureFrame63')
engine.addEntity(nftPictureFrame63)
nftPictureFrame63.setParent(_scene)
const transform149 = new Transform({
  position: new Vector3(15.95128059387207, 17.5860595703125, 1.3403842449188232),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(2.0000078678131104, 2, 1.0000039339065552)
})
nftPictureFrame63.addComponentOrReplace(transform149)

const nftPictureFrame64 = new Entity('nftPictureFrame64')
engine.addEntity(nftPictureFrame64)
nftPictureFrame64.setParent(_scene)
const transform150 = new Transform({
  position: new Vector3(15.771493911743164, 17.586061477661133, 1.3403842449188232),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000100135803223, 2, 1.0000050067901611)
})
nftPictureFrame64.addComponentOrReplace(transform150)

const redNeonTube9 = new Entity('redNeonTube9')
engine.addEntity(redNeonTube9)
redNeonTube9.setParent(_scene)
redNeonTube9.addComponentOrReplace(gltfShape)
const transform151 = new Transform({
  position: new Vector3(15.800870895385742, 17.913379669189453, 1.30887770652771),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252445697784424, 1.0000076293945312, 1)
})
redNeonTube9.addComponentOrReplace(transform151)

const plainText5 = new Entity('plainText5')
engine.addEntity(plainText5)
plainText5.setParent(_scene)
const transform152 = new Transform({
  position: new Vector3(8.163972854614258, 16.852317810058594, 0.23302555084228516),
  rotation: new Quaternion(5.844343542823353e-23, -2.2351741790771484e-8, 3.1387062087974643e-15, -1),
  scale: new Vector3(7.833901882171631, 8.000870704650879, 1)
})
plainText5.addComponentOrReplace(transform152)

const imageCubeC2 = new Entity('imageCubeC2')
engine.addEntity(imageCubeC2)
imageCubeC2.setParent(_scene)
const transform153 = new Transform({
  position: new Vector3(2.4879415035247803, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000001311302185, 1, 1.349877119064331)
})
imageCubeC2.addComponentOrReplace(transform153)

const imageCubeC = new Entity('imageCubeC')
engine.addEntity(imageCubeC)
imageCubeC.setParent(_scene)
const transform154 = new Transform({
  position: new Vector3(3.3660356998443604, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000015497207642, 1, 1.3498780727386475)
})
imageCubeC.addComponentOrReplace(transform154)

const imageCubeC4 = new Entity('imageCubeC4')
engine.addEntity(imageCubeC4)
imageCubeC4.setParent(_scene)
const transform155 = new Transform({
  position: new Vector3(4.250650405883789, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000017881393433, 1, 1.3498783111572266)
})
imageCubeC4.addComponentOrReplace(transform155)

const imageCubeC5 = new Entity('imageCubeC5')
engine.addEntity(imageCubeC5)
imageCubeC5.setParent(_scene)
const transform156 = new Transform({
  position: new Vector3(3.3660356998443604, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000017881393433, 1, 1.3498783111572266)
})
imageCubeC5.addComponentOrReplace(transform156)

const imageCubeC6 = new Entity('imageCubeC6')
engine.addEntity(imageCubeC6)
imageCubeC6.setParent(_scene)
const transform157 = new Transform({
  position: new Vector3(2.4879415035247803, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000015497207642, 1, 1.3498773574829102)
})
imageCubeC6.addComponentOrReplace(transform157)

const imageCubeC7 = new Entity('imageCubeC7')
engine.addEntity(imageCubeC7)
imageCubeC7.setParent(_scene)
const transform158 = new Transform({
  position: new Vector3(4.250650405883789, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498785495758057)
})
imageCubeC7.addComponentOrReplace(transform158)

const imageCubeC8 = new Entity('imageCubeC8')
engine.addEntity(imageCubeC8)
imageCubeC8.setParent(_scene)
const transform159 = new Transform({
  position: new Vector3(3.3660356998443604, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498785495758057)
})
imageCubeC8.addComponentOrReplace(transform159)

const imageCubeC9 = new Entity('imageCubeC9')
engine.addEntity(imageCubeC9)
imageCubeC9.setParent(_scene)
const transform160 = new Transform({
  position: new Vector3(2.4879415035247803, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000017881393433, 1, 1.3498775959014893)
})
imageCubeC9.addComponentOrReplace(transform160)

const imageCubeC10 = new Entity('imageCubeC10')
engine.addEntity(imageCubeC10)
imageCubeC10.setParent(_scene)
const transform161 = new Transform({
  position: new Vector3(4.250650405883789, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498787879943848)
})
imageCubeC10.addComponentOrReplace(transform161)

const imageCubeC11 = new Entity('imageCubeC11')
engine.addEntity(imageCubeC11)
imageCubeC11.setParent(_scene)
const transform162 = new Transform({
  position: new Vector3(3.3660356998443604, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498787879943848)
})
imageCubeC11.addComponentOrReplace(transform162)

const imageCubeC12 = new Entity('imageCubeC12')
engine.addEntity(imageCubeC12)
imageCubeC12.setParent(_scene)
const transform163 = new Transform({
  position: new Vector3(2.4879415035247803, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498778343200684)
})
imageCubeC12.addComponentOrReplace(transform163)

const imageCubeC13 = new Entity('imageCubeC13')
engine.addEntity(imageCubeC13)
imageCubeC13.setParent(_scene)
const transform164 = new Transform({
  position: new Vector3(4.250650405883789, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498790264129639)
})
imageCubeC13.addComponentOrReplace(transform164)

const imageCubeC14 = new Entity('imageCubeC14')
engine.addEntity(imageCubeC14)
imageCubeC14.setParent(_scene)
const transform165 = new Transform({
  position: new Vector3(7.154218673706055, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498790264129639)
})
imageCubeC14.addComponentOrReplace(transform165)

const imageCubeC15 = new Entity('imageCubeC15')
engine.addEntity(imageCubeC15)
imageCubeC15.setParent(_scene)
const transform166 = new Transform({
  position: new Vector3(6.276124954223633, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498780727386475)
})
imageCubeC15.addComponentOrReplace(transform166)

const imageCubeC16 = new Entity('imageCubeC16')
engine.addEntity(imageCubeC16)
imageCubeC16.setParent(_scene)
const transform167 = new Transform({
  position: new Vector3(8.038833618164062, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.349879264831543)
})
imageCubeC16.addComponentOrReplace(transform167)

const imageCubeC17 = new Entity('imageCubeC17')
engine.addEntity(imageCubeC17)
imageCubeC17.setParent(_scene)
const transform168 = new Transform({
  position: new Vector3(8.038833618164062, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498790264129639)
})
imageCubeC17.addComponentOrReplace(transform168)

const imageCubeC18 = new Entity('imageCubeC18')
engine.addEntity(imageCubeC18)
imageCubeC18.setParent(_scene)
const transform169 = new Transform({
  position: new Vector3(7.154218673706055, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498787879943848)
})
imageCubeC18.addComponentOrReplace(transform169)

const imageCubeC19 = new Entity('imageCubeC19')
engine.addEntity(imageCubeC19)
imageCubeC19.setParent(_scene)
const transform170 = new Transform({
  position: new Vector3(6.276124954223633, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498778343200684)
})
imageCubeC19.addComponentOrReplace(transform170)

const imageCubeC20 = new Entity('imageCubeC20')
engine.addEntity(imageCubeC20)
imageCubeC20.setParent(_scene)
const transform171 = new Transform({
  position: new Vector3(8.038833618164062, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498787879943848)
})
imageCubeC20.addComponentOrReplace(transform171)

const imageCubeC21 = new Entity('imageCubeC21')
engine.addEntity(imageCubeC21)
imageCubeC21.setParent(_scene)
const transform172 = new Transform({
  position: new Vector3(7.154218673706055, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498785495758057)
})
imageCubeC21.addComponentOrReplace(transform172)

const imageCubeC22 = new Entity('imageCubeC22')
engine.addEntity(imageCubeC22)
imageCubeC22.setParent(_scene)
const transform173 = new Transform({
  position: new Vector3(6.276124954223633, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000017881393433, 1, 1.3498775959014893)
})
imageCubeC22.addComponentOrReplace(transform173)

const imageCubeC23 = new Entity('imageCubeC23')
engine.addEntity(imageCubeC23)
imageCubeC23.setParent(_scene)
const transform174 = new Transform({
  position: new Vector3(8.038833618164062, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498785495758057)
})
imageCubeC23.addComponentOrReplace(transform174)

const imageCubeC24 = new Entity('imageCubeC24')
engine.addEntity(imageCubeC24)
imageCubeC24.setParent(_scene)
const transform175 = new Transform({
  position: new Vector3(7.154218673706055, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000017881393433, 1, 1.3498783111572266)
})
imageCubeC24.addComponentOrReplace(transform175)

const imageCubeC25 = new Entity('imageCubeC25')
engine.addEntity(imageCubeC25)
imageCubeC25.setParent(_scene)
const transform176 = new Transform({
  position: new Vector3(6.276124954223633, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000015497207642, 1, 1.3498773574829102)
})
imageCubeC25.addComponentOrReplace(transform176)

const imageCubeC26 = new Entity('imageCubeC26')
engine.addEntity(imageCubeC26)
imageCubeC26.setParent(_scene)
const transform177 = new Transform({
  position: new Vector3(10.795225143432617, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.349879264831543)
})
imageCubeC26.addComponentOrReplace(transform177)

const imageCubeC27 = new Entity('imageCubeC27')
engine.addEntity(imageCubeC27)
imageCubeC27.setParent(_scene)
const transform178 = new Transform({
  position: new Vector3(9.917131423950195, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498783111572266)
})
imageCubeC27.addComponentOrReplace(transform178)

const imageCubeC28 = new Entity('imageCubeC28')
engine.addEntity(imageCubeC28)
imageCubeC28.setParent(_scene)
const transform179 = new Transform({
  position: new Vector3(11.679840087890625, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 1, 1.349879503250122)
})
imageCubeC28.addComponentOrReplace(transform179)

const imageCubeC29 = new Entity('imageCubeC29')
engine.addEntity(imageCubeC29)
imageCubeC29.setParent(_scene)
const transform180 = new Transform({
  position: new Vector3(11.679840087890625, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.349879264831543)
})
imageCubeC29.addComponentOrReplace(transform180)

const imageCubeC30 = new Entity('imageCubeC30')
engine.addEntity(imageCubeC30)
imageCubeC30.setParent(_scene)
const transform181 = new Transform({
  position: new Vector3(10.795225143432617, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498790264129639)
})
imageCubeC30.addComponentOrReplace(transform181)

const imageCubeC31 = new Entity('imageCubeC31')
engine.addEntity(imageCubeC31)
imageCubeC31.setParent(_scene)
const transform182 = new Transform({
  position: new Vector3(9.917131423950195, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498780727386475)
})
imageCubeC31.addComponentOrReplace(transform182)

const imageCubeC32 = new Entity('imageCubeC32')
engine.addEntity(imageCubeC32)
imageCubeC32.setParent(_scene)
const transform183 = new Transform({
  position: new Vector3(11.679840087890625, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498790264129639)
})
imageCubeC32.addComponentOrReplace(transform183)

const imageCubeC33 = new Entity('imageCubeC33')
engine.addEntity(imageCubeC33)
imageCubeC33.setParent(_scene)
const transform184 = new Transform({
  position: new Vector3(10.795225143432617, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498787879943848)
})
imageCubeC33.addComponentOrReplace(transform184)

const imageCubeC34 = new Entity('imageCubeC34')
engine.addEntity(imageCubeC34)
imageCubeC34.setParent(_scene)
const transform185 = new Transform({
  position: new Vector3(9.917131423950195, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498778343200684)
})
imageCubeC34.addComponentOrReplace(transform185)

const imageCubeC35 = new Entity('imageCubeC35')
engine.addEntity(imageCubeC35)
imageCubeC35.setParent(_scene)
const transform186 = new Transform({
  position: new Vector3(11.679840087890625, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498787879943848)
})
imageCubeC35.addComponentOrReplace(transform186)

const imageCubeC36 = new Entity('imageCubeC36')
engine.addEntity(imageCubeC36)
imageCubeC36.setParent(_scene)
const transform187 = new Transform({
  position: new Vector3(10.795225143432617, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498785495758057)
})
imageCubeC36.addComponentOrReplace(transform187)

const imageCubeC37 = new Entity('imageCubeC37')
engine.addEntity(imageCubeC37)
imageCubeC37.setParent(_scene)
const transform188 = new Transform({
  position: new Vector3(9.917131423950195, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000017881393433, 1, 1.3498775959014893)
})
imageCubeC37.addComponentOrReplace(transform188)

const imageCubeC38 = new Entity('imageCubeC38')
engine.addEntity(imageCubeC38)
imageCubeC38.setParent(_scene)
const transform189 = new Transform({
  position: new Vector3(14.425786972045898, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 1, 1.349879503250122)
})
imageCubeC38.addComponentOrReplace(transform189)

const imageCubeC39 = new Entity('imageCubeC39')
engine.addEntity(imageCubeC39)
imageCubeC39.setParent(_scene)
const transform190 = new Transform({
  position: new Vector3(13.547693252563477, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.3498785495758057)
})
imageCubeC39.addComponentOrReplace(transform190)

const imageCubeC42 = new Entity('imageCubeC42')
engine.addEntity(imageCubeC42)
imageCubeC42.setParent(_scene)
const transform191 = new Transform({
  position: new Vector3(14.425786972045898, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.349879264831543)
})
imageCubeC42.addComponentOrReplace(transform191)

const imageCubeC43 = new Entity('imageCubeC43')
engine.addEntity(imageCubeC43)
imageCubeC43.setParent(_scene)
const transform192 = new Transform({
  position: new Vector3(13.547693252563477, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498783111572266)
})
imageCubeC43.addComponentOrReplace(transform192)

const imageCubeC45 = new Entity('imageCubeC45')
engine.addEntity(imageCubeC45)
imageCubeC45.setParent(_scene)
const transform193 = new Transform({
  position: new Vector3(14.425786972045898, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498790264129639)
})
imageCubeC45.addComponentOrReplace(transform193)

const imageCubeC46 = new Entity('imageCubeC46')
engine.addEntity(imageCubeC46)
imageCubeC46.setParent(_scene)
const transform194 = new Transform({
  position: new Vector3(13.547693252563477, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498780727386475)
})
imageCubeC46.addComponentOrReplace(transform194)

const imageCubeC48 = new Entity('imageCubeC48')
engine.addEntity(imageCubeC48)
imageCubeC48.setParent(_scene)
const transform195 = new Transform({
  position: new Vector3(14.425786972045898, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498787879943848)
})
imageCubeC48.addComponentOrReplace(transform195)

const imageCubeC49 = new Entity('imageCubeC49')
engine.addEntity(imageCubeC49)
imageCubeC49.setParent(_scene)
const transform196 = new Transform({
  position: new Vector3(13.547693252563477, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498778343200684)
})
imageCubeC49.addComponentOrReplace(transform196)

const imageCubeC51 = new Entity('imageCubeC51')
engine.addEntity(imageCubeC51)
imageCubeC51.setParent(_scene)
const transform197 = new Transform({
  position: new Vector3(14.425786972045898, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000032186508179, 1, 1.3498797416687012)
})
imageCubeC51.addComponentOrReplace(transform197)

const imageCubeC52 = new Entity('imageCubeC52')
engine.addEntity(imageCubeC52)
imageCubeC52.setParent(_scene)
const transform198 = new Transform({
  position: new Vector3(13.547693252563477, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 1, 1.3498787879943848)
})
imageCubeC52.addComponentOrReplace(transform198)

const imageCubeC53 = new Entity('imageCubeC53')
engine.addEntity(imageCubeC53)
imageCubeC53.setParent(_scene)
const transform199 = new Transform({
  position: new Vector3(11.679840087890625, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000032186508179, 1, 1.3498797416687012)
})
imageCubeC53.addComponentOrReplace(transform199)

const imageCubeC54 = new Entity('imageCubeC54')
engine.addEntity(imageCubeC54)
imageCubeC54.setParent(_scene)
const transform200 = new Transform({
  position: new Vector3(10.795225143432617, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 1, 1.349879503250122)
})
imageCubeC54.addComponentOrReplace(transform200)

const imageCubeC55 = new Entity('imageCubeC55')
engine.addEntity(imageCubeC55)
imageCubeC55.setParent(_scene)
const transform201 = new Transform({
  position: new Vector3(9.917131423950195, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.3498785495758057)
})
imageCubeC55.addComponentOrReplace(transform201)

const imageCubeC56 = new Entity('imageCubeC56')
engine.addEntity(imageCubeC56)
imageCubeC56.setParent(_scene)
const transform202 = new Transform({
  position: new Vector3(8.038833618164062, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 1, 1.349879503250122)
})
imageCubeC56.addComponentOrReplace(transform202)

const imageCubeC57 = new Entity('imageCubeC57')
engine.addEntity(imageCubeC57)
imageCubeC57.setParent(_scene)
const transform203 = new Transform({
  position: new Vector3(7.154218673706055, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.349879264831543)
})
imageCubeC57.addComponentOrReplace(transform203)

const imageCubeC58 = new Entity('imageCubeC58')
engine.addEntity(imageCubeC58)
imageCubeC58.setParent(_scene)
const transform204 = new Transform({
  position: new Vector3(6.276124954223633, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498783111572266)
})
imageCubeC58.addComponentOrReplace(transform204)

const imageCubeC59 = new Entity('imageCubeC59')
engine.addEntity(imageCubeC59)
imageCubeC59.setParent(_scene)
const transform205 = new Transform({
  position: new Vector3(4.250650405883789, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.349879264831543)
})
imageCubeC59.addComponentOrReplace(transform205)

const imageCubeC60 = new Entity('imageCubeC60')
engine.addEntity(imageCubeC60)
imageCubeC60.setParent(_scene)
const transform206 = new Transform({
  position: new Vector3(3.3660354614257812, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498790264129639)
})
imageCubeC60.addComponentOrReplace(transform206)

const imageCubeC61 = new Entity('imageCubeC61')
engine.addEntity(imageCubeC61)
imageCubeC61.setParent(_scene)
const transform207 = new Transform({
  position: new Vector3(2.4879417419433594, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498780727386475)
})
imageCubeC61.addComponentOrReplace(transform207)

const imageCubeC66 = new Entity('imageCubeC66')
engine.addEntity(imageCubeC66)
imageCubeC66.setParent(_scene)
const transform208 = new Transform({
  position: new Vector3(10.795225143432617, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000032186508179, 1, 1.3498797416687012)
})
imageCubeC66.addComponentOrReplace(transform208)

const imageCubeC67 = new Entity('imageCubeC67')
engine.addEntity(imageCubeC67)
imageCubeC67.setParent(_scene)
const transform209 = new Transform({
  position: new Vector3(9.917131423950195, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 1, 1.3498787879943848)
})
imageCubeC67.addComponentOrReplace(transform209)

const imageCubeC68 = new Entity('imageCubeC68')
engine.addEntity(imageCubeC68)
imageCubeC68.setParent(_scene)
const transform210 = new Transform({
  position: new Vector3(8.038833618164062, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000032186508179, 1, 1.3498797416687012)
})
imageCubeC68.addComponentOrReplace(transform210)

const imageCubeC69 = new Entity('imageCubeC69')
engine.addEntity(imageCubeC69)
imageCubeC69.setParent(_scene)
const transform211 = new Transform({
  position: new Vector3(7.154218673706055, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 1, 1.349879503250122)
})
imageCubeC69.addComponentOrReplace(transform211)

const imageCubeC70 = new Entity('imageCubeC70')
engine.addEntity(imageCubeC70)
imageCubeC70.setParent(_scene)
const transform212 = new Transform({
  position: new Vector3(6.276124954223633, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.3498785495758057)
})
imageCubeC70.addComponentOrReplace(transform212)

const imageCubeC71 = new Entity('imageCubeC71')
engine.addEntity(imageCubeC71)
imageCubeC71.setParent(_scene)
const transform213 = new Transform({
  position: new Vector3(4.250650405883789, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 1, 1.349879503250122)
})
imageCubeC71.addComponentOrReplace(transform213)

const imageCubeC72 = new Entity('imageCubeC72')
engine.addEntity(imageCubeC72)
imageCubeC72.setParent(_scene)
const transform214 = new Transform({
  position: new Vector3(3.3660354614257812, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.349879264831543)
})
imageCubeC72.addComponentOrReplace(transform214)

const imageCubeC73 = new Entity('imageCubeC73')
engine.addEntity(imageCubeC73)
imageCubeC73.setParent(_scene)
const transform215 = new Transform({
  position: new Vector3(2.4879417419433594, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498783111572266)
})
imageCubeC73.addComponentOrReplace(transform215)

const radioCyberpunk = new Entity('radioCyberpunk')
engine.addEntity(radioCyberpunk)
radioCyberpunk.setParent(_scene)
const transform216 = new Transform({
  position: new Vector3(3.811891794204712, 0.5607730150222778, 14.549994468688965),
  rotation: new Quaternion(1, 7.450579886381092e-8, -8.881782502935358e-15, -1.1920926823449918e-7),
  scale: new Vector3(1.3587324619293213, 1.1274462938308716, 2.6679577827453613)
})
radioCyberpunk.addComponentOrReplace(transform216)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
const transform217 = new Transform({
  position: new Vector3(4.609211444854736, 0.1761990785598755, 15.89996337890625),
  rotation: new Quaternion(0.3333278298377991, -0.6236125230789185, 0.33332788944244385, 0.6236124634742737),
  scale: new Vector3(0.7323540449142456, 0.801763117313385, 0.07920855283737183)
})
wallPlainGlass.addComponentOrReplace(transform217)
const gltfShape3 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
wallPlainGlass.addComponentOrReplace(gltfShape3)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
wallPlainGlass2.addComponentOrReplace(gltfShape3)
const transform218 = new Transform({
  position: new Vector3(0.07199335098266602, 1.9692888259887695, 14.422179222106934),
  rotation: new Quaternion(-0.0004430585540831089, -0.9023821353912354, 0.4309365153312683, -0.0000959513708949089),
  scale: new Vector3(0.9418296813964844, 0.8075641393661499, 0.07873181998729706)
})
wallPlainGlass2.addComponentOrReplace(transform218)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
wallPlainGlass3.addComponentOrReplace(gltfShape3)
const transform219 = new Transform({
  position: new Vector3(1.9488840103149414, 1.9594142436981201, 15.920327186584473),
  rotation: new Quaternion(0.5, -0.5, 0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(0.7420132160186768, 0.46901389956474304, 0.07920855283737183)
})
wallPlainGlass3.addComponentOrReplace(transform219)

const plainText6 = new Entity('plainText6')
engine.addEntity(plainText6)
plainText6.setParent(_scene)
const transform220 = new Transform({
  position: new Vector3(14.441950798034668, 2.8345518112182617, 15.809928894042969),
  rotation: new Quaternion(-6.122317296820877e-15, 1, -1.1920928244535389e-7, 2.9802322387695312e-8),
  scale: new Vector3(1, 1, 1)
})
plainText6.addComponentOrReplace(transform220)

const signpostDirections = new Entity('signpostDirections')
engine.addEntity(signpostDirections)
signpostDirections.setParent(_scene)
const transform221 = new Transform({
  position: new Vector3(14.543895721435547, 16.142839431762695, 12.384310722351074),
  rotation: new Quaternion(6.820316914588152e-15, 0.7855523824691772, -9.364515562992892e-8, -0.6187951564788818),
  scale: new Vector3(0.9999996423721313, 1, 0.9999996423721313)
})
signpostDirections.addComponentOrReplace(transform221)

const verticalPlatform = new Entity('verticalPlatform')
engine.addEntity(verticalPlatform)
verticalPlatform.setParent(_scene)
const transform222 = new Transform({
  position: new Vector3(14.703544616699219, 0, 14.26887321472168),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9126614332199097, 0.13282114267349243, 1.4384448528289795)
})
verticalPlatform.addComponentOrReplace(transform222)

const wallPlainGlass10 = new Entity('wallPlainGlass10')
engine.addEntity(wallPlainGlass10)
wallPlainGlass10.setParent(_scene)
wallPlainGlass10.addComponentOrReplace(gltfShape3)
const transform223 = new Transform({
  position: new Vector3(1.9488840103149414, 10.17551326751709, 15.978593826293945),
  rotation: new Quaternion(0.5, -0.5, 0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(0.757361114025116, 0.46901389956474304, 0.07920855283737183)
})
wallPlainGlass10.addComponentOrReplace(transform223)

const wallPlainGlass11 = new Entity('wallPlainGlass11')
engine.addEntity(wallPlainGlass11)
wallPlainGlass11.setParent(_scene)
wallPlainGlass11.addComponentOrReplace(gltfShape3)
const transform224 = new Transform({
  position: new Vector3(0.07199335098266602, 10.185388565063477, 14.480445861816406),
  rotation: new Quaternion(-0.0004430585540831089, -0.9023821353912354, 0.4309365153312683, -0.0000959513708949089),
  scale: new Vector3(0.9418280720710754, 0.8075641393661499, 0.0787317305803299)
})
wallPlainGlass11.addComponentOrReplace(transform224)

const wallPlainGlass12 = new Entity('wallPlainGlass12')
engine.addEntity(wallPlainGlass12)
wallPlainGlass12.setParent(_scene)
wallPlainGlass12.addComponentOrReplace(gltfShape3)
const transform225 = new Transform({
  position: new Vector3(4.4681477546691895, 8.185996055603027, 15.958230018615723),
  rotation: new Quaternion(0.3064872920513153, -0.637232780456543, 0.3064873218536377, 0.6372327208518982),
  scale: new Vector3(0.7323547005653381, 0.8017641305923462, 0.07920864224433899)
})
wallPlainGlass12.addComponentOrReplace(transform225)

const imageCubeC3 = new Entity('imageCubeC3')
engine.addEntity(imageCubeC3)
imageCubeC3.setParent(_scene)
const transform226 = new Transform({
  position: new Vector3(11.691849708557129, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000003695487976, 1, 1.349877953529358)
})
imageCubeC3.addComponentOrReplace(transform226)

const imageCubeC40 = new Entity('imageCubeC40')
engine.addEntity(imageCubeC40)
imageCubeC40.setParent(_scene)
const transform227 = new Transform({
  position: new Vector3(13.547693252563477, 16.128873825073242, 12.652798652648926),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000032186508179, 1, 1.3498787879943848)
})
imageCubeC40.addComponentOrReplace(transform227)

const imageCubeC41 = new Entity('imageCubeC41')
engine.addEntity(imageCubeC41)
imageCubeC41.setParent(_scene)
const transform228 = new Transform({
  position: new Vector3(14.425786972045898, 16.128873825073242, 12.652798652648926),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000003457069397, 1, 1.3498797416687012)
})
imageCubeC41.addComponentOrReplace(transform228)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform229 = new Transform({
  position: new Vector3(8.163972854614258, 16.95929527282715, 0.000164096214575693),
  rotation: new Quaternion(2.45665812725112e-15, -1, 1.1920928244535389e-7, -7.450580596923828e-9),
  scale: new Vector3(8.737273216247559, 9.4327974319458, 1.0000001192092896)
})
plainText.addComponentOrReplace(transform229)

const wallPlainGlass8 = new Entity('wallPlainGlass8')
engine.addEntity(wallPlainGlass8)
wallPlainGlass8.setParent(_scene)
wallPlainGlass8.addComponentOrReplace(gltfShape3)
const transform230 = new Transform({
  position: new Vector3(0.07199335098266602, 5.9458489418029785, 14.422179222106934),
  rotation: new Quaternion(-0.0004430585540831089, -0.9023821353912354, 0.4309365153312683, -0.0000959513708949089),
  scale: new Vector3(0.9418291449546814, 0.8075641393661499, 0.07873177528381348)
})
wallPlainGlass8.addComponentOrReplace(transform230)

const wallPlainGlass13 = new Entity('wallPlainGlass13')
engine.addEntity(wallPlainGlass13)
wallPlainGlass13.setParent(_scene)
wallPlainGlass13.addComponentOrReplace(gltfShape3)
const transform231 = new Transform({
  position: new Vector3(1.9488840103149414, 5.935974597930908, 15.920327186584473),
  rotation: new Quaternion(0.5, -0.5, 0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(0.7487815022468567, 0.46901389956474304, 0.07920855283737183)
})
wallPlainGlass13.addComponentOrReplace(transform231)

const wallPlainGlass14 = new Entity('wallPlainGlass14')
engine.addEntity(wallPlainGlass14)
wallPlainGlass14.setParent(_scene)
wallPlainGlass14.addComponentOrReplace(gltfShape3)
const transform232 = new Transform({
  position: new Vector3(4.609211444854736, 4.152759075164795, 15.89996337890625),
  rotation: new Quaternion(0.3333278298377991, -0.6236125230789185, 0.33332788944244385, 0.6236124634742737),
  scale: new Vector3(0.7323540449142456, 0.801763117313385, 0.07920855283737183)
})
wallPlainGlass14.addComponentOrReplace(transform232)

const ropeLight = new Entity('ropeLight')
engine.addEntity(ropeLight)
ropeLight.setParent(_scene)
const transform233 = new Transform({
  position: new Vector3(8.055947303771973, 0, 8.455784797668457),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ropeLight.addComponentOrReplace(transform233)

const ropeLight2 = new Entity('ropeLight2')
engine.addEntity(ropeLight2)
ropeLight2.setParent(_scene)
const transform234 = new Transform({
  position: new Vector3(8.055947303771973, 0, 8.455784797668457),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
ropeLight2.addComponentOrReplace(transform234)

const clickArea = new Entity('clickArea')
engine.addEntity(clickArea)
clickArea.setParent(_scene)
const transform235 = new Transform({
  position: new Vector3(14.440803527832031, 0.5836243629455566, 15.455707550048828),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 0.28335729241371155)
})
clickArea.addComponentOrReplace(transform235)

const spotlightStripLight = new Entity('spotlightStripLight')
engine.addEntity(spotlightStripLight)
spotlightStripLight.setParent(_scene)
const transform236 = new Transform({
  position: new Vector3(4.007336616516113, 15.809417724609375, 0.6177804470062256),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.8310465812683105, 1, 2.6922028064727783)
})
spotlightStripLight.addComponentOrReplace(transform236)

const spotlightStripLight2 = new Entity('spotlightStripLight2')
engine.addEntity(spotlightStripLight2)
spotlightStripLight2.setParent(_scene)
const transform237 = new Transform({
  position: new Vector3(4.007336616516113, 15.809417724609375, 1.8493874073028564),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.831047534942627, 1, 2.6922028064727783)
})
spotlightStripLight2.addComponentOrReplace(transform237)

const spotlightStripLight3 = new Entity('spotlightStripLight3')
engine.addEntity(spotlightStripLight3)
spotlightStripLight3.setParent(_scene)
const transform238 = new Transform({
  position: new Vector3(10.76085090637207, 15.809417724609375, 0.6177804470062256),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.831047534942627, 1, 2.6922030448913574)
})
spotlightStripLight3.addComponentOrReplace(transform238)

const spotlightStripLight4 = new Entity('spotlightStripLight4')
engine.addEntity(spotlightStripLight4)
spotlightStripLight4.setParent(_scene)
const transform239 = new Transform({
  position: new Vector3(10.76085090637207, 15.809417724609375, 1.8493874073028564),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.8310484886169434, 1, 2.6922035217285156)
})
spotlightStripLight4.addComponentOrReplace(transform239)

const spotlightStripLight5 = new Entity('spotlightStripLight5')
engine.addEntity(spotlightStripLight5)
spotlightStripLight5.setParent(_scene)
const transform240 = new Transform({
  position: new Vector3(4.568098545074463, 17.501203536987305, 1.8493874073028564),
  rotation: new Quaternion(-0.5, 0.5, 0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(3.8310489654541016, 1.0000003576278687, 1.2014753818511963)
})
spotlightStripLight5.addComponentOrReplace(transform240)

const spotlightStripLight6 = new Entity('spotlightStripLight6')
engine.addEntity(spotlightStripLight6)
spotlightStripLight6.setParent(_scene)
const transform241 = new Transform({
  position: new Vector3(4.568098545074463, 17.501203536987305, 0.5754129886627197),
  rotation: new Quaternion(-0.5, 0.5, 0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(3.8310489654541016, 1.0000003576278687, 1.2014753818511963)
})
spotlightStripLight6.addComponentOrReplace(transform241)

const spotlightStripLight7 = new Entity('spotlightStripLight7')
engine.addEntity(spotlightStripLight7)
spotlightStripLight7.setParent(_scene)
const transform242 = new Transform({
  position: new Vector3(11.493077278137207, 17.501203536987305, 0.3294488787651062),
  rotation: new Quaternion(-0.48001325130462646, -0.5192180871963501, -0.5192179083824158, 0.4800131916999817),
  scale: new Vector3(3.8310446739196777, 1.0000005960464478, 1.2014744281768799)
})
spotlightStripLight7.addComponentOrReplace(transform242)

const spotlightStripLight8 = new Entity('spotlightStripLight8')
engine.addEntity(spotlightStripLight8)
spotlightStripLight8.setParent(_scene)
const transform243 = new Transform({
  position: new Vector3(11.476956367492676, 17.501203536987305, 1.5737097263336182),
  rotation: new Quaternion(-0.48001325130462646, -0.5192180871963501, -0.5192179083824158, 0.4800131916999817),
  scale: new Vector3(3.8310482501983643, 1.000000238418579, 1.2014744281768799)
})
spotlightStripLight8.addComponentOrReplace(transform243)

const spotlightStripLight9 = new Entity('spotlightStripLight9')
engine.addEntity(spotlightStripLight9)
spotlightStripLight9.setParent(_scene)
const transform244 = new Transform({
  position: new Vector3(4.007336616516113, 17.465612411499023, 3.9719035625457764),
  rotation: new Quaternion(-0.4166937470436096, 0.5712847709655762, -0.4166937470436096, 0.5712848901748657),
  scale: new Vector3(3.831054449081421, 1.0000005960464478, 2.6922054290771484)
})
spotlightStripLight9.addComponentOrReplace(transform244)

const spotlightStripLight10 = new Entity('spotlightStripLight10')
engine.addEntity(spotlightStripLight10)
spotlightStripLight10.setParent(_scene)
const transform245 = new Transform({
  position: new Vector3(10.76085090637207, 17.465612411499023, 3.971903085708618),
  rotation: new Quaternion(-0.4166937470436096, 0.5712847709655762, -0.4166937470436096, 0.5712848901748657),
  scale: new Vector3(3.8310554027557373, 1.0000005960464478, 2.6922056674957275)
})
spotlightStripLight10.addComponentOrReplace(transform245)

const spotlightStripLight11 = new Entity('spotlightStripLight11')
engine.addEntity(spotlightStripLight11)
spotlightStripLight11.setParent(_scene)
const transform246 = new Transform({
  position: new Vector3(4.568098545074463, 17.501203536987305, 3.1562769412994385),
  rotation: new Quaternion(-0.5, 0.5, 0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(3.8310489654541016, 1.0000003576278687, 1.2014753818511963)
})
spotlightStripLight11.addComponentOrReplace(transform246)

const spotlightStripLight12 = new Entity('spotlightStripLight12')
engine.addEntity(spotlightStripLight12)
spotlightStripLight12.setParent(_scene)
const transform247 = new Transform({
  position: new Vector3(4.007336616516113, 15.809417724609375, 3.1562769412994385),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.8310494422912598, 1, 2.6922037601470947)
})
spotlightStripLight12.addComponentOrReplace(transform247)

const spotlightStripLight13 = new Entity('spotlightStripLight13')
engine.addEntity(spotlightStripLight13)
spotlightStripLight13.setParent(_scene)
const transform248 = new Transform({
  position: new Vector3(10.76085090637207, 15.809417724609375, 3.1562769412994385),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.831050395965576, 1, 2.692204475402832)
})
spotlightStripLight13.addComponentOrReplace(transform248)

const spotlightStripLight14 = new Entity('spotlightStripLight14')
engine.addEntity(spotlightStripLight14)
spotlightStripLight14.setParent(_scene)
const transform249 = new Transform({
  position: new Vector3(11.476956367492676, 17.501203536987305, 2.8805992603302),
  rotation: new Quaternion(-0.48001325130462646, -0.5192180871963501, -0.5192179083824158, 0.4800131916999817),
  scale: new Vector3(3.8310487270355225, 1.0000004768371582, 1.2014744281768799)
})
spotlightStripLight14.addComponentOrReplace(transform249)

const triggerTileSquare = new Entity('triggerTileSquare')
engine.addEntity(triggerTileSquare)
triggerTileSquare.setParent(_scene)
const transform250 = new Transform({
  position: new Vector3(7.793424606323242, 16.16021728515625, 1.8074619770050049),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.771422386169434, 1.9349712133407593, 1.5736931562423706)
})
triggerTileSquare.addComponentOrReplace(transform250)

const redNeonTube30 = new Entity('redNeonTube30')
engine.addEntity(redNeonTube30)
redNeonTube30.setParent(_scene)
redNeonTube30.addComponentOrReplace(gltfShape)
const transform251 = new Transform({
  position: new Vector3(8.20470905303955, 16.380830764770508, 3.4041748046875),
  rotation: new Quaternion(0.5002247095108032, 0.5002247095108032, 0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(0.2779654264450073, -1.0000079870224, 101.54225158691406)
})
redNeonTube30.addComponentOrReplace(transform251)

const tablet = new Entity('tablet')
engine.addEntity(tablet)
tablet.setParent(_scene)
const transform252 = new Transform({
  position: new Vector3(2, 1.7673053741455078, 14),
  rotation: new Quaternion(-0.5555703639984131, 2.988698579662859e-16, 6.622912707143769e-8, 0.8314695358276367),
  scale: new Vector3(1, 1, 1)
})
tablet.addComponentOrReplace(transform252)

const redNeonTube12 = new Entity('redNeonTube12')
engine.addEntity(redNeonTube12)
redNeonTube12.setParent(_scene)
redNeonTube12.addComponentOrReplace(gltfShape)
const transform253 = new Transform({
  position: new Vector3(14.779011726379395, 16.380830764770508, 9.2110595703125),
  rotation: new Quaternion(-0.00031778213451616466, -0.00031793114612810314, -0.7071068286895752, -0.7071066498756409),
  scale: new Vector3(0.2779657244682312, -1.0000083446502686, 87.66127014160156)
})
redNeonTube12.addComponentOrReplace(transform253)

const redNeonTube11 = new Entity('redNeonTube11')
engine.addEntity(redNeonTube11)
redNeonTube11.setParent(_scene)
redNeonTube11.addComponentOrReplace(gltfShape)
const transform254 = new Transform({
  position: new Vector3(1.1729881763458252, 16.380830764770508, 9.2110595703125),
  rotation: new Quaternion(-0.00031778213451616466, -0.00031793114612810314, -0.7071068286895752, -0.7071066498756409),
  scale: new Vector3(0.277965784072876, -1.000008463859558, 87.66126251220703)
})
redNeonTube11.addComponentOrReplace(transform254)

const wallPlainBlack = new Entity('wallPlainBlack')
engine.addEntity(wallPlainBlack)
wallPlainBlack.setParent(_scene)
const transform255 = new Transform({
  position: new Vector3(15.988273620605469, 0, 15.856740951538086),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.9600324630737305, 4.0410895347595215, 0.008951783180236816)
})
wallPlainBlack.addComponentOrReplace(transform255)
const gltfShape4 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
wallPlainBlack.addComponentOrReplace(gltfShape4)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape5 = new GLTFShape("62b9b3e0-f0d9-4693-b8ee-fee3c20ca29c/FloorBasePebbles_01/FloorBasePebbles_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
entity.addComponentOrReplace(gltfShape5)
const transform256 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform256)

const wallPlainBlack2 = new Entity('wallPlainBlack2')
engine.addEntity(wallPlainBlack2)
wallPlainBlack2.setParent(_scene)
wallPlainBlack2.addComponentOrReplace(gltfShape4)
const transform257 = new Transform({
  position: new Vector3(16, 0.027001380920410156, 0),
  rotation: new Quaternion(0.7070469260215759, -1.0690224818028703e-16, -8.428657594095057e-8, 0.7071666717529297),
  scale: new Vector3(7.991976261138916, 3.991537094116211, 0.005896833725273609)
})
wallPlainBlack2.addComponentOrReplace(transform257)

const wallPlainBlack3 = new Entity('wallPlainBlack3')
engine.addEntity(wallPlainBlack3)
wallPlainBlack3.setParent(_scene)
wallPlainBlack3.addComponentOrReplace(gltfShape4)
const transform258 = new Transform({
  position: new Vector3(15.854537963867188, 0, 15.948465347290039),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(7.960044860839844, 4.897975444793701, 0.008951795287430286)
})
wallPlainBlack3.addComponentOrReplace(transform258)

const wallPlainBlack4 = new Entity('wallPlainBlack4')
engine.addEntity(wallPlainBlack4)
wallPlainBlack4.setParent(_scene)
wallPlainBlack4.addComponentOrReplace(gltfShape4)
const transform259 = new Transform({
  position: new Vector3(0.17310616374015808, 0, 15.948465347290039),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(7.960062026977539, 4.894866943359375, 0.00895181205123663)
})
wallPlainBlack4.addComponentOrReplace(transform259)

const ropeLight3 = new Entity('ropeLight3')
engine.addEntity(ropeLight3)
ropeLight3.setParent(_scene)
const transform260 = new Transform({
  position: new Vector3(15.826189041137695, 3.9757328033447266, 7.880542755126953),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.3182239532470703, 1, 1.0000016689300537)
})
ropeLight3.addComponentOrReplace(transform260)

const ropeLight4 = new Entity('ropeLight4')
engine.addEntity(ropeLight4)
ropeLight4.setParent(_scene)
const transform261 = new Transform({
  position: new Vector3(15.7756986618042, 0.011042594909667969, 8.057684898376465),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.3232512474060059, 1, 1.0000014305114746)
})
ropeLight4.addComponentOrReplace(transform261)

const ropeLight5 = new Entity('ropeLight5')
engine.addEntity(ropeLight5)
ropeLight5.setParent(_scene)
const transform262 = new Transform({
  position: new Vector3(0.2159409523010254, 0.011042594909667969, 8.057684898376465),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.3232519626617432, 1, 1.0000016689300537)
})
ropeLight5.addComponentOrReplace(transform262)

const ropeLight6 = new Entity('ropeLight6')
engine.addEntity(ropeLight6)
ropeLight6.setParent(_scene)
const transform263 = new Transform({
  position: new Vector3(8.010736465454102, 0.011042594909667969, 15.764843940734863),
  rotation: new Quaternion(1.5675276425182808e-14, 0.001014113426208496, -1.2087895961965245e-10, 0.9999995231628418),
  scale: new Vector3(1.3232526779174805, 1, 1.0000019073486328)
})
ropeLight6.addComponentOrReplace(transform263)

const wallPlainBlack5 = new Entity('wallPlainBlack5')
engine.addEntity(wallPlainBlack5)
wallPlainBlack5.setParent(_scene)
wallPlainBlack5.addComponentOrReplace(gltfShape4)
const transform264 = new Transform({
  position: new Vector3(15.947586059570312, 0, 0.2359142303466797),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.133108139038086, 4.675718307495117, 0.008951783180236816)
})
wallPlainBlack5.addComponentOrReplace(transform264)

const wallPlainBlack6 = new Entity('wallPlainBlack6')
engine.addEntity(wallPlainBlack6)
wallPlainBlack6.setParent(_scene)
wallPlainBlack6.addComponentOrReplace(gltfShape4)
const transform265 = new Transform({
  position: new Vector3(6.55967903137207, 0, 0.2359153777360916),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.2835583686828613, 4.0410895347595215, 0.008951783180236816)
})
wallPlainBlack6.addComponentOrReplace(transform265)

const blockFloorLight = new Entity('blockFloorLight')
engine.addEntity(blockFloorLight)
blockFloorLight.setParent(_scene)
const transform266 = new Transform({
  position: new Vector3(15.709817886352539, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 15.622431755065918, 1)
})
blockFloorLight.addComponentOrReplace(transform266)

const blockFloorLight2 = new Entity('blockFloorLight2')
engine.addEntity(blockFloorLight2)
blockFloorLight2.setParent(_scene)
const transform267 = new Transform({
  position: new Vector3(0.5096994638442993, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 15.622431755065918, 1)
})
blockFloorLight2.addComponentOrReplace(transform267)

const ropeLight7 = new Entity('ropeLight7')
engine.addEntity(ropeLight7)
ropeLight7.setParent(_scene)
const transform268 = new Transform({
  position: new Vector3(15.826189041137695, 7.891057968139648, 7.880542755126953),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.3182246685028076, 1, 1.0000019073486328)
})
ropeLight7.addComponentOrReplace(transform268)

const ropeLight8 = new Entity('ropeLight8')
engine.addEntity(ropeLight8)
ropeLight8.setParent(_scene)
const transform269 = new Transform({
  position: new Vector3(15.826189041137695, 12.2228422164917, 7.880542755126953),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.3182257413864136, 1, 1.0000022649765015)
})
ropeLight8.addComponentOrReplace(transform269)

const ropeLight9 = new Entity('ropeLight9')
engine.addEntity(ropeLight9)
ropeLight9.setParent(_scene)
const transform270 = new Transform({
  position: new Vector3(0.20187899470329285, 3.9757328033447266, 7.880542755126953),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.318225383758545, 1, 1.000002145767212)
})
ropeLight9.addComponentOrReplace(transform270)

const ropeLight10 = new Entity('ropeLight10')
engine.addEntity(ropeLight10)
ropeLight10.setParent(_scene)
const transform271 = new Transform({
  position: new Vector3(0.20187899470329285, 7.891057968139648, 7.880542755126953),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.3182260990142822, 1, 1.000002384185791)
})
ropeLight10.addComponentOrReplace(transform271)

const ropeLight11 = new Entity('ropeLight11')
engine.addEntity(ropeLight11)
ropeLight11.setParent(_scene)
const transform272 = new Transform({
  position: new Vector3(0.20187899470329285, 12.2228422164917, 7.880542755126953),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.3182271718978882, 1, 1.0000027418136597)
})
ropeLight11.addComponentOrReplace(transform272)

const blockFloorLight3 = new Entity('blockFloorLight3')
engine.addEntity(blockFloorLight3)
blockFloorLight3.setParent(_scene)
const transform273 = new Transform({
  position: new Vector3(0.509699821472168, 0, 0.35021543502807617),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 15.622431755065918, 1)
})
blockFloorLight3.addComponentOrReplace(transform273)

const ropeLight12 = new Entity('ropeLight12')
engine.addEntity(ropeLight12)
ropeLight12.setParent(_scene)
const transform274 = new Transform({
  position: new Vector3(8.010736465454102, 4.023251533508301, 15.764843940734863),
  rotation: new Quaternion(1.5675276425182808e-14, 0.001014113426208496, -1.2087895961965245e-10, 0.9999995231628418),
  scale: new Vector3(1.3232526779174805, 1, 1.0000019073486328)
})
ropeLight12.addComponentOrReplace(transform274)

const ropeLight13 = new Entity('ropeLight13')
engine.addEntity(ropeLight13)
ropeLight13.setParent(_scene)
const transform275 = new Transform({
  position: new Vector3(8.010736465454102, 7.9348530769348145, 15.764843940734863),
  rotation: new Quaternion(1.5675276425182808e-14, 0.001014113426208496, -1.2087895961965245e-10, 0.9999995231628418),
  scale: new Vector3(1.3232526779174805, 1, 1.0000019073486328)
})
ropeLight13.addComponentOrReplace(transform275)

const ropeLight14 = new Entity('ropeLight14')
engine.addEntity(ropeLight14)
ropeLight14.setParent(_scene)
const transform276 = new Transform({
  position: new Vector3(8.010736465454102, 12.224365234375, 15.764843940734863),
  rotation: new Quaternion(1.5675276425182808e-14, 0.001014113426208496, -1.2087895961965245e-10, 0.9999995231628418),
  scale: new Vector3(1.3232526779174805, 1, 1.0000019073486328)
})
ropeLight14.addComponentOrReplace(transform276)

const twitterLink = new Entity('twitterLink')
engine.addEntity(twitterLink)
twitterLink.setParent(_scene)
const transform277 = new Transform({
  position: new Vector3(8.080353736877441, 0, 8.359882354736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
twitterLink.addComponentOrReplace(transform277)

const galleryInfoGlass = new Entity('galleryInfoGlass')
engine.addEntity(galleryInfoGlass)
galleryInfoGlass.setParent(_scene)
const transform278 = new Transform({
  position: new Vector3(9.118293762207031, 4.144164562225342, 0.5810461044311523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
galleryInfoGlass.addComponentOrReplace(transform278)

const galleryInfoGlass2 = new Entity('galleryInfoGlass2')
engine.addEntity(galleryInfoGlass2)
galleryInfoGlass2.setParent(_scene)
const transform279 = new Transform({
  position: new Vector3(9.118293762207031, 8.14279842376709, 0.5810461044311523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
galleryInfoGlass2.addComponentOrReplace(transform279)

const galleryInfoGlass3 = new Entity('galleryInfoGlass3')
engine.addEntity(galleryInfoGlass3)
galleryInfoGlass3.setParent(_scene)
const transform280 = new Transform({
  position: new Vector3(9.118293762207031, 12.170638084411621, 0.5810461044311523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
galleryInfoGlass3.addComponentOrReplace(transform280)

const blockFloorLight4 = new Entity('blockFloorLight4')
engine.addEntity(blockFloorLight4)
blockFloorLight4.setParent(_scene)
const transform281 = new Transform({
  position: new Vector3(15.709817886352539, 0, 0.31076622009277344),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 15.622431755065918, 1)
})
blockFloorLight4.addComponentOrReplace(transform281)

const triggerTileSciFi = new Entity('triggerTileSciFi')
engine.addEntity(triggerTileSciFi)
triggerTileSciFi.setParent(_scene)
const transform282 = new Transform({
  position: new Vector3(8, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
triggerTileSciFi.addComponentOrReplace(transform282)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
const script10 = new Script10()
const script11 = new Script11()
const script12 = new Script12()
const script13 = new Script13()
const script14 = new Script14()
const script15 = new Script15()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script10.init(options)
script11.init(options)
script12.init(options)
script13.init(options)
script14.init(options)
script15.init(options)
script1.spawn(plainText3, {"text":"HEARTBEAT","font":"SF_Heavy","color":"#FF0000"}, createChannel(channelId, plainText3, channelBus))
script1.spawn(plainText4, {"text":"OF SOCIETY","font":"SF_Heavy","color":"#00FF00"}, createChannel(channelId, plainText4, channelBus))
script1.spawn(plainText2, {"text":"IS THE","font":"SF_Heavy","color":"#FF0000"}, createChannel(channelId, plainText2, channelBus))
script2.spawn(nftPictureFrame, {"id":"3","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script2.spawn(nftPictureFrame2, {"id":"1","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script2.spawn(nftPictureFrame7, {"id":"3","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script2.spawn(nftPictureFrame8, {"id":"1","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))
script2.spawn(nftPictureFrame9, {"id":"3","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script2.spawn(nftPictureFrame10, {"id":"1","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script2.spawn(nftPictureFrame11, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame11, channelBus))
script2.spawn(nftPictureFrame12, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame12, channelBus))
script2.spawn(nftPictureFrame13, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame13, channelBus))
script2.spawn(nftPictureFrame14, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame14, channelBus))
script2.spawn(nftPictureFrame15, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame15, channelBus))
script2.spawn(nftPictureFrame16, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame16, channelBus))
script2.spawn(nftPictureFrame17, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame17, channelBus))
script2.spawn(nftPictureFrame18, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame18, channelBus))
script2.spawn(nftPictureFrame19, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame19, channelBus))
script2.spawn(nftPictureFrame20, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame20, channelBus))
script2.spawn(nftPictureFrame21, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame21, channelBus))
script2.spawn(nftPictureFrame22, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame22, channelBus))
script2.spawn(nftPictureFrame23, {"id":"141577","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame23, channelBus))
script2.spawn(nftPictureFrame24, {"id":"141577","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame24, channelBus))
script2.spawn(nftPictureFrame25, {"id":"141577","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame25, channelBus))
script2.spawn(nftPictureFrame26, {"id":"141577","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame26, channelBus))
script2.spawn(nftPictureFrame27, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame27, channelBus))
script2.spawn(nftPictureFrame28, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame28, channelBus))
script2.spawn(nftPictureFrame29, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame29, channelBus))
script2.spawn(nftPictureFrame30, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame30, channelBus))
script2.spawn(nftPictureFrame31, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame31, channelBus))
script2.spawn(nftPictureFrame32, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame32, channelBus))
script2.spawn(nftPictureFrame33, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame33, channelBus))
script2.spawn(nftPictureFrame34, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame34, channelBus))
script2.spawn(nftPictureFrame35, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame35, channelBus))
script2.spawn(nftPictureFrame36, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame36, channelBus))
script2.spawn(nftPictureFrame37, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame37, channelBus))
script2.spawn(nftPictureFrame38, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame38, channelBus))
script2.spawn(nftPictureFrame39, {"id":"141590","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame39, channelBus))
script2.spawn(nftPictureFrame40, {"id":"147259","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame40, channelBus))
script2.spawn(nftPictureFrame41, {"id":"141590","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame41, channelBus))
script2.spawn(nftPictureFrame42, {"id":"147259","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame42, channelBus))
script2.spawn(nftPictureFrame43, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame43, channelBus))
script2.spawn(nftPictureFrame44, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame44, channelBus))
script2.spawn(nftPictureFrame45, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame45, channelBus))
script2.spawn(nftPictureFrame46, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame46, channelBus))
script2.spawn(nftPictureFrame47, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame47, channelBus))
script2.spawn(nftPictureFrame48, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame48, channelBus))
script2.spawn(nftPictureFrame49, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame49, channelBus))
script2.spawn(nftPictureFrame50, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame50, channelBus))
script2.spawn(nftPictureFrame51, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame51, channelBus))
script2.spawn(nftPictureFrame52, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame52, channelBus))
script2.spawn(nftPictureFrame53, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame53, channelBus))
script2.spawn(nftPictureFrame54, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame54, channelBus))
script2.spawn(nftPictureFrame55, {"id":"3","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame55, channelBus))
script2.spawn(nftPictureFrame56, {"id":"1","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame56, channelBus))
script2.spawn(nftPictureFrame57, {"id":"1","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame57, channelBus))
script2.spawn(nftPictureFrame58, {"id":"3","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame58, channelBus))
script2.spawn(nftPictureFrame59, {"id":"1","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame59, channelBus))
script2.spawn(nftPictureFrame60, {"id":"3","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame60, channelBus))
script2.spawn(nftPictureFrame61, {"id":"1","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame61, channelBus))
script2.spawn(nftPictureFrame62, {"id":"3","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame62, channelBus))
script2.spawn(nftPictureFrame63, {"id":"1","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame63, channelBus))
script2.spawn(nftPictureFrame64, {"id":"3","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame64, channelBus))
script1.spawn(plainText5, {"text":"THE STAGE","font":"SF_Heavy","color":"#FF0000"}, createChannel(channelId, plainText5, channelBus))
script3.spawn(imageCubeC2, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC2, channelBus))
script3.spawn(imageCubeC, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC, channelBus))
script3.spawn(imageCubeC4, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC4, channelBus))
script3.spawn(imageCubeC5, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC5, channelBus))
script3.spawn(imageCubeC6, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC6, channelBus))
script3.spawn(imageCubeC7, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC7, channelBus))
script3.spawn(imageCubeC8, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC8, channelBus))
script3.spawn(imageCubeC9, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC9, channelBus))
script3.spawn(imageCubeC10, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC10, channelBus))
script3.spawn(imageCubeC11, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC11, channelBus))
script3.spawn(imageCubeC12, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC12, channelBus))
script3.spawn(imageCubeC13, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC13, channelBus))
script3.spawn(imageCubeC14, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC14, channelBus))
script3.spawn(imageCubeC15, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC15, channelBus))
script3.spawn(imageCubeC16, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC16, channelBus))
script3.spawn(imageCubeC17, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC17, channelBus))
script3.spawn(imageCubeC18, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC18, channelBus))
script3.spawn(imageCubeC19, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC19, channelBus))
script3.spawn(imageCubeC20, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC20, channelBus))
script3.spawn(imageCubeC21, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC21, channelBus))
script3.spawn(imageCubeC22, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC22, channelBus))
script3.spawn(imageCubeC23, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC23, channelBus))
script3.spawn(imageCubeC24, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC24, channelBus))
script3.spawn(imageCubeC25, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC25, channelBus))
script3.spawn(imageCubeC26, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC26, channelBus))
script3.spawn(imageCubeC27, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC27, channelBus))
script3.spawn(imageCubeC28, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC28, channelBus))
script3.spawn(imageCubeC29, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC29, channelBus))
script3.spawn(imageCubeC30, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC30, channelBus))
script3.spawn(imageCubeC31, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC31, channelBus))
script3.spawn(imageCubeC32, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC32, channelBus))
script3.spawn(imageCubeC33, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC33, channelBus))
script3.spawn(imageCubeC34, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC34, channelBus))
script3.spawn(imageCubeC35, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC35, channelBus))
script3.spawn(imageCubeC36, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC36, channelBus))
script3.spawn(imageCubeC37, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC37, channelBus))
script3.spawn(imageCubeC38, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC38, channelBus))
script3.spawn(imageCubeC39, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC39, channelBus))
script3.spawn(imageCubeC42, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC42, channelBus))
script3.spawn(imageCubeC43, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC43, channelBus))
script3.spawn(imageCubeC45, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC45, channelBus))
script3.spawn(imageCubeC46, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC46, channelBus))
script3.spawn(imageCubeC48, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC48, channelBus))
script3.spawn(imageCubeC49, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC49, channelBus))
script3.spawn(imageCubeC51, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC51, channelBus))
script3.spawn(imageCubeC52, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC52, channelBus))
script3.spawn(imageCubeC53, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC53, channelBus))
script3.spawn(imageCubeC54, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC54, channelBus))
script3.spawn(imageCubeC55, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC55, channelBus))
script3.spawn(imageCubeC56, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC56, channelBus))
script3.spawn(imageCubeC57, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC57, channelBus))
script3.spawn(imageCubeC58, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC58, channelBus))
script3.spawn(imageCubeC59, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC59, channelBus))
script3.spawn(imageCubeC60, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC60, channelBus))
script3.spawn(imageCubeC61, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC61, channelBus))
script3.spawn(imageCubeC66, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC66, channelBus))
script3.spawn(imageCubeC67, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC67, channelBus))
script3.spawn(imageCubeC68, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC68, channelBus))
script3.spawn(imageCubeC69, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC69, channelBus))
script3.spawn(imageCubeC70, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC70, channelBus))
script3.spawn(imageCubeC71, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC71, channelBus))
script3.spawn(imageCubeC72, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC72, channelBus))
script3.spawn(imageCubeC73, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC73, channelBus))
script4.spawn(radioCyberpunk, {"startOn":false,"volume":1,"onClickText":"THEME TIME RADIO HOUR [EP - TIME]","onClick":[{"entityName":"radioCyberpunk","actionId":"toggle","values":{}}],"customStation":"https://ipfs.io/ipfs/QmRKvoMxjEPB13E4pSct7bnLniMbTWaXa7CvUofRXBTh84?filename=Theme%20Time%20Radio%20Hour%20015%20-%20Episode%2015_%20Eyes.mp3"}, createChannel(channelId, radioCyberpunk, channelBus))
script1.spawn(plainText6, {"text":"THEATER\nELEVATOR","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText6, channelBus))
script5.spawn(signpostDirections, {"textTop":"AUDIENCE","textLower":"PERFORMERS","fontSize":20}, createChannel(channelId, signpostDirections, channelBus))
script6.spawn(verticalPlatform, {"distance":120,"speed":6,"autoStart":false,"onReachEnd":[{"entityName":"verticalPlatform","actionId":"goToStart","values":{}}],"onReachStart":[]}, createChannel(channelId, verticalPlatform, channelBus))
script3.spawn(imageCubeC3, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC3, channelBus))
script3.spawn(imageCubeC40, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC40, channelBus))
script3.spawn(imageCubeC41, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC41, channelBus))
script1.spawn(plainText, {"text":"POETRY","font":"SF_Heavy","color":"#FF0000"}, createChannel(channelId, plainText, channelBus))
script7.spawn(ropeLight, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight, channelBus))
script7.spawn(ropeLight2, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight2, channelBus))
script8.spawn(clickArea, {"enabled":true,"onClickText":"POETRY THEATER","button":"POINTER","onClick":[]}, createChannel(channelId, clickArea, channelBus))
script9.spawn(spotlightStripLight, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight, channelBus))
script9.spawn(spotlightStripLight2, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight2, channelBus))
script9.spawn(spotlightStripLight3, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight3, channelBus))
script9.spawn(spotlightStripLight4, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight4, channelBus))
script9.spawn(spotlightStripLight5, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight5, channelBus))
script9.spawn(spotlightStripLight6, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight6, channelBus))
script9.spawn(spotlightStripLight7, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight7, channelBus))
script9.spawn(spotlightStripLight8, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight8, channelBus))
script9.spawn(spotlightStripLight9, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight9, channelBus))
script9.spawn(spotlightStripLight10, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight10, channelBus))
script9.spawn(spotlightStripLight11, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight11, channelBus))
script9.spawn(spotlightStripLight12, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight12, channelBus))
script9.spawn(spotlightStripLight13, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight13, channelBus))
script9.spawn(spotlightStripLight14, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight14, channelBus))
script10.spawn(triggerTileSquare, {"enabled":true,"onEnter":[{"entityName":"spotlightStripLight","actionId":"activate","values":{}},{"entityName":"spotlightStripLight2","actionId":"activate","values":{}},{"entityName":"spotlightStripLight3","actionId":"activate","values":{}},{"entityName":"spotlightStripLight4","actionId":"activate","values":{}},{"entityName":"spotlightStripLight5","actionId":"activate","values":{}},{"entityName":"spotlightStripLight6","actionId":"activate","values":{}},{"entityName":"spotlightStripLight7","actionId":"activate","values":{}},{"entityName":"spotlightStripLight9","actionId":"activate","values":{}},{"entityName":"spotlightStripLight10","actionId":"activate","values":{}},{"entityName":"spotlightStripLight11","actionId":"activate","values":{}},{"entityName":"spotlightStripLight12","actionId":"activate","values":{}},{"entityName":"spotlightStripLight13","actionId":"activate","values":{}}]}, createChannel(channelId, triggerTileSquare, channelBus))
script11.spawn(tablet, {"text":"Some text","fontSize":36}, createChannel(channelId, tablet, channelBus))
script7.spawn(ropeLight3, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight3, channelBus))
script7.spawn(ropeLight4, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight4, channelBus))
script7.spawn(ropeLight5, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight5, channelBus))
script7.spawn(ropeLight6, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight6, channelBus))
script12.spawn(blockFloorLight, {"startOn":false,"clickable":true}, createChannel(channelId, blockFloorLight, channelBus))
script12.spawn(blockFloorLight2, {"startOn":false,"clickable":true}, createChannel(channelId, blockFloorLight2, channelBus))
script7.spawn(ropeLight7, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight7, channelBus))
script7.spawn(ropeLight8, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight8, channelBus))
script7.spawn(ropeLight9, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight9, channelBus))
script7.spawn(ropeLight10, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight10, channelBus))
script7.spawn(ropeLight11, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight11, channelBus))
script12.spawn(blockFloorLight3, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight3, channelBus))
script7.spawn(ropeLight12, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight12, channelBus))
script7.spawn(ropeLight13, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight13, channelBus))
script7.spawn(ropeLight14, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight14, channelBus))
script13.spawn(twitterLink, {"url":"nfteye","bnw":true,"name":"POETIC ARTIFICIAL INTELLIGENCE"}, createChannel(channelId, twitterLink, channelBus))
script14.spawn(galleryInfoGlass, {"text":"FLOOR 1\n@ARTIST\n#PROJECT\n^PRICE","fontSize":7,"font":"SF_Heavy","color":"#000000"}, createChannel(channelId, galleryInfoGlass, channelBus))
script14.spawn(galleryInfoGlass2, {"text":"FLOOR 2\n@ARTIST\n#PROJECT\n^PRICE","fontSize":7,"font":"SF_Heavy","color":"#000000"}, createChannel(channelId, galleryInfoGlass2, channelBus))
script14.spawn(galleryInfoGlass3, {"text":"FLOOR 3\n@ARTIST\n#PROJECT\n^PRICE","fontSize":7,"font":"SF_Heavy","color":"#000000"}, createChannel(channelId, galleryInfoGlass3, channelBus))
script12.spawn(blockFloorLight4, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight4, channelBus))
script15.spawn(triggerTileSciFi, {"enabled":true,"onEnter":[{"entityName":"blockFloorLight","actionId":"activate","values":{}},{"entityName":"blockFloorLight2","actionId":"activate","values":{}}]}, createChannel(channelId, triggerTileSciFi, channelBus))