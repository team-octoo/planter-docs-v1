import { configKeys } from '../utils/config_keys.ts'

const configDetailJsonWrapper = document.querySelector('.configDetailJsonWrapper')
const treeWrapper = document.querySelector('#configTree')
const configJson = JSON.parse(configDetailJsonWrapper.innerText.replaceAll("'", '"'))
const currentConfigKeys = configKeys[configJson.version] ?? undefined
const copyConfigButton = document.querySelector('#copyConfigButton')
const copyConfigButtonLabel = document.querySelector('.copyConfigButtonLabel')

export const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item)
}

function getRelevantValues(json, keys) {
  const relevantValues = {}

  keys.forEach((key) => {
    if (json.hasOwnProperty(key)) {
      relevantValues[key] = json[key]
    }
  })

  return relevantValues
}

// extract nested paths from object
function extractNestedPaths(source) {
  if (typeof source === 'object') {
    return Object.values(source).flatMap((value) => extractNestedPaths(value))
  } else return source
}

// remove trailing slash from path
function removeTrailingSlash(path) {
  if (path.endsWith('/')) {
    return path.slice(0, -1)
  }
  return path
}

// extract paths and clean them up
function getExtractedPaths(paths) {
  const extracted = extractNestedPaths(paths).map((path) => path.split('@')[0])
  return extracted.map((path) => removeTrailingSlash(path))
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

function visualiseObjectAsList(obj) {
  const ul = document.createElement('ul')

  for (let key in obj) {
    const li = document.createElement('li')
    li.textContent = key

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      li.appendChild(visualiseObjectAsList(obj[key]))
    } else {
      const value = document.createElement('span')
      value.textContent = `: ${obj[key]}`
      li.appendChild(value)
    }

    ul.appendChild(li)
  }

  return ul
}

function getFolderTreeObject(json, keys) {
  const treeBaseObject = getRelevantValues(json, keys)
  const extractedPaths = getExtractedPaths(treeBaseObject)

  const objects = extractedPaths.map((path) => pathToObject(path))
  const merged = mergeNestedObjects(objects)

  treeWrapper.appendChild(visualiseObjectAsList(merged))
}

function changeButtonLabel() {
  copyConfigButtonLabel.textContent = 'Copied!'
  setTimeout(() => {
    copyConfigButtonLabel.textContent = 'Copy'
  }, 3000)
}

function addEventListeners() {
  copyConfigButton.addEventListener('click', () => {
    navigator.clipboard
      .writeText(JSON.stringify(configJson))
      .then(() => {
        changeButtonLabel()
      })
      .catch((error) => {
        console.error('Failed to copy config JSON to clipboard:', error)
      })
  })
}

getFolderTreeObject(configJson, currentConfigKeys)
addEventListeners()
