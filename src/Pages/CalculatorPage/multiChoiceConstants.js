import constants from "../../Localization"

export const metals = [constants.iron, constants.stainlessSteel, constants.aluminum, constants.copper, constants.brass, constants.bronze, constants.titan]

export const forms = [constants.armature, constants.IBeam, constants.square, constants.cilinder, constants.ribbon, constants.sheet, constants.bend, constants.pipe, constants.profile, constants.andgle, constants.flange, constants.channel, constants.hexahedron]

export const metalFormsMapping = {
    [constants.iron]: [constants.armature, constants.iBeam, constants.square, constants.cilinder, constants.ribbon, constants.sheet, constants.bend, constants.pipe, constants.profile, constants.andgle, constants.flange, constants.channel, constants.hexahedron],
    [constants.stainlessSteel]: [constants.square, constants.cilinder, constants.ribbon, constants.sheet, constants.bend, constants.pipe, constants.profile, constants.andgle, constants.flange, constants.channel, constants.hexahedron],
    [constants.aluminum]: [constants.square, constants.cilinder, constants.ribbon, constants.sheet, constants.pipe, constants.profile, constants.andgle, constants.hexahedron],
    [constants.copper]: [constants.cilinder, constants.ribbon, constants.sheet, constants.pipe],
    [constants.brass]: [constants.cilinder, constants.ribbon, constants.sheet, constants.pipe, constants.hexahedron],
    [constants.bronze]: [constants.cilinder, constants.ribbon, constants.sheet],
    [constants.titan]: [constants.cilinder, constants.ribbon, constants.sheet, constants.pipe, constants.profile]
}