/**
 * Create test stream
 * @param {string} url
 * @param {string} description
 * @param {boolean} [live]
 * @param {boolean} [abr]
 * @param {string[]} [blacklist_ua]
 * @returns {{url: string, description: string, live: boolean, abr: boolean, blacklist_ua: string[]}}
 */
function createTestStream (url, description, live = false, abr = true, blacklist_ua = []) {
  return {
    url,
    description,
    live,
    abr,
    blacklist_ua
  };
}

/**
 * @param {Object} target
 * @param {Object} [config]
 * @returns {{url: string, description: string, live: boolean, abr: boolean, blacklist_ua: string[]}}
 */
function createTestStreamWithConfig (target, config) {
  if (typeof target !== 'object') {
    throw new Error('target should be object');
  }

  const testStream = createTestStream(target.url, target.description, target.live, target.abr, target.blacklist_ua);

  testStream.config = config;

  return testStream;
}

module.exports = {
  bbb: createTestStreamWithConfig({
    url: 'https://d3i3iri2nd1wis.cloudfront.net/HLS/001/AU-SFB-SME-Final.m3u8',
    description: 'AU Finance'
  },
  {
    // try to workaround test failing because of slow seek on Chrome/Win10
    nudgeMaxRetry: 5
  }
  ),
  mfin: {
    'url': 'https://d3i3iri2nd1wis.cloudfront.net/HLS/002/Files_1586169836.m3u8',
    'description': 'MFIN',
    'live': false,
    'abr': false,
    'blacklist_ua': ['internet explorer']
  },
  corona: {
    'url': 'https://d3i3iri2nd1wis.cloudfront.net/HLS/003/Files_1586526450.m3u8',
    'description': 'Go Corona Go',
    'live': false,
    'abr': true
  },
  coronaHindi: {
    'url': 'https://d3i3iri2nd1wis.cloudfront.net/HLS/004/Files_1586526751.m3u8',
    'description': 'Go Corona Go - Hindi',
    'live': false,
    'abr': false,
    'blacklist_ua': ['internet explorer']
  },
  coronaKannada: {
    'url': 'https://d3i3iri2nd1wis.cloudfront.net/HLS/005/Files_1586529706.m3u8',
    'description': 'Go Corona Go - Kannada',
    'live': false,
    'abr': false,
    'blacklist_ua': ['internet explorer']
  }
};
