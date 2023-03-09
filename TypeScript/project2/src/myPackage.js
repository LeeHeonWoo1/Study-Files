// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url 
 * @returns {boolean}
 */

export function init(config){
  return (true);
};

/**
 * Exits the program
 * @param {number} code 
 * @returns {number}
 */

export function exit(code){
  return (code + 1);
};

// ts-check와 같은 JSDoc을 이용하면 js파일에서도 typescript의 보호기능을 제공받을 수 있다. 보호기능을 활성화하고자 하는 함수 위에 /**를 입력하고 엔터키를 입력하면 자동으로 완성되고, 