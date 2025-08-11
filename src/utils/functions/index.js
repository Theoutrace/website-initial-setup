/**
 * Export all utility functions for easy importing
 * Usage: import { copyToClipboard, isValidEmail } from '@/utils/functions';
 */

export * from './helpers';
export * from './client-api-helper';

// Re-export commonly used Lodash functions for convenience
export {
  debounce as _debounce,      // Alternative to our custom debounce
  throttle as _throttle,      // Alternative to our custom throttle
  cloneDeep as _cloneDeep,    // Alternative to our custom deepClone
  isEmpty as _isEmpty,        // Alternative to our custom isEmpty
  isEqual,                    // Deep equality comparison
  merge,                      // Deep merge objects
  pick,                       // Pick specific properties from object
  omit,                       // Omit specific properties from object
  uniq,                       // Remove duplicates (alternative to our removeDuplicates)
  chunk,                      // Split array into chunks
  flatten,                    // Flatten nested arrays
  orderBy,                    // Sort array by multiple criteria
  groupBy as _groupBy,        // Alternative to our custom groupBy
  keyBy,                      // Create object keyed by property
  mapValues,                  // Transform object values
  pickBy,                     // Filter object by predicate
  get,                        // Safe property access
  set,                        // Safe property setting
  has,                        // Check if property exists
  capitalize as _capitalize,  // Alternative to our capitalizeWords
  camelCase,                  // Convert to camelCase
  kebabCase,                  // Convert to kebab-case
  snakeCase,                  // Convert to snake_case
  startCase,                  // Convert to Start Case
  times,                      // Execute function n times
  random as _random,          // Alternative to our randomNumber
  sample,                     // Get random array element
  sampleSize,                 // Get n random array elements
} from 'lodash';
