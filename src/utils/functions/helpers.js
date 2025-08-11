/**
 * Common utility functions for everyday use
 * Keep these simple, reusable, and well-tested
 */

// =============================================================================
// CLIPBOARD OPERATIONS
// =============================================================================

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - Success status
 */

export const copyToClipboard = async (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
      return true;
    }
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};

// =============================================================================
// VALIDATION FUNCTIONS
// =============================================================================

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} - Is valid email
 */

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (flexible format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - Is valid phone
 */

export const isValidPhone = (phone) => {
  // Accepts: +1234567890, (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890
  const phoneRegex = /^[\+]?[\d\s\(\)\-\.]{10,}$/;
  const digitsOnly = phone.replace(/\D/g, '');
  return phoneRegex.test(phone) && digitsOnly.length >= 10;
};

/**
 * Validate strong password
 * @param {string} password - Password to validate
 * @returns {object} - Validation result with details
 */

export const validatePassword = (password) => {
  const checks = {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const isValid = Object.values(checks).every(check => check);

  return {
    isValid,
    checks,
    strength: Object.values(checks).filter(Boolean).length
  };
};

/**
 * Check if string is not empty (handles whitespace)
 * @param {string} str - String to validate
 * @returns {boolean} - Is not empty
 */

export const isNotEmpty = (str) => {
  return typeof str === 'string' && str.trim().length > 0;
};

/**
 * Validate URL
 * @param {string} url - URL to validate
 * @returns {boolean} - Is valid URL
 */

export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// =============================================================================
// STRING MANIPULATION
// =============================================================================

/**
 * Capitalize first letter of each word
 * @param {string} str - String to capitalize
 * @returns {string} - Capitalized string
 */

export const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, char => char.toUpperCase());
};

/**
 * Generate random string
 * @param {number} length - Length of string
 * @param {boolean} includeSpecialChars - Include special characters
 * @returns {string} - Random string
 */

export const generateRandomString = (length = 8, includeSpecialChars = false) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  const allChars = includeSpecialChars ? chars + specialChars : chars;
  
  let result = '';
  for (let i = 0; i < length; i++) {
    result += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return result;
};

/**
 * Truncate string with ellipsis
 * @param {string} str - String to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated string
 */

export const truncateString = (str, maxLength = 100) => {
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength - 3) + '...';
};

/**
 * Remove special characters and spaces
 * @param {string} str - String to clean
 * @returns {string} - Cleaned string
 */

export const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
};

// =============================================================================
// NUMBER UTILITIES
// =============================================================================

/**
 * Format number as currency
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code
 * @param {string} locale - Locale for formatting
 * @returns {string} - Formatted currency
 */

export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

/**
 * Format number with commas
 * @param {number} num - Number to format
 * @returns {string} - Formatted number
 */

export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Generate random number between min and max
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} - Random number
 */

export const randomNumber = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// =============================================================================
// DATE UTILITIES
// =============================================================================

/**
 * Format date to readable string
 * @param {Date|string} date - Date to format
 * @param {string} locale - Locale for formatting
 * @returns {string} - Formatted date
 */

export const formatDate = (date, locale = 'en-US') => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Get relative time (e.g., "2 hours ago")
 * @param {Date|string} date - Date to compare
 * @returns {string} - Relative time string
 */

export const getRelativeTime = (date) => {
  const now = new Date();
  const diffInSeconds = Math.floor((now - new Date(date)) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit}${interval !== 1 ? 's' : ''} ago`;
    }
  }

  return 'Just now';
};

// =============================================================================
// ARRAY UTILITIES
// =============================================================================

/**
 * Remove duplicates from array
 * @param {Array} arr - Array to deduplicate
 * @returns {Array} - Array without duplicates
 */

export const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

/**
 * Shuffle array randomly
 * @param {Array} arr - Array to shuffle
 * @returns {Array} - Shuffled array
 */

export const shuffleArray = (arr) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Group array by key
 * @param {Array} arr - Array to group
 * @param {string} key - Key to group by
 * @returns {Object} - Grouped object
 */

export const groupBy = (arr, key) => {
  return arr.reduce((groups, item) => {
    const group = item[key];
    groups[group] = groups[group] || [];
    groups[group].push(item);
    return groups;
  }, {});
};

// =============================================================================
// OBJECT UTILITIES
// =============================================================================

/**
 * Deep clone object
 * @param {Object} obj - Object to clone
 * @returns {Object} - Cloned object
 */

export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  if (typeof obj === 'object') {
    const clonedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
};

/**
 * Check if object is empty
 * @param {Object} obj - Object to check
 * @returns {boolean} - Is empty
 */

export const isEmpty = (obj) => {
  if (obj == null) return true;
  if (Array.isArray(obj) || typeof obj === 'string') return obj.length === 0;
  return Object.keys(obj).length === 0;
};

// =============================================================================
// STORAGE UTILITIES
// =============================================================================

/**
 * Safe localStorage operations
 */

export const storage = {
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  },
  
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },
  
  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },
  
  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch {
      return false;
    }
  }
};

// =============================================================================
// DEBOUNCE & THROTTLE
// =============================================================================

/**
 * Debounce function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */

export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// =============================================================================
// BROWSER UTILITIES
// =============================================================================

/**
 * Detect if user is on mobile device
 * @returns {boolean} - Is mobile device
 */

export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * Scroll to top of page smoothly
 */

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Download data as file
 * @param {string} data - Data to download
 * @param {string} filename - Name of file
 * @param {string} type - MIME type
 */

export const downloadFile = (data, filename, type = 'text/plain') => {
  const blob = new Blob([data], { type });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
