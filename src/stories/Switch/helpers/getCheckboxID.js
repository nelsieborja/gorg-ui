import uuidv4 from 'uuid/v4';

/**
 * Generates non-empty ID prop value
 * @param {String} id
 */
function getCheckboxID(id) {
  return id || uuidv4();
}

export default getCheckboxID;
