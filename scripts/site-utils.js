/*
  Site utilities for LiveForLive.
  This file includes helper functions, event utilities, formatter methods, and local storage helpers.
  It is designed to be a longer, comprehensive utility library for the website.
*/

window.LiveForLive = window.LiveForLive || {};

LiveForLive.utils = {
  debounce: function(fn, wait, immediate) {
    let timeout = null;
    return function() {
      const context = this;
      const args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) fn.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) fn.apply(context, args);
    };
  },

  throttle: function(fn, limit) {
    let lastFunc;
    let lastRan;
    return function() {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        fn.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
          if (Date.now() - lastRan >= limit) {
            fn.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  },

  isObject: function(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  },

  deepClone: function(source) {
    if (Array.isArray(source)) {
      return source.map(function(item) {
        return LiveForLive.utils.deepClone(item);
      });
    }
    if (LiveForLive.utils.isObject(source)) {
      var result = {};
      Object.keys(source).forEach(function(key) {
        result[key] = LiveForLive.utils.deepClone(source[key]);
      });
      return result;
    }
    return source;
  },

  merge: function(target, source) {
    if (!LiveForLive.utils.isObject(target) || !LiveForLive.utils.isObject(source)) {
      return source;
    }
    var merged = LiveForLive.utils.deepClone(target);
    Object.keys(source).forEach(function(key) {
      if (LiveForLive.utils.isObject(source[key])) {
        if (!target[key]) {
          merged[key] = LiveForLive.utils.deepClone(source[key]);
        } else {
          merged[key] = LiveForLive.utils.merge(target[key], source[key]);
        }
      } else {
        merged[key] = source[key];
      }
    });
    return merged;
  },

  formatTime: function(value) {
    if (typeof value !== 'string') {
      return value;
    }
    return value.replace(/^([0-9]{1,2}):([0-9]{2}) GMT$/i, function(full, hour, minute) {
      var parsed = parseInt(hour, 10);
      var period = parsed >= 12 ? 'PM' : 'AM';
      var hour12 = parsed % 12 || 12;
      return hour12 + ':' + minute + ' ' + period + ' GMT';
    });
  },

  createElement: function(tagName, options) {
    var element = document.createElement(tagName);
    if (!options) {
      return element;
    }
    if (options.className) {
      element.className = options.className;
    }
    if (options.id) {
      element.id = options.id;
    }
    if (options.html) {
      element.innerHTML = options.html;
    }
    if (options.text) {
      element.textContent = options.text;
    }
    if (options.attributes) {
      Object.keys(options.attributes).forEach(function(name) {
        element.setAttribute(name, options.attributes[name]);
      });
    }
    return element;
  },

  sortBy: function(array, key, direction) {
    var sorted = array.slice();
    sorted.sort(function(a, b) {
      var left = a[key];
      var right = b[key];
      if (typeof left === 'string') {
        left = left.toLowerCase();
      }
      if (typeof right === 'string') {
        right = right.toLowerCase();
      }
      if (left < right) {
        return direction === 'desc' ? 1 : -1;
      }
      if (left > right) {
        return direction === 'desc' ? -1 : 1;
      }
      return 0;
    });
    return sorted;
  },

  filterRecords: function(records, criteria) {
    if (!Array.isArray(records)) {
      return [];
    }
    var keys = Object.keys(criteria);
    return records.filter(function(record) {
      return keys.every(function(key) {
        if (!criteria[key]) {
          return true;
        }
        var value = record[key];
        if (typeof value === 'string') {
          return value.toLowerCase().indexOf(criteria[key].toLowerCase()) !== -1;
        }
        if (Array.isArray(value)) {
          return value.some(function(item) {
            return item.toLowerCase().indexOf(criteria[key].toLowerCase()) !== -1;
          });
        }
        return value === criteria[key];
      });
    });
  },

  toTitleCase: function(text) {
    if (typeof text !== 'string') {
      return text;
    }
    return text.replace(/\w\S*/g, function(word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  },

  store: {
    get: function(key, fallback) {
      try {
        var value = window.localStorage.getItem(key);
        if (value === null || value === undefined) {
          return fallback;
        }
        return JSON.parse(value);
      } catch (error) {
        console.warn('Storage get failed for', key, error);
        return fallback;
      }
    },
    set: function(key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.warn('Storage set failed for', key, error);
      }
    },
    remove: function(key) {
      try {
        window.localStorage.removeItem(key);
      } catch (error) {
        console.warn('Storage remove failed for', key, error);
      }
    }
  },

  buildAttributeString: function(attributes) {
    var html = '';
    Object.keys(attributes || {}).forEach(function(option) {
      html += ' ' + option + '="' + attributes[option] + '"';
    });
    return html;
  },

  createStreamMeta: function(tags) {
    if (!Array.isArray(tags)) {
      return '';
    }
    return tags.map(function(tag) {
      return '<span class="meta-tag">' + LiveForLive.utils.toTitleCase(tag) + '</span>';
    }).join('');
  },

  createNotificationList: function(notifications) {
    if (!Array.isArray(notifications) || !notifications.length) {
      return '<p class="empty-row">No notifications yet.</p>';
    }
    return notifications.map(function(notification) {
      return '<article class="notification-item">' +
        '<h3>' + notification.message + '</h3>' +
        '<small>' + notification.timestamp + '</small>' +
      '</article>';
    }).join('');
  },

  registerServiceWorker: function(scriptUrl) {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register(scriptUrl).then(function(registration) {
        console.info('Service worker registered:', registration.scope);
      }).catch(function(error) {
        console.warn('Service worker registration failed:', error);
      });
    }
  },

  ensureArray: function(value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (value === null || value === undefined) {
      return [];
    }
    return [value];
  },

  getUniqueValues: function(records, key) {
    if (!Array.isArray(records)) {
      return [];
    }
    var unique = {};
    return records.reduce(function(result, item) {
      var value = item[key];
      if (value !== undefined && value !== null) {
        if (!unique[value]) {
          unique[value] = true;
          result.push(value);
        }
      }
      return result;
    }, []);
  },

  renderScheduleTableBody: function(records) {
    var html = '';
    if (!records.length) {
      return '<tr><td colspan="6" class="empty-row">No events match your current filter.</td></tr>';
    }
    records.forEach(function(record) {
      html += '<tr>' +
        '<td>' + LiveForLive.utils.formatTime(record.time) + '</td>' +
        '<td>' + record.event + '</td>' +
        '<td>' + record.sport + '</td>' +
        '<td>' + record.league + '</td>' +
        '<td><span class="schedule-status ' + record.status.toLowerCase() + '">' + record.status + '</span></td>' +
        '<td><button class="button button-primary button-sm" data-stream="' + record.source + '">Watch</button></td>' +
      '</tr>';
    });
    return html;
  },

  decodeSafeHtml: function(value) {
    if (typeof value !== 'string') {
      return value;
    }
    var textArea = document.createElement('textarea');
    textArea.innerHTML = value;
    return textArea.value;
  },

  delay: function(ms) {
    return new Promise(function(resolve) {
      setTimeout(resolve, ms);
    });
  },

  randomId: function(prefix) {
    return (prefix || 'id') + '-' + Math.random().toString(36).slice(2, 12);
  },

  escapeHtml: function(text) {
    if (typeof text !== 'string') {
      return text;
    }
    return text.replace(/[&<>"']/g, function(match) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[match];
    });
  },

  copyToClipboard: function(text) {
    if (!navigator.clipboard) {
      return Promise.reject(new Error('Clipboard is not available'));
    }
    return navigator.clipboard.writeText(text);
  },

  safeFetch: function(url, options) {
    return fetch(url, options).catch(function(error) {
      console.warn('Fetch failed for', url, error);
      return null;
    });
  },

  matchesQuery: function(record, query) {
    query = String(query || '').toLowerCase();
    return Object.keys(record).some(function(key) {
      var value = record[key];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(query);
      }
      if (Array.isArray(value)) {
        return value.some(function(item) {
          return String(item).toLowerCase().includes(query);
        });
      }
      return false;
    });
  },

  init: function() {
    console.log('LiveForLive utilities initialized.');
  }
};

LiveForLive.utils.init();
