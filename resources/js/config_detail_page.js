import { configKeys } from '../utils/config_keys.ts'

const configDetailJsonWrapper = document.querySelector('.configDetailJsonWrapper')
const configJson = JSON.parse(configDetailJsonWrapper.innerText.replaceAll("'", '"'))
const currentConfigKeys = configKeys[configJson.version] ?? undefined

export const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item)
}

function getRelevantValues(json, keys) {
  const relevantValues = {}

  keys.forEach((key) => {
    relevantValues[key] = json[key]
  })

  return relevantValues
}

// extract nested paths from object
function extractNestedPaths(source) {
  if (typeof source === 'object') {
    return Object.values(source).flatMap((value) => extractNestedPaths(value))
  } else return source
}

// extract paths and clean them up
function getExtractedPaths(paths) {
  const extracted = extractNestedPaths(paths)
  return extracted.map((path) => path.split('@')[0])
}

//convert a path to a nested object
function pathToObject(path) {
  const keys = path.split('/')
  return keys.reduceRight((acc, key) => ({ [key]: acc }), {})
}

// Merges an array of nested objects into a single nested object.
function mergeNestedObjects(objects) {
  return objects.reduce((acc, obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object' && obj[key] !== null && acc[key]) {
          acc[key] = mergeNestedObjects([acc[key], obj[key]])
        } else {
          acc[key] = obj[key]
        }
      }
    }
    return acc
  }, {})
}

function getFolderTreeObject(json, keys) {
  const treeBaseObject = getRelevantValues(json, keys)
  const extractedPaths = getExtractedPaths(treeBaseObject)

  const objects = extractedPaths.map((path) => pathToObject(path))
  const merged = mergeNestedObjects(objects)
  console.log('merged', merged)
}
getFolderTreeObject(configJson, currentConfigKeys)
